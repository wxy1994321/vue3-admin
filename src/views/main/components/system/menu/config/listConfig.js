export default {
    border: true,
    size: "large",
    showSelection: false,
    showIndex: false,
    rowKey: "id",
    defaultExpandAll: false,
    isShowFooter: false,
    propList: [
        {
            label: "菜单名称",
            minWidth: "150",
            prop: "name",
            align: "center"
        },
        {
            label: "级别",
            minWidth: "80",
            prop: "type",
            align: "center"
        },
        {
            label: "菜单url",
            minWidth: "200",
            prop: "url",
            align: "center"
        },
        {
            label: "菜单icon",
            minWidth: "150",
            prop: "icon",
            align: "center"
        },
        {
            label: "排序",
            minWidth: "80",
            prop: "sort",
            align: "center"
        },
        {
            label: "创建时间",
            minWidth: "200",
            prop: "createAt",
            slotName: "createAt",
            align: "center"
        },
        {
            label: "更新时间",
            minWidth: "200",
            prop: "updateAt",
            slotName: "updateAt",
            align: "center"
        },
        {
            label: "操作",
            minWidth: "150",
            slotName: "operations",
            align: "center"
        }
    ]
}