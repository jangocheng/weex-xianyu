// { "framework": "Vue"} 

!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=42)}({0:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={initIconFont:function(){weex.requireModule("dom").addRule("fontFace",{fontFamily:"iconfont",src:"url('http://at.alicdn.com/t/font_404010_jgmnakd1zizr529.ttf')"})},setBundleUrl:function(e,t){var o=e,n="",r="",i=void 0,a=o.indexOf("your_current_IP")>=0||o.indexOf("file://assets/")>=0,s=o.indexOf("file:///")>=0&&o.indexOf("WeexDemo.app")>0;if(a)i="file://assets/dist";else if(s)i=o.substring(0,o.lastIndexOf("/")+1);else{var l=/\/\/([^\/]+?)\//.exec(o),c=/\/\/[^\/]+\/([^\/]+)\//.exec(o);l&&l.length>=2&&(n=l[1]),c&&c.length>=2&&(r=c[1]),i="http://"+n+"/"}return("undefined"==typeof navigator||"Mozilla"!==navigator.appCodeName&&"Gecko"!==navigator.product?i+(r?r+"/":""):"web"===r||"dist"===r?"./index.html?page=/dist/":"./index.html?page=")+t},getUrlSearch:function(e,t){var o=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=e.slice(e.indexOf("?")+1).match(o);if(null!=n)try{return decodeURIComponent(n[2])}catch(e){return null}return null}};t.default=n},21:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(0),r=function(e){return e&&e.__esModule?e:{default:e}}(n),i=weex.requireModule("navigator"),a=weex.requireModule("webview"),s=weex.requireModule("modal");t.default={components:{},data:function(){return{url0:"http://m.you.163.com"}},created:function(e){r.default.initIconFont(),this.url=r.default.getUrlSearch(weex.config.bundleUrl,"weburl")||this.url0,console.log("webPageURL",this.url)},methods:{back:function(e){s.toast({message:"back"}),a.goBack(this.$refs.wv)},close:function(e){i.pop({animated:"false"})},reload:function(e){s.toast({message:"reload"}),a.reload(this.$refs.wv)},error:function(e){console.log("error",e)}}}},22:function(e,t){e.exports={wrapper:{position:"absolute",left:0,right:0,bottom:0,top:0},iconfont:{fontFamily:"iconfont"},toolbar:{position:"fixed",top:0,left:0,right:0,height:114,paddingTop:44,backgroundColor:"#fafafa",opacity:.99,zIndex:101,flexWrap:"nowrap",flexDirection:"row",justifyContent:"space-around",borderBottomWidth:1,borderBottomColor:"#d9d9d9"},tlt:{flex:1,fontSize:36,paddingTop:10,color:"#333333",textAlign:"center"},left:{height:68,width:150,paddingTop:10,display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"flex-start",paddingLeft:20},right:{height:68,width:150,paddingTop:10,display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"flex-end",paddingRight:20},btnTxt:{fontSize:40,width:70,color:"#666666",textAlign:"center"},"webview-box":{position:"absolute",top:114,left:0,right:0,bottom:0},webview:{position:"absolute",top:0,left:0,right:0,bottom:0}}},23:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:["wrapper"]},[o("div",{staticClass:["toolbar"]},[o("div",{staticClass:["left"]},[o("text",{staticClass:["btnTxt","iconfont"],on:{click:e.back}},[e._v("")]),o("text",{staticClass:["btnTxt","iconfont"],on:{click:e.close}},[e._v("")])]),o("text",{staticClass:["tlt"]}),o("div",{staticClass:["right"]},[o("text",{staticClass:["btnTxt","iconfont"],on:{click:e.reload}},[e._v("")])])]),o("div",{staticClass:["webview-box"]},[o("web",{ref:"wv",staticClass:["webview"],attrs:{src:e.url},on:{error:e.error}})],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0},42:function(e,t,o){var n,r,i=[];i.push(o(22)),n=o(21);var a=o(23);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=n=n.default),"function"==typeof r&&(r=r.options),r.__file="/Users/zwwill/workspace/dev/github/weex-pro/YanXuanDemo/src/page/web.vue",r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-332c4f29",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=n,e.exports.el="true",new Vue(e.exports)}});