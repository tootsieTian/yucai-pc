<template>
    <div id="player"/>
</template>

<script>
  import { reactive, ref, onMounted } from 'vue'

  export default {
    name: "videoPlay",
    setup() {
      const source = ref('//player.alicdn.com/video/aliyunmedia.mp4')
      const options = reactive({
        width: '100%', //容器的大小
        height: '100%', //容器的大小
        cover: '',          // 封面
        playsinline: false, // 是否使用内置播放器
        autoplay: false,    // 是否自动播放
        showBarTime: 5000,  // 控制栏自动隐藏时间，单位毫秒。
        controlBarVisibility: "click",
        definition: 'FD,LD',
        "skinLayout": [
          {
            "name": "H5Loading",
            "align": "cc"
          },
          {
            "name": "errorDisplay",
            "align": "tlabs",
            "x": 0,
            "y": 0
          },
          {
            "name": "title"
          },
          {
            "name": "controlBar",
            "align": "blabs",
            "x": 0,
            "y": 0,
            "children": [
              {
                "name": "progress",
                "align": "blabs",
              },
              {
                "name": "playButton",
                "align": "tl",
              },
              {
                "name": "timeDisplay",
                "align": "tl",
                "x": 10,
                "y": 7
              },
              {
                "name": "fullScreenButton",
                "align": "tr",
                "x": 10,
                "y": 12
              },
              {
                "name": "qualityComponents",
                "align": "tr",
                "x": 10,
                "y": 12
              }

            ]
          }
        ]
      })
      let config = {
        id: 'player',  //播放器的ID
        autoplay: false,
        source: source.value,
      }

      onMounted(() => {
        const player = new Aliplayer(config)  //播放器实例
      })
      return {
        options,
        source
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
