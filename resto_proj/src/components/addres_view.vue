<template>
    <header_view/>
    <h1>wlcm to Add restaurant page</h1>
    <form action="" class="add">
        <input type="text" v-model="restaurants.name" placeholder="enter name" name="name">
        <input type="text" v-model="restaurants.address" placeholder="Address" name="address">
        <input type="text" v-model="restaurants.contact" placeholder="contact" name="contact">
        <button type="button" v-on:click="addrest()">Add Restaurant</button>
    </form>
    <p>
            <router-link to="/">back</router-link>
        </p>
</template>
<script>
import axios from 'axios'
import header_view from './header_view.vue'
    export default{
        
        name:'addres_view',
        components:{
            header_view
        },
        data(){
            return{
                restaurants:{
                    name:'',
                    address:'',
                    conact:''
                }
            }
        },
        mounted(){
            let user= localStorage.getItem('user_info')
            if(!user){
                this.$router.push({name:'log_in'})
            }

        },
        methods:{
            async addrest(){
                
               
                    const result=await axios.post('http://localhost:3000/restaurant',{
                        name:this.restaurants.name,address:this.restaurants.address,contact:this.restaurants.contact
                    
                   
                }) 
                if(result.status==201){
                    this.$router.push({name:'log_in'})
                }
                
            }
        }
    }
    
</script>