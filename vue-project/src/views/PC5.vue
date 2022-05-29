<template>
    <div>
        <button type="button" @click="checkChild">자식 컴포넌트 데이터 조회</button>
        <child-component ref="child_component5"></child-component>
    </div>
</template>
<script>
import ChildComponent from "./CC5"
export default {
    components : {ChildComponent},
    computed:{
        msg(){
            return this.$refs.child_component5.msg;
        }
    },
    methods:{
        checkChild(){
            alert(this.msg)
        }
    }
}
</script>