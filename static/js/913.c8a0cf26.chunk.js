"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[913],{438:function(t,n,r){r.d(n,{LI:function(){return p},PU:function(){return s},kK:function(){return h},l2:function(){return f}});var e=r(861),a=r(757),c=r.n(a),u=r(263),o="95f52d61b01969a69153f9d8a2d4bb9b",i="https://api.themoviedb.org/3/",s=function(){var t=(0,e.Z)(c().mark((function t(){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(i,"trending/movie/day?api_key=").concat(o),t.next=3,u.Z.get(n);case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(i,"search/movie?api_key=").concat(o,"&query=").concat(n),t.next=3,u.Z.get(r);case 3:return e=t.sent,t.abrupt("return",e.data.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(i,"movie/").concat(n,"?api_key=").concat(o),t.next=3,u.Z.get(r);case 3:return e=t.sent,t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(i,"movie/").concat(n,"/credits?api_key=").concat(o),t.next=3,u.Z.get(r);case 3:return e=t.sent,t.abrupt("return",e.data.cast);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},913:function(t,n,r){r.r(n),r.d(n,{default:function(){return s}});var e=r(439),a=r(791),c=r(689),u=r(438),o={},i=r(184),s=function(){var t=(0,a.useState)(null),n=(0,e.Z)(t,2),r=n[0],s=n[1],p=(0,c.UO)().movieId;if((0,a.useEffect)((function(){(0,u.kK)(p).then(s)}),[p]),r)return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{children:r.map((function(t){return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{className:o.img,src:t.profile_path?"https://www.themoviedb.org/t/p/w500/".concat(t.profile_path):"https://www.banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png",alt:t.original_name}),(0,i.jsx)("h4",{children:t.name}),(0,i.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})})}}}]);
//# sourceMappingURL=913.c8a0cf26.chunk.js.map