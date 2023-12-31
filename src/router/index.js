import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
          component: () => import('../views/TeacherView.vue'),
          children: [
            {
              path: 'userSetting',
              name: 'userSetting',
              component: () => import('../components/teacher/UserSetting.vue')
            },
            {
              path: 'course',
              name: 'course',
              component: () => import('../components/teacher/CourseView.vue'),
            },
            {
              path: 'courseDetail',
              component: () => import('../views/CourseDetailView.vue')
            },
          ]
        },

        {
          path: 'student',
          name: 'student',
          component: () => import('../views/StudentView.vue'),
          redirect: {name: 'lesson'},
          children: [
            {
              path: 'lesson',
              name: 'lesson',
              component: ()=>import('../components/student/LessonMain.vue'),
            },
            {
              path: 'my',
              name: 'my',
              component: ()=>import('../components/student/MyMain.vue')
            },
            {
              path: 'lesson-detail/:lessonCode',
              name: 'lessonDetail',
              component: ()=>import('../components/student/LessonDetail.vue')
            }
          ]
        }
      ]
    }
  ]
})

export default router
