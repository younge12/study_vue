<script>
import ApiMixins from '../api.js'
export default {
    mixins : [ApiMixins],
    data() {
        return {
            productList:[]
        };
    },
    async mounted(){
        this.productList = await this.$callAPI("https://c80959ba-0f67-43c9-83fe-5ba06d4cc0ba.mock.pstmn.io/list", "get");
        console.log(this.productList)
    }
}
</script>