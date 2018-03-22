import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: About
    },
    {
      path: '/About',
      name: 'about',
      component: About
    },
    {
      path: '/education',
      name: 'education',
      component: Education
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    }
  ]
})
