//在这里发出请求
import createInstace from "./index";
import apiMap from './config/apisMap'
import common from './config/common'
import serverMap  from "./config/serverMap";
const apis = createInstace(serverMap, apiMap, common)
export default  apis.instance 