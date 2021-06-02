<template>
    <div class="course-detail">
        <title-box/>
        <course-list :tabActive="tabActive"
                     :key="courseListKey"
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
  import {ref, onMounted} from 'vue'
  import CourseList from "../../../components/courseDetail/courseList";

  export default {
    name: "index",
    components: {CourseList, CourseRecommend, CourseExplain, CommentBox, TitleBox},
    setup() {
      const tabActive = ref('course')
      const courseListKey = ref(666)
      const refs = {
        course: ref(null),
        comment: ref(null),
        explain: ref(null),
        recommend: ref(null)
      }
      window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop <= refs.comment.value.$el.offsetTop) {
          tabActive.value = 'course'
          courseListKey.value++
        } else if (document.documentElement.scrollTop >= refs.comment.value.$el.offsetTop
          && document.documentElement.scrollTop <= refs.explain.value.$el.offsetTop) {
          tabActive.value = 'comment'
          courseListKey.value++
        } else if (document.documentElement.scrollTop >= refs.explain.value.$el.offsetTop
          && document.documentElement.scrollTop <= refs.recommend.value.$el.offsetTop) {
          tabActive.value = 'explain'
          courseListKey.value++
        } else if (document.documentElement.scrollTop >= refs.recommend.value.$el.offsetTop) {
          tabActive.value = 'recommend'
          courseListKey.value++
        }
      })

      // 瞄点定位
      const tabClick = (tab) => {
        let domTop = document.documentElement.scrollTop
        let rollDistance = (refs[tab.props.name].value.$el.offsetTop - domTop+2) / 20
        let i = 0
        const roll = setInterval(() => {
          ++i
          window.scrollTo({
            top: domTop + rollDistance * i,
            left: 0
          })
          if (i >= 20) {
            clearInterval(roll)
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
