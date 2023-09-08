<script>
  import service from '@/plugins/axios';
  export default {
    components: {
      // useLoading
    },
    data() {
      return {
        tital : 'All the best for your new project.' ,
        customers : [] , 
        service_group : [],
        service : [] , 
        show : false ,
        data : {
            customer_id : null , 
            service_group_id : null , 
            service : [] ,
        }
      }
    },
    mounted() {
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
        async getDataCuctomer() {
            await service({ method: 'get', url: '/customers', data: [], params: [] })
            .then((response) => {
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
            this.data.service.push({
                id : item.id , 
                price : item.price ,
                discount : 0,
                name : item.title 
            })
            // console.log(item)
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
            <VTable fixed-header density="compact" class="text-no-wrap">
                <thead>
                    <tr>
                        <th style="text-align: start;">id</th>
                        <th style="text-align: start;">ลูกค้า</th>
                        <th style="text-align: start;">เบอร์โทรลูกค้า</th>
                        <th style="text-align: start;">แอดมินผู้รับผิดชอบ</th>
                        <th style="text-align: end;">ค่าบริการ</th>
                        <th style="text-align: end;">ส่วนลด</th>
                        <th style="text-align: end;">รวม</th>
                        <th style="text-align: center;">วันที่รับรถ</th>
                        <th style="text-align: center;">รายการ</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- <tr v-for="item of admins">
                        <td style="text-align: start;">{{ item.username }}</td>
                        <td style="text-align: start;">{{ item.code }}</td>
                        <td style="text-align: start;">{{ item.name }}</td>
                        <td style="text-align: center;">
                            <div style="color: orange;" v-if="item.role == 1"><VIcon start color="warning" icon="tabler-star-filled"/>เจ้าของ</div>
                            <div v-if="item.role == 2">พนักงาน</div>
                        </td>
                        <td style="text-align: center;">
                            <div v-if="item.status == true"><VChip color="success">เปิด</VChip></div>
                            <div v-if="item.status == false"><VChip color="error">ระงับการใช้งาน</VChip></div>
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
                    </tr> -->
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
                            <VSelect v-model="data.customer_id" :items="customers" item-title="name" item-value="id" label="ลูกค้า" persistent-hint/>
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
                                <VCol cols="3" md="3">
                                    <VTextField type="number" v-model="item.price" label="ค่าบริการ" />
                                </VCol>
                                <VCol cols="3" md="3">
                                    <VTextField type="number" v-model="item.discount" label="ส่วนลด" />
                                </VCol>
                                <VCol style="padding: 15px;" cols="3" md="3">
                                    รวม : {{ item.price -  item.discount}}
                                </VCol>
                            </VRow>
                            
                        </div>
                    </VRow>
                </VCardText>
                <VCardText class="d-flex justify-end flex-wrap gap-3">
                    <VBtn variant="tonal" color="secondary" @click="show = false">
                        ปิด
                    </VBtn>
                    <VBtn color="primary">
                        <!-- @click="saveDataPassword()" -->
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