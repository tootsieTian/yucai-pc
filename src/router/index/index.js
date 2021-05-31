// import courseDetail from "./courseDetail";
// import search from "./search";
// import activeArea from "./activeArea";
// import indexClass from "./indexClass";
// import popularCourse from "./popularCourse";
// import excellentCourse from "./excellentCourse";
export default [
  {
    path: '/',
    component: () => import('../../views'),
    meta: {
      keepAlive: true,
      foot: true,
      nav: true,
      title: '首页'
    }
  },
  // ...activeArea,
  // ...indexClass,
  // ...excellentCourse,
  // ...popularCourse,
  // ...search,
  // ...courseDetail
]

