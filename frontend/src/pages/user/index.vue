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
            route : useRoute(),
            show : false ,
            users : [],
            status: [
                {label : 'การใช้งานทุกสถานะ' , value : null},
                {label : 'ปกติ' , value : false},
                {label : 'ระงับการใช้งาน' , value : true},
            ],
            active : [
                {label : 'อนุมัติทุกสถานะ' , value : null},
                {label : 'เปิด' , value : 'active'},
                {label : 'ปิด' , value : 'inactive'},
            ],
            user : {
                mobile : '' ,
                password : '' ,
                name : '' ,
                surname : '' ,
                bank_id : {name : 'ธนาคารกสิกรไทย' , bank_id : 0} ,
                bank_no : '' ,
                af_code : '' ,
                status : null ,
                withdraw : null ,
            } ,
        };
    },
    methods: {
        formatNumber,
        async getData() {
            this.loading = true
            const queryParams ={
                page: this?.page,
                status: this?.status.value,
                // provider: this?.provider,
                date: this?.data ? (this?.date).replace(' to ',',') : ''
            }
            await service({ method: 'get', url: `/${localStorage.getItem('permission')}/user`, data: [], params: queryParams })
            .then((response) => {
                this.users = response.data
                this.pagination = response.meta
                this.loading = false
                // console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
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
                <VCol><h1>จัดการลูกค้า</h1></VCol>
                <VCol cols="12" md="3">
                    <v-select
                        :items="status"
                        v-model="user.status"
                        item-title="label"
                        item-value="value"
                        label="สถานะ"
                    />
                </VCol>
                <VCol cols="12" md="3">
                    <v-autocomplete
                        :items="active"
                        v-model="user.withdraw"
                        item-title="label"
                        item-value="value"
                        label="อนุมัติ"
                        @change="getData()"
                    />
                </VCol>
                <VCol cols="12" md="2">
                    <VBtn @click="show = true">
                        <VIcon start icon="tabler-square-rounded-plus-filled"/>
                        สมัครสมาชิก
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
                        <th style="text-align: start;">ไอดีผู้ใช้งาน</th>
                        <th style="text-align: start;">ยูเซอร์</th>
                        <th style="text-align: start;">ชื่อ</th>
                        <th style="text-align: start;">นามสกุล</th>
                        <th style="text-align: start;">ธนาคาร</th>
                        <th style="text-align: end;">ฝากสะสม</th>
                        <th style="text-align: end;">ถอนสะสม</th>
                        <th style="text-align: end;">เครดิตคงเหลือ</th>
                        <th style="text-align: center;">สถานะการใช้งาน</th>
                        <th style="text-align: center;">อนุมัติถอน</th>
                        <th style="text-align: center;">วันที่สร้าง</th>
                        <th style="text-align: center;">จัดการยูเซอร์</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item of users">
                        <td style="text-align: start;">
                            <small>
                                {{ item.username }}<br/>
                                <span class="text-secondary">{{ item.show_password}}</span>
                            </small>
                        </td>
                        <td style="text-align: start;">{{ item.mobile }}</td>
                        <td style="text-align: start;">{{ item.name }}</td>
                        <td style="text-align: start;">{{ item.surname }}</td>
                        <td style="text-align: start;">
                            <small>
                                <span>{{ item.bank.nice_name }}</span><br/>
                                <span class="text-secondary">{{ item.bank_no }} ({{ item.bank_account}})</span>
                            </small>
                        </td>
                        <td style="text-align: end;">{{ derlimiter(item.credit_deposit) }}</td>
                        <td style="text-align: end;">{{ derlimiter(item.credit_withdraw) }}</td>
                        <td style="text-align: end;">{{ derlimiter(item.credit_balance) }}</td>
                        <td style="text-align: center;">
                            <div v-if="item.suspended === false"><VChip color="success">เปิด</VChip></div>
                            <div v-if="item.suspended === true"><VChip color="error">ปิด</VChip></div>
                        </td>
                        <td style="text-align: center;">
                            <div v-if="item.status === 'active'"><VChip color="success">เปิด</VChip></div>
                            <div v-if="item.status === 'inactive'"><VChip color="error">ปิด</VChip></div>
                        </td>
                        <td style="text-align: center;">
                            {{ thaiDateNotime(item.created_at) }}
                        </td>
                        <td style="text-align: center;">
                            <VBtn size="x-small" color="primary" @click="show = true">
                                <VIcon start icon="tabler-edit"/> แก้ไข
                            </VBtn>
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
                    จัดการลูกค้า
                </VCardTitle>
                <VCardText>
                    <VRow>
                        <VCol cols="12" md="12">
                            <VTextField type="text" v-model="user.mobile" label="เบอร์โทรศัพท์" />
                        </VCol>
                        <VCol cols="12" md="12">
                            <VTextField type="password" v-model="user.password" label="Password" />
                        </VCol>
                        <VCol cols="6" md="6">
                            <VTextField type="text" v-model="user.name" label="ชื่อ" />
                        </VCol>
                        <VCol cols="6" md="6">
                            <VTextField type="text" v-model="user.surname" label="นามสกุล" />
                        </VCol>
                        <VCol cols="12" md="12">
                            <VSelect v-model="user.bank_id" :items="[]" item-title="name" item-value="bank_id" label="บัญชีธนาคาร" persistent-hint/>
                            <!-- <VTextField v-model="user.email" label="Email" /> -->
                        </VCol>
                        <VCol cols="6" md="6">
                            <VTextField type="text" v-model="user.af_code" label="AF-Code" />
                        </VCol>
                        <VCol cols="6" md="6">
                            รูปแบบการเข้าเป็นสมาชิ
                            <!-- <VTextField v-model="user.mobile" label="เบอร์โทร" /> -->
                        </VCol>
                        <VCol cols="6" md="6">
                            <VSwitch v-model="user.withdraw" label="อนุญาติถอน"/>
                        </VCol>
                        <VCol cols="6" md="6">
                            <VSwitch v-model="user.status" label="สถานะการใช้งาน"/>
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
