<template>
    <div class="container-main">
        <div class="title">课程推荐</div>
        <el-row :gutter="24">
            <el-col :span="6" v-for="item in loveList" :key="item+'x'">
                <m-course-card/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  import MCourseCard from "../courseCard/sCourseCard";
  export default {
    name: "courseRecommend",
	props:{
		loveList:{
			type:Array,
			default:()=>{([])}
		}
	},
    components: {MCourseCard},
    setup(props) {
      const {loveList}=props
	  return{
		  loveList
	  }
    }
  }
</script>

<style lang="scss" scoped>
    .container-main{
        padding-top: 92px;
    }
    .title{
        font-size: 22px;
        font-weight: 400;
        line-height: 30px;
        color: #333333;
        margin-bottom: 40px;
    }

    ::v-deep .m-course-card{
        margin-bottom: 38px;
    }

</style>
