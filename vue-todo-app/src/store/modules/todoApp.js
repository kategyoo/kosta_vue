import axios from 'axios';

const server_url = 'http://localhost:4500/api/todos';

const state = {
    todoItems: [] //storage.fetch()
}
const actions = {
    loadTodoItems(context){
        axios.get(server_url)
            .then(res => res.data)
            .then(items => {
                context.commit('setTodoItems',items);
        });
    },
    removeTodo(context, payload){
        axios.delete(`${server_url}/${payload.id}`)
            .then(res => res.data)
            .then(items => {
                context.commit('setTodoItems',items);
        });
    },
    addTodo(context, payload){
        axios.post(server_url, payload)
            .then(res => res.data)
            .then(items => {
                    context.commit('setTodoItems',items);
        });
    },
    toggleComplete(context, payload){
        axios.put(`${server_url}/${payload.id}`, payload)
            .then(res => res.data)
            .then(items => {
                    context.commit('setTodoItems',items);
        });
    },
    clearTodo(context){
        axios.delete(server_url)
            .then(res => res.data)
            .then(items => {
                    context.commit('setTodoItems',items);
        });
    }
}
const getters = {
    getTodoItems(state){
        return state.todoItems;
    }
}
const mutations = {
    setTodoItems(state, items){
        state.todoItems = items;
    },
    addTodo(state, todoItem){
        let obj = {completed:false, item:todoItem} 
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    removeTodo(state, payload){
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index,1);
    },
    toggleComplete(state, payload){
        //todoItem.completed = !todoItem.completed;
        state.todoItems[payload.index].completed =! state.todoItems[payload.index].completed
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearTodo(state){
        localStorage.clear();
        state.todoItems=[];
      }
}
export default{
    state,
    getters,
    actions,
    mutations
}