(this["webpackJsonptalent-calc"]=this["webpackJsonptalent-calc"]||[]).push([[0],{108:function(A,e,t){},109:function(A,e,t){},110:function(A,e,t){},111:function(A,e,t){},112:function(A,e,t){},113:function(A,e,t){},114:function(A,e,t){},50:function(A,e,t){"use strict";t.d(e,"e",(function(){return r})),t.d(e,"c",(function(){return g})),t.d(e,"f",(function(){return C})),t.d(e,"g",(function(){return o})),t.d(e,"b",(function(){return i})),t.d(e,"i",(function(){return I})),t.d(e,"a",(function(){return s})),t.d(e,"h",(function(){return l})),t.d(e,"j",(function(){return u})),t.d(e,"d",(function(){return d}));var n=t(54),c=t(55),r=function(A,e,t){return A[e][t]},g=function(A,e,t){return A[e].talents[t]},a=function(A,e){return A[e].talents},C=function(A,e){return A[e]},o=function(A,e){return Object.values(A[e]).reduce((function(A,e){return A+e}),0)},i=function(A){return c.a.TOTAL_POINTS-function(A){return Object.keys(A).reduce((function(e,t){return e+o(A,t)}),0)}(A)},I=function(A,e,t,n){return r(A,t,n)===g(e,t,n).maxRank},s=function(A,e,t,n){return o(A,t)>=g(e,t,n).reqPoints},l=function(A,e,t,n){var c=g(e,t,n);return!c.prereq||I(A,e,t,c.prereq)},u=function(A,e,t,n){var c=l(A,e,t,n),r=s(A,e,t,n);return c&&r},d=function(A,e,t,c){var C=function(A,e,t,c){var C=g(e,t,c).reqPoints;return Object.entries(a(e,t)).reduce((function(e,c){var g=Object(n.a)(c,2),a=g[0];return g[1].reqPoints<=C?e+r(A,t,a):e}),0)}(A,e,t,c),o=a(e,t);return Object.entries(o).reduce((function(e,g){var a=Object(n.a)(g,2),o=a[0],i=a[1],I=r(A,t,o),s=i.prereq;return(i.reqPoints===C&&I>0||s===c&&I>0)&&e.push(o),e}),[])}},51:function(A,e,t){"use strict";t.d(e,"a",(function(){return i})),t.d(e,"f",(function(){return I})),t.d(e,"e",(function(){return r.g})),t.d(e,"c",(function(){return r.b})),t.d(e,"d",(function(){return u})),t.d(e,"b",(function(){return d}));var n=t(54),c=t(0),r=t(50),g=t(18),a=t(10),C=t(1),o=Object(c.createContext)(null),i=function(A){var e=function(A){return Object.entries(A).reduce((function(A,e){var t=Object(n.a)(e,2),c=t[0],r=t[1];return A[c]=Object.keys(r.talents).reduce((function(A,e){return A[e]=0,A}),{}),A}),{})}(A);return function(t){var i=t.children,I=Object(c.useReducer)(function(A){return function(e,t){switch(t.type){case"POINT_SPENT":var n=t.tree,c=t.talent;return Object(a.a)(Object(a.a)({},e),{},Object(g.a)({},n,Object(a.a)(Object(a.a)({},e[n]),{},Object(g.a)({},c,e[n][c]+1))));case"POINT_UNSPENT":var r=t.tree,C=t.talent;return Object(a.a)(Object(a.a)({},e),{},Object(g.a)({},r,Object(a.a)(Object(a.a)({},e[r]),{},Object(g.a)({},C,e[r][C]-1))));case"TREE_RESET":var o=t.tree;return Object(a.a)(Object(a.a)({},e),{},Object(g.a)({},o,Object(a.a)({},A[o])));case"ALL_RESET":return Object(a.a)({},A);case"STATE_RESTORED":var i=t.newState;return Object(a.a)({},i);default:return e}}}(e),e),s=Object(n.a)(I,2),l=s[0],u=s[1],d={state:l,data:A,spendPoint:function(e,t){var n=Object(r.b)(l),c=Object(r.j)(l,A,e,t),g=Object(r.i)(l,A,e,t);c&&!g&&n>0&&u({type:"POINT_SPENT",tree:e,talent:t})},unspendPoint:function(e,t){var n=Object(r.e)(l,e,t);0===Object(r.d)(l,A,e,t).length&&n>0&&u({type:"POINT_UNSPENT",tree:e,talent:t})},resetTree:function(A){u({type:"TREE_RESET",tree:A})},resetAll:function(){u({type:"ALL_RESET"})},restoreState:function(A){u({type:"STATE_RESTORED",newState:A})}};return Object(C.jsx)(o.Provider,{value:d,children:i})}},I=function(){var A=Object(c.useContext)(o);if(null===A)throw new Error("Components using useTalentContext must be children of TalentContextProvider");return A},s=t(15),l=function(A){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=Object(s.a)(e);return A.reduce((function(A,e,n){return A[e]=t[n]||0,A}),{})},u=function(A){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=e.split("-");return Object.entries(A).reduce((function(A,e,c){var r=Object(n.a)(e,2),g=r[0],a=r[1];return A[g]=l(Object.keys(a.talents),t[c]),A}),{})},d=function(A){var e=Object.values(A).reduce((function(A,e){var t=Object(s.b)(Object.values(e));return A.push(t||"0"),A}),[]);return Object(s.e)("0",e).join("-")}},52:function(A,e,t){"use strict";function n(A,e){return e||(e=A.slice(0)),Object.freeze(Object.defineProperties(A,{raw:{value:Object.freeze(e)}}))}t.d(e,"a",(function(){return n}))},53:function(A,e,t){"use strict";t.d(e,"a",(function(){return p}));var n=t(0),c=t.n(n),r=t(2),g=(t(108),t(55)),a=t(51),C=(t(109),Object(n.createContext)(null)),o=t(10),i=(t(110),t(54)),I="topRight",s=t(17),l=(t(111),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAYAAAB/HSuDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAF0VJREFUeNrs2zFqwmAYgOFEHAIOZneX2qniDTqU0lN0qqcoBHoKCwUv4FqkiycQO1Xo7m6HQoaC/f9YRZy7JDwP/ISo07d9b0y62+2SKE3TTrj0w+kmAAAAQN19hfMZ9v7veNM+W/5H4fTMCAAAAGpv87fzVxGgfb78LxaLIv4gz3OjAgAAgJrJsqy6DgaD4vBZjABpuA4Py/96vS5ms1ny+PSyNDIAAACop4/319FJBIj/BFi2kv07/73VamX5BwAAgAa4vLqrdvv4oD/Zv+rfbR2+nM/nln8AAABoUASYTqfH+5aRAAAAQPMJAAAAACAAAAAAAAIAAAAAUK8AsN1uTQMAAAAaHADa4WRGAQAAAM0OAD/hlEYBAAAAzQ4AAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAACABGAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAACAAGAEAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAIAEYAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAIAAYAQAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAIAAAAAAAAgAAAAAgAAAAAIAAAAAAAAgAAAAAgAAAAAAACAAAAACAAAAAAAAIAAAAAMB/BIA8z00DAAAAGuR01z8GgLIsk9vri5HxAAAAQP3FHT/u+gdpOMNw4uLfG4/HRfzwefq2NCoAAACop4f7m+oB/2QyiXv+JpxlDACdcPqnESDLMq8EAADAL7t2bAMgDAMBEE/A/qsxRSioTRIJlIxg6U5y4dbdvwxQUGttfvmv4b/PFZl5RMRWAjgXAAAAlPeH/579n1kADEsJcLoRAAAAlHd/4X8srwADAPzEdM2Cbs8XAAAAAElFTkSuQmCC"),u=t(1),d=c.a.forwardRef((function(A,e){var t=A.position,n=A.contentClassName,c=void 0===n?"":n,r=A.children;return Object(u.jsx)("div",{className:"Tooltip-container Tooltip-container--".concat(t),children:Object(u.jsxs)("div",{ref:e,className:"Tooltip",children:[Object(u.jsxs)("div",{className:"Tooltip-backgroundContainer",children:[Object(u.jsx)("div",{className:"Tooltip-background--topLeft",style:{backgroundImage:"url(".concat(l,")")}}),Object(u.jsx)("div",{className:"Tooltip-background--topRight",style:{backgroundImage:"url(".concat(l,")")}}),Object(u.jsx)("div",{className:"Tooltip-background--bottomLeft",style:{backgroundImage:"url(".concat(l,")")}}),Object(u.jsx)("div",{className:"Tooltip-background--bottomRight",style:{backgroundImage:"url(".concat(l,")")}})]}),Object(u.jsx)("div",{className:"Tooltip-content ".concat(c),children:r})]})})})),j=(t(112),t(50)),f=c.a.forwardRef((function(A,e){var t=A.name,n=A.tree,c=Object(s.a)(A,["name","tree"]),r=Object(a.f)(),g=r.state,C=r.data,i=Object(j.b)(g),I=Object(j.c)(C,n,t),l=I.prereq?Object(j.c)(C,n,I.prereq):null,f=Object(j.e)(g,n,t),b=Object(j.a)(g,C,n,t),O=Object(j.h)(g,C,n,t),h=Object(j.j)(g,C,n,t);return Object(u.jsxs)(d,Object(o.a)(Object(o.a)({ref:e,contentClassName:"TalentTooltip-content"},c),{},{children:[Object(u.jsx)("h1",{className:"TalentTooltip-title",children:t}),Object(u.jsxs)("p",{className:"TalentTooltip-rank",children:["Rank ",f,"/",I.maxRank]}),!b&&Object(u.jsxs)("p",{className:"TalentTooltip-error",children:["Requires ",I.reqPoints," points in ",n," Talents"]}),l&&!O&&Object(u.jsxs)("p",{className:"TalentTooltip-error",children:["Requires ",l.maxRank," point",l.maxRank>1?"s":""," in ",l.name]}),Object(u.jsx)("p",{className:"TalentTooltip-description",children:0===f?I.description(f+1):I.description(f)}),0!==f&&f<I.maxRank&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:"Next rank:"}),Object(u.jsx)("p",{className:"TalentTooltip-description",children:I.description(f+1)})]}),f>0&&Object(u.jsx)("p",{className:"TalentTooltip-error",children:"Right-click to unlearn"}),h&&0===f&&i>0&&Object(u.jsx)("p",{className:"TalentTooltip-clickToLearn",children:"Click to learn"})]}))})),b=t(16),O=(t(113),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAEICAYAAACApK5GAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAPeSURBVHja7FvbThNBGJ499FygjYYrg3JhL7g3ctD7wsv0WXgaSEQFtPUNCMFEwyFcEG8QpC3dg/PN9l9ru7udARMk+YdMZhn2m3/+48xHslYYhgLNsqymHJoLz5+1ioWiGG+9fk+cHJ9tysdtidnGnDv+UrFQFo2XjQnw0dejibkJcG2uJuq1unquVCrC9331fH5+Ph3suq6o1+ukivA8L56fCkbL5XJqJGBas8U92r3AbubKti0cx4n1Nwajo9Eij0BnhC6FbxAEZmBEF/k6CWynSbzztiENroFkSCSLTwXj5V6vl6p7Jvj29jbOpFHdx+ce1s//FoykLxaLwrItIc0k3JwryuWymtOWnHOjgnBzcyMG3sBs2wAMBoO7xTYkO7bz1y60JSNYEBiINDwb+RmGQ1hSYiSFaOq2IRELoIJgNCpD2CoM5vmeKBVLZgbr9rpKz3w+n5pVmX4mnf3AN5PsuI7IyR9Y3Fiy7/kKCINpF4PYYGFkMOhNwaINhmSAIVlZPeHQy9Q5LyJL4znJz+n5HEZRheMWI9JT32BBct3SyyopkQq9ClHHNdDZSdZTa9u2ZSs/w9KUmvr5PPQzDgDlJktTZxR+JAakFQoFZW3tU7Lf76teq9VU5URmJZWiRDCVXjpqwiDUd1W3G+Uy3IXSS3VMCzw7O6uCBMaC/ihDRgWQjlQKUboVTgWrg92LJMFgMJbW+Ywtwj0qMAaWCpa0up1+obEifyNQZqozZuGJ2z52cKfYprCEz5Pu2tmSJaiQL6gFypWyirZHcvcslUpq+4EfiMvLSzMwgoWKQFKQ/Gc6k37VajUOS+0TA8lAeibl8cOTskTJV9dXkc6Vqrj+dW12G0LlREMqEpfWBkPiaIIYbTsLoB2ecBO5yqwMDcHkrkcQ28yfmT8zf2b+zPyZ+TPzZ+bPzJ+ZPzN/Zv7M/Jn5M/Nn5s/Mn5k/M39m/sz8mfkz82fmz8yfmT8zf2b+zPyZ+TPzZ+bPzJ+ZPzN/Zv7M/Jn5M/Nn5s/Mn5k/M38erdn0NW5W+XXTWA1AqN1ZF3dXvvRajmuyL4wXfIwofpSqw9aUf1uSYxsz+Gp4YXVltTVO+8cPdnqn86WD76AP4uXcSkm8fbWcusWN9Q1lgw+dz3+OJNmfyD53/O37oRf4y4svFicYHUXau/c74tPuR0g9kf0I4J9IXyxwdnp6KLe63Gg04hsgAXckcH9/j4BtbNuW1sR/Fw6GEye7e7ubeHG04XfMjwKBs0Y+GEehWiLLv1ldazWb62Jre0u0O+0JoMKM+nF8gfn5p62Lix+JwAlw0gJpQLTfAgwAp1oo657d3lYAAAAASUVORK5CYII="),h="data:image/png;base64,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",v={right:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAPCAYAAAChtYCSAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAOASURBVHja7FrLbtNAFL1+xYlTldCwoFKVbmh/ASgsKJTH30TiC/iFfg1dBOiDFiR2CCq2VKwqJFrl0bxsM2ecO8yYlEoVVCKeI43sGdtz77mT+xg7TpqmZGFRRDiOc1scrk+6P0Q7FP7Q1u/xrZksCox7ojUm50cTpzGcxBcDz6ydLAqKxtrdtaZfjWi31drUMotyEmQQ6yAWhcbDtfuUDobNvb3d35zEbywvNcthRHPVOfJ9P1+jked5qp8kiWwM7F/iODaeKZfLRh/XXdeVc52H8Xgsr6eU7Yd8z1fyycnkBn6gdMCcQRBMlV+r1dT56ekp6XssyNEBvdB0XfX7Lf/Z5s+/dxyfPn5Cnus2t3e2DSfxy2GZVldWafHmIpVKJWMCGAeK6AYaDocG+dFoZDwTRRGNxtkYSLFBoQTuhbHiJFaLE4+zOTzfU4vFiwJyIIXxarVKaZLSYDigwWAg9eL50WcZkUiXSt84MXSD7voC9wd9An9eVMjSjWj5zyZ/dnzoWqlU1NjGow3cZjjJpTfp+WiilBgNqdfrZcaqRFIwG/2sfyYVQx9kcA6l0Q+SQC0GRwUYrt/vUxiG8hrGMTfGYDQQdB2X2p22il58DtQX6kaE/Juw/GeTP5xEyG3uH+xLJ/Hq9YUX9foNql2ryQzCno0GAvnUiD4LzadkOSaiA56TaXGSBtFHQwSAQdiDOV1ylMC9MArL4NSM65xO0efrsu86KnJhvkq5QqWgJBvk5/XX+SF66BFS52f5zy5/yGYHlXqJudGY18qtFfr0+eOdbrf3RWWQbrcrHSRvsLxx8vuUPCAEqY8JQmlOmZh7HI/ldaRUpFeMIQqgjxI0ddNfi+hkZNrtNp2cnGTpezii+WvzmcHE89IYQm+UCogs+RpYR6fTkXMwR0QbpGfsv/Bcvia3/GeXv+7kXM4xt62tl3R8/B0Z5OhSJRZ73DSEpdA4siK4HwZG2lXGDCaLUfqDwYWREBVwxJyoKz3XUzUu0u95G8R/Bcv//+bP+k/j0HrVordZeYXvIvtOY3kpxVsslFgXRYdpdai+adPfDFwVrlqe5T97/NcfrMuj2HfQZIMunUO0Q//o67dN+ybcoqjAh0IcX++8oXcHB4ZzyO8gKLmsmSwKCvmRfO/D+6nOIfdd9s+KFkWF2BM9J/O/WIZzWAexKLqDXPhv3p8CDABCONW41coIrgAAAABJRU5ErkJggg==","right--gold":"data:image/png;base64,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",down:O,"down--gold":h,"right-down":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAAAPCAYAAAClQFCvAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAOmSURBVHja7FrLTttAFJ34HTshUWFRpKpdFZVPKF/Qv+m38Des6Lp71AVZFXVFqZooCcSOH51zzR1sx6YI0YrHPciyPfbcuedO7mPG9IqiUAKB4HZYYgKB4O/o6eOTmEEg2MBvfXzTFdccN444ikDQirPr81fKKG/fvSkCP1SDaKAcx6mnm15P2bZt7vM8p4OB9U2WZbU+QRDU7vHcsiyS1YU0Tel5ocr1kmM7ZnzkPIzpOq7RATJd120dfzwem+vZbKaqazCMU6s7tV44qrpW3xf+z5N/83feBDgcfzk+1JdHuv8R9Qn8QO2931O7r3eV53m1DjASFKoaKkmSmhHW63WtTxiGap2WbSDHhoVyeBdGy/LMTFKWljJsxzaTxpMDkiCH9iiKVJEXKk5iFccx6cXycc9jhFF4o2+W13SD7tWJXsUrBf48uRir+mMS/k+bP2RDBjspy9sabZGs1WpFjojxIQN8MM7JycmG8zj3zUvN6GImY52oy8vL0mj9kJRk41+trsgIuAcpXMPwuHdz10wKRwkQABnf9+kZ2iEbbTAeJsXqWWq+mJtIwNfA9qvtWsR8SAj/x8cf7y2WCwr4cArP9cgpbcumsXBA58ViQXrhD+/hObIY7AWHJQfqchQIaaakppEhnN+B0s20x+RAiiMNFEMf6quVQUTgVIz+nEoxPvpwWmV9QB6GZOOjL2c+GJkiiz74vSiMavo2M2SV08gf1d7Bs6oNhP/T448+rDeVjpZt9OWxcKYsqqk7lqMc11FBPygzU9weGIxVlsslKVBNtRtbZBVDde43ayWREjm1QilOpZCdZik9h+ciNaINUQH3KFELqzB9qV33nc/najqdlmk9WZepE/Wp7o+oAb1RQiASNGvkKhBJIIM5IhLBOFifoV+zZhf+T4e/7/lUSqLcpDEwlnYcOBDWPlyGoh2OAQfKi5zkJHFCmWg4GHbyulfpBeFdHyqhcPXMhudaEenYGNW9nhTvFsNrY/WDPp0hE4Q5SsDgMETXQvJfQfg/Tv54jozh5GVZl9s3TgoH5HUMOXvvenFf3CzyL35ddDsKvPB0cqrGo/Ffo0VbnVpd3N1lR+Gh8b/HE/7Ph/9gMFD7H/bV+c9zNRwO1c72DrVPJpPNcc6+/ziULXPBS8TBx4PP2GCAk6D8nM6mJgC0lV5HYjLBCwR9aOetZaxPsM5r28QgR+EPKgLBS4FeK5GTYPODP25is4DRtj0s/xQpENwBfwQYALBtxCjdx80IAAAAAElFTkSuQmCC","right-down--gold":"data:image/png;base64,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","right-down-down":O,"right-down-down--gold":h},T=function(A){var e=A.dir,t=A.from,n=A.to,c=A.active,r="".concat(e).concat(c?"--gold":"");return Object(u.jsx)("div",{className:"Arrow-container Arrow-container--".concat(e),style:{gridArea:"".concat(t," / ").concat(t," / ").concat(n," / ").concat(n)},children:Object(u.jsx)("div",{className:"Arrow Arrow--".concat(e),style:{backgroundImage:"url(".concat(v[r],")")}})})},m=function(A){var e=A.name,t=function(){var A=Object(n.useContext)(C);if(null===A)throw new Error("Components using useTreeContext must be children of TreeContext.Provider");return A}(),c=Object(a.f)(),r=c.state,g=c.data,s=c.spendPoint,l=c.unspendPoint,d=Object(j.c)(g,t,e),O=d.pos,h=d.icon,v=d.arrows,m=Object(j.b)(r),R=Object(j.e)(r,t,e),N=Object(j.i)(r,g,t,e),p=Object(j.j)(r,g,t,e),B=function(){for(var A=Object(n.useRef)(null),e=Object(n.useRef)(null),t=Object(n.useState)(I),c=Object(i.a)(t,2),r=c[0],g=c[1],a=Object(n.useState)(!1),C=Object(i.a)(a,2),o=C[0],s=C[1],l=arguments.length,u=new Array(l),d=0;d<l;d++)u[d]=arguments[d];return Object(n.useLayoutEffect)((function(){o&&e.current&&A.current&&g(function(){if(!e.current||!A.current)return I;var t=window.innerHeight,n=window.innerWidth,c=A.current.getBoundingClientRect(),r=e.current.getBoundingClientRect(),g=c.top>=r.height,a=n-c.right>=r.width,C=t-c.bottom>=r.height,o=c.left>=r.width;return g&&a?"topRight":g&&o?"topLeft":C&&a?"bottomRight":C&&o?"bottomLeft":I}())}),[o].concat(u)),{anchorProps:{ref:A,onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)}},tooltipProps:{ref:e,position:r},tooltipVisible:o}}(R),k=B.anchorProps,F=B.tooltipProps,S=B.tooltipVisible,E=m<1&&0===R?"locked":N?"maxed":p?"unlocked":"locked",x="unlocked"===E?"green":"maxed"===E?"gold":"grey";return Object(u.jsxs)(u.Fragment,{children:[v&&v.map((function(A,e){return Object(u.jsx)(T,Object(o.a)({active:p},A),e)})),Object(u.jsxs)("div",{className:"Talent-container",style:{gridArea:O},children:[Object(u.jsx)(b.a,Object(o.a)({onClick:function(){return s(t,e)},onRightClick:function(){return l(t,e)},icon:h,disabled:"locked"===E,outline:x},k)),"locked"!==E&&Object(u.jsx)("div",{className:"Talent-pointCount Talent-pointCount--".concat(x),style:{backgroundImage:"url(".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAXCAYAAAF4748IAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKNSURBVHjaYvj//z8DEPACMRuMARL5zwQk/oBEKlIYGAACCESzADE/WHlBDMd/qDJNJgkBBhj4ChBAMGWJM2o4/ncUgFV1QA1l4EfSBsN6jCADGRkZFYAcU6ju60B8GSCAYBKcUIeBnPKNEUgoVKRw3FeQYGD48AXotgk/bEFmh6KZ288E8w8S4AQJPkUTvAEyE2SJORBLA/FHID4OEEDItouDLAViUaiR/4D4MxA/AeLHQPyBAWqCAxYPgjE0JAqAWA7mMEkGHADoJRClBsR8TFDr/jDgBz+B+C8jNPhkgNixI4djHgc0Zl68gNAdc350AqktQHyRERrvIE+CNLFCNTNBTQTZ+BuEger+AwQQLDQYoQphihmQnAdSCHYmSBEzEIMsl4U6hxdq8i8gfg3ED4D4JVDDd5ApXKBkBMQ+wERTDjIBFLEgwAEKswk/koDUfqDloPBmkAOJEQhnB1hccwOx/IQlP/AFHShWWZigbmYnEM7gEGKCeoYJl6oPX8A2MsEIUDh+J2AyKGT+MUHz0ENg7OFTDArCP4zQcNUHBV1CEGu5gRYzPKoZGH4Ao5sBHHSgpEpSpJAU3QABaiuDFISBGIrqWCyiKJSu3HsBT+ZO1z2BC8/lATyAIBTXtlgwqS8QFUeoNPAXheG3k7yfepBGHBwzvAktTXh7cCYNRhXNufEld/FrjKMhZjNRRhSXKOMK6ZtxRTyvojO68Kxg1Yb7nMBr0tayVLZkJDqn/eY5GeFSs3QUndgqujha5FY6EVHxjdOYYLjAQ72mgR6mXDkfdK/ctS2xvv1EOlYO9+Cxt4GYutaLR3DY6JTLP4xLPCqLk6K28FRIDlsqdoc4FfaLlMh9UNEbx70l7wGUGg+5hhHY7wAAAABJRU5ErkJggg==",")")},children:R}),S&&Object(u.jsx)(f,Object(o.a)({name:e,tree:t},F))]})]})},R=(t(114),function(A){var e=A.children,t=Object(s.a)(A,["children"]);return Object(u.jsxs)("button",Object(o.a)(Object(o.a)({className:"ClearButton"},t),{},{children:[e&&Object(u.jsx)("span",{className:"ClearButton-label",children:e}),Object(u.jsx)("div",{className:"ClearButton-icon",style:{backgroundImage:"url(".concat("data:image/gif;base64,R0lGODlhEAAQAPeJACMjIx4eHiAgICIiIhoUFB0dHSEhIR8fHxYQEP93ehoWFvddYPhfYuovMTIUFfJFR6M4Ov95fP9WWes/QfVOUOs0NkwfIP56fektL/9+gf9sbvdcXjccHPZYWuEiJOs+QOMqLP92ef9iYzggIfE/Qf97fk4kJSAcHPBGSOo8PvVWWHQwMTQUFPttb/+ChjMiI/9ucDkfHxsYGHIpKkkXGBoUFfpjZvpiZexER0QSEuYyNP15fCgiIkkXF/+Hiv9ydP9bXvxzdv9xdP98fjcdHetAQvZKTDgXFxUQEDsgICIgIDcdHkslJjohIf95fTccHe1FSP9wcvZaXP9+gPZYW/ZZW/93ef52ef10d/tpbPdfYf96ff9YW/loavlqbTgfIDQjJPRZXDQaG/hiZP9wcf9naPZiZRUREfRISu49PzQaGvpsbjQZGv5+gf9wc+o+QPheYf95e/RNUP9UVz0mJvdbXUgdHfpkZ/ZVWB8ZGR4YGOxDRu1DRvZWWfdVVy4dHfJMT/hhZDQVFv90dvttcPphY/1xdPpqbfxwczAwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAIkALAAAAAAQABAAAAjmABMJBDAAgMCBBngYMCjwwAs6ARgCCNBkBZMDBg/8SXBlRMSJSwJ1gRBjIZgEGdoY+hIgABEGLYYwmKEEwAlEF3zsyCKGDZw1W7RAkTEgkQAFXrC4CDJmwaE4C3DUEHDwqBlCU0pEsLJhDwGqB42eCeMECJdBfJCAPThRTZ0QEuZEQeEgItsAT6Tc+eEGhgY/aQTZncihig0hHYqkkFOGQgUWEQckoXKDTJ8JCBDoeCACDYYjAwaYUFEIz5uvAgiAIGGkAY2CBewA+vBVYGoPDXIUMAiggIU8a43q6bGbbcGwA48nCggAOw==",")")}})]}))}),N=function(A){var e=A.name,t=A.children,n=Object(a.f)(),c=n.state,r=n.data,g=n.resetTree,o=Object(j.g)(c,e),i=Object(j.f)(r,e);return Object(u.jsx)(C.Provider,{value:e,children:Object(u.jsxs)("div",{className:"TalentTree",children:[Object(u.jsxs)("header",{className:"TalentTree-header",children:[Object(u.jsx)(b.a,{className:"TalentTree-icon",icon:i.icon}),Object(u.jsxs)("div",{style:{flex:1},children:[Object(u.jsx)("h2",{className:"TalentTree-name",style:{flex:1},children:e}),Object(u.jsxs)("p",{className:"TalentTree-pointsSpent",children:["Points spent: ",o]})]}),Object(u.jsx)(R,{onClick:function(){return g(e)}})]}),Object(u.jsxs)("div",{className:"TalentTree-grid",style:{backgroundImage:"url(".concat(i.background,")")},children:[Object.keys(i.talents).map((function(A){return Object(u.jsx)(m,{name:A},A)})),t]})]})})},p=Object(r.e)((function(A){var e=A.klass,t=A.location,c=A.history,C=Object(a.f)(),o=C.state,i=C.data,I=C.resetAll,s=C.restoreState,l=Object(a.c)(o),d=Object.keys(i),j=d.map((function(A){return Object(a.e)(o,A)})).join("/"),f=g.a.TOTAL_POINTS-l+g.a.FIRST_POINT_LEVEL-1;return Object(n.useEffect)((function(){var A=Object(r.d)(t.pathname,{path:"/:klass/:skills"}),e=A&&A.params&&A.params.skills;e&&s(Object(a.d)(i,e))}),[]),Object(n.useEffect)((function(){var A=Object(r.d)(t.pathname,{path:"/:klass"}),e=A&&A.params&&A.params.klass,n=Object(a.b)(o);n?c.replace("/".concat(e,"/").concat(n)):c.replace("/".concat(e))}),[o]),Object(u.jsx)("div",{className:"KlassTrees-container",children:Object(u.jsxs)("div",{className:"KlassTrees",children:[Object(u.jsxs)("div",{className:"KlassTrees-header",children:[Object(u.jsxs)("div",{className:"KlassTrees-titleArea",children:[Object(u.jsxs)("h1",{children:[e," ",j]}),Object(u.jsxs)("p",{className:"KlassTrees-summary",children:["Required level: ",f>=10?f:"-"]}),Object(u.jsxs)("p",{className:"KlassTrees-summary",children:["Points left: ",l]})]}),Object(u.jsx)(R,{onClick:function(){return I()},children:"Clear all"})]}),Object(u.jsx)("div",{className:"KlassTrees-list",children:d.map((function(A){return Object(u.jsx)(N,{name:A},A)}))})]})})}))},54:function(A,e,t){"use strict";t.d(e,"a",(function(){return c}));var n=t(20);function c(A,e){return function(A){if(Array.isArray(A))return A}(A)||function(A,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(A)){var t=[],n=!0,c=!1,r=void 0;try{for(var g,a=A[Symbol.iterator]();!(n=(g=a.next()).done)&&(t.push(g.value),!e||t.length!==e);n=!0);}catch(C){c=!0,r=C}finally{try{n||null==a.return||a.return()}finally{if(c)throw r}}return t}}(A,e)||Object(n.a)(A,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},55:function(A,e,t){"use strict";t.d(e,"a",(function(){return n}));var n={TOTAL_POINTS:51,FIRST_POINT_LEVEL:10}}}]);
//# sourceMappingURL=0.6454351f.chunk.js.map