(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(0),u=n(2),r=n(14),o=n.n(r),i=n(4),s=n.n(i),l="/api/persons",j=function(){return s.a.get(l).then((function(e){return e.data}))},b=function(e){return s.a.post(l,e).then((function(e){return e.data}))},d=function(e){return s.a.delete("".concat(l,"/").concat(e)).then((function(e){return e.data}))},h=(n(38),function(e){var t=e.text;return Object(a.jsx)("h2",{children:t})}),f=function(e){return Object(a.jsx)("button",{onClick:e.handleClick,children:e.text})},m=function(e){var t=e.persons,n=e.handleDeletion;return Object(a.jsx)(a.Fragment,{children:t.map((function(e,t){return Object(a.jsxs)("p",{children:[e.name," ",e.number,Object(a.jsx)(f,{handleClick:function(){return t=e.id,c=e.name,void(window.confirm("Delete '".concat(c,"' ?"))&&d(t).then(n(c)));var t,c},text:"delete"})]},t)}))})},O=function(e){return Object(a.jsxs)("form",{onSubmit:e.onSubmit,children:[Object(a.jsxs)("div",{children:["name: ",Object(a.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(a.jsxs)("div",{children:["number: ",Object(a.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{type:"submit",children:"add"})})]})},x=function(e){var t=e.message;return null===t?null:Object(a.jsx)("div",{className:"error",children:t})},v=function(){var e=Object(u.useState)([]),t=Object(c.a)(e,2),n=t[0],r=t[1],o=Object(u.useState)(""),i=Object(c.a)(o,2),s=i[0],l=i[1],d=Object(u.useState)(""),f=Object(c.a)(d,2),v=f[0],p=f[1],g=Object(u.useState)(null),w=Object(c.a)(g,2),N=w[0],C=w[1],S=Object(u.useState)(new Date),k=Object(c.a)(S,2),D=k[0],y=k[1];Object(u.useEffect)((function(){j().then((function(e){r(e)}))}),[D]);var E=function(e){C(e),setTimeout((function(){C(null)}),5e3)};return Object(a.jsxs)("div",{children:[Object(a.jsx)(h,{text:"Phonebook"}),Object(a.jsx)(x,{message:N}),Object(a.jsx)(O,{onSubmit:function(e){e.preventDefault();var t={name:s,number:v};n.some((function(e){return e.name===s}))?alert("".concat(s," is already added to phonebook")):b(t).then((function(e){r(n.concat(e)),E("".concat(s," added"))})),l(""),p("")},newName:s,newNumber:v,handleNameChange:function(e){console.log(e.target.value),l(e.target.value)},handleNumberChange:function(e){console.log(e.target.value),p(e.target.value)}}),Object(a.jsx)(h,{text:"Numbers"}),Object(a.jsx)(m,{persons:n,handleDeletion:function(e){j().then((function(e){r(e),y(new Date)})),E("".concat(e," deleted"))}})]})};o.a.render(Object(a.jsx)(v,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.fb94242e.chunk.js.map