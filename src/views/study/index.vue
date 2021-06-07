<template>
    <div class="user-box">
        <div class="container-main">
            <div class="left">
                <div class="title-box">
                    <div class="title">学习中心</div>
                    <div class="subtitle">知识的价值不在于占有，而在于使用。</div>
                </div>
                <div class="user-info">
                    <img class="user-header" :src="require('../../assets/icon/sucai/平行宇宙.jpg')"/>
                    <div class="username">薛定谔的鳄鱼</div>
                </div>
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
                <div>今天共0节课</div>
                <div>敬请期待</div>
            </div>
            <div class="calendar">
                <calendar/>
            </div>
        </div>
        <div class="course-box">
            <div class="title">付费课</div>
            <el-row :gutter="20">
                <el-col :span="8" v-for="item in 5" class="course-item">
                    <s-course-card/>
                </el-col>
            </el-row>
            <div class="title" style="margin-top: 30px">付费课</div>
            <el-row :gutter="20">
                <el-col :span="8" v-for="item in 5" class="course-item">
                    <s-course-card/>
                </el-col>
            </el-row>
        </div>
    </main>
</template>

<script>
  import { ref, reactive } from 'vue'
  import Calendar from "../../components/study/calendar";
  import SCourseCard from "../../components/courseCard/sCourseCard";

  export default {
    name: "index",
    components: { SCourseCard, Calendar },
    setup() {
      const date = new Date()


      return {}
    }
  }
</script>

<style lang="scss" scoped>
    .user-box {
        height: 258px;
        background: #F5F5F5;

        .container-main {
            display: flex;
            justify-content: space-between;
            padding: 60px 80px 50px 60px;

            .left {
                .title-box {
                    display: flex;
                    align-items: flex-end;

                    .title {
                        font-size: 30px;
                        font-weight: 500;
                        line-height: 42px;
                        color: #333333;
                        margin-right: 22px;
                    }

                    .subtitle {
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 20px;
                        color: #707070;
                        opacity: 0.4;
                    }
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
                        color: #333333;
                        opacity: 0.4;
                        margin-bottom: 22px;
                    }

                    .number {
                        font-size: 25px;
                        font-weight: 400;
                        line-height: 36px;
                        color: #333333;
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
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

            .number-box {
                height: 102px;
                background: #F3F3F3;
                padding-left: 13px;

                div:first-child {
                    font-size: 14px;
                    line-height: 20px;
                    color: #6A6A6A;
                    margin-top: 21px;
                    margin-bottom: 19px;
                }

                div:last-child {
                    font-size: 17px;
                    font-weight: bold;
                    line-height: 24px;
                    color: #6A6A6A;
                    opacity: 0.6;
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
