<template>
	<div class="f-a-j">
		<div class="con ">
			<el-progress  class="progress" :percentage="75" :show-text="false" ></el-progress>
			<div class="box-t f-s">
				<div class="box-l font-din">
					<span>1</span>
					<span>/</span>
					<span>9</span>
				</div>
				<div class="box-r">
					<div>02:30</div>
				</div>
			</div>
			<div class="context">
				<div class="problem">
					各种原因引起的心境低落为主的精神
					状态为（）。
				</div>
				<div class="line"></div>
				<div class="answer-list">
					<div class="answer-item" v-for="(item, index) in answerList" :key="index" :style="{color: item === answer?'#1371F3': '#999999'}"
					 @click="checkAnswer(item)">
						<div class="letter f-a-j">{{item}}</div>
						<div class="answer">完全符合我</div>
						<div v-if="item === answer" class="check-answer">✓</div>
					</div>
				</div>
			</div>
			<div class="action-btn f-a-j">
				<div class="upon">上一题</div>
				<div class="down">下一题</div>
				<div class="up-job" @click="goResult">交卷</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		ref,
		reactive
	} from 'vue';
	export default {
		name: "evaluating",
		setup() {
           const  answerList = reactive(['A', 'B', 'C', 'D'])
		   const  opacity  = ref(0.4)
		   const  answer   =  ref('')
		   const  checkAnswer = (item)=>{
			   answer.value = item
		   }
		   const  goResult = ()=>{
			   this.$router.push('/personal/evaluation/result')
		   }
		   return{
			   goResult,
			   checkAnswer,
			   answer,
			   opacity,
			   answerList
		   }
		}
		
		
	}
</script>

<style lang="scss" scoped>
	$blue-color: #1371F3;

	.con {
		width: 1200px;
		background: #F5F5F5;
		margin-bottom: 203px;
		margin-top: 52px;
	}

	.progress {
		margin-bottom: 53px;
	}

	.check-answer {
		position: absolute;
		right: -12px;
	}

	.box-t {
		height: 63px;
		box-sizing: border-box;
		margin: 53px 15px 14px 23px;
		align-items: center;
		.box-l {
            
			color: $blue-color;
            margin-bottom: 53px;
			span:first-child {
				font-size: 50px;
				line-height: 75px;
			}

			span:nth-of-type(2) {
				margin: 0 5px;
			}

			span:not(:first-child) {
				opacity: 0.2;
			}
		}

		.box-r {
			width: 58px;
			height: 58px;
			line-height: 58px;
			background: #EFEFEF;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			background: rgba(254, 152, 8, 0.1);

			div {
				font-size: 15px;
				font-weight: 400;
				line-height: 48px;
				color: #FE9808;
				text-align: center;
				width: 48px;
				height: 48px;
				background: rgba(254, 152, 8, 0.2);
				border-radius: 50%;
			}
		}
	}

	.context {
		padding: 0 25px 0 30px;
        margin-bottom: 63px;
		.problem {
			font-size: 20px;
			font-weight: 500;
			line-height: 28px;
			color: $blue-color;
			padding-bottom: 17px;
		}
	}

	.line {
		margin-right: 3px;
		width: 100%;
		height: 1px;
		background: #F0F0F0;
	}

	.answer-list {
		padding-top: 38px;
		padding-bottom: 58px;

		.answer-item {
			position: relative;
			width: 100%;
			justify-content: flex-start;
			display: flex;
			padding-bottom: 30px;
			height: 22px;
			font-size: 17px;
			line-height: 24px;

			.letter {
				border-radius: 50%;
				border: 1px solid #000000;
				text-align: center;
				width: 22px;
				height: 22px;
				font-size: 15px;
			}

			.answer {
				padding-left: 17px;
				line-height: 22px;
			}
		}
	}

	.action-btn {

		font-size: 15px;
		font-family: PingFang SC;
		font-weight: 400;
		line-height: 21px;
		color: #333333;
		margin-bottom: 58px;

		.upon {
			margin-left: 126px;
		}

		.down {
			margin-left: 126px;
		}

		.up-job {
			background: rgba(19, 113, 243, 0.1);
			margin-left: 126px;
			margin-right: 63px;
			width: 80px;
			height: 30px;
			font-size: 15px;
			font-weight: 400;
			color: $blue-color;
			border-radius: 15px;
			line-height: 29px;
			text-align: center;
		}
	}
</style>
