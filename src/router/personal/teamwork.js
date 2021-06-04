export default [
  {
    path: 'apply',
    component: () => import('../../views/personal/apply')
  },
  {
    path: 'applyPerson',
    component: () => import('../../views/personal/apply/applyPerson')
  },
  {
    path: 'applyMechanism',
    component: () => import('../../views/personal/apply/applyMechanism')
  },
]

