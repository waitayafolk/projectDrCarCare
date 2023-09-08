<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import router from '@/router'
import Swal from 'sweetalert2'
import io from "socket.io-client";
import sound from '../../../src/assets/sound/BestNotificationTones.mp3'
import sound2 from '../../../src/assets/sound/mixkit-happy-bells-notification-937.wav'
import sound1 from '../../../src/assets/sound/sound1.ogg'
import service from "@axios";
const data = ref('')
let count_deposit = ref('')
let count_withdraw = ref('')
let audio_deposit = new Audio(sound1);
let audio_withdraw = new Audio(sound2);
// console.log(import.meta.env.VITE_MY_ENV_VARIABLE_API)
// เชื่อมต่อกับ socket
let socket = io(import.meta.env.VITE_MY_ENV_VARIABLE_API, {
   transports: ["websocket", "polling"],
});

socket.on("connect", () => {
  console.log("[socket connected]: ", socket.connected);
});
socket.on(`transactions`, (data) => {
    console.log("[socket data]: ",data)
    if(localStorage.getItem('permission') === 'agent'){
        if(data.type === 'deposit' && localStorage.getItem('permission') === 'agent' && data.id === localStorage.getItem('id')){
            // count_deposit.value = data.total
            count_deposit.value = '!'
            audio_deposit.play();
        }
        if(data.type === 'withdraw' && localStorage.getItem('permission') === 'agent' && data.id === localStorage.getItem('id')){
            // count_withdraw.value = data.total
            count_withdraw.value = '!'
            audio_withdraw.play();
        }
    }

})
// ส่งข้อมูลไปยัง event ที่ต้องการ
// socket.emit("transactions",data, (response) => {
//   /* Handle response, if any */
//   console.error("[response]: ", response);
// });

// กรณีการเชื่อมต่อถูกตัดขาด
socket.on("disconnect", (reason) => {
   console.log("[socket disconnected]: ", reason);
});
// กรณีการเชื่อมต่อเกิดความผิดพลาด
socket.on("connect_error", (error) => {
   console.error("[connect error]: ", error);
});
const openPage = async () => {
    audio_deposit.pause()
    audio_withdraw.pause()
    const body ={
        agent_id : localStorage.getItem('id')
    }
    await service({ method: 'post', url: `/general/delete/notification`, data: body, params: [] })
        .then((response) => {
            count_deposit.value = 0
            count_withdraw.value = 0
            router.push({ path: '/reports/transactions/deposit-withdraw' })
        })
        .catch((error) => {
            console.log(error);
        });
}
const logout = async()=>{
  localStorage.removeItem('token')
  localStorage.removeItem('isLogin')
  localStorage.removeItem('user_data')
  Swal.fire({
    icon: 'success',
    title: 'Success',
    text: 'Logout success!',
  })
  router.push({ path: '/login_admin' })
}
</script>

<template>
    <!-- <VBadge
      :content="count_deposit"
      :model-value="!!count_deposit"
      bordered
      max="9"
      color="warning"
    >
      <VBtn variant="tonal" size="small" @click="openPage">
        <VIcon
          size="20"
          icon="tabler-circle-arrow-up-filled"
          color="success"
          class="mr-2"
        /> ฝาก
      </VBtn>
    </VBadge> -->
    <!-- <VBadge
      :content="count_withdraw"
      :model-value="!!count_withdraw"
      bordered
      color="warning"
      class="px-3"
      max="9"
    >
      <VBtn variant="tonal" size="small" @click="openPage">
        <VIcon
          size="20"
          icon="tabler-circle-arrow-down-filled"
          color="error"
          class="mr-2"
        />
        ถอน
      </VBtn>
    </VBadge> -->
  <VBadge
    dot
    location="bottom right"
    offset-x="3"
    offset-y="3"
    bordered
    color="success"
  >
    <VAvatar
      class="cursor-pointer"
      color="primary"
      variant="tonal"
    >
      <VImg :src="avatar1" />

      <!-- SECTION Menu -->
      <VMenu
        activator="parent"
        width="230"
        location="bottom end"
        offset="14px"
      >
        <VList>
          <!-- 👉 User Avatar & Name -->
          <VListItem>
            <template #prepend>
              <VListItemAction start>
                <VBadge
                  dot
                  location="bottom right"
                  offset-x="3"
                  offset-y="3"
                  color="success"
                >
                  <VAvatar
                    color="primary"
                    variant="tonal"
                  >
                    <VImg :src="avatar1" />
                  </VAvatar>
                </VBadge>
              </VListItemAction>
            </template>

            <VListItemTitle class="font-weight-semibold">
              John Doe
            </VListItemTitle>
            <VListItemSubtitle>Admin</VListItemSubtitle>
          </VListItem>

          <VDivider class="my-2" />

          <!-- 👉 Profile -->
          <!-- <VListItem link>
            <template #prepend>
              <VIcon
                class="me-2"
                icon="tabler-user"
                size="22"
              />
            </template>

            <VListItemTitle>Profile</VListItemTitle>
          </VListItem> -->

          <!-- 👉 Settings -->
          <!-- <VListItem link>
            <template #prepend>
              <VIcon
                class="me-2"
                icon="tabler-settings"
                size="22"
              />
            </template>

            <VListItemTitle>Settings</VListItemTitle>
          </VListItem> -->

          <!-- 👉 Pricing -->
          <!-- <VListItem link>
            <template #prepend>
              <VIcon
                class="me-2"
                icon="tabler-currency-dollar"
                size="22"
              />
            </template>

            <VListItemTitle>Pricing</VListItemTitle>
          </VListItem> -->

          <!-- 👉 FAQ -->
          <!-- <VListItem link>
            <template #prepend>
              <VIcon
                class="me-2"
                icon="tabler-help"
                size="22"
              />
            </template>

            <VListItemTitle>FAQ</VListItemTitle>
          </VListItem> -->

          <!-- Divider -->
          <VDivider class="my-2" />

          <!-- 👉 Logout -->
          <VListItem @click="logout()" >
            <template #prepend>
              <VIcon
                class="me-2"
                icon="tabler-logout"
                size="22"
              />
            </template>

            <VListItemTitle>Logout</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
  </VBadge>
</template>
