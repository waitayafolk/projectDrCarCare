<script>
  import service from '@/plugins/axios';
  import Swal from 'sweetalert2'
  import { thaiDateNotime }from "@/thaiDateNotime";
  export default {
    components: {
      // useLoading
    },
    data() {
      return {
        openPay : false , 
        thaiDateNotime,
        tital : 'All the best for your new project.' ,
        customers : [] , 
        service_group : [],
        service : [] , 
        show : false ,
        detail : false ,
        billDetail : [],
        data : {
            customer_id : null , 
            service_group_id : null , 
            service : [] ,
            licen : '' , 
        },
        bills : [] ,
        pay_bill : {
            bill_id : 0 ,
            pay : 'cash'
        },
        date : `${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,'0')}-${String(new Date().getDate()).padStart(2,'0')}`,
      }
    },
    mounted() {
        this.getBill()
        this.getDataCuctomer()
        this.getDataServiceGroup()
    },
    methods: {
        async openModal(){
            this.data.customer_id = null 
            this.data.service_group_id = null 
            this.data.service = []
            this.show = true
        },
        async getBill() {
            let data = {
                date : this.date
            }
            await service({ method: 'post', url: '/endbill/bill', data: data, params: [] })
            .then((response) => {
                this.bills = response.data
            })
            .catch((error) => {
                console.log(error);
            });
        },
        async getDataCuctomer() {
            await service({ method: 'get', url: '/customers', data: [], params: [] })
            .then((response) => {
                for(let item of response.data){
                    item.name = `${item.name} : ${item.mobile}` 
                }
                this.customers = response.data
            })
            .catch((error) => {
                console.log(error);
            });
        },
        async getDataServiceGroup() {
            await service({ method: 'get', url: '/services/group', data: [], params: [] })
            .then((response) => {
                this.service_group = response.data
            })
            .catch((error) => {
                console.log(error);
            });
        },
        async getDataService() {
            await service({ method: 'get', url: `/services/service_id/${this.data.service_group_id}`, data: [], params: [] })
            .then((response) => {
                this.service = response.data
            })
            .catch((error) => {
                console.log(error);
            });
        },
        async choose(item){
            let index = this.data.service.findIndex(data => data.id === item.id);
            if(index == -1){
                this.data.service.push({
                    id : item.id , 
                    price : item.price ,
                    discount : 0,
                    name : item.title 
                })
            }
        },
        async deleteArray (item){
            let index = this.data.service.findIndex(data => data.id === item.id);
            if(index > -1){
                this.data.service.splice(index, 1);
            }
        },  
        async saveDate (){
            if(this.data.customer_id == null || this.data.service_group_id == null || this.data.service.length == 0){
                this.show = false
                return  Swal.fire({ icon: 'error', title: 'รับรถไม่สำเร็จ', text: 'กรุณากรอกข้อมูลให้ครบ !',})
            }
            await service({ method: 'post', url: `/endbill`, data: this.data , params: [] })
            .then((response) => {
                if(response.status == "success"){
                    Swal.fire({ icon: 'success', title: 'รับรถสำเร็จ', text: 'รับรถรอล้างสำเร็จแล้ว !',})
                    this.show = false
                    this.getBill()
                }else{
                    Swal.fire({ icon: 'error', title: 'รับรถไม่สำเร็จ', text: 'กรุณาลองใหม่อีกครั้ง !',})
                    this.show = false
                }
            })
            .catch((error) => {
                console.log(error);
            });
        },
        async updatePercen(percen , bill_id){
            let data = {
                percen : percen , 
                bill_id : bill_id
            }
            await service({ method: 'post', url: `/endbill/update`, data: data, params: [] })
            .then((response) => {
                if(response.status == "success"){
                    Swal.fire({ icon: 'success', title: 'อัพเดทสำเร็จ', text: 'อัพเดทสถานะสำเร็จ !',})
                    this.show = false
                    this.getBill()
                }else{
                    Swal.fire({ icon: 'error', title: 'อัพเดทไม่สำเร็จ', text: 'กรุณาลองใหม่อีกครั้ง !',})
                    this.show = false
                }
            })
            .catch((error) => {
                console.log(error);
            });
        },
        async payBill(item){
            this.openPay = true
            this.pay_bill.bill_id = item.id 
            this.pay_bill.pay = {name : 'เงินสด' , value : 'cash'}
        },
        async savePay(){
            await service({ method: 'post', url: `/endbill/pay`, data: this.pay_bill, params: [] })
            .then((response) => {
                if(response.status == "success"){
                    Swal.fire({ icon: 'success', title: 'อัพเดทสำเร็จ', text: 'อัพเดทสถานะสำเร็จ !',})
                     this.openPay = false
                    this.getBill()
                }else{
                    Swal.fire({ icon: 'error', title: 'อัพเดทไม่สำเร็จ', text: 'กรุณาลองใหม่อีกครั้ง !',})
                     this.openPay = false
                }
            })
            .catch((error) => {
                console.log(error);
            });
        },
        async deleteItem(item){
            Swal.fire({
                title: 'ต้องการลบข้อมูล',
                text: "ต้องการลบข้อมูลบิลนี้หรือไม่!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!'
            }).then(async(result) => {
                if (result.isConfirmed) {
                    await service({ method: 'delete', url: `/endbill/${item.id}`, data: [], params: [] })
                    .then((response) => {
                        if(response.status == "success"){
                            Swal.fire({ icon: 'success', title: 'อัพเดทสำเร็จ', text: 'อัพเดทสถานะสำเร็จ !',})
                            this.getBill()
                        }else{
                            Swal.fire({ icon: 'error', title: 'อัพเดทไม่สำเร็จ', text: 'กรุณาลองใหม่อีกครั้ง !',})
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                }
            })
            
        }
    }
  }
</script>
<template>
  <div>
    <VCard class="mb-6" title="รับรถ">
        <VCardText>
            <VRow>
                <VCol cols="6" md="6">
                    รับรถเข้าล้าง
                </VCol>
                <VCol class="text-end" cols="6" md="6">
                    <VBtn color="primary" @click="openModal()" >
                        <VIcon start icon="tabler-receipt"/>
                        รับรถลูกค้า
                    </VBtn>
                </VCol>
            </VRow>
            <VRow>
                <VCol class="text-start" cols="6" md="6">
                    <VTextField type="date" v-model="date" label="ค้นหาตามวันที่" />
                </VCol>
                <VCol class="text-start" cols="6" md="6">
                    <VBtn @click="getBill()">
                        ค้นหา
                    </VBtn>
                </VCol>
            </VRow>
            <VTable fixed-header density="compact" class="text-no-wrap">
                <thead>
                    <tr>
                        <!-- <th style="text-align: start;">id</th> -->
                        <th style="text-align: start;">สำเร็จ</th>
                        <th style="text-align: start;">ประเภท</th>
                        <th style="text-align: start;">ลูกค้า</th>
                        <th style="text-align: start;">เบอร์โทรลูกค้า</th>
                        <th style="text-align: start;">แอดมินผู้รับผิดชอบ</th>
                        <th style="text-align: end;">ค่าบริการ</th>
                        <th style="text-align: end;">ส่วนลด</th>
                        <th style="text-align: end;">รวม</th>
                        <th style="text-align: center;">การชำระ</th>
                        <th style="text-align: center;">สถานะ</th>
                        <th style="text-align: center;">วันที่รับรถ</th>
                        <th style="text-align: center;">รายการ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item of bills">
                        <!-- <td style="text-align: start;">{{ item.id }}</td> -->
                        <td style="text-align: start;">{{ item.percen }} %</td>
                        <td style="text-align: start;">{{ item.name_service }}</td>
                        <td style="text-align: start;">{{ item.name_customer }}</td>
                        <td style="text-align: start;">{{ item.mobile }}</td>
                        <td style="text-align: start;">{{ item.name_admin }}</td>
                        <td style="text-align: end;">{{ item.price }}</td>
                        <td style="text-align: end;">{{ item.discount }}</td>
                        <td style="text-align: end;">{{ item.total }}</td>
                        <th style="text-align: center;">
                            <div v-if="item.pay == 'no'">
                                <VBtn size="small" color="error" @click="payBill(item)" block class="mt-1">
                                    ยังไม่ชำระ
                                </VBtn>
                            </div>
                            <div v-if="item.pay == 'yes'">
                                <VBtn size="small" color="success" block class="mt-1">
                                    ชำระแล้ว {{ item.pay_type == 'cash' ? 'เงินสด' : 'เงินโอน' }}
                                </VBtn>
                                <!-- <VChip color="success">ชำระแล้ว</VChip> -->
                            </div>
                        </th>
                        <th style="text-align: center;">
                            <div v-if="item.status == 'success'"><VChip color="success">เสร็จแล้ว</VChip></div>
                            <div v-if="item.status == 'wait'"><VChip color="error">กำลังล้าง</VChip></div>
                        </th>
                        <td style="text-align: center;">
                            {{ thaiDateNotime(item.created_date) }}
                        </td>
                        <td style="text-align: center;">
                            <td>
                                <VBtn size="small" color="primary" @click="detail = true; billDetail = item.detail " block class="mt-1">
                                    รายการ
                                </VBtn>
                                <VBtn :disabled="item.percen == 100 ? true : false" size="small" color="info" @click="updatePercen(30 , item.id)" block class="mt-1">
                                    สำเร็จ 30%
                                </VBtn>
                                <VBtn :disabled="item.percen == 100 ? true : false" size="small" color="info" @click="updatePercen(100 , item.id)" block class="mt-1">
                                    สำเร็จ 100%
                                </VBtn>
                                <VBtn target="_blank" :href="`/bill?bill_id=${item.id}`" size="small" color="success" block class="mt-1">
                                    บิล
                                </VBtn>
                                <VBtn @click="deleteItem(item)" size="small" color="error" block class="mt-1">
                                    ลบรายการ
                                </VBtn>
                            </td>
                        </td>
                    </tr>
                </tbody>
            </VTable>
        </VCardText>
        <VDialog v-model="show" max-width="800">
            <DialogCloseBtn @click="show = false" />
            <VCard>
                <VCardTitle>
                    รับรถลูกค้า
                </VCardTitle>
                <VCardText>
                    <VRow>
                        <VCol cols="12">
                            <v-autocomplete
                                v-model="data.customer_id"
                                label="กรุณาเลือกรายชื่อลูกค้า"
                                auto-select-first
                                :items="customers"
                                hide-no-data
                                hide-selected
                                item-title="name"
                                item-value="id"
                                item-no="bank_no"
                                class="mb-3"
                            >
                            </v-autocomplete>
                            <!-- <VSelect v-model="data.customer_id" :items="customers" item-title="name" item-value="id" label="ลูกค้า" persistent-hint/> -->
                        </VCol>
                        <VCol class="text-start" cols="12" md="12">
                            <VTextField type="text" v-model="data.licen" label="ป้ายทะเบียน" />
                        </VCol>
                        <VCol cols="12">
                            <VSelect v-model="data.service_group_id" :items="service_group" item-title="name" item-value="id" label="ประเภทต่าบริการ" persistent-hint/>
                        </VCol>
                        <VCol cols="12">
                            <VBtn color="primary" @click="getDataService()">
                                ค้นหาค่าบริการ
                            </VBtn>
                        </VCol>
                        <VCol cols="12">
                            <VTable fixed-header density="compact" class="text-no-wrap">
                                <thead>
                                    <tr>
                                        <th style="text-align: start;">id</th>
                                        <th style="text-align: start;">บริการ</th>
                                        <th style="text-align: end;">ค่าบริการ</th>
                                        <th style="text-align: center;"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item of service">
                                        <td style="text-align: start;">{{ item.id }}</td>
                                        <td style="text-align: start;">{{ item.title }}</td>
                                        <td style="text-align: end;">{{ item.price }}</td>
                                        <td style="text-align: center;">
                                            <VBtn variant="tonal" color="primary" @click="choose(item)">
                                                เลือก
                                            </VBtn>   
                                        </td>
                                    </tr>
                                </tbody>
                            </VTable>
                        </VCol>
                        <div v-for="item of data.service">
                            <VRow style="padding: 5px;">
                                <VCol style="padding: 15px;" cols="3" md="3">
                                    บริการ : {{ item.name }}
                                    <!-- <VTextField :disabled="true" type="text" v-model="item.name" label="บริการ" /> -->
                                </VCol>
                                <VCol cols="2" md="2">
                                    <VTextField type="number" v-model="item.price" label="ค่าบริการ" />
                                </VCol>
                                <VCol cols="2" md="2">
                                    <VTextField type="number" v-model="item.discount" label="ส่วนลด" />
                                </VCol>
                                <VCol style="padding: 15px;" cols="3" md="3">
                                    รวม : {{ item.price -  item.discount}}
                                </VCol>
                                <VCol cols="1" md="1">
                                    <VBtn variant="tonal" color="error" @click="deleteArray(item)">
                                        ลบ
                                    </VBtn>   
                                    <!-- <VTextField type="number" v-model="item.discount" label="ส่วนลด" /> -->
                                </VCol>
                            </VRow>
                            
                        </div>
                    </VRow>
                </VCardText>
                <VCardText class="d-flex justify-end flex-wrap gap-3">
                    <VBtn variant="tonal" color="secondary" @click="show = false">
                        ปิด
                    </VBtn>
                    <VBtn color="primary" @click="saveDate()">
                        บันทึกข้อมูล
                    </VBtn>
                </VCardText>
            </VCard>
        </VDialog>
        <VDialog v-model="detail" max-width="800">
            <DialogCloseBtn @click="detail = false" />
            <VCard>
                <VCardTitle>
                    รายการ
                </VCardTitle>
                <VCardText>
                    <VTable fixed-header density="compact" class="text-no-wrap">
                        <thead>
                            <tr>
                                <!-- <th style="text-align: start;">id</th> -->
                                <th style="text-align: start;">รายการ</th>
                                <th style="text-align: end;">ราคา</th>
                                <th style="text-align: end;">ส่วนลด</th>
                                <th style="text-align: end;">รวม</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item of billDetail">
                                <td style="text-align: start;">{{ item.title }} </td>
                                <td style="text-align: end;">{{ item.price }}</td>
                                <td style="text-align: end;">{{ item.discount }}</td>
                                <td style="text-align: end;">{{ item.total }}</td>
                            </tr>
                        </tbody>
                    </VTable>
                </VCardText>
                <VCardText class="d-flex justify-end flex-wrap gap-3">
                    <VBtn variant="tonal" color="secondary" @click="detail = false">
                        ปิด
                    </VBtn>
                </VCardText>
            </VCard>
        </VDialog>
        <VDialog v-model="openPay" max-width="800">
            <DialogCloseBtn @click="openPay = false" />
            <VCard>
                <VCardTitle>
                    ชำระบิล
                </VCardTitle>
                <VCardText>
                    <VTable fixed-header density="compact" class="text-no-wrap">
                        <VCol cols="12">
                            <VSelect v-model="pay_bill.pay" :items="[
                                {name : 'เงินสด' , value : 'cash'} ,{name : 'เงินโอน' , value : 'credit'} 
                            ]" item-title="name" item-value="value" label="ลูกค้า" persistent-hint/>
                        </VCol>
                    </VTable>
                </VCardText>
                <VCardText class="d-flex justify-end flex-wrap gap-3">
                    <VBtn variant="tonal" color="secondary" @click="openPay = false">
                        ปิด
                    </VBtn>
                    <VBtn color="primary" @click="savePay()">
                        บันทึกข้อมูล
                    </VBtn>
                </VCardText>
            </VCard>
        </VDialog>
    </VCard>
  </div>
</template>
<style>
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 300px;
  /* max-height: 500px; */
}
</style>