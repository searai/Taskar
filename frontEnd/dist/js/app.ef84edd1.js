(function(e){function t(t){for(var r,s,i=t[0],u=t[1],c=t[2],d=0,m=[];d<i.length;d++)s=i[d],o[s]&&m.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(m.length)m.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2cfa":function(e,t,n){"use strict";var r=n("99d9"),o=n.n(r);o.a},3689:function(e,t,n){},"38ed":function(e,t,n){},"3a57":function(e,t,n){},"3f25":function(e,t,n){"use strict";var r=n("a288"),o=n.n(r);o.a},"43d2":function(e,t,n){"use strict";var r=n("3a57"),o=n.n(r);o.a},"56a8":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("headmast"),n("nav-bar"),n("router-view")],1)},a=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"header"}},[e.getUserName?n("div",[n("button",{attrs:{id:"logout"},on:{click:e.logout}},[e._v("Logout")]),n("span",{attrs:{id:"username"}},[e._v("Welcome "+e._s(e.getUserName))])]):n("div",{attrs:{id:"LoginLinks"}},[n("router-link",{style:{textDecoration:e.linkStyle.login},attrs:{to:"/login"}},[e._v("Login")]),n("router-link",{style:{textDecoration:e.linkStyle.signUp},attrs:{to:"/signUp"}},[e._v("Sign-Up")])],1),n("h1",[e._v("Welcome to TASKAR")])])},i=[],u=n("cebc"),c=n("2f62"),l={computed:Object(u["a"])({},Object(c["b"])(["getUserName","getValue","getTitle"]),{linkStyle:function(){return"/login"==this.$route.path?{login:"underline",signUp:"none"}:"/signUp"==this.$route.path?{login:"none",signUp:"underline"}:{home:"none",toDoList:"none",about:"none",discussion:"none"}}}),methods:{logout:function(){this.$store.commit("logout")}}},d=l,m=(n("fd33"),n("2877")),p=Object(m["a"])(d,s,i,!1,null,"540174f6",null),v=p.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"nav"}},[n("router-link",{style:{textDecoration:e.linkStyle.home},attrs:{to:"/"}},[e._v("Home")]),n("router-link",{style:{textDecoration:e.linkStyle.toDoList},attrs:{to:"/toDoList"}},[e._v("To-do list")]),n("router-link",{style:{textDecoration:e.linkStyle.about},attrs:{to:"/about"}},[e._v("About")]),n("router-link",{style:{textDecoration:e.linkStyle.discussion},attrs:{to:"/discussion"}},[e._v("Discussion")])],1)},f=[],g={data:function(){return{}},computed:{linkStyle:function(){return"/"==this.$route.path?{home:"underline",toDoList:"none",about:"none",discussion:"none"}:"/toDoList"==this.$route.path?{home:"none",toDoList:"underline",about:"none",discussion:"none"}:"/about"==this.$route.path?{home:"none",toDoList:"none",about:"underline",discussion:"none"}:"/discussion"==this.$route.path?{home:"none",toDoList:"none",about:"none",discussion:"underline"}:{home:"none",toDoList:"none",about:"none",discussion:"none"}}}},b=g,w=(n("bf41"),Object(m["a"])(b,h,f,!1,null,"b65052a8",null)),y=w.exports,_={components:{navBar:y,headmast:v},created:function(){localStorage.getItem("userName")&&this.$store.commit("storeUser",{userName:localStorage.getItem("userName"),token:localStorage.getItem("token")})}},k=_,O=Object(m["a"])(k,o,a,!1,null,null,null),C=O.exports,x=n("8c4f"),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"changeView"}},[n("button",{style:{backgroundColor:e.addItemOrSeachItemStyling.addItem},on:{click:function(t){return e.addItemOrSeachItem("addItem")}}},[e._v("Add item")]),n("button",{style:{backgroundColor:e.addItemOrSeachItemStyling.searchItem},attrs:{id:"searchButton"},on:{click:function(t){return e.addItemOrSeachItem("searchItem")}}},[e._v("Search")])]),e.addItem?n("add-item"):n("div",{attrs:{id:"search"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchData,expression:"searchData"}],attrs:{type:"text",placeholder:"enter item details"},domProps:{value:e.searchData},on:{input:function(t){t.target.composing||(e.searchData=t.target.value)}}}),n("button",{on:{click:function(t){return e.search()}}},[e._v("Search")])]),e._l(e.listOfItems,function(e){return n("toDoItem",{key:e._id,attrs:{id:e._id,data:e.body}})})],2)},D=[],E=(n("96cf"),n("3b8d")),N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"toDoItem",style:{display:e.currentDisplay}},[n("div",{attrs:{id:"inner-div"}},[e._v("\n      "+e._s(e.data)+"\n      "),n("div",{attrs:{id:"buttons"}},[n("button",{attrs:{id:"edit"},on:{click:function(t){return e.displayEdit()}}},[e._v("Edit")]),n("button",{attrs:{id:"remove"},on:{click:function(t){return e.removeItem()}}},[e._v("Remove")])])])]),n("save-changes",{attrs:{id:e.id,display:e.editDisplay}})],1)},S=[],$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:{display:e.display},attrs:{id:"changeStatus"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.editedData,expression:"editedData"}],attrs:{type:"text"},domProps:{value:e.editedData},on:{input:function(t){t.target.composing||(e.editedData=t.target.value)}}}),n("button",{attrs:{id:"edit"},on:{click:function(t){return e.editItem()}}},[e._v("Edit")])])},P=[],R=n("795b"),j=n.n(R),q=n("bc3a"),L=n.n(q);n("ed18").config();var M="/";console.log(M);var U=L.a.create({baseURL:M});U.interceptors.request.use(function(e){return localStorage.getItem("token")&&(e.headers={authorization:"Bearer ".concat(this.getToken)}),e},function(e){return j.a.reject(e)});var T=U,A={props:["id","display"],data:function(){return{editedData:""}},methods:{editItem:function(){T.put("/toDo/update/".concat(this.id),{body:this.editedData}).then(function(e){Ke.$emit("updateList"),console.log(e)}).catch(function(e){return console.log(e)}),Ke.$emit("change")}}},B=A,H=(n("3f25"),Object(m["a"])(B,$,P,!1,null,null,null)),V=H.exports,F={props:["data","id"],data:function(){return{currentDisplay:"block",editDisplay:"none"}},methods:{displayEdit:function(){this.currentDisplay="none",this.editDisplay="block"},removeItem:function(){T.delete("/toDo/remove/".concat(this.id)).then(function(){Ke.$emit("updateList")}).catch(function(e){return console.error(e)})}},components:{saveChanges:V},created:function(){var e=this;Ke.$on("change",function(){e.currentDisplay="block",e.editDisplay="none"})}},z=F,J=(n("eb67"),Object(m["a"])(z,N,S,!1,null,"e3245e62",null)),W=J.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"addItem"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newItem,expression:"newItem"}],attrs:{type:"text",placeholder:"Enter the new item"},domProps:{value:e.newItem},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addItem(t)},input:function(t){t.target.composing||(e.newItem=t.target.value)}}}),n("button",{on:{click:e.addItem}},[e._v("Submit")])])])},Q=[],Y={props:[],data:function(){return{newItem:""}},computed:Object(u["a"])({},Object(c["b"])(["getUserName"])),methods:{addItem:function(){T.post("/toDo/add",{body:this.newItem,author:this.getUserName}).then(function(e){console.log(e),Ke.$emit("updateList")}).catch(function(e){return console.error(e)})}}},G=Y,X=(n("6dd7"),Object(m["a"])(G,K,Q,!1,null,"4cf2e6dd",null)),Z=X.exports,ee={name:"app",components:{toDoItem:W,addItem:Z},data:function(){return{listOfItems:[],searchData:"",addItem:!0}},computed:{addItemOrSeachItemStyling:function(){return this.addItem?{addItem:"blue",searchItem:"grey"}:{addItem:"grey",searchItem:"blue"}}},methods:{getAll:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.get("/toDo/getAll/".concat(this.$store.getters.getUserName));case 3:t=e.sent,this.listOfItems=t.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(){return e.apply(this,arguments)}return t}(),search:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,localStorage.setItem("search",this.searchData),e.next=4,T.get("/toDo/search/".concat(this.$store.getters.getUserName,"?search=").concat(this.searchData));case 4:t=e.sent,this.listOfItems=t.data,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.error(e.t0);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(){return e.apply(this,arguments)}return t}(),addItemOrSeachItem:function(e){this.addItem="addItem"===e}},created:function(){var e=this;localStorage.getItem("search")?(this.addItem=!1,this.searchData=localStorage.getItem("search"),T.get("/toDo/search/".concat(this.$store.getters.getUserName,"?search=").concat(this.searchData)).then(function(t){return e.listOfItems=t.data}).catch(function(e){return console.log(e)})):this.getAll(),Ke.$on("updateList",function(){e.getAll()})}},te=ee,ne=(n("43d2"),Object(m["a"])(te,I,D,!1,null,"6e85ea66",null)),re=ne.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("This is the about page!")]),n("p",[e._v("\n    "+e._s(e.sampleData)+"\n")])])},ae=[],se=(n("7f7f"),{data:function(){return{sampleData:this.$route.query.name}}}),ie=se,ue=(n("6b73"),Object(m["a"])(ie,oe,ae,!1,null,"49128599",null)),ce=ue.exports,le=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},de=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"}},[n("h1",[e._v("This is the home page!")]),n("p",[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum integer enim neque volutpat ac tincidunt. Amet porttitor eget dolor morbi non arcu. Risus nec feugiat in fermentum. Quis blandit turpis cursus in hac. In hendrerit gravida rutrum quisque non tellus orci ac. Diam volutpat commodo sed egestas. Leo a diam sollicitudin tempor id eu. Nunc id cursus metus aliquam eleifend mi. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Ut tellus elementum sagittis vitae et.\n\n        Augue eget arcu dictum varius duis at consectetur. Non blandit massa enim nec dui nunc. Interdum consectetur libero id faucibus nisl. Tellus at urna condimentum mattis pellentesque id nibh. Nunc eget lorem dolor sed viverra ipsum nunc. Nisi porta lorem mollis aliquam. Diam maecenas ultricies mi eget mauris pharetra et. Urna molestie at elementum eu facilisis sed. Consectetur purus ut faucibus pulvinar elementum. Mattis pellentesque id nibh tortor id. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Interdum velit euismod in pellentesque. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Risus nec feugiat in fermentum posuere urna nec. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Lectus nulla at volutpat diam ut venenatis tellus.\n\n        Odio pellentesque diam volutpat commodo sed. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Vulputate ut pharetra sit amet aliquam. Ac tortor vitae purus faucibus ornare suspendisse sed. Tortor posuere ac ut consequat semper. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Egestas pretium aenean pharetra magna ac placerat. At volutpat diam ut venenatis. Vehicula ipsum a arcu cursus. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Eu volutpat odio facilisis mauris sit amet massa. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt.\n\n        Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Faucibus vitae aliquet nec ullamcorper. Ornare quam viverra orci sagittis eu volutpat odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Suspendisse potenti nullam ac tortor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Consequat interdum varius sit amet mattis vulputate. Congue nisi vitae suscipit tellus mauris a diam maecenas. Sed tempus urna et pharetra. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Tempor commodo ullamcorper a lacus. Facilisi cras fermentum odio eu feugiat pretium nibh. Nunc mi ipsum faucibus vitae aliquet.\n    ")])])}],me={},pe=me,ve=(n("f1ee"),Object(m["a"])(pe,le,de,!1,null,"f4d593b6",null)),he=ve.exports,fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login"}},[e.$route.query.msg?n("h2",[e._v(e._s(e.$route.query.msg))]):e._e(),n("div",{attrs:{id:"container"}},[n("div",{attrs:{id:"inner-container"}},[n("div",[n("label",{attrs:{for:"email"}},[e._v("Email")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input-boxes",attrs:{type:"text"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("br"),e.emailError?n("p",{staticClass:"errors"},[e._v(e._s(e.emailError))]):e._e()]),n("br"),n("div",[n("label",{attrs:{for:"password",id:"password-label"}},[e._v("Password")]),n("br"),"checkbox"===(e.showPassword?"text":"password")?n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input-boxes",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.password)?e._i(e.password,null)>-1:e.password},on:{change:function(t){var n=e.password,r=t.target,o=!!r.checked;if(Array.isArray(n)){var a=null,s=e._i(n,a);r.checked?s<0&&(e.password=n.concat([a])):s>-1&&(e.password=n.slice(0,s).concat(n.slice(s+1)))}else e.password=o}}}):"radio"===(e.showPassword?"text":"password")?n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input-boxes",attrs:{type:"radio"},domProps:{checked:e._q(e.password,null)},on:{change:function(t){e.password=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input-boxes",attrs:{type:e.showPassword?"text":"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("div",{attrs:{id:"password"},on:{click:e.hideOrshowPassword}},[e._v(e._s(e.showOrHidePasswordMessage))]),e.passwordError?n("p",{staticClass:"errors"},[e._v(e._s(e.passwordError))]):e._e()])]),n("div",{attrs:{id:"submit-container"}},[n("input",{attrs:{type:"submit",id:"submit"},on:{click:e.sendData}})])])])},ge=[],be={data:function(){return{email:"",password:"",emailError:void 0,passwordError:void 0,showPassword:!1,showOrHidePasswordMessage:"Show Password"}},methods:Object(u["a"])({},Object(c["c"])(["storeUser"]),{sendData:function(){var e=this;T.post("/user/login",{email:this.email,password:this.password}).then(function(t){t.data&&(e.storeUser(t.data),localStorage.setItem("userName",t.data.userName),localStorage.setItem("token",t.data.token),e.$router.push("/toDoList"))}).catch(function(t){e.emailError=void 0,e.passwordError=void 0,t.response.data.emailError?e.emailError=t.response.data.emailError:t.response.data.passwordError?e.passwordError=t.response.data.passwordError:console.error(t)})},hideOrshowPassword:function(){this.showPassword?(this.showPassword=!1,this.showOrHidePasswordMessage="Show Password"):(this.showPassword=!0,this.showOrHidePasswordMessage="Hide Password")}})},we=be,ye=(n("74ad"),Object(m["a"])(we,fe,ge,!1,null,"562c2f60",null)),_e=ye.exports,ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"SignUp"}},[n("div",{attrs:{id:"container"}},[n("div",{attrs:{id:"inner-container"}},[n("label",{attrs:{for:"userName"}},[e._v("User-name")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],staticClass:"input-boxes",attrs:{type:"text"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),n("br"),e.userNameError?n("p",{staticClass:"errors"},[e._v(e._s(e.userNameErr))]):e._e(),n("br"),n("br"),n("label",{attrs:{for:"email"}},[e._v("Email")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input-boxes",attrs:{type:"text"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("br"),e.emailError?n("p",{staticClass:"errors"},[e._v(e._s(e.emailError))]):e._e(),n("br"),n("br"),n("label",{attrs:{for:"password"}},[e._v("Password")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input-boxes",attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("br"),e.passwordError?n("p",{staticClass:"errors"},[e._v(e._s(e.passwordError))]):e._e(),n("br"),n("br")]),n("div",{attrs:{id:"submit-container"}},[n("input",{attrs:{type:"submit",id:"submit"},on:{click:e.sendData}})])])])},Oe=[],Ce={data:function(){return{userName:"",email:"",password:"",userNameError:void 0,emailError:void 0,passwordError:void 0}},methods:{sendData:function(){var e=this;T.post("/user/signUp",{userName:this.userName,email:this.email,password:this.password}).then(function(t){t.data.success&&e.$router.push({path:"/login",query:{msg:"You are now signed up please login"}})}).catch(function(t){t.response.data.emailError?e.emailError=t.response.data.emailError:t.response.data.userError?e.userError=t.response.data.userError:t.response.data.passwordError?e.passwordError=t.response.data.passwordError:console.error(t)})}}},xe=Ce,Ie=(n("7f65"),Object(m["a"])(xe,ke,Oe,!1,null,"5fbc77d3",null)),De=Ie.exports,Ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._l(e.mainComments,function(e,t){return n("comment",{key:t,attrs:{id:e._id,commentBody:e.body,author:e.author,level:0}})}),e.showMore?n("div",{attrs:{id:"showMore"}},[n("button",{on:{click:function(t){e.numberOfComments+=1}}},[e._v("Show More")])]):e._e(),n("form",{on:{submit:function(e){e.preventDefault()}}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newComment,expression:"newComment"}],attrs:{rows:"4"},domProps:{value:e.newComment},on:{input:function(t){t.target.composing||(e.newComment=t.target.value)}}}),n("br"),n("input",{attrs:{type:"submit",id:"submit"},on:{click:e.postComment}})])],2)},Ne=[],Se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.getLevel<e.getLevelRange?n("div",{attrs:{id:"comment"}},[n("div",{attrs:{id:"comment-body"}},[n("strong",[e._v(e._s(e.author))]),n("p",[e._v(e._s(e.commentBody))])]),"edit"==e.editOrReply?n("div",{staticClass:"edit-pane"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.updatedComment,expression:"updatedComment"}],domProps:{value:e.updatedComment},on:{input:function(t){t.target.composing||(e.updatedComment=t.target.value)}}}),n("br"),n("button",{staticClass:"buttons",on:{click:e.editComment}},[e._v("Save changes")]),n("button",{staticClass:"buttons",on:{click:function(t){e.editOrReply="none"}}},[e._v("Cancel")])]):"reply"==e.editOrReply?n("div",{staticClass:"edit-pane"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.reply,expression:"reply"}],domProps:{value:e.reply},on:{input:function(t){t.target.composing||(e.reply=t.target.value)}}}),n("br"),n("button",{staticClass:"buttons",on:{click:e.postReply}},[e._v("Post")]),n("button",{staticClass:"buttons",on:{click:function(t){e.editOrReply="none"}}},[e._v("Cancel")])]):n("div",{attrs:{id:"nav-pane"}},[e.author==e.getUserName?n("span",[n("button",{staticClass:"buttons",on:{click:function(t){e.editOrReply="edit"}}},[e._v("Edit")]),n("button",{staticClass:"buttons",on:{click:e.removeComment}},[e._v("Remove")])]):e._e(),this.getToken?n("span",[n("button",{staticClass:"buttons",on:{click:function(t){e.editOrReply="reply"}}},[e._v("Reply")])]):e._e()]),e._l(e.replies,function(t,r){return n("comment",{key:r,staticClass:"replies",attrs:{id:t._id,commentBody:t.body,author:t.author,linkedTo:t.linkedTo,level:e.level+1}})}),e.showMore?n("div",{attrs:{id:"showMore"}},[n("button",{on:{click:function(t){e.numberOfComments+=1}}},[e._v("Show More")])]):e._e()],2):e.getLevel==e.getLevelRange?n("div",[n("button",{on:{click:function(t){return e.decreaseLevel()}}},[e._v("Show more")])]):e._e()])},$e=[],Pe={name:"comment",props:["commentBody","author","id","linkedTo","level"],data:function(){return{updatedComment:"",reply:"",replies:[],editOrReply:"none",showMore:!1,numberOfComments:1,levelStep:0}},computed:Object(u["a"])({},Object(c["b"])(["getUserName","getToken","getLevelRange"]),{getLevel:function(){return this.level-this.levelStep}}),methods:{removeComment:function(){var e=this;T.delete("/comment/remove/".concat(this.id)).then(function(){return e.linkedTo?Ke.$emit("generateReplies",e.linkedTo):Ke.$emit("getMainComments")}).catch(function(e){return console.error(e)})},editComment:function(){var e=this;this.editOrReply="none",T.put("/comment/update/".concat(this.id),{body:this.updatedComment}).then(function(){return e.linkedTo?Ke.$emit("generateReplies",e.linkedTo):Ke.$emit("getMainComments")}).catch(function(e){return console.error(e)})},getReplies:function(){var e=this;T.get("comment/getAllReplies/".concat(this.id)).then(function(t){if(t.data.length>e.numberOfComments)return e.showMore=!0,e.replies=t.data.slice(0,e.numberOfComments);e.showMore=!1,e.replies=t.data}).catch(function(e){return console.error(e)})},postReply:function(){var e=this;this.editOrReply="none",T.post("/comment/add",{body:this.reply,author:this.getUserName,linkedTo:this.id},{headers:{authorization:"Bearer ".concat(this.getToken)}}).then(function(){e.getReplies()}).catch(function(e){401==e.response.status?alert("you must login to post"):console.error(e)})},decreaseLevel:function(){this.levelStep+=1}},watch:{numberOfComments:function(){this.getReplies()}},created:function(){var e=this;this.getReplies(),Ke.$on("generateReplies",function(t){e.id==t&&e.getReplies()})}},Re=Pe,je=(n("e238"),Object(m["a"])(Re,Se,$e,!1,null,"6c78b6d0",null)),qe=je.exports,Le={data:function(){return{newComment:"",numberOfComments:1,mainComments:[],showMore:!1}},components:{comment:qe},computed:Object(u["a"])({},Object(c["b"])(["getToken"])),methods:{postComment:function(){var e=this;T.post("/comment/add",{body:this.newComment,author:this.getUserName}).then(function(t){console.log(t.data),e.fetchMainComments()}).catch(function(e){401==e.response.status?alert("you must login to post"):console.error(e)})},fetchMainComments:function(){var e=Object(E["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.get("/comment/getAllMainComments");case 3:if(t=e.sent,!(t.data.length>this.numberOfComments)){e.next=7;break}return this.showMore=!0,e.abrupt("return",this.mainComments=t.data.slice(0,this.numberOfComments));case 7:this.showMore=!1,this.mainComments=t.data,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),console.error(e.t0);case 14:case"end":return e.stop()}},e,this,[[0,11]])}));function t(){return e.apply(this,arguments)}return t}()},watch:{numberOfComments:function(){this.fetchMainComments()}},created:function(){var e=this;this.fetchMainComments(),Ke.$on("getMainComments",function(){e.fetchMainComments()})}},Me=Le,Ue=(n("2cfa"),Object(m["a"])(Me,Ee,Ne,!1,null,"a11f4b46",null)),Te=Ue.exports,Ae=function(e,t,n){localStorage.getItem("userName")?n():(n({path:"/login",query:{msg:"Login/Sign-up required to view that resource"}}),Ke.$emit("changeActiveLink"))},Be=[{path:"/",component:he},{path:"/about",component:ce},{path:"/toDoList",component:re,beforeEnter:Ae},{path:"/login",component:_e},{path:"/signUp",component:De},{path:"/discussion",component:Te}];n("a481");r["a"].use(c["a"]);var He=new c["a"].Store({state:{userName:void 0,token:void 0,levelRange:1},getters:{getUserName:function(e){return e.userName},getToken:function(e){return e.token},getLevelRange:function(e){return e.levelRange}},mutations:{logout:function(e){e.userName=void 0,e.token=void 0,localStorage.clear(),We.replace({path:"/"})},storeUser:function(e,t){e.userName=t.userName,e.token=t.token}},actions:{setLogOutTimer:function(e){var t=e.commit;setTimeout(function(){t("logout")},1e4)}}}),Ve=He,Fe=n("ecee"),ze=n("c074"),Je=n("ad3d");n.d(t,"router",function(){return We}),n.d(t,"eventBus",function(){return Ke}),Fe["c"].add(ze["a"]),r["a"].component("font-awesome-icon",Je["a"]),r["a"].use(x["a"]),r["a"].use(c["a"]);var We=new x["a"]({mode:"history",routes:Be});r["a"].config.productionTip=!1;var Ke=new r["a"];new r["a"]({store:Ve,router:We,render:function(e){return e(C)}}).$mount("#app")},"6b73":function(e,t,n){"use strict";var r=n("f8c5"),o=n.n(r);o.a},"6dd7":function(e,t,n){"use strict";var r=n("38ed"),o=n.n(r);o.a},"74ad":function(e,t,n){"use strict";var r=n("e32a"),o=n.n(r);o.a},"7f65":function(e,t,n){"use strict";var r=n("8f00"),o=n.n(r);o.a},8028:function(e,t,n){},"809b":function(e,t,n){},"8f00":function(e,t,n){},"99d9":function(e,t,n){},a288:function(e,t,n){},b3f0:function(e,t,n){},bf41:function(e,t,n){"use strict";var r=n("56a8"),o=n.n(r);o.a},e238:function(e,t,n){"use strict";var r=n("809b"),o=n.n(r);o.a},e32a:function(e,t,n){},eb67:function(e,t,n){"use strict";var r=n("8028"),o=n.n(r);o.a},f1ee:function(e,t,n){"use strict";var r=n("3689"),o=n.n(r);o.a},f8c5:function(e,t,n){},fd33:function(e,t,n){"use strict";var r=n("b3f0"),o=n.n(r);o.a}});
//# sourceMappingURL=app.ef84edd1.js.map