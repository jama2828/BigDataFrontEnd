(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(63)},54:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(25),c=n.n(o),i=n(8),l=n(9),s=n(11),u=n(10),h=n(12),m=n(27),p=n(6),d=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={search:""},n.onSubmit=function(e){e.preventDefault(),n.props.search(n.state.title),n.setState({})},n.onChange=function(e){return n.setState({search:e.target.value})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex",flexDirection:"column",width:"50%",margin:"auto"}},r.a.createElement("input",{type:"text",name:"title",placeholder:"Enter Keyword...",style:{flex:"10",padding:"5px",fontSize:"17px",marginBottom:"25px"},value:this.state.title,onChange:this.onChange}),r.a.createElement("input",{type:"submit",value:"Search",className:"btn",style:{flex:"1",fontSize:"17px",width:"35%",margin:"auto"}}))}}]),t}(a.Component);var f={background:"rgb(255, 255, 255)",color:"rgb(255, 0, 0)",textAlign:"center",paddingTop:"35px",height:"125px",fontSize:"20px",marginBottom:"23px"},g=function(){return r.a.createElement("header",{style:f},r.a.createElement("h1",null,"YouTube Caption Search"))},b=n(26),v=n.n(b),w=(n(54),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={todos:[]},n.search=function(){v.a.get("https://jsonplaceholder.typicode.com/todos").then(function(e){return n.setState({todos:e.data})})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(g,null),r.a.createElement(p.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{search:e.search}))}}))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.4cdb818a.chunk.js.map