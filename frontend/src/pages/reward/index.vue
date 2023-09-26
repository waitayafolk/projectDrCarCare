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
            servicesGroup : [],
            packet : {
                id : 0 , 
                title : '' , 
                detail : '' , 
                price : 0 , 
                status : false ,
                count : 0 ,
                created_date : new Date()
            },
            packets : [],
            // item : [{name : 'เจ้าของ' , role : "admin"} ,{name : 'พนักงาน' , role : "agent"}]
        };
    },
    methods: {
        formatNumber,
        async getData() {
            this.loading = true
            await service({ method: 'get', url: `/packet`, data: [], params: [] })
            .then((response) => {
                // console.log(response)
                this.packets = response.data
                this.loading = false
            })
            .catch((error) => {
                console.log(error);
            });
        },
        async saveData(){
            if(this.packet.title == '' || this.packet.detail == '' || this.packet.price == 0 || this.packet.count == 0 ){
                this.show = false
                return Swal.fire({ icon: 'error', title: 'Error' , text: 'กรุณรากรอกข้อมูลให้ครบ !!',})
            }
            await service({ method: 'post', url: `/packet/save`, data: this.packet, params: [] })
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
            this.packet = {
                id : 0 , 
                title : '' , 
                detail : '' , 
                price : 0 , 
                count : 0 ,
            }
        },async deletePacket (item){
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
                    await service({ method: 'delete', url: `/packet/${item.id}`, data: [], params: [] })
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
                <VCol><h1>จัดการแพ็คเกจ</h1></VCol>
                <VCol md="2" class="text-end">
                    <VBtn @click="openModal()">
                        <VIcon start icon="tabler-square-rounded-plus-filled"/>
                        เพิ่มแพ็คเกจ
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
                        <th style="text-align: start;">หัวข้อ</th>
                        <th style="text-align: start;">รายละเอียด</th>
                        <th style="text-align: start;">ราคา</th>
                        <th style="text-align: start;">จำนวน</th>
                        <th style="text-align: center;">วันที่สร้าง</th>
                        <th style="text-align: center;">แก้ไข</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item of packets">
                        <td style="text-align: start;">{{ item.title }}</td>
                        <td style="text-align: start;">{{ item.detail }}</td>
                        <td style="text-align: start;">{{ item.price }}</td>
                        <td style="text-align: start;">{{ item.count }}</td>
                        <td style="text-align: center;">
                            {{ thaiDateNotime(item.created_date) }}
                        </td>
                        <td style="text-align: center;">
                            <VBtn size="small" color="error" @click="deletePacket(item)">
                                <VIcon start icon="tabler-trash"/> ลบ
                            </VBtn>
                            <VBtn size="small" color="primary" @click=" packet = item , show = true">
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
                    จัดการแพ็คเกจ
                </VCardTitle>
                <VCardText>
                    <VRow>
                        <VCol cols="6" md="6">
                            <VTextField type="text" v-model="packet.title" label="แพ็คเกจ" />
                        </VCol>
                        <VCol cols="6" md="6">
                            <VTextField type="number" v-model="packet.price" label="ราคา" />
                        </VCol>
                        <VCol cols="12" md="12">
                            <VTextField type="text" v-model="packet.detail" label="รายละเอียด" />
                        </VCol>
                        <VCol cols="12" md="12">
                            <VTextField type="number" v-model="packet.count" label="จำนวนการล้าง" />
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

