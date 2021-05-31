<template>
    <div class="course-list-title">
        <div>
            <div class="title">
                {{title}}
            </div>
            <div class="subtitle">
                {{subtitle}}
            </div>
        </div>
        <div class="more" @click="more">
            更多
            <i class="el-icon-arrow-right"/>
        </div>
    </div>
</template>

<script>
  import {ref} from 'vue'

  export default {
    name: "courseListTitle",
    eimts: ['more'],
    props: {
      title: {
        type: String,
        default: '热门课程'
      },
      subtitle: {
        type: String,
        default: '必修的刚需课程&硬核技能 / 精心自制的学习视频 / 一次付费随时观看'
      }
    },
    setup(props,context) {
      const title = ref(props.title)
      const subtitle = ref(props.subtitle)
      const method  = {
        more(){
          context.emit('more')
        }
      }
      return {
        title,
        subtitle,
        ...method
      }
    }
  }
</script>

<style lang="scss" scoped>
    .course-list-title {
        padding: 0 4px 0 20px;
        display: flex;
        justify-content: space-between;
        .title{
            font-size: 40px;
            font-weight: 400;
            line-height: 56px;
            color: #333333;
        }
        .subtitle{
            margin-top: 5px;
            font-size: 18px;
            font-weight: 400;
            line-height: 25px;
            color: #333333;
        }
    }
    .more{
        font-size: 18px;
        line-height: 56px;
    }
</style>
