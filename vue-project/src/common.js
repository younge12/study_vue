import {
    reactive,
    computed,
    toRefs
} from 'vue';
const plusClaculator = () => {
    let state = reactive({
        num1 : 0,
        num2 : 0,
        result : computed(() => parseInt(state.num1) + parseInt(state.num2))
    })
    return toRefs(state);
}
export {
    plusClaculator
}