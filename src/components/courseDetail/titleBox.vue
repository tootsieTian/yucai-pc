<template>
    <div class="title-box">
        <div class="title">
            {{title}}
        </div>
        <div class="teacher-info">
            <img :src="url">
            <div class="name">{{name}}</div>
            <div class="line"></div>
            <div class="subtitle">{{subtitle}}</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "titleBox",
    props: {
      title: {
        type: String,
        default: '告别社交恐惧系列套餐'
      },
      url: {
        type: String,
        default: require('../../assets/icon/sucai/平行宇宙.jpg')
      },
      name: {
        type: String,
        default: '米卡'
      },
      type: {
        type: String,
        default: ''
      },
      subtitle: {
        type: String,
        default: '从事新媒体运营10年。'
      },
	  item:{
	  		  type:Object,
	  		  default:()=>({})
	  }
	  
    },
    setup(props) {
      const {title, url, name, type,subtitle,} = props
      return {
  //       title,
  //       url,
  //       type,
  //       subtitle,
		// name
		
      }
    }
  }
</script>

<style lang="scss" scoped>
    .title-box {
        height: 358px;
        background: #E2E2E2;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        .title{
            margin-top: 110px;
            font-size: 49px;
            font-weight: 500;
            line-height: 69px;
            color: #333333;
            margin-bottom: 24px;
        }
        .teacher-info{
            display: flex;
            align-items: center;
            height: 40px;
            img{
                border-radius: 50%;
                width: 40px;
                height: 40px;
            }
            .name{
                padding: 0 12px;
                font-size: 15px;
                font-weight: 400;
                line-height: 21px;
                color: #333333;
            }
            .line{
                width: 1px;
                height: 12px;
                background: #707070;
            }
            .subtitle{
                margin-left: 12px;
                font-size: 13px;
                font-weight: 400;
                line-height: 18px;
                color: #333333;
                opacity: 0.4;
            }
        }
    }
</style>
