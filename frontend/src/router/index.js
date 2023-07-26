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
import homePosts from "../views/homePosts.vue"
import editPost from "../components/editPost.vue"
import dashBoard from "../views/AdminPanel/dashBoard.vue"

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
    },
    {
        path:'/homeposts/:var?/:var2?',
        //path:'/homeposts?var=:var/var2=:var2',
        name:'homePosts',
        component: homePosts
    },
    {
        path:'/editPost/:data',
        //path:'/homeposts?var=:var/var2=:var2',
        name:'editPost',
        component: editPost
    },
    {
        path: '/admin/dashboard',
        name: 'dashBoard',
        component: dashBoard
    }


]

const router= createRouter({
history: createWebHistory(),
 routes
})

export default router