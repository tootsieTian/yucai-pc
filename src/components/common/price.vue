<template>
    <span class="price" :style="{color,fontWeight,opacity,lineHeight}">
        <span>￥</span>
        <span :style="{fontSize}" class="price-money">{{money}}</span>
    </span>
</template>

<script>
  export default {
    name: "price",
    props: {
      money:{
        type: String,
        default: '0.00'
      },
      fontSize: {
        type: String,
        default: '20px'
      },
      lineHeight: {
        type:String,
        default: '24px',
      },
      color: {
        type: String,
        default: '#333333'
      },
      fontWeight: {
        type: String,
        default: '500'
      },
      opacity: {
        type: String,
        default: '1'
      }
    },
	setup(props){
		const { money,fontSize,lineHeight,color,fontWeight,opacity} = props
		// return{
		// 	money,fontSize,lineHeight,color,fontWeight,opacity
		// }
	}
  }
</script>

<style lang="scss" scoped>
    @import "src/styles/common/common";
    .price{
        font-family: DIN;
		margin-right: 4px;
        span:nth-of-type(1){
            font-size: 10px;
            margin-bottom: 4px;
        }
    }

</style>
