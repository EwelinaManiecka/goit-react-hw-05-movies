"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[41],{438:function(t,n,r){r.d(n,{LI:function(){return f},PU:function(){return i},kK:function(){return d},l2:function(){return p},sv:function(){return v}});var e=r(861),a=r(757),c=r.n(a),u=r(263),s="95f52d61b01969a69153f9d8a2d4bb9b",o="https://api.themoviedb.org/3/",i=function(){var t=(0,e.Z)(c().mark((function t(){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(o,"trending/movie/day?api_key=").concat(s),t.next=3,u.Z.get(n);case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(o,"search/movie?api_key=").concat(s,"&query=").concat(n),t.next=3,u.Z.get(r);case 3:return e=t.sent,t.abrupt("return",e.data.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(o,"movie/").concat(n,"?api_key=").concat(s),t.next=3,u.Z.get(r);case 3:return e=t.sent,t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(o,"movie/").concat(n,"/credits?api_key=").concat(s),t.next=3,u.Z.get(r);case 3:return e=t.sent,t.abrupt("return",e.data.cast);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(s),t.next=3,u.Z.get(r);case 3:return e=t.sent,t.abrupt("return",e.data.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},41:function(t,n,r){r.r(n),r.d(n,{default:function(){return p}});var e=r(439),a=r(791),c=r(87),u=r(689),s=r(438),o={},i=r(184),f=function(){var t=(0,a.useState)([]),n=(0,e.Z)(t,2),r=n[0],f=n[1],p=(0,u.TH)();return(0,a.useEffect)((function(){(0,s.PU)().then(f)}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{className:o.h2,children:"Treading today"}),(0,i.jsx)("ul",{children:r.map((function(t){return(0,i.jsx)("li",{className:o.li,children:(0,i.jsx)(c.OL,{to:"/movies/".concat(t.id),state:{from:p},children:t.title})},t.id)}))})]})};var p=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(f,{})})}}}]);
//# sourceMappingURL=41.286a336c.chunk.js.map