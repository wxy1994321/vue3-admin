export let firstMenu
//动态路由
export function dynamic(userMenus) {
    //保存所有路由
    const allRouters = []

    //保存过滤的路由
    const routes = []

    //拿到所有的路由文件
    const flieMenus = require.context("router/main", true, /\.js/)

    flieMenus.keys().forEach(ele => {
        const route = require(`router/main/${ele.slice(2)}`)
        allRouters.push(route.default)
    })

    //递归匹配路由
    function recursion(userMenus) {
        for (const item of userMenus) {
            if (item.type == 1) {
                recursion(item.children)
            } else if (item.type == 2) {
                const findroute = allRouters.find(route => {
                    return route.path == item.url
                })

                findroute && routes.push(findroute)
                if (!firstMenu) {
                    firstMenu = item
                }
            }
        }
    }
    recursion(userMenus)
    return routes
}

//当前激活的菜单
export function activeMenu(userMenus, path) {
    for (const menu of userMenus) {
        if (menu.type == 1) {
            const defaultActive = menu.children.find(route => {
                return route.url == path
            })
            if (defaultActive) {
                return defaultActive
            }
        }
    }
}


export function breadcrumbFn(userMenus, path) {
    const breadcrumbs = []
    for (const menu of userMenus) {
        if (menu.type == 1) {
            const result = menu.children.find(route => {
                return route.url == path
            })

            result && breadcrumbs.push({ name: menu.name }, { name: result.name })
        }
    }
    return breadcrumbs
}






