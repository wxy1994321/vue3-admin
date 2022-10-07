export default {
    border: true,
    size: "large",
    showSelection: true,
    showIndex: true,
    isShowFooter: true,
    propList: [
        {
            prop: "name",
            label: "类别名称",
            align: "center",
            width: "120px",
        },
        {
            prop: "createAt",
            label: "创建时间",
            align: "center",
            slotName: "createAt",
            minWidth: "200",
        },
        {
            prop: "updateAt",
            label: "更新时间",
            align: "center",
            slotName: "updateAt",
            minWidth: "200",
        },
        {
            prop: "operations",
            label: "操作",
            align: "center",
            slotName: "operations",
            minWidth: "150",
        },
    ]
}