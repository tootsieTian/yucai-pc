<template>
	<div class="con f">
		<div v-for="(item,index) in collectList" class="item hand" :key="index">
			<div class="header">
				<img :src="item.img" alt="">
			</div>
			<div class="footer">
				<div class="title">{{item.name}}</div>
				<div class="subtitle">{{item.courseNum}}节课 ｜390人已学习</div>
				<div class="f-s" style="padding-right: 20px;" >
					<div></div>
					<Price></Price>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Price from "../../common/price.vue"
	import { toRefs } from "vue"
	export default {
		components: {
			Price
		},
		props:{
			collectList:{
				type:Array,
				default:()=>{[]}
			}
			
		},
		setup(props){
			const{collectList}=toRefs(props)
			return{
				collectList
			}
		}
	}
</script>

<style lang="scss" scoped>
	.con {
		margin: 27px 0px 97px 44px;
		flex-flow: wrap;

		.item {
			width: calc((100% - 72px)/3);
			height: 320px;
			background: #FAFAFA;

			margin: 0 12px;
			margin-bottom: 26px;

			.header {
				width: 100%;
				height: 187px;
				background: #EDEDED;
				img{
					width: 100%;
					height: 187px;
				}
			}

			.footer {
				width: 100%;
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
