import home_view from './components/home_view.vue'
import sign_up from './components/sign_up.vue'
import log_in from './components/log_in.vue'
import addres_view from './components/addres_view.vue'
import updateres_view from './components/updateres_view.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes=[
    {
        name:'home_view',
        component:home_view,
        path:'/'
    },
    {
        name:'sign_up',
        component:sign_up,
        path:'/sign_up'
    },
    {
        name:'log_in',
        component:log_in,
        path:'/log_in'
    },
    {
        name:'add',
        component:addres_view,
        path:'/add'
    },
    {
        name:'update',
        component:updateres_view,
        path:'/update/:id'
    },
    

]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router