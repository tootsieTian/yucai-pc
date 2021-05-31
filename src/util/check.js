 import { Toast } from 'vant';
 
 // 验证电话号码
  export function validatePhone(rule, value,callback) {
    const reg =/^[1][3-9][0-9]{9}$/;
    if(value==''||value==undefined||value==null){
      callback();
    }else {
      if ((!reg.test(value)) && value != '') {
        callback(Toast.fail('请输入正确的电话号码'));
      } else {
        callback();
      }
    }
  }
  
  // 验证身份证号码
  export function validateIdNo(rule, value,callback) {
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if(value==''||value==undefined||value==null){
      callback();
    }else {
      if ((!reg.test(value)) && value != '') {
        callback(Toast.fail('请输入正确的身份证号码'));
      } else {
        callback();
      }
    }
  }
  
  // 验证邮箱
  export function validateEMail(rule, value,callback) {
   const reg =/^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/;
   if(value==''||value==undefined||value==null){
   callback();
   }else{
   if (!reg.test(value)){
   callback(Toast.fail('请输入正确的邮箱'));
   } else {
   callback();
   }
   }
  }
  
  // 验证密码规则
  export const validatePsdReg = (rule, value, callback) => {
   if (!value) {
   return callback(Toast.fail('请输入密码'))
   }
   if (!/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){6,20}$/.test(value)) {
   callback(Toast.fail('请输入6-20位英文字母、数字或者符号（除空格），且字母、数字和标点符号至少包含两种'))
   } else {
   callback()
   }
  }