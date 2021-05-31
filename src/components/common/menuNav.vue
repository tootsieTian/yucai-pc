<template>
    <div class="nav">
        <div class="container-1430">
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
            <div class="search">

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
      ])
      const toPath = (path) => {
        router.push(path)
      }
      return {
        menuList,
        toPath
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
        align-items: center;
        justify-content: center;

        .container-1430 {
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
</style>
