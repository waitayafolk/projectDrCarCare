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
        tital : 'All the best for your new project.' ,
        company : {
            company_name : '',
            address : '',
            logo : '',
            mobile : '',
            line : '',
            facebook : '',
            point : '',
            file_url : null , 
            file : null
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
                console.log(this.company)
            })
            .catch((error) => {
                console.log(error);
            });
        },
        onFileChangeBg(e) {
            // console.log(e.target.files[0])
            const file = e.target.files[0];
            this.company.file_url = URL.createObjectURL(file);
            this.company.file = file;
        },
        async uploadImage() {
          const formData = new FormData();
          formData.append("images", this.company.file);
          await service({ method: 'post', url: '/upload', data: formData, params: [] })
            .then((response) => {
              if(response.status == 'success'){
                Swal.fire({ icon: 'success', title: 'บันทึกสำเร็จ', text: 'บันทึกข้อมูลสำเร็จ !',})
              }
            })
            .catch((error) => {
                console.log(error);
            });
        },
        async save() {
          await service({ method: 'post', url: '/company/save-company', data: this.company, params: [] })
            .then((response) => {
              if(response.status == 'success'){
                Swal.fire({ icon: 'success', title: 'บันทึกสำเร็จ', text: 'บันทึกข้อมูลสำเร็จ !',})
              }
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
    <VCard class="mb-6" title="คั้งต่าระบบร้าน">
        <VCardText>
            <VRow>
                <VCol cols="12">
                    <div id="preview">
                        <img v-if="company.file_url != null " :src="company.file_url" />
                        <img v-if="company.logo != null " :src="`http://localhost:4600/upload/image/${company.logo}`" />
                    </div>
                </VCol>
                <VCol cols="12">
                    <VTextField type="file" @change="onFileChangeBg" label="ภาพพื้นหลัง" />
                </VCol>
                <VCol class="text-center" cols="12" md="12">
                  <VBtn color="primary" @click="uploadImage()">
                    อัพโหลดภาพ
                  </VBtn>
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
                    <VBtn color="success" @click="save()">
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