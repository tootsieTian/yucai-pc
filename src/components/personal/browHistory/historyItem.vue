<template>
	<div class="item-con f">
		<div class="item hand" @click="goDetail(item)" v-for=" (item,index) in historyList">
			<div class="item-header">
				<img :src="item.img" alt="">
			</div>
			<div class="item-footer">
				<div class="title f-s">
					<div>{{item.name}}</div>
					<div><div v-if="isdelete" @click="openDialog(index)" >...</div></div>
					<div v-if="selectArr.includes(index)" class="dialog f-c" >
						<div class="f-1 f-a-j" style="border-bottom: 1px solid #E0E0E0;" >置顶课程</div>
						<div class="f-1 f-a-j">删除课程</div>
					</div>
				</div>
				<div class="f-s">
					<div>观看{{item.progress}}%</div>
					<div>继续观看 ></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		ref,
		toRefs
	} from "vue"
	export default {
		name: "historyItem",
		emits: ["goDetail"],
		props: {
			historyList: {
				type: Array,
				default: () => {([])}
			},
			isdelete:{
				type:Boolean,
				default:false
			}
		},


		setup(props, contxt) {
			const isOpenDialog = ref(false)
			const selectArr= ref([])
			const {
				historyList
			} = toRefs(props)
			const goDetail = (item) => {
				contxt.emit("goDetail", item)
			}
			const openDialog=(index)=>{
				    if(!selectArr.value.includes(index)){
						selectArr.value.push(index)
					}else{
						selectArr.value.pop(index)
					}
					
			}
			return {
				historyList,
				goDetail,
				isOpenDialog,
				openDialog,
				selectArr
			}
		}
	}
</script>

<style lang="scss" scoped>
	.item-con {
		flex-flow: wrap;
		font-family: PingFang SC;
		// justify-content: space-around;
		// justify-content:space-evenly;
		padding: 27px 0px 164px 44px;

		.item {
			width: calc((100% - 72px)/3);
			height: 328px;
			background: #FAFAFA;
			opacity: 1;
			margin: 0 12px;
			margin-bottom: 27px;

			// margin-right:24px ;
			.item-header {
				height: 227px;
				width: 100%;
				background: #EDEDED;

				img {
					height: 227px;
					width: 100%;
				}
			}

			.item-footer {
				height: 101px;
				width: 100%;
				font-size: 16px;
				font-weight: 400;
				line-height: 22px;
				color: #999999;
				padding: 18px 13px 23px 17px;
				box-sizing: border-box;
                position: relative;
				.title {
					font-weight: 500;
					line-height: 28px;
					color: #333333;
					font-size: 20px;
					margin-bottom: 10px;
				}
			}
		}

		.mar24 {
			margin: 0 19px;
		}
		.dialog{
			position: absolute;
			padding: 0 4px;
			box-sizing: border-box;
			top: 50px;
			right: -90px;
			width: 139px;
			height: 81px;
			background: #F2F2F2;
			opacity: 1;
			border-radius: 4px;
			z-index: 99;
			color: #333333;
			font-size: 12px;
		}
	}
</style>
