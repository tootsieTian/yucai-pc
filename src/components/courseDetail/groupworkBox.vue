<template>
	<div class="container-main" >
		<div class="title f-a" >他们正在拼团，可直接加入<div class="subtitle" >人满报名成功，不满退款</div></div>
		<div  class="item-con" >
			<div class="item f-s  f-a"  v-for="(item,index) in 3 " :key="index" >
				<div class="f" >
					<div  class="userpic" >
						<img src="../../assets/icon/sucai/17.png"  style="width: 40px; margin-right: 10px;" alt="">
					</div>
					<div  class="user-info f-c f-s" >
						<div style="color: rgba(51, 51, 51, 1);" >小梁</div>
						<div style="color: rgba(153, 153, 153, 1)" >正在拼团，还差1人</div>
					</div>
				</div>
				<div class="go-btn  f-a-j hand" >
					一起拼
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped >
	.container-main{
		background-color: #FFFFFF;
		padding: 26px 25px 35px 37px;
		box-sizing: border-box;
		 box-shadow: 0 3px 16px rgba(0, 0, 0, 0.04);
		 margin-bottom: 30px;
	}
	.title{
		color: #333333;
		font-size: 16px;
		line-height: 22px;
		margin-bottom: 19px;
		.subtitle{
			color: #999999;
			font-size: 12px;
			line-height: 17px;
			margin-left: 20px;
		}
	}
	.item-con{
		padding: 0 15px 0 21px;
		background-color: rgba(245, 246, 246, 1);
		font-size: 14px;
		color: rgba(51, 51, 51, 1);
		.item{
			border-bottom:  1px solid  #F2F2F2;
			padding: 13px 0 12px 0 ;
		}
		.userpic{
			
		}
		.user-info{
			padding: 4px 0;
		}
	}
	.go-btn{
		width: 78px;
		height: 30px;
		background: linear-gradient(180deg, #F3B14F 0%, #F09D3A 100%);
		border-radius: 15px;
		color: #FFFFFF;
	}
	.go-btn:hover{
		opacity: 0.5;
	}
</style>
