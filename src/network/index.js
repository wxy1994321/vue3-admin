import { network } from './config/request';
const Apirequest = new network({
    baseURL: "/api",
    timeout: 10000,
})
export default Apirequest