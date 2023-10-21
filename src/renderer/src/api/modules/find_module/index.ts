
//在这里发出请求
import createInstace from "../../Apis/index";
import apiMap from '../../modules/find_module/configs/apisMap'
import common from '../../modules/find_module/configs/common'
import serverMap  from "../../modules/find_module/configs/serverMap";
const apis = createInstace(serverMap, apiMap, common);

export default  apis.instance 