export default [
  {
    path: '/personal/community/groupChat',
    component: () => import('@/views/personal/community/groupChat'),
    meta: {
      title: '我的社群'
    }
  },
  {
    path: '/personal/community/checkCourse',
    component: () => import('@/views/personal/community/checkCourse'),
    meta: {
      title: '选择课程'
    }
  },
  {
    path: '/personal/community/detail',
    component: () => import('@/views/personal/community/communityDetail'),
    meta: {
      title: '我的社群'
    }
  },
  {
    path: '/personal/community',
    component: () => import('@/views/personal/community/index'),
    meta: {
      title: '我的社群'
    }
  },
]
