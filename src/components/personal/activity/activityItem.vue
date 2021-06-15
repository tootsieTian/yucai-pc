<template>
	<div class="item-con" >
		<div @click="goOrder" class="item f-s" v-for=" (item,index) in 2 " :key="index" >
			<div class="left f-c" >
				<div class="time" >订单时间：2021.04.02 10:49</div>
				<div class="f">
					<div class="pic" ></div>
					<div>
						<div class="title2" >新媒体社区运营涨粉裂变</div>
						<div class="lable f-a-j" >2人团</div>
					</div>
				</div>
				<div class="f-a" >合计：<Price  ></Price></div>
			</div>
			<div class="right f-s f-c" >
				<div  class="f" >
					<div></div>
					<div>{{ status=='inorder' ? '还差1人，拼团中' : status=='completed' ?'拼团成功' : '秒杀成功' }}</div>
				</div>
				<div v-show="status=='inorder'" class="time f-s" >
					<div></div>
					<div>还剩02:19:00</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	//  completed：已完成
	//  inorder：拼单中 
	//  seckill：秒杀
	import Price from "../../common/price.vue"
	import {ref,reative} from "vue"
	export default {
		components:{
			Price
		},
		props:{
			status:{
				type:String,
				default:'inorder'
			},
			goodInfo:{
				type:Object,
				default:()=>{}
			}
		},
		setup(props,contxt){
			const{status,goodInfo}=props
			const goOrder = ()=>{
				contxt.emit('goOrder',status)
			}
			return {
				status,
				goOrder,
				goodInfo
			}
		}
	}
</script>

<style lang="scss" scoped >
	
	.item-con{
		.item{
			margin-bottom: 18px;
			width: 100%;
			padding: 21px 13px 23px 29px;
			box-sizing: border-box;
			height: 190px;
			background: #FFFFFF;
			border: 1px solid #F0F0F0;
			border-radius: 4px;
			font-size: 15px;
			font-weight: 400;
			line-height: 21px;
			color: #333333;
			.left{
				
				.pic{
					width: 149px;
					height: 82px;
					background: #F2F2F2;
					margin: 11px 12px 16px 0;
				}
				.lable{
					width: 50px;
					height: 21px;
					background: #C7C7C7;
					opacity: 0.5;
					border-radius: 15px;
				}
				.title2{
					font-size: 15px;
					margin-top: 15px;
					margin-bottom: 9px;
					font-weight: 400;
					line-height: 21px;
					color: #333333;
				}
			}
			.right{
				
			}
		}
		.time{
			font-size: 12px;
			font-weight: 400;
			line-height: 17px;
			color: #999999;
			opacity: 1;
		}
	}
</style>
