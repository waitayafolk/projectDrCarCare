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
            service : {
                id : 0 , 
                code : '' , 
                name : '' , 
                detail : 0 , 
                status : false ,
                admin_id : JSON.parse(localStorage.getItem('user_data')).id
            },
            services : [],
            // item : [{name : 'เจ้าของ' , role : "admin"} ,{name : 'พนักงาน' , role : "agent"}]
        };
    },
    methods: {
        formatNumber,
        async getData() {
            this.loading = true
            await service({ method: 'get', url: `/services/group`, data: [], params: [] })
            .then((response) => {
                // console.log(response)
                this.services = response.data
                this.loading = false
            })
            .catch((error) => {
                console.log(error);
            });
        },
        async saveData(){
            let data = {
                id : this.service.id , 
                code : this.service.code , 
                name : this.service.name , 
                detail : this.service.detail , 
                status : true , 
                admin_id : JSON.parse(localStorage.getItem('user_data')).id
            }
            await service({ method: 'post', url: `/services/save-service/group`, data: data, params: [] })
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
                title : '' , 
                detail : '' , 
                price : 0 , 
                status : false ,
                admin_id : JSON.parse(localStorage.getItem('user_data')).id
            }
        },async deleteService (item){
            Swal.fire({
                title: 'ทำรายการ?',
                text: "ต้องการลบข้อมูล!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then(async(result) => {
                if (result.isConfirmed) {
                    await service({ method: 'delete', url: `/services/group/${item.id}`, data: [], params: [] })
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
                }
            })
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
                <VCol><h1>จัดการประเภทค่าบริการ</h1></VCol>
                <VCol md="2" class="text-end">
                    <VBtn @click="openModal()">
                        <VIcon start icon="tabler-square-rounded-plus-filled"/>
                        เพิ่มประเภทค่าบริการ
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
                        <th style="text-align: start;">โค้ด</th>
                        <th style="text-align: start;">ประเภท</th>
                        <th style="text-align: start;">รายละเอียด</th>
                        <th style="text-align: center;">สถานะ</th>
                        <th style="text-align: center;">วันที่สร้าง</th>
                        <th style="text-align: center;">แก้ไข</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item of services">
                        <td style="text-align: start;">{{ item.code }}</td>
                        <td style="text-align: start;">{{ item.name }}</td>
                        <td style="text-align: start;">{{ item.detail }}</td>
                        <td style="text-align: center;">
                            <div v-if="item.status == 'use'"><VChip color="success">ใช้งาน</VChip></div>
                            <!-- <div v-if="item.status == 'delete'"><VChip color="error">ไม่ใช้งาน</VChip></div> -->
                        </td>
                        <td style="text-align: center;">
                            {{ thaiDateNotime(item.create_date) }}
                        </td>
                        <td style="text-align: center;">
                            <VBtn size="small" color="error" @click="deleteService(item)">
                                <VIcon start icon="tabler-trash"/> ลบ
                            </VBtn>
                            <VBtn size="small" color="primary" @click=" service = item , show = true">
                                <VIcon start icon="tabler-edit"/> แก้ไข
                            </VBtn>
                        </td>
                    </tr>
                </tbody>
            </VTable>
        </VCard>
        <VDialog v-model="show" max-width="800">
            <DialogCloseBtn @click="show = false" />
            <VCard>
                <VCardTitle>
                    จัดการค่าบริการ
                </VCardTitle>
                <VCardText>
                    <VRow>
                        <VCol cols="6" md="6">
                            <VTextField type="text" v-model="service.code" label="รหัส" />
                        </VCol>
                        <VCol cols="6" md="6">
                            <VTextField type="text" v-model="service.name" label="ประเภทการบริการ" />
                        </VCol>
                        <VCol cols="12" md="12">
                            <VTextarea type="text" v-model="service.detail" label="รายละเอียด" />
                        </VCol>
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
    </div>
    
</template>

