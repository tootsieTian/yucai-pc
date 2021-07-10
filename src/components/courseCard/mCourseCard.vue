<template>
    <div class="l-course-card">
        <img class="title-page"
             :src="item.img">
        <div class="content">
            <div class="title">
                {{item.name}}
            </div>
            <div class="subtitle">
                {{item.courseNum}}节课 ｜ 时长2:30:09 ｜{{item.enjoyNum}}人已学习
            </div>
            <div class="bottom-box">
                <div>
                    好评率100%
                </div>
                <div>
                    SVIP免费
                    ￥{{item.price}}
                </div>
            </div>
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
	  item:{
		  type:Object,
		  default:()=>({})
	  }
    },
    setup(props) {
      const {title, img,item} = props
      return {
        title,
        img,
		item
      }
    }
  }
</script>

<style lang="scss" scoped>
    .l-course-card {
        height: 369px;
        cursor: pointer;
        width: 100%;
        background: #FAFAFA;
    }

    .title-page {
        height: 219px;
        width: 100%;
        background: #EDEDED;
    }
    .content{
        padding: 27px 17px 22px 20px;
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
            margin-bottom: 10px;
        }
        .bottom-box{
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 14px;
            color: #333333;
            font-weight: 500;
            line-height: 20px;
        }
    }

</style>
