import hotCourse from "./hotCourse";
import classifyCourse from "./classifyCourse";
import searchResult from "./searchResult";
import courseDetail from "./courseDetail";
import activeCourse from "./activeCourse";
import betterCourse from "./betterCourse";

export default [
  {
    path: '/',
    component: () => import('../../views/index/index'),
    meta: {
      keepAlive: true,
      foot: true,
      nav: true,
      title: '御才文化-首页'
    }
  },
  {
    path: '/appDownload',
    component: () => import('../../views/index/appDownload'),
    meta: {
      keepAlive: false,
      foot: false,
      nav: false,
      title: '御才文化-APP下载'
    }
  },
  ...hotCourse,
  ...classifyCourse,
  ...searchResult,
  ...courseDetail,
  ...activeCourse,
  ...betterCourse
]

