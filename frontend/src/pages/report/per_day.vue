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
            report_day : [],
            datestart : `${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,'0')}-${String(new Date().getDate()).padStart(2,'0')}`,
            dateend : `${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,'0')}-${String(new Date().getDate()).padStart(2,'0')}` ,
            totalDay : 0 ,
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
                for(let item of response.data){
                    this.totalDay += item.total
                }
                this.report_day = response.data
                this.loading = false
            })
            .catch((error) => {
                console.log(error);
            });
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
                        <th style="text-align: end;">ยอดรวม</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item of report_day">
                        <td style="text-align: start;">{{ thaiDateNotime(item.date) }}</td>
                        <td style="text-align: end;">{{ derlimiter(item.total) }}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td style="text-align: start;">รวม</td>
                        <td style="text-align: end;">{{ derlimiter(totalDay) }}</td>
                    </tr>
                </tbody>
            </VTable>
        </VCard>
    </div>
    
</template>

