
	<template>
		<div class="contair">
			<div class="tit f-s f-a">
				<div class="Nav-con" ><tagList :defaultIndex="active" :menuList="NavList" @handleSelect="handleSelect" ></tagList></div>
				<div></div>
			</div>
			<div class="hx"></div>
			<div class="f" style="flex-wrap: wrap; margin-left: 40px;margin-top: 40px; "  >
				<collectItem class="item-ref" v-show="active==2"  v-for="(item,index) in 4" ></collectItem>
			</div>
			<div class="pri-con" v-show="active==1" >
				<div class="header" >
					<div class="main f-s" >
						<div  class="f-c f-s">
							<div  >
								<div class="lab-tit" >总收益</div>
								<div><Price :color="'#ffffff'" :fontSize="'26px'" ></Price></div>
							</div>
							<div  >
								<div class="lab-tit" >总收益</div>
								<div><Price :color="'#ffffff'" :fontSize="'26px'" ></Price></div>
							</div>
						</div>
						<div class="f-c f-s" >
							<div></div>
							<div  >
								<div class="lab-tit" >总收益</div>
								<div><Price :color="'#ffffff'" :fontSize="'26px'" ></Price></div>
							</div>
						</div>
						<div class="f-c f-s" >
							<div @click="goRecord" >收益记录</div>
							<div  >
								<div class="lab-tit" >总收益</div>
								<div><Price :color="'#ffffff'" :fontSize="'26px'" ></Price></div>
							</div>
						</div>
					</div>
				<!-- 	<div class="tab f" >
						<div style="border-right: 1px solid #000000;" class="f-a-j f-1 hand" >提现</div>
						<div class="f-a-j f-1 hand" >我的银行卡</div>
					</div> -->
				</div>
				<div class="footer" >
					<div>收益曲线</div>
					 <div ref="chart" id="chart"></div>
				</div>
			</div>
		</div>	
</template>

<script>
	import * as echarts from 'echarts'
	import Price from "../../../components/common/price.vue"
	import tagList from "../../../components/common/tagList.vue"
	import collectItem from "../../../components/courseCard/allCourseCard.vue"
	import router from "../../../router/router.js"
    import { useRoute } from 'vue-router'
	import {
		ref,
		reactive,
		onMounted
	} from 'vue';
	export default{
		name: "index",
		components:{tagList,collectItem,Price},
		setup(){
			const NavList = reactive(["我的收益","推荐课程"])
			const route = useRoute()
			const active =ref("1")
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
			
			active.value=route.query.index==1 ?  2 : 1
			
		    onMounted(()=>{
				var myChart = echarts.init(document.getElementById('chart'));
				myChart.setOption(chartOptions)
			})
			const handleSelect = (e)=>{
				active.value=e
				
			}
			const goRecord = ()=>{
				router.push('/personal/profitRecord')
			}
			return{
				NavList,
				handleSelect,
				active,
				chartOptions,
				goRecord
			}
		}
	}
</script>

<style lang="scss" scoped >
	#chart{
		width: 100%;
		height: 711px;
	}
	.contair {
		width: 100%;
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
		.item-ref{
			width: 332px;
			// height: 320px;
			margin-right: 24px;
			margin-bottom: 20px;
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
			color: rgba(19, 113, 243, 1);
			border-bottom: 4px solid rgba(19, 113, 243, 1);
			// border-spacing: ;
		}
		.pri-con{
			padding: 28px 45px  45px 27px;
			box-sizing: border-box;
			width: 100%;
			.header{
				// height: 270px;
				// background: #FAFAFA;
				background-image: url(../../../assets/image/personal/prifitbg.png);
				background-size: 100%;
				width: 100%;
				margin-bottom: 43px;
				.lab-tit{
					margin-bottom: 10px;
				}
				.main{
					height: 211px;
					width: 100%;
					padding: 28px 47px 36px 56px;
					box-sizing: border-box;
					color: rgba(255, 255, 255, 0.6);
					font-size: 14px;
					font-weight: 400;
					line-height: 20px;
					
				}
				.tab{
					
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

