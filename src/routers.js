import HomeMenu from './components/HomeMenu.vue'
import HomeMenuClient from './components/HomeMenuClient.vue'
import SignUp from './components/SignUp.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LogIn from './components/LogIn.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
import LogInClient from './components/LogInClient.vue'
import Bookings from './components/Bookings.vue'
import AddBooking from './components/AddBooking.vue'
const routes = [
    {
        name: 'HomeMenu',
        component: HomeMenu,
        path: '/'
    },
    {
        name: 'HomeMenuClient',
        component: HomeMenuClient,
        path: '/client'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up',
    },
    {
        name: "LogIn",
        component: LogIn,
        path: "/log-in",
    },
    {
        name: "LogInClient",
        component: LogInClient,
        path: "/log-in-client",
    },
    {
        name: "Add-prc",
        component: Add,
        path: "/add",
    },
    {
        name: "Update-prc",
        component: Update,
        path: "/update/:id",
    },
    {
        name: "Bookings",
        component: Bookings,
        path: "/bookings",
    },
    {
        name: "AddBooking",
        component: AddBooking,
        path: "/addBooking/:id",
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router