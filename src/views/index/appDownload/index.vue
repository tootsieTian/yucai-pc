<template>
    <div class="bg">
        <header :class="{'keep-top': scrollTop!==0}">
            <div class="container-main">
                <img   :src=" scrollTop!==0  ? logoWImg : logoBImg   "/>
                <div @click="toIndex">首页</div>
                <i class="el-icon-s-home" @click="toIndex"/>
            </div>
        </header>
        <div class="container-main main">
            <div class="article">
                <h1>{{article.title}}</h1>
                <p>{{article.context}}</p>
                <button class="download-btn">
                    <i class="el-icon-download"/>下载
                </button>
            </div>
            <img :src="require('../../../assets/icon/index/appDownload/phone.png')">
        </div>
    </div>
</template>

<script>
  import { reactive, ref } from 'vue'
  import { useRouter } from 'vue-router'
  export default {
    name: "index",
    setup() {
      const article = reactive({
        title: '御才文化教育',
        context: `开发专业教育云应用与服务的系统、资源信息化建设平台，
        基于“资源+平台+服务”的理念，推进职业院校的专业资源库、课程的建设和教学运行。`
      })
	  const logoWImg = ref(require('../../../assets/image/common/logoWhite.svg'))
	  const logoBImg = ref(require('../../../assets/image/common/logoBlack.svg'))
      const router = useRouter()
      const toIndex = () => {
        router.push('/')
      }
      const scrollTop = ref(0)
      window.addEventListener('scroll', () => {
        scrollTop.value = document.body.scrollTop || document.documentElement.scrollTop;
      }, true)
      return {
        toIndex,
        article,
        scrollTop,
		logoWImg,
		logoBImg
      }
    }
  }
</script>

<style lang="scss" scoped>
    .bg {
        background-image: linear-gradient(to right, #3068f6, rgba(48, 104, 246, 0.95), rgba(63, 115, 246, 0.85));
        padding-bottom: 100PX;
        min-height: 100vh;
        box-sizing: border-box;
		
    }
    header {
        top: 0;
        right: 0;
        left: 0;
        transition: all .2s ease;
        background: transparent;
        z-index: 99;
        position: fixed;
        padding: 40PX 0;

        .container-main {
            display: flex;
            justify-content: space-between;
            align-items: center;
            img {
                // height: 40PX;
                // width: 40PX;
				height: 40PX;
				width: auto;
            }

            div {
                cursor: pointer;
                color: #FFF;
                font-size: 30px;
            }
            i{
                display: none;
            }
        }
    }
    @media (min-width: 801px) {
        .keep-top {
            transition: all .2s ease;
            background-color: rgba(20, 20, 20, .95);
            padding: 15PX 0;
        }
    }
    .main {
        padding-top: 65PX;
        display: flex;
        justify-content: space-between;

        .article {
            padding-top: 150PX;
            padding-right: 150PX;

            h1 {
                color: #FFF;
                font-size: 52PX;
                line-height: 64PX;
                font-weight: 700;
                margin: 0;
            }

            p {
                margin-top: 25PX;
                color: #FFF;
                font-size: 18PX;
                line-height: 28PX;
                letter-spacing: .5PX;
            }
            .download-btn{
                margin-top: 70PX;
                cursor: pointer;
                border: 1px solid #ffffff;
                font-size: 18PX;
                color: #ffffff;
                padding: 10PX 34PX;
                outline: none !important;
                border-radius: 25PX;
                background: transparent;
                i{
                    margin-right: 13PX;
                }
            }
            .download-btn:hover{
                color: #376df6;
                background: #ffffff;
            }
        }

        img {
            margin-top: 15PX;
            margin-right: 20PX;
            height: 600PX;
            width: 500PX;
        }
    }

    @media (min-width: 801px) and (max-width: 1280px) {
        .container-main {
            width: 1150PX;
        }
    }

    @media (min-width: 1281px) and (max-width: 1549px) {
        .container-main {
            width: 1300PX;
        }
    }

    @media (min-width: 1550px){
        .container-main {
            width: 1500PX;
        }
    }

    // 移动端样式
    @media(max-width: 800px){
        .container-main {
            width: 100%;
        }
        header{
            position: relative;
            padding: 10PX;
            box-sizing: border-box;
            .container-main{
                align-items: center;
                div{
                    display: none;
                }
                i{
                    display: block;
                    color: #ffffff;
                    font-size: 28PX;
                }
            }
        }
        .main{
            box-sizing: border-box;
            padding: 10PX;
            flex-direction: column;
            .article{
                padding-top: 18PX;
                padding-right: 0;
                display: flex;
                flex-direction: column;
                h1{
                    align-self: center;
                    font-size: 27PX;
                    font-weight: 500;
                }
                .download-btn{
                    margin-top: 20PX;
                    align-self: center;
                }
            }

            img{
                margin-top: 40PX;
                width: 300PX;
                margin-left: auto;
                margin-right: auto;
            }
        }
    }
</style>
