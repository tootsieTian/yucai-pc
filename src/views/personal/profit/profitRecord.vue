<template>
	<div class="contair">
		<div class="tit f-s f-a">
			<div>我的收益 > 收益记录</div>
			<div></div>
		</div>
		<div class="hx"></div> 
		<div class="rec-con">
            <dataSelect style="margin-bottom: 20px;" :selectList="selectList" ></dataSelect>
			<earningItem  ></earningItem>
		</div>
	</div>
</template>

<script>
	import dataSelect from "../../../components/common/dataSelect.vue"
	import earningItem from "../../../components/personal/earning/earningItem.vue"
	import {
		ref,
		reactive
	} from "vue"
	export default {
		components: {
			earningItem,
			dataSelect
		},
		setup() {
			const selectList = reactive([{
				title: "近7天"
			}, {
				title: "近1月"
			}, {
				title: "近3月"
			}]);
			return{
				selectList
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
			padding: 50px 48px 71px 57px;
		}
	}
</style>
