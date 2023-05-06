<template>
    <header_view/>
    <h1>wlcm {{name}},to home page</h1>
    <p>
        <router-link to="add">Add</router-link>
    </p>
    <table border="1px">
        <thead>
            
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Action</th>
        </thead>
        <tbody>
            <tr v-for="item in restaurants " :key="item">
            <td>{{ item.name }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.contact }}</td>
            <td>
                <p>
                    <router-link :to="'/update/'+item.id">update</router-link>
                </p>
                <button v-on:click="del( item.id )" >Delete</button>
            </td>
        </tr>
        </tbody>
        
    </table>
</template>
<script>
import axios from 'axios'
import header_view from './header_view.vue'
    export default{
        
        name:'home_view',
        data(){
            return{
                name:'',
                restaurants:[]
            }
        },
        components:{
            header_view
        },
        async mounted(){
            this.reloaddata();
        },
        methods:{
            async del(id){
                console.log(id)
                const res=await axios.delete('http://localhost:3000/restaurant/'+id)
                if(res.status==200){
                    this.reloaddata();
                }
            },
            async reloaddata(){
                let user= localStorage.getItem('user_info')
                //becausr th data are in string so ned to parse data into jsom
                this.name=JSON.parse(user).name

                if(!user){
                    this.$router.push({name:'log_in'})
                }
                
                let result =await axios.get('http://localhost:3000/restaurant')
                console.log(result)
                this.restaurants=result.data
            }
        }
    }
    
</script>
<style>
    td{
        width: 1000px;
        height: 10px;
        
    }
</style>