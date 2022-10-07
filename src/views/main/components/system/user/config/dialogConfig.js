export default {
    gutter: 10,
    labelWidth: 80,
    spacing: { padding: "0" },
    layout: { span: 24 },
    formItem: [
        { field: 'name', type: 'text', label: '用户名', placeHolder: '请输入用户名' },
        {
            field: 'realname',
            type: 'text',
            label: '真实姓名',
            placeHolder: '请输入真实姓名',
        },
        {
            field: 'password',
            type: 'password',
            label: '密码',
            placeHolder: '请输入密码',
            isHidden: false
        },
        { field: 'cellphone', type: 'text', label: '电话号码', placeHolder: '请输入电话号码' },
        { field: 'roleId', type: 'select', label: '选择角色', placeHolder: '请选择角色', options: [] },
        {
            field: 'departmentId',
            type: 'select',
            label: '选择部门',
            placeHolder: '请选择部门',
            options: []
        }
    ]
}