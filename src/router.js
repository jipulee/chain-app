import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Student from './views/Student'
import CreateStudent from './views/CreateStudent'
import Graduation from './views/Graduation'
import ListStudent from './views/ListStudent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/student',
      name: 'student',
      component: Student
    },
    {
      path: '/create',
      name: 'createstudent',
      component: CreateStudent
    },
    {
      path: '/graduation',
      name: 'graduation',
      component: Graduation
    },
    {
      path: '/list',
      name: 'liststudent',
      component: ListStudent
    }
  ]
})
