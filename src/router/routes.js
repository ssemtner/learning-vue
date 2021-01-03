import Home from "@/views/Home";
import Calculator from "@/views/Calculator";
import Register from "@/components/Register";
import Login from "@/components/Login";
import Dashboard from "@/components/Dashboard";

export default [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/calculator',
        name: 'Calculator',
        component: Calculator
    },
    {
        path: '/auth/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/auth/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
]
