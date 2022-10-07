import { categoryCount, categorySale, categoryFavor, saleTop10, addressSale, amountList } from "network/analysis/dashboard.js"

export default {
    namespaced: true,
    state: {
        categoryCountList: [],
        categorySaleList: [],
        categoryFavorList: [],
        saleTop10List: [],
        addressSaleList: [],
        amountListList: [],
    },
    actions: {
        async getDashboardData({ commit }) {
            const categoryCountList = await categoryCount()
            const categorySaleList = await categorySale()
            const categoryFavorList = await categoryFavor()
            const saleTop10List = await saleTop10()
            const addressSaleList = await addressSale()
            const amountListList = await amountList()
        }

    },
    mutations: {

    },
    getters: {
        
    }
}