<template>
  <div>
  <div class="hend"><div class="yiImg"><img src="../../src/assets/yiyi.png"></div><span>一一</span></div>
  <div class="amount"><p>总做题量:???</p> </div>
    <div><p>加法题量:???</p><p>减法题量:???</p><p>乘法题量:???</p><p>除法题量:???</p></div>
  </div>
</template>

<script>
export default {
  name: 'My',
}
</script>

<style scoped>
.amount{
  margin: 10px;
}
.hend{
  display: flex;
  height: 60px;
}
.hend span{
  text-align: center;
  width: 80px;
  margin-top: 20px;
}
.yiImg{
  width: 60px;
  height: 60px;
  border: 3px solid #53abe5;
  border-radius: 50%;
  overflow: hidden;
}
.yiImg img{
  width: 100%;
  height: 100%;
}
</style>
