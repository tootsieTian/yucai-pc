
	<template>
		<div class="contair">
			<div class="tit f-s f-a">
				<div>我的订单</div>
				<div></div>
			</div>
			<div class="hx"></div>
			<div class="coupon-con">
				<el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
					<el-menu-item index="1">全部订单</el-menu-item>
					<el-menu-item index="2">待付款</el-menu-item>
					<el-menu-item index="3">交易完成</el-menu-item>
				</el-menu>
				<orderItem :orderList="orderList" @goDeatil="goDeatil" ></orderItem>
			</div>
		</div>	
</template>

<script>
	import orderItem from  "../../../components/personal/order/orderItem.vue"
	import router from  "../../../router/router.js"
	import {getOrderList } from "../../../api/order.js"
	import {
		ref,
		reactive,
		watch
	} from "vue"
	export default{
		name: "index",
		components:{orderItem},
		setup(){
			const orderList = ref([])
			const activeIndex = ref(1)
			const handleSelect = (e)=>{
				if(e=="1"){
					getOrder(" ")
				}if(e=="2"){
					getOrder("1")
				}if(e=="3"){
					getOrder("2")
				}
			}
			const goDeatil = ()=>{
				router.push({
						path: '/personal/orderDetail',
						query: {
							status: "topaid",
						}
				
				})
			}
			const getOrder =(orderStatus)=>{
				getOrderList({
				  pageNo: 1,
				  orderStatus: orderStatus,
				  pageSize: 10,
				  userId: localStorage.getItem('user_id')
				}).then(res=>{
					orderList.value=res.data
				})
			}
			getOrder(" ")
			return{
				activeIndex,
				handleSelect,
				goDeatil,
				orderList,
				getOrder
			}
		}
	}
</script>

<style lang="scss" scoped >
	.contair {
		width: 100%;
		padding-bottom: 58px;
		padding-right: 45px;
		box-sizing: border-box;
		font-family: PingFang SC;
	
		.tit {
			height: 78px;
			font-size: 18px;
			font-weight: 400;
			line-height: 25px;
			color: #333333;
			opacity: 1;
			margin-left: 48px;
		}
	
		.hx {
			height: 1px;
			width: 100%;
			background: #F5F5F5;
		}
		.coupon-con {

			padding: 38px 45px 62px 65px;
			box-sizing: border-box;

		}
		::v-deep .el-menu-demo {
			margin-bottom: 42px;
		}
		
		::v-deep .el-menu.el-menu--horizontal {
			border: 0;
		}
		
		::v-deep .el-menu--horizontal>.el-menu-item.is-active {
			font-size: 16px;
			color: rgba(19, 113, 243, 1);
			opacity: 1;
			border-bottom: 4px solid rgba(19, 113, 243, 1);
			// border-spacing: ;
		}
		
		::v-deep .el-menu-item {
			// white-space: nowrap;
			height: 40px;
			font-size: 12px;
			color: #333333;
			opacity: 0.5;
			padding: 0 10px;
			margin: 0 35px;
			width: 22px;
			display: flex;
			align-items: center;
			justify-content: center;
		
		}
		}
</style>
