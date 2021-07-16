<template>
	<div class="bg-hui" >
    <div class="user-box">
        <div class="container-main">
            <div class="left">
                <div class="title-box">
                    <div class="title">学习中心</div>
                   
                </div>
                   <div class="subtitle">知识的价值不在于占有，而在于使用。</div>
            </div>
            <div class="right">
                <div class="course-info-item">
                    <div class="title">全部课程</div>
                    <div class="number">8</div>
                </div>
                <div class="course-info-item">
                    <div class="title">付费课</div>
                    <div class="number">2</div>
                </div>
                <div class="course-info-item">
                    <div class="title">免费课</div>
                    <div class="number">6</div>
                </div>
            </div>
        </div>
    </div>
    <main class="container-main">
        <div class="calendar-box">
            <div class="number-box">
                <div class="f-s f-a" >
					<div class="f-a-j" ><img src="../../assets/icon/sucai/17.png" style="height: 34px; margin-right: 10px;"  >薛定谔的猫</div>
					<div class="f-a-j" style="margin-right: 24px; margin-top: 0;color: rgba(255, 255, 255, 0.8);" >今天共<span style="margin: 0 5px; font-size: 26px;color: #FFFFFF;" >0</span>节课</div>
				</div>
                <div>敬请期待...</div>
            </div>
            <div class="calendar">
                <calendar/>
            </div>
        </div>
        <div class="course-box">
            <div class="title">付费课</div>
			<s-course-card :isdelete="true" style="padding: 0px;" :historyList="obj" > </s-course-card>
          <!--  <el-row :gutter="20">
                <el-col :span="8" v-for="item in 5" class="course-item">
                    
                </el-col>
            </el-row> -->
            <div class="title" style="margin-top: 30px">付费课</div>
			 <s-course-card  :isdelete="true" style="padding: 0px;" :historyList="obj"  />
          <!--  <el-row :gutter="20">
                <el-col :span="8" v-for="item in 5" class="course-item">
                   
                </el-col>
            </el-row> -->
        </div>
    </main>
	</div>
</template>

<script>
  import { ref, reactive } from 'vue'
  import Calendar from "../../components/study/calendar";
  import SCourseCard from "../../components/personal/browHistory/historyItem.vue";

  export default {
    name: "index",
    components: { SCourseCard, Calendar },
    setup() {
      const date = new Date()
      const obj =ref([ {
		  courseId: "1413691707089268737",
		  courseNum: 1,
		  id: "1415952147007987713",
		  img: "https://oss.yucaiedu.com/upload/20210710/b94adf2141f3cad279e49461ed6ad7b8.jpeg",
		  name: "家庭教育-让孩子成为学霸",
		  progress: 0,
		  type: 1,
	  },{
		  courseId: "1413691707089268737",
		  courseNum: 1,
		  id: "1415952147007987713",
		  img: "https://oss.yucaiedu.com/upload/20210710/b94adf2141f3cad279e49461ed6ad7b8.jpeg",
		  name: "家庭教育-让孩子成为学霸",
		  progress: 0,
		  type: 1,
	  }])

      return {
		  obj
	  }
    }
  }
</script>

<style lang="scss" scoped>

    .user-box {
        height: 258px;
        background: #F5F5F5;
        background-image: url(../../assets/image/study/bg.png);
	    background-size: 100%;
        .container-main {
            display: flex;
            justify-content: space-between;
            padding: 60px 80px 50px 0px;

            .left {
                .title-box {
                    display: flex;
                    align-items: flex-end;

                    .title {
                        font-size: 34px;
                        font-weight: 500;
                        line-height: 42px;
                        color: #FFFFFF;
                       
                    }

                    
                }
				.subtitle {
				    font-size: 14px;
				    font-weight: 400;
				    line-height: 20px;
				    color: #FFFFFF;
				    opacity: 0.8;
					margin-top: 9px;
				}

                .user-info {
                    margin-top: 27px;
                    display: flex;
                    align-items: center;

                    .user-header {
                        border-radius: 50%;
                        width: 44px;
                        height: 44px;
                        margin-right: 16px;
                    }
                }
            }

            .right {
                display: flex;

                .course-info-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-left: 90px;

                    .title {
                        margin-top: 20px;
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 22px;
                        color: rgba(255, 255, 255, 0.7);
                        opacity: 0.4;
                        margin-bottom: 22px;
                    }

                    .number {
                        font-size: 25px;
                        font-weight: 400;
                        line-height: 36px;
                        color: rgba(255, 255, 255, 1);
                    }
                }
            }
        }
    }

    main {
        margin-bottom: 300px;
        transform: translateY(-40px);
        display: flex;

        .calendar-box {
            height: fit-content;
            padding: 44px 20px 16px 20px;
            width: 395px;
            box-sizing: border-box;
            background: #ffffff;
            margin-right: 18px;
            box-shadow: 0px 3px 10px rgba(191, 191, 191, 0.16);
           border-radius: 4px 4px 10px 10px;
            .number-box {
                width: 355px;
                height: 100px;
                background: linear-gradient(116deg, #FFB800 0%, #FF9201 100%);
                box-shadow: 0px 5px 10px rgba(255, 193, 100, 0.55);
                opacity: 1;
                border-radius: 12px;
                padding-left: 13px;
				padding-top: 10px;
                div:first-child {
                    font-size: 13px;
                    line-height: 20px;
                    color: #FFFFFF;
					font-weight: bold;
                   
                }

                div:last-child {
                    font-size: 17px;
                    font-weight: bold;
                    line-height: 24px;
                    color: #FFFFFF;
					font-weight: 600;
                    
					margin-top: 20px;
                }
            }

            .calendar {
                margin-top: 45px;
            }
        }

        .course-box {
            flex: 1;
            background: #ffffff;
            padding: 50px 35px 50px 50px;
            box-sizing: border-box;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
 
            .title {
                font-size: 26px;
                font-weight: 500;
                line-height: 37px;
                color: #333333;
                margin-bottom: 40px;
            }

            .course-item {
                margin-bottom: 30px;
            }
        }
    }
</style>
