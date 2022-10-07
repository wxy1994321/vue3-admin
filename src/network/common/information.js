import Apirequest from '../index';


//获取列表
export function information(keyword, data) {
    return Apirequest.post({
        url: `/${keyword}/list`,
        data
    })
}

