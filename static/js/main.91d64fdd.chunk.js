(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(2),o=a.n(s);a(12);var l=e=>{let{name:t,email:a,id:r}=e;return n.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},n.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200")}),n.a.createElement("div",null,n.a.createElement("h2",null,t),n.a.createElement("p",null,a)))};var c=e=>{let{robots:t}=e;return n.a.createElement("div",null,t.map((e,a)=>n.a.createElement(l,{key:a,id:t[a].id,name:t[a].name,email:t[a].email})))};var h=e=>{let{searchfield:t,searchChange:a}=e;return n.a.createElement("div",{className:"pa2"},n.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:a}))};var i=e=>n.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"500px"}},e.children);class m extends r.Component{constructor(e){super(e),this.state={hasError:!1}}componentDidCatch(e,t){this.setState({hasError:!0})}render(){return this.state.hasError?n.a.createElement("h1",null,"Oooops. That is not good"):this.props.children}}var d=m;a(13);class u extends r.Component{constructor(){super(),this.onSearchChange=e=>{this.setState({searchfield:e.target.value})},this.state={robots:[],searchfield:""}}componentDidMount(){fetch("https://jsonplaceholder.typicode.com/users").then(e=>e.json()).then(e=>this.setState({robots:e}))}render(){const{robots:e,searchfield:t}=this.state,a=e.filter(e=>e.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));return e.length?n.a.createElement("div",{className:"tc"},n.a.createElement("h1",{className:"f1"},"RoboFriends"),n.a.createElement(h,{searchChange:this.onSearchChange}),n.a.createElement(i,null,n.a.createElement(d,null,n.a.createElement(c,{robots:a})))):n.a.createElement("h1",null,"Loading")}}var p=u;a(14);var g=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then(t=>{let{getCLS:a,getFID:r,getFCP:n,getLCP:s,getTTFB:o}=t;a(e),r(e),n(e),s(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(n.a.createElement(p,null)),g()},3:function(e,t,a){e.exports=a(15)}},[[3,1,2]]]);
//# sourceMappingURL=main.91d64fdd.chunk.js.map