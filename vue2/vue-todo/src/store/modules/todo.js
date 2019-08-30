import axios from 'axios';

const base_url = 'http://localhost:4500/api/todos';

const state = {
    todoItems: []
}

const getters = {
    getTodoItems(state){
        return state.todoItems;
    }
}

const actions = {
    loadTodoItems(context){
        axios.get(`${base_url}`)
        .then(res => res.data)
        .then(items => {
            context.commit('setTodoItems',items)
        })
    },
    removeTodo(context, payload){
        axios.delete(`${base_url}/${payload.id}`)
            .then(res => res.data)
            .then(items => {
                context.commit('setTodoItems',items)
            })
    },
    addTodo(context, payload){
        axios.post(`${base_url}`,payload)
            .then(res => res.data)
            .then(items => {
                context.commit('setTodoItems',items)
            })
    },
    clearTodo(context){
        axios.delete(`${base_url}`)
            .then(res => res.data)
            .then(items => {
                context.commit('setTodoItems',items)
            })
    },
    toggleComplete(context, payload){
        axios.put(`${base_url}/${payload.id}`,payload)
        .then(res => res.data)
        .then(items => {
            context.commit('setTodoItems',items)
        })
    }
}

const mutations = {
    setTodoItems(state, items){
        state.todoItems = items;
    },
    addOneItem(state, todoItem) {
        let obj = { completed: false, item: todoItem };
        localStorage.setItem(todoItem,JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state, payload) {
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    removeAllItems(state) {
        localStorage.clear();
        state.todoItems = [];
    }            
}

export default {
    state,
    getters,
    actions,
    mutations
}