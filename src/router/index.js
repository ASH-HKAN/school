import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MyTeachers from '@/views/MyTeachers.vue'
import MyStudents from '@/views/MyStudents.vue'
import MyEach from '@/views/MyEach.vue'
import ForBidden404 from '@/views/ForBidden404.vue'

Vue.use(VueRouter)
export default new VueRouter({

  mode: 'history',
  base: process.env.Base_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/MyTeachers',
      name: 'Teachers',
      component: MyTeachers

    },
    {
      path: '/MyStudents',
      name: 'Students',
      component: MyStudents

    },
    {
      path: '/single/:cat/:id',
      name: 'Each',
      component: MyEach

    },

    {
      path: '*',
      component: ForBidden404
    }

  ]
})
