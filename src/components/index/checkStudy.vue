<template>
    <div class="check-study">
        <div class="dialog container-1200">
            <div class="title">选择学习领域</div>
            <div class="tag-list">
                <div class="tag-item"
                     @click="tagItemClick(item)"
                     :key="index+'tag'"
                     v-for="(item,index) in tagList">
                    {{item.title}}
                    <div class="tag-item--active" v-if="selectTagList.indexOf(item)!==-1"></div>
                </div>
            </div>
            <div class="explain">
                <div class="check-sum">已选{{selectTagList.length}}个：</div>
                <div class="check-tag">{{
                    selectTagList.map((item) => {
                    return item.title
                    }).join('、')
                    }}</div>
            </div>
            <div class="btn" @click="ok">
                选好了
            </div>
        </div>
    </div>
</template>

<script>
  import { reactive } from 'vue'

  export default {
    name: "checkStudy",
    setup(props, context) {
      const tagList = reactive([
        {
          title: '家庭教育'
        },
        {
          title: '职场考试'
        },
        {
          title: '产品运营'
        },
        {
          title: '程序语言'
        }
      ])
      const selectTagList = reactive([])

      const method = {
        tagItemClick(item) {
          let index = selectTagList.indexOf(item)
          index === -1 ? selectTagList.push(item) : selectTagList.splice(index, 1)
        },
        ok() {
          context.emit('closeDialog')
        }
      }
      return {
        tagList,
        selectTagList,
        ...method
      }
    }
  }
</script>

<style lang="scss" scoped>
    .check-study {
        position: fixed;
        z-index: 100;
        background: rgba(43, 43, 43, 0.5);
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
    }

    .dialog {
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%);

        background: #FFFFFF;

        .title {
            margin: 48px 0 24px 40px;
            font-size: 24px;
            font-weight: 500;
            line-height: 33px;
            color: #333333;
        }

        .tag-list {
            border-bottom: 1px solid #F2F2F2;
            border-top: 1px solid #F2F2F2;
            padding: 50px 40px 18px 40px;
            box-sizing: border-box;
            display: flex;
            flex-wrap: wrap;

            .tag-item {
                position: relative;
                cursor: pointer;
                margin-right: 25px;
                margin-bottom: 32px;
                border: 1px solid #4B4B4B;
                font-size: 14px;
                padding: 0 25px;
                font-weight: 400;
                line-height: 46px;
                color: #707070;
            }

            .tag-item--active {
                position: absolute;
                width: 25px;
                height: 23px;
                right: 0;
                bottom: 0;
                background: black;
            }
        }

        .explain {
            margin: 34px 0 57px 50px;
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
            color: #707070;
            display: flex;

            .check-sum {
                margin-right: 9px;
            }
        }

        .btn {
            margin-bottom: 63px;
            margin-left: auto;
            margin-right: auto;
            width: 215px;
            height: 69px;
            background: #D1D1D1;
            font-size: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 400;
            line-height: 33px;
            color: #707070;
        }
    }
</style>
