<template>
    <div class="m-course-card">
        <img class="title-page"
             :src="img">
        <div class="tag" v-if="type!==''">拼团</div>
        <div class="content">
            <div class="title">10000倍工作效率</div>
            <div class="subtitle">7节课 ｜390人已学习</div>
            <div class="bottom-box">2人团￥68.00</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "mCourseCard",
    props: {
      title: {
        type: String,
        default: '100000倍工作效率'
      },
      img: {
        type: String,
        default: require('../../assets/icon/sucai/平行宇宙.jpg')
      },
      type: {
        type: String,
        default: ''
      }
    },
    setup(props) {
      const {title, img,type} = props
      return {
        title,
        img,
        type
      }
    }
  }
</script>

<style lang="scss" scoped>
    .m-course-card{
        position: relative;
        cursor: pointer;
        height: 320px;
        width: 100%;
        background: #FAFAFA;
    }
    .title-page{
        height: 187px;
        width: 100%;
    }
    .content{
        padding: 17px 14px;
        .title{
            font-size: 20px;
            font-weight: 500;
            line-height: 28px;
            color: #333333;
            margin-bottom: 10px;
        }
        .subtitle{
            margin-bottom: 7px;
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
            color: #999999;
        }
        .bottom-box{
            font-size: 27px;
            font-family: DIN Alternate;
            font-weight: bold;
            line-height: 31px;
            color: #333333;
        }
    }
    .tag{
        position: absolute;
        top: 0;
        left: 0;
        width: 78px;
        height: 40px;
        background: #F7F7F7;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>
