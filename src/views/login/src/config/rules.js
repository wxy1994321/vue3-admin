//规则验证
const rules = {
    name: [
        { required: true, message: "请输入账号", trigger: "blur" },
        {
            pattern: /^[a-z0-9]{4,10}$/,
            message: "用户名必须是4-10个字母或者数字",
            trigger: "blur",
        },
    ],
    password: [
        { required: true, message: "请输入密码", trigger: "blur" },
        {
            pattern: /^[a-z0-9]{3,}$/,
            message: "密码必须是5-10个字母或者数字",
            trigger: "blur",
        },
    ],
};

const rulesphone = {
    phone: [
        { required: true, message: "请输入手机号", trigger: "blur" },
        {
            pattern: /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/,
            message: "请输入合法的手机号",
            trigger: "blur",
        },
    ],
    VerificationCode: [
        { required: true, message: "请输入短信", trigger: "blur" },
    ],
};

export { rules, rulesphone }