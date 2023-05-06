<template>
  
  <router-view/>

</template>

<script>


export default{
  name: 'App',}

</script>

<style>
body{
  padding: 0;
  margin: 0;
  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
.register input,.login input ,.add input,.update input{
    height: 30px;
    width: 300px;
    padding-left: 30px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
}
.register button,.login button ,.add button,.update button{
    height: 30px;
    width: 340px;
    color: aliceblue;
    background-color: rgb(42, 167, 240);
    border: none;
    cursor: pointer;
}
</style>
