(function(t){function e(e){for(var r,o,s=e[0],u=e[1],l=e[2],p=0,v=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&v.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(v.length)v.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("dc9e")},1183:function(t,e,n){},a786:function(t,e,n){t.exports=n.p+"img/No-Image.svg.a4852ceb.png"},b17f:function(t,e,n){"use strict";n("1183")},dc9e:function(t,e,n){"use strict";n.r(e);var r=n("43d2"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("MoviesContainer")],1)},a=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"moviescontainer"},[r("h1",[t._v("Movies")]),r("ul",t._l(t.moviesList,(function(e){return r("li",{key:e.id},[r("div",[null!=e.poster_path?r("img",{attrs:{src:t.imgUrl+t.poster_sizes[2]+e.poster_path,alt:e.title}}):r("img",{attrs:{src:n("a786"),alt:"image"}})]),r("div",[t._v(t._s(e.title))]),r("div",[t._v(t._s(e.original_title))]),r("div",[r("country-flag",{attrs:{country:"en"===e.original_language?"gb":e.original_language,size:"medium"}})],1),r("div",t._l(t.countStarsActive(parseInt(e.vote_average)),(function(t,e){return r("i",{key:e,staticClass:"far fa-star",class:t.active})})),0)])})),0),r("h1",[t._v("TV Shows")]),r("ul",t._l(t.tvShowList,(function(e){return r("li",{key:e.id},[r("div",[r("div",[null!=e.poster_path?r("img",{attrs:{src:t.imgUrl+t.poster_sizes[2]+e.poster_path,alt:e.title}}):r("img",{attrs:{src:n("a786"),alt:"image"}})])]),r("div",[t._v(t._s(e.name))]),r("div",[t._v(t._s(e.original_name))]),r("div",[r("country-flag",{attrs:{country:"en"===e.original_language?"gb":e.original_language,size:"medium"}})],1),r("div",t._l(t.countStarsActive(parseInt(e.vote_average)),(function(t,e){return r("i",{key:e,staticClass:"far fa-star",class:t.active})})),0)])})),0)])},s=[],u=n("c3aa"),l=n.n(u),c=n("b8d4"),p={name:"MoviesContainer",components:{CountryFlag:c["a"]},data:function(){return{moviesList:[],tvShowList:[],apiKey:"e498fbee3869e4fa0dc21e97223c41de",apiUrl:"https://api.themoviedb.org/3",imgUrl:"https://image.tmdb.org/t/p/",poster_sizes:["w92","w154","w185","w342","w500","w780","original"]}},methods:{countStarsActive:function(t){for(var e=[],n=Math.floor(t/2),r=1;r<=5;r++)0==n?e.push({active:""}):(e.push({active:"star-active"}),n--);return e},axiosRequest:function(t,e){var n=this;l.a.get(this.apiUrl+t,{params:{api_key:this.apiKey,language:"it"}}).then((function(t){n[e]=t.data.results}))},axiosRequestWithQuery:function(t,e,n){var r=this;l.a.get(this.apiUrl+t,{params:{api_key:this.apiKey,language:"it",query:e}}).then((function(t){r[n]=t.data.results}))},doRequestApi:function(t){this.axiosRequestWithQuery("/search/movie",t,"moviesList"),this.axiosRequestWithQuery("/search/tv",t,"tvShowList")}},mounted:function(){this.axiosRequest("/movie/popular","moviesList"),this.axiosRequest("/tv/popular","tvShowList")},created:function(){var t=this;this.$root.$on("searchRequest",(function(e){t.doRequestApi(e)}))}},v=p,f=n("3711"),d=Object(f["a"])(v,o,s,!1,null,null,null),h=d.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar"},[n("ul",t._l(t.links,(function(e,r){return n("li",{key:r},[t._v(t._s(e.name))])})),0),n("SearchBar")],1)},g=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"searchbar"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputText,expression:"inputText"}],ref:"inputSearchText",attrs:{type:"text"},domProps:{value:t.inputText},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendRequestSearch.apply(null,arguments)},input:function(e){e.target.composing||(t.inputText=e.target.value)}}}),n("button",{on:{click:t.sendRequestSearch}},[t._v("Search")])])},y=[],b={name:"SearchBar",data:function(){return{inputText:""}},methods:{sendRequestSearch:function(){this.$root.$emit("searchRequest",this.inputText)},focusInput:function(){this.$refs.inputSearchText.focus()}},mounted:function(){this.focusInput()}},x=b,w=Object(f["a"])(x,_,y,!1,null,"25aa2f64",null),S=w.exports,k={components:{SearchBar:S},name:"Navbar",data:function(){return{links:[{name:"Home",url:"/movie/popular"},{name:"Discover",url:"/discover/movie"},{name:"Top Movies",url:"/movie/top_rated"},{name:"Top Tv Series",url:"/tv/top_rated"}]}},methods:{}},O=k,T=Object(f["a"])(O,m,g,!1,null,null,null),q=T.exports,j={props:{},name:"App",components:{MoviesContainer:h,Navbar:q},methods:{}},R=j,C=(n("b17f"),Object(f["a"])(R,i,a,!1,null,null,null)),M=C.exports;n("1a10"),n("8403");r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(M)}}).$mount("#app")}});
//# sourceMappingURL=app.bf1fc99b.js.map