import Apirequest from "network"

//每个分类商品的个数
export function categoryCount() {
    return Apirequest.get({
        url: "/goods/category/count",
    })
}

//每个分类商品的销量
export function categorySale() {
    return Apirequest.get({
        url: "/goods/category/sale",
    })
}

//每个分类商品的收藏
export function categoryFavor() {
    return Apirequest.get({
        url: "/goods/category/favor",
    })
}

//销量前10的商品数量
export function saleTop10() {
    return Apirequest.get({
        url: "/goods/sale/top10",
    })
}

//不同城市的销量数据
export function addressSale() {
    return Apirequest.get({
        url: "/goods/address/sale",
    })
}

//商品数据统计的数量
export function amountList() {
    return Apirequest.get({
        url: "/goods/amount/list",
    })
}



