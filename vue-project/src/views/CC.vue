<template>
    <button type="button" @click="childFunc" ref="btn">Click01</button>
</template>

<script>
export default {
    methods:{
        childFunc(){
            alert("부모 컴포넌트에서 직접 발생시킨 이벤트");
        },
    }
}
</script>