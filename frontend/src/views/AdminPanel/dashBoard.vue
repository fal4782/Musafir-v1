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
                    <!-- <Line :data="chartData" ></Line> -->
                
                    <canvas id="lineChart"></canvas>
                    <canvas id="lineChart2"></canvas>
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


<script >

import adminNav from "../../components/adminNav.vue"
import axios from "axios"
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
            }
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

/* Add styles for the data row */
.data-row {
  display: flex;
  padding: 20px;
}

/* Add styles for the scrollable list */
/* .scrollable-list { */
  /* Add styles for the scrollable list */
  /* For example, set width, max-height, overflow-y, etc. */
/* } */

/* Add styles for the stats container */
.stats-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* Add styles for the stats container */
  /* For example, set width, padding, etc. */
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
</style>