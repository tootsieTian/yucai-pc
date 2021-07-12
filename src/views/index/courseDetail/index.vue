<template>
	<div class="course-detail">
		<title-box :title="courseInfo.courseName"  />
		<course-info />
		<groupworkBox></groupworkBox>
		<course-list :key="courseListKey" @tabClick="tabClick" ref="course" />
		<comment-box ref="comment" />
		<course-explain ref="explain" />
		<course-recommend :loveList="loveList" ref="recommend" />
		<div v-for="(item)  in  loveList" >item</div>
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

	export default {
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
			let courseInfo = reactive({}) // 课程信息
			const lecturer = reactive({}) //教师信息
			const detailBg =ref("")   // 课程介绍背景图
			const showDetail =ref(false) //是否存在背景图
			const getCourseDetail = async ()=> {
				if (courseId.value != '') {
					const res = await courseDetail({
						courseId: courseId.value,
						courseType: courseType.value
					})
					// 进行数据填充
					courseInfo = res
					setCourseDetail(res.courseDetail)
					lecturer.value = res.lecturer
				} else {
					ElMessage.error('课程ID为空未知');
					router.go(-1)
				}
			}
			
			// 写入课程详情html标签
			const setCourseDetail  = (courseDetail)=> {
			  if (courseDetail == '') {
			    return showDetail.value = true
			  }
			  // setTimeout(() => {
			  //   let dom = $refs.courseDetail
			  //   dom.innerHTML = courseDetail
			  //   dom.innerHTML = dom.innerText
			  //   var domImg = dom.getElementsByTagName('img')[0]
			  //   domImg.style.width = "100vw"
			  // }, 200)
			}
			
			// 猜你喜欢列表请求
			const loveList = ref([]) //猜你喜欢列表
			const getLoveList=async ()=>{
				const res = await myLovelist({userId: localStorage.getItem('user_id')})
				loveList.value=res
			}
			
			
			

			onMounted(() => {
				document.title = textTitle.value
				courseId.value = roure.query.courseId
				courseType.value = parseInt(roure.query.courseType)
				getCourseDetail()
				getLoveList()
				
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
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	body {
		scroll-behavior: smooth;
	}

	.course-detail {
		padding-bottom: 100px;
	}
</style>
