import evaluation from "./evaluation";
import userInfo   from "./userInfo.js"
import message from "./message.js"
import history from "./history.js"
import myComment from "./myComment.js"
import signIn from "./signIn.js"
import teamwork from "./teamwork.js"
import coupon from "./coupon.js"
import activity from "./activity.js"
export default [
  {
    path: '/personal',
	redirect: '/personal/userInfo',
    component: () => import('../../views/personal'),
	children: [
		     ...evaluation.inside,
	         ...userInfo,	
			 ...message,
			 ...history,
		     ...myComment,
			 ...signIn,
			 ...teamwork,
			 ...coupon,
			 ...activity
	      ],
    meta: {
    foot: true,
    nav: true
  }
  },
  ...evaluation.outside
]
