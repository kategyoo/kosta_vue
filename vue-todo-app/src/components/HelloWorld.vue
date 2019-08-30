<template>
  <div class="hello">
    <h1>{{ myMessage }}</h1>
    <h2>두번째{{todoItem}}</h2>
    <input type="text" v-model="todoItem">
    <button v-on:click="addTodo">추가</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['myMessage', 'msg2'],
  data() {
    return {
      todoItem:''
    }
  },
  methods:{
    addTodo(){
     this.$emit('add-event', this.todoItem);
     this.todoItem='';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
