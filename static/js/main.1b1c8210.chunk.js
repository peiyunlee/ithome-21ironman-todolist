(this["webpackJsonpithome-21ironman-todolist"]=this["webpackJsonpithome-21ironman-todolist"]||[]).push([[0],{27:function(n,e,t){},30:function(n,e,t){"use strict";t.r(e);var r=t(0),c=t.n(r),i=t(9),a=t.n(i),o=t(4),d=t(11),s="ADD_TASK",A="DELETE_TASK",l="TOGGLE_TASK",b="SET_FILTER";var u=t(8),p=[{taskName:"task1",isCompleted:!1},{taskName:"task2",isCompleted:!0},{taskName:"task3",isCompleted:!1}];var j=Object(d.a)({filterReducer:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SHOW_ALL",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return e.filter;default:return n}},todosReducer:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case s:return[].concat(Object(u.a)(n),[{taskName:e.taskName,isCompleted:!1}]);case A:return[].concat(Object(u.a)(n.slice(0,e.idx)),Object(u.a)(n.slice(e.idx+1)));case l:var t=Object(u.a)(n);return t[e.idx].isCompleted=!t[e.idx].isCompleted,t;default:return n}}}),x=Object(d.b)(j),O=(t(27),t(18)),h=t(2),g=t(3);function f(n){return{type:l,idx:n}}var m=t(13);function k(n){return{type:b,filter:n}}var v,w,C=t(1),S=g.a.div(v||(v=Object(h.a)(["\n  display: flex;\n"]))),E=g.a.div(w||(w=Object(h.a)(["\n  background-color: #bebebe;\n  border: none;\n  border-bottom: 2px solid #3c5d95;\n  border-radius: 3px 3px 0 0;\n  padding: 5px 10px;\n  width: 45px;\n  color: white;\n  margin-right: 10px;\n  letter-spacing: 0.1em;\n  text-align: center;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #ffc236;\n  }\n"])));var B,I,T,y,Y=function(){var n=Object(o.b)();return Object(C.jsxs)(S,{children:[Object(C.jsx)(E,{onClick:function(){return n(k("SHOW_ALL"))},children:"All"}),Object(C.jsx)(E,{onClick:function(){return n(k("SHOW_TODO"))},children:"Todo"}),Object(C.jsx)(E,{onClick:function(){return n(k("SHOW_DONE"))},children:"Done"})]})},D=g.a.div(B||(B=Object(h.a)(["\n  background-color: white;\n  width: 80%;\n  height: 60px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  letter-spacing: 0.05em;\n  padding: 0 20px;\n"]))),H=g.a.div(I||(I=Object(h.a)(["\n  background-color: white;\n  border: 3px solid #f5727e;\n  border-radius: 50%;\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  background-color: ",";\n  display: ",";\n  align-items: center;\n  justify-content: center;\n"])),(function(n){return n.check?"#f5727e":"white"}),(function(n){return n.check?"flex":"auto"})),L=g.a.div(T||(T=Object(h.a)(["\n  flex-grow: 1;\n  margin: 0 20px;\n"]))),N=g.a.div(y||(y=Object(h.a)(["\n  background-color: #bebebe;\n  border: none;\n  border-radius: 3px;\n  padding: 5px 10px;\n  width: min-content;\n  color: white;\n  letter-spacing: 0.05em;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #ffc236;\n  }\n"])));var U,K,R=function(n){var e=Object(o.b)();return Object(C.jsxs)(D,{children:[n.task.isCompleted?Object(C.jsx)(H,{check:!0,onClick:function(){return e(f(n.task.idx))},children:Object(C.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACKSURBVHgBvZJhDYAgEIUvAhGMYASjEMEGVrABEYxgBCIQ5Xm34TyYA84fvu3GBrz3jTeI/hKAxBN4JotPjB6PJMRZzEmZvcVYUMmiLlXewDObqdJeTk+6SbXfpEZ1Id5N8rp138oHC0qFIaoKWKuAs0utAna8y9OIKuIYVZkdvv6mHCBlHdJD694FnK0w8IqSK54AAAAASUVORK5CYII=",alt:""})}):Object(C.jsx)(H,{onClick:function(){return e(f(n.task.idx))}}),Object(C.jsx)(L,{children:n.task.taskName}),Object(C.jsx)(N,{onClick:function(){return e((t=n.task.idx,{type:A,idx:t}));var t},children:"Delete"})]})},M=g.a.div(U||(U=Object(h.a)(["\n  margin: 0 auto;\n  width: 80%;\n  max-width: 600px;\n  min-width: 300px;\n"]))),V=g.a.div(K||(K=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  padding: 30px 0;\n  background-color: #f8f8f8;\n"])));var Z,W,G,X,z,J=function(){var n=Object(o.c)((function(n){return n.todosReducer})),e=Object(o.c)((function(n){return n.filterReducer}));return Object(C.jsxs)(M,{children:[Object(C.jsx)(Y,{}),Object(C.jsx)(V,{children:function(){var t=[];return n.forEach((function(n,r){("SHOW_ALL"===e||"SHOW_TODO"===e&&!n.isCompleted||"SHOW_DONE"===e&&n.isCompleted)&&t.push(Object(C.jsx)(R,{task:Object(m.a)(Object(m.a)({},n),{},{idx:r})},n.taskName))})),t}()})]})},_=g.a.div(Z||(Z=Object(h.a)(["\n  background-color: #3c5d95;\n  height: 100vh;\n  padding-top: 70px;\n"]))),q=g.a.h1(W||(W=Object(h.a)(["\n  margin: 0;\n  text-align: center;\n  font-weight: bold;\n  font-size: 28px;\n  letter-spacing: 2px;\n  color: #ffc236;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n"]))),Q=g.a.input(G||(G=Object(h.a)(["\n  padding: 0.5em;\n  margin: 0.5em;\n  background-color: inherit;\n  border: none;\n  border-bottom: 2px solid #333;\n  width: 300px;\n  font-size: 16px;\n  letter-spacing: 0.05em;\n\n  img {\n    cursor: pointer;\n  }\n\n  &::placeholder {\n    color: #333;\n  }\n"]))),F=g.a.div(X||(X=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 300px;\n  margin: 25px auto 40px;\n"]))),P=g.a.img(z||(z=Object(h.a)(["\n  cursor: pointer;\n"])));var $=function(){var n=Object(o.b)(),e=Object(r.useState)(""),t=Object(O.a)(e,2),c=t[0],i=t[1],a=function(e){n({type:s,taskName:c}),i("")};return Object(C.jsxs)(_,{children:[Object(C.jsx)(q,{children:"Todolist"}),Object(C.jsxs)(F,{children:[Object(C.jsx)(Q,{name:"addtask",type:"text",placeholder:"Add new task ...",value:c,onChange:function(n){i(n.target.value)}}),Object(C.jsx)(P,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADqSURBVHgB7ZY9DoIwGIbfVgcHSHSEEzjDOTgAHIBZNzfj6GS8gS5wAC7gAeAcjDaBHb8aXUxLYqSNGp6kadO/p/8pAxEEwZYxtqLkHMMjqO9TWZZrRqLDQ2SUrut2LAzDK8zM6BXBLYkkcw6LfLcsTVPQybrHxmWfMMp+TyZfkE5VUBSFsoHjOHBdF03ToG1bZZ0oipT5U2jwPA99SKEM76CV6UaXJAniOEae58iyDIPI6rpW5svle8a6OjrGoz/KetFeahP8954J2EFw+s8dYYfzhJ6ci+/7C5Iu6bM6w8BQv4Jzvq+qanMDu3ZF+dalmtYAAAAASUVORK5CYII=",alt:"",onClick:function(){return a()}})]}),Object(C.jsx)(J,{})]})};a.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(o.a,{store:x,children:Object(C.jsx)($,{})})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.1b1c8210.chunk.js.map