<template>

  <div class="post-container">

    <div class="left-div">
      <section class="carousel-container">
        <div class="slider-wrapper">
          <div class="slider">
            <img v-for="(image, index) in carouselImages" :key="index" :id="`slide-${index + 1}`" :src="image.src" />
          </div>
          <div class="slider-nav">
            <a v-for="(image, index) in carouselImages" :key="index" :href="`#slide-${index + 1}`"></a>
          </div>
        </div>
      </section>
    </div>

    <div class="right-div">
      <p class="user-name"> {{ userName }}</p>

      <div class="location">
        <i class="fa-solid fa-location-dot"></i>
        <p class="location-name">{{ placeName }} || {{ cityName }} || {{ stateName }}</p>
      </div>

      <div class="divider"></div>

      <p class="content">{{ postContent }}</p>

      <!-- Star rating for value for money -->
      <div class="rating">
        <p class="rating-title">Value for Money:</p>
        <span v-for="star in maxStars" :key="star">
          <i class="fa-solid"
            :class="{ 'fa-star': star <= affordabilityRating, 'fa-star-empty': star > affordabilityRating }"></i>
        </span>
      </div>

      <!-- Star rating for safety & security-->
      <div class="rating">
        <p class="rating-title">Safety & Security:</p>
        <span v-for="star in maxStars" :key="star">
          <i class="fa-solid" :class="{ 'fa-star': star <= safetyRating, 'fa-star-empty': star > safetyRating }"></i>
        </span>
      </div>

      <!-- Star rating for overall exp -->
      <div class="rating">
        <p class="rating-title">Overall Experience:</p>
        <span v-for="star in maxStars" :key="star">
          <i class="fa-solid"
            :class="{ 'fa-star': star <= overallExpRating, 'fa-star-empty': star > overallExpRating }"></i>
        </span>
      </div>



      <!-- <div class="divider"></div> -->
    </div>
  </div>


</template>


<script>



export default {
  components: {

  },
  data() {
    return {
      carouselImages: [{
          id: 1,
          src: 'https://i.ibb.co/TMnPS5w/tajmahal.jpg'
        },
        {
          id: 2,
          src: 'https://i.ibb.co/NSmF12D/forest-1866544-1280.jpg',
        },
      ],
      userName: 'John Doe',
      placeName: 'Akshardham Temple',
      cityName: 'Gandhinagar',
      stateName: 'Gujrat',
      postContent: "'Akshardham' literally means the divine abode of God. It is an eternal place for one to offer devotion and experience everlasting peace. Swaminarayan Akshardham at Gandhinagar is a mandir – a Hindu house of worship, a dwelling place for God, and a spiritual and cultural campus dedicated to devotion, education and unification. The spiritual premise of Akshardham is that each soul is potentially divine. Whether we are serving the family, our neighbors, the country, or people all around the world, each act of kindness can help one move towards divinity. Each prayer is an endeavor in self-improvement and a step closer to God.",
      affordabilityRating: 2,
      safetyRating: 4,
      overallExpRating: 5,
      maxStars: 5,
    };
  },
}
</script>


<style scoped>

.post-container{
  width: 80vw;
  height: 80vh;
  background-color: #161616;
  display: flex;
  border-radius: 15px;
  margin: auto;
  /* margin: 0 10%; */
  align-items: center;
  margin-bottom: 50px;
  box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38);
  
}

.left-div {
  flex: 1;
  background-color: #726095;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;;
  display: flex;
  height: 100%;
}


.right-div{
  flex:1;
  display: flex;
  flex-direction: column;
  color: white;
font-family: Arial, Helvetica, sans-serif;
  
}

.user-name {
  font-size: 20px;
  font-weight: bold;
  margin: 30px 0 0 20px;
}
.location {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-left: 10px;
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
}

.rating {
    display: flex;
    align-items: center;
    margin-top: 0px;
    margin-left: 30px;
    padding: 0;
  }

.rating-title {
    
    margin:6px 10px 6px 0;
    color: rgba(255, 255, 255, 0.8);
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

.slider{
    display: flex;
    /* aspect-ratio: 16/9; */
    overflow-x: auto;
    overflow: hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    box-shadow: 0 1.5rem 3rem -0.75rem hsla(0, 0%, 0%, 0.25);
    border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  height: 100%;

}

.slider img{
    flex: 1 0 100%;
    scroll-snap-align: start;
    object-fit: cover;
    height: 100%;
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
    opacity: 0.75;
    transition: opacity ease 250ms;
}

.slider-nav a:hover{
    opacity: 1;
}

</style>