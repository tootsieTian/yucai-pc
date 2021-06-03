<template>
	<div class="f-a-j" >
		<div class="con" >
			<div class="header" >
				<div class="realut" >测评结果</div>
				<div class="hx" ></div>
				<div class="f-c f-a" >
					<div class="b-yuan f-a-j f-c" >
						<div>恭喜你</div>
						<div style="font-size: 30px;line-height: 42px;" >90分</div>
					</div>
					<div style="margin-top: 28px;" >答对8题｜ 共9题</div>
					<div style="margin-top: 12px;margin-bottom: 39px;" >耗时02:29</div>
					<div class="f" >
						<div>
							<el-button class="btn1" >错题解析</el-button>
						</div>
						<div>
							<el-button class="btn1" >再测一次</el-button>
						</div>
					</div>
				</div>
				
			</div>
			<div class="title2" >答题卡</div>
			<div class="footer" >
				<div class="er f" >
				<div class=" item f-a-j" v-for="(item,index) in 9" :key="index" >
					{{index+1}} 、E <span  style="margin-left: 10px;" > V</span>
				</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		setup(){
			
		}
	}
</script>

<style lang="scss" scoped >
	.con{
		width: 1200px;
		.header{
			font-size: 15px;
			font-weight: 400;
			line-height: 21px;
			color: #333333;
			opacity: 1;
			padding: 46px 0 101px 47px;
			background: #F5F5F5;
			height: 581px;
			margin-top: 52px;
			width: 100%;
			box-sizing: border-box;
			.b-yuan{
				width: 167px;
				height: 167px;
				background: #FFFFFF;
				border-radius: 50%;
			}
			.realut{
				font-size: 19px;
				font-weight: 400;
				line-height: 26px;
				color: #707070;
			}
			.hx{
				width: 1200px;
				position: relative;
				left: -50px;
				height: 2px;
				background: #FFFFFF;
				opacity: 1;
				margin-top: 19px;
				margin-bottom: 60px;
			}
		}
		.footer{
			width: 100%;
			margin-bottom: 98px;
			height: 214px;
			padding: 27px 0  22px  17px;
			background: #F5F5F5;
			box-sizing: border-box;
			.er{
				flex-flow: wrap;
				.item{margin-right: 380px;
				      margin-bottom: 12px;
					  width: 71px;
					 
				}
			}
		}
		.title2{
			margin: 63px 0 19px 16px;
			font-size: 17px;
			font-weight: 500;
			line-height: 24px;
			color: #333333;
		}
		.btn1{
			width: 213px;
			height: 49px;
			background: #FFFFFF;
			border-radius: 27px;
			margin: 0 31px;
		}
	}
</style>
