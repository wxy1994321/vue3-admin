import router from 'router';
import { ElMessage } from 'element-plus'

import localCache from 'utils/localCache';
import { login, roleMenu, queryUser } from 'network/login/login.js';
import { dynamic } from 'utils/filterMenu';



export default {
    namespaced: true,
    state: {
        token: "",
        userMenuList: [],
        userInfo: {},
    },
    actions: {
        async loginAccount({ commit }, payload) {
            //登录
            const res = await login(payload)
            localCache.setCache("token", res.data.token)
            commit("setToken", res.data.token)

            //用户信息
            const userInfo = await queryUser(res.data.id)
            localCache.setCache("userInfo", userInfo.data)
            commit("setUserInfo", userInfo.data)

            //获得角色菜单
            const list = await roleMenu(res.data.id)
            localCache.setCache("userMenuList", list.data)
            commit("setUserMenuList", list.data)

            //动态注册路由
        },
        loginPhone({ commit }, payload) {
            ElMessage({
                showClose: true,
                message: '暂不支持手机登录',
                type: 'warning',
            })
        },
        refreshCache({ commit }) {
            const token = localCache.getCache("token")
            token && commit("setToken", token)

            const userInfo = localCache.getCache("userInfo")
            userInfo && commit("setUserInfo", userInfo)

            const userMenuList = localCache.getCache("userMenuList")
            userMenuList && commit("setUserMenuList", userMenuList)
        }

    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo
        },
        setUserMenuList(state, userMenuList) {
            state.userMenuList = userMenuList
            const routes = dynamic(userMenuList)
            routes.forEach(route => {
                router.addRoute("main", route)
            })
            router.push({
                path: "/main"
            })
        },
    }
}