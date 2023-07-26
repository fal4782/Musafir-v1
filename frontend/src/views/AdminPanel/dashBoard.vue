<template>
    <div class="parent-div">
        <adminNav />

        <div class="header-row">
            <div class="profile-info">
                <div class="profile-wrapper">
                <img src="https://i.ibb.co/RyhKcYX/Falguni-avatar.png" alt="Profile Picture" class="profile-picture">
                <p>{{username}}</p>
            </div>
                <h3>Dashboard</h3>
            </div>
        </div>

        <!-- Graphs row -->
        <div class="graphs-row">
            
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
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.serialNo }}</td>
                <td>
                  <img src="https://i.ibb.co/wJGzYTt/PFP.png" alt="Profile Picture" class="profile-picture">
                </td>
                <td>{{ user.username }}</td>
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


<script>

import adminNav from "../../components/adminNav.vue"

export default {
    name: 'dashBoard',
    data() {
        return {
            username: "Admin",
            users: [{
                    id: 1,
                    serialNo: 1,
                    username: "Divyanshi Hada",
                    email: "d.hada@gmail.com",
                },
                {
                    id: 2,
                    serialNo: 2,
                    username: "Aditya Sharma",
                    email: "a.sharma@gmail.com",
                },
                {
                    id: 3,
                    serialNo: 3,
                    username: "Gourang Sharma",
                    email: "g.sharma@gmail.com",
                },
                {
                    id: 4,
                    serialNo: 4,
                    username: "Keshav Gupta",
                    email: "k.gupta@gmail.com",
                },
                {
                    id: 5,
                    serialNo: 5,
                    username: "Vidushi Sharma",
                    email: "v.sharma@gmail.com",
                },
                {
                    id: 6,
                    serialNo: 6,
                    username: "Kunal Agarwal",
                    email: "k.agarwal@gmail.com",
                },
            ],
            userCount: 0,
            postCount: 0,
            cityCount: 0,
            userCountTarget: 16,
            postCountTarget: 13,
            cityCountTarget: 12,
        }
    },
    components: {
        adminNav
    },
    mounted() {
        this.startCounters();
    },
    methods: {
        startCounters() {
            setInterval(() => {
                this.incrementCounter("userCount", this.userCountTarget);
                this.incrementCounter("postCount", this.postCountTarget);
                this.incrementCounter("cityCount", this.cityCountTarget);
            }, 60);
        },
        incrementCounter(counterName, target) {
            if (this[counterName] < target) {
                this[counterName]++;
            }
        },
    }
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
  /* background-color: rgba(0, 0, 0, 0.4); */
}

.profile-info{
    display: flex;
}
.profile-wrapper img{
    width: 80px;
}

.profile-wrapper p{
    color:white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 0;
    letter-spacing: 0.03cm;
}

.profile-info h3{
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    font-size: 30px;
    margin-left: 20px;
    line-height: 2.3rem;
}

.graphs-row {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}


.data-row {
  display: flex;
  padding: 20px;
}

.user-list-container{
    background-color: #161616;
    padding: 40px;
    border-radius: 10px;
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
  width: 70vw;
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
  font-size:14px;
  letter-spacing:0.03cm;
  position: sticky;
  top:0;
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
  margin-left:2%;
}

.stat-box {
  display: flex;
  align-items: center;
  padding: 30px;
  background-color: transparent;
  border-radius: 5px;
}

.icon {
  font-size:20px;
  margin-right: 20px;
  color:white;  
}

.fa-users{
    background-color:#3b5c53;
    padding:18px;
    border-radius:25%;
}

.fa-images{
    background-color:#f3a755;
    padding:18px;
    border-radius:25%;
}

.fa-city{
    background-color:#e58aa0;
    padding:18px;
    border-radius:25%;
}


.title {
  font-family:Arial;
  color:white;
  margin:6px 0;
  font-size: 15px;
  letter-spacing: 0.03cm;
}

.value {
  margin: 0;
  font-family:Arial;
  color:white;
  font-weight:bold;

}
</style>