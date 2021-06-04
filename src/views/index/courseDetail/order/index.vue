<template>
    <div class="container-body">
        <div class="title-box">
            <div class="title">确认订单信息</div>
            <div class="subtitle">请在30分钟内付款，逾期订单将被取消</div>
        </div>
        <div class="order-box">
            <div class="user-info">
                <img :src="require('../../../../assets/icon/sucai/平行宇宙.jpg')"
                     class="user-header"
                >
                <div class="username">薛定谔的狗</div>
            </div>
            <div class="course-box">
                <img :src="require('../../../../assets/icon/sucai/平行宇宙.jpg')"
                     class="title-page">
                <div class="content">
                    <div class="title">100倍工作效率</div>
                    <div class="subtitle">7节课 ｜390人已学习</div>
                    <div class="price">68.00</div>
                </div>
            </div>
            <div class="plate-title">支付方式</div>
            <div class="plate-box">
                <div class="plate-item"
                     v-for="item in payTypeList"
                     @click="plateItemClick(item)">
                    <div :class="{'plate-item--active':item===selectPayType.value}"></div>
                    {{item.title}}
                </div>
            </div>
            <div class="buy-box">
                <div class="all-price"></div>
                <div class="coupon-price"></div>
                <div class="score-price"></div>
                <div class="need-price"></div>
                <div class="buy-btn">立即支付</div>
            </div>
        </div>
    </div>
</template>

<script>
  import { reactive } from 'vue'

  export default {
    name: "index",
    setup() {
      const selectPayType = reactive({})
      const payTypeList = reactive([
        {
          title: '支付宝支付'
        },
        {
          title: '微信支付'
        }
      ])
      const method = {
        plateItemClick(item) {
          selectPayType.value = item
        }
      }
      method.plateItemClick(payTypeList[0])
      return {
        selectPayType,
        payTypeList,
        ...method
      }
    }
  }
</script>

<style lang="scss" scoped>
    .title-box {
        display: flex;
        margin: 58px 0 47px 11px;

        .title {
            font-size: 24px;
            font-weight: 500;
            line-height: 33px;
            color: #333333;
            margin-right: 10px;
        }

        .subtitle {
            margin-top: 8px;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            color: #707070;
            opacity: 0.6;
        }
    }

    .order-box {
        position: relative;
        background: #F5F5F5;
        padding: 25px 30px 344px 30px;
        margin-bottom: 50px;
        .user-info {
            display: flex;
            align-items: center;
            margin-bottom: 25px;

            .user-header {
                height: 35px;
                width: 35px;
                border-radius: 50%;
                margin-right: 17px;
            }

            .username {
                font-size: 14px;
                font-weight: 400;
                line-height: 20px;
                color: #707070;
            }
        }

        .course-box {
            padding: 25px;
            display: flex;
            background: #ffffff;
            margin-bottom: 60px;

            .title-page {
                width: 298px;
                height: 155px;
                margin-right: 40px;
            }

            .content {
                margin-top: 19px;
            }

            .title {
                font-size: 24px;
                font-weight: 500;
                line-height: 33px;
                color: #333333;
                margin-bottom: 13px;
            }

            .subtitle {
                font-size: 16px;
                font-weight: 400;
                line-height: 22px;
                color: #999999;
                margin-bottom: 18px;
            }

            .price {
                font-size: 27px;
                font-family: DIN Alternate;
                font-weight: bold;
                line-height: 31px;
                color: #333333;
            }
        }

        .plate-title {
            margin-bottom: 28px;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            color: #707070;
        }

        .plate-box {
            display: flex;

            .plate-item{
                cursor: pointer;
                display: flex;
                align-items: center;
                margin-right: 26px;
                font-size: 14px;
                font-weight: 400;
                line-height: 20px;
                color: #707070;
                width: 273px;
                height: 93px;
                background: #FFFFFF;
                div:first-child {
                    margin-left: 37px;
                    margin-right: 23px;
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    background: #EFEFEF;
                }
                .plate-item--active{
                    background: black !important;
                }
            }

        }

        .buy-box{
            position: absolute;
            bottom: 55px;
            right: 78px;
            .buy-btn{
                width: 228px;
                height: 59px;
                background: #FFFFFF;
            }
        }
    }
</style>
