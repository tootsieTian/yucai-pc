<template>
	<div class="item-con f " >
		<div  :class="activeIndex==index ? 'bg-hui' : ''"  @click="selectVip(index)" class="item f-a f-c" v-for="(item,index) in 3 " :key="index"  >
			<div class="tab1 f-a-j" >热卖推荐</div>
			<div class="tit1" >连续包年</div>
			<div class="f tit2" ><Price style="margin-top: -5px; " :fontSize="'32px'" ></Price>/年</div>
			<div style="margin-top: -10px;color: rgba(87, 47, 29, 1);" >原价:<Price :color="'rgba(87, 47, 29, 1)'" :fontSize="'14px'" ></Price></div>
			<div class="xuxian" ></div>
		</div>
	</div>
</template>

<script>
	import Price from "../common/price.vue"
	import {ref}  from "vue"
	export default{
		components:{
			Price
		},
		props:{
			VipList:{
				type:Array,
				default:()=>{['','','']}
			}
		},
		setup(props,contxt){
			const activeIndex =  ref(0)
			const {VipList}=props
			const methods = {
				selectVip(index){
					activeIndex.value=index
				    contxt.emit('select')
				}
			}
			return{
				...methods,
				VipList,
				activeIndex
			}
		}
	}
</script>

<style lang="scss" scoped >
	.item-con{
		// height:150px ;
		padding-top: 20px;
		.bg-hui{
			background: linear-gradient(145deg, #FFF2E0 0%, #FFD495 100%)!important;
		}
		.item{
			position: relative;
			border: 1px solid #E9B060;
			border-radius: 11px;
			background: #F6F8FA;
			font-size: 13px;
			font-weight: 400;
			line-height: 18px;
			color: #333333;
			// height: 130px;
			width: 273px;
			margin-right: 50px;
			padding-bottom: 12px;
			.tab1{
				position: absolute;
				top: -15px;
				left: -2px;
				width: 112px;
				height: 29px;
				background: linear-gradient(326deg, #FD9338 0%, #FE754A 100%);
				
				color: #FFFFFF;
				opacity: 1;
				border-radius: 11px 0px 11px 0px;
			}
			.tit1{
				margin-top: 30px;
				margin-bottom: 22px;
			}
			.tit2{
				margin-bottom: 8px;
			}
		}
		.xuxian{
			border-top: 1px dashed #000000 ;
			height: 2px;
			width: 100%;
			border-bottom: 1px  dashed #000000;
		}
	}
</style>
