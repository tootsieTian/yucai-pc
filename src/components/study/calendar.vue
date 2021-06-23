<template>
    <div class="week-list">
        <div class="week-item" v-for="item in week">
            {{item}}
        </div>
    </div>
    <div class="day-list">
        <div class="prev" v-for="item in firstDay-1">
            {{monthList[month-1]-firstDay+1+item}}
        </div>
        <div class="day" v-for="item in monthList[month]">
            <div :class="{'day--active': item===day}">
                {{item===day ? '今' : item  }}
				<div v-if="item==17 || item==18" class="right-lab f-a-j"  >1</div>
            </div>
        </div>
        <div class="next" v-for="item in 35 - monthList[month]-firstDay+1">
            {{item}}
        </div>
    </div>

</template>

<script>
  import { ref, reactive } from 'vue'

  export default {
    name: "calendar",
    setup() {
      const week = ['一', '二', '三', '四', '五', '六', '日'] // 星期数组
      const date = new Date()
      let year = date.getFullYear()     // 今年
      let month = ref(date.getMonth() + 1)   // 这个月
      let day = date.getDate()          // 今天
      const monthList = []              // 每个月的天数
      const getMonthDay = (y, m) => {
        monthList.push(new Date(y, m, 0).getDate())
      }
      getMonthDay(year - 1, 12)
      for (let i = 1; i < 13; i++) {
        getMonthDay(year, i)
      }
      getMonthDay(year + 1, 1)
      const firstDay = new Date(`${year}/${month}/1`).getDay()// 本月的一号是周几
      return {
        week,
        month,
        monthList,
        firstDay,
        day
      }
    }
  }
</script>

<style lang="scss" scoped>
    .week-list {
        height: 27px;
       
       
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
        align-items: center;

        .week-item {
            font-size: 14px;
            font-weight: bold;
            line-height: 20px;
            color: #9A9A9A;
        }
    }

    .day-list {
        display: flex;
        flex-wrap: wrap;
        padding-top: 12px;

        .day, .prev, .next {
            width: calc(100% / 7);
            font-size: 14px;
            font-weight: bold;
            line-height: 20px;
            color: #333333;
            padding: 12.5px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0.8;
			position: relative;
        }

        .day--active {
            background: rgba(255, 245, 229, 0.7);
            border-radius: 50%;
			color: rgba(254, 152, 8, 1);
			font-weight: 600;
            width: 28px;
            height: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
		.right-lab{
			width: 13px;
			height: 13px;
			background: rgba(254, 152, 8, 0.1);
			color: rgba(254, 152, 8, 1);
			font-size: 12px;
			position: absolute;
			right: -5px;
			top: 5px;
			border-radius: 50%;
		}
    }
</style>
