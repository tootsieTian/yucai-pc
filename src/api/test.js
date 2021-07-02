import axios,{get, post} from "../util/http/axios";
import baseURL from '../config/env'
axios.defaults.baseURL = baseURL

export function getIndex(params){
  return get('/api/index', params)
}
