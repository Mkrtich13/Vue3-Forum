import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home'
import ThreadShow from '@/pages/ThreadShow'
import NotFound from '@/pages/NotFound'

import data from '@/data.json'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: ThreadShow,
    props: true,
    beforeEnter(to, _, next) {
      const thread = data.threads.find(thread => thread.id === to.params.id)
      if (thread) {
        return next()
      }

      next({
        name: 'NotFound',
        params: {
          pathMatch: to.path.substring(1).split('/')
        },
        query: to.query,
        hash: to.hash
      })
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
