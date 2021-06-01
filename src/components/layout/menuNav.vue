<template>
    <div class="nav">
        <div class="container-1430">
            <div class="logo" @click="toPath('/')">
                logo
            </div>
            <div class="menu-list">
                <div v-for="(item,index) in menuList"
                     class="menu-item"
                     @click="toPath(item.path)"
                     :key="index+'q'">
                    {{ item.title }}
                </div>
                <el-row :gutter="20" class="course-classify-list">
                    <el-col :span="3.5"
                            v-for="item in 17"
                            :key="item+'g'">
                        <div class="course-classify-item" @click="toPath('/classifyCourse')">
                            家庭教育
                        </div>
                    </el-col>
                </el-row>
            </div>

            <div class="nav-right">
                <div class="search">
                    <input v-model="searchKey">
                    <i class="el-icon-search"
                       @click="toPath('/searchResult')"/>
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
  import {ref, reactive} from 'vue'
  import {useRouter} from 'vue-router'

  export default {
    name: "menuNav",
    setup() {
      const router = useRouter()
      const menuList = reactive([
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
      const isLogin = ref(true)    // 是否登录
      const courseClassifyList = ref(null)  // 课程分类列表dom
      const toPath = (path) => {
        router.push(path)
      }
      return {
        courseClassifyList,
        isLogin,
        menuList,
        toPath,
        searchKey,
      }
    }
  }
</script>

<style lang="scss" scoped>
    .nav {
        font-size: 14px;
        width: 100%;
        height: 104px;
        background: #EDEDED;
        display: flex;

        .container-1430 {
            position: relative;
            display: flex;
            align-items: center;
        }
    }


    .logo {
        cursor: pointer;
        width: 201px;
        height: 72px;
        background: #FFFFFF;
    }

    .menu-list {
        height: 100%;
        margin-left: 71px;
        width: 500px;
        justify-content: space-between;
        display: flex;

        .menu-item {
            height: 100%;
            display: flex;
            align-items: center;
            cursor: pointer;
        }
    }

    .menu-item:nth-child(2):hover ~ .course-classify-list {
        display: flex !important;
    }

    .course-classify-list:hover {
        display: flex;
    }

    .course-classify-list {
        position: absolute;
        display: none;
        width: 1200px;
        background: #BFBFBF;
        bottom: 0;
        z-index: 1000;
        left: 50%;
        transform: translate(-50%, 100%);
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
        padding: 25px 0 14px 24px;

        .course-classify-item {
            cursor: pointer;
            height: 43px;
            display: flex;
            align-items: center;
            padding: 0 40px;
            margin-bottom: 18px;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            color: #707070;
            background: #EFEFEF;
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

    .nav-right {
        display: flex;
        align-items: center;
        position: absolute;
        right: 0;

        .study {
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

        .not-login-box {
            display: flex;
            align-items: center;
            margin-left: 22px;

            .line {
                margin: 0 12px;
                width: 1px;
                background: #707070;
                height: 18px;
            }
        }
    }

    .el-icon-search {
        cursor: pointer;
    }
</style>
