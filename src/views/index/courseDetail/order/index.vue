<template>
    <div class="container-1200">
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
        </div>
    </div>
</template>

<script>
  export default {
    name: "index",
    setup() {

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

        background: #F5F5F5;
        padding: 25px 30px 53px 30px;

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
    }
</style>
