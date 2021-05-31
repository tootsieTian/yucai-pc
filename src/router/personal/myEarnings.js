export default [
  {
    path: '/personal/myEarnings',
    component: () => import('@/views/personal/myEarnings/index'),
    children: [
      {
        path: '/personal/myEarnings/recommendCourse',
        component: () => import('@/views/personal/myEarnings/recommendCourse'),
        meta: {
          title: '推荐课程'
        }
      },
      {
        path: '/personal/myEarnings/detail',
        component: () => import('@/views/personal/myEarnings/earningDetail'),
        meta: {
          title: '我的收益'
        }
      }
    ]
  },
  {
    path: '/personal/myEarnings/withdraw',
    component: () => import('@/views/personal/myEarnings/withdraw'),
    meta: {
      title: '提现'
    }
  },
  {
    path: '/personal/myEarnings/addBankCard',
    component: () => import('@/views/personal/myEarnings/addBankCard'),
    meta: {
      title: '添加银行卡'
    }
  },
  {
    path: '/personal/myEarnings/earningHistory',
    component: () => import('@/views/personal/myEarnings/earningHistory'),
    meta: {
      title: '收益记录'
    }
  },
  {
    path: '/personal/myEarnings/myBankCard',
    component: () => import('@/views/personal/myEarnings/myBankCard'),
    meta: {
      title: '我的卡'
    }
  },
]
