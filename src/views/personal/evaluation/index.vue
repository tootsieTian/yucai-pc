<template>
	<div class="contair">
		<div class="tit f-s f-a">
			<div>测评中心</div>
			<div>
				<el-input placeholder="搜索测评" suffix-icon="el-icon-search" v-model="input">
				</el-input>
			</div>
		</div>
		<div class="hx"></div>
		<div class="con">
			<!-- 我的错题 -->
			<div class="header-con f">
				<div  :style="{backgroundImage:'url('+maskList[index]+')' }" v-for="(item,index) in sublist" class="f-a hand" @click="goDeatil(index)">
					<div>
						<img style="width: 37px;  margin: 0 10px;margin-left: 20px;" :src="iconList[index]" alt="">
					</div>
					<div>
						<div class="title" >{{item.title}}</div>
						<div class="subtitle" >{{item.subtitle}}</div>
					</div>
				</div>
				
			</div>
			<div class="tab-con">
				<div class="message-con">
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
				<div class="course-con f">
					<courseCard class="course" v-for="(item,index) in 6" :key="index">
					</courseCard>
				</div>
				<!-- <courseCard>
					<template  v-slot:one-right >测试一</template>
					<template  v-slot:two-right >测试二</template>
				</courseCard> -->
			</div>
		</div>
	</div>
</template>

<script>
	import router from "../../../router/router.js"
	import courseCard from "../../../components/courseCard/xsCourseCard.vue"
	import {
		ref,
		reactive
	} from 'vue';
	export default {
		name: "index",
		components: {
			courseCard
		},
		setup() {
			const input = ref('');
			const activeIndex = ref("1");
			const sublist = reactive([{title:"我的错题",subtitle:"收录测评错题"},{title:"我的测评",subtitle:"我购买的测评"},{title:"我的成就",subtitle:"我获得的成就"}])
			const maskList = reactive([require('../../../assets/image/personal/cpMask1.png'), 
				require('../../../assets/image/personal/cpMask2.png'), require('../../../assets/image/personal/cpMask3.png')])
			const iconList = reactive([require('../../../assets/image/personal/cp1.png'), require(
				'../../../assets/image/personal/cp2.png'), require('../../../assets/image/personal/cp3.png'), ])
			const goDeatil = (int) => {
				console.log(111)
				switch (int) {
					case 0:
						router.push("wrong")
						break;

					case 1:
						router.push("Myevaluation")
						break;

					case 2:
						router.push("achievement")
						break;
				}
			}
			return {
				input,
				activeIndex,
				goDeatil,
				maskList,
				iconList,
				sublist
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

		.course-con {
			width: 100%;
			flex-flow: wrap;
			margin-top: 35px;
		}

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

		::v-deep .el-input__inner {
			width: 248px;
			height: 48px;
			border-radius: 24px;
			background: #F4F4F4;
			font-size: 14px;
		}

		::v-deep .el-icon-search {
			font-size: 20px;
			margin-top: 5px;
			margin-right: 10px;
			color: #000000;
		}

		::v-deep .el-menu-demo {
			margin-bottom: 42px;
			background-color: rgba(250, 250, 250, 1);
			border-radius: 4px;
		}

		::v-deep .el-menu.el-menu--horizontal {
			border: 0;
		}

		::v-deep .el-menu--horizontal>.el-menu-item.is-active {
			font-size: 16px;
			color: rgba(19, 113, 243, 1);
			opacity: 1;
			border-bottom: 4px solid rgba(19, 113, 243, 1);
			// border-spacing: ;
		}

		::v-deep .el-menu-item {
			// white-space: nowrap;
			height: 40px;
			font-size: 12px;
			color: #333333;
			opacity: 0.5;
			margin: 0 25px;
			width: 22px;
			display: flex;
			align-items: center;
			justify-content: center;

		}

		.con {
			padding: 26px 12px 56px 45px;

			.header-con>div {
				width: 220px;
				height: 83px;
				background-image: url(../../../assets/image/personal/cpMask3.png);
				background-size: 100%;
				opacity: 1;
				margin-right: 51px;
				margin-bottom: 42px;
				font-size: 15px;
				font-weight: 400;
				line-height: 21px;
				color: #333333;
				.title{
					font-weight: 500;
					font-size: 15px;
				}
				.subtitle{
					font-size: 12px;
					color: #999999;
				}
				
			}
		}

		.course {
			width: calc((100% - 66px)/3);
			margin-right: 22px;
			margin-bottom: 25px;
		}
	}
</style>
