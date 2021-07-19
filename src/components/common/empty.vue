<template>
	<div class="empty-con f-c f-a">
		<img class="img"
				   height="158"
				   width="158"
				   :src="imgList[type].src"/>
		<div class="info">
			{{imgList[type].title}}
		</div>
		<van-button
				v-if="imgList[type].btn"
				type="primary">
			{{ imgList[type].btn ? imgList[type].btn : ' ' }}
		</van-button>
	</div>
</template>

<script>
	export default {
		data() {
			return{
				imgList: [{
						title: "暂时没有优惠券～",
						src: require('../../assets/icon/empty/copon.png')
					}, {
						title: "暂无内容",
						src: require('../../assets/icon/empty/network.png')
					}, {
						title: "网络走丢了",
						src: require('../../assets/icon/empty/order.png')
					}, {
						title: "暂时没有订单哦",
						src: require('../../assets/icon/empty/search.png'),
						btn: "去逛逛"
					}]
				}
			},
		props: {
			//  0 无网络  1 无内容  2 无优惠券  3 无订单
			type: {
				type: Number,
				default: 0
			}
		}
	}
</script>

<style scoped>
	.empty-con {
		/* width: 100vw; */
		width: 100%;
		min-height: 60vh;
	}

	.img {
		margin-top: 98px;
	}

	.info {
		margin-top: 20px;
		height: 21px;
		font-size: 15px;
		font-weight: 400;
		line-height: 21px;
		color: #999999;
		opacity: 1;
	}

	/deep/ .van-button--primary {
		width: 119px;
		height: 40px;
		background: linear-gradient(180deg, #74AEFF 0%, #346FEB 100%);
		box-shadow: 0px 3px 19px rgba(150, 187, 255, 0.7);
		opacity: 1;
		border-radius: 24px;
		font-size: 15px;
		color: #FFFFFF;
		margin-top: 20px;
	}
</style>
