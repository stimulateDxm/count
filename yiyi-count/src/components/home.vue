<template>
  <div class="yiyi">
    <router-link to="/jia" >加</router-link>
    <router-link to="/jie">减</router-link>
    <router-link to="/chen">乘</router-link>
    <router-link to="/chu">除</router-link>
   <div class="test" >
     <span>测试</span>
     <ul>
       <li><a href="https://stimulatedxm.github.io/yiyi-count/rejiajie/index.html">两个数相加</a></li>
       <li><a href="https://stimulatedxm.github.io/yiyi-count/shanjia/index.html">三个数相加</a></li>
       <li><a href="https://stimulatedxm.github.io/yiyi-count/sijia/index.html">四个数相加</a></li>
       <li><a href="https://stimulatedxm.github.io/yiyi-count/wujia/index.html">五个数相加</a></li>
     </ul>
   </div>

<!--    <span @click="isgo=5" class="yiImg"><img src="../../src/assets/yiyi.png"></span>-->
  </div>
<!--  <div class="over"><span>总完成:{{over}}</span><span>  + : {{jiaOver}}</span><span>  - : {{jieOver}}</span><span>  * : {{chenOver}}</span><span>  / : {{chuOver}}</span></div>-->
  <div class="k"></div>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
<!--  <div v-show="isgo===5"><My></My></div>-->

</template>

<script>

// import My from "../components/my"

import {reactive,toRefs,onUpdated} from 'vue'
export default {
  name: 'Home',


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
  height: 50px;
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
  justify-content: space-between;
  width: 100%;
  height: 45px;
  position: fixed;
  z-index: 999999;
  background-color: #f7d8d8;

}
.yiyi a,.test{
  font-size: 26px;
  width: 15%;
  text-align: center;
  background-color: #9ac3ec;
  border-radius: 50%;
  color: white;
}
a{
text-decoration: none;
}
.yiyi a:hover{
  cursor:pointer;
  background-color: #0b7ced;
}
.test:hover ul{
  cursor:pointer;
  background-color: #0b7ced;
  display: block;
}
.test ul {
  z-index: 999;
  position: absolute;
  right: 0;
  top: 45px;
  opacity: 1;
  width: 100px;
  display: none;
}
.test ul li a{
  font-size: 20px;
  border-radius:95px ;
}
</style>
