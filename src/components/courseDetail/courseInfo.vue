<template>
    <div class="container-1200">
        <!--        秒杀盒子-->
        <div class="spike-process" v-if="showSpikeProcess">
            <div class="process-box">
                <div class="title">已抢购70%</div>
                <el-progress :percentage="50"
                             :stroke-width="1"
                             class="star-progress"
                             color="#959595"
                             :show-text="false"/>
            </div>
            <div class="time-box">
                <div class="title">距离结束剩余</div>
                <div class="time">
                    00:10:08
                </div>
            </div>
        </div>
        <div class="content">
            <div class="top-box">
                <div class="time-box">
                    <div>7节课</div>
                    <div class="line"></div>
                    <div>时长2:30:05</div>
                </div>
                <div class="btn-list">
                    <div class="btn-item">
                        客服
                    </div>
                    <div class="btn-item">
                        收藏
                    </div>
                    <div class="btn-item">
                        分享
                    </div>
                </div>
            </div>
            <div class="tag-list">
                <div class="tag-item" v-for="item in 4" :key="item+'q'">
                    电商
                </div>
            </div>
            <div class="bottom-box">
                <div class="price-box">
                    <div>2人团</div>
                    <div>￥68</div>
                </div>
                <div class="btn-box">
                    <div class="customer-box">
                        <div class="header-list">
                            <div class="header-item"></div>
                        </div>
                        <div>390人已学习</div>
                    </div>
                    <el-button type="primary"
                               @click="toPath('/courseDetail/order')">立即抢购
                    </el-button>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  export default {
    name: "courseInfo",
    setup() {
      const router = useRouter()
      const showSpikeProcess = ref(true)
      const toPath = (path) => {
        router.push(path)
      }
      return {
        showSpikeProcess,
        toPath
      }
    }
  }
</script>

<style lang="scss" scoped>
    .container-1200 {
        background: #ffffff;
        transform: translateY(-57px);
        box-shadow: 0 3px 16px rgba(0, 0, 0, 0.04);
    }

    .spike-process {
        display: flex;
        padding: 0 30px;
        background: #F5F5F5;
        justify-content: space-between;
        align-items: center;
        height: 57px;

        .process-box {
            display: flex;
            align-items: center;

            .title {
                font-size: 13px;
                font-weight: 400;
                line-height: 18px;
                color: #333333;
                margin-right: 5px;
            }

            .star-progress {
                width: 158px;
                height: 5px;
            }
        }

        .time-box {
            display: flex;
            align-items: center;
            font-size: 13px;
            font-weight: 400;
            line-height: 18px;
            color: #333333;

            .title {
                margin-right: 27px;
            }
        }
    }

    .content {
        padding: 30px 30px 50px 30px;
    }

    .top-box {
        display: flex;
        justify-content: space-between;

        .time-box {
            display: flex;
            font-size: 16px;
            font-weight: 400;
            color: #999999;
            align-items: center;

            .line {
                height: 20px;
                background: #999999;
                width: 1px;
                margin: 0 14px;
            }
        }

        .btn-list {
            display: flex;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            color: #333333;

            .btn-item {
                padding-left: 25px;
            }
        }
    }

    .tag-list {
        margin-top: 9px;
        margin-bottom: 20px;
        display: flex;

        .tag-item {
            margin-right: 10px;
            font-size: 14px;
            padding: 0 10px;
            background: #C1C1C1;
            font-weight: 400;
            line-height: 20px;
            color: #868686;
        }
    }

    .bottom-box {
        display: flex;
        justify-content: space-between;

        .price-box {
            display: flex;
            align-items: center;

            div:first-child {
                font-size: 14px;
                font-family: PingFang SC;
                font-weight: 400;
                line-height: 20px;
                color: #999999;
            }

            div:last-child {
                font-size: 35px;
                font-family: DIN Alternate;
                font-weight: bold;
                line-height: 41px;
                color: #333333;
            }
        }

        .btn-box {
            display: flex;
            align-items: center;

            .customer-box {
                font-size: 14px;
                font-family: PingFang SC;
                font-weight: 400;
                line-height: 20px;
                color: #999999;
                margin-right: 50px;
            }
        }
    }
</style>
