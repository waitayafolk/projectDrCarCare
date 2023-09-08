<script>
import service from '@/plugins/axios';
import moment from "moment"
import { useRoute } from "vue-router";
import {formatNumber} from "chart.js/helpers";

export default {
    name: "user-profile",
    computed: {
        moment() {
            return moment
        },
    },
    data() {
        return {
            route: useRoute(),
            information: [],
            game_summary: [],
            promotions: [],
            tabs:['ประวัติฝาก/ถอน','ประวัติการเล่น','ยอดแนะนำเพิ่อน','คอมมิชชั่น','คืนยอดเสีย'],
            tab_current:'ประวัติฝาก/ถอน',
            transaction_play: [],
            page_play: 1,
            pagination_play: [],
            transaction_user: [],
            page_transaction_user: 1,
            pagination_transaction_user:[],
            transaction_lose: [],
            page_transaction_lose: 1,
            pagination_transaction_lose:[],
            transaction_commission: [],
            page_transaction_commission: 1,
            pagination_transaction_commission:[],
            transaction_af: [],
            page_transaction_af: 1,
            pagination_transaction_af:[],
            loading: true,
        };
    },
    methods: {
        formatNumber,
        async getData() {
            await service({ method: 'get', url: `/${localStorage.getItem('permission')}/user/profile/${this.route.query.user_id}`, data: [], params: [] })
                .then((response) => {
                    this.information = response.profile
                    this.promotions = response.promotions
                    console.log(this.information)
                })
                .catch((error) => {
                    console.log(error);
                });
            await service({ method: 'get', url: `/${localStorage.getItem('permission')}/report/transaction-play/summary/${this.route.query.user_id}`, data: [], params: [] })
                .then((response) => {
                    this.game_summary = response
                    console.log(this.information)
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async getTransactionPlay(){
            this.loading = true
            const queryParams ={
                page: this?.page_play,
                status: this?.status,
                provider: this?.provider,
                date: this?.data ? (this?.date).replace(' to ',',') : ''
            }
            await service({ method: 'get', url: `/${localStorage.getItem('permission')}/report/transaction-play/${this.route.query.user_id}`, data: [], params:queryParams })
                .then((response) => {
                    this.loading = false
                    this.transaction_play = response.data.data
                    this.pagination_play = response.data.meta
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async getTransactionUser(){
            this.loading = true
            const queryParams ={
                page: this?.page_transaction_user,
                date: this?.data ? (this?.date).replace(' to ',',') : ''
            }
            await service({ method: 'get', url: `/${localStorage.getItem('permission')}/report/transaction-user/${this.route.query.user_id}`, data: [], params:queryParams })
                .then((response) => {
                    this.loading = false
                    this.transaction_user = response.data.data
                    this.pagination_transaction_user = response.data.meta
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async getTransactionLose(){
            this.loading = true
            const queryParams ={
                page: this?.page_transaction_lose,
                date: this?.data ? (this?.date).replace(' to ',',') : ''
            }
            await service({ method: 'get', url: `/${localStorage.getItem('permission')}/report/transaction-lose/${this.route.query.user_id}`, data: [], params:queryParams })
                .then((response) => {
                    this.loading = false
                    this.transaction_lose = response.data.data
                    this.pagination_transaction_lose = response.data.meta
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async getTransactionCommission(){
            this.loading = true
            const queryParams ={
                page: this?.page_transaction_lose,
                date: this?.data ? (this?.date).replace(' to ',',') : ''
            }
            await service({ method: 'get', url: `/${localStorage.getItem('permission')}/report/transaction-commission/${this.route.query.user_id}`, data: [], params:queryParams })
                .then((response) => {
                    this.loading = false
                    this.transaction_commission = response.data.data
                    this.pagination_transaction_commission = response.data.meta
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async getTransactionAf(){
            this.loading = true
            const queryParams ={
                page: this?.page_transaction_af,
                date: this?.data ? (this?.date).replace(' to ',',') : ''
            }
            await service({ method: 'get', url: `/${localStorage.getItem('permission')}/report/transaction-af/${this.route.query.user_id}`, data: [], params:queryParams })
                .then((response) => {
                    this.loading = false
                    this.transaction_af = response.data.data
                    this.pagination_transaction_af = response.data.meta
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    mounted() {
        console.log(this.route.query.user_id)
            this.getData()
        this.getTransactionUser()
    },
};
</script>

<template>
    <div>
        <div mode="out-in">
            <h1 class="mb-3">ข้อมูลการใช้งานสมาชิก</h1>

            <VRow>
                <VCol md="4">
                    <VCard title="ข้อมูลการเป็นสมาชิก">
                        <VCardText>
                            <VTable
                                density="compact"
                                class="text-no-wrap"
                            >
                                <tbody>
                                <tr>
                                    <td>วันที่เป็นสมาชิก</td>
                                    <td>{{ moment(information.created_at).format('YYYY-MM-DD hh:mm:ss') }}</td>
                                </tr>
                                <tr>
                                    <td>เข้าใช้งานล่าสุด</td>
                                    <td>{{ moment(information.updated_at).fromNow() }}</td>
                                </tr>
                                <tr>
                                    <td>สถานะ</td>
                                    <td><VChip variant="elevated" :color="information.suspended !== true ? 'success' : 'error'">{{ information.suspended !== true ? 'ใช้งานปกติ' : 'ระงับการใช้งาน'}}</VChip></td>
                                </tr>
                                <tr>
                                    <td>ยูสเซอร์</td>
                                    <td>{{ information.username }}</td>
                                </tr>
                                <tr>
                                    <td>ชื่อ</td>
                                    <td>{{ information.name }}</td>
                                </tr>
                                <tr>
                                    <td>นามสกุล</td>
                                    <td>{{ information.surname }}</td>
                                </tr>
                                <tr>
                                    <td>เบอร์โทรศัพท์</td>
                                    <td>{{ information.mobile }}</td>
                                </tr>
                                </tbody>
                            </VTable>
                        </VCardText>
                    </VCard>
                    <VCard title="ข้อมูลการเงิน" class="mt-3">
                        <VCardText>
                            <VTable
                                density="compact"
                                class="text-no-wrap"
                            >
                                <tbody>
                                <tr>
                                    <td>ยอดเครดิตคงเหลือ</td>
                                    <td>{{ formatNumber(information.credit_balance) }}</td>
                                </tr>
                                <tr>
                                    <td>ยอดฝากสะสม</td>
                                    <td>{{ formatNumber(information.credit_deposit) }}</td>
                                </tr>
                                <tr>
                                    <td>ยอดถอนสะสม</td>
                                    <td>{{ formatNumber(information.credit_withdraw) }}</td>
                                </tr>
                                <tr>
                                    <td>บัญชีธนาคาร</td>
                                    <td>ธนาคารไทยพาณิชย์</td>
                                </tr>
                                <tr>
                                    <td>ชื่อบัญชี</td>
                                    <td>{{ information.bank_account }}</td>
                                </tr>
                                <tr>
                                    <td>เลขที่บัญชี</td>
                                    <td>{{ information.bank_no }}</td>
                                </tr>
                                </tbody>
                            </VTable>
                        </VCardText>
                    </VCard>
                    <VCard title="ประวัติการรับโปรโมชั่น" class="mt-3">
                        <VCardText>
                            <VTable
                                density="compact"
                                class="text-no-wrap"
                            >
                                <thead>
                                <tr>
                                    <th>สถานะ</th>
                                    <th>ยอดฝาก</th>
                                    <th>รับเครดิต</th>
                                    <th>ยอดเทิร์นสะสม</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="promotion in promotions">
                                    <td>{{ promotion.status }}</td>
                                    <td>{{ formatNumber(promotion.deposit) }}</td>
                                    <td>{{ formatNumber(promotion.return_bonus) }}</td>
                                    <td>{{ formatNumber(promotion.total_turn) }}</td>
                                </tr>
                                </tbody>
                            </VTable>
                        </VCardText>
                    </VCard>
                    <VCard title="สรุปการเล่นแยกตามค่ายเกมส์" class="mt-3">
                        <VCardText>
                            <VTable
                                density="compact"
                                class="text-no-wrap"
                            >
                                <thead>
                                <tr>
                                    <th>ค่ายเกมส์</th>
                                    <th class="text-end">แทงสะสม</th>
                                    <th class="text-end">ชนะสะสม</th>
                                    <th class="text-end">รวมสะสม</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="game in game_summary">
                                    <td><small>{{ game.provider }}</small></td>
                                    <td class="text-end">{{ formatNumber(game.bet) }}</td>
                                    <td class="text-end">{{ formatNumber(game.win) }}</td>
                                    <td class="text-end" :class="game.bet > game.win ? 'text-success' : 'text-error'">
                                        {{ formatNumber(game.bet - game.win) }}
                                            <VIcon v-if="game.bet > game.win" size="12" icon="tabler-arrow-up"/>
                                            <VIcon v-if="game.bet < game.win" size="12" icon="tabler-arrow-down"/>
                                    </td>
                                </tr>
                                </tbody>
                            </VTable>
                        </VCardText>
                    </VCard>
                </VCol>
                <VCol md="8">

                    <VCard>
                        <VCardTitle>
                            <h4 class="pa-3 text-no-wrap">
                                ประวัติการทำรายการ
                                <VProgressCircular
                                    v-show="loading"
                                    :size="15"
                                    indeterminate
                                    color="primary"
                                />
                            </h4>

                        </VCardTitle>
                        <VCardText>
                            <VTabs
                                v-model="tab_current"
                            >
                                <VTab @click="getTransactionUser">ประวัติฝาก/ถอน</VTab>
                                <VTab @click="getTransactionPlay">ประวัติการเล่น</VTab>
                                <VTab @click="getTransactionAf">ยอดแนะนำเพิ่อน</VTab>
                                <VTab @click="getTransactionCommission">คอมมิชชั่น</VTab>
                                <VTab @click="getTransactionLose">คืนยอดเสีย</VTab>
                            </VTabs>
                            <VWindow v-model="tab_current" class="py-3">
                                <VWindowItem>

                                        <div v-show="loading" class="v-overlay--absolute text-center w-100 h-100" style="background-color: rgba(255,255,255,.8); z-index: 9;">
                                            <VProgressLinear
                                                indeterminate
                                                color="primary"
                                            />
                                        </div>


                                    <div>
                                        <VTable
                                            density="compact"
                                            class="text-no-wrap"
                                        >
                                            <thead>
                                            <tr>
                                                <th class="text-uppercase">
                                                    วันที่
                                                </th>
                                                <th class="text-uppercase text-center">
                                                    รายการ
                                                </th>
                                                <th class="text-uppercase">
                                                    สถานะ
                                                </th>
                                                <th class="text-uppercase text-end">
                                                    ยอด
                                                </th>
                                                <th class="text-uppercase ">
                                                    หมายเหตุ
                                                </th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            <tr
                                                v-for="item in transaction_user"
                                                :key="item.transaction_user"
                                            >
                                                <td>
                                                    {{ moment(item.created_at).format('YYYY-MM-DD hh:mm:ss') }}
                                                </td>
                                                <td class="text-center">
                                                    <VChip label variant="elevated" :color="item.action === 'deposit' ? 'success' : 'error'">
                                                        {{ item.action === 'deposit' ? 'ฝาก' : 'ถอน'}}
                                                    </VChip>
                                                </td>
                                                <td>
                                                    <VChip label variant="elevated" :color="item.status === 'success' ? 'success' : (item.status === 'wait' ? 'warning' : 'error')">
                                                        {{ item.status === 'success' ? 'สำเร็จ' : (item.status === 'wait' ? 'รอดำเนินการ' :  (item.status === 'fails' ? 'ทำรายการไม่ผ่าน' : 'ยกเลิก')) }}
                                                    </VChip>
                                                </td>
                                                <td class="text-end">{{ formatNumber(item.amount)}}</td>
                                                <td class="text-pre-wrap"><code>{{ item.tx_remark}}</code></td>

                                            </tr>
                                            </tbody>
                                        </VTable>
                                        <div class="d-flex flex-column gap-6 px-4 mt-5">
                                            <VPagination
                                                v-model="page_transaction_user"
                                                :length="pagination_transaction_user.last_page"
                                                :total-visible="10"
                                                @click="getTransactionUser"
                                            />
                                        </div>
                                    </div>
                                </VWindowItem>
                                <VWindowItem>
                                    <div v-show="loading" class="v-overlay--absolute text-center w-100 h-100" style="background-color: rgba(255,255,255,.8); z-index: 9;">
                                        <VProgressLinear
                                            indeterminate
                                            color="primary"
                                        />
                                    </div>
                                    <div v-if="tab = 'ประวัติการเล่น'">
                                        <VTable
                                            density="compact"
                                            class="text-no-wrap"
                                        >
                                            <thead>
                                            <tr>
                                                <th class="text-uppercase">
                                                    วันที่
                                                </th>
                                                <th class="text-uppercase text-center">
                                                    ค่าย
                                                </th>
                                                <th class="text-uppercase text-center">
                                                    ฟรีสปิน
                                                </th>
                                                <th class="text-uppercase text-center">
                                                    สถานะ
                                                </th>
                                                <th class="text-uppercase text-end">
                                                    ก่อนเล่น
                                                </th>
                                                <th class="text-uppercase text-end">
                                                    ยอด
                                                </th>
                                                <th class="text-uppercase text-end">
                                                    หลังเล่น
                                                </th>
                                                <th class="text-uppercase text-center">
                                                    เลขที่ทำรายการ
                                                </th>
                                                <th class="text-uppercase text-center">
                                                    รหัสเกมส์
                                                </th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            <tr
                                                v-for="item in transaction_play"
                                                :key="item.transaction_play"
                                            >
                                                <td>
                                                    {{ moment(item.created_at).format('YYYY-MM-DD hh:mm:ss') }}
                                                </td>
                                                <td class="text-center">
                                                    {{ item.provider }}
                                                </td>
                                                <td class="text-center"><VIcon icon="tabler-star-filled" color="warning" v-if="item.provider === 'pg' && item.json.request.is_feature === 'True' "/></td>
                                                <td class="text-center">
                        <span
                            :class="item.wallet_amount_after < item.wallet_amount_before ? 'text-success' : (item.wallet_amount_after > item.wallet_amount_before ? 'text-error' : 'text-secondary')"
                        >
                        {{ item.action_play }}
                        </span>
                                                </td>
                                                <td class="text-end">
                                                    {{ item.wallet_amount_after }}
                                                </td>
                                                <td class="text-end">
                        <span
                            :class="item.wallet_amount_after < item.wallet_amount_before ? 'text-success' : (item.wallet_amount_after > item.wallet_amount_before ? 'text-error' : 'text-secondary')"
                        >
                        {{ formatNumber(item.amount) }}
                        </span>
                                                </td>
                                                <td class="text-end">
                                                    {{ formatNumber(item.wallet_amount_before) }}
                                                </td>
                                                <td class="text-center">
                                                    {{ item.ref_id }}
                                                </td>
                                                <td class="text-center">
                                                    {{ item.game_id }}
                                                </td>
                                            </tr>
                                            </tbody>
                                        </VTable>
                                        <div class="d-flex flex-column gap-6 px-4 mt-5">
                                            <VPagination
                                                v-model="page_play"
                                                :length="pagination_play.last_page"
                                                :total-visible="10"
                                                @click="getTransactionPlay"
                                            />
                                        </div>
                                    </div>
                                </VWindowItem>
                                <VWindowItem>
                                    <div v-show="loading" class="v-overlay--absolute text-center w-100 h-100" style="background-color: rgba(255,255,255,.8); z-index: 9;">
                                        <VProgressLinear
                                            indeterminate
                                            color="primary"
                                        />
                                    </div>
                                    <VTable
                                        density="compact"
                                        class="text-no-wrap"
                                    >
                                        <thead>
                                        <tr>
                                            <th class="text-uppercase">
                                                วันที่
                                            </th>
                                            <th class="text-uppercase text-end">
                                                ยอด
                                            </th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                        <tr
                                            v-for="item in transaction_af"
                                            :key="item.transaction_af"
                                        >
                                            <td>
                                                {{ moment(item.created_at).format('YYYY-MM-DD') }}
                                            </td>
                                            <td class="text-end">{{ formatNumber(item.amount)}}</td>
                                        </tr>
                                        </tbody>
                                    </VTable>
                                    <div class="d-flex flex-column gap-6 px-4 mt-5">
                                        <VPagination
                                            v-model="page_transaction_af"
                                            :length="pagination_transaction_af.last_page"
                                            :total-visible="10"
                                            @click="getTransactionAf"
                                        />
                                    </div>
                                </VWindowItem>
                                <VWindowItem>
                                    <div v-show="loading" class="v-overlay--absolute text-center w-100 h-100" style="background-color: rgba(255,255,255,.8); z-index: 9;">
                                        <VProgressLinear
                                            indeterminate
                                            color="primary"
                                        />
                                    </div>
                                        <VTable
                                            density="compact"
                                            class="text-no-wrap"
                                        >
                                            <thead>
                                            <tr>
                                                <th class="text-uppercase">
                                                    วันที่
                                                </th>
                                                <th class="text-uppercase text-end">
                                                    ยอดเล่นสะสม
                                                </th>
                                                <th class="text-uppercase text-end">
                                                    ยอดจ่าย
                                                </th>
                                                <th class="text-uppercase">
                                                    วันที่อนุมัติยอด
                                                </th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            <tr
                                                v-for="item in transaction_commission"
                                                :key="item.transaction_commission"
                                            >
                                                <td>
                                                    {{ moment(item.created_at).format('YYYY-MM-DD') }}
                                                </td>
                                                <td class="text-end">{{ formatNumber(item.total_bet)}}</td>
                                                <td class="text-end">{{ formatNumber(item.total_commission)}}</td>
                                                <td>
                                                    {{  moment(item.created_at).format('YYYY-MM-DD hh:mm:ss') }}
                                                </td>
                                            </tr>
                                            </tbody>
                                        </VTable>
                                        <div class="d-flex flex-column gap-6 px-4 mt-5">
                                            <VPagination
                                                v-model="page_transaction_commission"
                                                :length="pagination_transaction_commission.last_page"
                                                :total-visible="10"
                                                @click="getTransactionCommission"
                                            />
                                        </div>
                                </VWindowItem>
                                <VWindowItem>
                                        <div v-show="loading" class="v-overlay--absolute text-center w-100 h-100" style="background-color: rgba(255,255,255,.8); z-index: 9;">
                                            <VProgressLinear
                                                indeterminate
                                                color="primary"
                                            />
                                        </div>
                                        <VTable
                                            density="compact"
                                            class="text-no-wrap"
                                        >
                                            <thead>
                                            <tr>
                                                <th class="text-uppercase">
                                                    วันที่
                                                </th>
                                                <th class="text-uppercase">
                                                    สถานะ
                                                </th>
                                                <th class="text-uppercase text-end">
                                                    ยอด
                                                </th>
                                                <th class="text-uppercase">
                                                    วันที่ถอน
                                                </th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            <tr
                                                v-for="item in transaction_lose"
                                                :key="item.transaction_lose"
                                            >
                                                <td>
                                                    {{ moment(item.created_at).format('YYYY-MM-DD') }}
                                                </td>
                                                <td>
                                                    <VChip label variant="elevated" :color="item.status === true ? 'success' : 'secondary'">
                                                        {{ item.status === true ? 'ถอนแล้ว' : 'ยังไม่ได้ถอน' }}
                                                    </VChip>
                                                </td>
                                                <td class="text-end">{{ item.amount}}</td>
                                                <td>
                                                    {{  item.status === true ? moment(item.updated_at).format('YYYY-MM-DD hh:mm:ss') : '-' }}
                                                </td>
                                            </tr>
                                            </tbody>
                                        </VTable>
                                        <div class="d-flex flex-column gap-6 px-4 mt-5">
                                            <VPagination
                                                v-model="page_transaction_lose"
                                                :length="pagination_transaction_lose.last_page"
                                                :total-visible="10"
                                                @click="getTransactionUser"
                                            />
                                        </div>
                                </VWindowItem>
                            </VWindow>

                        </VCardText>

                    </VCard>
                </VCol>
            </VRow>
        </div>
    </div>
</template>

