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
            bill_detail : [] ,
            openDetail :false , 
            loading : true ,
            derlimiter,
            thaiDateNotime,
            pagination : [] ,
            page : 1,
            route: useRoute(),
            report_day : [],
            datestart : `${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,'0')}-${String(new Date().getDate()).padStart(2,'0')}`,
            dateend : `${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,'0')}-${String(new Date().getDate()).padStart(2,'0')}` ,
            totalDay : 0 ,
            totalCash : 0 ,
            totalCredit : 0 ,
        };
    },
    methods: {
        formatNumber,
        async getData() {
            let data = {
                start_date : this.datestart , 
                end_date : this.dateend , 
            }
            this.loading = true
            await service({ method: 'post', url: `/report/day`, data: data, params: [] })
            .then((response) => {
                this.totalDay = 0 
                this.totalCash = 0 
                this.totalCredit = 0 
                for(let item of response.data){
                    this.totalCash += item.cash
                    this.totalCredit += item.credit
                    this.totalDay += item.total
                }
                this.report_day = response.data
                this.loading = false
            })
            .catch((error) => {
                console.log(error);
            });
        },
        async detailData (item){
            let date =  `${new Date(item.date).getFullYear()}-${String(new Date(item.date).getMonth()+1).padStart(2,'0')}-${String(new Date(item.date).getDate()).padStart(2,'0')}`
            this.openDetail = true 
            let data = {
                date : date
            }
            await service({ method: 'post', url: '/report/getBill', data: data, params: [] })
            .then((response) => {
                this.bill_detail = response.data
            })
            .catch((error) => {
                console.log(error);
            });
            // console.log(date)
        },
        async searchData() {
            // console.log(this.date)
            this.getData()
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
                <VCol><h1>รายงานรายวัน</h1></VCol>
                <VCol md="3" class="text-end">
                    <VTextField type="date" v-model="datestart" label="วันที่" />
                </VCol>
                <VCol md="3" class="text-end">
                    <VTextField type="date" v-model="dateend" label="วันที่" />
                </VCol>
                <VCol md="3" class="text-start">
                    <VBtn @click="searchData()">
                        ค้นหา
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
                        <th style="text-align: start;">วันที่</th>
                        <th style="text-align: end;">เงินสด</th>
                        <th style="text-align: end;">เงินโอน</th>
                        <th style="text-align: end;">ยอดรวม</th>
                        <th style="text-align: center;">รายละเอียด</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item of report_day">
                        <td style="text-align: start;">{{ thaiDateNotime(item.date) }}</td>
                        <td style="text-align: end;">{{ derlimiter(item.cash) }}</td>
                        <td style="text-align: end;">{{ derlimiter(item.credit) }}</td>
                        <td style="text-align: end;">{{ derlimiter(item.total) }}</td>
                        <th style="text-align: center;">
                            <VBtn size="small" color="primary" @click="detailData(item)" block class="mt-1">
                                รายละเอียด
                            </VBtn>
                        </th>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td style="text-align: start;">รวม</td>
                        <td style="text-align: end;">{{ derlimiter(totalCash) }}</td>
                        <td style="text-align: end;">{{ derlimiter(totalCredit) }}</td>
                        <td style="text-align: end;">{{ derlimiter(totalDay) }}</td>
                       
                    </tr>
                </tbody>
            </VTable>
        </VCard>
        <VDialog v-model="openDetail" max-width="800">
            <DialogCloseBtn @click="openDetail = false" />
            <VCard>
                <VCardTitle>
                    รายการของวัน
                </VCardTitle>
                <VCardText>
                    <VTable fixed-header density="compact" class="text-no-wrap">
                        <VCol cols="12">
                            <VTable fixed-header density="compact" class="text-no-wrap">
                                <thead>
                                    <tr>
                                        <th style="text-align: start;">ประเภท</th>
                                        <th style="text-align: start;">ลูกค้า</th>
                                        <th style="text-align: start;">เบอร์โทรลูกค้า</th>
                                        <th style="text-align: end;">ค่าบริการ</th>
                                        <th style="text-align: end;">ส่วนลด</th>
                                        <th style="text-align: end;">รวม</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item of bill_detail">
                                        <td style="text-align: start;">{{ item.name_service == undefined ? 'ซื้อโปรโมชั่น' : item.name_service }}</td>
                                        <td style="text-align: start;">{{ item.name_customer }}</td>
                                        <td style="text-align: start;">{{ item.mobile }}</td>
                                        <td style="text-align: end;">{{ item.price }}</td>
                                        <td style="text-align: end;">{{ item.discount }}</td>
                                        <td style="text-align: end;">{{ item.price - item.discount  }}</td>
                                    </tr>
                                </tbody>
                            </VTable>
                            
                        </VCol>
                    </VTable>
                </VCardText>
                <VCardText class="d-flex justify-end flex-wrap gap-3">
                    <VBtn variant="tonal" color="secondary" @click="openDetail = false">
                        ปิด
                    </VBtn>
                </VCardText>
            </VCard>
        </VDialog>
    </div>
    
</template>

