export default [
  {
    path: '/personal/activity',
    component: () => import('@/views/personal/activity/index'),
    meta: {
      title: '我的活动'
    },
    redirect: '/personal/activity/spike',
    children: [
      {
        path: 'bargain',
        component: () => import('@/components/personal/activity/bargain')
      },
      {
        path: 'joingroup',
        component: () => import('@/components/personal/activity/joingroup')
      },
      {
        path: 'spike',
        component: () => import('@/components/personal/activity/spike')
      },
    ]
  },
]
