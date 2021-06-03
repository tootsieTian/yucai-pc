import hotCourse from "./hotCourse";
import classifyCourse from "./classifyCourse";
import searchResult from "./searchResult";
import courseDetail from "./courseDetail";

export default [
  {
    path: '/',
    component: () => import('../../views/index/index'),
    meta: {
      keepAlive: true,
      foot: true,
      nav: true,
      title: '首页'
    }
  },
  ...hotCourse,
  ...classifyCourse,
  ...searchResult,
  ...courseDetail
]

