export default [
  {
    path: '/personal/message',
    component: () => import('@/views/personal/message/index'),
    meta: {
      title: '消息'
    }
  },
  {
    path: '/personal/message/system',
    component: () => import('@/views/personal/message/system'),
    meta: {
      title: '系统消息'
    }
  },
  {
    path: '/personal/message/comment',
    component: () => import('@/views/personal/message/comment'),
    meta: {
      title: '评论消息'
    }
  },
]
