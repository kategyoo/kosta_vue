<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :my-message="name" :msg2="name" v-on:add-event="addTodo"/>
    <ul>
      <li v-for="(todo,index) in todoItems" :key="index">
        {{todo}}
      </li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      name: 'Hello 뷰 제이에스',
      todoItems:[]
    }
  },
  methods:{
    addTodo(todoItem){
      this.todoItems.push(todoItem);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
