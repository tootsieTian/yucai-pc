<template>
	<div class="f-a-j f-c"  style="background-color: rgba(245, 246, 246, 1);" >
		<div class="realut container-main" >测评结果</div>
		<div class="con container-main" >
			<div class="header" >
				
				
				<div  style="height: 437px;"  class="f-c f-a" >
					<div class="b-yuan " >
						<div class="b-yuan-2 f-a-j f-c" >
							<div>恭喜你</div>
							<div style="font-size: 30px;line-height: 42px;color: rgba(254, 152, 8, 1);" >90分</div>
						</div>
					</div>
					<div style="margin-top: 28px;" >答对8题｜ 共9题</div>
					<div style="margin-top: 12px;margin-bottom: 39px;" >耗时02:29</div>
					
				</div>
				<div class="f-a-j" >
					<div>
						<el-button class="btn1" >错题解析</el-button>
					</div>
					<div>
						<el-button class="btn1" >再测一次</el-button>
					</div>
				</div>
			</div>
			<div class="hx" ></div>
			<div class="title2" >答题卡<div class="lx" ></div></div>
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
	.realut{
		font-size: 28px;
		font-weight: 500;
		line-height: 26px;
		margin: 37px 0;
		color: #333333;
	}
	.con{
		// width: 1200px;
		background-color: #FFFFFF;
		margin-bottom: 90px;
		.header{
			font-size: 15px;
			font-weight: 400;
			line-height: 21px;
			color: #333333;
			opacity: 1;
       
			
			height: 581px;
			margin-top:0px;
			width: 100%;
			box-sizing: border-box;
			.b-yuan{
				
				width: 167px;
				height: 167px;
				background: rgba(255, 228, 190, 0.3);
				border-radius: 50%;
				margin-top: 150px;
				position: relative;
				.b-yuan-2{
					
					width: 147px;
					height: 147px;
					background: #FFFFFF;
					border-radius: 50%;
					position: absolute;
					top: 10px;
					left: 10px;
					opacity: 0.8;
					color: #333333;
					
				}
			}
			
		
		}
		.header>div:nth-child(1){
			background-image: url(../../../assets/image/personal/resultbg.png);
			background-size: 100%;
			
		}
		.hx{
			width: 100%;
			height: 20px;
			background: rgba(245, 246, 246, 1);
			opacity: 1;
			margin-top: 19px;
			margin-bottom: 60px;
		}
		.footer{
			width: 100%;
			margin-bottom: 98px;
			height: 214px;
			padding: 27px 0  22px  17px;
			
			box-sizing: border-box;
		
			.er{
				flex-flow: wrap;
				width: 70%;
				background-color: rgba(246, 248, 250, 1);
				padding: 26px 0  33px 28px;
				box-sizing: border-box;
				.item{margin-right: 380px;
				      margin-bottom: 12px;
					  width: 71px;
					 
				}
			}
		}
		.title2{
			margin: 63px 0 19px 16px;
			font-size: 18px;
			font-weight: 500;
			line-height: 24px;
			color: #333333;
			position: relative;
			.lx{
				width: 22px;
				height: 3px;
				background: #1371F3;
				opacity: 1;
				position: absolute;
				bottom: -16px;
				left: 16px;
			}
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
