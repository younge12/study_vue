<template>
    <child-component @send-message="sendMessage" ref="child_component2" />
</template>
<script>
import ChildComponent from "./CC2";
export default {
    components: { ChildComponent },
    mounted() {
        this.$refs.child_component2.callFromParent();
    },
};
</script>