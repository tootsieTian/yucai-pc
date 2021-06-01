<template>
    <main>
        <div class="login-box">
            <div class="title">登录</div>
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
                        <el-button>发送验证码</el-button>
                    </template>
                </el-input>
            </div>
            <div class="explain">若未注册，将实用您的手机号直接注册。</div>
            <el-button  class="login-btn"
                        @click="login"
                        circle>登录</el-button>
            <div class="other">其他登录方式</div>
            <div class="login-type">
            </div>
        </div>
    </main>
</template>

<script>
  import {reactive} from 'vue'
  import { useRouter } from 'vue-router'

  export default {
    name: "index",
    setup() {
      const router = useRouter()
      const userInfo = reactive({
        phone: '',
        code: ''
      })
      const login = () => {
        router.push('/')
      }
      return {
        userInfo,
        login
      }
    }
  }
</script>

<style lang="scss" scoped>
    main {
        width: 100vw;
        height: 100vh;
        background: #C7C7C7;
        display: flex;
        align-items: center;
        justify-content: center;

        .login-box {
            width: 464px;
            height: 613px;
            background: #FFFFFF;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    .title {
        font-size: 31px;
        font-weight: 500;
        line-height: 44px;
        color: #333333;
        margin-top: 73px;
        margin-bottom: 67px;
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

        .el-button {
            padding: 0;
            font-size: 15px;
            margin: 0;
            font-weight: 400;
            line-height: 21px;
            color: #333333;
            opacity: 0.5;
            border-radius: 18px;
            width: 100%;
            height: 100%;
            background: #FFFFFF;
            border: 1px solid #707070;
        }
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
        width: 260px;
        height: 47px;
        background: #EFEFEF;
        border-radius: 30px;
        padding: 0;
        text-align: center;
        font-size: 19px;
        font-weight: 400;
        line-height: 26px;
        color: #333333;
        opacity: 0.5;
        margin-bottom: 57px;
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
</style>
