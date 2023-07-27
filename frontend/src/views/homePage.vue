<template>
    <div>
        <navBar1 />

        <div class="land-bg">
            <h1 class="tag">Unleash Your Wanderlust, <br>Share Your Journeys</h1>
            <div class="search">
                <p>Find the Adventure of a Lifetime</p>
                <div class="inputs">

                    <div id="input-1">
                        <!-- <label for="city">City:</label><br> -->
                        <input type="text" id="city" placeholder="Enter City" v-model="city">
                    </div>

                    <div id="input-2">
                        <!-- <label for="category">Choose a category:</label><br> -->
                        <select id="category" v-model="category">
                            <option hidden selected value="">Choose Category</option>
                            <option value="Historical">Historical</option>
                            <option value="Gardens">Gardens</option>
                            <option value="Worship Places">Worship Places</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Food & Beverages">Food & Beverages</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>


                    <div id="input-3-btn">
                        <button class="search-btn" role="button" @click="search">
                            Search
                        </button>
                    </div>


                </div>
            </div>
        </div>


        <div class="cities">

            <h2>Explore Destinations from these Cities</h2>
            <p>TAKE A LOOK AT THESE LOGS</p>

            <div class="image-container">
                <div v-for="image in cityImages" :key="image.id" class="image-wrapper">
                    <img :src="image.src" :alt="image.alt" @click="filterByPlace(image.alt)" class="image">
                </div>
            </div>

        </div>

        <div class="destinations">

            <h2>Top Destinations Around the Country</h2>
            <p>DISCOVER. SHARE. EXPLORE.</p>

            <div class="image-container">
                <div v-for="image in destinationImages" :key="image.id" class="image-wrapper">
                  <a :href="`/posts/#post-${image.post_id}`"> 
                    <img :src="image.src" :alt="image.alt" @click="redirect" class="image">
                  </a>
                </div>
            </div>

        </div>

        <div class="recent-posts">

            <h2>Recent Posts</h2>
            <p>EXPLORE TRAVEL LOGS</p>

            <div class="post-grid">
                
                <div v-for="post in recentPosts" :key="post.id" class="post">

                  <img :src="require(`../assets/${post.img}`)" :alt="post.name" class="post-image">

                  <a :href="`/posts/#post-${post.post_id}`">
                    <div class="post-overlay" @click="redirect">
                      <p class="username">{{ post.name }}</p>
                      <p class="place-name">{{ post.place }}</p>
                    </div>
                  </a>

                </div>
            
            </div>
        </div>

        <div class="overlay-button" @click="scrollToTop">
          <button>
            <i class="fas fa-arrow-up"></i>
            </button>
        </div>
        <FooTer />
    </div>
</template>

<script>
import navBar1 from "../components/navBar1.vue";
import FooTer from "../components/FooTer.vue";
import axios from "axios";
// import { onBeforeUnmount, onMounted } from 'vue';

export default {
  name: 'homePage',
  components: {
    navBar1,
    FooTer
  },
  data() {
    return {
      imageUrl: require('@/assets/udaipur_image1.jpg').default,

      cityImages: [{
          id: 1,
          src: 'https://i.ibb.co/F8ztY8Z/Jaipur-Rajasthan.jpg',
          alt: 'Jaipur'
        },
        {
          id: 2,
          src: 'https://i.ibb.co/ysP6BTw/Kerala.png',
          alt: 'Alleppey'
        },
        {
          id: 3,
          src: 'https://i.ibb.co/1R42rvP/Mumbai-Maharashtra.jpg',
          alt: 'Mumbai'
        },
        {
          id: 4,
          src: 'https://i.ibb.co/B4zDVdk/Rann-of-Kutch-Gujarat.png',
          alt: 'Kutch'
        }
      ],
      destinationImages: [{
          id: 1,
          post_id: 25,
          src: 'https://i.ibb.co/jr3h1VW/Mysore-Palace-Mysore.jpg',
          alt: 'Mysore-Palace-Mysore'
        },
        {
          id: 2,
          post_id: 28,
          src: 'https://i.ibb.co/FWNSLVM/Nubra-Valley-Ladakh.jpg',
          alt: 'Nubra-Valley-Ladakh'
        },
        {
          id: 3,
          post_id: 29,
          src: 'https://i.ibb.co/HDQttJL/Statue-of-Unity-Gujarat.jpg',
          alt: 'Statue-of-Unity-Gujarat'
        },
        {
          id: 4,
          post_id: 26,
          src: 'https://i.ibb.co/NYCFbjX/Taj-Mahal-Agra.jpg',
          alt: 'Taj-Mahal-Agra'
        }
      ],
      recentPosts: [],
      city: '',
      category: '',
      images: []
    }
  },

  async created() {
    // Fetch recent posts from the database and update the 'recentPosts' data
    // For demonstration purposes, we'll populate the data manually
    // 
    let result = await axios.post('http://localhost:5000/recentPosts')
    console.log('jibohrfgctnbixyuuuuuuuuuuvybcisk')
    console.log(result.data)
    for (let i = 0; i < result.data.length; i++) {
      let imgPaths = result.data[i].string_agg
      if (!imgPaths.includes(',')) {
        this.images.push(imgPaths)
      } else {
        let img1 = imgPaths.split(',');
        this.images.push(img1[0])
      }
    }
    console.log('images array', this.images)
    for (let j = 0; j < result.data.length; j++) {
      this.recentPosts.push({
        place: result.data[j].place,
        name: result.data[j].name,
        post_id: result.data[j].post_id,
        img: this.images[j]
      })
    }
    console.log("resuktsdvbbsa", this.recentPosts)
  },
  // setup() {
  //   onMounted(() => {
  //     // Add an event listener to handle the unload event
  //     window.addEventListener('beforeunload', handleUnload);
  //   });

  //   onBeforeUnmount(() => {
  //     // Remove the event listener before the component is unmounted
  //     window.removeEventListener('beforeunload', handleUnload);
  //   });

  //   const handleUnload = (event) => {
  //     // Check if the page is being closed (window is being unloaded)
  //     if (event.currentTarget.performance.navigation.type === 1) {
  //       // Clear local storage only if the user is closing the tab
  //       localStorage.clear();
  //     }
  //   };

  // },


  methods: {
    async search() {
      let catValue = this.category || null
      let cityValue = this.city || null
      this.$router.push({
        name: 'homePosts',
        params: {
          var: cityValue,
          var2: catValue
        }
      })
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },

    async filterByPlace(a) {
      let catValue = this.category || null
      let cityValue = a || null
      //this.$router.push('/homeposts?var='+cityValue+'&var2='+catValue)
      this.$router.push({
        name: 'homePosts',
        params: {
          var: cityValue,
          var2: catValue
        }
      })

    },


  }
}

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap');



.land-bg {
  position: relative; 
  height: 100vh;
  background-image: url("https://i.ibb.co/5hfgMsp/udaipur-image1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.tag {
  /* font-family: 'Pacifico', cursive; */
  /* font-family: 'Caveat', cursive; */
  font-family: 'Unbounded', cursive;
  font-size: 35px;
  position: absolute;
  top: 10%;
  left: 50%;
  color: white;
  padding: 0;
  text-align: center;
  transform: translate(-50%, -50%);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

}

.search {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 200px;
  width: 100%;
  background-color: rgba(19, 18, 18, 0.3);
}

.search p{
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

.cities, .destinations, .team, .recent-posts{
  padding-top: 70px;
  padding-bottom: 85px;
}

.cities h2, .cities p, .destinations h2, .destinations p, .team h2, .team p, .recent-posts h2, .recent-posts p{
  text-align: center;
}
.cities h2, .destinations h2, .team h2, .recent-posts h2{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 35px;
  letter-spacing: .03cm;
  margin-bottom: 10px;
}

.cities p, .destinations p, .team p, .recent-posts p{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 20px;
  letter-spacing: .03cm;
}
.image-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.image-wrapper {
  width: 20%; 
  margin: 10px; 
  transition: transform 0.3s ease-in-out;
}

.image-wrapper:hover {
  transform: scale(1.1);
  cursor: pointer; 
}


.image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.destinations{
  background-color: #161616;
}

.destinations h2, .destinations p{
  color: white;
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Show 4 images in a row */
  grid-gap: 20px; /* Add spacing between the images */
  padding: 0 20px;
}

.post {
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.post-image {
  width: 100%;
  height: 280px; /* Set the height of the image as needed */
  object-fit: cover;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.post-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content:end;
  align-items:start;  
  background-color: rgba(0, 0, 0, 0.3); /* Add a semi-transparent background for the text */
  color: white; /* Text color for the username and place name */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 

}

.post:hover .post-image, .post:hover .post-overlay {
  transform: scale(1.05);
  cursor: pointer;
}

.username,
.place-name {
  margin: 0;
  font-weight: bold;
  margin: 0 0 5px 5px;
}

.username{
  font-size: 16px;
}

.place-name{
  font-size: 12px;
  text-align: left;
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