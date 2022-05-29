<template>
    <child-component @send-message="sendMessage"/>
</template>
<script>
    import ChildComponent from "./CC4";
    export default {
        components : { ChildComponent },
        methods : {
            sendMessage(data) {
                alert(data);
            }
        }
    }
</script>