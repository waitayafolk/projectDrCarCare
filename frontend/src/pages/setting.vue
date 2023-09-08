<script>
  import service from '@/plugins/axios';
  export default {
    components: {
      // useLoading
    },
    data() {
      return {
        tital : 'All the best for your new project.' ,
        company : {
            company_name : '',
            address : '',
            logo : '',
            mobile : '',
            line : '',
            facebook : '',
            point : '',
            file_url : null
        }
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
        async getData() {
            await service({ method: 'get', url: '/company', data: [], params: [] })
            .then((response) => {
                // console.log(response)
                this.company = response.data
            })
            .catch((error) => {
                console.log(error);
            });
        },
        onFileChangeBg(e) {
            // console.log(e.target.files[0])
            const file = e.target.files[0];
            this.company.file_url = URL.createObjectURL(file);
        },
    }
  }
</script>
<template>
  <div>
    <VCard class="mb-6" title="คั้งต่าระบบร้าน">
        <VCardText>
            <VRow>
                <VCol cols="12">
                    <div id="preview">
                        <img v-if="company.file_url != null " :src="company.file_url" />
                    </div>
                </VCol>
                <VCol cols="12">
                    <VTextField type="file" @change="onFileChangeBg" label="ภาพพื้นหลัง" />
                </VCol>
                <VCol cols="6" md="6">
                    <VTextField type="text" v-model="company.company_name" label="ชื่อร้าน" />
                </VCol>
                <VCol cols="6" md="6">
                    <VTextField type="text" v-model="company.address" label="ที่อยู่" />
                </VCol>
                <VCol cols="4" md="4">
                    <VTextField type="text" v-model="company.mobile" label="เบอร์โทร" />
                </VCol>
                <VCol cols="4" md="4">
                    <VTextField type="text" v-model="company.line" label="Line ID" />
                </VCol>
                <VCol cols="4" md="4">
                    <VTextField type="text" v-model="company.facebook" label="Facebook" />
                </VCol>
                <VCol class="text-center" cols="12" md="12">
                    <VBtn color="success">
                      บันทึกข้อมูล
                    </VBtn>
                </VCol>
            </VRow>
        </VCardText>
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