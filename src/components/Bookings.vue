<template>
<Header />
<div class="front">
<h2>Hello {{name}}!</h2>
<h1>Personal bookings:</h1>
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
    <tr v-for="item in currentClientBookings" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.destination}}</td>
        <td>{{item.seats}}</td>
        <td>{{item.time}}</td>
        <td><button class="deleteButton" v-on:click="deleteBooking(item.id)">Delete</button></td>
    </tr>
</table>
</div>
</template>

<script>
import Header from './HeaderClient.vue'
import axios from 'axios';
export default{
    name:'HomeMenuClient',
    data(){
        return {
            name:'',
            bookings:[],
            currentClientBookings:[],
        }
    },
    components:{
        Header
    },
    computed: {
        
    },
    methods:{
        async deleteBooking(id){
            let result = await axios.delete("http://localhost:3000/bookings/"+id);
            if(result.status == 200){
                this.loadData()
            }
        },
        async loadData(){
            let client = localStorage.getItem('client-info');
            let currentClientId = JSON.parse(localStorage.getItem('client-info')).id;

            this.name = JSON.parse(client).name;
            if(!client)
            {
                this.$router.push({name:'SignUp'})
            }

            let result = await axios.get("http://localhost:3000/bookings");
            this.bookings = result.data;
            this.currentClientBookings = this.bookings.filter(function(b){
                return (b.clientId == currentClientId)
            })
        }
    },
    mounted()
    {
        let client = localStorage.getItem('client-info');
        if(!client)
        {
            this.$router.push({name:'LogInClient'})
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