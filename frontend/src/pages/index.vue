<script>
  // import { derlimiter } from "@/derlimiter";
  // import { thaiDateNotime }from "@/thaiDateNotime";
  // import service from '@/plugins/axios';
  // import Swal from 'sweetalert2'
  // import { useLoading } from 'vue3-loading-overlay';
  export default {
    components: {
      // useLoading
    },
    data() {
      return {
        // fullPage : true,
        // formContainer : null,
        tital : 'All the best for your new project.' ,
        data : {
          name : '' , 
          surname : ''
        }
      }
    },
    mounted() {
      // this.getData()
    },
    methods: {
      async getData() {
        console.log(this.data)
        // const queryParams = {
        //   page: 1
        // }
        // let data = {
        //   start_date :  `2021-07-01` ,
        //   end_date :  `2021-07-01` ,
        // }
        // await service({ method: 'post', url: '/reports/master/getallreport', data: data, params: queryParams })
        // .then((response) => {
        //   this.tital = response
        // })
        // .catch((error) => {
        //   console.log(error);
        // });
      },
    }
  }
</script>
<template>
  <div>
    <VCard
      class="mb-6"
      title="Kick start your project 🚀"
    >
      <VCardText>{{ tital }}</VCardText>
      <VCardText>
        Please make sure to read our <a
          href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-decoration-none"
        >
          Template Documentation
        </a> to understand where to go from here and how to use our template.
      </VCardText>

      <!-- <VTextField v-model="tital" class="v-label text-body-2 text-high-emphasis" /> -->

      <!-- <VForm @submit.prevent="() => {getData()}">
        <VTextField v-model="data.name" />
        <VTextField v-model="data.surname" />
        <VBtn type="submit">
         Submit
        </VBtn>
      </VForm> -->
     
     
    </VCard>

    <VCard title="Want to integrate JWT? 🔒">
      <VCardText>We carefully crafted JWT flow so you can implement JWT with ease and with minimum efforts.</VCardText>
      <VCardText>Please read our  JWT Documentation to get more out of JWT authentication.</VCardText>
    </VCard>
  </div>
</template>