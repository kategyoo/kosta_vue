import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from  'vue-axios';
import todoApp from './modules/todoApp';
//Vue Library 등록
Vue.use(Vuex);
Vue.use(VueAxios, axios);

// const storage = {
//     fetch() {
//         const arr = [];
//         if(localStorage.length > 0){
//             for(let i=0; i < localStorage.length; i++) {
//                 if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
//                     arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//                 }
//             }
//         }
//         return arr;
//     },
// };


export const store= new Vuex.Store({
    modules : {
        todoApp
    }
});