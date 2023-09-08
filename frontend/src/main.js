/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import layoutsPlugin from '@/plugins/layouts'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import '@core/scss/template/index.scss'
import '@styles/styles.scss'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import moment from "moment"

loadFonts()


// Create vue app
const app = createApp(App)

router.beforeEach( async(to, from , next) => {
    try{
        
        let isLogin = JSON.parse(localStorage.getItem('isLogin'))
        // console.log(isLogin)
        if (to.path == '/login_admin' || to.path == '/login' || to.path == '/register'){
            next()
            // return true
        }else{
            if(isLogin === true){
                next()
                // console.log(true)
                // return true
            }else{
                next('login_admin')
                // console.log(false)
                // // return true
                // return to.path = "/"
            }
        }
    }catch(error){
        console.log(error.message)
    }

})
// Use plugins
app.use(vuetify)
app.use(createPinia())
app.use(router)
app.use(layoutsPlugin)
// app.use(VueNumerals)
// app.use(PusherVue, {
//     api_key: '1574648',
//     options: {
//         cluster: 'ap1',
//         encrypted: true,
//     }
// })

// Mount vue app
app.mount('#app')
