"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[7],{438:function(t,e,n){n.d(e,{LI:function(){return p},PU:function(){return i},kK:function(){return l},l2:function(){return f},sv:function(){return v}});var r=n(861),a=n(757),c=n.n(a),u=n(263),o="95f52d61b01969a69153f9d8a2d4bb9b",s="https://api.themoviedb.org/3/",i=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(s,"trending/movie/day?api_key=").concat(o),t.next=3,u.Z.get(e);case 3:return n=t.sent,t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(s,"search/movie?api_key=").concat(o,"&query=").concat(e),t.next=3,u.Z.get(n);case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(s,"movie/").concat(e,"?api_key=").concat(o),t.next=3,u.Z.get(n);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(s,"movie/").concat(e,"/credits?api_key=").concat(o),t.next=3,u.Z.get(n);case 3:return r=t.sent,t.abrupt("return",r.data.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(o),t.next=3,u.Z.get(n);case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},7:function(t,e,n){n.r(e);var r=n(439),a=n(791),c=n(87),u=n(689),o=n(438),s=n(184);e.default=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],i=e[1],p=(0,c.lr)(),f=(0,r.Z)(p,2),l=f[0],v=f[1],d=l.get("query"),h=(0,u.TH)();return(0,a.useEffect)((function(){""!==d&&null!==d&&(0,o.LI)(d).then(i)}),[d]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=t.currentTarget;v(""!==d?{query:e.elements.query.value}:{}),e.reset()},children:[(0,s.jsx)("input",{type:"text",name:"query"}),(0,s.jsx)("button",{type:"submit",children:"Search"})]}),n.length>0&&(0,s.jsx)("ul",{children:n.map((function(t){return(0,s.jsx)("li",{children:(0,s.jsx)(c.OL,{to:"/movies/".concat(t.id),state:{from:h},children:t.title})},t.id)}))})]})}}}]);
//# sourceMappingURL=7.01e5b1f5.chunk.js.map