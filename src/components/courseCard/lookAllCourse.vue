<template>
    <div class="look-all"
         @click="lookAll">
        {{ title }}
        <i class="el-icon-arrow-right"/>
    </div>
</template>

<script>
  export default {
    name: "lookAllCourse",
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    setup(props,context) {
      const { title } = props
      const lookAll  = () => {
        context.emit('lookAll')
      }
      return {
        title,
        lookAll
      }
    }
  }
</script>

<style lang="scss" scoped>
    .look-all {
        width: 219px;
        height: 72px;
        background: #EFEFEF;
        margin-left: auto;
        margin-right: auto;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 400;
        line-height: 22px;
        color: #333333;
        cursor: pointer;
    }
</style>
