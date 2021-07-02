<template>
	<div class="item-con  container-main" >
        <div  v-for="(item,index) in 3"  :key="index" class="item f-s f-a" >
			<div class="f" >
				<div class="pic" >
					<img src="../../../assets/icon/sucai/doge.jpeg" alt="">
				</div>
				<div class="detail" >
					<div class="title" >容格八维自我认知功能测试</div>
					<div class="subtitle" >共9题｜ 闯关类</div>
				</div>
			</div>
			<div>
				<el-button  class="go-btn" @click="confirm" >确认购买</el-button>
			</div>
		</div>		
	</div>
</template>

<script>
	 import { ElMessage } from 'element-plus'
	export default{
		name:"testPaper",
		props:{
			PaperList:{
				type:Array,
				default:()=>{[]}
			}
		},
		setup(props,context){
			const{PaperList}=props
			const confirm = ()=>{
				
				context.emit('confirm')
			}
			return{
				confirm,
				PaperList
			}
		}
	}
</script>

<style lang="scss" scoped >
	.item-con{
		.item{
			width: 100%;
			margin-bottom: 27px;
			.pic{
				width: 48px;
				height: 48px;
				background: #EDEDED;
				img{
					width: 48px;
					height: 48px;
					border-radius: 4px;
				}
			}
			.detail{
				padding: 0  0  3px 14px;
				.title{
					font-size: 15px;
					font-weight: 400;
					line-height: 21px;
					color: #333333;
					margin-bottom: 6px;
				}
				.subtitle{
					font-size: 13px;
					font-weight: 400;
					line-height: 18px;
					color: #333333;
					opacity: 0.4;
				}
				.subtitle:hover{
			
				}
			}
			
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
