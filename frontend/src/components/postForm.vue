<template>
  <div>
    <h1>Post form page</h1>
    <!-- <form action="/upload" method="post" enctype="multipart/form-data">  -->
    <label for="">Place</label>
    <input type="text" v-model="place" placeholder="Enter a Place">
    <label for="">City</label>
    <input type="text" v-model="city" placeholder="Enter a City">
    <label for="">State</label>
    <input type="text" v-model="state" placeholder="Enter a State">
    <label for="">Description</label>
    <input type="text" v-model="description" placeholder="Enter Description">
    <label for="">Category</label>
    <select id="category" v-model="category">
      <option disabled selected value="">Choose Category</option>
      <option value="Historical">Historical</option>
      <option value="Gardens">Gardens</option>
      <option value="Worship Places">Worship Places</option>
      <option value="Adventure">Adventure</option>
      <option value="Food & Beverages">Food & Beverages</option>
      <option value="Others">Others</option>
    </select>
    <label for="">Value for money</label>
    <select id="value_for_money" v-model="value_for_money">
      <option disabled selected value="">Add your Rating</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <label for="">Safety & Security</label>
    <select v-model="safety">
      <option disabled selected value="">Add your Rating</option>
      <option value=1>1</option>
      <option value=2>2</option>
      <option value=3>3</option>
      <option value=4>4</option>
      <option value=5>5</option>
    </select>
    <label for="">Overall Experience</label>
    <select v-model="overall_exp">
      <option disabled selected value="">Add your Rating</option>
      <option value=1>1</option>
      <option value=2>2</option>
      <option value=3>3</option>
      <option value=4>4</option>
      <option value=5>5</option>
    </select>
    <input type="file" name="avatar" @change="handleFileChange" multiple>
    <button @click="submit">Submit</button>
    <!-- <img :src="require('../../../backend/images/' + path)" alt=""> -->
    <!-- </form> -->
  </div>
</template>

<script>
import axios from "axios"
export default{
    name:'postForm',
    data(){
        return{
            path: "1689655282366--travel-bag.png",
            city:'',
            state:'',
            place:'',
            description:'',
            category:'',
            value_for_money:'',
            safety:'',
            overall_exp:'',
        }
    },
    methods:{
        handleFileChange(event) {
    this.image= event.target.files;
    console.log('dvhgyu',this.image)
  },


    async submit() {
  const formData = new FormData();
  console.log('image',this.image.length)
  for(let i=0;i<this.image.length;i++){
    formData.append('avatar', this.image[i]);
  }
  let userid=JSON.parse(localStorage.getItem('user')).id
  formData.append('place',this.place)
  formData.append('city',this.city)
  formData.append('state',this.state)
  formData.append('description',this.description)
  formData.append('category',this.category)
  formData.append('value_for_money',parseInt(this.value_for_money))
  formData.append('safety',parseInt(this.safety))
  formData.append('overall_exp',parseInt(this.overall_exp))
  formData.append('user_id',userid)
  //console.log(userid)
   // Assuming "selectedFile" contains the file object
  console.log(formData)
  try {
    const result = await axios.post('http://localhost:5000/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log(result);
    // Handle the response from the server
  } catch (error) {
    console.error(error);
    // Handle the error
  }
},
    }
}
</script>