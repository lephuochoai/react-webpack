import Home from '@/pages/home'
import Login from '@/pages/login/Login'
import Profile from '@/pages/profile'

const routes = [
  {
    title: 'Home',
    path: '/',
    exact: true,
    component: Home,
    loginRequired: false
  },
  {
    title: 'Profile',
    path: '/profile',
    exact: true,
    component: Profile,
    loginRequired: true,
  }
]

// Routes will rejected when logged
const routesSpecialLogged = [
  {
    title: 'Login',
    path: '/login',
    exact: true,
    component: Login,
    loginRequired: false
  }
]

export {
  routes,
  routesSpecialLogged
}
