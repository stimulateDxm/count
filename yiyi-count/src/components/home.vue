<template>
  <div class="yiyi">
    <span @click="isgo=1">加</span> <span @click="isgo=2">减</span> <span @click="isgo=3">乘</span> <span @click="isgo=4">除</span>
  </div>
  <div class="k"></div>
  <div v-show="isgo==1"><Jia  ></Jia></div>
  <div v-show="isgo===2"><Jie  ></Jie></div>
  <div v-show="isgo===3"><Chen ></Chen></div>
  <div  v-show="isgo===4"><Chu ></Chu></div>

</template>

<script>
import Jia from "../components/jia"
import Jie from "../components/jie"
import Chen from "../components/chen"
import Chu from "../components/chu"

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
 position: fixed;
  z-index: 999999;
  background-color: #f7d8d8;

}
.yiyi span {
  font-size: 32px;
  width: 20%;
  text-align: center;
  background-color: #4e9ce9;
  border-radius: 50%;
  opacity: 0.5;
}
.yiyi span:hover{
  opacity: 0.8;
}
</style>
