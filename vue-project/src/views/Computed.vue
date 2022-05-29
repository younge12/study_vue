<template>
    <div id="wrap">
        <div class="tit">Computed</div>
        <div>
            <h1>{{firstName + '' + lastName}}</h1>
        </div>
        
        <div class="tit"></div>
        <h1>{{getFullName()}}</h1>

        <div class="tit">Watch</div>
        <div>
            <h1>Full Name : {{fullName}}</h1>
            <button type="button" @click="changeName">변경</button>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            firstName : 'Jeon',
            lastName : 'EunYoung',
            fullName: '',
        };
    },
    methods:{
        getFullName(){
            return this.firstName + '' + this.lastName;
        },
        changeName(){
            this.firstName = 'Lee';
        }
    },
    watch:{
        firstName(){
            this.fullName = this.firstName + '' + this.lastName;
        },
        listName(){
            this.fullName = this.firstName + '' + this.lastName;
        }
    },
    // mixins:[mixins],
    // mounted(){
    //     console.log('컴포넌트 mounted')
    // },
    // unmounted(){
    //     console.log('컴포넌트 unmounted')
    // }
}
</script>
<style scoped>
    #wrap{margin:100px 0;}
    .tit{font-size:36px; font-weight:bold; letter-spacing:-0.04em; color:#222; margin-top:20px; border-top:2px solid #eee; padding:20px 0;}
</style>