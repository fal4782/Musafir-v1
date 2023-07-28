<template>
    
<div class="parent-div">
    <adminNav />
    <!-- <div class="user-list-container">
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
                                    <img src="https://i.ibb.co/wJGzYTt/PFP.png" alt="Profile Picture"
                                        class="profile-picture">
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
            </div> -->
            <div v-for="post1 in usersPost" :key="post1.post_id">
                <div class="user-info">
                    {{ post1.name }}
                    {{ post1.email }}
                </div>
                <div> 
                <adminPostTemplate :post="post1" />
            </div>
            </div>
</div>
</template>

<script>
import axios from "axios"
import adminPostTemplate from "../../components/adminPostTemplate.vue"
import adminNav from '../../components/adminNav.vue';
export default{
    data(){
        return{
            usersPost:''
        }
    },
    components:{
        adminPostTemplate,
        adminNav,
    },
    async created(){
        let result=await axios.get('http://localhost:5000/userVisePosts')
        console.log(result)
        this.usersPost=result.data
        
    }
}

</script>

<style scoped>

.parent-div{
    background-image: url('https://i.ibb.co/dmr3yCD/seemless-blackbg.jpg');
    background-repeat: repeat;
    background-size: 20%;
}

.user-info{
    color:white;
}


</style>