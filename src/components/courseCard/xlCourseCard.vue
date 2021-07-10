<template>
    <div class="xl-course-card" :style="style">
        <div class="top-box">
            <img class="title-page" :src="item.img">
            <div class="content">
                <div class="title">
                    {{item.name}}
                </div>
                <div class="subtitle">
                    {{item.courseNum}}节课 ｜ 时长2:30:09
                </div>
                <div class="bottom-box">
                    <div>{{item.enjoyNum}}人已学习</div>
                    <div class="price-box">
                       <img :src="require('../../assets/image/common/svip.png')">
                        <div style="margin-left: 10px;" >
                            <Price  :money="item.price" :color="'rgba(234, 53, 83, 1)'" ></Price>
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
	import Price from "../common/price.vue"
  export default {
    name: "xlCourseCard",
	components:{
		Price
	},
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
      },
      item: {
        type: Number,
        default: 1
      },
      style: {
        type: Object,
        default: () => ({
          background: '#FFFFFF'
        })
      }
    },
    setup(props) {
      const { img,title,commentShow,style } = props
      return {
        img,
        title,
        commentShow,
        style
      }
    }
  }
</script>

<style lang="scss" scoped>
    .xl-course-card {
        cursor: pointer;
        position: relative;
        display: flex;
        border: 0.001rem solid #E0E0E0;
        flex-direction: column;
        width: 100%;
        border-radius: 4px;
        padding: 0 27px 0 20px;
        box-sizing: border-box;
    }
    .top-box{
        position: relative;
        display: flex;
    }
    .title-page{
        border-radius: 4px;
        position: relative;
        top: -24px;
        width: 253px;
        height: 159px;
    }
    .content{
        box-sizing: border-box;
        flex: 1;
        padding-top: 20px;
        padding-left: 27px;
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
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 400;
			line-height: 20px;
			color: #EE7F10;
			font-size: 14px;
            .price-box{
                align-items: center;
                display: flex;
                img{
                    width: 50px;
                    height: 19px;
                }
            }
        }
    }
    .comment-box{
        border-radius: 4px;
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
