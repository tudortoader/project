<template>
<Header />
<div class="front">
<h1>Details of the new flight:</h1>
</div>
<form class="add">
    <input type="text" name="destination" placeholder="Enter Destination" v-model="airplane.destination" />
    <input type="text" name="seats" placeholder="Enter Seats" v-model="airplane.seats"/>
    <input type="text" name="time" placeholder="Enter Time of Departure" v-model="airplane.time"/>
    <button type="button" v-on:click="addAirplane">Add New Plane</button>
</form>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
export default{
    name:'Add-prc',
    components:{
        Header
    },
    data()
    {
        return{
            airplane:{
                destination:'',
                seats:'',
                time:'',
            }
        }
    },
    methods:{
        async addAirplane(){
            const result = await axios.post("http://localhost:3000/airplanes",{
                destination:this.airplane.destination,
                seats:this.airplane.seats,
                time:this.airplane.time,
            });
            if(result.status==201){
                this.$router.push({name:'HomeMenu'});
            }
        }
    },
    mounted()
    {
        let user = localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:'SignUp'})
        }
    }
}
</script>