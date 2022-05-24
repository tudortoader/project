<template>
<router-view />
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  padding:0;
  margin:0;
  background-color: aquamarine;
}
.front{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color:darkgoldenrod
}
.table{
    background-color:aqua;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size:larger;
    color:darkgoldenrod
}
.logo{
    width:300px
}
.register input, .login input, .add input{
    width: 250px;
    height: 50px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}
.register button, .login button, .add button{
    width: 270px;
    height: 35px;
    border: 1px solid darkblue;
    background: darkblue;
    color: white;
    cursor: pointer;
}
.deleteButton {
    background-color: aqua;
    cursor: pointer;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    border: none;
    font-size: large;
    color: darkblue;
    text-decoration: underline;
}
</style>
