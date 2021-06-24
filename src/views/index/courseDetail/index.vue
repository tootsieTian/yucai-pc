<template>
    <div class="course-detail">
        <title-box/>
        <course-info/>
		<groupworkBox></groupworkBox>
        <course-list :key="courseListKey"
                     @tabClick="tabClick"
                     ref="course"/>
        <comment-box ref="comment"/>
        <course-explain ref="explain"/>
        <course-recommend ref="recommend"/>
    </div>
</template>

<script>
  import TitleBox from "../../../components/courseDetail/titleBox";
  import CommentBox from "../../../components/courseDetail/commentBox";
  import CourseExplain from "../../../components/courseDetail/courseExplain";
  import CourseRecommend from "../../../components/courseDetail/courseRecommend";
  import { ref, onUnmounted, provide } from 'vue'
  import CourseList from "../../../components/courseDetail/courseList";
  import CourseInfo from "../../../components/courseDetail/courseInfo";
  import groupworkBox from "../../../components/courseDetail/groupworkBox.vue"

  export default {
    name: "index",
    components: { CourseInfo, CourseList, CourseRecommend, CourseExplain, CommentBox, TitleBox,groupworkBox },
    setup() {
      const tabActive = ref('course')
      provide('tabActive', tabActive)
      const navHeight = document.getElementsByClassName('nav')[0].clientHeight
      const courseListKey = ref(666)
      const refs = {
        course: ref(null),
        comment: ref(null),
        explain: ref(null),
        recommend: ref(null)
      }

      const listenScroll = () => {
        let scrollTop = document.documentElement.scrollTop + navHeight  // 滚动条离顶部距离
        let commentOffsetTop = refs.comment.value.$el.offsetTop         // 评论盒子离顶部距离
        let explainOffsetTop = refs.explain.value.$el.offsetTop         // 介绍盒子离顶部距离
        let recommendOffsetTop = refs.recommend.value.$el.offsetTop     // 推荐盒子离顶部距离
        if (scrollTop < commentOffsetTop && tabActive.value !== 'course') {
          tabActive.value = 'course'
        } else if (scrollTop >= commentOffsetTop
          && scrollTop < explainOffsetTop
          && tabActive.value !== 'comment') {
          tabActive.value = 'comment'
        } else if (scrollTop >= explainOffsetTop
          && scrollTop < recommendOffsetTop
          && tabActive.value !== 'explain') {
          tabActive.value = 'explain'
        } else if (scrollTop >= recommendOffsetTop
          && tabActive.value !== 'recommend') {
          tabActive.value = 'recommend'
        }
      }

      window.addEventListener('scroll', listenScroll)
      onUnmounted(() => {
        window.removeEventListener('scroll', listenScroll)
      })

      // 瞄点定位
      const tabClick = (tab) => {
        window.removeEventListener('scroll', listenScroll)
        let domTop = document.documentElement.scrollTop
        let rollDistance = (refs[tab.props.name].value.$el.offsetTop
          - domTop - navHeight) / 20
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
        ...refs,
        tabActive,
        courseListKey
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
