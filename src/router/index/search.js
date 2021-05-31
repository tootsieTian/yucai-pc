export default [
  {
    path: "/search/result",
    component: () => import('../../views/index/search/searchResult'),
    meta: {
      title: '搜索结果'
    }
  },
  {
    path: "/search",
    component: () => import('../../views/index/search'),
    meta: {
      title: '搜索'
    }
  },
]
