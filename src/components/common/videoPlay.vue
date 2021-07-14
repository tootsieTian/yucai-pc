<template>
    <div id="player">
        <div class="speed-box">
            <div class="active-speed">{{speedActive.name}}X</div>
            <div class="speed-list">
                <div class="speed-item"
                     @click="speedClick(item)"
                     v-for="item in speedList"
                     v-show="speedActive.name!==item.name">
                    {{item.name}}X
                </div>
            </div>
        </div>
        <div class="clarity-box" >
            <div class="active-clarity">{{clarityActive.name}}</div>
            <div class="clarity-list">
                <div class="clarity-item"
                     @click="clarityClick(item)"
                     v-show="clarityActive.name!==item.name"
                     v-for="item in clarityList">
                     {{item.name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { reactive, ref, onMounted,toRefs } from 'vue'
  export default {
    name: "videoPlay",
	// props:{
	// 	videoInfo:{
	// 		type:String,
	// 		default:""
	// 	}
	// },
	props:{
		videoInfo: String
	},
    setup(props) {
		
	  const{videoInfo} = toRefs(props)
      const playerObj =  window.Aliplayer   // 播放器实例
      const source = ref('//player.alicdn.com/video/aliyunmedia.mp4')
      /** 清晰度和速度按钮操作 */
      const videoBtnObj = {
        clarityList: reactive([
          {
            name: '清晰'
          },
          {
            name: '高清'
          },
          {
            name: '蓝光'
          }
        ]),
        clarityActive: reactive({
          name: '清晰'
        }),
        speedActive: reactive({
          name: '1.0'
        }),
        speedList: reactive([
          {
            name: '2.0'
          },
          {
            name: '1.5'
          },
          {
            name: '1.0'
          },
          {
            name: '0.5'
          }
        ])
      }

      const method = {
        speedClick(item){
          videoBtnObj.speedActive.name = item.name
        },
        clarityClick(item){
          videoBtnObj.clarityActive.name  = item.name
        }
      }

      /** 播放器配置 */
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
        let speedBox = document.getElementsByClassName('speed-box')[0]  // 视频速度盒子
        let clarityBox = document.getElementsByClassName('clarity-box')[0]  // 视频清晰度盒子
        let infoDisplay = document.getElementsByClassName('prism-info-display')[0]
        timeBox.insertBefore(progress, timeBound.nextSibling )  // 将进度条放入时间盒子中
        timeBound.parentNode.removeChild(timeBound)     // 删除无用的组件
        infoDisplay.style.display = 'none'
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
        newControlbar.appendChild(speedBox)
        newControlbar.appendChild(clarityBox)
        newControlbar.appendChild(fullscreenBtn)
      })

      return {
        options,
        source,
        ...method,
        ...videoBtnObj,
		videoInfo
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
                    margin-left: 35px;
                    margin-right: 15px;
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

        .speed-box,  .clarity-box{
            font-size: 14px;
            font-weight: 400;
            color: #FFFFFF;
            height: 100%;
            display: flex;
            align-items: center;
        }
        .speed-list, .clarity-list{
            visibility: hidden;
            position: absolute;
            bottom: 66px;
            box-sizing: content-box;
            background: rgba(23, 23, 23, 0.6);
        }
        .speed-item,.active-speed,.clarity-item,.active-clarity{
            z-index: 999;
            cursor: pointer;
            text-align: center;
            line-height: 20px;
            padding: 10px;
            width: 70px;
        }
        .speed-item:hover,.clarity-item:hover{
            background: rgba(92, 91, 91, 0.3);
        }
        .speed-box:hover {
            .speed-list {
                visibility: unset;
            }
        }
        .clarity-box:hover{
            .clarity-list {
                visibility: unset;
            }
        }
		.outter{
			z-index: 10!important;
		}

    }
</style>
