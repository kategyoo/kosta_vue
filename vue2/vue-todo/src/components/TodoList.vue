<template>
    <div>
        <!--ul>li*3 -->
        <!-- <ul> -->
        <transition-group name="list" tag="ul">  
            <li v-for="(todoItem) in getTodoItems" v-bind:key="todoItem.item" class="shadow">
                <i class="fas fa-check checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}" 
                    @click="toggleComplete(todoItem)"></i>
                <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
                <span class="removeBtn" @click="removeTodo(todoItem)">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </transition-group>
        <!-- </ul> -->
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  mounted () {
    this.$store.dispatch('loadTodoItems')
  },
  computed: {
    ...mapGetters(['getTodoItems'])
    // getTodoItems(){
    //   return this.$store.getters.getTodoItems;
    // }
  },
  methods: {
      ...mapActions(['removeTodo']),
      // removeTodo(todoItem, index) {
      //     this.$store.commit('removeOneItem',{todoItem, index});
      // },
      toggleComplete(todoItem) {
          //this.$store.commit('toggleOneItem',{todoItem, index});
          todoItem.completed = !todoItem.completed;
          this.$store.dispatch('toggleOneItem',todoItem)
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

/* 리스트 아이템 트랜지션 효과*/

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
