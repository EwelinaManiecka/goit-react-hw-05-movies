"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[41],{438:function(t,e,n){n.d(e,{LI:function(){return f},PU:function(){return o}});var r=n(861),a=n(757),c=n.n(a),u=n(263),i="95f52d61b01969a69153f9d8a2d4bb9b",s="https://api.themoviedb.org/3/",o=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(s,"trending/movie/day?api_key=").concat(i),t.next=3,u.Z.get(e);case 3:return n=t.sent,t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(s,"search/movie?api_key=").concat(i,"&query=").concat(e),t.next=3,u.Z.get(n);case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},41:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r=n(439),a=n(791),c=n(87),u=n(689),i=n(438),s={},o=n(184),f=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],f=e[1],d=(0,u.TH)();return(0,a.useEffect)((function(){(0,i.PU)().then(f)}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{children:"Treading today"}),(0,o.jsx)("ul",{children:n.map((function(t){return(0,o.jsx)("li",{className:s.li,children:(0,o.jsx)(c.OL,{to:"/movies/".concat(t.id),state:{from:d},children:t.title})},t.id)}))})]})};var d=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(f,{})})}}}]);
//# sourceMappingURL=41.0a9b90cc.chunk.js.map