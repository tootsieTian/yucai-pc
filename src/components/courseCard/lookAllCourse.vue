<template>
    <div>
        <div class="look-all"
             @click="lookAll">
            {{ title }}
            <i class="el-icon-arrow-right"/>
        </div>
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
        width: fit-content;
        padding: 0 36px;
        height: 56px;
        background: rgba(19, 113, 243, 1);
		border-radius: 4px;
        margin-left: auto;
        margin-right: auto;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 400;
        line-height: 22px;
        color: #FFFFFF;
        cursor: pointer;
        i{
            margin-left: 6px;
        }
    }
</style>
