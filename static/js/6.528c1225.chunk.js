(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[6],{123:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__1WBN-"}},125:function(t,e,n){t.exports={contact:"ContactListElem_contact__1XB2T",contactDescr:"ContactListElem_contactDescr__K3lT6"}},129:function(t,e,n){t.exports={enter:"ContactList_enter__2unXX",enterActive:"ContactList_enterActive__2HVcS",exit:"ContactList_exit__rwLu5",exitActive:"ContactList_exitActive__2O4Gg"}},186:function(t,e,n){"use strict";n.r(e);var a=n(34),c=n(35),r=n(37),o=n(36),l=n(0),i=n.n(l),u=n(12),s=n(33),m=n(18),h=n.n(m),f=n(9);h.a.defaults.baseURL="http://localhost:2000";var p={addContact:function(t,e){return function(n){n(f.a.addContactRequest()),h.a.post("/contacts",{name:t,number:e}).then((function(t){var e=t.data;return n(f.a.addContactSuccess(e))})).catch((function(t){return n(f.a.addContactError(t))}))}},fetchContacts:function(){return function(t){t(f.a.fetchContactRequest()),h.a.get("/contacts").then((function(e){var n=e.data;return t(f.a.fetchContactSuccess(n))})).catch((function(e){return t(f.a.fetchContactError(e))}))}},deleteContact:function(t){return function(e){e(f.a.deleteContactRequest()),h.a.delete("contacts/".concat(t)).then((function(){return e(f.a.deleteContactSuccess(t))})).catch((function(t){return e(f.a.deleteContactError(t))}))}}},b=n(3),d=n(123),C=n.n(d),g=n(124),v=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(b.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,r=t.props.state.contacts.items;r&&r.find((function(t){return a===t.name}))?alert("Contact with such name is already exist"):t.props.onSubmit(a,c),t.setState({name:"",number:""})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return i.a.createElement("form",{onSubmit:this.handleSubmit,className:C.a.contactForm},i.a.createElement("label",{htmlFor:"nameInput"},"Name:",i.a.createElement("br",null),i.a.createElement("input",{className:"FormInput",type:"text",name:"name",value:e,placeholder:"enter name...",onChange:this.handleChange})),i.a.createElement("label",{htmlFor:"numberInput"},"Number:",i.a.createElement("br",null),i.a.createElement(g.a,{className:"FormInput",format:"(###) ###-####",mask:"",name:"number",value:n,placeholder:"enter number...",onChange:this.handleChange})),i.a.createElement("button",{type:"submit",disabled:!e.length||!n.length},"Add contact"))}}]),n}(l.Component),E=Object(u.b)((function(t){return{state:t}}),{onSubmit:p.addContact})(v),_=n(49),F={onChangeFilter:f.a.setFilter},O=Object(u.b)((function(t){return{value:s.a.getFilter(t)}}),F)((function(t){var e=t.value,n=t.onChangeFilter;return i.a.createElement("form",{className:"FilterForm"},i.a.createElement("label",{htmlFor:"filterInput"},"Find contacts by name",i.a.createElement("br",null),i.a.createElement("input",{type:"text",onChange:function(t){return n(t.target.value)},value:e,name:"filter",className:"FilterInput",placeholder:"start typing searching name..."})))})),j=n(188),x=n(88),y=n(125),N=n.n(y),L=n(183),S=n(126),k=n.n(S),A=n(182),w=Object(A.a)((function(t){return{margin:{margin:t.spacing(1)},extendedIcon:{marginRight:t.spacing(1)}}})),I=function(t){var e=t.contact,n=e.name,a=e.number,c=t.deleteContact,r=w();return i.a.createElement("li",{className:N.a.contact},i.a.createElement("p",{className:N.a.contactDescr},n,": ",a),i.a.createElement(L.a,{"aria-label":"delete",className:r.margin,type:"button",onClick:c},i.a.createElement(k.a,{fontSize:"small"})))},D=Object(u.b)(null,(function(t,e){return{deleteContact:function(){return t(p.deleteContact(e.contact.id))}}}))(I),R=n(129),q=n.n(R),T={enter:q.a.enter,enterActive:q.a.enterActive,exit:q.a.exit,exitActive:q.a.exitActive},X=Object(u.b)((function(t){if(t.contacts)return{contacts:s.a.getFilteredContacts(t)}}))((function(t){var e=t.contacts;return console.log("ContactList re-render"),i.a.createElement(j.a,{component:"ul"},e&&e.map((function(t){return i.a.createElement(x.a,{key:t.id,timeout:250,classNames:T},i.a.createElement(D,{contact:t}))})))})),B=n(130),H=n.n(B),J=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchContacts()}},{key:"render",value:function(){var t=this.props.contacts;return i.a.createElement("div",{className:"Wrapper"},i.a.createElement(_.a,null),i.a.createElement(E,null),t&&t.length>1&&i.a.createElement(O,null),i.a.createElement("h2",{className:"Title"},"Contacts"),this.props.isLoadingContacts&&i.a.createElement(H.a,{type:"Hearts",color:"pink",height:80,width:80}),i.a.createElement(X,null))}}]),n}(l.Component),W={onFetchContacts:p.fetchContacts};e.default=Object(u.b)((function(t){return{contacts:s.a.getContact(t),isLoadingContacts:s.a.getLoading(t)}}),W)(J)}}]);
//# sourceMappingURL=6.528c1225.chunk.js.map