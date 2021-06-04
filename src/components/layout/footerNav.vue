<template>
    <div class="footer">
        <div class="container-main">
            <div class="line">
                <div class="logo"></div>
                <div class="about-company">
                    <div class="title">
                        关于御才文化
                    </div>
                    <div class="list">
                        <div class="item"
                             v-for="(item,index) in aboutCompanyList"
                             :key="index+'S'">
                            <span>{{ item.title }}</span>
                        </div>
                    </div>
                </div>
                <div class="customer-service">
                    <div class="title">客服</div>
                    <div class="list">
                        <div class="item"
                             v-for="(item,index) in customerServiceList"
                             :key="index+'X'">
                            <span>{{ item.title }}</span>
                        </div>
                    </div>
                </div>
                <div class="public-number">
                    <div class="title">
                        御才文化公众号
                    </div>
                    <div class="public-number-img"></div>
                </div>
            </div>

            <div class="notice">
                <div>
                    © Copyright 2016-现在   御才文化教育科技有限公司 版权所有 yucaiwenhua.com 未经允许请勿用作他途。
                </div>
                <div style="display: flex;margin-top: 25px">
                    <div>闽ICP备 1603958493</div>
                    <div>闽公安网备 2192007739194</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import {ref} from 'vue'

  export default {
    name: "footerNav",
    setup() {
      const aboutCompanyList = ref([
        {
          title: '帮助中心'
        },
        {
          title: '联系我们'
        },
        {
          title: '用户协议'
        },
        {
          title: '隐私政策'
        },
        {
          title: '意见反馈'
        }
      ])
      const customerServiceList = ref([
        {
          title: '0595-84693400'
        },
        {
          title: '（9:30-18:00）'
        },
        {
          title: '在线客服'
        },
        {
          title: '（9:30-18:00）'
        }
      ])
      return {
        aboutCompanyList,
        customerServiceList
      }
    }
  }
</script>

<style lang="scss" scoped>
    .footer {

        font-size: 16px;
        width: 100%;
        background: #E0E0E0;
        height: 517px;
        .container-main {
            position: relative;
            height: 100%;
            .top{
                display: flex;
            }
        }
    }


    .title {
        margin-top: 63px;
        margin-bottom: 32px;
        font-size: 16px;
        font-weight: 500;
        line-height: 22px;
        color: #333333;
    }

    .list {
        display: flex;
        flex-wrap: wrap;
    }

    .item {
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 41px;
        line-height: 22px;
        color: #333333;
    }

    .logo {
        width: 253px;
        height: 93px;
        background: #FFFFFF;
        margin-top: 123px;
    }

    .about-company {
        margin-left: 73px;
        .list{
            width: 328px;
        }
        .item{
            width: 164px
        }
    }
    .customer-service{
        .list{
            width: 316px;
        }
        .item{
            width: 158px;
        }
    }
    .public-number {
        margin-left: 44px;

        .public-number-img {
            width: 186px;
            height: 186px;
            background: #FFFFFF;
        }
    }
    .notice{
        padding-top: 38px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .line{
        display: flex;
        padding-bottom: 53px;
        border-bottom: 1px  solid #FFFFFF;
    }
</style>
