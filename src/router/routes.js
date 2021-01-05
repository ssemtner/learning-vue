import Home from "@/components/Home";
import Calculator from "@/components/Calculator";
import Register from "@/components/Register";
import Login from "@/components/Login";
import Dashboard from "@/components/Dashboard";
import Todo from "@/components/Todo";
import Messaging from "@/components/Messaging";

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
        path: '/todo',
        name: 'Todo',
        component: Todo
    },
    {
        path: '/messaging',
        name: 'Messaging',
        component: Messaging
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
