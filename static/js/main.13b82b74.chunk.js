(this.webpackJsonprobofans=this.webpackJsonprobofans||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(3),s=n.n(i),c=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))}),o=(n(13),n(4)),h=n(5),l=n(7),m=n(6),d=n(0),u=function(e){var t=e.id,n=e.name,a=e.email;return Object(d.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(d.jsx)("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"RoboImage"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:n}),Object(d.jsx)("p",{children:a})]})]})},b=function(e){var t=e.robots;return Object(d.jsx)("div",{children:t.map((function(e,n){return Object(d.jsx)(u,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},j=[{id:1,name:"Amit Shah",username:"amitshah147",email:"amitshah147@gmail.com"},{id:2,name:"kiran",username:"kittu2108",email:"kiran@gmail.com"},{id:3,name:"warner",username:"warner335",email:"warner@gmail.com"},{id:4,name:"rohit",username:"hitman264",email:"rohit264@gmail.com"},{id:5,name:"arjun",username:"allu26",email:"allu26@gmail.com"},{id:6,name:"Dhoni",username:"dhoni007",email:"dhoni007@gmail.com"}],g=function(e){var t=e.searchChange;return Object(d.jsx)("input",{type:"search",placeholder:"Search Robots",onChange:t})},f=function(e){return Object(d.jsxs)("div",{style:{overflowY:"scroll",border:"3px solid black",height:"500px"},children:[e.children,";"]})},O=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.changeMessage=function(){e.setState({message:"No record found!"})},e.state={message:"RoboFans",robots:j,searchfield:""},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{children:this.state.message}),Object(d.jsx)(g,{searchChange:this.onSearchChange}),Object(d.jsx)(f,{children:Object(d.jsx)(b,{robots:t})})]})}}]),n}(a.Component);s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),c()}},[[15,1,2]]]);
//# sourceMappingURL=main.13b82b74.chunk.js.map