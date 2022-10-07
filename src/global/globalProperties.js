import { utcToDateTimeFormat } from 'utils/dateFormat';

export default function (app) {
    app.config.globalProperties.$filters = {
        showStatus(enable) {
            return enable == 1 ? '启用' : '禁用'
        },
        formatTime(value) {
            return utcToDateTimeFormat(value)
        }
    }
}