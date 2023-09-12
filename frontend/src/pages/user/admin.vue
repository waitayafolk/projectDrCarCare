<script>
import service from '@/plugins/axios';
import moment from "moment"
import { useRoute } from "vue-router";
import {formatNumber} from "chart.js/helpers";
import { thaiDateNotime }from "@/thaiDateNotime";
import { derlimiter } from "@/derlimiter"
import Swal from 'sweetalert2'

export default {
    name: "user-profile",
    computed: {
        moment() {
            return moment
        },
    },
    data() {
        return {
            loading : true ,
            derlimiter,
            thaiDateNotime,
            pagination : [] ,
            page : 1,
            route: useRoute(),
            show : false ,
            admin : {
                id : 0 , 
                role : 'admin' , 
                name : '' ,
                username : '' , 
                password : '' ,
                status : false , 
                code : ''
            } ,
            changPass : {
                id : 0 , 
                password  : '' ,
                confirm_password :'' ,
            } , 
            showPassword : false , 
            admins : [],
            // item : [{name : 'เจ้าของ' , role : "admin"} ,{name : 'พนักงาน' , role : "agent"}]
        };
    },
    methods: {
        formatNumber,
        async getData() {
            this.loading = true
            await service({ method: 'get', url: `/admins`, data: [], params: [] })
            .then((response) => {
                // console.log(response)
                this.admins = response.data
                this.loading = false
            })
            .catch((error) => {
                console.log(error);
            });
        },
        async saveDataPassword(){
            await service({ method: 'post', url: `/chang-password`, data: this.changPass , params: [] })
            .then((response) => {
                if(response.status == "success"){
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: response.message,
                    })
                    this.showPassword = false
                    this.getData()
                }
            })
            .catch((error) => {
                console.log(error);
                this.showPassword = false
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            });
            
        },  
        async saveData(){
            let data =  {
                id : this.admin.id ,
                role: this.admin.role,
                name: this.admin.name,
                username: this.admin.username,
                password: this.admin.password,
                status: this.admin.status ,
                code : this.admin.code
            }
            await service({ method: 'post', url: `/admins/save-admin`, data: data, params: [] })
            .then((response) => {
                if(response.status == "success"){
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: response.message,
                    })
                    this.show = false
                    this.getData()
                }
            })
            .catch((error) => {
                console.log(error);
                this.show = false
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            });
            
        },async openModal(){
            this.show = true
            this.service = {
                id : 0 , 
                role : 1 , 
                name : '' ,
                username : '' , 
                password : '' ,
                status : false , 
                code : ''
            }
        }
    },
    mounted() {
        this.getData()
    },
};
</script>

<template>
    <div>
        <div mode="out-in">
            <VRow class="mb-3">
                <VCol><h1>จัดการพนักงาน</h1></VCol>
                <VCol md="2" class="text-end">
                    <VBtn @click="openModal()">
                        <VIcon start icon="tabler-square-rounded-plus-filled"/>
                        เพิ่มพนักงาน
                    </VBtn>
                </VCol>
            </VRow>
        </div>
        <VCard>
            <div v-show="loading" class="v-overlay--absolute text-center w-100 h-100" style="background-color: rgba(255,255,255,.8); z-index: 9;">
                <VProgressLinear
                    indeterminate
                    color="primary"
                />
            </div>
            <VTable fixed-header density="compact" class="text-no-wrap">
                <thead>
                    <tr>
                        <th style="text-align: start;">ยูเซอร์</th>
                        <th style="text-align: start;">รหัส</th>
                        <th style="text-align: start;">ชื่อ - นามสกุล</th>
                        <th style="text-align: center;">ระดับการใช้งาน</th>
                        <th style="text-align: center;">สถานะ</th>
                        <th style="text-align: center;">วันที่สร้าง</th>
                        <th style="text-align: center;">แก้ไข</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item of admins">
                        <td style="text-align: start;">{{ item.username }}</td>
                        <td style="text-align: start;">{{ item.code }}</td>
                        <td style="text-align: start;">{{ item.name }}</td>
                        <td style="text-align: center;">
                            <div style="color: orange;" v-if="item.role == 'admin'"><VIcon start color="warning" icon="tabler-star-filled"/>เจ้าของ</div>
                            <div v-if="item.role != 'admin'">พนักงาน</div>
                        </td>
                        <td style="text-align: center;">
                            <div v-if="item.status == 'use'"><VChip color="success">เปิด</VChip></div>
                            <!-- <div v-if="item.status == false"><VChip color="error">ระงับการใช้งาน</VChip></div> -->
                        </td>
                        <td style="text-align: center;">
                            {{ thaiDateNotime(item.create_date) }}
                        </td>
                        <td style="text-align: center;">
                            <VRow>
                                <VCol cols="6" md="6">
                                    <VBtn size="small" color="primary" @click="show = true , admin = item">
                                        <VIcon start icon="tabler-edit"/> แก้ไข
                                    </VBtn>
                                </VCol>
                                <VCol cols="6" md="6">
                                    <VBtn size="small" color="primary" @click="showPassword = true , changPass.id = item.id">
                                        <VIcon start icon="tabler-edit"/> เปลี่ยนรหัสผ่าน
                                    </VBtn>
                                </VCol>
                            </VRow>
                        </td>
                    </tr>
                </tbody>
            </VTable>
            <div class="d-flex flex-column gap-6 px-4 mt-5">
                <VPagination
                    v-model="page"
                    :length="pagination.last_page"
                    :total-visible="20"
                    @click="getData"
                />
            </div>
        </VCard>
        <VDialog v-model="show" max-width="800">
            <DialogCloseBtn @click="show = false" />
            <VCard>
                <VCardTitle>
                    จัดการพนักงาน
                </VCardTitle>
                <VCardText>
                    <VRow>
                        <VCol cols="12" md="12">
                            <VSelect v-model="admin.role" :items="[
                                {name : 'ผู้จัดการ' , value : 'admin' } , 
                                {name : 'พนักงาน' , value : 'employee' }
                                ]" item-title="name" item-value="value" label="ระดับการใช้งาน" persistent-hint/>
                        </VCol>
                        <VCol cols="6" md="6">
                            <VTextField type="text" v-model="admin.code" label="รหัสพนักงาน" />
                        </VCol>
                        <VCol cols="6" md="6">
                            <VTextField type="text" v-model="admin.name" label="ชื่อ - นวมสกุล" />
                        </VCol>
                        <VCol cols="6" md="6">
                            <VTextField type="text" v-model="admin.username" label="Username" />
                        </VCol>
                        <VCol cols="6" md="6">
                            <VTextField type="password" v-model="admin.password" label="Password" />
                        </VCol>
                        <!-- <VCol cols="12" md="12">
                           <VSwitch v-model="admin.status" label="สถานะ"/>
                        </VCol> -->
                    </VRow>
                </VCardText>
                <VCardText class="d-flex justify-end flex-wrap gap-3">
                    <VBtn variant="tonal" color="secondary" @click="show = false">
                        ปิด
                    </VBtn>
                    <VBtn color="primary" @click="saveData()">
                        บันทึกข้อมูล
                    </VBtn>
                </VCardText>
            </VCard>
        </VDialog>
        <VDialog v-model="showPassword" max-width="800">
            <DialogCloseBtn @click="showPassword = false" />
            <VCard>
                <VCardTitle>
                    เปลี่ยนรหัสผ่าน
                </VCardTitle>
                <VCardText>
                    <VRow>
                        <VCol cols="6" md="6">
                            <VTextField type="text" v-model="changPass.password" label="รหัสผ่าน" />
                        </VCol>
                        <VCol cols="6" md="6">
                            <VTextField type="text" v-model="changPass.confirm_password" label="รหัสผ่าน" />
                        </VCol>
                    </VRow>
                    <div v-if="changPass.password != changPass.confirm_password ? true :  false" style="padding: 10px;">
                        <VAlert color="error" variant="tonal" >
                            <p class="text-caption mb-2">
                            ยืนยันรหัสผ่านไม่ตรงกัน : <strong>กรุณารกอกรหัสผ่านให้ตรงกัน</strong>
                            </p>
                        </VAlert>
                    </div>
                </VCardText>
                <VCardText class="d-flex justify-end flex-wrap gap-3">
                    <VBtn variant="tonal" color="secondary" @click="showPassword = false">
                        ปิด
                    </VBtn>
                    <VBtn :disabled="changPass.password != changPass.confirm_password ? true :  false " color="primary" @click="saveDataPassword()">
                        บันทึกข้อมูล
                    </VBtn>
                </VCardText>
            </VCard>
        </VDialog>
    </div>
    
</template>

