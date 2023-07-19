import {createRouter, createWebHistory} from 'vue-router'
//import hoMe from "../views/hoMe.vue"
import firstPage from "../views/firstPage.vue"
import signUp from "../views/signUp.vue"
import loGin from "../views/loGin.vue"
import abOut from "../views/abOut.vue"
import postForm from "../components/postForm.vue"
import homePage from "../views/homePage.vue"
import poSts from "../views/poSts.vue"
import myPosts from "../views/myPosts.vue"


const routes=[
    {
        path:'/',
        name:'firstPage',
        component:firstPage
    },
    {
        path:'/signup',
        name:'signUp',
        component:signUp
    },
    {
        path:'/login',
        name:'loGin',
        component:loGin
    },
    {
        path:'/about',
        name:'abOut',
        component:abOut
    },
    {
        path:'/postform',
        name:'postForm',
        component:postForm
    },
    {
       path:'/home',
        name:'homePage',
        component:homePage
    },
    {
        path:'/profile',
        name:'myPosts',
        component:myPosts
    },
    {
        path:'/posts',
        name:'poSts',
        component: poSts
    }


]

const router= createRouter({
history: createWebHistory(),
 routes
})

export default router