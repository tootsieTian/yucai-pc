<template>
    <div class="message">
        <div class="message-item  hand" v-for="(item,index) in messageList" >
			<div class="f-s" >
			<div class="f-a" >
				<div class="yuan" ></div>
				<div class="title" ><span v-show="isComment" style="color: #999999;margin-right: 5px;" >老师回复了你的评论:</span>  {{ isComment ? item.reply :item.title  }}</div>
			</div>
			<div class="date" >{{item.date}}</div>
			</div>
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
    setup(props) {
      const {messageList,isComment} = props
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
			.yuan{
				margin-right: 20px;
				width: 6px;
				height: 6px;
				background: #E3E3E3;
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
			margin-left: 20px;
			padding: 4px 4px 3px 13px;
			background-color: #EAEAEA;
			font-weight: 400;
			line-height: 20px;
			color: #333333;
			font-size: 14px;
			margin-top: 6px;
			display: inline-block;
		}
	}
</style>
