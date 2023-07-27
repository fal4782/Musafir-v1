<template>
    <div class="parent-div">
        <adminNav />

        <div class="header-row">
            <div class="header-left">
                <p class="greeting">Hi, {{ username }}</p>
            </div>

            <div class="header-right">
                <div class="profile-info">
                    <p class="account-type">Admin Account</p>
                    <p class="user-name">{{username}}</p>
                </div>
                <img src="https://i.ibb.co/RyhKcYX/Falguni-avatar.png" alt="Profile Picture" class="profile-picture">
            </div>
        </div>

        <!-- Graphs row -->
        <div class="graphs-row">
                    <!-- <Line :data="chartData" ></Line> -->
                
                    <canvas id="lineChart"></canvas>
                    <canvas id="lineChart2"></canvas>
        </div>

        <!-- Data row -->
        <div class="data-row">
            <div class="user-list-container">
                <h3>Users</h3>
                <div class="scrollable-list">
          <table class="user-table">
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Profile Icon</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, index) in users" :key="user.id">
                <td>{{ index + 1 }}</td>
                <td>
                  <img src="https://i.ibb.co/wJGzYTt/PFP.png" alt="Profile Picture" class="profile-picture">
                </td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>
                  <button class="edit-button" @click="editUser(user.id)">
                    <i class="fas fa-edit"></i>
                  </button>
                  <button class="delete-button" @click="deleteUser(user.id)">
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
            </div>


            <div class="stats-container">
                <div class="stat-box">
                    <div class="icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <div class="content">
                        <p class="title">User Count</p>
                        <p class="value">{{ userCount }}</p>
                    </div>
                </div>
                <div class="stat-box">
                    <div class="icon">
                        <i class="fas fa-images"></i>
                    </div>
                    <div class="content">
                        <p class="title">Post Count</p>
                        <p class="value">{{ postCount }}</p>
                    </div>
                </div>
                <div class="stat-box">
                    <div class="icon">
                        <i class="fas fa-city"></i>
                    </div>
                    <div class="content">
                        <p class="title">City Count</p>
                        <p class="value">{{ cityCount }}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script >

import axios from "axios";
import adminNav from "../../components/adminNav.vue"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    LineController,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
//import { Line } from 'vue-chartjs'
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    LineController,
    Title,
    Tooltip,
    Legend
)
export default {
    name: 'dashBoard',
    data() {
        return {
            chartData: {
                labels: [],
                datasets: [{
                    label: 'Line Chart Data',
                    backgroundColor: 'rgba(75, 192, 192, 1)', // Fill color under the line
                    borderColor: 'rgba(75, 192, 192, 1)', // Line color
                    data: [], // Sample data points for the Line chart
                }, ],
            },
            chartData1: {
                labels: [],
                datasets: [{
                    label: 'Line Chart Data',
                    backgroundColor: 'rgba(75, 192, 192, 0.01)', // Fill color under the line
                    borderColor: 'rgba(75, 192, 192, 1)', // Line color
                    data: [], // Sample data points for the Line chart
                }, ],
            },
            username: "Admin",
            users: [],
            userCount: 0,
            postCount: 0,
            cityCount: 0,
            userCountTarget: null,
            postCountTarget: null,
            citycountTarget: null,
        }
    },
    components: {
        adminNav,
        // Line,
    },
    async created() {
        let result = await axios.get('http://localhost:5000/adminCountUserPost')
        let result1 = await axios.get('http://localhost:5000/adminCountCityPost')
        console.log(result.data)
        console.log(result1.data)
        let result2= await axios.get("http://localhost:5000/users");
            this.users = result2.data; //all users  
        const lab = []
        const points = []
        const lab1 = []
        const points1= []
        for (let i = 0; i < result.data.length; i++) {
            lab.push(result.data[i].name)
            points.push(result.data[i].count)
        }
        this.chartData.labels = lab
        this.chartData.datasets[0].data = points
        console.log(this.chartData.labels, "vdfgbv", this.chartData.datasets[0].data)
        const ctx = document.getElementById('lineChart').getContext('2d');
        new ChartJS(ctx, {
            type: 'line',
            data: this.chartData,
            options: {
                scales: {
                    y: {
                        // Set the minimum and maximum values for the y-axis (vertical axis)
                        min: 0, // Minimum value
                        max: 10, // Maximum value
                        // You can also set other options for the y-axis here, such as step size, ticks, etc.
                    },
                    // You can also customize the x-axis (horizontal axis) in a similar way if needed.
                },
            },
        });
        for (let i = 0; i < result1.data.length; i++) {
            lab1.push(result1.data[i].city)
            points1.push(result1.data[i].count)
        }
        this.chartData1.labels = lab1
        this.chartData1.datasets[0].data = points1
        console.log(this.chartData1.labels, "ddddddzzxd", this.chartData1.datasets[0].data)
        const ctx2 = document.getElementById('lineChart2').getContext('2d');
        new ChartJS(ctx2, {
            type: 'line',
            data: this.chartData1,
            options: {
                scales: {
                    y: {
                        // Set the minimum and maximum values for the y-axis (vertical axis)
                        min: 0, // Minimum value
                        max: 10, // Maximum value
                        // You can also set other options for the y-axis here, such as step size, ticks, etc.
                    },
                    // You can also customize the x-axis (horizontal axis) in a similar way if needed.
                },
            },
        });

    },
          
    async mounted() {
        this.startCounters();
        let user = JSON.parse(localStorage.getItem('user'))
        this.username=user.name;

        let result =await axios.get('http://localhost:5000/userscount')
        // console.log(result)
        this.userCountTarget=result.data[0].count
        let result1=await axios.get('http://localhost:5000/postcount')
        console.log(result1.data[0].count)
        this.postCountTarget=result1.data[0].count
        let result2=await axios.get('http://localhost:5000/citycount')
        console.log(result2)
        this.citycountTarget=result2.data[0].count
    },
    methods: {
        startCounters() {
            setInterval(() => {
                this.incrementCounter("userCount", this.userCountTarget);
                this.incrementCounter("postCount", this.postCountTarget);
                this.incrementCounter("cityCount", this.citycountTarget);
            }, 50);
        },
        incrementCounter(counterName, target) {
            if (this[counterName] < target) {
                this[counterName]++;
            }
        },
    },

}


</script>


<style scoped>

.parent-div{
    background-image: url('https://i.ibb.co/dmr3yCD/seemless-blackbg.jpg');
    background-repeat: repeat;
    background-size: 20%;
    margin: 0;    
}

.header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #16161695;
}

.greeting {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 22px;
  color: white;
  margin: 0;
  letter-spacing:0.02cm;
}

.header-right {
  display: flex;
  align-items: center;
}

.profile-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 10px;
}

.account-type {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  color: rgba(255,255,255,0.7);
  margin: 4px 0;
  letter-spacing:0.03cm;
}

.user-name {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight:600;
  color: white;
  margin: 0 0;
  letter-spacing:0.02cm;
}

.profile-picture {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.graphs-row {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  z-index: 1;
  height:40%;
  width:50%;
  padding-left: 60px;
}

/*
.graph-box { */
  /* Add styles for the graph box */
  /* For example, set width, height, background color, etc. */
/* } */




.data-row {
  display: flex;
  padding: 20px;
}


/* Add styles for the scrollable list */
/* .scrollable-list { */
  /* Add styles for the scrollable list */
  /* For example, set width, max-height, overflow-y, etc. */
/* } */

.user-list-container{
    background-color: #161616;
    padding: 40px;
    border-radius: 10px;
    width: 68vw;
}


.user-list-container h3{
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    letter-spacing: 0.03cm;
    margin-bottom: 20px;
    margin-top: 0;
    color: white;
    
}
.scrollable-list {
  height: 300px;
  
  /* width:fit-content;  */
  overflow-y: auto; /* Add a scrollbar when content overflows */
  color:white;
  background-color: transparent;
}

.scrollable-list::-webkit-scrollbar {
  width: 10px;
  background-color: transparent;
}

/* (the draggable part) */
.scrollable-list::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0,0.5);
  border-radius: 5px;
}

.scrollable-list::-webkit-scrollbar-thumb:hover {
  background-color: #333;
  cursor: pointer; /*not working*/
}

.user-table {
  width: 100%;
  border-collapse: collapse;
  font-family:Arial, Helvetica, sans-serif;
}

.user-table th,
.user-table td {
  padding: 10px 35px;
  text-align: center;
}

.user-table th {
  background-color: rgb(11,11,11);
  font-size:16px;
  letter-spacing:0.03cm;
  position: sticky;
  top:0;
}

.user-table td{
    font-size: 18px;
    letter-spacing:0.02cm;
}

.user-table td img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 10px;
}

.edit-button,
.delete-button {
  background: none;
  border: none;
  cursor: pointer;
}

.edit-button i,
.delete-button i {
  font-size: 18px;
  transition: transform 0.1s ease;
}

.edit-button i:hover, .delete-button i:hover{
    transform: scale(1.2);
}


.stats-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width:28vw;
}


/* .stat-box { */
  /* Add styles for each stat box */
  /* For example, set width, height, background color, etc. */
/* } */
#lineChart{
    padding-left: 200px;
    margin-right: 100px;
    height: 400px;
    width:400px
}

.stat-box {
  display: flex;
  align-items: center;
  padding: 30px;
  background-color: transparent;
  border-radius: 5px;
}

.icon {
  font-size:25px;
  margin-right: 20px;
  color:white;  
}

.fa-users{
    background-color:#3b5c53;
    padding:20px;
    border-radius:25%;
}

.fa-images{
    background-color:#f3a755;
    padding:20px;
    border-radius:25%;
}

.fa-city{
    background-color:#e58aa0;
    padding:20px;
    border-radius:25%;
}


.title {
  font-family:Arial;
  color:rgba(255,255,255,0.7);
  margin:6px 0;
  font-size: 18px;
  letter-spacing: 0.03cm;
}

.value {
  margin: 0;
  font-family:Arial;
  color:white;
  font-weight:bold;
  font-size:22px;
  letter-spacing: 0.03cm;

}
</style>