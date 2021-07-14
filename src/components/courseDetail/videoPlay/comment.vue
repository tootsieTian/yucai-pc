<template>
    <div class="comment" @click="close()">
        <div class="comment-box" @click.stop>
            <div class="title-box">
                <div>评价课程</div>
            </div>
            <div class="content-box">
                <div class="course-box">
                    <img class="title-page" :src="require('../../../assets/icon/sucai/平行宇宙.jpg')">
                    <div class="content">
                        <div class="title">新媒体社区运营涨粉裂变</div>
                        <div class="star">
                            <el-rate
                                    v-model="rateValue"
                                    show-score
                                    disabled-void-color="rgba(0, 0, 0, 0.2)"
                                    text-color="transparent">
                            </el-rate>
                        </div>
                    </div>
                </div>
                <el-input
                        class="comment-input"
                        type="textarea"
                        :rows="10"
                        placeholder="评价一下这门课程吧…"
                        v-model="commentCourse">
                </el-input>
                <el-button class="btn" @click="submitComment" type="primary">提交评价</el-button>
            </div>
        </div>
    </div>
</template>

<script>
  import { ref,watch } from "vue";
  import {
  	ElMessage
  } from 'element-plus'
  export default {
    name: "comment",
	emits:["closeCommentBox","submit"],
    setup(props,context) {
      const commentCourse = ref('')
	   const rateValue =ref(1)
      const method = {
        close(){
          context.emit('closeCommentBox')
        },
		
	   
        submitComment(){
		
		  let obj ={
		    evaluateContent: commentCourse.value,
		    evaluateLevel: rateValue.value,
		    evaluateType: "",
		    evaluateTypeId: "",
		    evaluatorId: localStorage.getItem('user_id')
		  }
          context.emit("submit",obj)
          method.close()
        }
      }
	   watch(rateValue,(newValue, old) => {
	        if(newValue<1){
				newValue=1
			}
	      });
	  
      return {
        commentCourse,
		rateValue,
        ...method
      }
    }
  }
</script>

<style lang="scss" scoped>
    .comment {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        background:rgba(51, 51, 51, 0.3);
        width: 100vw;
        height: 100vh;

        .comment-box {
            z-index: 100;
            width: 834px;
            background: #FFFFFF;
            border: 1px solid #E0E0E0;
            border-radius: 4px;
            position: absolute;
            top: 200px;
            left: 50%;
            transform: translateX(-50%);

            .title-box {
                border-bottom: 1px solid #D3D3D3;
                display: flex;
                justify-content: space-between;
                padding: 34px 0 27px 40px;
                align-items: center;

                div:first-child {
                    font-size: 24px;
                    font-weight: 500;
                    line-height: 33px;
                    color: #333333;
                }

            }
            .content-box{
                padding: 34px 34px 27px 40px;
                .course-box{
                    display: flex;
                    .title-page{
                        border-radius: 8px;
                        width: 160px;
                        height: 90px;
                        background: #F2F2F2;
                    }
                    .content{
                        margin-left: 13px;
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 22px;
                        color: #333333;
                        .star{
                            margin-top: 26px;
                            margin-left: 4px;
                        }
                    }
                }
            }
        }
        .comment-input{
            margin-top: 26px;
        }
    }
    ::v-deep .el-textarea__inner{
        background: #F6F8FA;
        padding: 25px 18px;
        border-radius: 8px;
    }
    .btn{
        width: 180px;
        height: 50px;
        background: #1371F3;
        border-radius: 4px;
        margin-top: 34px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        font-weight: 400;
        line-height: 21px;
        color: #FFFFFF;
        padding: 0;
        border: none;
    }
</style>
