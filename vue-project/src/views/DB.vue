<template>
    <div id="wrap">
        <div class="tit">Data Binding</div>
        <h2>Hello, {{title}}!</h2>

        <div class="tit">Html</div>
        <div>
            <div>{{htmlString}}</div>
            <div v-html="htmlString"></div>
        </div>

        <div class="tit">Input Text</div>
        <div>
            <input type="text" v-model="valueModel"/>
        </div>

        <div class="tit">Input Number</div>
        <div>
            <input type="number" v-model.number="numberModel" >
        </div>

        <div class="tit">Textarea</div>
        <div>
            <textarea v-model="message" style="width:300px; height:100px;"></textarea>
        </div>

        <div class="tit">Select</div>
        <div>
            <select v-model="city">
                <option value="02">서울</option>
                <option value="063">부산</option>
                <option value="064">제주</option>
            </select>
        </div>

        <div class="tit">Checkbox</div>
        <div>
            <label><input type="checkbox" v-model="checked">{{checked}}</label>
        </div>

        <div class="tit">다중 Checkbox</div>
        <div>
            <label><input type="checkbox" value="서울" v-model="checked02" >서울</label>
            <label><input type="checkbox" value="부산" v-model="checked02" >부산</label>
            <label><input type="checkbox" value="제주" v-model="checked02" >제주</label>
            <br/>
            <span>체크한 지역 : {{checked02}}</span>
        </div>

        <div class="tit">다중 radio</div>
        <div>
            <label><input type="radio" v-bind:value="radioValue1"  v-model="picked">서울</label>
            <label><input type="radio" v-bind:value="radioValue2"  v-model="picked">부산</label>
            <label><input type="radio" v-bind:value="radioValue3"  v-model="picked">제주</label>
            <br/>
            <span>선택한 지역 : {{picked}}</span>
        </div>

        <div class="tit">attribue</div>
        <div>
            <img v-bind:src="imgSrc">
        </div>

        <div class="tit">disabled 제어</div>
        <div>
            <input type="text" v-model="textValue" />
            <button type="button" v-bind:disabled="textValue==''">Click</button>
        </div>

        <div class="tit">class Binding</div>
        <div>
            <div class="container" v-bind:class="{
                'active':isActive, 'text-red': hasError
            }">Class Binding</div>
        </div>

        <div class="tit">class Binding02</div>
        <div>
            <div class="container" v-bind:class="[activeClass, errorClass]">Class Binding</div>
        </div>

        <div class="tit">Inline Binding</div>
        <div v-bind:style="styleObject">인라인 스타일 바인딩</div>
        <div v-bind:style="[baseStyle, addStyle]">인라인 스타일 바인딩</div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            title : 'world',
            htmlString: "<p style='color:red;'>This is a red String</p>",
            valueModel: 'South Korea',
            numberModel: 3,
            message: '여러 줄을 입력 할 수 있는 textarea 입니다. ',
            city: '02',
            checked : true,
            checked02 : [],
            picked : '',
            radioValue1 : "서울",
            radioValue2 : "부산",
            radioValue3 : "제주",
            imgSrc : 'https://kr.vuejs.org/images/logo.png',
            textValue : "",
            isActive :true,
            hasError : false,
            activeClass:'active',
            errorClass:'text-red',
            styleObject:{
                color :'red',
                fontSize :'13px'
            },
            baseStyle:'background-color:yellow; width:100%; height:200px;',
            addStyle:'color:red; font-weight:bold;',
        };
    }
}
</script>
<style scoped>
    #wrap{margin:100px 0;}
    .tit{font-size:36px; font-weight:bold; letter-spacing:-0.04em; color:#222; margin-top:20px; border-top:2px solid #eee; padding:20px 0;}
    .container{width:100%; height:200px;}
    .active{background-color:yellow; font-weight:bold;}
    .text-red{color:red}
</style>