<template>
    <div>
        <child-component @send-message="sendMessage" ref="child_component"></child-component>
        <button type="button" @click="changeChildData">Change Child Data</button>
    </div>
</template>
<script>
    import ChildComponent from "./CC3";
    export default {
        components : { ChildComponent },
        methods : {
            changeChildData(){
                this.$refs.child_component.msg = "부모 컴포넌트가 변경한 데이터";
            }
        }
    }
</script>