<template>
	<div class="contair">
		<div class="tit f-s f-a">
			<div>测评中心</div>
			<div>
				 <el-input
				    placeholder="搜索测评"
				    suffix-icon="el-icon-search"
				    v-model="input">
				  </el-input>
			</div>
		</div>
		<div class="hx"></div>
		<div class="con" >
			<!-- 我的错题 -->
			<div  class="header-con f" >
				<div class="f-a-j" >我的错题</div>
				<div class="f-a-j" >我的测评</div>
				<div class="f-a-j" >我的成就</div>
			</div>
			<div class="tab-con" >
				<div class="message-con" >
					<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
					 <el-menu-item index="1">热门</el-menu-item>
					 <el-menu-item index="2">电商</el-menu-item>
					 <el-menu-item index="3">街舞</el-menu-item>
					 <el-menu-item index="4">美食</el-menu-item>
					 <el-menu-item index="5">美食</el-menu-item>
					 <el-menu-item index="6">健身</el-menu-item>
					 <el-menu-item index="7">TED演讲</el-menu-item>
					 </el-menu>
			    </div>
			</div>
		</div>
	</div>	
</template>

<script>
	import {
		ref,
		reactive
	} from 'vue';
	export default{
		name:"index",
		setup(){
			const input = ref('');
			const activeIndex = ref(1);
			return {
				input,
				activeIndex
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
		}
	
		.hx {
			height: 1px;
			width: 100%;
			background: #F5F5F5;
		}
		::v-deep .el-input__inner{
			width: 248px;
			height: 48px;
			border-radius: 24px;
			background: #F4F4F4;
			font-size: 14px;
		}
		::v-deep .el-icon-search{
			font-size: 20px;
			margin-top: 5px;
			margin-right: 10px;
			color: #000000;
		}
		::v-deep .el-menu-demo{
			margin-bottom: 42px;
		}
		::v-deep  .el-menu.el-menu--horizontal{
			border: 0;
		}
		::v-deep .el-menu--horizontal>.el-menu-item.is-active{
			font-size: 16px;
			color: #333333;
			opacity: 1;
			border-bottom: 4px solid #505050;
			// border-spacing: ;
		}
		::v-deep .el-menu-item{
			// white-space: nowrap;
			height: 40px;
		    font-size: 12px;
			color: #333333;
			opacity: 0.5;
			padding: 0 10px ;
			margin: 0 25px;
			width: 22px;
		    display: flex;
			align-items: center;
			justify-content: center;
		
		}
		.con{
			padding: 26px 12px 56px 45px;
			.header-con>div{
				width: 187px;
				height: 83px;
				background: #F2F2F2;
				opacity: 1;
				margin-right: 51px;
				margin-bottom: 42px;
				font-size: 15px;
				font-weight: 400;
				line-height: 21px;
				color: #333333;
				opacity: 0.5;
			}
		}
		}
</style>
