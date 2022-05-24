<template>
<Header />
<div class="front">
<h1>Flight Details:</h1>
</div>
<form class="add">
    <input type="text" name="destination" placeholder="Enter Destination" v-model="airplane.destination" />
    <input type="text" name="seats" placeholder="Enter Seats" v-model="airplane.seats"/>
    <input type="text" name="time" placeholder="Enter Time of Departure" v-model="airplane.time"/>
    <button type="button" v-on:click="updateAirplane">Update Plane</button>
</form>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
export default{
    name:'Update-prc',
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
        async updateAirplane(){
            const result = await axios.put("http://localhost:3000/airplanes/"+this.$route.params.id,{
                destination:this.airplane.destination,
                seats:this.airplane.seats,
                time:this.airplane.time,
            });
            if(result.status==200){
                this.$router.push({name:'HomeMenu'});
            }
        }
    },
    async mounted()
    {
        let user = localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:'SignUp'})
        }
        const result = await axios.get('http://localhost:3000/airplanes/'+this.$route.params.id)
        this.airplane = result.data
    }
}
</script>