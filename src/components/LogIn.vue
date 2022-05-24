<template>
    <img class="logo" src="../assets/logo.png" />
    <div class="front">
    <h1>Login</h1>
    </div>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button v-on:click="login">Log In</button>
        <p>
            <router-link to="/log-in-client">Not an administrator? Log in as client</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LogIn',
    data()
    {
        return{
            email:'',
            password:''
        }
    },
    methods:{
        async login()
        {
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )

            if(result.status==200 && result.data.length>0){
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({name:'HomeMenu'})
            }
            console.warn(result)
        }
    },
    mounted(){
        let client = localStorage.getItem('client-info');
        if(client){
            this.$router.push({name:'HomeMenuClient'})
        }
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'HomeMenu'})
        }
    }
};
</script>