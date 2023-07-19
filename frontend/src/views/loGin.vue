<template>
    <!-- <navBar1/> -->
    <div class="outer-div">
        <div class="login-container">
            <div class="left-div">
                <div>
                    <h1>Your travel memories, all in one place.</h1>
                    <p>Login and start sharing.</p>
                </div>
            </div>

            <div class="right-div">
                <h1>Musafir</h1>
                <input type="text" placeholder="Email" v-model="email"><br>
                <input type="password" placeholder="Enter your Password" v-model="password"><br>
                <button @click="login">LOG IN</button>
                <p>
                    Haven't made an account yet? <router-link to="/signup">Sign Up.</router-link>
                </p>
                <p id="guest-link"><router-link to="/">Explore as a guest.</router-link></p>
            </div>
        </div>
    </div>

</template>
   
   <script>
//    import navBar1 from "../components/navBar1.vue"
   import axios from 'axios'
   export default {
     name: 'loGin',
     components:{
        // navBar1
     },
     data(){
        return{
            email:'',
            password:'',

        }
     },
     methods:{
        async login(){
            console.log(this.email, this.password)
            let result =await axios.post("http://localhost:5000/login",{email:this.email, password:this.password})
            console.log('ggi')
            console.log(result.data[0])
            if(result.status==201 && result.data.length>0){
                console.log('hii')
                localStorage.setItem('user',JSON.stringify(result.data[0]))
                this.$router.push({name:'postForm'})
            }
        }
     }
     
   }
   </script>
   
   <style scoped>
   
     
   .outer-div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  background-image: url('https://i.ibb.co/R341ccc/bg-purple-2.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
}


.login-container{
  width: 90vw;
  height: 90vh;
  background-color: #161616;
  display: flex;
  border-radius: 15px;
  
}

.left-div {
  flex: 1.5;
  background-image: url('https://i.ibb.co/TMnPS5w/tajmahal.jpg');
  background-color: #726095;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top calc(0px - 10px);
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
  margin-bottom: 5px;
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
  background-color: #726095;
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

#guest-link{
    margin-top: 0px !important;
}

.right-div a{
  color: white;
  text-decoration: underline;
  cursor: pointer;
}

.right-div a:hover {
  color: #726095;  
}


@media (max-width: 600px) {
  .left-div {
    display: none;
  }
}

   </style>