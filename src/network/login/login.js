import Apirequest from '../index.js';

//用户登录
export function login(data) {
    return Apirequest.post({
        url: "/login",
        data
    })
}


//查询完整菜单树
export function roleMenu(id) {
    return Apirequest.get({
        url: `/role/${id}/menu`,
    })
}


//查询某个用户
export function queryUser(id) {
    return Apirequest.get({
        url: `/users/${id}`,
    })
}



