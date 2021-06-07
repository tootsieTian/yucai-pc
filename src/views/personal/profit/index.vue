
	<template>
		<div class="contair">
			<div class="tit f-s f-a">
				<div class="Nav-con" ><NavMenu :menuList="NavList" @handleSelect="handleSelect" ></NavMenu></div>
				<div></div>
			</div>
			<div class="hx"></div>
			<collectItem v-show="active==2" ></collectItem>
			<div class="pri-con" v-show="active==1" >
				<div class="header" >
					<div class="main f-s" >
						<div  class="f-c f-s">
							<div  >
								<div class="lab-tit" >总收益</div>
								<div><Price></Price></div>
							</div>
							<div  >
								<div class="lab-tit" >总收益</div>
								<div><Price></Price></div>
							</div>
						</div>
						<div class="f-c f-s" >
							<div></div>
							<div  >
								<div class="lab-tit" >总收益</div>
								<div><Price></Price></div>
							</div>
						</div>
						<div class="f-c f-s" >
							<div>收益记录</div>
							<div  >
								<div class="lab-tit" >总收益</div>
								<div><Price></Price></div>
							</div>
						</div>
					</div>
					<div class="tab f" >
						<div style="border-right: 1px solid #000000;" class="f-a-j f-1" >提现</div>
						<div class="f-a-j f-1" >我的银行卡</div>
					</div>
				</div>
				<div class="footer" >
					<div>收益曲线</div>
					<div></div>
				</div>
			</div>
		</div>	
</template>

<script>
	import Price from "../../../components/common/price.vue"
	import NavMenu from "../../../components/common/NavMenu.vue"
	import collectItem from "../../../components/personal/collection/collectItem.vue"
	import {
		ref,
		reactive
	} from 'vue';
	export default{
		name: "index",
		components:{NavMenu,collectItem,Price},
		setup(){
			const NavList = reactive(["我的收益","推荐课程"])
			const active =ref(1)
			const chartOptions = reactive({
			  legend: {
			    bottom: '15'
			  },
			  xAxis: {
			    data: ['10-11', '10-12', '10-13', '10-14', '10-15', '10-16']
			  },
			  yAxis: {
			    name: '日预估总收益（元）',
			    nameTextStyle: {
			      fontWeight: '400',
			      fontSize: '10',
			      padding: [0, 0, 10, 0]
			    },
			    nameLocation: 'center',
			  },
			  series: [{
			    name: '近七天收益情况',
			    type: 'line',
			    data: [5, 20, 36, 10, 10, 20]
			  }]
			})
		 
			const handleSelect = (e)=>{
				active.value=e
				
			}
			return{
				NavList,
				handleSelect,
				active,
				chartOptions
			}
		}
	}
</script>

<style lang="scss" scoped >
	.contair {
		width: 908px;
		padding-bottom: 58px;
		padding-right: 45px;
		box-sizing: border-box;
		font-family: PingFang SC;
	
		.tit {
			height: 78px;
			font-size: 18px;
			font-weight: 400;
			line-height: 25px;
			color: #333333;
			opacity: 1;
			margin-left: 48px;
			.Nav-con{
	
				box-sizing: border-box;
				position: relative;
				top: 30px;
			}
		}
	
		.hx {
			height: 1px;
			width: 100%;
			background: #F5F5F5;
			z-index: 99;
		}
		::v-deep .el-menu-item{
			padding-bottom: 30px;
			width: 37px;
			height: auto;
			font-size: 18px;
			font-weight: 400;
			line-height: 25px;
			color: #333333;
			background-color: transparent;
		}
		::v-deep .el-menu--horizontal>.el-menu-item.is-active {
			font-size: 18px;
			font-weight: 500;
			line-height: 25px;
			color: #333333;
			border-bottom: 4px solid #505050;
			// border-spacing: ;
		}
		.pri-con{
			padding: 28px 45px  45px 27px;
			box-sizing: border-box;
			.header{
				height: 270px;
				background: #FAFAFA;
				width: 835px;
				margin-bottom: 43px;
				.lab-tit{
					margin-bottom: 10px;
				}
				.main{
					height: 211px;
					width: 100%;
					padding: 28px 47px 36px 56px;
					box-sizing: border-box;
					color: rgba(51, 51, 51, 0.6);
					font-size: 14px;
					font-weight: 400;
					line-height: 20px;
					
				}
				.tab{
					background: #EAEAEA;
					height: 59px;
					width: 100%;
					padding: 22px 0;
					font-size: 14px;
					font-weight: 400;
					line-height: 20px;
					color:  rgba(51, 51, 51, 0.6);
					box-sizing: border-box;
				}
			}
		}
		}
		
</style>

