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
const username = ref('')
const password = ref('')
const rememberMe = ref(false)
const currentTab = ref(0)
const usersInstance = axios.create({
  baseURL: import.meta.env.VITE_MY_ENV_VARIABLE,
});

const Login = async()=>{
  let body = {
    username : username.value ,
    password : password.value ,
  }

  let res = await usersInstance.post('login/' , body , {
  headers:{
    'Content-Type': 'application/json'
  }}).then((response) => response.data).catch((error) => { return error.response.data});
  if(res.status == "success"){

    localStorage.setItem('isLogin' , JSON.stringify(true))
    localStorage.setItem('token' , JSON.stringify(res.token))
    localStorage.setItem('user_data' , JSON.stringify(res.data))
    
    router.push({ path: '/' })
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Login success!',
    })
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
  }
}
</script>

<template>
  <VRow
    no-gutters
    class="auth-wrapper"
  >
    <VCol
      lg="8"
      class="d-none d-lg-flex"
    >
      <div class="position-relative auth-bg rounded-lg w-100 ma-8 me-0">
        <div class="d-flex align-center justify-center w-100 h-100">
          <VImg
            max-width="505"
            :src="authThemeImg"
            class="auth-illustration mt-16 mb-2"
          />
        </div>

        <VImg
          :src="authThemeMask"
          class="auth-footer-mask"
        />
      </div>
    </VCol>

    <VCol
      cols="12"
      lg="4"
      class="d-flex align-center justify-center"
    >
      <VCard
        flat
        :max-width="500"
        class="mt-12 mt-sm-0 pa-4"
      >
        <VCardText>
          <!-- <VNodeRenderer
            :nodes="themeConfig.app.logo"
            class="mb-6"
          /> -->

          <h5 class="text-h5 font-weight-semibold mb-1">
            Welcome to ระบบหลังบ้าน ! 👋🏻
          </h5>
          <p class="mb-0">
            เข้าสู่ระบบหลังบ้าน Car Care
          </p>
        </VCardText>
        <VCardText>
          <VAlert
            color="primary"
            variant="tonal"
          >
            <p class="text-caption mb-2">
              Admin : <strong>กรอก Username และ Password เพื่อเข้าระบบ</strong>
            </p>
          </VAlert>
        </VCardText>
        <VCardText>
          <!-- <div class="d-flex align-center flex-wrap justify-space-between mt-2 mb-4">
            <VTabs v-model="currentTab">
            <VTab>Admin</VTab>
            <VTab>Master</VTab>
            <VTab>agent</VTab>
            <VTab>Marketing</VTab>
          </VTabs>
          </div> -->

          <VForm @submit.prevent="() => {Login()}">
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <VTextField
                  v-model="username"
                  label="Username"
                  type="text  "
                  :rules="[requiredValidator]"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <VTextField
                  v-model="password"
                  label="Password"
                  :rules="[requiredValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />

                <div class="d-flex align-center flex-wrap justify-space-between mt-2 mb-4">

                </div>

                <VBtn block type="submit" >
                  Login
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
