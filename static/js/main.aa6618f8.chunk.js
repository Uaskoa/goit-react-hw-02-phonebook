(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(10),s=n.n(r),o=n(11),i=n(4),l=n(5),u=n(7),h=n(6),m=n(0),b=function(e){var t=e.value,n=e.onChange;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h3",{children:"Find contacts by name"}),Object(m.jsx)("input",{type:"text",className:"input",value:t,name:"filter",onChange:n})]})},d=n(2),j=n.n(d),f=(n(25),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.nameInputId=j.a.generate(),e.phoneInputId=j.a.generate(),e.handleNameChange=function(t){e.setState({name:t.currentTarget.value})},e.handlePhoneChange=function(t){e.setState({number:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(m.jsxs)("label",{className:"form-label",htmlFor:this.nameInputId,children:[Object(m.jsx)("span",{className:"form-label-title",children:"Name"}),Object(m.jsx)("input",{className:"input",type:"text",id:this.nameInputId,value:this.state.name,onChange:this.handleNameChange,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(m.jsxs)("label",{className:"form-label",htmlFor:this.phoneInputId,children:[Object(m.jsx)("span",{className:"form-label-title",children:"Number"}),Object(m.jsx)("input",{className:"input",type:"tel",id:this.phoneInputId,value:this.state.number,name:"number",onChange:this.handlePhoneChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(m.jsx)("button",{className:"form-button button",type:"submit",children:"Add contact"})]})]})}}]),n}(a.Component)),p=(n(9),function(e){var t=e.id,n=e.name,a=e.number,c=e.onDeleteContact;return Object(m.jsxs)("li",{className:"contact-list-item",children:[Object(m.jsxs)("span",{className:"contact-list-name",children:[n," "]}),Object(m.jsxs)("span",{className:"contact-list-number",children:[a," "]}),Object(m.jsx)("button",{type:"button",className:"button",onClick:function(){return c(t)},children:"Delete"})]})}),O=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(m.jsx)("ul",{className:"contact-list",children:t.map((function(e){return Object(m.jsx)(p,{id:e.id,name:e.name,number:e.number,onDeleteContact:n},e.id)}))})},x=(n(26),n(27),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[],filter:""},e.handleSearchChange=function(t){e.setState({filter:t.currentTarget.value})},e.formSubmitHandler=function(t){var n=t.name,a=t.number,c=n.toLowerCase();if(e.state.contacts.find((function(e){return e.name.toLowerCase()===c})))return alert("".concat(n," is already in contacts."));e.setState((function(e){return{contacts:[].concat(Object(o.a)(e.contacts),[{id:j.a.generate(),name:n,number:a}])}}))},e.getFilteredContacts=function(){var t=e.state,n=t.contacts,a=t.filter.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(a)}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.getFilteredContacts();return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"phonebook",children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(f,{onSubmit:this.formSubmitHandler}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(b,{value:this.state.filter,onChange:this.handleSearchChange}),Object(m.jsx)(O,{contacts:e,onDeleteContact:this.deleteContact})]})})})}}]),n}(a.Component));s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[28,1,2]]]);
//# sourceMappingURL=main.aa6618f8.chunk.js.map