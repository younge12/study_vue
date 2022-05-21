<template>
    <div id="wrap">
        <div class="tit">v-if</div>
        <div>
            <h1 v-if="type=='A'">A</h1>
            <h1 v-else-if="type=='B'">B</h1>
            <h1 v-else>C</h1>
        </div>

        <div class="tit">v-show</div>
        <div>
            <h1 v-show="bShow">A</h1>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            type: 'A',
            bShow : true
        };
    }
}
</script>
<style scoped>
    #wrap{margin:100px 0;}
    .tit{font-size:36px; font-weight:bold; letter-spacing:-0.04em; color:#222; margin-top:20px; border-top:2px solid #eee; padding:20px 0;}
</style>