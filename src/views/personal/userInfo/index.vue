<template>
   <div class="contair" >
	   <div class="tit f-s f-a" >
		   <div>个人资料</div>
		   <div style="color: rgba(52, 111, 235, 1);"  class="hand" @click="goEdit" >编辑</div>
	   </div>
	   <div class="hx" ></div>
	   <div class="detail" >
		   <div class="title" >基本信息</div>
		   <div class="userpic f" >
			   <div class="lable" >头像</div>
			   <div class="pic" >
				   <img  :src="userInfo.avatar" alt="">
			   </div>
		   </div>
		   <div class="username f" >
			   <div class="lable" >昵称</div>
			   <div style="margin-left: 34px;" >{{userInfo.userName}}</div>
		   </div>
		   <div class="sex f" >
			   <div class="lable" >性别</div>
			   <div style="margin-left: 34px;"  >{{userInfo.gender==1  ? '女' : "男" }}</div>
		   </div>
		   <div class="phone f" >
			   <div class="lable" >手机号</div>
			   <div style="margin-left: 22px;" >{{userInfo.phone}}</div>
		   </div>
		   <div class="study" >
			   <div class="lable" style="opacity: 1;" >*选择学习领域</div>
			   <div class="f" >
				   <div class="lable1" >家庭教育</div>
				   <div class="lable1" >企业管理</div>
				   <div class="lable1" >职场考试</div>
				   <div class="lable1" >产品运营</div>
			   </div>
		   </div>
	   </div>
   </div>
</template>

<script>
	import router from "../../../router/router.js"
	import {getUserInfo} from "../../../api/wechat.js"
	import {ref } from "vue"
    export default {
    name: "index",
    setup() {
       const goEdit =  () =>{
		   router.push("edit")
	   }
	   
	   const userInfo = ref({})
	   const getUser =async ()=>{
		  const res =await  getUserInfo({userId: localStorage.getItem('user_id')})
		  userInfo.value=res
	   }
	   getUser()
	   return{
		   goEdit,
		   userInfo,
		   getUser
	   }
    }
	
  }
</script>

<style lang="scss" scoped>
    .contair{
		width: 100%;
		padding-bottom: 58px;
		padding-right: 45px;
		box-sizing: border-box;
		font-family: PingFang SC;
		.tit{
			height: 78px;
			font-size: 18px;
			font-weight: 400;
			line-height: 25px;
			color: #333333;
			opacity: 1;
			margin-left: 48px;
		}
		.hx{
			height: 1px;
			width: 100%;
			background: #F5F5F5;
		}
		.lable{
			font-size: 14px;
			font-weight: 400;
			line-height: 20px;
			color: #333333;
			opacity: 0.5;
		}
		.detail{
			margin-left: 48px;
			.title{
				font-size: 14px;
				font-weight: 500;
				line-height: 20px;
				color: #333333;
				margin-top: 27px;
			}
			.userpic{
				margin-top: 44px;
				.pic{
					width: 50px;
					height: 50px;
					background: #EDEBEB;
					opacity: 1;
					border-radius: 50%;
					margin-left: 28px;
					img{
						width: 50px;
						height: 50px;
						border-radius: 50%;
					}
				}
				
			}
			.username{
				margin-top: 51px;
				font-size: 14px;
				font-weight: 400;
				line-height: 20px;
				color: #333333;
			}
			.sex{
				margin-top: 23px;
				font-size: 14px;
				font-weight: 400;
				line-height: 20px;
				color: #333333;
			}
			.phone{
				margin-top: 23px;
				font-size: 14px;
				font-weight: 400;
				line-height: 20px;
				color: #333333;
			}
			.study{
				margin-top: 23px;
				.lable1{
                    border:1px solid rgba(52, 111, 235, 1)  ;
					color:rgba(52, 111, 235, 1) ;
					padding: 11px 26px 11px 22px;
					font-size: 14px;
					font-weight: 400;
					line-height: 20px;
					
					margin-right: 22px;
					margin-top: 23px;
				
				}
			}
		}
	}
</style>
