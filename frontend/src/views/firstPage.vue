<template>
  <div>
    <navBar />
    <div class="land-bg">
      <h1 class="tag">Unleash Your Wanderlust, <br>Share Your Journeys</h1>
      <div class="search">
        <p>Find the Adventure of a Lifetime</p>
        <div class="inputs">

          <div id="input-1">
            <!-- <label for="city">City:</label><br> -->
            <input type="text" id="city" placeholder="Enter City">
          </div>

          <div id="input-2">
            <!-- <label for="category">Choose a category:</label><br> -->
            <select id="category">
              <option disabled selected value="Catergoies">Choose Category</option>
              <option value="Historical">Historical</option>
              <option value="Gardens">Gardens</option>
              <option value="Worship Places">Worship Places</option>
            </select>
          </div>


          <div id="input-3-btn">
            <button class="search-btn" role="button" @click="redirect">
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
          <img :src="image.src" :alt="image.alt" @click="redirect" class="image">
        </div>
      </div>

    </div>

    <div class="destinations">

      <h2>Top Destinations Around the Country</h2>
      <p>DISCOVER. SHARE. EXPLORE.</p>

      <div class="image-container">
        <div v-for="image in destinationImages" :key="image.id" class="image-wrapper">
          <img :src="image.src" :alt="image.alt" @click="redirect" class="image">
        </div>
      </div>

    </div>


    <div class="team">
  <h2>Meet the Team</h2>
  <p>VISIT OUR GITHUB PROFILES</p>

  <div class="team-members">
    <a href="https://github.com/shubhangijain2001" class="team-member" target="_blank">
      <img src="https://i.ibb.co/0VyxT5t/Shubhangi-avatar.png" alt="Shubhangi-avatar">
          <p>Shubhangi Jain</p>
    </a>
    <a href="https://github.com/fal4782" class="team-member" target="_blank">
      <img src="https://i.ibb.co/RyhKcYX/Falguni-avatar.png" alt="Falguni-avatar">
          <p>Falguni</p>
    </a>
  </div>
</div>

<FooTer></FooTer>

    <routerView />
  </div>

</template>

<script>


import FooTer from "../components/FooTer.vue"
import navBar from '../components/navBar.vue';


export default {
  name: 'firstPage',
  components: {
    navBar,
    FooTer
  },
  data() {
    return {
      imageUrl: require('@/assets/udaipur_image1.jpg').default,
      cityImages: [{
          id: 1,
          src: 'https://i.ibb.co/F8ztY8Z/Jaipur-Rajasthan.jpg',
          alt: 'Jaipur-Rajasthan'
        },
        {
          id: 2,
          src: 'https://i.ibb.co/RhPwM7r/Kerala.jpg',
          alt: 'Kerela'
        },
        {
          id: 3,
          src: 'https://i.ibb.co/1R42rvP/Mumbai-Maharashtra.jpg',
          alt: 'Mumbai-Maharashtra'
        },
        {
          id: 4,
          src: 'https://i.ibb.co/y4SfhYx/Rann-of-Kutch-Gujarat.jpg',
          alt: 'Rann-of-Kutch-Gujarat'
        }
      ],
      destinationImages: [{
          id: 1,
          src: 'https://i.ibb.co/jr3h1VW/Mysore-Palace-Mysore.jpg',
          alt: 'Mysore-Palace-Mysore'
        },
        {
          id: 2,
          src: 'https://i.ibb.co/FWNSLVM/Nubra-Valley-Ladakh.jpg',
          alt: 'Nubra-Valley-Ladakh'
        },
        {
          id: 3,
          src: 'https://i.ibb.co/HDQttJL/Statue-of-Unity-Gujarat.jpg',
          alt: 'Statue-of-Unity-Gujarat'
        },
        {
          id: 4,
          src: 'https://i.ibb.co/NYCFbjX/Taj-Mahal-Agra.jpg',
          alt: 'Taj-Mahal-Agra'
        }
      ],
      image:[]
    };
  },
  methods:{
    redirect(){
      this.$router.push({name:'loGin'})
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

/* .inputs label{ */
  /* color: white; */
  /* font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"; */
  /* font-size: 16px; */
  /* font-weight: 400; */
  /* line-height: normal; */
/* } */

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

.cities, .destinations, .team{
  padding-top: 70px;
  padding-bottom: 85px;
}

.cities h2, .cities p, .destinations h2, .destinations p, .team h2, .team p{
  text-align: center;
}
.cities h2, .destinations h2, .team h2{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 35px;
  letter-spacing: .03cm;
  margin-bottom: 10px;
}

.cities p, .destinations p, .team p{
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

.team-members {
  display: flex;
  justify-content: center;
}

.team-member {
  text-align: center;
  margin: 20px;
  border-radius: 10px; /* Add border radius of 10px */
  overflow: hidden; /* To clip the border-radius on the image */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Add initial shadow effect */
  transition: box-shadow 0.3s ease-in-out; 
  transition: transform 0.3s ease; 
  padding: 20px; /* Add space around the .team-member content */
}


.team-member:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transform: scale(1.1);
}

.team-member + .team-member {
  margin-left: 4%; /* Add space between .team-member elements */
}


.team-member img {
  width: 200px; /* Adjust the profile picture width as per your preference */
  height: 200px; /* Adjust the profile picture height as per your preference */
  border-radius: 50%;
  object-fit: cover;
}

.team-member p {
  margin-top: 10px;
}

/* Remove default link styling */
a {
  text-decoration: none;
  color: inherit;
}


</style>