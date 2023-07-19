<template>
    <div>
        <navBar1 />
        <h1>About Us</h1>
        <div class="about1">
            <p>Welcome to Musafir-The Travel Log, the ultimate destination for travel enthusiasts and adventure seekers.
                Whether you're a seasoned globetrotter or a passionate explorer, this platform is designed to help you
                capture, share, and relive your unforgettable travel experiences.

                <br><br>At Musafir-The Travel Log, we believe that every journey is unique and deserves to be
                celebrated. Our mission is to provide you with a seamless and immersive platform where you can create
                your personal travel log, showcase your adventures, and connect with like-minded individuals from around
                the world.

            </p>
            <img src="https://i.ibb.co/q9nTHWH/kasol-image2.jpg">
        </div>
        <div class="bottom-div">
            <h1>Travelling – it leaves you speechless, then turns you into a storyteller</h1>
            <div class="logo1">
                <div class="logos">
                    <i class="fa-solid fa-users fa-5x"></i>
                    <h2>{{ userscount }}</h2>
                    <p>Users</p>
                </div>
                <div class="logos">
                    <!-- <i class="fa-solid fa-note"></i> -->
                    <i class="fa-solid fa-images fa-5x"></i>
                    <h2>20</h2>
                    <p>Posts</p>

                </div>
                <div class="logos">
                    <i class="fa-solid fa-city fa-5x"></i>
                    <h2>5</h2>
                    <p>Cities</p>
                </div>
            </div>

        </div>
        <div class="bottom">
            <h2>Popular services that we offer</h2>
            <p>Take a look at them</p>
            <div class="imgs">
                <div class="description-wrapper">
                    <div class="img-wrapper">
                        <div class="img1">
                        </div>
                        <p><b>DISCOVER</b></p>
                    </div>
                    <p>By discovering travel options, individuals can broaden their horizons, fulfill their wanderlust,
                        and create unforgettable experiences that suit their preferences and interests.</p>
                </div>
                <div>
                    <div class="img-wrapper">
                        <div class="img2">
                        </div>
                        <p><b>SHARE</b>
                        </p>
                    </div>
                    <p> Sharing trip experiences allows individuals to relive and preserve their travel memories,
                        inspire others to explore new destinations, and foster a sense of connection and cultural
                        exchange.</p>
                </div>
                <div>
                    <div class="img-wrapper">
                        <div class="img3">
                        </div>
                        <p><b>EXPLORE</b></p>
                    </div>
                    <p>Exploring a trip entails delving into the cultural, historical, and natural attractions of a
                        destination, understanding local customs and traditions, and seeking out unique experiences and
                        hidden gems. </p>
                </div>
            </div>

        </div>
        <FooTer />
    </div>



</template>
   
   <script>
   import axios from 'axios';
import navBar1 from '../components/navBar1.vue';
   import '@fortawesome/fontawesome-free/css/all.css';
   import FooTer from "../components/FooTer.vue";
   export default {
     name: 'abOut',
     data(){
        return{
            usrscount:null,
        }
     },
     components:{
    navBar1,
    FooTer
},
     async mounted(){
        let result =await axios.get('http://localhost:5000/userscount')
        console.log(result)
        this.userscount=result.data[0].count
     }
   }
   </script>
   
   <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');
   img{
    margin-top: 30px;
    height:90%;
    width:95%;
   }
   .about1{
    display: grid;
    grid-template-columns: repeat(2,2fr);
    grid-gap:45px;
   }
   p{
    line-height: 2.5rem;
    font-size: 20px;
    font-family: 'Courgette', cursive;
    margin-left: 20px;
   }
   h1{
    font-size: 40px;
    text-align: center;
   }
   .bottom-div{
    background:#161616;
    height:80vh;
    width:100%;
   }
   .bottom-p{
    color: #fff;
   }
   .fa-users,
   .fa-city,
   .fa-images{
    padding: 10px;
    margin-top:40px ;
    color:#fff;
    transition: transform 0.3s ease-in-out;
   }
   .fa-users:hover,
   .fa-city:hover,
   .fa-images:hover{
    transform: scale(1,1);
    cursor: pointer;
   }
   .logo1{
    display:flex;
    /* flex-direction: column; */
    justify-content: space-around;
   }
   .logos, 
   .logos p{
    text-align: center;
    color:#fff;
    font-family: Arial, Helvetica, sans-serif;
    margin: 20px;
   }
   .logos h2{
    margin-top: 30px;
   }
   .bottom-div h1{
    /* position: relative; */
    color: #fff;
    padding-top: 80px !important; 
    font-family: 'Comfortaa', cursive;
    letter-spacing: .1rem;
    font-size: 30px;
    margin-bottom: 60px;
   }
   .bottom{
    height:60vh;
    width:100%;
   }
   .bottom h2{
    font-size: 30px;
    text-align: center;
    margin-bottom: 10px;
    color: rgb(34, 34, 34)
   }
   .bottom p{
    text-align: center;
    color:#9F9797;
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 0px;
   }
   .img1{
    height:60px;
    width:60px;
    background-image:url('https://i.ibb.co/ySWbwbb/calendar-2.png') ;
    background-size: cover;
   } 
    .img1:hover{
    background-image: url('https://i.ibb.co/CvwxF0s/calendar-3.png');
   }
   .img2{
    height:60px;
    width:60px;
    background-image:url('https://i.ibb.co/ChL25Dy/team.png') ;
    background-size: cover;
   }
    .img2:hover{
    background-image: url('https://i.ibb.co/hF6r686/team-1.png');
   }
   .img3{
    height: 60px;
    width:60px;
    background-image:url('https://i.ibb.co/4g69Dbw/travel-bag.png') ;
    background-size: cover;
   }
    .img3:hover{
    background-image: url('https://i.ibb.co/0ByDbbw/travel-bag-1.png');
   }
   .imgs{
    display: flex;
    justify-content: space-around;
    flex-direction: rows;
    margin-top: 40px;
    padding: 0 20px;
   } 
   .img1 p{
    display: grid;
    grid-template-columns: repeat(2,2fr);
    grid-gap:45px;
   }
   .img-wrapper{
    display: flex !important;
    justify-content: space-around;
    align-items: center;
    padding: 0 130px;
    letter-spacing: 0.01cm;

   }
   .img-wrapper p{
    color: rgb(34, 34, 34);
    font-size: 15px;
   }
.imgs p{
    color:rgb(34, 34, 34);
    font-size: 19px;
   }
   </style>