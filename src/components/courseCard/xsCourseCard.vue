<template>
	<div class="item hand f">
		<div class="left">
             <img src="../../assets/icon/sucai/course2.png" alt="">
		</div>
		<div class="right f-c f-s">
			<div>你真的懂得心理学吗？</div>
			<div class="subtitle f-s">
				<div>{{ iswrong ? '1题错题' : "心理学 ｜ 已测298人"}}</div>
				<div style="color: rgba(19, 113, 243, 1);" @click="goWrong" v-if="iswrong" name="two-right">
                      去订正 >
				</div>
				<slot name="one-right" ></slot>
			</div>
			<div class="f-s">
				<div>
					<Price v-if="evaluation==3&&!iswrong" ></Price>
					<div class="subtitle" v-if="iswrong" >2021.04.12</div>
					<div class="subtitle" v-if="evaluation==0||evaluation==1" >{{evaluation==0 ? '去测试' : '我已测试' }}</div>
				</div>
				<slot name="two-right" ></slot>
				<div style="color: rgba(19, 113, 243, 1);" @click="goTest" v-if="evaluation==0" >
					马上去测 >
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Price from "../common/price.vue"
	export default {
		components: {
			Price
		},
		props:{
			iswrong:{
				type:Boolean,
				default:false
			},
			evaluation:{
				type:Number,
				default:3
			}
		},
		setup(props,contxt){
		const methods ={
			goWrong(){
				contxt.emit('goWrong')
			},
			goTest(){
				contxt.emit('goTest')
			}
		}
			return{
				...methods
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.item {
		width: 100%;
		height: 85px;

		.left {
			width: 40%;
			height: 85px;
			background: #F2F2F2;
			img{
				width: 100%;
				height: 85px;
				border-radius: 4px;
			}
		}

		.right {
			width: 60%;
			height: 85px;
			padding-left: 17px;
			box-sizing: border-box;
			font-size: 14px;
			font-weight: 400;
			line-height: 20px;
			color: #333333;

			.subtitle {
				font-size: 13px;
				line-height: 18px;
				opacity: 0.4;
			}
		}
	}
</style>
