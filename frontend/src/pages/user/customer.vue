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
            licen : '' ,
            showpacket : false , 
            loading : true ,
            derlimiter,
            thaiDateNotime,
            pagination : [] ,
            page : 1,
            route: useRoute(),
            show : false ,
            customer : {
                id : 0 , 
                mobile : '' , 
                name : '' , 
                status :  false , 
            },
            packets : [],
            customers : [],
            // item : [{name : 'เจ้าของ' , role : "admin"} ,{name : 'พนักงาน' , role : "agent"}]
        };
    },
    methods: {
        formatNumber,
        async getData() {
            this.loading = true
            await service({ method: 'get', url: `/customers`, data: [], params: [] })
            .then((response) => {
                // console.log(response)
                this.customers = response.data
                this.loading = false
            })
            .catch((error) => {
                console.log(error);
            });
        },
        async getDataPacket() {
            this.loading = true
            await service({ method: 'get', url: `/packet`, data: [], params: [] })
            .then((response) => {
                // console.log(response)
                this.packets = response.data
            })
            .catch((error) => {
                console.log(error);
            });
        },
        async saveData(){
            await service({ method: 'post', url: `/customers/save-customer`, data: this.customer, params: [] })
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
            this.customer = {
                id : 0 , 
                mobile : '' , 
                name : '' , 
                status :  false , 
            }
        }, async buyPacket(item){
            let data = {
                licen : this.licen , 
                customer_id : this.customer.id , 
                packet_id : item.id , 
                count : item.count , 
                price : item.price
            }
            await service({ method: 'post', url: `/packet/save-packet`, data: data , params: [] })
            .then((response) => {
                if(response.status == "success"){
                    this.showpacket = false
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: response.message,
                    })
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
            console.log(data)
        }
    },
    mounted() {
        this.getData()
        this.getDataPacket()
    },
};
</script>

<template>
    <div>
        <div mode="out-in">
            <VRow class="mb-3">
                <VCol><h1>จัดการลูกค้า</h1></VCol>
                <VCol md="2" class="text-end">
                    <VBtn @click="openModal()">
                        <VIcon start icon="tabler-square-rounded-plus-filled"/>
                        เพิ่มลูกค้า
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
                        <th style="text-align: start;">เบอร์โทร</th>
                        <th style="text-align: start;">ชื่อ</th>
                        <th style="text-align: center;">สถานะ</th>
                        <th style="text-align: center;">วันที่สร้าง</th>
                        <th style="text-align: start;">แก้ไข</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item of customers">
                        <td style="text-align: start;">{{ item.mobile }}</td>
                        <td style="text-align: start;">{{ item.name }}</td>
                        <td style="text-align: center;">
                            <div v-if="item.status == 'use'"><VChip color="success">ใช้งาน</VChip></div>
                            <div v-if="item.status != 'use'"><VChip color="error">ไม่ใช้งาน</VChip></div>
                        </td>
                        <td style="text-align: center;">
                            {{ thaiDateNotime(item.create_date) }}
                        </td>
                        <td style="text-align: center;">
                            <td>
                                <VBtn block class="mt-1" size="small" color="primary" @click=" customer = item , show = true">
                                    <VIcon start icon="tabler-edit"/> แก้ไข
                                </VBtn>
                                <VBtn block class="mt-1" size="small" color="success" @click=" customer = item , showpacket = true">
                                    <VIcon start icon="tabler-heart-dollar"/> ซื้อแพ็คเกจ
                                </VBtn>
                            </td>
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
                            <VTextField type="text" v-model="customer.mobile" label="เบอร์โทร" />
                        </VCol>
                        <VCol cols="6" md="6">
                            <VTextField type="text" v-model="customer.name" label="ชื่อ" />
                        </VCol>
                        <!-- <VCol cols="12" md="12">
                           <VSwitch v-model="customer.status" label="สถานะ"/>
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
        <VDialog v-model="showpacket" max-width="800">
            <DialogCloseBtn @click="showpacket = false" />
            <VCard>
                <VCardTitle>
                    ลูกค้าซื้อ Packet
                </VCardTitle>
                <VCardText>
                    <VRow>
                        <VCol cols="6" md="6">
                            <VTextField type="text" v-model="licen" label="ป้ายทะเบียน" />
                        </VCol>
                        <VTable fixed-header class="text-no-wrap">
                            <thead>
                                <tr>
                                    <th style="text-align: start;">ชื่อ</th>
                                    <th style="text-align: start;">รายละเอียด</th>
                                    <th style="text-align: end;">ราคา</th>
                                    <th style="text-align: end;">จำนวนล้าง</th>
                                    <th style="text-align: center;">วันที่สร้าง</th>
                                    <th style="text-align: center;"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item of packets">
                                    <td style="text-align: start;">{{ item.title }}</td>
                                    <td style="text-align: start;">{{ item.detail }}</td>
                                    <td style="text-align: end;">{{ item.price }}</td>
                                    <td style="text-align: end;">{{ item.count }}</td>
                                    <td style="text-align: center;">
                                        {{ thaiDateNotime(item.created_date) }}
                                    </td>
                                    <td style="text-align: center;">
                                        <VBtn block class="mt-1" size="small" color="success" @click="buyPacket(item)">
                                            <VIcon start icon="tabler-heart-dollar"/> ซื้อแพ็คเกจ
                                        </VBtn>
                                    </td>
                                </tr>
                            </tbody>
                        </VTable>
                        <!--  -->
                    </VRow>
                </VCardText>
                <VCardText class="d-flex justify-end flex-wrap gap-3">
                    <VBtn variant="tonal" color="secondary" @click="showpacket = false">
                        ปิด
                    </VBtn>
                </VCardText>
            </VCard>
        </VDialog>
    </div>
    
</template>

