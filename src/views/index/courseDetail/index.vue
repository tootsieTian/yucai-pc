<template>
    <div class="course-detail">
        <title-box/>
        <comment-box/>
    </div>
</template>

<script>
  import TitleBox from "../../../components/courseDetail/titleBox";
  import CommentBox from "../../../components/courseDetail/commentBox";
  export default {
    name: "index",
    components: {CommentBox, TitleBox},
    data: () => ({}),
    methods: {}
  }
</script>

<style lang="scss" scoped>
    .course-detail{
        padding-bottom: 100px;
    }
</style>
