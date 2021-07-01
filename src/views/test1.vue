<template>
    <div>
        <h1>欢迎来到vue3.0</h1>
        <div>第{{year}}年</div>
        <div>姓名：{{name}}</div>
        <div>年龄：{{age}}</div>


    </div>
</template>

<script>
      import {ref,reactive,toRefs,watchEffect} from 'vue'
      //  computed, watch, getCurrentInstance, reactive
      export default {
            name: "test1",
            //setup接收两个参数 prop，context
            setup(){
                  const year = ref(0)
                  const user = reactive({
                        name:'gejianfang',
                        age:18
                  })
                  setInterval(()=>{
                        year.value ++;
                        user.age ++
                  },1000)
                  // watch(()=>user.age,(cur,pre)=>{
                  //       console.log(cur,'新值',pre,'旧值')
                  // });
                  //
                  // watch(year,(newValue,oldValue)=>{
                  //       console.log(newValue,'新值',oldValue,'旧值')
                  // },{deep:true})
                  // //
                  // watch([()=>user.age,year],([cur,pre],[newValue,oldValue])=>{
                  //       console.log(cur,'新值',pre,'旧值');
                  //       console.log(newValue,'新值',oldValue,'旧值')
                  // })
                  watchEffect(() => {
                              console.log(user,'88');
                              console.log(year,'99');
                        }
                  );

                  return{
                        year,
                        // user,
                        ...toRefs(user)  //toRefs解构，不需要写user.name 或者uesr.age
                  }

            }

      }
</script>

<style scoped>

</style>