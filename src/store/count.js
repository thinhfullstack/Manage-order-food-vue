import { defineStore } from 'pinia'
import { ref } from 'vue'

const useCountStore = defineStore('count', () => {
    const count = ref(0)

    const upCount = () => {
        count.value += 1
    }

    const downCount = () => {
        count.value -= 1
    }

    return { 
        count, upCount, downCount
    };


})

export default useCountStore