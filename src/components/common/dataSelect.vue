<template>
	<div class="f-s" >
		<div class="f">
			<div @click="select(item)" class="lable1" v-for="(item,index) in selectList"  :key="index" >
				{{item.title}}
			</div>
		</div>
		
		<div>
			<slot name="tab" ></slot>
		</div>
		
	</div>
</template>

<script>
	import {ref,reactive} from "vue"
	import { ElMessage } from 'element-plus'
	export default{
		props:{
			selectList:{
				type:Array,
				default:()=>{[]}
			}
		},
		setup(props,contxt){
			const {selectList} = props
			const methods = {
				select(item){
					ElMessage.success('选择了'+item.title)
					console.log(item.title)
					contxt.emit('select',item)
				}
			}
			return{
				selectList,
				...methods
			}
		}
	}
</script>

<style lang="scss" scoped >
	.lable1{
		padding: 4px 15px;
		background: #F8F8F8;
		font-size: 13px;
		font-weight: 400;
		line-height: 18px;
		color: #999999;
		margin-right: 8px;
		border-radius: 17px;
	}
	.lable1:hover, .lable1:after{
		color: #4D4D4D;
	}
</style>
