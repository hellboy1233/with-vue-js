<template>
    <div class="topnav">
        <router-link to="/">home</router-link>
        <router-link to="add">add restaurant</router-link>
        <router-link to="update">update restaurant</router-link>
        
        <a href="#" v-on:click="logout">log out</a>
    </div>
</template>
<script>
    export default{
        name:'header_view',
        methods:{
            logout(){
                localStorage.clear();
                this.$router.push({name:'log_in'})
            }
        }
    }
</script>
<style>
    .topnav{
        background-color: #1ca10a;
        overflow: hidden;
        
        
    }
    .topnav a{
        color: white;
        float: left;
        text-align: center;
        padding: 14px 14px;
        font-size: 20px;
        text-decoration: none;
    }
    .topnav a:hover{
        color: #1ca10a;
        background-color: white;
    }
</style>