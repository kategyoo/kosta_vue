(function(t){function e(e){for(var n,s,r=e[0],i=e[1],d=e[2],u=0,f=[];u<r.length;u++)s=r[u],a[s]&&f.push(a[s][0]),a[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(f.length)f.shift()();return c.push.apply(c,d||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,r=1;r<o.length;r++){var i=o[r];0!==a[i]&&(n=!1)}n&&(c.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},a={app:0},c=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var l=i;c.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("64a9"),a=o.n(n);a.a},"0c63":function(t,e,o){},"0cb0":function(t,e,o){},"3d4e":function(t,e,o){"use strict";var n=o("8a84"),a=o.n(n);a.a},"3dc7":function(t,e,o){"use strict";var n=o("8103"),a=o.n(n);a.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("TodoHeader"),o("TodoInput"),o("TodoList"),o("TodoFooter")],1)},c=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("h1",[t._v("TODO it!")])])}],i=(o("f4d1"),o("2877")),d={},l=Object(i["a"])(d,s,r,!1,null,"977e96da",null),u=l.exports,f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"inputBox shadow"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodoItem,expression:"newTodoItem"}],attrs:{type:"text"},domProps:{value:t.newTodoItem},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)},input:function(e){e.target.composing||(t.newTodoItem=e.target.value)}}}),o("span",{staticClass:"addContainer",on:{click:t.addTodo}},[o("i",{staticClass:"fas fa-plus addBtn"})]),t.showModal?o("Modal",{on:{close:function(e){t.showModal=!1}}},[o("h3",{attrs:{slot:"header"},slot:"header"},[t._v("\n        경고!\n        "),o("i",{staticClass:"closeModalBtn fas fa-times",on:{click:function(e){t.showModal=!1}}})]),o("div",{attrs:{slot:"body"},slot:"body"},[t._v("\n        아무것도 입력하지 않으셨습니다.\n      ")])]):t._e()],1)},m=[],p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"modal"}},[o("div",{staticClass:"modal-mask"},[o("div",{staticClass:"modal-wrapper"},[o("div",{staticClass:"modal-container"},[o("div",{staticClass:"modal-header"},[t._t("header",[t._v("\n            default header\n          ")])],2),o("div",{staticClass:"modal-body"},[t._t("body",[t._v("\n            default body\n          ")])],2)])])])])},h=[],v=(o("a9dc"),{}),I=Object(i["a"])(v,p,h,!1,null,null,null),b=I.exports,T={data:function(){return{newTodoItem:"",showModal:!1}},methods:{addTodo:function(){if(""!==this.newTodoItem){var t={completed:!1,item:this.newTodoItem};this.$store.dispatch("addOneItem",t),this.clearInput()}else this.showModal=!this.showModal},clearInput:function(){this.newTodoItem=""}},components:{Modal:b}},g=T,_=(o("b418"),Object(i["a"])(g,f,m,!1,null,"1b0f42d2",null)),O=_.exports,w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("transition-group",{attrs:{name:"list",tag:"ul"}},t._l(t.getTodoItems,function(e){return o("li",{key:e.item,staticClass:"shadow"},[o("i",{staticClass:"fas fa-check checkBtn",class:{checkBtnCompleted:e.completed},on:{click:function(o){return t.toggleComplete(e)}}}),o("span",{class:{textCompleted:e.completed}},[t._v(t._s(e.item))]),o("span",{staticClass:"removeBtn",on:{click:function(o){return t.removeTodo(e)}}},[o("i",{staticClass:"fas fa-trash-alt"})])])}),0)],1)},y=[],C=o("cebc"),j=o("2f62"),x={mounted:function(){this.$store.dispatch("loadTodoItems")},computed:Object(C["a"])({},Object(j["c"])(["getTodoItems"])),methods:Object(C["a"])({},Object(j["b"])(["removeTodo"]),{toggleComplete:function(t){t.completed=!t.completed,this.$store.dispatch("toggleOneItem",t)}})},k=x,M=(o("3dc7"),Object(i["a"])(k,w,y,!1,null,"6a3f4695",null)),S=M.exports,$=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"clearAllContainer"},[o("span",{staticClass:"clearAllBtn",on:{click:t.clearTodo}},[t._v("Clear All")])])},E=[],B={methods:Object(C["a"])({},Object(j["b"])(["clearTodo"]))},P=B,A=(o("3d4e"),Object(i["a"])(P,$,E,!1,null,"60b77842",null)),J=A.exports,N={data:function(){return{todoItems:[]}},methods:{},components:{TodoHeader:u,TodoInput:O,TodoList:S,TodoFooter:J}},F=N,H=(o("034f"),Object(i["a"])(F,a,c,!1,null,null,null)),L=H.exports,D=o("bc3a"),q=o.n(D),z=o("a7fe"),G=o.n(z),K="http://localhost:4500/api/todos",Q={todoItems:[]},R={getTodoItems:function(t){return t.todoItems}},U={loadTodoItems:function(t){q.a.get("".concat(K)).then(function(t){return t.data}).then(function(e){t.commit("setTodoItems",e)})},removeTodo:function(t,e){q.a.delete("".concat(K,"/").concat(e.id)).then(function(t){return t.data}).then(function(e){t.commit("setTodoItems",e)})},addTodo:function(t,e){q.a.post("".concat(K),e).then(function(t){return t.data}).then(function(e){t.commit("setTodoItems",e)})},clearTodo:function(t){q.a.delete("".concat(K)).then(function(t){return t.data}).then(function(e){t.commit("setTodoItems",e)})},toggleComplete:function(t,e){q.a.put("".concat(K,"/").concat(e.id),e).then(function(t){return t.data}).then(function(e){t.commit("setTodoItems",e)})}},V={setTodoItems:function(t,e){t.todoItems=e},addOneItem:function(t,e){var o={completed:!1,item:e};localStorage.setItem(e,JSON.stringify(o)),t.todoItems.push(o)},removeOneItem:function(t,e){localStorage.removeItem(e.todoItem.item),t.todoItems.splice(e.index,1)},toggleOneItem:function(t,e){t.todoItems[e.index].completed=!t.todoItems[e.index].completed,localStorage.removeItem(e.todoItem.item),localStorage.setItem(e.todoItem.item,JSON.stringify(e.todoItem))},removeAllItems:function(t){localStorage.clear(),t.todoItems=[]}},W={state:Q,getters:R,actions:U,mutations:V};n["a"].use(j["a"]),n["a"].use(G.a,q.a);var X=new j["a"].Store({modules:{todo:W}});n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(L)},store:X}).$mount("#app")},"64a9":function(t,e,o){},"67dc":function(t,e,o){},8103:function(t,e,o){},"8a84":function(t,e,o){},a9dc:function(t,e,o){"use strict";var n=o("67dc"),a=o.n(n);a.a},b418:function(t,e,o){"use strict";var n=o("0c63"),a=o.n(n);a.a},f4d1:function(t,e,o){"use strict";var n=o("0cb0"),a=o.n(n);a.a}});
//# sourceMappingURL=app.6eb963e1.js.map