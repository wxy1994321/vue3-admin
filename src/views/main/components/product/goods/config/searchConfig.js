export default {
    gutter: 10,
    labelWidth: 80,
    spacing: { padding: "10px 40px" },
    formItem: [
        {
            type: "text",
            label: "类别名称",
            field: "name",
            property: {
                placeholder: "请输入类别名称",
                clearable: true,
                size: "large"
            }
        },
        {
            type: "datePicker",
            label: "创建时间",
            field: "createAt",
            property: {
                clearable: true,
                size: "large",
                type: "daterange",
                rangeSeparator: "-",
                startPlaceholder: "开始日期",
                endPlaceholder: "结束日期",
                format: "YYYY/MM/DD",
                valueFormat: "YYYY-MM-DD"
            }
        },

    ]
}