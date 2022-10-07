export default {
    border: true,
    size: "large",
    showSelection: true,
    showIndex: true,
    isShowFooter: true,
    propList: [
        { prop: 'name', label: '角色名称', minWidth: '120', align: "center", },
        { prop: 'intro', label: '角色权限', minWidth: '120', align: "center", },
        { prop: 'createAt', label: '创建时间', minWidth: '200', slotName: 'createAt', align: "center", },
        { prop: 'updateAt', label: '更新时间', minWidth: '200', slotName: 'updateAt', align: "center", },
        {
            prop: "operations",
            label: "操作",
            minWidth: "150",
            align: "center",
            slotName: "operations"
        },
    ]
}