<template>
<div class="parent-div">
    <adminNav/>
    <div class="filter-container">
        <select name="filter" id="filter-options" v-model="funct">
            <option hidden selected value="">Choose Filter</option>
            <option value="recentPost">Recent Post</option>
            <option value="cities">Most famous cities</option>
        </select>
        <button class="filter-btn" @click="filter">Filter</button>
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
import adminNav from '../../components/adminNav.vue'
export default{
    data(){
        return{
            posts:[],
            funct:''
        }
    },
    components:{
        adminPostTemplate,
        adminNav
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

<style scoped>

.parent-div{
    background-image: url('https://i.ibb.co/dmr3yCD/seemless-blackbg.jpg');
    background-repeat: repeat;
    background-size: 20%;
}

.filter-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  padding: 40px 0;
  background-color: rgba(0, 0, 0, 0.25);
}

#filter-options{
    padding: 8px 24px;
background-color: transparent !important;
color: white !important;
border: 2px solid white;
box-sizing: border-box;
appearance: none; 
font-size: 16px;
margin-right: 8px;
}

#filter-options option{
  color:black;
  background-color: white;
  font-size: 16px;
}

.filter-btn {
  background-color: transparent;
  border: 2px solid white;
  border-radius: 0px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 24px;
  text-align: center;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  margin-left: 8px;
}

.filter-btn:hover {
  color: black;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-1px);
}

</style>