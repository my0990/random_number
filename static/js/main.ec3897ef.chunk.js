(this.webpackJsonprandom_number=this.webpackJsonprandom_number||[]).push([[0],{41:function(t,n,e){},42:function(t,n,e){},48:function(t,n,e){"use strict";e.r(n);var i,a,r=e(1),o=e.n(r),c=e(20),s=e.n(c),b=(e(41),e(42),e(3)),d=e(10),l=e(11),u=e.p+"static/media/cannon.e296de57.png",p=e(50),j=e(2),h=l.a.div(i||(i=Object(d.a)(["\n    display: flex;\n    width: 700px;\n    height: 400px;\n    background: rgb(146, 150, 138);\n    position: absolute;\n    bottom: 300px;\n    left: 50%;\n    transform: translateX(-50%);\n    border-radius: 20px;\n    border: 15px solid black;\n    justify-content: center;\n    align-items: center;\n    \n"]))),g=l.a.input(a||(a=Object(d.a)(["\n    width: 100px;\n    height:50px;\n    vertical-align: middle;\n"]))),x={bottom:"20px",right:"20px",position:"absolute",width:"70px",height:"70px",margin:"0",padding:"0",fontSize:"20px"};var O,f,m,v,w,S,k,y=function(t){Object(r.useRef)();var n=Object(r.useState)(0),e=Object(b.a)(n,2),i=e[0],a=e[1],o=function(){t.setIsStarted(!t.isStarted),t.getNumber(i),a(0)};return!1===t.isStarted?Object(j.jsxs)(h,{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{style:{marginBottom:"30px"},children:"\ub9c8\uc9c0\ub9c9 \ubc88\ud638\uac00 \uba87 \ubc88\uc778\uac00\uc694?"}),Object(j.jsx)(g,{value:i,onChange:function(t){a(t.target.value)}}),Object(j.jsx)("label",{style:{fontSize:"2.5em",verticalAlign:"middle"},children:"\ubc88"})]}),Object(j.jsx)(p.a,{variant:"danger",style:x,onClick:function(){o()},children:"\uc785\ub825"})]}):Object(j.jsx)(p.a,{variant:"outline-danger",style:x,onClick:function(){o()},children:"\ub2e4\uc2dc"})},C=e(24),I=e.p+"static/media/cannon.d95a3f42.mp3",X=l.a.div(O||(O=Object(d.a)(["\n    width: 1100px;\n    height: 100vh;\n    background: white;\n    margin: 0 auto;\n    position: relative;\n    background: linear-gradient(blue, white);\n"]))),z=l.a.div(f||(f=Object(d.a)(["\n    position: absolute;\n    background: lightgreen;\n    width: 1200px;\n    height: 500px;\n    bottom: 0;\n    right: 0;\n    clip-path: ellipse(68% 39% at 98% 100%);\n"]))),F=l.a.div(m||(m=Object(d.a)(["\n    position: absolute;\n    background: green;\n    width: 1000px;\n    height: 500px;\n    bottom: 0;\n    left: 0;\n    clip-path: ellipse(68% 26% at -1% 100%);\n"]))),A=l.a.div(v||(v=Object(d.a)(["\n    position: absolute;\n    width: 400px;\n    height: 225px;\n    background: url(",");\n    background-size: cover;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n"])),u),B=l.a.div(w||(w=Object(d.a)(["\n    position: absolute;\n    width: 40px;\n    height: 40px;\n    border-radius: 100px;\n    bottom: 30px;\n    left: 50%;\n    transform: translateX(-65%);\n    cursor: pointer;\n    opacity: 1;\n"]))),N=l.a.div(S||(S=Object(d.a)(["\n    position: absolute;\n    width: 100px;\n    height: 100px;\n    border-radius: 100px;\n    bottom: 125px;\n    left: 50%;\n    transform: translateX(-65%);\n    background: rgb(45, 194, 84)\n"]))),T=Object(l.a)(C.animated.div)(k||(k=Object(d.a)(["\n    position: absolute;\n    width: 100px;\n    height: 100px;\n    border-radius: 100%;\n    bottom: 125px;\n    left: 44%;\n    transform: translateX(-65%);\n    background: rgb(45, 194, 84);\n    font-size: 10em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"])));function J(){var t=Object(r.useState)(0),n=Object(b.a)(t,2),e=n[0],i=n[1],a=Object(r.useState)([]),o=Object(b.a)(a,2),c=o[0],s=o[1],d=Object(r.useState)(!1),l=Object(b.a)(d,2),u=l[0],p=l[1],h=Object(r.useState)([]),g=Object(b.a)(h,2),x=g[0],O=g[1],f=Object(r.useState)(!1),m=Object(b.a)(f,2),v=m[0],w=m[1],S=new Audio(I),k=Object(r.useState)(!0),J=Object(b.a)(k,2),L=J[0],M=J[1],P=Object(C.useTransition)(L,{from:{y:50,width:100,x:0,height:100},enter:{y:-300,width:400,x:-130,height:400},config:C.config.wobbly});return Object(j.jsxs)(X,{children:[Object(j.jsx)(F,{}),Object(j.jsx)(z,{}),u?P((function(t,n){return n?Object(j.jsx)(T,{style:t,children:x.length?parseInt(x)+1:""}):""})):Object(j.jsx)(N,{}),Object(j.jsx)(A,{}),Object(j.jsx)(B,{onClick:function(){!function(){p(!0),M(L+1);var t=Math.random()*e,n=c,a=n.splice(t,1);O(a),s(n),0!==e?(i(e-1),S.play()):(alert("\ubc88\ud638\ub97c \ubaa8\ub450 \ubf51\uc558\uc2b5\ub2c8\ub2e4."),p(!1),w(!1))}()}}),Object(j.jsx)(y,{getNumber:function(t){for(var n=[],e=0;e<t;e++)n.push(e);i(t),s(n),p(!1)},setIsStarted:w,isStarted:v})]})}var L=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(J,{})})},M=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,51)).then((function(n){var e=n.getCLS,i=n.getFID,a=n.getFCP,r=n.getLCP,o=n.getTTFB;e(t),i(t),a(t),r(t),o(t)}))};e(47);s.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root")),M()}},[[48,1,2]]]);
//# sourceMappingURL=main.ec3897ef.chunk.js.map