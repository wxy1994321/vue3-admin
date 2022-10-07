import { ref } from 'vue';

export default function () {

    const pageContentRef = ref(null)

    const searchBtn = (query) => {
        pageContentRef.value.getData(query)
    };

    const refreshBtn = () => {
        pageContentRef.value.getData()
    }

    return { pageContentRef, searchBtn, refreshBtn }
}