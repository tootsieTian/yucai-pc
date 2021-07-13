<template>
    <div id="courseDetaili"	 class="container-main">
       <!-- {{courseDetail}} -->
    </div>
</template>

<script>
	import{toRefs,ref,onMounted} from "vue"
  export default {
    name: "courseExplain",
	props:{
		courseDetail:{
			type:String,
			default:""
		}
	},
    setup(props) {
	  
	   const {courseDetail} =toRefs(props) 
	  
       const setCourseDetail  = ()=> {
        
         setTimeout(() => {
           let dom = document.getElementById("courseDetaili")
           dom.innerHTML = courseDetail.value
		   console.log(courseDetail.value)
           dom.innerHTML = dom.innerText
           var domImg = dom.getElementsByTagName('img')[0]
           domImg.classList.add("container-main")
         }, 600)
       }
	   setCourseDetail()
	  
	   return {
		   setCourseDetail,
		   courseDetail,
		  
	   }
    }
  }
</script>

<style lang="scss" scoped>
    .container-main{
        margin-top: 30px;
        height: auto;
        background: #F4F4F4;
    }
</style>
