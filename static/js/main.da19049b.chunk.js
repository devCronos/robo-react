(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{18:function(e,t,n){e.exports=n(31)},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(10),c=n.n(a),i=n(11),s=n(8),l=n(17),u=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(28);var d=n(2),f=n(3),p=n(5),b=n(4),m=n(6),E=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(b.a)(t).call(this))).updateCount=function(){e.setState((function(e){return{count:e.count+1}}))},e.state={count:0},e}return Object(m.a)(t,e),Object(f.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count,t.count,!0}},{key:"render",value:function(){return r.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"count: ",this.state.count," ")}}]),t}(o.Component),v=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(f.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(E,{color:"red"}))}}]),t}(o.Component),g=function(e){var t=e.name,n=e.email,o=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(o,"?200x200"),alt:"ph"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},O=function(e){var t=e.robots;return r.a.createElement("div",null,0===t&&r.a.createElement("div",null,"loading..."),t.map((function(e,n){return r.a.createElement(g,{id:t[n].id,name:t[n].name,email:t[n].email,key:n})})))},w=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},j=(n(29),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"700px"}},e.children)}),y=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(p.a)(this,Object(b.a)(t).call(this,e))).state={hasError:!1},n}return Object(m.a)(t,e),Object(f.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):this.props.children}}]),t}(o.Component),S=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,o=e.robots,a=e.isPending,c=o.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return a?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement(v,null),r.a.createElement(w,{searchChange:n}),r.a.createElement(j,null,r.a.createElement(y,null,r.a.createElement(O,{robots:c}))))}}]),t}(o.Component),C=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCHFIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(S),R=n(9),k={searchField:""},T={isPending:!1,robots:[],error:""},_=(n(30),Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return Object(R.a)({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(R.a)({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":case"REQUEST_ROBOTS_FAILED":return Object(R.a)({},e,{robots:t.payload,isPending:!1});default:return e}}})),N=Object(s.d)(_,Object(s.a)(l.a));c.a.render(r.a.createElement(i.a,{store:N},r.a.createElement(C,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/complete-junior-senior-roadmap-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/complete-junior-senior-roadmap-react","/service-worker.js");u?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):h(t,e)}))}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.da19049b.chunk.js.map