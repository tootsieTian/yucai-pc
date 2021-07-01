<template>
	<div class="contair">
		<div class="tit f-s f-a">
			<div>我的活动</div>
			<div></div>
		</div>
		<div class="hx"></div>
		<div class="coupon-con">
			<el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				<el-menu-item index="1">我的拼团</el-menu-item>
				<el-menu-item index="2">我的秒杀</el-menu-item>
			</el-menu>
			<activityItem @goOrder="goOrder" v-show='activeIndex==1'></activityItem>
			<activityItem @goOrder="goOrder" :status="'completed'" v-show='activeIndex==1'></activityItem>
			<activityItem @goOrder="goOrder" :status="'seckill'" v-show='activeIndex==2'></activityItem>

		</div>
	</div>
</template>

<script>
	import activityItem from "../../../components/personal/activity/activityItem.vue"
	import router from "../../../router/router.js"
	import {
		ref,
		reactive,
		watch
	} from "vue"
	export default {
		name: "index",
		components: {
			activityItem
		},
		setup() {
			const activeIndex = ref(1)
			const handleSelect = (e) => {
				activeIndex.value = e
				console.log(activeIndex.value)
			}
			const goOrder = (status) => {
				
				router.push({
						path: '/personal/orderDetail',
						query: {
							status: status,
						}

				})}
				return {
					activeIndex,
					handleSelect,
					goOrder
				}
			}
		}
</script>

<style lang="scss" scoped>
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
			margin: 0 35px;
			width: 22px;
			display: flex;
			align-items: center;
			justify-content: center;

		}
	}
</style>
