<script>
  import service from '@/plugins/axios';
  import moment from "moment"
  import { thaiDateNotime }from "@/thaiDateNotime";
  import { derlimiter } from "@/derlimiter"
  export default {
    components: {
    },
    data() {
      return {
        tital : 'All the best for your new project.' ,
        data : {
          bill : 0 ,
          billDate : 0 , 
          billMonth : 0 , 
          customer : 0 ,
          service : 0
        }
      }
    },
    mounted() {
        this.getData()
    },
    methods: {
      async getData() {
        await service({ method: 'post', url: `/report/dashbord`, data: [], params: [] })
        .then((response) => {
          this.data = response.data
           console.log(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
      },
    }
  }
</script>
<template>
  <div>
    <VCard class="mb-6" title="Dashbord">
      <VCardText>
        <VRow>
          <VCol md="4" sm="12">
            <VSheet class="pa-1">
              <VCard color="error">
                <VCardText style="font-size: 28px;">{{ data.customer }} คน</VCardText>
                <VCardText>ลูกค้าทั้งหมด</VCardText>
              </VCard>
            </VSheet>
          </VCol>
          <VCol md="4" sm="12">
            <VSheet class="pa-1">
              <VCard color="primary">
                <VCardText style="font-size: 28px;">{{ data.service }} รายการ</VCardText>
                <VCardText>บริการทั้งหมด</VCardText>
              </VCard>
            </VSheet>
          </VCol>
          <VCol md="4" sm="12">
            <VSheet class="pa-1">
              <v-card color="warning">
                <VCardText style="font-size: 28px;">{{ data.bill }} บิล</VCardText>
                <VCardText>บิลทั้งหมด</VCardText>
              </v-card>
            </VSheet>
          </VCol>
          <VCol md="6" sm="12">
            <VSheet class="pa-1">
              <v-card color="info">
                <VCardText style="font-size: 28px;">{{ data.billMonth }} บิล</VCardText>
                <VCardText>บิลในเดือนนี้</VCardText>
              </v-card>
            </VSheet>
          </VCol>
          <VCol md="6" sm="12">
            <VSheet class="pa-1">
              <v-card color="success">
                <VCardText style="font-size: 28px;">{{ data.billDate }} บิล</VCardText>
                <VCardText>บิลของวันนี้</VCardText>
              </v-card>
            </VSheet>
          </VCol>
        </VRow>
      </VCardText>
      <VCardText>Please read our  JWT Documentation to get more out of JWT authentication.</VCardText>
    </VCard>
  </div>
</template>