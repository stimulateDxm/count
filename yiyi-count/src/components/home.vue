<template>

  <div class="yiyi">
    <span>加</span> <span>减</span> <span>乘</span>
  </div>
  <div class="k"></div>
  <Jia ></Jia>
  <Jie ></Jie>
  <Chen ></Chen>
</template>

<script>
import Jia from "../components/jia"
import Jie from "../components/jie"
import Chen from "../components/chen"

export default {
  name: 'Home',
  components: {
    Jia,Jie,Chen
  },

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
