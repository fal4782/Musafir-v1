<template>

  <!-- <navBar1 /> -->
  <div class="outer-div">
    <div class="signup-container">

      <div class="left-div">
        <div>
          <h1>Discover. Share. Inspire.</h1>
          <p>Creating memories that last a lifetime.</p>
        </div>
      </div>


      <div class="right-div">
        <h1>Musafir</h1>
        <input type="text" placeholder="Name" v-model="name"><br>
        <input type="text" placeholder="Email" v-model="email"><br>
        <input type="password" placeholder="Create Password" v-model="password"><br>
        <button @click="signup">SIGN UP</button>
        <p>
          Already signed up? <router-link to="/login">Log In.</router-link>
        </p>
      </div>

    </div>
  </div>
</template>
   
<script>
  //  import navBar1 from "../components/navBar1.vue"
  import axios from 'axios'
export default {
  name: 'signUp',
  components: {
    // navBar1
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',

    }
  },
  methods: {
    async signup() {
      // do something with the username, email, password
      console.log('Signing up with:', this.name, this.email, this.password);
      let result = await axios.post("http://localhost:5000/users", {
        name: this.name,
        email: this.email,
        password: this.password
      })
      console.log(result.data)
      if (result.data == 'user already exist') {
        alert('user already exist!!')
        console.log('hello')
        this.name = ''
        this.email = ''
        this.password = ''
      }
      console.log(result)
      /*let res= await axios.post(`http://localhost:5500/login`,{phone:parseInt(this.phone),password:this.password});
     if(result.status==201)
     {
        localStorage.setItem('user',JSON.stringify(res.data[0]));
        if(res.data[0].type=='user'){
          this.$router.push({name:'Products'})
        }
        else if(res.data[0].type=='admin'){
          this.$router.push({name:'addProduct'})
        }
    
    }*/
    },
  }

} 
</script>
   
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Unbounded&display=swap');


.outer-div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  background-image: url('https://i.ibb.co/h8sH8LF/bg-2.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
}


.signup-container{
  width: 90vw;
  height: 90vh;
  background-color: #161616;
  display: flex;
  border-radius: 15px;
  
}

.left-div {
  flex: 1.5;
  background-image: url('https://i.ibb.co/NSmF12D/forest-1866544-1280.jpg');
  background-color: #458468;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;;
  display: flex;
  align-items: center;
}




.left-div img {
  max-width: 100%;
  max-height: 100%;
}


.right-div{
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
}

.right-div input[type="text"],
.right-div input[type="password"] {
  background-color: black;
  color: white;
  padding: 18px;
  margin-bottom: 5px; /* Reduce the space between the input fields */
  border: none;
  outline: none;
  width: 60%;
  font-size: 20px;
  border-radius: 3px;
}

.right-div input::placeholder {
  color: rgba(250, 250, 250, 0.7);
  font-size: 16px;
}


.right-div h1,
.right-div p,
.left-div h1,
.left-div p {
  color: white;
}

.left-div h1, .left-div p{
  margin-left: 30px;
}

.left-div h1{
  font-family: 'Unbounded', cursive;
  font-size: 50px;
}

.left-div p{
  font-family: 'Comfortaa', cursive;
  font-size: 30px;
  font-weight: 600;
}

.right-div h1{
  font-family: 'Satisfy', cursive;
  font-size: 70px;
}

.right-div button {
  background-color: #458468;
  color: white;
  margin-top: 20px;
  padding: 2.5% 20%;
  border: none;
  outline: none;
  font-size: 16px;
  transition: all 0.3s;
  border-radius: 30px;
}

.right-div button:hover {
  transform: scale(1.1);
}

.right-div p {
  font-family: Arial, sans-serif;
  font-size: 16px;
  margin-top: 20px;
}

.right-div a{
  color: white;
  text-decoration: underline;
  cursor: pointer;
}

.right-div a:hover {
  color: #458468;  
}


@media (max-width: 600px) {
  .left-div {
    display: none;
  }
}


</style>