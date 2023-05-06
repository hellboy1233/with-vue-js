<template>
    
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" name="name" placeholder="name">
        <input type="text" v-model="email" name="email" placeholder="zyz@gmail.com" >
        <input type="password" v-model="password" name="password" placeholder="...........">
        <button v-on:click="signup()">Sign Up</button>
        <p>
            <router-link to="log_in">login</router-link>
        </p>
    </div>
</template>
<script>
import axios from 'axios'
    export default{
        name:'sign_up',
        data(){
            return{
                name:'',
                email:'',
                password:''
            }
        },
        methods:{
             async signup(){
                console.warn(this.name,this.email,this.password)
                let result=await axios.post("http://localhost:3000/user",{
                    name:this.name,email:this.email,password:this.password
                });
                
                localStorage.setItem("user_info",JSON.stringify(result))
                
                if(result.status==201){
                    this.$router.push({name:'home_view'})
                }
            }
        },
        mounted(){
            let user= localStorage.getItem('user_info')
            if(user){
                this.$router.push({name:'home_view'})
            }

        }
    }
</script>
<style>


</style>