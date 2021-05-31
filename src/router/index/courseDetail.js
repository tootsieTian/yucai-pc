export default [
  {
    path: "/courseDetail",
    component: () => import('../../views/index/courseDetail/index'),
    meta: {
      title: '课程详情页'
    }
  },
  {
    path: "/courseDetail/courseCommentList",
    component: () => import('../../views/index/courseDetail/courseCommentList'),
    meta: {
      title: '课程评价'
    }
  },
  {
    path: "/courseDetail/commentCourse",
    component: () => import('../../views/index/courseDetail/commentCourse'),
    meta: {
      title: '评价课程'
    }
  },
  {
    path: "/courseDetail/coursePlay",
    component: () => import('../../views/index/courseDetail/coursePlay'),
    meta: {
      title: '课程播放'
    }
  },
  {
    path: "/courseDetail/confirmOrder",
    component: () => import('../../views/index/courseDetail/confirmOrder'),
    meta: {
      title: '确认订单'
    }
  },
]
