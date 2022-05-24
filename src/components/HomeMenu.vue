<template>
<Header />
<div class="front">
<h2>Hello {{name}}!</h2>
<h1>The list of current flights:</h1>
</div>
<div class="table">
<table border="1" align="center">
    <tr>
        <td>Id</td>
        <td>Destination</td>
        <td>Number of Seats</td>
        <td>Departure time</td>
        <td>Actions</td>
    </tr>
    <tr v-for="item in airplane" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.destination}}</td>
        <td>{{item.seats}}</td>
        <td>{{item.time}}</td>
        <td><router-link :to="'/update/'+item.id">Update</router-link>
        <button class="deleteButton" v-on:click="deleteAirplane(item.id)">Delete</button>
        </td>
    </tr>
</table>
</div>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';
export default{
    name:'HomeMenu',
    data(){
        return {
            name:'',
            airplane:[],
        }
    },
    components:{
        Header
    },
    methods:{
        async deleteAirplane(id){
            let result = await axios.delete("http://localhost:3000/airplanes/"+id);
            if(result.status == 200){
                this.loadData()
            }
        },
        async loadData(){
            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user).name;
            if(!user)
            {
                this.$router.push({name:'SignUp'})
            }

            let result = await axios.get("http://localhost:3000/airplanes");
            this.airplane = result.data;
        }
    },
    async mounted()
    {
        let user = localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:'LogIn'})
        }
        this.loadData();
    }
}
</script>

<style>
td{
    width:25%;
    height:40px;
}
</style>