<template>


<navBar1/>
<div class="parent-div">
    <postTemplate/>
<FooTer/>
</div>

</template>


<script>

import navBar1 from "../components/navBar1.vue";
import postTemplate from "../components/postTemplate.vue";
import FooTer from "../components/FooTer.vue";

export default{
    name:'homePage',
    data(){
        return{

        }
    },
    components:{
        navBar1,
        postTemplate,
        FooTer
    }
}
</script>


<style scoped>

.parent-div{
    padding-top: 50px;
    background-image: url('https://i.ibb.co/dmr3yCD/seemless-blackbg.jpg');
    background-repeat: repeat;
    background-size: 20%;
}

</style>