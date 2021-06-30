<template>
    <!--    撑起盒子高度-->
    <div class="nav-hidden" v-if="!navTop">

    </div>
    <div :class="{nav:true,transparent: transparent}">
        <div class="container-menu">
            <div class="logo" @click="toPath('/')">
                <img  :src=" transparent == true ? logoWImg : logoBImg   " alt="">
            </div>
            <div class="menu-list">
                <div v-for="item in menuList"
                     :class="{'menu-item': true,'menu-item--active': route.path===item.path}"
                     @click="toPath(item.path)">
                    <img  style="width: 17px;height: 12px;margin-right: 5px;"  v-if="item.title=='会员专区'" src="../../assets/image/common/openVip.png" alt="">
					{{ item.title }}
                </div>

                <el-row :gutter="20" class="course-classify-list">
                    <div class="course-classify-list-triangle">
                        <div class="triangle"></div>
                    </div>
                    <el-col :span="3.5"
                            v-for="item in 17"
                            :key="item+'g'">
                        <div class="course-classify-item" @click="toPath('/classifyCourse')">
                            篮球
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="nav-right">
                <div class="search">
                    <input v-model="searchKey"
                           :style="{background: transparent?'#FFFFFF':'#F4F4F4'}">
                    <i class="el-icon-search"
                       @click="toPath('/searchResult')"/>
                </div>
                <div class="study" @click="toPath('/study')" v-if="false"> 学习中心</div>
                <div class="user-box" v-if="isLogin"
                     @click="toPath('/personal/userInfo')">
                    <div class="username">薛定谔的猫</div>
                    <el-image
                            class="user-header"
                            :src="require('../../assets/icon/sucai/doge.jpeg')"/>
                </div>
                <div class="not-login-box" v-else>
                    <div @click="openLogin">登录</div>
                    <div class="line"></div>
                    <div>注册</div>
                </div>
            </div>
        </div>
    </div>
    <loginDialog v-if="loginShow" @closeDialog="closeLogin"></loginDialog>
</template>

<script>
  import { ref, reactive, watch, onBeforeMount } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import loginDialog from "../../components/common/loginDialog.vue"

  export default {
    name: "menuNav",
    components: {
      loginDialog
    },

    setup() {
      const router = useRouter()
      const route = useRoute()
      const navTop = ref(false)
      const logoWImg = ref(require('../../assets/image/common/logoWhite.svg'))
	  const logoBImg = ref(require('../../assets/image/common/logoBlack.svg'))
      const loginShow = ref(false)
      watch(route, (newVal) => {
        newVal.path === '/' ? navTop.value = true : navTop.value = false

      }, {
        immediate: true
      })


      const menuList = reactive([
        {
          title: '首页',
          path: '/'
        },
        {
          title: '全部课程',
          path: '/classifyCourse'
        },
        {
          title: '家庭教育',
          path: '/familyEducation'
        },
        {
          title: '课程推荐',
          path: '/courseRecommend'
        },
        {
          title: '会员专区',
          path: '/memberArea'
        },
        {
          title: '签到',
          path: '/signIn'
        }
      ])    // 菜单列表
      const searchKey = ref('产品规划') // 搜索框关键字
      const isLogin = ref(true)    // 是否登录
      const courseClassifyList = ref(null)  // 课程分类列表dom
      const toPath = (path) => {
        router.push(path)
        listenScroll()
      }
      const closeLogin = () => {
        loginShow.value = false
      }
      const openLogin = () => {
        loginShow.value = true
      }

      // 控制导航栏底部透明
      const transparent = ref(false)
      const listenScroll = () => {
        transparent.value = navTop.value && document.documentElement.scrollTop === 0
      }
      listenScroll()
      window.addEventListener('scroll', listenScroll)
      // onBeforeMount(()=>{
      //   window.removeEventListener('scroll',listenScroll)
      // })
      watch(route, (newVal) => {
        newVal.path === '/' ? navTop.value = true : navTop.value = false
        listenScroll()
      }, {
        immediate: true
      })
      return {
        courseClassifyList,
        transparent,
        isLogin,
        menuList,
        toPath,
        searchKey,
        navTop,
        route,
        openLogin,
        closeLogin,
        loginShow,
		logoWImg,
		logoBImg
      }
    }
  }
</script>

<style lang="scss" scoped>
    .transparent {
        background: transparent !important;
        color: #FFFFFF !important;
        transition: color 0.4s, background 0.4s;
        .menu-item--active:after{
            background: #FFFFFF !important;
        }
    }

    .nav-hidden {
        height: 104px;
        width: 100%;
    }

    .nav {
        transition: color 0.4s, background 0.4s;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 88;
        font-size: 14px;
        right: 0;
        color: black;
        box-sizing: border-box;
        height: 104px;
        background: #FFFFFF;
        display: flex;

        .container-menu {
            position: relative;
            display: flex;
            align-items: center;
        }
    }

    .logo {
        margin-top: 45px;
        background-color: transparent;
        height: 47px;
        transform: translateY(-25%);
    }

    .logo img {
        width: auto;
        height: 47px;

    }

    .triangle {
        width: 0;
        height: 0;
        border: 10px solid;
        border-color: transparent transparent white transparent;
    }

    .menu-list {
        height: 100%;
        margin-left: 71px;
        width: 500px;
        justify-content: space-between;
        display: flex;

        .menu-item {
            position: relative;
            height: 100%;
            display: flex;
            align-items: center;
            cursor: pointer;
        }

        .menu-item--active:after {
            content: '';
            left: 50%;
            transform: translateX(-50%);
            bottom: 25px;
            position: absolute;
            width: 15px;
            height: 4px;
            background: rgba(19, 113, 243, 1);
        }
    }

    .menu-item:nth-child(2):hover ~ .course-classify-list {
        display: flex !important;
    }

    .course-classify-list:hover {
        display: flex;
    }

    .course-classify-list-triangle {
        position: absolute;
        top: -19px;
        left: 150px;
        z-index: 999;
    }

    .course-classify-list {
        border-radius: 4px;
        position: absolute;
        display: none;
        width: 1200px;
        background: #FFFFFF;
        bottom: 0;
        z-index: 88;
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

        }
    }

    .search {
        position: relative;
        opacity: 0.8;

        input {
            padding-left: 21px;
            box-sizing: border-box;
            border: none;
            width: 248px;
            height: 48px;
            outline: none;
            color: #333333;
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
                margin-left: 18px;
            }

            .user-header {
                border: 1px solid #FFFFFF;
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
