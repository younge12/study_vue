<template>
    <div id="wrap">
        <div class="tit">v-on click</div>
        <div>
           <button type="button" @click="increaseCounter">Add 1</button>
           <p>The counter is : {{counter}}</p>
        </div>
        
        <div class="tit"></div>
        <div>
           <button type="button" @click="setCount(7)">Set 7</button>
           <p>The counter is : {{counter02}}</p>
        </div>
        
        <div class="tit"></div>
        <div>
            <button type="button" @click="one(), two()">Click</button>
        </div>

        <div class="tit">v-on change</div>
        <div>
            <select v-model="selectedValue" @change="changeSelect">
                <option value="서울">서울</option>
                <option value="부산">부산</option>
                <option value="제주">제주</option>
            </select>
        </div>

        
    </div>
</template>

<script>
export default {
    data(){
        return{
            counter : 0,
            counter02 : 0,
            selectedValue : ''
        };
    },
    methods:{
        increaseCounter(){
            this.counter = this.counter + 1
        },
        setCount(counter02){
            this.counter02 = counter02;
        },
        one(){
            alert('One');
        },
        two(){
            alert('two');
        },
        changeSelect(){
            alert(this.selectedValue)
        }
    }
}
</script>
<style scoped>
    #wrap{margin:100px 0;}
    .tit{font-size:36px; font-weight:bold; letter-spacing:-0.04em; color:#222; margin-top:20px; border-top:2px solid #eee; padding:20px 0;}
</style>