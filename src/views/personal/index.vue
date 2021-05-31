<template>
  <div  class="container-1430">
	<div class="header" >
		<div class="user-info" >
			<div class="info-left" >
				<div class="user-pic" ></div>
				<div class="user-detail" >
					<div class="detail-name" >薛定谔的猫</div>
					<div class="detail-id" >ID:922598</div>
				</div>
			</div>
			<div class="info-left" >
				<div v-for="(item,index) in subList" :key="index" >
					
				</div>
			</div>
		</div>
	</div>
	<div class="aside" >
		<el-col :span="12">
		    <el-menu
		      default-active="2"
		      class="el-menu-vertical-demo"
		      @open="handleOpen"
		      @close="handleClose">
		      <el-menu-item v-for="(item,index) in menuList" :key="index" :index="index+1">
		        <i class="el-icon-menu"></i>
		        <template #title>{{item}}</template>
		      </el-menu-item>
		     
		    </el-menu>
		  </el-col>
	</div>
	<div class="main" >
		<router-view/>
	</div>
  
  	
  </div>
</template>

<script>
  export default {
    name: "index",
    setup() {

    },
	data() {
	    return {
	      menuList:[
			  "个人资料","我的消息","测评中心","我的积分","浏览记录","领赠记录","我的评价","申请服务商"
		  ],
		  subList:[{name:"课程收藏",num:22},{name:"我的订单",num:10},{name:"我的活动",num:2},{name:"优惠券",num:6},{name:"我的收益",num:"￥115"},]
	    }
		}
  }
</script>

<style lang="scss" scoped>
   .header{
	   width: 100%;
	   height: 213px;
	   background: #F5F5F5;
   }
</style>
