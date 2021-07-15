<template>
    <div class="check-study">
		
        <div class="dialog container-main">
        
		  <div class="user-info f" >
			  <div class="title f-a" ><div>升级会员</div></div>
			  <div class="pic " ></div>
			  <div class="f-c f-s" >
				  <div class="name" >薛定谔的猫</div>
				  <div class="detail" >您还不是会员，升级会员享更多权益</div>
			  </div>
			  <div class="el-icon-close hand" @click="ok" >关闭</div>
		  </div>
		  <div class="tab hand f" >
		  				  <div @click="selectTab(0)"  class="tab-left f-a-j " ><div class="bor-bot f-a-j" :class="activeTab == 0 ? 'bg-w' : '' " >VIP会员</div></div>
		  				  <div @click="selectTab(1)"  class="tab-right f-a-j" ><div class="bor-bot f-a-j" :class="activeTab == 1 ? 'bg-w' : '' " >SVIP会员</div></div>
		  </div>
		  <div class="main" >
			  
			  <div class="contxt" >
				  <!-- <div>开通会员预计可省<Price :fontSize="'17px'" ></Price>元</div> -->
				  <div class="card-con" >
					  <vipCard v-show="activeTab == 0" ></vipCard>
					  <vipCard v-show="activeTab == 1" ></vipCard>
				  </div>
				 <div style="color: #333333;font-size: 15px;margin-bottom: 10px;" ><img style="height: 15px;" src="../../assets/image/personal/dieol.png" alt="">连续包年声明：</div>
				  <div>享会员专属优惠 以后购买卡盛的部分商品享受九折优惠。另外,卡盛的每一门课程都将严格的规定,每节课在10分钟左右(保证学习的兴趣,避免时间过长
而疲惫)。</div>
				  <div class="f yuan-con" >
					  <div class="yuan-tab" v-for="(item,index) in  8" :key="index" >
						  <div class="yuan" ></div>
						  <div class="f-a-j"  >课程6折</div>
					  </div>
				  </div>
				  <div class="play-con f-a" >
					  <div class="play-tit" >扫码支付：</div>
					  <div class="f-a" >
						  <div class="ma" ></div>
						  <div class="f-c f-s right" >
							  <div>
								  <Price :color="'rgba(234, 53, 83, 1)'" :fontSize="'34px'" ></Price>
								  已优惠69元
							  </div>
							  <div class="op3" >
								  支持支付宝、微信支付
							  </div>
							  <div class="op3 f11" >
								  《VIP用户协议》
							  </div>
						  </div>
					  </div>
				  </div>
			  </div>
		  </div>
		   
       
		</div>
    </div>
</template>

<script>
  import { reactive,ref } from 'vue'
  import Price from "../common/price.vue"
  import vipCard from "./vipCard.vue"
  export default {
    name: "checkStudy",
	components:{Price,vipCard},
    setup(props, context) {
      
      const activeTab = ref(0)
	  const activeVipindex = ref(0)
      const method = {
        ok() {
          context.emit('closeDialog')
        },
		// 选择具体的svip还是vip
		selectTab(int){
			activeTab.value=int
			console.log(activeTab.value)
		}
      }
      return {
        ...method,
		activeTab,
		activeVipindex
      }
    }
  }
</script>

<style lang="scss" scoped>
	.dialog::-webkit-scrollbar {
	    display: none;
	}
	
	.card-con::-webkit-scrollbar {
	    display: none;
	}
	.bg-w{
		border-bottom: 3px solid #FFD38B!important;
		color: rgba(255, 211, 139, 1);
	}
    .check-study {
        position: fixed;
        z-index: 100;
        background: rgba(43, 43, 43, 0.5);
        left: 0;
        top: 100px;
        width: 100vw;
        height: calc(100vh - 100px);
    }
	.el-icon-close{
		position: absolute;
		right: 50px;
		top: 50px;
	}
	.bor-bot{
		width: 22px;
		padding-bottom: 20px;
		white-space: nowrap;
	}
  
    .dialog {
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        width: 1152px;
		height: 719px;
        background: #FFFFFF;
        padding: 0px 37px 0 47px;
		box-sizing: border-box;
        overflow-x:hidden;
		overflow-y: scroll;
		border-radius: 4px 4px 0px 0px;
    }
	.title{
		font-size: 24px;
		font-weight: 500;
		line-height: 22px;
		margin-right: 30px;
		margin-left: 25px;
		color: rgba(255, 211, 139, 1);
		background: linear-gradient(159deg, #252933 0%, #3C3A40 100%);
	}
	.user-info{
		position: relative;
		padding-top: 38px;
		padding-bottom: 27px;
		margin-left: -47px;
		margin-right: -47px;
		color: rgba(255, 211, 139, 1);
		background: linear-gradient(159deg, #252933 0%, #3C3A40 100%);
		.pic{
			width: 47px;
			height: 47px;
			background: #FFFFFF;
			border: 1px solid #707070;
			border-radius: 50%;
			opacity: 1;
			margin-right: 21px;
		}
		.name{
			font-size: 14px;
			font-weight: 500;
			line-height: 20px;
			
		}
		.detail{
			font-size: 12px;
			font-weight: 400;
			line-height: 17px;
			color: rgba(153, 153, 153, 1);
			
		}
	}
	.tab{
		height: 66px;
		background: linear-gradient(159deg, #252933 0%, #3C3A40 100%);
		color: rgba(255, 211, 139, 0.5);
		margin-left: -47px;
		margin-right: -47px;
		.tab-left{
			width: 50%;
			
		}
		.tab-right{
			width: 50%;
			
		}
	}
	.main{
		width: 100%;
		background: #FFFFFF;
	    // height: 854px;
		
		
		.contxt{
			padding: 26px 0  40px 24px;
			font-size: 13px;
			font-weight: 400;
			line-height: 18px;
			color: rgba(51, 51, 51, 0.4);
			.yuan-tab{
				color: #333333;
				margin-right: 32px;
				.yuan{
					width: 60px;
					height: 60px;
					background-image: url(../../assets/image/personal/vipclass.png);
					background-size: 100%;
					border-radius: 50%;
					margin-bottom: 3px;
				}
			}
			.card-con{
				margin: 27px 0 28px 0;
				
				overflow-x: scroll;
				overflow-y: hidden;
			}
			.yuan-con{
				margin: 22px 0 34px 0;
			}
			
			.play-con{
				width: 919px;
				height: 148px;
				background: #F5F5F5;
				border: 2px solid #A0A0A0;
				border-radius: 11px;
				
				.play-tit{
					font-size: 22px;
					font-weight: 500;
					line-height: 30px;
					color: #333333;
					margin-right: 250px;
					margin-left: 39px;
				}
				.ma{
					width: 127px;
					height: 127px;
					background: #FFFFFF;
					border: 1px solid #707070;
					opacity: 1;
					margin-right: 32px;
				}
				.right{
					height: 100px;
					padding: 8px 0  14px 0;
					font-size: 13px;
					color: #333333;
					.op3{
						color: rgba(51, 51, 51, 0.3);
					}
					.f11{
						font-size: 11px;
					}
				}
				
			}
		}
	}
</style>
