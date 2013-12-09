! function (t, e) {
    function i(t) {
        var e = t.length,
            i = le.type(t);
        return le.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || "function" !== i && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function n(t) {
        var e = ke[t] = {};
        return le.each(t.match(ce) || [], function (t, i) {
            e[i] = !0
        }), e
    }

    function s(t, i, n, s) {
        if (le.acceptData(t)) {
            var r, o, a = le.expando,
                l = "string" == typeof i,
                u = t.nodeType,
                c = u ? le.cache : t,
                h = u ? t[a] : t[a] && a;
            if (h && c[h] && (s || c[h].data) || !l || n !== e) return h || (u ? t[a] = h = Z.pop() || le.guid++ : h = a), c[h] || (c[h] = {}, u || (c[h].toJSON = le.noop)), ("object" == typeof i || "function" == typeof i) && (s ? c[h] = le.extend(c[h], i) : c[h].data = le.extend(c[h].data, i)), r = c[h], s || (r.data || (r.data = {}), r = r.data), n !== e && (r[le.camelCase(i)] = n), l ? (o = r[i], null == o && (o = r[le.camelCase(i)])) : o = r, o
        }
    }

    function r(t, e, i) {
        if (le.acceptData(t)) {
            var n, s, r, o = t.nodeType,
                l = o ? le.cache : t,
                u = o ? t[le.expando] : le.expando;
            if (l[u]) {
                if (e && (r = i ? l[u] : l[u].data)) {
                    le.isArray(e) ? e = e.concat(le.map(e, le.camelCase)) : e in r ? e = [e] : (e = le.camelCase(e), e = e in r ? [e] : e.split(" "));
                    for (n = 0, s = e.length; s > n; n++) delete r[e[n]];
                    if (!(i ? a : le.isEmptyObject)(r)) return
                }(i || (delete l[u].data, a(l[u]))) && (o ? le.cleanData([t], !0) : le.support.deleteExpando || l != l.window ? delete l[u] : l[u] = null)
            }
        }
    }

    function o(t, i, n) {
        if (n === e && 1 === t.nodeType) {
            var s = "data-" + i.replace(Te, "-$1").toLowerCase();
            if (n = t.getAttribute(s), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ce.test(n) ? le.parseJSON(n) : n
                } catch (r) {}
                le.data(t, i, n)
            } else n = e
        }
        return n
    }

    function a(t) {
        var e;
        for (e in t)
            if (("data" !== e || !le.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function l() {
        return !0
    }

    function u() {
        return !1
    }

    function c(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function h(t, e, i) {
        if (e = e || 0, le.isFunction(e)) return le.grep(t, function (t, n) {
            var s = !! e.call(t, n, t);
            return s === i
        });
        if (e.nodeType) return le.grep(t, function (t) {
            return t === e === i
        });
        if ("string" == typeof e) {
            var n = le.grep(t, function (t) {
                return 1 === t.nodeType
            });
            if (Re.test(e)) return le.filter(e, n, !i);
            e = le.filter(e, n)
        }
        return le.grep(t, function (t) {
            return le.inArray(t, e) >= 0 === i
        })
    }

    function d(t) {
        var e = Ue.split("|"),
            i = t.createDocumentFragment();
        if (i.createElement)
            for (; e.length;) i.createElement(e.pop());
        return i
    }

    function p(t, e) {
        return t.getElementsByTagName(e)[0] || t.appendChild(t.ownerDocument.createElement(e))
    }

    function f(t) {
        var e = t.getAttributeNode("type");
        return t.type = (e && e.specified) + "/" + t.type, t
    }

    function m(t) {
        var e = si.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function g(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++) le._data(i, "globalEval", !e || le._data(e[n], "globalEval"))
    }

    function v(t, e) {
        if (1 === e.nodeType && le.hasData(t)) {
            var i, n, s, r = le._data(t),
                o = le._data(e, r),
                a = r.events;
            if (a) {
                delete o.handle, o.events = {};
                for (i in a)
                    for (n = 0, s = a[i].length; s > n; n++) le.event.add(e, i, a[i][n])
            }
            o.data && (o.data = le.extend({}, o.data))
        }
    }

    function y(t, e) {
        var i, n, s;
        if (1 === e.nodeType) {
            if (i = e.nodeName.toLowerCase(), !le.support.noCloneEvent && e[le.expando]) {
                s = le._data(e);
                for (n in s.events) le.removeEvent(e, n, s.handle);
                e.removeAttribute(le.expando)
            }
            "script" === i && e.text !== t.text ? (f(e).text = t.text, m(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), le.support.html5Clone && t.innerHTML && !le.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && ei.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
        }
    }

    function _(t, i) {
        var n, s, r = 0,
            o = typeof t.getElementsByTagName !== K ? t.getElementsByTagName(i || "*") : typeof t.querySelectorAll !== K ? t.querySelectorAll(i || "*") : e;
        if (!o)
            for (o = [], n = t.childNodes || t; null != (s = n[r]); r++)!i || le.nodeName(s, i) ? o.push(s) : le.merge(o, _(s, i));
        return i === e || i && le.nodeName(t, i) ? le.merge([t], o) : o
    }

    function b(t) {
        ei.test(t.type) && (t.defaultChecked = t.checked)
    }

    function w(t, e) {
        if (e in t) return e;
        for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, s = Ci.length; s--;)
            if (e = Ci[s] + i, e in t) return e;
        return n
    }

    function x(t, e) {
        return t = e || t, "none" === le.css(t, "display") || !le.contains(t.ownerDocument, t)
    }

    function k(t, e) {
        for (var i, n, s, r = [], o = 0, a = t.length; a > o; o++) n = t[o], n.style && (r[o] = le._data(n, "olddisplay"), i = n.style.display, e ? (r[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && x(n) && (r[o] = le._data(n, "olddisplay", E(n.nodeName)))) : r[o] || (s = x(n), (i && "none" !== i || !s) && le._data(n, "olddisplay", s ? i : le.css(n, "display"))));
        for (o = 0; a > o; o++) n = t[o], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[o] || "" : "none"));
        return t
    }

    function C(t, e, i) {
        var n = vi.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }

    function T(t, e, i, n, s) {
        for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > r; r += 2) "margin" === i && (o += le.css(t, i + ki[r], !0, s)), n ? ("content" === i && (o -= le.css(t, "padding" + ki[r], !0, s)), "margin" !== i && (o -= le.css(t, "border" + ki[r] + "Width", !0, s))) : (o += le.css(t, "padding" + ki[r], !0, s), "padding" !== i && (o += le.css(t, "border" + ki[r] + "Width", !0, s)));
        return o
    }

    function S(t, e, i) {
        var n = !0,
            s = "width" === e ? t.offsetWidth : t.offsetHeight,
            r = ci(t),
            o = le.support.boxSizing && "border-box" === le.css(t, "boxSizing", !1, r);
        if (0 >= s || null == s) {
            if (s = hi(t, e, r), (0 > s || null == s) && (s = t.style[e]), yi.test(s)) return s;
            n = o && (le.support.boxSizingReliable || s === t.style[e]), s = parseFloat(s) || 0
        }
        return s + T(t, e, i || (o ? "border" : "content"), n, r) + "px"
    }

    function E(t) {
        var e = Y,
            i = bi[t];
        return i || (i = P(t, e), "none" !== i && i || (ui = (ui || le("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), e = (ui[0].contentWindow || ui[0].contentDocument).document, e.write("<!doctype html><html><body>"), e.close(), i = P(t, e), ui.detach()), bi[t] = i), i
    }

    function P(t, e) {
        var i = le(e.createElement(t)).appendTo(e.body),
            n = le.css(i[0], "display");
        return i.remove(), n
    }

    function D(t, e, i, n) {
        var s;
        if (le.isArray(e)) le.each(e, function (e, s) {
            i || Si.test(t) ? n(t, s) : D(t + "[" + ("object" == typeof s ? e : "") + "]", s, i, n)
        });
        else if (i || "object" !== le.type(e)) n(t, e);
        else
            for (s in e) D(t + "[" + s + "]", e[s], i, n)
    }

    function I(t) {
        return function (e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s = 0,
                r = e.toLowerCase().match(ce) || [];
            if (le.isFunction(i))
                for (; n = r[s++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function M(t, e, i, n) {
        function s(a) {
            var l;
            return r[a] = !0, le.each(t[a] || [], function (t, a) {
                var u = a(e, i, n);
                return "string" != typeof u || o || r[u] ? o ? !(l = u) : void 0 : (e.dataTypes.unshift(u), s(u), !1)
            }), l
        }
        var r = {}, o = t === Ri;
        return s(e.dataTypes[0]) || !r["*"] && s("*")
    }

    function A(t, i) {
        var n, s, r = le.ajaxSettings.flatOptions || {};
        for (s in i) i[s] !== e && ((r[s] ? t : n || (n = {}))[s] = i[s]);
        return n && le.extend(!0, t, n), t
    }

    function N(t, i, n) {
        var s, r, o, a, l = t.contents,
            u = t.dataTypes,
            c = t.responseFields;
        for (a in c) a in n && (i[c[a]] = n[a]);
        for (;
            "*" === u[0];) u.shift(), r === e && (r = t.mimeType || i.getResponseHeader("Content-Type"));
        if (r)
            for (a in l)
                if (l[a] && l[a].test(r)) {
                    u.unshift(a);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (a in n) {
                if (!u[0] || t.converters[a + " " + u[0]]) {
                    o = a;
                    break
                }
                s || (s = a)
            }
            o = o || s
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }

    function V(t, e) {
        var i, n, s, r, o = {}, a = 0,
            l = t.dataTypes.slice(),
            u = l[0];
        if (t.dataFilter && (e = t.dataFilter(e, t.dataType)), l[1])
            for (s in t.converters) o[s.toLowerCase()] = t.converters[s];
        for (; n = l[++a];)
            if ("*" !== n) {
                if ("*" !== u && u !== n) {
                    if (s = o[u + " " + n] || o["* " + n], !s)
                        for (i in o)
                            if (r = i.split(" "), r[1] === n && (s = o[u + " " + r[0]] || o["* " + r[0]])) {
                                s === !0 ? s = o[i] : o[i] !== !0 && (n = r[0], l.splice(a--, 0, n));
                                break
                            }
                    if (s !== !0)
                        if (s && t["throws"]) e = s(e);
                        else try {
                            e = s(e)
                        } catch (c) {
                            return {
                                state: "parsererror",
                                error: s ? c : "No conversion from " + u + " to " + n
                            }
                        }
                }
                u = n
            }
        return {
            state: "success",
            data: e
        }
    }

    function $() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }

    function j() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function F() {
        return setTimeout(function () {
            Ji = e
        }), Ji = le.now()
    }

    function O(t, e) {
        le.each(e, function (e, i) {
            for (var n = (rn[e] || []).concat(rn["*"]), s = 0, r = n.length; r > s; s++)
                if (n[s].call(t, e, i)) return
        })
    }

    function H(t, e, i) {
        var n, s, r = 0,
            o = sn.length,
            a = le.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (s) return !1;
                for (var e = Ji || F(), i = Math.max(0, u.startTime + u.duration - e), n = i / u.duration || 0, r = 1 - n, o = 0, l = u.tweens.length; l > o; o++) u.tweens[o].run(r);
                return a.notifyWith(t, [u, r, i]), 1 > r && l ? i : (a.resolveWith(t, [u]), !1)
            }, u = a.promise({
                elem: t,
                props: le.extend({}, e),
                opts: le.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: Ji || F(),
                duration: i.duration,
                tweens: [],
                createTween: function (e, i) {
                    var n = le.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function (e) {
                    var i = 0,
                        n = e ? u.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; n > i; i++) u.tweens[i].run(1);
                    return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
                }
            }),
            c = u.props;
        for (L(c, u.opts.specialEasing); o > r; r++)
            if (n = sn[r].call(u, t, c, u.opts)) return n;
        return O(u, c), le.isFunction(u.opts.start) && u.opts.start.call(t, u), le.fx.timer(le.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function L(t, e) {
        var i, n, s, r, o;
        for (s in t)
            if (n = le.camelCase(s), r = e[n], i = t[s], le.isArray(i) && (r = i[1], i = t[s] = i[0]), s !== n && (t[n] = i, delete t[s]), o = le.cssHooks[n], o && "expand" in o) {
                i = o.expand(i), delete t[n];
                for (s in i) s in t || (t[s] = i[s], e[s] = r)
            } else e[n] = r
    }

    function B(t, e, i) {
        var n, s, r, o, a, l, u, c, h, d = this,
            p = t.style,
            f = {}, m = [],
            g = t.nodeType && x(t);
        i.queue || (c = le._queueHooks(t, "fx"), null == c.unqueued && (c.unqueued = 0, h = c.empty.fire, c.empty.fire = function () {
            c.unqueued || h()
        }), c.unqueued++, d.always(function () {
            d.always(function () {
                c.unqueued--, le.queue(t, "fx").length || c.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === le.css(t, "display") && "none" === le.css(t, "float") && (le.support.inlineBlockNeedsLayout && "inline" !== E(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", le.support.shrinkWrapBlocks || d.always(function () {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (s in e)
            if (o = e[s], tn.exec(o)) {
                if (delete e[s], l = l || "toggle" === o, o === (g ? "hide" : "show")) continue;
                m.push(s)
            }
        if (r = m.length) {
            a = le._data(t, "fxshow") || le._data(t, "fxshow", {}), "hidden" in a && (g = a.hidden), l && (a.hidden = !g), g ? le(t).show() : d.done(function () {
                le(t).hide()
            }), d.done(function () {
                var e;
                le._removeData(t, "fxshow");
                for (e in f) le.style(t, e, f[e])
            });
            for (s = 0; r > s; s++) n = m[s], u = d.createTween(n, g ? a[n] : 0), f[n] = a[n] || le.style(t, n), n in a || (a[n] = u.start, g && (u.end = u.start, u.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function z(t, e, i, n, s) {
        return new z.prototype.init(t, e, i, n, s)
    }

    function R(t, e) {
        var i, n = {
            height: t
        }, s = 0;
        for (e = e ? 1 : 0; 4 > s; s += 2 - e) i = ki[s], n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n
    }

    function W(t) {
        return le.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    console.log("start q");
    var q, U, K = typeof e,
        Y = t.document,
        X = t.location,
        G = t.jQuery,
        Q = t.$,
        J = {}, Z = [],
        te = "1.9.1",
        ee = Z.concat,
        ie = Z.push,
        ne = Z.slice,
        se = Z.indexOf,
        re = J.toString,
        oe = J.hasOwnProperty,
        ae = te.trim,
        le = function (t, e) {
            return new le.fn.init(t, e, U)
        }, ue = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ce = /\S+/g,
        he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        de = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        pe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        fe = /^[\],:{}\s]*$/,
        me = /(?:^|:|,)(?:\s*\[)+/g,
        ge = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        ve = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        ye = /^-ms-/,
        _e = /-([\da-z])/gi,
        be = function (t, e) {
            return e.toUpperCase()
        }, we = function (t) {
            (Y.addEventListener || "load" === t.type || "complete" === Y.readyState) && (xe(), le.ready())
        }, xe = function () {
            Y.addEventListener ? (Y.removeEventListener("DOMContentLoaded", we, !1), t.removeEventListener("load", we, !1)) : (Y.detachEvent("onreadystatechange", we), t.detachEvent("onload", we))
        };
    le.fn = le.prototype = {
        jquery: te,
        constructor: le,
        init: function (t, i, n) {
            var s, r;
            if (!t) return this;
            if ("string" == typeof t) {
                if (s = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : de.exec(t), !s || !s[1] && i) return !i || i.jquery ? (i || n).find(t) : this.constructor(i).find(t);
                if (s[1]) {
                    if (i = i instanceof le ? i[0] : i, le.merge(this, le.parseHTML(s[1], i && i.nodeType ? i.ownerDocument || i : Y, !0)), pe.test(s[1]) && le.isPlainObject(i))
                        for (s in i) le.isFunction(this[s]) ? this[s](i[s]) : this.attr(s, i[s]);
                    return this
                }
                if (r = Y.getElementById(s[2]), r && r.parentNode) {
                    if (r.id !== s[2]) return n.find(t);
                    this.length = 1, this[0] = r
                }
                return this.context = Y, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : le.isFunction(t) ? n.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), le.makeArray(t, this))
        },
        selector: "",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return ne.call(this)
        },
        get: function (t) {
            return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
        },
        pushStack: function (t) {
            var e = le.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function (t, e) {
            return le.each(this, t, e)
        },
        ready: function (t) {
            return le.ready.promise().done(t), this
        },
        slice: function () {
            return this.pushStack(ne.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (t) {
            var e = this.length,
                i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        },
        map: function (t) {
            return this.pushStack(le.map(this, function (e, i) {
                return t.call(e, i, e)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: ie,
        sort: [].sort,
        splice: [].splice
    }, le.fn.init.prototype = le.fn, le.extend = le.fn.extend = function () {
        var t, i, n, s, r, o, a = arguments[0] || {}, l = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, l = 2), "object" == typeof a || le.isFunction(a) || (a = {}), u === l && (a = this, --l); u > l; l++)
            if (null != (r = arguments[l]))
                for (s in r) t = a[s], n = r[s], a !== n && (c && n && (le.isPlainObject(n) || (i = le.isArray(n))) ? (i ? (i = !1, o = t && le.isArray(t) ? t : []) : o = t && le.isPlainObject(t) ? t : {}, a[s] = le.extend(c, o, n)) : n !== e && (a[s] = n));
        return a
    }, le.extend({
        noConflict: function (e) {
            return t.$ === le && (t.$ = Q), e && t.jQuery === le && (t.jQuery = G), le
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (t) {
            t ? le.readyWait++ : le.ready(!0)
        },
        ready: function (t) {
            if (t === !0 ? !--le.readyWait : !le.isReady) {
                if (!Y.body) return setTimeout(le.ready);
                le.isReady = !0, t !== !0 && --le.readyWait > 0 || (q.resolveWith(Y, [le]), le.fn.trigger && le(Y).trigger("ready").off("ready"))
            }
        },
        isFunction: function (t) {
            return "function" === le.type(t)
        },
        isArray: Array.isArray || function (t) {
            return "array" === le.type(t)
        },
        isWindow: function (t) {
            return null != t && t == t.window
        },
        isNumeric: function (t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        },
        type: function (t) {
            return null == t ? String(t) : "object" == typeof t || "function" == typeof t ? J[re.call(t)] || "object" : typeof t
        },
        isPlainObject: function (t) {
            if (!t || "object" !== le.type(t) || t.nodeType || le.isWindow(t)) return !1;
            try {
                if (t.constructor && !oe.call(t, "constructor") && !oe.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (i) {
                return !1
            }
            var n;
            for (n in t);
            return n === e || oe.call(t, n)
        },
        isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        error: function (t) {
            throw new Error(t)
        },
        parseHTML: function (t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || Y;
            var n = pe.exec(t),
                s = !i && [];
            return n ? [e.createElement(n[1])] : (n = le.buildFragment([t], e, s), s && le(s).remove(), le.merge([], n.childNodes))
        },
        parseJSON: function (e) {
            return t.JSON && t.JSON.parse ? t.JSON.parse(e) : null === e ? e : "string" == typeof e && (e = le.trim(e), e && fe.test(e.replace(ge, "@").replace(ve, "]").replace(me, ""))) ? new Function("return " + e)() : (le.error("Invalid JSON: " + e), void 0)
        },
        parseXML: function (i) {
            var n, s;
            if (!i || "string" != typeof i) return null;
            try {
                t.DOMParser ? (s = new DOMParser, n = s.parseFromString(i, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(i))
            } catch (r) {
                n = e
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || le.error("Invalid XML: " + i), n
        },
        noop: function () {},
        globalEval: function (e) {
            e && le.trim(e) && (t.execScript || function (e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function (t) {
            return t.replace(ye, "ms-").replace(_e, be)
        },
        nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function (t, e, n) {
            var s, r = 0,
                o = t.length,
                a = i(t);
            if (n) {
                if (a)
                    for (; o > r && (s = e.apply(t[r], n), s !== !1); r++);
                else
                    for (r in t)
                        if (s = e.apply(t[r], n), s === !1) break
            } else if (a)
                for (; o > r && (s = e.call(t[r], r, t[r]), s !== !1); r++);
            else
                for (r in t)
                    if (s = e.call(t[r], r, t[r]), s === !1) break; return t
        },
        trim: ae && !ae.call("癤온�") ? function (t) {
            return null == t ? "" : ae.call(t)
        } : function (t) {
            return null == t ? "" : (t + "").replace(he, "")
        },
        makeArray: function (t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? le.merge(n, "string" == typeof t ? [t] : t) : ie.call(n, t)), n
        },
        inArray: function (t, e, i) {
            var n;
            if (e) {
                if (se) return se.call(e, t, i);
                for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                    if (i in e && e[i] === t) return i
            }
            return -1
        },
        merge: function (t, i) {
            var n = i.length,
                s = t.length,
                r = 0;
            if ("number" == typeof n)
                for (; n > r; r++) t[s++] = i[r];
            else
                for (; i[r] !== e;) t[s++] = i[r++];
            return t.length = s, t
        },
        grep: function (t, e, i) {
            var n, s = [],
                r = 0,
                o = t.length;
            for (i = !! i; o > r; r++) n = !! e(t[r], r), i !== n && s.push(t[r]);
            return s
        },
        map: function (t, e, n) {
            var s, r = 0,
                o = t.length,
                a = i(t),
                l = [];
            if (a)
                for (; o > r; r++) s = e(t[r], r, n), null != s && (l[l.length] = s);
            else
                for (r in t) s = e(t[r], r, n), null != s && (l[l.length] = s);
            return ee.apply([], l)
        },
        guid: 1,
        proxy: function (t, i) {
            var n, s, r;
            return "string" == typeof i && (r = t[i], i = t, t = r), le.isFunction(t) ? (n = ne.call(arguments, 2), s = function () {
                return t.apply(i || this, n.concat(ne.call(arguments)))
            }, s.guid = t.guid = t.guid || le.guid++, s) : e
        },
        access: function (t, i, n, s, r, o, a) {
            var l = 0,
                u = t.length,
                c = null == n;
            if ("object" === le.type(n)) {
                r = !0;
                for (l in n) le.access(t, i, l, n[l], !0, o, a)
            } else if (s !== e && (r = !0, le.isFunction(s) || (a = !0), c && (a ? (i.call(t, s), i = null) : (c = i, i = function (t, e, i) {
                return c.call(le(t), i)
            })), i))
                for (; u > l; l++) i(t[l], n, a ? s : s.call(t[l], l, i(t[l], n)));
            return r ? t : c ? i.call(t) : u ? i(t[0], n) : o
        },
        now: function () {
            return (new Date).getTime()
        }
    }), le.ready.promise = function (e) {
        if (!q)
            if (q = le.Deferred(), "complete" === Y.readyState) setTimeout(le.ready);
            else if (Y.addEventListener) Y.addEventListener("DOMContentLoaded", we, !1), t.addEventListener("load", we, !1);
            else {
                Y.attachEvent("onreadystatechange", we), t.attachEvent("onload", we);
                var i = !1;
                try {
                    i = null == t.frameElement && Y.documentElement
                } catch (n) {}
                i && i.doScroll && ! function s() {
                    if (!le.isReady) {
                        try {
                            i.doScroll("left")
                        } catch (t) {
                            return setTimeout(s, 50)
                        }
                        xe(), le.ready()
                    }
                }()
            }
        return q.promise(e)
    }, le.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
        J["[object " + e + "]"] = e.toLowerCase()
    }), U = le(Y);
    var ke = {};
    le.Callbacks = function (t) {
        t = "string" == typeof t ? ke[t] || n(t) : le.extend({}, t);
        var i, s, r, o, a, l, u = [],
            c = !t.once && [],
            h = function (e) {
                for (s = t.memory && e, r = !0, a = l || 0, l = 0, o = u.length, i = !0; u && o > a; a++)
                    if (u[a].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
                        s = !1;
                        break
                    }
                i = !1, u && (c ? c.length && h(c.shift()) : s ? u = [] : d.disable())
            }, d = {
                add: function () {
                    if (u) {
                        var e = u.length;
                        ! function n(e) {
                            le.each(e, function (e, i) {
                                var s = le.type(i);
                                "function" === s ? t.unique && d.has(i) || u.push(i) : i && i.length && "string" !== s && n(i)
                            })
                        }(arguments), i ? o = u.length : s && (l = e, h(s))
                    }
                    return this
                },
                remove: function () {
                    return u && le.each(arguments, function (t, e) {
                        for (var n;
                             (n = le.inArray(e, u, n)) > -1;) u.splice(n, 1), i && (o >= n && o--, a >= n && a--)
                    }), this
                },
                has: function (t) {
                    return t ? le.inArray(t, u) > -1 : !(!u || !u.length)
                },
                empty: function () {
                    return u = [], this
                },
                disable: function () {
                    return u = c = s = e, this
                },
                disabled: function () {
                    return !u
                },
                lock: function () {
                    return c = e, s || d.disable(), this
                },
                locked: function () {
                    return !c
                },
                fireWith: function (t, e) {
                    return e = e || [], e = [t, e.slice ? e.slice() : e], !u || r && !c || (i ? c.push(e) : h(e)), this
                },
                fire: function () {
                    return d.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return d
    }, le.extend({
        Deferred: function (t) {
            var e = [
                    ["resolve", "done", le.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", le.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", le.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return s.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var t = arguments;
                        return le.Deferred(function (i) {
                            le.each(e, function (e, r) {
                                var o = r[0],
                                    a = le.isFunction(t[e]) && t[e];
                                s[r[1]](function () {
                                    var t = a && a.apply(this, arguments);
                                    t && le.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o + "With"](this === n ? i.promise() : this, a ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function (t) {
                        return null != t ? le.extend(t, n) : n
                    }
                }, s = {};
            return n.pipe = n.then, le.each(e, function (t, r) {
                var o = r[2],
                    a = r[3];
                n[r[1]] = o.add, a && o.add(function () {
                    i = a
                }, e[1 ^ t][2].disable, e[2][2].lock), s[r[0]] = function () {
                    return s[r[0] + "With"](this === s ? n : this, arguments), this
                }, s[r[0] + "With"] = o.fireWith
            }), n.promise(s), t && t.call(s, s), s
        },
        when: function (t) {
            var e, i, n, s = 0,
                r = ne.call(arguments),
                o = r.length,
                a = 1 !== o || t && le.isFunction(t.promise) ? o : 0,
                l = 1 === a ? t : le.Deferred(),
                u = function (t, i, n) {
                    return function (s) {
                        i[t] = this, n[t] = arguments.length > 1 ? ne.call(arguments) : s, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (o > 1)
                for (e = new Array(o), i = new Array(o), n = new Array(o); o > s; s++) r[s] && le.isFunction(r[s].promise) ? r[s].promise().done(u(s, n, r)).fail(l.reject).progress(u(s, i, e)) : --a;
            return a || l.resolveWith(n, r), l.promise()
        }
    }), le.support = function () {
        var e, i, n, s, r, o, a, l, u, c, h = Y.createElement("div");
        if (h.setAttribute("className", "t"), h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = h.getElementsByTagName("*"), n = h.getElementsByTagName("a")[0], !i || !n || !i.length) return {};
        r = Y.createElement("select"), a = r.appendChild(Y.createElement("option")), s = h.getElementsByTagName("input")[0], n.style.cssText = "top:1px;float:left;opacity:.5", e = {
            getSetAttribute: "t" !== h.className,
            leadingWhitespace: 3 === h.firstChild.nodeType,
            tbody: !h.getElementsByTagName("tbody").length,
            htmlSerialize: !! h.getElementsByTagName("link").length,
            style: /top/.test(n.getAttribute("style")),
            hrefNormalized: "/a" === n.getAttribute("href"),
            opacity: /^0.5/.test(n.style.opacity),
            cssFloat: !! n.style.cssFloat,
            checkOn: !! s.value,
            optSelected: a.selected,
            enctype: !! Y.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== Y.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === Y.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, s.checked = !0, e.noCloneChecked = s.cloneNode(!0).checked, r.disabled = !0, e.optDisabled = !a.disabled;
        try {
            delete h.test
        } catch (d) {
            e.deleteExpando = !1
        }
        s = Y.createElement("input"), s.setAttribute("value", ""), e.input = "" === s.getAttribute("value"), s.value = "t", s.setAttribute("type", "radio"), e.radioValue = "t" === s.value, s.setAttribute("checked", "t"), s.setAttribute("name", "t"), o = Y.createDocumentFragment(), o.appendChild(s), e.appendChecked = s.checked, e.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked, h.attachEvent && (h.attachEvent("onclick", function () {
            e.noCloneEvent = !1
        }), h.cloneNode(!0).click());
        for (c in {
            submit: !0,
            change: !0,
            focusin: !0
        }) h.setAttribute(l = "on" + c, "t"), e[c + "Bubbles"] = l in t || h.attributes[l].expando === !1;
        return h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === h.style.backgroundClip, le(function () {
            var i, n, s, r = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                o = Y.getElementsByTagName("body")[0];
            o && (i = Y.createElement("div"), i.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", o.appendChild(i).appendChild(h), h.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = h.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === s[0].offsetHeight, s[0].style.display = "", s[1].style.display = "none", e.reliableHiddenOffsets = u && 0 === s[0].offsetHeight, h.innerHTML = "", h.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", e.boxSizing = 4 === h.offsetWidth, e.doesNotIncludeMarginInBodyOffset = 1 !== o.offsetTop, t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(h, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(h, null) || {
                width: "4px"
            }).width, n = h.appendChild(Y.createElement("div")), n.style.cssText = h.style.cssText = r, n.style.marginRight = n.style.width = "0", h.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(n, null) || {}).marginRight)), typeof h.style.zoom !== K && (h.innerHTML = "", h.style.cssText = r + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === h.offsetWidth, h.style.display = "block", h.innerHTML = "<div></div>", h.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== h.offsetWidth, e.inlineBlockNeedsLayout && (o.style.zoom = 1)), o.removeChild(i), i = h = s = n = null)
        }), i = r = o = a = n = s = null, e
    }();
    var Ce = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        Te = /([A-Z])/g;
    le.extend({
        cache: {},
        expando: "jQuery" + (te + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (t) {
            return t = t.nodeType ? le.cache[t[le.expando]] : t[le.expando], !! t && !a(t)
        },
        data: function (t, e, i) {
            return s(t, e, i)
        },
        removeData: function (t, e) {
            return r(t, e)
        },
        _data: function (t, e, i) {
            return s(t, e, i, !0)
        },
        _removeData: function (t, e) {
            return r(t, e, !0)
        },
        acceptData: function (t) {
            if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType) return !1;
            var e = t.nodeName && le.noData[t.nodeName.toLowerCase()];
            return !e || e !== !0 && t.getAttribute("classid") === e
        }
    }), le.fn.extend({
        data: function (t, i) {
            var n, s, r = this[0],
                a = 0,
                l = null;
            if (t === e) {
                if (this.length && (l = le.data(r), 1 === r.nodeType && !le._data(r, "parsedAttrs"))) {
                    for (n = r.attributes; a < n.length; a++) s = n[a].name, s.indexOf("data-") || (s = le.camelCase(s.slice(5)), o(r, s, l[s]));
                    le._data(r, "parsedAttrs", !0)
                }
                return l
            }
            return "object" == typeof t ? this.each(function () {
                le.data(this, t)
            }) : le.access(this, function (i) {
                return i === e ? r ? o(r, t, le.data(r, t)) : null : (this.each(function () {
                    le.data(this, t, i)
                }), void 0)
            }, null, i, arguments.length > 1, null, !0)
        },
        removeData: function (t) {
            return this.each(function () {
                le.removeData(this, t)
            })
        }
    }), le.extend({
        queue: function (t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue", n = le._data(t, e), i && (!n || le.isArray(i) ? n = le._data(t, e, le.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function (t, e) {
            e = e || "fx";
            var i = le.queue(t, e),
                n = i.length,
                s = i.shift(),
                r = le._queueHooks(t, e),
                o = function () {
                    le.dequeue(t, e)
                };
            "inprogress" === s && (s = i.shift(), n--), r.cur = s, s && ("fx" === e && i.unshift("inprogress"), delete r.stop, s.call(t, o, r)), !n && r && r.empty.fire()
        },
        _queueHooks: function (t, e) {
            var i = e + "queueHooks";
            return le._data(t, i) || le._data(t, i, {
                empty: le.Callbacks("once memory").add(function () {
                    le._removeData(t, e + "queue"), le._removeData(t, i)
                })
            })
        }
    }), le.fn.extend({
        queue: function (t, i) {
            var n = 2;
            return "string" != typeof t && (i = t, t = "fx", n--), arguments.length < n ? le.queue(this[0], t) : i === e ? this : this.each(function () {
                var e = le.queue(this, t, i);
                le._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && le.dequeue(this, t)
            })
        },
        dequeue: function (t) {
            return this.each(function () {
                le.dequeue(this, t)
            })
        },
        delay: function (t, e) {
            return t = le.fx ? le.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, i) {
                var n = setTimeout(e, t);
                i.stop = function () {
                    clearTimeout(n)
                }
            })
        },
        clearQueue: function (t) {
            return this.queue(t || "fx", [])
        },
        promise: function (t, i) {
            var n, s = 1,
                r = le.Deferred(),
                o = this,
                a = this.length,
                l = function () {
                    --s || r.resolveWith(o, [o])
                };
            for ("string" != typeof t && (i = t, t = e), t = t || "fx"; a--;) n = le._data(o[a], t + "queueHooks"), n && n.empty && (s++, n.empty.add(l));
            return l(), r.promise(i)
        }
    });
    var Se, Ee, Pe = /[\t\r\n]/g,
        De = /\r/g,
        Ie = /^(?:input|select|textarea|button|object)$/i,
        Me = /^(?:a|area)$/i,
        Ae = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        Ne = /^(?:checked|selected)$/i,
        Ve = le.support.getSetAttribute,
        $e = le.support.input;
    le.fn.extend({
        attr: function (t, e) {
            return le.access(this, le.attr, t, e, arguments.length > 1)
        },
        removeAttr: function (t) {
            return this.each(function () {
                le.removeAttr(this, t)
            })
        },
        prop: function (t, e) {
            return le.access(this, le.prop, t, e, arguments.length > 1)
        },
        removeProp: function (t) {
            return t = le.propFix[t] || t, this.each(function () {
                try {
                    this[t] = e, delete this[t]
                } catch (i) {}
            })
        },
        addClass: function (t) {
            var e, i, n, s, r, o = 0,
                a = this.length,
                l = "string" == typeof t && t;
            if (le.isFunction(t)) return this.each(function (e) {
                le(this).addClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(ce) || []; a > o; o++)
                    if (i = this[o], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Pe, " ") : " ")) {
                        for (r = 0; s = e[r++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        i.className = le.trim(n)
                    }
            return this
        },
        removeClass: function (t) {
            var e, i, n, s, r, o = 0,
                a = this.length,
                l = 0 === arguments.length || "string" == typeof t && t;
            if (le.isFunction(t)) return this.each(function (e) {
                le(this).removeClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(ce) || []; a > o; o++)
                    if (i = this[o], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Pe, " ") : "")) {
                        for (r = 0; s = e[r++];)
                            for (; n.indexOf(" " + s + " ") >= 0;) n = n.replace(" " + s + " ", " ");
                        i.className = t ? le.trim(n) : ""
                    }
            return this
        },
        toggleClass: function (t, e) {
            var i = typeof t,
                n = "boolean" == typeof e;
            return le.isFunction(t) ? this.each(function (i) {
                le(this).toggleClass(t.call(this, i, this.className, e), e)
            }) : this.each(function () {
                if ("string" === i)
                    for (var s, r = 0, o = le(this), a = e, l = t.match(ce) || []; s = l[r++];) a = n ? a : !o.hasClass(s), o[a ? "addClass" : "removeClass"](s);
                else(i === K || "boolean" === i) && (this.className && le._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : le._data(this, "__className__") || "")
            })
        },
        hasClass: function (t) {
            for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Pe, " ").indexOf(e) >= 0) return !0;
            return !1
        },
        val: function (t) {
            var i, n, s, r = this[0]; {
                if (arguments.length) return s = le.isFunction(t), this.each(function (i) {
                    var r, o = le(this);
                    1 === this.nodeType && (r = s ? t.call(this, i, o.val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : le.isArray(r) && (r = le.map(r, function (t) {
                        return null == t ? "" : t + ""
                    })), n = le.valHooks[this.type] || le.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, r, "value") !== e || (this.value = r))
                });
                if (r) return n = le.valHooks[r.type] || le.valHooks[r.nodeName.toLowerCase()], n && "get" in n && (i = n.get(r, "value")) !== e ? i : (i = r.value, "string" == typeof i ? i.replace(De, "") : null == i ? "" : i)
            }
        }
    }), le.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = t.attributes.value;
                    return !e || e.specified ? t.value : t.text
                }
            },
            select: {
                get: function (t) {
                    for (var e, i, n = t.options, s = t.selectedIndex, r = "select-one" === t.type || 0 > s, o = r ? null : [], a = r ? s + 1 : n.length, l = 0 > s ? a : r ? s : 0; a > l; l++)
                        if (i = n[l], !(!i.selected && l !== s || (le.support.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && le.nodeName(i.parentNode, "optgroup"))) {
                            if (e = le(i).val(), r) return e;
                            o.push(e)
                        }
                    return o
                },
                set: function (t, e) {
                    var i = le.makeArray(e);
                    return le(t).find("option").each(function () {
                        this.selected = le.inArray(le(this).val(), i) >= 0
                    }), i.length || (t.selectedIndex = -1), i
                }
            }
        },
        attr: function (t, i, n) {
            var s, r, o, a = t.nodeType;
            if (t && 3 !== a && 8 !== a && 2 !== a) return typeof t.getAttribute === K ? le.prop(t, i, n) : (r = 1 !== a || !le.isXMLDoc(t), r && (i = i.toLowerCase(), s = le.attrHooks[i] || (Ae.test(i) ? Ee : Se)), n === e ? s && r && "get" in s && null !== (o = s.get(t, i)) ? o : (typeof t.getAttribute !== K && (o = t.getAttribute(i)), null == o ? e : o) : null !== n ? s && r && "set" in s && (o = s.set(t, n, i)) !== e ? o : (t.setAttribute(i, n + ""), n) : (le.removeAttr(t, i), void 0))
        },
        removeAttr: function (t, e) {
            var i, n, s = 0,
                r = e && e.match(ce);
            if (r && 1 === t.nodeType)
                for (; i = r[s++];) n = le.propFix[i] || i, Ae.test(i) ? !Ve && Ne.test(i) ? t[le.camelCase("default-" + i)] = t[n] = !1 : t[n] = !1 : le.attr(t, i, ""), t.removeAttribute(Ve ? i : n)
        },
        attrHooks: {
            type: {
                set: function (t, e) {
                    if (!le.support.radioValue && "radio" === e && le.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (t, i, n) {
            var s, r, o, a = t.nodeType;
            if (t && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !le.isXMLDoc(t), o && (i = le.propFix[i] || i, r = le.propHooks[i]), n !== e ? r && "set" in r && (s = r.set(t, n, i)) !== e ? s : t[i] = n : r && "get" in r && null !== (s = r.get(t, i)) ? s : t[i]
        },
        propHooks: {
            tabIndex: {
                get: function (t) {
                    var i = t.getAttributeNode("tabindex");
                    return i && i.specified ? parseInt(i.value, 10) : Ie.test(t.nodeName) || Me.test(t.nodeName) && t.href ? 0 : e
                }
            }
        }
    }), Ee = {
        get: function (t, i) {
            var n = le.prop(t, i),
                s = "boolean" == typeof n && t.getAttribute(i),
                r = "boolean" == typeof n ? $e && Ve ? null != s : Ne.test(i) ? t[le.camelCase("default-" + i)] : !! s : t.getAttributeNode(i);
            return r && r.value !== !1 ? i.toLowerCase() : e
        },
        set: function (t, e, i) {
            return e === !1 ? le.removeAttr(t, i) : $e && Ve || !Ne.test(i) ? t.setAttribute(!Ve && le.propFix[i] || i, i) : t[le.camelCase("default-" + i)] = t[i] = !0, i
        }
    }, $e && Ve || (le.attrHooks.value = {
        get: function (t, i) {
            var n = t.getAttributeNode(i);
            return le.nodeName(t, "input") ? t.defaultValue : n && n.specified ? n.value : e
        },
        set: function (t, e, i) {
            return le.nodeName(t, "input") ? (t.defaultValue = e, void 0) : Se && Se.set(t, e, i)
        }
    }), Ve || (Se = le.valHooks.button = {
        get: function (t, i) {
            var n = t.getAttributeNode(i);
            return n && ("id" === i || "name" === i || "coords" === i ? "" !== n.value : n.specified) ? n.value : e
        },
        set: function (t, i, n) {
            var s = t.getAttributeNode(n);
            return s || t.setAttributeNode(s = t.ownerDocument.createAttribute(n)), s.value = i += "", "value" === n || i === t.getAttribute(n) ? i : e
        }
    }, le.attrHooks.contenteditable = {
        get: Se.get,
        set: function (t, e, i) {
            Se.set(t, "" === e ? !1 : e, i)
        }
    }, le.each(["width", "height"], function (t, e) {
        le.attrHooks[e] = le.extend(le.attrHooks[e], {
            set: function (t, i) {
                return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
            }
        })
    })), le.support.hrefNormalized || (le.each(["href", "src", "width", "height"], function (t, i) {
        le.attrHooks[i] = le.extend(le.attrHooks[i], {
            get: function (t) {
                var n = t.getAttribute(i, 2);
                return null == n ? e : n
            }
        })
    }), le.each(["href", "src"], function (t, e) {
        le.propHooks[e] = {
            get: function (t) {
                return t.getAttribute(e, 4)
            }
        }
    })), le.support.style || (le.attrHooks.style = {
        get: function (t) {
            return t.style.cssText || e
        },
        set: function (t, e) {
            return t.style.cssText = e + ""
        }
    }), le.support.optSelected || (le.propHooks.selected = le.extend(le.propHooks.selected, {
        get: function (t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    })), le.support.enctype || (le.propFix.enctype = "encoding"), le.support.checkOn || le.each(["radio", "checkbox"], function () {
        le.valHooks[this] = {
            get: function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            }
        }
    }), le.each(["radio", "checkbox"], function () {
        le.valHooks[this] = le.extend(le.valHooks[this], {
            set: function (t, e) {
                return le.isArray(e) ? t.checked = le.inArray(le(t).val(), e) >= 0 : void 0
            }
        })
    });
    var je = /^(?:input|select|textarea)$/i,
        Fe = /^key/,
        Oe = /^(?:mouse|contextmenu)|click/,
        He = /^(?:focusinfocus|focusoutblur)$/,
        Le = /^([^.]*)(?:\.(.+)|)$/;
    le.event = {
        global: {},
        add: function (t, i, n, s, r) {
            var o, a, l, u, c, h, d, p, f, m, g, v = le._data(t);
            if (v) {
                for (n.handler && (u = n, n = u.handler, r = u.selector), n.guid || (n.guid = le.guid++), (a = v.events) || (a = v.events = {}), (h = v.handle) || (h = v.handle = function (t) {
                    return typeof le === K || t && le.event.triggered === t.type ? e : le.event.dispatch.apply(h.elem, arguments)
                }, h.elem = t), i = (i || "").match(ce) || [""], l = i.length; l--;) o = Le.exec(i[l]) || [], f = g = o[1], m = (o[2] || "").split(".").sort(), c = le.event.special[f] || {}, f = (r ? c.delegateType : c.bindType) || f, c = le.event.special[f] || {}, d = le.extend({
                    type: f,
                    origType: g,
                    data: s,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && le.expr.match.needsContext.test(r),
                    namespace: m.join(".")
                }, u), (p = a[f]) || (p = a[f] = [], p.delegateCount = 0, c.setup && c.setup.call(t, s, m, h) !== !1 || (t.addEventListener ? t.addEventListener(f, h, !1) : t.attachEvent && t.attachEvent("on" + f, h))), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, d) : p.push(d), le.event.global[f] = !0;
                t = null
            }
        },
        remove: function (t, e, i, n, s) {
            var r, o, a, l, u, c, h, d, p, f, m, g = le.hasData(t) && le._data(t);
            if (g && (c = g.events)) {
                for (e = (e || "").match(ce) || [""], u = e.length; u--;)
                    if (a = Le.exec(e[u]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
                        for (h = le.event.special[p] || {}, p = (n ? h.delegateType : h.bindType) || p, d = c[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = d.length; r--;) o = d[r], !s && m !== o.origType || i && i.guid !== o.guid || a && !a.test(o.namespace) || n && n !== o.selector && ("**" !== n || !o.selector) || (d.splice(r, 1), o.selector && d.delegateCount--, h.remove && h.remove.call(t, o));
                        l && !d.length && (h.teardown && h.teardown.call(t, f, g.handle) !== !1 || le.removeEvent(t, p, g.handle), delete c[p])
                    } else
                        for (p in c) le.event.remove(t, p + e[u], i, n, !0);
                le.isEmptyObject(c) && (delete g.handle, le._removeData(t, "events"))
            }
        },
        trigger: function (i, n, s, r) {
            var o, a, l, u, c, h, d, p = [s || Y],
                f = oe.call(i, "type") ? i.type : i,
                m = oe.call(i, "namespace") ? i.namespace.split(".") : [];
            if (l = h = s = s || Y, 3 !== s.nodeType && 8 !== s.nodeType && !He.test(f + le.event.triggered) && (f.indexOf(".") >= 0 && (m = f.split("."), f = m.shift(), m.sort()), a = f.indexOf(":") < 0 && "on" + f, i = i[le.expando] ? i : new le.Event(f, "object" == typeof i && i), i.isTrigger = !0, i.namespace = m.join("."), i.namespace_re = i.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, i.result = e, i.target || (i.target = s), n = null == n ? [i] : le.makeArray(n, [i]), c = le.event.special[f] || {}, r || !c.trigger || c.trigger.apply(s, n) !== !1)) {
                if (!r && !c.noBubble && !le.isWindow(s)) {
                    for (u = c.delegateType || f, He.test(u + f) || (l = l.parentNode); l; l = l.parentNode) p.push(l), h = l;
                    h === (s.ownerDocument || Y) && p.push(h.defaultView || h.parentWindow || t)
                }
                for (d = 0;
                     (l = p[d++]) && !i.isPropagationStopped();) i.type = d > 1 ? u : c.bindType || f, o = (le._data(l, "events") || {})[i.type] && le._data(l, "handle"), o && o.apply(l, n), o = a && l[a], o && le.acceptData(l) && o.apply && o.apply(l, n) === !1 && i.preventDefault();
                if (i.type = f, !(r || i.isDefaultPrevented() || c._default && c._default.apply(s.ownerDocument, n) !== !1 || "click" === f && le.nodeName(s, "a") || !le.acceptData(s) || !a || !s[f] || le.isWindow(s))) {
                    h = s[a], h && (s[a] = null), le.event.triggered = f;
                    try {
                        s[f]()
                    } catch (g) {}
                    le.event.triggered = e, h && (s[a] = h)
                }
                return i.result
            }
        },
        dispatch: function (t) {
            t = le.event.fix(t);
            var i, n, s, r, o, a = [],
                l = ne.call(arguments),
                u = (le._data(this, "events") || {})[t.type] || [],
                c = le.event.special[t.type] || {};
            if (l[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (a = le.event.handlers.call(this, t, u), i = 0;
                     (r = a[i++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, o = 0;
                         (s = r.handlers[o++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(s.namespace)) && (t.handleObj = s, t.data = s.data, n = ((le.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l), n !== e && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (t, i) {
            var n, s, r, o, a = [],
                l = i.delegateCount,
                u = t.target;
            if (l && u.nodeType && (!t.button || "click" !== t.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== t.type)) {
                        for (r = [], o = 0; l > o; o++) s = i[o], n = s.selector + " ", r[n] === e && (r[n] = s.needsContext ? le(n, this).index(u) >= 0 : le.find(n, this, null, [u]).length), r[n] && r.push(s);
                        r.length && a.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return l < i.length && a.push({
                elem: this,
                handlers: i.slice(l)
            }), a
        },
        fix: function (t) {
            if (t[le.expando]) return t;
            var e, i, n, s = t.type,
                r = t,
                o = this.fixHooks[s];
            for (o || (this.fixHooks[s] = o = Oe.test(s) ? this.mouseHooks : Fe.test(s) ? this.keyHooks : {}), n = o.props ? this.props.concat(o.props) : this.props, t = new le.Event(r), e = n.length; e--;) i = n[e], t[i] = r[i];
            return t.target || (t.target = r.srcElement || Y), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !! t.metaKey, o.filter ? o.filter(t, r) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (t, i) {
                var n, s, r, o = i.button,
                    a = i.fromElement;
                return null == t.pageX && null != i.clientX && (s = t.target.ownerDocument || Y, r = s.documentElement, n = s.body, t.pageX = i.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = i.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? i.toElement : a), t.which || o === e || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function () {
                    return le.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }
            },
            focus: {
                trigger: function () {
                    if (this !== Y.activeElement && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === Y.activeElement && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function (t) {
                    t.result !== e && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function (t, e, i, n) {
            var s = le.extend(new le.Event, i, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? le.event.trigger(s, null, e) : le.event.dispatch.call(e, s), s.isDefaultPrevented() && i.preventDefault()
        }
    }, le.removeEvent = Y.removeEventListener ? function (t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    } : function (t, e, i) {
        var n = "on" + e;
        t.detachEvent && (typeof t[n] === K && (t[n] = null), t.detachEvent(n, i))
    }, le.Event = function (t, e) {
        return this instanceof le.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? l : u) : this.type = t, e && le.extend(this, e), this.timeStamp = t && t.timeStamp || le.now(), this[le.expando] = !0, void 0) : new le.Event(t, e)
    }, le.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = l, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = l, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = l, this.stopPropagation()
        }
    }, le.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (t, e) {
        le.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
                var i, n = this,
                    s = t.relatedTarget,
                    r = t.handleObj;
                return (!s || s !== n && !le.contains(n, s)) && (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), le.support.submitBubbles || (le.event.special.submit = {
        setup: function () {
            return le.nodeName(this, "form") ? !1 : (le.event.add(this, "click._submit keypress._submit", function (t) {
                var i = t.target,
                    n = le.nodeName(i, "input") || le.nodeName(i, "button") ? i.form : e;
                n && !le._data(n, "submitBubbles") && (le.event.add(n, "submit._submit", function (t) {
                    t._submit_bubble = !0
                }), le._data(n, "submitBubbles", !0))
            }), void 0)
        },
        postDispatch: function (t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && le.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function () {
            return le.nodeName(this, "form") ? !1 : (le.event.remove(this, "._submit"), void 0)
        }
    }), le.support.changeBubbles || (le.event.special.change = {
        setup: function () {
            return je.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (le.event.add(this, "propertychange._change", function (t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), le.event.add(this, "click._change", function (t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), le.event.simulate("change", this, t, !0)
            })), !1) : (le.event.add(this, "beforeactivate._change", function (t) {
                var e = t.target;
                je.test(e.nodeName) && !le._data(e, "changeBubbles") && (le.event.add(e, "change._change", function (t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || le.event.simulate("change", this.parentNode, t, !0)
                }), le._data(e, "changeBubbles", !0))
            }), void 0)
        },
        handle: function (t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return le.event.remove(this, "._change"), !je.test(this.nodeName)
        }
    }), le.support.focusinBubbles || le.each({
        focus: "focusin",
        blur: "focusout"
    }, function (t, e) {
        var i = 0,
            n = function (t) {
                le.event.simulate(e, t.target, le.event.fix(t), !0)
            };
        le.event.special[e] = {
            setup: function () {
                0 === i++ && Y.addEventListener(t, n, !0)
            },
            teardown: function () {
                0 === --i && Y.removeEventListener(t, n, !0)
            }
        }
    }), le.fn.extend({
        on: function (t, i, n, s, r) {
            var o, a;
            if ("object" == typeof t) {
                "string" != typeof i && (n = n || i, i = e);
                for (o in t) this.on(o, i, n, t[o], r);
                return this
            }
            if (null == n && null == s ? (s = i, n = i = e) : null == s && ("string" == typeof i ? (s = n, n = e) : (s = n, n = i, i = e)), s === !1) s = u;
            else if (!s) return this;
            return 1 === r && (a = s, s = function (t) {
                return le().off(t), a.apply(this, arguments)
            }, s.guid = a.guid || (a.guid = le.guid++)), this.each(function () {
                le.event.add(this, t, s, n, i)
            })
        },
        one: function (t, e, i, n) {
            return this.on(t, e, i, n, 1)
        },
        off: function (t, i, n) {
            var s, r;
            if (t && t.preventDefault && t.handleObj) return s = t.handleObj, le(t.delegateTarget).off(s.namespace ? s.origType + "." + s.namespace : s.origType, s.selector, s.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, i, t[r]);
                return this
            }
            return (i === !1 || "function" == typeof i) && (n = i, i = e), n === !1 && (n = u), this.each(function () {
                le.event.remove(this, t, n, i)
            })
        },
        bind: function (t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function (t, e) {
            return this.off(t, null, e)
        },
        delegate: function (t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function (t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        },
        trigger: function (t, e) {
            return this.each(function () {
                le.event.trigger(t, e, this)
            })
        },
        triggerHandler: function (t, e) {
            var i = this[0];
            return i ? le.event.trigger(t, e, i, !0) : void 0
        }
    }),
        function (t, e) {
            function i(t) {
                return fe.test(t + "")
            }

            function n() {
                var t, e = [];
                return t = function (i, n) {
                    return e.push(i += " ") > C.cacheLength && delete t[e.shift()], t[i] = n
                }
            }

            function s(t) {
                return t[H] = !0, t
            }

            function r(t) {
                var e = M.createElement("div");
                try {
                    return t(e)
                } catch (i) {
                    return !1
                } finally {
                    e = null
                }
            }

            function o(t, e, i, n) {
                var s, r, o, a, l, u, c, p, f, m;
                if ((e ? e.ownerDocument || e : L) !== M && I(e), e = e || M, i = i || [], !t || "string" != typeof t) return i;
                if (1 !== (a = e.nodeType) && 9 !== a) return [];
                if (!N && !n) {
                    if (s = me.exec(t))
                        if (o = s[1]) {
                            if (9 === a) {
                                if (r = e.getElementById(o), !r || !r.parentNode) return i;
                                if (r.id === o) return i.push(r), i
                            } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(o)) && F(e, r) && r.id === o) return i.push(r), i
                        } else {
                            if (s[2]) return Q.apply(i, J.call(e.getElementsByTagName(t), 0)), i;
                            if ((o = s[3]) && B.getByClassName && e.getElementsByClassName) return Q.apply(i, J.call(e.getElementsByClassName(o), 0)), i
                        }
                    if (B.qsa && !V.test(t)) {
                        if (c = !0, p = H, f = e, m = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (u = h(t), (c = e.getAttribute("id")) ? p = c.replace(ye, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + d(u[l]);
                            f = pe.test(t) && e.parentNode || e, m = u.join(",")
                        }
                        if (m) try {
                            return Q.apply(i, J.call(f.querySelectorAll(m), 0)), i
                        } catch (g) {} finally {
                            c || e.removeAttribute("id")
                        }
                    }
                }
                return b(t.replace(oe, "$1"), e, i, n)
            }

            function a(t, e) {
                var i = e && t,
                    n = i && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function l(t) {
                return function (e) {
                    var i = e.nodeName.toLowerCase();
                    return "input" === i && e.type === t
                }
            }

            function u(t) {
                return function (e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function c(t) {
                return s(function (e) {
                    return e = +e, s(function (i, n) {
                        for (var s, r = t([], i.length, e), o = r.length; o--;) i[s = r[o]] && (i[s] = !(n[s] = i[s]))
                    })
                })
            }

            function h(t, e) {
                var i, n, s, r, a, l, u, c = q[t + " "];
                if (c) return e ? 0 : c.slice(0);
                for (a = t, l = [], u = C.preFilter; a;) {
                    (!i || (n = ae.exec(a))) && (n && (a = a.slice(n[0].length) || a), l.push(s = [])), i = !1, (n = ue.exec(a)) && (i = n.shift(), s.push({
                        value: i,
                        type: n[0].replace(oe, " ")
                    }), a = a.slice(i.length));
                    for (r in C.filter)!(n = de[r].exec(a)) || u[r] && !(n = u[r](n)) || (i = n.shift(), s.push({
                        value: i,
                        type: r,
                        matches: n
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return e ? a.length : a ? o.error(t) : q(t, l).slice(0)
            }

            function d(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                return n
            }

            function p(t, e, i) {
                var n = e.dir,
                    s = i && "parentNode" === n,
                    r = R++;
                return e.first ? function (e, i, r) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || s) return t(e, i, r)
                } : function (e, i, o) {
                    var a, l, u, c = z + " " + r;
                    if (o) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || s) && t(e, i, o)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || s)
                                if (u = e[H] || (e[H] = {}), (l = u[n]) && l[0] === c) {
                                    if ((a = l[1]) === !0 || a === k) return a === !0
                                } else if (l = u[n] = [c], l[1] = t(e, i, o) || k, l[1] === !0) return !0
                }
            }

            function f(t) {
                return t.length > 1 ? function (e, i, n) {
                    for (var s = t.length; s--;)
                        if (!t[s](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function m(t, e, i, n, s) {
                for (var r, o = [], a = 0, l = t.length, u = null != e; l > a; a++)(r = t[a]) && (!i || i(r, n, s)) && (o.push(r), u && e.push(a));
                return o
            }

            function g(t, e, i, n, r, o) {
                return n && !n[H] && (n = g(n)), r && !r[H] && (r = g(r, o)), s(function (s, o, a, l) {
                    var u, c, h, d = [],
                        p = [],
                        f = o.length,
                        g = s || _(e || "*", a.nodeType ? [a] : a, []),
                        v = !t || !s && e ? g : m(g, d, t, a, l),
                        y = i ? r || (s ? t : f || n) ? [] : o : v;
                    if (i && i(v, y, a, l), n)
                        for (u = m(y, p), n(u, [], a, l), c = u.length; c--;)(h = u[c]) && (y[p[c]] = !(v[p[c]] = h));
                    if (s) {
                        if (r || t) {
                            if (r) {
                                for (u = [], c = y.length; c--;)(h = y[c]) && u.push(v[c] = h);
                                r(null, y = [], u, l)
                            }
                            for (c = y.length; c--;)(h = y[c]) && (u = r ? Z.call(s, h) : d[c]) > -1 && (s[u] = !(o[u] = h))
                        }
                    } else y = m(y === o ? y.splice(f, y.length) : y), r ? r(null, o, y, l) : Q.apply(o, y)
                })
            }

            function v(t) {
                for (var e, i, n, s = t.length, r = C.relative[t[0].type], o = r || C.relative[" "], a = r ? 1 : 0, l = p(function (t) {
                    return t === e
                }, o, !0), u = p(function (t) {
                    return Z.call(e, t) > -1
                }, o, !0), c = [
                    function (t, i, n) {
                        return !r && (n || i !== D) || ((e = i).nodeType ? l(t, i, n) : u(t, i, n))
                    }
                ]; s > a; a++)
                    if (i = C.relative[t[a].type]) c = [p(f(c), i)];
                    else {
                        if (i = C.filter[t[a].type].apply(null, t[a].matches), i[H]) {
                            for (n = ++a; s > n && !C.relative[t[n].type]; n++);
                            return g(a > 1 && f(c), a > 1 && d(t.slice(0, a - 1)).replace(oe, "$1"), i, n > a && v(t.slice(a, n)), s > n && v(t = t.slice(n)), s > n && d(t))
                        }
                        c.push(i)
                    }
                return f(c)
            }

            function y(t, e) {
                var i = 0,
                    n = e.length > 0,
                    r = t.length > 0,
                    a = function (s, a, l, u, c) {
                        var h, d, p, f = [],
                            g = 0,
                            v = "0",
                            y = s && [],
                            _ = null != c,
                            b = D,
                            w = s || r && C.find.TAG("*", c && a.parentNode || a),
                            x = z += null == b ? 1 : Math.random() || .1;
                        for (_ && (D = a !== M && a, k = i); null != (h = w[v]); v++) {
                            if (r && h) {
                                for (d = 0; p = t[d++];)
                                    if (p(h, a, l)) {
                                        u.push(h);
                                        break
                                    }
                                _ && (z = x, k = ++i)
                            }
                            n && ((h = !p && h) && g--, s && y.push(h))
                        }
                        if (g += v, n && v !== g) {
                            for (d = 0; p = e[d++];) p(y, f, a, l);
                            if (s) {
                                if (g > 0)
                                    for (; v--;) y[v] || f[v] || (f[v] = G.call(u));
                                f = m(f)
                            }
                            Q.apply(u, f), _ && !s && f.length > 0 && g + e.length > 1 && o.uniqueSort(u)
                        }
                        return _ && (z = x, D = b), y
                    };
                return n ? s(a) : a
            }

            function _(t, e, i) {
                for (var n = 0, s = e.length; s > n; n++) o(t, e[n], i);
                return i
            }

            function b(t, e, i, n) {
                var s, r, o, a, l, u = h(t);
                if (!n && 1 === u.length) {
                    if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (o = r[0]).type && 9 === e.nodeType && !N && C.relative[r[1].type]) {
                        if (e = C.find.ID(o.matches[0].replace(be, we), e)[0], !e) return i;
                        t = t.slice(r.shift().value.length)
                    }
                    for (s = de.needsContext.test(t) ? 0 : r.length; s-- && (o = r[s], !C.relative[a = o.type]);)
                        if ((l = C.find[a]) && (n = l(o.matches[0].replace(be, we), pe.test(r[0].type) && e.parentNode || e))) {
                            if (r.splice(s, 1), t = n.length && d(r), !t) return Q.apply(i, J.call(n, 0)), i;
                            break
                        }
                }
                return E(t, u)(n, e, N, i, pe.test(t)), i
            }

            function w() {}
            var x, k, C, T, S, E, P, D, I, M, A, N, V, $, j, F, O, H = "sizzle" + -new Date,
                L = t.document,
                B = {}, z = 0,
                R = 0,
                W = n(),
                q = n(),
                U = n(),
                K = typeof e,
                Y = 1 << 31,
                X = [],
                G = X.pop,
                Q = X.push,
                J = X.slice,
                Z = X.indexOf || function (t) {
                    for (var e = 0, i = this.length; i > e; e++)
                        if (this[e] === t) return e;
                    return -1
                }, te = "[\\x20\\t\\r\\n\\f]",
                ee = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ie = ee.replace("w", "w#"),
                ne = "([*^$|!~]?=)",
                se = "\\[" + te + "*(" + ee + ")" + te + "*(?:" + ne + te + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ie + ")|)|)" + te + "*\\]",
                re = ":(" + ee + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + se.replace(3, 8) + ")*)|.*)\\)|)",
                oe = new RegExp("^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$", "g"),
                ae = new RegExp("^" + te + "*," + te + "*"),
                ue = new RegExp("^" + te + "*([\\x20\\t\\r\\n\\f>+~])" + te + "*"),
                ce = new RegExp(re),
                he = new RegExp("^" + ie + "$"),
                de = {
                    ID: new RegExp("^#(" + ee + ")"),
                    CLASS: new RegExp("^\\.(" + ee + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + ee + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + ee.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + se),
                    PSEUDO: new RegExp("^" + re),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + te + "*(even|odd|(([+-]|)(\\d*)n|)" + te + "*(?:([+-]|)" + te + "*(\\d+)|))" + te + "*\\)|)", "i"),
                    needsContext: new RegExp("^" + te + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + te + "*((?:-\\d)?\\d*)" + te + "*\\)|)(?=[^-]|$)", "i")
                }, pe = /[\x20\t\r\n\f]*[+~]/,
                fe = /^[^{]+\{\s*\[native code/,
                me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ge = /^(?:input|select|textarea|button)$/i,
                ve = /^h\d$/i,
                ye = /'|\\/g,
                _e = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                be = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                we = function (t, e) {
                    var i = "0x" + e - 65536;
                    return i !== i ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
                };
            try {
                J.call(L.documentElement.childNodes, 0)[0].nodeType
            } catch (xe) {
                J = function (t) {
                    for (var e, i = []; e = this[t++];) i.push(e);
                    return i
                }
            }
            S = o.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, I = o.setDocument = function (t) {
                var n = t ? t.ownerDocument || t : L;
                return n !== M && 9 === n.nodeType && n.documentElement ? (M = n, A = n.documentElement, N = S(n), B.tagNameNoComments = r(function (t) {
                    return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                }), B.attributes = r(function (t) {
                    t.innerHTML = "<select></select>";
                    var e = typeof t.lastChild.getAttribute("multiple");
                    return "boolean" !== e && "string" !== e
                }), B.getByClassName = r(function (t) {
                    return t.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", t.getElementsByClassName && t.getElementsByClassName("e").length ? (t.lastChild.className = "e", 2 === t.getElementsByClassName("e").length) : !1
                }), B.getByName = r(function (t) {
                    t.id = H + 0, t.innerHTML = "<a name='" + H + "'></a><div name='" + H + "'></div>", A.insertBefore(t, A.firstChild);
                    var e = n.getElementsByName && n.getElementsByName(H).length === 2 + n.getElementsByName(H + 0).length;
                    return B.getIdNotName = !n.getElementById(H), A.removeChild(t), e
                }), C.attrHandle = r(function (t) {
                    return t.innerHTML = "<a href='#'></a>", t.firstChild && typeof t.firstChild.getAttribute !== K && "#" === t.firstChild.getAttribute("href")
                }) ? {} : {
                    href: function (t) {
                        return t.getAttribute("href", 2)
                    },
                    type: function (t) {
                        return t.getAttribute("type")
                    }
                }, B.getIdNotName ? (C.find.ID = function (t, e) {
                    if (typeof e.getElementById !== K && !N) {
                        var i = e.getElementById(t);
                        return i && i.parentNode ? [i] : []
                    }
                }, C.filter.ID = function (t) {
                    var e = t.replace(be, we);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }) : (C.find.ID = function (t, i) {
                    if (typeof i.getElementById !== K && !N) {
                        var n = i.getElementById(t);
                        return n ? n.id === t || typeof n.getAttributeNode !== K && n.getAttributeNode("id").value === t ? [n] : e : []
                    }
                }, C.filter.ID = function (t) {
                    var e = t.replace(be, we);
                    return function (t) {
                        var i = typeof t.getAttributeNode !== K && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), C.find.TAG = B.tagNameNoComments ? function (t, e) {
                    return typeof e.getElementsByTagName !== K ? e.getElementsByTagName(t) : void 0
                } : function (t, e) {
                    var i, n = [],
                        s = 0,
                        r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = r[s++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return r
                }, C.find.NAME = B.getByName && function (t, e) {
                    return typeof e.getElementsByName !== K ? e.getElementsByName(name) : void 0
                }, C.find.CLASS = B.getByClassName && function (t, e) {
                    return typeof e.getElementsByClassName === K || N ? void 0 : e.getElementsByClassName(t)
                }, $ = [], V = [":focus"], (B.qsa = i(n.querySelectorAll)) && (r(function (t) {
                    t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || V.push("\\[" + te + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), t.querySelectorAll(":checked").length || V.push(":checked")
                }), r(function (t) {
                    t.innerHTML = "<input type='hidden' i=''/>", t.querySelectorAll("[i^='']").length && V.push("[*^$]=" + te + "*(?:\"\"|'')"), t.querySelectorAll(":enabled").length || V.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), V.push(",.*:")
                })), (B.matchesSelector = i(j = A.matchesSelector || A.mozMatchesSelector || A.webkitMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && r(function (t) {
                    B.disconnectedMatch = j.call(t, "div"), j.call(t, "[s!='']:x"), $.push("!=", re)
                }), V = new RegExp(V.join("|")), $ = new RegExp($.join("|")), F = i(A.contains) || A.compareDocumentPosition ? function (t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function (t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, O = A.compareDocumentPosition ? function (t, e) {
                    var i;
                    return t === e ? (P = !0, 0) : (i = e.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(e)) ? 1 & i || t.parentNode && 11 === t.parentNode.nodeType ? t === n || F(L, t) ? -1 : e === n || F(L, e) ? 1 : 0 : 4 & i ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
                } : function (t, e) {
                    var i, s = 0,
                        r = t.parentNode,
                        o = e.parentNode,
                        l = [t],
                        u = [e];
                    if (t === e) return P = !0, 0;
                    if (!r || !o) return t === n ? -1 : e === n ? 1 : r ? -1 : o ? 1 : 0;
                    if (r === o) return a(t, e);
                    for (i = t; i = i.parentNode;) l.unshift(i);
                    for (i = e; i = i.parentNode;) u.unshift(i);
                    for (; l[s] === u[s];) s++;
                    return s ? a(l[s], u[s]) : l[s] === L ? -1 : u[s] === L ? 1 : 0
                }, P = !1, [0, 0].sort(O), B.detectDuplicates = P, M) : M
            }, o.matches = function (t, e) {
                return o(t, null, null, e)
            }, o.matchesSelector = function (t, e) {
                if ((t.ownerDocument || t) !== M && I(t), e = e.replace(_e, "='$1']"), !(!B.matchesSelector || N || $ && $.test(e) || V.test(e))) try {
                    var i = j.call(t, e);
                    if (i || B.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (n) {}
                return o(e, M, null, [t]).length > 0
            }, o.contains = function (t, e) {
                return (t.ownerDocument || t) !== M && I(t), F(t, e)
            }, o.attr = function (t, e) {
                var i;
                return (t.ownerDocument || t) !== M && I(t), N || (e = e.toLowerCase()), (i = C.attrHandle[e]) ? i(t) : N || B.attributes ? t.getAttribute(e) : ((i = t.getAttributeNode(e)) || t.getAttribute(e)) && t[e] === !0 ? e : i && i.specified ? i.value : null
            }, o.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, o.uniqueSort = function (t) {
                var e, i = [],
                    n = 1,
                    s = 0;
                if (P = !B.detectDuplicates, t.sort(O), P) {
                    for (; e = t[n]; n++) e === t[n - 1] && (s = i.push(n));
                    for (; s--;) t.splice(i[s], 1)
                }
                return t
            }, T = o.getText = function (t) {
                var e, i = "",
                    n = 0,
                    s = t.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += T(t)
                    } else if (3 === s || 4 === s) return t.nodeValue
                } else
                    for (; e = t[n]; n++) i += T(e);
                return i
            }, C = o.selectors = {
                cacheLength: 50,
                createPseudo: s,
                match: de,
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(be, we), t[3] = (t[4] || t[5] || "").replace(be, we), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || o.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && o.error(t[0]), t
                    },
                    PSEUDO: function (t) {
                        var e, i = !t[5] && t[2];
                        return de.CHILD.test(t[0]) ? null : (t[4] ? t[2] = t[4] : i && ce.test(i) && (e = h(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        return "*" === t ? function () {
                            return !0
                        } : (t = t.replace(be, we).toLowerCase(), function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        })
                    },
                    CLASS: function (t) {
                        var e = W[t + " "];
                        return e || (e = new RegExp("(^|" + te + ")" + t + "(" + te + "|$)")) && W(t, function (t) {
                            return e.test(t.className || typeof t.getAttribute !== K && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (t, e, i) {
                        return function (n) {
                            var s = o.attr(n, t);
                            return null == s ? "!=" === e : e ? (s += "", "=" === e ? s === i : "!=" === e ? s !== i : "^=" === e ? i && 0 === s.indexOf(i) : "*=" === e ? i && s.indexOf(i) > -1 : "$=" === e ? i && s.slice(-i.length) === i : "~=" === e ? (" " + s + " ").indexOf(i) > -1 : "|=" === e ? s === i || s.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function (t, e, i, n, s) {
                        var r = "nth" !== t.slice(0, 3),
                            o = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === n && 0 === s ? function (t) {
                            return !!t.parentNode
                        } : function (e, i, l) {
                            var u, c, h, d, p, f, m = r !== o ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a;
                            if (g) {
                                if (r) {
                                    for (; m;) {
                                        for (h = e; h = h[m];)
                                            if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [o ? g.firstChild : g.lastChild], o && y) {
                                    for (c = g[H] || (g[H] = {}), u = c[t] || [], p = u[0] === z && u[1], d = u[0] === z && u[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (d = p = 0) || f.pop();)
                                        if (1 === h.nodeType && ++d && h === e) {
                                            c[t] = [z, p, d];
                                            break
                                        }
                                } else if (y && (u = (e[H] || (e[H] = {}))[t]) && u[0] === z) d = u[1];
                                else
                                    for (;
                                        (h = ++p && h && h[m] || (d = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++d || (y && ((h[H] || (h[H] = {}))[t] = [z, d]), h !== e)););
                                return d -= s, d === n || 0 === d % n && d / n >= 0
                            }
                        }
                    },
                    PSEUDO: function (t, e) {
                        var i, n = C.pseudos[t] || C.setFilters[t.toLowerCase()] || o.error("unsupported pseudo: " + t);
                        return n[H] ? n(e) : n.length > 1 ? (i = [t, t, "", e], C.setFilters.hasOwnProperty(t.toLowerCase()) ? s(function (t, i) {
                            for (var s, r = n(t, e), o = r.length; o--;) s = Z.call(t, r[o]), t[s] = !(i[s] = r[o])
                        }) : function (t) {
                            return n(t, 0, i)
                        }) : n
                    }
                },
                pseudos: {
                    not: s(function (t) {
                        var e = [],
                            i = [],
                            n = E(t.replace(oe, "$1"));
                        return n[H] ? s(function (t, e, i, s) {
                            for (var r, o = n(t, null, s, []), a = t.length; a--;)(r = o[a]) && (t[a] = !(e[a] = r))
                        }) : function (t, s, r) {
                            return e[0] = t, n(e, null, r, i), !i.pop()
                        }
                    }),
                    has: s(function (t) {
                        return function (e) {
                            return o(t, e).length > 0
                        }
                    }),
                    contains: s(function (t) {
                        return function (e) {
                            return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                        }
                    }),
                    lang: s(function (t) {
                        return he.test(t || "") || o.error("unsupported lang: " + t), t = t.replace(be, we).toLowerCase(),
                            function (e) {
                                var i;
                                do
                                    if (i = N ? e.getAttribute("xml:lang") || e.getAttribute("lang") : e.lang) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function (e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function (t) {
                        return t === A
                    },
                    focus: function (t) {
                        return t === M.activeElement && (!M.hasFocus || M.hasFocus()) && !! (t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function (t) {
                        return t.disabled === !1
                    },
                    disabled: function (t) {
                        return t.disabled === !0
                    },
                    checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !! t.checked || "option" === e && !! t.selected
                    },
                    selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType) return !1;
                        return !0
                    },
                    parent: function (t) {
                        return !C.pseudos.empty(t)
                    },
                    header: function (t) {
                        return ve.test(t.nodeName)
                    },
                    input: function (t) {
                        return ge.test(t.nodeName)
                    },
                    button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
                    },
                    first: c(function () {
                        return [0]
                    }),
                    last: c(function (t, e) {
                        return [e - 1]
                    }),
                    eq: c(function (t, e, i) {
                        return [0 > i ? i + e : i]
                    }),
                    even: c(function (t, e) {
                        for (var i = 0; e > i; i += 2) t.push(i);
                        return t
                    }),
                    odd: c(function (t, e) {
                        for (var i = 1; e > i; i += 2) t.push(i);
                        return t
                    }),
                    lt: c(function (t, e, i) {
                        for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                        return t
                    }),
                    gt: c(function (t, e, i) {
                        for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            };
            for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) C.pseudos[x] = l(x);
            for (x in {
                submit: !0,
                reset: !0
            }) C.pseudos[x] = u(x);
            E = o.compile = function (t, e) {
                var i, n = [],
                    s = [],
                    r = U[t + " "];
                if (!r) {
                    for (e || (e = h(t)), i = e.length; i--;) r = v(e[i]), r[H] ? n.push(r) : s.push(r);
                    r = U(t, y(s, n))
                }
                return r
            }, C.pseudos.nth = C.pseudos.eq, C.filters = w.prototype = C.pseudos, C.setFilters = new w, I(), o.attr = le.attr, le.find = o, le.expr = o.selectors, le.expr[":"] = le.expr.pseudos, le.unique = o.uniqueSort, le.text = o.getText, le.isXMLDoc = o.isXML, le.contains = o.contains
        }(t);
    var Be = /Until$/,
        ze = /^(?:parents|prev(?:Until|All))/,
        Re = /^.[^:#\[\.,]*$/,
        We = le.expr.match.needsContext,
        qe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    le.fn.extend({
        find: function (t) {
            var e, i, n, s = this.length;
            if ("string" != typeof t) return n = this, this.pushStack(le(t).filter(function () {
                for (e = 0; s > e; e++)
                    if (le.contains(n[e], this)) return !0
            }));
            for (i = [], e = 0; s > e; e++) le.find(t, this[e], i);
            return i = this.pushStack(s > 1 ? le.unique(i) : i), i.selector = (this.selector ? this.selector + " " : "") + t, i
        },
        has: function (t) {
            var e, i = le(t, this),
                n = i.length;
            return this.filter(function () {
                for (e = 0; n > e; e++)
                    if (le.contains(this, i[e])) return !0
            })
        },
        not: function (t) {
            return this.pushStack(h(this, t, !1))
        },
        filter: function (t) {
            return this.pushStack(h(this, t, !0))
        },
        is: function (t) {
            return !!t && ("string" == typeof t ? We.test(t) ? le(t, this.context).index(this[0]) >= 0 : le.filter(t, this).length > 0 : this.filter(t).length > 0)
        },
        closest: function (t, e) {
            for (var i, n = 0, s = this.length, r = [], o = We.test(t) || "string" != typeof t ? le(t, e || this.context) : 0; s > n; n++)
                for (i = this[n]; i && i.ownerDocument && i !== e && 11 !== i.nodeType;) {
                    if (o ? o.index(i) > -1 : le.find.matchesSelector(i, t)) {
                        r.push(i);
                        break
                    }
                    i = i.parentNode
                }
            return this.pushStack(r.length > 1 ? le.unique(r) : r)
        },
        index: function (t) {
            return t ? "string" == typeof t ? le.inArray(this[0], le(t)) : le.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            var i = "string" == typeof t ? le(t, e) : le.makeArray(t && t.nodeType ? [t] : t),
                n = le.merge(this.get(), i);
            return this.pushStack(le.unique(n))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), le.fn.andSelf = le.fn.addBack, le.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
            return le.dir(t, "parentNode")
        },
        parentsUntil: function (t, e, i) {
            return le.dir(t, "parentNode", i)
        },
        next: function (t) {
            return c(t, "nextSibling")
        },
        prev: function (t) {
            return c(t, "previousSibling")
        },
        nextAll: function (t) {
            return le.dir(t, "nextSibling")
        },
        prevAll: function (t) {
            return le.dir(t, "previousSibling")
        },
        nextUntil: function (t, e, i) {
            return le.dir(t, "nextSibling", i)
        },
        prevUntil: function (t, e, i) {
            return le.dir(t, "previousSibling", i)
        },
        siblings: function (t) {
            return le.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
            return le.sibling(t.firstChild)
        },
        contents: function (t) {
            return le.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : le.merge([], t.childNodes)
        }
    }, function (t, e) {
        le.fn[t] = function (i, n) {
            var s = le.map(this, e, i);
            return Be.test(t) || (n = i), n && "string" == typeof n && (s = le.filter(n, s)), s = this.length > 1 && !qe[t] ? le.unique(s) : s, this.length > 1 && ze.test(t) && (s = s.reverse()), this.pushStack(s)
        }
    }), le.extend({
        filter: function (t, e, i) {
            return i && (t = ":not(" + t + ")"), 1 === e.length ? le.find.matchesSelector(e[0], t) ? [e[0]] : [] : le.find.matches(t, e)
        },
        dir: function (t, i, n) {
            for (var s = [], r = t[i]; r && 9 !== r.nodeType && (n === e || 1 !== r.nodeType || !le(r).is(n));) 1 === r.nodeType && s.push(r), r = r[i];
            return s
        },
        sibling: function (t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    });
    var Ue = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ke = / jQuery\d+="(?:null|\d+)"/g,
        Ye = new RegExp("<(?:" + Ue + ")[\\s/>]", "i"),
        Xe = /^\s+/,
        Ge = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Qe = /<([\w:]+)/,
        Je = /<tbody/i,
        Ze = /<|&#?\w+;/,
        ti = /<(?:script|style|link)/i,
        ei = /^(?:checkbox|radio)$/i,
        ii = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ni = /^$|\/(?:java|ecma)script/i,
        si = /^true\/(.*)/,
        ri = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        oi = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: le.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, ai = d(Y),
        li = ai.appendChild(Y.createElement("div"));
    oi.optgroup = oi.option, oi.tbody = oi.tfoot = oi.colgroup = oi.caption = oi.thead, oi.th = oi.td, le.fn.extend({
        text: function (t) {
            return le.access(this, function (t) {
                return t === e ? le.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Y).createTextNode(t))
            }, null, t, arguments.length)
        },
        wrapAll: function (t) {
            if (le.isFunction(t)) return this.each(function (e) {
                le(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = le(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function (t) {
            return le.isFunction(t) ? this.each(function (e) {
                le(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = le(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function (t) {
            var e = le.isFunction(t);
            return this.each(function (i) {
                le(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                le.nodeName(this, "body") || le(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (t) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(t)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (t) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(t, this.firstChild)
            })
        },
        before: function () {
            return this.domManip(arguments, !1, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function () {
            return this.domManip(arguments, !1, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function (t, e) {
            for (var i, n = 0; null != (i = this[n]); n++)(!t || le.filter(t, [i]).length > 0) && (e || 1 !== i.nodeType || le.cleanData(_(i)), i.parentNode && (e && le.contains(i.ownerDocument, i) && g(_(i, "script")), i.parentNode.removeChild(i)));
            return this
        },
        empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && le.cleanData(_(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && le.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function (t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                return le.clone(this, t, e)
            })
        },
        html: function (t) {
            return le.access(this, function (t) {
                var i = this[0] || {}, n = 0,
                    s = this.length;
                if (t === e) return 1 === i.nodeType ? i.innerHTML.replace(Ke, "") : e;
                if (!("string" != typeof t || ti.test(t) || !le.support.htmlSerialize && Ye.test(t) || !le.support.leadingWhitespace && Xe.test(t) || oi[(Qe.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Ge, "<$1></$2>");
                    try {
                        for (; s > n; n++) i = this[n] || {}, 1 === i.nodeType && (le.cleanData(_(i, !1)), i.innerHTML = t);
                        i = 0
                    } catch (r) {}
                }
                i && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function (t) {
            var e = le.isFunction(t);
            return e || "string" == typeof t || (t = le(t).not(this).detach()), this.domManip([t], !0, function (t) {
                var e = this.nextSibling,
                    i = this.parentNode;
                i && (le(this).remove(), i.insertBefore(t, e))
            })
        },
        detach: function (t) {
            return this.remove(t, !0)
        },
        domManip: function (t, i, n) {
            t = ee.apply([], t);
            var s, r, o, a, l, u, c = 0,
                h = this.length,
                d = this,
                g = h - 1,
                v = t[0],
                y = le.isFunction(v);
            if (y || !(1 >= h || "string" != typeof v || le.support.checkClone) && ii.test(v)) return this.each(function (s) {
                var r = d.eq(s);
                y && (t[0] = v.call(this, s, i ? r.html() : e)), r.domManip(t, i, n)
            });
            if (h && (u = le.buildFragment(t, this[0].ownerDocument, !1, this), s = u.firstChild, 1 === u.childNodes.length && (u = s), s)) {
                for (i = i && le.nodeName(s, "tr"), a = le.map(_(u, "script"), f), o = a.length; h > c; c++) r = u, c !== g && (r = le.clone(r, !0, !0), o && le.merge(a, _(r, "script"))), n.call(i && le.nodeName(this[c], "table") ? p(this[c], "tbody") : this[c], r, c);
                if (o)
                    for (l = a[a.length - 1].ownerDocument, le.map(a, m), c = 0; o > c; c++) r = a[c], ni.test(r.type || "") && !le._data(r, "globalEval") && le.contains(l, r) && (r.src ? le.ajax({
                        url: r.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : le.globalEval((r.text || r.textContent || r.innerHTML || "").replace(ri, "")));
                u = s = null
            }
            return this
        }
    }), le.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        le.fn[t] = function (t) {
            for (var i, n = 0, s = [], r = le(t), o = r.length - 1; o >= n; n++) i = n === o ? this : this.clone(!0), le(r[n])[e](i), ie.apply(s, i.get());
            return this.pushStack(s)
        }
    }), le.extend({
        clone: function (t, e, i) {
            var n, s, r, o, a, l = le.contains(t.ownerDocument, t);
            if (le.support.html5Clone || le.isXMLDoc(t) || !Ye.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (li.innerHTML = t.outerHTML, li.removeChild(r = li.firstChild)), !(le.support.noCloneEvent && le.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || le.isXMLDoc(t)))
                for (n = _(r), a = _(t), o = 0; null != (s = a[o]); ++o) n[o] && y(s, n[o]);
            if (e)
                if (i)
                    for (a = a || _(t), n = n || _(r), o = 0; null != (s = a[o]); o++) v(s, n[o]);
                else v(t, r);
            return n = _(r, "script"), n.length > 0 && g(n, !l && _(t, "script")), n = a = s = null, r
        },
        buildFragment: function (t, e, i, n) {
            for (var s, r, o, a, l, u, c, h = t.length, p = d(e), f = [], m = 0; h > m; m++)
                if (r = t[m], r || 0 === r)
                    if ("object" === le.type(r)) le.merge(f, r.nodeType ? [r] : r);
                    else if (Ze.test(r)) {
                        for (a = a || p.appendChild(e.createElement("div")), l = (Qe.exec(r) || ["", ""])[1].toLowerCase(), c = oi[l] || oi._default, a.innerHTML = c[1] + r.replace(Ge, "<$1></$2>") + c[2], s = c[0]; s--;) a = a.lastChild;
                        if (!le.support.leadingWhitespace && Xe.test(r) && f.push(e.createTextNode(Xe.exec(r)[0])), !le.support.tbody)
                            for (r = "table" !== l || Je.test(r) ? "<table>" !== c[1] || Je.test(r) ? 0 : a : a.firstChild, s = r && r.childNodes.length; s--;) le.nodeName(u = r.childNodes[s], "tbody") && !u.childNodes.length && r.removeChild(u);
                        for (le.merge(f, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                        a = p.lastChild
                    } else f.push(e.createTextNode(r));
            for (a && p.removeChild(a), le.support.appendChecked || le.grep(_(f, "input"), b), m = 0; r = f[m++];)
                if ((!n || -1 === le.inArray(r, n)) && (o = le.contains(r.ownerDocument, r), a = _(p.appendChild(r), "script"), o && g(a), i))
                    for (s = 0; r = a[s++];) ni.test(r.type || "") && i.push(r);
            return a = null, p
        },
        cleanData: function (t, e) {
            for (var i, n, s, r, o = 0, a = le.expando, l = le.cache, u = le.support.deleteExpando, c = le.event.special; null != (i = t[o]); o++)
                if ((e || le.acceptData(i)) && (s = i[a], r = s && l[s])) {
                    if (r.events)
                        for (n in r.events) c[n] ? le.event.remove(i, n) : le.removeEvent(i, n, r.handle);
                    l[s] && (delete l[s], u ? delete i[a] : typeof i.removeAttribute !== K ? i.removeAttribute(a) : i[a] = null, Z.push(s))
                }
        }
    });
    var ui, ci, hi, di = /alpha\([^)]*\)/i,
        pi = /opacity\s*=\s*([^)]*)/,
        fi = /^(top|right|bottom|left)$/,
        mi = /^(none|table(?!-c[ea]).+)/,
        gi = /^margin/,
        vi = new RegExp("^(" + ue + ")(.*)$", "i"),
        yi = new RegExp("^(" + ue + ")(?!px)[a-z%]+$", "i"),
        _i = new RegExp("^([+-])=(" + ue + ")", "i"),
        bi = {
            BODY: "block"
        }, wi = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, xi = {
            letterSpacing: 0,
            fontWeight: 400
        }, ki = ["Top", "Right", "Bottom", "Left"],
        Ci = ["Webkit", "O", "Moz", "ms"];
    le.fn.extend({
        css: function (t, i) {
            return le.access(this, function (t, i, n) {
                var s, r, o = {}, a = 0;
                if (le.isArray(i)) {
                    for (r = ci(t), s = i.length; s > a; a++) o[i[a]] = le.css(t, i[a], !1, r);
                    return o
                }
                return n !== e ? le.style(t, i, n) : le.css(t, i)
            }, t, i, arguments.length > 1)
        },
        show: function () {
            return k(this, !0)
        },
        hide: function () {
            return k(this)
        },
        toggle: function (t) {
            var e = "boolean" == typeof t;
            return this.each(function () {
                (e ? t : x(this)) ? le(this).show() : le(this).hide()
            })
        }
    }), le.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var i = hi(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": le.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (t, i, n, s) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, a, l = le.camelCase(i),
                    u = t.style;
                if (i = le.cssProps[l] || (le.cssProps[l] = w(u, l)), a = le.cssHooks[i] || le.cssHooks[l], n === e) return a && "get" in a && (r = a.get(t, !1, s)) !== e ? r : u[i];
                if (o = typeof n, "string" === o && (r = _i.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(le.css(t, i)), o = "number"), !(null == n || "number" === o && isNaN(n) || ("number" !== o || le.cssNumber[l] || (n += "px"), le.support.clearCloneStyle || "" !== n || 0 !== i.indexOf("background") || (u[i] = "inherit"), a && "set" in a && (n = a.set(t, n, s)) === e))) try {
                    u[i] = n
                } catch (c) {}
            }
        },
        css: function (t, i, n, s) {
            var r, o, a, l = le.camelCase(i);
            return i = le.cssProps[l] || (le.cssProps[l] = w(t.style, l)), a = le.cssHooks[i] || le.cssHooks[l], a && "get" in a && (o = a.get(t, !0, n)), o === e && (o = hi(t, i, s)), "normal" === o && i in xi && (o = xi[i]), "" === n || n ? (r = parseFloat(o), n === !0 || le.isNumeric(r) ? r || 0 : o) : o
        },
        swap: function (t, e, i, n) {
            var s, r, o = {};
            for (r in e) o[r] = t.style[r], t.style[r] = e[r];
            s = i.apply(t, n || []);
            for (r in e) t.style[r] = o[r];
            return s
        }
    }), t.getComputedStyle ? (ci = function (e) {
        return t.getComputedStyle(e, null)
    }, hi = function (t, i, n) {
        var s, r, o, a = n || ci(t),
            l = a ? a.getPropertyValue(i) || a[i] : e,
            u = t.style;
        return a && ("" !== l || le.contains(t.ownerDocument, t) || (l = le.style(t, i)), yi.test(l) && gi.test(i) && (s = u.width, r = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = a.width, u.width = s, u.minWidth = r, u.maxWidth = o)), l
    }) : Y.documentElement.currentStyle && (ci = function (t) {
        return t.currentStyle
    }, hi = function (t, i, n) {
        var s, r, o, a = n || ci(t),
            l = a ? a[i] : e,
            u = t.style;
        return null == l && u && u[i] && (l = u[i]), yi.test(l) && !fi.test(i) && (s = u.left, r = t.runtimeStyle, o = r && r.left, o && (r.left = t.currentStyle.left), u.left = "fontSize" === i ? "1em" : l, l = u.pixelLeft + "px", u.left = s, o && (r.left = o)), "" === l ? "auto" : l
    }), le.each(["height", "width"], function (t, e) {
        le.cssHooks[e] = {
            get: function (t, i, n) {
                return i ? 0 === t.offsetWidth && mi.test(le.css(t, "display")) ? le.swap(t, wi, function () {
                    return S(t, e, n)
                }) : S(t, e, n) : void 0
            },
            set: function (t, i, n) {
                var s = n && ci(t);
                return C(t, i, n ? T(t, e, n, le.support.boxSizing && "border-box" === le.css(t, "boxSizing", !1, s), s) : 0)
            }
        }
    }), le.support.opacity || (le.cssHooks.opacity = {
        get: function (t, e) {
            return pi.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function (t, e) {
            var i = t.style,
                n = t.currentStyle,
                s = le.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                r = n && n.filter || i.filter || "";
            i.zoom = 1, (e >= 1 || "" === e) && "" === le.trim(r.replace(di, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = di.test(r) ? r.replace(di, s) : r + " " + s)
        }
    }), le(function () {
        le.support.reliableMarginRight || (le.cssHooks.marginRight = {
            get: function (t, e) {
                return e ? le.swap(t, {
                    display: "inline-block"
                }, hi, [t, "marginRight"]) : void 0
            }
        }), !le.support.pixelPosition && le.fn.position && le.each(["top", "left"], function (t, e) {
            le.cssHooks[e] = {
                get: function (t, i) {
                    return i ? (i = hi(t, e), yi.test(i) ? le(t).position()[e] + "px" : i) : void 0
                }
            }
        })
    }), le.expr && le.expr.filters && (le.expr.filters.hidden = function (t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !le.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || le.css(t, "display"))
    }, le.expr.filters.visible = function (t) {
        return !le.expr.filters.hidden(t)
    }), le.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (t, e) {
        le.cssHooks[t + e] = {
            expand: function (i) {
                for (var n = 0, s = {}, r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) s[t + ki[n] + e] = r[n] || r[n - 2] || r[0];
                return s
            }
        }, gi.test(t) || (le.cssHooks[t + e].set = C)
    });
    var Ti = /%20/g,
        Si = /\[\]$/,
        Ei = /\r?\n/g,
        Pi = /^(?:submit|button|image|reset|file)$/i,
        Di = /^(?:input|select|textarea|keygen)/i;
    le.fn.extend({
        serialize: function () {
            return le.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var t = le.prop(this, "elements");
                return t ? le.makeArray(t) : this
            }).filter(function () {
                    var t = this.type;
                    return this.name && !le(this).is(":disabled") && Di.test(this.nodeName) && !Pi.test(t) && (this.checked || !ei.test(t))
                }).map(function (t, e) {
                    var i = le(this).val();
                    return null == i ? null : le.isArray(i) ? le.map(i, function (t) {
                        return {
                            name: e.name,
                            value: t.replace(Ei, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(Ei, "\r\n")
                    }
                }).get()
        }
    }), le.param = function (t, i) {
        var n, s = [],
            r = function (t, e) {
                e = le.isFunction(e) ? e() : null == e ? "" : e, s[s.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (i === e && (i = le.ajaxSettings && le.ajaxSettings.traditional), le.isArray(t) || t.jquery && !le.isPlainObject(t)) le.each(t, function () {
            r(this.name, this.value)
        });
        else
            for (n in t) D(n, t[n], i, r);
        return s.join("&").replace(Ti, "+")
    }, le.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        le.fn[e] = function (t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), le.fn.hover = function (t, e) {
        return this.mouseenter(t).mouseleave(e || t)
    };
    var Ii, Mi, Ai = le.now(),
        Ni = /\?/,
        Vi = /#.*$/,
        $i = /([?&])_=[^&]*/,
        ji = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Fi = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Oi = /^(?:GET|HEAD)$/,
        Hi = /^\/\//,
        Li = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Bi = le.fn.load,
        zi = {}, Ri = {}, Wi = "*/".concat("*");
    try {
        Mi = X.href
    } catch (qi) {
        Mi = Y.createElement("a"), Mi.href = "", Mi = Mi.href
    }
    Ii = Li.exec(Mi.toLowerCase()) || [], le.fn.load = function (t, i, n) {
        if ("string" != typeof t && Bi) return Bi.apply(this, arguments);
        var s, r, o, a = this,
            l = t.indexOf(" ");
        return l >= 0 && (s = t.slice(l, t.length), t = t.slice(0, l)), le.isFunction(i) ? (n = i, i = e) : i && "object" == typeof i && (o = "POST"), a.length > 0 && le.ajax({
            url: t,
            type: o,
            dataType: "html",
            data: i
        }).done(function (t) {
                r = arguments, a.html(s ? le("<div>").append(le.parseHTML(t)).find(s) : t)
            }).complete(n && function (t, e) {
                a.each(n, r || [t.responseText, e, t])
            }), this
    }, le.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        le.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), le.each(["get", "post"], function (t, i) {
        le[i] = function (t, n, s, r) {
            return le.isFunction(n) && (r = r || s, s = n, n = e), le.ajax({
                url: t,
                type: i,
                dataType: r,
                data: n,
                success: s
            })
        }
    }), le.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Mi,
            type: "GET",
            isLocal: Fi.test(Ii[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Wi,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": t.String,
                "text html": !0,
                "text json": le.parseJSON,
                "text xml": le.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (t, e) {
            return e ? A(A(t, le.ajaxSettings), e) : A(le.ajaxSettings, t)
        },
        ajaxPrefilter: I(zi),
        ajaxTransport: I(Ri),
        ajax: function (t, i) {
            function n(t, i, n, s) {
                var r, h, y, _, w, k = i;
                2 !== b && (b = 2, l && clearTimeout(l), c = e, a = s || "", x.readyState = t > 0 ? 4 : 0, n && (_ = N(d, x, n)), t >= 200 && 300 > t || 304 === t ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (le.lastModified[o] = w), w = x.getResponseHeader("etag"), w && (le.etag[o] = w)), 204 === t ? (r = !0, k = "nocontent") : 304 === t ? (r = !0, k = "notmodified") : (r = V(d, _), k = r.state, h = r.data, y = r.error, r = !y)) : (y = k, (t || !k) && (k = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (i || k) + "", r ? m.resolveWith(p, [h, k, x]) : m.rejectWith(p, [x, k, y]), x.statusCode(v), v = e, u && f.trigger(r ? "ajaxSuccess" : "ajaxError", [x, d, r ? h : y]), g.fireWith(p, [x, k]), u && (f.trigger("ajaxComplete", [x, d]), --le.active || le.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (i = t, t = e), i = i || {};
            var s, r, o, a, l, u, c, h, d = le.ajaxSetup({}, i),
                p = d.context || d,
                f = d.context && (p.nodeType || p.jquery) ? le(p) : le.event,
                m = le.Deferred(),
                g = le.Callbacks("once memory"),
                v = d.statusCode || {}, y = {}, _ = {}, b = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (2 === b) {
                            if (!h)
                                for (h = {}; e = ji.exec(a);) h[e[1].toLowerCase()] = e[2];
                            e = h[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function (t, e) {
                        var i = t.toLowerCase();
                        return b || (t = _[i] = _[i] || t, y[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return b || (d.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (2 > b)
                                for (e in t) v[e] = [v[e], t[e]];
                            else x.always(t[x.status]);
                        return this
                    },
                    abort: function (t) {
                        var e = t || w;
                        return c && c.abort(e), n(0, e), this
                    }
                };
            if (m.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, d.url = ((t || d.url || Mi) + "").replace(Vi, "").replace(Hi, Ii[1] + "//"), d.type = i.method || i.type || d.method || d.type, d.dataTypes = le.trim(d.dataType || "*").toLowerCase().match(ce) || [""], null == d.crossDomain && (s = Li.exec(d.url.toLowerCase()), d.crossDomain = !(!s || s[1] === Ii[1] && s[2] === Ii[2] && (s[3] || ("http:" === s[1] ? 80 : 443)) == (Ii[3] || ("http:" === Ii[1] ? 80 : 443)))), d.data && d.processData && "string" != typeof d.data && (d.data = le.param(d.data, d.traditional)), M(zi, d, i, x), 2 === b) return x;
            u = d.global, u && 0 === le.active++ && le.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Oi.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Ni.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = $i.test(o) ? o.replace($i, "$1_=" + Ai++) : o + (Ni.test(o) ? "&" : "?") + "_=" + Ai++)), d.ifModified && (le.lastModified[o] && x.setRequestHeader("If-Modified-Since", le.lastModified[o]), le.etag[o] && x.setRequestHeader("If-None-Match", le.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || i.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Wi + "; q=0.01" : "") : d.accepts["*"]);
            for (r in d.headers) x.setRequestHeader(r, d.headers[r]);
            if (d.beforeSend && (d.beforeSend.call(p, x, d) === !1 || 2 === b)) return x.abort();
            w = "abort";
            for (r in {
                success: 1,
                error: 1,
                complete: 1
            }) x[r](d[r]);
            if (c = M(Ri, d, i, x)) {
                x.readyState = 1, u && f.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (l = setTimeout(function () {
                    x.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, c.send(y, n)
                } catch (k) {
                    if (!(2 > b)) throw k;
                    n(-1, k)
                }
            } else n(-1, "No Transport");
            return x
        },
        getScript: function (t, i) {
            return le.get(t, e, i, "script")
        },
        getJSON: function (t, e, i) {
            return le.get(t, e, i, "json")
        }
    }), le.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (t) {
                return le.globalEval(t), t
            }
        }
    }), le.ajaxPrefilter("script", function (t) {
        t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), le.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var i, n = Y.head || le("head")[0] || Y.documentElement;
            return {
                send: function (e, s) {
                    i = Y.createElement("script"), i.async = !0, t.scriptCharset && (i.charset = t.scriptCharset), i.src = t.url, i.onload = i.onreadystatechange = function (t, e) {
                        (e || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, e || s(200, "success"))
                    }, n.insertBefore(i, n.firstChild)
                },
                abort: function () {
                    i && i.onload(e, !0)
                }
            }
        }
    });
    var Ui = [],
        Ki = /(=)\?(?=&|$)|\?\?/;
    le.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = Ui.pop() || le.expando + "_" + Ai++;
            return this[t] = !0, t
        }
    }), le.ajaxPrefilter("json jsonp", function (i, n, s) {
        var r, o, a, l = i.jsonp !== !1 && (Ki.test(i.url) ? "url" : "string" == typeof i.data && !(i.contentType || "").indexOf("application/x-www-form-urlencoded") && Ki.test(i.data) && "data");
        return l || "jsonp" === i.dataTypes[0] ? (r = i.jsonpCallback = le.isFunction(i.jsonpCallback) ? i.jsonpCallback() : i.jsonpCallback, l ? i[l] = i[l].replace(Ki, "$1" + r) : i.jsonp !== !1 && (i.url += (Ni.test(i.url) ? "&" : "?") + i.jsonp + "=" + r), i.converters["script json"] = function () {
            return a || le.error(r + " was not called"), a[0]
        }, i.dataTypes[0] = "json", o = t[r], t[r] = function () {
            a = arguments
        }, s.always(function () {
            t[r] = o, i[r] && (i.jsonpCallback = n.jsonpCallback, Ui.push(r)), a && le.isFunction(o) && o(a[0]), a = o = e
        }), "script") : void 0
    });
    var Yi, Xi, Gi = 0,
        Qi = t.ActiveXObject && function () {
            var t;
            for (t in Yi) Yi[t](e, !0)
        };
    le.ajaxSettings.xhr = t.ActiveXObject ? function () {
        return !this.isLocal && $() || j()
    } : $, Xi = le.ajaxSettings.xhr(), le.support.cors = !! Xi && "withCredentials" in Xi, Xi = le.support.ajax = !! Xi, Xi && le.ajaxTransport(function (i) {
        if (!i.crossDomain || le.support.cors) {
            var n;
            return {
                send: function (s, r) {
                    var o, a, l = i.xhr();
                    if (i.username ? l.open(i.type, i.url, i.async, i.username, i.password) : l.open(i.type, i.url, i.async), i.xhrFields)
                        for (a in i.xhrFields) l[a] = i.xhrFields[a];
                    i.mimeType && l.overrideMimeType && l.overrideMimeType(i.mimeType), i.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (a in s) l.setRequestHeader(a, s[a])
                    } catch (u) {}
                    l.send(i.hasContent && i.data || null), n = function (t, s) {
                        var a, u, c, h;
                        try {
                            if (n && (s || 4 === l.readyState))
                                if (n = e, o && (l.onreadystatechange = le.noop, Qi && delete Yi[o]), s) 4 !== l.readyState && l.abort();
                                else {
                                    h = {}, a = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (h.text = l.responseText);
                                    try {
                                        c = l.statusText
                                    } catch (d) {
                                        c = ""
                                    }
                                    a || !i.isLocal || i.crossDomain ? 1223 === a && (a = 204) : a = h.text ? 200 : 404
                                }
                        } catch (p) {
                            s || r(-1, p)
                        }
                        h && r(a, c, h, u)
                    }, i.async ? 4 === l.readyState ? setTimeout(n) : (o = ++Gi, Qi && (Yi || (Yi = {}, le(t).unload(Qi)), Yi[o] = n), l.onreadystatechange = n) : n()
                },
                abort: function () {
                    n && n(e, !0)
                }
            }
        }
    });
    var Ji, Zi, tn = /^(?:toggle|show|hide)$/,
        en = new RegExp("^(?:([+-])=|)(" + ue + ")([a-z%]*)$", "i"),
        nn = /queueHooks$/,
        sn = [B],
        rn = {
            "*": [
                function (t, e) {
                    var i, n, s = this.createTween(t, e),
                        r = en.exec(e),
                        o = s.cur(),
                        a = +o || 0,
                        l = 1,
                        u = 20;
                    if (r) {
                        if (i = +r[2], n = r[3] || (le.cssNumber[t] ? "" : "px"), "px" !== n && a) {
                            a = le.css(s.elem, t, !0) || i || 1;
                            do l = l || ".5", a /= l, le.style(s.elem, t, a + n); while (l !== (l = s.cur() / o) && 1 !== l && --u)
                        }
                        s.unit = n, s.start = a, s.end = r[1] ? a + (r[1] + 1) * i : i
                    }
                    return s
                }
            ]
        };
    le.Animation = le.extend(H, {
        tweener: function (t, e) {
            le.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var i, n = 0, s = t.length; s > n; n++) i = t[n], rn[i] = rn[i] || [], rn[i].unshift(e)
        },
        prefilter: function (t, e) {
            e ? sn.unshift(t) : sn.push(t)
        }
    }), le.Tween = z, z.prototype = {
        constructor: z,
        init: function (t, e, i, n, s, r) {
            this.elem = t, this.prop = i, this.easing = s || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = r || (le.cssNumber[i] ? "" : "px")
        },
        cur: function () {
            var t = z.propHooks[this.prop];
            return t && t.get ? t.get(this) : z.propHooks._default.get(this)
        },
        run: function (t) {
            var e, i = z.propHooks[this.prop];
            return this.pos = e = this.options.duration ? le.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : z.propHooks._default.set(this), this
        }
    }, z.prototype.init.prototype = z.prototype, z.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = le.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function (t) {
                le.fx.step[t.prop] ? le.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[le.cssProps[t.prop]] || le.cssHooks[t.prop]) ? le.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, z.propHooks.scrollTop = z.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, le.each(["toggle", "show", "hide"], function (t, e) {
        var i = le.fn[e];
        le.fn[e] = function (t, n, s) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(R(e, !0), t, n, s)
        }
    }), le.fn.extend({
        fadeTo: function (t, e, i, n) {
            return this.filter(x).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, n)
        },
        animate: function (t, e, i, n) {
            var s = le.isEmptyObject(t),
                r = le.speed(e, i, n),
                o = function () {
                    var e = H(this, le.extend({}, t), r);
                    o.finish = function () {
                        e.stop(!0)
                    }, (s || le._data(this, "finish")) && e.stop(!0)
                };
            return o.finish = o, s || r.queue === !1 ? this.each(o) : this.queue(r.queue, o)
        },
        stop: function (t, i, n) {
            var s = function (t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = i, i = t, t = e), i && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                var e = !0,
                    i = null != t && t + "queueHooks",
                    r = le.timers,
                    o = le._data(this);
                if (i) o[i] && o[i].stop && s(o[i]);
                else
                    for (i in o) o[i] && o[i].stop && nn.test(i) && s(o[i]);
                for (i = r.length; i--;) r[i].elem !== this || null != t && r[i].queue !== t || (r[i].anim.stop(n), e = !1, r.splice(i, 1));
                (e || !n) && le.dequeue(this, t)
            })
        },
        finish: function (t) {
            return t !== !1 && (t = t || "fx"), this.each(function () {
                var e, i = le._data(this),
                    n = i[t + "queue"],
                    s = i[t + "queueHooks"],
                    r = le.timers,
                    o = n ? n.length : 0;
                for (i.finish = !0, le.queue(this, t, []), s && s.cur && s.cur.finish && s.cur.finish.call(this), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; o > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish
            })
        }
    }), le.each({
        slideDown: R("show"),
        slideUp: R("hide"),
        slideToggle: R("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (t, e) {
        le.fn[t] = function (t, i, n) {
            return this.animate(e, t, i, n)
        }
    }), le.speed = function (t, e, i) {
        var n = t && "object" == typeof t ? le.extend({}, t) : {
            complete: i || !i && e || le.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !le.isFunction(e) && e
        };
        return n.duration = le.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in le.fx.speeds ? le.fx.speeds[n.duration] : le.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            le.isFunction(n.old) && n.old.call(this), n.queue && le.dequeue(this, n.queue)
        }, n
    }, le.easing = {
        linear: function (t) {
            return t
        },
        swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, le.timers = [], le.fx = z.prototype.init, le.fx.tick = function () {
        var t, i = le.timers,
            n = 0;
        for (Ji = le.now(); n < i.length; n++) t = i[n], t() || i[n] !== t || i.splice(n--, 1);
        i.length || le.fx.stop(), Ji = e
    }, le.fx.timer = function (t) {
        t() && le.timers.push(t) && le.fx.start()
    }, le.fx.interval = 13, le.fx.start = function () {
        Zi || (Zi = setInterval(le.fx.tick, le.fx.interval))
    }, le.fx.stop = function () {
        clearInterval(Zi), Zi = null
    }, le.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, le.fx.step = {}, le.expr && le.expr.filters && (le.expr.filters.animated = function (t) {
        return le.grep(le.timers, function (e) {
            return t === e.elem
        }).length
    }), le.fn.offset = function (t) {
        if (arguments.length) return t === e ? this : this.each(function (e) {
            le.offset.setOffset(this, t, e)
        });
        var i, n, s = {
                top: 0,
                left: 0
            }, r = this[0],
            o = r && r.ownerDocument;
        if (o) return i = o.documentElement, le.contains(i, r) ? (typeof r.getBoundingClientRect !== K && (s = r.getBoundingClientRect()), n = W(o), {
            top: s.top + (n.pageYOffset || i.scrollTop) - (i.clientTop || 0),
            left: s.left + (n.pageXOffset || i.scrollLeft) - (i.clientLeft || 0)
        }) : s
    }, le.offset = {
        setOffset: function (t, e, i) {
            var n = le.css(t, "position");
            "static" === n && (t.style.position = "relative");
            var s, r, o = le(t),
                a = o.offset(),
                l = le.css(t, "top"),
                u = le.css(t, "left"),
                c = ("absolute" === n || "fixed" === n) && le.inArray("auto", [l, u]) > -1,
                h = {}, d = {};
            c ? (d = o.position(), s = d.top, r = d.left) : (s = parseFloat(l) || 0, r = parseFloat(u) || 0), le.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (h.top = e.top - a.top + s), null != e.left && (h.left = e.left - a.left + r), "using" in e ? e.using.call(t, h) : o.css(h)
        }
    }, le.fn.extend({
        position: function () {
            if (this[0]) {
                var t, e, i = {
                    top: 0,
                    left: 0
                }, n = this[0];
                return "fixed" === le.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), le.nodeName(t[0], "html") || (i = t.offset()), i.top += le.css(t[0], "borderTopWidth", !0), i.left += le.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - le.css(n, "marginTop", !0),
                    left: e.left - i.left - le.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent || Y.documentElement; t && !le.nodeName(t, "html") && "static" === le.css(t, "position");) t = t.offsetParent;
                return t || Y.documentElement
            })
        }
    }), le.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, i) {
        var n = /Y/.test(i);
        le.fn[t] = function (s) {
            return le.access(this, function (t, s, r) {
                var o = W(t);
                return r === e ? o ? i in o ? o[i] : o.document.documentElement[s] : t[s] : (o ? o.scrollTo(n ? le(o).scrollLeft() : r, n ? r : le(o).scrollTop()) : t[s] = r, void 0)
            }, t, s, arguments.length, null)
        }
    }), le.each({
        Height: "height",
        Width: "width"
    }, function (t, i) {
        le.each({
            padding: "inner" + t,
            content: i,
            "": "outer" + t
        }, function (n, s) {
            le.fn[s] = function (s, r) {
                var o = arguments.length && (n || "boolean" != typeof s),
                    a = n || (s === !0 || r === !0 ? "margin" : "border");
                return le.access(this, function (i, n, s) {
                    var r;
                    return le.isWindow(i) ? i.document.documentElement["client" + t] : 9 === i.nodeType ? (r = i.documentElement, Math.max(i.body["scroll" + t], r["scroll" + t], i.body["offset" + t], r["offset" + t], r["client" + t])) : s === e ? le.css(i, n, a) : le.style(i, n, s, a)
                }, i, o ? s : e, o, null)
            }
        })
    }), t.jQuery = t.$ = le, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return le
    })
}(window),
    function (t, e) {
        t.rails !== e && t.error("jquery-ujs has already been loaded!");
        var i;
        t.rails = i = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
            buttonClickSelector: "button[data-remote]",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
            disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
            fileInputSelector: "input[type=file]",
            linkDisableSelector: "a[data-disable-with]",
            CSRFProtection: function (e) {
                var i = t('meta[name="csrf-token"]').attr("content");
                i && e.setRequestHeader("X-CSRF-Token", i)
            },
            fire: function (e, i, n) {
                var s = t.Event(i);
                return e.trigger(s, n), s.result !== !1
            },
            confirm: function (t) {
                return confirm(t)
            },
            ajax: function (e) {
                return t.ajax(e)
            },
            href: function (t) {
                return t.attr("href")
            },
            handleRemote: function (n) {
                var s, r, o, a, l, u, c, h;
                if (i.fire(n, "ajax:before")) {
                    if (a = n.data("cross-domain"), l = a === e ? null : a, u = n.data("with-credentials") || null, c = n.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, n.is("form")) {
                        s = n.attr("method"), r = n.attr("action"), o = n.serializeArray();
                        var d = n.data("ujs:submit-button");
                        d && (o.push(d), n.data("ujs:submit-button", null))
                    } else n.is(i.inputChangeSelector) ? (s = n.data("method"), r = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : n.is(i.buttonClickSelector) ? (s = n.data("method") || "get", r = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : (s = n.data("method"), r = i.href(n), o = n.data("params") || null);
                    h = {
                        type: s || "GET",
                        data: o,
                        dataType: c,
                        beforeSend: function (t, s) {
                            return s.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + s.accepts.script), i.fire(n, "ajax:beforeSend", [t, s])
                        },
                        success: function (t, e, i) {
                            n.trigger("ajax:success", [t, e, i])
                        },
                        complete: function (t, e) {
                            n.trigger("ajax:complete", [t, e])
                        },
                        error: function (t, e, i) {
                            n.trigger("ajax:error", [t, e, i])
                        },
                        crossDomain: l
                    }, u && (h.xhrFields = {
                        withCredentials: u
                    }), r && (h.url = r);
                    var p = i.ajax(h);
                    return n.trigger("ajax:send", p), p
                }
                return !1
            },
            handleMethod: function (n) {
                var s = i.href(n),
                    r = n.data("method"),
                    o = n.attr("target"),
                    a = t("meta[name=csrf-token]").attr("content"),
                    l = t("meta[name=csrf-param]").attr("content"),
                    u = t('<form method="post" action="' + s + '"></form>'),
                    c = '<input name="_method" value="' + r + '" type="hidden" />';
                l !== e && a !== e && (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'), o && u.attr("target", o), u.hide().append(c).appendTo("body"), u.submit()
            },
            disableFormElements: function (e) {
                e.find(i.disableSelector).each(function () {
                    var e = t(this),
                        i = e.is("button") ? "html" : "val";
                    e.data("ujs:enable-with", e[i]()), e[i](e.data("disable-with")), e.prop("disabled", !0)
                })
            },
            enableFormElements: function (e) {
                e.find(i.enableSelector).each(function () {
                    var e = t(this),
                        i = e.is("button") ? "html" : "val";
                    e.data("ujs:enable-with") && e[i](e.data("ujs:enable-with")), e.prop("disabled", !1)
                })
            },
            allowAction: function (t) {
                var e, n = t.data("confirm"),
                    s = !1;
                return n ? (i.fire(t, "confirm") && (s = i.confirm(n), e = i.fire(t, "confirm:complete", [s])), s && e) : !0
            },
            blankInputs: function (e, i, n) {
                var s, r, o = t(),
                    a = i || "input,textarea",
                    l = e.find(a);
                return l.each(function () {
                    if (s = t(this), r = s.is("input[type=checkbox],input[type=radio]") ? s.is(":checked") : s.val(), !r == !n) {
                        if (s.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + s.attr("name") + '"]').length) return !0;
                        o = o.add(s)
                    }
                }), o.length ? o : !1
            },
            nonBlankInputs: function (t, e) {
                return i.blankInputs(t, e, !0)
            },
            stopEverything: function (e) {
                return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
            },
            disableElement: function (t) {
                t.data("ujs:enable-with", t.html()), t.html(t.data("disable-with")), t.bind("click.railsDisable", function (t) {
                    return i.stopEverything(t)
                })
            },
            enableElement: function (t) {
                t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
            }
        }, i.fire(t(document), "rails:attachBindings") && (t.ajaxPrefilter(function (t, e, n) {
            t.crossDomain || i.CSRFProtection(n)
        }), t(document).delegate(i.linkDisableSelector, "ajax:complete", function () {
            i.enableElement(t(this))
        }), t(document).delegate(i.linkClickSelector, "click.rails", function (n) {
            var s = t(this),
                r = s.data("method"),
                o = s.data("params");
            if (!i.allowAction(s)) return i.stopEverything(n);
            if (s.is(i.linkDisableSelector) && i.disableElement(s), s.data("remote") !== e) {
                if (!(!n.metaKey && !n.ctrlKey || r && "GET" !== r || o)) return !0;
                var a = i.handleRemote(s);
                return a === !1 ? i.enableElement(s) : a.error(function () {
                    i.enableElement(s)
                }), !1
            }
            return s.data("method") ? (i.handleMethod(s), !1) : void 0
        }), t(document).delegate(i.buttonClickSelector, "click.rails", function (e) {
            var n = t(this);
            return i.allowAction(n) ? (i.handleRemote(n), !1) : i.stopEverything(e)
        }), t(document).delegate(i.inputChangeSelector, "change.rails", function (e) {
            var n = t(this);
            return i.allowAction(n) ? (i.handleRemote(n), !1) : i.stopEverything(e)
        }), t(document).delegate(i.formSubmitSelector, "submit.rails", function (n) {
            var s = t(this),
                r = s.data("remote") !== e,
                o = i.blankInputs(s, i.requiredInputSelector),
                a = i.nonBlankInputs(s, i.fileInputSelector);
            if (!i.allowAction(s)) return i.stopEverything(n);
            if (o && s.attr("novalidate") == e && i.fire(s, "ajax:aborted:required", [o])) return i.stopEverything(n);
            if (r) {
                if (a) {
                    setTimeout(function () {
                        i.disableFormElements(s)
                    }, 13);
                    var l = i.fire(s, "ajax:aborted:file", [a]);
                    return l || setTimeout(function () {
                        i.enableFormElements(s)
                    }, 13), l
                }
                return i.handleRemote(s), !1
            }
            setTimeout(function () {
                i.disableFormElements(s)
            }, 13)
        }), t(document).delegate(i.formInputClickSelector, "click.rails", function (e) {
            var n = t(this);
            if (!i.allowAction(n)) return i.stopEverything(e);
            var s = n.attr("name"),
                r = s ? {
                    name: s,
                    value: n.val()
                } : null;
            n.closest("form").data("ujs:submit-button", r)
        }), t(document).delegate(i.formSubmitSelector, "ajax:beforeSend.rails", function (e) {
            this == e.target && i.disableFormElements(t(this))
        }), t(document).delegate(i.formSubmitSelector, "ajax:complete.rails", function (e) {
            this == e.target && i.enableFormElements(t(this))
        }), t(function () {
            var e = t("meta[name=csrf-token]").attr("content"),
                i = t("meta[name=csrf-param]").attr("content");
            t('form input[name="' + i + '"]').val(e)
        }))
    }(jQuery),
    function (t, e) {
        function i(e, i) {
            var s, r, o, a = e.nodeName.toLowerCase();
            return "area" === a ? (s = e.parentNode, r = s.name, e.href && r && "map" === s.nodeName.toLowerCase() ? (o = t("img[usemap=#" + r + "]")[0], !! o && n(o)) : !1) : (/input|select|textarea|button|object/.test(a) ? !e.disabled : "a" === a ? e.href || i : i) && n(e)
        }

        function n(e) {
            return t.expr.filters.visible(e) && !t(e).parents().andSelf().filter(function () {
                return "hidden" === t.css(this, "visibility")
            }).length
        }
        var s = 0,
            r = /^ui-id-\d+$/;
        t.ui = t.ui || {}, t.ui.version || (t.extend(t.ui, {
            version: "1.9.2",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), t.fn.extend({
            _focus: t.fn.focus,
            focus: function (e, i) {
                return "number" == typeof e ? this.each(function () {
                    var n = this;
                    setTimeout(function () {
                        t(n).focus(), i && i.call(n)
                    }, e)
                }) : this._focus.apply(this, arguments)
            },
            scrollParent: function () {
                var e;
                return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                    return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
                }).eq(0) : this.parents().filter(function () {
                    return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
                }).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e
            },
            zIndex: function (i) {
                if (i !== e) return this.css("zIndex", i);
                if (this.length)
                    for (var n, s, r = t(this[0]); r.length && r[0] !== document;) {
                        if (n = r.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (s = parseInt(r.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                        r = r.parent()
                    }
                return 0
            },
            uniqueId: function () {
                return this.each(function () {
                    this.id || (this.id = "ui-id-" + ++s)
                })
            },
            removeUniqueId: function () {
                return this.each(function () {
                    r.test(this.id) && t(this).removeAttr("id")
                })
            }
        }), t.extend(t.expr[":"], {
            data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
                return function (i) {
                    return !!t.data(i, e)
                }
            }) : function (e, i, n) {
                return !!t.data(e, n[3])
            },
            focusable: function (e) {
                return i(e, !isNaN(t.attr(e, "tabindex")))
            },
            tabbable: function (e) {
                var n = t.attr(e, "tabindex"),
                    s = isNaN(n);
                return (s || n >= 0) && i(e, !s)
            }
        }), t(function () {
            var e = document.body,
                i = e.appendChild(i = document.createElement("div"));
            i.offsetHeight, t.extend(i.style, {
                minHeight: "100px",
                height: "auto",
                padding: 0,
                borderWidth: 0
            }), t.support.minHeight = 100 === i.offsetHeight, t.support.selectstart = "onselectstart" in i, e.removeChild(i).style.display = "none"
        }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function (i, n) {
            function s(e, i, n, s) {
                return t.each(r, function () {
                    i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), s && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
                }), i
            }
            var r = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
                o = n.toLowerCase(),
                a = {
                    innerWidth: t.fn.innerWidth,
                    innerHeight: t.fn.innerHeight,
                    outerWidth: t.fn.outerWidth,
                    outerHeight: t.fn.outerHeight
                };
            t.fn["inner" + n] = function (i) {
                return i === e ? a["inner" + n].call(this) : this.each(function () {
                    t(this).css(o, s(this, i) + "px")
                })
            }, t.fn["outer" + n] = function (e, i) {
                return "number" != typeof e ? a["outer" + n].call(this, e) : this.each(function () {
                    t(this).css(o, s(this, e, !0, i) + "px")
                })
            }
        }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function (e) {
            return function (i) {
                return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
            }
        }(t.fn.removeData)), function () {
            var e = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
            t.ui.ie = e.length ? !0 : !1, t.ui.ie6 = 6 === parseFloat(e[1], 10)
        }(), t.fn.extend({
            disableSelection: function () {
                return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (t) {
                    t.preventDefault()
                })
            },
            enableSelection: function () {
                return this.unbind(".ui-disableSelection")
            }
        }), t.extend(t.ui, {
            plugin: {
                add: function (e, i, n) {
                    var s, r = t.ui[e].prototype;
                    for (s in n) r.plugins[s] = r.plugins[s] || [], r.plugins[s].push([i, n[s]])
                },
                call: function (t, e, i) {
                    var n, s = t.plugins[e];
                    if (s && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)
                        for (n = 0; n < s.length; n++) t.options[s[n][0]] && s[n][1].apply(t.element, i)
                }
            },
            contains: t.contains,
            hasScroll: function (e, i) {
                if ("hidden" === t(e).css("overflow")) return !1;
                var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                    s = !1;
                return e[n] > 0 ? !0 : (e[n] = 1, s = e[n] > 0, e[n] = 0, s)
            },
            isOverAxis: function (t, e, i) {
                return t > e && e + i > t
            },
            isOver: function (e, i, n, s, r, o) {
                return t.ui.isOverAxis(e, n, r) && t.ui.isOverAxis(i, s, o)
            }
        }))
    }(jQuery),
    function (t, e) {
        var i = 0,
            n = Array.prototype.slice,
            s = t.cleanData;
        t.cleanData = function (e) {
            for (var i, n = 0; null != (i = e[n]); n++) try {
                t(i).triggerHandler("remove")
            } catch (r) {}
            s(e)
        }, t.widget = function (e, i, n) {
            var s, r, o, a, l = e.split(".")[0];
            e = e.split(".")[1], s = l + "-" + e, n || (n = i, i = t.Widget), t.expr[":"][s.toLowerCase()] = function (e) {
                return !!t.data(e, s)
            }, t[l] = t[l] || {}, r = t[l][e], o = t[l][e] = function (t, e) {
                return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new o(t, e)
            }, t.extend(o, r, {
                version: n.version,
                _proto: t.extend({}, n),
                _childConstructors: []
            }), a = new i, a.options = t.widget.extend({}, a.options), t.each(n, function (e, s) {
                t.isFunction(s) && (n[e] = function () {
                    var t = function () {
                        return i.prototype[e].apply(this, arguments)
                    }, n = function (t) {
                        return i.prototype[e].apply(this, t)
                    };
                    return function () {
                        var e, i = this._super,
                            r = this._superApply;
                        return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = r, e
                    }
                }())
            }), o.prototype = t.widget.extend(a, {
                widgetEventPrefix: r ? a.widgetEventPrefix : e
            }, n, {
                constructor: o,
                namespace: l,
                widgetName: e,
                widgetBaseClass: s,
                widgetFullName: s
            }), r ? (t.each(r._childConstructors, function (e, i) {
                var n = i.prototype;
                t.widget(n.namespace + "." + n.widgetName, o, i._proto)
            }), delete r._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o)
        }, t.widget.extend = function (i) {
            for (var s, r, o = n.call(arguments, 1), a = 0, l = o.length; l > a; a++)
                for (s in o[a]) r = o[a][s], o[a].hasOwnProperty(s) && r !== e && (i[s] = t.isPlainObject(r) ? t.isPlainObject(i[s]) ? t.widget.extend({}, i[s], r) : t.widget.extend({}, r) : r);
            return i
        }, t.widget.bridge = function (i, s) {
            var r = s.prototype.widgetFullName || i;
            t.fn[i] = function (o) {
                var a = "string" == typeof o,
                    l = n.call(arguments, 1),
                    u = this;
                return o = !a && l.length ? t.widget.extend.apply(null, [o].concat(l)) : o, a ? this.each(function () {
                    var n, s = t.data(this, r);
                    return s ? t.isFunction(s[o]) && "_" !== o.charAt(0) ? (n = s[o].apply(s, l), n !== s && n !== e ? (u = n && n.jquery ? u.pushStack(n.get()) : n, !1) : void 0) : t.error("no such method '" + o + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + o + "'")
                }) : this.each(function () {
                    var e = t.data(this, r);
                    e ? e.option(o || {})._init() : t.data(this, r, new s(o, this))
                }), u
            }
        }, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function (e, n) {
                n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), n !== this && (t.data(n, this.widgetName, this), t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function (t) {
                        t.target === n && this.destroy()
                    }
                }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: t.noop,
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function () {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: t.noop,
            widget: function () {
                return this.element
            },
            option: function (i, n) {
                var s, r, o, a = i;
                if (0 === arguments.length) return t.widget.extend({}, this.options);
                if ("string" == typeof i)
                    if (a = {}, s = i.split("."), i = s.shift(), s.length) {
                        for (r = a[i] = t.widget.extend({}, this.options[i]), o = 0; o < s.length - 1; o++) r[s[o]] = r[s[o]] || {}, r = r[s[o]];
                        if (i = s.pop(), n === e) return r[i] === e ? null : r[i];
                        r[i] = n
                    } else {
                        if (n === e) return this.options[i] === e ? null : this.options[i];
                        a[i] = n
                    }
                return this._setOptions(a), this
            },
            _setOptions: function (t) {
                var e;
                for (e in t) this._setOption(e, t[e]);
                return this
            },
            _setOption: function (t, e) {
                return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !! e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
            },
            enable: function () {
                return this._setOption("disabled", !1)
            },
            disable: function () {
                return this._setOption("disabled", !0)
            },
            _on: function (e, i, n) {
                var s, r = this;
                "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), t.each(n, function (n, o) {
                    function a() {
                        return e || r.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? r[o] : o).apply(r, arguments) : void 0
                    }
                    "string" != typeof o && (a.guid = o.guid = o.guid || a.guid || t.guid++);
                    var l = n.match(/^(\w+)\s*(.*)$/),
                        u = l[1] + r.eventNamespace,
                        c = l[2];
                    c ? s.delegate(c, u, a) : i.bind(u, a)
                })
            },
            _off: function (t, e) {
                e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
            },
            _delay: function (t, e) {
                function i() {
                    return ("string" == typeof t ? n[t] : t).apply(n, arguments)
                }
                var n = this;
                return setTimeout(i, e || 0)
            },
            _hoverable: function (e) {
                this.hoverable = this.hoverable.add(e), this._on(e, {
                    mouseenter: function (e) {
                        t(e.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function (e) {
                        t(e.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function (e) {
                this.focusable = this.focusable.add(e), this._on(e, {
                    focusin: function (e) {
                        t(e.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function (e) {
                        t(e.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function (e, i, n) {
                var s, r, o = this.options[e];
                if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], r = i.originalEvent)
                    for (s in r) s in i || (i[s] = r[s]);
                return this.element.trigger(i, n), !(t.isFunction(o) && o.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
            }
        }, t.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function (e, i) {
            t.Widget.prototype["_" + e] = function (n, s, r) {
                "string" == typeof s && (s = {
                    effect: s
                });
                var o, a = s ? s === !0 || "number" == typeof s ? i : s.effect || i : e;
                s = s || {}, "number" == typeof s && (s = {
                    duration: s
                }), o = !t.isEmptyObject(s), s.complete = r, s.delay && n.delay(s.delay), o && t.effects && (t.effects.effect[a] || t.uiBackCompat !== !1 && t.effects[a]) ? n[e](s) : a !== e && n[a] ? n[a](s.duration, s.easing, r) : n.queue(function (i) {
                    t(this)[e](), r && r.call(n[0]), i()
                })
            }
        }), t.uiBackCompat !== !1 && (t.Widget.prototype._getCreateOptions = function () {
            return t.metadata && t.metadata.get(this.element[0])[this.widgetName]
        })
    }(jQuery),
    function (t) {
        var e = !1;
        t(document).mouseup(function () {
            e = !1
        }), t.widget("ui.mouse", {
            version: "1.9.2",
            options: {
                cancel: "input,textarea,button,select,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function () {
                var e = this;
                this.element.bind("mousedown." + this.widgetName, function (t) {
                    return e._mouseDown(t)
                }).bind("click." + this.widgetName, function (i) {
                        return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
                    }), this.started = !1
            },
            _mouseDestroy: function () {
                this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function (i) {
                if (!e) {
                    this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                    var n = this,
                        s = 1 === i.which,
                        r = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
                    return s && !r && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                        n.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
                        return n._mouseMove(t)
                    }, this._mouseUpDelegate = function (t) {
                        return n._mouseUp(t)
                    }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0
                }
            },
            _mouseMove: function (e) {
                return !t.ui.ie || document.documentMode >= 9 || e.button ? this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted) : this._mouseUp(e)
            },
            _mouseUp: function (e) {
                return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
            },
            _mouseDistanceMet: function (t) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function () {
                return this.mouseDelayMet
            },
            _mouseStart: function () {},
            _mouseDrag: function () {},
            _mouseStop: function () {},
            _mouseCapture: function () {
                return !0
            }
        })
    }(jQuery),
    function (t) {
        t.widget("ui.draggable", t.ui.mouse, {
            version: "1.9.2",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1
            },
            _create: function () {
                "original" != this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
            },
            _destroy: function () {
                this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
            },
            _mouseCapture: function (e) {
                var i = this.options;
                return this.helper || i.disabled || t(e.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(e), this.handle ? (t(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function () {
                    t('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                        width: this.offsetWidth + "px",
                        height: this.offsetHeight + "px",
                        position: "absolute",
                        opacity: "0.001",
                        zIndex: 1e3
                    }).css(t(this).offset()).appendTo("body")
                }), !0) : !1)
            },
            _mouseStart: function (e) {
                var i = this.options;
                return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, t.extend(this.offset, {
                    click: {
                        left: e.pageX - this.offset.left,
                        top: e.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), i.containment && this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
            },
            _mouseDrag: function (e, i) {
                if (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                    var n = this._uiHash();
                    if (this._trigger("drag", e, n) === !1) return this._mouseUp({}), !1;
                    this.position = n.position
                }
                return this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
            },
            _mouseStop: function (e) {
                var i = !1;
                t.ui.ddmanager && !this.options.dropBehaviour && (i = t.ui.ddmanager.drop(this, e)), this.dropped && (i = this.dropped, this.dropped = !1);
                for (var n = this.element[0], s = !1; n && (n = n.parentNode);) n == document && (s = !0);
                if (!s && "original" === this.options.helper) return !1;
                if ("invalid" == this.options.revert && !i || "valid" == this.options.revert && i || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, i)) {
                    var r = this;
                    t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                        r._trigger("stop", e) !== !1 && r._clear()
                    })
                } else this._trigger("stop", e) !== !1 && this._clear();
                return !1
            },
            _mouseUp: function (e) {
                return t("div.ui-draggable-iframeFix").each(function () {
                    this.parentNode.removeChild(this)
                }), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), t.ui.mouse.prototype._mouseUp.call(this, e)
            },
            cancel: function () {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
            },
            _getHandle: function (e) {
                var i = this.options.handle && t(this.options.handle, this.element).length ? !1 : !0;
                return t(this.options.handle, this.element).find("*").andSelf().each(function () {
                    this == e.target && (i = !0)
                }), i
            },
            _createHelper: function (e) {
                var i = this.options,
                    n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" == i.helper ? this.element.clone().removeAttr("id") : this.element;
                return n.parents("body").length || n.appendTo("parent" == i.appendTo ? this.element[0].parentNode : i.appendTo), n[0] == this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
            },
            _adjustOffsetFromHelper: function (e) {
                "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                    left: +e[0],
                    top: +e[1] || 0
                }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
            },
            _getParentOffset: function () {
                this.offsetParent = this.helper.offsetParent();
                var e = this.offsetParent.offset();
                return "absolute" == this.cssPosition && this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                    top: 0,
                    left: 0
                }), {
                    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function () {
                if ("relative" == this.cssPosition) {
                    var t = this.element.position();
                    return {
                        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function () {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function () {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function () {
                var e = this.options;
                if ("parent" == e.containment && (e.containment = this.helper[0].parentNode), ("document" == e.containment || "window" == e.containment) && (this.containment = ["document" == e.containment ? 0 : t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" == e.containment ? 0 : t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" == e.containment ? 0 : t(window).scrollLeft()) + t("document" == e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" == e.containment ? 0 : t(window).scrollTop()) + (t("document" == e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(e.containment) || e.containment.constructor == Array) e.containment.constructor == Array && (this.containment = e.containment);
                else {
                    var i = t(e.containment),
                        n = i[0];
                    if (!n) return;
                    i.offset();
                    var s = "hidden" != t(n).css("overflow");
                    this.containment = [(parseInt(t(n).css("borderLeftWidth"), 10) || 0) + (parseInt(t(n).css("paddingLeft"), 10) || 0), (parseInt(t(n).css("borderTopWidth"), 10) || 0) + (parseInt(t(n).css("paddingTop"), 10) || 0), (s ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(t(n).css("borderLeftWidth"), 10) || 0) - (parseInt(t(n).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (s ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(t(n).css("borderTopWidth"), 10) || 0) - (parseInt(t(n).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i
                }
            },
            _convertPositionTo: function (e, i) {
                i || (i = this.position);
                var n = "absolute" == e ? 1 : -1,
                    s = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent),
                    r = /(html|body)/i.test(s[0].tagName);
                return {
                    top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : r ? 0 : s.scrollTop()) * n,
                    left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : r ? 0 : s.scrollLeft()) * n
                }
            },
            _generatePosition: function (e) {
                var i = this.options,
                    n = "absolute" != this.cssPosition || this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    s = /(html|body)/i.test(n[0].tagName),
                    r = e.pageX,
                    o = e.pageY;
                if (this.originalPosition) {
                    var a;
                    if (this.containment) {
                        if (this.relative_container) {
                            var l = this.relative_container.offset();
                            a = [this.containment[0] + l.left, this.containment[1] + l.top, this.containment[2] + l.left, this.containment[3] + l.top]
                        } else a = this.containment;
                        e.pageX - this.offset.click.left < a[0] && (r = a[0] + this.offset.click.left), e.pageY - this.offset.click.top < a[1] && (o = a[1] + this.offset.click.top), e.pageX - this.offset.click.left > a[2] && (r = a[2] + this.offset.click.left), e.pageY - this.offset.click.top > a[3] && (o = a[3] + this.offset.click.top)
                    }
                    if (i.grid) {
                        var u = i.grid[1] ? this.originalPageY + Math.round((o - this.originalPageY) / i.grid[1]) * i.grid[1] : this.originalPageY;
                        o = a ? u - this.offset.click.top < a[1] || u - this.offset.click.top > a[3] ? u - this.offset.click.top < a[1] ? u + i.grid[1] : u - i.grid[1] : u : u;
                        var c = i.grid[0] ? this.originalPageX + Math.round((r - this.originalPageX) / i.grid[0]) * i.grid[0] : this.originalPageX;
                        r = a ? c - this.offset.click.left < a[0] || c - this.offset.click.left > a[2] ? c - this.offset.click.left < a[0] ? c + i.grid[0] : c - i.grid[0] : c : c
                    }
                }
                return {
                    top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : n.scrollTop()),
                    left: r - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : n.scrollLeft())
                }
            },
            _clear: function () {
                this.helper.removeClass("ui-draggable-dragging"), this.helper[0] == this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
            },
            _trigger: function (e, i, n) {
                return n = n || this._uiHash(), t.ui.plugin.call(this, e, [i, n]), "drag" == e && (this.positionAbs = this._convertPositionTo("absolute")), t.Widget.prototype._trigger.call(this, e, i, n)
            },
            plugins: {},
            _uiHash: function () {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        }), t.ui.plugin.add("draggable", "connectToSortable", {
            start: function (e, i) {
                var n = t(this).data("draggable"),
                    s = n.options,
                    r = t.extend({}, i, {
                        item: n.element
                    });
                n.sortables = [], t(s.connectToSortable).each(function () {
                    var i = t.data(this, "sortable");
                    i && !i.options.disabled && (n.sortables.push({
                        instance: i,
                        shouldRevert: i.options.revert
                    }), i.refreshPositions(), i._trigger("activate", e, r))
                })
            },
            stop: function (e, i) {
                var n = t(this).data("draggable"),
                    s = t.extend({}, i, {
                        item: n.element
                    });
                t.each(n.sortables, function () {
                    this.instance.isOver ? (this.instance.isOver = 0, n.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" == n.options.helper && this.instance.currentItem.css({
                        top: "auto",
                        left: "auto"
                    })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, s))
                })
            },
            drag: function (e, i) {
                var n = t(this).data("draggable"),
                    s = this;
                t.each(n.sortables, function () {
                    var r = !1,
                        o = this;
                    this.instance.positionAbs = n.positionAbs, this.instance.helperProportions = n.helperProportions, this.instance.offset.click = n.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (r = !0, t.each(n.sortables, function () {
                        return this.instance.positionAbs = n.positionAbs, this.instance.helperProportions = n.helperProportions, this.instance.offset.click = n.offset.click, this != o && this.instance._intersectsWith(this.instance.containerCache) && t.ui.contains(o.instance.element[0], this.instance.element[0]) && (r = !1), r
                    })), r ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(s).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                        return i.helper[0]
                    }, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = n.offset.click.top, this.instance.offset.click.left = n.offset.click.left, this.instance.offset.parent.left -= n.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= n.offset.parent.top - this.instance.offset.parent.top, n._trigger("toSortable", e), n.dropped = this.instance.element, n.currentItem = n.element, this.instance.fromOutside = n), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), n._trigger("fromSortable", e), n.dropped = !1)
                })
            }
        }), t.ui.plugin.add("draggable", "cursor", {
            start: function () {
                var e = t("body"),
                    i = t(this).data("draggable").options;
                e.css("cursor") && (i._cursor = e.css("cursor")), e.css("cursor", i.cursor)
            },
            stop: function () {
                var e = t(this).data("draggable").options;
                e._cursor && t("body").css("cursor", e._cursor)
            }
        }), t.ui.plugin.add("draggable", "opacity", {
            start: function (e, i) {
                var n = t(i.helper),
                    s = t(this).data("draggable").options;
                n.css("opacity") && (s._opacity = n.css("opacity")), n.css("opacity", s.opacity)
            },
            stop: function (e, i) {
                var n = t(this).data("draggable").options;
                n._opacity && t(i.helper).css("opacity", n._opacity)
            }
        }), t.ui.plugin.add("draggable", "scroll", {
            start: function () {
                var e = t(this).data("draggable");
                e.scrollParent[0] != document && "HTML" != e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
            },
            drag: function (e) {
                var i = t(this).data("draggable"),
                    n = i.options,
                    s = !1;
                i.scrollParent[0] != document && "HTML" != i.scrollParent[0].tagName ? (n.axis && "x" == n.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < n.scrollSensitivity ? i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop + n.scrollSpeed : e.pageY - i.overflowOffset.top < n.scrollSensitivity && (i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop - n.scrollSpeed)), n.axis && "y" == n.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < n.scrollSensitivity ? i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft + n.scrollSpeed : e.pageX - i.overflowOffset.left < n.scrollSensitivity && (i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft - n.scrollSpeed))) : (n.axis && "x" == n.axis || (e.pageY - t(document).scrollTop() < n.scrollSensitivity ? s = t(document).scrollTop(t(document).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < n.scrollSensitivity && (s = t(document).scrollTop(t(document).scrollTop() + n.scrollSpeed))), n.axis && "y" == n.axis || (e.pageX - t(document).scrollLeft() < n.scrollSensitivity ? s = t(document).scrollLeft(t(document).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < n.scrollSensitivity && (s = t(document).scrollLeft(t(document).scrollLeft() + n.scrollSpeed)))), s !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e)
            }
        }), t.ui.plugin.add("draggable", "snap", {
            start: function () {
                var e = t(this).data("draggable"),
                    i = e.options;
                e.snapElements = [], t(i.snap.constructor != String ? i.snap.items || ":data(draggable)" : i.snap).each(function () {
                    var i = t(this),
                        n = i.offset();
                    this != e.element[0] && e.snapElements.push({
                        item: this,
                        width: i.outerWidth(),
                        height: i.outerHeight(),
                        top: n.top,
                        left: n.left
                    })
                })
            },
            drag: function (e, i) {
                for (var n = t(this).data("draggable"), s = n.options, r = s.snapTolerance, o = i.offset.left, a = o + n.helperProportions.width, l = i.offset.top, u = l + n.helperProportions.height, c = n.snapElements.length - 1; c >= 0; c--) {
                    var h = n.snapElements[c].left,
                        d = h + n.snapElements[c].width,
                        p = n.snapElements[c].top,
                        f = p + n.snapElements[c].height;
                    if (o > h - r && d + r > o && l > p - r && f + r > l || o > h - r && d + r > o && u > p - r && f + r > u || a > h - r && d + r > a && l > p - r && f + r > l || a > h - r && d + r > a && u > p - r && f + r > u) {
                        if ("inner" != s.snapMode) {
                            var m = Math.abs(p - u) <= r,
                                g = Math.abs(f - l) <= r,
                                v = Math.abs(h - a) <= r,
                                y = Math.abs(d - o) <= r;
                            m && (i.position.top = n._convertPositionTo("relative", {
                                top: p - n.helperProportions.height,
                                left: 0
                            }).top - n.margins.top), g && (i.position.top = n._convertPositionTo("relative", {
                                top: f,
                                left: 0
                            }).top - n.margins.top), v && (i.position.left = n._convertPositionTo("relative", {
                                top: 0,
                                left: h - n.helperProportions.width
                            }).left - n.margins.left), y && (i.position.left = n._convertPositionTo("relative", {
                                top: 0,
                                left: d
                            }).left - n.margins.left)
                        }
                        var _ = m || g || v || y;
                        if ("outer" != s.snapMode) {
                            var m = Math.abs(p - l) <= r,
                                g = Math.abs(f - u) <= r,
                                v = Math.abs(h - o) <= r,
                                y = Math.abs(d - a) <= r;
                            m && (i.position.top = n._convertPositionTo("relative", {
                                top: p,
                                left: 0
                            }).top - n.margins.top), g && (i.position.top = n._convertPositionTo("relative", {
                                top: f - n.helperProportions.height,
                                left: 0
                            }).top - n.margins.top), v && (i.position.left = n._convertPositionTo("relative", {
                                top: 0,
                                left: h
                            }).left - n.margins.left), y && (i.position.left = n._convertPositionTo("relative", {
                                top: 0,
                                left: d - n.helperProportions.width
                            }).left - n.margins.left)
                        }!n.snapElements[c].snapping && (m || g || v || y || _) && n.options.snap.snap && n.options.snap.snap.call(n.element, e, t.extend(n._uiHash(), {
                            snapItem: n.snapElements[c].item
                        })), n.snapElements[c].snapping = m || g || v || y || _
                    } else n.snapElements[c].snapping && n.options.snap.release && n.options.snap.release.call(n.element, e, t.extend(n._uiHash(), {
                        snapItem: n.snapElements[c].item
                    })), n.snapElements[c].snapping = !1
                }
            }
        }), t.ui.plugin.add("draggable", "stack", {
            start: function () {
                var e = t(this).data("draggable").options,
                    i = t.makeArray(t(e.stack)).sort(function (e, i) {
                        return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                    });
                if (i.length) {
                    var n = parseInt(i[0].style.zIndex) || 0;
                    t(i).each(function (t) {
                        this.style.zIndex = n + t
                    }), this[0].style.zIndex = n + i.length
                }
            }
        }), t.ui.plugin.add("draggable", "zIndex", {
            start: function (e, i) {
                var n = t(i.helper),
                    s = t(this).data("draggable").options;
                n.css("zIndex") && (s._zIndex = n.css("zIndex")), n.css("zIndex", s.zIndex)
            },
            stop: function (e, i) {
                var n = t(this).data("draggable").options;
                n._zIndex && t(i.helper).css("zIndex", n._zIndex)
            }
        })
    }(jQuery),
    function (t) {
        t.widget("ui.droppable", {
            version: "1.9.2",
            widgetEventPrefix: "drop",
            options: {
                accept: "*",
                activeClass: !1,
                addClasses: !0,
                greedy: !1,
                hoverClass: !1,
                scope: "default",
                tolerance: "intersect"
            },
            _create: function () {
                var e = this.options,
                    i = e.accept;
                this.isover = 0, this.isout = 1, this.accept = t.isFunction(i) ? i : function (t) {
                    return t.is(i)
                }, this.proportions = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }, t.ui.ddmanager.droppables[e.scope] = t.ui.ddmanager.droppables[e.scope] || [], t.ui.ddmanager.droppables[e.scope].push(this), e.addClasses && this.element.addClass("ui-droppable")
            },
            _destroy: function () {
                for (var e = t.ui.ddmanager.droppables[this.options.scope], i = 0; i < e.length; i++) e[i] == this && e.splice(i, 1);
                this.element.removeClass("ui-droppable ui-droppable-disabled")
            },
            _setOption: function (e, i) {
                "accept" == e && (this.accept = t.isFunction(i) ? i : function (t) {
                    return t.is(i)
                }), t.Widget.prototype._setOption.apply(this, arguments)
            },
            _activate: function (e) {
                var i = t.ui.ddmanager.current;
                this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", e, this.ui(i))
            },
            _deactivate: function (e) {
                var i = t.ui.ddmanager.current;
                this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", e, this.ui(i))
            },
            _over: function (e) {
                var i = t.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
            },
            _out: function (e) {
                var i = t.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
            },
            _drop: function (e, i) {
                var n = i || t.ui.ddmanager.current;
                if (!n || (n.currentItem || n.element)[0] == this.element[0]) return !1;
                var s = !1;
                return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function () {
                    var e = t.data(this, "droppable");
                    return e.options.greedy && !e.options.disabled && e.options.scope == n.options.scope && e.accept.call(e.element[0], n.currentItem || n.element) && t.ui.intersect(n, t.extend(e, {
                        offset: e.element.offset()
                    }), e.options.tolerance) ? (s = !0, !1) : void 0
                }), s ? !1 : this.accept.call(this.element[0], n.currentItem || n.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(n)), this.element) : !1
            },
            ui: function (t) {
                return {
                    draggable: t.currentItem || t.element,
                    helper: t.helper,
                    position: t.position,
                    offset: t.positionAbs
                }
            }
        }), t.ui.intersect = function (e, i, n) {
            if (!i.offset) return !1;
            var s = (e.positionAbs || e.position.absolute).left,
                r = s + e.helperProportions.width,
                o = (e.positionAbs || e.position.absolute).top,
                a = o + e.helperProportions.height,
                l = i.offset.left,
                u = l + i.proportions.width,
                c = i.offset.top,
                h = c + i.proportions.height;
            switch (n) {
                case "fit":
                    return s >= l && u >= r && o >= c && h >= a;
                case "intersect":
                    return l < s + e.helperProportions.width / 2 && r - e.helperProportions.width / 2 < u && c < o + e.helperProportions.height / 2 && a - e.helperProportions.height / 2 < h;
                case "pointer":
                    var d = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left,
                        p = (e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top,
                        f = t.ui.isOver(p, d, c, l, i.proportions.height, i.proportions.width);
                    return f;
                case "touch":
                    return (o >= c && h >= o || a >= c && h >= a || c > o && a > h) && (s >= l && u >= s || r >= l && u >= r || l > s && r > u);
                default:
                    return !1
            }
        }, t.ui.ddmanager = {
            current: null,
            droppables: {
                "default": []
            },
            prepareOffsets: function (e, i) {
                var n = t.ui.ddmanager.droppables[e.options.scope] || [],
                    s = i ? i.type : null,
                    r = (e.currentItem || e.element).find(":data(droppable)").andSelf();
                t: for (var o = 0; o < n.length; o++)
                    if (!(n[o].options.disabled || e && !n[o].accept.call(n[o].element[0], e.currentItem || e.element))) {
                        for (var a = 0; a < r.length; a++)
                            if (r[a] == n[o].element[0]) {
                                n[o].proportions.height = 0;
                                continue t
                            }
                        n[o].visible = "none" != n[o].element.css("display"), n[o].visible && ("mousedown" == s && n[o]._activate.call(n[o], i), n[o].offset = n[o].element.offset(), n[o].proportions = {
                            width: n[o].element[0].offsetWidth,
                            height: n[o].element[0].offsetHeight
                        })
                    }
            },
            drop: function (e, i) {
                var n = !1;
                return t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
                    this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, i)))
                }), n
            },
            dragStart: function (e, i) {
                e.element.parentsUntil("body").bind("scroll.droppable", function () {
                    e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
                })
            },
            drag: function (e, i) {
                e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var n = t.ui.intersect(e, this, this.options.tolerance),
                            s = n || 1 != this.isover ? n && 0 == this.isover ? "isover" : null : "isout";
                        if (s) {
                            var r;
                            if (this.options.greedy) {
                                var o = this.options.scope,
                                    a = this.element.parents(":data(droppable)").filter(function () {
                                        return t.data(this, "droppable").options.scope === o
                                    });
                                a.length && (r = t.data(a[0], "droppable"), r.greedyChild = "isover" == s ? 1 : 0)
                            }
                            r && "isover" == s && (r.isover = 0, r.isout = 1, r._out.call(r, i)), this[s] = 1, this["isout" == s ? "isover" : "isout"] = 0, this["isover" == s ? "_over" : "_out"].call(this, i), r && "isout" == s && (r.isout = 0, r.isover = 1, r._over.call(r, i))
                        }
                    }
                })
            },
            dragStop: function (e, i) {
                e.element.parentsUntil("body").unbind("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            }
        }
    }(jQuery),
    function (t) {
        t.widget("ui.resizable", t.ui.mouse, {
            version: "1.9.2",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 1e3
            },
            _create: function () {
                var e = this,
                    i = this.options;
                if (this.element.addClass("ui-resizable"), t.extend(this, {
                    _aspectRatio: !! i.aspectRatio,
                    aspectRatio: i.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({
                    margin: this.originalElement.css("margin")
                }), this._proportionallyResize()), this.handles = i.handles || (t(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this.handles.constructor == String) {
                    "all" == this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw");
                    var n = this.handles.split(",");
                    this.handles = {};
                    for (var s = 0; s < n.length; s++) {
                        var r = t.trim(n[s]),
                            o = "ui-resizable-" + r,
                            a = t('<div class="ui-resizable-handle ' + o + '"></div>');
                        a.css({
                            zIndex: i.zIndex
                        }), "se" == r && a.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[r] = ".ui-resizable-" + r, this.element.append(a)
                    }
                }
                this._renderAxis = function (e) {
                    e = e || this.element;
                    for (var i in this.handles) {
                        if (this.handles[i].constructor == String && (this.handles[i] = t(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                            var n = t(this.handles[i], this.element),
                                s = 0;
                            s = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth();
                            var r = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join("");
                            e.css(r, s), this._proportionallyResize()
                        }
                        t(this.handles[i]).length
                    }
                }, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
                    if (!e.resizing) {
                        if (this.className) var t = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                        e.axis = t && t[1] ? t[1] : "se"
                    }
                }), i.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                    i.disabled || (t(this).removeClass("ui-resizable-autohide"), e._handles.show())
                }).mouseleave(function () {
                        i.disabled || e.resizing || (t(this).addClass("ui-resizable-autohide"), e._handles.hide())
                    })), this._mouseInit()
            },
            _destroy: function () {
                this._mouseDestroy();
                var e = function (e) {
                    t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
                if (this.elementIsWrapper) {
                    e(this.element);
                    var i = this.element;
                    this.originalElement.css({
                        position: i.css("position"),
                        width: i.outerWidth(),
                        height: i.outerHeight(),
                        top: i.css("top"),
                        left: i.css("left")
                    }).insertAfter(i), i.remove()
                }
                return this.originalElement.css("resize", this.originalResizeStyle), e(this.originalElement), this
            },
            _mouseCapture: function (e) {
                var i = !1;
                for (var n in this.handles) t(this.handles[n])[0] == e.target && (i = !0);
                return !this.options.disabled && i
            },
            _mouseStart: function (i) {
                var n = this.options,
                    s = this.element.position(),
                    r = this.element;
                this.resizing = !0, this.documentScroll = {
                    top: t(document).scrollTop(),
                    left: t(document).scrollLeft()
                }, (r.is(".ui-draggable") || /absolute/.test(r.css("position"))) && r.css({
                    position: "absolute",
                    top: s.top,
                    left: s.left
                }), this._renderProxy();
                var o = e(this.helper.css("left")),
                    a = e(this.helper.css("top"));
                n.containment && (o += t(n.containment).scrollLeft() || 0, a += t(n.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: o,
                    top: a
                }, this.size = this._helper ? {
                    width: r.outerWidth(),
                    height: r.outerHeight()
                } : {
                    width: r.width(),
                    height: r.height()
                }, this.originalSize = this._helper ? {
                    width: r.outerWidth(),
                    height: r.outerHeight()
                } : {
                    width: r.width(),
                    height: r.height()
                }, this.originalPosition = {
                    left: o,
                    top: a
                }, this.sizeDiff = {
                    width: r.outerWidth() - r.width(),
                    height: r.outerHeight() - r.height()
                }, this.originalMousePosition = {
                    left: i.pageX,
                    top: i.pageY
                }, this.aspectRatio = "number" == typeof n.aspectRatio ? n.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
                var l = t(".ui-resizable-" + this.axis).css("cursor");
                return t("body").css("cursor", "auto" == l ? this.axis + "-resize" : l), r.addClass("ui-resizable-resizing"), this._propagate("start", i), !0
            },
            _mouseDrag: function (t) {
                var e = this.helper,
                    i = (this.options, this.originalMousePosition),
                    n = this.axis,
                    s = t.pageX - i.left || 0,
                    r = t.pageY - i.top || 0,
                    o = this._change[n];
                if (!o) return !1;
                var a = o.apply(this, [t, s, r]);
                return this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (a = this._updateRatio(a, t)), a = this._respectSize(a, t), this._propagate("resize", t), e.css({
                    top: this.position.top + "px",
                    left: this.position.left + "px",
                    width: this.size.width + "px",
                    height: this.size.height + "px"
                }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(a), this._trigger("resize", t, this.ui()), !1
            },
            _mouseStop: function (e) {
                this.resizing = !1;
                var i = this.options,
                    n = this;
                if (this._helper) {
                    var s = this._proportionallyResizeElements,
                        r = s.length && /textarea/i.test(s[0].nodeName),
                        o = r && t.ui.hasScroll(s[0], "left") ? 0 : n.sizeDiff.height,
                        a = r ? 0 : n.sizeDiff.width,
                        l = {
                            width: n.helper.width() - a,
                            height: n.helper.height() - o
                        }, u = parseInt(n.element.css("left"), 10) + (n.position.left - n.originalPosition.left) || null,
                        c = parseInt(n.element.css("top"), 10) + (n.position.top - n.originalPosition.top) || null;
                    i.animate || this.element.css(t.extend(l, {
                        top: c,
                        left: u
                    })), n.helper.height(n.size.height), n.helper.width(n.size.width), this._helper && !i.animate && this._proportionallyResize()
                }
                return t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
            },
            _updateVirtualBoundaries: function (t) {
                var e, n, s, r, o, a = this.options;
                o = {
                    minWidth: i(a.minWidth) ? a.minWidth : 0,
                    maxWidth: i(a.maxWidth) ? a.maxWidth : 1 / 0,
                    minHeight: i(a.minHeight) ? a.minHeight : 0,
                    maxHeight: i(a.maxHeight) ? a.maxHeight : 1 / 0
                }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, s = o.minWidth / this.aspectRatio, n = o.maxHeight * this.aspectRatio, r = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), s > o.minHeight && (o.minHeight = s), n < o.maxWidth && (o.maxWidth = n), r < o.maxHeight && (o.maxHeight = r)), this._vBoundaries = o
            },
            _updateCache: function (t) {
                this.options, this.offset = this.helper.offset(), i(t.left) && (this.position.left = t.left), i(t.top) && (this.position.top = t.top), i(t.height) && (this.size.height = t.height), i(t.width) && (this.size.width = t.width)
            },
            _updateRatio: function (t) {
                var e = (this.options, this.position),
                    n = this.size,
                    s = this.axis;
                return i(t.height) ? t.width = t.height * this.aspectRatio : i(t.width) && (t.height = t.width / this.aspectRatio), "sw" == s && (t.left = e.left + (n.width - t.width), t.top = null), "nw" == s && (t.top = e.top + (n.height - t.height), t.left = e.left + (n.width - t.width)), t
            },
            _respectSize: function (t, e) {
                var n = (this.helper, this._vBoundaries),
                    s = (this._aspectRatio || e.shiftKey, this.axis),
                    r = i(t.width) && n.maxWidth && n.maxWidth < t.width,
                    o = i(t.height) && n.maxHeight && n.maxHeight < t.height,
                    a = i(t.width) && n.minWidth && n.minWidth > t.width,
                    l = i(t.height) && n.minHeight && n.minHeight > t.height;
                a && (t.width = n.minWidth), l && (t.height = n.minHeight), r && (t.width = n.maxWidth), o && (t.height = n.maxHeight);
                var u = this.originalPosition.left + this.originalSize.width,
                    c = this.position.top + this.size.height,
                    h = /sw|nw|w/.test(s),
                    d = /nw|ne|n/.test(s);
                a && h && (t.left = u - n.minWidth), r && h && (t.left = u - n.maxWidth), l && d && (t.top = c - n.minHeight), o && d && (t.top = c - n.maxHeight);
                var p = !t.width && !t.height;
                return p && !t.left && t.top ? t.top = null : p && !t.top && t.left && (t.left = null), t
            },
            _proportionallyResize: function () {
                if (this.options, this._proportionallyResizeElements.length)
                    for (var e = this.helper || this.element, i = 0; i < this._proportionallyResizeElements.length; i++) {
                        var n = this._proportionallyResizeElements[i];
                        if (!this.borderDif) {
                            var s = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")],
                                r = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")];
                            this.borderDif = t.map(s, function (t, e) {
                                var i = parseInt(t, 10) || 0,
                                    n = parseInt(r[e], 10) || 0;
                                return i + n
                            })
                        }
                        n.css({
                            height: e.height() - this.borderDif[0] - this.borderDif[2] || 0,
                            width: e.width() - this.borderDif[1] - this.borderDif[3] || 0
                        })
                    }
            },
            _renderProxy: function () {
                var e = this.element,
                    i = this.options;
                if (this.elementOffset = e.offset(), this._helper) {
                    this.helper = this.helper || t('<div style="overflow:hidden;"></div>');
                    var n = t.ui.ie6 ? 1 : 0,
                        s = t.ui.ie6 ? 2 : -1;
                    this.helper.addClass(this._helper).css({
                        width: this.element.outerWidth() + s,
                        height: this.element.outerHeight() + s,
                        position: "absolute",
                        left: this.elementOffset.left - n + "px",
                        top: this.elementOffset.top - n + "px",
                        zIndex: ++i.zIndex
                    }), this.helper.appendTo("body").disableSelection()
                } else this.helper = this.element
            },
            _change: {
                e: function (t, e) {
                    return {
                        width: this.originalSize.width + e
                    }
                },
                w: function (t, e) {
                    var i = (this.options, this.originalSize),
                        n = this.originalPosition;
                    return {
                        left: n.left + e,
                        width: i.width - e
                    }
                },
                n: function (t, e, i) {
                    var n = (this.options, this.originalSize),
                        s = this.originalPosition;
                    return {
                        top: s.top + i,
                        height: n.height - i
                    }
                },
                s: function (t, e, i) {
                    return {
                        height: this.originalSize.height + i
                    }
                },
                se: function (e, i, n) {
                    return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
                },
                sw: function (e, i, n) {
                    return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
                },
                ne: function (e, i, n) {
                    return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
                },
                nw: function (e, i, n) {
                    return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
                }
            },
            _propagate: function (e, i) {
                t.ui.plugin.call(this, e, [i, this.ui()]), "resize" != e && this._trigger(e, i, this.ui())
            },
            plugins: {},
            ui: function () {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        }), t.ui.plugin.add("resizable", "alsoResize", {
            start: function () {
                var e = t(this).data("resizable"),
                    i = e.options,
                    n = function (e) {
                        t(e).each(function () {
                            var e = t(this);
                            e.data("resizable-alsoresize", {
                                width: parseInt(e.width(), 10),
                                height: parseInt(e.height(), 10),
                                left: parseInt(e.css("left"), 10),
                                top: parseInt(e.css("top"), 10)
                            })
                        })
                    };
                "object" != typeof i.alsoResize || i.alsoResize.parentNode ? n(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], n(i.alsoResize)) : t.each(i.alsoResize, function (t) {
                    n(t)
                })
            },
            resize: function (e, i) {
                var n = t(this).data("resizable"),
                    s = n.options,
                    r = n.originalSize,
                    o = n.originalPosition,
                    a = {
                        height: n.size.height - r.height || 0,
                        width: n.size.width - r.width || 0,
                        top: n.position.top - o.top || 0,
                        left: n.position.left - o.left || 0
                    }, l = function (e, n) {
                        t(e).each(function () {
                            var e = t(this),
                                s = t(this).data("resizable-alsoresize"),
                                r = {}, o = n && n.length ? n : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                            t.each(o, function (t, e) {
                                var i = (s[e] || 0) + (a[e] || 0);
                                i && i >= 0 && (r[e] = i || null)
                            }), e.css(r)
                        })
                    };
                "object" != typeof s.alsoResize || s.alsoResize.nodeType ? l(s.alsoResize) : t.each(s.alsoResize, function (t, e) {
                    l(t, e)
                })
            },
            stop: function () {
                t(this).removeData("resizable-alsoresize")
            }
        }), t.ui.plugin.add("resizable", "animate", {
            stop: function (e) {
                var i = t(this).data("resizable"),
                    n = i.options,
                    s = i._proportionallyResizeElements,
                    r = s.length && /textarea/i.test(s[0].nodeName),
                    o = r && t.ui.hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
                    a = r ? 0 : i.sizeDiff.width,
                    l = {
                        width: i.size.width - a,
                        height: i.size.height - o
                    }, u = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                    c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
                i.element.animate(t.extend(l, c && u ? {
                    top: c,
                    left: u
                } : {}), {
                    duration: n.animateDuration,
                    easing: n.animateEasing,
                    step: function () {
                        var n = {
                            width: parseInt(i.element.css("width"), 10),
                            height: parseInt(i.element.css("height"), 10),
                            top: parseInt(i.element.css("top"), 10),
                            left: parseInt(i.element.css("left"), 10)
                        };
                        s && s.length && t(s[0]).css({
                            width: n.width,
                            height: n.height
                        }), i._updateCache(n), i._propagate("resize", e)
                    }
                })
            }
        }), t.ui.plugin.add("resizable", "containment", {
            start: function () {
                var i = t(this).data("resizable"),
                    n = i.options,
                    s = i.element,
                    r = n.containment,
                    o = r instanceof t ? r.get(0) : /parent/.test(r) ? s.parent().get(0) : r;
                if (o)
                    if (i.containerElement = t(o), /document/.test(r) || r == document) i.containerOffset = {
                        left: 0,
                        top: 0
                    }, i.containerPosition = {
                        left: 0,
                        top: 0
                    }, i.parentData = {
                        element: t(document),
                        left: 0,
                        top: 0,
                        width: t(document).width(),
                        height: t(document).height() || document.body.parentNode.scrollHeight
                    };
                    else {
                        var a = t(o),
                            l = [];
                        t(["Top", "Right", "Left", "Bottom"]).each(function (t, i) {
                            l[t] = e(a.css("padding" + i))
                        }), i.containerOffset = a.offset(), i.containerPosition = a.position(), i.containerSize = {
                            height: a.innerHeight() - l[3],
                            width: a.innerWidth() - l[1]
                        };
                        var u = i.containerOffset,
                            c = i.containerSize.height,
                            h = i.containerSize.width,
                            d = t.ui.hasScroll(o, "left") ? o.scrollWidth : h,
                            p = t.ui.hasScroll(o) ? o.scrollHeight : c;
                        i.parentData = {
                            element: o,
                            left: u.left,
                            top: u.top,
                            width: d,
                            height: p
                        }
                    }
            },
            resize: function (e) {
                var i = t(this).data("resizable"),
                    n = i.options,
                    s = (i.containerSize, i.containerOffset),
                    r = (i.size, i.position),
                    o = i._aspectRatio || e.shiftKey,
                    a = {
                        top: 0,
                        left: 0
                    }, l = i.containerElement;
                l[0] != document && /static/.test(l.css("position")) && (a = s), r.left < (i._helper ? s.left : 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - s.left : i.position.left - a.left), o && (i.size.height = i.size.width / i.aspectRatio), i.position.left = n.helper ? s.left : 0), r.top < (i._helper ? s.top : 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - s.top : i.position.top), o && (i.size.width = i.size.height * i.aspectRatio), i.position.top = i._helper ? s.top : 0), i.offset.left = i.parentData.left + i.position.left, i.offset.top = i.parentData.top + i.position.top;
                var u = Math.abs((i._helper ? i.offset.left - a.left : i.offset.left - a.left) + i.sizeDiff.width),
                    c = Math.abs((i._helper ? i.offset.top - a.top : i.offset.top - s.top) + i.sizeDiff.height),
                    h = i.containerElement.get(0) == i.element.parent().get(0),
                    d = /relative|absolute/.test(i.containerElement.css("position"));
                h && d && (u -= i.parentData.left), u + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - u, o && (i.size.height = i.size.width / i.aspectRatio)), c + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - c, o && (i.size.width = i.size.height * i.aspectRatio))
            },
            stop: function () {
                var e = t(this).data("resizable"),
                    i = e.options,
                    n = (e.position, e.containerOffset),
                    s = e.containerPosition,
                    r = e.containerElement,
                    o = t(e.helper),
                    a = o.offset(),
                    l = o.outerWidth() - e.sizeDiff.width,
                    u = o.outerHeight() - e.sizeDiff.height;
                e._helper && !i.animate && /relative/.test(r.css("position")) && t(this).css({
                    left: a.left - s.left - n.left,
                    width: l,
                    height: u
                }), e._helper && !i.animate && /static/.test(r.css("position")) && t(this).css({
                    left: a.left - s.left - n.left,
                    width: l,
                    height: u
                })
            }
        }), t.ui.plugin.add("resizable", "ghost", {
            start: function () {
                var e = t(this).data("resizable"),
                    i = e.options,
                    n = e.size;
                e.ghost = e.originalElement.clone(), e.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: n.height,
                    width: n.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), e.ghost.appendTo(e.helper)
            },
            resize: function () {
                var e = t(this).data("resizable");
                e.options, e.ghost && e.ghost.css({
                    position: "relative",
                    height: e.size.height,
                    width: e.size.width
                })
            },
            stop: function () {
                var e = t(this).data("resizable");
                e.options, e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
            }
        }), t.ui.plugin.add("resizable", "grid", {
            resize: function (e) {
                var i = t(this).data("resizable"),
                    n = i.options,
                    s = i.size,
                    r = i.originalSize,
                    o = i.originalPosition,
                    a = i.axis;
                n._aspectRatio || e.shiftKey, n.grid = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid;
                var l = Math.round((s.width - r.width) / (n.grid[0] || 1)) * (n.grid[0] || 1),
                    u = Math.round((s.height - r.height) / (n.grid[1] || 1)) * (n.grid[1] || 1);
                /^(se|s|e)$/.test(a) ? (i.size.width = r.width + l, i.size.height = r.height + u) : /^(ne)$/.test(a) ? (i.size.width = r.width + l, i.size.height = r.height + u, i.position.top = o.top - u) : /^(sw)$/.test(a) ? (i.size.width = r.width + l, i.size.height = r.height + u, i.position.left = o.left - l) : (i.size.width = r.width + l, i.size.height = r.height + u, i.position.top = o.top - u, i.position.left = o.left - l)
            }
        });
        var e = function (t) {
            return parseInt(t, 10) || 0
        }, i = function (t) {
            return !isNaN(parseInt(t, 10))
        }
    }(jQuery),
    function (t) {
        t.widget("ui.selectable", t.ui.mouse, {
            version: "1.9.2",
            options: {
                appendTo: "body",
                autoRefresh: !0,
                distance: 0,
                filter: "*",
                tolerance: "touch"
            },
            _create: function () {
                var e = this;
                this.element.addClass("ui-selectable"), this.dragged = !1;
                var i;
                this.refresh = function () {
                    i = t(e.options.filter, e.element[0]), i.addClass("ui-selectee"), i.each(function () {
                        var e = t(this),
                            i = e.offset();
                        t.data(this, "selectable-item", {
                            element: this,
                            $element: e,
                            left: i.left,
                            top: i.top,
                            right: i.left + e.outerWidth(),
                            bottom: i.top + e.outerHeight(),
                            startselected: !1,
                            selected: e.hasClass("ui-selected"),
                            selecting: e.hasClass("ui-selecting"),
                            unselecting: e.hasClass("ui-unselecting")
                        })
                    })
                }, this.refresh(), this.selectees = i.addClass("ui-selectee"), this._mouseInit(), this.helper = t("<div class='ui-selectable-helper'></div>")
            },
            _destroy: function () {
                this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
            },
            _mouseStart: function (e) {
                var i = this;
                if (this.opos = [e.pageX, e.pageY], !this.options.disabled) {
                    var n = this.options;
                    this.selectees = t(n.filter, this.element[0]), this._trigger("start", e), t(n.appendTo).append(this.helper), this.helper.css({
                        left: e.clientX,
                        top: e.clientY,
                        width: 0,
                        height: 0
                    }), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                        var n = t.data(this, "selectable-item");
                        n.startselected = !0, e.metaKey || e.ctrlKey || (n.$element.removeClass("ui-selected"), n.selected = !1, n.$element.addClass("ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", e, {
                            unselecting: n.element
                        }))
                    }), t(e.target).parents().andSelf().each(function () {
                        var n = t.data(this, "selectable-item");
                        if (n) {
                            var s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected");
                            return n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {
                                selecting: n.element
                            }) : i._trigger("unselecting", e, {
                                unselecting: n.element
                            }), !1
                        }
                    })
                }
            },
            _mouseDrag: function (e) {
                var i = this;
                if (this.dragged = !0, !this.options.disabled) {
                    var n = this.options,
                        s = this.opos[0],
                        r = this.opos[1],
                        o = e.pageX,
                        a = e.pageY;
                    if (s > o) {
                        var l = o;
                        o = s, s = l
                    }
                    if (r > a) {
                        var l = a;
                        a = r, r = l
                    }
                    return this.helper.css({
                        left: s,
                        top: r,
                        width: o - s,
                        height: a - r
                    }), this.selectees.each(function () {
                        var l = t.data(this, "selectable-item");
                        if (l && l.element != i.element[0]) {
                            var u = !1;
                            "touch" == n.tolerance ? u = !(l.left > o || l.right < s || l.top > a || l.bottom < r) : "fit" == n.tolerance && (u = l.left > s && l.right < o && l.top > r && l.bottom < a), u ? (l.selected && (l.$element.removeClass("ui-selected"), l.selected = !1), l.unselecting && (l.$element.removeClass("ui-unselecting"), l.unselecting = !1), l.selecting || (l.$element.addClass("ui-selecting"), l.selecting = !0, i._trigger("selecting", e, {
                                selecting: l.element
                            }))) : (l.selecting && ((e.metaKey || e.ctrlKey) && l.startselected ? (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.$element.addClass("ui-selected"), l.selected = !0) : (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.startselected && (l.$element.addClass("ui-unselecting"), l.unselecting = !0), i._trigger("unselecting", e, {
                                unselecting: l.element
                            }))), l.selected && (e.metaKey || e.ctrlKey || l.startselected || (l.$element.removeClass("ui-selected"), l.selected = !1, l.$element.addClass("ui-unselecting"), l.unselecting = !0, i._trigger("unselecting", e, {
                                unselecting: l.element
                            }))))
                        }
                    }), !1
                }
            },
            _mouseStop: function (e) {
                var i = this;
                return this.dragged = !1, this.options, t(".ui-unselecting", this.element[0]).each(function () {
                    var n = t.data(this, "selectable-item");
                    n.$element.removeClass("ui-unselecting"), n.unselecting = !1, n.startselected = !1, i._trigger("unselected", e, {
                        unselected: n.element
                    })
                }), t(".ui-selecting", this.element[0]).each(function () {
                    var n = t.data(this, "selectable-item");
                    n.$element.removeClass("ui-selecting").addClass("ui-selected"), n.selecting = !1, n.selected = !0, n.startselected = !0, i._trigger("selected", e, {
                        selected: n.element
                    })
                }), this._trigger("stop", e), this.helper.remove(), !1
            }
        })
    }(jQuery),
    function (t) {
        t.widget("ui.sortable", t.ui.mouse, {
            version: "1.9.2",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3
            },
            _create: function () {
                var t = this.options;
                this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
            },
            _destroy: function () {
                this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
                for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
                return this
            },
            _setOption: function (e, i) {
                "disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !! i)) : t.Widget.prototype._setOption.apply(this, arguments)
            },
            _mouseCapture: function (e, i) {
                var n = this;
                if (this.reverting) return !1;
                if (this.options.disabled || "static" == this.options.type) return !1;
                this._refreshItems(e);
                var s = null;
                if (t(e.target).parents().each(function () {
                    return t.data(this, n.widgetName + "-item") == n ? (s = t(this), !1) : void 0
                }), t.data(e.target, n.widgetName + "-item") == n && (s = t(e.target)), !s) return !1;
                if (this.options.handle && !i) {
                    var r = !1;
                    if (t(this.options.handle, s).find("*").andSelf().each(function () {
                        this == e.target && (r = !0)
                    }), !r) return !1
                }
                return this.currentItem = s, this._removeCurrentsFromItems(), !0
            },
            _mouseStart: function (e, i, n) {
                var s = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, t.extend(this.offset, {
                    click: {
                        left: e.pageX - this.offset.left,
                        top: e.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), s.containment && this._setContainment(), s.cursor && (t("body").css("cursor") && (this._storedCursor = t("body").css("cursor")), t("body").css("cursor", s.cursor)), s.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", s.opacity)), s.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", s.zIndex)), this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
                    for (var r = this.containers.length - 1; r >= 0; r--) this.containers[r]._trigger("activate", e, this._uiHash(this));
                return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
            },
            _mouseDrag: function (e) {
                if (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll) {
                    var i = this.options,
                        n = !1;
                    this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = n = this.scrollParent[0].scrollTop + i.scrollSpeed : e.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = n = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = n = this.scrollParent[0].scrollLeft + i.scrollSpeed : e.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = n = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (e.pageY - t(document).scrollTop() < i.scrollSensitivity ? n = t(document).scrollTop(t(document).scrollTop() - i.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < i.scrollSensitivity && (n = t(document).scrollTop(t(document).scrollTop() + i.scrollSpeed)), e.pageX - t(document).scrollLeft() < i.scrollSensitivity ? n = t(document).scrollLeft(t(document).scrollLeft() - i.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < i.scrollSensitivity && (n = t(document).scrollLeft(t(document).scrollLeft() + i.scrollSpeed))), n !== !1 && t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)
                }
                this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px");
                for (var s = this.items.length - 1; s >= 0; s--) {
                    var r = this.items[s],
                        o = r.item[0],
                        a = this._intersectsWithPointer(r);
                    if (a && r.instance === this.currentContainer && o != this.currentItem[0] && this.placeholder[1 == a ? "next" : "prev"]()[0] != o && !t.contains(this.placeholder[0], o) && ("semi-dynamic" == this.options.type ? !t.contains(this.element[0], o) : !0)) {
                        if (this.direction = 1 == a ? "down" : "up", "pointer" != this.options.tolerance && !this._intersectsWithSides(r)) break;
                        this._rearrange(e, r), this._trigger("change", e, this._uiHash());
                        break
                    }
                }
                return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function (e, i) {
                if (e) {
                    if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                        var n = this,
                            s = this.placeholder.offset();
                        this.reverting = !0, t(this.helper).animate({
                            left: s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                            top: s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                        }, parseInt(this.options.revert, 10) || 500, function () {
                            n._clear(e)
                        })
                    } else this._clear(e, i);
                    return !1
                }
            },
            cancel: function () {
                if (this.dragging) {
                    this._mouseUp({
                        target: null
                    }), "original" == this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                    for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" != this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function (e) {
                var i = this._getItemsAsjQuery(e && e.connected),
                    n = [];
                return e = e || {}, t(i).each(function () {
                    var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[-=_](.+)/);
                    i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
                }), !n.length && e.key && n.push(e.key + "="), n.join("&")
            },
            toArray: function (e) {
                var i = this._getItemsAsjQuery(e && e.connected),
                    n = [];
                return e = e || {}, i.each(function () {
                    n.push(t(e.item || this).attr(e.attribute || "id") || "")
                }), n
            },
            _intersectsWith: function (t) {
                var e = this.positionAbs.left,
                    i = e + this.helperProportions.width,
                    n = this.positionAbs.top,
                    s = n + this.helperProportions.height,
                    r = t.left,
                    o = r + t.width,
                    a = t.top,
                    l = a + t.height,
                    u = this.offset.click.top,
                    c = this.offset.click.left,
                    h = n + u > a && l > n + u && e + c > r && o > e + c;
                return "pointer" == this.options.tolerance || this.options.forcePointerForContainers || "pointer" != this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? h : r < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < o && a < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l
            },
            _intersectsWithPointer: function (e) {
                var i = "x" === this.options.axis || t.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
                    n = "y" === this.options.axis || t.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width),
                    s = i && n,
                    r = this._getDragVerticalDirection(),
                    o = this._getDragHorizontalDirection();
                return s ? this.floating ? o && "right" == o || "down" == r ? 2 : 1 : r && ("down" == r ? 2 : 1) : !1
            },
            _intersectsWithSides: function (e) {
                var i = t.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
                    n = t.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
                    s = this._getDragVerticalDirection(),
                    r = this._getDragHorizontalDirection();
                return this.floating && r ? "right" == r && n || "left" == r && !n : s && ("down" == s && i || "up" == s && !i)
            },
            _getDragVerticalDirection: function () {
                var t = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 != t && (t > 0 ? "down" : "up")
            },
            _getDragHorizontalDirection: function () {
                var t = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 != t && (t > 0 ? "right" : "left")
            },
            refresh: function (t) {
                return this._refreshItems(t), this.refreshPositions(), this
            },
            _connectWith: function () {
                var t = this.options;
                return t.connectWith.constructor == String ? [t.connectWith] : t.connectWith
            },
            _getItemsAsjQuery: function (e) {
                var i = [],
                    n = [],
                    s = this._connectWith();
                if (s && e)
                    for (var r = s.length - 1; r >= 0; r--)
                        for (var o = t(s[r]), a = o.length - 1; a >= 0; a--) {
                            var l = t.data(o[a], this.widgetName);
                            l && l != this && !l.options.disabled && n.push([t.isFunction(l.options.items) ? l.options.items.call(l.element) : t(l.options.items, l.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), l])
                        }
                n.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
                for (var r = n.length - 1; r >= 0; r--) n[r][0].each(function () {
                    i.push(this)
                });
                return t(i)
            },
            _removeCurrentsFromItems: function () {
                var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = t.grep(this.items, function (t) {
                    for (var i = 0; i < e.length; i++)
                        if (e[i] == t.item[0]) return !1;
                    return !0
                })
            },
            _refreshItems: function (e) {
                this.items = [], this.containers = [this];
                var i = this.items,
                    n = [
                        [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                            item: this.currentItem
                        }) : t(this.options.items, this.element), this]
                    ],
                    s = this._connectWith();
                if (s && this.ready)
                    for (var r = s.length - 1; r >= 0; r--)
                        for (var o = t(s[r]), a = o.length - 1; a >= 0; a--) {
                            var l = t.data(o[a], this.widgetName);
                            l && l != this && !l.options.disabled && (n.push([t.isFunction(l.options.items) ? l.options.items.call(l.element[0], e, {
                                item: this.currentItem
                            }) : t(l.options.items, l.element), l]), this.containers.push(l))
                        }
                for (var r = n.length - 1; r >= 0; r--)
                    for (var u = n[r][1], c = n[r][0], a = 0, h = c.length; h > a; a++) {
                        var d = t(c[a]);
                        d.data(this.widgetName + "-item", u), i.push({
                            item: d,
                            instance: u,
                            width: 0,
                            height: 0,
                            left: 0,
                            top: 0
                        })
                    }
            },
            refreshPositions: function (e) {
                this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                for (var i = this.items.length - 1; i >= 0; i--) {
                    var n = this.items[i];
                    if (n.instance == this.currentContainer || !this.currentContainer || n.item[0] == this.currentItem[0]) {
                        var s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item;
                        e || (n.width = s.outerWidth(), n.height = s.outerHeight());
                        var r = s.offset();
                        n.left = r.left, n.top = r.top
                    }
                }
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (var i = this.containers.length - 1; i >= 0; i--) {
                        var r = this.containers[i].element.offset();
                        this.containers[i].containerCache.left = r.left, this.containers[i].containerCache.top = r.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight()
                    }
                return this
            },
            _createPlaceholder: function (e) {
                e = e || this;
                var i = e.options;
                if (!i.placeholder || i.placeholder.constructor == String) {
                    var n = i.placeholder;
                    i.placeholder = {
                        element: function () {
                            var i = t(document.createElement(e.currentItem[0].nodeName)).addClass(n || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                            return n || (i.style.visibility = "hidden"), i
                        },
                        update: function (t, s) {
                            (!n || i.forcePlaceholderSize) && (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                        }
                    }
                }
                e.placeholder = t(i.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), i.placeholder.update(e, e.placeholder)
            },
            _contactContainers: function (e) {
                for (var i = null, n = null, s = this.containers.length - 1; s >= 0; s--)
                    if (!t.contains(this.currentItem[0], this.containers[s].element[0]))
                        if (this._intersectsWith(this.containers[s].containerCache)) {
                            if (i && t.contains(this.containers[s].element[0], i.element[0])) continue;
                            i = this.containers[s], n = s
                        } else this.containers[s].containerCache.over && (this.containers[s]._trigger("out", e, this._uiHash(this)), this.containers[s].containerCache.over = 0);
                if (i)
                    if (1 === this.containers.length) this.containers[n]._trigger("over", e, this._uiHash(this)), this.containers[n].containerCache.over = 1;
                    else {
                        for (var r = 1e4, o = null, a = this.containers[n].floating ? "left" : "top", l = this.containers[n].floating ? "width" : "height", u = this.positionAbs[a] + this.offset.click[a], c = this.items.length - 1; c >= 0; c--)
                            if (t.contains(this.containers[n].element[0], this.items[c].item[0]) && this.items[c].item[0] != this.currentItem[0]) {
                                var h = this.items[c].item.offset()[a],
                                    d = !1;
                                Math.abs(h - u) > Math.abs(h + this.items[c][l] - u) && (d = !0, h += this.items[c][l]), Math.abs(h - u) < r && (r = Math.abs(h - u), o = this.items[c], this.direction = d ? "up" : "down")
                            }
                        if (!o && !this.options.dropOnEmpty) return;
                        this.currentContainer = this.containers[n], o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[n].element, !0), this._trigger("change", e, this._uiHash()), this.containers[n]._trigger("change", e, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[n]._trigger("over", e, this._uiHash(this)), this.containers[n].containerCache.over = 1
                    }
            },
            _createHelper: function (e) {
                var i = this.options,
                    n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" == i.helper ? this.currentItem.clone() : this.currentItem;
                return n.parents("body").length || t("parent" != i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] == this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), ("" == n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()), ("" == n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()), n
            },
            _adjustOffsetFromHelper: function (e) {
                "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                    left: +e[0],
                    top: +e[1] || 0
                }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
            },
            _getParentOffset: function () {
                this.offsetParent = this.helper.offsetParent();
                var e = this.offsetParent.offset();
                return "absolute" == this.cssPosition && this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                    top: 0,
                    left: 0
                }), {
                    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function () {
                if ("relative" == this.cssPosition) {
                    var t = this.currentItem.position();
                    return {
                        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function () {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function () {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function () {
                var e = this.options;
                if ("parent" == e.containment && (e.containment = this.helper[0].parentNode), ("document" == e.containment || "window" == e.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" == e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" == e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), !/^(document|window|parent)$/.test(e.containment)) {
                    var i = t(e.containment)[0],
                        n = t(e.containment).offset(),
                        s = "hidden" != t(i).css("overflow");
                    this.containment = [n.left + (parseInt(t(i).css("borderLeftWidth"), 10) || 0) + (parseInt(t(i).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(t(i).css("borderTopWidth"), 10) || 0) + (parseInt(t(i).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (s ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(t(i).css("borderLeftWidth"), 10) || 0) - (parseInt(t(i).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (s ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(t(i).css("borderTopWidth"), 10) || 0) - (parseInt(t(i).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
                }
            },
            _convertPositionTo: function (e, i) {
                i || (i = this.position);
                var n = "absolute" == e ? 1 : -1,
                    s = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent),
                    r = /(html|body)/i.test(s[0].tagName);
                return {
                    top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : r ? 0 : s.scrollTop()) * n,
                    left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : r ? 0 : s.scrollLeft()) * n
                }
            },
            _generatePosition: function (e) {
                var i = this.options,
                    n = "absolute" != this.cssPosition || this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    s = /(html|body)/i.test(n[0].tagName);
                "relative" != this.cssPosition || this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset());
                var r = e.pageX,
                    o = e.pageY;
                if (this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (r = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (r = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), i.grid)) {
                    var a = this.originalPageY + Math.round((o - this.originalPageY) / i.grid[1]) * i.grid[1];
                    o = this.containment ? a - this.offset.click.top < this.containment[1] || a - this.offset.click.top > this.containment[3] ? a - this.offset.click.top < this.containment[1] ? a + i.grid[1] : a - i.grid[1] : a : a;
                    var l = this.originalPageX + Math.round((r - this.originalPageX) / i.grid[0]) * i.grid[0];
                    r = this.containment ? l - this.offset.click.left < this.containment[0] || l - this.offset.click.left > this.containment[2] ? l - this.offset.click.left < this.containment[0] ? l + i.grid[0] : l - i.grid[0] : l : l
                }
                return {
                    top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : n.scrollTop()),
                    left: r - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : n.scrollLeft())
                }
            },
            _rearrange: function (t, e, i, n) {
                i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" == this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var s = this.counter;
                this._delay(function () {
                    s == this.counter && this.refreshPositions(!n)
                })
            },
            _clear: function (e, i) {
                this.reverting = !1;
                var n = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] == this.currentItem[0]) {
                    for (var s in this._storedCSS)("auto" == this._storedCSS[s] || "static" == this._storedCSS[s]) && (this._storedCSS[s] = "");
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else this.currentItem.show();
                this.fromOutside && !i && n.push(function (t) {
                    this._trigger("receive", t, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev == this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent == this.currentItem.parent()[0] || i || n.push(function (t) {
                    this._trigger("update", t, this._uiHash())
                }), this !== this.currentContainer && (i || (n.push(function (t) {
                    this._trigger("remove", t, this._uiHash())
                }), n.push(function (t) {
                    return function (e) {
                        t._trigger("receive", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), n.push(function (t) {
                    return function (e) {
                        t._trigger("update", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer))));
                for (var s = this.containers.length - 1; s >= 0; s--) i || n.push(function (t) {
                    return function (e) {
                        t._trigger("deactivate", e, this._uiHash(this))
                    }
                }.call(this, this.containers[s])), this.containers[s].containerCache.over && (n.push(function (t) {
                    return function (e) {
                        t._trigger("out", e, this._uiHash(this))
                    }
                }.call(this, this.containers[s])), this.containers[s].containerCache.over = 0);
                if (this._storedCursor && t("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" == this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                    if (!i) {
                        this._trigger("beforeStop", e, this._uiHash());
                        for (var s = 0; s < n.length; s++) n[s].call(this, e);
                        this._trigger("stop", e, this._uiHash())
                    }
                    return this.fromOutside = !1, !1
                }
                if (i || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null, !i) {
                    for (var s = 0; s < n.length; s++) n[s].call(this, e);
                    this._trigger("stop", e, this._uiHash())
                }
                return this.fromOutside = !1, !0
            },
            _trigger: function () {
                t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
            },
            _uiHash: function (e) {
                var i = e || this;
                return {
                    helper: i.helper,
                    placeholder: i.placeholder || t([]),
                    position: i.position,
                    originalPosition: i.originalPosition,
                    offset: i.positionAbs,
                    item: i.currentItem,
                    sender: e ? e.element : null
                }
            }
        })
    }(jQuery), jQuery.effects || function (t, e) {
    var i = t.uiBackCompat !== !1,
        n = "ui-effects-";
    t.effects = {
        effect: {}
    },
        function (e, i) {
            function n(t, e, i) {
                var n = d[e.type] || {};
                return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : n.max < t ? n.max : t)
            }

            function s(t) {
                var i = c(),
                    n = i._rgba = [];
                return t = t.toLowerCase(), m(u, function (e, s) {
                    var r, o = s.re.exec(t),
                        a = o && s.parse(o),
                        l = s.space || "rgba";
                    return a ? (r = i[l](a), i[h[l].cache] = r[h[l].cache], n = i._rgba = r._rgba, !1) : void 0
                }), n.length ? ("0,0,0,0" === n.join() && e.extend(n, o.transparent), i) : o[t]
            }

            function r(t, e, i) {
                return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
            }
            var o, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),
                l = /^([\-+])=\s*(\d+\.?\d*)/,
                u = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                    parse: function (t) {
                        return [t[1], t[2], t[3], t[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                    parse: function (t) {
                        return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function (t) {
                        return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function (t) {
                        return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function (t) {
                        return [t[1], t[2] / 100, t[3] / 100, t[4]]
                    }
                }],
                c = e.Color = function (t, i, n, s) {
                    return new e.Color.fn.parse(t, i, n, s)
                }, h = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                }, d = {
                    "byte": {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                }, p = c.support = {}, f = e("<p>")[0],
                m = e.each;
            f.style.cssText = "background-color:rgba(1,1,1,.5)", p.rgba = f.style.backgroundColor.indexOf("rgba") > -1, m(h, function (t, e) {
                e.cache = "_" + t, e.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), c.fn = e.extend(c.prototype, {
                parse: function (r, a, l, u) {
                    if (r === i) return this._rgba = [null, null, null, null], this;
                    (r.jquery || r.nodeType) && (r = e(r).css(a), a = i);
                    var d = this,
                        p = e.type(r),
                        f = this._rgba = [];
                    return a !== i && (r = [r, a, l, u], p = "array"), "string" === p ? this.parse(s(r) || o._default) : "array" === p ? (m(h.rgba.props, function (t, e) {
                        f[e.idx] = n(r[e.idx], e)
                    }), this) : "object" === p ? (r instanceof c ? m(h, function (t, e) {
                        r[e.cache] && (d[e.cache] = r[e.cache].slice())
                    }) : m(h, function (e, i) {
                        var s = i.cache;
                        m(i.props, function (t, e) {
                            if (!d[s] && i.to) {
                                if ("alpha" === t || null == r[t]) return;
                                d[s] = i.to(d._rgba)
                            }
                            d[s][e.idx] = n(r[t], e, !0)
                        }), d[s] && t.inArray(null, d[s].slice(0, 3)) < 0 && (d[s][3] = 1, i.from && (d._rgba = i.from(d[s])))
                    }), this) : void 0
                },
                is: function (t) {
                    var e = c(t),
                        i = !0,
                        n = this;
                    return m(h, function (t, s) {
                        var r, o = e[s.cache];
                        return o && (r = n[s.cache] || s.to && s.to(n._rgba) || [], m(s.props, function (t, e) {
                            return null != o[e.idx] ? i = o[e.idx] === r[e.idx] : void 0
                        })), i
                    }), i
                },
                _space: function () {
                    var t = [],
                        e = this;
                    return m(h, function (i, n) {
                        e[n.cache] && t.push(i)
                    }), t.pop()
                },
                transition: function (t, e) {
                    var i = c(t),
                        s = i._space(),
                        r = h[s],
                        o = 0 === this.alpha() ? c("transparent") : this,
                        a = o[r.cache] || r.to(o._rgba),
                        l = a.slice();
                    return i = i[r.cache], m(r.props, function (t, s) {
                        var r = s.idx,
                            o = a[r],
                            u = i[r],
                            c = d[s.type] || {};
                        null !== u && (null === o ? l[r] = u : (c.mod && (u - o > c.mod / 2 ? o += c.mod : o - u > c.mod / 2 && (o -= c.mod)), l[r] = n((u - o) * e + o, s)))
                    }), this[s](l)
                },
                blend: function (t) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(),
                        n = i.pop(),
                        s = c(t)._rgba;
                    return c(e.map(i, function (t, e) {
                        return (1 - n) * s[e] + n * t
                    }))
                },
                toRgbaString: function () {
                    var t = "rgba(",
                        i = e.map(this._rgba, function (t, e) {
                            return null == t ? e > 2 ? 1 : 0 : t
                        });
                    return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")"
                },
                toHslaString: function () {
                    var t = "hsla(",
                        i = e.map(this.hsla(), function (t, e) {
                            return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                        });
                    return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")"
                },
                toHexString: function (t) {
                    var i = this._rgba.slice(),
                        n = i.pop();
                    return t && i.push(~~(255 * n)), "#" + e.map(i, function (t) {
                        return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                    }).join("")
                },
                toString: function () {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), c.fn.parse.prototype = c.fn, h.hsla.to = function (t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e, i, n = t[0] / 255,
                    s = t[1] / 255,
                    r = t[2] / 255,
                    o = t[3],
                    a = Math.max(n, s, r),
                    l = Math.min(n, s, r),
                    u = a - l,
                    c = a + l,
                    h = .5 * c;
                return e = l === a ? 0 : n === a ? 60 * (s - r) / u + 360 : s === a ? 60 * (r - n) / u + 120 : 60 * (n - s) / u + 240, i = 0 === h || 1 === h ? h : .5 >= h ? u / c : u / (2 - c), [Math.round(e) % 360, i, h, null == o ? 1 : o]
            }, h.hsla.from = function (t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e = t[0] / 360,
                    i = t[1],
                    n = t[2],
                    s = t[3],
                    o = .5 >= n ? n * (1 + i) : n + i - n * i,
                    a = 2 * n - o;
                return [Math.round(255 * r(a, o, e + 1 / 3)), Math.round(255 * r(a, o, e)), Math.round(255 * r(a, o, e - 1 / 3)), s]
            }, m(h, function (t, s) {
                var r = s.props,
                    o = s.cache,
                    a = s.to,
                    u = s.from;
                c.fn[t] = function (t) {
                    if (a && !this[o] && (this[o] = a(this._rgba)), t === i) return this[o].slice();
                    var s, l = e.type(t),
                        h = "array" === l || "object" === l ? t : arguments,
                        d = this[o].slice();
                    return m(r, function (t, e) {
                        var i = h["object" === l ? t : e.idx];
                        null == i && (i = d[e.idx]), d[e.idx] = n(i, e)
                    }), u ? (s = c(u(d)), s[o] = d, s) : c(d)
                }, m(r, function (i, n) {
                    c.fn[i] || (c.fn[i] = function (s) {
                        var r, o = e.type(s),
                            a = "alpha" === i ? this._hsla ? "hsla" : "rgba" : t,
                            u = this[a](),
                            c = u[n.idx];
                        return "undefined" === o ? c : ("function" === o && (s = s.call(this, c), o = e.type(s)), null == s && n.empty ? this : ("string" === o && (r = l.exec(s), r && (s = c + parseFloat(r[2]) * ("+" === r[1] ? 1 : -1))), u[n.idx] = s, this[a](u)))
                    })
                })
            }), m(a, function (t, i) {
                e.cssHooks[i] = {
                    set: function (t, n) {
                        var r, o, a = "";
                        if ("string" !== e.type(n) || (r = s(n))) {
                            if (n = c(r || n), !p.rgba && 1 !== n._rgba[3]) {
                                for (o = "backgroundColor" === i ? t.parentNode : t;
                                     ("" === a || "transparent" === a) && o && o.style;) try {
                                    a = e.css(o, "backgroundColor"), o = o.parentNode
                                } catch (l) {}
                                n = n.blend(a && "transparent" !== a ? a : "_default")
                            }
                            n = n.toRgbaString()
                        }
                        try {
                            t.style[i] = n
                        } catch (u) {}
                    }
                }, e.fx.step[i] = function (t) {
                    t.colorInit || (t.start = c(t.elem, i), t.end = c(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
                }
            }), e.cssHooks.borderColor = {
                expand: function (t) {
                    var e = {};
                    return m(["Top", "Right", "Bottom", "Left"], function (i, n) {
                        e["border" + n + "Color"] = t
                    }), e
                }
            }, o = e.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(jQuery),
        function () {
            function i() {
                var e, i, n = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle,
                    s = {};
                if (n && n.length && n[0] && n[n[0]])
                    for (i = n.length; i--;) e = n[i], "string" == typeof n[e] && (s[t.camelCase(e)] = n[e]);
                else
                    for (e in n) "string" == typeof n[e] && (s[e] = n[e]);
                return s
            }

            function n(e, i) {
                var n, s, o = {};
                for (n in i) s = i[n], e[n] !== s && (r[n] || (t.fx.step[n] || !isNaN(parseFloat(s))) && (o[n] = s));
                return o
            }
            var s = ["add", "remove", "toggle"],
                r = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
                t.fx.step[i] = function (t) {
                    ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
                }
            }), t.effects.animateClass = function (e, r, o, a) {
                var l = t.speed(r, o, a);
                return this.queue(function () {
                    var r, o = t(this),
                        a = o.attr("class") || "",
                        u = l.children ? o.find("*").andSelf() : o;
                    u = u.map(function () {
                        var e = t(this);
                        return {
                            el: e,
                            start: i.call(this)
                        }
                    }), r = function () {
                        t.each(s, function (t, i) {
                            e[i] && o[i + "Class"](e[i])
                        })
                    }, r(), u = u.map(function () {
                        return this.end = i.call(this.el[0]), this.diff = n(this.start, this.end), this
                    }), o.attr("class", a), u = u.map(function () {
                        var e = this,
                            i = t.Deferred(),
                            n = jQuery.extend({}, l, {
                                queue: !1,
                                complete: function () {
                                    i.resolve(e)
                                }
                            });
                        return this.el.animate(this.diff, n), i.promise()
                    }), t.when.apply(t, u.get()).done(function () {
                        r(), t.each(arguments, function () {
                            var e = this.el;
                            t.each(this.diff, function (t) {
                                e.css(t, "")
                            })
                        }), l.complete.call(o[0])
                    })
                })
            }, t.fn.extend({
                _addClass: t.fn.addClass,
                addClass: function (e, i, n, s) {
                    return i ? t.effects.animateClass.call(this, {
                        add: e
                    }, i, n, s) : this._addClass(e)
                },
                _removeClass: t.fn.removeClass,
                removeClass: function (e, i, n, s) {
                    return i ? t.effects.animateClass.call(this, {
                        remove: e
                    }, i, n, s) : this._removeClass(e)
                },
                _toggleClass: t.fn.toggleClass,
                toggleClass: function (i, n, s, r, o) {
                    return "boolean" == typeof n || n === e ? s ? t.effects.animateClass.call(this, n ? {
                        add: i
                    } : {
                        remove: i
                    }, s, r, o) : this._toggleClass(i, n) : t.effects.animateClass.call(this, {
                        toggle: i
                    }, n, s, r)
                },
                switchClass: function (e, i, n, s, r) {
                    return t.effects.animateClass.call(this, {
                        add: i,
                        remove: e
                    }, n, s, r)
                }
            })
        }(),
        function () {
            function s(e, i, n, s) {
                return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                    effect: e
                }, null == i && (i = {}), t.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (s = n, n = i, i = {}), t.isFunction(n) && (s = n, n = null), i && t.extend(e, i), n = n || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default, e.complete = s || i.complete, e
            }

            function r(e) {
                return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? !1 : i && t.effects[e] ? !1 : !0
            }
            t.extend(t.effects, {
                version: "1.9.2",
                save: function (t, e) {
                    for (var i = 0; i < e.length; i++) null !== e[i] && t.data(n + e[i], t[0].style[e[i]])
                },
                restore: function (t, i) {
                    var s, r;
                    for (r = 0; r < i.length; r++) null !== i[r] && (s = t.data(n + i[r]), s === e && (s = ""), t.css(i[r], s))
                },
                setMode: function (t, e) {
                    return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                },
                getBaseline: function (t, e) {
                    var i, n;
                    switch (t[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = t[0] / e.height
                    }
                    switch (t[1]) {
                        case "left":
                            n = 0;
                            break;
                        case "center":
                            n = .5;
                            break;
                        case "right":
                            n = 1;
                            break;
                        default:
                            n = t[1] / e.width
                    }
                    return {
                        x: n,
                        y: i
                    }
                },
                createWrapper: function (e) {
                    if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                    var i = {
                            width: e.outerWidth(!0),
                            height: e.outerHeight(!0),
                            "float": e.css("float")
                        }, n = t("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        s = {
                            width: e.width(),
                            height: e.height()
                        }, r = document.activeElement;
                    try {
                        r.id
                    } catch (o) {
                        r = document.body
                    }
                    return e.wrap(n), (e[0] === r || t.contains(e[0], r)) && t(r).focus(), n = e.parent(), "static" === e.css("position") ? (n.css({
                        position: "relative"
                    }), e.css({
                        position: "relative"
                    })) : (t.extend(i, {
                        position: e.css("position"),
                        zIndex: e.css("z-index")
                    }), t.each(["top", "left", "bottom", "right"], function (t, n) {
                        i[n] = e.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                    }), e.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), e.css(s), n.css(i).show()
                },
                removeWrapper: function (e) {
                    var i = document.activeElement;
                    return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
                },
                setTransition: function (e, i, n, s) {
                    return s = s || {}, t.each(i, function (t, i) {
                        var r = e.cssUnit(i);
                        r[0] > 0 && (s[i] = r[0] * n + r[1])
                    }), s
                }
            }), t.fn.extend({
                effect: function () {
                    function e(e) {
                        function i() {
                            t.isFunction(r) && r.call(s[0]), t.isFunction(e) && e()
                        }
                        var s = t(this),
                            r = n.complete,
                            o = n.mode;
                        (s.is(":hidden") ? "hide" === o : "show" === o) ? i() : a.call(s[0], n, i)
                    }
                    var n = s.apply(this, arguments),
                        r = n.mode,
                        o = n.queue,
                        a = t.effects.effect[n.effect],
                        l = !a && i && t.effects[n.effect];
                    return t.fx.off || !a && !l ? r ? this[r](n.duration, n.complete) : this.each(function () {
                        n.complete && n.complete.call(this)
                    }) : a ? o === !1 ? this.each(e) : this.queue(o || "fx", e) : l.call(this, {
                        options: n,
                        duration: n.duration,
                        callback: n.complete,
                        mode: n.mode
                    })
                },
                _show: t.fn.show,
                show: function (t) {
                    if (r(t)) return this._show.apply(this, arguments);
                    var e = s.apply(this, arguments);
                    return e.mode = "show", this.effect.call(this, e)
                },
                _hide: t.fn.hide,
                hide: function (t) {
                    if (r(t)) return this._hide.apply(this, arguments);
                    var e = s.apply(this, arguments);
                    return e.mode = "hide", this.effect.call(this, e)
                },
                __toggle: t.fn.toggle,
                toggle: function (e) {
                    if (r(e) || "boolean" == typeof e || t.isFunction(e)) return this.__toggle.apply(this, arguments);
                    var i = s.apply(this, arguments);
                    return i.mode = "toggle", this.effect.call(this, i)
                },
                cssUnit: function (e) {
                    var i = this.css(e),
                        n = [];
                    return t.each(["em", "px", "%", "pt"], function (t, e) {
                        i.indexOf(e) > 0 && (n = [parseFloat(i), e])
                    }), n
                }
            })
        }(),
        function () {
            var e = {};
            t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
                e[i] = function (e) {
                    return Math.pow(e, t + 2)
                }
            }), t.extend(e, {
                Sine: function (t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                },
                Circ: function (t) {
                    return 1 - Math.sqrt(1 - t * t)
                },
                Elastic: function (t) {
                    return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                },
                Back: function (t) {
                    return t * t * (3 * t - 2)
                },
                Bounce: function (t) {
                    for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                }
            }), t.each(e, function (e, i) {
                t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) {
                    return 1 - i(1 - t)
                }, t.easing["easeInOut" + e] = function (t) {
                    return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
                }
            })
        }()
}(jQuery),
    function (t) {
        var e = 0,
            i = {}, n = {};
        i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide", n.height = n.paddingTop = n.paddingBottom = n.borderTopWidth = n.borderBottomWidth = "show", t.widget("ui.accordion", {
            version: "1.9.2",
            options: {
                active: 0,
                animate: {},
                collapsible: !1,
                event: "click",
                header: "> li > :first-child,> :not(li):even",
                heightStyle: "auto",
                icons: {
                    activeHeader: "ui-icon-triangle-1-s",
                    header: "ui-icon-triangle-1-e"
                },
                activate: null,
                beforeActivate: null
            },
            _create: function () {
                var i = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++e),
                    n = this.options;
                this.prevShow = this.prevHide = t(), this.element.addClass("ui-accordion ui-widget ui-helper-reset"), this.headers = this.element.find(n.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this._hoverable(this.headers), this._focusable(this.headers), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(), n.collapsible || n.active !== !1 && null != n.active || (n.active = 0), n.active < 0 && (n.active += this.headers.length), this.active = this._findActive(n.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top"), this.active.next().addClass("ui-accordion-content-active").show(), this._createIcons(), this.refresh(), this.element.attr("role", "tablist"), this.headers.attr("role", "tab").each(function (e) {
                    var n = t(this),
                        s = n.attr("id"),
                        r = n.next(),
                        o = r.attr("id");
                    s || (s = i + "-header-" + e, n.attr("id", s)), o || (o = i + "-panel-" + e, r.attr("id", o)), n.attr("aria-controls", o), r.attr("aria-labelledby", s)
                }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    tabIndex: -1
                }).next().attr({
                        "aria-expanded": "false",
                        "aria-hidden": "true"
                    }).hide(), this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    tabIndex: 0
                }).next().attr({
                        "aria-expanded": "true",
                        "aria-hidden": "false"
                    }) : this.headers.eq(0).attr("tabIndex", 0), this._on(this.headers, {
                    keydown: "_keydown"
                }), this._on(this.headers.next(), {
                    keydown: "_panelKeyDown"
                }), this._setupEvents(n.event)
            },
            _getCreateEventData: function () {
                return {
                    header: this.active,
                    content: this.active.length ? this.active.next() : t()
                }
            },
            _createIcons: function () {
                var e = this.options.icons;
                e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"))
            },
            _destroyIcons: function () {
                this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
            },
            _destroy: function () {
                var t;
                this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function () {
                    /^ui-accordion/.test(this.id) && this.removeAttribute("id")
                }), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function () {
                    /^ui-accordion/.test(this.id) && this.removeAttribute("id")
                }), "content" !== this.options.heightStyle && t.css("height", "")
            },
            _setOption: function (t, e) {
                return "active" === t ? (this._activate(e), void 0) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), "disabled" === t && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !! e), void 0)
            },
            _keydown: function (e) {
                if (!e.altKey && !e.ctrlKey) {
                    var i = t.ui.keyCode,
                        n = this.headers.length,
                        s = this.headers.index(e.target),
                        r = !1;
                    switch (e.keyCode) {
                        case i.RIGHT:
                        case i.DOWN:
                            r = this.headers[(s + 1) % n];
                            break;
                        case i.LEFT:
                        case i.UP:
                            r = this.headers[(s - 1 + n) % n];
                            break;
                        case i.SPACE:
                        case i.ENTER:
                            this._eventHandler(e);
                            break;
                        case i.HOME:
                            r = this.headers[0];
                            break;
                        case i.END:
                            r = this.headers[n - 1]
                    }
                    r && (t(e.target).attr("tabIndex", -1), t(r).attr("tabIndex", 0), r.focus(), e.preventDefault())
                }
            },
            _panelKeyDown: function (e) {
                e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
            },
            refresh: function () {
                var e, i, n = this.options.heightStyle,
                    s = this.element.parent();
                "fill" === n ? (t.support.minHeight || (i = s.css("overflow"), s.css("overflow", "hidden")), e = s.height(), this.element.siblings(":visible").each(function () {
                    var i = t(this),
                        n = i.css("position");
                    "absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0))
                }), i && s.css("overflow", i), this.headers.each(function () {
                    e -= t(this).outerHeight(!0)
                }), this.headers.next().each(function () {
                    t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
                }).css("overflow", "auto")) : "auto" === n && (e = 0, this.headers.next().each(function () {
                    e = Math.max(e, t(this).css("height", "").height())
                }).height(e))
            },
            _activate: function (e) {
                var i = this._findActive(e)[0];
                i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: t.noop
                }))
            },
            _findActive: function (e) {
                return "number" == typeof e ? this.headers.eq(e) : t()
            },
            _setupEvents: function (e) {
                var i = {};
                e && (t.each(e.split(" "), function (t, e) {
                    i[e] = "_eventHandler"
                }), this._on(this.headers, i))
            },
            _eventHandler: function (e) {
                var i = this.options,
                    n = this.active,
                    s = t(e.currentTarget),
                    r = s[0] === n[0],
                    o = r && i.collapsible,
                    a = o ? t() : s.next(),
                    l = n.next(),
                    u = {
                        oldHeader: n,
                        oldPanel: l,
                        newHeader: o ? t() : s,
                        newPanel: a
                    };
                e.preventDefault(), r && !i.collapsible || this._trigger("beforeActivate", e, u) === !1 || (i.active = o ? !1 : this.headers.index(s), this.active = r ? t() : s, this._toggle(u), n.removeClass("ui-accordion-header-active ui-state-active"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), r || (s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), s.next().addClass("ui-accordion-content-active")))
            },
            _toggle: function (e) {
                var i = e.newPanel,
                    n = this.prevShow.length ? this.prevShow : e.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = n, this.options.animate ? this._animate(i, n, e) : (n.hide(), i.show(), this._toggleComplete(e)), n.attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }), n.prev().attr("aria-selected", "false"), i.length && n.length ? n.prev().attr("tabIndex", -1) : i.length && this.headers.filter(function () {
                    return 0 === t(this).attr("tabIndex")
                }).attr("tabIndex", -1), i.attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                }).prev().attr({
                        "aria-selected": "true",
                        tabIndex: 0
                    })
            },
            _animate: function (t, e, s) {
                var r, o, a, l = this,
                    u = 0,
                    c = t.length && (!e.length || t.index() < e.index()),
                    h = this.options.animate || {}, d = c && h.down || h,
                    p = function () {
                        l._toggleComplete(s)
                    };
                return "number" == typeof d && (a = d), "string" == typeof d && (o = d), o = o || d.easing || h.easing, a = a || d.duration || h.duration, e.length ? t.length ? (r = t.show().outerHeight(), e.animate(i, {
                    duration: a,
                    easing: o,
                    step: function (t, e) {
                        e.now = Math.round(t)
                    }
                }), t.hide().animate(n, {
                    duration: a,
                    easing: o,
                    complete: p,
                    step: function (t, i) {
                        i.now = Math.round(t), "height" !== i.prop ? u += i.now : "content" !== l.options.heightStyle && (i.now = Math.round(r - e.outerHeight() - u), u = 0)
                    }
                }), void 0) : e.animate(i, a, o, p) : t.animate(n, a, o, p)
            },
            _toggleComplete: function (t) {
                var e = t.oldPanel;
                e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
            }
        }), t.uiBackCompat !== !1 && (! function (t, e) {
            t.extend(e.options, {
                navigation: !1,
                navigationFilter: function () {
                    return this.href.toLowerCase() === location.href.toLowerCase()
                }
            });
            var i = e._create;
            e._create = function () {
                if (this.options.navigation) {
                    var e = this,
                        n = this.element.find(this.options.header),
                        s = n.next(),
                        r = n.add(s).find("a").filter(this.options.navigationFilter)[0];
                    r && n.add(s).each(function (i) {
                        return t.contains(this, r) ? (e.options.active = Math.floor(i / 2), !1) : void 0
                    })
                }
                i.call(this)
            }
        }(jQuery, jQuery.ui.accordion.prototype), function (t, e) {
            t.extend(e.options, {
                heightStyle: null,
                autoHeight: !0,
                clearStyle: !1,
                fillSpace: !1
            });
            var i = e._create,
                n = e._setOption;
            t.extend(e, {
                _create: function () {
                    this.options.heightStyle = this.options.heightStyle || this._mergeHeightStyle(), i.call(this)
                },
                _setOption: function (t) {
                    ("autoHeight" === t || "clearStyle" === t || "fillSpace" === t) && (this.options.heightStyle = this._mergeHeightStyle()), n.apply(this, arguments)
                },
                _mergeHeightStyle: function () {
                    var t = this.options;
                    return t.fillSpace ? "fill" : t.clearStyle ? "content" : t.autoHeight ? "auto" : void 0
                }
            })
        }(jQuery, jQuery.ui.accordion.prototype), function (t, e) {
            t.extend(e.options.icons, {
                activeHeader: null,
                headerSelected: "ui-icon-triangle-1-s"
            });
            var i = e._createIcons;
            e._createIcons = function () {
                this.options.icons && (this.options.icons.activeHeader = this.options.icons.activeHeader || this.options.icons.headerSelected), i.call(this)
            }
        }(jQuery, jQuery.ui.accordion.prototype), function (t, e) {
            e.activate = e._activate;
            var i = e._findActive;
            e._findActive = function (t) {
                return -1 === t && (t = !1), t && "number" != typeof t && (t = this.headers.index(this.headers.filter(t)), -1 === t && (t = !1)), i.call(this, t)
            }
        }(jQuery, jQuery.ui.accordion.prototype), jQuery.ui.accordion.prototype.resize = jQuery.ui.accordion.prototype.refresh, function (t, e) {
            t.extend(e.options, {
                change: null,
                changestart: null
            });
            var i = e._trigger;
            e._trigger = function (t, e, n) {
                var s = i.apply(this, arguments);
                return s ? ("beforeActivate" === t ? s = i.call(this, "changestart", e, {
                    oldHeader: n.oldHeader,
                    oldContent: n.oldPanel,
                    newHeader: n.newHeader,
                    newContent: n.newPanel
                }) : "activate" === t && (s = i.call(this, "change", e, {
                    oldHeader: n.oldHeader,
                    oldContent: n.oldPanel,
                    newHeader: n.newHeader,
                    newContent: n.newPanel
                })), s) : !1
            }
        }(jQuery, jQuery.ui.accordion.prototype), function (t, e) {
            t.extend(e.options, {
                animate: null,
                animated: "slide"
            });
            var i = e._create;
            e._create = function () {
                var t = this.options;
                null === t.animate && (t.animate = t.animated ? "slide" === t.animated ? 300 : "bounceslide" === t.animated ? {
                    duration: 200,
                    down: {
                        easing: "easeOutBounce",
                        duration: 1e3
                    }
                } : t.animated : !1), i.call(this)
            }
        }(jQuery, jQuery.ui.accordion.prototype))
    }(jQuery),
    function (t) {
        var e = 0;
        t.widget("ui.autocomplete", {
            version: "1.9.2",
            defaultElement: "<input>",
            options: {
                appendTo: "body",
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            pending: 0,
            _create: function () {
                var e, i, n;
                this.isMultiLine = this._isMultiLine(), this.valueMethod = this.element[this.element.is("input,textarea") ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function (s) {
                        if (this.element.prop("readOnly")) return e = !0, n = !0, i = !0, void 0;
                        e = !1, n = !1, i = !1;
                        var r = t.ui.keyCode;
                        switch (s.keyCode) {
                            case r.PAGE_UP:
                                e = !0, this._move("previousPage", s);
                                break;
                            case r.PAGE_DOWN:
                                e = !0, this._move("nextPage", s);
                                break;
                            case r.UP:
                                e = !0, this._keyEvent("previous", s);
                                break;
                            case r.DOWN:
                                e = !0, this._keyEvent("next", s);
                                break;
                            case r.ENTER:
                            case r.NUMPAD_ENTER:
                                this.menu.active && (e = !0, s.preventDefault(), this.menu.select(s));
                                break;
                            case r.TAB:
                                this.menu.active && this.menu.select(s);
                                break;
                            case r.ESCAPE:
                                this.menu.element.is(":visible") && (this._value(this.term), this.close(s), s.preventDefault());
                                break;
                            default:
                                i = !0, this._searchTimeout(s)
                        }
                    },
                    keypress: function (n) {
                        if (e) return e = !1, n.preventDefault(), void 0;
                        if (!i) {
                            var s = t.ui.keyCode;
                            switch (n.keyCode) {
                                case s.PAGE_UP:
                                    this._move("previousPage", n);
                                    break;
                                case s.PAGE_DOWN:
                                    this._move("nextPage", n);
                                    break;
                                case s.UP:
                                    this._keyEvent("previous", n);
                                    break;
                                case s.DOWN:
                                    this._keyEvent("next", n)
                            }
                        }
                    },
                    input: function (t) {
                        return n ? (n = !1, t.preventDefault(), void 0) : (this._searchTimeout(t), void 0)
                    },
                    focus: function () {
                        this.selectedItem = null, this.previous = this._value()
                    },
                    blur: function (t) {
                        return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(t), this._change(t), void 0)
                    }
                }), this._initSource(), this.menu = t("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo || "body")[0]).menu({
                    input: t(),
                    role: null
                }).zIndex(this.element.zIndex() + 1).hide().data("menu"), this._on(this.menu.element, {
                    mousedown: function (e) {
                        e.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                            delete this.cancelBlur
                        });
                        var i = this.menu.element[0];
                        t(e.target).closest(".ui-menu-item").length || this._delay(function () {
                            var e = this;
                            this.document.one("mousedown", function (n) {
                                n.target === e.element[0] || n.target === i || t.contains(i, n.target) || e.close()
                            })
                        })
                    },
                    menufocus: function (e, i) {
                        if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type))) return this.menu.blur(), this.document.one("mousemove", function () {
                            t(e.target).trigger(e.originalEvent)
                        }), void 0;
                        var n = i.item.data("ui-autocomplete-item") || i.item.data("item.autocomplete");
                        !1 !== this._trigger("focus", e, {
                            item: n
                        }) ? e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value) : this.liveRegion.text(n.value)
                    },
                    menuselect: function (t, e) {
                        var i = e.item.data("ui-autocomplete-item") || e.item.data("item.autocomplete"),
                            n = this.previous;
                        this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = n, this._delay(function () {
                            this.previous = n, this.selectedItem = i
                        })), !1 !== this._trigger("select", t, {
                            item: i
                        }) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
                    }
                }), this.liveRegion = t("<span>", {
                    role: "status",
                    "aria-live": "polite"
                }).addClass("ui-helper-hidden-accessible").insertAfter(this.element), t.fn.bgiframe && this.menu.element.bgiframe(), this._on(this.window, {
                    beforeunload: function () {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function () {
                clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function (t, e) {
                this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this.document.find(e || "body")[0]), "disabled" === t && e && this.xhr && this.xhr.abort()
            },
            _isMultiLine: function () {
                return this.element.is("textarea") ? !0 : this.element.is("input") ? !1 : this.element.prop("isContentEditable")
            },
            _initSource: function () {
                var e, i, n = this;
                t.isArray(this.options.source) ? (e = this.options.source, this.source = function (i, n) {
                    n(t.ui.autocomplete.filter(e, i.term))
                }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (e, s) {
                    n.xhr && n.xhr.abort(), n.xhr = t.ajax({
                        url: i,
                        data: e,
                        dataType: "json",
                        success: function (t) {
                            s(t)
                        },
                        error: function () {
                            s([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function (t) {
                clearTimeout(this.searching), this.searching = this._delay(function () {
                    this.term !== this._value() && (this.selectedItem = null, this.search(null, t))
                }, this.options.delay)
            },
            search: function (t, e) {
                return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
            },
            _search: function (t) {
                this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                    term: t
                }, this._response())
            },
            _response: function () {
                var t = this,
                    i = ++e;
                return function (n) {
                    i === e && t.__response(n), t.pending--, t.pending || t.element.removeClass("ui-autocomplete-loading")
                }
            },
            __response: function (t) {
                t && (t = this._normalize(t)), this._trigger("response", null, {
                    content: t
                }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
            },
            close: function (t) {
                this.cancelSearch = !0, this._close(t)
            },
            _close: function (t) {
                this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
            },
            _change: function (t) {
                this.previous !== this._value() && this._trigger("change", t, {
                    item: this.selectedItem
                })
            },
            _normalize: function (e) {
                return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) {
                    return "string" == typeof e ? {
                        label: e,
                        value: e
                    } : t.extend({
                        label: e.label || e.value,
                        value: e.value || e.label
                    }, e)
                })
            },
            _suggest: function (e) {
                var i = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
                this._renderMenu(i, e), this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
                    of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next()
            },
            _resizeMenu: function () {
                var t = this.menu.element;
                t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function (e, i) {
                var n = this;
                t.each(i, function (t, i) {
                    n._renderItemData(e, i)
                })
            },
            _renderItemData: function (t, e) {
                return this._renderItem(t, e).data("ui-autocomplete-item", e)
            },
            _renderItem: function (e, i) {
                return t("<li>").append(t("<a>").text(i.label)).appendTo(e)
            },
            _move: function (t, e) {
                return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this._value(this.term), this.menu.blur(), void 0) : (this.menu[t](e), void 0) : (this.search(null, e), void 0)
            },
            widget: function () {
                return this.menu.element
            },
            _value: function () {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function (t, e) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
            }
        }), t.extend(t.ui.autocomplete, {
            escapeRegex: function (t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function (e, i) {
                var n = new RegExp(t.ui.autocomplete.escapeRegex(i), "i");
                return t.grep(e, function (t) {
                    return n.test(t.label || t.value || t)
                })
            }
        }), t.widget("ui.autocomplete", t.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function (t) {
                        return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function (t) {
                var e;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.text(e))
            }
        })
    }(jQuery),
    function (t) {
        var e, i, n, s, r = "ui-button ui-widget ui-state-default ui-corner-all",
            o = "ui-state-hover ui-state-active ",
            a = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
            l = function () {
                var e = t(this).find(":ui-button");
                setTimeout(function () {
                    e.button("refresh")
                }, 1)
            }, u = function (e) {
                var i = e.name,
                    n = e.form,
                    s = t([]);
                return i && (s = n ? t(n).find("[name='" + i + "']") : t("[name='" + i + "']", e.ownerDocument).filter(function () {
                    return !this.form
                })), s
            };
        t.widget("ui.button", {
            version: "1.9.2",
            defaultElement: "<button>",
            options: {
                disabled: null,
                text: !0,
                label: null,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function () {
                this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, l), "boolean" != typeof this.options.disabled ? this.options.disabled = !! this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !! this.buttonElement.attr("title");
                var o = this,
                    a = this.options,
                    c = "checkbox" === this.type || "radio" === this.type,
                    h = c ? "" : "ui-state-active",
                    d = "ui-state-focus";
                null === a.label && (a.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(r).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
                    a.disabled || this === e && t(this).addClass("ui-state-active")
                }).bind("mouseleave" + this.eventNamespace, function () {
                        a.disabled || t(this).removeClass(h)
                    }).bind("click" + this.eventNamespace, function (t) {
                        a.disabled && (t.preventDefault(), t.stopImmediatePropagation())
                    }), this.element.bind("focus" + this.eventNamespace, function () {
                    o.buttonElement.addClass(d)
                }).bind("blur" + this.eventNamespace, function () {
                        o.buttonElement.removeClass(d)
                    }), c && (this.element.bind("change" + this.eventNamespace, function () {
                    s || o.refresh()
                }), this.buttonElement.bind("mousedown" + this.eventNamespace, function (t) {
                    a.disabled || (s = !1, i = t.pageX, n = t.pageY)
                }).bind("mouseup" + this.eventNamespace, function (t) {
                        a.disabled || (i !== t.pageX || n !== t.pageY) && (s = !0)
                    })), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                    return a.disabled || s ? !1 : (t(this).toggleClass("ui-state-active"), o.buttonElement.attr("aria-pressed", o.element[0].checked), void 0)
                }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                    if (a.disabled || s) return !1;
                    t(this).addClass("ui-state-active"), o.buttonElement.attr("aria-pressed", "true");
                    var e = o.element[0];
                    u(e).not(e).map(function () {
                        return t(this).button("widget")[0]
                    }).removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
                    return a.disabled ? !1 : (t(this).addClass("ui-state-active"), e = this, o.document.one("mouseup", function () {
                        e = null
                    }), void 0)
                }).bind("mouseup" + this.eventNamespace, function () {
                        return a.disabled ? !1 : (t(this).removeClass("ui-state-active"), void 0)
                    }).bind("keydown" + this.eventNamespace, function (e) {
                        return a.disabled ? !1 : ((e.keyCode === t.ui.keyCode.SPACE || e.keyCode === t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active"), void 0)
                    }).bind("keyup" + this.eventNamespace, function () {
                        t(this).removeClass("ui-state-active")
                    }), this.buttonElement.is("a") && this.buttonElement.keyup(function (e) {
                    e.keyCode === t.ui.keyCode.SPACE && t(this).click()
                })), this._setOption("disabled", a.disabled), this._resetButton()
            },
            _determineButtonType: function () {
                var t, e, i;
                this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
            },
            widget: function () {
                return this.buttonElement
            },
            _destroy: function () {
                this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(r + " " + o + " " + a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
            },
            _setOption: function (t, e) {
                return this._super(t, e), "disabled" === t ? (e ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1), void 0) : (this._resetButton(), void 0)
            },
            refresh: function () {
                var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
                e !== this.options.disabled && this._setOption("disabled", e), "radio" === this.type ? u(this.element[0]).each(function () {
                    t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
            },
            _resetButton: function () {
                if ("input" === this.type) return this.options.label && this.element.val(this.options.label), void 0;
                var e = this.buttonElement.removeClass(a),
                    i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),
                    n = this.options.icons,
                    s = n.primary && n.secondary,
                    r = [];
                n.primary || n.secondary ? (this.options.text && r.push("ui-button-text-icon" + (s ? "s" : n.primary ? "-primary" : "-secondary")), n.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + n.primary + "'></span>"), n.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + n.secondary + "'></span>"), this.options.text || (r.push(s ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", t.trim(i)))) : r.push("ui-button-text-only"), e.addClass(r.join(" "))
            }
        }), t.widget("ui.buttonset", {
            version: "1.9.2",
            options: {
                items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"
            },
            _create: function () {
                this.element.addClass("ui-buttonset")
            },
            _init: function () {
                this.refresh()
            },
            _setOption: function (t, e) {
                "disabled" === t && this.buttons.button("option", t, e), this._super(t, e)
            },
            refresh: function () {
                var e = "rtl" === this.element.css("direction");
                this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
                    return t(this).button("widget")[0]
                }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
            },
            _destroy: function () {
                this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
                    return t(this).button("widget")[0]
                }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
            }
        })
    }(jQuery),
    function ($, undefined) {
        function Datepicker() {
            this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
        }

        function bindHover(t) {
            var e = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return t.delegate(e, "mouseout", function () {
                $(this).removeClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && $(this).removeClass("ui-datepicker-prev-hover"), -1 != this.className.indexOf("ui-datepicker-next") && $(this).removeClass("ui-datepicker-next-hover")
            }).delegate(e, "mouseover", function () {
                    $.datepicker._isDisabledDatepicker(instActive.inline ? t.parent()[0] : instActive.input[0]) || ($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), $(this).addClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && $(this).addClass("ui-datepicker-prev-hover"), -1 != this.className.indexOf("ui-datepicker-next") && $(this).addClass("ui-datepicker-next-hover"))
                })
        }

        function extendRemove(t, e) {
            $.extend(t, e);
            for (var i in e)(null == e[i] || e[i] == undefined) && (t[i] = e[i]);
            return t
        }
        $.extend($.ui, {
            datepicker: {
                version: "1.9.2"
            }
        });
        var PROP_NAME = "datepicker",
            dpuuid = (new Date).getTime(),
            instActive;
        $.extend(Datepicker.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            log: function () {
                this.debug && console.log.apply("", arguments)
            },
            _widgetDatepicker: function () {
                return this.dpDiv
            },
            setDefaults: function (t) {
                return extendRemove(this._defaults, t || {}), this
            },
            _attachDatepicker: function (target, settings) {
                var inlineSettings = null;
                for (var attrName in this._defaults) {
                    var attrValue = target.getAttribute("date:" + attrName);
                    if (attrValue) {
                        inlineSettings = inlineSettings || {};
                        try {
                            inlineSettings[attrName] = eval(attrValue)
                        } catch (err) {
                            inlineSettings[attrName] = attrValue
                        }
                    }
                }
                var nodeName = target.nodeName.toLowerCase(),
                    inline = "div" == nodeName || "span" == nodeName;
                target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
                var inst = this._newInst($(target), inline);
                inst.settings = $.extend({}, settings || {}, inlineSettings || {}), "input" == nodeName ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
            },
            _newInst: function (t, e) {
                var i = t[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
                return {
                    id: i,
                    input: t,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: e,
                    dpDiv: e ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
                }
            },
            _connectDatepicker: function (t, e) {
                var i = $(t);
                e.append = $([]), e.trigger = $([]), i.hasClass(this.markerClassName) || (this._attachments(i, e), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function (t, i, n) {
                    e.settings[i] = n
                }).bind("getData.datepicker", function (t, i) {
                        return this._get(e, i)
                    }), this._autoSize(e), $.data(t, PROP_NAME, e), e.settings.disabled && this._disableDatepicker(t))
            },
            _attachments: function (t, e) {
                var i = this._get(e, "appendText"),
                    n = this._get(e, "isRTL");
                e.append && e.append.remove(), i && (e.append = $('<span class="' + this._appendClass + '">' + i + "</span>"), t[n ? "before" : "after"](e.append)), t.unbind("focus", this._showDatepicker), e.trigger && e.trigger.remove();
                var s = this._get(e, "showOn");
                if (("focus" == s || "both" == s) && t.focus(this._showDatepicker), "button" == s || "both" == s) {
                    var r = this._get(e, "buttonText"),
                        o = this._get(e, "buttonImage");
                    e.trigger = $(this._get(e, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                        src: o,
                        alt: r,
                        title: r
                    }) : $('<button type="button"></button>').addClass(this._triggerClass).html("" == o ? r : $("<img/>").attr({
                        src: o,
                        alt: r,
                        title: r
                    }))), t[n ? "before" : "after"](e.trigger), e.trigger.click(function () {
                        return $.datepicker._datepickerShowing && $.datepicker._lastInput == t[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput != t[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(t[0])) : $.datepicker._showDatepicker(t[0]), !1
                    })
                }
            },
            _autoSize: function (t) {
                if (this._get(t, "autoSize") && !t.inline) {
                    var e = new Date(2009, 11, 20),
                        i = this._get(t, "dateFormat");
                    if (i.match(/[DM]/)) {
                        var n = function (t) {
                            for (var e = 0, i = 0, n = 0; n < t.length; n++) t[n].length > e && (e = t[n].length, i = n);
                            return i
                        };
                        e.setMonth(n(this._get(t, i.match(/MM/) ? "monthNames" : "monthNamesShort"))), e.setDate(n(this._get(t, i.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - e.getDay())
                    }
                    t.input.attr("size", this._formatDate(t, e).length)
                }
            },
            _inlineDatepicker: function (t, e) {
                var i = $(t);
                i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(e.dpDiv).bind("setData.datepicker", function (t, i, n) {
                    e.settings[i] = n
                }).bind("getData.datepicker", function (t, i) {
                        return this._get(e, i)
                    }), $.data(t, PROP_NAME, e), this._setDate(e, this._getDefaultDate(e), !0), this._updateDatepicker(e), this._updateAlternate(e), e.settings.disabled && this._disableDatepicker(t), e.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function (t, e, i, n, s) {
                var r = this._dialogInst;
                if (!r) {
                    this.uuid += 1;
                    var o = "dp" + this.uuid;
                    this._dialogInput = $('<input type="text" id="' + o + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), r = this._dialogInst = this._newInst(this._dialogInput, !1), r.settings = {}, $.data(this._dialogInput[0], PROP_NAME, r)
                }
                if (extendRemove(r.settings, n || {}), e = e && e.constructor == Date ? this._formatDate(r, e) : e, this._dialogInput.val(e), this._pos = s ? s.length ? s : [s.pageX, s.pageY] : null, !this._pos) {
                    var a = document.documentElement.clientWidth,
                        l = document.documentElement.clientHeight,
                        u = document.documentElement.scrollLeft || document.body.scrollLeft,
                        c = document.documentElement.scrollTop || document.body.scrollTop;
                    this._pos = [a / 2 - 100 + u, l / 2 - 150 + c]
                }
                return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), r.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, r), this
            },
            _destroyDatepicker: function (t) {
                var e = $(t),
                    i = $.data(t, PROP_NAME);
                if (e.hasClass(this.markerClassName)) {
                    var n = t.nodeName.toLowerCase();
                    $.removeData(t, PROP_NAME), "input" == n ? (i.append.remove(), i.trigger.remove(), e.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" == n || "span" == n) && e.removeClass(this.markerClassName).empty()
                }
            },
            _enableDatepicker: function (t) {
                var e = $(t),
                    i = $.data(t, PROP_NAME);
                if (e.hasClass(this.markerClassName)) {
                    var n = t.nodeName.toLowerCase();
                    if ("input" == n) t.disabled = !1, i.trigger.filter("button").each(function () {
                        this.disabled = !1
                    }).end().filter("img").css({
                            opacity: "1.0",
                            cursor: ""
                        });
                    else if ("div" == n || "span" == n) {
                        var s = e.children("." + this._inlineClass);
                        s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)
                    }
                    this._disabledInputs = $.map(this._disabledInputs, function (e) {
                        return e == t ? null : e
                    })
                }
            },
            _disableDatepicker: function (t) {
                var e = $(t),
                    i = $.data(t, PROP_NAME);
                if (e.hasClass(this.markerClassName)) {
                    var n = t.nodeName.toLowerCase();
                    if ("input" == n) t.disabled = !0, i.trigger.filter("button").each(function () {
                        this.disabled = !0
                    }).end().filter("img").css({
                            opacity: "0.5",
                            cursor: "default"
                        });
                    else if ("div" == n || "span" == n) {
                        var s = e.children("." + this._inlineClass);
                        s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)
                    }
                    this._disabledInputs = $.map(this._disabledInputs, function (e) {
                        return e == t ? null : e
                    }), this._disabledInputs[this._disabledInputs.length] = t
                }
            },
            _isDisabledDatepicker: function (t) {
                if (!t) return !1;
                for (var e = 0; e < this._disabledInputs.length; e++)
                    if (this._disabledInputs[e] == t) return !0;
                return !1
            },
            _getInst: function (t) {
                try {
                    return $.data(t, PROP_NAME)
                } catch (e) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function (t, e, i) {
                var n = this._getInst(t);
                if (2 == arguments.length && "string" == typeof e) return "defaults" == e ? $.extend({}, $.datepicker._defaults) : n ? "all" == e ? $.extend({}, n.settings) : this._get(n, e) : null;
                var s = e || {};
                if ("string" == typeof e && (s = {}, s[e] = i), n) {
                    this._curInst == n && this._hideDatepicker();
                    var r = this._getDateDatepicker(t, !0),
                        o = this._getMinMaxDate(n, "min"),
                        a = this._getMinMaxDate(n, "max");
                    extendRemove(n.settings, s), null !== o && s.dateFormat !== undefined && s.minDate === undefined && (n.settings.minDate = this._formatDate(n, o)), null !== a && s.dateFormat !== undefined && s.maxDate === undefined && (n.settings.maxDate = this._formatDate(n, a)), this._attachments($(t), n), this._autoSize(n), this._setDate(n, r), this._updateAlternate(n), this._updateDatepicker(n)
                }
            },
            _changeDatepicker: function (t, e, i) {
                this._optionDatepicker(t, e, i)
            },
            _refreshDatepicker: function (t) {
                var e = this._getInst(t);
                e && this._updateDatepicker(e)
            },
            _setDateDatepicker: function (t, e) {
                var i = this._getInst(t);
                i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
            },
            _getDateDatepicker: function (t, e) {
                var i = this._getInst(t);
                return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
            },
            _doKeyDown: function (t) {
                var e = $.datepicker._getInst(t.target),
                    i = !0,
                    n = e.dpDiv.is(".ui-datepicker-rtl");
                if (e._keyEvent = !0, $.datepicker._datepickerShowing) switch (t.keyCode) {
                    case 9:
                        $.datepicker._hideDatepicker(), i = !1;
                        break;
                    case 13:
                        var s = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", e.dpDiv);
                        s[0] && $.datepicker._selectDay(t.target, e.selectedMonth, e.selectedYear, s[0]);
                        var r = $.datepicker._get(e, "onSelect");
                        if (r) {
                            var o = $.datepicker._formatDate(e);
                            r.apply(e.input ? e.input[0] : null, [o, e])
                        } else $.datepicker._hideDatepicker();
                        return !1;
                    case 27:
                        $.datepicker._hideDatepicker();
                        break;
                    case 33:
                        $.datepicker._adjustDate(t.target, t.ctrlKey ? -$.datepicker._get(e, "stepBigMonths") : -$.datepicker._get(e, "stepMonths"), "M");
                        break;
                    case 34:
                        $.datepicker._adjustDate(t.target, t.ctrlKey ? +$.datepicker._get(e, "stepBigMonths") : +$.datepicker._get(e, "stepMonths"), "M");
                        break;
                    case 35:
                        (t.ctrlKey || t.metaKey) && $.datepicker._clearDate(t.target), i = t.ctrlKey || t.metaKey;
                        break;
                    case 36:
                        (t.ctrlKey || t.metaKey) && $.datepicker._gotoToday(t.target), i = t.ctrlKey || t.metaKey;
                        break;
                    case 37:
                        (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, n ? 1 : -1, "D"), i = t.ctrlKey || t.metaKey, t.originalEvent.altKey && $.datepicker._adjustDate(t.target, t.ctrlKey ? -$.datepicker._get(e, "stepBigMonths") : -$.datepicker._get(e, "stepMonths"), "M");
                        break;
                    case 38:
                        (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, -7, "D"), i = t.ctrlKey || t.metaKey;
                        break;
                    case 39:
                        (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, n ? -1 : 1, "D"), i = t.ctrlKey || t.metaKey, t.originalEvent.altKey && $.datepicker._adjustDate(t.target, t.ctrlKey ? +$.datepicker._get(e, "stepBigMonths") : +$.datepicker._get(e, "stepMonths"), "M");
                        break;
                    case 40:
                        (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, 7, "D"), i = t.ctrlKey || t.metaKey;
                        break;
                    default:
                        i = !1
                } else 36 == t.keyCode && t.ctrlKey ? $.datepicker._showDatepicker(this) : i = !1;
                i && (t.preventDefault(), t.stopPropagation())
            },
            _doKeyPress: function (t) {
                var e = $.datepicker._getInst(t.target);
                if ($.datepicker._get(e, "constrainInput")) {
                    var i = $.datepicker._possibleChars($.datepicker._get(e, "dateFormat")),
                        n = String.fromCharCode(t.charCode == undefined ? t.keyCode : t.charCode);
                    return t.ctrlKey || t.metaKey || " " > n || !i || i.indexOf(n) > -1
                }
            },
            _doKeyUp: function (t) {
                var e = $.datepicker._getInst(t.target);
                if (e.input.val() != e.lastVal) try {
                    var i = $.datepicker.parseDate($.datepicker._get(e, "dateFormat"), e.input ? e.input.val() : null, $.datepicker._getFormatConfig(e));
                    i && ($.datepicker._setDateFromField(e), $.datepicker._updateAlternate(e), $.datepicker._updateDatepicker(e))
                } catch (n) {
                    $.datepicker.log(n)
                }
                return !0
            },
            _showDatepicker: function (t) {
                if (t = t.target || t, "input" != t.nodeName.toLowerCase() && (t = $("input", t.parentNode)[0]), !$.datepicker._isDisabledDatepicker(t) && $.datepicker._lastInput != t) {
                    var e = $.datepicker._getInst(t);
                    $.datepicker._curInst && $.datepicker._curInst != e && ($.datepicker._curInst.dpDiv.stop(!0, !0), e && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
                    var i = $.datepicker._get(e, "beforeShow"),
                        n = i ? i.apply(t, [t, e]) : {};
                    if (n !== !1) {
                        extendRemove(e.settings, n), e.lastVal = null, $.datepicker._lastInput = t, $.datepicker._setDateFromField(e), $.datepicker._inDialog && (t.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(t), $.datepicker._pos[1] += t.offsetHeight);
                        var s = !1;
                        $(t).parents().each(function () {
                            return s |= "fixed" == $(this).css("position"), !s
                        });
                        var r = {
                            left: $.datepicker._pos[0],
                            top: $.datepicker._pos[1]
                        };
                        if ($.datepicker._pos = null, e.dpDiv.empty(), e.dpDiv.css({
                            position: "absolute",
                            display: "block",
                            top: "-1000px"
                        }), $.datepicker._updateDatepicker(e), r = $.datepicker._checkOffset(e, r, s), e.dpDiv.css({
                            position: $.datepicker._inDialog && $.blockUI ? "static" : s ? "fixed" : "absolute",
                            display: "none",
                            left: r.left + "px",
                            top: r.top + "px"
                        }), !e.inline) {
                            var o = $.datepicker._get(e, "showAnim"),
                                a = $.datepicker._get(e, "duration"),
                                l = function () {
                                    var t = e.dpDiv.find("iframe.ui-datepicker-cover");
                                    if (t.length) {
                                        var i = $.datepicker._getBorders(e.dpDiv);
                                        t.css({
                                            left: -i[0],
                                            top: -i[1],
                                            width: e.dpDiv.outerWidth(),
                                            height: e.dpDiv.outerHeight()
                                        })
                                    }
                                };
                            e.dpDiv.zIndex($(t).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && ($.effects.effect[o] || $.effects[o]) ? e.dpDiv.show(o, $.datepicker._get(e, "showOptions"), a, l) : e.dpDiv[o || "show"](o ? a : null, l), o && a || l(), e.input.is(":visible") && !e.input.is(":disabled") && e.input.focus(), $.datepicker._curInst = e
                        }
                    }
                }
            },
            _updateDatepicker: function (t) {
                this.maxRows = 4;
                var e = $.datepicker._getBorders(t.dpDiv);
                instActive = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
                var i = t.dpDiv.find("iframe.ui-datepicker-cover");
                i.length && i.css({
                    left: -e[0],
                    top: -e[1],
                    width: t.dpDiv.outerWidth(),
                    height: t.dpDiv.outerHeight()
                }), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
                var n = this._getNumberOfMonths(t),
                    s = n[1],
                    r = 17;
                if (t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", r * s + "em"), t.dpDiv[(1 != n[0] || 1 != n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t == $.datepicker._curInst && $.datepicker._datepickerShowing && t.input && t.input.is(":visible") && !t.input.is(":disabled") && t.input[0] != document.activeElement && t.input.focus(), t.yearshtml) {
                    var o = t.yearshtml;
                    setTimeout(function () {
                        o === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), o = t.yearshtml = null
                    }, 0)
                }
            },
            _getBorders: function (t) {
                var e = function (t) {
                    return {
                        thin: 1,
                        medium: 2,
                        thick: 3
                    }[t] || t
                };
                return [parseFloat(e(t.css("border-left-width"))), parseFloat(e(t.css("border-top-width")))]
            },
            _checkOffset: function (t, e, i) {
                var n = t.dpDiv.outerWidth(),
                    s = t.dpDiv.outerHeight(),
                    r = t.input ? t.input.outerWidth() : 0,
                    o = t.input ? t.input.outerHeight() : 0,
                    a = document.documentElement.clientWidth + (i ? 0 : $(document).scrollLeft()),
                    l = document.documentElement.clientHeight + (i ? 0 : $(document).scrollTop());
                return e.left -= this._get(t, "isRTL") ? n - r : 0, e.left -= i && e.left == t.input.offset().left ? $(document).scrollLeft() : 0, e.top -= i && e.top == t.input.offset().top + o ? $(document).scrollTop() : 0, e.left -= Math.min(e.left, e.left + n > a && a > n ? Math.abs(e.left + n - a) : 0), e.top -= Math.min(e.top, e.top + s > l && l > s ? Math.abs(s + o) : 0), e
            },
            _findPos: function (t) {
                for (var e = this._getInst(t), i = this._get(e, "isRTL"); t && ("hidden" == t.type || 1 != t.nodeType || $.expr.filters.hidden(t));) t = t[i ? "previousSibling" : "nextSibling"];
                var n = $(t).offset();
                return [n.left, n.top]
            },
            _hideDatepicker: function (t) {
                var e = this._curInst;
                if (e && (!t || e == $.data(t, PROP_NAME)) && this._datepickerShowing) {
                    var i = this._get(e, "showAnim"),
                        n = this._get(e, "duration"),
                        s = function () {
                            $.datepicker._tidyDialog(e)
                        };
                    $.effects && ($.effects.effect[i] || $.effects[i]) ? e.dpDiv.hide(i, $.datepicker._get(e, "showOptions"), n, s) : e.dpDiv["slideDown" == i ? "slideUp" : "fadeIn" == i ? "fadeOut" : "hide"](i ? n : null, s), i || s(), this._datepickerShowing = !1;
                    var r = this._get(e, "onClose");
                    r && r.apply(e.input ? e.input[0] : null, [e.input ? e.input.val() : "", e]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px"
                    }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1
                }
            },
            _tidyDialog: function (t) {
                t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick: function (t) {
                if ($.datepicker._curInst) {
                    var e = $(t.target),
                        i = $.datepicker._getInst(e[0]);
                    (e[0].id != $.datepicker._mainDivId && 0 == e.parents("#" + $.datepicker._mainDivId).length && !e.hasClass($.datepicker.markerClassName) && !e.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || e.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != i) && $.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function (t, e, i) {
                var n = $(t),
                    s = this._getInst(n[0]);
                this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(s, e + ("M" == i ? this._get(s, "showCurrentAtPos") : 0), i), this._updateDatepicker(s))
            },
            _gotoToday: function (t) {
                var e = $(t),
                    i = this._getInst(e[0]);
                if (this._get(i, "gotoCurrent") && i.currentDay) i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear;
                else {
                    var n = new Date;
                    i.selectedDay = n.getDate(), i.drawMonth = i.selectedMonth = n.getMonth(), i.drawYear = i.selectedYear = n.getFullYear()
                }
                this._notifyChange(i), this._adjustDate(e)
            },
            _selectMonthYear: function (t, e, i) {
                var n = $(t),
                    s = this._getInst(n[0]);
                s["selected" + ("M" == i ? "Month" : "Year")] = s["draw" + ("M" == i ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(n)
            },
            _selectDay: function (t, e, i, n) {
                var s = $(t);
                if (!$(n).hasClass(this._unselectableClass) && !this._isDisabledDatepicker(s[0])) {
                    var r = this._getInst(s[0]);
                    r.selectedDay = r.currentDay = $("a", n).html(), r.selectedMonth = r.currentMonth = e, r.selectedYear = r.currentYear = i, this._selectDate(t, this._formatDate(r, r.currentDay, r.currentMonth, r.currentYear))
                }
            },
            _clearDate: function (t) {
                var e = $(t);
                this._getInst(e[0]), this._selectDate(e, "")
            },
            _selectDate: function (t, e) {
                var i = $(t),
                    n = this._getInst(i[0]);
                e = null != e ? e : this._formatDate(n), n.input && n.input.val(e), this._updateAlternate(n);
                var s = this._get(n, "onSelect");
                s ? s.apply(n.input ? n.input[0] : null, [e, n]) : n.input && n.input.trigger("change"), n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], "object" != typeof n.input[0] && n.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function (t) {
                var e = this._get(t, "altField");
                if (e) {
                    var i = this._get(t, "altFormat") || this._get(t, "dateFormat"),
                        n = this._getDate(t),
                        s = this.formatDate(i, n, this._getFormatConfig(t));
                    $(e).each(function () {
                        $(this).val(s)
                    })
                }
            },
            noWeekends: function (t) {
                var e = t.getDay();
                return [e > 0 && 6 > e, ""]
            },
            iso8601Week: function (t) {
                var e = new Date(t.getTime());
                e.setDate(e.getDate() + 4 - (e.getDay() || 7));
                var i = e.getTime();
                return e.setMonth(0), e.setDate(1), Math.floor(Math.round((i - e) / 864e5) / 7) + 1
            },
            parseDate: function (t, e, i) {
                if (null == t || null == e) throw "Invalid arguments";
                if (e = "object" == typeof e ? e.toString() : e + "", "" == e) return null;
                var n = (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff;
                n = "string" != typeof n ? n : (new Date).getFullYear() % 100 + parseInt(n, 10);
                for (var s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, r = (i ? i.dayNames : null) || this._defaults.dayNames, o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, a = (i ? i.monthNames : null) || this._defaults.monthNames, l = -1, u = -1, c = -1, h = -1, d = !1, p = function (e) {
                    var i = y + 1 < t.length && t.charAt(y + 1) == e;
                    return i && y++, i
                }, f = function (t) {
                    var i = p(t),
                        n = "@" == t ? 14 : "!" == t ? 20 : "y" == t && i ? 4 : "o" == t ? 3 : 2,
                        s = new RegExp("^\\d{1," + n + "}"),
                        r = e.substring(v).match(s);
                    if (!r) throw "Missing number at position " + v;
                    return v += r[0].length, parseInt(r[0], 10)
                }, m = function (t, i, n) {
                    var s = $.map(p(t) ? n : i, function (t, e) {
                            return [[e, t]]
                        }).sort(function (t, e) {
                                return -(t[1].length - e[1].length)
                            }),
                        r = -1;
                    if ($.each(s, function (t, i) {
                        var n = i[1];
                        return e.substr(v, n.length).toLowerCase() == n.toLowerCase() ? (r = i[0], v += n.length, !1) : void 0
                    }), -1 != r) return r + 1;
                    throw "Unknown name at position " + v
                }, g = function () {
                    if (e.charAt(v) != t.charAt(y)) throw "Unexpected literal at position " + v;
                    v++
                }, v = 0, y = 0; y < t.length; y++)
                    if (d) "'" != t.charAt(y) || p("'") ? g() : d = !1;
                    else switch (t.charAt(y)) {
                        case "d":
                            c = f("d");
                            break;
                        case "D":
                            m("D", s, r);
                            break;
                        case "o":
                            h = f("o");
                            break;
                        case "m":
                            u = f("m");
                            break;
                        case "M":
                            u = m("M", o, a);
                            break;
                        case "y":
                            l = f("y");
                            break;
                        case "@":
                            var _ = new Date(f("@"));
                            l = _.getFullYear(), u = _.getMonth() + 1, c = _.getDate();
                            break;
                        case "!":
                            var _ = new Date((f("!") - this._ticksTo1970) / 1e4);
                            l = _.getFullYear(), u = _.getMonth() + 1, c = _.getDate();
                            break;
                        case "'":
                            p("'") ? g() : d = !0;
                            break;
                        default:
                            g()
                    }
                if (v < e.length) {
                    var b = e.substr(v);
                    if (!/^\s+/.test(b)) throw "Extra/unparsed characters found in date: " + b
                }
                if (-1 == l ? l = (new Date).getFullYear() : 100 > l && (l += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (n >= l ? 0 : -100)), h > -1)
                    for (u = 1, c = h;;) {
                        var w = this._getDaysInMonth(l, u - 1);
                        if (w >= c) break;
                        u++, c -= w
                    }
                var _ = this._daylightSavingAdjust(new Date(l, u - 1, c));
                if (_.getFullYear() != l || _.getMonth() + 1 != u || _.getDate() != c) throw "Invalid date";
                return _
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
            formatDate: function (t, e, i) {
                if (!e) return "";
                var n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    s = (i ? i.dayNames : null) || this._defaults.dayNames,
                    r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    o = (i ? i.monthNames : null) || this._defaults.monthNames,
                    a = function (e) {
                        var i = d + 1 < t.length && t.charAt(d + 1) == e;
                        return i && d++, i
                    }, l = function (t, e, i) {
                        var n = "" + e;
                        if (a(t))
                            for (; n.length < i;) n = "0" + n;
                        return n
                    }, u = function (t, e, i, n) {
                        return a(t) ? n[e] : i[e]
                    }, c = "",
                    h = !1;
                if (e)
                    for (var d = 0; d < t.length; d++)
                        if (h) "'" != t.charAt(d) || a("'") ? c += t.charAt(d) : h = !1;
                        else switch (t.charAt(d)) {
                            case "d":
                                c += l("d", e.getDate(), 2);
                                break;
                            case "D":
                                c += u("D", e.getDay(), n, s);
                                break;
                            case "o":
                                c += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                c += l("m", e.getMonth() + 1, 2);
                                break;
                            case "M":
                                c += u("M", e.getMonth(), r, o);
                                break;
                            case "y":
                                c += a("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
                                break;
                            case "@":
                                c += e.getTime();
                                break;
                            case "!":
                                c += 1e4 * e.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                a("'") ? c += "'" : h = !0;
                                break;
                            default:
                                c += t.charAt(d)
                        }
                return c
            },
            _possibleChars: function (t) {
                for (var e = "", i = !1, n = function (e) {
                    var i = s + 1 < t.length && t.charAt(s + 1) == e;
                    return i && s++, i
                }, s = 0; s < t.length; s++)
                    if (i) "'" != t.charAt(s) || n("'") ? e += t.charAt(s) : i = !1;
                    else switch (t.charAt(s)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            e += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            n("'") ? e += "'" : i = !0;
                            break;
                        default:
                            e += t.charAt(s)
                    }
                return e
            },
            _get: function (t, e) {
                return t.settings[e] !== undefined ? t.settings[e] : this._defaults[e]
            },
            _setDateFromField: function (t, e) {
                if (t.input.val() != t.lastVal) {
                    var i, n, s = this._get(t, "dateFormat"),
                        r = t.lastVal = t.input ? t.input.val() : null;
                    i = n = this._getDefaultDate(t);
                    var o = this._getFormatConfig(t);
                    try {
                        i = this.parseDate(s, r, o) || n
                    } catch (a) {
                        this.log(a), r = e ? "" : r
                    }
                    t.selectedDay = i.getDate(), t.drawMonth = t.selectedMonth = i.getMonth(), t.drawYear = t.selectedYear = i.getFullYear(), t.currentDay = r ? i.getDate() : 0, t.currentMonth = r ? i.getMonth() : 0, t.currentYear = r ? i.getFullYear() : 0, this._adjustInstDate(t)
                }
            },
            _getDefaultDate: function (t) {
                return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
            },
            _determineDate: function (t, e, i) {
                var n = function (t) {
                    var e = new Date;
                    return e.setDate(e.getDate() + t), e
                }, s = function (e) {
                    try {
                        return $.datepicker.parseDate($.datepicker._get(t, "dateFormat"), e, $.datepicker._getFormatConfig(t))
                    } catch (i) {}
                    for (var n = (e.toLowerCase().match(/^c/) ? $.datepicker._getDate(t) : null) || new Date, s = n.getFullYear(), r = n.getMonth(), o = n.getDate(), a = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = a.exec(e); l;) {
                        switch (l[2] || "d") {
                            case "d":
                            case "D":
                                o += parseInt(l[1], 10);
                                break;
                            case "w":
                            case "W":
                                o += 7 * parseInt(l[1], 10);
                                break;
                            case "m":
                            case "M":
                                r += parseInt(l[1], 10), o = Math.min(o, $.datepicker._getDaysInMonth(s, r));
                                break;
                            case "y":
                            case "Y":
                                s += parseInt(l[1], 10), o = Math.min(o, $.datepicker._getDaysInMonth(s, r))
                        }
                        l = a.exec(e)
                    }
                    return new Date(s, r, o)
                }, r = null == e || "" === e ? i : "string" == typeof e ? s(e) : "number" == typeof e ? isNaN(e) ? i : n(e) : new Date(e.getTime());
                return r = r && "Invalid Date" == r.toString() ? i : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r)
            },
            _daylightSavingAdjust: function (t) {
                return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
            },
            _setDate: function (t, e, i) {
                var n = !e,
                    s = t.selectedMonth,
                    r = t.selectedYear,
                    o = this._restrictMinMax(t, this._determineDate(t, e, new Date));
                t.selectedDay = t.currentDay = o.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = o.getMonth(), t.drawYear = t.selectedYear = t.currentYear = o.getFullYear(), s == t.selectedMonth && r == t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t))
            },
            _getDate: function (t) {
                var e = !t.currentYear || t.input && "" == t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return e
            },
            _attachHandlers: function (t) {
                var e = this._get(t, "stepMonths"),
                    i = "#" + t.id.replace(/\\\\/g, "\\");
                t.dpDiv.find("[data-handler]").map(function () {
                    var t = {
                        prev: function () {
                            window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, -e, "M")
                        },
                        next: function () {
                            window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, +e, "M")
                        },
                        hide: function () {
                            window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker()
                        },
                        today: function () {
                            window["DP_jQuery_" + dpuuid].datepicker._gotoToday(i)
                        },
                        selectDay: function () {
                            return window["DP_jQuery_" + dpuuid].datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function () {
                            return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "M"), !1
                        },
                        selectYear: function () {
                            return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "Y"), !1
                        }
                    };
                    $(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function (t) {
                var e = new Date;
                e = this._daylightSavingAdjust(new Date(e.getFullYear(), e.getMonth(), e.getDate()));
                var i = this._get(t, "isRTL"),
                    n = this._get(t, "showButtonPanel"),
                    s = this._get(t, "hideIfNoPrevNext"),
                    r = this._get(t, "navigationAsDateFormat"),
                    o = this._getNumberOfMonths(t),
                    a = this._get(t, "showCurrentAtPos"),
                    l = this._get(t, "stepMonths"),
                    u = 1 != o[0] || 1 != o[1],
                    c = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                    h = this._getMinMaxDate(t, "min"),
                    d = this._getMinMaxDate(t, "max"),
                    p = t.drawMonth - a,
                    f = t.drawYear;
                if (0 > p && (p += 12, f--), d) {
                    var m = this._daylightSavingAdjust(new Date(d.getFullYear(), d.getMonth() - o[0] * o[1] + 1, d.getDate()));
                    for (m = h && h > m ? h : m; this._daylightSavingAdjust(new Date(f, p, 1)) > m;) p--, 0 > p && (p = 11, f--)
                }
                t.drawMonth = p, t.drawYear = f;
                var g = this._get(t, "prevText");
                g = r ? this.formatDate(g, this._daylightSavingAdjust(new Date(f, p - l, 1)), this._getFormatConfig(t)) : g;
                var v = this._canAdjustMonth(t, -1, f, p) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + g + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + g + "</span></a>" : s ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + g + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + g + "</span></a>",
                    y = this._get(t, "nextText");
                y = r ? this.formatDate(y, this._daylightSavingAdjust(new Date(f, p + l, 1)), this._getFormatConfig(t)) : y;
                var _ = this._canAdjustMonth(t, 1, f, p) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + y + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + y + "</span></a>" : s ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + y + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + y + "</span></a>",
                    b = this._get(t, "currentText"),
                    w = this._get(t, "gotoCurrent") && t.currentDay ? c : e;
                b = r ? this.formatDate(b, w, this._getFormatConfig(t)) : b;
                var x = t.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(t, "closeText") + "</button>",
                    k = n ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (i ? x : "") + (this._isInRange(t, w) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + b + "</button>" : "") + (i ? "" : x) + "</div>" : "",
                    C = parseInt(this._get(t, "firstDay"), 10);
                C = isNaN(C) ? 0 : C;
                var T = this._get(t, "showWeek"),
                    S = this._get(t, "dayNames");
                this._get(t, "dayNamesShort");
                var E = this._get(t, "dayNamesMin"),
                    P = this._get(t, "monthNames"),
                    D = this._get(t, "monthNamesShort"),
                    I = this._get(t, "beforeShowDay"),
                    M = this._get(t, "showOtherMonths"),
                    A = this._get(t, "selectOtherMonths");
                this._get(t, "calculateWeek") || this.iso8601Week;
                for (var N = this._getDefaultDate(t), V = "", j = 0; j < o[0]; j++) {
                    var F = "";
                    this.maxRows = 4;
                    for (var O = 0; O < o[1]; O++) {
                        var H = this._daylightSavingAdjust(new Date(f, p, t.selectedDay)),
                            L = " ui-corner-all",
                            B = "";
                        if (u) {
                            if (B += '<div class="ui-datepicker-group', o[1] > 1) switch (O) {
                                case 0:
                                    B += " ui-datepicker-group-first", L = " ui-corner-" + (i ? "right" : "left");
                                    break;
                                case o[1] - 1:
                                    B += " ui-datepicker-group-last", L = " ui-corner-" + (i ? "left" : "right");
                                    break;
                                default:
                                    B += " ui-datepicker-group-middle", L = ""
                            }
                            B += '">'
                        }
                        B += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + L + '">' + (/all|left/.test(L) && 0 == j ? i ? _ : v : "") + (/all|right/.test(L) && 0 == j ? i ? v : _ : "") + this._generateMonthYearHeader(t, p, f, h, d, j > 0 || O > 0, P, D) + '</div><table class="ui-datepicker-calendar"><thead>' + "<tr>";
                        for (var z = T ? '<th class="ui-datepicker-week-col">' + this._get(t, "weekHeader") + "</th>" : "", R = 0; 7 > R; R++) {
                            var W = (R + C) % 7;
                            z += "<th" + ((R + C + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + ">" + '<span title="' + S[W] + '">' + E[W] + "</span></th>"
                        }
                        B += z + "</tr></thead><tbody>";
                        var q = this._getDaysInMonth(f, p);
                        f == t.selectedYear && p == t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, q));
                        var U = (this._getFirstDayOfMonth(f, p) - C + 7) % 7,
                            K = Math.ceil((U + q) / 7),
                            Y = u ? this.maxRows > K ? this.maxRows : K : K;
                        this.maxRows = Y;
                        for (var X = this._daylightSavingAdjust(new Date(f, p, 1 - U)), G = 0; Y > G; G++) {
                            B += "<tr>";
                            for (var Q = T ? '<td class="ui-datepicker-week-col">' + this._get(t, "calculateWeek")(X) + "</td>" : "", R = 0; 7 > R; R++) {
                                var J = I ? I.apply(t.input ? t.input[0] : null, [X]) : [!0, ""],
                                    Z = X.getMonth() != p,
                                    te = Z && !A || !J[0] || h && h > X || d && X > d;
                                Q += '<td class="' + ((R + C + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (Z ? " ui-datepicker-other-month" : "") + (X.getTime() == H.getTime() && p == t.selectedMonth && t._keyEvent || N.getTime() == X.getTime() && N.getTime() == H.getTime() ? " " + this._dayOverClass : "") + (te ? " " + this._unselectableClass + " ui-state-disabled" : "") + (Z && !M ? "" : " " + J[1] + (X.getTime() == c.getTime() ? " " + this._currentClass : "") + (X.getTime() == e.getTime() ? " ui-datepicker-today" : "")) + '"' + (Z && !M || !J[2] ? "" : ' title="' + J[2] + '"') + (te ? "" : ' data-handler="selectDay" data-event="click" data-month="' + X.getMonth() + '" data-year="' + X.getFullYear() + '"') + ">" + (Z && !M ? "&#xa0;" : te ? '<span class="ui-state-default">' + X.getDate() + "</span>" : '<a class="ui-state-default' + (X.getTime() == e.getTime() ? " ui-state-highlight" : "") + (X.getTime() == c.getTime() ? " ui-state-active" : "") + (Z ? " ui-priority-secondary" : "") + '" href="#">' + X.getDate() + "</a>") + "</td>", X.setDate(X.getDate() + 1), X = this._daylightSavingAdjust(X)
                            }
                            B += Q + "</tr>"
                        }
                        p++, p > 11 && (p = 0, f++), B += "</tbody></table>" + (u ? "</div>" + (o[0] > 0 && O == o[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), F += B
                    }
                    V += F
                }
                return V += k + ($.ui.ie6 && !t.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), t._keyEvent = !1, V
            },
            _generateMonthYearHeader: function (t, e, i, n, s, r, o, a) {
                var l = this._get(t, "changeMonth"),
                    u = this._get(t, "changeYear"),
                    c = this._get(t, "showMonthAfterYear"),
                    h = '<div class="ui-datepicker-title">',
                    d = "";
                if (r || !l) d += '<span class="ui-datepicker-month">' + o[e] + "</span>";
                else {
                    var p = n && n.getFullYear() == i,
                        f = s && s.getFullYear() == i;
                    d += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
                    for (var m = 0; 12 > m; m++)(!p || m >= n.getMonth()) && (!f || m <= s.getMonth()) && (d += '<option value="' + m + '"' + (m == e ? ' selected="selected"' : "") + ">" + a[m] + "</option>");
                    d += "</select>"
                } if (c || (h += d + (!r && l && u ? "" : "&#xa0;")), !t.yearshtml)
                    if (t.yearshtml = "", r || !u) h += '<span class="ui-datepicker-year">' + i + "</span>";
                    else {
                        var g = this._get(t, "yearRange").split(":"),
                            v = (new Date).getFullYear(),
                            y = function (t) {
                                var e = t.match(/c[+-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+-].*/) ? v + parseInt(t, 10) : parseInt(t, 10);
                                return isNaN(e) ? v : e
                            }, _ = y(g[0]),
                            b = Math.max(_, y(g[1] || ""));
                        for (_ = n ? Math.max(_, n.getFullYear()) : _, b = s ? Math.min(b, s.getFullYear()) : b, t.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">'; b >= _; _++) t.yearshtml += '<option value="' + _ + '"' + (_ == i ? ' selected="selected"' : "") + ">" + _ + "</option>";
                        t.yearshtml += "</select>", h += t.yearshtml, t.yearshtml = null
                    }
                return h += this._get(t, "yearSuffix"), c && (h += (!r && l && u ? "" : "&#xa0;") + d), h += "</div>"
            },
            _adjustInstDate: function (t, e, i) {
                var n = t.drawYear + ("Y" == i ? e : 0),
                    s = t.drawMonth + ("M" == i ? e : 0),
                    r = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" == i ? e : 0),
                    o = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, r)));
                t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), ("M" == i || "Y" == i) && this._notifyChange(t)
            },
            _restrictMinMax: function (t, e) {
                var i = this._getMinMaxDate(t, "min"),
                    n = this._getMinMaxDate(t, "max"),
                    s = i && i > e ? i : e;
                return s = n && s > n ? n : s
            },
            _notifyChange: function (t) {
                var e = this._get(t, "onChangeMonthYear");
                e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
            },
            _getNumberOfMonths: function (t) {
                var e = this._get(t, "numberOfMonths");
                return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
            },
            _getMinMaxDate: function (t, e) {
                return this._determineDate(t, this._get(t, e + "Date"), null)
            },
            _getDaysInMonth: function (t, e) {
                return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
            },
            _getFirstDayOfMonth: function (t, e) {
                return new Date(t, e, 1).getDay()
            },
            _canAdjustMonth: function (t, e, i, n) {
                var s = this._getNumberOfMonths(t),
                    r = this._daylightSavingAdjust(new Date(i, n + (0 > e ? e : s[0] * s[1]), 1));
                return 0 > e && r.setDate(this._getDaysInMonth(r.getFullYear(), r.getMonth())), this._isInRange(t, r)
            },
            _isInRange: function (t, e) {
                var i = this._getMinMaxDate(t, "min"),
                    n = this._getMinMaxDate(t, "max");
                return (!i || e.getTime() >= i.getTime()) && (!n || e.getTime() <= n.getTime())
            },
            _getFormatConfig: function (t) {
                var e = this._get(t, "shortYearCutoff");
                return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                    shortYearCutoff: e,
                    dayNamesShort: this._get(t, "dayNamesShort"),
                    dayNames: this._get(t, "dayNames"),
                    monthNamesShort: this._get(t, "monthNamesShort"),
                    monthNames: this._get(t, "monthNames")
                }
            },
            _formatDate: function (t, e, i, n) {
                e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
                var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t))
            }
        }), $.fn.datepicker = function (t) {
            if (!this.length) return this;
            $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv), $.datepicker.initialized = !0);
            var e = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof t || "isDisabled" != t && "getDate" != t && "widget" != t ? "option" == t && 2 == arguments.length && "string" == typeof arguments[1] ? $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this[0]].concat(e)) : this.each(function () {
                "string" == typeof t ? $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this].concat(e)) : $.datepicker._attachDatepicker(this, t)
            }) : $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this[0]].concat(e))
        }, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.9.2", window["DP_jQuery_" + dpuuid] = $
    }(jQuery),
    function (t, e) {
        var i = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
            n = {
                buttons: !0,
                height: !0,
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0,
                width: !0
            }, s = {
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0
            };
        t.widget("ui.dialog", {
            version: "1.9.2",
            options: {
                autoOpen: !0,
                buttons: {},
                closeOnEscape: !0,
                closeText: "close",
                dialogClass: "",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: !1,
                maxWidth: !1,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center",
                    at: "center",
                    of: window,
                    collision: "fit",
                    using: function (e) {
                        var i = t(this).css(e).offset().top;
                        0 > i && t(this).css("top", e.top - i)
                    }
                },
                resizable: !0,
                show: null,
                stack: !0,
                title: "",
                width: 300,
                zIndex: 1e3
            },
            _create: function () {
                this.originalTitle = this.element.attr("title"), "string" != typeof this.originalTitle && (this.originalTitle = ""), this.oldPosition = {
                    parent: this.element.parent(),
                    index: this.element.parent().children().index(this.element)
                }, this.options.title = this.options.title || this.originalTitle;
                var e, n, s, r, o, a = this,
                    l = this.options,
                    u = l.title || "&#160;";
                e = (this.uiDialog = t("<div>")).addClass(i + l.dialogClass).css({
                    display: "none",
                    outline: 0,
                    zIndex: l.zIndex
                }).attr("tabIndex", -1).keydown(function (e) {
                        l.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE && (a.close(e), e.preventDefault())
                    }).mousedown(function (t) {
                        a.moveToTop(!1, t)
                    }).appendTo("body"), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(e), n = (this.uiDialogTitlebar = t("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown", function () {
                    e.focus()
                }).prependTo(e), s = t("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role", "button").click(function (t) {
                    t.preventDefault(), a.close(t)
                }).appendTo(n), (this.uiDialogTitlebarCloseText = t("<span>")).addClass("ui-icon ui-icon-closethick").text(l.closeText).appendTo(s), r = t("<span>").uniqueId().addClass("ui-dialog-title").html(u).prependTo(n), o = (this.uiDialogButtonPane = t("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), (this.uiButtonSet = t("<div>")).addClass("ui-dialog-buttonset").appendTo(o), e.attr({
                    role: "dialog",
                    "aria-labelledby": r.attr("id")
                }), n.find("*").add(n).disableSelection(), this._hoverable(s), this._focusable(s), l.draggable && t.fn.draggable && this._makeDraggable(), l.resizable && t.fn.resizable && this._makeResizable(), this._createButtons(l.buttons), this._isOpen = !1, t.fn.bgiframe && e.bgiframe(), this._on(e, {
                    keydown: function (i) {
                        if (l.modal && i.keyCode === t.ui.keyCode.TAB) {
                            var n = t(":tabbable", e),
                                s = n.filter(":first"),
                                r = n.filter(":last");
                            return i.target !== r[0] || i.shiftKey ? i.target === s[0] && i.shiftKey ? (r.focus(1), !1) : void 0 : (s.focus(1), !1)
                        }
                    }
                })
            },
            _init: function () {
                this.options.autoOpen && this.open()
            },
            _destroy: function () {
                var t, e = this.oldPosition;
                this.overlay && this.overlay.destroy(), this.uiDialog.hide(), this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
            },
            widget: function () {
                return this.uiDialog
            },
            close: function (e) {
                var i, n, s = this;
                if (this._isOpen && !1 !== this._trigger("beforeClose", e)) return this._isOpen = !1, this.overlay && this.overlay.destroy(), this.options.hide ? this._hide(this.uiDialog, this.options.hide, function () {
                    s._trigger("close", e)
                }) : (this.uiDialog.hide(), this._trigger("close", e)), t.ui.dialog.overlay.resize(), this.options.modal && (i = 0, t(".ui-dialog").each(function () {
                    this !== s.uiDialog[0] && (n = t(this).css("z-index"), isNaN(n) || (i = Math.max(i, n)))
                }), t.ui.dialog.maxZ = i), this
            },
            isOpen: function () {
                return this._isOpen
            },
            moveToTop: function (e, i) {
                var n, s = this.options;
                return s.modal && !e || !s.stack && !s.modal ? this._trigger("focus", i) : (s.zIndex > t.ui.dialog.maxZ && (t.ui.dialog.maxZ = s.zIndex), this.overlay && (t.ui.dialog.maxZ += 1, t.ui.dialog.overlay.maxZ = t.ui.dialog.maxZ, this.overlay.$el.css("z-index", t.ui.dialog.overlay.maxZ)), n = {
                    scrollTop: this.element.scrollTop(),
                    scrollLeft: this.element.scrollLeft()
                }, t.ui.dialog.maxZ += 1, this.uiDialog.css("z-index", t.ui.dialog.maxZ), this.element.attr(n), this._trigger("focus", i), this)
            },
            open: function () {
                if (!this._isOpen) {
                    var e, i = this.options,
                        n = this.uiDialog;
                    return this._size(), this._position(i.position), n.show(i.show), this.overlay = i.modal ? new t.ui.dialog.overlay(this) : null, this.moveToTop(!0), e = this.element.find(":tabbable"), e.length || (e = this.uiDialogButtonPane.find(":tabbable"), e.length || (e = n)), e.eq(0).focus(), this._isOpen = !0, this._trigger("open"), this
                }
            },
            _createButtons: function (e) {
                var i = this,
                    n = !1;
                this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), "object" == typeof e && null !== e && t.each(e, function () {
                    return !(n = !0)
                }), n ? (t.each(e, function (e, n) {
                    var s, r;
                    n = t.isFunction(n) ? {
                        click: n,
                        text: e
                    } : n, n = t.extend({
                        type: "button"
                    }, n), r = n.click, n.click = function () {
                        r.apply(i.element[0], arguments)
                    }, s = t("<button></button>", n).appendTo(i.uiButtonSet), t.fn.button && s.button()
                }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog)) : this.uiDialog.removeClass("ui-dialog-buttons")
            },
            _makeDraggable: function () {
                function e(t) {
                    return {
                        position: t.position,
                        offset: t.offset
                    }
                }
                var i = this,
                    n = this.options;
                this.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function (n, s) {
                        t(this).addClass("ui-dialog-dragging"), i._trigger("dragStart", n, e(s))
                    },
                    drag: function (t, n) {
                        i._trigger("drag", t, e(n))
                    },
                    stop: function (s, r) {
                        n.position = [r.position.left - i.document.scrollLeft(), r.position.top - i.document.scrollTop()], t(this).removeClass("ui-dialog-dragging"), i._trigger("dragStop", s, e(r)), t.ui.dialog.overlay.resize()
                    }
                })
            },
            _makeResizable: function (i) {
                function n(t) {
                    return {
                        originalPosition: t.originalPosition,
                        originalSize: t.originalSize,
                        position: t.position,
                        size: t.size
                    }
                }
                i = i === e ? this.options.resizable : i;
                var s = this,
                    r = this.options,
                    o = this.uiDialog.css("position"),
                    a = "string" == typeof i ? i : "n,e,s,w,se,sw,ne,nw";
                this.uiDialog.resizable({
                    cancel: ".ui-dialog-content",
                    containment: "document",
                    alsoResize: this.element,
                    maxWidth: r.maxWidth,
                    maxHeight: r.maxHeight,
                    minWidth: r.minWidth,
                    minHeight: this._minHeight(),
                    handles: a,
                    start: function (e, i) {
                        t(this).addClass("ui-dialog-resizing"), s._trigger("resizeStart", e, n(i))
                    },
                    resize: function (t, e) {
                        s._trigger("resize", t, n(e))
                    },
                    stop: function (e, i) {
                        t(this).removeClass("ui-dialog-resizing"), r.height = t(this).height(), r.width = t(this).width(), s._trigger("resizeStop", e, n(i)), t.ui.dialog.overlay.resize()
                    }
                }).css("position", o).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
            },
            _minHeight: function () {
                var t = this.options;
                return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
            },
            _position: function (e) {
                var i, n = [],
                    s = [0, 0];
                e ? (("string" == typeof e || "object" == typeof e && "0" in e) && (n = e.split ? e.split(" ") : [e[0], e[1]], 1 === n.length && (n[1] = n[0]), t.each(["left", "top"], function (t, e) {
                    +n[t] === n[t] && (s[t] = n[t], n[t] = e)
                }), e = {
                    my: n[0] + (s[0] < 0 ? s[0] : "+" + s[0]) + " " + n[1] + (s[1] < 0 ? s[1] : "+" + s[1]),
                    at: n.join(" ")
                }), e = t.extend({}, t.ui.dialog.prototype.options.position, e)) : e = t.ui.dialog.prototype.options.position, i = this.uiDialog.is(":visible"), i || this.uiDialog.show(), this.uiDialog.position(e), i || this.uiDialog.hide()
            },
            _setOptions: function (e) {
                var i = this,
                    r = {}, o = !1;
                t.each(e, function (t, e) {
                    i._setOption(t, e), t in n && (o = !0), t in s && (r[t] = e)
                }), o && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", r)
            },
            _setOption: function (e, n) {
                var s, r, o = this.uiDialog;
                switch (e) {
                    case "buttons":
                        this._createButtons(n);
                        break;
                    case "closeText":
                        this.uiDialogTitlebarCloseText.text("" + n);
                        break;
                    case "dialogClass":
                        o.removeClass(this.options.dialogClass).addClass(i + n);
                        break;
                    case "disabled":
                        n ? o.addClass("ui-dialog-disabled") : o.removeClass("ui-dialog-disabled");
                        break;
                    case "draggable":
                        s = o.is(":data(draggable)"), s && !n && o.draggable("destroy"), !s && n && this._makeDraggable();
                        break;
                    case "position":
                        this._position(n);
                        break;
                    case "resizable":
                        r = o.is(":data(resizable)"), r && !n && o.resizable("destroy"), r && "string" == typeof n && o.resizable("option", "handles", n), r || n === !1 || this._makeResizable(n);
                        break;
                    case "title":
                        t(".ui-dialog-title", this.uiDialogTitlebar).html("" + (n || "&#160;"))
                }
                this._super(e, n)
            },
            _size: function () {
                var e, i, n, s = this.options,
                    r = this.uiDialog.is(":visible");
                this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    height: 0
                }), s.minWidth > s.width && (s.width = s.minWidth), e = this.uiDialog.css({
                    height: "auto",
                    width: s.width
                }).outerHeight(), i = Math.max(0, s.minHeight - e), "auto" === s.height ? t.support.minHeight ? this.element.css({
                    minHeight: i,
                    height: "auto"
                }) : (this.uiDialog.show(), n = this.element.css("height", "auto").height(), r || this.uiDialog.hide(), this.element.height(Math.max(n, i))) : this.element.height(Math.max(s.height - e, 0)), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            }
        }), t.extend(t.ui.dialog, {
            uuid: 0,
            maxZ: 0,
            getTitleId: function (t) {
                var e = t.attr("id");
                return e || (this.uuid += 1, e = this.uuid), "ui-dialog-title-" + e
            },
            overlay: function (e) {
                this.$el = t.ui.dialog.overlay.create(e)
            }
        }), t.extend(t.ui.dialog.overlay, {
            instances: [],
            oldInstances: [],
            maxZ: 0,
            events: t.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function (t) {
                return t + ".dialog-overlay"
            }).join(" "),
            create: function (e) {
                0 === this.instances.length && (setTimeout(function () {
                    t.ui.dialog.overlay.instances.length && t(document).bind(t.ui.dialog.overlay.events, function (e) {
                        return t(e.target).zIndex() < t.ui.dialog.overlay.maxZ ? !1 : void 0
                    })
                }, 1), t(window).bind("resize.dialog-overlay", t.ui.dialog.overlay.resize));
                var i = this.oldInstances.pop() || t("<div>").addClass("ui-widget-overlay");
                return t(document).bind("keydown.dialog-overlay", function (n) {
                    var s = t.ui.dialog.overlay.instances;
                    0 !== s.length && s[s.length - 1] === i && e.options.closeOnEscape && !n.isDefaultPrevented() && n.keyCode && n.keyCode === t.ui.keyCode.ESCAPE && (e.close(n), n.preventDefault())
                }), i.appendTo(document.body).css({
                    width: this.width(),
                    height: this.height()
                }), t.fn.bgiframe && i.bgiframe(), this.instances.push(i), i
            },
            destroy: function (e) {
                var i = t.inArray(e, this.instances),
                    n = 0; - 1 !== i && this.oldInstances.push(this.instances.splice(i, 1)[0]), 0 === this.instances.length && t([document, window]).unbind(".dialog-overlay"), e.height(0).width(0).remove(), t.each(this.instances, function () {
                    n = Math.max(n, this.css("z-index"))
                }), this.maxZ = n
            },
            height: function () {
                var e, i;
                return t.ui.ie ? (e = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), i = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), i > e ? t(window).height() + "px" : e + "px") : t(document).height() + "px"
            },
            width: function () {
                var e, i;
                return t.ui.ie ? (e = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), i = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), i > e ? t(window).width() + "px" : e + "px") : t(document).width() + "px"
            },
            resize: function () {
                var e = t([]);
                t.each(t.ui.dialog.overlay.instances, function () {
                    e = e.add(this)
                }), e.css({
                    width: 0,
                    height: 0
                }).css({
                        width: t.ui.dialog.overlay.width(),
                        height: t.ui.dialog.overlay.height()
                    })
            }
        }), t.extend(t.ui.dialog.overlay.prototype, {
            destroy: function () {
                t.ui.dialog.overlay.destroy(this.$el)
            }
        })
    }(jQuery),
    function (t) {
        var e = /up|down|vertical/,
            i = /up|left|vertical|horizontal/;
        t.effects.effect.blind = function (n, s) {
            var r, o, a, l = t(this),
                u = ["position", "top", "bottom", "left", "right", "height", "width"],
                c = t.effects.setMode(l, n.mode || "hide"),
                h = n.direction || "up",
                d = e.test(h),
                p = d ? "height" : "width",
                f = d ? "top" : "left",
                m = i.test(h),
                g = {}, v = "show" === c;
            l.parent().is(".ui-effects-wrapper") ? t.effects.save(l.parent(), u) : t.effects.save(l, u), l.show(), r = t.effects.createWrapper(l).css({
                overflow: "hidden"
            }), o = r[p](), a = parseFloat(r.css(f)) || 0, g[p] = v ? o : 0, m || (l.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({
                position: "absolute"
            }), g[f] = v ? a : o + a), v && (r.css(p, 0), m || r.css(f, a + o)), r.animate(g, {
                duration: n.duration,
                easing: n.easing,
                queue: !1,
                complete: function () {
                    "hide" === c && l.hide(), t.effects.restore(l, u), t.effects.removeWrapper(l), s()
                }
            })
        }
    }(jQuery),
    function (t) {
        t.effects.effect.bounce = function (e, i) {
            var n, s, r, o = t(this),
                a = ["position", "top", "bottom", "left", "right", "height", "width"],
                l = t.effects.setMode(o, e.mode || "effect"),
                u = "hide" === l,
                c = "show" === l,
                h = e.direction || "up",
                d = e.distance,
                p = e.times || 5,
                f = 2 * p + (c || u ? 1 : 0),
                m = e.duration / f,
                g = e.easing,
                v = "up" === h || "down" === h ? "top" : "left",
                y = "up" === h || "left" === h,
                _ = o.queue(),
                b = _.length;
            for ((c || u) && a.push("opacity"), t.effects.save(o, a), o.show(), t.effects.createWrapper(o), d || (d = o["top" === v ? "outerHeight" : "outerWidth"]() / 3), c && (r = {
                opacity: 1
            }, r[v] = 0, o.css("opacity", 0).css(v, y ? 2 * -d : 2 * d).animate(r, m, g)), u && (d /= Math.pow(2, p - 1)), r = {}, r[v] = 0, n = 0; p > n; n++) s = {}, s[v] = (y ? "-=" : "+=") + d, o.animate(s, m, g).animate(r, m, g), d = u ? 2 * d : d / 2;
            u && (s = {
                opacity: 0
            }, s[v] = (y ? "-=" : "+=") + d, o.animate(s, m, g)), o.queue(function () {
                u && o.hide(), t.effects.restore(o, a), t.effects.removeWrapper(o), i()
            }), b > 1 && _.splice.apply(_, [1, 0].concat(_.splice(b, f + 1))), o.dequeue()
        }
    }(jQuery),
    function (t) {
        t.effects.effect.clip = function (e, i) {
            var n, s, r, o = t(this),
                a = ["position", "top", "bottom", "left", "right", "height", "width"],
                l = t.effects.setMode(o, e.mode || "hide"),
                u = "show" === l,
                c = e.direction || "vertical",
                h = "vertical" === c,
                d = h ? "height" : "width",
                p = h ? "top" : "left",
                f = {};
            t.effects.save(o, a), o.show(), n = t.effects.createWrapper(o).css({
                overflow: "hidden"
            }), s = "IMG" === o[0].tagName ? n : o, r = s[d](), u && (s.css(d, 0), s.css(p, r / 2)), f[d] = u ? r : 0, f[p] = u ? 0 : r / 2, s.animate(f, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function () {
                    u || o.hide(), t.effects.restore(o, a), t.effects.removeWrapper(o), i()
                }
            })
        }
    }(jQuery),
    function (t) {
        t.effects.effect.drop = function (e, i) {
            var n, s = t(this),
                r = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
                o = t.effects.setMode(s, e.mode || "hide"),
                a = "show" === o,
                l = e.direction || "left",
                u = "up" === l || "down" === l ? "top" : "left",
                c = "up" === l || "left" === l ? "pos" : "neg",
                h = {
                    opacity: a ? 1 : 0
                };
            t.effects.save(s, r), s.show(), t.effects.createWrapper(s), n = e.distance || s["top" === u ? "outerHeight" : "outerWidth"](!0) / 2, a && s.css("opacity", 0).css(u, "pos" === c ? -n : n), h[u] = (a ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + n, s.animate(h, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function () {
                    "hide" === o && s.hide(), t.effects.restore(s, r), t.effects.removeWrapper(s), i()
                }
            })
        }
    }(jQuery),
    function (t) {
        t.effects.effect.explode = function (e, i) {
            function n() {
                _.push(this), _.length === h * d && s()
            }

            function s() {
                p.css({
                    visibility: "visible"
                }), t(_).remove(), m || p.hide(), i()
            }
            var r, o, a, l, u, c, h = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
                d = h,
                p = t(this),
                f = t.effects.setMode(p, e.mode || "hide"),
                m = "show" === f,
                g = p.show().css("visibility", "hidden").offset(),
                v = Math.ceil(p.outerWidth() / d),
                y = Math.ceil(p.outerHeight() / h),
                _ = [];
            for (r = 0; h > r; r++)
                for (l = g.top + r * y, c = r - (h - 1) / 2, o = 0; d > o; o++) a = g.left + o * v, u = o - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -o * v,
                    top: -r * y
                }).parent().addClass("ui-effects-explode").css({
                        position: "absolute",
                        overflow: "hidden",
                        width: v,
                        height: y,
                        left: a + (m ? u * v : 0),
                        top: l + (m ? c * y : 0),
                        opacity: m ? 0 : 1
                    }).animate({
                        left: a + (m ? 0 : u * v),
                        top: l + (m ? 0 : c * y),
                        opacity: m ? 1 : 0
                    }, e.duration || 500, e.easing, n)
        }
    }(jQuery),
    function (t) {
        t.effects.effect.fade = function (e, i) {
            var n = t(this),
                s = t.effects.setMode(n, e.mode || "toggle");
            n.animate({
                opacity: s
            }, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }
    }(jQuery),
    function (t) {
        t.effects.effect.fold = function (e, i) {
            var n, s, r = t(this),
                o = ["position", "top", "bottom", "left", "right", "height", "width"],
                a = t.effects.setMode(r, e.mode || "hide"),
                l = "show" === a,
                u = "hide" === a,
                c = e.size || 15,
                h = /([0-9]+)%/.exec(c),
                d = !! e.horizFirst,
                p = l !== d,
                f = p ? ["width", "height"] : ["height", "width"],
                m = e.duration / 2,
                g = {}, v = {};
            t.effects.save(r, o), r.show(), n = t.effects.createWrapper(r).css({
                overflow: "hidden"
            }), s = p ? [n.width(), n.height()] : [n.height(), n.width()], h && (c = parseInt(h[1], 10) / 100 * s[u ? 0 : 1]), l && n.css(d ? {
                height: 0,
                width: c
            } : {
                height: c,
                width: 0
            }), g[f[0]] = l ? s[0] : c, v[f[1]] = l ? s[1] : 0, n.animate(g, m, e.easing).animate(v, m, e.easing, function () {
                u && r.hide(), t.effects.restore(r, o), t.effects.removeWrapper(r), i()
            })
        }
    }(jQuery),
    function (t) {
        t.effects.effect.highlight = function (e, i) {
            var n = t(this),
                s = ["backgroundImage", "backgroundColor", "opacity"],
                r = t.effects.setMode(n, e.mode || "show"),
                o = {
                    backgroundColor: n.css("backgroundColor")
                };
            "hide" === r && (o.opacity = 0), t.effects.save(n, s), n.show().css({
                backgroundImage: "none",
                backgroundColor: e.color || "#ffff99"
            }).animate(o, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.easing,
                    complete: function () {
                        "hide" === r && n.hide(), t.effects.restore(n, s), i()
                    }
                })
        }
    }(jQuery),
    function (t) {
        t.effects.effect.pulsate = function (e, i) {
            var n, s = t(this),
                r = t.effects.setMode(s, e.mode || "show"),
                o = "show" === r,
                a = "hide" === r,
                l = o || "hide" === r,
                u = 2 * (e.times || 5) + (l ? 1 : 0),
                c = e.duration / u,
                h = 0,
                d = s.queue(),
                p = d.length;
            for ((o || !s.is(":visible")) && (s.css("opacity", 0).show(), h = 1), n = 1; u > n; n++) s.animate({
                opacity: h
            }, c, e.easing), h = 1 - h;
            s.animate({
                opacity: h
            }, c, e.easing), s.queue(function () {
                a && s.hide(), i()
            }), p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, u + 1))), s.dequeue()
        }
    }(jQuery),
    function (t) {
        t.effects.effect.puff = function (e, i) {
            var n = t(this),
                s = t.effects.setMode(n, e.mode || "hide"),
                r = "hide" === s,
                o = parseInt(e.percent, 10) || 150,
                a = o / 100,
                l = {
                    height: n.height(),
                    width: n.width(),
                    outerHeight: n.outerHeight(),
                    outerWidth: n.outerWidth()
                };
            t.extend(e, {
                effect: "scale",
                queue: !1,
                fade: !0,
                mode: s,
                complete: i,
                percent: r ? o : 100,
                from: r ? l : {
                    height: l.height * a,
                    width: l.width * a,
                    outerHeight: l.outerHeight * a,
                    outerWidth: l.outerWidth * a
                }
            }), n.effect(e)
        }, t.effects.effect.scale = function (e, i) {
            var n = t(this),
                s = t.extend(!0, {}, e),
                r = t.effects.setMode(n, e.mode || "effect"),
                o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === r ? 0 : 100),
                a = e.direction || "both",
                l = e.origin,
                u = {
                    height: n.height(),
                    width: n.width(),
                    outerHeight: n.outerHeight(),
                    outerWidth: n.outerWidth()
                }, c = {
                    y: "horizontal" !== a ? o / 100 : 1,
                    x: "vertical" !== a ? o / 100 : 1
                };
            s.effect = "size", s.queue = !1, s.complete = i, "effect" !== r && (s.origin = l || ["middle", "center"], s.restore = !0), s.from = e.from || ("show" === r ? {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            } : u), s.to = {
                height: u.height * c.y,
                width: u.width * c.x,
                outerHeight: u.outerHeight * c.y,
                outerWidth: u.outerWidth * c.x
            }, s.fade && ("show" === r && (s.from.opacity = 0, s.to.opacity = 1), "hide" === r && (s.from.opacity = 1, s.to.opacity = 0)), n.effect(s)
        }, t.effects.effect.size = function (e, i) {
            var n, s, r, o = t(this),
                a = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                l = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                u = ["width", "height", "overflow"],
                c = ["fontSize"],
                h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                p = t.effects.setMode(o, e.mode || "effect"),
                f = e.restore || "effect" !== p,
                m = e.scale || "both",
                g = e.origin || ["middle", "center"],
                v = o.css("position"),
                y = f ? a : l,
                _ = {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
            "show" === p && o.show(), n = {
                height: o.height(),
                width: o.width(),
                outerHeight: o.outerHeight(),
                outerWidth: o.outerWidth()
            }, "toggle" === e.mode && "show" === p ? (o.from = e.to || _, o.to = e.from || n) : (o.from = e.from || ("show" === p ? _ : n), o.to = e.to || ("hide" === p ? _ : n)), r = {
                from: {
                    y: o.from.height / n.height,
                    x: o.from.width / n.width
                },
                to: {
                    y: o.to.height / n.height,
                    x: o.to.width / n.width
                }
            }, ("box" === m || "both" === m) && (r.from.y !== r.to.y && (y = y.concat(h), o.from = t.effects.setTransition(o, h, r.from.y, o.from), o.to = t.effects.setTransition(o, h, r.to.y, o.to)), r.from.x !== r.to.x && (y = y.concat(d), o.from = t.effects.setTransition(o, d, r.from.x, o.from), o.to = t.effects.setTransition(o, d, r.to.x, o.to))), ("content" === m || "both" === m) && r.from.y !== r.to.y && (y = y.concat(c).concat(u), o.from = t.effects.setTransition(o, c, r.from.y, o.from), o.to = t.effects.setTransition(o, c, r.to.y, o.to)), t.effects.save(o, y), o.show(), t.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), g && (s = t.effects.getBaseline(g, n), o.from.top = (n.outerHeight - o.outerHeight()) * s.y, o.from.left = (n.outerWidth - o.outerWidth()) * s.x, o.to.top = (n.outerHeight - o.to.outerHeight) * s.y, o.to.left = (n.outerWidth - o.to.outerWidth) * s.x), o.css(o.from), ("content" === m || "both" === m) && (h = h.concat(["marginTop", "marginBottom"]).concat(c), d = d.concat(["marginLeft", "marginRight"]), u = a.concat(h).concat(d), o.find("*[width]").each(function () {
                var i = t(this),
                    n = {
                        height: i.height(),
                        width: i.width(),
                        outerHeight: i.outerHeight(),
                        outerWidth: i.outerWidth()
                    };
                f && t.effects.save(i, u), i.from = {
                    height: n.height * r.from.y,
                    width: n.width * r.from.x,
                    outerHeight: n.outerHeight * r.from.y,
                    outerWidth: n.outerWidth * r.from.x
                }, i.to = {
                    height: n.height * r.to.y,
                    width: n.width * r.to.x,
                    outerHeight: n.height * r.to.y,
                    outerWidth: n.width * r.to.x
                }, r.from.y !== r.to.y && (i.from = t.effects.setTransition(i, h, r.from.y, i.from), i.to = t.effects.setTransition(i, h, r.to.y, i.to)), r.from.x !== r.to.x && (i.from = t.effects.setTransition(i, d, r.from.x, i.from), i.to = t.effects.setTransition(i, d, r.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.easing, function () {
                    f && t.effects.restore(i, u)
                })
            })), o.animate(o.to, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function () {
                    0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === p && o.hide(), t.effects.restore(o, y), f || ("static" === v ? o.css({
                        position: "relative",
                        top: o.to.top,
                        left: o.to.left
                    }) : t.each(["top", "left"], function (t, e) {
                        o.css(e, function (e, i) {
                            var n = parseInt(i, 10),
                                s = t ? o.to.left : o.to.top;
                            return "auto" === i ? s + "px" : n + s + "px"
                        })
                    })), t.effects.removeWrapper(o), i()
                }
            })
        }
    }(jQuery),
    function (t) {
        t.effects.effect.shake = function (e, i) {
            var n, s = t(this),
                r = ["position", "top", "bottom", "left", "right", "height", "width"],
                o = t.effects.setMode(s, e.mode || "effect"),
                a = e.direction || "left",
                l = e.distance || 20,
                u = e.times || 3,
                c = 2 * u + 1,
                h = Math.round(e.duration / c),
                d = "up" === a || "down" === a ? "top" : "left",
                p = "up" === a || "left" === a,
                f = {}, m = {}, g = {}, v = s.queue(),
                y = v.length;
            for (t.effects.save(s, r), s.show(), t.effects.createWrapper(s), f[d] = (p ? "-=" : "+=") + l, m[d] = (p ? "+=" : "-=") + 2 * l, g[d] = (p ? "-=" : "+=") + 2 * l, s.animate(f, h, e.easing), n = 1; u > n; n++) s.animate(m, h, e.easing).animate(g, h, e.easing);
            s.animate(m, h, e.easing).animate(f, h / 2, e.easing).queue(function () {
                "hide" === o && s.hide(), t.effects.restore(s, r), t.effects.removeWrapper(s), i()
            }), y > 1 && v.splice.apply(v, [1, 0].concat(v.splice(y, c + 1))), s.dequeue()
        }
    }(jQuery),
    function (t) {
        t.effects.effect.slide = function (e, i) {
            var n, s = t(this),
                r = ["position", "top", "bottom", "left", "right", "width", "height"],
                o = t.effects.setMode(s, e.mode || "show"),
                a = "show" === o,
                l = e.direction || "left",
                u = "up" === l || "down" === l ? "top" : "left",
                c = "up" === l || "left" === l,
                h = {};
            t.effects.save(s, r), s.show(), n = e.distance || s["top" === u ? "outerHeight" : "outerWidth"](!0), t.effects.createWrapper(s).css({
                overflow: "hidden"
            }), a && s.css(u, c ? isNaN(n) ? "-" + n : -n : n), h[u] = (a ? c ? "+=" : "-=" : c ? "-=" : "+=") + n, s.animate(h, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function () {
                    "hide" === o && s.hide(), t.effects.restore(s, r), t.effects.removeWrapper(s), i()
                }
            })
        }
    }(jQuery),
    function (t) {
        t.effects.effect.transfer = function (e, i) {
            var n = t(this),
                s = t(e.to),
                r = "fixed" === s.css("position"),
                o = t("body"),
                a = r ? o.scrollTop() : 0,
                l = r ? o.scrollLeft() : 0,
                u = s.offset(),
                c = {
                    top: u.top - a,
                    left: u.left - l,
                    height: s.innerHeight(),
                    width: s.innerWidth()
                }, h = n.offset(),
                d = t('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(e.className).css({
                    top: h.top - a,
                    left: h.left - l,
                    height: n.innerHeight(),
                    width: n.innerWidth(),
                    position: r ? "fixed" : "absolute"
                }).animate(c, e.duration, e.easing, function () {
                        d.remove(), i()
                    })
        }
    }(jQuery),
    function (t) {
        var e = !1;
        t.widget("ui.menu", {
            version: "1.9.2",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-carat-1-e"
                },
                menus: "ul",
                position: {
                    my: "left top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function () {
                this.activeMenu = this.element, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !! this.element.find(".ui-icon").length).attr({
                    role: this.options.role,
                    tabIndex: 0
                }).bind("click" + this.eventNamespace, t.proxy(function (t) {
                        this.options.disabled && t.preventDefault()
                    }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                    "mousedown .ui-menu-item > a": function (t) {
                        t.preventDefault()
                    },
                    "click .ui-state-disabled > a": function (t) {
                        t.preventDefault()
                    },
                    "click .ui-menu-item:has(a)": function (i) {
                        var n = t(i.target).closest(".ui-menu-item");
                        !e && n.not(".ui-state-disabled").length && (e = !0, this.select(i), n.has(".ui-menu").length ? this.expand(i) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function (e) {
                        var i = t(e.currentTarget);
                        i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function (t, e) {
                        var i = this.active || this.element.children(".ui-menu-item").eq(0);
                        e || this.focus(t, i)
                    },
                    blur: function (e) {
                        this._delay(function () {
                            t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                        })
                    },
                    keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function (i) {
                        t(i.target).closest(".ui-menu").length || this.collapseAll(i), e = !1
                    }
                })
            },
            _destroy: function () {
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
                    var e = t(this);
                    e.data("ui-menu-submenu-carat") && e.remove()
                }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
            },
            _keydown: function (e) {
                function i(t) {
                    return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                }
                var n, s, r, o, a, l = !0;
                switch (e.keyCode) {
                    case t.ui.keyCode.PAGE_UP:
                        this.previousPage(e);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        this.nextPage(e);
                        break;
                    case t.ui.keyCode.HOME:
                        this._move("first", "first", e);
                        break;
                    case t.ui.keyCode.END:
                        this._move("last", "last", e);
                        break;
                    case t.ui.keyCode.UP:
                        this.previous(e);
                        break;
                    case t.ui.keyCode.DOWN:
                        this.next(e);
                        break;
                    case t.ui.keyCode.LEFT:
                        this.collapse(e);
                        break;
                    case t.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                        break;
                    case t.ui.keyCode.ENTER:
                    case t.ui.keyCode.SPACE:
                        this._activate(e);
                        break;
                    case t.ui.keyCode.ESCAPE:
                        this.collapse(e);
                        break;
                    default:
                        l = !1, s = this.previousFilter || "", r = String.fromCharCode(e.keyCode), o = !1, clearTimeout(this.filterTimer), r === s ? o = !0 : r = s + r, a = new RegExp("^" + i(r), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function () {
                            return a.test(t(this).children("a").text())
                        }), n = o && -1 !== n.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : n, n.length || (r = String.fromCharCode(e.keyCode), a = new RegExp("^" + i(r), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function () {
                            return a.test(t(this).children("a").text())
                        })), n.length ? (this.focus(e, n), n.length > 1 ? (this.previousFilter = r, this.filterTimer = this._delay(function () {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
                }
                l && e.preventDefault()
            },
            _activate: function (t) {
                this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
            },
            refresh: function () {
                var e, i = this.options.icons.submenu,
                    n = this.element.find(this.options.menus);
                n.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function () {
                        var e = t(this),
                            n = e.prev("a"),
                            s = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                        n.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", n.attr("id"))
                    }), e = n.add(this.element), e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), e.children(":not(.ui-menu-item)").each(function () {
                    var e = t(this);
                    /[^\-�붴�s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
                }), e.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function () {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role]
            },
            focus: function (t, e) {
                var i, n;
                this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), n = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
                    this._close()
                }, this.delay), i = e.children(".ui-menu"), i.length && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
                    item: e
                })
            },
            _scrollIntoView: function (e) {
                var i, n, s, r, o, a;
                this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, s = e.offset().top - this.activeMenu.offset().top - i - n, r = this.activeMenu.scrollTop(), o = this.activeMenu.height(), a = e.height(), 0 > s ? this.activeMenu.scrollTop(r + s) : s + a > o && this.activeMenu.scrollTop(r + s - o + a))
            },
            blur: function (t, e) {
                e || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
                    item: this.active
                }))
            },
            _startOpening: function (t) {
                clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
                    this._close(), this._open(t)
                }, this.delay))
            },
            _open: function (e) {
                var i = t.extend({
                    of: this.active
                }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
            },
            collapseAll: function (e, i) {
                clearTimeout(this.timer), this.timer = this._delay(function () {
                    var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                    n.length || (n = this.element), this._close(n), this.blur(e), this.activeMenu = n
                }, this.delay)
            },
            _close: function (t) {
                t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
            },
            collapse: function (t) {
                var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                e && e.length && (this._close(), this.focus(t, e))
            },
            expand: function (t) {
                var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
                e && e.length && (this._open(e.parent()), this._delay(function () {
                    this.focus(t, e)
                }))
            },
            next: function (t) {
                this._move("next", "first", t)
            },
            previous: function (t) {
                this._move("prev", "last", t)
            },
            isFirstItem: function () {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function () {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function (t, e, i) {
                var n;
                this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.children(".ui-menu-item")[e]()), this.focus(i, n)
            },
            nextPage: function (e) {
                var i, n, s;
                return this.active ? (this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                    return i = t(this), i.offset().top - n - s < 0
                }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())), void 0) : (this.next(e), void 0)
            },
            previousPage: function (e) {
                var i, n, s;
                return this.active ? (this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                    return i = t(this), i.offset().top - n + s > 0
                }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first())), void 0) : (this.next(e), void 0)
            },
            _hasScroll: function () {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function (e) {
                this.active = this.active || t(e.target).closest(".ui-menu-item");
                var i = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
            }
        })
    }(jQuery),
    function (t, e) {
        function i(t, e, i) {
            return [parseInt(t[0], 10) * (d.test(t[0]) ? e / 100 : 1), parseInt(t[1], 10) * (d.test(t[1]) ? i / 100 : 1)]
        }

        function n(e, i) {
            return parseInt(t.css(e, i), 10) || 0
        }
        t.ui = t.ui || {};
        var s, r = Math.max,
            o = Math.abs,
            a = Math.round,
            l = /left|center|right/,
            u = /top|center|bottom/,
            c = /[\+\-]\d+%?/,
            h = /^\w+/,
            d = /%$/,
            p = t.fn.position;
        t.position = {
            scrollbarWidth: function () {
                if (s !== e) return s;
                var i, n, r = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    o = r.children()[0];
                return t("body").append(r), i = o.offsetWidth, r.css("overflow", "scroll"), n = o.offsetWidth, i === n && (n = r[0].clientWidth), r.remove(), s = i - n
            },
            getScrollInfo: function (e) {
                var i = e.isWindow ? "" : e.element.css("overflow-x"),
                    n = e.isWindow ? "" : e.element.css("overflow-y"),
                    s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                    r = "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight;
                return {
                    width: s ? t.position.scrollbarWidth() : 0,
                    height: r ? t.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function (e) {
                var i = t(e || window),
                    n = t.isWindow(i[0]);
                return {
                    element: i,
                    isWindow: n,
                    offset: i.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: n ? i.width() : i.outerWidth(),
                    height: n ? i.height() : i.outerHeight()
                }
            }
        }, t.fn.position = function (e) {
            if (!e || !e.of) return p.apply(this, arguments);
            e = t.extend({}, e);
            var s, d, f, m, g, v = t(e.of),
                y = t.position.getWithinInfo(e.within),
                _ = t.position.getScrollInfo(y),
                b = v[0],
                w = (e.collision || "flip").split(" "),
                x = {};
            return 9 === b.nodeType ? (d = v.width(), f = v.height(), m = {
                top: 0,
                left: 0
            }) : t.isWindow(b) ? (d = v.width(), f = v.height(), m = {
                top: v.scrollTop(),
                left: v.scrollLeft()
            }) : b.preventDefault ? (e.at = "left top", d = f = 0, m = {
                top: b.pageY,
                left: b.pageX
            }) : (d = v.outerWidth(), f = v.outerHeight(), m = v.offset()), g = t.extend({}, m), t.each(["my", "at"], function () {
                var t, i, n = (e[this] || "").split(" ");
                1 === n.length && (n = l.test(n[0]) ? n.concat(["center"]) : u.test(n[0]) ? ["center"].concat(n) : ["center", "center"]), n[0] = l.test(n[0]) ? n[0] : "center", n[1] = u.test(n[1]) ? n[1] : "center", t = c.exec(n[0]), i = c.exec(n[1]), x[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [h.exec(n[0])[0], h.exec(n[1])[0]]
            }), 1 === w.length && (w[1] = w[0]), "right" === e.at[0] ? g.left += d : "center" === e.at[0] && (g.left += d / 2), "bottom" === e.at[1] ? g.top += f : "center" === e.at[1] && (g.top += f / 2), s = i(x.at, d, f), g.left += s[0], g.top += s[1], this.each(function () {
                var l, u, c = t(this),
                    h = c.outerWidth(),
                    p = c.outerHeight(),
                    b = n(this, "marginLeft"),
                    k = n(this, "marginTop"),
                    C = h + b + n(this, "marginRight") + _.width,
                    T = p + k + n(this, "marginBottom") + _.height,
                    S = t.extend({}, g),
                    E = i(x.my, c.outerWidth(), c.outerHeight());
                "right" === e.my[0] ? S.left -= h : "center" === e.my[0] && (S.left -= h / 2), "bottom" === e.my[1] ? S.top -= p : "center" === e.my[1] && (S.top -= p / 2), S.left += E[0], S.top += E[1], t.support.offsetFractions || (S.left = a(S.left), S.top = a(S.top)), l = {
                    marginLeft: b,
                    marginTop: k
                }, t.each(["left", "top"], function (i, n) {
                    t.ui.position[w[i]] && t.ui.position[w[i]][n](S, {
                        targetWidth: d,
                        targetHeight: f,
                        elemWidth: h,
                        elemHeight: p,
                        collisionPosition: l,
                        collisionWidth: C,
                        collisionHeight: T,
                        offset: [s[0] + E[0], s[1] + E[1]],
                        my: e.my,
                        at: e.at,
                        within: y,
                        elem: c
                    })
                }), t.fn.bgiframe && c.bgiframe(), e.using && (u = function (t) {
                    var i = m.left - S.left,
                        n = i + d - h,
                        s = m.top - S.top,
                        a = s + f - p,
                        l = {
                            target: {
                                element: v,
                                left: m.left,
                                top: m.top,
                                width: d,
                                height: f
                            },
                            element: {
                                element: c,
                                left: S.left,
                                top: S.top,
                                width: h,
                                height: p
                            },
                            horizontal: 0 > n ? "left" : i > 0 ? "right" : "center",
                            vertical: 0 > a ? "top" : s > 0 ? "bottom" : "middle"
                        };
                    h > d && o(i + n) < d && (l.horizontal = "center"), p > f && o(s + a) < f && (l.vertical = "middle"), l.important = r(o(i), o(n)) > r(o(s), o(a)) ? "horizontal" : "vertical", e.using.call(this, t, l)
                }), c.offset(t.extend(S, {
                    using: u
                }))
            })
        }, t.ui.position = {
            fit: {
                left: function (t, e) {
                    var i, n = e.within,
                        s = n.isWindow ? n.scrollLeft : n.offset.left,
                        o = n.width,
                        a = t.left - e.collisionPosition.marginLeft,
                        l = s - a,
                        u = a + e.collisionWidth - o - s;
                    e.collisionWidth > o ? l > 0 && 0 >= u ? (i = t.left + l + e.collisionWidth - o - s, t.left += l - i) : t.left = u > 0 && 0 >= l ? s : l > u ? s + o - e.collisionWidth : s : l > 0 ? t.left += l : u > 0 ? t.left -= u : t.left = r(t.left - a, t.left)
                },
                top: function (t, e) {
                    var i, n = e.within,
                        s = n.isWindow ? n.scrollTop : n.offset.top,
                        o = e.within.height,
                        a = t.top - e.collisionPosition.marginTop,
                        l = s - a,
                        u = a + e.collisionHeight - o - s;
                    e.collisionHeight > o ? l > 0 && 0 >= u ? (i = t.top + l + e.collisionHeight - o - s, t.top += l - i) : t.top = u > 0 && 0 >= l ? s : l > u ? s + o - e.collisionHeight : s : l > 0 ? t.top += l : u > 0 ? t.top -= u : t.top = r(t.top - a, t.top)
                }
            },
            flip: {
                left: function (t, e) {
                    var i, n, s = e.within,
                        r = s.offset.left + s.scrollLeft,
                        a = s.width,
                        l = s.isWindow ? s.scrollLeft : s.offset.left,
                        u = t.left - e.collisionPosition.marginLeft,
                        c = u - l,
                        h = u + e.collisionWidth - a - l,
                        d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                        p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                        f = -2 * e.offset[0];
                    0 > c ? (i = t.left + d + p + f + e.collisionWidth - a - r, (0 > i || i < o(c)) && (t.left += d + p + f)) : h > 0 && (n = t.left - e.collisionPosition.marginLeft + d + p + f - l, (n > 0 || o(n) < h) && (t.left += d + p + f))
                },
                top: function (t, e) {
                    var i, n, s = e.within,
                        r = s.offset.top + s.scrollTop,
                        a = s.height,
                        l = s.isWindow ? s.scrollTop : s.offset.top,
                        u = t.top - e.collisionPosition.marginTop,
                        c = u - l,
                        h = u + e.collisionHeight - a - l,
                        d = "top" === e.my[1],
                        p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                        f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                        m = -2 * e.offset[1];
                    0 > c ? (n = t.top + p + f + m + e.collisionHeight - a - r, t.top + p + f + m > c && (0 > n || n < o(c)) && (t.top += p + f + m)) : h > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + m - l, t.top + p + f + m > h && (i > 0 || o(i) < h) && (t.top += p + f + m))
                }
            },
            flipfit: {
                left: function () {
                    t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                },
                top: function () {
                    t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                }
            }
        },
            function () {
                var e, i, n, s, r, o = document.getElementsByTagName("body")[0],
                    a = document.createElement("div");
                e = document.createElement(o ? "div" : "body"), n = {
                    visibility: "hidden",
                    width: 0,
                    height: 0,
                    border: 0,
                    margin: 0,
                    background: "none"
                }, o && t.extend(n, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                });
                for (r in n) e.style[r] = n[r];
                e.appendChild(a), i = o || document.documentElement, i.insertBefore(e, i.firstChild), a.style.cssText = "position: absolute; left: 10.7432222px;", s = t(a).offset().left, t.support.offsetFractions = s > 10 && 11 > s, e.innerHTML = "", i.removeChild(e)
            }(), t.uiBackCompat !== !1 && ! function (t) {
            var i = t.fn.position;
            t.fn.position = function (n) {
                if (!n || !n.offset) return i.call(this, n);
                var s = n.offset.split(" "),
                    r = n.at.split(" ");
                return 1 === s.length && (s[1] = s[0]), /^\d/.test(s[0]) && (s[0] = "+" + s[0]), /^\d/.test(s[1]) && (s[1] = "+" + s[1]), 1 === r.length && (/left|center|right/.test(r[0]) ? r[1] = "center" : (r[1] = r[0], r[0] = "center")), i.call(this, t.extend(n, {
                    at: r[0] + s[0] + " " + r[1] + s[1],
                    offset: e
                }))
            }
        }(jQuery)
    }(jQuery),
    function (t, e) {
        t.widget("ui.progressbar", {
            version: "1.9.2",
            options: {
                value: 0,
                max: 100
            },
            min: 0,
            _create: function () {
                this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                    role: "progressbar",
                    "aria-valuemin": this.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._value()
                }), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue()
            },
            _destroy: function () {
                this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
            },
            value: function (t) {
                return t === e ? this._value() : (this._setOption("value", t), this)
            },
            _setOption: function (t, e) {
                "value" === t && (this.options.value = e, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), this._super(t, e)
            },
            _value: function () {
                var t = this.options.value;
                return "number" != typeof t && (t = 0), Math.min(this.options.max, Math.max(this.min, t))
            },
            _percentage: function () {
                return 100 * this._value() / this.options.max
            },
            _refreshValue: function () {
                var t = this.value(),
                    e = this._percentage();
                this.oldValue !== t && (this.oldValue = t, this._trigger("change")), this.valueDiv.toggle(t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(e.toFixed(0) + "%"), this.element.attr("aria-valuenow", t)
            }
        })
    }(jQuery),
    function (t) {
        var e = 5;
        t.widget("ui.slider", t.ui.mouse, {
            version: "1.9.2",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null
            },
            _create: function () {
                var i, n, s = this.options,
                    r = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                    o = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                    a = [];
                for (this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all" + (s.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = t([]), s.range && (s.range === !0 && (s.values || (s.values = [this._valueMin(), this._valueMin()]), s.values.length && 2 !== s.values.length && (s.values = [s.values[0], s.values[0]])), this.range = t("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + ("min" === s.range || "max" === s.range ? " ui-slider-range-" + s.range : ""))), n = s.values && s.values.length || 1, i = r.length; n > i; i++) a.push(o);
                this.handles = r.add(t(a.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function (t) {
                    t.preventDefault()
                }).mouseenter(function () {
                        s.disabled || t(this).addClass("ui-state-hover")
                    }).mouseleave(function () {
                        t(this).removeClass("ui-state-hover")
                    }).focus(function () {
                        s.disabled ? t(this).blur() : (t(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), t(this).addClass("ui-state-focus"))
                    }).blur(function () {
                        t(this).removeClass("ui-state-focus")
                    }), this.handles.each(function (e) {
                    t(this).data("ui-slider-handle-index", e)
                }), this._on(this.handles, {
                    keydown: function (i) {
                        var n, s, r, o, a = t(i.target).data("ui-slider-handle-index");
                        switch (i.keyCode) {
                            case t.ui.keyCode.HOME:
                            case t.ui.keyCode.END:
                            case t.ui.keyCode.PAGE_UP:
                            case t.ui.keyCode.PAGE_DOWN:
                            case t.ui.keyCode.UP:
                            case t.ui.keyCode.RIGHT:
                            case t.ui.keyCode.DOWN:
                            case t.ui.keyCode.LEFT:
                                if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, t(i.target).addClass("ui-state-active"), n = this._start(i, a), n === !1)) return
                        }
                        switch (o = this.options.step, s = r = this.options.values && this.options.values.length ? this.values(a) : this.value(), i.keyCode) {
                            case t.ui.keyCode.HOME:
                                r = this._valueMin();
                                break;
                            case t.ui.keyCode.END:
                                r = this._valueMax();
                                break;
                            case t.ui.keyCode.PAGE_UP:
                                r = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / e);
                                break;
                            case t.ui.keyCode.PAGE_DOWN:
                                r = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / e);
                                break;
                            case t.ui.keyCode.UP:
                            case t.ui.keyCode.RIGHT:
                                if (s === this._valueMax()) return;
                                r = this._trimAlignValue(s + o);
                                break;
                            case t.ui.keyCode.DOWN:
                            case t.ui.keyCode.LEFT:
                                if (s === this._valueMin()) return;
                                r = this._trimAlignValue(s - o)
                        }
                        this._slide(i, a, r)
                    },
                    keyup: function (e) {
                        var i = t(e.target).data("ui-slider-handle-index");
                        this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
                    }
                }), this._refreshValue(), this._animateOff = !1
            },
            _destroy: function () {
                this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
            },
            _mouseCapture: function (e) {
                var i, n, s, r, o, a, l, u, c = this,
                    h = this.options;
                return h.disabled ? !1 : (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), i = {
                    x: e.pageX,
                    y: e.pageY
                }, n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
                    var i = Math.abs(n - c.values(e));
                    s > i && (s = i, r = t(this), o = e)
                }), h.range === !0 && this.values(1) === h.min && (o += 1, r = t(this.handles[o])), a = this._start(e, o), a === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, r.addClass("ui-state-active").focus(), l = r.offset(), u = !t(e.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = u ? {
                    left: 0,
                    top: 0
                } : {
                    left: e.pageX - l.left - r.width() / 2,
                    top: e.pageY - l.top - r.height() / 2 - (parseInt(r.css("borderTopWidth"), 10) || 0) - (parseInt(r.css("borderBottomWidth"), 10) || 0) + (parseInt(r.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(e, o, n), this._animateOff = !0, !0))
            },
            _mouseStart: function () {
                return !0
            },
            _mouseDrag: function (t) {
                var e = {
                    x: t.pageX,
                    y: t.pageY
                }, i = this._normValueFromMouse(e);
                return this._slide(t, this._handleIndex, i), !1
            },
            _mouseStop: function (t) {
                return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function () {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function (t) {
                var e, i, n, s, r;
                return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), n = i / e, n > 1 && (n = 1), 0 > n && (n = 0), "vertical" === this.orientation && (n = 1 - n), s = this._valueMax() - this._valueMin(), r = this._valueMin() + n * s, this._trimAlignValue(r)
            },
            _start: function (t, e) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
            },
            _slide: function (t, e, i) {
                var n, s, r;
                this.options.values && this.options.values.length ? (n = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > n || 1 === e && n > i) && (i = n), i !== this.values(e) && (s = this.values(), s[e] = i, r = this._trigger("slide", t, {
                    handle: this.handles[e],
                    value: i,
                    values: s
                }), n = this.values(e ? 0 : 1), r !== !1 && this.values(e, i, !0))) : i !== this.value() && (r = this._trigger("slide", t, {
                    handle: this.handles[e],
                    value: i
                }), r !== !1 && this.value(i))
            },
            _stop: function (t, e) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
            },
            _change: function (t, e) {
                if (!this._keySliding && !this._mouseSliding) {
                    var i = {
                        handle: this.handles[e],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("change", t, i)
                }
            },
            value: function (t) {
                return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), void 0) : this._value()
            },
            values: function (e, i) {
                var n, s, r;
                if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), void 0;
                if (!arguments.length) return this._values();
                if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
                for (n = this.options.values, s = arguments[0], r = 0; r < n.length; r += 1) n[r] = this._trimAlignValue(s[r]), this._change(null, r);
                this._refreshValue()
            },
            _setOption: function (e, i) {
                var n, s = 0;
                switch (t.isArray(this.options.values) && (s = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
                    case "disabled":
                        i ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.prop("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.prop("disabled", !1), this.element.removeClass("ui-disabled"));
                        break;
                    case "orientation":
                        this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                        break;
                    case "value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), n = 0; s > n; n += 1) this._change(null, n);
                        this._animateOff = !1;
                        break;
                    case "min":
                    case "max":
                        this._animateOff = !0, this._refreshValue(), this._animateOff = !1
                }
            },
            _value: function () {
                var t = this.options.value;
                return t = this._trimAlignValue(t)
            },
            _values: function (t) {
                var e, i, n;
                if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
                for (i = this.options.values.slice(), n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(i[n]);
                return i
            },
            _trimAlignValue: function (t) {
                if (t <= this._valueMin()) return this._valueMin();
                if (t >= this._valueMax()) return this._valueMax();
                var e = this.options.step > 0 ? this.options.step : 1,
                    i = (t - this._valueMin()) % e,
                    n = t - i;
                return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e), parseFloat(n.toFixed(5))
            },
            _valueMin: function () {
                return this.options.min
            },
            _valueMax: function () {
                return this.options.max
            },
            _refreshValue: function () {
                var e, i, n, s, r, o = this.options.range,
                    a = this.options,
                    l = this,
                    u = this._animateOff ? !1 : a.animate,
                    c = {};
                this.options.values && this.options.values.length ? this.handles.each(function (n) {
                    i = 100 * ((l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin())), c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[u ? "animate" : "css"](c, a.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[u ? "animate" : "css"]({
                        left: i + "%"
                    }, a.animate), 1 === n && l.range[u ? "animate" : "css"]({
                        width: i - e + "%"
                    }, {
                        queue: !1,
                        duration: a.animate
                    })) : (0 === n && l.range.stop(1, 1)[u ? "animate" : "css"]({
                        bottom: i + "%"
                    }, a.animate), 1 === n && l.range[u ? "animate" : "css"]({
                        height: i - e + "%"
                    }, {
                        queue: !1,
                        duration: a.animate
                    }))), e = i
                }) : (n = this.value(), s = this._valueMin(), r = this._valueMax(), i = r !== s ? 100 * ((n - s) / (r - s)) : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](c, a.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                    width: i + "%"
                }, a.animate), "max" === o && "horizontal" === this.orientation && this.range[u ? "animate" : "css"]({
                    width: 100 - i + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                    height: i + "%"
                }, a.animate), "max" === o && "vertical" === this.orientation && this.range[u ? "animate" : "css"]({
                    height: 100 - i + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                }))
            }
        })
    }(jQuery),
    function (t) {
        function e(t) {
            return function () {
                var e = this.element.val();
                t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
            }
        }
        t.widget("ui.spinner", {
            version: "1.9.2",
            defaultElement: "<input>",
            widgetEventPrefix: "spin",
            options: {
                culture: null,
                icons: {
                    down: "ui-icon-triangle-1-s",
                    up: "ui-icon-triangle-1-n"
                },
                incremental: !0,
                max: null,
                min: null,
                numberFormat: null,
                page: 10,
                step: 1,
                change: null,
                spin: null,
                start: null,
                stop: null
            },
            _create: function () {
                this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                    beforeunload: function () {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _getCreateOptions: function () {
                var e = {}, i = this.element;
                return t.each(["min", "max", "step"], function (t, n) {
                    var s = i.attr(n);
                    void 0 !== s && s.length && (e[n] = s)
                }), e
            },
            _events: {
                keydown: function (t) {
                    this._start(t) && this._keydown(t) && t.preventDefault()
                },
                keyup: "_stop",
                focus: function () {
                    this.previous = this.element.val()
                },
                blur: function (t) {
                    return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._refresh(), this.previous !== this.element.val() && this._trigger("change", t), void 0)
                },
                mousewheel: function (t, e) {
                    if (e) {
                        if (!this.spinning && !this._start(t)) return !1;
                        this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                            this.spinning && this._stop(t)
                        }, 100), t.preventDefault()
                    }
                },
                "mousedown .ui-spinner-button": function (e) {
                    function i() {
                        var t = this.element[0] === this.document[0].activeElement;
                        t || (this.element.focus(), this.previous = n, this._delay(function () {
                            this.previous = n
                        }))
                    }
                    var n;
                    n = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
                        delete this.cancelBlur, i.call(this)
                    }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
                },
                "mouseup .ui-spinner-button": "_stop",
                "mouseenter .ui-spinner-button": function (e) {
                    return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e), void 0) : void 0
                },
                "mouseleave .ui-spinner-button": "_stop"
            },
            _draw: function () {
                var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                this.element.attr("role", "spinbutton"), this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()), this.options.disabled && this.disable()
            },
            _keydown: function (e) {
                var i = this.options,
                    n = t.ui.keyCode;
                switch (e.keyCode) {
                    case n.UP:
                        return this._repeat(null, 1, e), !0;
                    case n.DOWN:
                        return this._repeat(null, -1, e), !0;
                    case n.PAGE_UP:
                        return this._repeat(null, i.page, e), !0;
                    case n.PAGE_DOWN:
                        return this._repeat(null, -i.page, e), !0
                }
                return !1
            },
            _uiSpinnerHtml: function () {
                return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
            },
            _buttonHtml: function () {
                return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>"
            },
            _start: function (t) {
                return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
            },
            _repeat: function (t, e, i) {
                t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
                    this._repeat(40, e, i)
                }, t), this._spin(e * this.options.step, i)
            },
            _spin: function (t, e) {
                var i = this.value() || 0;
                this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {
                    value: i
                }) === !1 || (this._value(i), this.counter++)
            },
            _increment: function (e) {
                var i = this.options.incremental;
                return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
            },
            _precision: function () {
                var t = this._precisionOf(this.options.step);
                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
            },
            _precisionOf: function (t) {
                var e = t.toString(),
                    i = e.indexOf(".");
                return -1 === i ? 0 : e.length - i - 1
            },
            _adjustValue: function (t) {
                var e, i, n = this.options;
                return e = null !== n.min ? n.min : 0, i = t - e, i = Math.round(i / n.step) * n.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== n.max && t > n.max ? n.max : null !== n.min && t < n.min ? n.min : t
            },
            _stop: function (t) {
                this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
            },
            _setOption: function (t, e) {
                if ("culture" === t || "numberFormat" === t) {
                    var i = this._parse(this.element.val());
                    return this.options[t] = e, this.element.val(this._format(i)), void 0
                }("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), this._super(t, e), "disabled" === t && (e ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
            },
            _setOptions: e(function (t) {
                this._super(t), this._value(this.element.val())
            }),
            _parse: function (t) {
                return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
            },
            _format: function (t) {
                return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
            },
            _refresh: function () {
                this.element.attr({
                    "aria-valuemin": this.options.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._parse(this.element.val())
                })
            },
            _value: function (t, e) {
                var i;
                "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
            },
            _destroy: function () {
                this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
            },
            stepUp: e(function (t) {
                this._stepUp(t)
            }),
            _stepUp: function (t) {
                this._spin((t || 1) * this.options.step)
            },
            stepDown: e(function (t) {
                this._stepDown(t)
            }),
            _stepDown: function (t) {
                this._spin((t || 1) * -this.options.step)
            },
            pageUp: e(function (t) {
                this._stepUp((t || 1) * this.options.page)
            }),
            pageDown: e(function (t) {
                this._stepDown((t || 1) * this.options.page)
            }),
            value: function (t) {
                return arguments.length ? (e(this._value).call(this, t), void 0) : this._parse(this.element.val())
            },
            widget: function () {
                return this.uiSpinner
            }
        })
    }(jQuery),
    function (t, e) {
        function i() {
            return ++s
        }

        function n(t) {
            return t.hash.length > 1 && t.href.replace(r, "") === location.href.replace(r, "").replace(/\s/g, "%20")
        }
        var s = 0,
            r = /#.*$/;
        t.widget("ui.tabs", {
            version: "1.9.2",
            delay: 300,
            options: {
                active: null,
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _create: function () {
                var e = this,
                    i = this.options,
                    n = i.active,
                    s = location.hash.substring(1);
                this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function (e) {
                    t(this).is(".ui-state-disabled") && e.preventDefault()
                }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
                        t(this).closest("li").is(".ui-state-disabled") && this.blur()
                    }), this._processTabs(), null === n && (s && this.tabs.each(function (e, i) {
                    return t(i).attr("aria-controls") === s ? (n = e, !1) : void 0
                }), null === n && (n = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === n || -1 === n) && (n = this.tabs.length ? 0 : !1)), n !== !1 && (n = this.tabs.index(this.tabs.eq(n)), -1 === n && (n = i.collapsible ? !1 : 0)), i.active = n, !i.collapsible && i.active === !1 && this.anchors.length && (i.active = 0), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                    return e.tabs.index(t)
                }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(this.options.active) : t(), this._refresh(), this.active.length && this.load(i.active)
            },
            _getCreateEventData: function () {
                return {
                    tab: this.active,
                    panel: this.active.length ? this._getPanelForTab(this.active) : t()
                }
            },
            _tabKeydown: function (e) {
                var i = t(this.document[0].activeElement).closest("li"),
                    n = this.tabs.index(i),
                    s = !0;
                if (!this._handlePageNav(e)) {
                    switch (e.keyCode) {
                        case t.ui.keyCode.RIGHT:
                        case t.ui.keyCode.DOWN:
                            n++;
                            break;
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.LEFT:
                            s = !1, n--;
                            break;
                        case t.ui.keyCode.END:
                            n = this.anchors.length - 1;
                            break;
                        case t.ui.keyCode.HOME:
                            n = 0;
                            break;
                        case t.ui.keyCode.SPACE:
                            return e.preventDefault(), clearTimeout(this.activating), this._activate(n), void 0;
                        case t.ui.keyCode.ENTER:
                            return e.preventDefault(), clearTimeout(this.activating), this._activate(n === this.options.active ? !1 : n), void 0;
                        default:
                            return
                    }
                    e.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, s), e.ctrlKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function () {
                        this.option("active", n)
                    }, this.delay))
                }
            },
            _panelKeydown: function (e) {
                this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
            },
            _handlePageNav: function (e) {
                return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
            },
            _findNextTab: function (e, i) {
                function n() {
                    return e > s && (e = 0), 0 > e && (e = s), e
                }
                for (var s = this.tabs.length - 1; - 1 !== t.inArray(n(), this.options.disabled);) e = i ? e + 1 : e - 1;
                return e
            },
            _focusNextTab: function (t, e) {
                return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
            },
            _setOption: function (t, e) {
                return "active" === t ? (this._activate(e), void 0) : "disabled" === t ? (this._setupDisabled(e), void 0) : (this._super(t, e), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e), void 0)
            },
            _tabId: function (t) {
                return t.attr("aria-controls") || "ui-tabs-" + i()
            },
            _sanitizeSelector: function (t) {
                return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function () {
                var e = this.options,
                    i = this.tablist.children(":has(a[href])");
                e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
                    return i.index(t)
                }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
            },
            _refresh: function () {
                this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    tabIndex: -1
                }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                    "aria-selected": "true",
                    tabIndex: 0
                }), this._getPanelForTab(this.active).show().attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                })) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function () {
                var e = this;
                this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                    role: "tab",
                    tabIndex: -1
                }), this.anchors = this.tabs.map(function () {
                    return t("a", this)[0]
                }).addClass("ui-tabs-anchor").attr({
                        role: "presentation",
                        tabIndex: -1
                    }), this.panels = t(), this.anchors.each(function (i, s) {
                    var r, o, a, l = t(s).uniqueId().attr("id"),
                        u = t(s).closest("li"),
                        c = u.attr("aria-controls");
                    n(s) ? (r = s.hash, o = e.element.find(e._sanitizeSelector(r))) : (a = e._tabId(u), r = "#" + a, o = e.element.find(r), o.length || (o = e._createPanel(a), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), c && u.data("ui-tabs-aria-controls", c), u.attr({
                        "aria-controls": r.substring(1),
                        "aria-labelledby": l
                    }), o.attr("aria-labelledby", l)
                }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
            },
            _getList: function () {
                return this.element.find("ol,ul").eq(0)
            },
            _createPanel: function (e) {
                return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
            },
            _setupDisabled: function (e) {
                t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
                for (var i, n = 0; i = this.tabs[n]; n++) e === !0 || -1 !== t.inArray(n, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                this.options.disabled = e
            },
            _setupEvents: function (e) {
                var i = {
                    click: function (t) {
                        t.preventDefault()
                    }
                };
                e && t.each(e.split(" "), function (t, e) {
                    i[e] = "_eventHandler"
                }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, {
                    keydown: "_tabKeydown"
                }), this._on(this.panels, {
                    keydown: "_panelKeydown"
                }), this._focusable(this.tabs), this._hoverable(this.tabs)
            },
            _setupHeightStyle: function (e) {
                var i, n, s = this.element.parent();
                "fill" === e ? (t.support.minHeight || (n = s.css("overflow"), s.css("overflow", "hidden")), i = s.height(), this.element.siblings(":visible").each(function () {
                    var e = t(this),
                        n = e.css("position");
                    "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0))
                }), n && s.css("overflow", n), this.element.children().not(this.panels).each(function () {
                    i -= t(this).outerHeight(!0)
                }), this.panels.each(function () {
                    t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
                }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
                    i = Math.max(i, t(this).height("").height())
                }).height(i))
            },
            _eventHandler: function (e) {
                var i = this.options,
                    n = this.active,
                    s = t(e.currentTarget),
                    r = s.closest("li"),
                    o = r[0] === n[0],
                    a = o && i.collapsible,
                    l = a ? t() : this._getPanelForTab(r),
                    u = n.length ? this._getPanelForTab(n) : t(),
                    c = {
                        oldTab: n,
                        oldPanel: u,
                        newTab: a ? t() : r,
                        newPanel: l
                    };
                e.preventDefault(), r.hasClass("ui-state-disabled") || r.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = a ? !1 : this.tabs.index(r), this.active = o ? t() : r, this.xhr && this.xhr.abort(), u.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(r), e), this._toggle(e, c))
            },
            _toggle: function (e, i) {
                function n() {
                    r.running = !1, r._trigger("activate", e, i)
                }

                function s() {
                    i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && r.options.show ? r._show(o, r.options.show, n) : (o.show(), n())
                }
                var r = this,
                    o = i.newPanel,
                    a = i.oldPanel;
                this.running = !0, a.length && this.options.hide ? this._hide(a, this.options.hide, function () {
                    i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), s()
                }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), a.hide(), s()), a.attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }), i.oldTab.attr("aria-selected", "false"), o.length && a.length ? i.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function () {
                    return 0 === t(this).attr("tabIndex")
                }).attr("tabIndex", -1), o.attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                }), i.newTab.attr({
                    "aria-selected": "true",
                    tabIndex: 0
                })
            },
            _activate: function (e) {
                var i, n = this._findActive(e);
                n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: t.noop
                }))
            },
            _findActive: function (e) {
                return e === !1 ? t() : this.tabs.eq(e)
            },
            _getIndex: function (t) {
                return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
            },
            _destroy: function () {
                this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId(), this.tabs.add(this.panels).each(function () {
                    t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                }), this.tabs.each(function () {
                    var e = t(this),
                        i = e.data("ui-tabs-aria-controls");
                    i ? e.attr("aria-controls", i) : e.removeAttr("aria-controls")
                }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function (i) {
                var n = this.options.disabled;
                n !== !1 && (i === e ? n = !1 : (i = this._getIndex(i), n = t.isArray(n) ? t.map(n, function (t) {
                    return t !== i ? t : null
                }) : t.map(this.tabs, function (t, e) {
                    return e !== i ? e : null
                })), this._setupDisabled(n))
            },
            disable: function (i) {
                var n = this.options.disabled;
                if (n !== !0) {
                    if (i === e) n = !0;
                    else {
                        if (i = this._getIndex(i), -1 !== t.inArray(i, n)) return;
                        n = t.isArray(n) ? t.merge([i], n).sort() : [i]
                    }
                    this._setupDisabled(n)
                }
            },
            load: function (e, i) {
                e = this._getIndex(e);
                var s = this,
                    r = this.tabs.eq(e),
                    o = r.find(".ui-tabs-anchor"),
                    a = this._getPanelForTab(r),
                    l = {
                        tab: r,
                        panel: a
                    };
                n(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, l)), this.xhr && "canceled" !== this.xhr.statusText && (r.addClass("ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.success(function (t) {
                    setTimeout(function () {
                        a.html(t), s._trigger("load", i, l)
                    }, 1)
                }).complete(function (t, e) {
                        setTimeout(function () {
                            "abort" === e && s.panels.stop(!1, !0), r.removeClass("ui-tabs-loading"), a.removeAttr("aria-busy"), t === s.xhr && delete s.xhr
                        }, 1)
                    })))
            },
            _ajaxSettings: function (e, i, n) {
                var s = this;
                return {
                    url: e.attr("href"),
                    beforeSend: function (e, r) {
                        return s._trigger("beforeLoad", i, t.extend({
                            jqXHR: e,
                            ajaxSettings: r
                        }, n))
                    }
                }
            },
            _getPanelForTab: function (e) {
                var i = t(e).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + i))
            }
        }), t.uiBackCompat !== !1 && (t.ui.tabs.prototype._ui = function (t, e) {
            return {
                tab: t,
                panel: e,
                index: this.anchors.index(t)
            }
        }, t.widget("ui.tabs", t.ui.tabs, {
            url: function (t, e) {
                this.anchors.eq(t).attr("href", e)
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            options: {
                ajaxOptions: null,
                cache: !1
            },
            _create: function () {
                this._super();
                var e = this;
                this._on({
                    tabsbeforeload: function (i, n) {
                        return t.data(n.tab[0], "cache.tabs") ? (i.preventDefault(), void 0) : (n.jqXHR.success(function () {
                            e.options.cache && t.data(n.tab[0], "cache.tabs", !0)
                        }), void 0)
                    }
                })
            },
            _ajaxSettings: function (e, i, n) {
                var s = this.options.ajaxOptions;
                return t.extend({}, s, {
                    error: function (t, e) {
                        try {
                            s.error(t, e, n.tab.closest("li").index(), n.tab[0])
                        } catch (i) {}
                    }
                }, this._superApply(arguments))
            },
            _setOption: function (t, e) {
                "cache" === t && e === !1 && this.anchors.removeData("cache.tabs"), this._super(t, e)
            },
            _destroy: function () {
                this.anchors.removeData("cache.tabs"), this._super()
            },
            url: function (t) {
                this.anchors.eq(t).removeData("cache.tabs"), this._superApply(arguments)
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            abort: function () {
                this.xhr && this.xhr.abort()
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            options: {
                spinner: "<em>Loading&#8230;</em>"
            },
            _create: function () {
                this._super(), this._on({
                    tabsbeforeload: function (t, e) {
                        if (t.target === this.element[0] && this.options.spinner) {
                            var i = e.tab.find("span"),
                                n = i.html();
                            i.html(this.options.spinner), e.jqXHR.complete(function () {
                                i.html(n)
                            })
                        }
                    }
                })
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            options: {
                enable: null,
                disable: null
            },
            enable: function (e) {
                var i, n = this.options;
                (e && n.disabled === !0 || t.isArray(n.disabled) && -1 !== t.inArray(e, n.disabled)) && (i = !0), this._superApply(arguments), i && this._trigger("enable", null, this._ui(this.anchors[e], this.panels[e]))
            },
            disable: function (e) {
                var i, n = this.options;
                (e && n.disabled === !1 || t.isArray(n.disabled) && -1 === t.inArray(e, n.disabled)) && (i = !0), this._superApply(arguments), i && this._trigger("disable", null, this._ui(this.anchors[e], this.panels[e]))
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            options: {
                add: null,
                remove: null,
                tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
            },
            add: function (i, n, s) {
                s === e && (s = this.anchors.length);
                var r, o, a = this.options,
                    l = t(a.tabTemplate.replace(/#\{href\}/g, i).replace(/#\{label\}/g, n)),
                    u = i.indexOf("#") ? this._tabId(l) : i.replace("#", "");
                return l.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy", !0), l.attr("aria-controls", u), r = s >= this.tabs.length, o = this.element.find("#" + u), o.length || (o = this._createPanel(u), r ? s > 0 ? o.insertAfter(this.panels.eq(-1)) : o.appendTo(this.element) : o.insertBefore(this.panels[s])), o.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide(), r ? l.appendTo(this.tablist) : l.insertBefore(this.tabs[s]), a.disabled = t.map(a.disabled, function (t) {
                    return t >= s ? ++t : t
                }), this.refresh(), 1 === this.tabs.length && a.active === !1 && this.option("active", 0), this._trigger("add", null, this._ui(this.anchors[s], this.panels[s])), this
            },
            remove: function (e) {
                e = this._getIndex(e);
                var i = this.options,
                    n = this.tabs.eq(e).remove(),
                    s = this._getPanelForTab(n).remove();
                return n.hasClass("ui-tabs-active") && this.anchors.length > 2 && this._activate(e + (e + 1 < this.anchors.length ? 1 : -1)), i.disabled = t.map(t.grep(i.disabled, function (t) {
                    return t !== e
                }), function (t) {
                    return t >= e ? --t : t
                }), this.refresh(), this._trigger("remove", null, this._ui(n.find("a")[0], s[0])), this
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            length: function () {
                return this.anchors.length
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            options: {
                idPrefix: "ui-tabs-"
            },
            _tabId: function (e) {
                var n = e.is("li") ? e.find("a[href]") : e;
                return n = n[0], t(n).closest("li").attr("aria-controls") || n.title && n.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF\-]/g, "") || this.options.idPrefix + i()
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            options: {
                panelTemplate: "<div></div>"
            },
            _createPanel: function (e) {
                return t(this.options.panelTemplate).attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            _create: function () {
                var t = this.options;
                null === t.active && t.selected !== e && (t.active = -1 === t.selected ? !1 : t.selected), this._super(), t.selected = t.active, t.selected === !1 && (t.selected = -1)
            },
            _setOption: function (t, e) {
                if ("selected" !== t) return this._super(t, e);
                var i = this.options;
                this._super("active", -1 === e ? !1 : e), i.selected = i.active, i.selected === !1 && (i.selected = -1)
            },
            _eventHandler: function () {
                this._superApply(arguments), this.options.selected = this.options.active, this.options.selected === !1 && (this.options.selected = -1)
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            options: {
                show: null,
                select: null
            },
            _create: function () {
                this._super(), this.options.active !== !1 && this._trigger("show", null, this._ui(this.active.find(".ui-tabs-anchor")[0], this._getPanelForTab(this.active)[0]))
            },
            _trigger: function (t, e, i) {
                var n, s, r = this._superApply(arguments);
                return r ? ("beforeActivate" === t ? (n = i.newTab.length ? i.newTab : i.oldTab, s = i.newPanel.length ? i.newPanel : i.oldPanel, r = this._super("select", e, {
                    tab: n.find(".ui-tabs-anchor")[0],
                    panel: s[0],
                    index: n.closest("li").index()
                })) : "activate" === t && i.newTab.length && (r = this._super("show", e, {
                    tab: i.newTab.find(".ui-tabs-anchor")[0],
                    panel: i.newPanel[0],
                    index: i.newTab.closest("li").index()
                })), r) : !1
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            select: function (t) {
                if (t = this._getIndex(t), -1 === t) {
                    if (!this.options.collapsible || -1 === this.options.selected) return;
                    t = this.options.selected
                }
                this.anchors.eq(t).trigger(this.options.event + this.eventNamespace)
            }
        }), function () {
            var e = 0;
            t.widget("ui.tabs", t.ui.tabs, {
                options: {
                    cookie: null
                },
                _create: function () {
                    var t, e = this.options;
                    null == e.active && e.cookie && (t = parseInt(this._cookie(), 10), -1 === t && (t = !1), e.active = t), this._super()
                },
                _cookie: function (i) {
                    var n = [this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + ++e)];
                    return arguments.length && (n.push(i === !1 ? -1 : i), n.push(this.options.cookie)), t.cookie.apply(null, n)
                },
                _refresh: function () {
                    this._super(), this.options.cookie && this._cookie(this.options.active, this.options.cookie)
                },
                _eventHandler: function () {
                    this._superApply(arguments), this.options.cookie && this._cookie(this.options.active, this.options.cookie)
                },
                _destroy: function () {
                    this._super(), this.options.cookie && this._cookie(null, this.options.cookie)
                }
            })
        }(), t.widget("ui.tabs", t.ui.tabs, {
            _trigger: function (e, i, n) {
                var s = t.extend({}, n);
                return "load" === e && (s.panel = s.panel[0], s.tab = s.tab.find(".ui-tabs-anchor")[0]), this._super(e, i, s)
            }
        }), t.widget("ui.tabs", t.ui.tabs, {
            options: {
                fx: null
            },
            _getFx: function () {
                var e, i, n = this.options.fx;
                return n && (t.isArray(n) ? (e = n[0], i = n[1]) : e = i = n), n ? {
                    show: i,
                    hide: e
                } : null
            },
            _toggle: function (t, e) {
                function i() {
                    s.running = !1, s._trigger("activate", t, e)
                }

                function n() {
                    e.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), r.length && a.show ? r.animate(a.show, a.show.duration, function () {
                        i()
                    }) : (r.show(), i())
                }
                var s = this,
                    r = e.newPanel,
                    o = e.oldPanel,
                    a = this._getFx();
                return a ? (s.running = !0, o.length && a.hide ? o.animate(a.hide, a.hide.duration, function () {
                    e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n()
                }) : (e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), o.hide(), n()), void 0) : this._super(t, e)
            }
        }))
    }(jQuery),
    function (t) {
        function e(e, i) {
            var n = (e.attr("aria-describedby") || "").split(/\s+/);
            n.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(n.join(" ")))
        }

        function i(e) {
            var i = e.data("ui-tooltip-id"),
                n = (e.attr("aria-describedby") || "").split(/\s+/),
                s = t.inArray(i, n); - 1 !== s && n.splice(s, 1), e.removeData("ui-tooltip-id"), n = t.trim(n.join(" ")), n ? e.attr("aria-describedby", n) : e.removeAttr("aria-describedby")
        }
        var n = 0;
        t.widget("ui.tooltip", {
            version: "1.9.2",
            options: {
                content: function () {
                    return t(this).attr("title")
                },
                hide: !0,
                items: "[title]:not([disabled])",
                position: {
                    my: "left top+15",
                    at: "left bottom",
                    collision: "flipfit flip"
                },
                show: !0,
                tooltipClass: null,
                track: !1,
                close: null,
                open: null
            },
            _create: function () {
                this._on({
                    mouseover: "open",
                    focusin: "open"
                }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
            },
            _setOption: function (e, i) {
                var n = this;
                return "disabled" === e ? (this[i ? "_disable" : "_enable"](), this.options[e] = i, void 0) : (this._super(e, i), "content" === e && t.each(this.tooltips, function (t, e) {
                    n._updateContent(e)
                }), void 0)
            },
            _disable: function () {
                var e = this;
                t.each(this.tooltips, function (i, n) {
                    var s = t.Event("blur");
                    s.target = s.currentTarget = n[0], e.close(s, !0)
                }), this.element.find(this.options.items).andSelf().each(function () {
                    var e = t(this);
                    e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).attr("title", "")
                })
            },
            _enable: function () {
                this.element.find(this.options.items).andSelf().each(function () {
                    var e = t(this);
                    e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
                })
            },
            open: function (e) {
                var i = this,
                    n = t(e ? e.target : this.element).closest(this.options.items);
                n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")), n.data("ui-tooltip-open", !0), e && "mouseover" === e.type && n.parents().each(function () {
                    var e, n = t(this);
                    n.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), n.attr("title") && (n.uniqueId(), i.parents[this.id] = {
                        element: this,
                        title: n.attr("title")
                    }, n.attr("title", ""))
                }), this._updateContent(n, e))
            },
            _updateContent: function (t, e) {
                var i, n = this.options.content,
                    s = this,
                    r = e ? e.type : null;
                return "string" == typeof n ? this._open(e, t, n) : (i = n.call(t[0], function (i) {
                    t.data("ui-tooltip-open") && s._delay(function () {
                        e && (e.type = r), this._open(e, t, i)
                    })
                }), i && this._open(e, t, i), void 0)
            },
            _open: function (i, n, s) {
                function r(t) {
                    u.of = t, o.is(":hidden") || o.position(u)
                }
                var o, a, l, u = t.extend({}, this.options.position);
                if (s) {
                    if (o = this._find(n), o.length) return o.find(".ui-tooltip-content").html(s), void 0;
                    n.is("[title]") && (i && "mouseover" === i.type ? n.attr("title", "") : n.removeAttr("title")), o = this._tooltip(n), e(n, o.attr("id")), o.find(".ui-tooltip-content").html(s), this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, {
                        mousemove: r
                    }), r(i)) : o.position(t.extend({
                        of: n
                    }, this.options.position)), o.hide(), this._show(o, this.options.show), this.options.show && this.options.show.delay && (l = setInterval(function () {
                        o.is(":visible") && (r(u.of), clearInterval(l))
                    }, t.fx.interval)), this._trigger("open", i, {
                        tooltip: o
                    }), a = {
                        keyup: function (e) {
                            if (e.keyCode === t.ui.keyCode.ESCAPE) {
                                var i = t.Event(e);
                                i.currentTarget = n[0], this.close(i, !0)
                            }
                        },
                        remove: function () {
                            this._removeTooltip(o)
                        }
                    }, i && "mouseover" !== i.type || (a.mouseleave = "close"), i && "focusin" !== i.type || (a.focusout = "close"), this._on(!0, n, a)
                }
            },
            close: function (e) {
                var n = this,
                    s = t(e ? e.currentTarget : this.element),
                    r = this._find(s);
                this.closing || (s.data("ui-tooltip-title") && s.attr("title", s.data("ui-tooltip-title")), i(s), r.stop(!0), this._hide(r, this.options.hide, function () {
                    n._removeTooltip(t(this))
                }), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function (e, i) {
                    t(i.element).attr("title", i.title), delete n.parents[e]
                }), this.closing = !0, this._trigger("close", e, {
                    tooltip: r
                }), this.closing = !1)
            },
            _tooltip: function (e) {
                var i = "ui-tooltip-" + n++,
                    s = t("<div>").attr({
                        id: i,
                        role: "tooltip"
                    }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
                return t("<div>").addClass("ui-tooltip-content").appendTo(s), s.appendTo(this.document[0].body), t.fn.bgiframe && s.bgiframe(), this.tooltips[i] = e, s
            },
            _find: function (e) {
                var i = e.data("ui-tooltip-id");
                return i ? t("#" + i) : t()
            },
            _removeTooltip: function (t) {
                t.remove(), delete this.tooltips[t.attr("id")]
            },
            _destroy: function () {
                var e = this;
                t.each(this.tooltips, function (i, n) {
                    var s = t.Event("blur");
                    s.target = s.currentTarget = n[0], e.close(s, !0), t("#" + i).remove(), n.data("ui-tooltip-title") && (n.attr("title", n.data("ui-tooltip-title")), n.removeData("ui-tooltip-title"))
                })
            }
        })
    }(jQuery),
    function (t, e, i) {
        function n(t) {
            return t
        }

        function s(t) {
            return decodeURIComponent(t.replace(r, " "))
        }
        var r = /\+/g;
        t.cookie = function (r, o, a) {
            if (o !== i && !/Object/.test(Object.prototype.toString.call(o))) {
                if (a = t.extend({}, t.cookie.defaults, a), null === o && (a.expires = -1), "number" == typeof a.expires) {
                    var l = a.expires,
                        u = a.expires = new Date;
                    u.setDate(u.getDate() + l)
                }
                return o = String(o), e.cookie = [encodeURIComponent(r), "=", a.raw ? o : encodeURIComponent(o), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
            }
            a = o || t.cookie.defaults || {};
            for (var c, h = a.raw ? n : s, d = e.cookie.split("; "), p = 0; c = d[p] && d[p].split("="); p++)
                if (h(c.shift()) === r) return h(c.join("="));
            return null
        }, t.cookie.defaults = {}, t.removeCookie = function (e, i) {
            return null !== t.cookie(e, i) ? (t.cookie(e, null, i), !0) : !1
        }
    }(jQuery, document),
    function (t) {
        function e() {}

        function i(t) {
            o = [t]
        }

        function n(t, e, i) {
            return t && t.apply && t.apply(e.context || e, i)
        }

        function s(t) {
            return /\?/.test(t) ? "&" : "?"
        }

        function r(r) {
            function p(t) {
                X++ || (G(), W && (S[U] = {
                    s: [t]
                }), L && (t = L.apply(r, [t])), n(F, r, [t, w, r]), n(H, r, [r, w]))
            }

            function M(t) {
                X++ || (G(), W && t != x && (S[U] = t), n(O, r, [r, t]), n(H, r, [r, t]))
            }
            r = t.extend({}, P, r);
            var A, N, V, $, j, F = r.success,
                O = r.error,
                H = r.complete,
                L = r.dataFilter,
                B = r.callbackParameter,
                z = r.callback,
                R = r.cache,
                W = r.pageCache,
                q = r.charset,
                U = r.url,
                K = r.data,
                Y = r.timeout,
                X = 0,
                G = e;
            return C && C(function (t) {
                t.done(F).fail(O), F = t.resolve, O = t.reject
            }).promise(r), r.abort = function () {
                !X++ && G()
            }, n(r.beforeSend, r, [r]) === !1 || X ? r : (U = U || u, K = K ? "string" == typeof K ? K : t.param(K, r.traditional) : u, U += K ? s(U) + K : u, B && (U += s(U) + encodeURIComponent(B) + "=?"), !R && !W && (U += s(U) + "_" + (new Date).getTime() + "="), U = U.replace(/=\?(&|$)/, "=" + z + "$1"), W && (A = S[U]) ? A.s ? p(A.s[0]) : M(A) : (k[z] = i, V = t(b)[0], V.id = d + E++, q && (V[l] = q), D && D.version() < 11.6 ? ($ = t(b)[0]).text = "document.getElementById('" + V.id + "')." + m + "()" : V[a] = a, I && (V.htmlFor = V.id, V.event = f), V[g] = V[m] = V[v] = function (t) {
                if (!V[y] || !/i/.test(V[y])) {
                    try {
                        V[f] && V[f]()
                    } catch (e) {}
                    t = o, o = 0, t ? p(t[0]) : M(c)
                }
            }, V.src = U, G = function () {
                j && clearTimeout(j), V[v] = V[g] = V[m] = null, T[_](V), $ && T[_]($)
            }, T[h](V, N = T.firstChild), $ && T[h]($, N), j = Y > 0 && setTimeout(function () {
                M(x)
            }, Y)), r)
        }
        var o, a = "async",
            l = "charset",
            u = "",
            c = "error",
            h = "insertBefore",
            d = "_jqjsp",
            p = "on",
            f = p + "click",
            m = p + c,
            g = p + "load",
            v = p + "readystatechange",
            y = "readyState",
            _ = "removeChild",
            b = "<script>",
            w = "success",
            x = "timeout",
            k = window,
            C = t.Deferred,
            T = t("head")[0] || document.documentElement,
            S = {}, E = 0,
            P = {
                callback: d,
                url: location.href
            }, D = k.opera,
            I = !! t("<div>").html("<!--[if IE]><i><![endif]-->").find("i").length;
        r.setup = function (e) {
            t.extend(P, e)
        }, t.jsonp = r
    }(jQuery),
    function () {
        var t, e, i = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        };
        window.Waveform = e = function () {
            function e(t) {
                if (this.redraw = i(this.redraw, this), this.container = t.container, this.canvas = t.canvas, this.data = t.data || [], this.outerColor = t.outerColor || "transparent", this.innerColor = t.innerColor || "#000000", this.interpolate = !0, t.interpolate === !1 && (this.interpolate = !1), null == this.canvas) {
                    if (!this.container) throw "Either canvas or container option must be passed";
                    this.canvas = this.createCanvas(this.container, t.width || this.container.clientWidth, t.height || this.container.clientHeight)
                }
                this.patchCanvasForIE(this.canvas), this.context = this.canvas.getContext("2d"), this.width = parseInt(this.context.canvas.width, 10), this.height = parseInt(this.context.canvas.height, 10), t.data && this.update(t)
            }
            return e.name = "Waveform", e.prototype.setData = function (t) {
                return this.data = t
            }, e.prototype.setDataInterpolated = function (t) {
                return this.setData(this.interpolateArray(t, this.width))
            }, e.prototype.setDataCropped = function (t) {
                return this.setData(this.expandArray(t, this.width))
            }, e.prototype.update = function (t) {
                return null != t.interpolate && (this.interpolate = t.interpolate), this.interpolate === !1 ? this.setDataCropped(t.data) : this.setDataInterpolated(t.data), this.redraw()
            }, e.prototype.redraw = function () {
                var t, e, i, n, s, r, o, a;
                for (this.clear(), this.context.fillStyle = this.innerColor, i = this.height / 2, e = 0, o = this.data, a = [], s = 0, r = o.length; r > s; s++) t = o[s], n = this.width / this.data.length, "function" == typeof this.innerColor && (this.context.fillStyle = this.innerColor(e / this.width, t)), this.context.clearRect(n * e, i - i * t, n, 2 * i * t), this.context.fillRect(n * e, i - i * t, n, 2 * i * t), a.push(e++);
                return a
            }, e.prototype.clear = function () {
                return this.context.fillStyle = this.outerColor, this.context.clearRect(0, 0, this.width, this.height), this.context.fillRect(0, 0, this.width, this.height)
            }, e.prototype.patchCanvasForIE = function (t) {
                var e;
                return "undefined" != typeof window.G_vmlCanvasManager ? (t = window.G_vmlCanvasManager.initElement(t), e = t.getContext, t.getContext = function () {
                    var i;
                    return i = e.apply(t, arguments), t.getContext = e, i
                }) : void 0
            }, e.prototype.createCanvas = function (t, e, i) {
                var n;
                return n = document.createElement("canvas"), t.appendChild(n), n.width = e, n.height = i, n
            }, e.prototype.expandArray = function (t, e, i) {
                var n, s, r, o;
                if (null == i && (i = 0), s = [], t.length > e) s = t.slice(t.length - e, t.length);
                else
                    for (n = r = 0, o = e - 1; o >= 0 ? o >= r : r >= o; n = o >= 0 ? ++r : --r) s[n] = t[n] || i;
                return s
            }, e.prototype.linearInterpolate = function (t, e, i) {
                return t + (e - t) * i
            }, e.prototype.interpolateArray = function (t, e) {
                var i, n, s, r, o, a, l;
                for (o = new Array, a = new Number((t.length - 1) / (e - 1)), o[0] = t[0], r = 1; e - 1 > r;) l = r * a, s = new Number(Math.floor(l)).toFixed(), i = new Number(Math.ceil(l)).toFixed(), n = l - s, o[r] = this.linearInterpolate(t[s], t[i], n), r++;
                return o[e - 1] = t[t.length - 1], o
            }, e.prototype.optionsForSyncedStream = function (t) {
                var e, i;
                return null == t && (t = {}), e = !1, i = this, {
                    whileplaying: this.redraw,
                    whileloading: function () {
                        var n;
                        return e || (n = this, i.innerColor = function (e) {
                            return e < n.position / n.durationEstimate ? t.playedColor || "rgba(255,  102, 0, 0.8)" : e < n.bytesLoaded / n.bytesTotal ? t.loadedColor || "rgba(0, 0, 0, 0.8)" : t.defaultColor || "rgba(0, 0, 0, 0.4)"
                        }, e = !0), this.redraw
                    }
                }
            }, e.prototype.dataFromSoundCloudTrack = function (e) {
                var i = this;
                return t.get("http://waveformjs.org/w", {
                    url: e.waveform_url
                }, function (t) {
                    return i.update({
                        data: t
                    })
                })
            }, e
        }(), t = function () {
            var t, e, i, n, s, r, o, a, l, u;
            return o = function (t) {
                var e, i, n;
                return n = document.createElement("script"), e = !1, n.src = t, n.async = !0, n.onload = n.onreadystatechange = function () {
                    return e || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (e = !0, n.onload = n.onreadystatechange = null, !n || !n.parentNode) ? void 0 : n.parentNode.removeChild(n)
                }, i || (i = document.getElementsByTagName("head")[0]), i.appendChild(n)
            }, i = function (t) {
                return encodeURIComponent(t)
            }, s = function (n, r, a, l) {
                var c, h;
                h = -1 === (n || "").indexOf("?") ? "?" : "&", r = r || {};
                for (c in r) r.hasOwnProperty(c) && (h += i(c) + "=" + i(r[c]) + "&");
                return s = "json" + ++e, u[s] = function (t) {
                    a(t);
                    try {
                        delete u[s]
                    } catch (e) {}
                    return u[s] = null
                }, o(n + h + (l || t.callbackName || "callback") + "=" + s), s
            }, l = function (t) {
                var e;
                return e = t
            }, e = 0, n = void 0, a = void 0, r = void 0, u = this, t = {}, {
                get: s,
                init: l
            }
        }()
    }.call(this),
    function () {
        var t = this,
            e = t._,
            i = {}, n = Array.prototype,
            s = Object.prototype,
            r = Function.prototype,
            o = n.push,
            a = n.slice,
            l = n.concat,
            u = s.toString,
            c = s.hasOwnProperty,
            h = n.forEach,
            d = n.map,
            p = n.reduce,
            f = n.reduceRight,
            m = n.filter,
            g = n.every,
            v = n.some,
            y = n.indexOf,
            _ = n.lastIndexOf,
            b = Array.isArray,
            w = Object.keys,
            x = r.bind,
            k = function (t) {
                return t instanceof k ? t : this instanceof k ? (this._wrapped = t, void 0) : new k(t)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = k), exports._ = k) : t._ = k, k.VERSION = "1.5.2";
        var C = k.each = k.forEach = function (t, e, n) {
            if (null != t)
                if (h && t.forEach === h) t.forEach(e, n);
                else if (t.length === +t.length) {
                    for (var s = 0, r = t.length; r > s; s++)
                        if (e.call(n, t[s], s, t) === i) return
                } else
                    for (var o = k.keys(t), s = 0, r = o.length; r > s; s++)
                        if (e.call(n, t[o[s]], o[s], t) === i) return
        };
        k.map = k.collect = function (t, e, i) {
            var n = [];
            return null == t ? n : d && t.map === d ? t.map(e, i) : (C(t, function (t, s, r) {
                n.push(e.call(i, t, s, r))
            }), n)
        };
        var T = "Reduce of empty array with no initial value";
        k.reduce = k.foldl = k.inject = function (t, e, i, n) {
            var s = arguments.length > 2;
            if (null == t && (t = []), p && t.reduce === p) return n && (e = k.bind(e, n)), s ? t.reduce(e, i) : t.reduce(e);
            if (C(t, function (t, r, o) {
                s ? i = e.call(n, i, t, r, o) : (i = t, s = !0)
            }), !s) throw new TypeError(T);
            return i
        }, k.reduceRight = k.foldr = function (t, e, i, n) {
            var s = arguments.length > 2;
            if (null == t && (t = []), f && t.reduceRight === f) return n && (e = k.bind(e, n)), s ? t.reduceRight(e, i) : t.reduceRight(e);
            var r = t.length;
            if (r !== +r) {
                var o = k.keys(t);
                r = o.length
            }
            if (C(t, function (a, l, u) {
                l = o ? o[--r] : --r, s ? i = e.call(n, i, t[l], l, u) : (i = t[l], s = !0)
            }), !s) throw new TypeError(T);
            return i
        }, k.find = k.detect = function (t, e, i) {
            var n;
            return S(t, function (t, s, r) {
                return e.call(i, t, s, r) ? (n = t, !0) : void 0
            }), n
        }, k.filter = k.select = function (t, e, i) {
            var n = [];
            return null == t ? n : m && t.filter === m ? t.filter(e, i) : (C(t, function (t, s, r) {
                e.call(i, t, s, r) && n.push(t)
            }), n)
        }, k.reject = function (t, e, i) {
            return k.filter(t, function (t, n, s) {
                return !e.call(i, t, n, s)
            }, i)
        }, k.every = k.all = function (t, e, n) {
            e || (e = k.identity);
            var s = !0;
            return null == t ? s : g && t.every === g ? t.every(e, n) : (C(t, function (t, r, o) {
                return (s = s && e.call(n, t, r, o)) ? void 0 : i
            }), !! s)
        };
        var S = k.some = k.any = function (t, e, n) {
            e || (e = k.identity);
            var s = !1;
            return null == t ? s : v && t.some === v ? t.some(e, n) : (C(t, function (t, r, o) {
                return s || (s = e.call(n, t, r, o)) ? i : void 0
            }), !! s)
        };
        k.contains = k.include = function (t, e) {
            return null == t ? !1 : y && t.indexOf === y ? -1 != t.indexOf(e) : S(t, function (t) {
                return t === e
            })
        }, k.invoke = function (t, e) {
            var i = a.call(arguments, 2),
                n = k.isFunction(e);
            return k.map(t, function (t) {
                return (n ? e : t[e]).apply(t, i)
            })
        }, k.pluck = function (t, e) {
            return k.map(t, function (t) {
                return t[e]
            })
        }, k.where = function (t, e, i) {
            return k.isEmpty(e) ? i ? void 0 : [] : k[i ? "find" : "filter"](t, function (t) {
                for (var i in e)
                    if (e[i] !== t[i]) return !1;
                return !0
            })
        }, k.findWhere = function (t, e) {
            return k.where(t, e, !0)
        }, k.max = function (t, e, i) {
            if (!e && k.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
            if (!e && k.isEmpty(t)) return -1 / 0;
            var n = {
                computed: -1 / 0,
                value: -1 / 0
            };
            return C(t, function (t, s, r) {
                var o = e ? e.call(i, t, s, r) : t;
                o > n.computed && (n = {
                    value: t,
                    computed: o
                })
            }), n.value
        }, k.min = function (t, e, i) {
            if (!e && k.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
            if (!e && k.isEmpty(t)) return 1 / 0;
            var n = {
                computed: 1 / 0,
                value: 1 / 0
            };
            return C(t, function (t, s, r) {
                var o = e ? e.call(i, t, s, r) : t;
                o < n.computed && (n = {
                    value: t,
                    computed: o
                })
            }), n.value
        }, k.shuffle = function (t) {
            var e, i = 0,
                n = [];
            return C(t, function (t) {
                e = k.random(i++), n[i - 1] = n[e], n[e] = t
            }), n
        }, k.sample = function (t, e, i) {
            return arguments.length < 2 || i ? t[k.random(t.length - 1)] : k.shuffle(t).slice(0, Math.max(0, e))
        };
        var E = function (t) {
            return k.isFunction(t) ? t : function (e) {
                return e[t]
            }
        };
        k.sortBy = function (t, e, i) {
            var n = E(e);
            return k.pluck(k.map(t, function (t, e, s) {
                return {
                    value: t,
                    index: e,
                    criteria: n.call(i, t, e, s)
                }
            }).sort(function (t, e) {
                    var i = t.criteria,
                        n = e.criteria;
                    if (i !== n) {
                        if (i > n || void 0 === i) return 1;
                        if (n > i || void 0 === n) return -1
                    }
                    return t.index - e.index
                }), "value")
        };
        var P = function (t) {
            return function (e, i, n) {
                var s = {}, r = null == i ? k.identity : E(i);
                return C(e, function (i, o) {
                    var a = r.call(n, i, o, e);
                    t(s, a, i)
                }), s
            }
        };
        k.groupBy = P(function (t, e, i) {
            (k.has(t, e) ? t[e] : t[e] = []).push(i)
        }), k.indexBy = P(function (t, e, i) {
            t[e] = i
        }), k.countBy = P(function (t, e) {
            k.has(t, e) ? t[e]++ : t[e] = 1
        }), k.sortedIndex = function (t, e, i, n) {
            i = null == i ? k.identity : E(i);
            for (var s = i.call(n, e), r = 0, o = t.length; o > r;) {
                var a = r + o >>> 1;
                i.call(n, t[a]) < s ? r = a + 1 : o = a
            }
            return r
        }, k.toArray = function (t) {
            return t ? k.isArray(t) ? a.call(t) : t.length === +t.length ? k.map(t, k.identity) : k.values(t) : []
        }, k.size = function (t) {
            return null == t ? 0 : t.length === +t.length ? t.length : k.keys(t).length
        }, k.first = k.head = k.take = function (t, e, i) {
            return null == t ? void 0 : null == e || i ? t[0] : a.call(t, 0, e)
        }, k.initial = function (t, e, i) {
            return a.call(t, 0, t.length - (null == e || i ? 1 : e))
        }, k.last = function (t, e, i) {
            return null == t ? void 0 : null == e || i ? t[t.length - 1] : a.call(t, Math.max(t.length - e, 0))
        }, k.rest = k.tail = k.drop = function (t, e, i) {
            return a.call(t, null == e || i ? 1 : e)
        }, k.compact = function (t) {
            return k.filter(t, k.identity)
        };
        var D = function (t, e, i) {
            return e && k.every(t, k.isArray) ? l.apply(i, t) : (C(t, function (t) {
                k.isArray(t) || k.isArguments(t) ? e ? o.apply(i, t) : D(t, e, i) : i.push(t)
            }), i)
        };
        k.flatten = function (t, e) {
            return D(t, e, [])
        }, k.without = function (t) {
            return k.difference(t, a.call(arguments, 1))
        }, k.uniq = k.unique = function (t, e, i, n) {
            k.isFunction(e) && (n = i, i = e, e = !1);
            var s = i ? k.map(t, i, n) : t,
                r = [],
                o = [];
            return C(s, function (i, n) {
                (e ? n && o[o.length - 1] === i : k.contains(o, i)) || (o.push(i), r.push(t[n]))
            }), r
        }, k.union = function () {
            return k.uniq(k.flatten(arguments, !0))
        }, k.intersection = function (t) {
            var e = a.call(arguments, 1);
            return k.filter(k.uniq(t), function (t) {
                return k.every(e, function (e) {
                    return k.indexOf(e, t) >= 0
                })
            })
        }, k.difference = function (t) {
            var e = l.apply(n, a.call(arguments, 1));
            return k.filter(t, function (t) {
                return !k.contains(e, t)
            })
        }, k.zip = function () {
            for (var t = k.max(k.pluck(arguments, "length").concat(0)), e = new Array(t), i = 0; t > i; i++) e[i] = k.pluck(arguments, "" + i);
            return e
        }, k.object = function (t, e) {
            if (null == t) return {};
            for (var i = {}, n = 0, s = t.length; s > n; n++) e ? i[t[n]] = e[n] : i[t[n][0]] = t[n][1];
            return i
        }, k.indexOf = function (t, e, i) {
            if (null == t) return -1;
            var n = 0,
                s = t.length;
            if (i) {
                if ("number" != typeof i) return n = k.sortedIndex(t, e), t[n] === e ? n : -1;
                n = 0 > i ? Math.max(0, s + i) : i
            }
            if (y && t.indexOf === y) return t.indexOf(e, i);
            for (; s > n; n++)
                if (t[n] === e) return n;
            return -1
        }, k.lastIndexOf = function (t, e, i) {
            if (null == t) return -1;
            var n = null != i;
            if (_ && t.lastIndexOf === _) return n ? t.lastIndexOf(e, i) : t.lastIndexOf(e);
            for (var s = n ? i : t.length; s--;)
                if (t[s] === e) return s;
            return -1
        }, k.range = function (t, e, i) {
            arguments.length <= 1 && (e = t || 0, t = 0), i = arguments[2] || 1;
            for (var n = Math.max(Math.ceil((e - t) / i), 0), s = 0, r = new Array(n); n > s;) r[s++] = t, t += i;
            return r
        };
        var I = function () {};
        k.bind = function (t, e) {
            var i, n;
            if (x && t.bind === x) return x.apply(t, a.call(arguments, 1));
            if (!k.isFunction(t)) throw new TypeError;
            return i = a.call(arguments, 2), n = function () {
                if (!(this instanceof n)) return t.apply(e, i.concat(a.call(arguments)));
                I.prototype = t.prototype;
                var s = new I;
                I.prototype = null;
                var r = t.apply(s, i.concat(a.call(arguments)));
                return Object(r) === r ? r : s
            }
        }, k.partial = function (t) {
            var e = a.call(arguments, 1);
            return function () {
                return t.apply(this, e.concat(a.call(arguments)))
            }
        }, k.bindAll = function (t) {
            var e = a.call(arguments, 1);
            if (0 === e.length) throw new Error("bindAll must be passed function names");
            return C(e, function (e) {
                t[e] = k.bind(t[e], t)
            }), t
        }, k.memoize = function (t, e) {
            var i = {};
            return e || (e = k.identity),
                function () {
                    var n = e.apply(this, arguments);
                    return k.has(i, n) ? i[n] : i[n] = t.apply(this, arguments)
                }
        }, k.delay = function (t, e) {
            var i = a.call(arguments, 2);
            return setTimeout(function () {
                return t.apply(null, i)
            }, e)
        }, k.defer = function (t) {
            return k.delay.apply(k, [t, 1].concat(a.call(arguments, 1)))
        }, k.throttle = function (t, e, i) {
            var n, s, r, o = null,
                a = 0;
            i || (i = {});
            var l = function () {
                a = i.leading === !1 ? 0 : new Date, o = null, r = t.apply(n, s)
            };
            return function () {
                var u = new Date;
                a || i.leading !== !1 || (a = u);
                var c = e - (u - a);
                return n = this, s = arguments, 0 >= c ? (clearTimeout(o), o = null, a = u, r = t.apply(n, s)) : o || i.trailing === !1 || (o = setTimeout(l, c)), r
            }
        }, k.debounce = function (t, e, i) {
            var n, s, r, o, a;
            return function () {
                r = this, s = arguments, o = new Date;
                var l = function () {
                    var u = new Date - o;
                    e > u ? n = setTimeout(l, e - u) : (n = null, i || (a = t.apply(r, s)))
                }, u = i && !n;
                return n || (n = setTimeout(l, e)), u && (a = t.apply(r, s)), a
            }
        }, k.once = function (t) {
            var e, i = !1;
            return function () {
                return i ? e : (i = !0, e = t.apply(this, arguments), t = null, e)
            }
        }, k.wrap = function (t, e) {
            return function () {
                var i = [t];
                return o.apply(i, arguments), e.apply(this, i)
            }
        }, k.compose = function () {
            var t = arguments;
            return function () {
                for (var e = arguments, i = t.length - 1; i >= 0; i--) e = [t[i].apply(this, e)];
                return e[0]
            }
        }, k.after = function (t, e) {
            return function () {
                return --t < 1 ? e.apply(this, arguments) : void 0
            }
        }, k.keys = w || function (t) {
            if (t !== Object(t)) throw new TypeError("Invalid object");
            var e = [];
            for (var i in t) k.has(t, i) && e.push(i);
            return e
        }, k.values = function (t) {
            for (var e = k.keys(t), i = e.length, n = new Array(i), s = 0; i > s; s++) n[s] = t[e[s]];
            return n
        }, k.pairs = function (t) {
            for (var e = k.keys(t), i = e.length, n = new Array(i), s = 0; i > s; s++) n[s] = [e[s], t[e[s]]];
            return n
        }, k.invert = function (t) {
            for (var e = {}, i = k.keys(t), n = 0, s = i.length; s > n; n++) e[t[i[n]]] = i[n];
            return e
        }, k.functions = k.methods = function (t) {
            var e = [];
            for (var i in t) k.isFunction(t[i]) && e.push(i);
            return e.sort()
        }, k.extend = function (t) {
            return C(a.call(arguments, 1), function (e) {
                if (e)
                    for (var i in e) t[i] = e[i]
            }), t
        }, k.pick = function (t) {
            var e = {}, i = l.apply(n, a.call(arguments, 1));
            return C(i, function (i) {
                i in t && (e[i] = t[i])
            }), e
        }, k.omit = function (t) {
            var e = {}, i = l.apply(n, a.call(arguments, 1));
            for (var s in t) k.contains(i, s) || (e[s] = t[s]);
            return e
        }, k.defaults = function (t) {
            return C(a.call(arguments, 1), function (e) {
                if (e)
                    for (var i in e) void 0 === t[i] && (t[i] = e[i])
            }), t
        }, k.clone = function (t) {
            return k.isObject(t) ? k.isArray(t) ? t.slice() : k.extend({}, t) : t
        }, k.tap = function (t, e) {
            return e(t), t
        };
        var M = function (t, e, i, n) {
            if (t === e) return 0 !== t || 1 / t == 1 / e;
            if (null == t || null == e) return t === e;
            t instanceof k && (t = t._wrapped), e instanceof k && (e = e._wrapped);
            var s = u.call(t);
            if (s != u.call(e)) return !1;
            switch (s) {
                case "[object String]":
                    return t == String(e);
                case "[object Number]":
                    return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
                case "[object Date]":
                case "[object Boolean]":
                    return +t == +e;
                case "[object RegExp]":
                    return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
            }
            if ("object" != typeof t || "object" != typeof e) return !1;
            for (var r = i.length; r--;)
                if (i[r] == t) return n[r] == e;
            var o = t.constructor,
                a = e.constructor;
            if (o !== a && !(k.isFunction(o) && o instanceof o && k.isFunction(a) && a instanceof a)) return !1;
            i.push(t), n.push(e);
            var l = 0,
                c = !0;
            if ("[object Array]" == s) {
                if (l = t.length, c = l == e.length)
                    for (; l-- && (c = M(t[l], e[l], i, n)););
            } else {
                for (var h in t)
                    if (k.has(t, h) && (l++, !(c = k.has(e, h) && M(t[h], e[h], i, n)))) break;
                if (c) {
                    for (h in e)
                        if (k.has(e, h) && !l--) break;
                    c = !l
                }
            }
            return i.pop(), n.pop(), c
        };
        k.isEqual = function (t, e) {
            return M(t, e, [], [])
        }, k.isEmpty = function (t) {
            if (null == t) return !0;
            if (k.isArray(t) || k.isString(t)) return 0 === t.length;
            for (var e in t)
                if (k.has(t, e)) return !1;
            return !0
        }, k.isElement = function (t) {
            return !(!t || 1 !== t.nodeType)
        }, k.isArray = b || function (t) {
            return "[object Array]" == u.call(t)
        }, k.isObject = function (t) {
            return t === Object(t)
        }, C(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (t) {
            k["is" + t] = function (e) {
                return u.call(e) == "[object " + t + "]"
            }
        }), k.isArguments(arguments) || (k.isArguments = function (t) {
            return !(!t || !k.has(t, "callee"))
        }), "function" != typeof / . / && (k.isFunction = function (t) {
            return "function" == typeof t
        }), k.isFinite = function (t) {
            return isFinite(t) && !isNaN(parseFloat(t))
        }, k.isNaN = function (t) {
            return k.isNumber(t) && t != +t
        }, k.isBoolean = function (t) {
            return t === !0 || t === !1 || "[object Boolean]" == u.call(t)
        }, k.isNull = function (t) {
            return null === t
        }, k.isUndefined = function (t) {
            return void 0 === t
        }, k.has = function (t, e) {
            return c.call(t, e)
        }, k.noConflict = function () {
            return t._ = e, this
        }, k.identity = function (t) {
            return t
        }, k.times = function (t, e, i) {
            for (var n = Array(Math.max(0, t)), s = 0; t > s; s++) n[s] = e.call(i, s);
            return n
        }, k.random = function (t, e) {
            return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
        };
        var A = {
            escape: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;"
            }
        };
        A.unescape = k.invert(A.escape);
        var N = {
            escape: new RegExp("[" + k.keys(A.escape).join("") + "]", "g"),
            unescape: new RegExp("(" + k.keys(A.unescape).join("|") + ")", "g")
        };
        k.each(["escape", "unescape"], function (t) {
            k[t] = function (e) {
                return null == e ? "" : ("" + e).replace(N[t], function (e) {
                    return A[t][e]
                })
            }
        }), k.result = function (t, e) {
            if (null == t) return void 0;
            var i = t[e];
            return k.isFunction(i) ? i.call(t) : i
        }, k.mixin = function (t) {
            C(k.functions(t), function (e) {
                var i = k[e] = t[e];
                k.prototype[e] = function () {
                    var t = [this._wrapped];
                    return o.apply(t, arguments), O.call(this, i.apply(k, t))
                }
            })
        };
        var V = 0;
        k.uniqueId = function (t) {
            var e = ++V + "";
            return t ? t + e : e
        }, k.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var $ = /(.)^/,
            j = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "	": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }, F = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        k.template = function (t, e, i) {
            var n;
            i = k.defaults({}, i, k.templateSettings);
            var s = new RegExp([(i.escape || $).source, (i.interpolate || $).source, (i.evaluate || $).source].join("|") + "|$", "g"),
                r = 0,
                o = "__p+='";
            t.replace(s, function (e, i, n, s, a) {
                return o += t.slice(r, a).replace(F, function (t) {
                    return "\\" + j[t]
                }), i && (o += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'"), n && (o += "'+\n((__t=(" + n + "))==null?'':__t)+\n'"), s && (o += "';\n" + s + "\n__p+='"), r = a + e.length, e
            }), o += "';\n", i.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
            try {
                n = new Function(i.variable || "obj", "_", o)
            } catch (a) {
                throw a.source = o, a
            }
            if (e) return n(e, k);
            var l = function (t) {
                return n.call(this, t, k)
            };
            return l.source = "function(" + (i.variable || "obj") + "){\n" + o + "}", l
        }, k.chain = function (t) {
            return k(t).chain()
        };
        var O = function (t) {
            return this._chain ? k(t).chain() : t
        };
        k.mixin(k), C(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
            var e = n[t];
            k.prototype[t] = function () {
                var i = this._wrapped;
                return e.apply(i, arguments), "shift" != t && "splice" != t || 0 !== i.length || delete i[0], O.call(this, i)
            }
        }), C(["concat", "join", "slice"], function (t) {
            var e = n[t];
            k.prototype[t] = function () {
                return O.call(this, e.apply(this._wrapped, arguments))
            }
        }), k.extend(k.prototype, {
            chain: function () {
                return this._chain = !0, this
            },
            value: function () {
                return this._wrapped
            }
        })
    }.call(this),
    function () {
        var t = this,
            e = t.Backbone,
            i = [];
        i.push;
        var n = i.slice;
        i.splice;
        var s;
        s = "undefined" != typeof exports ? exports : t.Backbone = {}, s.VERSION = "1.1.0";
        var r = t._;
        r || "undefined" == typeof require || (r = require("underscore")), s.$ = t.jQuery || t.Zepto || t.ender || t.$, s.noConflict = function () {
            return t.Backbone = e, this
        }, s.emulateHTTP = !1, s.emulateJSON = !1;
        var o = s.Events = {
                on: function (t, e, i) {
                    if (!l(this, "on", t, [e, i]) || !e) return this;
                    this._events || (this._events = {});
                    var n = this._events[t] || (this._events[t] = []);
                    return n.push({
                        callback: e,
                        context: i,
                        ctx: i || this
                    }), this
                },
                once: function (t, e, i) {
                    if (!l(this, "once", t, [e, i]) || !e) return this;
                    var n = this,
                        s = r.once(function () {
                            n.off(t, s), e.apply(this, arguments)
                        });
                    return s._callback = e, this.on(t, s, i)
                },
                off: function (t, e, i) {
                    var n, s, o, a, u, c, h, d;
                    if (!this._events || !l(this, "off", t, [e, i])) return this;
                    if (!t && !e && !i) return this._events = {}, this;
                    for (a = t ? [t] : r.keys(this._events), u = 0, c = a.length; c > u; u++)
                        if (t = a[u], o = this._events[t]) {
                            if (this._events[t] = n = [], e || i)
                                for (h = 0, d = o.length; d > h; h++) s = o[h], (e && e !== s.callback && e !== s.callback._callback || i && i !== s.context) && n.push(s);
                            n.length || delete this._events[t]
                        }
                    return this
                },
                trigger: function (t) {
                    if (!this._events) return this;
                    var e = n.call(arguments, 1);
                    if (!l(this, "trigger", t, e)) return this;
                    var i = this._events[t],
                        s = this._events.all;
                    return i && u(i, e), s && u(s, arguments), this
                },
                stopListening: function (t, e, i) {
                    var n = this._listeningTo;
                    if (!n) return this;
                    var s = !e && !i;
                    i || "object" != typeof e || (i = this), t && ((n = {})[t._listenId] = t);
                    for (var o in n) t = n[o], t.off(e, i, this), (s || r.isEmpty(t._events)) && delete this._listeningTo[o];
                    return this
                }
            }, a = /\s+/,
            l = function (t, e, i, n) {
                if (!i) return !0;
                if ("object" == typeof i) {
                    for (var s in i) t[e].apply(t, [s, i[s]].concat(n));
                    return !1
                }
                if (a.test(i)) {
                    for (var r = i.split(a), o = 0, l = r.length; l > o; o++) t[e].apply(t, [r[o]].concat(n));
                    return !1
                }
                return !0
            }, u = function (t, e) {
                var i, n = -1,
                    s = t.length,
                    r = e[0],
                    o = e[1],
                    a = e[2];
                switch (e.length) {
                    case 0:
                        for (; ++n < s;)(i = t[n]).callback.call(i.ctx);
                        return;
                    case 1:
                        for (; ++n < s;)(i = t[n]).callback.call(i.ctx, r);
                        return;
                    case 2:
                        for (; ++n < s;)(i = t[n]).callback.call(i.ctx, r, o);
                        return;
                    case 3:
                        for (; ++n < s;)(i = t[n]).callback.call(i.ctx, r, o, a);
                        return;
                    default:
                        for (; ++n < s;)(i = t[n]).callback.apply(i.ctx, e)
                }
            }, c = {
                listenTo: "on",
                listenToOnce: "once"
            };
        r.each(c, function (t, e) {
            o[e] = function (e, i, n) {
                var s = this._listeningTo || (this._listeningTo = {}),
                    o = e._listenId || (e._listenId = r.uniqueId("l"));
                return s[o] = e, n || "object" != typeof i || (n = this), e[t](i, n, this), this
            }
        }), o.bind = o.on, o.unbind = o.off, r.extend(s, o);
        var h = s.Model = function (t, e) {
            var i = t || {};
            e || (e = {}), this.cid = r.uniqueId("c"), this.attributes = {}, e.collection && (this.collection = e.collection), e.parse && (i = this.parse(i, e) || {}), i = r.defaults({}, i, r.result(this, "defaults")), this.set(i, e), this.changed = {}, this.initialize.apply(this, arguments)
        };
        r.extend(h.prototype, o, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            initialize: function () {},
            toJSON: function () {
                return r.clone(this.attributes)
            },
            sync: function () {
                return s.sync.apply(this, arguments)
            },
            get: function (t) {
                return this.attributes[t]
            },
            escape: function (t) {
                return r.escape(this.get(t))
            },
            has: function (t) {
                return null != this.get(t)
            },
            set: function (t, e, i) {
                var n, s, o, a, l, u, c, h;
                if (null == t) return this;
                if ("object" == typeof t ? (s = t, i = e) : (s = {})[t] = e, i || (i = {}), !this._validate(s, i)) return !1;
                o = i.unset, l = i.silent, a = [], u = this._changing, this._changing = !0, u || (this._previousAttributes = r.clone(this.attributes), this.changed = {}), h = this.attributes, c = this._previousAttributes, this.idAttribute in s && (this.id = s[this.idAttribute]);
                for (n in s) e = s[n], r.isEqual(h[n], e) || a.push(n), r.isEqual(c[n], e) ? delete this.changed[n] : this.changed[n] = e, o ? delete h[n] : h[n] = e;
                if (!l) {
                    a.length && (this._pending = !0);
                    for (var d = 0, p = a.length; p > d; d++) this.trigger("change:" + a[d], this, h[a[d]], i)
                }
                if (u) return this;
                if (!l)
                    for (; this._pending;) this._pending = !1, this.trigger("change", this, i);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function (t, e) {
                return this.set(t, void 0, r.extend({}, e, {
                    unset: !0
                }))
            },
            clear: function (t) {
                var e = {};
                for (var i in this.attributes) e[i] = void 0;
                return this.set(e, r.extend({}, t, {
                    unset: !0
                }))
            },
            hasChanged: function (t) {
                return null == t ? !r.isEmpty(this.changed) : r.has(this.changed, t)
            },
            changedAttributes: function (t) {
                if (!t) return this.hasChanged() ? r.clone(this.changed) : !1;
                var e, i = !1,
                    n = this._changing ? this._previousAttributes : this.attributes;
                for (var s in t) r.isEqual(n[s], e = t[s]) || ((i || (i = {}))[s] = e);
                return i
            },
            previous: function (t) {
                return null != t && this._previousAttributes ? this._previousAttributes[t] : null
            },
            previousAttributes: function () {
                return r.clone(this._previousAttributes)
            },
            fetch: function (t) {
                t = t ? r.clone(t) : {}, void 0 === t.parse && (t.parse = !0);
                var e = this,
                    i = t.success;
                return t.success = function (n) {
                    return e.set(e.parse(n, t), t) ? (i && i(e, n, t), e.trigger("sync", e, n, t), void 0) : !1
                }, j(this, t), this.sync("read", this, t)
            },
            save: function (t, e, i) {
                var n, s, o, a = this.attributes;
                if (null == t || "object" == typeof t ? (n = t, i = e) : (n = {})[t] = e, i = r.extend({
                    validate: !0
                }, i), n && !i.wait) {
                    if (!this.set(n, i)) return !1
                } else if (!this._validate(n, i)) return !1;
                n && i.wait && (this.attributes = r.extend({}, a, n)), void 0 === i.parse && (i.parse = !0);
                var l = this,
                    u = i.success;
                return i.success = function (t) {
                    l.attributes = a;
                    var e = l.parse(t, i);
                    return i.wait && (e = r.extend(n || {}, e)), r.isObject(e) && !l.set(e, i) ? !1 : (u && u(l, t, i), l.trigger("sync", l, t, i), void 0)
                }, j(this, i), s = this.isNew() ? "create" : i.patch ? "patch" : "update", "patch" === s && (i.attrs = n), o = this.sync(s, this, i), n && i.wait && (this.attributes = a), o
            },
            destroy: function (t) {
                t = t ? r.clone(t) : {};
                var e = this,
                    i = t.success,
                    n = function () {
                        e.trigger("destroy", e, e.collection, t)
                    };
                if (t.success = function (s) {
                    (t.wait || e.isNew()) && n(), i && i(e, s, t), e.isNew() || e.trigger("sync", e, s, t)
                }, this.isNew()) return t.success(), !1;
                j(this, t);
                var s = this.sync("delete", this, t);
                return t.wait || n(), s
            },
            url: function () {
                var t = r.result(this, "urlRoot") || r.result(this.collection, "url") || $();
                return this.isNew() ? t : t + ("/" === t.charAt(t.length - 1) ? "" : "/") + encodeURIComponent(this.id)
            },
            parse: function (t) {
                return t
            },
            clone: function () {
                return new this.constructor(this.attributes)
            },
            isNew: function () {
                return null == this.id
            },
            isValid: function (t) {
                return this._validate({}, r.extend(t || {}, {
                    validate: !0
                }))
            },
            _validate: function (t, e) {
                if (!e.validate || !this.validate) return !0;
                t = r.extend({}, this.attributes, t);
                var i = this.validationError = this.validate(t, e) || null;
                return i ? (this.trigger("invalid", this, i, r.extend(e, {
                    validationError: i
                })), !1) : !0
            }
        });
        var d = ["keys", "values", "pairs", "invert", "pick", "omit"];
        r.each(d, function (t) {
            h.prototype[t] = function () {
                var e = n.call(arguments);
                return e.unshift(this.attributes), r[t].apply(r, e)
            }
        });
        var p = s.Collection = function (t, e) {
            e || (e = {}), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator), this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, r.extend({
                silent: !0
            }, e))
        }, f = {
            add: !0,
            remove: !0,
            merge: !0
        }, m = {
            add: !0,
            remove: !1
        };
        r.extend(p.prototype, o, {
            model: h,
            initialize: function () {},
            toJSON: function (t) {
                return this.map(function (e) {
                    return e.toJSON(t)
                })
            },
            sync: function () {
                return s.sync.apply(this, arguments)
            },
            add: function (t, e) {
                return this.set(t, r.extend({
                    merge: !1
                }, e, m))
            },
            remove: function (t, e) {
                var i = !r.isArray(t);
                t = i ? [t] : r.clone(t), e || (e = {});
                var n, s, o, a;
                for (n = 0, s = t.length; s > n; n++) a = t[n] = this.get(t[n]), a && (delete this._byId[a.id], delete this._byId[a.cid], o = this.indexOf(a), this.models.splice(o, 1), this.length--, e.silent || (e.index = o, a.trigger("remove", a, this, e)), this._removeReference(a));
                return i ? t[0] : t
            },
            set: function (t, e) {
                e = r.defaults({}, e, f), e.parse && (t = this.parse(t, e));
                var i = !r.isArray(t);
                t = i ? t ? [t] : [] : r.clone(t);
                var n, s, o, a, l, u, c, d = e.at,
                    p = this.model,
                    m = this.comparator && null == d && e.sort !== !1,
                    g = r.isString(this.comparator) ? this.comparator : null,
                    v = [],
                    y = [],
                    _ = {}, b = e.add,
                    w = e.merge,
                    x = e.remove,
                    k = !m && b && x ? [] : !1;
                for (n = 0, s = t.length; s > n; n++) {
                    if (l = t[n], o = l instanceof h ? a = l : l[p.prototype.idAttribute], u = this.get(o)) x && (_[u.cid] = !0), w && (l = l === a ? a.attributes : l, e.parse && (l = u.parse(l, e)), u.set(l, e), m && !c && u.hasChanged(g) && (c = !0)), t[n] = u;
                    else if (b) {
                        if (a = t[n] = this._prepareModel(l, e), !a) continue;
                        v.push(a), a.on("all", this._onModelEvent, this), this._byId[a.cid] = a, null != a.id && (this._byId[a.id] = a)
                    }
                    k && k.push(u || a)
                }
                if (x) {
                    for (n = 0, s = this.length; s > n; ++n) _[(a = this.models[n]).cid] || y.push(a);
                    y.length && this.remove(y, e)
                }
                if (v.length || k && k.length)
                    if (m && (c = !0), this.length += v.length, null != d)
                        for (n = 0, s = v.length; s > n; n++) this.models.splice(d + n, 0, v[n]);
                    else {
                        k && (this.models.length = 0);
                        var C = k || v;
                        for (n = 0, s = C.length; s > n; n++) this.models.push(C[n])
                    }
                if (c && this.sort({
                    silent: !0
                }), !e.silent) {
                    for (n = 0, s = v.length; s > n; n++)(a = v[n]).trigger("add", a, this, e);
                    (c || k && k.length) && this.trigger("sort", this, e)
                }
                return i ? t[0] : t
            },
            reset: function (t, e) {
                e || (e = {});
                for (var i = 0, n = this.models.length; n > i; i++) this._removeReference(this.models[i]);
                return e.previousModels = this.models, this._reset(), t = this.add(t, r.extend({
                    silent: !0
                }, e)), e.silent || this.trigger("reset", this, e), t
            },
            push: function (t, e) {
                return this.add(t, r.extend({
                    at: this.length
                }, e))
            },
            pop: function (t) {
                var e = this.at(this.length - 1);
                return this.remove(e, t), e
            },
            unshift: function (t, e) {
                return this.add(t, r.extend({
                    at: 0
                }, e))
            },
            shift: function (t) {
                var e = this.at(0);
                return this.remove(e, t), e
            },
            slice: function () {
                return n.apply(this.models, arguments)
            },
            get: function (t) {
                return null == t ? void 0 : this._byId[t.id] || this._byId[t.cid] || this._byId[t]
            },
            at: function (t) {
                return this.models[t]
            },
            where: function (t, e) {
                return r.isEmpty(t) ? e ? void 0 : [] : this[e ? "find" : "filter"](function (e) {
                    for (var i in t)
                        if (t[i] !== e.get(i)) return !1;
                    return !0
                })
            },
            findWhere: function (t) {
                return this.where(t, !0)
            },
            sort: function (t) {
                if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                return t || (t = {}), r.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(r.bind(this.comparator, this)), t.silent || this.trigger("sort", this, t), this
            },
            pluck: function (t) {
                return r.invoke(this.models, "get", t)
            },
            fetch: function (t) {
                t = t ? r.clone(t) : {}, void 0 === t.parse && (t.parse = !0);
                var e = t.success,
                    i = this;
                return t.success = function (n) {
                    var s = t.reset ? "reset" : "set";
                    i[s](n, t), e && e(i, n, t), i.trigger("sync", i, n, t)
                }, j(this, t), this.sync("read", this, t)
            },
            create: function (t, e) {
                if (e = e ? r.clone(e) : {}, !(t = this._prepareModel(t, e))) return !1;
                e.wait || this.add(t, e);
                var i = this,
                    n = e.success;
                return e.success = function (t, e, s) {
                    s.wait && i.add(t, s), n && n(t, e, s)
                }, t.save(null, e), t
            },
            parse: function (t) {
                return t
            },
            clone: function () {
                return new this.constructor(this.models)
            },
            _reset: function () {
                this.length = 0, this.models = [], this._byId = {}
            },
            _prepareModel: function (t, e) {
                if (t instanceof h) return t.collection || (t.collection = this), t;
                e = e ? r.clone(e) : {}, e.collection = this;
                var i = new this.model(t, e);
                return i.validationError ? (this.trigger("invalid", this, i.validationError, e), !1) : i
            },
            _removeReference: function (t) {
                this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function (t, e, i, n) {
                ("add" !== t && "remove" !== t || i === this) && ("destroy" === t && this.remove(e, n), e && t === "change:" + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)], null != e.id && (this._byId[e.id] = e)), this.trigger.apply(this, arguments))
            }
        });
        var g = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
        r.each(g, function (t) {
            p.prototype[t] = function () {
                var e = n.call(arguments);
                return e.unshift(this.models), r[t].apply(r, e)
            }
        });
        var v = ["groupBy", "countBy", "sortBy"];
        r.each(v, function (t) {
            p.prototype[t] = function (e, i) {
                var n = r.isFunction(e) ? e : function (t) {
                    return t.get(e)
                };
                return r[t](this.models, n, i)
            }
        });
        var y = s.View = function (t) {
                this.cid = r.uniqueId("view"), t || (t = {}), r.extend(this, r.pick(t, b)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
            }, _ = /^(\S+)\s*(.*)$/,
            b = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        r.extend(y.prototype, o, {
            tagName: "div",
            $: function (t) {
                return this.$el.find(t)
            },
            initialize: function () {},
            render: function () {
                return this
            },
            remove: function () {
                return this.$el.remove(), this.stopListening(), this
            },
            setElement: function (t, e) {
                return this.$el && this.undelegateEvents(), this.$el = t instanceof s.$ ? t : s.$(t), this.el = this.$el[0], e !== !1 && this.delegateEvents(), this
            },
            delegateEvents: function (t) {
                if (!t && !(t = r.result(this, "events"))) return this;
                this.undelegateEvents();
                for (var e in t) {
                    var i = t[e];
                    if (r.isFunction(i) || (i = this[t[e]]), i) {
                        var n = e.match(_),
                            s = n[1],
                            o = n[2];
                        i = r.bind(i, this), s += ".delegateEvents" + this.cid, "" === o ? this.$el.on(s, i) : this.$el.on(s, o, i)
                    }
                }
                return this
            },
            undelegateEvents: function () {
                return this.$el.off(".delegateEvents" + this.cid), this
            },
            _ensureElement: function () {
                if (this.el) this.setElement(r.result(this, "el"), !1);
                else {
                    var t = r.extend({}, r.result(this, "attributes"));
                    this.id && (t.id = r.result(this, "id")), this.className && (t["class"] = r.result(this, "className"));
                    var e = s.$("<" + r.result(this, "tagName") + ">").attr(t);
                    this.setElement(e, !1)
                }
            }
        }), s.sync = function (t, e, i) {
            var n = x[t];
            r.defaults(i || (i = {}), {
                emulateHTTP: s.emulateHTTP,
                emulateJSON: s.emulateJSON
            });
            var o = {
                type: n,
                dataType: "json"
            };
            if (i.url || (o.url = r.result(e, "url") || $()), null != i.data || !e || "create" !== t && "update" !== t && "patch" !== t || (o.contentType = "application/json", o.data = JSON.stringify(i.attrs || e.toJSON(i))), i.emulateJSON && (o.contentType = "application/x-www-form-urlencoded", o.data = o.data ? {
                model: o.data
            } : {}), i.emulateHTTP && ("PUT" === n || "DELETE" === n || "PATCH" === n)) {
                o.type = "POST", i.emulateJSON && (o.data._method = n);
                var a = i.beforeSend;
                i.beforeSend = function (t) {
                    return t.setRequestHeader("X-HTTP-Method-Override", n), a ? a.apply(this, arguments) : void 0
                }
            }
            "GET" === o.type || i.emulateJSON || (o.processData = !1), "PATCH" === o.type && w && (o.xhr = function () {
                return new ActiveXObject("Microsoft.XMLHTTP")
            });
            var l = i.xhr = s.ajax(r.extend(o, i));
            return e.trigger("request", e, l, i), l
        };
        var w = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
            x = {
                create: "POST",
                update: "PUT",
                patch: "PATCH",
                "delete": "DELETE",
                read: "GET"
            };
        s.ajax = function () {
            return s.$.ajax.apply(s.$, arguments)
        };
        var k = s.Router = function (t) {
                t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            }, C = /\((.*?)\)/g,
            T = /(\(\?)?:\w+/g,
            S = /\*\w+/g,
            E = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        r.extend(k.prototype, o, {
            initialize: function () {},
            route: function (t, e, i) {
                r.isRegExp(t) || (t = this._routeToRegExp(t)), r.isFunction(e) && (i = e, e = ""), i || (i = this[e]);
                var n = this;
                return s.history.route(t, function (r) {
                    var o = n._extractParameters(t, r);
                    i && i.apply(n, o), n.trigger.apply(n, ["route:" + e].concat(o)), n.trigger("route", e, o), s.history.trigger("route", n, e, o)
                }), this
            },
            navigate: function (t, e) {
                return s.history.navigate(t, e), this
            },
            _bindRoutes: function () {
                if (this.routes) {
                    this.routes = r.result(this, "routes");
                    for (var t, e = r.keys(this.routes); null != (t = e.pop());) this.route(t, this.routes[t])
                }
            },
            _routeToRegExp: function (t) {
                return t = t.replace(E, "\\$&").replace(C, "(?:$1)?").replace(T, function (t, e) {
                    return e ? t : "([^/]+)"
                }).replace(S, "(.*?)"), new RegExp("^" + t + "$")
            },
            _extractParameters: function (t, e) {
                var i = t.exec(e).slice(1);
                return r.map(i, function (t) {
                    return t ? decodeURIComponent(t) : null
                })
            }
        });
        var P = s.History = function () {
                this.handlers = [], r.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
            }, D = /^[#\/]|\s+$/g,
            I = /^\/+|\/+$/g,
            M = /msie [\w.]+/,
            A = /\/$/,
            N = /[?#].*$/;
        P.started = !1, r.extend(P.prototype, o, {
            interval: 50,
            getHash: function (t) {
                var e = (t || this).location.href.match(/#(.*)$/);
                return e ? e[1] : ""
            },
            getFragment: function (t, e) {
                if (null == t)
                    if (this._hasPushState || !this._wantsHashChange || e) {
                        t = this.location.pathname;
                        var i = this.root.replace(A, "");
                        t.indexOf(i) || (t = t.slice(i.length))
                    } else t = this.getHash();
                return t.replace(D, "")
            },
            start: function (t) {
                if (P.started) throw new Error("Backbone.history has already been started");
                P.started = !0, this.options = r.extend({
                    root: "/"
                }, this.options, t), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !! this.options.pushState, this._hasPushState = !! (this.options.pushState && this.history && this.history.pushState);
                var e = this.getFragment(),
                    i = document.documentMode,
                    n = M.exec(navigator.userAgent.toLowerCase()) && (!i || 7 >= i);
                this.root = ("/" + this.root + "/").replace(I, "/"), n && this._wantsHashChange && (this.iframe = s.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(e)), this._hasPushState ? s.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !n ? s.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = e;
                var o = this.location,
                    a = o.pathname.replace(/[^\/]$/, "$&/") === this.root;
                if (this._wantsHashChange && this._wantsPushState) {
                    if (!this._hasPushState && !a) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0;
                    this._hasPushState && a && o.hash && (this.fragment = this.getHash().replace(D, ""), this.history.replaceState({}, document.title, this.root + this.fragment + o.search))
                }
                return this.options.silent ? void 0 : this.loadUrl()
            },
            stop: function () {
                s.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), P.started = !1
            },
            route: function (t, e) {
                this.handlers.unshift({
                    route: t,
                    callback: e
                })
            },
            checkUrl: function () {
                var t = this.getFragment();
                return t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))), t === this.fragment ? !1 : (this.iframe && this.navigate(t), this.loadUrl(), void 0)
            },
            loadUrl: function (t) {
                return t = this.fragment = this.getFragment(t), r.any(this.handlers, function (e) {
                    return e.route.test(t) ? (e.callback(t), !0) : void 0
                })
            },
            navigate: function (t, e) {
                if (!P.started) return !1;
                e && e !== !0 || (e = {
                    trigger: !! e
                });
                var i = this.root + (t = this.getFragment(t || ""));
                if (t = t.replace(N, ""), this.fragment !== t) {
                    if (this.fragment = t, "" === t && "/" !== i && (i = i.slice(0, -1)), this._hasPushState) this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, i);
                    else {
                        if (!this._wantsHashChange) return this.location.assign(i);
                        this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getFragment(this.getHash(this.iframe)) && (e.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, t, e.replace))
                    }
                    return e.trigger ? this.loadUrl(t) : void 0
                }
            },
            _updateHash: function (t, e, i) {
                if (i) {
                    var n = t.href.replace(/(javascript:|#).*$/, "");
                    t.replace(n + "#" + e)
                } else t.hash = "#" + e
            }
        }), s.history = new P;
        var V = function (t, e) {
            var i, n = this;
            i = t && r.has(t, "constructor") ? t.constructor : function () {
                return n.apply(this, arguments)
            }, r.extend(i, n, e);
            var s = function () {
                this.constructor = i
            };
            return s.prototype = n.prototype, i.prototype = new s, t && r.extend(i.prototype, t), i.__super__ = n.prototype, i
        };
        h.extend = p.extend = k.extend = y.extend = P.extend = V;
        var $ = function () {
            throw new Error('A "url" property or function must be specified')
        }, j = function (t, e) {
            var i = e.error;
            e.error = function (n) {
                i && i(t, n, e), t.trigger("error", t, n, e)
            }
        }
    }.call(this);
var swfobject = function () {
    function t() {
        if (!R) {
            try {
                var t = j.getElementsByTagName("body")[0].appendChild(g("span"));
                t.parentNode.removeChild(t)
            } catch (e) {
                return
            }
            R = !0;
            for (var i = H.length, n = 0; i > n; n++) H[n]()
        }
    }

    function e(t) {
        R ? t() : H[H.length] = t
    }

    function i(t) {
        if (typeof $.addEventListener != P) $.addEventListener("load", t, !1);
        else if (typeof j.addEventListener != P) j.addEventListener("load", t, !1);
        else if (typeof $.attachEvent != P) v($, "onload", t);
        else if ("function" == typeof $.onload) {
            var e = $.onload;
            $.onload = function () {
                e(), t()
            }
        } else $.onload = t
    }

    function n() {
        O ? s() : r()
    }

    function s() {
        var t = j.getElementsByTagName("body")[0],
            e = g(D);
        e.setAttribute("type", A);
        var i = t.appendChild(e);
        if (i) {
            var n = 0;
            ! function () {
                if (typeof i.GetVariable != P) {
                    var s = i.GetVariable("$version");
                    s && (s = s.split(" ")[1].split(","), U.pv = [parseInt(s[0], 10), parseInt(s[1], 10), parseInt(s[2], 10)])
                } else if (10 > n) return n++, setTimeout(arguments.callee, 10), void 0;
                t.removeChild(e), i = null, r()
            }()
        } else r()
    }

    function r() {
        var t = L.length;
        if (t > 0)
            for (var e = 0; t > e; e++) {
                var i = L[e].id,
                    n = L[e].callbackFn,
                    s = {
                        success: !1,
                        id: i
                    };
                if (U.pv[0] > 0) {
                    var r = m(i);
                    if (r)
                        if (!y(L[e].swfVersion) || U.wk && U.wk < 312)
                            if (L[e].expressInstall && a()) {
                                var c = {};
                                c.data = L[e].expressInstall, c.width = r.getAttribute("width") || "0", c.height = r.getAttribute("height") || "0", r.getAttribute("class") && (c.styleclass = r.getAttribute("class")), r.getAttribute("align") && (c.align = r.getAttribute("align"));
                                for (var h = {}, d = r.getElementsByTagName("param"), p = d.length, f = 0; p > f; f++) "movie" != d[f].getAttribute("name").toLowerCase() && (h[d[f].getAttribute("name")] = d[f].getAttribute("value"));
                                l(c, h, i, n)
                            } else u(r), n && n(s);
                        else b(i, !0), n && (s.success = !0, s.ref = o(i), n(s))
                } else if (b(i, !0), n) {
                    var g = o(i);
                    g && typeof g.SetVariable != P && (s.success = !0, s.ref = g), n(s)
                }
            }
    }

    function o(t) {
        var e = null,
            i = m(t);
        if (i && "OBJECT" == i.nodeName)
            if (typeof i.SetVariable != P) e = i;
            else {
                var n = i.getElementsByTagName(D)[0];
                n && (e = n)
            }
        return e
    }

    function a() {
        return !W && y("6.0.65") && (U.win || U.mac) && !(U.wk && U.wk < 312)
    }

    function l(t, e, i, n) {
        W = !0, C = n || null, T = {
            success: !1,
            id: i
        };
        var s = m(i);
        if (s) {
            "OBJECT" == s.nodeName ? (x = c(s), k = null) : (x = s, k = i), t.id = N, (typeof t.width == P || !/%$/.test(t.width) && parseInt(t.width, 10) < 310) && (t.width = "310"), (typeof t.height == P || !/%$/.test(t.height) && parseInt(t.height, 10) < 137) && (t.height = "137"), j.title = j.title.slice(0, 47) + " - Flash Player Installation";
            var r = U.ie && U.win ? "ActiveX" : "PlugIn",
                o = "MMredirectURL=" + $.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + r + "&MMdoctitle=" + j.title;
            if (typeof e.flashvars != P ? e.flashvars += "&" + o : e.flashvars = o, U.ie && U.win && 4 != s.readyState) {
                var a = g("div");
                i += "SWFObjectNew", a.setAttribute("id", i), s.parentNode.insertBefore(a, s), s.style.display = "none",
                    function () {
                        4 == s.readyState ? s.parentNode.removeChild(s) : setTimeout(arguments.callee, 10)
                    }()
            }
            h(t, e, i)
        }
    }

    function u(t) {
        if (U.ie && U.win && 4 != t.readyState) {
            var e = g("div");
            t.parentNode.insertBefore(e, t), e.parentNode.replaceChild(c(t), e), t.style.display = "none",
                function () {
                    4 == t.readyState ? t.parentNode.removeChild(t) : setTimeout(arguments.callee, 10)
                }()
        } else t.parentNode.replaceChild(c(t), t)
    }

    function c(t) {
        var e = g("div");
        if (U.win && U.ie) e.innerHTML = t.innerHTML;
        else {
            var i = t.getElementsByTagName(D)[0];
            if (i) {
                var n = i.childNodes;
                if (n)
                    for (var s = n.length, r = 0; s > r; r++) 1 == n[r].nodeType && "PARAM" == n[r].nodeName || 8 == n[r].nodeType || e.appendChild(n[r].cloneNode(!0))
            }
        }
        return e
    }

    function h(t, e, i) {
        var n, s = m(i);
        if (U.wk && U.wk < 312) return n;
        if (s)
            if (typeof t.id == P && (t.id = i), U.ie && U.win) {
                var r = "";
                for (var o in t) t[o] != Object.prototype[o] && ("data" == o.toLowerCase() ? e.movie = t[o] : "styleclass" == o.toLowerCase() ? r += ' class="' + t[o] + '"' : "classid" != o.toLowerCase() && (r += " " + o + '="' + t[o] + '"'));
                var a = "";
                for (var l in e) e[l] != Object.prototype[l] && (a += '<param name="' + l + '" value="' + e[l] + '" />');
                s.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + r + ">" + a + "</object>", B[B.length] = t.id, n = m(t.id)
            } else {
                var u = g(D);
                u.setAttribute("type", A);
                for (var c in t) t[c] != Object.prototype[c] && ("styleclass" == c.toLowerCase() ? u.setAttribute("class", t[c]) : "classid" != c.toLowerCase() && u.setAttribute(c, t[c]));
                for (var h in e) e[h] != Object.prototype[h] && "movie" != h.toLowerCase() && d(u, h, e[h]);
                s.parentNode.replaceChild(u, s), n = u
            }
        return n
    }

    function d(t, e, i) {
        var n = g("param");
        n.setAttribute("name", e), n.setAttribute("value", i), t.appendChild(n)
    }

    function p(t) {
        var e = m(t);
        e && "OBJECT" == e.nodeName && (U.ie && U.win ? (e.style.display = "none", function () {
            4 == e.readyState ? f(t) : setTimeout(arguments.callee, 10)
        }()) : e.parentNode.removeChild(e))
    }

    function f(t) {
        var e = m(t);
        if (e) {
            for (var i in e) "function" == typeof e[i] && (e[i] = null);
            e.parentNode.removeChild(e)
        }
    }

    function m(t) {
        var e = null;
        try {
            e = j.getElementById(t)
        } catch (i) {}
        return e
    }

    function g(t) {
        return j.createElement(t)
    }

    function v(t, e, i) {
        t.attachEvent(e, i), z[z.length] = [t, e, i]
    }

    function y(t) {
        var e = U.pv,
            i = t.split(".");
        return i[0] = parseInt(i[0], 10), i[1] = parseInt(i[1], 10) || 0, i[2] = parseInt(i[2], 10) || 0, e[0] > i[0] || e[0] == i[0] && e[1] > i[1] || e[0] == i[0] && e[1] == i[1] && e[2] >= i[2] ? !0 : !1
    }

    function _(t, e, i, n) {
        if (!U.ie || !U.mac) {
            var s = j.getElementsByTagName("head")[0];
            if (s) {
                var r = i && "string" == typeof i ? i : "screen";
                if (n && (S = null, E = null), !S || E != r) {
                    var o = g("style");
                    o.setAttribute("type", "text/css"), o.setAttribute("media", r), S = s.appendChild(o), U.ie && U.win && typeof j.styleSheets != P && j.styleSheets.length > 0 && (S = j.styleSheets[j.styleSheets.length - 1]), E = r
                }
                U.ie && U.win ? S && typeof S.addRule == D && S.addRule(t, e) : S && typeof j.createTextNode != P && S.appendChild(j.createTextNode(t + " {" + e + "}"))
            }
        }
    }

    function b(t, e) {
        if (q) {
            var i = e ? "visible" : "hidden";
            R && m(t) ? m(t).style.visibility = i : _("#" + t, "visibility:" + i)
        }
    }

    function w(t) {
        var e = /[\\\"<>\.;]/,
            i = null != e.exec(t);
        return i && typeof encodeURIComponent != P ? encodeURIComponent(t) : t
    }
    var x, k, C, T, S, E, P = "undefined",
        D = "object",
        I = "Shockwave Flash",
        M = "ShockwaveFlash.ShockwaveFlash",
        A = "application/x-shockwave-flash",
        N = "SWFObjectExprInst",
        V = "onreadystatechange",
        $ = window,
        j = document,
        F = navigator,
        O = !1,
        H = [n],
        L = [],
        B = [],
        z = [],
        R = !1,
        W = !1,
        q = !0,
        U = function () {
            var t = typeof j.getElementById != P && typeof j.getElementsByTagName != P && typeof j.createElement != P,
                e = F.userAgent.toLowerCase(),
                i = F.platform.toLowerCase(),
                n = i ? /win/.test(i) : /win/.test(e),
                s = i ? /mac/.test(i) : /mac/.test(e),
                r = /webkit/.test(e) ? parseFloat(e.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                o = !1,
                a = [0, 0, 0],
                l = null;
            if (typeof F.plugins != P && typeof F.plugins[I] == D) l = F.plugins[I].description, !l || typeof F.mimeTypes != P && F.mimeTypes[A] && !F.mimeTypes[A].enabledPlugin || (O = !0, o = !1, l = l.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), a[0] = parseInt(l.replace(/^(.*)\..*$/, "$1"), 10), a[1] = parseInt(l.replace(/^.*\.(.*)\s.*$/, "$1"), 10), a[2] = /[a-zA-Z]/.test(l) ? parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
            else if (typeof $.ActiveXObject != P) try {
                var u = new ActiveXObject(M);
                u && (l = u.GetVariable("$version"), l && (o = !0, l = l.split(" ")[1].split(","), a = [parseInt(l[0], 10), parseInt(l[1], 10), parseInt(l[2], 10)]))
            } catch (c) {}
            return {
                w3: t,
                pv: a,
                wk: r,
                ie: o,
                win: n,
                mac: s
            }
        }();
    return ! function () {
        U.w3 && ((typeof j.readyState != P && "complete" == j.readyState || typeof j.readyState == P && (j.getElementsByTagName("body")[0] || j.body)) && t(), R || (typeof j.addEventListener != P && j.addEventListener("DOMContentLoaded", t, !1), U.ie && U.win && (j.attachEvent(V, function () {
            "complete" == j.readyState && (j.detachEvent(V, arguments.callee), t())
        }), $ == top && ! function () {
            if (!R) {
                try {
                    j.documentElement.doScroll("left")
                } catch (e) {
                    return setTimeout(arguments.callee, 0), void 0
                }
                t()
            }
        }()), U.wk && ! function () {
            return R ? void 0 : /loaded|complete/.test(j.readyState) ? (t(), void 0) : (setTimeout(arguments.callee, 0), void 0)
        }(), i(t)))
    }(), ! function () {
        U.ie && U.win && window.attachEvent("onunload", function () {
            for (var t = z.length, e = 0; t > e; e++) z[e][0].detachEvent(z[e][1], z[e][2]);
            for (var i = B.length, n = 0; i > n; n++) p(B[n]);
            for (var s in U) U[s] = null;
            U = null;
            for (var r in swfobject) swfobject[r] = null;
            swfobject = null
        })
    }(), {
        registerObject: function (t, e, i, n) {
            if (U.w3 && t && e) {
                var s = {};
                s.id = t, s.swfVersion = e, s.expressInstall = i, s.callbackFn = n, L[L.length] = s, b(t, !1)
            } else n && n({
                success: !1,
                id: t
            })
        },
        getObjectById: function (t) {
            return U.w3 ? o(t) : void 0
        },
        embedSWF: function (t, i, n, s, r, o, u, c, d, p) {
            var f = {
                success: !1,
                id: i
            };
            U.w3 && !(U.wk && U.wk < 312) && t && i && n && s && r ? (b(i, !1), e(function () {
                n += "", s += "";
                var e = {};
                if (d && typeof d === D)
                    for (var m in d) e[m] = d[m];
                e.data = t, e.width = n, e.height = s;
                var g = {};
                if (c && typeof c === D)
                    for (var v in c) g[v] = c[v];
                if (u && typeof u === D)
                    for (var _ in u) typeof g.flashvars != P ? g.flashvars += "&" + _ + "=" + u[_] : g.flashvars = _ + "=" + u[_];
                if (y(r)) {
                    var w = h(e, g, i);
                    e.id == i && b(i, !0), f.success = !0, f.ref = w
                } else {
                    if (o && a()) return e.data = o, l(e, g, i, p), void 0;
                    b(i, !0)
                }
                p && p(f)
            })) : p && p(f)
        },
        switchOffAutoHideShow: function () {
            q = !1
        },
        ua: U,
        getFlashPlayerVersion: function () {
            return {
                major: U.pv[0],
                minor: U.pv[1],
                release: U.pv[2]
            }
        },
        hasFlashPlayerVersion: y,
        createSWF: function (t, e, i) {
            return U.w3 ? h(t, e, i) : void 0
        },
        showExpressInstall: function (t, e, i, n) {
            U.w3 && a() && l(t, e, i, n)
        },
        removeSWF: function (t) {
            U.w3 && p(t)
        },
        createCSS: function (t, e, i, n) {
            U.w3 && _(t, e, i, n)
        },
        addDomLoadEvent: e,
        addLoadEvent: i,
        getQueryParamValue: function (t) {
            var e = j.location.search || j.location.hash;
            if (e) {
                if (/\?/.test(e) && (e = e.split("?")[1]), null == t) return w(e);
                for (var i = e.split("&"), n = 0; n < i.length; n++)
                    if (i[n].substring(0, i[n].indexOf("=")) == t) return w(i[n].substring(i[n].indexOf("=") + 1))
            }
            return ""
        },
        expressInstallCallback: function () {
            if (W) {
                var t = m(N);
                t && x && (t.parentNode.replaceChild(x, t), k && (b(k, !0), U.ie && U.win && (x.style.display = "block")), C && C(T)), W = !1
            }
        }
    }
}();
! function () {
    function t(t) {
        console.log("$f.fireEvent", [].slice.call(t))
    }

    function e(t) {
        if (!t || "object" != typeof t) return t;
        var i = new t.constructor;
        for (var n in t) t.hasOwnProperty(n) && (i[n] = e(t[n]));
        return i
    }

    function i(t, e) {
        if (t) {
            var i, n = 0,
                s = t.length;
            if (void 0 === s) {
                for (i in t)
                    if (e.call(t[i], i, t[i]) === !1) break
            } else
                for (var r = t[0]; s > n && e.call(r, n, r) !== !1; r = t[++n]);
            return t
        }
    }

    function n(t) {
        return document.getElementById(t)
    }

    function s(t, e, n) {
        return "object" != typeof e ? t : (t && e && i(e, function (e, i) {
            n && "function" == typeof i || (t[e] = i)
        }), t)
    }

    function r(t) {
        var e = t.indexOf(".");
        if (-1 != e) {
            var n = t.slice(0, e) || "*",
                s = t.slice(e + 1, t.length),
                r = [];
            return i(document.getElementsByTagName(n), function () {
                this.className && -1 != this.className.indexOf(s) && r.push(this)
            }), r
        }
    }

    function o(t) {
        return t = t || window.event, t.preventDefault ? (t.stopPropagation(), t.preventDefault()) : (t.returnValue = !1, t.cancelBubble = !0), !1
    }

    function a(t, e, i) {
        t[e] = t[e] || [], t[e].push(i)
    }

    function l() {
        return "_" + ("" + Math.random()).slice(2, 10)
    }

    function u(r, u, c) {
        function f() {
            function t(t) {
                return !/iPad|iPhone|iPod/i.test(navigator.userAgent) || /.flv$/i.test(S[0].url) || e() ? (k.isLoaded() || k._fireEvent("onBeforeClick") === !1 || k.load(), o(t)) : !0
            }

            function e() {
                return k.hasiPadSupport && k.hasiPadSupport()
            }

            function n() {
                "" !== m.replace(/\s/g, "") ? r.addEventListener ? r.addEventListener("click", t, !1) : r.attachEvent && r.attachEvent("onclick", t) : (r.addEventListener && !e() && r.addEventListener("click", o, !1), k.load())
            }
            $f(r) ? ($f(r).getParent().innerHTML = "", _ = $f(r).getIndex(), p[_] = k) : (p.push(k), _ = p.length - 1), x = parseInt(r.style.height, 10) || r.clientHeight, v = r.id || "fp" + l(), y = u.id || v + "_api", u.id = y, m = r.innerHTML, "string" == typeof c && (c = {
                clip: {
                    url: c
                }
            }), c.playerId = v, c.clip = c.clip || {}, r.getAttribute("href", 2) && !c.clip.url && (c.clip.url = r.getAttribute("href", 2)), g = new h(c.clip, -1, k), c.playlist = c.playlist || [c.clip];
            var s = 0;
            i(c.playlist, function () {
                var t = this;
                "object" == typeof t && t.length && (t = {
                    url: "" + t
                }), i(c.clip, function (e, i) {
                    void 0 !== i && void 0 === t[e] && "function" != typeof i && (t[e] = i)
                }), c.playlist[s] = t, t = new h(t, s, k), S.push(t), s++
            }), i(c, function (t, e) {
                "function" == typeof e && (g[t] ? g[t](e) : a(P, t, e), delete c[t])
            }), i(c.plugins, function (t, e) {
                e && (E[t] = new d(t, e, k))
            }), c.plugins && void 0 !== c.plugins.controls || (E.controls = new d("controls", null, k)), E.canvas = new d("canvas", null, k), m = r.innerHTML, setTimeout(n, 0)
        }
        var m, g, v, y, _, b, w, x, k = this,
            C = null,
            T = !1,
            S = [],
            E = {}, P = {};
        if (s(k, {
            id: function () {
                return v
            },
            isLoaded: function () {
                return null !== C && void 0 !== C.fp_play && !T
            },
            getParent: function () {
                return r
            },
            hide: function (t) {
                return t && (r.style.height = "0px"), k.isLoaded() && (C.style.height = "0px"), k
            },
            show: function () {
                return r.style.height = x + "px", k.isLoaded() && (C.style.height = w + "px"), k
            },
            isHidden: function () {
                return k.isLoaded() && 0 === parseInt(C.style.height, 10)
            },
            load: function (t) {
                if (!k.isLoaded() && k._fireEvent("onBeforeLoad") !== !1) {
                    var e = function () {
                        m && !flashembed.isSupported(u.version) && (r.innerHTML = ""), t && (t.cached = !0, a(P, "onLoad", t)), flashembed(r, u, {
                            config: c
                        })
                    }, n = 0;
                    i(p, function () {
                        this.unload(function () {
                            ++n == p.length && e()
                        })
                    })
                }
                return k
            },
            unload: function (t) {
                if ("" !== m.replace(/\s/g, "")) {
                    if (k._fireEvent("onBeforeUnload") === !1) return t && t(!1), k;
                    T = !0;
                    try {
                        C && (C.fp_isFullscreen() && C.fp_toggleFullscreen(), C.fp_close(), k._fireEvent("onUnload"))
                    } catch (e) {}
                    var i = function () {
                        C = null, r.innerHTML = m, T = !1, t && t(!0)
                    };
                    /WebKit/i.test(navigator.userAgent) && !/Chrome/i.test(navigator.userAgent) ? setTimeout(i, 0) : i()
                } else t && t(!1);
                return k
            },
            getClip: function (t) {
                return void 0 === t && (t = b), S[t]
            },
            getCommonClip: function () {
                return g
            },
            getPlaylist: function () {
                return S
            },
            getPlugin: function (t) {
                var e = E[t];
                if (!e && k.isLoaded()) {
                    var i = k._api().fp_getPlugin(t);
                    i && (e = new d(t, i, k), E[t] = e)
                }
                return e
            },
            getScreen: function () {
                return k.getPlugin("screen")
            },
            getControls: function () {
                return k.getPlugin("controls")._fireEvent("onUpdate")
            },
            getLogo: function () {
                try {
                    return k.getPlugin("logo")._fireEvent("onUpdate")
                } catch (t) {}
            },
            getPlay: function () {
                return k.getPlugin("play")._fireEvent("onUpdate")
            },
            getConfig: function (t) {
                return t ? e(c) : c
            },
            getFlashParams: function () {
                return u
            },
            loadPlugin: function (t, e, i, n) {
                "function" == typeof i && (n = i, i = {});
                var s = n ? l() : "_";
                k._api().fp_loadPlugin(t, e, i, s);
                var r = {};
                r[s] = n;
                var o = new d(t, null, k, r);
                return E[t] = o, o
            },
            getState: function () {
                return k.isLoaded() ? C.fp_getState() : -1
            },
            play: function (t, e) {
                var i = function () {
                    void 0 !== t ? k._api().fp_play(t, e) : k._api().fp_play()
                };
                return k.isLoaded() ? i() : T ? setTimeout(function () {
                    k.play(t, e)
                }, 50) : k.load(function () {
                    i()
                }), k
            },
            getVersion: function () {
                var t = "flowplayer.js 3.2.11";
                if (k.isLoaded()) {
                    var e = C.fp_getVersion();
                    return e.push(t), e
                }
                return t
            },
            _api: function () {
                if (!k.isLoaded()) throw "Flowplayer " + k.id() + " not loaded when calling an API method";
                return C
            },
            setClip: function (t) {
                return i(t, function (e, i) {
                    "function" == typeof i ? (a(P, e, i), delete t[e]) : "onCuepoint" == e && $f(r).getCommonClip().onCuepoint(t[e][0], t[e][1])
                }), k.setPlaylist([t]), k
            },
            getIndex: function () {
                return _
            },
            bufferAnimate: function (t) {
                return C.fp_bufferAnimate(void 0 === t || t), k
            },
            _swfHeight: function () {
                return C.clientHeight
            }
        }), i("Click*,Load*,Unload*,Keypress*,Volume*,Mute*,Unmute*,PlaylistReplace,ClipAdd,Fullscreen*,FullscreenExit,Error,MouseOver,MouseOut".split(","), function () {
            var t = "on" + this;
            if (-1 != t.indexOf("*")) {
                t = t.slice(0, t.length - 1);
                var e = "onBefore" + t.slice(2);
                k[e] = function (t) {
                    return a(P, e, t), k
                }
            }
            k[t] = function (e) {
                return a(P, t, e), k
            }
        }), i("pause,resume,mute,unmute,stop,toggle,seek,getStatus,getVolume,setVolume,getTime,isPaused,isPlaying,startBuffering,stopBuffering,isFullscreen,toggleFullscreen,reset,close,setPlaylist,addClip,playFeed,setKeyboardShortcutsEnabled,isKeyboardShortcutsEnabled".split(","), function () {
            var t = this;
            k[t] = function (e, i) {
                if (!k.isLoaded()) return k;
                var n = null;
                return n = void 0 !== e && void 0 !== i ? C["fp_" + t](e, i) : void 0 === e ? C["fp_" + t]() : C["fp_" + t](e), "undefined" === n || void 0 === n ? k : n
            }
        }), k._fireEvent = function (e) {
            "string" == typeof e && (e = [e]);
            var s = e[0],
                r = e[1],
                o = e[2],
                a = e[3],
                l = 0;
            if (c.debug && t(e), k.isLoaded() || "onLoad" != s || "player" != r || (C = C || n(y), w = k._swfHeight(), i(S, function () {
                this._fireEvent("onLoad")
            }), i(E, function (t, e) {
                e._fireEvent("onUpdate")
            }), g._fireEvent("onLoad")), "onLoad" != s || "player" == r) {
                if ("onError" == s && ("string" == typeof r || "number" == typeof r && "number" == typeof o) && (r = o, o = a), "onContextMenu" == s) return i(c.contextMenu[r], function (t, e) {
                    e.call(k)
                }), void 0;
                if ("onPluginEvent" != s && "onBeforePluginEvent" != s) {
                    if ("onPlaylistReplace" == s) {
                        S = [];
                        var u = 0;
                        i(r, function () {
                            S.push(new h(this, u++, k))
                        })
                    }
                    if ("onClipAdd" == s) {
                        if (r.isInStream) return;
                        for (r = new h(r, o, k), S.splice(o, 0, r), l = o + 1; l < S.length; l++) S[l].index++
                    }
                    var d = !0;
                    if ("number" == typeof r && r < S.length) {
                        b = r;
                        var p = S[r];
                        p && (d = p._fireEvent(s, o, a)), p && d === !1 || (d = g._fireEvent(s, o, a, p))
                    }
                    return i(P[s], function () {
                        return d = this.call(k, r, o), this.cached && P[s].splice(l, 1), d === !1 ? !1 : (l++, void 0)
                    }), d
                }
                var f = r.name || r,
                    m = E[f];
                if (m) return m._fireEvent("onUpdate", r), m._fireEvent(o, e.slice(3))
            }
        }, "string" == typeof r) {
            var D = n(r);
            if (!D) throw "Flowplayer cannot access element: " + r;
            r = D, f()
        } else f()
    }

    function c(t) {
        this.length = t.length, this.each = function (e) {
            i(t, e)
        }, this.size = function () {
            return t.length
        };
        var e = this;
        for (name in u.prototype) e[name] = function () {
            var t = arguments;
            e.each(function () {
                this[name].apply(this, t)
            })
        }
    }
    var h = function (t, e, n) {
        var r = this,
            o = {}, u = {};
        if (r.index = e, "string" == typeof t && (t = {
            url: t
        }), s(this, t, !0), i("Begin*,Start,Pause*,Resume*,Seek*,Stop*,Finish*,LastSecond,Update,BufferFull,BufferEmpty,BufferStop".split(","), function () {
            var t = "on" + this;
            if (-1 != t.indexOf("*")) {
                t = t.slice(0, t.length - 1);
                var i = "onBefore" + t.slice(2);
                r[i] = function (t) {
                    return a(u, i, t), r
                }
            }
            r[t] = function (e) {
                return a(u, t, e), r
            }, -1 == e && (r[i] && (n[i] = r[i]), r[t] && (n[t] = r[t]))
        }), s(this, {
            onCuepoint: function (t, i) {
                if (1 == arguments.length) return o.embedded = [null, t], r;
                "number" == typeof t && (t = [t]);
                var s = l();
                return o[s] = [t, i], n.isLoaded() && n._api().fp_addCuepoints(t, e, s), r
            },
            update: function (t) {
                s(r, t), n.isLoaded() && n._api().fp_updateClip(t, e);
                var i = n.getConfig(),
                    o = -1 == e ? i.clip : i.playlist[e];
                s(o, t, !0)
            },
            _fireEvent: function (t, a, l, c) {
                if ("onLoad" == t) return i(o, function (t, i) {
                    i[0] && n._api().fp_addCuepoints(i[0], e, t)
                }), !1;
                if (c = c || r, "onCuepoint" == t) {
                    var h = o[a];
                    if (h) return h[1].call(n, c, l)
                }
                a && -1 != "onBeforeBegin,onMetaData,onStart,onUpdate,onResume".indexOf(t) && (s(c, a), a.metaData && (c.duration ? c.fullDuration = a.metaData.duration : c.duration = a.metaData.duration));
                var d = !0;
                return i(u[t], function () {
                    d = this.call(n, c, a, l)
                }), d
            }
        }), t.onCuepoint) {
            var c = t.onCuepoint;
            r.onCuepoint.apply(r, "function" == typeof c ? [c] : c), delete t.onCuepoint
        }
        i(t, function (e, i) {
            "function" == typeof i && (a(u, e, i), delete t[e])
        }), -1 == e && (n.onCuepoint = this.onCuepoint)
    }, d = function (t, e, n, r) {
        var o = this,
            a = {}, u = !1;
        r && s(a, r), i(e, function (t, i) {
            "function" == typeof i && (a[t] = i, delete e[t])
        }), s(this, {
            animate: function (i, s, r) {
                if (!i) return o;
                if ("function" == typeof s && (r = s, s = 500), "string" == typeof i) {
                    var u = i;
                    i = {}, i[u] = s, s = 500
                }
                if (r) {
                    var c = l();
                    a[c] = r
                }
                return void 0 === s && (s = 500), e = n._api().fp_animate(t, i, s, c), o
            },
            css: function (i, r) {
                if (void 0 !== r) {
                    var a = {};
                    a[i] = r, i = a
                }
                return e = n._api().fp_css(t, i), s(o, e), o
            },
            show: function () {
                return this.display = "block", n._api().fp_showPlugin(t), o
            },
            hide: function () {
                return this.display = "none", n._api().fp_hidePlugin(t), o
            },
            toggle: function () {
                return this.display = n._api().fp_togglePlugin(t), o
            },
            fadeTo: function (e, i, s) {
                if ("function" == typeof i && (s = i, i = 500), s) {
                    var r = l();
                    a[r] = s
                }
                return this.display = n._api().fp_fadeTo(t, e, i, r), this.opacity = e, o
            },
            fadeIn: function (t, e) {
                return o.fadeTo(1, t, e)
            },
            fadeOut: function (t, e) {
                return o.fadeTo(0, t, e)
            },
            getName: function () {
                return t
            },
            getPlayer: function () {
                return n
            },
            _fireEvent: function (e, r) {
                if ("onUpdate" == e) {
                    var l = n._api().fp_getPlugin(t);
                    if (!l) return;
                    s(o, l), delete o.methods, u || (i(l.methods, function () {
                        var e = "" + this;
                        o[e] = function () {
                            var i = [].slice.call(arguments),
                                s = n._api().fp_invoke(t, e, i);
                            return "undefined" === s || void 0 === s ? o : s
                        }
                    }), u = !0)
                }
                var c = a[e];
                if (c) {
                    var h = c.apply(o, r);
                    return "_" == e.slice(0, 1) && delete a[e], h
                }
                return o
            }
        })
    }, p = [];
    window.flowplayer = window.$f = function () {
        var t = null,
            o = arguments[0];
        if (!arguments.length) return i(p, function () {
            return this.isLoaded() ? (t = this, !1) : void 0
        }), t || p[0];
        if (1 == arguments.length) return "number" == typeof o ? p[o] : "*" == o ? new c(p) : (i(p, function () {
            return this.id() == o.id || this.id() == o || this.getParent() == o ? (t = this, !1) : void 0
        }), t);
        if (arguments.length > 1) {
            var a = arguments[1],
                l = 3 == arguments.length ? arguments[2] : {};
            if ("string" == typeof a && (a = {
                src: a
            }), a = s({
                bgcolor: "#000000",
                version: [10, 1],
                expressInstall: "http://releases.flowplayer.org/swf/expressinstall.swf",
                cachebusting: !1
            }, a), "string" == typeof o) {
                if (-1 != o.indexOf(".")) {
                    var h = [];
                    return i(r(o), function () {
                        h.push(new u(this, e(a), e(l)))
                    }), new c(h)
                }
                var d = n(o);
                return new u(null !== d ? d : e(o), e(a), e(l))
            }
            if (o) return new u(o, e(a), e(l))
        }
        return null
    }, s(window.$f, {
        fireEvent: function () {
            var t = [].slice.call(arguments),
                e = $f(t[0]);
            return e ? e._fireEvent(t.slice(1)) : null
        },
        addPlugin: function (t, e) {
            return u.prototype[t] = e, $f
        },
        each: i,
        extend: s
    }), "function" == typeof jQuery && (jQuery.fn.flowplayer = function (t, i) {
        if (!arguments.length || "number" == typeof arguments[0]) {
            var n = [];
            return this.each(function () {
                var t = $f(this);
                t && n.push(t)
            }), arguments.length ? n[arguments[0]] : new c(n)
        }
        return this.each(function () {
            $f(this, e(t), i ? e(i) : {})
        })
    })
}(),
    function () {
        function t(t, e) {
            if (e)
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            return t
        }

        function e(t, e) {
            var i = [];
            for (var n in t) t.hasOwnProperty(n) && (i[n] = e(t[n]));
            return i
        }

        function i(e, i, r) {
            if (l.isSupported(i.version)) e.innerHTML = l.getHTML(i, r);
            else if (i.expressInstall && l.isSupported([6, 65])) e.innerHTML = l.getHTML(t(i, {
                src: i.expressInstall
            }), {
                MMredirectURL: encodeURIComponent(location.href),
                MMplayerType: "PlugIn",
                MMdoctitle: document.title
            });
            else if (e.innerHTML.replace(/\s/g, "") || (e.innerHTML = "<h2>Flash version " + i.version + " or greater is required</h2>" + "<h3>" + (u[0] > 0 ? "Your version is " + u : "You have no flash plugin installed") + "</h3>" + ("A" == e.tagName ? "<p>Click here to download latest version</p>" : "<p>Download latest version from <a href='" + s + "'>here</a></p>"), ("A" == e.tagName || "DIV" == e.tagName) && (e.onclick = function () {
                location.href = s
            })), i.onFail) {
                var o = i.onFail.call(this);
                "string" == typeof o && (e.innerHTML = o)
            }
            n && (window[i.id] = document.getElementById(i.id)), t(this, {
                getRoot: function () {
                    return e
                },
                getOptions: function () {
                    return i
                },
                getConf: function () {
                    return r
                },
                getApi: function () {
                    return e.firstChild
                }
            })
        }
        var n = document.all,
            s = "http://get.adobe.com/flashplayer",
            r = "function" == typeof jQuery,
            o = /(\d+)[^\d]+(\d+)[^\d]*(\d*)/,
            a = {
                width: "100%",
                height: "100%",
                id: "_" + ("" + Math.random()).slice(9),
                allowfullscreen: !0,
                allowscriptaccess: "always",
                quality: "high",
                version: [3, 0],
                onFail: null,
                expressInstall: null,
                w3c: !1,
                cachebusting: !1
            };
        window.attachEvent && window.attachEvent("onbeforeunload", function () {
            __flash_unloadHandler = function () {}, __flash_savedUnloadHandler = function () {}
        }), window.flashembed = function (e, n, s) {
            return "string" == typeof e && (e = document.getElementById(e.replace("#", ""))), e ? ("string" == typeof n && (n = {
                src: n
            }), new i(e, t(t({}, a), n), s)) : void 0
        };
        var l = t(window.flashembed, {
                conf: a,
                getVersion: function () {
                    var t, e;
                    try {
                        e = navigator.plugins["Shockwave Flash"].description.slice(16)
                    } catch (i) {
                        try {
                            t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), e = t && t.GetVariable("$version")
                        } catch (n) {
                            try {
                                t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), e = t && t.GetVariable("$version")
                            } catch (s) {}
                        }
                    }
                    return e = o.exec(e), e ? [1 * e[1], 1 * 1 * e[1 * e[1] > 9 ? 2 : 3]] : [0, 0]
                },
                asString: function (t) {
                    if (null === t || void 0 === t) return null;
                    var i = typeof t;
                    switch ("object" == i && t.push && (i = "array"), i) {
                        case "string":
                            return t = t.replace(new RegExp('(["\\\\])', "g"), "\\$1"), t = t.replace(/^\s?(\d+\.?\d*)%/, "$1pct"), '"' + t + '"';
                        case "array":
                            return "[" + e(t, function (t) {
                                return l.asString(t)
                            }).join(",") + "]";
                        case "function":
                            return '"function()"';
                        case "object":
                            var n = [];
                            for (var s in t) t.hasOwnProperty(s) && n.push('"' + s + '":' + l.asString(t[s]));
                            return "{" + n.join(",") + "}"
                    }
                    return String(t).replace(/\s/g, " ").replace(/\'/g, '"')
                },
                getHTML: function (e, i) {
                    e = t({}, e);
                    var s = '<object width="' + e.width + '" height="' + e.height + '" id="' + e.id + '" name="' + e.id + '"';
                    e.cachebusting && (e.src += (-1 != e.src.indexOf("?") ? "&" : "?") + Math.random()), s += e.w3c || !n ? ' data="' + e.src + '" type="application/x-shockwave-flash"' : ' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"', s += ">", (e.w3c || n) && (s += '<param name="movie" value="' + e.src + '" />'), e.width = e.height = e.id = e.w3c = e.src = null, e.onFail = e.version = e.expressInstall = null;
                    for (var r in e) e[r] && (s += '<param name="' + r + '" value="' + e[r] + '" />');
                    var o = "";
                    if (i) {
                        for (var a in i)
                            if (i[a]) {
                                var u = i[a];
                                o += a + "=" + (/function|object/.test(typeof u) ? l.asString(u) : u) + "&"
                            }
                        o = o.slice(0, -1), s += '<param name="flashvars" value=\'' + o + "' />"
                    }
                    return s += "</object>"
                },
                isSupported: function (t) {
                    return u[0] > t[0] || u[0] == t[0] && u[1] >= t[1]
                }
            }),
            u = l.getVersion();
        r && (jQuery.tools = jQuery.tools || {
            version: "3.2.11"
        }, jQuery.tools.flashembed = {
            conf: a
        }, jQuery.fn.flashembed = function (t, e) {
            return this.each(function () {
                $(this).data("flashembed", flashembed(this, t, e))
            })
        })
    }(),
    function (window, undefined) {
        function returnTrue() {
            return !0
        }

        function returnFalse() {
            return !1
        }
        var document = window.document;
        document.createElement("video"), document.createElement("audio");
        var VideoJS = function (t, e, i) {
                var n;
                if ("string" == typeof t) {
                    if (0 === t.indexOf("#") && (t = t.slice(1)), _V_.players[t]) return _V_.players[t];
                    n = _V_.el(t)
                } else n = t; if (!n || !n.nodeName) throw new TypeError("The element or ID supplied is not valid. (VideoJS)");
                return n.player || new _V_.Player(n, e, i)
            }, _V_ = VideoJS,
            CDN_VERSION = "3.2";
        VideoJS.players = {}, VideoJS.options = {
            techOrder: ["dailymotionHtml5", "dailymotion", "youtube", "html5", "flash"],
            html5: {},
            flash: {
                swf: "http://vjs.zencdn.net/c/video-js.swf"
            },
            youtube: {},
            dailymotion: {},
            dailymotionHtml5: {},
            width: "auto",
            height: "auto",
            defaultVolume: 0,
            components: {
                posterImage: {},
                textTrackDisplay: {},
                loadingSpinner: {},
                bigPlayButton: {},
                controlBar: {}
            }
        }, "GENERATED_CDN_VSN" != CDN_VERSION && (_V_.options.flash.swf = "http://vjs.zencdn.net/" + CDN_VERSION + "/video-js.swf"), _V_.merge = function (t, e, i) {
            e || (e = {});
            for (var n in e)!e.hasOwnProperty(n) || i && t.hasOwnProperty(n) || (t[n] = e[n]);
            return t
        }, _V_.extend = function (t) {
            this.merge(this, t, !0)
        }, _V_.extend({
            tech: {},
            controlSets: {},
            isIE: function () {
                return !1
            },
            isFF: function () {
                return !!_V_.ua.match("Firefox")
            },
            isIPad: function () {
                return null !== navigator.userAgent.match(/iPad/i)
            },
            isIPhone: function () {
                return null !== navigator.userAgent.match(/iPhone/i)
            },
            isIOS: function () {
                return VideoJS.isIPhone() || VideoJS.isIPad()
            },
            iOSVersion: function () {
                var t = navigator.userAgent.match(/OS (\d+)_/i);
                return t && t[1] ? t[1] : void 0
            },
            isAndroid: function () {
                return null !== navigator.userAgent.match(/Android.*AppleWebKit/i)
            },
            androidVersion: function () {
                var t = navigator.userAgent.match(/Android (\d+)\./i);
                return t && t[1] ? t[1] : void 0
            },
            testVid: document.createElement("video"),
            ua: navigator.userAgent,
            support: {},
            each: function (t, e) {
                if (t && 0 !== t.length)
                    for (var i = 0, n = t.length; n > i; i++) e.call(this, t[i], i)
            },
            eachProp: function (t, e) {
                if (t)
                    for (var i in t) t.hasOwnProperty(i) && e.call(this, i, t[i])
            },
            el: function (t) {
                return document.getElementById(t)
            },
            createElement: function (t, e) {
                var i, n = document.createElement(t);
                for (i in e) e.hasOwnProperty(i) && (-1 !== i.indexOf("-") ? n.setAttribute(i, e[i]) : n[i] = e[i]);
                return n
            },
            insertFirst: function (t, e) {
                e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
            },
            addClass: function (t, e) {
                -1 == (" " + t.className + " ").indexOf(" " + e + " ") && (t.className = "" === t.className ? e : t.className + " " + e)
            },
            removeClass: function (t, e) {
                if (-1 != t.className.indexOf(e)) {
                    var i = t.className.split(" ");
                    i.splice(i.indexOf(e), 1), t.className = i.join(" ")
                }
            },
            remove: function (t, e) {
                if (e) {
                    var i = e.indexOf(t);
                    return -1 != i ? e.splice(i, 1) : void 0
                }
            },
            blockTextSelection: function () {
                document.body.focus(), document.onselectstart = function () {
                    return !1
                }
            },
            unblockTextSelection: function () {
                document.onselectstart = function () {
                    return !0
                }
            },
            formatTime: function (t, e) {
                e = e || t;
                var i = Math.floor(t % 60),
                    n = Math.floor(t / 60 % 60),
                    s = Math.floor(t / 3600),
                    r = Math.floor(e / 60 % 60),
                    o = Math.floor(e / 3600);
                return s = s > 0 || o > 0 ? s + ":" : "", n = ((s || r >= 10) && 10 > n ? "0" + n : n) + ":", i = 10 > i ? "0" + i : i, s + n + i
            },
            uc: function (t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            },
            getRelativePosition: function (t, e) {
                return Math.max(0, Math.min(1, (t - _V_.findPosX(e)) / e.offsetWidth))
            },
            getComputedStyleValue: function (t, e) {
                return window.getComputedStyle(t, null).getPropertyValue(e)
            },
            trim: function (t) {
                return t.toString().replace(/^\s+/, "").replace(/\s+$/, "")
            },
            round: function (t, e) {
                return e || (e = 0), Math.round(t * Math.pow(10, e)) / Math.pow(10, e)
            },
            isEmpty: function (t) {
                for (var e in t) return !1;
                return !0
            },
            createTimeRange: function (t, e) {
                return {
                    length: 1,
                    start: function () {
                        return t
                    },
                    end: function () {
                        return e
                    }
                }
            },
            cache: {},
            guid: 1,
            expando: "vdata" + (new Date).getTime(),
            getData: function (t) {
                var e = t[_V_.expando];
                return e || (e = t[_V_.expando] = _V_.guid++, _V_.cache[e] = {}), _V_.cache[e]
            },
            removeData: function (t) {
                var e = t[_V_.expando];
                if (e) {
                    delete _V_.cache[e];
                    try {
                        delete t[_V_.expando]
                    } catch (i) {
                        t.removeAttribute ? t.removeAttribute(_V_.expando) : t[_V_.expando] = null
                    }
                }
            },
            proxy: function (t, e, i) {
                e.guid || (e.guid = _V_.guid++);
                var n = function () {
                    return e.apply(t, arguments)
                };
                return n.guid = i ? i + "_" + e.guid : e.guid, n
            },
            get: function (t, e, i) {
                var n = 0 == t.indexOf("file:") || 0 == window.location.href.indexOf("file:") && -1 == t.indexOf("http:");
                "undefined" == typeof XMLHttpRequest && (XMLHttpRequest = function () {
                    try {
                        return new ActiveXObject("Msxml2.XMLHTTP.6.0")
                    } catch (t) {}
                    try {
                        return new ActiveXObject("Msxml2.XMLHTTP.3.0")
                    } catch (e) {}
                    try {
                        return new ActiveXObject("Msxml2.XMLHTTP")
                    } catch (i) {}
                    throw new Error("This browser does not support XMLHttpRequest.")
                });
                var s = new XMLHttpRequest;
                try {
                    s.open("GET", t)
                } catch (r) {
                    return _V_.log("VideoJS XMLHttpRequest (open)", r), !1
                }
                s.onreadystatechange = _V_.proxy(this, function () {
                    4 == s.readyState && (200 == s.status || n && 0 == s.status ? e(s.responseText) : i && i())
                });
                try {
                    s.send()
                } catch (r) {
                    _V_.log("VideoJS XMLHttpRequest (send)", r), i && i(r)
                }
            },
            setLocalStorage: function (t, e) {
                var i = window.localStorage || !1;
                if (i) try {
                    i[t] = e
                } catch (n) {
                    22 == n.code || 1014 == n.code ? _V_.log("LocalStorage Full (VideoJS)", n) : _V_.log("LocalStorage Error (VideoJS)", n)
                }
            },
            getAbsoluteURL: function (t) {
                return t.match(/^https?:\/\//) || (t = _V_.createElement("div", {
                    innerHTML: '<a href="' + t + '">x</a>'
                }).firstChild.href), t
            }
        }), _V_.log = function () {
            if (_V_.log.history = _V_.log.history || [], _V_.log.history.push(arguments), window.console) {
                arguments.callee = arguments.callee.caller;
                var t = [].slice.call(arguments);
                "object" == typeof console.log ? _V_.log.apply.call(console.log, console, t) : console.log.apply(console, t)
            }
        },
            function (t) {
                function e() {}
                for (var i, n = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","); i = n.pop();) t[i] = t[i] || e
            }(function () {
                    try {
                        return console.log(), window.console
                    } catch (t) {
                        return window.console = {}
                    }
                }()), _V_.findPosX = "getBoundingClientRect" in document.documentElement ? function (t) {
            var e;
            try {
                e = t.getBoundingClientRect()
            } catch (i) {}
            if (!e) return 0;
            var n = document.documentElement,
                s = document.body,
                r = n.clientLeft || s.clientLeft || 0,
                o = window.pageXOffset || s.scrollLeft,
                a = e.left + o - r;
            return a
        } : function (t) {
            for (var e = t.offsetLeft; t = obj.offsetParent;) - 1 == t.className.indexOf("video-js"), e += t.offsetLeft;
            return e
        },
            function () {
                var t = !1,
                    e = /xyz/.test(function () {}) ? /\b_super\b/ : /.*/;
                _V_.Class = function () {}, _V_.Class.extend = function (i) {
                    function n() {
                        return !t && this.init ? this.init.apply(this, arguments) : t ? void 0 : arguments.callee.prototype.init()
                    }
                    var s = this.prototype;
                    t = !0;
                    var r = new this;
                    t = !1;
                    for (var o in i) r[o] = "function" == typeof i[o] && "function" == typeof s[o] && e.test(i[o]) ? function (t, e) {
                        return function () {
                            var i = this._super;
                            this._super = s[t];
                            var n = e.apply(this, arguments);
                            return this._super = i, n
                        }
                    }(o, i[o]) : i[o];
                    return n.prototype = r, n.constructor = n, n.extend = arguments.callee, n
                }
            }(), _V_.Component = _V_.Class.extend({
            init: function (t, e) {
                this.player = t, e = this.options = _V_.merge(this.options || {}, e), this.el = e.el ? e.el : this.createElement(), this.initComponents()
            },
            destroy: function () {},
            createElement: function (t, e) {
                return _V_.createElement(t || "div", e)
            },
            buildCSSClass: function () {
                return ""
            },
            initComponents: function () {
                var t = this.options;
                t && t.components && this.eachProp(t.components, function (t, e) {
                    var i = this.proxy(function () {
                        this[t] = this.addComponent(t, e)
                    });
                    e.loadEvent ? this.one(e.loadEvent, i) : i()
                })
            },
            addComponent: function (t, e) {
                var i, n;
                return "string" == typeof t ? (e = e || {}, n = e.componentClass || _V_.uc(t), i = new _V_[n](this.player || this, e)) : i = t, this.el.appendChild(i.el), i
            },
            removeComponent: function (t) {
                this.el.removeChild(t.el)
            },
            show: function () {
                this.el.style.display = "block"
            },
            hide: function () {
                this.el.style.display = "none"
            },
            fadeIn: function () {
                this.removeClass("vjs-fade-out"), this.addClass("vjs-fade-in")
            },
            fadeOut: function () {
                this.removeClass("vjs-fade-in"), this.addClass("vjs-fade-out")
            },
            lockShowing: function () {
                var t = this.el.style;
                t.display = "block", t.opacity = 1, t.visiblity = "visible"
            },
            unlockShowing: function () {
                var t = this.el.style;
                t.display = "", t.opacity = "", t.visiblity = ""
            },
            addClass: function (t) {
                _V_.addClass(this.el, t)
            },
            removeClass: function (t) {
                _V_.removeClass(this.el, t)
            },
            addEvent: function (t, e) {
                return _V_.addEvent(this.el, t, _V_.proxy(this, e))
            },
            removeEvent: function (t, e) {
                return _V_.removeEvent(this.el, t, e)
            },
            triggerEvent: function (t, e) {
                return _V_.triggerEvent(this.el, t, e)
            },
            one: function (t, e) {
                _V_.one(this.el, t, _V_.proxy(this, e))
            },
            ready: function (t) {
                return t ? (this.isReady ? t.call(this) : (this.readyQueue === undefined && (this.readyQueue = []), this.readyQueue.push(t)), this) : this
            },
            triggerReady: function () {
                this.isReady = !0, this.readyQueue && this.readyQueue.length > 0 && (this.each(this.readyQueue, function (t) {
                    t.call(this)
                }), this.readyQueue = [], this.triggerEvent("ready"))
            },
            each: function (t, e) {
                _V_.each.call(this, t, e)
            },
            eachProp: function (t, e) {
                _V_.eachProp.call(this, t, e)
            },
            extend: function (t) {
                _V_.merge(this, t)
            },
            proxy: function (t, e) {
                return _V_.proxy(this, t, e)
            }
        }), _V_.Control = _V_.Component.extend({
            buildCSSClass: function () {
                return "vjs-control " + this._super()
            }
        }), _V_.ControlBar = _V_.Component.extend({
            options: {
                loadEvent: "play",
                components: {
                    playToggle: {},
                    fullscreenToggle: {},
                    currentTimeDisplay: {},
                    timeDivider: {},
                    durationDisplay: {},
                    remainingTimeDisplay: {},
                    progressControl: {},
                    volumeControl: {},
                    muteToggle: {}
                }
            },
            init: function (t, e) {
                this._super(t, e), this.fadeIn()
            },
            createElement: function () {
                return _V_.createElement("div", {
                    className: "vjs-controls"
                })
            },
            fadeIn: function () {
                this._super(), this.player.triggerEvent("controlsvisible")
            },
            fadeOut: function () {
                this._super(), this.player.triggerEvent("controlshidden")
            },
            lockShowing: function () {
                this.el.style.opacity = "1"
            }
        }), _V_.Button = _V_.Control.extend({
            init: function (t, e) {
                this._super(t, e), this.addEvent("click", this.onClick)
            },
            createElement: function (t, e) {
                return e = _V_.merge({
                    className: this.buildCSSClass(),
                    innerHTML: '<div><span class="vjs-control-text">' + (this.buttonText || "Need Text") + "</span></div>",
                    role: "button",
                    tabIndex: 0
                }, e), this._super(t, e)
            },
            onClick: function () {},
            onFocus: function () {
                _V_.addEvent(document, "keyup", _V_.proxy(this, this.onKeyPress))
            },
            onKeyPress: function (t) {
                (32 == t.which || 13 == t.which) && (t.preventDefault(), this.onClick())
            },
            onBlur: function () {
                _V_.removeEvent(document, "keyup", _V_.proxy(this, this.onKeyPress))
            }
        }), _V_.PlayButton = _V_.Button.extend({
            buttonText: "Play",
            buildCSSClass: function () {
                return "vjs-play-button " + this._super()
            },
            onClick: function () {
                this.player.play()
            }
        }), _V_.PauseButton = _V_.Button.extend({
            buttonText: "Pause",
            buildCSSClass: function () {
                return "vjs-pause-button " + this._super()
            },
            onClick: function () {
                this.player.pause()
            }
        }), _V_.PlayToggle = _V_.Button.extend({
            buttonText: "Play",
            init: function (t, e) {
                this._super(t, e), t.addEvent("play", _V_.proxy(this, this.onPlay)), t.addEvent("pause", _V_.proxy(this, this.onPause))
            },
            buildCSSClass: function () {
                return "vjs-play-control " + this._super()
            },
            onClick: function () {
                this.player.paused() ? this.player.play() : this.player.pause()
            },
            onPlay: function () {
                _V_.removeClass(this.el, "vjs-paused"), _V_.addClass(this.el, "vjs-playing")
            },
            onPause: function () {
                _V_.removeClass(this.el, "vjs-playing"), _V_.addClass(this.el, "vjs-paused")
            }
        }), _V_.FullscreenToggle = _V_.Button.extend({
            buttonText: "Fullscreen",
            buildCSSClass: function () {
                return "vjs-fullscreen-control " + this._super()
            },
            onClick: function () {
                this.player.isFullScreen ? this.player.cancelFullScreen() : this.player.requestFullScreen()
            }
        }), _V_.BigPlayButton = _V_.Button.extend({
            init: function (t, e) {
                this._super(t, e), t.addEvent("play", _V_.proxy(this, this.hide)), t.addEvent("ended", _V_.proxy(this, this.show))
            },
            createElement: function () {
                return this._super("div", {
                    className: "vjs-big-play-button",
                    innerHTML: "<span></span>"
                })
            },
            onClick: function () {
                this.player.play()
            }
        }), _V_.LoadingSpinner = _V_.Component.extend({
            init: function (t, e) {
                this._super(t, e), t.addEvent("canplay", _V_.proxy(this, this.hide)), t.addEvent("canplaythrough", _V_.proxy(this, this.hide)), t.addEvent("playing", _V_.proxy(this, this.hide)), t.addEvent("seeking", _V_.proxy(this, this.show)), t.addEvent("error", _V_.proxy(this, this.show)), t.addEvent("waiting", _V_.proxy(this, this.show))
            },
            createElement: function () {
                var t, e;
                return "string" == typeof this.player.el.style.WebkitBorderRadius || "string" == typeof this.player.el.style.MozBorderRadius || "string" == typeof this.player.el.style.KhtmlBorderRadius || "string" == typeof this.player.el.style.borderRadius ? (t = "vjs-loading-spinner", e = "<div class='ball1'></div><div class='ball2'></div><div class='ball3'></div><div class='ball4'></div><div class='ball5'></div><div class='ball6'></div><div class='ball7'></div><div class='ball8'></div>") : (t = "vjs-loading-spinner-fallback", e = ""), this._super("div", {
                    className: t,
                    innerHTML: e
                })
            }
        }), _V_.CurrentTimeDisplay = _V_.Component.extend({
            init: function (t, e) {
                this._super(t, e), t.addEvent("timeupdate", _V_.proxy(this, this.updateContent))
            },
            createElement: function () {
                var t = this._super("div", {
                    className: "vjs-current-time vjs-time-controls vjs-control"
                });
                return this.content = _V_.createElement("div", {
                    className: "vjs-current-time-display",
                    innerHTML: "0:00"
                }), t.appendChild(_V_.createElement("div").appendChild(this.content)), t
            },
            updateContent: function () {
                var t = this.player.scrubbing ? this.player.values.currentTime : this.player.currentTime();
                this.content.innerHTML = _V_.formatTime(t, this.player.duration())
            }
        }), _V_.DurationDisplay = _V_.Component.extend({
            init: function (t, e) {
                this._super(t, e), t.addEvent("timeupdate", _V_.proxy(this, this.updateContent))
            },
            createElement: function () {
                var t = this._super("div", {
                    className: "vjs-duration vjs-time-controls vjs-control"
                });
                return this.content = _V_.createElement("div", {
                    className: "vjs-duration-display",
                    innerHTML: "0:00"
                }), t.appendChild(_V_.createElement("div").appendChild(this.content)), t
            },
            updateContent: function () {
                this.player.duration() && (this.content.innerHTML = _V_.formatTime(this.player.duration()))
            }
        }), _V_.TimeDivider = _V_.Component.extend({
            createElement: function () {
                return this._super("div", {
                    className: "vjs-time-divider",
                    innerHTML: "<div><span>/</span></div>"
                })
            }
        }), _V_.RemainingTimeDisplay = _V_.Component.extend({
            init: function (t, e) {
                this._super(t, e), t.addEvent("timeupdate", _V_.proxy(this, this.updateContent))
            },
            createElement: function () {
                var t = this._super("div", {
                    className: "vjs-remaining-time vjs-time-controls vjs-control"
                });
                return this.content = _V_.createElement("div", {
                    className: "vjs-remaining-time-display",
                    innerHTML: "-0:00"
                }), t.appendChild(_V_.createElement("div").appendChild(this.content)), t
            },
            updateContent: function () {
                this.player.duration() && (this.content.innerHTML = "-" + _V_.formatTime(this.player.remainingTime()))
            }
        }), _V_.Slider = _V_.Component.extend({
            init: function (t, e) {
                this._super(t, e), t.addEvent(this.playerEvent, _V_.proxy(this, this.update)), this.addEvent("mousedown", this.onMouseDown), this.addEvent("focus", this.onFocus), this.addEvent("blur", this.onBlur), this.player.addEvent("controlsvisible", this.proxy(this.update)), this.update()
            },
            createElement: function (t, e) {
                return e = _V_.merge({
                    role: "slider",
                    "aria-valuenow": 0,
                    "aria-valuemin": 0,
                    "aria-valuemax": 100,
                    tabIndex: 0
                }, e), this._super(t, e)
            },
            onMouseDown: function (t) {
                t.preventDefault(), _V_.blockTextSelection(), _V_.addEvent(document, "mousemove", _V_.proxy(this, this.onMouseMove)), _V_.addEvent(document, "mouseup", _V_.proxy(this, this.onMouseUp)), this.onMouseMove(t)
            },
            onMouseUp: function () {
                _V_.unblockTextSelection(), _V_.removeEvent(document, "mousemove", this.onMouseMove, !1), _V_.removeEvent(document, "mouseup", this.onMouseUp, !1), this.update()
            },
            update: function () {
                var t, e = this.getPercent();
                if (handle = this.handle, bar = this.bar, isNaN(e) && (e = 0), t = e, handle) {
                    var i = this.el,
                        n = i.offsetWidth,
                        s = handle.el.offsetWidth,
                        r = s ? s / n : 0,
                        o = 1 - r;
                    adjustedProgress = e * o, t = adjustedProgress + r / 2, handle.el.style.left = _V_.round(100 * adjustedProgress, 2) + "%"
                }
                bar.el.style.width = _V_.round(100 * t, 2) + "%"
            },
            calculateDistance: function (t) {
                var e = this.el,
                    i = _V_.findPosX(e),
                    n = e.offsetWidth,
                    s = this.handle;
                if (s) {
                    var r = s.el.offsetWidth;
                    i += r / 2, n -= r
                }
                return Math.max(0, Math.min(1, (t.pageX - i) / n))
            },
            onFocus: function () {
                _V_.addEvent(document, "keyup", _V_.proxy(this, this.onKeyPress))
            },
            onKeyPress: function (t) {
                37 == t.which ? (t.preventDefault(), this.stepBack()) : 39 == t.which && (t.preventDefault(), this.stepForward())
            },
            onBlur: function () {
                _V_.removeEvent(document, "keyup", _V_.proxy(this, this.onKeyPress))
            }
        }), _V_.ProgressControl = _V_.Component.extend({
            options: {
                components: {
                    seekBar: {}
                }
            },
            createElement: function () {
                return this._super("div", {
                    className: "vjs-progress-control vjs-control"
                })
            }
        }), _V_.SeekBar = _V_.Slider.extend({
            options: {
                components: {
                    loadProgressBar: {},
                    bar: {
                        componentClass: "PlayProgressBar"
                    },
                    handle: {
                        componentClass: "SeekHandle"
                    }
                }
            },
            playerEvent: "timeupdate",
            init: function (t, e) {
                this._super(t, e)
            },
            createElement: function () {
                return this._super("div", {
                    className: "vjs-progress-holder"
                })
            },
            getPercent: function () {
                return this.player.currentTime() / this.player.duration()
            },
            onMouseDown: function (t) {
                this._super(t), this.player.scrubbing = !0, this.videoWasPlaying = !this.player.paused(), this.player.pause()
            },
            onMouseMove: function (t) {
                var e = this.calculateDistance(t) * this.player.duration();
                e == this.player.duration() && (e -= .1), this.player.currentTime(e)
            },
            onMouseUp: function (t) {
                this._super(t), this.player.scrubbing = !1, this.videoWasPlaying && this.player.play()
            },
            stepForward: function () {
                this.player.currentTime(this.player.currentTime() + 1)
            },
            stepBack: function () {
                this.player.currentTime(this.player.currentTime() - 1)
            }
        }), _V_.LoadProgressBar = _V_.Component.extend({
            init: function (t, e) {
                this._super(t, e), t.addEvent("progress", _V_.proxy(this, this.update))
            },
            createElement: function () {
                return this._super("div", {
                    className: "vjs-load-progress",
                    innerHTML: '<span class="vjs-control-text">Loaded: 0%</span>'
                })
            },
            update: function () {
                this.el.style && (this.el.style.width = _V_.round(100 * this.player.bufferedPercent(), 2) + "%")
            }
        }), _V_.PlayProgressBar = _V_.Component.extend({
            createElement: function () {
                return this._super("div", {
                    className: "vjs-play-progress",
                    innerHTML: '<span class="vjs-control-text">Progress: 0%</span>'
                })
            }
        }), _V_.SeekHandle = _V_.Component.extend({
            createElement: function () {
                return this._super("div", {
                    className: "vjs-seek-handle",
                    innerHTML: '<span class="vjs-control-text">00:00</span>'
                })
            }
        }), _V_.VolumeControl = _V_.Component.extend({
            options: {
                components: {
                    volumeBar: {}
                }
            },
            createElement: function () {
                return this._super("div", {
                    className: "vjs-volume-control vjs-control"
                })
            }
        }), _V_.VolumeBar = _V_.Slider.extend({
            options: {
                components: {
                    bar: {
                        componentClass: "VolumeLevel"
                    },
                    handle: {
                        componentClass: "VolumeHandle"
                    }
                }
            },
            playerEvent: "volumechange",
            createElement: function () {
                return this._super("div", {
                    className: "vjs-volume-bar"
                })
            },
            onMouseMove: function (t) {
                this.player.volume(this.calculateDistance(t))
            },
            getPercent: function () {
                return this.player.volume()
            },
            stepForward: function () {
                this.player.volume(this.player.volume() + .1)
            },
            stepBack: function () {
                this.player.volume(this.player.volume() - .1)
            }
        }), _V_.VolumeLevel = _V_.Component.extend({
            createElement: function () {
                return this._super("div", {
                    className: "vjs-volume-level",
                    innerHTML: '<span class="vjs-control-text"></span>'
                })
            }
        }), _V_.VolumeHandle = _V_.Component.extend({
            createElement: function () {
                return this._super("div", {
                    className: "vjs-volume-handle",
                    innerHTML: '<span class="vjs-control-text"></span>'
                })
            }
        }), _V_.MuteToggle = _V_.Button.extend({
            init: function (t, e) {
                this._super(t, e), t.addEvent("volumechange", _V_.proxy(this, this.update))
            },
            createElement: function () {
                return this._super("div", {
                    className: "vjs-mute-control vjs-control",
                    innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
                })
            },
            onClick: function () {
                this.player.muted(this.player.muted() ? !1 : !0)
            },
            update: function () {
                var t = this.player.volume(),
                    e = 3;
                0 == t || this.player.muted() ? e = 0 : .33 > t ? e = 1 : .67 > t && (e = 2), _V_.each.call(this, [0, 1, 2, 3], function (t) {
                    _V_.removeClass(this.el, "vjs-vol-" + t)
                }), _V_.addClass(this.el, "vjs-vol-" + e)
            }
        }), _V_.PosterImage = _V_.Button.extend({
            init: function (t, e) {
                this._super(t, e), this.player.options.poster || this.hide(), t.addEvent("play", _V_.proxy(this, this.hide))
            },
            createElement: function () {
                return _V_.createElement("img", {
                    className: "vjs-poster",
                    src: this.player.options.poster,
                    tabIndex: -1
                })
            },
            onClick: function () {
                this.player.play()
            }
        }), _V_.Menu = _V_.Component.extend({
            init: function (t, e) {
                this._super(t, e)
            },
            addItem: function (t) {
                this.addComponent(t), t.addEvent("click", this.proxy(function () {
                    this.unlockShowing()
                }))
            },
            createElement: function () {
                return this._super("ul", {
                    className: "vjs-menu"
                })
            }
        }), _V_.MenuItem = _V_.Button.extend({
            init: function (t, e) {
                this._super(t, e), e.selected && this.addClass("vjs-selected")
            },
            createElement: function (t, e) {
                return this._super("li", _V_.merge({
                    className: "vjs-menu-item",
                    innerHTML: this.options.label
                }, e))
            },
            onClick: function () {
                this.selected(!0)
            },
            selected: function (t) {
                t ? this.addClass("vjs-selected") : this.removeClass("vjs-selected")
            }
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function (t) {
            "use strict";
            if (void 0 === this || null === this) throw new TypeError;
            var e = Object(this),
                i = e.length >>> 0;
            if (0 === i) return -1;
            var n = 0;
            if (arguments.length > 0 && (n = Number(arguments[1]), n !== n ? n = 0 : 0 !== n && n !== 1 / 0 && n !== -(1 / 0) && (n = (n > 0 || -1) * Math.floor(Math.abs(n)))), n >= i) return -1;
            for (var s = n >= 0 ? n : Math.max(i - Math.abs(n), 0); i > s; s++)
                if (s in e && e[s] === t) return s;
            return -1
        }), _V_.extend({
            addEvent: function (t, e, i) {
                var n, s = _V_.getData(t);
                s && !s.handler && (s.handler = function (e) {
                    e = _V_.fixEvent(e);
                    var i = _V_.getData(t).events[e.type];
                    if (i) {
                        var n = [];
                        _V_.each(i, function (t, e) {
                            n[e] = t
                        });
                        for (var s = 0, r = n.length; r > s; s++) n[s].call(t, e)
                    }
                }), s.events || (s.events = {}), n = s.events[e], n || (n = s.events[e] = [], document.addEventListener ? t.addEventListener(e, s.handler) : document.attachEvent && t.attachEvent("on" + e, s.handler)), i.guid || (i.guid = _V_.guid++), n.push(i)
            },
            removeEvent: function (t, e, i) {
                var n, s = _V_.getData(t);
                if (s.events)
                    if (e) {
                        if (n = s.events[e]) {
                            if (i && i.guid)
                                for (var r = 0; r < n.length; r++) n[r].guid === i.guid && n.splice(r--, 1);
                            _V_.cleanUpEvents(t, e)
                        }
                    } else
                        for (e in s.events) _V_.cleanUpEvents(t, e)
            },
            cleanUpEvents: function (t, e) {
                var i = _V_.getData(t);
                0 === i.events[e].length && (delete i.events[e], document.removeEventListener ? t.removeEventListener(e, i.handler, !1) : document.detachEvent && t.detachEvent("on" + e, i.handler)), _V_.isEmpty(i.events) && (delete i.events, delete i.handler), _V_.isEmpty(i) && _V_.removeData(t)
            },
            fixEvent: function (t) {
                if (t[_V_.expando]) return t;
                var e = t;
                t = new _V_.Event(e);
                for (var i, n = _V_.Event.props.length; n;) i = _V_.Event.props[--n], t[i] = e[i];
                if (t.target || (t.target = t.srcElement || document), 3 === t.target.nodeType && (t.target = t.target.parentNode), !t.relatedTarget && t.fromElement && (t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement), null == t.pageX && null != t.clientX) {
                    var s = t.target.ownerDocument || document,
                        r = s.documentElement,
                        o = s.body;
                    t.pageX = t.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), t.pageY = t.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)
                }
                return null != t.which || null == t.charCode && null == t.keyCode || (t.which = null != t.charCode ? t.charCode : t.keyCode), !t.metaKey && t.ctrlKey && (t.metaKey = t.ctrlKey), t.which || t.button === undefined || (t.which = 1 & t.button ? 1 : 2 & t.button ? 3 : 4 & t.button ? 2 : 0), t
            },
            triggerEvent: function (t, e) {
                var i, n = _V_.getData(t),
                    s = (t.parentNode || t.ownerDocument, e.type || e);
                n && (i = n.handler), e = "object" == typeof e ? e[_V_.expando] ? e : new _V_.Event(s, e) : new _V_.Event(s), e.type = s, i && i.call(t, e), e.result = undefined, e.target = t
            },
            one: function (t, e, i) {
                _V_.addEvent(t, e, function () {
                    _V_.removeEvent(t, e, arguments.callee), i.apply(this, arguments)
                })
            }
        }), _V_.Event = function (t, e) {
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? returnTrue : returnFalse) : this.type = t, e && _V_.merge(this, e), this.timeStamp = (new Date).getTime(), this[_V_.expando] = !0
        }, _V_.Event.prototype = {
            preventDefault: function () {
                this.isDefaultPrevented = returnTrue;
                var t = this.originalEvent;
                t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function () {
                this.isPropagationStopped = returnTrue;
                var t = this.originalEvent;
                t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped = returnTrue, this.stopPropagation()
            },
            isDefaultPrevented: returnFalse,
            isPropagationStopped: returnFalse,
            isImmediatePropagationStopped: returnFalse
        }, _V_.Event.props = "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" ");
        var JSON;
        JSON || (JSON = {}),
            function () {
                var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
                "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
                    function walk(t, e) {
                        var i, n, s = t[e];
                        if (s && "object" == typeof s)
                            for (i in s) Object.prototype.hasOwnProperty.call(s, i) && (n = walk(s, i), n !== undefined ? s[i] = n : delete s[i]);
                        return reviver.call(t, e, s)
                    }
                    var j;
                    if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (t) {
                        return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                    })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                        "": j
                    }, "") : j;
                    throw new SyntaxError("JSON.parse")
                })
            }(), _V_.Player = _V_.Component.extend({
            init: function (t, e, i) {
                this.tag = t;
                var n = this.el = _V_.createElement("div"),
                    s = this.options = {}, r = s.width = t.getAttribute("width"),
                    o = s.height = t.getAttribute("height"),
                    a = r || 300,
                    l = o || 150;
                if (t.player = n.player = this, this.ready(i), t.parentNode.insertBefore(n, t), n.appendChild(t), n.id = this.id = t.id, n.className = t.className, t.id += "_html5_api", t.className = "vjs-tech", _V_.players[n.id] = this, n.setAttribute("width", a), n.setAttribute("height", l), n.style.width = a + "px", n.style.height = l + "px", t.removeAttribute("width"), t.removeAttribute("height"), _V_.merge(s, _V_.options), _V_.merge(s, this.getVideoTagSettings()), _V_.merge(s, e), t.removeAttribute("controls"), t.removeAttribute("poster"), t.hasChildNodes())
                    for (var u = 0, c = t.childNodes; u < c.length; u++)("SOURCE" == c[u].nodeName || "TRACK" == c[u].nodeName) && t.removeChild(c[u]);
                if (this.values = {}, this.addClass("vjs-paused"), this.addEvent("ended", this.onEnded), this.addEvent("play", this.onPlay), this.addEvent("pause", this.onPause), this.addEvent("progress", this.onProgress), this.addEvent("error", this.onError), s.controls && this.ready(function () {
                    this.initComponents()
                }), this.textTracks = [], s.tracks && s.tracks.length > 0 && this.addTextTracks(s.tracks), s.sources && 0 != s.sources.length) this.src(s.sources);
                else
                    for (var u = 0, c = s.techOrder; u < c.length; u++) {
                        var h = c[u],
                            d = _V_[h];
                        if (d.isSupported()) {
                            this.loadTech(h);
                            break
                        }
                    }
            },
            values: {},
            destroy: function () {
                this.stopTrackingProgress(), this.stopTrackingCurrentTime(), _V_.players[this.id] = null, delete _V_.players[this.id], this.tech.destroy(), this.el.parentNode.removeChild(this.el)
            },
            createElement: function () {},
            getVideoTagSettings: function () {
                var t = {
                    sources: [],
                    tracks: []
                };
                if (t.src = this.tag.getAttribute("src"), t.controls = null !== this.tag.getAttribute("controls"), t.poster = this.tag.getAttribute("poster"), t.preload = this.tag.getAttribute("preload"), t.autoplay = null !== this.tag.getAttribute("autoplay"), t.loop = null !== this.tag.getAttribute("loop"), t.muted = null !== this.tag.getAttribute("muted"), this.tag.hasChildNodes())
                    for (var e, i = 0, n = this.tag.childNodes; i < n.length; i++) e = n[i], "SOURCE" == e.nodeName && t.sources.push({
                        src: e.getAttribute("src"),
                        type: e.getAttribute("type"),
                        media: e.getAttribute("media"),
                        title: e.getAttribute("title")
                    }), "TRACK" == e.nodeName && t.tracks.push({
                        src: e.getAttribute("src"),
                        kind: e.getAttribute("kind"),
                        srclang: e.getAttribute("srclang"),
                        label: e.getAttribute("label"),
                        "default": null !== e.getAttribute("default"),
                        title: e.getAttribute("title")
                    });
                return t
            },
            loadTech: function (t, e) {
                this.tech ? this.unloadTech() : "html5" != t && this.tag && (this.el.removeChild(this.tag), this.tag = !1), this.techName = t, this.isReady = !1;
                var i = function () {
                    this.player.triggerReady(), this.support.progressEvent || this.player.manualProgressOn(), this.support.timeupdateEvent || this.player.manualTimeUpdatesOn()
                }, n = _V_.merge({
                    source: e,
                    parentEl: this.el
                }, this.options[t]);
                e && (e.src == this.values.src && this.values.currentTime > 0 && (n.startTime = this.values.currentTime), this.values.src = e.src), this.tech = new _V_[t](this, n), this.tech.ready(i)
            },
            unloadTech: function () {
                this.tech.destroy(), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), this.tech = !1
            },
            manualProgressOn: function () {
                this.manualProgress = !0, this.trackProgress(), this.tech.addEvent("progress", function () {
                    this.removeEvent("progress", arguments.callee), this.support.progressEvent = !0, this.player.manualProgressOff()
                })
            },
            manualProgressOff: function () {
                this.manualProgress = !1, this.stopTrackingProgress()
            },
            trackProgress: function () {
                this.progressInterval = setInterval(_V_.proxy(this, function () {
                    this.values.bufferEnd < this.buffered().end(0) ? this.triggerEvent("progress") : 1 == this.bufferedPercent() && (this.stopTrackingProgress(), this.triggerEvent("progress"))
                }), 500)
            },
            stopTrackingProgress: function () {
                clearInterval(this.progressInterval)
            },
            manualTimeUpdatesOn: function () {
                this.manualTimeUpdates = !0, this.addEvent("play", this.trackCurrentTime), this.addEvent("pause", this.stopTrackingCurrentTime), this.tech.addEvent("timeupdate", function () {
                    this.removeEvent("timeupdate", arguments.callee), this.support.timeupdateEvent = !0, this.player.manualTimeUpdatesOff()
                })
            },
            manualTimeUpdatesOff: function () {
                this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.removeEvent("play", this.trackCurrentTime), this.removeEvent("pause", this.stopTrackingCurrentTime)
            },
            trackCurrentTime: function () {
                this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = setInterval(_V_.proxy(this, function () {
                    this.triggerEvent("timeupdate")
                }), 250)
            },
            stopTrackingCurrentTime: function () {
                clearInterval(this.currentTimeInterval)
            },
            onEnded: function () {
                this.options.loop ? (this.currentTime(0), this.play()) : (this.pause(), this.currentTime(0), this.pause())
            },
            onPlay: function () {
                _V_.removeClass(this.el, "vjs-paused"), _V_.addClass(this.el, "vjs-playing")
            },
            onPause: function () {
                _V_.removeClass(this.el, "vjs-playing"), _V_.addClass(this.el, "vjs-paused")
            },
            onProgress: function () {
                1 == this.bufferedPercent() && this.triggerEvent("loadedalldata")
            },
            onError: function (t) {
                _V_.log("Video Error", t)
            },
            techCall: function (t, e) {
                if (this.tech.isReady) try {
                    this.tech[t](e)
                } catch (i) {
                    _V_.log(i)
                } else this.tech.ready(function () {
                    this[t](e)
                })
            },
            techGet: function (t) {
                if (this.tech.isReady) try {
                    return this.tech[t]()
                } catch (e) {
                    this.tech[t] === undefined ? _V_.log("Video.js: " + t + " method not defined for " + this.techName + " playback technology.", e) : "TypeError" == e.name ? (_V_.log("Video.js: " + t + " unavailable on " + this.techName + " playback technology element.", e), this.tech.isReady = !1) : _V_.log(e)
                }
            },
            play: function () {
                return this.techCall("play"), this
            },
            pause: function () {
                return this.techCall("pause"), this
            },
            paused: function () {
                return this.techGet("paused") === !1 ? !1 : !0
            },
            currentTime: function (t) {
                return t !== undefined ? (this.values.lastSetCurrentTime = t, this.techCall("setCurrentTime", t), this.manualTimeUpdates && this.triggerEvent("timeupdate"), this) : this.values.currentTime = this.techGet("currentTime") || 0
            },
            duration: function () {
                return parseFloat(this.techGet("duration"))
            },
            remainingTime: function () {
                return this.duration() - this.currentTime()
            },
            buffered: function () {
                var t = this.techGet("buffered"),
                    e = 0,
                    i = this.values.bufferEnd = this.values.bufferEnd || 0;
                return t && t.length > 0 && t.end(0) !== i && (i = t.end(0), this.values.bufferEnd = i), _V_.createTimeRange(e, i)
            },
            bufferedPercent: function () {
                return this.duration() ? this.buffered().end(0) / this.duration() : 0
            },
            volume: function (t) {
                var e;
                return t !== undefined ? (e = Math.max(0, Math.min(1, parseFloat(t))), this.values.volume = e, this.techCall("setVolume", e), _V_.setLocalStorage("volume", e), this) : (e = parseFloat(this.techGet("volume")), isNaN(e) ? 1 : e)
            },
            muted: function (t) {
                return t !== undefined ? (this.techCall("setMuted", t), this) : this.techGet("muted") || !1
            },
            width: function (t, e) {
                return t !== undefined ? (this.el.width = t, this.el.style.width = t + "px", e || this.triggerEvent("resize"), this) : parseInt(this.el.getAttribute("width"))
            },
            height: function (t) {
                return t !== undefined ? (this.el.height = t, this.el.style.height = t + "px", this.triggerEvent("resize"), this) : parseInt(this.el.getAttribute("height"))
            },
            size: function (t, e) {
                return this.width(t, !0).height(e)
            },
            supportsFullScreen: function () {
                return this.techGet("supportsFullScreen") || !1
            },
            requestFullScreen: function () {
                var t = _V_.support.requestFullScreen;
                return this.isFullScreen = !0, t ? (_V_.addEvent(document, t.eventName, this.proxy(function () {
                    this.isFullScreen = document[t.isFullScreen], 0 == this.isFullScreen && _V_.removeEvent(document, t.eventName, arguments.callee), this.triggerEvent("fullscreenchange")
                })), this.tech.support.fullscreenResize === !1 && 1 != this.options.flash.iFrameMode ? (this.pause(), this.unloadTech(), _V_.addEvent(document, t.eventName, this.proxy(function () {
                    _V_.removeEvent(document, t.eventName, arguments.callee), this.loadTech(this.techName, {
                        src: this.values.src
                    })
                })), this.el[t.requestFn]()) : this.el[t.requestFn]()) : this.tech.supportsFullScreen() ? (this.triggerEvent("fullscreenchange"), this.techCall("enterFullScreen")) : (this.triggerEvent("fullscreenchange"), this.enterFullWindow()), this
            },
            cancelFullScreen: function () {
                var t = _V_.support.requestFullScreen;
                return this.isFullScreen = !1, t ? this.tech.support.fullscreenResize === !1 && 1 != this.options.flash.iFrameMode ? (this.pause(), this.unloadTech(), _V_.addEvent(document, t.eventName, this.proxy(function () {
                    _V_.removeEvent(document, t.eventName, arguments.callee), this.loadTech(this.techName, {
                        src: this.values.src
                    })
                })), document[t.cancelFn]()) : document[t.cancelFn]() : this.tech.supportsFullScreen() ? (this.techCall("exitFullScreen"), this.triggerEvent("fullscreenchange")) : (this.exitFullWindow(), this.triggerEvent("fullscreenchange")), this
            },
            enterFullWindow: function () {
                this.isFullWindow = !0, this.docOrigOverflow = document.documentElement.style.overflow, _V_.addEvent(document, "keydown", _V_.proxy(this, this.fullWindowOnEscKey)), document.documentElement.style.overflow = "hidden", _V_.addClass(document.body, "vjs-full-window"), _V_.addClass(this.el, "vjs-fullscreen"), this.triggerEvent("enterFullWindow")
            },
            fullWindowOnEscKey: function (t) {
                27 == t.keyCode && (1 == this.isFullScreen ? this.cancelFullScreen() : this.exitFullWindow())
            },
            exitFullWindow: function () {
                this.isFullWindow = !1, _V_.removeEvent(document, "keydown", this.fullWindowOnEscKey), document.documentElement.style.overflow = this.docOrigOverflow, _V_.removeClass(document.body, "vjs-full-window"), _V_.removeClass(this.el, "vjs-fullscreen"), this.triggerEvent("exitFullWindow")
            },
            selectSource: function (t) {
                for (var e = 0, i = this.options.techOrder; e < i.length; e++) {
                    var n = i[e],
                        s = _V_[n];
                    if (s.isSupported())
                        for (var r = 0, o = t; r < o.length; r++) {
                            var a = o[r];
                            if (s.canPlaySource.call(this, a)) return {
                                source: a,
                                tech: n
                            }
                        }
                }
                return !1
            },
            src: function (t) {
                if (t instanceof Array) {
                    var t, e, i = this.selectSource(t);
                    i ? (t = i.source, e = i.tech, e == this.techName ? this.src(t) : this.loadTech(e, t)) : _V_.log("No compatible source and playback technology were found.")
                } else t instanceof Object ? _V_[this.techName].canPlaySource(t) ? this.src(t.src) : this.src([t]) : (this.values.src = t, this.isReady ? (this.techCall("src", t), "auto" == this.options.preload && this.load(), this.options.autoplay && this.play()) : this.ready(function () {
                    this.src(t)
                }));
                return this
            },
            load: function () {
                return this.techCall("load"), this
            },
            currentSrc: function () {
                return this.techGet("currentSrc") || this.values.src || ""
            },
            preload: function (t) {
                return t !== undefined ? (this.techCall("setPreload", t), this.options.preload = t, this) : this.techGet("preload")
            },
            autoplay: function (t) {
                return t !== undefined ? (this.techCall("setAutoplay", t), this.options.autoplay = t, this) : this.techGet("autoplay", t)
            },
            loop: function (t) {
                return t !== undefined ? (this.techCall("setLoop", t), this.options.loop = t, this) : this.techGet("loop")
            },
            controls: function () {
                return this.options.controls
            },
            poster: function () {
                return this.techGet("poster")
            },
            error: function () {
                return this.techGet("error")
            },
            ended: function () {
                return this.techGet("ended")
            }
        }),
            function () {
                var t, e, i, n;
                _V_.Player.prototype, document.cancelFullscreen !== undefined ? (t = "requestFullscreen", e = "exitFullscreen", i = "fullscreenchange", n = "fullScreen") : _V_.each(["moz", "webkit"], function (s) {
                    "moz" == s && !document.mozFullScreenEnabled || document[s + "CancelFullScreen"] === undefined || (t = s + "RequestFullScreen", e = s + "CancelFullScreen", i = s + "fullscreenchange", n = "webkit" == s ? s + "IsFullScreen" : s + "FullScreen")
                }), t && (_V_.support.requestFullScreen = {
                    requestFn: t,
                    cancelFn: e,
                    eventName: i,
                    isFullScreen: n
                })
            }(), _V_.PlaybackTech = _V_.Component.extend({
            init: function () {},
            onClick: function () {
                this.player.options.controls && _V_.PlayToggle.prototype.onClick.call(this)
            }
        }), _V_.apiMethods = "play,pause,paused,currentTime,setCurrentTime,duration,buffered,volume,setVolume,muted,setMuted,width,height,supportsFullScreen,enterFullScreen,src,load,currentSrc,preload,setPreload,autoplay,setAutoplay,loop,setLoop,error,networkState,readyState,seeking,initialTime,startOffsetTime,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks,defaultPlaybackRate,playbackRate,mediaGroup,controller,controls,defaultMuted".split(","), _V_.each(_V_.apiMethods, function (t) {
            _V_.PlaybackTech.prototype[t] = function () {
                throw new Error("The '" + t + "' method is not available on the playback technology's API")
            }
        }), _V_.html5 = _V_.PlaybackTech.extend({
            init: function (t, e, i) {
                this.player = t, this.el = this.createElement(), this.ready(i), this.addEvent("click", this.proxy(this.onClick));
                var n = e.source;
                n && this.el.currentSrc == n.src ? t.triggerEvent("loadstart") : n && (this.el.src = n.src), t.ready(function () {
                    this.options.autoplay && this.paused() && (this.tag.poster = null, this.play())
                }), this.setupTriggers(), this.triggerReady()
            },
            destroy: function () {
                this.player.tag = !1, this.removeTriggers(), this.el.parentNode.removeChild(this.el)
            },
            createElement: function () {
                var t, e = (_V_.html5, this.player),
                    i = e.tag;
                return i && this.support.movingElementInDOM !== !1 || (i && e.el.removeChild(i), t = _V_.createElement("video", {
                    id: i.id || e.el.id + "_html5_api",
                    className: i.className || "vjs-tech"
                }), i = t, _V_.insertFirst(i, e.el)), _V_.each(["autoplay", "preload", "loop", "muted"], function (t) {
                    null !== e.options[t] && (i[t] = e.options[t])
                }, this), i
            },
            setupTriggers: function () {
                _V_.each.call(this, _V_.html5.events, function (t) {
                    _V_.addEvent(this.el, t, _V_.proxy(this.player, this.eventHandler))
                })
            },
            removeTriggers: function () {
                _V_.each.call(this, _V_.html5.events, function (t) {
                    _V_.removeEvent(this.el, t, _V_.proxy(this.player, this.eventHandler))
                })
            },
            eventHandler: function (t) {
                t.stopPropagation(), this.triggerEvent(t)
            },
            play: function () {
                this.el.play()
            },
            pause: function () {
                this.el.pause()
            },
            paused: function () {
                return this.el.paused
            },
            currentTime: function () {
                return this.el.currentTime
            },
            setCurrentTime: function (t) {
                try {
                    this.el.currentTime = t
                } catch (e) {
                    _V_.log(e, "Video isn't ready. (VideoJS)")
                }
            },
            duration: function () {
                return this.el.duration || 0
            },
            buffered: function () {
                return this.el.buffered
            },
            volume: function () {
                return this.el.volume
            },
            setVolume: function (t) {
                this.el.volume = t
            },
            muted: function () {
                return this.el.muted
            },
            setMuted: function (t) {
                this.el.muted = t
            },
            width: function () {
                return this.el.offsetWidth
            },
            height: function () {
                return this.el.offsetHeight
            },
            supportsFullScreen: function () {
                return "function" != typeof this.el.webkitEnterFullScreen || navigator.userAgent.match("Chrome") || navigator.userAgent.match("Mac OS X 10.5") ? !1 : !0
            },
            enterFullScreen: function () {
                try {
                    this.el.webkitEnterFullScreen()
                } catch (t) {
                    11 == t.code && _V_.log("VideoJS: Video not ready.")
                }
            },
            src: function (t) {
                this.el.src = t
            },
            load: function () {
                this.el.load()
            },
            currentSrc: function () {
                return this.el.currentSrc
            },
            preload: function () {
                return this.el.preload
            },
            setPreload: function (t) {
                this.el.preload = t
            },
            autoplay: function () {
                return this.el.autoplay
            },
            setAutoplay: function (t) {
                this.el.autoplay = t
            },
            loop: function () {
                return this.el.loop
            },
            setLoop: function (t) {
                this.el.loop = t
            },
            error: function () {
                return this.el.error
            },
            seeking: function () {
                return this.el.seeking
            },
            ended: function () {
                return this.el.ended
            },
            controls: function () {
                return this.player.options.controls
            },
            defaultMuted: function () {
                return this.el.defaultMuted
            }
        }), _V_.html5.isSupported = function () {
            return !!document.createElement("video").canPlayType
        }, _V_.html5.canPlaySource = function (t) {
            return !!document.createElement("video").canPlayType(t.type)
        }, _V_.html5.events = "loadstart,suspend,abort,error,emptied,stalled,loadedmetadata,loadeddata,canplay,canplaythrough,playing,waiting,seeking,seeked,ended,durationchange,timeupdate,progress,play,pause,ratechange,volumechange".split(","), _V_.html5.prototype.support = {
            fullscreen: typeof _V_.testVid.webkitEnterFullScreen !== undefined ? _V_.ua.match("Chrome") || _V_.ua.match("Mac OS X 10.5") ? !1 : !0 : !1,
            movingElementInDOM: !_V_.isIOS()
        }, _V_.isAndroid() && _V_.androidVersion() < 3 && (document.createElement("video").constructor.prototype.canPlayType = function (t) {
            return t && -1 != t.toLowerCase().indexOf("video/mp4") ? "maybe" : ""
        }), _V_.flash = _V_.PlaybackTech.extend({
            init: function (t, e) {
                this.player = t;
                var i = e.source,
                    n = e.parentEl,
                    s = this.el = _V_.createElement("div", {
                        id: n.id + "_temp_flash"
                    }),
                    r = t.el.id + "_flash_api",
                    o = t.options,
                    a = _V_.merge({
                        readyFunction: "_V_.flash.onReady",
                        eventProxyFunction: "_V_.flash.onEvent",
                        errorEventProxyFunction: "_V_.flash.onError",
                        autoplay: o.autoplay,
                        preload: o.preload,
                        loop: o.loop,
                        muted: o.muted
                    }, e.flashVars),
                    l = _V_.merge({
                        wmode: "opaque",
                        bgcolor: "#000000"
                    }, e.params),
                    u = _V_.merge({
                        id: r,
                        name: r,
                        "class": "vjs-tech"
                    }, e.attributes);
                if (i && (a.src = encodeURIComponent(_V_.getAbsoluteURL(i.src))), _V_.insertFirst(s, n), e.startTime && this.ready(function () {
                    this.load(), this.play(), this.currentTime(e.startTime)
                }), 1 != e.iFrameMode || _V_.isFF) _V_.flash.embed(e.swf, s, a, l, u);
                else {
                    var c = _V_.createElement("iframe", {
                        id: r + "_iframe",
                        name: r + "_iframe",
                        className: "vjs-tech",
                        scrolling: "no",
                        marginWidth: 0,
                        marginHeight: 0,
                        frameBorder: 0
                    });
                    a.readyFunction = "ready", a.eventProxyFunction = "events", a.errorEventProxyFunction = "errors", _V_.addEvent(c, "load", _V_.proxy(this, function () {
                        var t, i = c.contentWindow;
                        t = c.contentDocument ? c.contentDocument : c.contentWindow.document, t.write(_V_.flash.getEmbedCode(e.swf, a, l, u)), i.player = this.player, i.ready = _V_.proxy(this.player, function (e) {
                            var i = t.getElementById(e),
                                n = this,
                                s = n.tech;
                            s.el = i, _V_.addEvent(i, "click", s.proxy(s.onClick)), _V_.flash.checkReady(s)
                        }), i.events = _V_.proxy(this.player, function (t, e) {
                            var i = this;
                            i && "flash" == i.techName && i.triggerEvent(e)
                        }), i.errors = _V_.proxy(this.player, function (t, e) {
                            _V_.log("Flash Error", e)
                        })
                    })), s.parentNode.replaceChild(c, s)
                }
            },
            destroy: function () {
                this.el.parentNode.removeChild(this.el)
            },
            play: function () {
                this.el.vjs_play()
            },
            pause: function () {
                this.el.vjs_pause()
            },
            src: function (t) {
                if (t = _V_.getAbsoluteURL(t), this.el.vjs_src(t), this.player.autoplay()) {
                    var e = this;
                    setTimeout(function () {
                        e.play()
                    }, 0)
                }
            },
            load: function () {
                this.el.vjs_load()
            },
            poster: function () {
                this.el.vjs_getProperty("poster")
            },
            buffered: function () {
                return _V_.createTimeRange(0, this.el.vjs_getProperty("buffered"))
            },
            supportsFullScreen: function () {
                return !1
            },
            enterFullScreen: function () {
                return !1
            }
        }),
            function () {
                var t = _V_.flash.prototype,
                    e = "preload,currentTime,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(","),
                    i = "error,currentSrc,networkState,readyState,seeking,initialTime,duration,startOffsetTime,paused,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks".split(",");
                "load,play,pause".split(","), createSetter = function (e) {
                    var i = e.charAt(0).toUpperCase() + e.slice(1);
                    t["set" + i] = function (t) {
                        return this.el.vjs_setProperty(e, t)
                    }
                }, createGetter = function (e) {
                    t[e] = function () {
                        return this.el.vjs_getProperty(e)
                    }
                }, _V_.each(e, function (t) {
                    createGetter(t), createSetter(t)
                }), _V_.each(i, function (t) {
                    createGetter(t)
                })
            }(), _V_.flash.isSupported = function () {
            return _V_.flash.version()[0] >= 10
        }, _V_.flash.canPlaySource = function (t) {
            return t.type in _V_.flash.prototype.support.formats ? "maybe" : void 0
        }, _V_.flash.prototype.support = {
            formats: {
                "video/flv": "FLV",
                "video/x-flv": "FLV",
                "video/mp4": "MP4",
                "video/m4v": "MP4"
            },
            progressEvent: !1,
            timeupdateEvent: !1,
            fullscreenResize: !1,
            parentResize: !_V_.ua.match("Firefox")
        }, _V_.flash.onReady = function (t) {
            var e = _V_.el(t),
                i = e.player || e.parentNode.player,
                n = i.tech;
            e.player = i, n.el = e, n.addEvent("click", n.onClick), _V_.flash.checkReady(n)
        }, _V_.flash.checkReady = function (t) {
            t.el.vjs_getProperty ? t.triggerReady() : setTimeout(function () {
                _V_.flash.checkReady(t)
            }, 50)
        }, _V_.flash.onEvent = function (t, e) {
            var i = _V_.el(t).player;
            i.triggerEvent(e)
        }, _V_.flash.onError = function (t, e) {
            var i = _V_.el(t).player;
            i.triggerEvent("error"), _V_.log("Flash Error", e, t)
        }, _V_.flash.version = function () {
            var t = "0,0,0";
            try {
                t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
            } catch (e) {
                try {
                    navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (t = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
                } catch (e) {}
            }
            return t.split(",")
        }, _V_.flash.embed = function (t, e, i, n, s) {
            var r = _V_.flash.getEmbedCode(t, i, n, s),
                o = _V_.createElement("div", {
                    innerHTML: r
                }).childNodes[0],
                a = e.parentNode;
            if (e.parentNode.replaceChild(o, e), _V_.isIE()) {
                var l = a.childNodes[0];
                setTimeout(function () {
                    l.style.display = "block"
                }, 1e3)
            }
            return o
        }, _V_.flash.getEmbedCode = function (t, e, i, n) {
            var s = '<object type="application/x-shockwave-flash"',
                r = "",
                o = "";
            return attrsString = "", e && _V_.eachProp(e, function (t, e) {
                r += t + "=" + e + "&amp;"
            }), i = _V_.merge({
                movie: t,
                flashvars: r,
                allowScriptAccess: "always",
                allowNetworking: "all"
            }, i), _V_.eachProp(i, function (t, e) {
                o += '<param name="' + t + '" value="' + e + '" />'
            }), n = _V_.merge({
                data: t,
                width: "100%",
                height: "100%"
            }, n), _V_.eachProp(n, function (t, e) {
                attrsString += t + '="' + e + '" '
            }), s + attrsString + ">" + o + "</object>"
        }, _V_.flash = _V_.PlaybackTech.extend({
            flowplayer: null,
            init: function (t, e) {
                this.player = t, e.source;
                var i = t.options,
                    n = _V_.merge({
                        key: i.key,
                        preload: i.preload,
                        loop: i.loop,
                        muted: i.muted,
                        clip: {
                            provider: i.type,
                            url: t.values.src,
                            scaling: "fit",
                            autoPlay: i.autoPlay,
                            autoBuffering: !0
                        },
                        play: {
                            opacity: 0
                        },
                        plugins: {
                            controls: null
                        },
                        onLoad: $.proxy(_V_.flash.onReady, this),
                        onBeforeFinish: $.proxy(_V_.flash.onBeforeFinish, this),
                        onStart: $.proxy(_V_.flash.onPlay, this),
                        onResume: $.proxy(_V_.flash.onPlay, this),
                        onPause: $.proxy(_V_.flash.onPause, this),
                        onError: $.proxy(_V_.flash.onError, this),
                        onSeek: $.proxy(_V_.flash.onSeek, this)
                    }, e.flashVars);
                i.rtmp_info && (n.clip.url = i.rtmp_info.url, n.plugins.rtmp = {
                    url: i.rtmpPluginSwf,
                    netConnectionUrl: i.rtmp_info.net_connection_url
                }), window.flowplayer("subber_player", {
                    src: i.swf,
                    wmode: "opaque",
                    scale: "noborder"
                }, n), this.flowplayer = window.flowplayer("subber_player")
            },
            currentTime: function () {
                return this.flowplayer.getTime()
            },
            setCurrentTime: function (t) {
                this.flowplayer.seek(t)
            },
            duration: function () {
                var t = this.flowplayer.getClip();
                return t ? t.duration : 0
            },
            volume: function () {
                return _V_.round(this.flowplayer.getVolume() / 100, 2)
            },
            buffered: function () {
                var t = this.flowplayer.getStatus();
                return _V_.createTimeRange(t.bufferStart, t.bufferEnd)
            },
            play: function () {
                this.paused() && this.flowplayer.play()
            },
            pause: function () {
                this.paused() || this.flowplayer.pause()
            },
            paused: function () {
                return !this.flowplayer.isPlaying()
            },
            setVolume: function (t) {
                this.flowplayer.setVolume(parseInt(100 * t, 10))
            },
            muted: function () {
                return 0 === this.volume()
            },
            setMuted: function (t) {
                t ? (this.values.mutedVol = this.volume(), this.volume(0)) : this.volume(this.values.mutedVol)
            },
            api: {
                supportsFullScreen: function () {
                    return !1
                },
                enterFullScreen: function () {
                    this.tels.flowplayer.api.toggleFullscreen()
                },
                readError: function () {
                    var t = (arguments[0], arguments[1]);
                    return t
                },
                src: function (t) {
                    this.setClip(t)
                },
                load: function () {}
            },
            destroy: function () {
                this.el.parentNode.removeChild(this.el)
            },
            src: function (t) {
                if (t = _V_.getAbsoluteURL(t), this.el.vjs_src(t), this.player.autoplay()) {
                    var e = this;
                    setTimeout(function () {
                        e.play()
                    }, 0)
                }
            },
            load: function () {
                this.el.vjs_load()
            },
            poster: function () {
                this.el.vjs_getProperty("poster")
            },
            supportsFullScreen: function () {
                return !1
            },
            enterFullScreen: function () {
                return !1
            },
            checkDuration: function () {
                var t = _V_.el("subber_player_api").player;
                t.duration() > 0 ? (t.triggerEvent("durationchange"), t.triggerEvent("loadedmetadata"), t.triggerEvent("canplay")) : setTimeout($.proxy(this.checkDuration, this), 250)
            }
        }), _V_.flash.isSupported = function () {
            return _V_.flash.version()[0] >= 10
        }, _V_.flash.canPlaySource = function (t) {
            return t.type in _V_.flash.prototype.support.formats ? "maybe" : void 0
        }, _V_.flash.prototype.support = {
            formats: {
                "video/flv": "FLV",
                "video/x-flv": "FLV",
                "video/mp4": "MP4",
                "video/m4v": "MP4"
            },
            progressEvent: !1,
            timeupdateEvent: !1,
            fullscreenResize: !1,
            parentResize: !_V_.ua.match("Firefox")
        }, _V_.flash.onReady = function () {
            var t = _V_.el("subber_player_api"),
                e = t.player || t.parentNode.player,
                i = e.tech;
            t.player = e, i.el = t, setTimeout($.proxy(this.checkDuration, this), 250), i.addEvent("click", i.onClick), i.triggerReady()
        }, _V_.flash.onEvent = function (t, e) {
            var i = _V_.el("subber_player_api").player;
            i.triggerEvent(e)
        }, _V_.flash.onPlay = function () {
            var t = _V_.el("subber_player_api").player;
            t.triggerEvent("play")
        }, _V_.flash.onPause = function () {
            var t = _V_.el("subber_player_api").player;
            t.triggerEvent("pause")
        }, _V_.flash.onSeek = function () {
            var t = _V_.el("subber_player_api").player;
            t.triggerEvent("seeking"), setTimeout(function () {
                t.triggerEvent("seeked")
            }, 100)
        }, _V_.flash.onBeforeFinish = function () {
            var t = _V_.el("subber_player_api").player;
            t.currentTime(0), t.pause()
        }, _V_.flash.onError = function (t, e) {
            var i = _V_.el(t).player;
            i.triggerEvent("error"), _V_.log("Flash Error", e, t)
        }, _V_.flash.version = function () {
            var t = "0,0,0";
            try {
                t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
            } catch (e) {
                try {
                    navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (t = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
                } catch (i) {}
            }
            return t.split(",")
        }, _V_.flash.embed = function (t, e, i, n, s) {
            var r = _V_.flash.getEmbedCode(t, i, n, s),
                o = _V_.createElement("div", {
                    innerHTML: r
                }).childNodes[0],
                a = e.parentNode;
            if (e.parentNode.replaceChild(o, e), _V_.isIE()) {
                var l = a.childNodes[0];
                setTimeout(function () {
                    l.style.display = "block"
                }, 1e3)
            }
            return o
        }, _V_.flash.getEmbedCode = function (t, e, i, n) {
            var s = '<object type="application/x-shockwave-flash"',
                r = "",
                o = "",
                a = "";
            return e && (r = "config=" + JSON.stringify(e).replace(/"/g, "'")), i = _V_.merge({
                movie: t,
                flashvars: r,
                allowScriptAccess: "always",
                allowNetworking: "all"
            }, i), _V_.eachProp(i, function (t, e) {
                o += '<param name="' + t + '" value="' + e + '" />'
            }), n = _V_.merge({
                data: t,
                width: "100%",
                height: "100%"
            }, n), _V_.eachProp(n, function (t, e) {
                a += t + '="' + e + '" '
            }), s + a + ">" + o + "</object>"
        }, _V_.youtube = _V_.PlaybackTech.extend({
            name: "YouTube",
            player: null,
            support: null,
            init: function (t) {
                this.player = t, this.support = {
                    format: {},
                    progressEvent: !1,
                    timeupdateEvent: !1
                };
                var e = _V_.createElement("div", {
                        id: "subber_player_temp_ytswf"
                    }),
                    i = "subber_player_youtube_api",
                    n = {
                        allowScriptAccess: "always",
                        wmode: "opaque",
                        bgcolor: "#000000",
                        controls: 2
                    }, s = {
                        id: i,
                        name: i,
                        "class": "vjs-tech"
                    };
                t.addEvent("techready", $.proxy(function () {
                    var e = t.values.src;
                    0 === e.indexOf("http") && (e = e.match(/v=([^&?]+)/)[1]), this.el.cueVideoById(e), this.el.addEventListener("onStateChange", "_V_.youtube.prototype.stateChange"), this.el.addEventListener("onError", "_V_.youtube.prototype.error")
                }, this)), document.getElementById("subber_player").appendChild(e), swfobject.embedSWF("http://www.youtube.com/apiplayer?version=3&enablejsapi=1&playerapiid=" + i, e.id, "480", "295", "9", null, null, n, s)
            },
            stateChange: function (t) {
                var e = _V_("subber_player");
                0 === t ? e.triggerEvent("ended") : 1 == t ? (e.triggerEvent("play"), e.triggerEvent("seeking"), e.triggerEvent("seeked")) : 2 == t ? e.triggerEvent("pause") : 3 == t ? e.triggerEvent("seeking") : 5 == t && e.triggerEvent("seeked")
            },
            error: function (t) {
                var e = _V_("subber_player");
                (100 == t || 101 == t) && e.triggerEvent("invalidvideo"), _V_.log("subber_player", t)
            },
            play: function () {
                1 !== this.el.getPlayerState() && this.el.playVideo()
            },
            pause: function () {
                this.el.pauseVideo()
            },
            paused: function () {
                return 1 !== this.el.getPlayerState()
            },
            currentTime: function () {
                return this.el.getCurrentTime()
            },
            setCurrentTime: function (t) {
                this.el.seekTo(t, !0)
            },
            duration: function () {
                return this.el.getDuration()
            },
            buffered: function () {
                var t = this.el.getVideoBytesLoaded() / this.el.getVideoBytesTotal(),
                    e = this.duration() * t;
                return _V_.createTimeRange(0, e)
            },
            volume: function () {
                return _V_.round(this.el.getVolume() / 100, 2)
            },
            setVolume: function (t) {
                this.el.setVolume(parseInt(100 * t, 10)), this.triggerEvent("volumechange")
            },
            muted: function () {
                return this.el.isMuted()
            },
            setMuted: function (t) {
                t ? this.el.mute() : this.el.unMute()
            },
            api: {
                supportsFullScreen: function () {
                    return !1
                },
                enterFullScreen: function () {
                    this.tels.flowplayer.api.toggleFullscreen()
                },
                src: function (t) {
                    this.tels.youtube.cueVideoById(t)
                },
                load: function () {}
            }
        }), _V_.youtube.isSupported = function () {
            return !0
        }, _V_.youtube.canPlaySource = function (t) {
            return "video/youtube" == t.type
        }, _V_.dailymotion = _V_.PlaybackTech.extend({
            name: "DailyMotion",
            player: null,
            support: null,
            init: function (t) {
                this.player = t, this.support = {
                    format: {},
                    progressEvent: !1,
                    timeupdateEvent: !1
                };
                var e = _V_.createElement("div", {
                        id: "subber_player_temp_dmswf"
                    }),
                    i = "subber_player_dailymotion_api",
                    n = {
                        allowScriptAccess: "always",
                        wmode: "opaque",
                        bgcolor: "#000000",
                        controls: 2
                    }, s = {
                        id: i,
                        name: i,
                        "class": "vjs-tech"
                    };
                t.addEvent("techready", $.proxy(function () {
                    var e = t.values.src;
                    0 === e.indexOf("http") && (e = t.values.src.match(/video\/(\w+)/)[1]), this.el.cueVideoById(e), this.el.addEventListener("onStateChange", "_V_.dailymotion.prototype.stateChange"), this.el.addEventListener("onError", "_V_.dailymotion.prototype.error")
                }, this)), document.getElementById("subber_player").appendChild(e);
                var r = "http://www.dailymotion.com/swf?chromeless=1&enableApi=1&playerapiid=" + i;
                swfobject.embedSWF(r, e.id, "480", "295", "9", null, null, n, s)
            },
            stateChange: function (t) {
                var e = _V_("subber_player");
                0 === t ? e.triggerEvent("ended") : 1 == t ? (e.triggerEvent("play"), e.triggerEvent("seeking"), e.triggerEvent("seeked")) : 2 == t && e.triggerEvent("pause")
            },
            error: function (t) {
                console.log(t);
                var e = _V_("subber_player");
                (100 == t || 101 == t) && e.triggerEvent("invalidvideo"), _V_.log("subber_player", t)
            },
            play: function () {
                1 !== this.el.getPlayerState() && this.el.playVideo()
            },
            pause: function () {
                this.el.pauseVideo()
            },
            paused: function () {
                return 1 !== this.el.getPlayerState()
            },
            currentTime: function () {
                return this.el.getCurrentTime()
            },
            setCurrentTime: function (t) {
                this.el.seekTo(t)
            },
            duration: function () {
                return this.el.getDuration()
            },
            buffered: function () {
                var t = this.el.getVideoBytesLoaded() / this.el.getVideoBytesTotal(),
                    e = this.duration() * t;
                return _V_.createTimeRange(0, e)
            },
            volume: function () {
                return _V_.round(this.el.getVolume() / 100, 2)
            },
            setVolume: function (t) {
                this.el.setVolume(parseInt(100 * t, 10)), this.triggerEvent("volumechange")
            },
            muted: function () {
                return this.el.isMuted()
            },
            setMuted: function (t) {
                t ? this.el.mute() : this.el.unMute()
            },
            api: {
                supportsFullScreen: function () {
                    return !1
                },
                enterFullScreen: function () {
                    this.tels.flowplayer.api.toggleFullscreen()
                },
                src: function (t) {
                    this.tels.youtube.cueVideoById(t)
                },
                load: function () {}
            }
        }), _V_.dailymotion.isSupported = function () {
            return !0
        }, _V_.dailymotion.canPlaySource = function (t) {
            return "video/dailymotion" == t.type
        }, _V_.dailymotionHtml5 = _V_.PlaybackTech.extend({
            name: "DailyMotionHtml5",
            player: null,
            support: null,
            init: function (t) {
                this.player = t, this.support = {
                    format: {},
                    progressEvent: !1,
                    timeupdateEvent: !1
                }, this.timeGap = 0, this.timeGapIntervalEvent = null;
                var e = document.createElement("script");
                e.async = !0, e.src = document.location.protocol + "//api.dmcdn.net/all.js";
                var i = document.getElementsByTagName("script")[0];
                i.parentNode.insertBefore(e, i);
                var n = "subber_player_dailymotion_api",
                    s = "subber_player",
                    r = document.createElement("div");
                r.id = n, r.className = "vjs-tech", document.getElementById(s).appendChild(r);
                var o = this;
                window.dmAsyncInit = function () {
                    var e = t.values.src.match(/video\/([a-zA-Z0-9]+)/)[1],
                        i = _V_.ua.match("Chrome"),
                        s = DM.player(n, {
                            video: e,
                            width: "480",
                            height: "295",
                            params: {
                                api: !0,
                                quality: "240",
                                chromeless: 1,
                                html: i
                            }
                        });
                    s.addEventListener("apiready", function () {
                        var t = _V_.el(n),
                            e = t.parentNode.player,
                            i = e.tech;
                        t.player = e, e.tels = {}, e.tels.dailymotion = t, i.el = t, i.addEvent("click", i.onClick), e.triggerEvent("techready"), i.triggerReady(), e.triggerEvent("durationchange"), e.triggerEvent("loadedmetadata"), e.triggerEvent("canplay"), e.play()
                    }), _V_.ua.match("Chrome") ? (s.addEventListener("timeupdate", function () {
                        o.timeGap = 0
                    }), s.addEventListener("playing", function () {
                        s.paused || (o.timeGapIntervalEvent = setInterval(function () {
                            o.timeGap < .25 && (o.timeGap += .042)
                        }, 42))
                    }), s.addEventListener("pause", function () {
                        clearInterval(o.timeGapIntervalEvent)
                    })) : s.addEventListener("timeupdate", function () {
                        var t = _V_.el(n),
                            e = t.parentNode.player;
                        s.seeking && (s.seeking = !1, e.triggerEvent("seeked"))
                    })
                }
            },
            play: function () {
                this.el.paused && this.el.play()
            },
            pause: function () {
                this.el.pause()
            },
            paused: function () {
                return this.el.paused
            },
            currentTime: function () {
                return this.el.currentTime + this.timeGap
            },
            setCurrentTime: function (t) {
                this.el.seek(t)
            },
            duration: function () {
                return this.el.duration
            },
            buffered: function () {
                return _V_.createTimeRange(0, this.el.bufferedTime)
            },
            volume: function () {
                return this.el.volume
            },
            setVolume: function (t) {
                this.el.setVolume(t), this.triggerEvent("volumechange")
            },
            muted: function () {
                return this.el.muted
            },
            setMuted: function (t) {
                var e = t ? 1 : 0;
                this.el.setMuted(e)
            },
            api: {
                supportsFullScreen: function () {
                    return !1
                },
                enterFullScreen: function () {},
                src: function (t) {
                    this.tels.dailymotion.cueVideoById(t)
                },
                load: function () {}
            }
        }), _V_.dailymotionHtml5.isSupported = function () {
            return !0
        }, _V_.dailymotionHtml5.canPlaySource = function (t) {
            return "video/dailymotion" == t.type
        }, _V_.merge(_V_.Player.prototype, {
            addTextTracks: function (t) {
                for (var e, i, n = this.textTracks = this.textTracks ? this.textTracks : [], s = 0, r = t.length; r > s; s++) i = _V_.uc(t[s].kind || "subtitles"), e = new _V_[i + "Track"](this, t[s]), n.push(e), e["default"] && this.ready(_V_.proxy(e, e.show));
                return this
            },
            showTextTrack: function (t, e) {
                for (var i, n, s, r = this.textTracks, o = 0, a = r.length; a > o; o++) i = r[o], i.id === t ? (i.show(), n = i) : e && i.kind == e && i.mode > 0 && i.disable();
                return s = n ? n.kind : e ? e : !1, s && this.triggerEvent(s + "trackchange"), this
            }
        }), _V_.Track = _V_.Component.extend({
            init: function (t, e) {
                this._super(t, e), _V_.merge(this, {
                    id: e.id || "vjs_" + e.kind + "_" + e.language + "_" + _V_.guid++,
                    src: e.src,
                    "default": e["default"],
                    title: e.title,
                    language: e.srclang,
                    label: e.label,
                    cues: [],
                    activeCues: [],
                    readyState: 0,
                    mode: 0
                })
            },
            createElement: function () {
                return this._super("div", {
                    className: "vjs-" + this.kind + " vjs-text-track"
                })
            },
            show: function () {
                this.activate(), this.mode = 2, this._super()
            },
            hide: function () {
                this.activate(), this.mode = 1, this._super()
            },
            disable: function () {
                2 == this.mode && this.hide(), this.deactivate(), this.mode = 0
            },
            activate: function () {
                0 == this.readyState && this.load(), 0 == this.mode && (this.player.addEvent("timeupdate", this.proxy(this.update, this.id)), this.player.addEvent("ended", this.proxy(this.reset, this.id)), ("captions" == this.kind || "subtitles" == this.kind) && this.player.textTrackDisplay.addComponent(this))
            },
            deactivate: function () {
                this.player.removeEvent("timeupdate", this.proxy(this.update, this.id)), this.player.removeEvent("ended", this.proxy(this.reset, this.id)), this.reset(), this.player.textTrackDisplay.removeComponent(this)
            },
            load: function () {
                0 == this.readyState && (this.readyState = 1, _V_.get(this.src, this.proxy(this.parseCues), this.proxy(this.onError)))
            },
            onError: function (t) {
                this.error = t, this.readyState = 3, this.triggerEvent("error")
            },
            parseCues: function (t) {
                for (var e, i, n, s, r = t.split("\n"), o = "", a = 1, l = r.length; l > a; a++)
                    if (o = _V_.trim(r[a])) {
                        for (-1 == o.indexOf("-->") ? (s = o, o = _V_.trim(r[++a])) : s = this.cues.length, e = {
                            id: s,
                            index: this.cues.length
                        }, i = o.split(" --> "), e.startTime = this.parseCueTime(i[0]), e.endTime = this.parseCueTime(i[1]), n = []; r[++a] && (o = _V_.trim(r[a]));) n.push(o);
                        e.text = n.join("<br/>"), this.cues.push(e)
                    }
                this.readyState = 2, this.triggerEvent("loaded")
            },
            parseCueTime: function (t) {
                var e, i, n, s, r, o = t.split(":"),
                    a = 0;
                return 3 == o.length ? (e = o[0], i = o[1], n = o[2]) : (e = 0, i = o[0], n = o[1]), n = n.split(/\s+/), s = n.splice(0, 1)[0], s = s.split(/\.|,/), r = parseFloat(s[1]), s = s[0], a += 3600 * parseFloat(e), a += 60 * parseFloat(i), a += parseFloat(s), r && (a += r / 1e3), a
            },
            update: function () {
                if (this.cues.length > 0) {
                    var t = this.player.currentTime();
                    if (this.prevChange === undefined || t < this.prevChange || this.nextChange <= t) {
                        var e, i, n, s, r = this.cues,
                            o = this.player.duration(),
                            a = 0,
                            l = !1,
                            u = [];
                        for (t >= this.nextChange || this.nextChange === undefined ? s = this.firstActiveIndex !== undefined ? this.firstActiveIndex : 0 : (l = !0, s = this.lastActiveIndex !== undefined ? this.lastActiveIndex : r.length - 1);;) {
                            if (n = r[s], n.endTime <= t) a = Math.max(a, n.endTime), n.active && (n.active = !1);
                            else if (t < n.startTime) {
                                if (o = Math.min(o, n.startTime), n.active && (n.active = !1), !l) break
                            } else l ? (u.splice(0, 0, n), i === undefined && (i = s), e = s) : (u.push(n), e === undefined && (e = s), i = s), o = Math.min(o, n.endTime), a = Math.max(a, n.startTime), n.active = !0; if (l) {
                                if (0 === s) break;
                                s--
                            } else {
                                if (s === r.length - 1) break;
                                s++
                            }
                        }
                        this.activeCues = u, this.nextChange = o, this.prevChange = a, this.firstActiveIndex = e, this.lastActiveIndex = i, this.updateDisplay(), this.triggerEvent("cuechange")
                    }
                }
            },
            updateDisplay: function () {
                for (var t = this.activeCues, e = "", i = 0, n = t.length; n > i; i++) e += "<span class='vjs-tt-cue'>" + t[i].text + "</span>";
                this.el.innerHTML = e
            },
            reset: function () {
                this.nextChange = 0, this.prevChange = this.player.duration(), this.firstActiveIndex = 0, this.lastActiveIndex = 0
            }
        }), _V_.CaptionsTrack = _V_.Track.extend({
            kind: "captions"
        }), _V_.SubtitlesTrack = _V_.Track.extend({
            kind: "subtitles"
        }), _V_.ChaptersTrack = _V_.Track.extend({
            kind: "chapters"
        }), _V_.TextTrackDisplay = _V_.Component.extend({
            createElement: function () {
                return this._super("div", {
                    className: "vjs-text-track-display"
                })
            }
        }), _V_.TextTrackMenuItem = _V_.MenuItem.extend({
            init: function (t, e) {
                var i = this.track = e.track;
                e.label = i.label, e.selected = i["default"], this._super(t, e), this.player.addEvent(i.kind + "trackchange", _V_.proxy(this, this.update))
            },
            onClick: function () {
                this._super(), this.player.showTextTrack(this.track.id, this.track.kind)
            },
            update: function () {
                2 == this.track.mode ? this.selected(!0) : this.selected(!1)
            }
        }), _V_.OffTextTrackMenuItem = _V_.TextTrackMenuItem.extend({
            init: function (t, e) {
                e.track = {
                    kind: e.kind,
                    player: t,
                    label: "Off"
                }, this._super(t, e)
            },
            onClick: function () {
                this._super(), this.player.showTextTrack(this.track.id, this.track.kind)
            },
            update: function () {
                for (var t, e = this.player.textTracks, i = 0, n = e.length, s = !0; n > i; i++) t = e[i], t.kind == this.track.kind && 2 == t.mode && (s = !1);
                s ? this.selected(!0) : this.selected(!1)
            }
        }), _V_.TextTrackButton = _V_.Button.extend({
            init: function (t, e) {
                this._super(t, e), this.menu = this.createMenu(), 0 === this.items.length && this.hide()
            },
            createMenu: function () {
                var t = new _V_.Menu(this.player);
                return t.el.appendChild(_V_.createElement("li", {
                    className: "vjs-menu-title",
                    innerHTML: _V_.uc(this.kind)
                })), t.addItem(new _V_.OffTextTrackMenuItem(this.player, {
                    kind: this.kind
                })), this.items = this.createItems(), this.each(this.items, function (e) {
                    t.addItem(e)
                }), this.addComponent(t), t
            },
            createItems: function () {
                var t = [];
                return this.each(this.player.textTracks, function (e) {
                    e.kind === this.kind && t.push(new _V_.TextTrackMenuItem(this.player, {
                        track: e
                    }))
                }), t
            },
            buildCSSClass: function () {
                return this.className + " vjs-menu-button " + this._super()
            },
            onFocus: function () {
                this.menu.lockShowing(), _V_.one(this.menu.el.childNodes[this.menu.el.childNodes.length - 1], "blur", this.proxy(function () {
                    this.menu.unlockShowing()
                }))
            },
            onBlur: function () {},
            onClick: function () {
                this.one("mouseout", this.proxy(function () {
                    this.menu.unlockShowing(), this.el.blur()
                }))
            }
        }), _V_.CaptionsButton = _V_.TextTrackButton.extend({
            kind: "captions",
            buttonText: "Captions",
            className: "vjs-captions-button"
        }), _V_.SubtitlesButton = _V_.TextTrackButton.extend({
            kind: "subtitles",
            buttonText: "Subtitles",
            className: "vjs-subtitles-button"
        }), _V_.ChaptersButton = _V_.TextTrackButton.extend({
            kind: "chapters",
            buttonText: "Chapters",
            className: "vjs-chapters-button",
            createItems: function () {
                var t = [];
                return this.each(this.player.textTracks, function (e) {
                    e.kind === this.kind && t.push(new _V_.TextTrackMenuItem(this.player, {
                        track: e
                    }))
                }), t
            },
            createMenu: function () {
                for (var t, e, i = this.player.textTracks, n = 0, s = i.length, r = this.items = []; s > n; n++)
                    if (t = i[n], t.kind == this.kind && t["default"]) {
                        if (t.readyState < 2) return this.chaptersTrack = t, t.addEvent("loaded", this.proxy(this.createMenu)), void 0;
                        e = t;
                        break
                    }
                var o = this.menu = new _V_.Menu(this.player);
                if (o.el.appendChild(_V_.createElement("li", {
                    className: "vjs-menu-title",
                    innerHTML: _V_.uc(this.kind)
                })), e)
                    for (var a, l, u = e.cues, n = 0, s = u.length; s > n; n++) a = u[n], l = new _V_.ChaptersTrackMenuItem(this.player, {
                        track: e,
                        cue: a
                    }), r.push(l), o.addComponent(l);
                return this.addComponent(o), this.items.length > 0 && this.show(), o
            }
        }), _V_.ChaptersTrackMenuItem = _V_.MenuItem.extend({
            init: function (t, e) {
                var i = this.track = e.track,
                    n = this.cue = e.cue,
                    s = t.currentTime();
                e.label = n.text, e.selected = n.startTime <= s && s < n.endTime, this._super(t, e), i.addEvent("cuechange", _V_.proxy(this, this.update))
            },
            onClick: function () {
                this._super(), this.player.currentTime(this.cue.startTime), this.update(this.cue.startTime)
            },
            update: function () {
                var t = this.cue,
                    e = this.player.currentTime();
                t.startTime <= e && e < t.endTime ? this.selected(!0) : this.selected(!1)
            }
        }), _V_.merge(_V_.ControlBar.prototype.options.components, {
            subtitlesButton: {},
            captionsButton: {},
            chaptersButton: {}
        }), _V_.autoSetup = function () {
            var t, e, i, n = document.getElementsByTagName("video");
            if (n && n.length > 0)
                for (var s = 0, r = n.length; r > s; s++) {
                    if (e = n[s], !e || !e.getAttribute) {
                        _V_.autoSetupTimeout(1);
                        break
                    }
                    e.player === undefined && (t = e.getAttribute("data-setup"), null !== t && (t = JSON.parse(t || "{}"), i = _V_(e, t)))
                } else _V_.windowLoaded || _V_.autoSetupTimeout(1)
        }, _V_.autoSetupTimeout = function (t) {
            setTimeout(_V_.autoSetup, t)
        }, _V_.addEvent(window, "load", function () {
            _V_.windowLoaded = !0
        }), _V_.autoSetup(), window.VideoJS = window._V_ = VideoJS
    }(window);
var Window = {};
Window.getHref = function () {
    return window.location.href
}, Window.setHref = function (t) {
    window.location.href = t
}, Window.getUrlVar = function (t) {
    var e = {};
    return window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (t, i, n) {
        e[i] = n
    }), e[t]
}, Window.reload = function () {
    window.location.reload()
}, Window.scrollTop = function (t) {
    return void 0 === t ? $(window).scrollTop() : $(window).scrollTop(t)
},
    function () {
        window.UrlParser = function () {
            function t(t) {
                this._params = {}, this.initBaseUrl(t), this.initParams(t)
            }
            return t.prototype.getParams = function () {
                return this._params
            }, t.prototype.setParams = function (t, e) {
                return this._params[t] = e
            }, t.prototype.getBaseUrl = function () {
                return this._baseUrl
            }, t.prototype.getUrl = function () {
                var t, e, i, n;
                e = [], n = this._params;
                for (t in n) i = n[t], e.push("" + t + "=" + i);
                return e.length > 0 ? "" + this._baseUrl + "?" + e.join("&") : this._baseUrl
            }, t.prototype.initBaseUrl = function (t) {
                var e;
                return e = t.match(/([^=&]*)\?/), this._baseUrl = null != e ? e[1] : "#" === t[t.length - 1] || "?" === t[t.length - 1] ? t.slice(0, t.length - 1) : t
            }, t.prototype.initParams = function (t) {
                var e, i, n, s, r, o, a;
                if (i = t.match(/\/?\?([^#]*)?$/), null != i && i[1]) {
                    for (s = i[1].split("&"), a = [], r = 0, o = s.length; o > r; r++) n = s[r], e = n.split("="), a.push(this._params[e[0]] = e[1]);
                    return a
                }
            }, t
        }()
    }.call(this), window.viki = window.viki || {}, viki.languages = {
    ab: {
        direction: "ltr",
        native_name: "Abkhazian",
        name: {
            en: "Abkhazian",
            es: "Abjasio"
        }
    },
    aa: {
        direction: "ltr",
        native_name: "Afar",
        name: {
            en: "Afar",
            es: "Afar"
        }
    },
    af: {
        direction: "ltr",
        native_name: "Afrikaans",
        name: {
            en: "Afrikaans",
            es: "Afrikaans"
        }
    },
    ak: {
        direction: "ltr",
        native_name: "Akana",
        name: {
            en: "Akan",
            es: "Akan"
        }
    },
    sq: {
        direction: "ltr",
        native_name: "Shqip",
        name: {
            en: "Albanian",
            es: "Alban챕s"
        }
    },
    al: {
        direction: "ltr",
        native_name: "Alemannisch",
        name: {
            en: "Alemannic",
            es: "Alem찼nico"
        }
    },
    am: {
        direction: "ltr",
        native_name: "Amharic",
        name: {
            en: "Amharic",
            es: "Am찼rico"
        }
    },
    ag: {
        direction: "ltr",
        native_name: "AngloSaxon",
        name: {
            en: "Anglo-Saxon",
            es: "Anglosaj처n"
        }
    },
    ar: {
        direction: "rtl",
        native_name: "碼�晩邈磨�馬",
        name: {
            en: "Arabic",
            es: "횁rabe"
        }
    },
    an: {
        direction: "ltr",
        native_name: "Aragon챕s",
        name: {
            en: "Aragonese",
            es: "Aragon챕s"
        }
    },
    hy: {
        direction: "ltr",
        native_name: "�蘿蘭樂�樂鸞",
        name: {
            en: "Armenian",
            es: "Armenio"
        }
    },
    ra: {
        direction: "ltr",
        native_name: "Arm찾neashce",
        name: {
            en: "Aromanian",
            es: "Arrumano"
        }
    },
    as: {
        direction: "ltr",
        native_name: "Assamese",
        name: {
            en: "Assamese",
            es: "Asam챕s"
        }
    },
    at: {
        direction: "ltr",
        native_name: "Asturianu",
        name: {
            en: "Asturian",
            es: "Asturiano"
        }
    },
    av: {
        direction: "ltr",
        native_name: "�勻逵�",
        name: {
            en: "Avar",
            es: "Avar"
        }
    },
    ay: {
        direction: "ltr",
        native_name: "Aymar",
        name: {
            en: "Aymara",
            es: "Aimara"
        }
    },
    az: {
        direction: "ltr",
        native_name: "Az�rbaycan",
        name: {
            en: "Azeri",
            es: "Azer챠"
        }
    },
    bm: {
        direction: "ltr",
        native_name: "Bamanankan",
        name: {
            en: "Bambara",
            es: "Bambara"
        }
    },
    ba: {
        direction: "ltr",
        native_name: "�逵�納棘��",
        name: {
            en: "Bashkir",
            es: "Bashkir"
        }
    },
    eu: {
        direction: "ltr",
        native_name: "Euskara",
        name: {
            en: "Basque",
            es: "Vasco"
        }
    },
    be: {
        direction: "ltr",
        native_name: "�筠剋逵���克逵�",
        name: {
            en: "Belarusian",
            es: "Bielorruso"
        }
    },
    bn: {
        direction: "ltr",
        native_name: "Bengali",
        name: {
            en: "Bengali",
            es: "Bengal챠"
        }
    },
    bh: {
        direction: "ltr",
        native_name: "西�쪑西쒉ㄺ誓곟ㅀ誓",
        name: {
            en: "Bihari",
            es: "Bihari"
        }
    },
    bi: {
        direction: "ltr",
        native_name: "Bislama",
        name: {
            en: "Bislama",
            es: "Bislama"
        }
    },
    bs: {
        direction: "ltr",
        native_name: "Bosanski",
        name: {
            en: "Bosnian",
            es: "Bosnio"
        }
    },
    br: {
        direction: "ltr",
        native_name: "Brezhoneg",
        name: {
            en: "Breton",
            es: "Bret처n"
        }
    },
    bg: {
        direction: "ltr",
        native_name: "��剋均逵��克龜",
        name: {
            en: "Bulgarian",
            es: "B첬lgaro"
        }
    },
    my: {
        direction: "ltr",
        native_name: "Myanmasa",
        name: {
            en: "Burmese",
            es: "Birmano"
        }
    },
    km: {
        direction: "ltr",
        native_name: "Khmer",
        name: {
            en: "Khmer",
            es: "Jemer"
        }
    },
    ca: {
        direction: "ltr",
        native_name: "Catal횪",
        name: {
            en: "Catalan",
            es: "Catal찼n"
        }
    },
    ch: {
        direction: "ltr",
        native_name: "Chamoru",
        name: {
            en: "Chamorro",
            es: "Chamorro"
        }
    },
    ce: {
        direction: "ltr",
        native_name: "Cherokee",
        name: {
            en: "Cherokee",
            es: "Checheno"
        }
    },
    zh: {
        direction: "ltr",
        native_name: "嶸鵝볞릎��",
        name: {
            en: "Chinese(嶸鵝�)",
            es: "Chinosimplificado"
        }
    },
    zt: {
        direction: "ltr",
        native_name: "濚곲쳱訝�뻼",
        name: {
            en: "Chinese(濚곲쳱)",
            es: "Chinotradicion찼l"
        }
    },
    kw: {
        direction: "ltr",
        native_name: "Kernewek/Karnuack",
        name: {
            en: "Cornish",
            es: "C처rnico"
        }
    },
    co: {
        direction: "ltr",
        native_name: "Corsu",
        name: {
            en: "Corsican",
            es: "Corso"
        }
    },
    cr: {
        direction: "ltr",
        native_name: "Nehiyaw",
        name: {
            en: "Cree",
            es: "Cree"
        }
    },
    hr: {
        direction: "ltr",
        native_name: "Hrvatski",
        name: {
            en: "Croatian",
            es: "Croata"
        }
    },
    cs: {
        direction: "ltr",
        native_name: "훻e큄tina",
        name: {
            en: "Czech",
            es: "Checo"
        }
    },
    da: {
        direction: "ltr",
        native_name: "Dansk",
        name: {
            en: "Danish",
            es: "Dan챕s"
        }
    },
    dv: {
        direction: "ltr",
        native_name: "Divehi",
        name: {
            en: "Divehi",
            es: "Divehi"
        }
    },
    nl: {
        direction: "ltr",
        native_name: "Nederlands",
        name: {
            en: "Dutch",
            es: "Neerland챕s"
        }
    },
    dz: {
        direction: "ltr",
        native_name: "Dzongkha",
        name: {
            en: "Dzongkha",
            es: "Dzongkha"
        }
    },
    en: {
        direction: "ltr",
        native_name: "English",
        name: {
            en: "English",
            es: "Ingl챕s"
        }
    },
    eo: {
        direction: "ltr",
        native_name: "Esperanto",
        name: {
            en: "Esperanto",
            es: "Esperanto"
        }
    },
    et: {
        direction: "ltr",
        native_name: "Eesti",
        name: {
            en: "Estonian",
            es: "Estonio"
        }
    },
    fo: {
        direction: "ltr",
        native_name: "F첩royskt",
        name: {
            en: "Faroese",
            es: "Fero챕s"
        }
    },
    fj: {
        direction: "ltr",
        native_name: "NaVosaVakaviti",
        name: {
            en: "Fijian",
            es: "Fiyiano"
        }
    },
    fi: {
        direction: "ltr",
        native_name: "Suomi",
        name: {
            en: "Finnish",
            es: "Fin챕s"
        }
    },
    fr: {
        direction: "ltr",
        native_name: "Fran챌ais",
        name: {
            en: "French",
            es: "Franc챕s"
        }
    },
    gl: {
        direction: "ltr",
        native_name: "Galego",
        name: {
            en: "Galician",
            es: "Gallego"
        }
    },
    ka: {
        direction: "ltr",
        native_name: "�α깘�졹깤�ａ깪��",
        name: {
            en: "Georgian",
            es: "Georgiano"
        }
    },
    de: {
        direction: "ltr",
        native_name: "Deutsch",
        name: {
            en: "German",
            es: "Alem찼n"
        }
    },
    el: {
        direction: "ltr",
        native_name: "�貫貫管館菅觀郭",
        name: {
            en: "Greek",
            es: "Griego"
        }
    },
    kl: {
        direction: "ltr",
        native_name: "Kalaallisut",
        name: {
            en: "Greenlandic",
            es: "Groenland챕s"
        }
    },
    gn: {
        direction: "ltr",
        native_name: "Ava챰e'梳�",
        name: {
            en: "Guarani",
            es: "Guaran챠"
        }
    },
    gu: {
        direction: "ltr",
        native_name: "夕쀠쳛夕쒉ぐ夕약い奭",
        name: {
            en: "Gujarati",
            es: "Gujarati"
        }
    },
    ha: {
        direction: "rtl",
        native_name: "����卍�",
        name: {
            en: "Hausa",
            es: "Hausa"
        }
    },
    he: {
        direction: "rtl",
        native_name: "鬧�淚�瘻",
        name: {
            en: "Hebrew",
            es: "Hebreo"
        }
    },
    hi: {
        direction: "ltr",
        native_name: "西밝ㅏ西ⓣ쪓西╆�",
        name: {
            en: "Hindi",
            es: "Hindi"
        }
    },
    hm: {
        direction: "ltr",
        native_name: "Hmong",
        name: {
            en: "Hmong",
            es: "Hmong"
        }
    },
    hu: {
        direction: "ltr",
        native_name: "Magyar",
        name: {
            en: "Hungarian",
            es: "H첬ngaro"
        }
    },
    is: {
        direction: "ltr",
        native_name: "횒slenska",
        name: {
            en: "Icelandic",
            es: "Island챕s"
        }
    },
    io: {
        direction: "ltr",
        native_name: "Ido",
        name: {
            en: "Ido",
            es: "Ido"
        }
    },
    id: {
        direction: "ltr",
        native_name: "BahasaIndonesia",
        name: {
            en: "Indonesian",
            es: "Indonesio"
        }
    },
    ia: {
        direction: "ltr",
        native_name: "Interlingua",
        name: {
            en: "Interlingua",
            es: "Interlingua"
        }
    },
    ie: {
        direction: "ltr",
        native_name: "Interlingue",
        name: {
            en: "Interlingue",
            es: "Interlingue"
        }
    },
    iu: {
        direction: "ltr",
        native_name: "Inuktitut",
        name: {
            en: "Inuktitut",
            es: "Inuktitut"
        }
    },
    ik: {
        direction: "ltr",
        native_name: "I챰upiak",
        name: {
            en: "Inupiak",
            es: "Inupiaq"
        }
    },
    ga: {
        direction: "ltr",
        native_name: "Gaeilge",
        name: {
            en: "Irish",
            es: "Irland챕s"
        }
    },
    it: {
        direction: "ltr",
        native_name: "Italiano",
        name: {
            en: "Italian",
            es: "Italiano"
        }
    },
    ja: {
        direction: "ltr",
        native_name: "�ζ쑍沃�",
        name: {
            en: "Japanese",
            es: "Japon챕s"
        }
    },
    jv: {
        direction: "ltr",
        native_name: "BasaJawa",
        name: {
            en: "Javanese",
            es: "Javan챕s"
        }
    },
    kn: {
        direction: "ltr",
        native_name: "淅뺖꺼潟띭꺼淅�",
        name: {
            en: "Kannada",
            es: "Canar챕s"
        }
    },
    ks: {
        direction: "ltr",
        native_name: "西뺖ㅆ誓띭ㄾ誓西겯�-(�娩��邈�",
        name: {
            en: "Kashmiri",
            es: "Cachemiro"
        }
    },
    cb: {
        direction: "ltr",
        native_name: "Kasz챘bsczi",
        name: {
            en: "Kashubian",
            es: "Casubio"
        }
    },
    mu: {
        direction: "ltr",
        native_name: "Karaoke",
        name: {
            en: "Karaoke",
            es: "Karaoke"
        }
    },
    kk: {
        direction: "ltr",
        native_name: "�逵鈞逵��逵",
        name: {
            en: "Kazakh",
            es: "Kazajo"
        }
    },
    ky: {
        direction: "ltr",
        native_name: "K캇rg캇zca",
        name: {
            en: "Kirghiz",
            es: "Kirghiz"
        }
    },
    rn: {
        direction: "ltr",
        native_name: "Kirundi",
        name: {
            en: "Kirundi",
            es: "Kiroundi"
        }
    },
    tm: {
        direction: "ltr",
        native_name: "tlhIngan-Hol",
        name: {
            en: "Klingon",
            es: "Klingon"
        }
    },
    ko: {
        direction: "ltr",
        native_name: "�쒓뎅��",
        name: {
            en: "Korean",
            es: "Coreano"
        }
    },
    ku: {
        direction: "ltr",
        native_name: "Kurd챤/��邈膜�",
        name: {
            en: "Kurdish",
            es: "Kurdo"
        }
    },
    lo: {
        direction: "ltr",
        native_name: "Lao",
        name: {
            en: "Lao",
            es: "Laosiano"
        }
    },
    la: {
        direction: "ltr",
        native_name: "Latina",
        name: {
            en: "Latin",
            es: "Lat챠n"
        }
    },
    lv: {
        direction: "ltr",
        native_name: "Latvie큄u",
        name: {
            en: "Latvian",
            es: "Let처n"
        }
    },
    li: {
        direction: "ltr",
        native_name: "Limburgs",
        name: {
            en: "Limburgian",
            es: "Limburgu챕s"
        }
    },
    ln: {
        direction: "ltr",
        native_name: "Lingala",
        name: {
            en: "Lingala",
            es: "Lingala"
        }
    },
    lt: {
        direction: "ltr",
        native_name: "Lietuvi킬",
        name: {
            en: "Lithuanian",
            es: "Lituano"
        }
    },
    jb: {
        direction: "ltr",
        native_name: "Lojban",
        name: {
            en: "Lojban",
            es: "Lojban"
        }
    },
    nd: {
        direction: "ltr",
        native_name: "Plattd체체tsch",
        name: {
            en: "LowSaxon",
            es: "Ndebeleseptentrional"
        }
    },
    lb: {
        direction: "ltr",
        native_name: "L챘tzebuergesch",
        name: {
            en: "Luxembourgish",
            es: "Luxemburgu챕s"
        }
    },
    mk: {
        direction: "ltr",
        native_name: "�逵克筠畇棘戟�克龜",
        name: {
            en: "Macedonian",
            es: "Macedonio"
        }
    },
    mg: {
        direction: "ltr",
        native_name: "Malagasy",
        name: {
            en: "Malagasy",
            es: "Malgache"
        }
    },
    ms: {
        direction: "ltr",
        native_name: "BahasaMelayu",
        name: {
            en: "Malay",
            es: "Malayo"
        }
    },
    ml: {
        direction: "ltr",
        native_name: "Malayalam",
        name: {
            en: "Malayalam",
            es: "Malayalam"
        }
    },
    mt: {
        direction: "ltr",
        native_name: "bil-Malti",
        name: {
            en: "Maltese",
            es: "Malt챕s"
        }
    },
    gv: {
        direction: "ltr",
        native_name: "Gaelg",
        name: {
            en: "Manx",
            es: "Ga챕licoman챕s"
        }
    },
    mi: {
        direction: "ltr",
        native_name: "M훮ori",
        name: {
            en: "Maori",
            es: "Maor챠"
        }
    },
    mr: {
        direction: "ltr",
        native_name: "西�ㅀ西약쩆誓",
        name: {
            en: "Marathi",
            es: "Marathi"
        }
    },
    mh: {
        direction: "ltr",
        native_name: "Ebon",
        name: {
            en: "Marshallese",
            es: "Marshal챕s"
        }
    },
    zm: {
        direction: "ltr",
        native_name: "B창n-l창m-g첬",
        name: {
            en: "MinNan",
            es: "MinNan"
        }
    },
    mo: {
        direction: "ltr",
        native_name: "Moldoveana",
        name: {
            en: "Moldovan",
            es: "Moldavo"
        }
    },
    mn: {
        direction: "ltr",
        native_name: "�棘戟均棘剋",
        name: {
            en: "Mongolian",
            es: "Mongol"
        }
    },
    nh: {
        direction: "ltr",
        native_name: "Nahuatl",
        name: {
            en: "Nahuatl",
            es: "N찼huatl"
        }
    },
    na: {
        direction: "ltr",
        native_name: "dorerinNaoero",
        name: {
            en: "Nauruan",
            es: "Nauruano"
        }
    },
    ne: {
        direction: "ltr",
        native_name: "西ⓣ쪍西むㅎ西꿋�",
        name: {
            en: "Nepali",
            es: "Nepal챠"
        }
    },
    no: {
        direction: "ltr",
        native_name: "Norsk(Bokm책l)",
        name: {
            en: "Norwegian(Bokm책l)",
            es: "Noruego"
        }
    },
    nn: {
        direction: "ltr",
        native_name: "Nynorsk",
        name: {
            en: "Norwegian(Nynorsk)",
            es: "Nynorsknoruego"
        }
    },
    oc: {
        direction: "ltr",
        native_name: "Occitan",
        name: {
            en: "Occitan",
            es: "Occitano(despu챕sdel1500)"
        }
    },
    or: {
        direction: "ltr",
        native_name: "Oriya",
        name: {
            en: "Oriya",
            es: "Oriya"
        }
    },
    om: {
        direction: "ltr",
        native_name: "Oromoo",
        name: {
            en: "Oromo",
            es: "Oromo"
        }
    },
    pi: {
        direction: "ltr",
        native_name: "西むㅎ西욈ㅄ",
        name: {
            en: "Pali",
            es: "Pali"
        }
    },
    ps: {
        direction: "rtl",
        native_name: "毛�魔�",
        name: {
            en: "Pashto",
            es: "Pashto"
        }
    },
    fa: {
        direction: "rtl",
        native_name: "�碼邈卍�",
        name: {
            en: "Persian",
            es: "Persa"
        }
    },
    pl: {
        direction: "ltr",
        native_name: "Polski",
        name: {
            en: "Polish",
            es: "Polaco"
        }
    },
    pt: {
        direction: "ltr",
        native_name: "Portugu챗s",
        name: {
            en: "Portuguese",
            es: "Portugu챕s"
        }
    },
    pa: {
        direction: "ltr",
        native_name: "黍むŉ黍쒉㉭黍о�",
        name: {
            en: "Punjabi",
            es: "Punjab챠"
        }
    },
    qu: {
        direction: "ltr",
        native_name: "RunaSimi",
        name: {
            en: "Quechua",
            es: "Quechua"
        }
    },
    rm: {
        direction: "ltr",
        native_name: "Rumantsch",
        name: {
            en: "RaetoRomance",
            es: "Retorrom찼nico"
        }
    },
    ro: {
        direction: "ltr",
        native_name: "Rom창n훱",
        name: {
            en: "Romanian",
            es: "Rumano"
        }
    },
    ru: {
        direction: "ltr",
        native_name: "����克龜橘",
        name: {
            en: "Russian",
            es: "Ruso"
        }
    },
    sm: {
        direction: "ltr",
        native_name: "GaganaSamoa",
        name: {
            en: "Samoan",
            es: "Samoano"
        }
    },
    sg: {
        direction: "ltr",
        native_name: "S채ng철",
        name: {
            en: "Sango",
            es: "Sango"
        }
    },
    sa: {
        direction: "ltr",
        native_name: "西멘쨧西멘쪓西뺖쪉西ㅰㄾ誓�",
        name: {
            en: "Sanskrit",
            es: "S찼nscrito"
        }
    },
    sc: {
        direction: "ltr",
        native_name: "Sardu",
        name: {
            en: "Sardinian",
            es: "Sardo"
        }
    },
    gd: {
        direction: "ltr",
        native_name: "G횪idhlig",
        name: {
            en: "ScottishGaelic",
            es: "Ga챕licoescoc챕s"
        }
    },
    sr: {
        direction: "ltr",
        native_name: "鬼�極�克龜/Srpski",
        name: {
            en: "Serbian",
            es: "Serbio"
        }
    },
    sh: {
        direction: "ltr",
        native_name: "Srpskohrvatski",
        name: {
            en: "Serbo-Croatian",
            es: "Serbocroata"
        }
    },
    tn: {
        direction: "ltr",
        native_name: "Setswana",
        name: {
            en: "Setswana",
            es: "Setchwana"
        }
    },
    sn: {
        direction: "ltr",
        native_name: "chiShona",
        name: {
            en: "Shona",
            es: "Shona"
        }
    },
    sb: {
        direction: "ltr",
        native_name: "Sicilianu",
        name: {
            en: "Sicilian",
            es: "Siciliano"
        }
    },
    se: {
        direction: "ltr",
        native_name: "SimpleEnglish",
        name: {
            en: "SimpleEnglish",
            es: "Samiseptentrional"
        }
    },
    sd: {
        direction: "rtl",
        native_name: "卍���",
        name: {
            en: "Sindhi",
            es: "Sindhi"
        }
    },
    si: {
        direction: "ltr",
        native_name: "Sinhalese",
        name: {
            en: "Sinhalese",
            es: "Cingal챕s"
        }
    },
    sk: {
        direction: "ltr",
        native_name: "Sloven훾ina",
        name: {
            en: "Slovak",
            es: "Eslovaco"
        }
    },
    sl: {
        direction: "ltr",
        native_name: "Sloven큄훾ina",
        name: {
            en: "Slovenian",
            es: "Esloveno"
        }
    },
    so: {
        direction: "ltr",
        native_name: "Soomaaliga",
        name: {
            en: "Somali",
            es: "Somal챠"
        }
    },
    st: {
        direction: "ltr",
        native_name: "seSotho",
        name: {
            en: "SouthernSotho",
            es: "Sesotho"
        }
    },
    es: {
        direction: "ltr",
        native_name: "Espa챰ol",
        name: {
            en: "Spanish",
            es: "Espa챰ol"
        }
    },
    su: {
        direction: "ltr",
        native_name: "BasaSunda",
        name: {
            en: "Sundanese",
            es: "Sundan챕s"
        }
    },
    sw: {
        direction: "ltr",
        native_name: "Kiswahili",
        name: {
            en: "Swahili",
            es: "Swahili"
        }
    },
    ss: {
        direction: "ltr",
        native_name: "SiSwati",
        name: {
            en: "Swati",
            es: "Siswati"
        }
    },
    sv: {
        direction: "ltr",
        native_name: "Svenska",
        name: {
            en: "Swedish",
            es: "Sueco"
        }
    },
    tl: {
        direction: "ltr",
        native_name: "Tagalog",
        name: {
            en: "Tagalog",
            es: "Tagalo"
        }
    },
    tg: {
        direction: "ltr",
        native_name: "龜棘念龜克但",
        name: {
            en: "Tajik",
            es: "Tayiko"
        }
    },
    ta: {
        direction: "ltr",
        native_name: "昔ㅰ�昔욈�晳�",
        name: {
            en: "Tamil",
            es: "Tamil"
        }
    },
    tt: {
        direction: "ltr",
        native_name: "Tatar챌a/龜逵�逵��逵",
        name: {
            en: "Tatar",
            es: "T찼rtaro"
        }
    },
    te: {
        direction: "ltr",
        native_name: "析ㅰ콊析꿋콅析쀠콅",
        name: {
            en: "Telugu",
            es: "Telugu"
        }
    },
    th: {
        direction: "ltr",
        native_name: "仙꾝툠錫�",
        name: {
            en: "Thai",
            es: "Tailand챕s"
        }
    },
    bo: {
        direction: "ltr",
        native_name: "Bodskad",
        name: {
            en: "Tibetan",
            es: "Tibetano"
        }
    },
    ti: {
        direction: "ltr",
        native_name: "Tigrinya",
        name: {
            en: "Tigrinya",
            es: "Tegri챰a"
        }
    },
    tp: {
        direction: "ltr",
        native_name: "TokPisin",
        name: {
            en: "TokPisin",
            es: "TokPisin"
        }
    },
    tq: {
        direction: "ltr",
        native_name: "Tokipona",
        name: {
            en: "Tokipona",
            es: "Tokipona"
        }
    },
    to: {
        direction: "ltr",
        native_name: "fakaTonga",
        name: {
            en: "Tongan",
            es: "Tonga(islastonga)"
        }
    },
    ts: {
        direction: "ltr",
        native_name: "Xitsonga",
        name: {
            en: "Tsonga",
            es: "Tsonga"
        }
    },
    tr: {
        direction: "ltr",
        native_name: "T체rk챌e",
        name: {
            en: "Turkish",
            es: "Turco"
        }
    },
    tk: {
        direction: "ltr",
        native_name: "魔邈���/龜��克劇筠戟",
        name: {
            en: "Turkmen",
            es: "Turcomano"
        }
    },
    tw: {
        direction: "ltr",
        native_name: "Twi",
        name: {
            en: "Twi",
            es: "Twi"
        }
    },
    udm: {
        direction: "ltr",
        native_name: "叫畇劇���葵剋�克�戟",
        name: {
            en: "Udmurt",
            es: "Udmurto"
        }
    },
    uk: {
        direction: "ltr",
        native_name: "叫克�逵�戟��克逵",
        name: {
            en: "Ukrainian",
            es: "Ucraniano"
        }
    },
    ur: {
        direction: "rtl",
        native_name: "碼�膜�",
        name: {
            en: "Urdu",
            es: "Urdu"
        }
    },
    ug: {
        direction: "ltr",
        native_name: "Oyghurque",
        name: {
            en: "Uyghur",
            es: "Uigur"
        }
    },
    uz: {
        direction: "ltr",
        native_name: "O�쁹bek",
        name: {
            en: "Uzbek",
            es: "Uzbeko"
        }
    },
    vi: {
        direction: "ltr",
        native_name: "Ti梳퓆gVi沼뇍",
        name: {
            en: "Vietnamese",
            es: "Vietnamita"
        }
    },
    vo: {
        direction: "ltr",
        native_name: "Volap체k",
        name: {
            en: "Volap체k",
            es: "Volap체k"
        }
    },
    wa: {
        direction: "ltr",
        native_name: "Walon",
        name: {
            en: "Walloon",
            es: "Val처n"
        }
    },
    cy: {
        direction: "ltr",
        native_name: "Cymraeg",
        name: {
            en: "Welsh",
            es: "Gal챕s"
        }
    },
    fy: {
        direction: "ltr",
        native_name: "Frysk",
        name: {
            en: "WestFrisian",
            es: "Fris처n"
        }
    },
    wo: {
        direction: "ltr",
        native_name: "Wollof",
        name: {
            en: "Wolof",
            es: "Uolof"
        }
    },
    xh: {
        direction: "ltr",
        native_name: "isiXhosa",
        name: {
            en: "Xhosan",
            es: "Xhosa"
        }
    },
    yi: {
        direction: "rtl",
        native_name: "��獵��漏",
        name: {
            en: "Yiddish",
            es: "Yidis"
        }
    },
    yo: {
        direction: "ltr",
        native_name: "Yor첫b찼",
        name: {
            en: "Yoruba",
            es: "Yoruba"
        }
    },
    za: {
        direction: "ltr",
        native_name: "Cuengh",
        name: {
            en: "Zhuang",
            es: "Zhuang"
        }
    },
    zu: {
        direction: "ltr",
        native_name: "isiZulu",
        name: {
            en: "Zulu",
            es: "Zul첬"
        }
    },
    han: {
        direction: "ltr",
        native_name: "疫뽩뜔瑥�",
        name: {
            en: "Xiang",
            es: "Xiang"
        }
    },
    hak: {
        direction: "ltr",
        native_name: "若℡�",
        name: {
            en: "Hakka",
            es: "Hakka"
        }
    },
    bho: {
        direction: "ltr",
        native_name: "西�쪑西쒉ㄺ誓곟ㅀ誓",
        name: {
            en: "Bhojpuri",
            es: "Bhojpuri"
        }
    },
    mai: {
        direction: "ltr",
        native_name: "西�쪎西�ㅏ西꿋�",
        name: {
            en: "Maithili",
            es: "Maithili"
        }
    },
    ful: {
        direction: "ltr",
        native_name: "Fula",
        name: {
            en: "Fula",
            es: "Fula"
        }
    },
    ibo: {
        direction: "ltr",
        native_name: "Igbo",
        name: {
            en: "Igbo",
            es: "Igbo"
        }
    },
    gan: {
        direction: "ltr",
        native_name: "兀쏂첑",
        name: {
            en: "Gan",
            es: "Gan"
        }
    },
    ceb: {
        direction: "ltr",
        native_name: "Binisaya",
        name: {
            en: "Cebuano/Binisaya",
            es: "Cebuano/Bisaya"
        }
    },
    skr: {
        direction: "ltr",
        native_name: "卍邈碼痲�沕�",
        name: {
            en: "Saraiki",
            es: "Saraiki"
        }
    },
    ctg: {
        direction: "ltr",
        native_name: "逝잀쬀逝약쫨逝뉋┓逝솰┥逝о쭅逝꿋┸",
        name: {
            en: "Chittagonian",
            es: "Chittagonian"
        }
    },
    mad: {
        direction: "ltr",
        native_name: "磨��碼卍���膜�邈碼",
        name: {
            en: "Madurese",
            es: "Madur챕s"
        }
    },
    bgc: {
        direction: "ltr",
        native_name: "西밝ㅀ西욈ㄿ西약ㄳ西듀�",
        name: {
            en: "Haryanvi",
            es: "Haryanvi"
        }
    },
    mwr: {
        direction: "ltr",
        native_name: "西�ㅎ西겯ㅅ西약ㄱ西솰�",
        name: {
            en: "Marwari",
            es: "Marwari"
        }
    },
    hne: {
        direction: "ltr",
        native_name: "西쎹ㄴ誓띭ㄴ誓西멘쨽西№ㅌ誓",
        name: {
            en: "Chhattisgarhi",
            es: "Chhattisgarhi"
        }
    },
    nya: {
        direction: "ltr",
        native_name: "Nyanja",
        name: {
            en: "Chewa/Nyanja",
            es: "Chewa/Nyanja"
        }
    },
    dcc: {
        direction: "ltr",
        native_name: "膜沕����",
        name: {
            en: "Dakhini",
            es: "Dakani"
        }
    },
    mnp: {
        direction: "ltr",
        native_name: "�썲뙒瑥�",
        name: {
            en: "MinBei",
            es: "MinBei"
        }
    },
    cdo: {
        direction: "ltr",
        native_name: "�⒵씝沃�",
        name: {
            en: "MinDong",
            es: "MinDong"
        }
    },
    syl: {
        direction: "ltr",
        native_name: "逝쎹┸逝꿋쬉鋤",
        name: {
            en: "Sylheti",
            es: "Sylheti"
        }
    },
    kin: {
        direction: "ltr",
        native_name: "Ikinyarwanda",
        name: {
            en: "Kinyarwanda",
            es: "Kinyarwanda"
        }
    },
    hat: {
        direction: "ltr",
        native_name: "Krey챵layisyen",
        name: {
            en: "HaitianCreole",
            es: "CriolloHaitiano"
        }
    },
    ilo: {
        direction: "ltr",
        native_name: "Ilokano",
        name: {
            en: "Ilokano",
            es: "Ilocano"
        }
    },
    mos: {
        direction: "ltr",
        native_name: "M챵or챕",
        name: {
            en: "Mossi",
            es: "Mor챕"
        }
    },
    bal: {
        direction: "ltr",
        native_name: "磨����",
        name: {
            en: "Balochi",
            es: "Baluchi"
        }
    },
    kok: {
        direction: "ltr",
        native_name: "西뺖쪑西귖쨻西｀�",
        name: {
            en: "Konkani",
            es: "Konkan챠"
        }
    },
    zom: {
        direction: "ltr",
        native_name: "Zomi",
        name: {
            en: "Zomi",
            es: "Zomi"
        }
    },
    lol: {
        direction: "ltr",
        native_name: "lolspeak",
        name: {
            en: "lolspeak",
            es: "lolspeak"
        }
    }
},
    function () {
        window.PopupPosition = function () {
            function t() {}
            return t.adjustToMiddle = function (t) {
                return t.css({
                    "margin-top": -t.height() / 2,
                    "margin-left": -t.width() / 2
                })
            }, t
        }()
    }.call(this),
    function () {
        window.Popup = function () {
            function t(t) {
                null != t.container ? this.template = t.container : ($("body").append(JST["templates/popup"]({
                    type: t.type,
                    message: t.message
                })), this.template = $("body").find("#" + t.type + "-popup")), null != t.openLink && (this.openLink = t.openLink, this.openLink.bind("click", $.proxy(this.show, this))), this.overlay = t.overlay, this.template.find(".close, .close-btn").bind("click", $.proxy(this.hide, this)), PopupPosition.adjustToMiddle(this.template)
            }
            return t.prototype.hide = function () {
                return this.template.fadeOut(), this.overlay.fadeOut(), null != this.closePopupCallback && this.closePopupCallback(), !1
            }, t.prototype.show = function () {
                return this.template.fadeIn(), this.overlay.fadeIn(), null != this.openPopupCallback && this.openPopupCallback(), !1
            }, t.prototype.onClosePopup = function (t) {
                return this.closePopupCallback = t
            }, t.prototype.onOpenPopup = function (t) {
                return this.openPopupCallback = t
            }, t
        }()
    }.call(this),
    function () {
        var t = [].slice;
        window.I18n = {
            bulk: function () {
                var e, i = this;
                return e = 1 <= arguments.length ? t.call(arguments, 0) : [], e.reduce(function (t, e) {
                    return t[e] = i.t(e), t
                }, {})
            },
            t: function (t) {
                var e;
                return e = "undefined" != typeof locale && null !== locale ? locale : "en", this.languages()[e][t]
            },
            languages: function () {
                return {
                    en: {
                        learn_more: "To learn more about subtitling and segmenting,",
                        checkout_viki_u: "check out Viki U!",
                        save: "Save",
                        cancel: "Cancel",
                        tab_tooltip: "Shortcut key: Tab (also move to next segment)",
                        esc_tooltip: "Shortcut key: Esc",
                        replay_tooltip: "Replay segment (Ctrl + R)",
                        history_tooltip: "History",
                        start_segment_tooltip: "Open segment at start of dialogue.",
                        shortcut: "Shortcut",
                        can_not_open_seg_tooltip: "Cannot open a segment that overlaps with an existing one.",
                        close_segment_tooltip: "Close segment after dialogue ends.",
                        cancel_segment_tooltip: "To cancel the segment, use",
                        continue_segment_tooltip_pre: "Use",
                        continue_segment_tooltip_post: "to segment without pausing.",
                        play: "Play",
                        pause: "Pause",
                        back_1_sec_tooltip: "Back by 1 second",
                        forward_1_sec_tooltip: "Forward by 1 second",
                        save_and_next: "Save and next",
                        save_and_previous: "Save and previous",
                        close: "Close",
                        error_occurred: "An error has occurred",
                        no_delete_subtitle_perm: "You can only delete your own subtitles.",
                        retry: "Retry",
                        duplicate_subtitle: "Another user already created the same subtitle. Please select it from Subtitle History.",
                        no_segment: "This segment has been deleted",
                        waring_delete_segment: "Are you sure you want to delete this segment? Note that any related subtitles will also be deleted and cannot be recovered.",
                        fps_description: "Select lower setting to improve performance",
                        switch_flash: "Switch to Flash Player",
                        switch_html: "Switch to HTML5 Player",
                        player_trouble: "Having trouble viewing this video? Click the button to"
                    },
                    es: {
                        learn_more: "Para aprender m찼s acerca de la subtitulaci처n y la segmentaci처n,",
                        checkout_viki_u: "echa un vistazo a Viki U!",
                        save: "Guardar",
                        cancel: "Cancelar",
                        tab_tooltip: "tecla para acceso directo: Tab (tambi챕n pasar al siguiente segmento)",
                        esc_tooltip: "tecla para acceso directo: Esc",
                        replay_tooltip: "Repetir Segmento (Ctrl + R)",
                        history_tooltip: "Historial",
                        start_segment_tooltip: "Abrir segmento cuando inicie un di찼logo.",
                        shortcut: "Atajo",
                        can_not_open_seg_tooltip: "No se puede abrir un segmento que coincida con uno ya existente.",
                        close_segment_tooltip: "Cerrar segmento despu챕s de terminar el di찼logo.",
                        cancel_segment_tooltip: "Para cancelar el segmento, utiliza",
                        continue_segment_tooltip_pre: "Utiliza",
                        continue_segment_tooltip_post: "para segmentar sin detenerte",
                        play: "Reproducir",
                        pause: "Pausa",
                        back_1_sec_tooltip: "Regresar 1 segundo",
                        forward_1_sec_tooltip: "Avanzar 1 segundo",
                        save_and_next: "Guardar y siguiente",
                        save_and_previous: "Guardar y anterior",
                        close: "Cerrar",
                        error_occurred: "Se ha producido un error",
                        no_delete_subtitle_perm: "S처lo puedes borrar tus propios subt챠tulos.",
                        retry: "Reintento",
                        duplicate_subtitle: "Otro usuario ya ha creado el mismo subt챠tulo. Por favor, selecci처nalo desde la lista de subt챠tulos.",
                        no_segment: "Este segmento ha sido borrado",
                        waring_delete_segment: "쩔Est찼 seguro que desea eliminar este segmento? Tenga en cuenta que todos los subt챠tulos relacionados tambi챕n ser찼n borrados y no se pueden recuperar.",
                        fps_description: "Seleccione el ajuste bajo para mejorar el rendimientos",
                        switch_flash: "Pasar a Flash Player",
                        switch_html: "Pasar a reproductor HTML5",
                        player_trouble: "쩔Tiene problemas para ver este video? Haga clic en el bot처n para"
                    }
                }
            }
        }
    }.call(this),
    function () {
        window.Language = function () {
            function t(t) {
                var e, i;
                this.code = t, this._name = null != (e = viki.languages[this.code]) ? e.name.en : void 0, this._direction = null != (i = viki.languages[this.code]) ? i.direction : void 0
            }
            return t.prototype.name = function () {
                return this._name
            }, t.prototype.direction = function () {
                return this._direction
            }, t
        }()
    }.call(this),
    function () {
        window.TimeFormatter = {
            secondsToTime: function (t, e) {
                var i, n, s, r, o, a;
                return null == e && (e = {}), this.isNumber(t) ? (t = Math.floor(t), a = 0 > t, a && (t *= -1), n = t % 1e3, o = Math.floor(t / 1e3) % 60, s = Math.floor(t / 6e4) % 60, i = Math.floor(t / 36e5)) : (n = 0, o = 0, s = 0, i = 0), r = e.mmss ? i > 0 ? "" + this.twoDigits(i) + ":" + this.twoDigits(s) + ":" + this.twoDigits(o) : "" + this.twoDigits(s) + ":" + this.twoDigits(o) : "" + this.twoDigits(i) + ":" + this.twoDigits(s) + ":" + this.twoDigits(o) + "." + this.threeDigits(n), a ? "-" + r : r
            },
            timeToSeconds: function (t) {
                var e, i, n, s, r, o;
                return o = t.split("."), r = o[0].split(":"), this.isNumber(o[1]) && this.isNumber(r[0]) && this.isNumber(r[1]) && this.isNumber(r[2]) ? (i = parseInt(o[1]), e = parseInt(r[0]), n = parseInt(r[1]), s = parseInt(r[2]), 1e3 * 60 * 60 * e + 1e3 * 60 * n + 1e3 * s + i) : void 0
            },
            twoDigits: function (t) {
                return t >= 10 ? t : "0" + t
            },
            threeDigits: function (t) {
                return t >= 100 ? t : t >= 10 ? "0" + t : "00" + t
            },
            isNumber: function (t) {
                return null == t ? !1 : t.toString().match(/\d+/)
            }
        }
    }.call(this),
    function () {
        window.Activity = function () {
            function t(t) {
                this.mediaResourceId = t, this.url = "/media_resources/" + t + "/activities", this._list = [], this._activityIds = {}
            }
            return t.prototype._list = [], t.prototype._activityIds = {}, t.prototype.defaultPage = 1, t.prototype.defaultPerPage = 50, t.prototype.fetch = function (t) {
                var e;
                return null == t && (t = {}), e = {}, t.reset ? (e.page = 1, this.cleanAll()) : e.page = null != t.page ? t.page : this.defaultPage, e.per_page = null != t.per_page ? t.per_page : this.defaultPerPage, $.ajax({
                    url: this.url,
                    data: e,
                    context: this,
                    success: function (e) {
                        return this.addList(e), this.page++, null != t.success ? t.success() : void 0
                    }
                })
            }, t.prototype.list = function () {
                return this._list
            }, t.prototype.isEmpty = function () {
                return 0 === this._list.length
            }, t.prototype.filteredList = function (t) {
                return _.select(this._list, function (e) {
                    return t[e.activity_type]
                })
            }, t.prototype.addList = function (t) {
                var e = this;
                return _.each(t, function (t) {
                    return e._activityIds[t.id] ? void 0 : (e._list.push(t), e._activityIds[t.id] = !0)
                })
            }, t.prototype.cleanAll = function () {
                return this._list = [], this._activityIds = []
            }, t
        }()
    }.call(this),
    function () {
        window.ActivityView = function () {
            function t(t) {
                this.$container = t, this.$list = this.$container.find("ul")
            }
            return t.prototype.rendered = !1, t.prototype.render = function (t) {
                var e, i = this;
                return e = "", _.each(t, function (t) {
                    return e += i.buildMessage(t)
                }), this.rendered = !0, this.$list.html(e)
            }, t.prototype.buildMessage = function (t) {
                var e;
                return e = "Segment" === t.item_type ? this.buildMessageForSegment(t) : "MediaResource" === t.item_type ? this.buildMessageForMediaResource(t) : "Subtitle" === t.item_type ? this.buildMessageForSubtitle(t) : void 0, JST["templates/activity"]({
                    time: 1e3 * t.timestamp,
                    username: t.username,
                    message: e
                })
            }, t.prototype.isRendered = function () {
                return this.rendered
            }, t.prototype.removeAll = function () {
                return this.$list.html("")
            }, t.prototype.buildMessageForSubtitle = function (t) {
                var e, i, n, s;
                return n = TimeFormatter.secondsToTime(t.modifications.start_time), i = TimeFormatter.secondsToTime(t.modifications.end_time), s = new Language(t.modifications.language_code), "update" === t.activity_type ? "updated a " + s.name() + " " + t.item_type + "(" + n + " - " + i + ") " + ("from " + t.modifications.previous_content + " to " + t.modifications.content) : "create" === t.activity_type ? "created a " + s.name() + " " + t.item_type + "(" + n + " - " + i + ")" : "delete" === t.activity_type ? (e = t.modifications.content ? " / " + t.modifications.content : "", "deleted a " + t.modifications.username + "'s " + s.name() + " " + ("" + t.item_type + "(" + n + " - " + i + e + ")")) : void 0
            }, t.prototype.buildMessageForSegment = function (t) {
                var e, i, n, s, r, o;
                return "update" === t.activity_type ? (s = TimeFormatter.secondsToTime(t.modifications.before.start_time), n = TimeFormatter.secondsToTime(t.modifications.before.end_time), i = TimeFormatter.secondsToTime(t.modifications.after.start_time), e = TimeFormatter.secondsToTime(t.modifications.after.end_time), "updated a " + t.item_type + ("(" + s + " - " + n + " -> ") + ("" + i + " - " + e + ")")) : (o = TimeFormatter.secondsToTime(t.modifications.start_time), r = TimeFormatter.secondsToTime(t.modifications.end_time), "" + t.activity_type + "d a " + t.item_type + "(" + o + " - " + r + ")")
            }, t.prototype.buildMessageForMediaResource = function (t) {
                var e, i, n, s, r;
                return r = function (t) {
                    var e;
                    return e = "" + TimeFormatter.secondsToTime(0) + "/", _.each(t, function (t, i, n) {
                        return e += "" + TimeFormatter.secondsToTime(t), i < n.length - 1 ? e += "/" : void 0
                    }), e
                }, "update" === t.activity_type ? (n = t.modifications.before.times.length + 1, s = r(t.modifications.before.times), e = t.modifications.after.times.length + 1, i = r(t.modifications.after.times), "updated " + n + " parts(" + s + ") to " + ("" + e + " parts(" + i + ")")) : "" + t.activity_type + "d " + (t.modifications.times.length + 1) + " " + ("parts(" + r(t.modifications.times) + ")")
            }, t
        }()
    }.call(this),
    function () {
        window.ActivityController = function () {
            function t(t, e) {
                this.$container = t, this.activity = new Activity(e), this.activityView = new ActivityView(t), this.$filterButtons = this.$container.find(".activities-filter .btn"), this.$loadingMoreButton = this.$container.find(".activities-more"), this.$refreshButton = this.$container.find(".activities-refresh"), this.$loadingSpinner = this.$container.find(".activities-loading"), this.filters = {}, this.initFilters(), this.initButtons()
            }
            return t.prototype.currentPage = 1, t.prototype.init = function () {
                var t = this;
                return this.activityView.isRendered() ? void 0 : (this.showSpinner(), this.activity.fetch({
                    page: this.currentPage,
                    success: function () {
                        return t.hideSpinner(), t.activity.isEmpty() ? t.renderNoActivities() : t.renderActivities()
                    }
                }))
            }, t.prototype.initFilters = function () {
                var t = this;
                return _.each(this.$filterButtons, function (e) {
                    var i, n;
                    return i = $(e), n = i.data("filter-type"), i.addClass("active"), t.filters[n] = !0
                }), this.$filterButtons.on("click", $.proxy(this.filterActivities, this))
            }, t.prototype.initButtons = function () {
                var t = this;
                return this.$loadingMoreButton.click(function (e) {
                    return e.preventDefault(), t.showSpinner(), t.activity.fetch({
                        page: t.currentPage + 1,
                        success: function () {
                            return t.renderActivities(), t.hideSpinner(), t.currentPage++
                        }
                    })
                }), this.$refreshButton.click(function (e) {
                    return e.preventDefault(), t.activityView.removeAll(), t.showSpinner(), t.currentPage = 1, t.activity.fetch({
                        reset: !0,
                        success: function () {
                            return t.renderActivities(), t.hideSpinner()
                        }
                    })
                })
            }, t.prototype.renderActivities = function () {
                return this.activityView.render(this.activity.filteredList(this.filters))
            }, t.prototype.renderNoActivities = function () {
                return this.$container.find(".activities-content").addClass("hidden"), this.$container.find(".activities-empty-wrapper").removeClass("hidden")
            }, t.prototype.filterActivities = function (t) {
                var e;
                return t.preventDefault(), e = $(t.target), e.toggleClass("active"), this.filters[e.data("filter-type")] = e.hasClass("active"), this.renderActivities()
            }, t.prototype.hideSpinner = function () {
                return this.$loadingMoreButton.removeClass("hidden"), this.$loadingSpinner.addClass("hidden")
            }, t.prototype.showSpinner = function () {
                return this.$loadingMoreButton.addClass("hidden"), this.$loadingSpinner.removeClass("hidden")
            }, t
        }()
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["templates/activity"] = function (obj) {
            var __p = [];
            with(obj || {}) __p.push('<li>\n  <time class="activities-time pull-right" datetime="', new Date(time).toISOString(), '" title="', new Date(time).toISOString(), '">\n    ', $.timeago(time), "\n  </time>\n  <strong>", username, "</strong> ", message, "\n</li>\n");
            return __p.join("")
        }
    }.call(this),
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function (t) {
        function e() {
            var e = i(this),
                o = r.settings;
            return isNaN(e.datetime) || (0 == o.cutoff || s(e.datetime) < o.cutoff) && t(this).text(n(e.datetime)), this
        }

        function i(e) {
            if (e = t(e), !e.data("timeago")) {
                e.data("timeago", {
                    datetime: r.datetime(e)
                });
                var i = t.trim(e.text());
                r.settings.localeTitle ? e.attr("title", e.data("timeago").datetime.toLocaleString()) : !(i.length > 0) || r.isTime(e) && e.attr("title") || e.attr("title", i)
            }
            return e.data("timeago")
        }

        function n(t) {
            return r.inWords(s(t))
        }

        function s(t) {
            return (new Date).getTime() - t.getTime()
        }
        t.timeago = function (e) {
            return e instanceof Date ? n(e) : "string" == typeof e ? n(t.timeago.parse(e)) : "number" == typeof e ? n(new Date(e)) : n(t.timeago.datetime(e))
        };
        var r = t.timeago;
        t.extend(t.timeago, {
            settings: {
                refreshMillis: 6e4,
                allowFuture: !1,
                localeTitle: !1,
                cutoff: 0,
                strings: {
                    prefixAgo: null,
                    prefixFromNow: null,
                    suffixAgo: "ago",
                    suffixFromNow: "from now",
                    seconds: "less than a minute",
                    minute: "about a minute",
                    minutes: "%d minutes",
                    hour: "about an hour",
                    hours: "about %d hours",
                    day: "a day",
                    days: "%d days",
                    month: "about a month",
                    months: "%d months",
                    year: "about a year",
                    years: "%d years",
                    wordSeparator: " ",
                    numbers: []
                }
            },
            inWords: function (e) {
                function i(i, s) {
                    var r = t.isFunction(i) ? i(s, e) : i,
                        o = n.numbers && n.numbers[s] || s;
                    return r.replace(/%d/i, o)
                }
                var n = this.settings.strings,
                    s = n.prefixAgo,
                    r = n.suffixAgo;
                this.settings.allowFuture && 0 > e && (s = n.prefixFromNow, r = n.suffixFromNow);
                var o = Math.abs(e) / 1e3,
                    a = o / 60,
                    l = a / 60,
                    u = l / 24,
                    c = u / 365,
                    h = 45 > o && i(n.seconds, Math.round(o)) || 90 > o && i(n.minute, 1) || 45 > a && i(n.minutes, Math.round(a)) || 90 > a && i(n.hour, 1) || 24 > l && i(n.hours, Math.round(l)) || 42 > l && i(n.day, 1) || 30 > u && i(n.days, Math.round(u)) || 45 > u && i(n.month, 1) || 365 > u && i(n.months, Math.round(u / 30)) || 1.5 > c && i(n.year, 1) || i(n.years, Math.round(c)),
                    d = n.wordSeparator || "";
                return void 0 === n.wordSeparator && (d = " "), t.trim([s, h, r].join(d))
            },
            parse: function (e) {
                var i = t.trim(e);
                return i = i.replace(/\.\d+/, ""), i = i.replace(/-/, "/").replace(/-/, "/"), i = i.replace(/T/, " ").replace(/Z/, " UTC"), i = i.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"), new Date(i)
            },
            datetime: function (e) {
                var i = r.isTime(e) ? t(e).attr("datetime") : t(e).attr("title");
                return r.parse(i)
            },
            isTime: function (e) {
                return "time" === t(e).get(0).tagName.toLowerCase()
            }
        });
        var o = {
            init: function () {
                var i = t.proxy(e, this);
                i();
                var n = r.settings;
                n.refreshMillis > 0 && setInterval(i, n.refreshMillis)
            },
            update: function (i) {
                t(this).data("timeago", {
                    datetime: r.parse(i)
                }), e.apply(this)
            },
            updateFromDOM: function () {
                t(this).data("timeago", {
                    datetime: r.parse(r.isTime(this) ? t(this).attr("datetime") : t(this).attr("title"))
                }), e.apply(this)
            }
        };
        t.fn.timeago = function (t, e) {
            var i = t ? o[t] : o.init;
            if (!i) throw new Error("Unknown function name '" + t + "' for timeago");
            return this.each(function () {
                i.call(this, e)
            }), this
        }, document.createElement("abbr"), document.createElement("time")
    }),
    function () {
        window.TabSelector = {
            init: function () {
                var t, e, i, n, s, r, o, a, l, u, c, h, d;
                return o = $("#tool-button"), i = $("#disqus-button"), s = $("#team-note-button"), t = $("#activities-button"), a = $("#tool-tab"), n = $("#disqus-tab"), r = $("#team-note-tab"), e = $("#activities-tab"), c = [o, i, s, t], d = [a, n, r, e], e.length > 0 && (u = this.initActivity(e)), h = function () {
                    var t, e, i, n, s, r, o;
                    for (i = 0, s = c.length; s > i; i++) t = c[i], t.removeClass("active");
                    for (o = [], n = 0, r = d.length; r > n; n++) e = d[n], o.push(e.addClass("hidden"));
                    return o
                }, l = function (t, e) {
                    return t.addClass("active"), e.removeClass("hidden")
                }, o.click(function () {
                    return h(), l(o, a)
                }), i.click(function () {
                    return h(), l(i, n)
                }), s.click(function () {
                    return h(), l(s, r)
                }), t.click(function () {
                    return h(), l(t, e), u.init()
                })
            },
            initActivity: function (t) {
                return new ActivityController(t, t.data("media-resource-id"))
            }
        }
    }.call(this),
    function () {
        window.AnalyticsHelper = function () {
            function t(t) {
                this.category = t, this.trackLink()
            }
            return t.prototype.trackLink = function () {
                var t;
                return t = this.category, $("a[data-event-label]").on("click", function (e) {
                    var i, n, s;
                    return e.preventDefault(), n = "click", i = $(this).data("event-label"), ga("send", "event", t, n, i), s = $(this).attr("href"), null != s && "#" !== s ? "_blank" === this.target ? window.open(s, this.target) : window.location.href = s : void 0
                })
            }, t
        }()
    }.call(this),
    function () {
        $(function () {
            return window.documentIsReady = !0, window.isSignedIn = null != $.cookie("subber_username")
        }), window.onerror = function (t, e, i) {
            return $.post("/javascript_error", {
                error: t,
                file: e,
                location: window.location.href,
                lineNumber: i,
                documentReady: window.documentIsReady,
                ua: navigator.userAgent,
                userSignedIn: window.isSignedIn
            })
        }, window.logging_to_server = function (t, e) {
            return $.post("/javascript_log", {
                label: t,
                message: e
            })
        }, window.statd_increment = function (t) {
            return $.post("/statd_increment", {
                label: t
            })
        }
    }.call(this),
    function () {
        window.App = {}
    }.call(this),
    function () {
        window.parseResponse = function (t) {
            return t
        }
    }.call(this),
    function () {
        window.SubtitlerPage = {
            titleForTechName: {
                dailymotion: "Dailymotion",
                youtube: "Youtube",
                html5: "HTML5",
                flash: "Flash"
            },
            init: function () {
                var t, e, i;
                return t = $("#overlay"), e = _V_("subber_player"), i = new UrlParser(window.location.href), this.initCheckingVideoValidation(e, t), this.initKeyboardPopup(e, t), this.initIntroPopup(e, t), this.initBrowserSupport(t), this.initInactivityChecker(i, e, t), this.initLanguageSelection(i), this.initSettingMenu(), this.initUnlockSubtitle(), this.initToolTips(), this.initPlayerType(i, e), this.initFpsSelector(i), TabSelector.init()
            },
            initSettingMenu: function () {
                var t, e;
                return t = $("#setting_button"), e = $("#setting_menu"), t.bind("click", function () {
                    return e.hasClass("hide") ? (t.addClass("active"), e.removeClass("hide")) : (t.removeClass("active"), e.addClass("hide")), !1
                })
            },
            initLanguageSelection: function (t) {
                return $("#language_code").change(function () {
                    return t.setParams("language_code", $("#language_code").val()), Window.setHref(t.getUrl())
                })
            },
            initUnlockSubtitle: function () {
                return $("#unlock-subtitle").bind("click", function () {
                    var t = this;
                    return $.ajax({
                        url: $(this).data("uri"),
                        type: "put",
                        success: function () {
                            var e;
                            return e = new Message("success", "successfully unlock video for subtitlers", 3e3), e.show(), $(t).hide()
                        }
                    })
                })
            },
            initToolTips: function () {
                var t, e, i;
                i = [];
                for (t in toolTips) e = toolTips[t], i.push(new ToolTip(t, $("#" + e.target), e.messages, e.top, e.left));
                return i
            },
            initKeyboardPopup: function (t, e) {
                var i;
                return i = new Popup({
                    container: $("#shortcuts-pop"),
                    openLink: $("#showkeyboard"),
                    overlay: e
                }), i.onOpenPopup(function () {
                    return t.pause()
                }), new Shortcut({
                    keyCodes: [191],
                    shiftKey: !0,
                    caller: i,
                    callback: i.show
                })
            },
            initBrowserSupport: function (t) {
                var e;
                return BrowserCheck.isValid() || (e = new Popup({
                    container: $("#unsupported-popup"),
                    overlay: t
                }), e.show()), "Mac" === BrowserCheck.OS ? $(".for-pc").hide() : $(".for-mac").hide()
            },
            initCheckingVideoValidation: function (t, e) {
                return t.addEvent("invalidvideo", function () {
                    var t;
                    return t = new Popup({
                        type: "Error",
                        message: messages.invalid_video,
                        overlay: e
                    }), t.show()
                })
            },
            initIntroPopup: function (t, e) {
                var i, n;
                return n = new App.User, i = new window.IntroPopup({
                    overlay: e,
                    user: n
                }), i.onOpenPopup(function () {
                    return t.pause()
                }), n.isNewUser ? i.show() : void 0
            },
            initInactivityChecker: function (t, e, i) {
                var n;
                return n = new InactivityChecker(t.getBaseUrl(), i), n.onOpenPopup(function () {
                    return e.pause()
                }), n.submitInactivityTimeout()
            },
            initFpsSelector: function (t) {
                var e;
                return e = $("#mpp"), e.change(function () {
                    return t.setParams("mpp", e.val()), Window.setHref(t.getUrl())
                })
            },
            initPlayerType: function (t, e) {
                return new PlayerSelectionLink($("#player-selection"), e, window.location.href).render()
            }
        }
    }.call(this),
    function () {
        window.Heapsort = function () {
            function t(t, e) {
                this.source = null != t ? t : [], this.creteria = e
            }
            return t.prototype.source = null, t.prototype.siftDown = function (t, e) {
                var i, n;
                for (n = t; e >= 2 * n + 1;) {
                    if (i = 2 * n + 1, e >= i + 1 && this.valueOf(i) > this.valueOf(i + 1) && i++, !(this.valueOf(i) < this.valueOf(n))) return;
                    this.swap(n, i), n = i
                }
            }, t.prototype.siftUp = function (t, e) {
                var i, n;
                for (i = e; i > t;) {
                    if (n = Math.floor((i - 1) / 2), !(this.valueOf(n) > this.valueOf(i))) return;
                    this.swap(n, i), i = n
                }
            }, t.prototype.add = function (t) {
                return this.source.push(t), this.siftUp(0, this.source.length - 1)
            }, t.prototype.remove = function () {
                var t;
                return t = void 0, 1 === this.source.length ? t = this.source.pop() : this.source.length > 1 && (t = this.source[0], this.source[0] = this.source.pop(), this.siftDown(0, this.source.length - 1)), t
            }, t.prototype.sortedList = function () {
                var t, e, i;
                for (t = $.extend(!0, [], this.source), i = this.source.length, e = []; this.source.length > 0;) e.push(this.remove());
                return this.source = t, e
            }, t.prototype.swap = function (t, e) {
                var i;
                return i = this.source[t], this.source[t] = this.source[e], this.source[e] = i
            }, t.prototype.valueOf = function (t) {
                return this.creteria ? this.source[t].get(this.creteria) : this.source[t]
            }, t
        }()
    }.call(this),
    function () {
        window.Shortcut = function () {
            function t(t) {
                var e, i, n, s;
                for (this.keyCodes = t.keyCodes, this.ctrlKey = t.ctrlKey === !0, this.metaKey = t.metaKey === !0, this.shiftKey = t.shiftKey === !0, this.altKey = null != t.altKey, this.caller = t.caller, this.callback = t.callback, this.toggle = t.toggle, this.callbackForOff = t.callbackForOff, i = this.buildEventNames(), n = 0, s = i.length; s > n; n++) e = i[n], $(document).bind(e, $.proxy(this.fire, this))
            }
            return t.prototype.keyCodes = [], t.prototype.metaKey = !1, t.prototype.ctrlKey = !1, t.prototype.shiftKey = !1, t.prototype.altKey = !1, t.prototype.caller = null, t.prototype.callback = null, t.prototype.toggle = null, t.prototype.callbackForOff = null, t.prototype.buildEventNames = function () {
                var t, e, i, n, s, r;
                for (i = "", this.shiftKey && (i += "::shift"), this.metaKey && (i += "::meta"), this.ctrlKey && (i += "::ctrl"), this.altKey && (i += "::alt"), t = [], r = this.keyCodes, n = 0, s = r.length; s > n; n++) e = r[n], t.push("shortcut::" + e + i);
                return t
            }, t.prototype.fire = function (t) {
                return null == this.toggle || this.toggle.call(this.caller) ? this.callback.call(this.caller, t) : this.callbackForOff.call(this.caller, t)
            }, t.unbindFor = function (t) {
                var e, i, n, s, r;
                for (i = t.keyCodes, r = [], n = 0, s = i.length; s > n; n++) e = i[n], r.push($(document).unbind(window.Shortcut.buildEventNameFor($.extend(t, {
                    keyCode: e
                }))));
                return r
            }, t.buildEventNameFor = function (t) {
                var e;
                return e = "", t.shiftKey && (e += "::shift"), t.metaKey && (e += "::meta"), t.ctrlKey && (e += "::ctrl"), t.altKey && (e += "::alt"), "shortcut::" + t.keyCode + e
            }, t.init = function () {
                return $(document).unbind("keydown", $.proxy(this.keyEvent, this)), $(document).bind("keydown", $.proxy(this.keyEvent, this))
            }, t.allowedKeysInTextarea = function () {
                return [$.ui.keyCode.UP, $.ui.keyCode.DOWN, $.ui.keyCode.ENTER, $.ui.keyCode.TAB, $.ui.keyCode.ESCAPE]
            }, t.keyEvent = function (t) {
                var e, i;
                if (!$("textarea").is(":focus") || null != _.detect(this.allowedKeysInTextarea(), function (e) {
                    return t.keyCode === e
                })) return i = window.Shortcut.buildEventNameFor(t), e = _.detect($._data(document, "events"), function (t) {
                    return null != t ? t[0].type === i : void 0
                }), null != e ? ($(document).trigger(i), !1) : void 0
            }, t
        }(), window.Shortcut.init()
    }.call(this),
    function () {
        window.type = function (t) {
            var e, i, n, s, r, o;
            if (void 0 === t || null === t) return String(t);
            for (e = new Object, o = "Boolean Number String Function Array Date RegExp".split(" "), s = 0, r = o.length; r > s; s++) n = o[s], e["[object " + n + "]"] = n.toLowerCase();
            return i = Object.prototype.toString.call(t), i in e ? e[i] : "object"
        }
    }.call(this),
    function () {
        var t, e = {}.hasOwnProperty,
            i = function (t, i) {
                function n() {
                    this.constructor = t
                }
                for (var s in i) e.call(i, s) && (t[s] = i[s]);
                return n.prototype = i.prototype, t.prototype = new n, t.__super__ = i.prototype, t
            };
        window.Segment = function (e) {
            function n() {
                return t = n.__super__.constructor.apply(this, arguments)
            }
            return i(n, e), n.prototype.minimumLength = 100, n.prototype.subtitle = null, n.prototype.baseUrl = null, n.prototype.defaults = {
                saved: !1,
                activated: !1,
                invalid: !1,
                original: {}
            }, n.prototype.initialize = function () {
                return this.on("destroy", this.destroySubtitle), this.on("sync", this.afterSync)
            }, n.prototype.length = function () {
                return this.get("end_time") - this.get("start_time")
            }, n.prototype.isIncluded = function (t) {
                return this.get("start_time") <= t && t <= this.get("end_time")
            }, n.prototype.canSplitWith = function (t) {
                var e, i;
                return i = this.get("start_time"), e = this.get("end_time"), t > i && e > t ? t - i < this.minimumLength ? !1 : e - t < this.minimumLength ? !1 : !0 : !1
            }, n.prototype.setStartTime = function (t) {
                return this.set({
                    start_time: this.roundTime(t),
                    saved: !1
                })
            }, n.prototype.setEndTime = function (t) {
                return this.set({
                    end_time: this.roundTime(t),
                    saved: !1
                })
            }, n.prototype.setTime = function (t, e) {
                return this.set({
                    start_time: this.roundTime(t),
                    end_time: this.roundTime(e),
                    saved: !1
                })
            }, n.prototype.validate = function (t) {
                var e, i;
                if (t.start_time < segments.startTimeInMillisecond()) return "can't start before video start time";
                if (null != segments.endTimeInMillisecond() && t.end_time > segments.endTimeInMillisecond()) return "can't end before video end time";
                if (t.end_time - t.start_time < this.minimumLength) return "can't be shorter than 100ms";
                if (t.start_time !== this.get("start_time") || t.end_time !== this.get("end_time")) return t.start_time > t.end_time ? "can't end before it starts" : (e = segments.nextSegment(this), i = segments.prevSegment(this), null != e && t.end_time > e.get("start_time") || null != i && t.start_time < i.get("end_time") ? "can't be overlapped" : void 0)
            }, n.prototype.createSubtitle = function () {
                var t;
                return this.subtitle = new Subtitle, this.subtitle.segment = this, this.get("id") && (this.subtitle.setUrlRoot(this), this.set({
                    original: {
                        start_time: this.get("start_time"),
                        end_time: this.get("end_time")
                    }
                })), this.on("change:id", this.subtitle.setUrlRoot, this.subtitle), t = {}, this.get("subtitle_id") && (t = {
                    id: this.get("subtitle_id"),
                    content: null === this.get("subtitle_content") ? "" : this.get("subtitle_content")
                }), t.language_code = this.get("subtitle_language_code"), t.saved = !0, this.subtitle.set(t)
            }, n.prototype.destroySubtitle = function () {
                return this.subtitle ? this.subtitle.destroy_without_sync() : void 0
            }, n.prototype.refetch = function (t) {
                var e;
                return null == t && (t = {}), null != this.get("id") ? this.fetch(t) : (e = {
                    url: this.url() + "/fetch",
                    type: "get",
                    data: this.attributesSlice(["start_time", "end_time"]),
                    context: this,
                    success: function (e) {
                        return this.set({
                            id: e.id,
                            start_time: e.start_time,
                            end_time: e.end_time,
                            saved: !0
                        }), null != t.success ? t.success(e) : void 0
                    },
                    error: function (e) {
                        return null != t.error ? t.error(this, e) : void 0
                    }
                }, null != t.timeout && (e.timeout = t.timeout), $.ajax(e))
            }, n.prototype.afterSync = function (t) {
                return t.set({
                    saved: !0,
                    invalid: !1
                })
            }, n.prototype.toString = function () {
                return "(" + this.id + ") " + this.get("start_time") + "-" + this.get("end_time")
            }, n.prototype.attributesSlice = function (t) {
                var e, i, n, s;
                for (i = {}, n = 0, s = t.length; s > n; n++) e = t[n], i[e] = this.get(e);
                return i
            }, n.prototype.roundTime = function (t) {
                return 100 * Math.floor(t / 100)
            }, n
        }(Backbone.Model)
    }.call(this),
    function () {
        var t, e = {}.hasOwnProperty,
            i = function (t, i) {
                function n() {
                    this.constructor = t
                }
                for (var s in i) e.call(i, s) && (t[s] = i[s]);
                return n.prototype = i.prototype, t.prototype = new n, t.__super__ = i.prototype, t
            };
        window.Subtitle = function (e) {
            function n() {
                return t = n.__super__.constructor.apply(this, arguments)
            }
            return i(n, e), n.prototype.segment = null, n.prototype.defaults = {
                content: "",
                saved: !1
            }, n.prototype.setUrlRoot = function (t) {
                return this.urlRoot = t.url() + "/subtitles"
            }, n.prototype.preview = function () {
                var t, e;
                return e = 10, t = this.get("content"), null != t && t.length >= e ? this.get("content").substring(0, e) + "..." : this.get("content")
            }, n.prototype.destroy_without_sync = function () {
                return this.id = null, this.destroy()
            }, n
        }(Backbone.Model)
    }.call(this),
    function () {
        var t, e = {}.hasOwnProperty,
            i = function (t, i) {
                function n() {
                    this.constructor = t
                }
                for (var s in i) e.call(i, s) && (t[s] = i[s]);
                return n.prototype = i.prototype, t.prototype = new n, t.__super__ = i.prototype, t
            };
        window.SubbingTool = function (e) {
            function n() {
                return t = n.__super__.constructor.apply(this, arguments)
            }
            return i(n, e), n.prototype.player = null, n.prototype.replayingSegment = null, n.prototype.intervalEventForReplaying = null, n.prototype.defaults = {
                segmentSelected: !1,
                isReplaying: !1
            }, n.prototype.initialize = function (t) {
                return this.player = t.player
            }, n.prototype.replaySegment = function (t) {
                return null != t ? (this.player.currentTime(Math.floor(t.get("start_time") / 100) / 10), this.replayingSegment = t, this.player.play(), this.intervalEventForReplaying && clearInterval(this.intervalEventForReplaying), this.intervalEventForReplaying = setInterval($.proxy(this.checkEndTimeOfReplayingSegment, this), 42)) : void 0
            }, n.prototype.checkEndTimeOfReplayingSegment = function () {
                var t;
                return t = this.currentTimeInMilliSecond(), this.replayingSegment && null != this.replayingSegment && this.replayingSegment.get("end_time") <= t ? (this.replayingSegment = null, this.player.pause(), this.player.triggerEvent("timeupdate"), clearInterval(this.intervalEventForReplaying)) : void 0
            }, n.prototype.currentTimeInMilliSecond = function () {
                return Math.floor(1e3 * this.player.currentTime())
            }, n
        }(Backbone.Model)
    }.call(this),
    function () {
        var t, e = {}.hasOwnProperty,
            i = function (t, i) {
                function n() {
                    this.constructor = t
                }
                for (var s in i) e.call(i, s) && (t[s] = i[s]);
                return n.prototype = i.prototype, t.prototype = new n, t.__super__ = i.prototype, t
            };
        window.VideoController = function (e) {
            function n() {
                return t = n.__super__.constructor.apply(this, arguments)
            }
            return i(n, e), n
        }(Backbone.Model)
    }.call(this),
    function () {
        App.User = function () {
            function t() {
                var t;
                t = $("#user_info"), this.isVisitor = t.data("visitor"), this.isNewUser = t.data("new-user") && !$.cookie("hasVisited")
            }
            var e, i;
            return i = !1, e = !1, t.prototype.markAsNotNewUser = function () {
                return this.isNewUser = !1, $.cookie("hasVisited", !0)
            }, t
        }()
    }.call(this),
    function () {
        var t, e = {}.hasOwnProperty,
            i = function (t, i) {
                function n() {
                    this.constructor = t
                }
                for (var s in i) e.call(i, s) && (t[s] = i[s]);
                return n.prototype = i.prototype, t.prototype = new n, t.__super__ = i.prototype, t
            };
        window.SegmentView = function (e) {
            function n() {
                return t = n.__super__.constructor.apply(this, arguments)
            }
            return i(n, e), n.prototype.tagName = "li", n.prototype.className = "segment", n.prototype.collection = null, n.prototype.events = {
                click: "select",
                resize: "updateTime",
                "click .delete-segment": "removeFormList",
                "click .replay-segment": "replaySegment"
            }, n.prototype.initialize = function (t) {
                return null == t && (t = {}), _.bindAll(this, "render", "remove", "removeFormList", "updateSize", "toggleActivation", "toggleDrawing", "toggleInvalidation"), this.listenTo(this.model, "change:start_time", this.updateSize), this.listenTo(this.model, "change:end_time", this.updateSize), this.listenTo(this.model, "change:activated", this.toggleActivation), this.listenTo(this.model, "change:drawing", this.toggleDrawing), this.listenTo(this.model, "change:invalid", this.toggleInvalidation), this.listenTo(this.model, "invalid", this.updateSize), this.listenTo(this.model, "destroy", this.remove), this.listenTo(this.model, "sync", this.render), this.collection = t.collection, this.subbingTool = t.subbingTool
            }, n.prototype.render = function () {
                return this.updateSize(), 0 === this.$("em").length && this.$el.html(JST["templates/segment"]()), this
            }, n.prototype.select = function () {
                return this.collection.getSelected() !== this.model ? this.collection.select(this.model) : void 0
            }, n.prototype.expandFromLeftWithAdjacent = function () {
                return this.collection.updateWithAdjacentSegment(this.model, {
                    start_time: this.model.get("start_time") - 100
                })
            }, n.prototype.contractFromLeftWithAdjacent = function () {
                return this.collection.updateWithAdjacentSegment(this.model, {
                    start_time: this.model.get("start_time") + 100
                })
            }, n.prototype.expandFromRightWithAjacent = function () {
                return this.collection.updateWithAdjacentSegment(this.model, {
                    end_time: this.model.get("end_time") + 100
                })
            }, n.prototype.contractFromRightWithAjacent = function () {
                return this.collection.updateWithAdjacentSegment(this.model, {
                    end_time: this.model.get("end_time") - 100
                })
            }, n.prototype.updateSize = function () {
                return this.$el.attr("style", "left: " + this.getLeft() + "px; width: " + this.getWidth() + "px;")
            }, n.prototype.removeFormList = function () {
                return this.collection.deleteSelected(), !1
            }, n.prototype.replaySegment = function () {
                return this.subbingTool.replaySegment(this.model), !1
            }, n.prototype.updateTime = function () {
                var t, e;
                return e = this.pixelToMillisecond(this.$el.position().left), t = 100 * Math.floor((e + this.pixelToMillisecond(this.$el.width())) / 100), e = 100 * Math.ceil(e / 100), this.model.set({
                    start_time: e,
                    end_time: t,
                    saved: !1
                }, {
                    validate: !0
                })
            }, n.prototype.toggleActivation = function () {
                return this.model.get("activated") ? (this.$el.addClass("selected"), this.enableResizable(), this.bindKeyEvent()) : (this.$el.removeClass("selected"), this.disableResizable(), this.unbindKeyEvent())
            }, n.prototype.toggleDrawing = function () {
                return this.model.get("drawing") ? this.$el.addClass("new") : this.$el.removeClass("new")
            }, n.prototype.toggleInvalidation = function () {
                return this.model.get("invalid") ? this.$el.addClass("error") : this.$el.removeClass("error")
            }, n.prototype.enableResizable = function () {
                return this.$el.hasClass("ui-resizable") || this.$el.resizable({
                    handles: "e, w"
                }), this.$el.resizable({
                    disabled: !1
                })
            }, n.prototype.disableResizable = function () {
                return this.$el.hasClass("ui-resizable") ? this.$el.resizable({
                    disabled: !0
                }) : void 0
            }, n.prototype.unbindKeyEvent = function () {
                return _.each([$.ui.keyCode.LEFT, $.ui.keyCode.RIGHT, $.ui.keyCode.UP, $.ui.keyCode.DOWN], function (t) {
                    return Shortcut.unbindFor({
                        keyCodes: [t],
                        ctrlKey: !0
                    }), Shortcut.unbindFor({
                        keyCodes: [t],
                        metaKey: !0
                    })
                })
            }, n.prototype.bindKeyEvent = function () {
                return new Shortcut({
                    keyCodes: [$.ui.keyCode.LEFT],
                    ctrlKey: !0,
                    caller: this,
                    callback: this.expandFromLeftWithAdjacent
                }), new Shortcut({
                    keyCodes: [$.ui.keyCode.RIGHT],
                    ctrlKey: !0,
                    caller: this,
                    callback: this.contractFromLeftWithAdjacent
                }), new Shortcut({
                    keyCodes: [$.ui.keyCode.UP],
                    ctrlKey: !0,
                    caller: this,
                    callback: this.expandFromRightWithAjacent
                }), new Shortcut({
                    keyCodes: [$.ui.keyCode.DOWN],
                    ctrlKey: !0,
                    caller: this,
                    callback: this.contractFromRightWithAjacent
                }), new Shortcut({
                    keyCodes: [$.ui.keyCode.LEFT],
                    metaKey: !0,
                    caller: this,
                    callback: this.expandFromLeftWithAdjacent
                }), new Shortcut({
                    keyCodes: [$.ui.keyCode.RIGHT],
                    metaKey: !0,
                    caller: this,
                    callback: this.contractFromLeftWithAdjacent
                }), new Shortcut({
                    keyCodes: [$.ui.keyCode.UP],
                    metaKey: !0,
                    caller: this,
                    callback: this.expandFromRightWithAjacent
                }), new Shortcut({
                    keyCodes: [$.ui.keyCode.DOWN],
                    metaKey: !0,
                    caller: this,
                    callback: this.contractFromRightWithAjacent
                })
            }, n.prototype.getWidth = function () {
                var t, e;
                return e = this.model.get("start_time"), t = this.model.get("end_time"), Math.floor(this.millisecondToPixel(t - e))
            }, n.prototype.getLeft = function () {
                return Math.ceil(this.millisecondToPixel(this.model.get("start_time")))
            }, n.prototype.millisecondToPixel = function (t) {
                return 30 * t / 1e3
            }, n.prototype.pixelToMillisecond = function (t) {
                return 1e3 * t / 30
            }, n
        }(Backbone.View)
    }.call(this),
    function () {
        var t, e = {}.hasOwnProperty,
            i = function (t, i) {
                function n() {
                    this.constructor = t
                }
                for (var s in i) e.call(i, s) && (t[s] = i[s]);
                return n.prototype = i.prototype, t.prototype = new n, t.__super__ = i.prototype, t
            };
        window.SegmentBarView = function (e) {
            function n() {
                return t = n.__super__.constructor.apply(this, arguments)
            }
            return i(n, e), n.prototype.player = null, n.prototype.intervalForPosition = null, n.prototype.intervalForSegmenting = null, n.prototype.newSegment = null, n.prototype.nextOfNewSegment = null, n.prototype.autosaveInterval = 6e4, n.prototype.rangeForClosestSegment = 17e3, n.prototype.defaultMillisecondPerPixel = 42, n.prototype.minimumLengthOfSegment = 100, n.prototype.offsetForTimeline = 0, n.prototype.initialize = function (t) {
                return null == t && (t = {}), _.bindAll(this, "render", "reloadTool", "toggleSegmentButtons"), this.collection.bind("reset", this.render), this.collection.bind("authenticationError", this.reloadTool), this.collection.bind("permissionError", this.showErrorPopup), this.model.bind("change:segmentSelected", this.toggleSegmentButtons), this.subtitles = t.subtitles, this.videoController = t.videoController, this.millisecondPerPixel = null != t.mpp ? parseInt(t.mpp) : this.defaultMillisecondPerPixel, this.initVariablesForElement(), this.initAutosaveTimer(), this.initFactories(), this.prepareKeyboardShortcut(), this.initEventsForButtons(), this.initEventsForPlayer(), this.initEventsForPosition(), this.initOffsetForTimeline()
            }, n.prototype.initEventsForButtons = function () {
                return $("#start-segment").bind("click", $.proxy(this.startSegment, this)), $("#end-segment").bind("click", $.proxy(this.stopSegment, this)), $("#save-changes").bind("click", $.proxy(this.syncSegments, this))
            }, n.prototype.initEventsForPlayer = function () {
                return this.player = this.model.player, this.player.addEvent("play", $.proxy(this.afterPlay, this)), this.player.addEvent("pause", $.proxy(this.afterPause, this)), this.player.addEvent("timeupdate", $.proxy(this.updatePosition, this)), this.player.addEvent("seeking", $.proxy(this.disableAllButtons, this)), this.player.addEvent("seeked", $.proxy(this.enableAllButtons, this))
            }, n.prototype.initEventsForPosition = function () {
                return this.on("positionupdate", $.proxy(this.updateCurrentTimeSegment, this)), this.on("positionupdate", $.proxy(this.toggleSegmentButton, this)), this.on("positionupdate", $.proxy(this.toggleSubtitleInputBox, this))
            }, n.prototype.initFactories = function () {
                return this.segmentViewFactory = new SegmentViewFactory(this.collection, this.model, originLanguage.code), this.subtitleViewFactory = new SubtitleViewFactory(this.subtitles)
            }, n.prototype.initVariablesForElement = function () {
                return this.segmentsOnView = $("#segments"), this.subtitlesOnView = $("#subtitles"), this.waveformOnView = $("#waveform"), this.timescalesOnView = $("#timescales"), this.timelinesOnView = $("#timelines"), this.spinner = $(".timeframe-spinner")
            }, n.prototype.initOffsetForTimeline = function () {
                var t, e, i;
                return e = this.collection.startTimeInMillisecond(), i = Math.floor(30 * (e / 1e3)), t = Math.floor(30 * ((e - 5e3 * parseInt(e / 5e3)) / 1e3)), this.offsetForTimeline = i - t
            }, n.prototype.render = function () {
                var t, e;
                return t = document.createDocumentFragment(), e = document.createDocumentFragment(), this.collection.each($.proxy(function (i) {
                    var n, s;
                    return n = this.segmentViewFactory.createWithSegment(i), null != n ? (s = this.subtitleViewFactory.createWithSubtitle(i.subtitle), t.appendChild(n.render().el), e.appendChild(s.render().el)) : void 0
                }, this)), this.segmentsOnView[0].appendChild(t), this.subtitlesOnView[0].appendChild(e), this
            }, n.prototype.updatePosition = function () {
                var t, e;
                return t = this.model.currentTimeInMilliSecond(), e = Math.floor(30 * (t / 1e3)), this.segmentsOnView.css("left", -e + "px"), this.waveformOnView.css("left", -e + "px"), this.timescalesOnView.css("background-position", this.offsetForTimeline - e + "px"), this.timelinesOnView.css("left", this.offsetForTimeline - e + "px"), this.trigger("positionupdate")
            }, n.prototype.updateCurrentTimeSegment = function () {
                return this.currentTimeSegment_ = this.collection.findByTime(this.model.currentTimeInMilliSecond())
            }, n.prototype.updateNewSegment = function (t) {
                return null != t ? (this.newSegment = t, this.nextOfNewSegment = this.collection.nextSegment(t)) : this.newSegment = this.nextOfNewSegment = null
            }, n.prototype.toggleSegmentButton = function () {
                var t;
                return t = this.currentTimeSegment(), null != t && t.get("end_time") > this.model.currentTimeInMilliSecond() || !this.videoController.get("playable") ? this.videoController.set({
                    segmentable: !1
                }) : this.videoController.set({
                    segmentable: !0
                })
            }, n.prototype.disableAllButtons = function () {
                return this.videoController.set({
                    playable: !1,
                    segmentable: !1
                }), this.spinner.show()
            }, n.prototype.enableAllButtons = function () {
                return this.videoController.set({
                    playable: !0
                }), this.toggleSegmentButton(), this.spinner.hide()
            }, n.prototype.toggleSubtitleInputBox = function () {
                return this.model.get("segmentSelected") ? this.showSelectedSubtitle() : this.showCurrentSubtitle()
            }, n.prototype.syncSegments = function () {
                return this.collection.saveAll(), this.subtitles.saveAll({
                    ignoreDependency: !0
                }), !1
            }, n.prototype.startSegment = function () {
                return this.updateCurrentTimeSegment(), this.videoController.get("segmentable") ? this.createSegment() : null != this.currentTimeSegment() && (this.player.pause(), this.splitSegment()), !1
            }, n.prototype.createSegment = function () {
                var t, e;
                return e = this.model.currentTimeInMilliSecond(), t = this.segmentViewFactory.create(e, e + this.minimumLengthOfSegment), null == t ? !1 : (this.segmentsOnView.append(t.render().el), t.model.set({
                    drawing: !0
                }), this.videoController.set({
                    segmenting: !0
                }), this.updateNewSegment(t.model), this.player.play(), this.intervalForSegmenting = setInterval($.proxy(this.updateSegment, this), this.millisecondPerPixel), !1)
            }, n.prototype.splitSegment = function () {
                var t, e, i, n, s;
                return e = this.model.currentTimeInMilliSecond(), t = this.currentTimeSegment(), i = t.get("end_time"), t.canSplitWith(e) ? (t.setEndTime(e), n = this.segmentViewFactory.create(e, i), s = this.subtitleViewFactory.create(n.model), this.segmentsOnView.append(n.render().el), this.subtitlesOnView.append(s.render().el)) : void 0
            }, n.prototype.stopSegment = function () {
                var t, e;
                return t = this.collection.getDrawing(), this.collection.stopDrawing(), e = this.subtitleViewFactory.create(t), this.subtitlesOnView.append(e.render().el), this.updateCurrentTimeSegment(), this.collection.select(t), this.player.pause(), this.videoController.set({
                    segmenting: !1
                }), this.model.set({
                    segmentSelected: !0
                }), this.updateNewSegment(null), clearInterval(this.intervalForSegmenting), !1
            }, n.prototype.cancelSegment = function () {
                var t;
                return t = this.collection.getDrawing(), null != t ? (this.collection.stopDrawing(), t.destroy(), this.updateCurrentTimeSegment(), this.videoController.set({
                    segmenting: !1
                }), this.updateNewSegment(null), clearInterval(this.intervalForSegmenting), !1) : void 0
            }, n.prototype.updateSegment = function () {
                var t, e, i, n;
                if (i = this.collection.getDrawing(), null != i) {
                    if (e = i.get("end_time"), t = this.model.currentTimeInMilliSecond(), n = this.nextOfNewSegment, t >= this.collection.endTimeInMillisecond()) return i.setEndTime(this.collection.endTimeInMillisecond()), this.stopSegment();
                    if (null != n && t >= n.get("start_time")) return i.setEndTime(n.get("start_time")), this.stopSegment();
                    if (t > e) return i.setEndTime(t)
                }
            }, n.prototype.currentTimeSegment = function () {
                return this.currentTimeSegment_
            }, n.prototype.cutSegment = function () {
                return this.isSegmenting() && this.stopSegment(), this.startSegment()
            }, n.prototype.isSegmenting = function () {
                return null != this.newSegment
            }, n.prototype.replayVideo = function () {
                var t;
                return t = this.collection.getSelected(), null != t ? this.model.replaySegment(t) : void 0
            }, n.prototype.afterPlay = function () {
                return this.videoController.set({
                    segmentable: !0
                }), this.intervalForPosition = setInterval($.proxy(this.updatePosition, this), this.millisecondPerPixel), this.model.replayingSegment ? void 0 : this.deselectSegment()
            }, n.prototype.afterPause = function () {
                return clearInterval(this.intervalForPosition)
            }, n.prototype.toggleSegmentButtons = function () {
                return this.model.get("segmentSelected") ? (this.showSelectedSubtitle(), this.player.pause()) : this.showCurrentSubtitle()
            }, n.prototype.showSelectedSubtitle = function () {
                var t;
                return t = this.collection.getSelected(), null != t ? this.subtitles.select(t.subtitle) : void 0
            }, n.prototype.showCurrentSubtitle = function () {
                return null != this.currentTimeSegment() ? this.subtitles.select(this.currentTimeSegment().subtitle) : this.deselectSegment()
            }, n.prototype.initAutosaveTimer = function () {
                return setInterval($.proxy(this.syncSegments, this), this.autosaveInterval)
            }, n.prototype.reloadTool = function () {
                return alert("You cannot segment because someone is currently segmenting this video. You can resume 10 minutes after someone has finished."), window.onbeforeunload = null, Window.reload()
            }, n.prototype.showErrorPopup = function () {
                return alert("You can't delete a segment that has subtitles in it. Please remove all subtitles before remove it")
            }, n.prototype.deselectSegment = function () {
                return this.subtitles.deselectAll(), this.collection.deselectAll()
            }, n.prototype.jumpToPrevSegment = function () {
                return this.collection.selectPrevSegment(), this.replayVideo()
            }, n.prototype.jumpToNextSegment = function () {
                return this.collection.selectNextSegment(), this.replayVideo()
            }, n.prototype.focusInSubtitle = function () {
                var t;
                return null != (t = this.collection.getSelected()) ? t.subtitle.trigger("focusIn") : void 0
            }, n.prototype.focusOutSubtitle = function () {
                var t;
                return null != (t = this.collection.getSelected()) ? t.subtitle.trigger("focusOut") : void 0
            }, n.prototype.selectClosestSegment = function () {
                return null == this.collection.getSelected() ? this.collection.selectByTime(this.model.currentTimeInMilliSecond(), this.rangeForClosestSegment) : void 0
            }, n.prototype.prepareKeyboardShortcut = function () {
                return new Shortcut({
                    keyCodes: [$.ui.keyCode.DELETE, $.ui.keyCode.BACKSPACE],
                    caller: this.collection,
                    callback: this.collection.deleteSelected
                }), new Shortcut({
                    keyCodes: [$.ui.keyCode.SPACE],
                    shiftKey: !0,
                    caller: this,
                    callback: this.cutSegment
                }), new Shortcut({
                    keyCodes: [$.ui.keyCode.SPACE],
                    caller: this,
                    callback: this.stopSegment,
                    toggle: this.isSegmenting,
                    callbackForOff: this.startSegment
                }), new Shortcut({
                    keyCodes: [$.ui.keyCode.ESCAPE],
                    caller: this,
                    callback: this.cancelSegment
                }), new Shortcut({
                    keyCodes: [$.ui.keyCode.TAB],
                    caller: this,
                    callback: this.jumpToNextSegment
                }), new Shortcut({
                    keyCodes: [$.ui.keyCode.TAB],
                    shiftKey: !0,
                    caller: this,
                    callback: this.jumpToPrevSegment
                }), new Shortcut({
                    keyCodes: [82],
                    caller: this,
                    callback: this.replayVideo
                }), new Shortcut({
                    keyCodes: [$.ui.keyCode.ENTER],
                    caller: this,
                    callback: this.syncSegments
                }), new Shortcut({
                    keyCodes: [83],
                    caller: this,
                    callback: this.selectClosestSegment
                }), new Shortcut({
                    keyCodes: [$.ui.keyCode.UP],
                    caller: this,
                    callback: this.focusInSubtitle
                }), new Shortcut({
                    keyCodes: [$.ui.keyCode.DOWN],
                    caller: this,
                    callback: this.focusOutSubtitle
                })
            }, n
        }(Backbone.View)
    }.call(this),
    function () {
        var t, e = {}.hasOwnProperty,
            i = function (t, i) {
                function n() {
                    this.constructor = t
                }
                for (var s in i) e.call(i, s) && (t[s] = i[s]);
                return n.prototype = i.prototype, t.prototype = new n, t.__super__ = i.prototype, t
            };
        window.SubtitleView = function (e) {
            function n() {
                return t = n.__super__.constructor.apply(this, arguments)
            }
            return i(n, e), n.prototype.tagName = "li", n.prototype.className = "subtitle", n.prototype.events = {
                "click textarea": "refocus",
                "focus textarea": "selectSegment",
                "blur textarea": "updateContent",
                "keydown textarea": "updateContent"
            }, n.prototype.initialize = function () {
                return _.bindAll(this, "render", "toggleVisibility", "remove", "focusInTextArea", "focusOutTextArea"), this.status = window.subtitleStatus, this.model.on("change:activated", this.toggleVisibility), this.model.on("destroy", this.remove), this.model.on("focusIn", this.focusInTextArea), this.model.on("focusOut", this.focusOutTextArea)
            }, n.prototype.render = function () {
                var t, e;
                return null != this.status && (e = "readonly"), t = "<textarea maxlength='120' class='direction-" + originLanguage.direction() + "' placeholder='" + this.placeholder() + "' " + e + ">", this.model.get("content").length > 0 && (t += this.model.get("content")), t += "</textarea>", this.$el.html(t), this.hide(), this
            }, n.prototype.hide = function () {
                return this.$el.addClass("hide"), this.$("textarea").is(":focus") ? this.$("textarea").blur() : void 0
            }, n.prototype.show = function () {
                return this.$el.removeClass("hide")
            }, n.prototype.toggleVisibility = function () {
                return this.model.get("activated") ? this.show() : this.hide()
            }, n.prototype.updateContent = function () {
                var t;
                return t = this.$("textarea").val().trim(), t !== this.model.get("content") ? 0 === t.length ? this.model.set({
                    content: "",
                    saved: !0
                }) : this.model.set({
                    content: t,
                    saved: !1
                }) : void 0
            }, n.prototype.refocus = function () {
                return "Firefox" === BrowserCheck.browser ? (this.$("textarea").blur(), this.$("textarea").focus()) : void 0
            }, n.prototype.focusInTextArea = function () {
                return this.$("textarea").is(":focus") ? void 0 : this.$("textarea").focus()
            }, n.prototype.focusOutTextArea = function () {
                return this.$("textarea").blur()
            }, n.prototype.selectSegment = function () {
                return segments.select(this.model.segment)
            }, n.prototype.placeholder = function () {
                return null != this.status ? "[" + originLanguage.name() + "] subtitle have been " + this.status : "Add [" + originLanguage.name() + "] subtitle"
            }, n
        }(Backbone.View)
    }.call(this),
    function () {
        var t, e = {}.hasOwnProperty,
            i = function (t, i) {
                function n() {
                    this.constructor = t
                }
                for (var s in i) e.call(i, s) && (t[s] = i[s]);
                return n.prototype = i.prototype, t.prototype = new n, t.__super__ = i.prototype, t
            };
        window.VideoControllerView = function (e) {
            function n() {
                return t = n.__super__.constructor.apply(this, arguments)
            }
            return i(n, e), n.prototype.initialize = function (t) {
                var e = this;
                return null == t && (t = {}), _.bindAll(this, "render", "togglePlayButtons", "toggleSegmentButtonStatus", "toggleSegmentButton"), this.player = t.player, this.startTime = null != t.startTime ? t.startTime : 0, this.endTime = null != t.endTime ? t.endTime : void 0, this.rewindButton = $("#rewind"), this.fastForwardButton = $("#fast_forward"), this.playButton = $("#play_button"), this.pauseButton = $("#pause_button"), this.segmentButton = $("#start-segment"), this.saveButton = $("#save-changes"), this.endSegmentButton = $("#end-segment"), this.model.on("change:playable", this.togglePlayButtons), this.model.on("change:segmentable", this.toggleSegmentButtonStatus), this.model.on("change:segmenting", this.toggleSegmentButton), this.playButton.bind("click", $.proxy(this.playVideo, this)), this.pauseButton.bind("click", $.proxy(this.pauseVideo, this)), this.rewindButton.bind("click", function () {
                    return e.seekFromCurrentTime(-1)
                }), this.fastForwardButton.bind("click", function () {
                    return e.seekFromCurrentTime(1)
                }), this.player.addEvent("play", $.proxy(this.afterPlay, this)), this.player.addEvent("pause", $.proxy(this.afterPause, this)), this.prepareShortcuts()
            }, n.prototype.togglePlayButtons = function () {
                return this.model.get("playable") ? (this.playButton.removeClass("inactive"), this.pauseButton.removeClass("inactive"), this.rewindButton.removeClass("inactive"), this.fastForwardButton.removeClass("inactive"), this.saveButton.removeClass("inactive")) : (this.playButton.addClass("inactive"), this.pauseButton.addClass("inactive"), this.rewindButton.addClass("inactive"), this.fastForwardButton.addClass("inactive"), this.saveButton.addClass("inactive"))
            }, n.prototype.toggleSegmentButtonStatus = function () {
                return this.model.get("segmentable") ? this.segmentButton.removeClass("inactive") : this.segmentButton.addClass("inactive")
            }, n.prototype.toggleSegmentButton = function () {
                return this.model.get("segmenting") ? (this.segmentButton.addClass("hide"), this.endSegmentButton.removeClass("hide")) : (this.segmentButton.removeClass("hide"), this.endSegmentButton.addClass("hide"))
            }, n.prototype.playerPaused = function () {
                return this.player.paused()
            }, n.prototype.playVideo = function () {
                return this.model.get("playable") && this.player.play(), !1
            }, n.prototype.pauseVideo = function () {
                return this.player.pause(), !1
            }, n.prototype.seekFromCurrentTime = function (t) {
                var e;
                return this.model.get("playable") ? (e = this.player.currentTime() + t, this.startTime > e ? !1 : null != this.endTime && this.endTime < e ? !1 : (this.player.currentTime(e), !1)) : !1
            }, n.prototype.afterPlay = function () {
                return this.playButton.addClass("hide"), this.pauseButton.removeClass("hide")
            }, n.prototype.afterPause = function () {
                return this.playButton.removeClass("hide"), this.pauseButton.addClass("hide")
            }, n.prototype.prepareShortcuts = function () {
                var t = this;
                return new Shortcut({
                    keyCodes: [70, 80],
                    caller: this,
                    callback: this.playVideo,
                    toggle: this.playerPaused,
                    callbackForOff: this.pauseVideo
                }), new Shortcut({
                    keyCodes: [37, 65],
                    caller: this,
                    callback: function () {
                        return t.seekFromCurrentTime(-1)
                    }
                }), new Shortcut({
                    keyCodes: [39, 68],
                    caller: this,
                    callback: function () {
                        return t.seekFromCurrentTime(1)
                    }
                }), new Shortcut({
                    keyCodes: [37],
                    shiftKey: !0,
                    caller: this,
                    callback: function () {
                        return t.seekFromCurrentTime(-.1)
                    }
                }), new Shortcut({
                    keyCodes: [39],
                    shiftKey: !0,
                    caller: this,
                    callback: function () {
                        return t.seekFromCurrentTime(.1)
                    }
                })
            }, n
        }(Backbone.View)
    }.call(this),
    function () {
        var t, e = {}.hasOwnProperty,
            i = function (t, i) {
                function n() {
                    this.constructor = t
                }
                for (var s in i) e.call(i, s) && (t[s] = i[s]);
                return n.prototype = i.prototype, t.prototype = new n, t.__super__ = i.prototype, t
            };
        window.Segments = function (e) {
            function n() {
                return t = n.__super__.constructor.apply(this, arguments)
            }
            return i(n, e), n.prototype.model = Segment, n.prototype.requestTimeout = 15e3, n.prototype.saving = !1, n.prototype.initialize = function (t) {
                return null == t && (t = {}), this.url = t.url, this.sortedSegments = new SortedSegments(this), this.unsavedSegments = new UnsavedSegments, this.savingMessage = new Message, this.deletingMessage = new Message, this.errorMessages = [], this.setStartTime(t.startTime), this.setEndTime(t.endTime), this.on("add", this.enqueueToUnsavedSegments, this), this.on("change:drawing", this.enqueueToUnsavedSegments, this), this.on("change:start_time", this.enqueueToUnsavedSegments, this), this.on("change:end_time", this.enqueueToUnsavedSegments, this), this.on("remove", this.dequeueToUnsavedSegments, this)
            }, n.prototype.getDrawing = function () {
                return null == this.drawingSegment && (this.drawingSegment = this.where({
                    drawing: !0
                })[0]), this.drawingSegment
            }, n.prototype.getSelected = function () {
                return null == this.selectedSegment && (this.selectedSegment = this.where({
                    activated: !0
                })[0]), this.selectedSegment
            }, n.prototype.getInvalid = function () {
                return this.where({
                    invalid: !0
                })[0]
            }, n.prototype.getUnsaved = function () {
                return this.where({
                    saved: !1
                })[0]
            }, n.prototype.saveAll = function () {
                var t = this;
                return this.unsavedSegments.moveToSavingQueue(), !this.savingSegment && this.unsavedSegments.savingQueue().length > 0 ? (this.beforeSave(), this.startSaving()) : null != this.where({
                    saved: !1,
                    drawing: !1
                })[0] ? _.each(this.where({
                    saved: !1,
                    drawing: !1
                }), function (e) {
                    return t.savingSegment !== e ? (logging_to_server("remained", e.attributes), t.enqueueToUnsavedSegments(e)) : void 0
                }) : void 0
            }, n.prototype.startSaving = function () {
                var t;
                return t = this.unsavedSegments.dequeueFromSavingQueue(), this.cancelSavingTimeout(), null == t ? (this.afterSave(), void 0) : t.isValid() ? this.get(t.cid) ? (this.savingSegment = t, this.saveSegment(t), this.startSavingTimeout(t)) : (this.startSaving(), void 0) : (this.afterFail(t, {
                    status: 403
                }), this.startSaving(), void 0)
            }, n.prototype.saveSegment = function (t, e) {
                var i;
                return null == e && (e = {}), i = {
                    success: $.proxy(this.afterSuccess, this),
                    error: $.proxy(this.afterFail, this),
                    complete: $.proxy(this.startSaving, this)
                }, e = _.extend(i, e), t.save({}, e)
            }, n.prototype.startSavingTimeout = function (t) {
                var e = this;
                return this.savingTimeout = setTimeout(function () {
                    return e.afterTimeout(t)
                }, this.requestTimeout)
            }, n.prototype.cancelSavingTimeout = function () {
                return clearTimeout(this.savingTimeout)
            }, n.prototype.deleteSelected = function () {
                var t, e = this;
                return t = this.getSelected(), null != t && (this.beforeDelete(), t.destroy({
                    wait: !0,
                    error: function (t, i) {
                        return 401 === i.status ? e.triggerAuthenticationError() : 403 === i.status ? e.triggerPermissionError() : (e.add(t), t.destroy())
                    },
                    success: $.proxy(this.afterDelete, this)
                })), subbingTool.set({
                    segmentSelected: !1
                })
            }, n.prototype.findByTime = function (t) {
                return this.sortedSegments.findByTime(t)
            }, n.prototype.getClosestSegmentFrom = function (t, e) {
                var i;
                return i = this.sortedSegments.closestSegmentFrom(t), null == e ? i : null != i && Math.abs(i.get("start_time") - t) <= e && Math.abs(i.get("end_time") - t) <= e ? i : null
            }, n.prototype.deselectAll = function () {
                return null != this.selectedSegment ? (this.selectedSegment.set({
                    activated: !1
                }), subbingTool.set({
                    segmentSelected: !1
                }), this.selectedSegment = null) : void 0
            }, n.prototype.select = function (t) {
                return t === this.selectedSegment || t.get("drawing") ? void 0 : (this.deselectAll(), this.selectedSegment = t, t.set({
                    activated: !0
                }), subtitles.select(t.subtitle), subbingTool.set({
                    segmentSelected: !0
                }))
            }, n.prototype.draw = function (t) {
                return this.drawingSegment = t, this.drawingSegment.set({
                    drawing: !0
                })
            }, n.prototype.stopDrawing = function () {
                var t;
                return null != (t = this.drawingSegment) && t.set({
                    drawing: !1
                }), this.drawingSegment = null
            }, n.prototype.selectByTime = function (t, e) {
                var i;
                return i = this.getClosestSegmentFrom(t, e), null != i ? this.select(i) : void 0
            }, n.prototype.selectNextSegment = function () {
                var t, e;
                return e = this.getSelected(), null != e && (t = this.nextSegment(e), null != t) ? this.select(t) : void 0
            }, n.prototype.selectPrevSegment = function () {
                var t, e;
                return e = this.getSelected(), null != e && (t = this.prevSegment(e), null != t) ? this.select(t) : void 0
            }, n.prototype.nextSegment = function (t) {
                return this.sortedSegments.nextOf(t)
            }, n.prototype.prevSegment = function (t) {
                return this.sortedSegments.prevOf(t)
            }, n.prototype.updateWithAdjacentSegment = function (t, e) {
                var i, n;
                return null != e.start_time ? (n = this.prevSegment(t), t.get("start_time") - (null != n ? n.get("end_time") : void 0) > 100 && (n = null), t.get("start_time") > e.start_time ? (null != n && n.set({
                    end_time: e.start_time,
                    saved: !1
                }, {
                    validate: !0
                }), t.set({
                    start_time: e.start_time,
                    saved: !1
                }, {
                    validate: !0
                })) : (t.set({
                    start_time: e.start_time,
                    saved: !1
                }, {
                    validate: !0
                }), null != n ? n.set({
                    end_time: e.start_time,
                    saved: !1
                }, {
                    validate: !0
                }) : void 0)) : null != e.end_time ? (i = this.nextSegment(t), (null != i ? i.get("start_time") : void 0) - t.get("end_time") > 100 && (i = null), t.get("end_time") > e.end_time ? (t.set({
                    end_time: e.end_time,
                    saved: !1
                }, {
                    validate: !0
                }), null != i ? i.set({
                    start_time: e.end_time,
                    saved: !1
                }, {
                    validate: !0
                }) : void 0) : (null != i && i.set({
                    start_time: e.end_time,
                    saved: !1
                }, {
                    validate: !0
                }), t.set({
                    end_time: e.end_time,
                    saved: !1
                }, {
                    validate: !0
                }))) : void 0
            }, n.prototype.beforeSave = function () {
                return this.savingMessage.show("info", "Saving segments...")
            }, n.prototype.beforeDelete = function () {
                return this.deletingMessage.show("info", "Deleting a segment...", 3e3)
            }, n.prototype.afterDelete = function () {
                return this.deletingMessage.show("success", "A segment is successfully deleted", 3e3)
            }, n.prototype.afterSuccess = function (t) {
                return null == segments.get(t.cid) ? (this.add(t), t.destroy()) : t.subtitle && !t.subtitle.get("saved") ? subtitles.saveOne(t.subtitle) : void 0
            }, n.prototype.afterFail = function (t, e) {
                var i;
                return 401 === e.status ? this.triggerAuthenticationError() : (t.set({
                    invalid: !0
                }), null != e.responseText && (i = JSON.parse(e.responseText), this.errorMessages.push(i.message)), logging_to_server("invalid", this.toHash()), this.enqueueToUnsavedSegments(t))
            }, n.prototype.afterTimeout = function (t) {
                return logging_to_server("timeout", t.attributes), this.savingMessage.show("error", "Disconnected from server. Waiting..."), t.refetch({
                    timeout: this.requestTimeout,
                    success: $.proxy(this.startSaving, this),
                    error: $.proxy(this.afterFail, this)
                })
            }, n.prototype.afterSave = function () {
                var t, e;
                if (this.savingSegment = null, this.errorMessages.length > 0) {
                    for (; t = this.errorMessages.pop();) e = new Message, e.show("error", t), e.destroy(5e3);
                    return this.savingMessage.show("error", "Save failed for the segments highlighted in red. Please try saving again.", 3e3)
                }
                return this.savingMessage.show("success", "All changes saved", 3e3)
            }, n.prototype.triggerAuthenticationError = function () {
                return this.trigger("authenticationError")
            }, n.prototype.triggerPermissionError = function () {
                return this.trigger("permissionError")
            }, n.prototype.cleanUnsavedSegments = function () {
                return this.unsavedSegments.clean()
            }, n.prototype.enqueueToUnsavedSegments = function (t) {
                return t.get("drawing") ? this.unsavedSegments.remove(t) : this.unsavedSegments.add(t)
            }, n.prototype.dequeueToUnsavedSegments = function (t) {
                return this.unsavedSegments.remove(t)
            }, n.prototype.startTimeInMillisecond = function () {
                return this.startTime_
            }, n.prototype.endTimeInMillisecond = function () {
                return this.endTime_
            }, n.prototype.startTime = function () {
                return this.startTime_ / 1e3
            }, n.prototype.endTime = function () {
                return this.endTime_ / 1e3
            }, n.prototype.setStartTime = function (t) {
                return 0 > t || null != this.endTime_ && t > this.endTime_ ? void 0 : this.startTime_ = t
            }, n.prototype.setEndTime = function (t) {
                return null != this.endTime_ || t <= this.startTime_ ? void 0 : this.endTime_ = t
            }, n.prototype.toHash = function () {
                return this.map(function (t) {
                    return t.toString()
                })
            }, n
        }(Backbone.Collection)
    }.call(this),
    function () {
        var t, e = {}.hasOwnProperty,
            i = function (t, i) {
                function n() {
                    this.constructor = t
                }
                for (var s in i) e.call(i, s) && (t[s] = i[s]);
                return n.prototype = i.prototype, t.prototype = new n, t.__super__ = i.prototype, t
            };
        window.Subtitles = function (e) {
            function n() {
                return t = n.__super__.constructor.apply(this, arguments)
            }
            return i(n, e), n.prototype.model = Subtitle, n.prototype.selectedSubtitle = null, n.prototype.getInvalid = function () {
                return this.where({
                    invalid: !0
                })[0]
            }, n.prototype.getUnsaved = function () {
                return this.where({
                    saved: !1
                })[0]
            }, n.prototype.saveAll = function (t) {
                var e;
                return e = !1, null != t && (e = t.ignoreDependency), e ? this.each(this.saveOneWithoutDependancy, this) : this.each(this.saveOne, this)
            }, n.prototype.saveOneWithoutDependancy = function (t) {
                return t.segment.get("saved") ? this.saveOne(t) : void 0
            }, n.prototype.saveOne = function (t) {
                var e;
                return t.get("saved") || null == t.segment ? void 0 : (e = new Message, e.show("info", "Saving a subtitle(" + t.preview() + ")"), t.save({}, {
                    success: function (i) {
                        return e.show("success", "Saved a subtitle(" + t.preview() + ")"), i.set({
                            saved: !0
                        })
                    },
                    error: function (i, n) {
                        var s;
                        if (403 === n.status) {
                            if (s = $.parseJSON(n.responseText), 1 === s.code) return e.show("error", "Failed to save subtitle(" + t.preview() + ") : " + I18n.t("duplicate_subtitle")), i.set({
                                saved: !0
                            }), void 0;
                            if (3 === s.code) return e.show("error", "Failed to save subtitle(" + t.preview() + ") : " + I18n.t("no_segment")), void 0
                        }
                        return e.show("error", "Failed to save subtitle(" + t.preview() + ")")
                    },
                    complete: function () {
                        return e.destroy(3e3)
                    }
                }))
            }, n.prototype.deselectAll = function () {
                return null != this.selectedSubtitle ? (this.selectedSubtitle.set({
                    activated: !1
                }), this.selectedSubtitle = null) : void 0
            }, n.prototype.select = function (t) {
                return t !== this.selectedSubtitle ? (this.deselectAll(), this.selectedSubtitle = t, t.set({
                    activated: !0
                })) : void 0
            }, n
        }(Backbone.Collection)
    }.call(this),
    function () {
        window.SegmentViewFactory = function () {
            function t(t, e, i) {
                this.segments = t, this.subbingTool = e, this.languageCode = i
            }
            return t.prototype.create = function (t, e) {
                var i;
                return i = new Segment({
                    subtitle_language_code: this.languageCode,
                    saved: !1
                }), i.setTime(t, e), this.createWithSegment(i)
            }, t.prototype.createWithSegment = function (t) {
                return t.isValid() ? (this.segments.add(t), new SegmentView({
                    model: t,
                    collection: this.segments,
                    subbingTool: this.subbingTool
                })) : void 0
            }, t
        }()
    }.call(this),
    function () {
        window.SubtitleViewFactory = function () {
            function t(t) {
                this.subtitles = t
            }
            return t.prototype.create = function (t) {
                var e;
                return e = t.createSubtitle(), this.subtitles.add(e), this.createWithSubtitle(e)
            }, t.prototype.createWithSubtitle = function (t) {
                return new SubtitleView({
                    model: t
                })
            }, t
        }()
    }.call(this),
    function () {
        var t;
        t = I18n.t("shortcut"), window.toolTips = {
            start_segment: {
                messages: {
                    "*": "<p>" + I18n.t("start_segment_tooltip") + " " + t + ": <span class='key'>Spacebar</span></p>",
                    inactive: "<p>" + I18n.t("can_not_open_seg_tooltip") + "</p>"
                },
                target: "start-segment",
                top: 63,
                left: 360
            },
            end_segment: {
                messages: {
                    "*": "<p>" + I18n.t("close_segment_tooltip") + " " + t + ": <span class='key'>Spacebar</span>. </p><p>" + I18n.t("cancel_segment_tooltip") + " <span class='key'>ESC</span>. " + I18n.t("continue_segment_tooltip_pre") + " <span class='key'>Shift</span> + <span class='key'>Spacebar</span> " + I18n.t("continue_segment_tooltip_post") + "</p>"
                },
                target: "end-segment",
                top: 63,
                left: 350
            },
            play: {
                messages: {
                    "*": "<p>" + I18n.t("play") + " (" + t + ": <span class='key'>P</span>)</p>"
                },
                target: "play_button",
                top: 63,
                left: 22
            },
            pause: {
                messages: {
                    "*": "<p>" + I18n.t("pause") + " (" + t + ": <span class='key'>P</span>)</p>"
                },
                target: "pause_button",
                top: 63,
                left: 18
            },
            rewind: {
                messages: {
                    "*": "<p>" + I18n.t("back_1_sec_tooltip") + " (" + t + ": <span class='key'> �� </span> or <span class='key'> A </span>)</p>"
                },
                target: "rewind",
                top: 63,
                left: -65
            },
            fast_forward: {
                messages: {
                    "*": "<p>" + I18n.t("forward_1_sec_tooltip") + " (" + t + ": <span class='key'> �� </span> or <span class='key'> D </span>)</p>"
                },
                target: "fast_forward",
                top: 63,
                left: 40
            },
            save: {
                messages: {
                    "*": "<p> " + I18n.t("save") + " (" + t + ": <span class='key'>Enter</span>)</p>"
                },
                target: "save-changes",
                top: 63,
                left: 520
            },
            fps: {
                messages: {
                    "*": "<p> " + I18n.t("fps_description") + "</p>"
                },
                target: "mpp",
                top: 63,
                left: 620
            }
        }
    }.call(this),
    function () {
        window.messages = {
            invalid_video: "This video is not available anymore",
            waveform_is_processing: "The Waveform is currently being processed. This should take about 30min. Please <a href='http://support.viki.com/requests/new' target='_blank'>contact the  Help Center</a> if you continue to see issues with the Waveform.",
            waveform_is_not_available: "The blue Waveform that you see in the Segment Timer on official channels is not available on Fan Channels. Don't worry -- you can still segment using this tool!"
        }
    }.call(this),
    function () {
        window.Subtitler = function () {
            function t() {
                var t;
                this.urlInfo = new UrlParser(window.location.href), this.player = _V_("subber_player"), t = $("#segments"), window.segments = new Segments({
                    url: t.data("url"),
                    startTime: t.data("start-time"),
                    endTime: t.data("end-time")
                }), window.subtitles = new Subtitles, window.subbingTool = new SubbingTool({
                    player: this.player
                }), window.originLanguage = new Language($("#subtitles").data("language-code")), window.subtitleStatus = $("#subtitles").data("status"), this.$container = $("#timeframe"), this.initVideoError(), this.initBeforeUnload(), this.render()
            }
            return t.prototype.scale = 1e3 / 30, t.prototype.isSegmentReady = !1, t.prototype.isMetaDataReady = !1, t.prototype.waveformRetryInterval = 6e4, t.prototype.refetchInterval = 5e3, t.prototype.render = function () {
                return this.fetchSegments(), this.isOfficialVideo() && this.renderWaveform(this.$container.data("waveform-url")), this.initComponents()
            }, t.prototype.initSubbingTool = function () {
                var t;
                return this.isSegmentReady = !0, window.segments.each(function (t) {
                    var e;
                    return t.set({
                        saved: !0
                    }), e = t.createSubtitle(), subtitles.add(e)
                }), segments.cleanUnsavedSegments(), t = new VideoController, new VideoControllerView({
                    model: t,
                    player: this.player,
                    startTime: window.segments.startTime(),
                    endTime: window.segments.endTime()
                }), t.set({
                    playable: !0,
                    segmentable: !1
                }), this.segmentBarView = new SegmentBarView({
                    collection: window.segments,
                    subtitles: window.subtitles,
                    model: window.subbingTool,
                    videoController: t,
                    mpp: this.urlInfo.getParams().mpp
                }), this.$container.append(this.segmentBarView.render().el), this.openEditor()
            }, t.prototype.fetchSegments = function () {
                var t = this;
                return window.segments.fetch({
                    reset: !0,
                    data: $.param({
                        language_code: originLanguage.code,
                        start_time: window.segments.startTimeInMillisecond(),
                        end_time: null != window.segments.endTimeInMillisecond() ? window.segments.endTimeInMillisecond() : 0
                    }),
                    success: $.proxy(this.initSubbingTool, this),
                    error: function () {
                        return setTimeout($.proxy(function () {
                            return this.fetchSegments()
                        }, t), t.refetchInterval)
                    }
                })
            }, t.prototype.initComponents = function () {
                return this.player.duration() > 0 ? (this.isMetaDataReady = !0, window.segments.setEndTime(1e3 * this.player.duration()), this.renderTimeline(), this.renderSlideBar(), this.renderDisabledSegments(), this.openEditor()) : this.player.addEvent("durationchange", $.proxy(this.initComponents, this))
            }, t.prototype.renderWaveform = function (t) {
                var e;
                return e = this, null == t || 0 === t.length ? (setTimeout(function () {
                    return e.getVideoInfo()
                }, this.waveformRetryInterval), void 0) : $.jsonp({
                    url: t,
                    callback: "parseResponse",
                    success: function (t) {
                        var i;
                        return i = new WaveformGenerator(t, 630, window.segments.startTimeInMillisecond(), window.segments.endTimeInMillisecond()), i.generate(), e.player.addEvent("timeupdate", function () {
                            return i.showByCurrentTime(e.player.currentTime())
                        })
                    }
                })
            }, t.prototype.renderTimeline = function () {
                var t, e = this;
                return t = new window.Timeline(this.player.duration(), 90, 460, window.segments.startTime(), window.segments.endTime()), t.showByCurrentTime(0), this.player.addEvent("timeupdate", function () {
                    return t.showByCurrentTime(e.player.currentTime())
                })
            }, t.prototype.renderSlideBar = function () {
                return new SlideBar(this.player, $(".videotime"), window.segments.startTime(), window.segments.endTime() - window.segments.startTime())
            }, t.prototype.renderDisabledSegments = function () {
                var t;
                return t = this.$container.width() / 2, $(".segment-disabled.front").css("width", t + window.segments.startTimeInMillisecond() / this.scale + "px"), $(".segment-disabled.front").css("left", "-" + t + "px"), $(".segment-disabled.rear").css("width", t + (1e3 * this.player.duration() - window.segments.endTimeInMillisecond()) / this.scale + "px"), $(".segment-disabled.rear").css("left", window.segments.endTimeInMillisecond() / this.scale + "px")
            }, t.prototype.openEditor = function () {
                return this.isSegmentReady && this.isMetaDataReady ? ($(".timeframe-spinner").hide(), this.player.play(), this.player.currentTime(window.segments.startTime())) : void 0
            }, t.prototype.getVideoInfo = function () {
                var t;
                return t = this, $.ajax({
                    url: this.urlInfo.getBaseUrl() + "/info.json",
                    type: "get",
                    success: function (e) {
                        return t.renderWaveform(e.waveform)
                    }
                })
            }, t.prototype.isOfficialVideo = function () {
                return "html5" === this.player.techName || "flash" === this.player.techName
            }, t.prototype.initVideoError = function () {
                return this.player.addEvent("error", function (t) {
                    return logging_to_server("error", t.target.error)
                })
            }, t.prototype.initBeforeUnload = function () {
                return window.onbeforeunload = function () {
                    return null != window.segments.getUnsaved() || null != window.subtitles.getUnsaved() ? "You have unsaved changes." : void 0
                }
            }, t
        }()
    }.call(this),
    function () {
        window.WaveformPart = function () {
            function t(t, e) {
                this.startTime = t, this.endTime = e, this.rendered = !1, this.visible = !1, this.$canvas = null
            }
            return t.prototype.show = function () {
                return this.visible || null == this.$canvas ? void 0 : (this.visible = !0, this.$canvas.fadeIn())
            }, t.prototype.hide = function () {
                return this.visible && null != this.$canvas ? (this.visible = !1, this.$canvas.fadeOut()) : void 0
            }, t
        }(), window.WaveformGenerator = function () {
            function t(t, e, i, n) {
                null == i && (i = null), null == n && (n = null), this.waveformData = t, this.container = $("#waveform")[0], this.startTime = i, this.startPoint = null != i ? parseInt(i * this.pixelPerSecond) : 0, this.endPoint = null != n ? parseInt(n * this.pixelPerSecond) : this.waveformData.length, this.limitOfSize = e, this.parts = this.getParts()
            }
            return t.prototype.pixelPerSecond = .03, t.prototype.waveformData = null, t.prototype.container = null, t.prototype.renderingIndex = 0, t.prototype.renderingIntervalId = null, t.prototype.renderingInterval = 5e3, t.prototype.generate = function () {
                return $(this.container).width(this.waveformData.length), this.render(0)
            }, t.prototype.showByCurrentTime = function (t) {
                var e, i, n, s, r = this;
                return n = parseInt(this.limitOfSize / this.pixelPerSecond / 1e3), s = n / 3, i = parseInt(this.relativeStartPoint(t)) % n, e = parseInt(this.relativeStartPoint(t) / n), s > i ? _.each(this.parts, function (t, i) {
                    return i === e || i === e - 1 ? (t.rendered || r.render(i), t.show()) : t.hide()
                }) : 2 * s > i ? _.each(this.parts, function (t, i) {
                    return i === e - 1 || i === e || i === e + 1 ? (t.rendered || r.render(i), t.show()) : t.hide()
                }) : _.each(this.parts, function (t, i) {
                    return i === e || i === e + 1 ? (t.rendered || r.render(i), t.show()) : t.hide()
                })
            }, t.prototype.getParts = function () {
                var t, e, i, n, s;
                for (n = Math.floor(this.waveformLength() / this.limitOfSize), i = this.waveformLength() % this.limitOfSize, s = [], t = this.startPoint, e = 0; n > e;) s[e] = new WaveformPart(t, t + this.limitOfSize), t += this.limitOfSize, ++e;
                return i > 0 && (s[e] = new WaveformPart(t, t + i)), s
            }, t.prototype.renderInOrderFrom = function (t) {
                return clearInterval(this.renderingIntervalId), this.renderingIndex = t, this.renderForCurrentIndex(), this.renderingIntervalId = setInterval($.proxy(function () {
                    return this.renderForCurrentIndex()
                }, this), this.renderingInterval)
            }, t.prototype.renderForCurrentIndex = function () {
                return this.render(this.renderingIndex), this.renderingIndex++
            }, t.prototype.render = function (t) {
                var e, i, n, s, r, o;
                if (!(0 > t)) {
                    if (t > this.parts.length - 1) return clearInterval(this.renderingIntervalId), $(".message-copy img").hide(), void 0;
                    if (r = this.parts[t], !r.rendered) {
                        for (i = [], n = r.startTime, s = 0; n < r.endTime;) i[s] = this.waveformData[n], n++, s++;
                        return e = $(this.container).append("<div style='width: " + i.length + "px; position: absolute; left: " + r.startTime + "px;'></div>").children().last()[0], o = new Waveform({
                            container: e,
                            data: i,
                            height: 50,
                            width: i.length,
                            innerColor: "#00CCFF"
                        }), r.$canvas = $(e), r.rendered = !0
                    }
                }
            }, t.prototype.waveformLength = function () {
                return this.endPoint - this.startPoint
            }, t.prototype.relativeStartPoint = function (t) {
                return t - this.startTime / 1e3
            }, t
        }()
    }.call(this),
    function () {
        window.TimelinePart = function () {
            function t(t, e) {
                this.startTime = t, this.endTime = e, this.rendered = !1, this.visible = !1, this.$canvas = null
            }
            return t.prototype.show = function () {
                return this.visible || null == this.$canvas ? void 0 : (this.visible = !0, this.$canvas.show())
            }, t.prototype.hide = function () {
                return this.visible && null != this.$canvas ? (this.visible = !1, this.$canvas.hide()) : void 0
            }, t
        }(), window.Timeline = function () {
            function t(t, e, i, n, s) {
                this.duration = t, this.lengthOfPart = e, this.offset = i, null == n && (n = 0), null == s && (s = null), this.template = $(".timeline"), this.endTime = null != s ? s : this.duration, this.startTime = 0 !== n % this.unitOfTime ? parseInt(n / this.unitOfTime) * this.unitOfTime : n, this.parts = this.getParts()
            }
            return t.prototype.template = null, t.prototype.scale = 1e3 / 30, t.prototype.unitOfTime = 5, t.prototype.pixelOfPart = 150, t.prototype.maxLength = 7200, t.prototype.totalLegnth = null, t.prototype.startPosition = 460, t.prototype.currentIndex = 0, t.prototype.formattedTime = function (t) {
                var e, i, n;
                return n = parseInt(t) % 60, i = parseInt((t - n) / 60) % 60, e = parseInt((t - i) / 3600), "" + e + ":" + this.addleadingZero(i) + ":" + this.addleadingZero(n)
            }, t.prototype.addleadingZero = function (t) {
                return 1 === t.toString().length ? 0 + t.toString() : t
            }, t.prototype.getParts = function () {
                var t, e, i;
                for (i = parseInt(this.endTime - this.startTime, 10) % this.lengthOfPart, t = 0, e = []; t < this.numberOfParts();) e[t] = new TimelinePart(this.startTime + t * this.lengthOfPart, this.startTime + (t + 1) * this.lengthOfPart), t++;
                return i > 0 && (e[t] = new TimelinePart(this.startTime + t * this.lengthOfPart, this.startTime + t * this.lengthOfPart + i)), e
            }, t.prototype.showByCurrentTime = function (t) {
                var e, i, n, s = this;
                return t -= this.startTime, n = this.lengthOfPart / 3, i = t % this.lengthOfPart, e = parseInt(t / this.lengthOfPart), n > i ? _.each(this.parts, function (t, i) {
                    return i === e || i === e - 1 ? (t.rendered || s.renderFor(i), t.show()) : t.hide()
                }) : 2 * n > i ? _.each(this.parts, function (t, i) {
                    return i === e ? (t.rendered || s.renderFor(i), t.show()) : t.hide()
                }) : _.each(this.parts, function (t, i) {
                    return i === e || i === e + 1 ? (t.rendered || s.renderFor(i), t.show()) : t.hide()
                })
            }, t.prototype.renderFor = function (t) {
                var e, i, n, s, r, o;
                if (s = this.parts[t], null != s && !(s.rendered || (e = s.endTime - s.startTime, n = parseInt(e / this.unitOfTime, 10), 0 >= n))) {
                    for (o = "timeline-" + t, this.template.append("<ul id='" + o + "'></ul>"), i = 0, r = this.offset + (s.startTime - this.startTime) / this.unitOfTime * this.pixelOfPart; n > i;) this.template.find("#" + o).append(JST["templates/timeslice"]({
                        position: r,
                        formatted_time: this.formattedTime(s.startTime + i * this.unitOfTime)
                    })), r += this.pixelOfPart, ++i;
                    return s.rendered = !0, s.$canvas = this.template.find("#" + o)
                }
            }, t.prototype.renderForCurrentIndex = function () {
                return this.currentIndex > this.numberOfParts() ? void 0 : (this.renderFor(this.currentIndex), this.currentIndex++)
            }, t.prototype.numberOfParts = function () {
                return parseInt((this.endTime - this.startTime) / this.lengthOfPart, 10)
            }, t
        }()
    }.call(this),
    function () {
        window.SlideBar = function () {
            function t(t, e, i, n) {
                this.player = t, this.container = e, this.startTime = i, this.duration = n, this.knob = this.container.find(".current_knob"), this.timebar = this.container.find(".full_bar"), this.progressBar = $(".play_range"), this.radiusOfKnob = this.knob.width() / 2, this.endTime = this.startTime + this.duration, this.width = this.timebar.width(), this.addEventToPlayer(), this.addEventToSlideBar()
            }
            return t.prototype.startScrubbing = function (t) {
                return t.preventDefault(), this.blockTextSelection(), $(document).bind("mousemove", $.proxy(this.seek, this)), $(document).bind("mouseup", $.proxy(this.stopScrubbing, this))
            }, t.prototype.stopScrubbing = function () {
                return this.unblockTextSelection(), $(document).unbind("mouseup", $.proxy(this.stopScrubbing, this)), $(document).unbind("mousemove", $.proxy(this.seek, this))
            }, t.prototype.moveKnob = function () {
                var t, e;
                return t = this.player.currentTime(), t <= this.endTime ? e = this.currentTimePosition() : (this.player.pause(), e = this.width), this.knob.css("left", "" + e + "px")
            }, t.prototype.seek = function (t) {
                var e;
                return e = t.clientX - this.timebar.offset().left - this.radiusOfKnob, e >= -this.radiusOfKnob && e < this.width ? (this.knob.css("left", "" + e + "px"), this.player.currentTime(this.startTime + this.duration / this.width * e)) : void 0
            }, t.prototype.checkTime = function () {
                var t;
                return t = this.player.currentTime(), t > this.endTime ? (this.player.pause(), this.player.currentTime(this.endTime)) : t < this.startTime ? this.startAt(this.startTime) : void 0
            }, t.prototype.blockTextSelection = function () {
                return document.body.focus(), document.onselectstart = function () {
                    return !1
                }
            }, t.prototype.unblockTextSelection = function () {
                return document.onselectstart = function () {
                    return !0
                }
            }, t.prototype.startAt = function (t) {
                return this.player.play(), this.player.currentTime(t)
            }, t.prototype.updateProgressBar = function () {
                return this.progressBar.css("width", "" + (this.currentTimePosition() + this.radiusOfKnob) + "px")
            }, t.prototype.currentTimePosition = function () {
                return this.width * (this.player.currentTime() - this.startTime) / this.duration
            }, t.prototype.addEventToPlayer = function () {
                return this.player.addEvent("play", $.proxy(this.checkTime, this)), this.player.addEvent("timeupdate", $.proxy(this.moveKnob, this)), this.player.addEvent("timeupdate", $.proxy(this.updateProgressBar, this))
            }, t.prototype.addEventToSlideBar = function () {
                return this.knob.bind("mousedown", $.proxy(this.startScrubbing, this)), this.container.bind("click", $.proxy(this.seek, this))
            }, t
        }()
    }.call(this),
    function () {
        window.Message = function () {
            function t() {
                var t = this;
                this.$container = $("#message-box-container"), this.$container.append(JST["templates/message"]()), this.$messageBox = $(this.$container.children().last()), this.$messageBox.find(".alert-close").bind("click", function () {
                    return t.hide()
                })
            }
            return t.prototype.$messageBox = null, t.prototype.duration = null, t.prototype.show = function (t, e, i) {
                return this.$messageBox.removeClass("hidden"), this.setType(t), this.setMessage(e), this.setDuration(i)
            }, t.prototype.hide = function () {
                return this.$messageBox.addClass("hidden")
            }, t.prototype.setType = function (t) {
                var e, i = this;
                if (0 !== this.$messageBox.length) return e = _.select(this.$messageBox.attr("class").split(/\s+/), function (t) {
                    return t.indexOf("alert-") > -1
                }), _.each(e, function (t) {
                    return i.$messageBox.removeClass(t)
                }), this.$messageBox.addClass("alert-" + t)
            }, t.prototype.setMessage = function (t) {
                return this.$messageBox.find(".alert-body").text(t)
            }, t.prototype.setDuration = function (t) {
                var e = this;
                return null != t ? setTimeout(function () {
                    return e.hide()
                }, t) : void 0
            }, t.prototype.destroy = function (t) {
                var e = this;
                return null == t && (t = null), null != t ? setTimeout(function () {
                    return e.$messageBox.remove()
                }, t) : this.$messageBox.remove()
            }, t
        }()
    }.call(this),
    function () {
        window.ToolTip = function () {
            function t(t, e, i, n, s) {
                var r, o, a = this;
                this.toolTipId = "tool-tip-" + t, this.container = $("#tool-tip-container"), this.statuses = [];
                for (r in i) "*" !== r && this.statuses.push(r), o = i[r], this.container.append(JST["templates/tool-tip"]({
                    id: this.targetId(r),
                    messages: o,
                    top: n,
                    left: s
                }));
                this.target = e, this.target.hover(function () {
                    return a.showToolTip()
                }, function () {
                    return a.hideToolTop()
                })
            }
            return t.prototype.container = null, t.prototype.element = null, t.prototype.target = null, t.prototype.statuses = null, t.prototype.showToolTip = function () {
                var t, e = this;
                return t = _.detect(this.statuses, function (t) {
                    return e.target.hasClass(t)
                }), this.container.find(this.targetSelector(t)).show()
            }, t.prototype.hideToolTop = function () {
                var t = this;
                return _.each(this.statuses, function (e) {
                    return t.container.find(t.targetSelector(e)).hide()
                }), this.container.find(this.targetSelector()).hide()
            }, t.prototype.targetSelector = function (t) {
                return "#" + this.targetId(t)
            }, t.prototype.targetId = function (t) {
                return null != t && "*" !== t ? "" + this.toolTipId + "-" + t : this.toolTipId
            }, t
        }()
    }.call(this),
    function () {
        window.IntroPopup = function () {
            function t(t) {
                this.$template = $("#intro-pop"), PopupPosition.adjustToMiddle(this.$template), this.$closeLink = this.$template.find(".close, .close-btn"), this.$openLink = $("#intro"), this.$overlay = t.overlay, this.user = t.user, this.$openLink.bind("click", $.proxy(this.show, this)), this.$closeLink.bind("click", $.proxy(this.close, this))
            }
            var e, i, n, s, r, o;
            return s = null, e = null, i = null, n = null, r = null, o = null, t.prototype.close = function () {
                return this.user.isNewUser && this.disableIntro(), this.hide(), !1
            }, t.prototype.disableIntro = function () {
                return this.user.markAsNotNewUser(), $.ajax({
                    url: "/subtitlers/disable_intro",
                    type: "put"
                })
            }, t.prototype.show = function () {
                return this.$template.show(), this.$overlay.show(), this.addVideo(), null != this.openPopupCallback && this.openPopupCallback(), !1
            }, t.prototype.hide = function () {
                return this.$template.hide(), this.$overlay.hide(), this.removeVideo(), null != this.closePopupCallback && this.closePopupCallback(), !1
            }, t.prototype.addVideo = function () {
                return this.$template.find(".modal-body").html(JST["templates/subtitler-tutorial-video"]())
            }, t.prototype.removeVideo = function () {
                return this.$template.find(".modal-body").html("")
            }, t.prototype.onClosePopup = function (t) {
                return this.closePopupCallback = t
            }, t.prototype.onOpenPopup = function (t) {
                return this.openPopupCallback = t
            }, t
        }()
    }.call(this),
    function () {
        window.BrowserCheck = function () {
            function t() {}
            return t.dataBrowser = [{
                string: navigator.userAgent,
                subString: "Chrome",
                identity: "Chrome"
            }, {
                string: navigator.userAgent,
                subString: "OmniWeb",
                versionSearch: "OmniWeb/",
                identity: "OmniWeb"
            }, {
                string: navigator.vendor,
                subString: "Apple",
                identity: "Safari",
                versionSearch: "Version"
            }, {
                prop: window.opera,
                identity: "Opera",
                versionSearch: "Version"
            }, {
                string: navigator.vendor,
                subString: "iCab",
                identity: "iCab"
            }, {
                string: navigator.vendor,
                subString: "KDE",
                identity: "Konqueror"
            }, {
                string: navigator.userAgent,
                subString: "Firefox",
                identity: "Firefox"
            }, {
                string: navigator.vendor,
                subString: "Camino",
                identity: "Camino"
            }, {
                string: navigator.userAgent,
                subString: "Netscape",
                identity: "Netscape"
            }, {
                string: navigator.userAgent,
                subString: "MSIE",
                identity: "Explorer",
                versionSearch: "MSIE"
            }, {
                string: navigator.userAgent,
                subString: "Gecko",
                identity: "Mozilla",
                versionSearch: "rv"
            }, {
                string: navigator.userAgent,
                subString: "Mozilla",
                identity: "Netscape",
                versionSearch: "Mozilla"
            }], t.dataOS = [{
                string: navigator.platform,
                subString: "Win",
                identity: "Windows"
            }, {
                string: navigator.platform,
                subString: "Mac",
                identity: "Mac"
            }, {
                string: navigator.userAgent,
                subString: "iPhone",
                identity: "iPhone/iPod"
            }, {
                string: navigator.platform,
                subString: "Linux",
                identity: "Linux"
            }], t.init = function () {
                return this.browser = this.searchString(this.dataBrowser) || "An unknown browser", this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version", this.OS = this.searchString(this.dataOS) || "an unknown OS"
            }, t.initJquery = function () {
                return $.browser = {}, $.browser.msie = "Explorer" === this.browser
            }, t.isValid = function () {
                return "Explorer" === this.browser && parseFloat(this.version) >= 9 ? !0 : "Firefox" === this.browser && parseFloat(this.version) >= 3.5 ? !0 : "Chrome" === this.browser && parseFloat(this.version) >= 3 ? !0 : "Opera" === this.browser && parseFloat(this.version) >= 10.5 ? !0 : "Safari" === this.browser && parseFloat(this.version) >= 3 ? !0 : !1
            }, t.showPopup = function () {
                var t;
                return t = $("#unsupported-popup"), PopupPosition.adjustToMiddle(t), t.fadeIn(), $("#overlay").fadeIn(), t.find(".close").bind("click", this.hidePopup)
            }, t.hidePopup = function () {
                return $("#unsupported-popup").fadeOut(), $("#overlay").fadeOut(), !1
            }, t.searchString = function (t) {
                var e, i, n;
                for (n = 0; n < t.length;) {
                    if (i = t[n].string, e = t[n].prop, this.versionSearchString = t[n].versionSearch || t[n].identity, i) {
                        if (-1 !== i.indexOf(t[n].subString)) return t[n].identity
                    } else if (e) return t[n].identity;
                    n++
                }
            }, t.searchVersion = function (t) {
                var e;
                return e = t.indexOf(this.versionSearchString), -1 !== e ? parseFloat(t.substring(e + this.versionSearchString.length + 1)) : void 0
            }, t
        }(), BrowserCheck.init(), BrowserCheck.initJquery()
    }.call(this),
    function () {
        window.InactivityChecker = function () {
            function t(t, e) {
                this.overlay = e, this.template = $("#inactivity-popup"), this.urlToActivate = "" + t + "/check_video_lock", PopupPosition.adjustToMiddle(this.template), this.params = {
                    start_time: this.template.data("start-time"),
                    end_time: this.template.data("end-time")
                }
            }
            return t.prototype.inactivityTimeout = null, t.prototype.show = function (t) {
                return this.template.fadeIn(), this.overlay.fadeIn(), null != t && this.template.find("#inactivity-message").text(t), null != this.openPopupCallback && this.openPopupCallback(), !1
            }, t.prototype.hide = function () {
                return this.template.fadeOut(), this.overlay.fadeOut(), null != this.closePopupCallback && this.closePopupCallback(), !1
            }, t.prototype.check = function () {
                var t;
                return t = this, $.ajax({
                    url: this.urlToActivate,
                    type: "put",
                    data: this.params,
                    success: function () {
                        return t.submitInactivityTimeout()
                    },
                    error: function (e) {
                        var i;
                        return 403 === e.status ? (e.responseText && (i = JSON.parse(e.responseText).message), t.show(i)) : 401 === e.status ? Window.reload() : void 0
                    }
                })
            }, t.prototype.submitInactivityTimeout = function () {
                return this.inactivityTimeout && clearTimeout(this.inactivityTimeout), this.inactivityTimeout = setTimeout($.proxy(function () {
                    return this.check()
                }, this), this.inactivityInterval())
            }, t.prototype.disableInactivityChecker = function () {
                return clearTimeout(this.inactivityTimeout)
            }, t.prototype.inactivityInterval = function () {
                return 36e4
            }, t.prototype.onClosePopup = function (t) {
                return this.closePopupCallback = t
            }, t.prototype.onOpenPopup = function (t) {
                return this.openPopupCallback = t
            }, t
        }()
    }.call(this),
    function () {
        window.UnsavedSegments = function () {
            function t() {
                this.buffer = [], this.list = [], this.index = {}, this.length = 0
            }
            return t.prototype.clean = function () {
                return this.list = [], this.index = {}, this.length = 0
            }, t.prototype.add = function (t) {
                return null == this.index[t.cid] ? (this.list.push(t), this.length++, this.index[t.cid] = this.list.length - 1) : void 0
            }, t.prototype.remove = function (t) {
                return null != this.index[t.cid] ? (this.length--, delete this.list[this.index[t.cid]], delete this.index[t.cid]) : void 0
            }, t.prototype.all = function () {
                return _.select(this.list, function (t) {
                    return null != t
                })
            }, t.prototype.extractAll = function () {
                var t, e, i;
                for (i = [], e = []; this.length > 0;) {
                    for (; null == this.list[0];) this.list.shift();
                    this.length--, t = this.list.shift(), t.isNew() ? e.push(t) : i.push(t)
                }
                return this.clean(), [i, e]
            }, t.prototype.moveToSavingQueue = function () {
                var t, e, i, n, s, r, o, a, l, u, c, h, d, p;
                for (n = this.extractAll(), a = n[0], s = n[1], o = a.length, r = 0; o >= r;)
                    for (r++, t = c = 0, d = a.length; d > c; t = ++c)
                        if (u = a[t], e = !1, null != u) {
                            for (h = 0, p = a.length; p > h; h++)
                                if (l = a[h], null != l && l.cid !== u.cid && u.get("start_time") < l.get("original").end_time && u.get("end_time") > l.get("original").start_time) {
                                    e = !0;
                                    break
                                }
                            e || (this.buffer.push(u), a[t] = void 0)
                        }
                return i = _.select(a, function (t) {
                    return null != t
                }), null != i && this.buffer.concat(i), this.buffer = this.buffer.concat(s)
            }, t.prototype.savingQueue = function () {
                return this.buffer
            }, t.prototype.dequeueFromSavingQueue = function () {
                return this.buffer.shift()
            }, t
        }()
    }.call(this),
    function () {
        window.SortedSegments = function () {
            function t(t) {
                this.segments = t, t.on("reset", this.reset, this), this.collection = []
            }
            return t.prototype.segments = null, t.prototype.collection = null, t.prototype.reset = function () {
                var t;
                return t = new Heapsort([], "start_time"), this.segments.each($.proxy(function (e) {
                    return t.add(e)
                }, this)), this.collection = t.sortedList(), this.segments.on("add", this.add, this), this.segments.on("remove", this.remove, this)
            }, t.prototype.at = function (t) {
                return this.collection[t]
            }, t.prototype.prevOf = function (t) {
                return this.collection[this.indexOf(t) - 1]
            }, t.prototype.nextOf = function (t) {
                return this.collection[this.indexOf(t) + 1]
            }, t.prototype.add = function (t) {
                return this.collection.splice(this.nextIndexByTime(t), 0, t)
            }, t.prototype.remove = function (t) {
                return this.collection.splice(this.indexOf(t), 1)
            }, t.prototype.findByTime = function (t) {
                var e;
                return e = this.indexByTime(t), "array" !== type(e) ? this.collection[e] : void 0
            }, t.prototype.closestSegmentFrom = function (t) {
                var e, i, n;
                return i = this.indexByTime(t), "array" === type(i) ? i[0] < i[1] ? (e = this.collection[i[0]], n = this.collection[i[1]], null == e && null == n ? null : null != e && null == n ? e : null == e && null != n ? n : Math.abs(e.get("end_time") - t) < Math.abs(n.get("start_time") - t) ? e : n) : null : this.collection[i]
            }, t.prototype.indexOf = function (t) {
                var e, i, n, s, r;
                for (e = t.get("start_time"), i = this.collection.length - 1, r = 0; i >= r;)
                    if (n = Math.round((i + r) / 2), s = this.collection[n].get("start_time"), e > s) r = n + 1;
                    else {
                        if (!(s > e)) return n;
                        i = n - 1
                    }
            }, t.prototype.indexByTime = function (t) {
                var e, i, n, s, r, o;
                for (e = t, i = this.collection.length - 1, o = 0; i >= o;)
                    if (s = Math.round((i + o) / 2), r = this.collection[s].get("start_time"), n = this.collection[s].get("end_time"), r > e) i = s - 1;
                    else {
                        if (!(e > n)) return s;
                        o = s + 1
                    }
                return [i, o]
            }, t.prototype.nextIndexByTime = function (t) {
                var e, i;
                return i = -1, e = -1, _.each(this.collection, function (n, s) {
                    return n.get("start_time") < t.get("start_time") && (i = s), e = s
                }), -1 === i && e === this.length - 1 ? e : i + 1
            }, t.prototype.size = function () {
                return this.collection.length
            }, t
        }()
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["templates/message"] = function (obj) {
            var __p = [];
            with(obj || {}) __p.push('<div class="alert hidden">\n  <i class="alert-close icon-x icon-small pull-right"></i>\n  <div class="alert-body"></div>\n</div>\n');
            return __p.join("")
        }
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["templates/segment"] = function (obj) {
            var __p = [];
            with(obj || {}) __p.push("<em></em>\n<div class='action'>\n  <a class='replay-segment tooltip-north' inline-tooltip='Ctrl / Cmd + R: Replay segment' href='#'>\n    Replay\n    <span class=\"tip\">\n      Replay segment (Shortcut: <span class='key'>R</span>)\n    </span>\n  </a>\n  <a class='delete-segment tooltip-north' inline-tooltip='Del: Delete segment' href='#'>\n    Delete\n    <span class=\"tip\">\n      Delete segment (Shortcut: <span class='key'>Del</span>)\n    </span>\n  </a>\n</div>\n");
            return __p.join("")
        }
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["templates/timeslice"] = function (obj) {
            var __p = [];
            with(obj || {}) __p.push("<li style='left: ", position, "px;'>", formatted_time, "</li>\n");
            return __p.join("")
        }
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["templates/tool-tip"] = function (obj) {
            var __p = [];
            with(obj || {}) __p.push('<div id = "', id, '" class="info-tooltip" style="top: ', top, "px; left: ", left, 'px; display: none;">\n  <div class="bd-content">\n    ', messages, '\n  </div>\n  <div class="info-tooltip-arrows pos-top">\n    <div class="arrow"></div>\n  </div>\n</div>\n');
            return __p.join("")
        }
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["templates/popup"] = function (obj) {
            var __p = [];
            with(obj || {}) __p.push('<div id="', type, '-popup" class="modal popup", style=\'display:none\'>\n  <div class="modal-header">\n    <a href="#" type="button" class="close" data-dismiss="modal" aria-hidden="true">횞</a>\n    <h3>', type, '</h3>\n  </div>\n  <div class="modal-body">\n    <p>', message, '</p>\n  </div>\n  <div class="modal-footer">\n    <a href="#" class="vk-btn vk-btn-flat vk-btn-flat-primary vk-pull-right close-btn"> Continue </a>\n   </div>\n</div>\n');
            return __p.join("")
        }
    }.call(this),
    function () {
        this.JST || (this.JST = {}), this.JST["templates/subtitler-tutorial-video"] = function (obj) {
            var __p = [];
            with(obj || {}) __p.push('<video id="intro_player" class="video-js vjs-default-skin" controls width="640" height="360" style="margin-left: 55px;">\n  <source src="http://content.viki.com/tutorials/segment-timer-1369028737.webm" type=\'video/webm\' />\n  <source src="http://content.viki.com/tutorials/segment-timer-1369028737.mp4" type=\'video/mp4\' />\n</video>\n');
            return __p.join("")
        }
    }.call(this), window.onYoutubeVideoReady = function () {
    var t = _V_.el("subber_player_youtube_api"),
        e = t.parentNode.player;
    e.play();
    var i = e.duration();
    e.pause(), i > 0 ? (e.triggerEvent("durationchange"), e.triggerEvent("loadedmetadata"), e.triggerEvent("canplay")) : setTimeout(window.onYoutubeVideoReady, 1e3)
}, window.onYouTubePlayerReady = function () {
    var t = _V_.el("subber_player_youtube_api"),
        e = t.parentNode.player,
        i = e.tech;
    t.player = e, e.tels = {}, e.tels.youtube = t, i.el = t, i.addEvent("click", i.onClick), e.triggerEvent("techready"), i.triggerReady(), setTimeout(window.onYoutubeVideoReady, 1e3)
}, window.onDailymotionPlayerReady = function () {
    var t = _V_.el("subber_player_dailymotion_api"),
        e = t.parentNode.player,
        i = e.tech;
    t.player = e, e.tels = {}, e.tels.dailymotion = t, i.el = t, i.addEvent("click", i.onClick), e.triggerEvent("techready"), i.triggerReady(), setTimeout(window.onDailymotionVideoReady, 1e3)
}, window.onDailymotionVideoReady = function () {
    var t = _V_.el("subber_player_dailymotion_api"),
        e = t.parentNode.player;
    e.play();
    var i = e.duration();
    e.pause(), i > 0 ? (e.triggerEvent("durationchange"), e.triggerEvent("loadedmetadata"), e.triggerEvent("canplay")) : setTimeout(window.onDailymotionVideoReady, 1e3)
}, Waveform.prototype.redraw = function () {
    var t, e, i, n, s, r, o, a;
    for (this.clear(), this.context.fillStyle = this.innerColor, i = this.height, e = 0, o = this.data, a = [], s = 0, r = o.length; r > s; s++) t = o[s], n = this.width / this.data.length, "function" == typeof this.innerColor && (this.context.fillStyle = this.innerColor(e / this.width, t)), this.context.clearRect(n * e, i - i * t, n, i * t), this.context.fillRect(n * e, i - i * t, n, i * t), a.push(e++);
    return a
},
    function () {
        window.PlayerSelectionLink = function () {
            function t(t, e, i) {
                this.$container = t, this.player = e, this.urlInfo = new UrlParser(i)
            }
            return t.prototype.supports = ["html5", "flash", "dailymotion", "dailymotionHtml5"], t.prototype.render = function () {
                var t;
                if (this.supports.indexOf(this.player.techName) > -1) return this.setPlayer(), this.$container.append(this.linkTemplate()), this.$container.append(this.toolTipTemplate()), t = this.$container.find(".info-tooltip"), this.$container.hover(function () {
                    return t.removeClass("hidden")
                }, function () {
                    return t.addClass("hidden")
                })
            }, t.prototype.setPlayer = function () {
                switch (this.player.techName) {
                    case "html5":
                        return this.urlInfo.setParams("player_type", "flash"), this.title = I18n.t("switch_flash");
                    case "flash":
                        return this.urlInfo.setParams("player_type", "html5"), this.title = I18n.t("switch_html");
                    case "dailymotion":
                        return this.urlInfo.setParams("player_type", "dailymotionHtml5"), this.title = I18n.t("switch_flash");
                    case "dailymotionHtml5":
                        return this.urlInfo.setParams("player_type", "dailymotion"), this.title = I18n.t("switch_html")
                }
            }, t.prototype.linkTemplate = function () {
                return "<a class='player-selection-link' href='" + this.urlInfo.getUrl() + "'>" + this.title + "</a>"
            }, t.prototype.toolTipTemplate = function () {
                return "<div class='info-tooltip info-tooltip-playerselect hidden'><div class='bd-content align-left'>" + ("<p>" + I18n.t("player_trouble") + " " + this.title + "</p>") + "</div>" + "<div class='info-tooltip-arrows pos-bottom'>" + "<div class='arrow'></div>" + "</div>" + "</div>"
            }, t
        }()
    }.call(this);