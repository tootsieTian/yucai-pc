<template>
    <div class="check-study">
		
        <div class="dialog container-main">
          <div class="title f-s" ><div>VIP会员</div><div @click="ok" >关闭</div></div>
		  <div class="user-info f" >
			  <div class="pic " ></div>
			  <div class="f-c f-s" >
				  <div class="name" >薛定谔的猫</div>
				  <div class="detail" >您还不是会员，升级会员享更多权益</div>
			  </div>
		  </div>
		  <div class="main" >
			  <div class="tab f" >
				  <div @click="selectTab(0)" :class="activeTab == 0 ? 'bg-w' : '' " class="tab-left f-a-j " >VIP会员</div>
				  <div @click="selectTab(1)" :class="activeTab == 1 ? 'bg-w' : '' "  class="tab-right f-a-j" >SVIP会员</div>
			  </div>
			  <div class="contxt" >
				  <div>开通会员预计可省<Price :fontSize="'17px'" ></Price>元</div>
				  <div class="card-con" >
					  <vipCard v-show="activeTab == 0" ></vipCard>
					  <vipCard v-show="activeTab == 1" ></vipCard>
				  </div>
				  <div>声明声明声明声明声明声明声明声明声明声明声明声明声明声明声明声明声明声明声明</div>
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
								  <Price></Price>
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
		background: #FFFFFF;
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
  
    .dialog {
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        width: 1152px;
		height: 719px;
        background: #F0F0F0;
        padding: 31px 37px 0 47px;
		box-sizing: border-box;
        overflow-x:hidden;
		overflow-y: scroll;
    }
	.title{
		font-size: 16px;
		font-weight: 500;
		line-height: 22px;
		color: #333333;
	}
	.user-info{
		margin-top: 38px;
		margin-bottom: 27px;
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
			color: #333333;
		}
		.detail{
			font-size: 12px;
			font-weight: 400;
			line-height: 17px;
			color: #333333;
		}
	}
	.main{
		width: 1048px;
		background: #FFFFFF;
	    height: 854px;
		
		.tab{
			height: 66px;
			background: #E3E3E3;
			.tab-left{
				width: 50%;
				
			}
			.tab-right{
				width: 50%;
				
			}
		}
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
					background: #F2F2F2;
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
