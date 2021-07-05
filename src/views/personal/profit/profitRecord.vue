<template>
	<div class="contair">
		<div class="tit f-s f-a">
			 <el-breadcrumb  style="font-size: 16px; color: #333333;" separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/personal/profit' }">我的收益</el-breadcrumb-item>
			  <el-breadcrumb-item >
				  <div class="f-a" style="font-size: 12px; color: rgba(153, 153, 153, 1);height: 20px;" >
				  <img style="height: 12px;width: 10px;margin-left: 20px;margin-right: 10px;" src="../../../assets/image/personal/dhicon.png" alt="">
				  我的收益>收益记录
				  </div>
			  </el-breadcrumb-item>
			</el-breadcrumb>
			<div></div>
		</div>
		<div class="hx"></div> 
		<div class="rec-con">
           <tagList style="margin-left: -26px;" :menuList="NavList" @handleSelect="handleSelect" ></tagList>
				<earningItem  ></earningItem>
		</div>
	</div>
</template>

<script>
	import tagList from "../../../components/common/tagList.vue"
	import dataSelect from "../../../components/common/dataSelect.vue"
	import earningItem from "../../../components/personal/earning/earningItem.vue"
	import {
		ref,
		reactive
	} from "vue"
	export default {
		components: {
			earningItem,
			dataSelect,
			tagList
		},
		setup() {
			const NavList = reactive(["近7天","近1月","近3月"])
			const selectList = reactive([{
				title: "近7天"
			}, {
				title: "近1月"
			}, {
				title: "近3月"
			}]);
			const select = ()=>{
				
			}
			
			return{
				selectList,
				select,
				NavList
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.contair {
		width: 100%;
		padding-bottom: 58px;
		padding-right: 45px;
		box-sizing: border-box;
		font-family: PingFang SC;

		.tit {
			height: 78px;
			font-size: 18px;
			font-family: PingFang SC;
			font-weight: 500;
			line-height: 25px;
			color: #333333;
			margin-left: 48px;
		}

		.hx {
			height: 1px;
			width: 100%;
			background: #F5F5F5;
		}

		.rec-con {
			padding: 26px 48px 71px 57px;
		}
	}
</style>
