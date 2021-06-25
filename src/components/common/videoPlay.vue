<template>
    <div id="player"/>
</template>

<script>
  import { reactive, ref, onMounted } from 'vue'

  export default {
    name: "videoPlay",
    setup() {
      const source = ref('//player.alicdn.com/video/aliyunmedia.mp4')
      const clarityList = reactive([
        {
          name: '清晰'
        },
        {
          name: '高清'
        },
        {
          name: '蓝光'
        }
      ])
      const speedList = reactive([
        {
          name: '1.0X'
        },
        {
          name: '1.5X'
        },
        {
          name: '2.0X'
        }
      ])
      const playerObj =  window.Aliplayer
      const method = {

      }

      const options = reactive({
        width: '100%', //容器的大小
        height: '100%', //容器的大小
        cover: '',          // 封面
        playsinline: false, // 是否使用内置播放器
        debug: true,
        autoplay: false,    // 是否自动播放
        // showBarTime: 5000,  // 控制栏自动隐藏时间，单位毫秒。
        // controlBarVisibility: "always",
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

      /** 改变播放器的布局 */
      onMounted(() => {
        const player = new Aliplayer(config)  //播放器实例
        let oldControlbar = document.getElementsByClassName('prism-controlbar')[0]
        let oldControlbarBg = document.getElementsByClassName('prism-controlbar-bg')[0] // 背景
        let playBtn = document.getElementsByClassName('prism-play-btn')[0]  // 播放按钮
        let timeBound = document.getElementsByClassName('time-bound')[0]    //封号
        let progress = document.getElementsByClassName('prism-progress')[0]   // 进度条
        let timeBox = document.getElementsByClassName('prism-time-display')[0]  // 时间盒子
        let fullscreenBtn = document.getElementsByClassName('prism-fullscreen-btn')[0]  // 全屏按钮
        let setBtn = document.getElementsByClassName('prism-setting-btn')[0]    // 设置按钮
        let ccBtn = document.getElementsByClassName('prism-cc-btn')[0]  // 字幕按钮
        let volume = document.getElementsByClassName('prism-volume')[0]  // 音量按钮
        let speedBtn = document.createElement('div')
        speedBtn.classList.add('speed-btn')  // 速度按钮
        let clarity = document.createElement('div')
        clarity.classList.add('clarity-btn')  // 清晰度按钮
        timeBox.insertBefore(progress, timeBound.nextSibling )  // 将进度条放入时间盒子中
        timeBound.parentNode.removeChild(timeBound)     // 删除无用的组件
        oldControlbar.removeChild(ccBtn)
        oldControlbar.removeChild(volume)
        oldControlbar.removeChild(oldControlbarBg)
        oldControlbar.removeChild(setBtn)

        // 创建一个flex盒子用于新的布局，将controlbar下的子元素全部放入其中
        let newControlbar = document.createElement('div')
        newControlbar.classList.add('new-controlbar')
        oldControlbar.appendChild(newControlbar)
        newControlbar.appendChild(playBtn)
        newControlbar.appendChild(timeBox)
        newControlbar.appendChild(speedBtn)
        newControlbar.appendChild(clarity)
        newControlbar.appendChild(fullscreenBtn)
      })

      return {
        options,
        source
      }
    }
  }
</script>

<style lang="scss" scoped>
    #player{
        position: relative;
        ::v-deep .prism-big-play-btn{
            position: absolute !important;
            left: 50% !important;
            top: 50% !important;
            transform: translate(-50%, -50%);
        }
        ::v-deep .prism-controlbar{
            display: flex !important;
            background: rgba(23, 23, 23, 0.6);
            align-items: center;
            .prism-play-btn{
                width: 24px;
                height: 24px;
                margin:  0 22px 0 34px !important;

            }
            .prism-time-display{
                display: flex;
                flex: 1;
                align-items: center;
                margin-top: 0 !important;
                margin-left: 0 !important;
                .current-time{
                    margin-right: 26px;
                }
                .duration{
                    margin-left: 44px;
                    margin-right: 36px;
                }
            }
            .new-controlbar{
                height: 100%;
                display: flex;
                width: 100%;
                align-items: center;
            }
            .prism-controlbar{
                position: relative !important;
            }
            .prism-fullscreen-btn{
                float: none !important;
                margin: 0 18px 0 0 !important;
            }

        }
        ::v-deep .prism-progress{
            position: relative !important;
            bottom: unset !important;
            background: #C1C1C1;
            height: 3px;
            .prism-progress-played{
                background: #FE9808;
            }
            .prism-progress-cursor{
                position: relative;
                width: 19px;
                height: 19px;
                background: rgba(254, 152, 8, 0.5);
                border-radius: 50%;
                img{
                    display: none;
                }
            }
            .prism-progress-cursor:after{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                content: '';
                width: 13px;
                height: 13px;
                background: #FE9808 !important;
                border-radius: 50%;
            }

        }

    }
</style>
