(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-485cc6e7"],{"0fee":function(t,e,a){},3647:function(t,e,a){"use strict";a("68ef"),a("09fe"),a("0fee")},5246:function(t,e,a){"use strict";a("68ef"),a("09fe"),a("8a0b")},"539c":function(t,e,a){},6750:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"no-result"},[a("div",{staticClass:"no-result-icon"}),a("p",{staticClass:"no-result-text"},[t._v(t._s(t.title))])])},n=[],r={props:{title:{type:String,default:""}}},i=r,c=(a("ee06"),a("2877")),l=Object(c["a"])(i,s,n,!1,null,"0c5dec0f",null);e["a"]=l.exports},"6b41":function(t,e,a){"use strict";var s=a("2638"),n=a.n(s),r=a("d282"),i=a("a142"),c=a("ba31"),l=a("b1d2"),o=a("ad06"),u=Object(r["a"])("nav-bar"),f=u[0],d=u[1];function b(t,e,a,s){var r;return t("div",n()([{class:[d({fixed:e.fixed}),(r={},r[l["a"]]=e.border,r)],style:{zIndex:e.zIndex}},Object(c["b"])(s)]),[t("div",{class:d("left"),on:{click:s.listeners["click-left"]||i["e"]}},[a.left?a.left():[e.leftArrow&&t(o["a"],{class:d("arrow"),attrs:{name:"arrow-left"}}),e.leftText&&t("span",{class:d("text")},[e.leftText])]]),t("div",{class:[d("title"),"van-ellipsis"]},[a.title?a.title():e.title]),t("div",{class:d("right"),on:{click:s.listeners["click-right"]||i["e"]}},[a.right?a.right():e.rightText&&t("span",{class:d("text")},[e.rightText])])])}b.props={title:String,fixed:Boolean,leftText:String,rightText:String,leftArrow:Boolean,border:{type:Boolean,default:!0},zIndex:{type:Number,default:1}},e["a"]=f(b)},"82a5":function(t,e,a){},"8a0b":function(t,e,a){},ac1e:function(t,e,a){"use strict";a("68ef")},b1e2:function(t,e,a){"use strict";var s=a("82a5"),n=a.n(s);n.a},c84b:function(t,e,a){"use strict";a.r(e);var s,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"detail-bar"},[a("van-nav-bar",{attrs:{title:"运单列表"}})],1),a("div",{staticClass:"mt50"},[t.lists.length?a("div",t._l(t.lists,function(e,s){return a("van-panel",{key:s,staticClass:"mb10",attrs:{title:"运单编号："+e.trackNum,desc:"",status:e.status}},[a("div",{staticClass:"p20"},[t._v(t._s(e.detail))])])}),1):a("kong",{attrs:{title:"空空如也~~"}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticStyle:{"text-align":"center",padding:"10px 0"}},[a("van-loading",{attrs:{size:"24px"}},[t._v("加载中...")])],1)])},r=[],i=a("bd86"),c=(a("ac1e"),a("543e")),l=(a("3647"),a("ea47")),o=(a("7f7f"),a("5246"),a("6b41")),u=a("6750"),f=(a("8e6e"),a("ac6a"),a("456d"),a("a417"));function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,s)}return a}function b(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(a,!0).forEach(function(e){Object(i["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function p(t){return Object(f["b"])("detail",b({},t))}var v={name:"detail",components:(s={},Object(i["a"])(s,o["a"].name,o["a"]),Object(i["a"])(s,l["a"].name,l["a"]),Object(i["a"])(s,c["a"].name,c["a"]),Object(i["a"])(s,"kong",u["a"]),s),data:function(){return{show:!1,expressNo:"",lists:[]}},created:function(){this._getLists()},methods:{_getLists:function(){var t=this,e=this.$route.query.expressno;e&&(this.show=!0,p({expressno:e}).then(function(e){t.show=!1;var a=e.data;a.code||(t.lists=a.data||[])}).catch(function(e){t.show=!1,t.$toast.fail("查询数据失败")}))},onClickLeft:function(){this.$router.back()}}},h=v,g=(a("b1e2"),a("2877")),O=Object(g["a"])(h,n,r,!1,null,null,null);e["default"]=O.exports},ea47:function(t,e,a){"use strict";var s=a("2638"),n=a.n(s),r=a("d282"),i=a("ba31"),c=a("b1d2"),l=a("7744"),o=a("34e9"),u=Object(r["a"])("panel"),f=u[0],d=u[1];function b(t,e,a,s){var r=function(){return[a.header?a.header():t(l["a"],{attrs:{icon:e.icon,label:e.desc,title:e.title,value:e.status,valueClass:d("header-value")},class:d("header")}),t("div",{class:d("content")},[a.default&&a.default()]),a.footer&&t("div",{class:[d("footer"),c["c"]]},[a.footer()])]};return t(o["a"],n()([{class:d(),scopedSlots:{default:r}},Object(i["b"])(s,!0)]))}b.props={icon:String,desc:String,title:String,status:String},e["a"]=f(b)},ee06:function(t,e,a){"use strict";var s=a("539c"),n=a.n(s);n.a}}]);