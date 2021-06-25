<template>
    <div class="classify-nav">
        <div class="container-main">
            <div class="title">课程分类：</div>
            <div class="classify-list">
                <div  @click="selectSubtop(index)"   class="classify-item" :class="index==isSelectop ? 'classify-item-active' : ''" 
                     v-for="(item,index) in 4"
                     :key="4+'p'">家庭教育
                </div>
            </div>
        </div>
    </div>
    <main class="container-main">
        <div class="filter-list">
            <div @click="selectSub(index)" :class=" isSelect == index ? 'filter-item-active filter-item' :'filter-item'" v-for="(item,index) in subList" >{{item}}</div>
            
        </div>
        <el-row :gutter="24">
            <el-col v-for="item in 12"
                    :span="6"
                    :key="item+'l'">
                <m-course-card/>
            </el-col>
        </el-row>
		<div class="f-a-j" >
			<el-pagination
			  background
			  layout="prev, pager, next,jumper"
			  :total="1000">
			</el-pagination>
		</div>
		 
    </main>
</template>

<script>
  import MCourseCard from "../../../components/courseCard/sCourseCard";
  import {ref,relative} from "vue"
  export default {
    name: "index",
    components: {MCourseCard},
    setup() {
      const subList=['综合','最多购买','最新课程','价格']
	  const isSelect= ref(0)
	  const isSelectop= ref(0)
	  const selectSub = (index)=>{
		  isSelect.value=index
	  }
	  const selectSubtop = (index)=>{
		  
	  		  isSelectop.value=index
			  
	  }
	  return {
		  subList,
		  isSelect,
		  selectSub,
		  isSelectop,
		  selectSubtop
	  }
    }
  }
</script>

<style lang="scss" scoped>
     body{
		 background: #F5F5F5;
	 }
	 ::v-deep .number{
	 	background-color: #FFFFFF!important;
	 }
	 ::v-deep .active {
	 	background-color: rgba(19, 113, 243, 1)!important;
	 	color: rgba(255, 255, 255, 1)!important;
	 }
    .classify-nav {
        height: 165px;
       
        width: 100%;

        .container-main {
            display: flex;
            align-items: center;
            height: 100%;
            
            .title {
                font-size: 16px;
                font-weight: 400;
                line-height: 22px;
                color: #333333;
            }

            .classify-list {
                display: flex;

                .classify-item {
                    font-size: 16px;
                    padding: 7px;
					margin: 0 20px;
					
                    font-weight: 400;
              
                    cursor: pointer;
                    color: #333333;
                }

                .classify-item-active {
                    background: #F5F6F7;
					color: #1371F3;
                   
                }
            }
        }
    }


    .filter-list {
        display: flex;
        margin-top: 41px;
        margin-bottom: 36px;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        color: rgba(51, 51, 51, 0.5);
		.filter-item-active{
			color: rgba(19, 113, 243, 1);
		}
        .filter-item{
            cursor: pointer;
        }
        .filter-item:first-child {
            padding-right: 21px;
        }

        .filter-item:not(:first-child) {
            position: relative;
            padding: 0 21px;
        }

        .filter-item:not(:first-child):before {
            content: '';
            width: 1px;
            height: 13px;
            background: #DBDBDB;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    main {
        padding-bottom: 100px;
    }

    ::v-deep .m-course-card {
        margin-bottom: 38px;
    }
</style>
