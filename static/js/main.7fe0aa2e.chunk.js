(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var r,s=n(9),c=n.n(s),o=n(3),a=n(4),i=n(6),l=n(5),u=n(1),b=n.n(u),d=(n(14),n(8),n(2)),h=n(0);!function(t){t.length="length",t.alphabet="alphabet"}(r||(r={}));var j=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={goods:Object(d.a)(t.props.goodsFromServer),isReversed:!1},t.reverseList=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.reset=function(){t.setState({goods:Object(d.a)(t.props.goodsFromServer),isReversed:!1})},t.sortByParam=function(e){switch(e){case r.alphabet:return t.setState((function(t){return{goods:Object(d.a)(t.goods.sort((function(t,e){return t.localeCompare(e)})))}}));case r.length:return t.setState((function(t){return{goods:Object(d.a)(t.goods.sort((function(t,e){return e.length-t.length})))}}));default:return 0}},t.getVisible=function(){var e=t.state,n=e.isReversed,r=e.goods;return n&&(r=Object(d.a)(r).reverse()),r},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this,e="btn-box bg-primary border-0 rounded text-light w-25 py-2 m-1",n="d-flex justify-content-center align-items-center",s=this.getVisible();return Object(h.jsxs)("div",{className:"w-100",children:[Object(h.jsxs)("div",{className:"".concat(n," flex-column"),children:[Object(h.jsx)("h1",{children:"Goods"}),Object(h.jsx)("ul",{className:"w-25",children:s.map((function(t){return Object(h.jsx)("li",{className:"border border-success rounded p-1 m-1 text-center",children:t},t)}))})]}),Object(h.jsxs)("div",{className:"".concat(n),children:[Object(h.jsx)("button",{type:"button",onClick:function(){return t.reverseList()},className:"".concat(e),children:"Reverse List"}),Object(h.jsx)("button",{type:"button",onClick:function(){return t.sortByParam(r.alphabet)},className:"".concat(e),children:"Sort by Alphabet"}),Object(h.jsx)("button",{type:"button",onClick:function(){return t.sortByParam(r.length)},className:"".concat(e),children:"Sort by Length"}),Object(h.jsx)("button",{type:"button",onClick:function(){return t.reset()},className:"".concat(e),children:"Reset"})]})]})}}]),n}(b.a.Component),f=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={isListVisible:!1},t.showList=function(){t.setState({isListVisible:!0})},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this,e=this.state.isListVisible;return Object(h.jsx)("div",{className:"h-100 w-100 ".concat("d-flex justify-content-center align-items-center"),children:e?Object(h.jsx)(j,{goodsFromServer:f}):Object(h.jsx)("button",{type:"button",onClick:function(){return t.showList()},className:"".concat("btn-box bg-primary border-0 rounded text-light w-25 py-2 m-1"),children:"Start"})})}}]),n}(b.a.Component);c.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7fe0aa2e.chunk.js.map