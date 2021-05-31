export default [
  {
    path: '/personal/evaluation',
    component: () => import('@/views/personal/evaluation/index'),
    meta: {
      title: '测评中心'
    }
  },
  {
    path: '/personal/evaluation/myEvaluation',
    component: () => import('@/views/personal/evaluation/myEvaluation'),
    meta: {
      title: '我的测评'
    }
  },
  {
    path: '/personal/evaluation/myWrongQuestion',
    component: () => import('@/views/personal/evaluation/myWrongQuestion'),
    meta: {
      title: '我的错题'
    }
  },
  {
    path: '/personal/evaluation/detail',
    component: () => import('@/views/personal/evaluation/detail'),
    meta: {
      title: '测评详情'
    }
  },
  {
    path: '/personal/evaluation/evaluating',
    component: () => import('@/views/personal/evaluation/evaluating'),
    meta: {
      title: '测评'
    }
  },
  {
    path: '/personal/evaluation/pay',
    component: () => import('@/views/personal/evaluation/pay'),
    meta: {
      title: '测评支付'
    }
  },
  {
    path: '/personal/evaluation/result',
    component: () => import('@/views/personal/evaluation/result'),
    meta: {
      title: '测评结果'
    }
  },
  {
    path: '/personal/evaluation/analyze',
    component: () => import('@/views/personal/evaluation/analyze'),
    meta: {
      title: '测评结果'
    }
  },
  {
    path: '/personal/evaluation/achievement',
    component: () => import('@/views/personal/evaluation/achievement'),
    meta: {
      title: '测评结果'
    }
  },
]
