<template>
    <div class="message">
        <div class="message-item  hand" v-for="(item,index) in messageList" >
			<div class="f-s" >
			<div @click="open(item)" class="f-a" >
				<div class="yuan" ></div>
				<div class="title" ><span v-show="isComment" style="color: #999999;margin-right: 5px;" >老师回复了你的评论:</span> {{ isComment ? '' :item.title  }} </div>
			</div>
			<div class="date" >{{item.date}}</div>
			</div>
			<div class="com" v-show="isComment" >{{ isComment ? item.reply :item.title  }}</div>
			<div class="reply" v-show="isComment" >
				{{item.title}}
			</div>
		</div>
    </div>
</template>

<script>
  export default {
    name: "messageItem",
    props: {
      messageList: {
        type: Array,
        default: ()=>{[]}
      },
      isComment: {
        type: Boolean,
        default: false
      }
    },
    setup(props,contxt) {
      const {messageList,isComment} = props
	  const methods  ={
		  open(item){
			  contxt.emit('open',item)
		  }
	  }
      return {
       messageList,
	   isComment
      }
    }
  }
</script>

<style lang="scss" scoped >
	.message{
		font-family: PingFang SC;
		.message-item{
			margin-bottom: 27px;
			border-bottom: 1px solid #f3f3f3;
			padding-bottom: 33px;
			.yuan{
				margin-right: 40px;
				width: 6px;
				height: 6px;
				background: rgba(254, 152, 8, 1);
				border-radius: 50%;
				opacity: 1;
			}
			.title{
				font-size: 14px;
				font-weight: 400;
				line-height: 20px;
				color: #262626;
			}
			.date{
				font-size: 14px;
				font-weight: 400;
				line-height: 20px;
				color: #999999;
				opacity: 1;
			}
		}
		.reply{
			margin-left: 40px;
			padding: 13px;
			background-color: rgba(246, 248, 250, 1);
			font-weight: 400;
			line-height: 20px;
			color: #999999;
			font-size: 14px;
			margin-top: 6px;
			display: inline-block;
		}
		.com{
			color: rgba(51, 51, 51, 1);
			font-size: 14px;
			margin-left: 40px;
			margin-top: 11px;
			margin-bottom: 7px;
		}
	}
</style>
