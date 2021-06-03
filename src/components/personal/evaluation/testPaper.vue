<template>
	<div class="item-con " >
        <div  v-for="(item,index) in 3"  :key="index" class="item f-s" >
			<div class="f" >
				<div class="pic" ></div>
				<div class="detail" >
					<div class="title" >容格八维自我认知功能测试</div>
					<div class="subtitle" >共9题｜ 闯关类</div>
				</div>
			</div>
			<div>
				<el-button @click="confirm" >确认购买</el-button>
			</div>
		</div>		
	</div>
</template>

<script>
	
	export default{
		name:"testPaper",
		props:{},
		setup(props,context){
			const confirm = ()=>{
				context.emit('confirm')
			}
			return{
				confirm
			}
		}
	}
</script>

<style lang="scss" scoped >
	.item-con{
		.item{
			width: calc(100vw - 720px);
			margin-bottom: 27px;
			.pic{
				width: 48px;
				height: 48px;
				background: #EDEDED;
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
			}
			
		}
	}
</style>
