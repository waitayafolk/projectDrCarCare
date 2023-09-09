<script setup>
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import axios from 'axios'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import {
  emailValidator,
  requiredValidator,
} from '@validators'
import Swal from 'sweetalert2'
import authV2LoginIllustrationBorderedDark from '@images/pages/auth-v2-login-illustration-bordered-dark.png'
import authV2LoginIllustrationBorderedLight from '@images/pages/auth-v2-login-illustration-bordered-light.png'
import authV2LoginIllustrationDark from '@images/pages/auth-v2-login-illustration-dark.png'
import authV2LoginIllustrationLight from '@images/pages/auth-v2-login-illustration-light.png'
import authV2MaskDark from '@images/pages/misc-mask-dark.png'
import authV2MaskLight from '@images/pages/misc-mask-light.png'
import router from '@/router'

const authThemeImg = useGenerateImageVariant(authV2LoginIllustrationLight, authV2LoginIllustrationDark, authV2LoginIllustrationBorderedLight, authV2LoginIllustrationBorderedDark, true)
const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)
const isPasswordVisible = ref(false)
const mobile = ref('')
const name = ref('')
const rememberMe = ref(false)
const currentTab = ref(0)
const usersInstance = axios.create({
  baseURL: import.meta.env.VITE_MY_ENV_VARIABLE,
});

const Login = async()=>{
  let user_id = new URL(window.location).search.split('?user_id=')[1]
  let body = {
    mobile : mobile.value ,
    name : name.value,
    user_id : user_id ,
  }

  let res = await usersInstance.post('register/' , body , {
  headers:{
    'Content-Type': 'application/json'
  }}).then((response) => response.data).catch((error) => { return error.response.data});
  if(res.status == "success"){

    localStorage.setItem('isLogin' , JSON.stringify(true))
    localStorage.setItem('token' , JSON.stringify(res.token))
    localStorage.setItem('user_data' , JSON.stringify(res.data))
    
    router.push({ path: '/success' })
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Login success!',
    })
  }else{
    Swal.fire({
      icon: 'error',
      title: 'เข้าสู่ระบบไม่สำเร็จ...',
      text: 'ไม่มีสมาชิกในระบบ!',
    })
  }
}
</script>

<template>
    <VRow
        no-gutters
        class="auth-wrapper"
    >

        <VCol cols="12" lg="12" class="d-flex align-center justify-center" >
            <!-- style="background-color: rgb(247, 178, 240);" -->
            <VCard  class="mt-12 mt-sm-0 pa-4">
                <VCardText>
                    <h5 class="text-h5 font-weight-semibold mb-1">
                        สมัครสมาขิก Dr.Carcare ! 👋🏻
                    </h5>
                </VCardText>
                <VCardText>
                    <VForm @submit.prevent="() => {Login()}">
                        <VRow>
                            <VCol cols="12">
                                <VTextField v-model="name" label="ชื่อ" type="text" :rules="[requiredValidator]"/>
                            </VCol>
                            <VCol cols="12">
                                <VTextField v-model="mobile" label="เบอร์โทร" type="text" :rules="[requiredValidator]"/>
                            </VCol>
                            <VCol cols="12">
                                <VBtn block type="submit" >
                                    ลงทะเบียน
                                </VBtn>
                            </VCol>
                        </VRow>
                    </VForm>
                </VCardText>
            </VCard>
        </VCol>
    </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>

<route lang="yaml">
meta:
  layout: blank
  action: read
  subject: Auth
  redirectIfLoggedIn: true
</route>
