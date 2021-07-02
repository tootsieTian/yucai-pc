<template>
	<div class="con" >
		<el-menu :default-active="defaultIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			<el-menu-item :index="index+1" v-for="(item,index) in menuList" :key="index" >{{item}}</el-menu-item>
		</el-menu>
	</div>
	
</template>

<script>
	import {ref,reative} from "vue"
	export default{
		emits:['handleSelect'],
		props:{
			menuList:{
				type:Array,
				default:()=>{[]}
			},
			defaultIndex:{
				type:Number,
				default:1
			}
		},
		setup(props,context){
			const {menuList,defaultIndex}=props
			const methods  = {
			  handleSelect(e){
				if(defaultIndex){
					 context.emit('handleSelect',e)
				}
			   else{
				   return
			   }
			
			  }
			}
			return{
				menuList,
				defaultIndex,
				...methods
			}
		}
	}
</script>

<style lang="scss" scoped >
	.con{
		::v-deep .el-menu-demo {
			margin-bottom: 42px;
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
			// padding: 0 10px;
			margin: 0 35px;
			width: 22px;
			display: flex;
			align-items: center;
			justify-content: center;
		
		}	
	}
	
</style>
