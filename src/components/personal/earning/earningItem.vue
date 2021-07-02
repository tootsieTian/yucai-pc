<template>
	<div class="item-con" >
		<div class="item f-s" v-for="(item,index) in  7" :key="index" >
			<div class="f-c f-s left" >
				<div>新媒体社区运营涨粉裂变</div>
				<div><Price :fontSize="'16px'" ></Price></div>
			</div>
			<div class="f-c f-s right" >
				<div class="f-a-j" > <img  style="width: 20px;margin-right: 10px;" src="../../../assets/icon/sucai/17.png" alt="">  王先生购买</div>
				<div class="light" >收益0.68</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Price from "../../common/price.vue"
	export default{
		components:{
			Price
		},
		props:{
			earningList:{
				type:Array,
				default:()=>{[]}
			}
		},
		setup(props){
			const {earningList}=props
			return{
				earningList
			}
		}
	}
</script>

<style lang="scss" scoped >
	.item-con{
		.item{
			padding-top: 20px;
			padding-bottom: 18px;
			height: 89px;
			box-sizing: border-box;
			border-bottom: 1px solid #F4F4F4 ;
			.left{
				font-size: 15px;
				font-weight: 400;
				line-height: 21px;
				color: #333333;
			}
			.right{
				font-size: 14px;
				font-weight: 400;
				line-height: 20px;
				color: #999999;
				.light{
					color: #3E3E3E;
					text-align: right;
				}
			}
		}
	}
</style>
