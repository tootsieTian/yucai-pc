<template>
	<div class="item-con f " >
		<div :class="activeIndex==index ? 'bg-hui' : ''"  @click="selectVip(index)" class="item f-a f-c" v-for="(item,index) in 3 " :key="index"  >
			<div class="tab1 f-a-j" >热卖推荐</div>
			<div class="tit1" >连续包年</div>
			<div class="f tit2" ><Price></Price>/年</div>
			<div><Price :fontSize="'14px'" ></Price></div>
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
		setup(props,contxt){
			const activeIndex =  ref(0)
			const methods = {
				selectVip(index){
					activeIndex.value=index
					console.log(activeIndex.value)
				}
			}
			return{
				...methods,
				activeIndex
			}
		}
	}
</script>

<style lang="scss" scoped >
	.item-con{
		height:150px ;
		padding-top: 20px;
		.bg-hui{
			background: #D1D1D1!important;
		}
		.item{
			position: relative;
			border: 2px solid #A0A0A0;
			border-radius: 11px;
			background: #F5F5F5;
			font-size: 13px;
			font-weight: 400;
			line-height: 18px;
			color: #333333;
			height: 130px;
			width: 273px;
			margin-right: 50px;
			padding-bottom: 12px;
			.tab1{
				position: absolute;
				top: -15px;
				left: -2px;
				width: 112px;
				height: 29px;
				background: #FFFFFF;
				border: 2px solid #A0A0A0;
				color: rgba(51,51,51,0.5);
				opacity: 1;
				border-radius: 0px 0px 11px 11px;
			}
			.tit1{
				margin-top: 30px;
				margin-bottom: 22px;
			}
			.tit2{
				margin-bottom: 8px;
			}
		}
	}
</style>
