<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
     count:{{count}}
     count*2: {{doubleCount}}
     }
    </div>
    <div>
      <button @click='add'>增加</button>
    </div>
  </div>
</template>
<script>
import {ref,computed,watch,} from 'vue'
export default {
  setup(){
   const count = ref(0)
   const doubleCount = computed(()=>count.value*2)
   const add =()=>{
     count.value++
    
   }
   watch(()=> count.value,
    val=> {
      console.log(val)
    }
   )
   
   return{
      //定义的变量
     count,
     doubleCount,
     //方法
     add,
   }
  }
 
}
</script>
<style lang="scss" scoped>

</style>


