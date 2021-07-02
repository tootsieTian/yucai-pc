<template>
	<div class="item-con f" >
		<div class="item hand f"  v-for="(item,index) in  couponList"  :key="index" >
			<div :style=" { opacity : item.status =='立 即 使 用' ?  '1' :'0.4'  }" class="item4 f-c  f-a" >
				<div class="yuan-top" ></div>
				<div class="yuan-bot" ></div>
				<div style="margin-top: 33px;" >
					<price :color="'#ffffff'" :money="'10'" :fontSize="'35px'" ></price>
				</div>
				<div  class="left-tit" >满10元立减</div>
			</div>
			<div class="item2 f-c" >
				<div class="med-tit1" >新人礼包-全场通用</div>
				<div>品类不限</div>
				<div>有效期至2021.04.30</div>
				<div>赠送给朋友</div>
			</div>
			<div class="item3 f-a-j" >
				<div :style=" {color: item.status =='立 即 使 用' ? 'rgba(19, 113, 243, 1)' : 'rgba(51, 51, 51, 0.3)'  }  " >{{item.status}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Price from "../../common/price.vue"
	import {ref,reactive} from "vue"
	export default{
	  components:{
		  Price
	  },
	  props:{
		couponList:{
			type:Array,
			default :()=>{[]}
		},
		key:{
			type:String,
			default:""
		},
		goodInfo:{
			type:Object,
			default:()=>{}
		}
	  },
	  setup(props){
		  const {couponList,key,goodInfo}=props
		  return{
			  couponList,
			  key,
			  goodInfo
		  }
	  }
	}
</script>

<style lang="scss" scoped >
	.item-con{
		flex-flow: wrap;
		.item{
			margin-right: 50px;
			font-size: 13px;
			font-weight: 400;
			line-height: 18px;
			color: rgba(51, 51, 51, 0.3);
			height: 123px;
			background: #FFFFFF;
			box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
			width: calc((100% - 150px)/2);
			margin-bottom: 27px;
			}
			.item4{
				width: 109px;
				height: 123px;
				background: linear-gradient(#B5D4FF, #799BE3);
				position: relative;
				.left-tit{
					font-size: 15px;
					margin-top: 5px;
					color: #FFFFFF;
					opacity: 1;
				}
				.yuan-top{
					position: absolute;
					top: -10px;
					right: -10px;
					width: 20px;
					height: 20px;
					border-radius: 50%;
					background-color: #FFFFFF;
				}
				.yuan-bot{
					position: absolute;
					bottom: -12px;
					right: -10px;
					width: 20px;
					height: 20px;
					border-radius: 50%;
					background-color: #FFFFFF;
				}
			}
			.item2{
				
				
				
				padding: 12px 0 13px 17px;
				box-sizing: border-box;
				height: 100%;
				width: 322px;
			    justify-content: space-around;
				.med-tit1{
					font-size: 16px;
					color: #333333;
				}
			}
			.item3{
				width: 40px;
				height: 87px;
				writing-mode:vertical-rl;
				margin:  19px 0 17px 0;
				border-left: 1px solid  #F0F0F0;;
			}
		}
	
</style>
