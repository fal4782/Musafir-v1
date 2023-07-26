<template>
    <div class="parent-div">
        <adminNav />

        <div class="header-row">
            <div class="profile-info">
                <div class="profile-wrapper">
                <img src="https://i.ibb.co/wJGzYTt/PFP.png" alt="Profile Picture" class="profile-picture">
                <p>Admin</p>
            </div>
                <h3>Dashboard</h3>
            </div>
        </div>

        <!-- Graphs row -->
        <div class="graphs-row">
            <router-link to="/like-vs-post" class="graph-box">
                <!-- Your Like vs Post graph here -->
            </router-link>
            <router-link to="/user-vs-post" class="graph-box">
                <!-- Your User vs Post graph here -->
            </router-link>
        </div>

        <!-- Data row -->
        <div class="data-row">
            <div class="scrollable-list">
                <!-- Your scrollable list of data here -->
            </div>

            <div class="stats-container">
                <div class="stat-box">
                    <!-- User count content here -->
                </div>
                <div class="stat-box">
                    <!-- Post count content here -->
                </div>
                <div class="stat-box">
                    <!-- City count content here -->
                </div>
            </div>
        </div>

    </div>
</template>


<script>

import adminNav from "../../components/adminNav.vue"

export default{
    name: 'dashBoard',
    data(){
        return{

        }
    },
    components:{
        adminNav
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
  background-color: rgba(0, 0, 0, 0.4);
}

.profile-info{
    display: flex;
}
.profile-wrapper img{
    width: 100px;
}

.profile-wrapper p{
    color:white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
}

.profile-info h3{
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    font-size: 30px;
    margin-left: 10px;
    line-height: 2.3rem;
}

.graphs-row {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}

.graph-box {
  /* Add styles for the graph box */
  /* For example, set width, height, background color, etc. */
}

/* Add styles for the data row */
.data-row {
  display: flex;
  padding: 20px;
}

/* Add styles for the scrollable list */
.scrollable-list {
  /* Add styles for the scrollable list */
  /* For example, set width, max-height, overflow-y, etc. */
}

/* Add styles for the stats container */
.stats-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* Add styles for the stats container */
  /* For example, set width, padding, etc. */
}

.stat-box {
  /* Add styles for each stat box */
  /* For example, set width, height, background color, etc. */
}

</style>