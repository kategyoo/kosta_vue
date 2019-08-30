<template>
    <div>
        <!-- <ul> -->
        <transition-group name="list" tag="ul">
            <li v-for="todoItem in getTodoItems" :key="todoItem.item" class="shadow">
                <i class="fas fa-check checkBtn" 
                  :class={checkBtnCompleted:todoItem.completed} 
                  @click="toggleComplete(todoItem)"></i>
                <span :class="{textCompleted:todoItem.completed}">{{todoItem.item}}</span>
                <span class="removeBtn" @click="removeTodo(todoItem)">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </transition-group>
        <!-- </ul> -->
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
    mounted(){
      this.$store.dispatch('loadTodoItems');
    },
    computed:{
      ...mapGetters(['getTodoItems'])
    },
    // props:['propsData'],
    methods:{
        // removeTodo(todoItem, index){
        //     // this.$emit('remove-event', todoItem, index);
        //     this.$store.commit('removeTodo', {todoItem, index})
        // },
        ...mapActions(['removeTodo']),
        //..mapMutations(['toggleComplete']),
        toggleComplete(todoItem){
          todoItem.completed = !todoItem.completed;
          this.$store.dispatch('toggleComplete', todoItem);
             // this.$emit("toggle-event", todoItem, index);
             //this.$store.commit('toggleComplete', todoItem)
        }
    }
    
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
