export default {
    gutter: 10,
    labelWidth: 80,
    spacing: { padding: "10px 40px" },
    formItem: [
        {
            type: "text",
            label: "用户名",
            field: "name",
            property: {
                placeholder: "请输入用户名",
                clearable: true,
                size: "large"
            }
        },
        {
            type: "text",
            label: "真实姓名",
            field: "realname",
            property: {
                placeholder: "请输入真实姓名",
                clearable: true,
                size: "large",
            }
        },
        {
            type: "text",
            label: "手机号码",
            field: "cellphone",
            property: {
                placeholder: "请输入手机号码",
                clearable: true,
                size: "large",
            }
        },
        {
            type: "select",
            label: "状态",
            field: "enable",
            property: {
                clearable: true,
                size: "large",
            },
            option: [
                {
                    value: '1',
                    label: '启用',
                },
                {
                    value: '0',
                    label: '禁用',
                },
            ]
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