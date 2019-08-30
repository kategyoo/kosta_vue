<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" @click="clearTodo">Clear All</span>
    </div>
</template>

<script>
import { mapActions} from 'vuex';
export default {
    methods:{
        ...mapActions(['clearTodo'])
        //...mapMutations(['clearTodo']),
        // clearTodo(){
        //     // this.$emit("removeAll-event");
        //     this.$store.commit("clearTodo");
        // }
    }
}
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>
