import axios,{get, post,uploadFile} from "@/util/http/axios";
import baseURL from '@/config/env'
axios.defaults.baseURL = baseURL
//上传图片图片接口
export function uploadimg(params) {
  return uploadFile('blade-resource/oss/endpoint/put-file-yvan', params)
}
