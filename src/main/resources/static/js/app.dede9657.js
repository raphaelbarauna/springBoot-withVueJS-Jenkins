(function(e){function t(t){for(var a,s,i=t[0],u=t[1],c=t[2],l=0,d=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);m&&m(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,s=1;s<r.length;s++){var i=r[s];0!==n[i]&&(a=!1)}a&&(o.splice(t--,1),e=u(u.s=r[0]))}return e}var a={},s={app:0},n={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0a4c1e":"e8a5b146","chunk-2d0c85f8":"047a5a0c","chunk-2d0d03d6":"d47a77d2","chunk-2d0e5991":"fcc4ae9f","chunk-360de170":"c55ae4c6","chunk-b532356c":"d3ae0392","chunk-c021fc70":"4cc94124"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"chunk-360de170":1};s[e]?t.push(s[e]):0!==s[e]&&r[e]&&t.push(s[e]=new Promise((function(t,r){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d0a4c1e":"31d6cfe0","chunk-2d0c85f8":"31d6cfe0","chunk-2d0d03d6":"31d6cfe0","chunk-2d0e5991":"31d6cfe0","chunk-360de170":"465f69d9","chunk-b532356c":"31d6cfe0","chunk-c021fc70":"31d6cfe0"}[e]+".css",n=u.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var c=o[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===n))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],l=c.getAttribute("data-href");if(l===a||l===n)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||n,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete s[e],m.parentNode.removeChild(m),r(o)},m.href=n;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){s[e]=0})));var a=n[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(m);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",d.name="ChunkLoadError",d.type=a,d.request=s,r[1](d)}n[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(r,a,function(t){return e[t]}.bind(null,a));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var m=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"35ca":function(e,t,r){"use strict";var a=r("d4ec"),s=r("bee2"),n=r("bc3a"),o=r.n(n);function i(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{Authorization:"Bearer "+e.token}:{}}var u="http://localhost:8080/api/test/",c=function(){function e(){Object(a["a"])(this,e)}return Object(s["a"])(e,[{key:"getPublicContent",value:function(){return o.a.get(u+"all")}},{key:"getUserBoard",value:function(){return o.a.get(u+"user",{headers:i()})}},{key:"getModeratorBoard",value:function(){return o.a.get(u+"mod",{headers:i()})}},{key:"getAdminBoard",value:function(){return o.a.get(u+"admin",{headers:i()})}}]),e}();t["a"]=new c},3830:function(e,t,r){"use strict";var a=r("46ac"),s=r.n(a);s.a},"46ac":function(e,t,r){},"4c09":function(e,t,r){"use strict";var a=r("9a2d"),s=r.n(a);s.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("nav",{staticClass:"navbar navbar-expand navbar-dark bg-dark"},[r("a",{staticClass:"navbar-brand",attrs:{href:""},on:{click:function(e){e.preventDefault()}}},[e._v("RBS")]),r("div",{staticClass:"navbar-nav mr-auto"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/home"}},[r("font-awesome-icon",{attrs:{icon:"home"}}),e._v("Home ")],1)],1),e.showAdminBoard?r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/admin"}},[e._v("Admin Board")])],1):e._e(),e.showModeratorBoard?r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/mod"}},[e._v("Moderator Board")])],1):e._e(),r("li",{staticClass:"nav-item"},[e.currentUser?r("router-link",{staticClass:"nav-link",attrs:{to:"/user"}},[e._v("User")]):e._e()],1),r("li",{staticClass:"nav-item"},[e.currentUser?r("router-link",{staticClass:"nav-link",attrs:{to:"/courses"}},[e._v("Courses")]):e._e()],1)]),e.currentUser?e._e():r("div",{staticClass:"navbar-nav ml-auto"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[r("font-awesome-icon",{attrs:{icon:"user-plus"}}),e._v("Sign Up ")],1)],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[r("font-awesome-icon",{attrs:{icon:"sign-in-alt"}}),e._v("Login ")],1)],1)]),e.currentUser?r("div",{staticClass:"navbar-nav ml-auto"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/profile"}},[r("font-awesome-icon",{attrs:{icon:"user"}}),e._v(" "+e._s(e.currentUser.username)+" ")],1)],1),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.logOut(t)}}},[r("font-awesome-icon",{attrs:{icon:"sign-out-alt"}}),e._v("LogOut ")],1)])]):e._e()]),r("div",{staticClass:"container"},[r("router-view")],1)])},n=[],o=(r("caad"),r("2532"),{computed:{currentUser:function(){return this.$store.state.auth.user},showAdminBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_ADMIN")},showModeratorBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_MODERATOR")}},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}}}),i=o,u=r("2877"),c=Object(u["a"])(i,s,n,!1,null,null,null),l=c.exports,d=(r("d3b7"),r("8c4f")),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("header",{staticClass:"jumbotron"},[r("h3",[e._v(e._s(e.content))])])])},f=[],p=(r("25f0"),r("35ca")),v={name:"Home",data:function(){return{content:""}},mounted:function(){var e=this;p["a"].getPublicContent().then((function(t){e.content=t.data}),(function(t){e.content=t.response&&t.response.data||t.message||t.toString()}))}},g=v,h=Object(u["a"])(g,m,f,!1,null,null,null),b=h.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"card card-container"},[r("img",{staticClass:"profile-img-card",attrs:{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png"}}),r("form",{attrs:{name:"form"},on:{submit:function(t){return t.preventDefault(),e.handleLogin(t)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"userName"}},[e._v("User Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.userName,expression:"user.userName"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"userName"},domProps:{value:e.user.userName},on:{input:function(t){t.target.composing||e.$set(e.user,"userName",t.target.value)}}}),e.errors.has("userName")?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("Username is required!")]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"password",name:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e.errors.has("password")?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("Password is required!")]):e._e()]),r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-primary btn-block",attrs:{disabled:e.loading}},[r("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"spinner-border spinner-border-sm"}),r("span",[e._v("Login")])])]),r("div",{staticClass:"form-group"},[e.message?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(e._s(e.message))]):e._e()])])])])},_=[],C=r("d4ec"),k=function e(t,r,a,s,n){Object(C["a"])(this,e),this.token=t,this.userName=r,this.email=a,this.password=s,this.roles=n},y={name:"Login",data:function(){return{user:new k("",""),userName:null,password:null,loading:!1,message:""}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},created:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleLogin:function(){var e=this;this.loading=!0,this.$validator.validateAll().then((function(t){t?e.user.userName&&e.user.password&&e.$store.dispatch("auth/login",e.user).then((function(){e.$router.push("/profile")}),(function(t){e.loading=!1,e.message=t.response&&t.response.data||t.message||t.toString()})):e.loading=!1}))}}},N=y,x=(r("3830"),Object(u["a"])(N,w,_,!1,null,"ce72fa16",null)),O=x.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"card card-container"},[r("img",{staticClass:"profile-img-card",attrs:{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png"}}),r("form",{attrs:{name:"form"},on:{submit:function(t){return t.preventDefault(),e.handleRegister(t)}}},[e.successful?e._e():r("div",[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"userName"}},[e._v("Username")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.userName,expression:"user.userName"},{name:"validate",rawName:"v-validate",value:"required|min:3|max:20",expression:"'required|min:3|max:20'"}],staticClass:"form-control",attrs:{type:"text",name:"username"},domProps:{value:e.user.userName},on:{input:function(t){t.target.composing||e.$set(e.user,"userName",t.target.value)}}}),e.submitted&&e.errors.has("username")?r("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("username")))]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"},{name:"validate",rawName:"v-validate",value:"required|email|max:50",expression:"'required|email|max:50'"}],staticClass:"form-control",attrs:{type:"email",name:"email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),e.submitted&&e.errors.has("email")?r("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("email")))]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required|min:6|max:40",expression:"'required|min:6|max:40'"}],staticClass:"form-control",attrs:{type:"password",name:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e.submitted&&e.errors.has("password")?r("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("password")))]):e._e()]),e._m(0)])]),e.message?r("div",{staticClass:"alert",class:e.successful?"alert-success":"alert-danger"},[e._v(e._s(e.message))]):e._e()])])},P=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-primary btn-block"},[e._v("Sign Up")])])}],j={name:"Register",data:function(){return{user:new k("","",""),submitted:!1,successful:!1,message:""}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},mounted:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleRegister:function(){var e=this;this.message="",this.submitted=!0,this.$validator.validate().then((function(t){t&&e.$store.dispatch("auth/register",e.user).then((function(t){e.message=t.message,e.successful=!0}),(function(t){e.message=t.response&&t.response.data||t.message||t.toString(),e.successful=!1}))}))}}},$=j,U=(r("4c09"),Object(u["a"])($,S,P,!1,null,"b02c879e",null)),I=U.exports;a["a"].use(d["a"]);var E=new d["a"]({mode:"history",routes:[{path:"/",name:"home",component:b},{path:"/home",component:b},{path:"/login",component:O},{path:"/register",component:I},{path:"/profile",name:"profile",component:function(){return r.e("chunk-2d0d03d6").then(r.bind(null,"66aa"))}},{path:"/admin",name:"admin",component:function(){return r.e("chunk-2d0c85f8").then(r.bind(null,"5535"))}},{path:"/mod",name:"moderator",component:function(){return r.e("chunk-2d0e5991").then(r.bind(null,"94bb"))}},{path:"/user",name:"user",component:function(){return r.e("chunk-2d0a4c1e").then(r.bind(null,"0899"))}},{path:"/courses",name:"Courses",component:function(){return r.e("chunk-b532356c").then(r.bind(null,"22d5"))}},{path:"/courses/novo",name:"novoCurso",component:function(){return r.e("chunk-360de170").then(r.bind(null,"9edd"))}},{path:"/courses/:id",name:"Course Details",component:function(){return r.e("chunk-c021fc70").then(r.bind(null,"9c6a"))}}]}),q=E,A=r("2f62"),B=r("bee2"),L=r("bc3a"),M=r.n(L),T="http://localhost:8080/api/auth/",D=function(){function e(){Object(C["a"])(this,e)}return Object(B["a"])(e,[{key:"login",value:function(e){return M.a.post(T+"signin",{userName:e.userName,password:e.password}).then((function(e){return e.data.token&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e){return M.a.post(T+"signup",{userName:e.userName,email:e.email,password:e.password})}}]),e}(),R=new D,F=JSON.parse(localStorage.getItem("user")),J=F?{status:{loggedIn:!0},user:F}:{status:{loggedIn:!1},user:null},H={namespaced:!0,state:J,actions:{login:function(e,t){var r=e.commit;return R.login(t).then((function(e){return r("loginSuccess",e),Promise.resolve(e)}),(function(e){return r("loginFailure"),Promise.reject(e)}))},logout:function(e){var t=e.commit;R.logout(),t("logout")},register:function(e,t){var r=e.commit;return R.register(t).then((function(e){return r("registerSuccess"),Promise.resolve(e.data)}),(function(e){return r("registerFailure"),Promise.reject(e)}))}},mutations:{loginSuccess:function(e,t){e.status.loggedIn=!0,e.user=t},loginFailure:function(e){e.status.loggedIn=!1,e.user=null},logout:function(e){e.status.loggedIn=!1,e.user=null},registerSuccess:function(e){e.status.loggedIn=!1},registerFailure:function(e){e.status.loggedIn=!1}}};a["a"].use(A["a"]);var z=new A["a"].Store({modules:{auth:H}}),K=(r("4989"),r("ab8b"),r("7bb1")),G=r("ecee"),Q=r("ad3d"),V=r("c074");G["c"].add(V["a"],V["d"],V["e"],V["b"],V["c"]),a["a"].config.productionTip=!1,a["a"].use(K["a"]),a["a"].component("font-awesome-icon",Q["a"]),a["a"].config.productionTip=!1,new a["a"]({router:q,store:z,render:function(e){return e(l)}}).$mount("#app")},"9a2d":function(e,t,r){}});
//# sourceMappingURL=app.dede9657.js.map