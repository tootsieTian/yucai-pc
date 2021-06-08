
const inside =[
	{
	  path: 'Myorder',
	  component: () => import('@/views/personal/order/index'),
	  meta: {
	    title: '我的订单'
	  }
	},
]
const outside =[
	{
	  path: '/personal/orderDetail',
	  component: () => import('@/views/personal/order/orderDetail'),
	  meta: {
	    title: '订单详情',
		foot: true,
		nav: true
	  }
	}
]
export default {
	inside,
	outside
}
   
  
