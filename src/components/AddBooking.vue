<template>
<Header />
<h1>Booking Details:</h1>
<form class="add">
    <input type="text" name="destination" placeholder="Enter Destination" v-model="booking.destination" />
    <input type="text" name="seats" placeholder="Enter Seats" v-model="booking.seats"/>
    <input type="text" name="time" placeholder="Enter Time of Departure" v-model="booking.time"/>
    <button type="button" v-on:click="addBooking">Book Flight</button>
</form>
</template>

<script>
import Header from './HeaderClient.vue'
import axios from 'axios'
export default{
    name:'AddBooking',
    components:{
        Header
    },
    data()
    {
        return{
            booking:{
                destination:'',
                seats:'',
                time:'',
                clientId:'',
            }
        }
    },
    methods:{
        async addBooking(){
            let currentClientId = JSON.parse(localStorage.getItem('client-info')).id;
            console.warn(currentClientId);

            const result = await axios.post("http://localhost:3000/bookings/", {
                destination:this.booking.destination,
                seats:this.booking.seats,
                time:this.booking.time,
                clientId:currentClientId,
            });
            if(result.status==201){
                this.$router.push({name:'HomeMenuClient'});
            }
        }
    },
    async mounted()
    {
        let client = localStorage.getItem('client-info');
        if(!client)
        {
            this.$router.push({name:'SignUp'})
        }
        const result = await axios.get('http://localhost:3000/airplanes/'+this.$route.params.id)
        this.booking = result.data
    }
}
</script>