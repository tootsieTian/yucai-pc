<template>
    <div class="container-1200">
        <div class="title">
            评价
            <div>102</div>
        </div>
        <div class="score-box">
            <div class="score">4.9</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "commentBox",
    setup() {

    }
  }
</script>

<style lang="scss" scoped>
    .container-1200{
        margin-top: 30px;
        padding: 33px 36px 36px 40px;
        background: #FFFFFF;
        box-shadow: 0 3px 16px rgba(0, 0, 0, 0.04);
    }
    .title{
        display: flex;
        font-size: 22px;
        align-items: flex-end;
        font-weight: 400;
        line-height: 30px;
        color: #333333;
        margin-bottom: 24px;
        div{
            margin-left: 9px;
            font-size: 18px;
            font-weight: 400;
            line-height: 25px;
            color: #333333;
            opacity: 0.3;
        }
    }
    .score-box{
        display: flex;
        .score{
            font-size: 48px;
            font-family: PingFang SC;
            font-weight: 500;
            line-height: 67px;
            color: #333333
        }
    }
</style>
