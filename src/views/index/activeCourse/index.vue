<template>
	<div class="bg-hui" >
		<div class="container-main">
		   <!-- <div class="title">首页-全部课程-活动专区</div> -->
			<el-carousel :interval="4000">
				<el-carousel-item v-for="item in betterObj" :key="item">
					<div @click="goDetail(item)" class="nav-item">
						<img :src="item.img" alt="">
						<!-- <img src="../../../assets/image/sucai/1.png" alt=""> -->
					</div>
				</el-carousel-item>
			</el-carousel>
			<course-list-title
					title="活动课程"
					:show-more="false"
					subtitle="必修的刚需课程&硬核技能 / 精心自制的学习视频 / 一次付费随时观看"/>
			<div class="active-list">
				<div :class="{'active-item':true,'active-item--active': selectActiveItem===item.key}"
					 @click="activeItemClick(item.key)"
					 v-for="item in activeList">
					{{item.name}}
				</div>
			</div>
			<el-row v-show="selectActiveItem=='joinGroup'" :gutter="24">
				<el-col :span="6" v-for="item in hotcourseList" :key="index+'z'">
					<m-course-card :item="item"  />
				</el-col>
			</el-row>
			<empty :type="1" v-show="selectActiveItem=='spike'" ></empty>
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
  import { useRouter } from 'vue-router'
  import { ref,reactive } from 'vue'
  import { indexHotMore  } from "../../../api/course.js"

  export default {
    name: "index",
    components: { MCourseCard, CourseListTitle,empty },
    setup() {
	  const router = useRouter()
	  const hotcourseList =ref([])
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
	    indexHotMore({ indexType: 4 }).then((res) => {
	      hotcourseList.value = res.activeList
		  console.log(res)
	    })
	  }
	   
	  getHotcourseList()   
      const activeList = reactive([
        {
          name: '拼团',
          key: 'joinGroup'
        },
        {
          name: '秒杀',
          key: 'spike'
        }
      ])
      const selectActiveItem = ref('joinGroup')
      const method = {
        activeItemClick(key){
          selectActiveItem.value = key
		 
        }
      }
      return {
        activeList,
        selectActiveItem,
        ...method,
		betterObj,
		goDetail,
		hotcourseList
      }
    }
  }
</script>

<style lang="scss" scoped>
	.bg-hui{
		background-color: rgba(245, 246, 246, 1);
	}
    .container-main {
        padding-bottom: 200px;
    }

    .title {
        font-size: 14px;
        padding: 30px 0;
        font-weight: 400;
        line-height: 20px;
        color: #707070;
    }

    .nav-item {
		img{
			height: 280px;
			width: 100%;
			background: #E2E2E2;
			border-radius: 20px;
		}
       
    }
    ::v-deep .number{
    	background-color: #FFFFFF!important;
    }
	::v-deep .active {
		background-color: rgba(19, 113, 243, 1)!important;
		color: rgba(255, 255, 255, 1)!important;
	}
    ::v-deep .course-list-title {
        margin-top: 53px;
        margin-bottom: 34px;
    }

    ::v-deep .m-course-card {
        margin-bottom: 38px;
    }

    .active-list {
        display: flex;
        margin-bottom: 30px;

        .active-item {
            cursor: pointer;
            height: 45px;
            font-size: 20px;
            font-weight: 400;
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 28px;
            color: #333333;
            opacity: 0.3;
           
            margin: 0 20px;
			
        }

        .active-item--active {
            // background: #EDEDED;
            opacity: 1;
			border-bottom: 3px solid rgba(19, 113, 243, 1);
			color: rgba(19, 113, 243, 1);
            border-radius: 4px;
        }
    }
</style>
