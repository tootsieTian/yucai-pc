<template>
    <div class="check-study">
        <div class="dialog login-box">
            <div @click="ok" class="close" >
				<img src="../../assets/image/index/close.png" alt="">
			</div>
            <div class="title">登录</div>
			 <div class="explain">若未注册，将实用您的手机号直接注册。</div>
            <div>
                <el-input
                        placeholder="请输入手机号"
                        v-model="userInfo.phone"
                        clearable>
                </el-input>
            </div>
            <div class="code">
                <el-input
                        placeholder="请输入验证码"
                        v-model="userInfo.code"
                        clearable>
                    <template #append>
						<div v-if="timecode==30" @click="sendCode" class="f-a-j  getcode hand" style="margin-top: 10px;" >获取验证码</div>
						<div v-if="timecode!==30" @click="sendCode" class="f-a-j  getcode hand" style="margin-top: 10px;" >{{timecode+'s'}}</div>
                    </template>
                </el-input>
            </div>
           
            <el-button  class="login-btn"
                        @click="login"
                        circle>登录</el-button>
            <div class="other"  >其他登录方式</div>
            <!-- <div class="login-type hand">
				<img  style="width: 45px;" src="../../assets/image/index/login-wx.png" alt="">
            </div> -->
           <wxlogin
             appid="wxd50825f9b47aa15d"
             :scope="'snsapi_login'"
             :theme="'black'"
             :redirect_uri="encodeURIComponent('http://localhost:8080')"
              rel="external nofollow" 
           >
           </wxlogin>
       
		</div>
    </div>
</template>

<script>
  import { reactive,ref } from 'vue'
  import { postToken, sendMobileCaptcha } from "../../api/login.js";
  import wxlogin from 'vue-wxlogin'
  import { validatePhone } from "../../util/check.js"
  import   "../../util/wxLogin.js"
  import {
  	ElMessage
  } from 'element-plus'
  import { useRouter } from 'vue-router'
  export default {
    name: "checkStudy",
	emits:["closeDialog"],
	components:{
		wxlogin
	},
    setup(props, context) {
      const router = useRouter()
	  // const wxLoginUrl= ref('https://open.weixin.qq.com/connect/qrconnect?appid=''&redirect_uri=''&response_type=code&scope=snsapi_login#wechat_redirect')
	  const timecode = ref(30)
      const userInfo = ref({
        phone: '',
        code: ''
      })
	  const login = () => {
		  if (userInfo.value.code.length!==4) {
		     
			return ElMessage.error('验证码为四位！')
		  }
		  if(validatePhone(userInfo.value.phone)){
		  	method.loginByCode()
		  }
		  else{
		  	ElMessage.error('手机号码错误请确认！')
		  }
	  }
      const method = {
        ok() {
          context.emit('closeDialog')
        },
		// 选择具体的svip还是vip
		sendCode(){
			if( !validatePhone(userInfo.value.phone)){
				return 	ElMessage.error('手机号码错误请确认！')
			}
			if(timecode.value==30){
				sendMobileCaptcha({ "phone": userInfo.value.phone}).then(()=>{
				   ElMessage.success("发送成功")
				   const timer = setInterval(()=>{
				   	timecode.value--
				   	if(timecode.value==0){
				   		timecode.value=30
				   		clearInterval(timer)
				   	}
				   },1000)	
				}
				)
				
			}else{
				ElMessage.error("请不要重复点击！")
			}
		},
		loginByCode() {
		  postToken({
		    'phone': userInfo.value.phone,
		    'code': userInfo.value.code,
		    'agree': 1,
		    'grant_type': 'phone'
		  }).then(res => {
			
		    ElMessage.success('登录成功')
		    localStorage.setItem('access_token', res.access_token)
		    localStorage.setItem('user_id',res.user_id)
		    setTimeout(()=>{
		      context.emit('closeDialog')
			  // router.replace('/personal/userInfo')
			  location.href="/"
			  // location.href("/")
		    },500)
		  }).catch((res)=>{
			 
			  ElMessage.error("验证码有误！")
		  }
		  )
		  
		  
		  
		},
		wxLogin(){
			
			var obj = new WxLogin({
			  id: "weixin",
			  appid: "wx3bdb1192c22883f3",
			  scope: "snsapi_login",
			  // 扫码成功后 跳转的地址
			  redirect_uri: "http://domain/weixinlogin"
			})
			 console.log(obj)

		}
	
      }
      return {
        ...method,
		userInfo,
		timecode,
		login
      }
    }
  }
</script>

<style lang="scss" scoped>
	.dialog::-webkit-scrollbar {
	    display: none;
	}
	
    .close{
		position: absolute;
		top: 20px;
		right: 20px;
		
			
			}
     .close img{
		 width: 12px;
		 height: 12px;
	 }
    .check-study {
        position: fixed;
        z-index: 999;
        background: rgba(43, 43, 43, 0.5);
        left: 0;
        top: 100px;
        width: 100vw;
        height: calc(100vh - 100px);
    }
  
    .dialog {
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
		border-radius: 6px;
  //       width: 1152px;
		// height: 719px;
        background: rgba(224, 224, 224, 0.6);
        // padding: 31px 37px 0 47px;
		box-sizing: border-box;
        overflow-x:hidden;
		z-index: 999;
		overflow-y: scroll;
    }
	.login-box {
	    width: 464px;
	    height: 613px;
	    background: #FFFFFF;
	    display: flex;
	    flex-direction: column;
	    align-items: center;
	}
	.title {
	    font-size: 31px;
	    font-weight: 500;
	    line-height: 44px;
	    color: #333333;
	    margin-top: 73px;
	    margin-bottom: 10px;
	}
	
	::v-deep .el-input, ::v-deep .el-input__inner {
	    border-radius: 0;
	    height: 46px;
	}
	
	::v-deep .el-input {
	    width: 302px;
	}
	
	
	::v-deep .el-input-group__append:last-child {
	    position: absolute;
	    padding: 0;
	    right: 0;
	    top: 0;
	    width: 100px;
	    height: 34px;
	    border: none;
	    background: none;
	
	    // .el-button {
	    //     padding: 0;
	    //     font-size: 15px;
	    //     margin: 0;
	    //     font-weight: 400;
	    //     line-height: 21px;
	    //     color: #333333;
	    //     opacity: 0.5;
	    //     border-radius: 18px;
	    //     width: 100%;
	    //     height: 100%;
	    //     background: #FFFFFF;
	    //     border: 1px solid #707070;
	    // }
	}
	::v-deep .el-input:last-child {
	    position: relative;
	}
	
	::v-deep .el-input__inner {
	    padding: 0;
	    border: none;
	    border-bottom: 1px solid #E5E5E5;
	}
	.code{
	    margin: 20px 0;
	}
	.explain {
	    font-size: 14px;
	    font-weight: 400;
	    line-height: 20px;
	    color: #333333;
	    opacity: 0.3;
	    margin-bottom: 52px;
	}
	.login-btn{
	   font-size: 19px;
	   font-weight: 400;
	   color: #FFFFFF;
		width: 302px;
		height: 48px;
		background: linear-gradient(180deg, #74AEFF 0%, #346FEB 100%);
		box-shadow: 0px 3px 19px rgba(150, 187, 255, 0.7);
		opacity: 1;
		border-radius: 24px!important;
	    margin-bottom: 57px;
		margin-top: 22px;
	}
	.other{
	    margin-bottom: 20px;
	    font-size: 14px;
	    font-weight: 400;
	    line-height: 20px;
	    color: #333333;
	    opacity: 0.3;
	}
	.login-type{
	    width: 55px;
	    height: 55px;
	    background: #E3E3E3;
	    border-radius: 50%;
	}
	.getcode:hover{
		color: #1371F3;
	}

</style>
