<script>
import service from '@/plugins/axios';
import moment from "moment"
import { useRoute } from "vue-router";
import {formatNumber} from "chart.js/helpers";
import { thaiDateNotime }from "@/thaiDateNotime";
import { derlimiter } from "@/derlimiter"

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
            agent : {
                name : '' ,
                surname : '' ,
                username : '' , 
                password : '' ,
                email : '' , 
                mobile : '' ,
                status : false , 
            } ,
            marketing : []
        };
    },
    methods: {
        formatNumber,
        async getData() {
            this.loading = true
            const queryParams ={
                page: this?.page,
                // status: this?.status.value,
                // provider: this?.provider,
                // date: this?.data ? (this?.date).replace(' to ',',') : ''
            }
            await service({ method: 'get', url: `/${localStorage.getItem('permission')}/marketing`, data: [], params: queryParams })
            .then((response) => {
                this.marketing = response.data
                this.pagination = response.meta
                this.loading = false
                // console.log(response)
            })
            .catch((error) => {
                console.log(error);
                this.loading = false
            });
        },
        async saveData(){
            console.log(this.agent)
            this.show = false
        },  
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
                <VCol><h1>จัดการการตลาด</h1></VCol>
                <VCol md="2" class="text-end">
                    <VBtn @click="show = true">
                        <VIcon start icon="tabler-square-rounded-plus-filled"/>
                        เพิ่มการตลาด
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
                        <th style="text-align: start;">รหัสพนักงาน</th>
                        <th style="text-align: start;">ยูเซอร์</th>
                        <th style="text-align: start;">ลิงค์ทำการตลาด</th>
                        <th style="text-align: start;">ชื่อ-นามสกุล</th>
                        <th style="text-align: center;">สถานะ</th>
                        <th style="text-align: center;">วันที่ลงทะเบียน</th>
                        <th style="text-align: center;">จำนวนสมาชิก</th>
                        <th style="text-align: center;">แก้ไข</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item of marketing">
                        <td style="text-align: start;">code0{{item}}</td>
                        <td style="text-align: start;">Username0{{item}}</td>
                        <td style="text-align: start;">https://naruto168.com/af/0/?m={{ item }}</td>
                        <td style="text-align: start;">Name{{ item }} Surname{{ item }}</td>
                        <td style="text-align: center;">
                            <div v-if="item % 2 == true"><VChip color="success">เปิด</VChip></div>
                            <div v-if="item % 2 == false"><VChip color="error">ปิด</VChip></div>
                        </td>
                        <td style="text-align: center;">
                            {{ thaiDateNotime(new Date()) }}
                        </td>
                        <td style="text-align: center;">
                        {{ item }}
                        </td>
                        <td style="text-align: center;">
                            <VBtn size="small" color="primary" @click="show = true">
                                <VIcon start icon="tabler-edit"/> แก้ไข
                            </VBtn>
                        </td>
                    </tr>
                </tbody>
            </VTable>
            <VPagination
                v-model="page"
                :length="pagination.last_page"
                :total-visible="20"
                @click="getData"
            />
        </VCard>
        <VDialog v-model="show" max-width="800">
            <DialogCloseBtn @click="show = false" />
            <VCard>
                <VCardTitle>
                จัดการการตลาด
                </VCardTitle>
                <VCardText>
                    <VRow>
                        <VCol cols="12" md="12">
                            <VTextField v-model="agent.username" label="Username" />
                        </VCol>
                        <VCol cols="12" md="12">
                            <VTextField type="password" v-model="agent.password" label="Password" />
                        </VCol>
                        <VCol cols="6" md="6">
                            <VTextField v-model="agent.name" label="ชื่อ" />
                        </VCol>
                        <VCol cols="6" md="6">
                            <VTextField v-model="agent.surname" label="นามสกุล" />
                        </VCol>
                        <VCol cols="12" md="12">
                            <VTextField v-model="agent.email" label="Email" />
                        </VCol>
                        <VCol cols="12" md="12">
                            <VTextField v-model="agent.mobile" label="เบอร์โทร" />
                        </VCol>
                        <VCol cols="12" md="12">
                        <VSwitch v-model="agent.status" label="สถานะ"/>
                        </VCol>
                    </VRow>
                </VCardText>
                <VCardText class="d-flex justify-end flex-wrap gap-3">
                    <VBtn variant="tonal" color="secondary" @click="show = false">
                        ปิด
                    </VBtn>
                    <VBtn color="success" @click="saveData()">
                        บันทึกข้อมูล
                    </VBtn>
                </VCardText>
            </VCard>
        </VDialog>
    </div>
    
</template>