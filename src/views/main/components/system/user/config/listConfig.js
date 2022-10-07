export default {
    border: true,
    size: "large",
    showSelection: true,
    showIndex: true,
    isShowFooter: true,
    propList: [
        {
            prop: "name",
            label: "用户名",
            align: "center",
            width: "120px",
        },
        {
            prop: "realname",
            label: "真实姓名",
            align: "center",
            width: "120px",
        },
        {
            prop: "cellphone",
            label: "手机号码",
            align: "center",
            width: "150px",

        },
        {
            prop: "enable",
            label: "状态",
            align: "center",
            width: "100px",
            slotName: "enable"
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