<template>
    <h2>{{title}}</h2>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            default:"부모 컴포넌트에서 자식 컴포넌트로 데이터 전달"
        }
    }
}
</script>