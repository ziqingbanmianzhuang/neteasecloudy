//在这里发出请求
import createInstace from "./index";
import apiMap from './config/apisMap'
import common from './config/common'
import serverMap  from "./config/serverMap";
const apisInstance = createInstace(serverMap, apiMap, common)
export default  apisInstance 