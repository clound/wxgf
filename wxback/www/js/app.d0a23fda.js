(function(e){function t(t){for(var r,o,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"862c4dda","chunk-2d0c7a54":"1ee3ed53","chunk-5d9fa261":"cca9c31b"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1,"chunk-5d9fa261":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"4b7d4c5e","chunk-2d0c7a54":"31d6cfe0","chunk-5d9fa261":"37c5412a"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var A=document.getElementsByTagName("head")[0];A.appendChild(d)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e7e5");var r=n("d399"),o=(n("cadf"),n("551c"),n("f751"),n("097d"),n("db4d"),n("2b0e")),a=(n("f5df"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),c=[],i=(n("7faf"),n("2877")),u={},s=Object(i["a"])(u,a,c,!1,null,null,null),l=s.exports,f=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("van-image",{attrs:{width:"10rem",height:"10rem",fit:"contain",src:e.logoSrc}}),n("div",{staticClass:"mb20 f20 companyname"},[e._v("润阳鸿运物流")]),n("van-cell-group",[n("van-field",{attrs:{label:"真实姓名:",placeholder:"请输入真实姓名",required:""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}}),n("van-field",{attrs:{type:"phone",label:"手机号:",placeholder:"请输入手机号",required:""},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}}),n("van-field",{attrs:{center:"",clearable:"",label:"短信验证码：",placeholder:"请输入短信验证码",required:""},model:{value:e.form.sms,callback:function(t){e.$set(e.form,"sms",t)},expression:"form.sms"}},[n("van-button",{attrs:{slot:"button",size:"small",type:"primary",disabled:e.senddisabled},on:{click:e.sendcode},slot:"button"},[e._v(e._s(e.sendBtnTitle))])],1),n("van-field",{attrs:{center:"",clearable:"",label:"验证码：",placeholder:"请输入短信验证码",required:""},model:{value:e.form.authcode,callback:function(t){e.$set(e.form,"authcode",t)},expression:"form.authcode"}},[n("span",{attrs:{slot:"right-icon"},domProps:{innerHTML:e._s(e.src)},on:{click:function(t){return e._getCode()}},slot:"right-icon"})])],1),n("div",{staticClass:"mt20 p20"},[n("van-button",{attrs:{type:"primary",size:"large",round:"",disabled:e.signupdisabled},on:{click:e._signup}},[e._v("注册")])],1)],1)},A=[],b=n("bd86"),p=(n("be7f"),n("565f")),h=(n("c194"),n("7744")),m=(n("0653"),n("34e9")),v=(n("66b9"),n("b650")),g=(n("7f7f"),n("4056"),n("44bf"));function y(e){var t=/^1[1-9][0-9]{9}$/;return t.test(e)}n("8e6e"),n("ac6a"),n("456d");var x,O=n("a417");function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach(function(t){Object(b["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function E(e){return Object(O["b"])("signup",j({},e))}function w(e){return Object(O["a"])("signup/getcap")}function I(e){return Object(O["b"])("signup/getphonecode",j({},e))}var D={name:"home",components:(x={},Object(b["a"])(x,g["a"].name,g["a"]),Object(b["a"])(x,v["a"].name,v["a"]),Object(b["a"])(x,m["a"].name,m["a"]),Object(b["a"])(x,h["a"].name,h["a"]),Object(b["a"])(x,p["a"].name,p["a"]),x),data:function(){return{logoSrc:n("5a98"),src:"",senddisabled:!1,signupdisabled:!1,sendBtnTitle:"获取验证码",form:{username:"",phone:"",sms:"",code:"",authcode:""}}},created:function(){var e=this.$route.query.code;this.form.code=e||"",this._getCode()},methods:{_getCode:function(){var e=this;w().then(function(t){e.src=t.data})},validateBtn:function(){var e=this,t=60,n=setInterval(function(){0===t?(clearInterval(n),e.senddisabled=!1,e.sendBtnTitle="获取验证码"):(e.sendBtnTitle=t+"秒后重试",e.senddisabled=!0,t--)},1e3)},sendcode:function(){var e=this,t=this.form,n=t.authcode,r=t.phone;r&&y(r)?n?(this.validateBtn(),I({code:n,phone:r}).then(function(t){var n=t.data;n.code?e.$toast.fail(n.message):e.$toast.success("短信发送成功")})):this.$toast.fail("请输入验证码"):this.$toast.fail("请填写正确的手机号")},_signup:function(){var e=this,t=this.form,n=t.username,r=t.phone,o=t.sms,a=t.code;n?r&&y(r)?o?(this.signupdisabled=!0,E({username:n,phone:r,sms:o,code:a}).then(function(t){e.signupdisabled=!1;var n=t.data;n.code?e.$toast.fail(n.message):(e.$toast.success("注册成功"),e.$router.push({name:"search",query:{code:a}}))})):this.$toast.fail("请填写短信验证码"):this.$toast.fail("请填写正确的手机号"):this.$toast.fail("请填写真实姓名")}}},R=D,B=(n("c219"),Object(i["a"])(R,d,A,!1,null,null,null)),H=B.exports;o["a"].use(f["a"]);var S=new f["a"]({mode:"history",base:"/",routes:[{path:"/",redirect:"/signup"},{path:"/signup",name:"home",component:H},{path:"/search",name:"search",component:function(){return n.e("chunk-5d9fa261").then(n.bind(null,"2d3b"))}},{path:"/list/:id",name:"listinfo",component:function(){return n.e("chunk-2d0c7a54").then(n.bind(null,"5201"))}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),Q=n("2f62");o["a"].use(Q["a"]);var G=new Q["a"].Store({state:{},mutations:{},actions:{}});n("157a"),n("f867");o["a"].config.productionTip=!1,o["a"].use(r["a"]),new o["a"]({router:S,store:G,render:function(e){return e(l)}}).$mount("#app")},"5a98":function(e,t){e.exports="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMdaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVBQzA4MjREQ0ExNzExRTlCNDkzRDlGRERBNTk4NDRDIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVBQzA4MjRDQ0ExNzExRTlCNDkzRDlGRERBNTk4NDRDIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iNDQxRkVDOUVGQkY4RDAzODExOThGMURCRkZBNDczNzMiIHN0UmVmOmRvY3VtZW50SUQ9IjQ0MUZFQzlFRkJGOEQwMzgxMTk4RjFEQkZGQTQ3MzczIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAMgBkAwERAAIRAQMRAf/EAJYAAAEFAQEBAAAAAAAAAAAAAAABAgUGBwQIAwEAAgMBAQAAAAAAAAAAAAAAAAECAwQFBhAAAgEDAwMBBQcDBQAAAAAAAQIDAAQFESEGMRIHQfBRIjITYXGBUmIUFbFyQzOzREUIEQACAgEDAQYCCQUAAAAAAAAAAQIDESESBAUxQYHBIhPwcVFhkaHRMiMUBuFCUoKi/9oADAMBAAIRAxEAPwD1SKACgAoARutRYhKW4ApphgKe4MCihAFMAoAKACgAoAUUDA0AJQAhpMR8bq4ht4nnmcRxxIzvI2yqoGpLH0FOuOQKPY+Qstnr9k4zh2uMXHIsb5m7kEMEg1GpgHazSD7a1So2rUjJklleTZg2q3fGbGPLw288lvfQM5glUwntZYe8BWOo6VUq9dRbzq4hzTG8ihmWNJLTI2rFb7G3AKzwtoDow9Rv1FK2G1kk8li1qsYoOtABQAUAFACH1+7egZlXkTnfk3j2cMGK44MtjpQHgmhjndgNx2t9L4dfh1rqcHiUWxfuT2PP0ZM9tjiyqN5s8wqjM3B5goHcWNvdqFA6ksdq3rpfEyoq7/lmSfMaJnxb52uOV8hfCZayjx9w6s1oUZviaP5lIbfWjqX8ejxq/drlvXyx5l3H5W/tJ3nLDkvLsbwiRimL+h/J5hE6yRI5SOH+xnU9/wBlcrgxdfHlyO/fs+7JbZPLNAtbe3t7dIIYxHDEnZGi9FVdgB9gArDJbnnvepctEVjxuEOPzO3/AHF//u1u59jbgpf4IimRvkzFmwgi5jjgI8rgisjOP8toWP14H/SynUfbS4t279H+16jlHLyS/J+c4/CcMfkrFTA9ustqCdA7SKGjG29Ph9Nd1/tIhZcooyDGf+h/IWUEhxXFRkFi0+qIEuZCNQOvYpFdu/oHHp9M7Nr+X9TC+S29Dti8y+YpXCDg1wXJCqBbXSga9NWYD8azT6fxYR0tz/qzRC5m18anzE+It5sxFHBkZFDTwQklEJHy/FvXBmoqT2vK+w0xllEpUSQUDI/N4q3ymPnsZ2eOOdChkhZo5F9xV191TqtcJZQpRTPOvLoMRxjNS4a9vOWSXCKDFPHcoyyodQCpHpsRvvXouJCVvrRzrqkZdlJYrDMLlcA13HFA6ywz3ij6yyq2p7iOuhr2nFfvU7ZnOctk8I3Tg3MrHkPkfE51HEc2SxT2E8DbGO8gYytqPcySAivF83h/tqZVdznu8jo1zyy/8t5rLb3443x+L99yi5jLLDv2W0T7fXmfooXu2HrXn6OI8u6X5Fp5m6bICwt+R+O0/dXk5zPH7t2nyjogSe0nc6yTIq/NCT8w9OtdCyS5lqx6cQwvrx9hUmTHkjN2Enje/u7aVbiK+hEVkwOv1Guj2ov4k6Vl4dbVu3vySnbiJ548pczmzn8bxjHMbjHYWBISQCTLPGgVm92wGn4V7vpXC/bZm+2Rx7bcsbgb7iOPsI41k5HBcsoF6bNo4oWk9dj6FthWXmUWSsc3jUlThG/eMOI29tax517nLvNdJpHZZadZOwfmCLtqRXkeo8txltOxXFYNIjGi6eg6GsOc6k0OoGFABQAUAcOWxdhk7SaxvoUuLa4TslikXuUqfeP6U6p7LFKP50KUcrB5u534G5HxvIDMcLaW6sYXEsdshJubdgSVCL/lUa7abivacX+Rxth7fI1fx9COZbxHF5JjxZ5g4VhrOWwz1vNj84zt/I5GcGVrmUnfvb/UBH5TWfn9C5F3rr1h4LzJ0WwS9RfMt508ZW9lIxyS33eCq2kMbFm1Gmja/Dof1VxqOicpSxtx4x/E0vl1owqaz5L5Cy01jw/G3Fjxgzh0gdytrEx+aQsdgT+Vdq9PW/2Szc/1PLwyZp4seYm9eMvEGE4ZbrOVS6zcmv7m97e0b6fCg9FFeU6t1mV88d3x9RqqqwaEFGu3pXPwXNDwugoDA4UDQetAxKBBQAUAIxGu9GMokhmx9elJSxoJ66FYzfjnhGckaXJ4e2uZW/5HZ2Sa/wB43rRTzLqnlTx4IpfGh3kXa+FfGcEpkGCglOuyyl5Br9zbVss69yLFtcvuX4Fa4tb+GXLH2NtZWy21pEtvbx7JCgAVQPQAVx7Xa3uct3gXxpjDRHUOlODUvmWLQcOlWMGOFAgoAKAEoENb5hSZOPYK3SmiuQymiVfYKPbSgmIfbWoyBBUQD22qSAPbemA4dKXeLvF91SK5doqdD99DJsWkI//Z"},"7faf":function(e,t,n){"use strict";var r=n("8fba"),o=n.n(r);o.a},"8fba":function(e,t,n){},a417:function(e,t,n){"use strict";var r=n("bc3a"),o=n.n(r),a="/",c=o.a.create({baseURL:a,timeout:6e4});c.interceptors.request.use(function(e){return e},function(e){console.log(e),Promise.reject(e)}),c.interceptors.response.use(function(e){var t=e;return t},function(e){return Promise.reject(e)});var i=c;function u(e,t){return i({url:e,method:"post",data:t})}function s(e,t){return i({url:e,method:"get",params:t})}n.d(t,"b",function(){return u}),n.d(t,"a",function(){return s})},c219:function(e,t,n){"use strict";var r=n("e9bb"),o=n.n(r);o.a},e9bb:function(e,t,n){},f867:function(e,t,n){}});