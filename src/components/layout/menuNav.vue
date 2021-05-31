<template>
    <div class="nav">
        <div class="container-1400">
            <div class="logo">
                logo
            </div>
            <div class="menu-list">
                <div v-for="(item,index) in menuList"
                     class="menu-item"
                     @click="toPath(item.path)"
                     :key="index">
                    {{ item.title }}
                </div>
            </div>
            <div class="nav-right">
                <div class="search">
                    <input v-model="searchKey">
                    <i class="el-icon-search"/>
                </div>
                <div class="study">学习中心</div>
                <div class="user-box" v-if="isLogin">
                    <div class="username">薛定谔的猫</div>
                    <el-image
                            class="user-header"
                            :src="require('../../assets/icon/sucai/doge.jpeg')"/>
                </div>
                <div class="not-login-box" v-else>
                    <div>登录</div>
                    <div class="line"></div>
                    <div>注册</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import {ref} from 'vue'
  import {useRouter} from 'vue-router'

  export default {
    name: "menuNav",
    setup() {
      const router = useRouter()
      const menuList = ref([
        {
          title: '首页',
          path: '/'
        },
        {
          title: '全部课程',
          path: '/'
        },
        {
          title: '家庭教育',
          path: '/'
        },
        {
          title: '课程推荐',
          path: '/'
        },
        {
          title: '会员专区',
          path: '/'
        },
        {
          title: '签到',
          path: '/'
        }
      ])    // 菜单列表
      const searchKey = ref('产品规划') // 搜索框关键字
      const isLogin = ref(false)    // 是否登录
      const toPath = (path) => {
        router.push(path)
      }
      return {
        isLogin,
        menuList,
        toPath,
        searchKey
      }
    }
  }
</script>

<style lang="scss" scoped>
    .nav {
        width: 100%;
        height: 104px;
        background: #EDEDED;
        display: flex;

        .container-1400 {
            position: relative;
            display: flex;
            align-items: center;
        }
    }


    .logo {
        width: 201px;
        height: 72px;
        background: #FFFFFF;
    }

    .menu-list {
        margin-left: 71px;
        width: 500px;
        justify-content: space-between;
        display: flex;

        .menu-item {
            cursor: pointer;
        }
    }

    .search {
        position: relative;

        input {
            padding-left: 21px;
            box-sizing: border-box;
            border: none;
            width: 248px;
            height: 48px;
            outline: none;
            background: #FFFFFF;
            border-radius: 24px;
        }

        i {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 24px;
        }
    }
    .nav-right{
        display: flex;
        align-items: center;
        position: absolute;
        right: 0;
        .study{
            cursor: pointer;
            margin: 0 23px;
        }
        .user-box {
            cursor: pointer;
            display: flex;
            align-items: center;
            .username {
                margin-right: 12px;
            }
            .user-header {
                width: 48px;
                height: 48px;
                border-radius: 50%;
            }
        }
        .not-login-box{
            display: flex;
            align-items: center;
            margin-left: 22px;
            .line{
                margin: 0 12px;
                width: 1px;
                background: #707070;
                height: 18px;
            }
        }
    }

</style>
