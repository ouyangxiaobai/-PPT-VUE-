(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"0d86":function(e,t,n){"use strict";(function(e){n("c131"),n("921b");r(n("66fd"));var t=r(n("e808"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"113a":function(e,t,n){"use strict";var r,a=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}))},"142c":function(e,t,n){"use strict";var r=n("9a90"),a=n.n(r);a.a},"9a90":function(e,t,n){},e808:function(e,t,n){"use strict";n.r(t);var r=n("113a"),a=n("feab");for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);n("142c");var o,i=n("f0c5"),c=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,"9acd26ee",null,!1,r["a"],o);t["default"]=c.exports},ea3e:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("4795"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,r,a,u,o){try{var i=e[u](o),c=i.value}catch(s){return void n(s)}i.done?t(c):Promise.resolve(c).then(r,a)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){u(o,r,a,i,c,"next",e)}function c(e){u(o,r,a,i,c,"throw",e)}i(void 0)}))}}var i={data:function(){return{ruleForm:{},tableName:""}},onLoad:function(){var t=e.getStorageSync("loginTable");this.tableName=t,this.styleChange()},methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=this;return o(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.ruleForm.yonghuzhanghao||"yonghu"!=e.tableName){t.next=3;break}return e.$utils.msg("用户账号不能为空"),t.abrupt("return");case 3:if(e.ruleForm.mima||"yonghu"!=e.tableName){t.next=6;break}return e.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if("yonghu"!=e.tableName||!e.ruleForm.shoujihao||e.$validate.isMobile(e.ruleForm.shoujihao)){t.next=9;break}return e.$utils.msg("手机号应输入手机格式"),t.abrupt("return");case 9:return t.next=11,e.$api.register("".concat(e.tableName),e.ruleForm);case 11:e.$utils.msgBack("注册成功");case 13:case"end":return t.stop()}}),t)})))()}}};t.default=i}).call(this,n("543d")["default"])},feab:function(e,t,n){"use strict";n.r(t);var r=n("ea3e"),a=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=a.a}},[["0d86","common/runtime","common/vendor"]]]);