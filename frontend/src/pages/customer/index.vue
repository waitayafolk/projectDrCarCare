<script>
  // import { derlimiter } from "@/derlimiter";
  // import { thaiDateNotime }from "@/thaiDateNotime";
  // import service from '@/plugins/axios';
  // import Swal from 'sweetalert2'
    import navItems from '@/navigation/vertical'
    import { useThemeConfig } from '@core/composable/useThemeConfig'

    // Components
    import Footer from '@/layouts/components/Footer.vue'
    import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
    import UserProfile from '@/layouts/components/UserProfile.vue'

    // @layouts plugin
    import { VerticalNavLayout } from '@layouts'
    // import VerticalNavLayout from '@/layouts/components/DefaultLayoutWithVerticalNav.vue';
    export default {
        components: {
            navItems,
            useThemeConfig,
            Footer,
            NavbarThemeSwitcher,
            UserProfile,
            VerticalNavLayout
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
    <VerticalNavLayout>
        <template #navbar="{ toggleVerticalOverlayNavActive }">
            <div class="d-flex h-100 align-center">
                
                <VBtn icon variant="text" color="default" class="ms-n3" size="small">
                    <VIcon icon="tabler-home-2" size="24"/>
                </VBtn>

                <VSpacer />
                <VBtn icon variant="text" color="default" class="ms-n3" size="small">
                    <VIcon icon="tabler-settings" size="24"/>
                </VBtn>

                <VSpacer />
                <VBtn icon variant="text" color="default" class="ms-n3" size="small">
                    <VIcon icon="tabler-truck" size="24"/>
                </VBtn>

                <VSpacer />
                <VBtn icon variant="text" color="default" class="ms-n3" size="small">
                    <VIcon  icon="tabler-square-arrow-right" size="24"/>
                </VBtn>
            </div>
        </template>

        <VCard title="ระบบสมาชิก Dr.Carcare">
            <VCardText>We carefully crafted JWT flow so you can implement JWT with ease and with minimum efforts.</VCardText>
            <VCardText>Please read our  JWT Documentation to get more out of JWT authentication.</VCardText>
        </VCard>

        <!-- <template #footer>
            <Footer />
        </template> -->
    </VerticalNavLayout>
  </div>
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