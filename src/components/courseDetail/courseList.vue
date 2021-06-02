<template>
    <div class="container-1200">
        <el-tabs v-model="tabActive"
                 @tab-click="tabClick">
            <el-tab-pane label="课程" name="course"/>
            <el-tab-pane label="评价" name="comment"/>
            <el-tab-pane label="介绍" name="explain"/>
            <el-tab-pane label="推荐" name="recommend"/>
        </el-tabs>
        <div class="course-video-list">
            <div class="course-video-item" v-for="item in 6" :key="item+'p'">
                <div class="left">
                    <div class="title">第一章</div>
                    <div class="circle"></div>
                    <div class="content">如何向运营要利润</div>
                </div>
                <div class="right">
                    <div class="look">
                        试看一分钟
                    </div>
                    <div class="time">10分钟</div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    name: "courseList",
    props: {
      tabActive: {
        type: String,
        default: ''
      }
    },
    setup(props, context) {
      const tabActive = ref(props.tabActive)
      const tabClick = (tab) => {
        context.emit('tabClick', tab)
      }
      const testClick = () => {
        console.log(tabActive.value)
      }
      return {
        tabActive,
        tabClick,
        testClick
      }
    }
  }
</script>

<style lang="scss" scoped>
    .container-1200 {
        box-sizing: border-box;
        padding-top: 8px;
        padding-bottom: 40px;
        background: #FFFFFF;
        box-shadow: 0 3px 16px rgba(0, 0, 0, 0.04);
    }
    ::v-deep .el-tabs{
        padding: 0 40px;
        .el-tabs__header {
            margin: 0;
        }
        .el-tabs__nav-scroll{
            display: flex;
            justify-content: center;

        }
        .el-tabs__nav{
            height: 74px;
            display: flex;
            align-items: center;
            .el-tabs__item{
                padding: 0 33px;
                font-size: 16px;
                font-weight: 500;
                color: #333333;
            }
            .el-tabs__active-bar{
                height: 4px;
                background: #B9B9B9;
            }
        }
    }

    .course-video-list{
        padding-top: 45px;
        .course-video-item{
            padding: 15px 40px;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: space-between;
            .right,.left{
                display: flex;
                align-items: center;
            }
            .title{
                font-size: 17px;
                font-weight: 400;
                line-height: 24px;
                margin-right: 80px;
            }
            .circle{
                width: 18px;
                height: 18px;
                background: #E3E3E3;
                border-radius: 50%;
                margin-right: 10px;
            }
            .content{
                font-size: 17px;
                font-family: PingFang SC;
                font-weight: 400;
                line-height: 24px;
                color: #333333;
            }
            .look{
                font-size: 14px;
                font-weight: 400;
                line-height: 26px;
                color: #999999;
                background: #EDEDED;
                padding: 0 5px;
                margin-right: 14px;
            }
            .time{
                font-size: 15px;
                font-weight: 400;
                line-height: 21px;
                color: #666666;
            }

        }
        .course-video-item:after{
            content: '';
            position: absolute;
            left: 0;
            width: 6px;
            top: 50%;
            transform: translateY(-50%);
            height: 19px;
            background: #D9D9D9;
        }
    }

</style>
