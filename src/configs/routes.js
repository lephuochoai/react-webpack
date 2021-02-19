import Home from '@/pages/home'
import Login from '@/pages/login'

const routes = [
  {
    title: 'Login',
    path: '/login',
    exact: true,
    component: Login
  },
  {
    title: 'Home',
    path: '/',
    exact: true,
    component: Home
  }
]

export default routes
