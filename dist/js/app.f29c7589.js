(function(e){function t(t){for(var r,a,u=t[0],s=t[1],c=t[2],p=0,f=[];p<u.length;p++)a=u[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("dc9e")},1183:function(e,t,n){},b17f:function(e,t,n){"use strict";n("1183")},ba43:function(e,t,n){},da94:function(e,t,n){"use strict";n("ba43")},dc9e:function(e,t,n){"use strict";n.r(t);var r=n("43d2"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("MoviesContainer")],1)},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"moviescontainer"},[n("SearchBar",{on:{searchRequest:e.doRequestApi}}),n("ul",e._l(e.moviesList,(function(t){return n("li",{key:t.id},[e._v(" "+e._s(t.title)+" "+e._s(t.original_title)+" "+e._s(t.original_language)+" "+e._s(t.vote_average)+" ")])})),0)],1)},u=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"searchbar"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputText,expression:"inputText"}],attrs:{type:"text"},domProps:{value:e.inputText},on:{input:function(t){t.target.composing||(e.inputText=t.target.value)}}}),n("button",{on:{click:e.sendRequestSearch,key:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendRequestSearch.apply(null,arguments)}}},[e._v("Search")])])},c=[],l={name:"SearchBar",data:function(){return{inputText:""}},methods:{sendRequestSearch:function(){this.$emit("searchRequest",this.inputText)}}},p=l,f=(n("da94"),n("3711")),d=Object(f["a"])(p,s,c,!1,null,"38e2ab3b",null),v=d.exports,h=n("c3aa"),m=n.n(h),b={name:"MoviesContainer",components:{SearchBar:v},data:function(){return{moviesList:[],apiKey:"e498fbee3869e4fa0dc21e97223c41de",apiUrl:"https://api.themoviedb.org/3",langFlags:{en:"en.png"}}},methods:{doRequestApi:function(e){var t=this;m.a.get(this.apiUrl+"/search/movie",{params:{api_key:this.apiKey,query:e},language:"it"}).then((function(e){t.moviesList=e.data.results}))}}},y=b,g=Object(f["a"])(y,a,u,!1,null,null,null),_=g.exports,x={props:{},name:"App",components:{MoviesContainer:_},methods:{}},O=x,j=(n("b17f"),Object(f["a"])(O,i,o,!1,null,null,null)),w=j.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(w)}}).$mount("#app")}});
//# sourceMappingURL=app.f29c7589.js.map