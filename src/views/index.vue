<template>
    <div>
        <div class="nav-list">

        </div>
        <main>
            <div class="container-1200">
                <course-list-title @more="more"/>
            </div>
        </main>
    </div>
</template>

<script>
  import CourseListTitle from "../components/common/courseListTitle";
  export default {
    name: "index",
    components: {CourseListTitle},
    setup() {
      const method = {
        more(){
          console.log('查看更多')
        }
      }
      return {
        ...method
      }
    }
  }
</script>

<style lang="scss" scoped>
    .nav-list{
        width: 100%;
        height: 904px;

        background: #E2E2E2;
    }
</style>
