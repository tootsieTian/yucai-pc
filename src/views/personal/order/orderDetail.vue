<template>
	<div class="f-j" style="background-color: rgba(245, 246, 246, 1);" >
		<div class="contair container-main">
			<div class="title">确认订单信息</div>
			<div class="main">
				<div class="user f-a f-s">
					<div class="f-a">
						<div class="pic">
							<img style="width: 35px;" src="../../../assets/icon/sucai/17.png" alt="">
						</div>
						<div class="name">薛定谔的猫</div>
					</div>
					
					<div class="f f-a name" v-if="status=='seckill'">
						删除订单
					</div>
				</div>
				<div class="course f-s">
					<div class="left f">
						<div class="pic">
							<img src="../../../assets/icon/sucai/course2.png" alt="">
						</div>
						<div class="detail">
							<div class="title1 f-a">你真的懂得心理学吗？<div class="tab f-a-j" v-if="status!=='detail'&&status!=='topaid'">{{status=='seckill' ? '秒杀' :'拼团' }}</div>
							</div>
							<div class="subtitle">心理学 ｜ 已测298人</div>
							<div class="tips">内含1份试卷</div>
						</div>
					</div>
					<div class="right f-s f-c">
						<!-- <div style="margin-right: 10px;" >实付金额</div>
						<div>5.00</div> -->
						<div v-if="status=='completed'||status=='inorder'" class="f f-a name">
							
							<div class="yuan">
								<img src="../../../assets/icon/sucai/17.png" alt="">
							</div>
							+
							<div class="yuan">
								<img src="../../../assets/icon/sucai/17.png" alt="">
							</div>
						    {{ status=='completed' ? "拼单成功" :'拼单进行中' }}
						</div>
						<div></div>
					</div>
				</div>
				<!-- 支付方式 -->
				<div class="f">
					<div class="play-tit"><span class="h-t" >支付方式</span> <span style="color: #171717;font-size: 12px;margin-left: 35px;">支付宝支付</span> </div>
				</div>
				<div class="info">
					<div class="f f-a" ><span class="h-t" >订 单 号 ：</span>  20210402104901<div class="copy f-a-j" @click="copy">复制</div></div>
					<div class="f-c info-detal" style="margin-top: 29px; margin-bottom: 28px;">
						<div><span class="h-t" >创建时间：</span>2021.04.02 10:49</div>
						<div><span class="h-t" >付款时间：</span>2021.04.02 11:49</div>
						<div><span class="h-t" >完成时间：</span>2021.04.02 11:50</div>
					</div>
					<div class="hx" style="margin-bottom: 67px;height: 2px;width: 100%;background-color: rgba(242, 242, 242, 1);" ></div>
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
									<Price  :fontSize="'28px'" :color="'rgba(234, 53, 83, 1)'" ></Price>
								</div>


							</div>

						</div>
					</div>
					<div v-if="status=='topaid'" style="margin-top: 44px;margin-bottom: 46px;" class="f-s">
						<div></div>
						<div   class="f-s f-a">
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
       background-color: rgba(245, 246, 246, 1);
		.title {
			font-size: 24px;
			font-weight: 500;
			line-height: 33px;
			color: #333333;
			margin-bottom: 31px;
			margin-top: 58px;
		}
       .info-detal>div{
		   margin-bottom: 20px;
	   }
	   .h-t{
		   font-weight: 600;
		   margin-right: 20px;
	   }
		.yuan {
			width: 30px;
			height: 30px;
			background: #E0E0E0;
			border-radius: 50%;
			margin: 0 10px;
			img{
				width: 30px;
				height: 30px;
			}
		}

		.tab {
			width: 45px;
			height: 23px;
			background: #E8E8E8;
			font-size: 16px;
			color: #999999;
		}

		.main {
			background: #FFFFFF;
			padding: 31px 25px 30px 36px;
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
			background-color: rgba(245, 246, 246, 1);
			box-sizing: border-box;

			.left {
				.pic {
					width: 298px;
					height: 155px;
					background: #F0F0F0;
					img{
						width: 298px;
						height: 155px;
						border-radius: 4px;
					}
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
			border: 1px solid #FE9808;
			margin-left: 10px;
			padding: 3px;
			color: #FE9808;
			
		}
		.copy:hover{
			transform: translateX(20%) translateY(-20%);
			
		}

		.goplay {
			width: 228px;
			height: 56px;
			background: #1371F3;
			opacity: 1;
			border-radius: 4px;
			font-size: 16px;
			font-weight: 400;
			line-height: 22px;
			color: #FFFFFF;
			margin-left: 23px;

		}
	}
</style>
