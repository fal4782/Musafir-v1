<template>
    <div>
        <navBar1 />
        <div class="parent-div">

            <div class="overlay-button">
                <button @click="showFormModal">+</button>
            </div>

            <div class="overlay-button1" @click="scrollToTop">
          <button>
            <i class="fas fa-arrow-up"></i>
            </button>
        </div>

            <postTemplate />
            <postForm v-if="isFormModalOpen" @close="closeFormModal" />
            <FooTer />

        </div>
    </div>
</template>


<script>

import navBar1 from "../components/navBar1.vue";
import postTemplate from "../components/postTemplate.vue";
import FooTer from "../components/FooTer.vue";
import postForm from "../components/postForm.vue";

export default{
    name:'homePage',
    data(){
        return{
            isFormModalOpen: false,
        }
    },
    components:{
        navBar1,
        postTemplate,
        FooTer,
        postForm
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

}
</script>


<style scoped>

.parent-div{
    padding-top: 50px;
    background-image: url('https://i.ibb.co/dmr3yCD/seemless-blackbg.jpg');
    background-repeat: repeat;
    background-size: 20%;
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