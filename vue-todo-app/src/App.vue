<template>
    <div>
        <TodoHeader/>
        <TodoInput />
        <TodoList  />
        <TodoFooter />
    </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
    components:{
        TodoHeader,
        TodoInput,
        TodoList,
        TodoFooter
    },
    data() {
        return {
            todoItems:[]
        }
    },
    // created(){
    //     if(localStorage.length > 0 ){
    //         for(let i =0; i<localStorage.length;i++){
    //             if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
    //                 let itemJson = localStorage.getItem(localStorage.key(i));
    //                 this.todoItems.push(JSON.parse(itemJson));
    //             }

    //         }
    //     }
    // },
    methods: {
      // addTodo(todoItem){
      //   let obj = {completed:false, item:todoItem} 
      //   localStorage.setItem(todoItem, JSON.stringify(obj));
      //   this.todoItems.push(obj);
      // },
      // removeTodo(todoItemObj, index){
      //   localStorage.removeItem(todoItemObj.item);
      //   this.todoItems.splice(index,1);
      // },
      // toggleComplete(todoItemObj, index){
      //   //todoItem.completed = !todoItem.completed;
      //   this.todoItems[index].completed =! this.todoItems[index].completed
      //   localStorage.removeItem(todoItemObj.item);
      //   localStorage.setItem(todoItemObj.item, JSON.stringify(todoItemObj));
      // },
      // clearTodo(){
      //   localStorage.clear();
      //   this.todoItems=[];
      // }
    },
}
</script>

<style>
  body {
    text-align: center;
    background-color: #f6f6f6;
  }
  input {
    border-style: groove;
    width:200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
