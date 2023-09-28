
//在这里发出请求
import createInstace from "./index";
import apiMap from './configs/apisMap'
import common from './configs/common'
import serverMap  from "./configs/serverMap";
const apis = createInstace(serverMap, apiMap, common);

export default  apis.instance 