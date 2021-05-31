//表单序列化
export const serialize = data => {
  let list = [];
  Object.keys(data).forEach(ele => {
    list.push(`${ele}=${data[ele]}`)
  })
  return list.join('&');
};

// 时间戳转时间格式
export const dateConvert = (value) => {
  let hour,min,sec,createDate=value
  hour=parseInt(createDate/60/60)
  min=parseInt((createDate-hour*3600)/60)
  sec=parseInt(createDate-(hour*3600+min*60))
  hour = hour.toString().length === 1 ? '0'+hour : hour
  min = min.toString().length === 1 ? '0'+min+':' : min
  sec = sec.toString().length === 1 ? '0'+sec : sec
    hour = hour==='00'? '': hour+':'
    createDate=hour+min+sec
  return createDate
}

// 日期格式转换
Date.prototype.format = function(fmt) {
  var o = {
    "M+" : this.getMonth()+1,                 //月份
    "d+" : this.getDate(),                    //日
    "h+" : this.getHours(),                   //小时
    "m+" : this.getMinutes(),                 //分
    "s+" : this.getSeconds(),                 //秒
    "q+" : Math.floor((this.getMonth()+3)/3), //季度
    "S"  : this.getMilliseconds()             //毫秒
  };
  if(/(y+)/.test(fmt)) {
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  }
  for(var k in o) {
    if(new RegExp("("+ k +")").test(fmt)){
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    }
  }
  return fmt;
}
