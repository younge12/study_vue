<template>
    <div>
        <textarea v-model="message" style="width:300px; height:100px;"></textarea>
    </div>
</template>
<script>
export default {
    data(){
        return {
            message: '여러 줄을 입력 할 수 있는 textarea 입니다. '
        };
    },
}
</script>