(function(t){function e(e){for(var r,o,i=e[0],c=e[1],l=e[2],m=0,d=[];m<i.length;m++)o=i[m],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(r=!1)}r&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},s={app:0},n=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/learning-vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=a("5f5b"),n=a("b1e0"),o=a("260b"),i=(a("e71f"),{apiKey:"AIzaSyA8gxz8rjosluFuGb4oQ3em8WHUxH9_iZg",authDomain:"learning-vue-ssemtner.firebaseapp.com",projectId:"learning-vue-ssemtner",storageBucket:"learning-vue-ssemtner.appspot.com",messagingSenderId:"419303269049",appId:"1:419303269049:web:28b0138585dfad042db168",measurementId:"G-QHSN47EG9Z"}),c=o["a"].initializeApp(i),l=c,u=o["a"].firestore.Timestamp,m=c.firestore(),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("router-view",{staticStyle:{"margin-top":"80px"}})],1)},b=[],f=a("5530"),p=a("2f62"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{attrs:{id:"navbar-margin",toggleable:"lg",type:"dark",variant:"dark",fixed:"top"}},[a("b-navbar-brand",{attrs:{to:"/",exact:"","exact-active-class":"active"}},[t._v("Vue Example Apps")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{to:"/calculator",exact:"","exact-active-class":"active"}},[t._v("Calculator")]),a("b-nav-item",{attrs:{to:"/todo",exact:"","exact-active-class":"active"}},[t._v("Todo")]),a("b-nav-item",{attrs:{to:"/messaging",exact:"","exact-active-class":"active"}},[t._v("Messaging")])],1),a("b-navbar-nav",{staticClass:"ml-auto"},[t.user.loggedIn?a("b-nav-item-dropdown",{staticClass:"mr-4",attrs:{text:t.user.data.displayName}},[a("b-dropdown-item",{attrs:{to:"/dashboard",exact:"","exact-active-class":"active"}},[t._v("Dashboard")]),a("b-dropdown-item",{attrs:{exact:"","exact-active-class":"active"},on:{click:t.signOut}},[t._v("Sign Out")])],1):a("b-nav-item-dropdown",{staticClass:"mr-4",attrs:{text:"Not Logged In"}},[a("b-dropdown-item",{attrs:{to:"/auth/login",exact:"","exact-active-class":"active"}},[t._v("Login")]),a("b-dropdown-item",{attrs:{to:"/auth/register",exact:"","exact-active-class":"active"}},[t._v("Register")])],1)],1)],1)],1)},v=[],g=(a("ac1f"),a("5319"),a("2591")),_={name:"Nav",computed:Object(f["a"])({},Object(p["b"])({user:"user"})),methods:{signOut:function(){var t=this;g["a"].auth().signOut().then((function(){t.$router.replace({name:"Home"})}))}}},y=_,x=a("2877"),w=Object(x["a"])(y,h,v,!1,null,null,null),k=w.exports,O={components:{Navbar:k},computed:Object(f["a"])({},Object(p["b"])({user:"user"}))},j=O,N=(a("034f"),Object(x["a"])(j,d,b,!1,null,null,null)),C=N.exports,I=(a("f9e3"),a("2dd8"),a("8c4f")),E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:a("cf05")}})])}],D={name:"Home",components:{}},$=D,U=Object(x["a"])($,E,S,!1,null,null,null),L=U.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[t.show?a("b-form",{on:{change:t.onChange}},[a("b-row",[a("b-col",{attrs:{col:"12",md:"4"}},[a("b-form-group",{attrs:{id:"number-1",label:"First Number","label-for":"input"}},[a("b-form-input",{attrs:{id:"input",type:"number"},model:{value:t.number1,callback:function(e){t.number1=e},expression:"number1"}})],1)],1),a("b-col",{attrs:{cols:"12",md:"4"}},[a("b-form-group",{attrs:{id:"operation",label:"Operation",buttons:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.ariaDescribedBy;return[a("b-form-radio-group",{attrs:{options:t.options,"aria-describedby":r,name:"operation",buttons:"",size:"lg",stacked:""},model:{value:t.operation,callback:function(e){t.operation=e},expression:"operation"}})]}}],null,!1,3822468143)})],1),a("b-col",{attrs:{cols:"12",md:"4"}},[a("b-form-group",{attrs:{id:"number-2",label:"Second Number","label-for":"input"}},[a("b-form-input",{attrs:{id:"input",type:"number"},model:{value:t.number2,callback:function(e){t.number2=e},expression:"number2"}})],1)],1)],1)],1):t._e(),a("b-row",[a("b-col",{staticClass:"mx-auto",attrs:{cols:"10",lg:"6",md:"8"}},[a("b-card",{attrs:{title:"Result:"}},[isNaN(t.result)?a("h3",{staticClass:"my-4"},[t._v("Not A Number")]):a("h3",{staticClass:"my-4"},[t._v(t._s(t.result))])])],1)],1)],1)},M=[],P=(a("a9e3"),{name:"Input",data:function(){return{number1:0,number2:0,operation:"+",result:0,show:!0,options:[{text:"+",value:"+"},{text:"-",value:"-"},{text:"*",value:"*"},{text:"/",value:"/"}]}},methods:{onChange:function(t){t.preventDefault();var e=Number(this.number1),a=Number(this.number2),r=this.operation;"+"===r?this.result=e+a:"-"===r?this.result=e-a:"*"===r?this.result=e*a:"/"===r&&(this.result=e/a)}}}),A=P,z=Object(x["a"])(A,T,M,!1,null,"718c7270",null),R=z.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("b-card",{attrs:{title:"Register"}},[t.msg?a("b-alert",{attrs:{variant:"success",show:""}},[t._v(t._s(t.msg))]):t._e(),t.error?a("b-alert",{attrs:{variant:"danger",show:""}},[t._v(t._s(t.error))]):t._e(),a("b-form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("b-form-group",{attrs:{label:"Name","label-for":"name"}},[a("b-input",{attrs:{id:"name",type:"text",value:"",required:"",autofocus:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("b-form-group",{attrs:{label:"Email","label-for":"email"}},[a("b-input",{attrs:{id:"email",type:"email",value:"",required:"",autofocus:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("b-form-group",{attrs:{label:"Password","label-for":"password"}},[a("b-input",{attrs:{id:"password",type:"password",value:"",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")])],1)],1)],1)},G=[],H=(a("b0c0"),{name:"Register",data:function(){return{form:{name:"",email:"",password:""},msg:null,error:null}},methods:{submit:function(){var t=this;g["a"].auth().createUserWithEmailAndPassword(this.form.email,this.form.password).then((function(e){e.user.updateProfile({displayName:t.form.name}).then((function(){t.msg="Success",t.$router.replace({name:"Dashboard"})}))})).catch((function(e){t.error=e.message}))}}}),Y=H,W=Object(x["a"])(Y,q,G,!1,null,"11269580",null),B=W.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("b-card",{attrs:{title:"Login"}},[t.error?a("b-alert",{attrs:{variant:"danger",show:""}},[t._v(t._s(t.error))]):t._e(),a("b-form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("b-form-group",{attrs:{label:"Email","label-for":"email"}},[a("b-input",{attrs:{id:"email",type:"email",value:"",required:"",autofocus:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("b-form-group",{attrs:{label:"Password","label-for":"password"}},[a("b-input",{attrs:{id:"password",type:"password",value:"",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")])],1)],1)],1)},J=[],Q={name:"Register",data:function(){return{form:{email:"",password:""},error:null}},methods:{submit:function(){var t=this;g["a"].auth().signInWithEmailAndPassword(this.form.email,this.form.password).then((function(){t.$router.replace({name:"Dashboard"})})).catch((function(e){t.error=e.message}))}}},V=Q,X=Object(x["a"])(V,F,J,!1,null,"7c0363b5",null),Z=X.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("b-card",{attrs:{title:"Dashboard"}},[t.user.loggedIn?a("b-alert",{attrs:{variant:"success",show:""}},[t._v("You are logged in")]):t._e()],1)],1)},tt=[],et={name:"Dashboard",computed:Object(f["a"])({},Object(p["b"])({user:"user"}))},at=et,rt=Object(x["a"])(at,K,tt,!1,null,"2f178cd8",null),st=rt.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[this.user.loggedIn?0===t.tasks.length?a("b-container",[a("b-row",[a("b-col",[a("b-spinner")],1)],1),a("b-row",{staticClass:"mt-4"},[a("b-col",[a("b-button",{attrs:{variant:"primary"},on:{click:t.loadData}},[t._v("Press to load data")])],1)],1)],1):a("b-container",[a("h1",{staticClass:"mb-4"},[t._v(t._s(t.user.data.displayName)+"'s Tasks")]),0!==t.tasks.filter((function(t){return!t.completed})).length?a("h3",[t._v("Active")]):t._e(),a("b-list-group",{staticClass:"my-4"},t._l(t.tasks,(function(e){return a("b-container",{key:e.id},[e.completed?t._e():a("b-list-group-item",[a("b-row",[a("b-col",{attrs:{cols:"2"}},[a("b-button",{attrs:{variant:"outline-success"},on:{click:function(a){return t.complete(e.id)}}},[a("b-icon-check")],1)],1),a("b-col",{attrs:{cols:"8"}},[a("h6",[t._v(t._s(e.title))])]),a("b-col",{attrs:{cols:"2"}},[a("b-button",{attrs:{variant:"outline-danger"},on:{click:function(a){return t.removeItem(e.id)}}},[a("b-icon-x")],1)],1)],1)],1)],1)})),1),0!==t.tasks.filter((function(t){return t.completed})).length?a("h3",[t._v("Completed")]):t._e(),a("b-list-group",{staticClass:"my-4"},t._l(t.tasks,(function(e){return a("b-container",{key:e.id},[e.completed?a("b-list-group-item",[a("b-row",[a("b-col",{attrs:{cols:"2"}},[a("b-button",{attrs:{variant:"outline-primary"},on:{click:function(a){return t.activate(e.id)}}},[a("b-icon-arrow-counterclockwise")],1)],1),a("b-col",{attrs:{cols:"8"}},[a("h6",[t._v(t._s(e.title))])]),a("b-col",{attrs:{cols:"2"}},[a("b-button",{attrs:{variant:"outline-danger"},on:{click:function(a){return t.removeItem(e.id)}}},[a("b-icon-x")],1)],1)],1)],1):t._e()],1)})),1),a("b-form",{staticClass:"mt-4",on:{submit:function(e){return e.preventDefault(),t.addItem(e)}}},[a("b-form-group",{attrs:{label:"Task Title","label-for":"nameInput"}},[a("b-input",{attrs:{type:"text",required:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),a("b-button",{attrs:{variant:"success",type:"submit"}},[t._v("Add")])],1)],1):a("b-container",[a("b-alert",{attrs:{variant:"danger",show:""}},[t._v("You must be logged in to access your todo list.")]),a("b-button",{staticClass:"m-4",attrs:{to:"/auth/login",variant:"primary"}},[t._v("Login")]),a("b-button",{staticClass:"m-4",attrs:{to:"/auth/register",variant:"primary"}},[t._v("Register")])],1)],1)},ot=[],it=(a("99af"),a("c740"),a("4160"),a("a434"),a("159b"),a("2909")),ct={name:"Todo",data:function(){return{form:{title:""},tasks:[]}},computed:Object(f["a"])({count:function(){return this.tasks.length}},Object(p["b"])({user:"user"})),methods:{updateDatabase:function(){var t=[];this.tasks.forEach((function(e){t=[].concat(Object(it["a"])(t),[{title:e.title,completed:e.completed}])})),m.collection("todos").doc(this.user.data.email).set({tasks:t})},addItem:function(){this.tasks=[].concat(Object(it["a"])(this.tasks),[{id:this.count,title:this.form.title,completed:!1}]),this.form={},this.updateDatabase()},removeItem:function(t){this.tasks.splice(this.tasks.findIndex((function(e){return e.id===t})),1),this.updateDatabase()},complete:function(t){this.tasks[this.tasks.findIndex((function(e){return e.id===t}))].completed=!0,this.updateDatabase()},activate:function(t){this.tasks[this.tasks.findIndex((function(e){return e.id===t}))].completed=!1,this.updateDatabase()},loadData:function(){var t=this;try{m.collection("todos").doc(this.user.data.email).get().then((function(e){e.data().tasks.forEach((function(e){t.tasks=[].concat(Object(it["a"])(t.tasks),[{id:t.count,title:e.title,completed:e.completed}])}))}))}catch(e){console.log("error")}}},mounted:function(){this.loadData()}},lt=ct,ut=Object(x["a"])(lt,nt,ot,!1,null,null,null),mt=ut.exports,dt=function(){var t=this,e=this,a=e.$createElement,r=e._self._c||a;return r("b-container",[this.user.loggedIn?0===this.displayNameList.filter((function(e){return e===t.user.data.displayName})).length?r("b-container",[r("b-alert",{attrs:{variant:"danger",show:""}},[e._v("You do not have access")])],1):r("b-container",[r("h1",[e._v("Messaging")]),r("UserIconStack",{attrs:{id:"icon-stack","display-name-list":e.displayNameList}}),r("br"),r("Conversation",{staticClass:"mb-4",attrs:{doc:this.firestoreDoc,"current-user":this.user.data.displayName}})],1):r("b-container",[r("b-alert",{attrs:{variant:"danger",show:""}},[e._v("You must be logged in to access your messages.")]),r("b-button",{staticClass:"m-4",attrs:{to:"/auth/login",variant:"primary"}},[e._v("Login")]),r("b-button",{staticClass:"m-4",attrs:{to:"/auth/register",variant:"primary"}},[e._v("Register")])],1)],1)},bt=[],ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[t._l(this.messages,(function(e){return a("Message",t._b({key:e.id},"Message",e,!1))})),a("b-form",{on:{submit:function(e){return e.preventDefault(),t.sendMessage(e)}}},[a("b-row",[a("b-col",{attrs:{cols:"10"}},[a("b-input",{staticClass:"mt-2",attrs:{type:"text",required:""},model:{value:t.form_message,callback:function(e){t.form_message=e},expression:"form_message"}})],1),a("b-col",{attrs:{cols:"2"}},[a("b-button",{staticClass:"mt-2",attrs:{type:"submit",variant:"primary"}},[t._v("Add")])],1)],1)],1)],2)},pt=[],ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-row",{staticClass:"m-4",attrs:{"align-h":"center"}},["right"===t.side?a("b-col",{attrs:{cols:"0",md:"4"}}):t._e(),a("b-col",{attrs:{cols:"12",md:"8"}},[a("b-card",{attrs:{title:"Message"}},[a("b-card-body",[t._v(t._s(t.text))]),"left"===t.side?a("UserIcon",{staticClass:"message-icon left-message-icon bg-primary",attrs:{size:"50","display-name":this.from}}):"right"===t.side?a("UserIcon",{staticClass:"message-icon right-message-icon",attrs:{size:"50","display-name":this.from}}):t._e()],1)],1),"left"===t.side?a("b-col",{attrs:{cols:"0",md:"4"}}):t._e()],1),a("br")],1)},vt=[],gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-img",{staticClass:"user-icon",attrs:{rounded:"circle",src:this.src}})},_t=[],yt=(a("d3b7"),a("25f0"),{name:"UserIcon",props:["displayName","size"],computed:{src:function(){return"https://ui-avatars.com/api/?size=".concat(this.size,"&name=").concat(this.displayName,"&background=").concat(this.stringToColor(this.displayName))}},methods:{stringToColor:function(t){for(var e=0,a=1;a<t.length;a++)e=t.charCodeAt(a)+((e<<5)-e);for(var r="",s=0;s<3;s++){var n=e>>8*s&255;r+=("00"+n.toString(16)).substr(-2)}return r}}}),xt=yt,wt=Object(x["a"])(xt,gt,_t,!1,null,null,null),kt=wt.exports,Ot={name:"Message",components:{UserIcon:kt},props:["from","text","side"]},jt=Ot,Nt=(a("cd61"),Object(x["a"])(jt,ht,vt,!1,null,"1d2aea4a",null)),Ct=Nt.exports,It=m.collection("conversations"),Et={name:"Conversation",components:{Message:Ct},props:["doc","currentUser","members"],data:function(){return{firestore_data:null,form_message:""}},computed:{messages:function(){try{for(var t=[],e=0;e<this.firestore_data.messages.length;e++){var a=this.firestore_data.messages[e];t=[].concat(Object(it["a"])(t),[{id:e,from:a.from,text:a.text,side:a.from===this.currentUser?"right":"left"}])}return t}catch(r){return[]}}},methods:{updateDatabase:function(){var t=[];this.messages.forEach((function(e){t=[].concat(Object(it["a"])(t),[{from:e.from,text:e.text,timestamp:u.now()}])})),It.doc(this.doc).set({messages:t})},sendMessage:function(){this.firestore_data.messages=[].concat(Object(it["a"])(this.firestore_data.messages),[{from:this.currentUser,text:this.form_message,timestamp:u.now()}]),this.form_message="",this.updateDatabase()}},watch:{doc:{immediate:!0,handler:function(t){this.$bind("firestore_data",It.doc(t))}}}},St=Et,Dt=Object(x["a"])(St,ft,pt,!1,null,null,null),$t=Dt.exports,Ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{id:"stack"}},t._l(this.icons,(function(e){return a("UserIcon",t._b({key:e.id,attrs:{size:"50"}},"UserIcon",e,!1))})),1)},Lt=[],Tt={name:"UserIconStack",components:{UserIcon:kt},props:["displayNameList"],computed:{icons:function(){for(var t=[{id:0,displayName:this.displayNameList[0],style:"transform: translateX(".concat(20*(this.displayNameList.length-1)-10,"%)")}],e=1;e<this.displayNameList.length;e++)t=[].concat(Object(it["a"])(t),[{id:e,displayName:this.displayNameList[e],style:"transform: translateX(".concat(20*(this.displayNameList.length-1)-20*e-10,"%)")}]);return t}}},Mt=Tt,Pt=Object(x["a"])(Mt,Ut,Lt,!1,null,null,null),At=Pt.exports,zt={name:"Messaging",components:{UserIconStack:At,Conversation:$t},data:function(){return{firestoreDoc:"abc@abc.org&sjsemtner@gmail.com",displayNameList:["Scott Semtner","Another Person"]}},computed:Object(f["a"])({},Object(p["b"])({user:"user"}))},Rt=zt,qt=Object(x["a"])(Rt,dt,bt,!1,null,"030a46e5",null),Gt=qt.exports,Ht=[{path:"/",name:"Home",component:L},{path:"/calculator",name:"Calculator",component:R},{path:"/todo",name:"Todo",component:mt},{path:"/messaging",name:"Messaging",component:Gt},{path:"/auth/register",name:"Register",component:B},{path:"/auth/login",name:"Login",component:Z},{path:"/dashboard",name:"Dashboard",component:st}];r["default"].use(I["a"]);var Yt=new I["a"]({mode:"history",base:"/learning-vue/",routes:Ht}),Wt=Yt;r["default"].use(p["a"]);var Bt=new p["a"].Store({state:{user:{loggedIn:!1,data:{name:"",email:"",password:""}}},getters:{user:function(t){return t.user},email:function(t){return t.user.data.email}},mutations:{SET_LOGGED_IN:function(t,e){t.user.loggedIn=e},SET_USER:function(t,e){t.user.data=e}},actions:{fetchUser:function(t,e){var a=t.commit;a("SET_LOGGED_IN",null!==e),a("SET_USER",e?{displayName:e.displayName,email:e.email}:null)}}}),Ft=a("0ff2");r["default"].use(Ft["a"]),r["default"].use(s["a"]),r["default"].use(n["a"]),r["default"].config.productionTip=!1,l.auth().onAuthStateChanged((function(t){Bt.dispatch("fetchUser",t)})),new r["default"]({router:Wt,store:Bt,render:function(t){return t(C)}}).$mount("#app")},"85ec":function(t,e,a){},8617:function(t,e,a){},cd61:function(t,e,a){"use strict";a("8617")},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.8374bde2.js.map