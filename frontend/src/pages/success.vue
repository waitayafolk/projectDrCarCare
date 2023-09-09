<script setup>
import axios from 'axios'
import {
  requiredValidator,
} from '@validators'
import Swal from 'sweetalert2'
import router from '@/router'
const mobile = ref('')
const usersInstance = axios.create({
  baseURL: import.meta.env.VITE_MY_ENV_VARIABLE,
});

const Login = async()=>{
  let body = {
    mobile : mobile.value ,
  }
  
  let res = await usersInstance.post('login/customer/' , body , {
  headers:{
    'Content-Type': 'application/json'
  }}).then((response) => response.data).catch((error) => { return error.response.data});
  if(res.status == "success"){
    localStorage.setItem('isLogin' , JSON.stringify(true))
    localStorage.setItem('token' , JSON.stringify(res.token))
    localStorage.setItem('user_data' , JSON.stringify(res.data))
    router.push({ path: '/customer' })
    Swal.fire({ icon: 'success', title: 'Success', text: 'Login success!',})
  }else{
    Swal.fire({ icon: 'error', title: 'เข้าสู่ระบบไม่สำเร็จ...', text: 'ไม่มีสมาชิกในระบบ!',})
  }
}
</script>

<template>
  <VRow no-gutters class="auth-wrapper">
    <VCol cols="12" lg="12" class="d-flex align-center justify-center" >
      <VCard class="mt-12 mt-sm-0 pa-4">
        <VCardText>
          <h5 class="text-h5 font-weight-semibold mb-1">
            ทำรายการสำเร็จ 👋🏻
          </h5>
          <p class="mb-0">
            Dr.Carcare
          </p>
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
