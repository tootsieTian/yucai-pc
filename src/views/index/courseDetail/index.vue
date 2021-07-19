<template>
	<div class="course-detail">
		<title-box :courseImg="courseInfo.courseImg" :title="courseInfo.courseName" :url="lecturer.headImgUrl"
			:name="lecturer.name" :subtitle="courseInfo.introduction" />
		<course-info :isCollect="isCollect" @collect="collect" :courseInfo="courseInfo" />
		<groupworkBox v-show="false"></groupworkBox>
		<course-list @play="play" :isCollect="isCollect" @collect="collect" :courseId="courseId"
			:courseType="courseType" :resourceList="resourceList" :key="courseListKey" @tabClick="tabClick"
			ref="course" />
		<comment-box :appEvaluateList="appEvaluateList" :appEvaluateNum="appEvaluateNum" ref="comment" />
		<course-explain :courseDetail="courseInfo.courseDetail" ref="explain" />
		<course-recommend :loveList="loveList" ref="recommend" />
	</div>
</template>

<script>
	import {
		useRouter,
		useRoute
	} from 'vue-router'
	import TitleBox from "../../../components/courseDetail/titleBox";
	import CommentBox from "../../../components/courseDetail/commentBox";
	import CourseExplain from "../../../components/courseDetail/courseExplain";
	import CourseRecommend from "../../../components/courseDetail/courseRecommend";
	import {
		onMounted,
		onBeforeMount,
		reactive,
		ref,
		toRefs,
		onUnmounted,
		provide,
		defineComponent
	} from 'vue'
	import CourseList from "../../../components/courseDetail/courseList";
	import CourseInfo from "../../../components/courseDetail/courseInfo";
	import groupworkBox from "../../../components/courseDetail/groupworkBox.vue"
	import {
		ElMessage
	} from 'element-plus'
	import {
		courseDetail,
		getEvaluateCourseList,
		collectCourse,
		cancelCellect,
		addBrowseRecord,
		myLovelist
	} from '../../../api/course'

	export default defineComponent({
		name: "index",
		components: {
			CourseInfo,
			CourseList,
			CourseRecommend,
			CourseExplain,
			CommentBox,
			TitleBox,
			groupworkBox
		},
		setup() {
			const tabActive = ref('course')
			const router = useRouter()
			const roure = useRoute()
			provide('tabActive', tabActive)
			const navHeight = document.getElementsByClassName('nav')[0].clientHeight
			const courseListKey = ref(666)
			const textTitle = ref("御才文化-告别社交恐惧系列套餐播放")
			const refs = {
				course: ref(null),
				comment: ref(null),
				explain: ref(null),
				recommend: ref(null)
			}

			provide("customVal", courseInfo);
          
			
			
			const listenScroll = () => {
				let scrollTop = document.documentElement.scrollTop + navHeight // 滚动条离顶部距离
				let commentOffsetTop = refs.comment.value.$el.offsetTop // 评论盒子离顶部距离
				let explainOffsetTop = refs.explain.value.$el.offsetTop // 介绍盒子离顶部距离
				let recommendOffsetTop = refs.recommend.value.$el.offsetTop // 推荐盒子离顶部距离
				if (scrollTop < commentOffsetTop && tabActive.value !== 'course') {
					tabActive.value = 'course'
				} else if (scrollTop >= commentOffsetTop &&
					scrollTop < explainOffsetTop &&
					tabActive.value !== 'comment') {
					tabActive.value = 'comment'
				} else if (scrollTop >= explainOffsetTop &&
					scrollTop < recommendOffsetTop &&
					tabActive.value !== 'explain') {
					tabActive.value = 'explain'
				} else if (scrollTop >= recommendOffsetTop &&
					tabActive.value !== 'recommend') {
					tabActive.value = 'recommend'
				}
			}

			// 课程详情请求数据
			const courseId = ref('') // 课程id
			const courseType = ref(0) // 课程类型
			const courseInfo = ref({}) // 课程信息
			const lecturer = ref({}) //教师信息
			const detailBg = ref("") // 课程介绍背景图
			const showDetail = ref(false) //是否存在背景图
			const resourceList = ref([]) //播放列表
			const appEvaluateList = ref([]) //评价列表
			const appEvaluateNum = ref({}) //评价参数
			const isCollect = ref(false)
			const getCourseDetail = async () => {
				if (courseId.value != '') {
					const res = await courseDetail({
						courseId: courseId.value,
						courseType: courseType.value,
						userId: localStorage.getItem('user_id')
					})
					// 进行数据填充
					courseInfo.value = res
					isCollect.value = res.isCollect == 1 ? true : false
					lecturer.value = res.lecturer
					appEvaluateList.value = res.appEvaluateListDTO.appEvaluateList
					appEvaluateNum.value = res.appEvaluateListDTO.appEvaluateNum
					resourceList.value = res.resourceList
				} else {
					ElMessage.error('课程ID为空未知');
					router.go(-1)
				}
			}
			// 增加浏览记录
			const addRecord = ()=>{
				if(localStorage.getItem('user_id')){
					addBrowseRecord({
					  courseId: courseId.value,
					  courseType:courseType.value,
					  userId: localStorage.getItem('user_id')==undefined 
					})
				}
			}
			




			// 猜你喜欢列表请求
			const loveList = ref([]) //猜你喜欢列表
			const getLoveList = async () => {
				const res = await myLovelist({
					userId: localStorage.getItem('user_id')
				})
				loveList.value = res

			}

			// 收藏按钮逻辑
			const collect = async () => {
				if (isCollect.value) {
					const res = await cancelCellect({
						courseId: courseId.value,
						courseType: courseType.value,
						userId: localStorage.getItem('user_id')
					})
					if (!res) {
						isCollect.value = false
						ElMessage.success('取消收藏！');
					}
				} else {
					const res = await collectCourse({
						courseId: courseId.value,
						courseType: courseType.value,
						userId: localStorage.getItem('user_id')
					})
					if (res) {
						isCollect.value = true
						ElMessage.success('收藏成功！');
					}


				}


			}
            // 播放视频拦截
			const play= (index)=>{
				// if(courseInfo.coursePrice!="0.00"&&courseInfo.isBuy!=1){
				// 	return ElMessage.error('请先购买视频！');
				// }
			   
				router.push({
							  path:'/courseDetail/videoPlay',
							  query: {
							    courseId: courseId.value,
							    courseType: courseType.value,
								videoId:resourceList.value[index].mediaId,
								index:index
							  }
				})
			}



			onMounted(() => {
				document.title = textTitle.value
				courseId.value = roure.query.courseId
				courseType.value = parseInt(roure.query.courseType)
				getCourseDetail()
				getLoveList()
			    addRecord()
			

			})

			window.addEventListener('scroll', listenScroll)
			onUnmounted(() => {

				window.removeEventListener('scroll', listenScroll)

			})

			// 瞄点定位
			const tabClick = (tab) => {
				window.removeEventListener('scroll', listenScroll)
				let domTop = document.documentElement.scrollTop
				let rollDistance = (refs[tab.props.name].value.$el.offsetTop -
					domTop - navHeight) / 20
				let i = 0
				const roll = setInterval(() => {
					++i
					window.scrollTo({
						top: domTop + rollDistance * i,
						left: 0
					})
					if (i >= 20) {
						clearInterval(roll)
						window.addEventListener('scroll', listenScroll)
					}
				}, 10)
			}
			return {
				tabClick,
				getLoveList,
				...refs,
				courseInfo,
				tabActive,
				courseListKey,
				textTitle,
				getCourseDetail,
				lecturer,
				resourceList,
				loveList,
				appEvaluateList,
				appEvaluateNum,
				courseType,
				courseId,
				isCollect,
				collect,
				play,
				addRecord

			}
		}
	})
</script>

<style lang="scss" scoped>
	body {
		scroll-behavior: smooth;
	}

	.course-detail {
		padding-bottom: 100px;
	}
</style>
