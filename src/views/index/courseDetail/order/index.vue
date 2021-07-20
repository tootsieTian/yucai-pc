<template>
	<div class="hui-bg" >
    <div class="container-main">
        <div class="title-box">
            <div class="title">确认订单信息</div>
            <div class="subtitle">请在30分钟内付款，逾期订单将被取消</div>
        </div>
        <div class="order-box">
            <div class="user-info">
                <img :src="userInfo.avatar"
                     class="user-header"
                >
                <div class="username">{{userInfo.userName}}</div>
            </div>
            <div class="course-box">
                <img :src="courseInfo.courseImg"
                     class="title-page">
                <div class="content">
                    <div class="title">{{courseInfo.courseName}}</div>
                    <div class="subtitle">3节课 ｜{{courseInfo.defaultEnjoyNum}}人已学习</div>
                    <div class="price">{{courseInfo.coursePrice}}</div>
                </div>
            </div>
            <div class="coupon-box">
                <div class="plate-title">优惠券：</div>
                <div class="coupon-list f-s">请选择优惠券<div class="sanjiao" ></div></div>
            </div>
            <div class="score-box">
                <div class="plate-title">积分抵扣</div>
                <div class="score-list f-s">70积分可抵扣7元 <img src="../../../../assets/image/course/ordergou.png" style="width: 16px" alt=""></div>
            </div>

            <div class="plate-title">支付方式</div>
            <div class="plate-box">
                <div class="plate-item"
				     :class="item===selectPayType.value ? 'plate-item-active':'' "
                     v-for="item in payTypeList"
                     @click="plateItemClick(item)">
                   <!-- <div :class="{'plate-item--active':item===selectPayType.value}"></div> -->
                     <img  style="margin-left: 36px;width: 17px;" :src="item===selectPayType.value ? require('../../../../assets/image/course/bulegou.png')  : require('../../../../assets/image/course/default.png') " >
					 <img  style="margin-left: 19px;margin-right: 7px;width: 19px;" :src="item.icon" >
					 {{item.title}}
                </div>
            </div>
            <div class="buy-box">
                <div class="price-box">
                    <div class="price-title">总价</div>
                    <Price :lineHeight="'12px'" :fontSize="'22px'" ></Price>
                </div>
                <div style="opacity: 0.5;" class="price-box">
                    <div class="price-title">优惠券</div>
                    -<Price :lineHeight="'12px'" :fontSize="'16px'" ></Price>
                </div>
                <div style="opacity: 0.5;" class="price-box">
                    <div class="price-title">积分</div>
                    -<Price :lineHeight="'12px'" :fontSize="'16px'" ></Price>
                </div>
                <div class="line"></div>
                <div class="price-box">
                    <div class="price-title">需付金额</div>
                    <Price :money="courseInfo.coursePrice" :lineHeight="'12px'" :fontSize="'28px'" :color="'rgba(234, 53, 83, 1)'" ></Price>
                </div>
                <div @click="goPlay" class="buy-btn">立即支付</div>
            </div>
        </div>
    </div>
		<qrcode></qrcode>
	</div>
</template>

<script>
  import { reactive,ref } from 'vue'
  import Price from "../../../../components/common/price.vue"
  import {setOrder} from "../../../../api/order.js"
  import {getUserInfo} from "../../../../api/wechat.js"
  import { courseDetail} from "../../../../api/course.js"
  import qrcode from "../../../../components/common/qrCode.vue"
  import {
  	useRouter,
  	useRoute
  } from 'vue-router'
  export default {
    name: "index",
	components:{
		Price,
		qrcode
	},
    setup() {
	  const router = useRouter()
	  const route = useRoute()
      const selectPayType = reactive({})
      const payTypeList = reactive([
        {
          title: '支付宝支付',
		  icon:require("../../../../assets/image/course/zfbplay.png")
        },
        {
          title: '微信支付',
		  icon:require("../../../../assets/image/course/wxplay.png")
        }
      ])
	  
	  // 路由获取参数
	  const courseId = ref('')
	  const courseType = ref(0)
	  const courseInfo = ref({})
	  
	  courseId.value = route.query.courseId
	  courseType.value = parseInt(route.query.courseType)
	  
	  
	  // 获取用户信息
	  const userInfo =ref({})
	  const getUser= async ()=>{
	    const res	= await getUserInfo({userId: localStorage.getItem('user_id')})
	    userInfo.value=res
		console.log(res)
	  };
	  getUser()
	  
      const method = {
        plateItemClick(item) {
          selectPayType.value = item
        },
	 	async getCourseInfo(){
			const res = await courseDetail({
				courseId: courseId.value,
				courseType: courseType.value,
				userId: localStorage.getItem('user_id')
			})
			courseInfo.value=res
			
			
		},
		async goPlay(){
			 let obj ={
				 goodsId:courseId.value,
				 goodsType:courseType.value,
				 orderSource:2,
				 paymentPrice:courseInfo.value.coursePrice,
				 userId:localStorage.getItem('user_id')
			 }
			 setOrder(obj).then(res=>{
				router.replace({
					
								  path:'/courseDetail',
								  query: {
								    courseId:courseId.value  ,
								    courseType:courseType.value
								  }
					
				})
			 })
		}
      }
	  
	  method.getCourseInfo()
	  
      method.plateItemClick(payTypeList[0])
	  
      return {
        selectPayType,
        payTypeList,
        ...method,
		courseType,
		courseId,
		courseInfo,
		userInfo,
		getUser
      }
    }
  }
</script>

<style lang="scss" scoped>
	.hui-bg{
		background-color: rgba(245, 246, 246, 1);
	}
	
    .title-box {
        display: flex;
        margin: 58px 0 47px 30px;
       
        .title {
            font-size: 24px;
            font-weight: 500;
            line-height: 33px;
            color: #333333;
            margin-right: 10px;
			margin-top: 20px;
        }

        .subtitle {
            margin-top: 8px;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            color: #707070;
            opacity: 0.6;
			margin-top: 30px;
        }
    }
	.coupon-box,.source-box{
		border-radius: 4px;
		
	}
	.container-main{
		padding-bottom: 50px;
	}
	.sanjiao{
		margin-top: 10px;
		height: 0;
		width: 0;
		border: 5px solid;
		border-color: black transparent transparent transparent ;
	}
	

    .order-box {
        position: relative;
        background: #FFFFFF;
        padding: 25px 30px 344px 30px;
        // margin-bottom: 50px;
     
        .user-info {
            display: flex;
            align-items: center;
            margin-bottom: 25px;

            .user-header {
                height: 35px;
                width: 35px;
                border-radius: 50%;
                margin-right: 17px;
            }

            .username {
                font-size: 14px;
                font-weight: 400;
                line-height: 20px;
                color: #707070;
            }
        }

        .course-box {
            padding: 25px;
            display: flex;
            background: #ffffff;
            margin-bottom: 60px;

            .title-page {
                width: 298px;
                height: 155px;
                margin-right: 40px;
            }

            .content {
                margin-top: 19px;
            }

            .title {
                font-size: 24px;
                font-weight: 500;
                line-height: 33px;
                color: #333333;
                margin-bottom: 13px;
            }

            .subtitle {
                font-size: 16px;
                font-weight: 400;
                line-height: 22px;
                color: #999999;
                margin-bottom: 18px;
            }

            .price {
                font-size: 27px;
                font-family: DIN Alternate;
                font-weight: bold;
                line-height: 31px;
                color: #333333;
            }
        }

        .plate-title {
            margin-bottom: 14px;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            color: #707070;
        }
        .score-list,.coupon-list {
            width: 283px;
            height: 52px;
            display: flex;
            align-items: center;
            background: #FFFFFF;
            font-size: 14px;
            margin-bottom: 24px;
            font-weight: 400;
            line-height: 20px;
            color: #707070;
            padding: 0 10px;
			box-sizing: border-box;
			border: 1px solid #E0E0E0;
			border-radius: 4px;
        }
        .plate-box {
            display: flex;
            margin-top: 28px;
            .plate-item {
                cursor: pointer;
                display: flex;
                align-items: center;
                margin-right: 26px;
                font-size: 14px;
                font-weight: 400;
                line-height: 20px;
                color: #707070;
                width: 273px;
                height: 93px;
                background: #FFFFFF;
                border-radius: 4px;
				border: 2px solid #E5EDFF;
                div:first-child {
                    margin-left: 37px;
                    margin-right: 23px;
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    background: #EFEFEF;
                }

                
            }
			.plate-item-active {
			    border: 2px solid #346FEB;
			    background: #F0F5FF;
			}

        }

        .buy-box {
            cursor: pointer;
            position: absolute;
            bottom: 55px;
            right: 78px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            .price-box{
                display: flex;
                height: 35px;
                font-size: 14px;
                font-weight: 400;
                line-height: 20px;
                color: #333333;
				align-items: flex-end;
				
                // opacity: 0.4;
                .price-title{
                    margin-right: 15px;
					
                }
            }
            .buy-btn {
                width: 228px;
                height: 59px;
                background: #1371F3;
				border-radius: 4px;
                font-size: 19px;
                font-weight: 500;
                line-height: 26px;
                color: #FFFFFF;
                display: flex;
                margin-top: 20px;
                align-items: center;
                justify-content: center;
            }

            .line {
                margin: 18px 0;
                width: 205px;
                height: 1px;
                background: #FFFFFF;
            }
        }
    }
</style>
