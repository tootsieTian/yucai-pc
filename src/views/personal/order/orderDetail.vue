<template>
	<div class="f-j">
		<div class="contair container-main">
			<div class="title">确认订单信息</div>
			<div class="main">
				<div class="user f-a f-s">
					<div class="f-a">
						<div class="pic"></div>
						<div class="name">薛定谔的猫</div>
					</div>
					<div v-if="status=='completed'||status=='inorder'" class="f f-a name">
						{{ status=='completed' ? "拼单成功" :'拼单进行中' }}
						<div class="yuan"></div>
						<div class="yuan"></div>

					</div>
					<div class="f f-a name" v-if="status=='seckill'">
						删除订单
					</div>
				</div>
				<div class="course f-s">
					<div class="left f">
						<div class="pic"></div>
						<div class="detail">
							<div class="title1 f-a">你真的懂得心理学吗？<div class="tab f-a-j" v-if="status!=='detail'&&status!=='topaid'">{{status=='seckill' ? '秒杀' :'拼团' }}</div>
							</div>
							<div class="subtitle">心理学 ｜ 已测298人</div>
							<div class="tips">内含1份试卷</div>
						</div>
					</div>
					<div class="right f-a">
						<!-- <div style="margin-right: 10px;" >实付金额</div>
						<div>5.00</div> -->
					</div>
				</div>
				<!-- 支付方式 -->
				<div class="f">
					<div class="play-tit">支付方式 <span style="color: #171717;font-size: 12px;margin-left: 35px;">支付宝支付</span> </div>
				</div>
				<div class="info">
					<div>订 单 号：20210402104901<span class="copy" @click="copy">复制</span></div>
					<div class="f" style="margin-top: 39px; margin-bottom: 78px;">
						<div>创建时间：2021.04.02 10:49</div>
						<div style="margin: 0 45px;">付款时间：2021.04.02 11:49</div>
						<div>完成时间：2021.04.02 11:50</div>
					</div>
					<div class="f-s">
						<div></div>
						<div class="f-c f-s">
							<div>
								<div class="pic-con f-s f-a">
									<div>总价</div>
									<div>
										<Price></Price>
									</div>
								</div>
								<div v-if="status=='topaid'||status=='detail'" class="pic-con f-s f-a">
									<div>使用优惠券</div>
									<div>
										<Price></Price>
									</div>
								</div>
								<div v-if="status=='topaid'||status=='detail'" class="pic-con f-s f-a">
									<div>积分</div>
									<div>
										<Price></Price>
									</div>
								</div>
							</div>
							<div>
								<div class="hx"></div>
							</div>
							<div class="f f-a f-s">
								<div></div>
								<div>
									<span style="color: #101010;font-weight: 500;margin-right: 14px;">实付金额</span>
									<Price></Price>
								</div>


							</div>

						</div>
					</div>
					<div v-if="status=='topaid'" style="margin-top: 24px;margin-bottom: 86px;" class="f-s">
						<div></div>
						<div class="f-s f-a">
							<div> 还剩02:19:00</div>
							<div>
								<el-button class="goplay f-a-j">去付款</el-button>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>

</template>

<script>
	//  detail:订单详情 
	//  topaid：待付款
	//  completed：已完成
	//  inorder：拼单中 
	//  seckill：秒杀
	import {
		useRoute,
		useRouter
	} from "vue-router";
	import Price from "../../../components/common/price.vue"
	import {
		ElMessage
	} from 'element-plus'
	import {
		ref,
		reactive,
		onMounted
	} from "vue"
	export default {
		components: {
			Price
		},
		setup() {
			const goEva = () => {

			}
			const route = useRoute();
			const router = useRouter();
			const status = ref('inorder')
			const copy = () => {
				ElMessage.success({
					message: '复制成功',
					type: 'success'
				});
			}
			onMounted(() => {
				status.value = route.query.status
			})
			return {
				goEva,
				copy,
				status
			}
		}
	}
</script>

<style lang="scss" scoped>
	.contair {
		// width: calc(100vw - 720px);

		.title {
			font-size: 24px;
			font-weight: 500;
			line-height: 33px;
			color: #333333;
			margin-bottom: 31px;
			margin-top: 58px;
		}

		.yuan {
			width: 30px;
			height: 30px;
			background: #E0E0E0;
			border-radius: 50%;
			margin-left: 20px;
		}

		.tab {
			width: 45px;
			height: 23px;
			background: #E8E8E8;
			font-size: 16px;
			color: #999999;
		}

		.main {
			background: #F5F5F5;
			padding: 31px 25px 30px 86px;
			margin-bottom: 137px;

			.user {
				margin-bottom: 25px;

				.name {
					font-size: 14px;
					font-weight: 400;
					line-height: 20px;
					color: #707070;
					opacity: 1;
					margin-left: 17px;
				}

				.pic {
					width: 35px;
					height: 35px;
					background: #FFFFFF;
					border-radius: 50%;
				}
			}
		}

		.course {
			padding: 26px 19px 25px 25px;
			background: #FFFFFF;
			box-sizing: border-box;

			.left {
				.pic {
					width: 298px;
					height: 155px;
					background: #F0F0F0;
				}

				.detail {
					padding: 15px 0px 23px 43px;
				}

				.title1 {
					font-size: 24px;
					font-weight: 500;
					line-height: 33px;
					color: #333333;
					margin-bottom: 24px;
				}

				.subtitle {
					font-size: 14px;
					font-weight: 400;
					line-height: 20px;
					color: #333333;
					opacity: 0.4;
					margin-bottom: 20px;
				}

				.tips {
					font-size: 14px;
					font-weight: 400;
					line-height: 20px;
					color: #333333;
					opacity: 0.4;
				}
			}

			.right {}
		}

		.play-tit {
			font-size: 14px;
			font-weight: 400;
			line-height: 20px;
			color: #707070;
			margin-top: 50px;
			margin-bottom: 26px;
			margin-right: 35px;
		}


		.info {
			font-size: 14px;
			font-weight: 400;
			line-height: 20px;
			color: #666666;
		}

		.pic-con {
			width: 160px;
			margin-top: 10px;
		}

		.hx {
			// width: 205px;
			// height: 1px;
			// background: #FFFFFF;
			// opacity: 1;
			margin-top: 12px;
			margin-bottom: 19px;
		}

		.copy {
			width: 33px;
			height: 16px;
			background: #FFFFFF;
			border: 1px solid #707070;
			margin-left: 10px;
			padding: 3px;
		}

		.goplay {
			width: 96px;
			height: 36px;
			background: #C7C7C7;
			opacity: 1;
			border-radius: 18px;
			font-size: 16px;
			font-weight: 400;
			line-height: 22px;
			color: #FFFFFF;
			margin-left: 23px;

		}
	}
</style>
