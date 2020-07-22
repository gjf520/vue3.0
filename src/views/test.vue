<template>
    <div class='test'>
    <span>vue3.0体验</span>
    <div> test count: {{count}}</div>
    <div>count * 2 = {{doubleCount}}</div>
    <div>state from vuex {{a}}</div>
    <button @click="add">增加</button>
    <button @click="update">update a</button>
    </div>
    
</template>

<script>
import {ref,computed,watch,getCurrentInstance}  from  'vue'
export default {
    setup(){
        const count = ref(0)
        const add= ()=>{
            count.value ++
        }
        const doubleCount = computed(() => count.value * 2)
        watch (
            ()=>count.value,   //监听的值
            val=>{             //监听时候的回调
                console.log(`count is ${val}`)
            }
        )
        // Vue 3.0 中通过 getCurrentInstance 方法获取当前组件的实例，然后通过 ctx 属性获得当前上下文，
        const {ctx} = getCurrentInstance();
        console.log(ctx.$router.currentRoute.value) //当前路由

        // store  通过计算属性来引用vuex中的状态
        const a = computed(()=> ctx.$store.state.test.a)
        //更新store 
        const update =()=>{
            ctx.$store.commit('setTestA',count)
        }
        return {
            count,
            add,
            doubleCount,
            a,
            update
        }
    }
}
</script>
<style lang="scss" scoped>
.test{
    color: red;
    font-size: 30px;
}
</style>


