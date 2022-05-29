<script>
    export default {
        inject: ['itemLength'], // ProvideInject.vue 에서 전달받음
        mounted() {
            alert(this.itemLength);
        }
    }
</script>