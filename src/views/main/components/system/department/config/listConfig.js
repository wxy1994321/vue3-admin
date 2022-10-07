export default {
    border: true,
    size: "large",
    showSelection: true,
    showIndex: true,
    isShowFooter: true,
    propList: [
        {
            prop: "name",
            label: "部门名称",
            align: "center",
            width: "120px",
        },
        {
            prop: "leader",
            label: "部门领导",
            align: "center",
            width: "120px",
        },
        {
            prop: "parentId",
            label: "上级部门",
            align: "center",
            width: "120px",
        },
        {
            prop: "parentId",
            label: "创建时间",
            align: "center",
            minWidth: "200",
            slotName: "createAt"
        },
        {
            prop: "updateAt",
            label: "更新时间",
            align: "center",
            minWidth: "200",
            slotName: "updateAt"
        },
        {
            prop: "operations",
            label: "操作",
            minWidth: "150",
            align: "center",
            slotName: "operations"
        },
    ]
}