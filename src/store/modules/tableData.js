import { information } from 'network/common/information.js';
export default {
    namespaced: true,
    state: {
        usersList: [],
        usersTotalCount: 0,
        departmentList: [],
        departmentTotalCount: 0,
        menuList: [],
        menuTotalCount: 0,
        roleList: [],
        roleTotalCount: 0,
        categoryList: [],
        categoryTotalCount: 0,
        goodsList: [],
        goodsTotalCount: 0,

    },
    actions: {
        async getData({ commit }, queryInfo) {
            const { pageName, query } = queryInfo
            const { data } = await information(pageName, query)
            commit(`set${pageName}List`, data.list)
            commit(`set${pageName}TotalCount`, data.totalCount)
        }
    },
    mutations: {
        setusersList(state, list) {
            state.usersList = list
        },
        setusersTotalCount(state, TotalCount) {
            state.usersTotalCount = TotalCount
        },
        setmenuList(state, list) {
            state.menuList = list
        },
        setmenuTotalCount(state, TotalCount) {
            state.menuTotalCount = TotalCount
        },
        setdepartmentList(state, list) {
            state.departmentList = list
        },
        setdepartmentTotalCount(state, TotalCount) {
            state.departmentTotalCount = TotalCount
        },
        setroleList(state, list) {
            state.roleList = list
        },
        setroleTotalCount(state, TotalCount) {
            state.roleTotalCount = TotalCount
        },
        setcategoryList(state, list) {
            state.categoryList = list
        },
        setcategoryTotalCount(state, TotalCount) {
            state.categoryTotalCount = TotalCount
        },
        setgoodsList(state, list) {
            state.goodsList = list
        },
        setgoodsTotalCount(state, TotalCount) {
            state.goodsTotalCount = TotalCount
        },
    },
    getters: {
        getList(state) {
            return function (pageName) {
                return state[`${pageName}List`]
            }
        },
        getTotalCount(state) {
            return function (pageName) {
                return state[`${pageName}TotalCount`]
            }
        },

    }
}