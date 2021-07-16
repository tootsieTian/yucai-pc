<template>
    <div @click="toCourseDetail(item)" class="m-course-card">
        <img class="title-page"
             :src="item.img">
        <div class="tag" v-if="type!==''">拼团</div>
        <div class="content">
            <div class="title f-s f-a"><div>{{item.name}}</div><div class="f-a-j" @click.stop="openDialog" style="font-size: 20px;margin-top: -10px;" v-if="iscouldop" >...</div></div>
		<div class="tag-list" >#标签 #标签 </div>	
           
            <!-- <div class="bottom-box">2人团￥{{item.price}}</div> -->
			<div class=" f-s" >
				 <div class="subtitle">{{item.courseNum}}节课 ｜{{item.enjoyNum}}人已学习</div>
				<div><price :money="item.price" :fontSize="'25px'" :fontWeight="'bold'" ></price></div>
			</div>
			<div v-if="isOpenDialog" class="dialog f-c" >
				<div class="f-1 f-a-j" style="border-bottom: 1px solid #E0E0E0;" >置顶课程</div>
				<div class="f-1 f-a-j">删除课程</div>
			</div>
        </div>
    </div>
</template>

<script>
	import {
		useRouter,
		useRoute
	} from 'vue-router'
	import {ref,relative} from "vue"
	import price from "../common/price.vue"
  export default {
    name: "sCourseCard",
	components:{
		price
	},
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
		  default:()=>({
			 applyType: 1,
			 categoryId: "1413684756477423617",
			 courseId: "1413691707089268737",
			 courseNum: 1,
			 courseType: 1,
			 createDept: "-1",
			 createTime: "2021-07-10 10:50:18",
			 createUser: "1413678770337820674",
			 enjoyNum: 129,
			 id: "1413692024178651137",
			 img: "https://oss.yucaiedu.com/upload/20210710/b94adf2141f3cad279e49461ed6ad7b8.jpeg",
			 indexType: 2,
			 isDeleted: 0,
			 isExamine: 1,
			 name: "家庭教育-让孩子成为学霸",
			 price: "0.01",
			 rejectReason: null,
			 sort: 3,
			 status: 1,
			 updateTime: "2021-07-10 15:16:17",
			 updateUser: "1123598821738675201",
		  })
	  }

    },
    setup(props,contxt) {
      const {title, img,type,iscouldop,item} = props
	  const router = useRouter()
	  const roure = useRoute()
	  const isOpenDialog=ref(false)
	  const openDialog=()=>{
		 isOpenDialog.value=!isOpenDialog.value
	  }
	  const  toCourseDetail = (item)=> {
	    router.push({
	  	  path:'/courseDetail',
	  	  query: {
	  	    courseId: item.courseId==undefined ? item.id : item.courseId ,
	  	    courseType: item.courseType==undefined ? item.type : item.courseType
	  	  }
	   })
	  }
	 
      return {
        title,
        img,
        type,
		iscouldop,
		isOpenDialog,
		openDialog,
		item,
		toCourseDetail
      }
    }
  }
</script>

<style lang="scss" scoped>
    .m-course-card{
        position: relative;
        cursor: pointer;
        height: 370px;
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
        height: 237px;
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
	.tag-list{
		color:rgba(102, 102, 102, 1);
		font-size: 16px;
		margin-bottom: 10px;
	}

</style>
