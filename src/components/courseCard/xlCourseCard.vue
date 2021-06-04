<template>
    <div class="xl-course-card">
        <div class="top-box">
            <img class="title-page" :src="img">
            <div class="content">
                <div class="title">
                    {{title}}
                </div>
                <div class="subtitle">
                    7节课 ｜ 时长2:30:09
                </div>
                <div class="bottom-box">
                    <div>390人已学习</div>
                    <div class="price-box">
                        SVIP免费
                        <div>
                            ￥68.00
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="comment-box" v-if="commentShow">
            <div class="user-info">
                <img :src="img">
                <div class="username">小御才</div>
            </div>
            <div class="comment-content">
                课程不错，讲课思路清晰详细，授课方式很好，赞一个
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "xlCourseCard",
    props: {
      img: {
        type: String,
        default: require('../../assets/icon/sucai/平行宇宙.jpg')
      },
      title: {
        type: String,
        default: '100倍工作效率',
      },
      commentShow:{
        type: Boolean,
        default: false
      }
    },
    setup(props) {
      const { img,title,commentShow } = props
      return {
        img,
        title,
        commentShow
      }
    }
  }
</script>

<style lang="scss" scoped>
    .xl-course-card {
        cursor: pointer;
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        background: #F5F5F5;
        padding: 0 27px 0 20px;
        box-sizing: border-box;
    }
    .top-box{
        position: relative;
        display: flex;
    }
    .title-page{
        position: relative;
        top: -24px;
        width: 253px;
        height: 159px;
    }
    .content{
        margin-top: 20px;
        margin-left: 27px;
        .title{
            font-size: 20px;
            font-weight: 500;
            line-height: 28px;
            color: #333333;
            margin-bottom: 12px;
        }
        .subtitle{
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
            color: #999999;
            margin-bottom: 14px;
        }
        .bottom-box{
            font-size: 16px;
            font-weight: 400;
            display: flex;
            justify-content: space-between;
            .price-box{
                display: flex;
            }
        }
    }
    .comment-box{
        margin-bottom: 20px;
        box-sizing: border-box;
        height: 100px;
        padding: 18px 20px 20px 20px;
        background: #FFFFFF;
        .user-info{
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            img{
                border-radius: 50%;
                width: 24px;
                height: 24px;
                margin-right: 12px;
            }
            .username{
                font-size: 12px;
                font-weight: 400;
                line-height: 17px;
                color: #999999;
            }
        }
        .comment-content{
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
            color: #333333;
        }
    }
</style>
