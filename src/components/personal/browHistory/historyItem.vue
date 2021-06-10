<template>
	<div class="item-con f" >
		<div class="item hand"   v-for=" (item,index) in 5" >
			<div class="item-header" ></div>
			<div class="item-footer" >
				<div class="title f-s" >
					<div  >100倍工作效率</div>
					<div></div>
				</div>
				<div class="f-s" >
					<div>观看30%</div>
					<div>继续观看</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  name: "historyItem",
	  props: {
		 historyList:{
			 type:Array,
			 default:()=>{[
			 ]}
		 } 
	  },
	  setup(props) {
	  		const {historyList} = props  
	  }
	  }
	 
</script>

<style lang="scss" scoped >
	.item-con{
		flex-flow: wrap;
		font-family: PingFang SC;
		// justify-content: space-around;
		// justify-content:space-evenly;
		padding: 27px 0px  164px 44px ;
		.item{
			width: calc((100% - 72px)/3);
			height: 328px;
			background: #FAFAFA;
			opacity: 1;
			margin: 0 12px;
			margin-bottom: 27px;
			
			// margin-right:24px ;
			.item-header{
				height: 227px;
				width: 100%;
				background: #EDEDED;
			}
			.item-footer{
				height: 101px;
				width: 100%;
				font-size: 16px;
				font-weight: 400;
				line-height: 22px;
				color: #999999;
				padding: 18px 13px 23px 17px;
				box-sizing: border-box;
				.title{
					font-weight: 500;
					line-height: 28px;
					color: #333333;
					font-size: 20px;
					margin-bottom: 10px;
				}
			}
		}
		.mar24{
			margin: 0 19px;
		}
	}
</style>
