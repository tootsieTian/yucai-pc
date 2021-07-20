<template>
	<div class="bg-hui" >
    <div class="container-main">
       <!-- <div class="title">首页-热门课程</div> -->
        <el-carousel :interval="4000">
        	<el-carousel-item v-for="item in betterObj" :key="item">
        		<div @click="goDetail(item)" class="nav-item">
        			<img :src="item.img" alt="">
        			<!-- <img src="../../../assets/image/sucai/1.png" alt=""> -->
        		</div>
        	</el-carousel-item>
        </el-carousel>
        <course-list-title
                title="热门课程"
                subtitle="好价课程 / 直击你的专业瓶颈 / 加速知识吸收"/>
        <el-row  v-show="hotcourseList.length!==0" :gutter="24">
            <el-col :span="6" v-for="item in hotcourseList" :key="item">
                <m-course-card :item="item" />
            </el-col>
        </el-row>
		<empty :type="1" v-show="hotcourseList.length==0" ></empty>
		<!-- <div style="margin-top: 57px;" class="f-a-j" >
			<el-pagination
			  background
			  layout="prev, pager, next,jumper"
			  :total="1000">
			</el-pagination>
		</div> -->
    </div>
	</div>
</template>

<script>
  import CourseListTitle from "../../../components/common/courseListTitle";
  import MCourseCard from "../../../components/courseCard/allCourseCard.vue";
  import empty from "../../../components/common/empty.vue"
  import { indexHotMore  } from "../../../api/course.js"
  import { useRouter } from 'vue-router'
  import {ref,reative,onMounted} from "vue"
  export default {
    name: "index",
    components: {MCourseCard, CourseListTitle,empty},
    setup() {
	   const hotcourseList =ref([])
	   const bgImg= ref('')
       onMounted(()=>{
			getHotcourseList()
	   })
	   
	   const router = useRouter()
	   const betterObj = ref([{
	   	img: "https://oss.yucaiedu.com/upload/20210710/b94adf2141f3cad279e49461ed6ad7b8.jpeg",
	   	type: 1,
	   	id: "1413691707089268737"
	   },{
	   	img: "https://oss.yucaiedu.com/upload/20210710/19ea6fa507705d26352c6c5a97951932.jpeg",
	   	type: 1,
	   	id: "1413694902230364162"
	   },{
	   	img: "https://oss.yucaiedu.com/upload/20210710/97bd830c537b8a7c1402f21b5979ee7a.jpeg",
	   	type: 1,
	   	id: "1413702276219449345"
	   },{
	   	img: "https://oss.yucaiedu.com/upload/20210710/effbb785fc038c6d0b6fecf52c9592a7.jpeg",
	   	type: 7,
	   	id: "1413710196889923586"
	   }, ])
	   const goDetail=(item)=>{
	   	router.push({
	   				  path:'/courseDetail',
	   				  query: {
	   				    courseId:  item.id ,
	   				    courseType: item.type 
	   				  }
	   	})
	   }
	   
	   
	   const getHotcourseList = ()=> {
	     indexHotMore({ indexType: 2 }).then((res) => {
	       hotcourseList.value = res.indexHotList
		   bgImg.value=res.indexHotList[0].img
	     })
	   }
	   return {
		   hotcourseList,
		   getHotcourseList,
		   bgImg,
		   betterObj,
		   goDetail
	   }
	   
    }
  }
</script>

<style lang="scss" scoped>
    .container-main {
        padding-bottom: 200px;
    }
     ::v-deep .number{
     	background-color: #FFFFFF!important;
		
     }
     ::v-deep .active {
     	background-color: rgba(19, 113, 243, 1)!important;
     	color: rgba(255, 255, 255, 1)!important;
     }
    .title {
        font-size: 14px;
        padding: 30px 0;
        font-weight: 400;
        line-height: 20px;
        color: #707070;
    }

    .nav-item {
        height: 280px;
        width: 100%;
        background: #E2E2E2;
		img{
		height: 280px;
		width: 100%;
	    border-radius: 20px;
		}
    }

    ::v-deep .course-list-title{
        margin-top: 53px;
        margin-bottom: 40px;
    }
    ::v-deep .m-course-card{
        margin-bottom: 38px;
    }
</style>