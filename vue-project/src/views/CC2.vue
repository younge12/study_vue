<template>
    <button type="button" @click="callFromParent" ref="btn2">Click02</button>
</template>

<script>
export default {
    methods:{
        callFromParent(){
            alert("부모 컴포넌트에서 직접 호출한 함수");
        },
    }
}
</script>