import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import QuizOne from '@/components/QuizOne'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Question/:name',
      name: 'QuestionOne',
      component: QuizOne
    }
  ]
})
