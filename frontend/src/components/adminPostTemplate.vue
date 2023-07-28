<template>

  <div class="parent-div">

    <div :id="`post-${post.post_id}`" class="post-container">

      <div class="left-div">
        <section class="carousel-container">

          <div class="slider-wrapper">
            <div class="slider">
              <div v-for="(image, index) in carouselImages" :key="index">
                <!-- <div v-if="image.id==post.post_id"> -->
                <img :id="`slide-${index}-${post.post_id}`" :src="require(`../assets/${image.img}`)" />
                <!-- </div> -->

              </div>

              <div class="slider-nav">
                <a v-for="(image, index) in carouselImages" :key="index" :href="`#slide-${index}-${post.post_id}`"></a>
              </div>

            </div>
            <!-- <div class="slider">
        <div v-for="image in getImagesForPost(post.post_id)" :key="image.id">
          <img :src="require(`../assets/${image.img}`)" alt="">
        </div>
      </div> -->
          </div>
        </section>
      </div>

      <div class="right-div">
        <div class="ud-options">
          <i class="fa-solid fa-pen-to-square edit" @click="editPost(post)"></i>
          <i class="fa-solid fa-trash delete" @click="deletePost(post.post_id)"></i>
        </div>

        <!-- <p v-if="isAllPost" class="user-name"> {{ post.name }}</p> -->
        <div class="location">
          <i class="fa-solid fa-location-dot"></i>
          <p class="location-name">{{ post.place }} || {{ post.city }} || {{ post.state_name }}</p>
        </div>

        <div class="divider"></div>

        <p class="content">{{ post.description}}</p>

        <!-- Star rating for value for money -->
        <!-- <div class="rating">
                  <p class="rating-title">Value for Money:</p>
                  <span v-for="star in maxStars" :key="star">
                    <i class="fa-solid"
                      :class="{ 'fa-star': star <= post.value_for_money, 'fa-star-empty': star > post.value_for_money }"></i>
                  </span>
                </div> -->

        <!-- Star rating for safety & security-->
        <!-- <div class="rating">
                  <p class="rating-title">Safety & Security:</p>
                  <span v-for="star in maxStars" :key="star">
                    <i class="fa-solid"
                      :class="{ 'fa-star': star <= post.safety, 'fa-star-empty': star > post.safety }"></i>
                  </span>
                </div> -->

        <!-- Star rating for overall exp -->
        <!-- <div class="rating">
                  <p class="rating-title">Overall Experience:</p>
                  <span v-for="star in maxStars" :key="star">
                    <i class="fa-solid"
                      :class="{ 'fa-star': star <= post.overall_exp, 'fa-star-empty': star > post.overall_exp }"></i>
                  </span>
                </div> -->
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';

import {
  onMounted
} from 'vue';

export default {
  name: 'postChildTemplate',
  components:{
    
  },
  data() {
    return {
      carouselImages: [],
      maxStars: 5,
    }
  },
  computed:{
    // isMyProfilePage(){
    //    return window.location.pathname==='/admin/details'
       
    // },
    isAllPost(){
        console.log(window.location.pathname==='/admin/details')
      return window.location.pathname==='/admin/details'
    }
  },
  props: ['post'],
  methods: {
    editPost(){
      this.$router.push({name:'editPost', params:{data:JSON.stringify(this.post)}})
    },
    async deletePost(post_id){
      console.log("in deletePost")
      if (confirm("Do you want to delete the post?") == true) {        
        let result = await axios.post('http://localhost:5000/deletePost', {
          post_id: post_id
        })
        location.reload()
        console.log("123", result)
      }
    },
    toggleLike() {
  const likeButton = document.querySelector('.like-button');
  likeButton.classList.toggle('clicked');
},
  },
  created() {
    // this.scrollToTarget();
    console.log(this.post)
    let imgString = this.post.images;
    console.log("1", imgString);
    let images = [];
    if (!imgString.includes(",")) {
      this.carouselImages.push({
        //   id: result.data[i].post_id,
        img: imgString,
      });
      console.log("2", images);
    } else {
      let imgPaths = imgString.split(",");

      for (let j = 0; j < imgPaths.length; j++) {
        this.carouselImages.push({
          // id: result.data[i].post_id,
          img: imgPaths[j],
        });
      }
    }
    console.log(this.carouselImages);

  },
  setup() {
    onMounted(() => {
      // Check if the URL has a hash (fragment identifier)
      const hash = window.location.hash;
      if (hash) {
        // Remove the leading '#' from the hash
        const targetId = hash.substring(1);
        // Find the target element by its ID
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          // Scroll to the target element
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  }
}
</script>

<style scoped>

.parent-div{
  scroll-behavior: smooth;
}
.post-container{
  width: 60vw;
  height: 35vh;
  background-color: #161616;
  display: flex;
  border-radius: 15px;
  margin: auto;
  /* margin: 0 10%; */
  align-items: center;
  margin-bottom: 10px;
  box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38);
  /* border-bottom: 2px solid #161616; */
}

.left-div {
  flex: .3;
  background-color: #726095;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;;
  display: flex;
  height: 100%;
  width:50%
}


.right-div{
  flex: .7;
  display: flex;
  flex-direction: column;
  color: white;
font-family: Arial, Helvetica, sans-serif;
  
}

.user-name {
  font-size: 20px;
  font-weight: bold;
  margin: 30px 0 0 30px;
}
.location {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-left: 20px;
  opacity: 0.8;
  font-size: 14px;
}

.location i {
  width: 20px;
  height: 20px;
  margin-right: 5px; 
  text-align: right;
  padding-top: 6px;
}
.location p{
    margin:0;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5); 
  margin: 10px 0;
}

.content{
    font-size: 16px;
    margin: 20px 30px 20px 30px;
    text-align:justify;
    letter-spacing: 0.02cm;
    line-height: 20px;
    height: 120px;
    overflow-y: auto;
}

.content::-webkit-scrollbar {
  width: 10px;
  background-color: transparent;
}

/* (the draggable part) */
.content::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}

.content::-webkit-scrollbar-thumb:hover {
  background-color: #333;
  cursor: pointer; /*not working*/
}


.carousel-container{
    width: 100%;
    height: 100%;
}

.slider-wrapper{
    position: relative;
    max-width: 48rem;
    height: 100%;
    margin: 0 auto;
    
}

.slider {
  display: flex;
  overflow-x: auto;
  overflow: hidden;
  box-shadow: 0 1.5rem 3rem -0.75rem hsla(0, 0%, 0%, 0.25);
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  height: 100%;
  width: 100%;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}

.slider img {
  /* flex: 1 0 100%; */
  scroll-snap-align: start;
  object-fit: stretch;
  height: 100%;
  width:30vw;
}



.slider-nav{
    display: flex;
    column-gap: 1rem;
    position: absolute;
    bottom: 1.25rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
}

.slider-nav a{
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: white;
    opacity: 0.9;
    transition: opacity ease 250ms;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.9); 
}

.slider-nav a:hover{
    opacity: 1;
}
.ud-options{
  position:relative;
  left:85%;
  top:-45%;   
  color: white;
  margin: 0;
  padding: 0;
}

.delete{
  padding-left: 10px;
}

.ud-options i{
  transition: transform 0.2s ease;
}

.ud-options i:hover{
  transform: scale(1.3);
  cursor: pointer;
}
.divider1{
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5); 
  /* margin: 10px 0; */
}
</style>