<template>
<div>
    <div>
        <select name="filter" id="" v-model="funct">
            <option value="recentPost">Recent Post</option>
            <option value="cities">Most famous cities</option>
        </select>
        <button @click="filter">Filter</button>
    </div>
    <div v-for="post1 in posts" :key="post1.post_id">
                
                
                <div> 
                <adminPostTemplate :post="post1" />
            </div>
            </div>
</div>

</template>

<script>
import axios from 'axios';
import adminPostTemplate from "../../components/adminPostTemplate.vue"
export default{
    data(){
        return{
            posts:[],
            funct:''
        }
    },
    components:{
        adminPostTemplate
    },
    methods:{
        async filter(){
        if(this.funct=='recentPost'){
            let result = await axios.get('http://localhost:5000/adminRecentPosts')
            this.posts=result.data
        }
         else if(this.funct=='cities'){
            let result = await axios.get('http://localhost:5000/adminCitiesVisePosts')
            this.posts=result.data
        }
        
    }
},
    async created(){
        let result = await axios.get('http://localhost:5000/adminDefaultPosts')
        console.log(result)
        this.posts=result.data
    },
    async mounted(){
        

    }

}

</script>

<style>

</style>