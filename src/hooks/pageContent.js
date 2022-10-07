import { ref } from 'vue';
export default function () {
    const pageDialogRef = ref(null);
    const newdata = () => {
        pageDialogRef.value.dialogVisible = true
    }

    return { newdata, pageDialogRef }
}