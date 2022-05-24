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
        <td><router-link :to="'/addBooking/'+item.id">Book</router-link></td>
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
            airplane:[],
        }
    },
    components:{
        Header
    },
    methods:{
        async loadData(){
            let client = localStorage.getItem('client-info');
            this.name = JSON.parse(client).name;
            if(!client)
            {
                this.$router.push({name:'SignUp'})
            }

            let result = await axios.get("http://localhost:3000/airplanes");
            this.airplane = result.data;
        }
    },
    async mounted()
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