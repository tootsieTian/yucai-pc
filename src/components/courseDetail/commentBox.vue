<template>
    <div class="container-main">
        <div class="title">
            评价
            <div>102</div>
        </div>
        <!--星星列表-->
        <div class="score-box">
           <div class="score">{{appEvaluateNum.evaluateLevel}}</div>
            <div class="unit">星</div>
            <div class="star-list">
                <div class="star-item" v-for="item in 5" :key="item+'q'">
                    <div class="star">
                        <el-rate disabled
                                 :max="5-item+1"
                                 disabled-void-color="rgba(0, 0, 0, 0.2)"/>
                    </div>
                    <el-progress :percentage="50"
                                 :stroke-width="1"
                                 class="star-progress"
                                 color="#959595"
                                 :show-text="false"/>
                </div>
            </div>
        </div>
        <!--评论列表-->
        <div class="comment-list">
            <div class="comment-item" v-for="item in appEvaluateList" :key="item+'n'">
                <img class="user-header"
                     :src="item.evaluatorHeadImg">
                <div class="content">
                    <div class="comment-info">
                        <div class="username">{{item.evaluatorName}}
                            <el-rate disabled
                                     disabled-void-color="rgba(255, 173, 51, 1)"/>
                        </div>
                        <div class="comment-time">{{item.evaluateTime}}</div>
                    </div>
                    <div class="subtitle">学习3课时评价</div>
                    <div class="comment">{{item.evaluateContent}}</div>
                    <div class="reply" v-if="item.replyContent!=''">
                        <div class="reply-title">讲师回复：</div>
                        <div class="reply-content">{{item.replyContent}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="more">
            查看更多
        </div>
    </div>
</template>

<script>
  import { inject,defineComponent,toRefs,ref } from "vue";
  export default defineComponent( {
    name: "commentBox",
	props:{
		appEvaluateList:{
			type:Array,
			default:()=>{([])}
		},
		appEvaluateNum:{
			type:Object,
			default:()=>{({})}
		}
	
	},
    setup(props) {
       const {appEvaluateList,appEvaluateNum} = toRefs(props)
	   // 建立星星宽度数组
	   const rateWith=ref([])
	  return{
		  appEvaluateList,
		  appEvaluateNum,
		  
	  }
    }
  })
</script>

<style lang="scss" scoped>
    .container-main {
        margin-top: 30px;
        padding: 33px 36px 36px 40px;
        background: #FFFFFF;
        box-shadow: 0 3px 16px rgba(0, 0, 0, 0.04);
    }

    .title {
        display: flex;
        font-size: 22px;
        align-items: flex-end;
        font-weight: 400;
        line-height: 30px;
        color: #333333;
        margin-bottom: 24px;

        div {
            margin-left: 9px;
            font-size: 18px;
            font-weight: 400;
            line-height: 25px;
            color: #333333;
            opacity: 0.3;
        }
    }

    .score-box {
        display: flex;
        align-items: flex-end;

        .score {
            font-size: 48px;
            font-weight: 500;
            color: #333333;
        }

        .unit {
            margin-left: 9px;
            font-size: 15px;
            font-weight: 400;
            line-height: 21px;
            color: #333333;
        }

        .star-list {
            .star-item {
                height: 5px;
                align-items: center;
                margin-bottom: 4px;
                display: flex;

                .star {
                    transform: scale(0.5);
                    width: 90px;
                    display: flex;
                    justify-content: flex-end;
                }

                ::v-deep .el-rate {
                    height: unset;
                    display: flex;
                }

                ::v-deep .el-rate__icon {
                    font-size: 5px;
                }
            }
        }

        .star-progress {
            width: 173px;
            height: 5px;
        }
    }

    .comment-list {
        padding-top: 40px;
        width: 100%;

        .comment-item:not(.comment-item:last-child)::after {
            content: '';
            position: absolute;
            left: 48px;
            height: 1px;
            background: #F4F4F4;
            bottom: 0;
            right: 0;
        }

        .comment-item {
            position: relative;
            padding: 18px 0;
            display: flex;

            .user-header {
                height: 36px;
                width: 36px;
                margin-top: 6px;
                margin-right: 13px;
                border-radius: 50%;
            }

            .content {
                width: 100%;

                .comment-info {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 4px;

                    .comment-time {
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 20px;
                        color: #333333;
                        opacity: 0.3;
                    }

                    .username {
                        display: flex;
                        font-size: 15px;
                        font-weight: 400;
                        line-height: 21px;
                        color: #333333;

                        ::v-deep .el-rate {
                            margin-left: 23px;
                        }
                    }
                }

                .subtitle {
                    font-size: 14px;
                    margin-bottom: 12px;
                    font-weight: 400;
                    line-height: 20px;
                    color: #333333;
                    opacity: 0.3;
                }

                .comment {
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 20px;
                    color: #333333;
                    margin-bottom: 6px;
                }

                .reply {
                    height: 27px;
                    background: #EAEAEA;
                    width: 100%;
                    padding: 10px;
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                    font-weight: 400;
                    color: #333333;
                    box-sizing: border-box;

                    .reply-title {
                        margin-right: 7px;
                    }
                }
            }
        }
    }
    .more{
        text-align: center;
        margin-top: 20px;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: rgba(19, 113, 243, 1);
    }


</style>
