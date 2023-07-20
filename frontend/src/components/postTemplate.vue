<template>
  <div v-for="post1 in posts" :key="post1.post_id">
    <!-- <div v-for="img in carouselImages" :key="img.id">
      <div v-if="img.id == post1.post_id"> -->
        <postChildTemplate :post="post1"/>
        <button>next</button>
      <!-- </div>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
import postChildTemplate from "./postChildTemplate.vue";
export default {
  components: {
    postChildTemplate,
  },
  data() {
    return {
      // carouselImages: [{
      //     id: 1,
      //     src: 'https://i.ibb.co/TMnPS5w/tajmahal.jpg'
      //   },
      //   {
      //     id: 2,
      //     src: 'https://i.ibb.co/NSmF12D/forest-1866544-1280.jpg',
      //   },
      // ],
      // userName: 'John Doe',
      // placeName: 'Akshardham Temple',
      // cityName: 'Gandhinagar',
      // stateName: 'Gujrat',
      // postContent: "'Akshardham' literally means the divine abode of God. It is an eternal place for one to offer devotion and experience everlasting peace. Swaminarayan Akshardham at Gandhinagar is a mandir – a Hindu house of worship, a dwelling place for God, and a spiritual and cultural campus dedicated to devotion, education and unification. The spiritual premise of Akshardham is that each soul is potentially divine. Whether we are serving the family, our neighbors, the country, or people all around the world, each act of kindness can help one move towards divinity. Each prayer is an endeavor in self-improvement and a step closer to God.",
      // affordabilityRating: 2,
      // safetyRating: 4,
      // overallExpRating: 5,
      maxStars: 5,
      posts: [],
      carouselImages: [],
      fimg: [],
    };
  },
  methods: {

  },
  async created() {
    let result = await axios.get("http://localhost:5000/getpost");
    console.log("Result", result.data[0]);
    this.posts = result.data;      // all posts.

    for (let i = 0; i < this.posts.length; i++) {
      let imgString = result.data[i].string_agg;
      console.log("1", imgString);
      let images = [];
      if (!imgString.includes(",")) {
        images.push({
          id: result.data[i].post_id,
          img: imgString,
        });
        console.log("2", images);
      } else {
        let imgPaths = imgString.split(",");

        for (let j = 0; j < imgPaths.length; j++) {
          images.push({
            id: result.data[i].post_id,
            img: imgPaths[j],
          });
        }
      }
      this.carouselImages.push(...images);
    }
    console.log("image details", this.posts);
    console.log(this.carouselImages);
  },
};
</script>

<style scoped>
.post-container {
  width: 90vw;
  height: 90vh;
  background-color: #161616;
  display: flex;
  border-radius: 15px;
  margin: auto;
  /* margin: 0 10%; */
  align-items: center;
  margin-bottom: 50px;
  box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 0.38);
}

.left-div {
  flex: 1;
  background-color: #726095;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  display: flex;
  height: 100%;
}

.right-div {
  flex: 1;
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
.location p {
  margin: 0;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 10px 0;
}

.content {
  font-size: 16px;
  margin: 20px 30px 20px 30px;
  text-align: justify;
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
  margin: 6px 10px 6px 0;
  color: rgba(255, 255, 255, 0.8);
}

.carousel-container {
  width: 100%;
  height: 100%;
}

.slider-wrapper {
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
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}

.slider img {
  flex: 1 0 100%;
  scroll-snap-align: start;
  object-fit: stretch;
  height: 100%;
}

.slider-nav {
  display: flex;
  column-gap: 1rem;
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.slider-nav a {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: white;
  opacity: 0.75;
  transition: opacity ease 250ms;
}

.slider-nav a:hover {
  opacity: 1;
}
</style>
