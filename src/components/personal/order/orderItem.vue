<template>
	<div class="item-con" >
		<div @click="goDetail(item)" class="item f-s" v-for=" (item,index) in 3 " :key="index" >
			<div class="left f-c" >
				<div class="time" >订单时间：2021.04.02 10:49</div>
				<div class="f">
					<div class="pic" >
						<img src="../../../assets/icon/sucai/course1.png" alt="">
					</div>
					<div>
						<div class="title2" >新媒体社区运营涨粉裂变</div>
						<div style="color: rgba(153, 153, 153, 1);" class=" f-a-j" >7节课 ｜ 390人已学习</div>
					</div>
				</div>
				<div class="f-a" >合计：<Price  ></Price></div>
			</div>
			<div class="right f-s f-c" >
				<div class="f-s" >
					<div></div>
					<div style="color: rgba(254, 152, 8, 1);" >待付款</div>
					
				</div>
				<div class="time f-s" >
					<div></div>
					<div class="f-a" >还剩02:19:00 <el-button class="go-btn f-a-j" >去付款</el-button> </div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Price from "../../common/price.vue"
	export default {
		components:{
			Price
		},
		props:{
			orderList:{
				type:Array,
				default:()=>{}
			}
		},
		eimts:['goDetail'],
		setup(props,contxt){
			const {orderList}=props
			const methods = {
				goDetail(){
					contxt.emit('goDeatil')
				}
			}
			return {
				...methods
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
					img{
						width: 149px;
						height: 82px;
						border-radius: 8px;
					}
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
		.go-btn{
			width: 78px;
			height: 30px;
			background: linear-gradient(180deg, #74AEFF 0%, #346FEB 100%);
			opacity: 1;
			border-radius: 15px;
			font-size: 13px;
			font-weight: 400;
			line-height: 18px;
			color: #FFFFFF;
			box-sizing: border-box;
			margin-left: 10px ;
		}
	}
</style>

