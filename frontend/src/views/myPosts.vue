<template>
  <div>
    <navBar1 />
    <div class="parent-div">

      <div class="profile-section">
        <img src="https://i.ibb.co/wJGzYTt/PFP.png" alt="Profile Picture" class="profile-picture">
        <p class="username">{{ username }}</p>
        <div class="divider"></div>
      </div>

      
    
<div v-if="posts.length > 0">
      <div ref="postTemplateRef" v-for="post1 in posts" :key="post1.post_id">
        <postChildTemplate :post="post1"/>
  </div></div>
      <noPosts v-else/>
      <postForm v-if="isFormModalOpen" @close="closeFormModal" @submit="handleFormSubmit"/>

      <div class="overlay-button">
        <button @click="showFormModal">+</button>
      </div>

      <div class="overlay-button1" @click="scrollToTop">
        <button>
          <i class="fas fa-arrow-up"></i>
        </button>
      </div>


      <FooTer />

    </div>
  </div>
</template>


<script>

import navBar1 from "../components/navBar1.vue";
//import postTemplate from "../components/postTemplate.vue";
import FooTer from "../components/FooTer.vue";
import postForm from "../components/postForm.vue";
import axios from "axios";
import postChildTemplate from "../components/postChildTemplate.vue";
import noPosts from "../components/noPosts.vue";

export default{
    name:'myPosts',
    data(){
        return{
            isFormModalOpen: false,
            username: '',
            posts:[]
        }
    },
    components:{
        navBar1,
        //postTemplate,
        FooTer,
        postForm,
        postChildTemplate,
        noPosts
    },
    methods: {
    showFormModal() {
      this.isFormModalOpen = true;
    },
    closeFormModal() {
      this.isFormModalOpen = false;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
  },
    computed:{
      isPostTemplateRendered() {
      // Check if the postTemplate component is rendered
      return !!this.$refs.postTemplateRef;
    }
    },
    handleFormSubmit() {
      // Show the alert message
      alert("Wohoo! Post successfully created.");
      // Close the form when the submit button is clicked
      this.isFormModalOpen = false;
    },
  async mounted(){
    let user= JSON.parse(localStorage.getItem('user'))
    this.username=user.name
    console.log('username',this.username)
    let result=await axios.post('http://localhost:5000/userPosts',{
      user_id:user.id
    })
    console.log(result.data)
    this.posts=result.data
  }

}
</script>


<style scoped>

.parent-div{
    padding-top: 50px;
    background-image: url('https://i.ibb.co/dmr3yCD/seemless-blackbg.jpg');
    background-repeat: repeat;
    background-size: 20%;
}

.profile-section {
  text-align: center;
}

.profile-picture {
  width: 15%;
  height: 15%;
  border-radius: 50%;
  /* Add other styles as needed */
}

.username {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.03cm;
  margin: 10px 0;
  color: white;
}

.divider {
  height: 2px;
  width: 100%; 
  background-color: rgba(78, 78, 78, 0.7);
  margin-top: 20px;
  margin-bottom: 60px;
}

.overlay-button {
  position: fixed;
  bottom: 2rem; 
  right: 6.5rem; 
  width: 60px; 
  height: 60px; 
  background-color: white; 
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay-button1 {
  position: fixed;
  bottom: 2rem; 
  right: 2rem; 
  width: 60px; 
  height: 60px; 
  background-color: white; 
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.overlay-button button, .overlay-button1 button {
  background-color: transparent;
  border: none;
  color: black;
  font-size: 30px;
  line-height: 1;
  cursor: pointer;
  outline: none;
}

</style>