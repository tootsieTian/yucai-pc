<template>
	<div class="container-main">
		<!--        秒杀盒子-->
		<div class="spike-process" v-if="showSpikeProcess">
			<div class="process-box">
				<img src="../../assets/image/course/seckill.png" style="width: 83px;" alt="">

				<el-progress :percentage="50" style="margin: 0  30px;" :stroke-width="4" class="star-progress"
					color="#ffffff" :show-text="false" />
				<div class="title">已抢购70%</div>
			</div>
			<div class="time-box">
				<div class="title">距离结束剩余</div>
				<div class="time f">
					<div class="red">00</div>:<div class="red">10</div>:<div class="red">08</div>
				</div>
			</div>
		</div>
		<div class="content">
			<div class="top-box">
				<div class="time-box">
					<div>节课</div>
					<div class="line"></div>
					<div>时长2:30:05</div>
				</div>
				<div class="btn-list">
					<div class="btn-item f-a-j">
						<img style="width: 24px;" src="../../assets/image/course/kefu.png" alt="">
						客服
					</div>
					<div @click="collect" class="btn-item f-a-j">
						<img style="width: 24px;" src="../../assets/image/course/love.png" alt="">
						{{isCollect ? '已收藏' : '收藏'  }}
					</div>
					<div class="btn-item f-a-j">
						<img style="width: 24px;" src="../../assets/image/course/share.png" alt="">
						分享
					</div>
				</div>
			</div>
			<div class="tag-list">
				<div class="tag-item">
					{{courseInfo.courseTag =='' ? '暂无标签' : courseInfo.courseTag }}
				</div>
			</div>
			<div class="bottom-box">
				<div class="price-box " style="margin-top: 30px;">
					<div class="f-a-j" style="margin-right: 20px;">2人团</div>
					<div class="f-a-j">
						<Price :money="courseInfo.coursePrice" :fontSize="'35px'" :color="'rgba(234, 53, 83, 1)'">
						</Price>
					</div>
				</div>
				<div class="btn-box">
					<div class="customer-box">
						<div class="header-list">
							<div class="header-item"></div>
						</div>
						<div class="f-a">
							<moreUser>

							</moreUser>
							<div class="f-a-j">{{courseInfo.defaultBrowseNum}}人已参加</div>

						</div>
					</div>
					<el-button v-show="courseInfo.isBuy==0" class="direct-btn" type="primary"
						@click="toPath('/courseDetail/order')">直接购买￥{{courseInfo.coursePrice}}
					</el-button>
					<el-button class="go-btn" type="primary" @click="toPath('/courseDetail/order')">
						{{ courseInfo.isBuy==0 ? '立即抢购' : courseInfo.isBuy==2 ? '已下单去支付' :'已购买去观看'   }}
					</el-button>
				</div>
			</div>
		</div>


	</div>
</template>

<script>
	import {
		ref,
		toRefs
	} from 'vue'
	import {
		useRouter
	} from 'vue-router'
	import Price from "../common/price.vue"
	import moreUser from "../common/moreuser.vue"
	export default {
		name: "courseInfo",
		emits: ["collect", "play"],
		components: {
			Price,
			moreUser
		},
		props: {
			courseInfo: {
				type: Object,
				default: () => {
					({})
				}
			},
			isCollect: {
				type: Boolean,
				default: false
			}
		},
		setup(props, contxt) {
			const {
				courseInfo,
				isCollect
			} = toRefs(props)
			const router = useRouter()
			const showSpikeProcess = ref(false)
			const toPath = (path) => {
				if ( courseInfo.value.isBuy == 1) {
					return contxt.emit('play', 0)
				}
				router.push({
							  path:path,
							  query: {
							    courseId:  courseInfo.value.id ,
							    courseType: courseInfo.value.courseType 
							  }
				})
			}
			// 收藏按钮
			const collect = () => {
				contxt.emit('collect')
			}

			return {
				showSpikeProcess,
				toPath,
				collect,
				courseInfo,
				isCollect
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container-main {
		background: #ffffff;
		transform: translateY(-57px);
		box-shadow: 0 3px 16px rgba(0, 0, 0, 0.04);
	}

	.spike-process {
		display: flex;
		padding: 0 30px;
		// background: #F5F5F5;
		background-image: url(../../assets/image/course/seckillbg.png);
		background-size: 100%;
		justify-content: space-between;
		align-items: center;
		height: 57px;

		.process-box {
			display: flex;
			align-items: center;

			.title {
				font-size: 13px;
				font-weight: 400;
				line-height: 18px;
				color: #FFFFFF;
				margin-right: 5px;
			}

			.star-progress {
				width: 158px;
				height: 5px;

			}
		}

		.time-box {
			display: flex;
			align-items: center;
			font-size: 13px;
			font-weight: 400;
			line-height: 18px;
			color: #333333;

			.title {
				margin-right: 27px;
				color: #FFFFFF;
			}

			.time {
				color: #FFFFFF;

				.red {
					color: rgba(254, 79, 79, 1);
					padding: 3px;
					background-color: #FFFFFF;
					margin: 0 5px;
					border-radius: 4px;
				}
			}
		}
	}

	.content {
		padding: 30px 30px 50px 30px;
	}

	.top-box {
		display: flex;
		justify-content: space-between;

		.time-box {
			display: flex;
			font-size: 16px;
			font-weight: 400;
			color: #999999;
			align-items: center;

			.line {
				height: 20px;
				background: #999999;
				width: 1px;
				margin: 0 14px;
			}
		}

		.btn-list {
			display: flex;
			font-size: 14px;
			font-weight: 400;
			line-height: 20px;
			color: #333333;

			.btn-item {
				padding-left: 25px;
			}
		}
	}

	.tag-list {
		margin-top: 23px;
		margin-bottom: 20px;
		display: flex;

		.tag-item {
			margin-right: 10px;
			font-size: 14px;
			padding: 0 10px;
			background: rgba(19, 113, 243, 0.1);
			font-weight: 400;
			line-height: 20px;
			color: rgba(19, 113, 243, 1);
		}
	}

	.bottom-box {
		display: flex;
		justify-content: space-between;

		.price-box {
			display: flex;
			align-items: center;

			div:first-child {
				font-size: 14px;
				font-family: PingFang SC;
				font-weight: 400;
				line-height: 20px;
				color: #999999;
			}

			div:last-child {
				font-size: 35px;
				font-family: DIN Alternate;
				font-weight: bold;
				line-height: 41px;
				color: #333333;
			}
		}

		.btn-box {
			display: flex;
			align-items: center;

			.customer-box {
				font-size: 14px;
				font-family: PingFang SC;
				font-weight: 400;
				line-height: 20px;
				color: #999999;
				margin-right: 50px;
			}
		}
	}

	.go-btn {
		background-color: rgba(19, 113, 243, 1);
		color: rgba(255, 255, 255, 1);
		width: 200px;
		height: 58px;
	}

	.direct-btn {
		width: 200px;
		height: 58px;
		background: #E5EDFF;
		border: 1px solid #346FEB;
		color: #1371F3;
		font-weight: 500;
	}
</style>
