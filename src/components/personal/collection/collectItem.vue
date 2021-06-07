<template>
	<div class="con f">
		<div v-for="(item,index) in 6" class="item" :key="index">
			<div class="header"></div>
			<div class="footer">
				<div class="title">100倍工作效率</div>
				<div class="subtitle">7节课 ｜390人已学习</div>
				<div>
					<Price></Price>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Price from "../../common/price.vue"
	export default {
		components: {
			Price
		}
	}
</script>

<style lang="scss" scoped>
	.con {
		margin: 27px 0px 97px 44px;
		flex-flow: wrap;

		.item {
			width: 250px;
			height: 320px;
			background: #FAFAFA;

			margin: 0 12px;
			margin-bottom: 26px;

			.header {
				width: 250px;
				height: 187px;
				background: #EDEDED;
			}

			.footer {
				width: 250px;
				height: 133px;
				padding: 18px 0 17px 14px;
				box-sizing: border-box;

				.title {
					font-size: 20px;
					font-weight: 500;
					line-height: 28px;
					color: #333333;
				}

				.subtitle {
					font-size: 16px;
					font-weight: 400;
					line-height: 22px;
					color: #999999;
					margin: 10px 0 7px 0;
				}
			}
		}

		.mt24 {
			margin: 0 20px;
		}

	}
</style>
