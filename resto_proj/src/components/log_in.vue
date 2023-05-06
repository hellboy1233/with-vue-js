<template>
    <h1>Log in</h1>
    <div class="login">
        
        <input type="text" v-model="email" name="email" placeholder="zyz@gmail.com" >
        <input type="password" v-model="password" name="password" placeholder="...........">
        <button v-on:click="login()">Log in</button>
        <p>
            <router-link to="sign_up">sign_up</router-link>
        </p>
    </div>
</template>
<script>
import axios from 'axios'
    export default{
        name:'log_in',
        data(){
            return {
                email:'',
                password:'',
                
            }
        },
        methods:{
            async login(){
                console.warn('data',this.email,this.password);
                let result=await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`);
                if(result.status==200&&result.data.length>0){
                    localStorage.setItem("user_info",JSON.stringify(result.data[0]))
                    this.$router.push({name:'home_view'})
                    
                }else{
                    alert('wrong input ')
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