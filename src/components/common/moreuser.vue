<template>
	<div class="cont f-a" >
		<div class="user-box"  v-for="(item,index) in userlist" :key="index"  :style="{ position:'absolute',left:index*12+'px' }" >
			<!-- <van-image  fit="fill"  height="24" :src="item.pic" /> -->
			<img :src="item.pic" style="height: 24px;" alt="">
		</div>
		<div class="mant" :style="{left: userlist!==undefined ? userlist.length*12+24+'px' : '0px' }"  ><slot></slot></div>
	</div>
</template>

<script>
	export default{
		props:{
			userlist:{
				type:Array,
				default:()=>{
					return[
						{pic:require('../../assets/icon/sucai/17.png')},
						{pic:require('../../assets/icon/sucai/18.png')},
						{pic:require('../../assets/icon/sucai/19.png')},
						{pic:require('../../assets/icon/sucai/20.png')},
						{pic:require('../../assets/icon/sucai/18.png')}
					]
				}
			}
		},

	}
</script>

<style  lang="scss" scoped>

	.user-box{
		width: 24px;
		height: 24px;
		background-color: #EFEFEF;
		border: 1px solid #FFFFFF;
		border-radius: 50%;
		::v-deep .van-image__img{
			border-radius: 50%;
		}
	}
	.cont{
		position: relative;
		width: 158px;
        height: 24px;
	}
	.mant{
		position: absolute;
		top: 6px;
		white-space: nowrap;
		font-size: 14px;
		color: #999999;
	}
</style>
