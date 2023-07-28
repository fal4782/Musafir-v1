<template>
    <div class="parent-div">
        <navBar1 />

        <div class="img-wrapper">
            <img src="https://i.ibb.co/M5bjFXz/banner.png"/>
        </div>

        <postTemplate />

        <div class="overlay-button" @click="scrollToTop">
          <button>
            <i class="fas fa-arrow-up"></i>
            </button>
        </div>

        <FooTer />
    </div>
</template>


<script>

import navBar1 from "../components/navBar1.vue"
import postTemplate from "../components/postTemplate.vue"
import FooTer from "../components/FooTer.vue"

export default {
  name: 'homePage',
  components: {
    navBar1,
    postTemplate,
    FooTer
  },
  methods: {
    redirect() {
      this.$router.push({
        name: 'loGin'
      })
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
  },
  created(){
    let user=JSON.parse(localStorage.getItem('user'))
    if(user){
      this.$router.push({name:'poSts'})
    }
    else{
      this.$router.push({name:'firstPage'})
    }
  }
}

</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap');

.parent-div{
    background-image: url('https://i.ibb.co/dmr3yCD/seemless-blackbg.jpg');
    background-repeat: repeat;
    background-size: 20%;
    
}

.img-wrapper {
  margin-bottom: 60px;
}

.img-wrapper img{
  width: 99vw;
}
.tag {
  /* font-family: 'Pacifico', cursive; */
  /* font-family: 'Caveat', cursive; */
  font-family: 'Unbounded', cursive;
  font-size: 33px;
  letter-spacing: 0.05cm;
  line-height: 2.5rem;
  position: absolute;
  top: 15%;
  left: 50%;
  color: white;
  padding: 0;
  text-align: center;
  transform: translate(-50%, -50%);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);

}

.search {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 200px;
  width: 100%;
  background-color: rgba(19, 18, 18, 0.3);
}

.search > p{
  font-family: "Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 30px;
  font-weight: 300;
  letter-spacing: .1rem;
  color: white;
  text-align: center;
}


.inputs {
  display: grid; /*changed back to grid as even flex wasn't acting responsive*/
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin: 10px 25%;
}

.inputs input::placeholder{
  color:white;
  font-size: 16px;
}

#city, #category{
padding: 16px 24px;
background-color: transparent !important;
color: white !important;
border: 2px solid white;
/* border-radius: 5px; */
box-sizing: border-box;
min-height: 60px;
width:95%;
appearance: none; 
font-size: 16px;
}

#category option{
  color:black;
  background-color: white;
  font-size: 16px;
}
.search-btn {
  
  appearance: none;
  background-color: white;
  border: 2px solid white;
  border-radius: 0px !important;
  box-sizing: border-box;
  color: black;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 95%;
  will-change: transform;
}

.search-btn:disabled {
  pointer-events: none;
}

.search-btn:hover {
  color: white;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.search-btn:active {
  box-shadow: none;
  transform: translateY(0);
}

.overlay-button {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.overlay-button button {
  background-color: transparent;
  border: none;
  color: black;
  font-size: 25px;
  line-height: 1;
  outline: none;
}

</style>