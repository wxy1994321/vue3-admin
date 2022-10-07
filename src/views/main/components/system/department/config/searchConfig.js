export default {
    gutter: 10,
    labelWidth: 80,
    spacing: { padding: "10px 40px" },
    formItem: [
        {
            type: "text",
            label: "角色名称",
            field: "name",
            property: {
                placeholder: "请输入角色名称",
                clearable: true,
                size: "large"
            }

        },
        {
            type: "text",
            label: "部门领导",
            field: "leader",
            property: {
                placeholder: "请输入部门领导",
                clearable: true,
                size: "large"
            }

        },
        {
            type: "datePicker",
            label: "创建时间",
            field: "createAt",
            property: {
                size: "large",
                startPlaceholder: "开始时间",
                endPlaceholder: "结束时间",
                type: "daterange",
                format: "YYYY/MM/DD",
                valueFormat: "YYYY-MM-DD"
            }
        },
    ]
}