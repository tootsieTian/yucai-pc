<template>
	<div  style="background-color: rgba(245, 246, 246, 1);" class="f-j" >
		<div class="contair container-main" >
			<div class="title" >确认订单信息</div>
			<div class="main" >
				<div class="user f-a f-s" >
					<div class="f-a" >
						<div class="pic" >
							<img src="../../../assets/icon/sucai/17.png" alt="">
						</div>
						<div class="name" >薛定谔的猫</div>
					</div>
					
					<div class="delete" >删除订单 </div>
				</div>
				<div class="course f-s" >
					<div class="left f" >
						<div class="pic" >
							<img src="../../../assets/icon/sucai/course1.png" alt="">
						</div>
						<div class="detail" >
							<div class="title1" >你真的懂得心理学吗？</div>
							<div class="subtitle" >心理学 ｜ 已测298人</div>
							<div class="tips" >内含1份试卷</div>
						</div>
					</div>
					<div class="right f-a" >
						<div style="margin-right: 10px;" >实付金额</div>
						<div>5.00</div>
					</div>
				</div>
				<!-- 支付方式 -->
				<div class="play-tit" >支付方式</div>
				<div class="play" >
					<div class="method f" >
						<div class="ali f" >
							<div class="yuan" ></div>
							<div>支付宝支付</div>
						</div>
						<div class="ali f" >
							<div class="yuan" ></div>
							<div>微信支付</div>
						</div>
					</div>
					<div class="f-s meng" >
						<div></div>
						<div class="f" >
							<div class="f-a-j fot">总价:</div>
							<Price></Price>
						</div>
					</div>
					<div class="f-s meng2" >
						<div></div>
						<div class="f" >
							<div class="f-a-j fot">需支付金额:</div>
							<Price></Price>
						</div>
						
					</div>
					<div class="f-s " >
						 <div></div>
						 <el-button  @click="goEva" class="go-btn" >立即支付</el-button>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	import router from "../../../router/router.js"
	import Price from "../../../components/common/price.vue"
	import { ElMessage } from 'element-plus'
	export default{
		components:{
			Price
		},
		setup(){
			const goEva= ()=>{
				ElMessage.success('购买成功！')
				router.push('startEvaluation')			
			}
			return{
				goEva
			}
		}
	}
</script>

<style lang="scss"  scoped >
	.contair{
		// width: calc(100vw - 720px);
		
		.title{
			font-size: 24px;
			font-weight: 500;
			line-height: 33px;
			color: #333333;
			margin-bottom: 31px;
			margin-top: 58px;
		}
		.main{
			background: #FFFFFF;
			padding: 31px 25px 30px 86px;
			margin-bottom: 137px;
			.user{
				margin-bottom: 25px;
				.name{
					font-size: 14px;
					font-weight: 400;
					line-height: 20px;
					color: #707070;
					opacity: 1;
					margin-left: 17px;
				}
				.pic{
					width: 35px;
					height: 35px;
					background: #FFFFFF;
					border-radius: 50%;
					img{
						width: 35px;
						height: 35px;
					}
				}
			}
		}
		.course{
			padding: 26px 19px 25px 25px;
			background: rgba(245, 246, 246, 1);
			box-sizing: border-box;
			.left{
				.pic{
					width: 298px;
					height: 155px;
					background: #F0F0F0;
					img{
						width: 298px;
						height: 155px;
						border-radius: 4px;
					}
				}
				.detail{
					padding: 15px 0px 23px  43px;
				}
				.title1{
					font-size: 24px;
					font-weight: 500;
					line-height: 33px;
					color: #333333;
					margin-bottom: 24px;
				}
				.subtitle{
					font-size: 14px;
					font-weight: 400;
					line-height: 20px;
					color: #333333;
					opacity: 0.4;
					margin-bottom: 20px;
				}
				.tips{
					font-size: 14px;
					font-weight: 400;
					line-height: 20px;
					color: #333333;
					opacity: 0.4;
				}
			}
			.right{
				
			}
		}
		.play-tit{
			font-size: 14px;
			font-weight: 400;
			line-height: 20px;
			color: #707070;
			margin-top: 50px;
			margin-bottom: 26px;
		}
		.play{
			.method{
				
				.ali:hover{
					background-color: rgba(58,15,89,0.3);
					color: rgb(58,15,89);
					border: 2px solid #346FEB;
					background: #F0F5FF;
				}
				
				.ali{
					box-sizing: border-box;
					border: 2px solid #E5EDFF;
					margin-right: 26px;
					width: 273px;
					height: 93px;
					background: #FFFFFF;
					padding: 38px 0 37px 38px;
					font-size: 14px;
					font-weight: 400;
					line-height: 20px;
					color: #707070;
					border-radius: 4px;
					.yuan{
						width: 17px;
						height: 17px;
						background: #F5F6F6;
						border-radius: 50%;
						margin-right: 23px;
						
					}
					
				}
			}
		}
		.meng{
			margin-top: 38px;
			margin-bottom: 41px;
		}
		.meng2{
			margin-bottom: 22px;
		}
		.fot{
			font-size: 14px;
			margin-right: 15px;
			font-weight: 400;
			line-height: 20px;
			color: #333333;
			opacity: 0.4;
		}
		.go-btn{
			width: 228px;
			height: 56px;
			background: #1371F3;
			opacity: 1;
			border-radius: 4px;
			color: #FFFFFF;
		}
		
	}
</style>
