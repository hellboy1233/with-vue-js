<template>
    <header_view/>
    <h1>wlcm to update restaurant page</h1>
    <form action="" class="update">
        <input type="text" v-model="restaurants.name"  name="name">
        <input type="text" v-model="restaurants.address" placeholder="Address" name="address">
        <input type="text" v-model="restaurants.contact" placeholder="contact" name="contact">
        <button type="button " v-on:click="update()">Update Restaurant</button>
    </form>
   
</template>
<script>
import axios from 'axios'
import header_view from './header_view.vue'
    export default{
        
        name:'updateres_view',
        components:{
            header_view
        },
        data(){
            return{
                restaurants:{
                    name:'',
                    address:'',
                    conact:''
                },
               
            }
        },
        async mounted(){
            
            let user= localStorage.getItem('user_info')
            if(!user){
                this.$router.push({name:'log_in'})
            }
            console.log(this.$route.params.id)
            const result=await axios.get("http://localhost:3000/restaurant/"+this.$route.params.id)
            this.restaurants=result.data

        },
        methods:{
            async update(){
                const res=await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,{
                    name:this.restaurants.name,address:this.restaurants.address,contact:this.restaurants.contact
                })
                console.log(res)
                
            }
        }
    }
    
</script>