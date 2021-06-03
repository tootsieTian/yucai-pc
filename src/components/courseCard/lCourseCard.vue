<template>
    <div class="l-course-card">
        <img class="title-page"
             :src="require('../../assets/icon/sucai/平行宇宙.jpg')"/>
        <div class="content">
            <div class="title">100倍工作效率</div>
            <div class="subtitle">7节课 ｜390人已学习</div>
            <div class="money">￥68.00</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "lCourseCard",
    setup() {

    }
  }
</script>

<style lang="scss" scoped>
    .l-course-card{
        height: 157px;
        background: #FAFAFA;
        display: flex;
        .title-page{
            width: 284px;
        }
        .content{
            margin-top: 30px;
            margin-left: 26px;
            .title{
                font-size: 20px;
                font-weight: 500;
                line-height: 28px;
                color: #333333;
                margin-bottom: 10px;
            }
            .subtitle{
                font-size: 16px;
                font-weight: 400;
                line-height: 22px;
                color: #999999;
                margin-bottom: 8px;
            }
            .money{
                font-size: 27px;
                font-family: DIN Alternate;
                font-weight: bold;
                line-height: 31px;
                color: #333333;
            }
        }
    }
</style>
