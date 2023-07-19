<template>
    <nav>
     <h1 class="musafir" @click="landPage">Musafir</h1>
     <div class="nav-left navbar-button-animation">
      <ul>
        <li><router-link to="/signup" alt="Sign Up">Sign Up</router-link></li>
        <li><router-link to="/login" alt="Log in">Log in</router-link></li>
      </ul>
    </div>
</nav>
</template>
   
   <script>
   export default {
     name: 'navBar',
     methods:{
      landPage(){
            this.$router.push({name:'firstPage'})
        },
     }

   }
   
   </script>
   
<style scoped>
   

  @import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');


nav {
  /* background-color:#131212; */
  background-color: #161616;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem 0 1rem;
}

.musafir{
  
  font-family: 'Satisfy', cursive;
  font-size: 40px;
  margin: .5%;
  padding: 0;
  cursor: pointer;
}
.nav-left ul,
.nav-right form {
  display: flex;
  align-items: center;
  margin-top: 25px;
  
}

.nav-left ul {
  display: flex;
  list-style: none;
  /* margin: 0; */
  /* padding: 0; */
}

li {
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 1rem;
  font-size:18px;
  
}


a {
  color: white;
  text-decoration: none;
}

/* a:hover {
  background-color: #a688b4;
  color: black;
  border-radius: 0.25rem;
  border: none;
} */

div.navbar-button-animation a{
  color: rgba(255, 255, 255, 0.7);
}
div.navbar-button-animation a:hover{
  color: rgba(255, 255, 255, 1);
}

/* NAVBAR BUTTON ANIMATION */

/* div.navbar-button-animation a:before{ */
    /* position: absolute; */
    /* color: #FFF; */
    /* top: 0px; */
    /* left: 0px; */
    /* padding: 10px; */
    /* overflow: hidden; */
    /* content: attr(alt); */
    /* transition: all 0.3s; */
    /* transform: scale(0.8); */
    /* opacity: 0; */
/* } */
/*  */
/* div.navbar-button-animation a:hover:before{ */
  /* transform: scale(1); */
  /* opacity: 1; */
  /*  */
/* } */

button[type="submit"] {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #161616;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  margin-left: 0.5rem;
}
</style>