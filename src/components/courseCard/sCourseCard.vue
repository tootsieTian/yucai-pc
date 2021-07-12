<template>
    <div class="m-course-card">
        <img class="title-page"
             :src="item.img">
        <div class="tag" v-if="type!==''">拼团</div>
        <div class="content">
            <div class="title f-s f-a"><div>{{item.name}}</div><div class="f-a-j" @click="openDialog" style="font-size: 20px;margin-top: -10px;" v-if="iscouldop" >...</div></div>
            <div class="subtitle">{{item.courseNum}}节课 ｜{{item.enjoyNum}}人已学习</div>
            <div class="bottom-box">2人团￥{{item.price}}</div>
			<div v-if="isOpenDialog" class="dialog f-c" >
				<div class="f-1 f-a-j" style="border-bottom: 1px solid #E0E0E0;" >置顶课程</div>
				<div class="f-1 f-a-j">删除课程</div>
			</div>
        </div>
    </div>
</template>

<script>
	import {ref,relative} from "vue"
  export default {
    name: "sCourseCard",
    props: {
      title: {
        type: String,
        default: '100000倍工作效率'
      },
	  iscouldop:{
		  type:Boolean,
		  default:false
	  },
      img: {
        type: String,
        default: require('../../assets/icon/sucai/平行宇宙.jpg')
      },
      type: {
        type: String,
        default: ''
      },
	  item:{
		  type:Object,
		  default:()=>({})
	  }

    },
    setup(props,contxt) {
      const {title, img,type,iscouldop,item} = props
	  const isOpenDialog=ref(false)
	  const openDialog=()=>{
		 isOpenDialog.value=!isOpenDialog.value
	  }
	  console.log(props)
      return {
        title,
        img,
        type,
		iscouldop,
		isOpenDialog,
		openDialog,
		item
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
        border: 1px solid #E0E0E0;
        overflow: hidden;
        border-radius: 4px;
        background: #FFFFFF;
    }
	.dialog{
		position: absolute;
		padding: 0 4px;
		box-sizing: border-box;
		top: 66px;
		right: -116px;
		width: 139px;
		height: 81px;
		background: #F2F2F2;
		opacity: 1;
		border-radius: 4px;
		z-index: 99;
		color: #333333;
		font-size: 12px;
	}
    .title-page{
        height: 187px;
        width: 100%;
    }
    .content{
        padding: 17px 14px;
		position: relative;
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
