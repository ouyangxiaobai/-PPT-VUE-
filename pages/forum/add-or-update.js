(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forum/add-or-update"],{3379:function(e,t,n){"use strict";var r,u=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}))},"480d":function(e,t,n){"use strict";n.r(t);var r=n("9da9"),u=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=u.a},"4b43":function(e,t,n){},"912e":function(e,t,n){"use strict";n.r(t);var r=n("3379"),u=n("480d");for(var a in u)"default"!==a&&function(e){n.d(t,e,(function(){return u[e]}))}(a);n("f918");var i,o=n("f0c5"),c=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,"4f64710c",null,!1,r["a"],i);t["default"]=c.exports},"9da9":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("4795"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,r,u,a,i){try{var o=e[a](i),c=o.value}catch(s){return void n(s)}o.done?t(c):Promise.resolve(c).then(r,u)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,u){var i=e.apply(t,n);function o(e){a(i,r,u,o,c,"next",e)}function c(e){a(i,r,u,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("7a4f"))}.bind(null,n)).catch(n.oe)},c={data:function(){return{ruleForm:{title:"",content:"",parentid:"",userid:"",username:"",isdone:""},isdoneOptions:[],isdoneIndex:0,user:{}}},components:{wPicker:o},computed:{},onLoad:function(t){var n=this;return i(r.default.mark((function u(){var a,i,o,c;return r.default.wrap((function(u){while(1)switch(u.prev=u.next){case 0:return a=e.getStorageSync("nowTable"),u.next=3,n.$api.session(a);case 3:if(i=u.sent,n.user=i.data,n.isdoneOptions="开放,关闭".split(","),n.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(n.ruleForm.refid=t.refid),!t.id){u.next=14;break}return n.ruleForm.id=t.id,u.next=12,n.$api.info("forum",n.ruleForm.id);case 12:i=u.sent,n.ruleForm=i.data;case 14:if(!t.cross){u.next=39;break}o=e.getStorageSync("crossObj"),u.t0=r.default.keys(o);case 17:if((u.t1=u.t0()).done){u.next=39;break}if(c=u.t1.value,"title"!=c){u.next=22;break}return n.ruleForm.title=o[c],u.abrupt("continue",17);case 22:if("content"!=c){u.next=25;break}return n.ruleForm.content=o[c],u.abrupt("continue",17);case 25:if("parentid"!=c){u.next=28;break}return n.ruleForm.parentid=o[c],u.abrupt("continue",17);case 28:if("userid"!=c){u.next=31;break}return n.ruleForm.userid=o[c],u.abrupt("continue",17);case 31:if("username"!=c){u.next=34;break}return n.ruleForm.username=o[c],u.abrupt("continue",17);case 34:if("isdone"!=c){u.next=37;break}return n.ruleForm.isdone=o[c],u.abrupt("continue",17);case 37:u.next=17;break;case 39:n.styleChange();case 40:case"end":return u.stop()}}),u)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},isdoneChange:function(e){this.isdoneIndex=e.target.value,this.ruleForm.isdone=this.isdoneOptions[this.isdoneIndex]},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return i(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.ruleForm.content){t.next=3;break}return e.$utils.msg("帖子内容不能为空"),t.abrupt("return");case 3:if(e.ruleForm.userid){t.next=6;break}return e.$utils.msg("用户id不能为空"),t.abrupt("return");case 6:if(!e.ruleForm.id){t.next=11;break}return t.next=9,e.$api.update("forum",e.ruleForm);case 9:t.next=13;break;case 11:return t.next=13,e.$api.add("forum",e.ruleForm);case 13:e.$utils.msgBack("提交成功");case 14:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),r=t.getMonth()+1,u=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),r=r>9?r:"0"+r,u=u>9?u:"0"+u,"".concat(n,"-").concat(r,"-").concat(u)},toggleTab:function(e){this.$refs[e].show()}}};t.default=c}).call(this,n("543d")["default"])},c5d7:function(e,t,n){"use strict";(function(e){n("c131"),n("921b");r(n("66fd"));var t=r(n("912e"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},f918:function(e,t,n){"use strict";var r=n("4b43"),u=n.n(r);u.a}},[["c5d7","common/runtime","common/vendor"]]]);