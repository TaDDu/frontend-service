(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(50)},27:function(e,t,a){},29:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},30:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(16),r=a.n(o),l=a(53),i=(a(27),a(3)),c=a(4),u=a(9),m=a(8),d=a(10),h=a(2),p=(a(29),a(30),a(54)),g=a(55),f=a(52),b=function(){function e(t,a){Object(i.a)(this,e),this._url=t,this._header=a,this._header["Content-Type"]="application/json"}return Object(c.a)(e,[{key:"me",value:function(){var e=this._url,t=this._header;return new Promise(function(a,n){fetch(e+"me",{method:"get",headers:t}).then(function(e){return e.json()}).then(function(e){a(e)})})}}]),e}(),v=a(51),E=a(19),k=a.n(E),N=function(){function e(){Object(i.a)(this,e)}return Object(c.a)(e,[{key:"google",value:function(e){return new Promise(function(t,a){fetch(document.location.origin+"/api/login/googleauth",{method:"post",headers:{"Content-Type":" application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){t(e)})})}}]),e}(),y=function(e){function t(e){var a;return Object(i.a)(this,t),a=Object(u.a)(this,Object(m.a)(t).call(this,e)),console.log("LOGIN",e),a.state={use:{},authenticated:!1,handleToUpdate:a.props.handleToUpdate,loggedin:!1,username:"",password:"",redirect:!1,session:{},user:{},header:{}},console.log(a.state),a.logIn=a.logIn.bind(Object(h.a)(Object(h.a)(a))),a.authUser=a.authUser.bind(Object(h.a)(Object(h.a)(a))),a.handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a.responseGoogle=a.responseGoogle.bind(Object(h.a)(Object(h.a)(a))),a.loginService=new N,a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){console.log(this.state),"inputEmail"===e.target.id&&this.setState({username:e.target.value}),"inputPassword"===e.target.id&&this.setState({password:e.target.value})}},{key:"logIn",value:function(e){var t=this;e.preventDefault(),console.log(this.state),this.authUser(this.state.username,this.state.password).then(function(e){console.log("SUCCESSSSSSS",e),sessionStorage.setItem("authenticated",!0),sessionStorage.setItem("apikey",e.jwt),console.log("SET REDIRECT"),t.setState({redirect:!0})})}},{key:"authUser",value:function(e,t){return new Promise(function(a,n){var s=window.location.origin+"/api/login",o={email:e,password:t};o=JSON.stringify(o),fetch(s,{method:"post",headers:{"Content-Type":"application/json"},body:o}).then(function(e){return e.json()}).then(function(e){a(e)})})}},{key:"responseGoogle",value:function(e){var t=this;if(console.log("Got response from google"),e.error)console.log("error from google",e);else{var a={pic:e.profileObj.imageUrl,firstName:e.profileObj.givenName,lastName:e.profileObj.familyName,email:e.profileObj.email,googleId:e.profileObj.googleId,accessToken:e.accessToken};this.loginService.google(a).then(function(e){console.log("authenticated to api server"),console.log("SUCCESSSSSSS",e),sessionStorage.setItem("authenticated",!0),sessionStorage.setItem("apikey",e.jwt),console.log("SET REDIRECT"),t.setState({redirect:!0})})}}},{key:"render",value:function(){var e={from:{pathname:this.props.props.history.location.pathname||"/"}},t=this.state.redirect;return console.log("FROM",e),t?s.a.createElement(f.a,{to:e}):s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-9 col-md-7 col-lg-5 mx-auto"},s.a.createElement("div",{className:"card card-signin my-5"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h5",{className:"card-title text-center"},"Sign In"),s.a.createElement("form",{className:"form-signin",onSubmit:this.logIn},s.a.createElement("div",{className:"form-label-group"},s.a.createElement("input",{type:"email",id:"inputEmail",className:"form-control",placeholder:"Email address",value:this.state.username,onChange:this.handleChange,required:!0,autoFocus:!0}),s.a.createElement("label",{htmlFor:"inputEmail"},"Email address")),s.a.createElement("div",{className:"form-label-group"},s.a.createElement("input",{type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",value:this.state.password,onChange:this.handleChange,required:!0}),s.a.createElement("label",{htmlFor:"inputPassword"},"Password")),s.a.createElement("div",{className:"custom-control custom-checkbox mb-3"},s.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),s.a.createElement("label",{className:"custom-control-label",htmlFor:"customCheck1"},"Remember password")),s.a.createElement("button",{className:"btn btn-lg btn-primary btn-block text-uppercase",type:"submit"},"Sign in"),s.a.createElement("hr",{className:"my-4"}),s.a.createElement(v.a,{to:"/register",className:"btn btn-lg btn-primary btn-block text-uppercase"},"Register"),s.a.createElement(k.a,{clientId:"975467020281-d513ujk0t5s6qgavpqsevmuf6l0qjpbp.apps.googleusercontent.com",buttonText:"Sign in with Google",onSuccess:this.responseGoogle,onFailure:this.responseGoogle}))))))}}]),t}(n.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-9 col-md-7 col-lg-5 mx-auto"},s.a.createElement("div",{className:"card card-signin my-5"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h5",{className:"card-title text-center"},"Sign In"),s.a.createElement("form",{className:"form-signin"},s.a.createElement("div",{className:"form-label-group"},s.a.createElement("input",{type:"email",id:"inputEmail",className:"form-control",placeholder:"Email address",required:!0,autoFocus:!0}),s.a.createElement("label",{htmlFor:"inputEmail"},"Email address")),s.a.createElement("div",{className:"form-label-group"},s.a.createElement("input",{type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:!0}),s.a.createElement("label",{htmlFor:"inputPassword"},"Password")))))))}}]),t}(n.Component),O=a(20),j=function(e){function t(e){var a;return Object(i.a)(this,t),console.log("HEADER LOADED"),a=Object(u.a)(this,Object(m.a)(t).call(this,e)),console.log(e),a.state={},a.changeMenu=a.changeMenu.bind(Object(h.a)(Object(h.a)(a))),a.handleStateChange=a.handleStateChange.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"changeMenu",value:function(){console.log("CLICK"),this.setState({areMenusOpen:!this.state.areMenusOpen})}},{key:"handleStateChange",value:function(e){console.log(e),this.setState({areMenusOpen:e.isOpen})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(O.slide,{width:"100%",pageWrapId:"page-wrap",outerContainerId:"outer-container",disableOverlayClick:!0,noOverlay:!0,isOpen:this.state.areMenusOpen,onStateChange:function(t){return e.handleStateChange(t)},itemListClassName:"sidebar-nav",customCrossIcon:s.a.createElement("div",null,s.a.createElement("i",{className:"fa fa-times fa-2x"}))},s.a.createElement("li",{className:"sidebar-brand"},s.a.createElement("i",null,"Welcome")),s.a.createElement("li",{className:"col-12"},s.a.createElement("a",{href:"#",onClick:this.changeMenu,className:"hidden-sm hidden-md hidden-lg"},s.a.createElement("i",{className:"fas fa-home"}," ","Home ",s.a.createElement("span",{className:"sr-only"},"(current)")))),s.a.createElement("li",{className:"col-12"},s.a.createElement(v.a,{to:"/accounts",onClick:this.changeMenu,className:"hidden-sm hidden-md hidden-lg"},s.a.createElement("i",{className:"fas fa-building"}," Accounts "))," ",s.a.createElement("i",{className:"fas fa-caret-square-down text-white","data-toggle":"collapse","data-target":"#fast_form"}),s.a.createElement("div",{id:"fast_form",className:"collapse"})),s.a.createElement("li",{className:"col-12"},s.a.createElement(v.a,{to:"/contacts",onClick:this.changeMenu,className:"hidden-sm hidden-md hidden-lg"},s.a.createElement("i",{className:"fas fa-users"}," Contacts"))),s.a.createElement("li",{className:"col-12"},s.a.createElement(v.a,{to:"/settings",onClick:this.changeMenu,className:"hidden-sm hidden-md hidden-lg"},s.a.createElement("i",{className:"fas fa-cogs"}," Settings")))),s.a.createElement("nav",{className:"navbar navbar-default navbar-fixed-top hidden-xs",style:{backgroundColor:"#34495e"}},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"navbar-header"},s.a.createElement("a",{className:"navbar-brand",href:"#",style:{paddingTop:"5px"}})),s.a.createElement("div",{className:"nav navbar-nav"},s.a.createElement("button",{type:"button",onClick:this.changeMenu,className:"btn navbar-toggle navbar-btn",style:{display:"block"}},s.a.createElement("i",{className:"fa fa-bars",onClick:this.changeMenu,"aria-hidden":"true"}))))))}}]),t}(s.a.Component),w=function(){function e(t,a){Object(i.a)(this,e),this._url=t,this._header=a,this._header["Content-Type"]="application/json"}return Object(c.a)(e,[{key:"me",value:function(){var e=this._url,t=this._header;return new Promise(function(a,n){fetch(e,{method:"get",headers:t}).then(function(e){return e.json()}).then(function(e){a(e)})})}}]),e}(),C=function(){function e(t,a){Object(i.a)(this,e),this._url=t,this._header=a,this._header["Content-Type"]="application/json"}return Object(c.a)(e,[{key:"city",value:function(e){var t=this._url,a=this._header;return new Promise(function(n,s){fetch(t+"/"+e,{method:"get",headers:a}).then(function(e){return e.json()}).then(function(e){n(e)})})}}]),e}(),_=function(){function e(t,a){Object(i.a)(this,e),this._url=t,this._header=a,this._header["Content-Type"]="application/json"}return Object(c.a)(e,[{key:"all",value:function(){var e=this._url,t=this._header;return new Promise(function(a,n){fetch(e,{method:"get",headers:t}).then(function(e){return e.json()}).then(function(e){a(e)})})}},{key:"create",value:function(e){var t=this._url,a=this._header;return new Promise(function(n,s){fetch(t,{method:"post",headers:a,body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){n(e)})})}},{key:"done",value:function(e){var t=this._url,a=this._header;return new Promise(function(n,s){fetch(t+"/"+e,{method:"put",headers:a,body:JSON.stringify({closed:!0})}).then(function(e){return e.json()}).then(function(e){n(e)})})}},{key:"delete",value:function(e){var t=this._url,a=this._header;return new Promise(function(n,s){fetch(t+"/"+e,{method:"delete",headers:a}).then(function(e){return e.json()}).then(function(e){n(e)})})}}]),e}(),I=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={title:"",description:"",created:!1};var n=sessionStorage.getItem("apikey");return a.taskService=new _(window.location.origin+"/api/tasks",{authorization:"Bearer "+n}),a.handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a.createTask=a.createTask.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){"title"===e.target.id&&this.setState({title:e.target.value}),"description"===e.target.id&&this.setState({description:e.target.value})}},{key:"createTask",value:function(e){var t=this;e.preventDefault(),this.taskService.create({title:this.state.title,description:this.state.description}).then(function(e){t.props.callback(e),t.setState({created:!0,title:"",description:""})})}},{key:"componentWillMount",value:function(){}},{key:"componentWillUnmount",value:function(){console.log("UNMOUNT")}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("form",{className:"form-signin",onSubmit:this.createTask},s.a.createElement("div",{className:"form-label-group"},s.a.createElement("input",{type:"text",id:"title",className:"form-control",placeholder:"Title",value:this.state.title,onChange:this.handleChange,required:!0,autofocus:"true"}),s.a.createElement("label",{htmlFor:"title"},"Task title")),s.a.createElement("div",{className:"form-label-group"},s.a.createElement("input",{type:"text",id:"description",className:"form-control",placeholder:"description",value:this.state.description,onChange:this.handleChange}),s.a.createElement("label",{htmlFor:"description"},"Description")),s.a.createElement("button",{className:"btn btn-lg btn-primary btn-block text-uppercase",type:"submit"},"Create task")))}}]),t}(n.Component),T=function(e){function t(e){var a;Object(i.a)(this,t),console.log("HOME"),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={user:{},location:{city:"loading"},weather:{main:{temp:"loading",pressure:"loading",humidity:"loading"}},show_closed:!1,show_open:!0,tasks:[]};var n=sessionStorage.getItem("apikey");return a.userService=new b(window.location.origin+"/api/users/",{authorization:"Bearer "+n}),a.ipLocationService=new w(window.location.origin+"/api/ip-location",{authorization:"Bearer "+n}),a.weatherService=new C(window.location.origin+"/api/weather",{authorization:"Bearer "+n}),a.taskService=new _(window.location.origin+"/api/tasks",{authorization:"Bearer "+n}),a.callBack=a.callBack.bind(Object(h.a)(Object(h.a)(a))),a.taskDone=a.taskDone.bind(Object(h.a)(Object(h.a)(a))),a.taskDelete=a.taskDelete.bind(Object(h.a)(Object(h.a)(a))),a.toggleClosed=a.toggleClosed.bind(Object(h.a)(Object(h.a)(a))),a.toggleOpen=a.toggleOpen.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"callBack",value:function(e){console.log("callBack",e);var t=this.state.tasks;t.unshift(e),this.setState({tasks:t})}},{key:"toggleClosed",value:function(){this.state.show_closed?this.setState({show_closed:!1}):this.setState({show_closed:!0})}},{key:"toggleOpen",value:function(){this.state.show_open?this.setState({show_open:!1}):this.setState({show_open:!0})}},{key:"taskDone",value:function(e){var t=this;this.taskService.done(e).then(function(a){var n=t.state.tasks;n.map(function(t){t.id==e&&(t.closed=!0)}),t.setState({tasks:n})})}},{key:"taskDelete",value:function(e){var t=this;this.taskService.delete(e).then(function(a){var n=t.state.tasks;n=n.filter(function(t){return t.id!=e}),t.setState({tasks:n})})}},{key:"componentWillMount",value:function(){}},{key:"componentWillUnmount",value:function(){console.log("UNMOUNT")}},{key:"componentDidMount",value:function(){var e=this;this.userService.me().then(function(t){e.setState({user:t}),e.ipLocationService.me().then(function(t){null==t.city?t.city="No location":e.weatherService.city(t.city).then(function(t){e.setState({weather:t})}),e.setState({location:t})}),e.taskService.all().then(function(t){e.setState({tasks:t})})})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"d-flex flex-wrap"},s.a.createElement("div",{className:"p-2 flex-fill"},s.a.createElement("div",{className:"card card-default"},s.a.createElement("div",{className:"card-header"},"Profile"),s.a.createElement("div",{className:"card-body"},s.a.createElement("h4",{className:"card-title"},this.state.user.email),s.a.createElement("p",null,"Welcome: ",this.state.user.firstName," ",this.state.user.lastName)))),s.a.createElement("div",{className:"p-2 flex-grow-1"},s.a.createElement("div",{className:"card card-default h-100"},s.a.createElement("div",{className:"card-header"},"Temperature @ ",this.state.location.city),s.a.createElement("div",{className:"card-body text-center"},s.a.createElement("h1",null,this.state.weather.main.temp),s.a.createElement("p",null,"Pressure: ",this.state.weather.main.pressure),s.a.createElement("p",null,"Humidity: ",this.state.weather.main.humidity))))),s.a.createElement("div",{className:"d-flex flex-wrap"},s.a.createElement("div",{className:"p-2 flex-fill"},s.a.createElement("div",{className:"card card-default"},s.a.createElement("div",{className:"card-header"},s.a.createElement("div",{className:"d-flex align-content-center align-items-center"},s.a.createElement("div",{className:"p-2"},"Tasks ",this.state.tasks.length),s.a.createElement("div",{className:"ml-auto p-2"},s.a.createElement("div",{className:"btn-group btn-group-sm"},s.a.createElement("button",{className:"btn btn-primary",onClick:this.toggleOpen},"open:",s.a.createElement(function(){return e.state.tasks.length>0?e.state.tasks.filter(function(e){return 0==e.closed}).length:"0"},null)),s.a.createElement("button",{className:"btn btn-primary",onClick:this.toggleClosed},"closed:",s.a.createElement(function(){return e.state.tasks.length>0?e.state.tasks.filter(function(e){return 1==e.closed}).length:"0"},null)),s.a.createElement("button",{className:"btn btn-info","data-toggle":"collapse","data-target":"#demo"},"Add new"))))),s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{id:"demo",className:"collapse"},s.a.createElement(I,{callback:this.callBack}),s.a.createElement("hr",null)),s.a.createElement(function(){return e.state.tasks.length>0?e.state.tasks.filter(function(t){return e.state.show_closed&&1==t.closed?t:e.state.show_open&&0==t.closed?t:void 0}).map(function(t){if(1==t.closed)var a=s.a.createElement("del",null,t.title);else a=t.title;return s.a.createElement("div",{key:t.id,className:"card card-default",style:{border:0}},s.a.createElement("div",{className:"card-header",style:{paddingTop:0,paddingBottom:0,fontWeight:"initial"}},s.a.createElement("div",{className:"d-flex align-content-center align-items-center"},s.a.createElement("div",{className:"p-2"},a),s.a.createElement("div",{className:"ml-auto p-2"},s.a.createElement("div",{className:"btn-group btn-group-sm"},t.closed?s.a.createElement("button",{type:"button",className:"btn btn-primary disabled",style:{backgroundColor:"#2980b9",borderColor:"#2980b9"}},s.a.createElement("i",{className:"fas fa-check"})):s.a.createElement("button",{type:"button",className:"btn btn-primary",style:{backgroundColor:"#2980b9",borderColor:"#2980b9"},onClick:function(){e.taskDone(t.id)}},s.a.createElement("i",{className:"far fa-square"})),t.closed?s.a.createElement("button",{type:"button",className:"btn btn-info disabled",style:{backgroundColor:"#16a085",borderColor:"#16a085"}},s.a.createElement("i",{className:"far fa-edit"})):s.a.createElement("button",{type:"button",className:"btn btn-info",style:{backgroundColor:"#16a085",borderColor:"#16a085"}},s.a.createElement("i",{className:"far fa-edit"})),s.a.createElement("button",{type:"button",className:"btn btn-danger",style:{backgroundColor:"#c0392b",borderColor:"#c0392b"},onClick:function(){e.taskDelete(t.id)}},s.a.createElement("i",{className:"fas fa-trash"})))))))}):s.a.createElement("h2",null,"No tasks")},null))))))}}]),t}(n.Component),x=function(e){function t(e){var a;Object(i.a)(this,t),a=Object(u.a)(this,Object(m.a)(t).call(this,e)),console.log(e),a.state={authenticated:!1,redirect:!1};a.handleToUpdate.bind(Object(h.a)(Object(h.a)(a)));return a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=sessionStorage.getItem("authenticated");if(console.log("SESSION",t),"true"===t){var a=sessionStorage.getItem("apikey");this.userService=new b(window.location.origin+"/api/users/",{authorization:"Bearer "+a}),this.userService.me().then(function(t){t.error?e.setState({authenticated:!1}):e.setState({authenticated:!0})})}else console.log("Redirect"),this.setState({redirect:!0}),sessionStorage.setItem("authenticated",!1)}},{key:"shouldComponentUpdate",value:function(e,t){return console.log("shouldComponentUpdate",e,t),!0}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate",this.state);var e=sessionStorage.getItem("authenticated");console.log("SESSION",e),"true"===e&&!1===this.state.authenticated&&this.setState({authenticated:!0,redirect:!1})}},{key:"handleToUpdate",value:function(e){if(console.log("HANDLEUPDATE",e),e.error)this.setState({error:!0,errorMsg:e.msg});else{console.log("HANDLEUPDATE",e);var t=sessionStorage.getItem("authenticated");console.log("SESSION",t),"true"===t?this.setState({authenticated:!0}):(this.setState({redirect:!0}),sessionStorage.setItem("authenticated",!1))}}},{key:"render",value:function(){var e=this,t=this.state.authenticated;return console.log("isLoggedIn",t),s.a.createElement("div",{id:"outer",className:""},t?s.a.createElement("div",null,s.a.createElement(j,null),s.a.createElement("div",{id:"inner",className:"container"},s.a.createElement(p.a,null,s.a.createElement(g.a,{path:"/home",component:T}),s.a.createElement(f.a,{to:"/home"})))):s.a.createElement("div",{className:"container"},s.a.createElement(p.a,null,s.a.createElement(g.a,{path:"/register",exact:!0,component:S}),s.a.createElement(g.a,{path:"/login",exact:!0,render:function(t){return s.a.createElement(y,{props:t,handleToUpdate:e.handleToUpdate})}}),s.a.createElement(f.a,{to:"/login"}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(l.a,null,s.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.f51bee97.chunk.js.map