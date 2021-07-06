 // 验证电话号码
  export function validatePhone(value) {
    const reg =/^[1][3-9][0-9]{9}$/;
    if(value==''||value==undefined||value==null){
       return false;
    }else {
      if ((!reg.test(value)) && value != '') {
        return false;
      } else {
        return true;
      }
    }
  }


  // 验证真实姓名
   export function validateName(value) {
     const reg =/^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/;
     if(value==''||value==undefined||value==null){
        return false;
     }else {
       if ((!reg.test(value)) && value != '') {
         return false;
       } else {
         return true;
       }
     }
   }

  // 验证身份证号码
  export function validateIdNo(value) {
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if(value==''||value==undefined||value==null){
      return false;
    }else {
      if ((!reg.test(value)) && value != '') {
        return false;
      } else {
        return true;
      }
    }
  }

  // 验证邮箱
  export function validateEMail( value) {
   const reg =/^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/;
   if(value==''||value==undefined||value==null){
   return false;
   }else{
   if (!reg.test(value)){
   return false;
   } else {
   return true;
   }
   }
  }

  // 验证密码规则
  export const validatePsdReg = ( value) => {
   if (!value) {
   return false;
   }
   if (!/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){6,20}$/.test(value)) {
   return false;
   } else {
   return true;
   }
  }
