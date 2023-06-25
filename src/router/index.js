import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'login' }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: 'teacher',
          name: 'teacher',
          component: () => import('../views/TeacherView.vue')
        },
        {
          path: 'student',
          name: 'student',
          component: () => import('../views/StudentView.vue'),
          children: [
            {
              path: 'lesson',
              name: 'lesson',
              component: ()=>import('../components/student/LessonMain.vue')
            },
            {
              path: 'my',
              name: 'my',
              component: ()=>import('../components/student/MyMain.vue')
            }
          ]
        }
      ]
    }
  ]
})

export default router
