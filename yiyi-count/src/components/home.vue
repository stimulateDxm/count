<template>
  <div class="yiyi">
    <span @click="isgo=1" :style="{ opacity : isgo ===1 ? '0.8 ': '0.5'}">加</span> <span @click="isgo=2" :style="{ opacity : isgo ===2 ? '0.8 ': '0.5'}">减</span> <span @click="isgo=3" :style="{ opacity : isgo ===3? '0.8 ': '0.5'}">乘</span> <span @click="isgo=4" :style="{ opacity : isgo ===4 ? '0.8 ': '0.5'}">除</span>
<!--    <span @click="isgo=5" class="yiImg"><img src="../../src/assets/yiyi.png"></span>-->
  </div>
  <div class="over"><span>总完成:{{over}}</span><span>  + : {{jiaOver}}</span><span>  - : {{jieOver}}</span><span>  * : {{chenOver}}</span><span>  / : {{chuOver}}</span></div>
  <div class="k"></div>
  <div v-show="isgo===1"><Jia @overjia="showOverJia" ></Jia></div>
  <div v-show="isgo===2"><Jie  @overjie="showOverJie"></Jie></div>
  <div v-if="isgo===3"><Chen @overchen="showOverchen"></Chen></div>
  <div  v-if="isgo===4"><Chu @overchu="showOverchu"></Chu></div>
<!--  <div v-show="isgo===5"><My></My></div>-->

</template>

<script>
import Jia from "../components/jia"
import Jie from "../components/jie"
import Chen from "../components/chen"
import Chu from "../components/chu"
// import My from "../components/my"

import {reactive,toRefs,onUpdated} from 'vue'
export default {
  name: 'Home',
  components: {
    Jia,Jie,Chen,Chu
  },
  setup(){

    let h= reactive({
        isgo:1,
        over:0,
        jiaOver:0,
        jieOver:0,
        chenOver:0,
        chuOver:0,
        }
    )
//完成数量
     h.showOverJia=(v)=>{
       h.jiaOver=v
    }
    h.showOverJie=(v)=>{
      h.jieOver=v
    }
    h.showOverchen=(v)=>{
      h.chenOver=v
    }
    h.showOverchu=(v)=>{
      h.chuOver=v
    }
    onUpdated(()=>{
      // 完成总数
      h.over=h.jieOver+h.jiaOver+h.chenOver+h.chuOver
    })
    return{
      ...toRefs(h)
    }
  }

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  font-size: 20px;
}
.k{
  height: 90px;
}
.over {
  border: 1px solid lightseagreen;
  width: 100%;
  position: fixed;
  z-index: 9999999;
  background-color: #f7d8d8;
  top: 55px;
  display: flex;
  justify-content: space-evenly;
}
.over span{
  text-align: center;
}
.yiyi{
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 45px;
 position: fixed;
  z-index: 999999;
  background-color: #f7d8d8;

}
.yiyi span {
  font-size: 28px;
  width: 18%;
  text-align: center;
  background-color: #4e9ce9;
  border-radius: 50%;
  opacity: 0.5;
}
.yiyi span:hover{
  opacity: 0.8;
}
.yiImg{
  opacity: 0.9;
  border: 3px solid #53abe5;
  border-radius: 50%;
  overflow: hidden;
}
.yiImg img{
  width: 100%;
  height: 100%;
}
</style>
