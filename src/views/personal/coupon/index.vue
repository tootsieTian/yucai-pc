<template>
	<div class="contair">
		<div class="tit f-s f-a">
			<div>优惠券</div>
			<div></div>
		</div>
		<div class="hx"></div>
		<div class="coupon-con">
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				<el-menu-item index="1">全部(3)</el-menu-item>
				<el-menu-item index="2">未使用</el-menu-item>
				<el-menu-item index="3">已使用</el-menu-item>
				<el-menu-item index="4">已过期</el-menu-item>
			</el-menu>
			<coupon :key="key" :couponList="couponList"></coupon>
		</div>
	</div>
</template>

<script>
	import coupon from "../../../components/personal/coupon/couponItem.vue"
	import {
		ref,
		reactive,
		watch
	} from "vue"
	export default {
		name: "index",
		components: {
			coupon
		},
		setup() {
			const key= ref(key)
			const couponList = ref([{
					status: "已 过 期"
				},
				{
					status: "已 使 用"
				},
				{
					status: "立 即 使 用"
				},
			])
			const activeIndex = ref("1")
			const handleSelect = (e) => {
				key.value++
				switch (e) {
					case "1":
						couponList.value = [{
								status: "已 过 期"
							},
							{
								status: "已 使 用"
							},
							{
								status: "立 即 使 用"
							},
						]

						break;

					case "2":
						couponList.value = [{
								status: "已 使 用"
							}

						]
						break;

					case "3":
						couponList.value = [{
							
								status: "立 即 使 用"
							}]
							break;

							case "4":
							couponList.value = [{
								status: "已 过 期"
							}]
							break;
						}
				}
				return {
					activeIndex,
					handleSelect,
					couponList,
					key
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
			padding: 0 10px;
			margin: 0 35px;
			width: 22px;
			display: flex;
			align-items: center;
			justify-content: center;

		}
	}
</style>
