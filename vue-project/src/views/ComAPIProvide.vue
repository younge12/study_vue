<template>
    <CompoditionAPIInject/>
</template>
<script>
import { provide } from 'vue';
import CompoditionAPIInject from './ComAPIInject'
export default {
    components: {
        CompoditionAPIInject
    },
    setup(){
        provide('title' , 'Vue.js 프로젝트');
    }
}
</script>