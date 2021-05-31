export default [
  {
    path: '/personal/teamwork',
    component: () => import('@/views/personal/teamwork/index'),
    meta: {
      title: '申请服务商'
    }
  },
  {
    path: '/personal/teamwork/company',
    component: () => import('@/views/personal/teamwork/company'),
    meta: {
      title: '申请入驻机构'
    }
  },
  {
    path: '/personal/teamwork/person',
    component: () => import('@/views/personal/teamwork/person'),
    meta: {
      title: '申请个人讲师'
    }
  },
]

