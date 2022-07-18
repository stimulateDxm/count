<template>
  <div class="yiyi">
    <span @click="isgo=1">加</span> <span @click="isgo=2">减</span> <span @click="isgo=3">乘</span> <span @click="isgo=4">除</span>
<!--    <span @click="isgo=5" class="yiImg"><img src="../../src/assets/yiyi.png"></span>-->
  </div>
  <div class="k"></div>
  <div v-show="isgo==1"><Jia  ></Jia></div>
  <div v-show="isgo===2"><Jie  ></Jie></div>
  <div v-show="isgo===3"><Chen ></Chen></div>
  <div  v-show="isgo===4"><Chu ></Chu></div>
<!--  <div v-show="isgo===5"><My></My></div>-->

</template>

<script>
import Jia from "../components/jia"
import Jie from "../components/jie"
import Chen from "../components/chen"
import Chu from "../components/chu"
// import My from "../components/my"

import {reactive,toRefs} from 'vue'
export default {
  name: 'Home',
  components: {
    Jia,Jie,Chen,Chu
  },
  setup(){
    let h= reactive({
        isgo:1

        }
    )
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
