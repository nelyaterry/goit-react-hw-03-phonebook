(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{18:function(n,t,e){},23:function(n,t,e){"use strict";e.r(t);var a,r,c,o,i,s,l,b,d,u,h,p,x,j,g,m,f=e(1),O=e.n(f),v=e(9),C=e.n(v),w=(e(18),e(12)),y=e(4),S=e(5),k=e(7),z=e(6),A=e(2),F=e(3),D=F.a.h1(a||(a=Object(A.a)(["\n  font-size: 64px;\n  margin: 24px 24px;\n  color: rgb(93 203 152);\n"]))),J=F.a.h2(r||(r=Object(A.a)(["\n  color: rgb(75, 75, 75);\n  margin: 0;\n"]))),N=F.a.div(c||(c=Object(A.a)(["\n  display: flex;\n"]))),H=F.a.div(o||(o=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 24px;\n  background-color: rgba(165, 230, 250, 0.3);\n  width: 65%;\n"]))),I=e(11),M=e(25),Z=F.a.button(i||(i=Object(A.a)(["\n  height: 50px;\n  padding: 12px 24px;\n  font-size: 18px;\n  color: white;\n  box-shadow: rgb(0 0 0 / 15%) 2px 2px 3px;\n  background-color: rgb(93 203 152);\n  outline: none;\n  cursor: pointer;\n  border: none;\n"]))),q=e(0),B=function(n){var t=n.children,e=n.onClick;return Object(q.jsx)(Z,{onClick:e,children:t})},E=F.a.form(s||(s=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 35%;\n  padding: 24px 32px;\n  background-color: rgba(67, 67, 67, 0.3);\n\n  & > button {\n    margin-top: 40px;\n  }\n"]))),L=F.a.label(l||(l=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 24px;\n"]))),K=F.a.span(b||(b=Object(A.a)(["\n  margin-bottom: 16px;\n  font-weight: 600;\n  font-size: 24px;\n  color: rgb(75 75 75);\n"]))),P=F.a.input(d||(d=Object(A.a)(["\n  height: 40px;\n  padding: 8px 24px;\n  font-size: 18px;\n  box-shadow: rgb(0 0 0 / 15%) 2px 2px 3px;\n  background-color: rgba(228, 228, 228, 0.5);\n  outline: none;\n  border: none;\n"]))),R=function(n){Object(k.a)(e,n);var t=Object(z.a)(e);function e(){var n;Object(y.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=t.call.apply(t,[this].concat(r))).state={name:"",number:""},n.handelChange=function(t){var e=t.currentTarget,a=e.name,r=e.value;n.setState(Object(I.a)({id:Object(M.a)()},a,r))},n.handelSubmit=function(t){t.preventDefault(),n.props.onSubmit(n.state),n.reset()},n.reset=function(){n.setState({name:"",number:""})},n}return Object(S.a)(e,[{key:"render",value:function(){return Object(q.jsxs)(E,{onSubmit:this.handelSubmit,children:[Object(q.jsxs)(L,{children:[Object(q.jsx)(K,{children:"Name"}),Object(q.jsx)(P,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handelChange})]}),Object(q.jsxs)(L,{children:[Object(q.jsx)(K,{children:"Number"}),Object(q.jsx)(P,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handelChange})]}),Object(q.jsx)(B,{type:"submit",children:"Add Contact"})]})}}]),e}(f.Component),T=F.a.ul(u||(u=Object(A.a)(["\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  width: 600px;\n"]))),U=F.a.li(h||(h=Object(A.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 12px;\n  margin-bottom: 12px;\n  box-shadow: rgb(0 0 0 / 15%) 2px 2px 3px;\n  background-color: rgb(93 203 152 / 20%);\n"]))),$=F.a.span(p||(p=Object(A.a)(["\n  width: 40%;\n  margin-right: 12px;\n  font-weight: 600;\n  font-size: 24px;\n  color: rgb(75 75 75);\n"]))),G=F.a.span(x||(x=Object(A.a)(["\n  margin-right: 12px;\n  font-weight: 500;\n  font-size: 20px;\n  color: rgb(75 75 75);\n"]))),Q=F.a.p(j||(j=Object(A.a)(["\n  font-weight: 600;\n  font-size: 24px;\n  color: rgb(75 75 75);\n"]))),V=function(n){var t=n.contacts,e=n.handleDeleteContact;return console.log(t),t.length>0?Object(q.jsx)(T,{children:t.map((function(n){var t=n.name,a=n.number,r=n.id;return Object(q.jsxs)(U,{children:[Object(q.jsx)($,{children:t}),Object(q.jsx)(G,{children:a}),Object(q.jsx)(B,{type:"button",onClick:function(){return e(r)},children:"Delete"})]},r)}))}):Object(q.jsx)(Q,{children:"Contact not found"})},W=F.a.h3(g||(g=Object(A.a)(["\n  color: rgb(93 203 152);\n  font-weight: 600;\n"]))),X=F.a.input(m||(m=Object(A.a)(["\n  width: 400px;\n  /* height: 40px; */\n  padding: 8px 24px;\n  margin-bottom: 24px;\n  font-size: 18px;\n  box-shadow: rgb(0 0 0 / 15%) 2px 2px 3px;\n  /* background-color: rgba(228, 228, 228, 0.5); */\n  outline: none;\n  border: none;\n"]))),Y=function(n){var t=n.value,e=n.changeFilter;return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(W,{children:"Find contact by name"}),Object(q.jsx)(X,{type:"text",name:"filter",value:t,onChange:e})]})},_=function(n){Object(k.a)(e,n);var t=Object(z.a)(e);function e(){var n;Object(y.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.formSubmitHandler=function(t){n.state.contacts.some((function(n){return n.name===t.name}))?alert(" ".concat(t.name," is alredy in the contacts list")):n.setState((function(n){return{contacts:[].concat(Object(w.a)(n.contacts),[t])}}))},n.handleDeleteContact=function(t){n.setState((function(n){return{contacts:n.contacts.filter((function(n){return n.id!==t}))}}))},n.changeFilter=function(t){n.setState({filter:t.target.value})},n.getFilteredContacts=function(){var t=n.state,e=t.filter,a=t.contacts,r=e.toLowerCase();return a.filter((function(n){return n.name.toLowerCase().includes(r)}))},n}return Object(S.a)(e,[{key:"componentDidMount",value:function(){var n=JSON.parse(localStorage.getItem("contacts"));n&&this.setState({contacts:n})}},{key:"componentDidUpdate",value:function(n,t){var e=this.state.contacts;e!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(e))}},{key:"render",value:function(){var n=this.state.filter;return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(D,{children:"Phonebook"}),Object(q.jsxs)(N,{children:[Object(q.jsx)(R,{onSubmit:this.formSubmitHandler}),Object(q.jsxs)(H,{children:[Object(q.jsx)(J,{children:"Contacts"}),Object(q.jsx)(Y,{value:n,changeFilter:this.changeFilter}),Object(q.jsx)(V,{contacts:this.getFilteredContacts(),handleDeleteContact:this.handleDeleteContact})]})]})]})}}]),e}(f.Component);C.a.render(Object(q.jsx)(O.a.StrictMode,{children:Object(q.jsx)(_,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.7da46e10.chunk.js.map