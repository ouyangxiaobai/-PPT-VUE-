(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/tiwenshangbao/add-or-update"], {
    "18ab": function (e, n, t) {
      "use strict";
      t.r(n);
      var r = t("f232"),
        a = t("5782");
      for (var u in a) "default" !== u && function (e) {
        t.d(n, e, (function () {
          return a[e]
        }))
      }(u);
      t("481f");
      var i, o = t("f0c5"),
        c = Object(o["a"])(a["default"], r["b"], r["c"], !1, null, "51467b57", null, !1, r["a"], i);
      n["default"] = c.exports
    },
    "481f": function (e, n, t) {
      "use strict";
      var r = t("b5d6"),
        a = t.n(r);
      a.a
    },
    5782: function (e, n, t) {
      "use strict";
      t.r(n);
      var r = t("5c33"),
        a = t.n(r);
      for (var u in r) "default" !== u && function (e) {
        t.d(n, e, (function () {
          return r[e]
        }))
      }(u);
      n["default"] = a.a
    },
    "5c33": function (e, n, t) {
      "use strict";
      (function (e) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var r = a(t("4795"));

        function a(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }

        function u(e, n, t, r, a, u, i) {
          try {
            var o = e[u](i),
              c = o.value
          } catch (s) {
            return void t(s)
          }
          o.done ? n(c) : Promise.resolve(c).then(r, a)
        }

        function i(e) {
          return function () {
            var n = this,
              t = arguments;
            return new Promise((function (r, a) {
              var i = e.apply(n, t);

              function o(e) {
                u(i, r, a, o, c, "next", e)
              }

              function c(e) {
                u(i, r, a, o, c, "throw", e)
              }
              o(void 0)
            }))
          }
        }
        var o = function () {
            Promise.all([t.e("common/vendor"), t.e("components/w-picker/w-picker")]).then(function () {
              return resolve(t("7a4f"))
            }.bind(null, t)).catch(t.oe)
          },
          c = {
            data: function () {
              return {
                ruleForm: {
                  bianhao: this.getUUID(),
                  tiwen: "",
                  celiangshijian: "",
                  yonghuzhanghao: "",
                  yonghuxingming: "",
                  userid: ""
                },
                user: {}
              }
            },
            components: {
              wPicker: o
            },
            computed: {},
            onLoad: function (n) {
              var t = this;
              return i(r.default.mark((function a() {
                var u, i, o, c;
                return r.default.wrap((function (a) {
                  while (1) switch (a.prev = a.next) {
                    case 0:
                      return u = e.getStorageSync("nowTable"), a.next = 3, t.$api.session(u);
                    case 3:
                      if (i = a.sent, t.user = i.data, t.ruleForm.yonghuzhanghao = t.user.yonghuzhanghao, t.ruleForm.yonghuxingming = t.user.yonghuxingming, t.ruleForm.userid = e.getStorageSync("userid"), n.refid && (t.ruleForm.refid = n.refid), !n.id) {
                        a.next = 15;
                        break
                      }
                      return t.ruleForm.id = n.id, a.next = 13, t.$api.info("tiwenshangbao", t.ruleForm.id);
                    case 13:
                      i = a.sent, t.ruleForm = i.data;
                    case 15:
                      if (!n.cross) {
                        a.next = 40;
                        break
                      }
                      o = e.getStorageSync("crossObj"), a.t0 = r.default.keys(o);
                    case 18:
                      if ((a.t1 = a.t0()).done) {
                        a.next = 40;
                        break
                      }
                      if (c = a.t1.value, "bianhao" != c) {
                        a.next = 23;
                        break
                      }
                      return t.ruleForm.bianhao = o[c], a.abrupt("continue", 18);
                    case 23:
                      if ("tiwen" != c) {
                        a.next = 26;
                        break
                      }
                      return t.ruleForm.tiwen = o[c], a.abrupt("continue", 18);
                    case 26:
                      if ("celiangshijian" != c) {
                        a.next = 29;
                        break
                      }
                      return t.ruleForm.celiangshijian = o[c], a.abrupt("continue", 18);
                    case 29:
                      if ("yonghuzhanghao" != c) {
                        a.next = 32;
                        break
                      }
                      return t.ruleForm.yonghuzhanghao = o[c], a.abrupt("continue", 18);
                    case 32:
                      if ("yonghuxingming" != c) {
                        a.next = 35;
                        break
                      }
                      return t.ruleForm.yonghuxingming = o[c], a.abrupt("continue", 18);
                    case 35:
                      if ("userid" != c) {
                        a.next = 38;
                        break
                      }
                      return t.ruleForm.userid = o[c], a.abrupt("continue", 18);
                    case 38:
                      a.next = 18;
                      break;
                    case 40:
                      t.styleChange();
                    case 41:
                    case "end":
                      return a.stop()
                  }
                }), a)
              })))()
            },
            methods: {
              styleChange: function () {
                this.$nextTick((function () {}))
              },
              celiangshijianConfirm: function (e) {
                console.log(e), this.ruleForm.celiangshijian = e.result, this.$forceUpdate()
              },
              getUUID: function () {
                return (new Date).getTime()
              },
              onSubmitTap: function () {
                var e = this;
                return i(r.default.mark((function n() {
                  return r.default.wrap((function (n) {
                    while (1) switch (n.prev = n.next) {
                      case 0:
                        if (e.ruleForm.userid) {
                          n.next = 3;
                          break
                        }
                        return e.$utils.msg("用户id不能为空"), n.abrupt("return");
                      case 3:
                        if (!e.ruleForm.id) {
                          n.next = 8;
                          break
                        }
                        return n.next = 6, e.$api.update("tiwenshangbao", e.ruleForm);
                      case 6:
                        n.next = 10;
                        break;
                      case 8:
                        return n.next = 10, e.$api.add("tiwenshangbao", e.ruleForm);
                      case 10:
                        e.$utils.msgBack("提交成功");
                      case 11:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              optionsChange: function (e) {
                this.index = e.target.value
              },
              bindDateChange: function (e) {
                this.date = e.target.value
              },
              getDate: function (e) {
                var n = new Date,
                  t = n.getFullYear(),
                  r = n.getMonth() + 1,
                  a = n.getDate();
                return "start" === e ? t -= 60 : "end" === e && (t += 2), r = r > 9 ? r : "0" + r, a = a > 9 ? a : "0" + a, "".concat(t, "-").concat(r, "-").concat(a)
              },
              toggleTab: function (e) {
                this.$refs[e].show()
              }
            }
          };
        n.default = c
      }).call(this, t("543d")["default"])
    },
    b5d6: function (e, n, t) {},
    f232: function (e, n, t) {
      "use strict";
      var r = {
          "w-picker": function () {
            return Promise.all([t.e("common/vendor"), t.e("components/w-picker/w-picker")]).then(t.bind(null, "7a4f"))
          }
        },
        a = function () {
          var e = this,
            n = e.$createElement;
          e._self._c
        },
        u = [];
      t.d(n, "b", (function () {
        return a
      })), t.d(n, "c", (function () {
        return u
      })), t.d(n, "a", (function () {
        return r
      }))
    },
    fa2e: function (e, n, t) {
      "use strict";
      (function (e) {
        t("c131"), t("921b");
        r(t("66fd"));
        var n = r(t("18ab"));

        function r(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        e(n.default)
      }).call(this, t("543d")["createPage"])
    }
  },
  [
    ["fa2e", "common/runtime", "common/vendor"]
  ]
]);