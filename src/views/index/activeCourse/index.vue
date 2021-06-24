<template>
	<div class="bg-hui" >
		<div class="container-main">
		   <!-- <div class="title">首页-全部课程-活动专区</div> -->
			<div class="nav-list">
				<div class="nav-item"></div>
			</div>
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
			<el-row :gutter="24">
				<el-col :span="6" v-for="item in 12" :key="item">
					<m-course-card/>
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
  import { ref,reactive } from 'vue'

  export default {
    name: "index",
    components: { MCourseCard, CourseListTitle },
    setup() {
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
        ...method
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

    .nav-list {
        height: 280px;
        width: 100%;
        background: #E2E2E2;
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
