<template>
	<div class="bg-hui" >
    <div class="container-main">
       <!-- <div class="title">首页-热门课程</div> -->
        <div class="nav-list" >
            <div class="nav-item">
				<img :src="bgImg" alt="">
			</div>
        </div>
        <course-list-title
                title="套餐课程"
                subtitle="好价课程 / 直击你的专业瓶颈 / 加速知识吸收"/>
        <el-row :gutter="24">
            <el-col :span="6" v-for="item in hotcourseList" :key="item">
                <m-course-card :item="item" />
            </el-col>
        </el-row>
		<div style="margin-top: 57px;" class="f-a-j" >
			<el-pagination
			  background
			  layout="prev, pager, next,jumper"
			  :total="1000">
			</el-pagination>
		</div>
    </div>
	</div>
</template>

<script>
  import CourseListTitle from "../../../components/common/courseListTitle";
  import MCourseCard from "../../../components/courseCard/sCourseCard";
  import { indexHotMore  } from "../../../api/course.js"
  import {ref,reative,onMounted} from "vue"
  export default {
    name: "index",
    components: {MCourseCard, CourseListTitle},
    setup() {
	   const hotcourseList =ref([])
	   const bgImg= ref('')
       onMounted(()=>{
			getHotcourseList()
	   })
	   
	   
	   const getHotcourseList = ()=> {
	     indexHotMore({ indexType: 2 }).then((res) => {
	       hotcourseList.value = res.indexHotList
		   bgImg.value=res.indexHotList[0].img
	     })
	   }
	   return {
		   hotcourseList,
		   getHotcourseList,
		   bgImg
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

    .nav-list {
        height: 280px;
        width: 100%;
        background: #E2E2E2;
		img{
		height: 280px;
		width: 100%;	
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