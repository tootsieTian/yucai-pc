export default [
  {
    path: '/study',
    component: () => import('../../views/study'),
    meta: {
      foot: true,
      nav: true
    }
  }
]
