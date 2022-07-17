<template>
  <h1>减法</h1>
  <div class="yiyijie">
    <span>最小数</span><input type="text" v-model="mins"> <span>最大数</span><input type="text" v-model="maxs">
    <button @click="update()">更新</button>
  </div>
  <div v-for="(v,i) of nums" :key="i" class="jie">
    <span>{{ v.pre }}</span><p>-</p><span>{{v.next}}</span><p>=</p>
    <input type="text"  class="result" ref="results"  @keyup="inputRef($event,i)">
    <span  class="svgs" >
  </span>
  </div>
</template>

<script>
import {reactive,toRefs,ref} from 'vue'
export default {
  name: 'Jie',
  setup(){

    let h=reactive({
      results : ref(),
      nums:[],
      isof:false,
      mins:1,
      maxs:20
    })
    //随机数函数
    h.random=(min, max)=> {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    //随机生成20组对象并增加为一个数组
    for (let i=0; i<20;i++){
      const obj={pre:h.random(10,20),next:h.random(1,10)}
      h.nums.push(obj)
    }
    //更新减法
    h.update=()=>{
      h.nums=[]
      //随机生成20组对象并增加为一个数组
      for (let i=0; i<20;i++){
        const obj1={pre:h.random(parseInt(h.mins),parseInt(h.maxs)),next:h.random(parseInt(h.mins),parseInt(h.maxs))}
        h.nums.push(obj1)
        if(( h.nums[i].pre-h.nums[i].next)<0){
          h.nums[i].pre=h.nums[i].pre+h.nums[i].next
          h.nums[i].next=h.nums[i].pre-h.nums[i].next
          h.nums[i].pre=h.nums[i].pre-h.nums[i].next
        }
        h.results[i].value=""
        h.results[i].nextSibling.innerHTML=`<span  class="svgs" >
  </span>`
      }
    },
    //判断答得是否正确
    h. inputRef= ($event,i)=> {

      if ($event.target.value == h.nums[i].pre - h.nums[i].next) {
        $event.target.nextSibling.innerHTML=`  <span  class="svgs" >
     <svg  t="1657880356888" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3938" width="32" height="32"><path d="M511.999994 0C229.205543 0 0.020822 229.226376 0.020822 512.020827c0 282.752797 229.184721 511.979173 511.979173 511.979173s511.979173-229.226376 511.979173-511.979173C1023.979167 229.226376 794.794446 0 511.999994 0zM815.371918 318.95082l-346.651263 461.201969c-10.830249 14.370907-27.32555 23.409999-45.27877 24.742952-1.582882 0.124964-3.12411 0.166619-4.665338 0.166619-16.328682 0-32.074198-6.373185-43.779197-17.911565l-192.903389-189.44604c-24.617988-24.20144-24.992881-63.731847-0.791441-88.349835 24.20144-24.659643 63.731847-24.951226 88.349835-0.833096l142.042875 139.501932 303.788472-404.2182c20.744091-27.575479 59.899605-33.115568 87.516739-12.413131C830.534266 252.219827 836.116009 291.375341 815.371918 318.95082z" p-id="3939" fill="#1afa29"></path></svg>

  </span>`

      }else {
        $event.target.nextSibling.innerHTML= `<span  class="svgs" >
    <svg  t="1657880678306" class="icon" viewBox="0 0 1097 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4172" width="32" height="32"><path d="M476.282308 0C213.271094 0 0.042698 213.431156 0.000011 476.762516s213.132352 476.783859 476.143566 476.901247 476.303639-213.303097 476.431698-476.623786A476.570428 476.570428 0 0 0 476.282308 0.021343z m244.229271 661.401809a43.614657 43.614657 0 0 1-30.947517 74.199342 43.166451 43.166451 0 0 1-30.766101-12.80587L475.866117 538.838968 290.063624 722.165659a43.123765 43.123765 0 0 1-30.55267 12.613782 43.625328 43.625328 0 0 1-30.34991-74.412773l185.813164-183.326691-183.550794-186.026596a43.817416 43.817416 0 1 1 61.895035-62.001751l183.550794 186.015924 185.823836-183.326691a43.817416 43.817416 0 0 1 61.895035 62.001751l-186.752261 184.778023z m0 0" p-id="4173" fill="#d81e06"></path></svg>
  </span>`

      }
    }
    return {
      ...toRefs(h),

    }

  }
}

</script>

<style scoped>
h1,input{
  text-align: center;
}
.yiyijie{
  margin-top: 10px;
  margin-left: -20px;
  width: 100%;
}
.yiyijie span {
  width: 20%;
  font-size: 20px;
}
.yiyijie input{
  width: 80px;
  border: 1px solid gray;
  font-size: 20px;

}
.yiyijie button{
  background-color: #4e9ce9;
  border-radius: 50%;
  margin-top: -10px;
  opacity: 0.5;
}
.yiyijie button:hover{
  opacity: 1;
}

div{
  padding-left: 20px;
  width: 320px;
  display: flex;
  justify-content: space-between;

}
.jie{
  margin-top: 10px;

}
input,span{
  width: 2rem;
  margin-bottom: 15px;
  font-size: 20px;
  border: 1px solid white;
  text-align: center;
}
.result{
  border: 1px solid gray;
  width: 80px;
  height: 32px;
}
.svgs{
  height: 50px;
}
</style>
