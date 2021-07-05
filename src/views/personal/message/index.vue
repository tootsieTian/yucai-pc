<template>
	<div class="contair">
		<div class="tit f-s f-a">
			<div>我的消息</div>
			<div></div>
		</div>
		<div class="hx"></div>
		<div class="message-con" >
			<el-menu :default-active="defaultIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			 <el-menu-item index="1">系统消息</el-menu-item>
			 <el-menu-item index="2">评论消息</el-menu-item>
			 <el-menu-item index="3">收益消息</el-menu-item>
			 </el-menu>
			<messageItem v-show="activeIndex==1" :messageList="systemList" ></messageItem>
			<messageItem v-show="activeIndex==2" :isComment="true" :messageList="commentList" ></messageItem>
			<messageItem v-show="activeIndex==3" :messageList="systemList" ></messageItem>
		</div>
		
	</div>
</template>

<script>
	import router from "../../../router/router.js"
	import {
		ref,
		reactive,
		onMounted		
	} from "vue"
	import messageItem from "../../../components/personal/message/messageItem.vue"
	export default {
		name: "message",
		components: {
			messageItem
		},
		setup() {
			const defaultIndex = ref('1')
			const activeIndex = ref(1)
			const systemList = reactive([{
					title: "您获得了一份收益金，戳我去看",
					date: "2021.5.20 12:09:29"
				}, {
					title: "您获得了一份收益金，戳我去看",
					date: "2021.5.20 12:09:29"
				},
				{
					title: "您获得了一份收益金，戳我去看",
					date: "2021.5.20 12:09:29"
				},
				{
					title: "您获得了一份收益金，戳我去看",
					date: "2021.5.20 12:09:29"
				},
				{
					title: "您获得了一份收益金，戳我去看",
					date: "2021.5.20 12:09:29"
				},
			]);
			const commentList = reactive([{
					reply: '谢谢 一起努力',
					title: "老师讲得非常棒，通俗易懂，爱了爱了",
					date: "2021.5.20 12:09:29"
				}, {
					reply: '谢谢 一起努力',
					title: "老师讲得非常棒，通俗易懂，爱了爱了",
					date: "2021.5.20 12:09:29"
				},
				{
					reply: '谢谢 一起努力',
					title: "老师讲得非常棒，通俗易懂，爱了爱了",
					date: "2021.5.20 12:09:29"
				},
				{
					reply: '谢谢 一起努力',
					title: "老师讲得非常棒，通俗易懂，爱了爱了",
					date: "2021.5.20 12:09:29"
				},
				{
					reply: '谢谢 一起努力',
					title: "老师讲得非常棒，通俗易懂，爱了爱了",
					date: "2021.5.20 12:09:29"
				},
			])
			const handleSelect = (key, keyPath)=>{
				activeIndex.value=key
				
			}
			return {
				commentList,
				systemList,
				activeIndex,
				handleSelect,
				defaultIndex
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

		.lable {
			font-size: 14px;
			font-weight: 400;
			line-height: 20px;
			color: #333333;
			opacity: 0.5;
		}
		.message-con{
			padding: 38px  45px 62px  65px;
			box-sizing: border-box;
		}
		::v-deep .el-menu-demo{
			margin-bottom: 42px;
		}
		::v-deep  .el-menu.el-menu--horizontal{
			border: 0;
		}
		::v-deep .el-menu--horizontal>.el-menu-item.is-active{
			font-size: 16px;
			color: rgba(19, 113, 243, 1);
			opacity: 1;
			border-bottom: 4px solid rgba(19, 113, 243, 1);
		}
		::v-deep .el-menu-item{
			// white-space: nowrap;
			height: 40px;
		    font-size: 12px;
			color: #333333;
			opacity: 0.5;
			
			margin: 0 35px;
			width: 22px;
		    display: flex;
			align-items: center;
			justify-content: center;
		
		}

	}
</style>
