! function (t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.sankey = n() : t.sankey = n()
}(window, (function () {
    return function (t) {
        var n = {};

        function e(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
        }
        return e.m = t, e.c = n, e.d = function (t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                enumerable: !0,
                get: r
            })
        }, e.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, e.t = function (t, n) {
            if (1 & n && (t = e(t)), 8 & n) return t;
            if (4 & n && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (e.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & n && "string" != typeof t)
                for (var i in t) e.d(r, i, function (n) {
                    return t[n]
                }.bind(null, i));
            return r
        }, e.n = function (t) {
            var n = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function (t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }, e.p = "", e(e.s = 51)
    }({
        0: function (t, n, e) {
            "use strict";
            var r = function (t, n) {
                    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
                },
                i = function (t) {
                    var n;
                    return 1 === t.length && (n = t, t = function (t, e) {
                        return r(n(t), e)
                    }), {
                        left: function (n, e, r, i) {
                            for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                                var u = r + i >>> 1;
                                t(n[u], e) < 0 ? r = u + 1 : i = u
                            }
                            return r
                        },
                        right: function (n, e, r, i) {
                            for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                                var u = r + i >>> 1;
                                t(n[u], e) > 0 ? i = u : r = u + 1
                            }
                            return r
                        }
                    }
                },
                u = i(r),
                o = u.right,
                a = u.left,
                c = o,
                f = function (t, n) {
                    null == n && (n = s);
                    for (var e = 0, r = t.length - 1, i = t[0], u = new Array(r < 0 ? 0 : r); e < r;) u[e] = n(i, i = t[++e]);
                    return u
                };

            function s(t, n) {
                return [t, n]
            }
            var l = function (t, n, e) {
                    var r, i, u, o, a = t.length,
                        c = n.length,
                        f = new Array(a * c);
                    for (null == e && (e = s), r = u = 0; r < a; ++r)
                        for (o = t[r], i = 0; i < c; ++i, ++u) f[u] = e(o, n[i]);
                    return f
                },
                h = function (t, n) {
                    return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
                },
                d = function (t) {
                    return null === t ? NaN : +t
                },
                p = function (t, n) {
                    var e, r, i = t.length,
                        u = 0,
                        o = -1,
                        a = 0,
                        c = 0;
                    if (null == n)
                        for (; ++o < i;) isNaN(e = d(t[o])) || (c += (r = e - a) * (e - (a += r / ++u)));
                    else
                        for (; ++o < i;) isNaN(e = d(n(t[o], o, t))) || (c += (r = e - a) * (e - (a += r / ++u)));
                    if (u > 1) return c / (u - 1)
                },
                v = function (t, n) {
                    var e = p(t, n);
                    return e ? Math.sqrt(e) : e
                },
                g = function (t, n) {
                    var e, r, i, u = t.length,
                        o = -1;
                    if (null == n) {
                        for (; ++o < u;)
                            if (null != (e = t[o]) && e >= e)
                                for (r = i = e; ++o < u;) null != (e = t[o]) && (r > e && (r = e), i < e && (i = e))
                    } else
                        for (; ++o < u;)
                            if (null != (e = n(t[o], o, t)) && e >= e)
                                for (r = i = e; ++o < u;) null != (e = n(t[o], o, t)) && (r > e && (r = e), i < e && (i = e));
                    return [r, i]
                },
                y = Array.prototype,
                _ = y.slice,
                m = y.map,
                x = function (t) {
                    return function () {
                        return t
                    }
                },
                b = function (t) {
                    return t
                },
                w = function (t, n, e) {
                    t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
                    for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), u = new Array(i); ++r < i;) u[r] = t + r * e;
                    return u
                },
                M = Math.sqrt(50),
                k = Math.sqrt(10),
                T = Math.sqrt(2),
                E = function (t, n, e) {
                    var r, i, u, o, a = -1;
                    if (e = +e, (t = +t) == (n = +n) && e > 0) return [t];
                    if ((r = n < t) && (i = t, t = n, n = i), 0 === (o = N(t, n, e)) || !isFinite(o)) return [];
                    if (o > 0)
                        for (t = Math.ceil(t / o), n = Math.floor(n / o), u = new Array(i = Math.ceil(n - t + 1)); ++a < i;) u[a] = (t + a) * o;
                    else
                        for (t = Math.floor(t * o), n = Math.ceil(n * o), u = new Array(i = Math.ceil(t - n + 1)); ++a < i;) u[a] = (t - a) / o;
                    return r && u.reverse(), u
                };

            function N(t, n, e) {
                var r = (n - t) / Math.max(0, e),
                    i = Math.floor(Math.log(r) / Math.LN10),
                    u = r / Math.pow(10, i);
                return i >= 0 ? (u >= M ? 10 : u >= k ? 5 : u >= T ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (u >= M ? 10 : u >= k ? 5 : u >= T ? 2 : 1)
            }

            function S(t, n, e) {
                var r = Math.abs(n - t) / Math.max(0, e),
                    i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
                    u = r / i;
                return u >= M ? i *= 10 : u >= k ? i *= 5 : u >= T && (i *= 2), n < t ? -i : i
            }
            var A = function (t) {
                    return Math.ceil(Math.log(t.length) / Math.LN2) + 1
                },
                C = function () {
                    var t = b,
                        n = g,
                        e = A;

                    function r(r) {
                        var i, u, o = r.length,
                            a = new Array(o);
                        for (i = 0; i < o; ++i) a[i] = t(r[i], i, r);
                        var f = n(a),
                            s = f[0],
                            l = f[1],
                            h = e(a, s, l);
                        Array.isArray(h) || (h = S(s, l, h), h = w(Math.ceil(s / h) * h, Math.floor(l / h) * h, h));
                        for (var d = h.length; h[0] <= s;) h.shift(), --d;
                        for (; h[d - 1] > l;) h.pop(), --d;
                        var p, v = new Array(d + 1);
                        for (i = 0; i <= d; ++i)(p = v[i] = []).x0 = i > 0 ? h[i - 1] : s, p.x1 = i < d ? h[i] : l;
                        for (i = 0; i < o; ++i) s <= (u = a[i]) && u <= l && v[c(h, u, 0, d)].push(r[i]);
                        return v
                    }
                    return r.value = function (n) {
                        return arguments.length ? (t = "function" == typeof n ? n : x(n), r) : t
                    }, r.domain = function (t) {
                        return arguments.length ? (n = "function" == typeof t ? t : x([t[0], t[1]]), r) : n
                    }, r.thresholds = function (t) {
                        return arguments.length ? (e = "function" == typeof t ? t : Array.isArray(t) ? x(_.call(t)) : x(t), r) : e
                    }, r
                },
                z = function (t, n, e) {
                    if (null == e && (e = d), r = t.length) {
                        if ((n = +n) <= 0 || r < 2) return +e(t[0], 0, t);
                        if (n >= 1) return +e(t[r - 1], r - 1, t);
                        var r, i = (r - 1) * n,
                            u = Math.floor(i),
                            o = +e(t[u], u, t);
                        return o + (+e(t[u + 1], u + 1, t) - o) * (i - u)
                    }
                },
                L = function (t, n, e) {
                    return t = m.call(t, d).sort(r), Math.ceil((e - n) / (2 * (z(t, .75) - z(t, .25)) * Math.pow(t.length, -1 / 3)))
                },
                O = function (t, n, e) {
                    return Math.ceil((e - n) / (3.5 * v(t) * Math.pow(t.length, -1 / 3)))
                },
                P = function (t, n) {
                    var e, r, i = t.length,
                        u = -1;
                    if (null == n) {
                        for (; ++u < i;)
                            if (null != (e = t[u]) && e >= e)
                                for (r = e; ++u < i;) null != (e = t[u]) && e > r && (r = e)
                    } else
                        for (; ++u < i;)
                            if (null != (e = n(t[u], u, t)) && e >= e)
                                for (r = e; ++u < i;) null != (e = n(t[u], u, t)) && e > r && (r = e);
                    return r
                },
                R = function (t, n) {
                    var e, r = t.length,
                        i = r,
                        u = -1,
                        o = 0;
                    if (null == n)
                        for (; ++u < r;) isNaN(e = d(t[u])) ? --i : o += e;
                    else
                        for (; ++u < r;) isNaN(e = d(n(t[u], u, t))) ? --i : o += e;
                    if (i) return o / i
                },
                q = function (t, n) {
                    var e, i = t.length,
                        u = -1,
                        o = [];
                    if (null == n)
                        for (; ++u < i;) isNaN(e = d(t[u])) || o.push(e);
                    else
                        for (; ++u < i;) isNaN(e = d(n(t[u], u, t))) || o.push(e);
                    return z(o.sort(r), .5)
                },
                j = function (t) {
                    for (var n, e, r, i = t.length, u = -1, o = 0; ++u < i;) o += t[u].length;
                    for (e = new Array(o); --i >= 0;)
                        for (n = (r = t[i]).length; --n >= 0;) e[--o] = r[n];
                    return e
                },
                D = function (t, n) {
                    var e, r, i = t.length,
                        u = -1;
                    if (null == n) {
                        for (; ++u < i;)
                            if (null != (e = t[u]) && e >= e)
                                for (r = e; ++u < i;) null != (e = t[u]) && r > e && (r = e)
                    } else
                        for (; ++u < i;)
                            if (null != (e = n(t[u], u, t)) && e >= e)
                                for (r = e; ++u < i;) null != (e = n(t[u], u, t)) && r > e && (r = e);
                    return r
                },
                U = function (t, n) {
                    for (var e = n.length, r = new Array(e); e--;) r[e] = t[n[e]];
                    return r
                },
                F = function (t, n) {
                    if (e = t.length) {
                        var e, i, u = 0,
                            o = 0,
                            a = t[o];
                        for (null == n && (n = r); ++u < e;)(n(i = t[u], a) < 0 || 0 !== n(a, a)) && (a = i, o = u);
                        return 0 === n(a, a) ? o : void 0
                    }
                },
                I = function (t, n, e) {
                    for (var r, i, u = (null == e ? t.length : e) - (n = null == n ? 0 : +n); u;) i = Math.random() * u-- | 0, r = t[u + n], t[u + n] = t[i + n], t[i + n] = r;
                    return t
                },
                Y = function (t, n) {
                    var e, r = t.length,
                        i = -1,
                        u = 0;
                    if (null == n)
                        for (; ++i < r;)(e = +t[i]) && (u += e);
                    else
                        for (; ++i < r;)(e = +n(t[i], i, t)) && (u += e);
                    return u
                },
                B = function (t) {
                    if (!(i = t.length)) return [];
                    for (var n = -1, e = D(t, H), r = new Array(e); ++n < e;)
                        for (var i, u = -1, o = r[n] = new Array(i); ++u < i;) o[u] = t[u][n];
                    return r
                };

            function H(t) {
                return t.length
            }
            var X = function () {
                return B(arguments)
            };
            e.d(n, "b", (function () {
                return c
            })), e.d(n, "d", (function () {
                return o
            })), e.d(n, "c", (function () {
                return a
            })), e.d(n, "a", (function () {
                return r
            })), e.d(n, "e", (function () {
                return i
            })), e.d(n, "f", (function () {
                return l
            })), e.d(n, "g", (function () {
                return h
            })), e.d(n, "h", (function () {
                return v
            })), e.d(n, "i", (function () {
                return g
            })), e.d(n, "j", (function () {
                return C
            })), e.d(n, "w", (function () {
                return L
            })), e.d(n, "x", (function () {
                return O
            })), e.d(n, "y", (function () {
                return A
            })), e.d(n, "k", (function () {
                return P
            })), e.d(n, "l", (function () {
                return R
            })), e.d(n, "m", (function () {
                return q
            })), e.d(n, "n", (function () {
                return j
            })), e.d(n, "o", (function () {
                return D
            })), e.d(n, "p", (function () {
                return f
            })), e.d(n, "q", (function () {
                return U
            })), e.d(n, "r", (function () {
                return z
            })), e.d(n, "s", (function () {
                return w
            })), e.d(n, "t", (function () {
                return F
            })), e.d(n, "u", (function () {
                return I
            })), e.d(n, "v", (function () {
                return Y
            })), e.d(n, "B", (function () {
                return E
            })), e.d(n, "z", (function () {
                return N
            })), e.d(n, "A", (function () {
                return S
            })), e.d(n, "C", (function () {
                return B
            })), e.d(n, "D", (function () {
                return p
            })), e.d(n, "E", (function () {
                return X
            }))
        },
        1: function (t, n, e) {
            "use strict";
            var r = Math.PI,
                i = 2 * r,
                u = i - 1e-6;

            function o() {
                this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
            }

            function a() {
                return new o
            }
            o.prototype = a.prototype = {
                constructor: o,
                moveTo: function (t, n) {
                    this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n)
                },
                closePath: function () {
                    null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
                },
                lineTo: function (t, n) {
                    this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n)
                },
                quadraticCurveTo: function (t, n, e, r) {
                    this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r)
                },
                bezierCurveTo: function (t, n, e, r, i, u) {
                    this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +u)
                },
                arcTo: function (t, n, e, i, u) {
                    t = +t, n = +n, e = +e, i = +i, u = +u;
                    var o = this._x1,
                        a = this._y1,
                        c = e - t,
                        f = i - n,
                        s = o - t,
                        l = a - n,
                        h = s * s + l * l;
                    if (u < 0) throw new Error("negative radius: " + u);
                    if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
                    else if (h > 1e-6)
                        if (Math.abs(l * c - f * s) > 1e-6 && u) {
                            var d = e - o,
                                p = i - a,
                                v = c * c + f * f,
                                g = d * d + p * p,
                                y = Math.sqrt(v),
                                _ = Math.sqrt(h),
                                m = u * Math.tan((r - Math.acos((v + h - g) / (2 * y * _))) / 2),
                                x = m / _,
                                b = m / y;
                            Math.abs(x - 1) > 1e-6 && (this._ += "L" + (t + x * s) + "," + (n + x * l)), this._ += "A" + u + "," + u + ",0,0," + +(l * d > s * p) + "," + (this._x1 = t + b * c) + "," + (this._y1 = n + b * f)
                        } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n)
                },
                arc: function (t, n, e, o, a, c) {
                    t = +t, n = +n;
                    var f = (e = +e) * Math.cos(o),
                        s = e * Math.sin(o),
                        l = t + f,
                        h = n + s,
                        d = 1 ^ c,
                        p = c ? o - a : a - o;
                    if (e < 0) throw new Error("negative radius: " + e);
                    null === this._x1 ? this._ += "M" + l + "," + h : (Math.abs(this._x1 - l) > 1e-6 || Math.abs(this._y1 - h) > 1e-6) && (this._ += "L" + l + "," + h), e && (p < 0 && (p = p % i + i), p > u ? this._ += "A" + e + "," + e + ",0,1," + d + "," + (t - f) + "," + (n - s) + "A" + e + "," + e + ",0,1," + d + "," + (this._x1 = l) + "," + (this._y1 = h) : p > 1e-6 && (this._ += "A" + e + "," + e + ",0," + +(p >= r) + "," + d + "," + (this._x1 = t + e * Math.cos(a)) + "," + (this._y1 = n + e * Math.sin(a))))
                },
                rect: function (t, n, e, r) {
                    this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z"
                },
                toString: function () {
                    return this._
                }
            };
            var c = a;
            e.d(n, "a", (function () {
                return c
            }))
        },
        2: function (t, n, e) {
            "use strict";

            function r() {}

            function i(t, n) {
                var e = new r;
                if (t instanceof r) t.each((function (t, n) {
                    e.set(n, t)
                }));
                else if (Array.isArray(t)) {
                    var i, u = -1,
                        o = t.length;
                    if (null == n)
                        for (; ++u < o;) e.set(u, t[u]);
                    else
                        for (; ++u < o;) e.set(n(i = t[u], u, t), i)
                } else if (t)
                    for (var a in t) e.set(a, t[a]);
                return e
            }
            r.prototype = i.prototype = {
                constructor: r,
                has: function (t) {
                    return "$" + t in this
                },
                get: function (t) {
                    return this["$" + t]
                },
                set: function (t, n) {
                    return this["$" + t] = n, this
                },
                remove: function (t) {
                    var n = "$" + t;
                    return n in this && delete this[n]
                },
                clear: function () {
                    for (var t in this) "$" === t[0] && delete this[t]
                },
                keys: function () {
                    var t = [];
                    for (var n in this) "$" === n[0] && t.push(n.slice(1));
                    return t
                },
                values: function () {
                    var t = [];
                    for (var n in this) "$" === n[0] && t.push(this[n]);
                    return t
                },
                entries: function () {
                    var t = [];
                    for (var n in this) "$" === n[0] && t.push({
                        key: n.slice(1),
                        value: this[n]
                    });
                    return t
                },
                size: function () {
                    var t = 0;
                    for (var n in this) "$" === n[0] && ++t;
                    return t
                },
                empty: function () {
                    for (var t in this)
                        if ("$" === t[0]) return !1;
                    return !0
                },
                each: function (t) {
                    for (var n in this) "$" === n[0] && t(this[n], n.slice(1), this)
                }
            };
            var u = i,
                o = function () {
                    var t, n, e, r = [],
                        i = [];

                    function o(e, i, a, c) {
                        if (i >= r.length) return null != t && e.sort(t), null != n ? n(e) : e;
                        for (var f, s, l, h = -1, d = e.length, p = r[i++], v = u(), g = a(); ++h < d;)(l = v.get(f = p(s = e[h]) + "")) ? l.push(s) : v.set(f, [s]);
                        return v.each((function (t, n) {
                            c(g, n, o(t, i, a, c))
                        })), g
                    }
                    return e = {
                        object: function (t) {
                            return o(t, 0, a, c)
                        },
                        map: function (t) {
                            return o(t, 0, f, s)
                        },
                        entries: function (t) {
                            return function t(e, u) {
                                if (++u > r.length) return e;
                                var o, a = i[u - 1];
                                return null != n && u >= r.length ? o = e.entries() : (o = [], e.each((function (n, e) {
                                    o.push({
                                        key: e,
                                        values: t(n, u)
                                    })
                                }))), null != a ? o.sort((function (t, n) {
                                    return a(t.key, n.key)
                                })) : o
                            }(o(t, 0, f, s), 0)
                        },
                        key: function (t) {
                            return r.push(t), e
                        },
                        sortKeys: function (t) {
                            return i[r.length - 1] = t, e
                        },
                        sortValues: function (n) {
                            return t = n, e
                        },
                        rollup: function (t) {
                            return n = t, e
                        }
                    }
                };

            function a() {
                return {}
            }

            function c(t, n, e) {
                t[n] = e
            }

            function f() {
                return u()
            }

            function s(t, n, e) {
                t.set(n, e)
            }

            function l() {}
            var h = u.prototype;

            function d(t, n) {
                var e = new l;
                if (t instanceof l) t.each((function (t) {
                    e.add(t)
                }));
                else if (t) {
                    var r = -1,
                        i = t.length;
                    if (null == n)
                        for (; ++r < i;) e.add(t[r]);
                    else
                        for (; ++r < i;) e.add(n(t[r], r, t))
                }
                return e
            }
            l.prototype = d.prototype = {
                constructor: l,
                has: h.has,
                add: function (t) {
                    return this["$" + (t += "")] = t, this
                },
                remove: h.remove,
                clear: h.clear,
                values: h.keys,
                size: h.size,
                empty: h.empty,
                each: h.each
            };
            var p = d,
                v = function (t) {
                    var n = [];
                    for (var e in t) n.push(e);
                    return n
                },
                g = function (t) {
                    var n = [];
                    for (var e in t) n.push(t[e]);
                    return n
                },
                y = function (t) {
                    var n = [];
                    for (var e in t) n.push({
                        key: e,
                        value: t[e]
                    });
                    return n
                };
            e.d(n, "d", (function () {
                return o
            })), e.d(n, "e", (function () {
                return p
            })), e.d(n, "c", (function () {
                return u
            })), e.d(n, "b", (function () {
                return v
            })), e.d(n, "f", (function () {
                return g
            })), e.d(n, "a", (function () {
                return y
            }))
        },
        3: function (t, n, e) {
            "use strict";
            e.r(n);
            var r = e(0),
                i = Array.prototype.slice,
                u = function (t) {
                    return t
                },
                o = 1,
                a = 2,
                c = 3,
                f = 4,
                s = 1e-6;

            function l(t) {
                return "translate(" + (t + .5) + ",0)"
            }

            function h(t) {
                return "translate(0," + (t + .5) + ")"
            }

            function d() {
                return !this.__axis
            }

            function p(t, n) {
                var e = [],
                    r = null,
                    p = null,
                    v = 6,
                    g = 6,
                    y = 3,
                    _ = t === o || t === f ? -1 : 1,
                    m = t === f || t === a ? "x" : "y",
                    x = t === o || t === c ? l : h;

                function b(i) {
                    var l = null == r ? n.ticks ? n.ticks.apply(n, e) : n.domain() : r,
                        h = null == p ? n.tickFormat ? n.tickFormat.apply(n, e) : u : p,
                        b = Math.max(v, 0) + y,
                        w = n.range(),
                        M = +w[0] + .5,
                        k = +w[w.length - 1] + .5,
                        T = (n.bandwidth ? function (t) {
                            var n = Math.max(0, t.bandwidth() - 1) / 2;
                            return t.round() && (n = Math.round(n)),
                                function (e) {
                                    return +t(e) + n
                                }
                        } : function (t) {
                            return function (n) {
                                return +t(n)
                            }
                        })(n.copy()),
                        E = i.selection ? i.selection() : i,
                        N = E.selectAll(".domain").data([null]),
                        S = E.selectAll(".tick").data(l, n).order(),
                        A = S.exit(),
                        C = S.enter().append("g").attr("class", "tick"),
                        z = S.select("line"),
                        L = S.select("text");
                    N = N.merge(N.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")), S = S.merge(C), z = z.merge(C.append("line").attr("stroke", "#000").attr(m + "2", _ * v)), L = L.merge(C.append("text").attr("fill", "#000").attr(m, _ * b).attr("dy", t === o ? "0em" : t === c ? "0.71em" : "0.32em")), i !== E && (N = N.transition(i), S = S.transition(i), z = z.transition(i), L = L.transition(i), A = A.transition(i).attr("opacity", s).attr("transform", (function (t) {
                        return isFinite(t = T(t)) ? x(t) : this.getAttribute("transform")
                    })), C.attr("opacity", s).attr("transform", (function (t) {
                        var n = this.parentNode.__axis;
                        return x(n && isFinite(n = n(t)) ? n : T(t))
                    }))), A.remove(), N.attr("d", t === f || t == a ? "M" + _ * g + "," + M + "H0.5V" + k + "H" + _ * g : "M" + M + "," + _ * g + "V0.5H" + k + "V" + _ * g), S.attr("opacity", 1).attr("transform", (function (t) {
                        return x(T(t))
                    })), z.attr(m + "2", _ * v), L.attr(m, _ * b).text(h), E.filter(d).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === a ? "start" : t === f ? "end" : "middle"), E.each((function () {
                        this.__axis = T
                    }))
                }
                return b.scale = function (t) {
                    return arguments.length ? (n = t, b) : n
                }, b.ticks = function () {
                    return e = i.call(arguments), b
                }, b.tickArguments = function (t) {
                    return arguments.length ? (e = null == t ? [] : i.call(t), b) : e.slice()
                }, b.tickValues = function (t) {
                    return arguments.length ? (r = null == t ? null : i.call(t), b) : r && r.slice()
                }, b.tickFormat = function (t) {
                    return arguments.length ? (p = t, b) : p
                }, b.tickSize = function (t) {
                    return arguments.length ? (v = g = +t, b) : v
                }, b.tickSizeInner = function (t) {
                    return arguments.length ? (v = +t, b) : v
                }, b.tickSizeOuter = function (t) {
                    return arguments.length ? (g = +t, b) : g
                }, b.tickPadding = function (t) {
                    return arguments.length ? (y = +t, b) : y
                }, b
            }

            function v(t) {
                return p(o, t)
            }

            function g(t) {
                return p(a, t)
            }

            function y(t) {
                return p(c, t)
            }

            function _(t) {
                return p(f, t)
            }
            var m = {
                value: function () {}
            };

            function x() {
                for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
                    if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);
                    r[t] = []
                }
                return new b(r)
            }

            function b(t) {
                this._ = t
            }

            function w(t, n) {
                for (var e, r = 0, i = t.length; r < i; ++r)
                    if ((e = t[r]).name === n) return e.value
            }

            function M(t, n, e) {
                for (var r = 0, i = t.length; r < i; ++r)
                    if (t[r].name === n) {
                        t[r] = m, t = t.slice(0, r).concat(t.slice(r + 1));
                        break
                    } return null != e && t.push({
                    name: n,
                    value: e
                }), t
            }
            b.prototype = x.prototype = {
                constructor: b,
                on: function (t, n) {
                    var e, r, i = this._,
                        u = (r = i, (t + "").trim().split(/^|\s+/).map((function (t) {
                            var n = "",
                                e = t.indexOf(".");
                            if (e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), t && !r.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                            return {
                                type: t,
                                name: n
                            }
                        }))),
                        o = -1,
                        a = u.length;
                    if (!(arguments.length < 2)) {
                        if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
                        for (; ++o < a;)
                            if (e = (t = u[o]).type) i[e] = M(i[e], t.name, n);
                            else if (null == n)
                            for (e in i) i[e] = M(i[e], t.name, null);
                        return this
                    }
                    for (; ++o < a;)
                        if ((e = (t = u[o]).type) && (e = w(i[e], t.name))) return e
                },
                copy: function () {
                    var t = {},
                        n = this._;
                    for (var e in n) t[e] = n[e].slice();
                    return new b(t)
                },
                call: function (t, n) {
                    if ((e = arguments.length - 2) > 0)
                        for (var e, r, i = new Array(e), u = 0; u < e; ++u) i[u] = arguments[u + 2];
                    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                    for (u = 0, e = (r = this._[t]).length; u < e; ++u) r[u].value.apply(n, i)
                },
                apply: function (t, n, e) {
                    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                    for (var r = this._[t], i = 0, u = r.length; i < u; ++i) r[i].value.apply(n, e)
                }
            };
            var k = x,
                T = "http://www.w3.org/1999/xhtml",
                E = {
                    svg: "http://www.w3.org/2000/svg",
                    xhtml: T,
                    xlink: "http://www.w3.org/1999/xlink",
                    xml: "http://www.w3.org/XML/1998/namespace",
                    xmlns: "http://www.w3.org/2000/xmlns/"
                },
                N = function (t) {
                    var n = t += "",
                        e = n.indexOf(":");
                    return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), E.hasOwnProperty(n) ? {
                        space: E[n],
                        local: t
                    } : t
                },
                S = function (t) {
                    var n = N(t);
                    return (n.local ? function (t) {
                        return function () {
                            return this.ownerDocument.createElementNS(t.space, t.local)
                        }
                    } : function (t) {
                        return function () {
                            var n = this.ownerDocument,
                                e = this.namespaceURI;
                            return e === T && n.documentElement.namespaceURI === T ? n.createElement(t) : n.createElementNS(e, t)
                        }
                    })(n)
                };

            function A() {}
            var C = function (t) {
                return null == t ? A : function () {
                    return this.querySelector(t)
                }
            };

            function z() {
                return []
            }
            var L = function (t) {
                    return null == t ? z : function () {
                        return this.querySelectorAll(t)
                    }
                },
                O = function (t) {
                    return function () {
                        return this.matches(t)
                    }
                };
            if ("undefined" != typeof document) {
                var P = document.documentElement;
                if (!P.matches) {
                    var R = P.webkitMatchesSelector || P.msMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector;
                    O = function (t) {
                        return function () {
                            return R.call(this, t)
                        }
                    }
                }
            }
            var q = O,
                j = function (t) {
                    return new Array(t.length)
                };

            function D(t, n) {
                this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
            }
            D.prototype = {
                constructor: D,
                appendChild: function (t) {
                    return this._parent.insertBefore(t, this._next)
                },
                insertBefore: function (t, n) {
                    return this._parent.insertBefore(t, n)
                },
                querySelector: function (t) {
                    return this._parent.querySelector(t)
                },
                querySelectorAll: function (t) {
                    return this._parent.querySelectorAll(t)
                }
            };
            var U = "$";

            function F(t, n, e, r, i, u) {
                for (var o, a = 0, c = n.length, f = u.length; a < f; ++a)(o = n[a]) ? (o.__data__ = u[a], r[a] = o) : e[a] = new D(t, u[a]);
                for (; a < c; ++a)(o = n[a]) && (i[a] = o)
            }

            function I(t, n, e, r, i, u, o) {
                var a, c, f, s = {},
                    l = n.length,
                    h = u.length,
                    d = new Array(l);
                for (a = 0; a < l; ++a)(c = n[a]) && (d[a] = f = U + o.call(c, c.__data__, a, n), f in s ? i[a] = c : s[f] = c);
                for (a = 0; a < h; ++a)(c = s[f = U + o.call(t, u[a], a, u)]) ? (r[a] = c, c.__data__ = u[a], s[f] = null) : e[a] = new D(t, u[a]);
                for (a = 0; a < l; ++a)(c = n[a]) && s[d[a]] === c && (i[a] = c)
            }

            function Y(t, n) {
                return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
            }
            var B = function (t) {
                return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
            };

            function H(t, n) {
                return t.style.getPropertyValue(n) || B(t).getComputedStyle(t, null).getPropertyValue(n)
            }

            function X(t) {
                return t.trim().split(/^|\s+/)
            }

            function V(t) {
                return t.classList || new $(t)
            }

            function $(t) {
                this._node = t, this._names = X(t.getAttribute("class") || "")
            }

            function W(t, n) {
                for (var e = V(t), r = -1, i = n.length; ++r < i;) e.add(n[r])
            }

            function G(t, n) {
                for (var e = V(t), r = -1, i = n.length; ++r < i;) e.remove(n[r])
            }

            function Z() {
                this.textContent = ""
            }

            function Q() {
                this.innerHTML = ""
            }

            function J() {
                this.nextSibling && this.parentNode.appendChild(this)
            }

            function K() {
                this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
            }

            function tt() {
                return null
            }

            function nt() {
                var t = this.parentNode;
                t && t.removeChild(this)
            }

            function et() {
                return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling)
            }

            function rt() {
                return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling)
            }
            $.prototype = {
                add: function (t) {
                    this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
                },
                remove: function (t) {
                    var n = this._names.indexOf(t);
                    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
                },
                contains: function (t) {
                    return this._names.indexOf(t) >= 0
                }
            };
            var it = {},
                ut = null;

            function ot(t, n, e) {
                return t = at(t, n, e),
                    function (n) {
                        var e = n.relatedTarget;
                        e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
                    }
            }

            function at(t, n, e) {
                return function (r) {
                    var i = ut;
                    ut = r;
                    try {
                        t.call(this, this.__data__, n, e)
                    } finally {
                        ut = i
                    }
                }
            }

            function ct(t) {
                return function () {
                    var n = this.__on;
                    if (n) {
                        for (var e, r = 0, i = -1, u = n.length; r < u; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
                        ++i ? n.length = i : delete this.__on
                    }
                }
            }

            function ft(t, n, e) {
                var r = it.hasOwnProperty(t.type) ? ot : at;
                return function (i, u, o) {
                    var a, c = this.__on,
                        f = r(n, u, o);
                    if (c)
                        for (var s = 0, l = c.length; s < l; ++s)
                            if ((a = c[s]).type === t.type && a.name === t.name) return this.removeEventListener(a.type, a.listener, a.capture), this.addEventListener(a.type, a.listener = f, a.capture = e), void(a.value = n);
                    this.addEventListener(t.type, f, e), a = {
                        type: t.type,
                        name: t.name,
                        value: n,
                        listener: f,
                        capture: e
                    }, c ? c.push(a) : this.__on = [a]
                }
            }

            function st(t, n, e, r) {
                var i = ut;
                t.sourceEvent = ut, ut = t;
                try {
                    return n.apply(e, r)
                } finally {
                    ut = i
                }
            }

            function lt(t, n, e) {
                var r = B(t),
                    i = r.CustomEvent;
                "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i)
            }
            "undefined" != typeof document && ("onmouseenter" in document.documentElement || (it = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }));
            var ht = [null];

            function dt(t, n) {
                this._groups = t, this._parents = n
            }

            function pt() {
                return new dt([
                    [document.documentElement]
                ], ht)
            }
            dt.prototype = pt.prototype = {
                constructor: dt,
                select: function (t) {
                    "function" != typeof t && (t = C(t));
                    for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                        for (var u, o, a = n[i], c = a.length, f = r[i] = new Array(c), s = 0; s < c; ++s)(u = a[s]) && (o = t.call(u, u.__data__, s, a)) && ("__data__" in u && (o.__data__ = u.__data__), f[s] = o);
                    return new dt(r, this._parents)
                },
                selectAll: function (t) {
                    "function" != typeof t && (t = L(t));
                    for (var n = this._groups, e = n.length, r = [], i = [], u = 0; u < e; ++u)
                        for (var o, a = n[u], c = a.length, f = 0; f < c; ++f)(o = a[f]) && (r.push(t.call(o, o.__data__, f, a)), i.push(o));
                    return new dt(r, i)
                },
                filter: function (t) {
                    "function" != typeof t && (t = q(t));
                    for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                        for (var u, o = n[i], a = o.length, c = r[i] = [], f = 0; f < a; ++f)(u = o[f]) && t.call(u, u.__data__, f, o) && c.push(u);
                    return new dt(r, this._parents)
                },
                data: function (t, n) {
                    if (!t) return p = new Array(this.size()), s = -1, this.each((function (t) {
                        p[++s] = t
                    })), p;
                    var e, r = n ? I : F,
                        i = this._parents,
                        u = this._groups;
                    "function" != typeof t && (e = t, t = function () {
                        return e
                    });
                    for (var o = u.length, a = new Array(o), c = new Array(o), f = new Array(o), s = 0; s < o; ++s) {
                        var l = i[s],
                            h = u[s],
                            d = h.length,
                            p = t.call(l, l && l.__data__, s, i),
                            v = p.length,
                            g = c[s] = new Array(v),
                            y = a[s] = new Array(v);
                        r(l, h, g, y, f[s] = new Array(d), p, n);
                        for (var _, m, x = 0, b = 0; x < v; ++x)
                            if (_ = g[x]) {
                                for (x >= b && (b = x + 1); !(m = y[b]) && ++b < v;);
                                _._next = m || null
                            }
                    }
                    return (a = new dt(a, i))._enter = c, a._exit = f, a
                },
                enter: function () {
                    return new dt(this._enter || this._groups.map(j), this._parents)
                },
                exit: function () {
                    return new dt(this._exit || this._groups.map(j), this._parents)
                },
                merge: function (t) {
                    for (var n = this._groups, e = t._groups, r = n.length, i = e.length, u = Math.min(r, i), o = new Array(r), a = 0; a < u; ++a)
                        for (var c, f = n[a], s = e[a], l = f.length, h = o[a] = new Array(l), d = 0; d < l; ++d)(c = f[d] || s[d]) && (h[d] = c);
                    for (; a < r; ++a) o[a] = n[a];
                    return new dt(o, this._parents)
                },
                order: function () {
                    for (var t = this._groups, n = -1, e = t.length; ++n < e;)
                        for (var r, i = t[n], u = i.length - 1, o = i[u]; --u >= 0;)(r = i[u]) && (o && o !== r.nextSibling && o.parentNode.insertBefore(r, o), o = r);
                    return this
                },
                sort: function (t) {
                    function n(n, e) {
                        return n && e ? t(n.__data__, e.__data__) : !n - !e
                    }
                    t || (t = Y);
                    for (var e = this._groups, r = e.length, i = new Array(r), u = 0; u < r; ++u) {
                        for (var o, a = e[u], c = a.length, f = i[u] = new Array(c), s = 0; s < c; ++s)(o = a[s]) && (f[s] = o);
                        f.sort(n)
                    }
                    return new dt(i, this._parents).order()
                },
                call: function () {
                    var t = arguments[0];
                    return arguments[0] = this, t.apply(null, arguments), this
                },
                nodes: function () {
                    var t = new Array(this.size()),
                        n = -1;
                    return this.each((function () {
                        t[++n] = this
                    })), t
                },
                node: function () {
                    for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                        for (var r = t[n], i = 0, u = r.length; i < u; ++i) {
                            var o = r[i];
                            if (o) return o
                        }
                    return null
                },
                size: function () {
                    var t = 0;
                    return this.each((function () {
                        ++t
                    })), t
                },
                empty: function () {
                    return !this.node()
                },
                each: function (t) {
                    for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
                        for (var i, u = n[e], o = 0, a = u.length; o < a; ++o)(i = u[o]) && t.call(i, i.__data__, o, u);
                    return this
                },
                attr: function (t, n) {
                    var e = N(t);
                    if (arguments.length < 2) {
                        var r = this.node();
                        return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
                    }
                    return this.each((null == n ? e.local ? function (t) {
                        return function () {
                            this.removeAttributeNS(t.space, t.local)
                        }
                    } : function (t) {
                        return function () {
                            this.removeAttribute(t)
                        }
                    } : "function" == typeof n ? e.local ? function (t, n) {
                        return function () {
                            var e = n.apply(this, arguments);
                            null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
                        }
                    } : function (t, n) {
                        return function () {
                            var e = n.apply(this, arguments);
                            null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
                        }
                    } : e.local ? function (t, n) {
                        return function () {
                            this.setAttributeNS(t.space, t.local, n)
                        }
                    } : function (t, n) {
                        return function () {
                            this.setAttribute(t, n)
                        }
                    })(e, n))
                },
                style: function (t, n, e) {
                    return arguments.length > 1 ? this.each((null == n ? function (t) {
                        return function () {
                            this.style.removeProperty(t)
                        }
                    } : "function" == typeof n ? function (t, n, e) {
                        return function () {
                            var r = n.apply(this, arguments);
                            null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
                        }
                    } : function (t, n, e) {
                        return function () {
                            this.style.setProperty(t, n, e)
                        }
                    })(t, n, null == e ? "" : e)) : H(this.node(), t)
                },
                property: function (t, n) {
                    return arguments.length > 1 ? this.each((null == n ? function (t) {
                        return function () {
                            delete this[t]
                        }
                    } : "function" == typeof n ? function (t, n) {
                        return function () {
                            var e = n.apply(this, arguments);
                            null == e ? delete this[t] : this[t] = e
                        }
                    } : function (t, n) {
                        return function () {
                            this[t] = n
                        }
                    })(t, n)) : this.node()[t]
                },
                classed: function (t, n) {
                    var e = X(t + "");
                    if (arguments.length < 2) {
                        for (var r = V(this.node()), i = -1, u = e.length; ++i < u;)
                            if (!r.contains(e[i])) return !1;
                        return !0
                    }
                    return this.each(("function" == typeof n ? function (t, n) {
                        return function () {
                            (n.apply(this, arguments) ? W : G)(this, t)
                        }
                    } : n ? function (t) {
                        return function () {
                            W(this, t)
                        }
                    } : function (t) {
                        return function () {
                            G(this, t)
                        }
                    })(e, n))
                },
                text: function (t) {
                    return arguments.length ? this.each(null == t ? Z : ("function" == typeof t ? function (t) {
                        return function () {
                            var n = t.apply(this, arguments);
                            this.textContent = null == n ? "" : n
                        }
                    } : function (t) {
                        return function () {
                            this.textContent = t
                        }
                    })(t)) : this.node().textContent
                },
                html: function (t) {
                    return arguments.length ? this.each(null == t ? Q : ("function" == typeof t ? function (t) {
                        return function () {
                            var n = t.apply(this, arguments);
                            this.innerHTML = null == n ? "" : n
                        }
                    } : function (t) {
                        return function () {
                            this.innerHTML = t
                        }
                    })(t)) : this.node().innerHTML
                },
                raise: function () {
                    return this.each(J)
                },
                lower: function () {
                    return this.each(K)
                },
                append: function (t) {
                    var n = "function" == typeof t ? t : S(t);
                    return this.select((function () {
                        return this.appendChild(n.apply(this, arguments))
                    }))
                },
                insert: function (t, n) {
                    var e = "function" == typeof t ? t : S(t),
                        r = null == n ? tt : "function" == typeof n ? n : C(n);
                    return this.select((function () {
                        return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
                    }))
                },
                remove: function () {
                    return this.each(nt)
                },
                clone: function (t) {
                    return this.select(t ? rt : et)
                },
                datum: function (t) {
                    return arguments.length ? this.property("__data__", t) : this.node().__data__
                },
                on: function (t, n, e) {
                    var r, i, u = function (t) {
                            return t.trim().split(/^|\s+/).map((function (t) {
                                var n = "",
                                    e = t.indexOf(".");
                                return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {
                                    type: t,
                                    name: n
                                }
                            }))
                        }(t + ""),
                        o = u.length;
                    if (!(arguments.length < 2)) {
                        for (a = n ? ft : ct, null == e && (e = !1), r = 0; r < o; ++r) this.each(a(u[r], n, e));
                        return this
                    }
                    var a = this.node().__on;
                    if (a)
                        for (var c, f = 0, s = a.length; f < s; ++f)
                            for (r = 0, c = a[f]; r < o; ++r)
                                if ((i = u[r]).type === c.type && i.name === c.name) return c.value
                },
                dispatch: function (t, n) {
                    return this.each(("function" == typeof n ? function (t, n) {
                        return function () {
                            return lt(this, t, n.apply(this, arguments))
                        }
                    } : function (t, n) {
                        return function () {
                            return lt(this, t, n)
                        }
                    })(t, n))
                }
            };
            var vt = pt,
                gt = function (t) {
                    return "string" == typeof t ? new dt([
                        [document.querySelector(t)]
                    ], [document.documentElement]) : new dt([
                        [t]
                    ], ht)
                },
                yt = function (t) {
                    return gt(S(t).call(document.documentElement))
                },
                _t = 0;

            function mt() {
                return new xt
            }

            function xt() {
                this._ = "@" + (++_t).toString(36)
            }
            xt.prototype = mt.prototype = {
                constructor: xt,
                get: function (t) {
                    for (var n = this._; !(n in t);)
                        if (!(t = t.parentNode)) return;
                    return t[n]
                },
                set: function (t, n) {
                    return t[this._] = n
                },
                remove: function (t) {
                    return this._ in t && delete t[this._]
                },
                toString: function () {
                    return this._
                }
            };
            var bt = function () {
                    for (var t, n = ut; t = n.sourceEvent;) n = t;
                    return n
                },
                wt = function (t, n) {
                    var e = t.ownerSVGElement || t;
                    if (e.createSVGPoint) {
                        var r = e.createSVGPoint();
                        return r.x = n.clientX, r.y = n.clientY, [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
                    }
                    var i = t.getBoundingClientRect();
                    return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop]
                },
                Mt = function (t) {
                    var n = bt();
                    return n.changedTouches && (n = n.changedTouches[0]), wt(t, n)
                },
                kt = function (t) {
                    return "string" == typeof t ? new dt([document.querySelectorAll(t)], [document.documentElement]) : new dt([null == t ? [] : t], ht)
                },
                Tt = function (t, n, e) {
                    arguments.length < 3 && (e = n, n = bt().changedTouches);
                    for (var r, i = 0, u = n ? n.length : 0; i < u; ++i)
                        if ((r = n[i]).identifier === e) return wt(t, r);
                    return null
                },
                Et = function (t, n) {
                    null == n && (n = bt().touches);
                    for (var e = 0, r = n ? n.length : 0, i = new Array(r); e < r; ++e) i[e] = wt(t, n[e]);
                    return i
                };

            function Nt() {
                ut.stopImmediatePropagation()
            }
            var St = function () {
                    ut.preventDefault(), ut.stopImmediatePropagation()
                },
                At = function (t) {
                    var n = t.document.documentElement,
                        e = gt(t).on("dragstart.drag", St, !0);
                    "onselectstart" in n ? e.on("selectstart.drag", St, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none")
                };

            function Ct(t, n) {
                var e = t.document.documentElement,
                    r = gt(t).on("dragstart.drag", null);
                n && (r.on("click.drag", St, !0), setTimeout((function () {
                    r.on("click.drag", null)
                }), 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect)
            }
            var zt = function (t) {
                return function () {
                    return t
                }
            };

            function Lt(t, n, e, r, i, u, o, a, c, f) {
                this.target = t, this.type = n, this.subject = e, this.identifier = r, this.active = i, this.x = u, this.y = o, this.dx = a, this.dy = c, this._ = f
            }

            function Ot() {
                return !ut.button
            }

            function Pt() {
                return this.parentNode
            }

            function Rt(t) {
                return null == t ? {
                    x: ut.x,
                    y: ut.y
                } : t
            }

            function qt() {
                return "ontouchstart" in this
            }
            Lt.prototype.on = function () {
                var t = this._.on.apply(this._, arguments);
                return t === this._ ? this : t
            };
            var jt = function () {
                    var t, n, e, r, i = Ot,
                        u = Pt,
                        o = Rt,
                        a = qt,
                        c = {},
                        f = k("start", "drag", "end"),
                        s = 0,
                        l = 0;

                    function h(t) {
                        t.on("mousedown.drag", d).filter(a).on("touchstart.drag", g).on("touchmove.drag", y).on("touchend.drag touchcancel.drag", _).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
                    }

                    function d() {
                        if (!r && i.apply(this, arguments)) {
                            var o = m("mouse", u.apply(this, arguments), Mt, this, arguments);
                            o && (gt(ut.view).on("mousemove.drag", p, !0).on("mouseup.drag", v, !0), At(ut.view), Nt(), e = !1, t = ut.clientX, n = ut.clientY, o("start"))
                        }
                    }

                    function p() {
                        if (St(), !e) {
                            var r = ut.clientX - t,
                                i = ut.clientY - n;
                            e = r * r + i * i > l
                        }
                        c.mouse("drag")
                    }

                    function v() {
                        gt(ut.view).on("mousemove.drag mouseup.drag", null), Ct(ut.view, e), St(), c.mouse("end")
                    }

                    function g() {
                        if (i.apply(this, arguments)) {
                            var t, n, e = ut.changedTouches,
                                r = u.apply(this, arguments),
                                o = e.length;
                            for (t = 0; t < o; ++t)(n = m(e[t].identifier, r, Tt, this, arguments)) && (Nt(), n("start"))
                        }
                    }

                    function y() {
                        var t, n, e = ut.changedTouches,
                            r = e.length;
                        for (t = 0; t < r; ++t)(n = c[e[t].identifier]) && (St(), n("drag"))
                    }

                    function _() {
                        var t, n, e = ut.changedTouches,
                            i = e.length;
                        for (r && clearTimeout(r), r = setTimeout((function () {
                                r = null
                            }), 500), t = 0; t < i; ++t)(n = c[e[t].identifier]) && (Nt(), n("end"))
                    }

                    function m(t, n, e, r, i) {
                        var u, a, l, d = e(n, t),
                            p = f.copy();
                        if (st(new Lt(h, "beforestart", u, t, s, d[0], d[1], 0, 0, p), (function () {
                                return null != (ut.subject = u = o.apply(r, i)) && (a = u.x - d[0] || 0, l = u.y - d[1] || 0, !0)
                            }))) return function o(f) {
                            var v, g = d;
                            switch (f) {
                                case "start":
                                    c[t] = o, v = s++;
                                    break;
                                case "end":
                                    delete c[t], --s;
                                case "drag":
                                    d = e(n, t), v = s
                            }
                            st(new Lt(h, f, u, t, v, d[0] + a, d[1] + l, d[0] - g[0], d[1] - g[1], p), p.apply, p, [f, r, i])
                        }
                    }
                    return h.filter = function (t) {
                        return arguments.length ? (i = "function" == typeof t ? t : zt(!!t), h) : i
                    }, h.container = function (t) {
                        return arguments.length ? (u = "function" == typeof t ? t : zt(t), h) : u
                    }, h.subject = function (t) {
                        return arguments.length ? (o = "function" == typeof t ? t : zt(t), h) : o
                    }, h.touchable = function (t) {
                        return arguments.length ? (a = "function" == typeof t ? t : zt(!!t), h) : a
                    }, h.on = function () {
                        var t = f.on.apply(f, arguments);
                        return t === f ? h : t
                    }, h.clickDistance = function (t) {
                        return arguments.length ? (l = (t = +t) * t, h) : Math.sqrt(l)
                    }, h
                },
                Dt = function (t, n, e) {
                    t.prototype = n.prototype = e, e.constructor = t
                };

            function Ut(t, n) {
                var e = Object.create(t.prototype);
                for (var r in n) e[r] = n[r];
                return e
            }

            function Ft() {}
            var It = "\\s*([+-]?\\d+)\\s*",
                Yt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
                Bt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
                Ht = /^#([0-9a-f]{3})$/,
                Xt = /^#([0-9a-f]{6})$/,
                Vt = new RegExp("^rgb\\(" + [It, It, It] + "\\)$"),
                $t = new RegExp("^rgb\\(" + [Bt, Bt, Bt] + "\\)$"),
                Wt = new RegExp("^rgba\\(" + [It, It, It, Yt] + "\\)$"),
                Gt = new RegExp("^rgba\\(" + [Bt, Bt, Bt, Yt] + "\\)$"),
                Zt = new RegExp("^hsl\\(" + [Yt, Bt, Bt] + "\\)$"),
                Qt = new RegExp("^hsla\\(" + [Yt, Bt, Bt, Yt] + "\\)$"),
                Jt = {
                    aliceblue: 15792383,
                    antiquewhite: 16444375,
                    aqua: 65535,
                    aquamarine: 8388564,
                    azure: 15794175,
                    beige: 16119260,
                    bisque: 16770244,
                    black: 0,
                    blanchedalmond: 16772045,
                    blue: 255,
                    blueviolet: 9055202,
                    brown: 10824234,
                    burlywood: 14596231,
                    cadetblue: 6266528,
                    chartreuse: 8388352,
                    chocolate: 13789470,
                    coral: 16744272,
                    cornflowerblue: 6591981,
                    cornsilk: 16775388,
                    crimson: 14423100,
                    cyan: 65535,
                    darkblue: 139,
                    darkcyan: 35723,
                    darkgoldenrod: 12092939,
                    darkgray: 11119017,
                    darkgreen: 25600,
                    darkgrey: 11119017,
                    darkkhaki: 12433259,
                    darkmagenta: 9109643,
                    darkolivegreen: 5597999,
                    darkorange: 16747520,
                    darkorchid: 10040012,
                    darkred: 9109504,
                    darksalmon: 15308410,
                    darkseagreen: 9419919,
                    darkslateblue: 4734347,
                    darkslategray: 3100495,
                    darkslategrey: 3100495,
                    darkturquoise: 52945,
                    darkviolet: 9699539,
                    deeppink: 16716947,
                    deepskyblue: 49151,
                    dimgray: 6908265,
                    dimgrey: 6908265,
                    dodgerblue: 2003199,
                    firebrick: 11674146,
                    floralwhite: 16775920,
                    forestgreen: 2263842,
                    fuchsia: 16711935,
                    gainsboro: 14474460,
                    ghostwhite: 16316671,
                    gold: 16766720,
                    goldenrod: 14329120,
                    gray: 8421504,
                    green: 32768,
                    greenyellow: 11403055,
                    grey: 8421504,
                    honeydew: 15794160,
                    hotpink: 16738740,
                    indianred: 13458524,
                    indigo: 4915330,
                    ivory: 16777200,
                    khaki: 15787660,
                    lavender: 15132410,
                    lavenderblush: 16773365,
                    lawngreen: 8190976,
                    lemonchiffon: 16775885,
                    lightblue: 11393254,
                    lightcoral: 15761536,
                    lightcyan: 14745599,
                    lightgoldenrodyellow: 16448210,
                    lightgray: 13882323,
                    lightgreen: 9498256,
                    lightgrey: 13882323,
                    lightpink: 16758465,
                    lightsalmon: 16752762,
                    lightseagreen: 2142890,
                    lightskyblue: 8900346,
                    lightslategray: 7833753,
                    lightslategrey: 7833753,
                    lightsteelblue: 11584734,
                    lightyellow: 16777184,
                    lime: 65280,
                    limegreen: 3329330,
                    linen: 16445670,
                    magenta: 16711935,
                    maroon: 8388608,
                    mediumaquamarine: 6737322,
                    mediumblue: 205,
                    mediumorchid: 12211667,
                    mediumpurple: 9662683,
                    mediumseagreen: 3978097,
                    mediumslateblue: 8087790,
                    mediumspringgreen: 64154,
                    mediumturquoise: 4772300,
                    mediumvioletred: 13047173,
                    midnightblue: 1644912,
                    mintcream: 16121850,
                    mistyrose: 16770273,
                    moccasin: 16770229,
                    navajowhite: 16768685,
                    navy: 128,
                    oldlace: 16643558,
                    olive: 8421376,
                    olivedrab: 7048739,
                    orange: 16753920,
                    orangered: 16729344,
                    orchid: 14315734,
                    palegoldenrod: 15657130,
                    palegreen: 10025880,
                    paleturquoise: 11529966,
                    palevioletred: 14381203,
                    papayawhip: 16773077,
                    peachpuff: 16767673,
                    peru: 13468991,
                    pink: 16761035,
                    plum: 14524637,
                    powderblue: 11591910,
                    purple: 8388736,
                    rebeccapurple: 6697881,
                    red: 16711680,
                    rosybrown: 12357519,
                    royalblue: 4286945,
                    saddlebrown: 9127187,
                    salmon: 16416882,
                    sandybrown: 16032864,
                    seagreen: 3050327,
                    seashell: 16774638,
                    sienna: 10506797,
                    silver: 12632256,
                    skyblue: 8900331,
                    slateblue: 6970061,
                    slategray: 7372944,
                    slategrey: 7372944,
                    snow: 16775930,
                    springgreen: 65407,
                    steelblue: 4620980,
                    tan: 13808780,
                    teal: 32896,
                    thistle: 14204888,
                    tomato: 16737095,
                    turquoise: 4251856,
                    violet: 15631086,
                    wheat: 16113331,
                    white: 16777215,
                    whitesmoke: 16119285,
                    yellow: 16776960,
                    yellowgreen: 10145074
                };

            function Kt(t) {
                var n;
                return t = (t + "").trim().toLowerCase(), (n = Ht.exec(t)) ? new un((n = parseInt(n[1], 16)) >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : (n = Xt.exec(t)) ? tn(parseInt(n[1], 16)) : (n = Vt.exec(t)) ? new un(n[1], n[2], n[3], 1) : (n = $t.exec(t)) ? new un(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = Wt.exec(t)) ? nn(n[1], n[2], n[3], n[4]) : (n = Gt.exec(t)) ? nn(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = Zt.exec(t)) ? on(n[1], n[2] / 100, n[3] / 100, 1) : (n = Qt.exec(t)) ? on(n[1], n[2] / 100, n[3] / 100, n[4]) : Jt.hasOwnProperty(t) ? tn(Jt[t]) : "transparent" === t ? new un(NaN, NaN, NaN, 0) : null
            }

            function tn(t) {
                return new un(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
            }

            function nn(t, n, e, r) {
                return r <= 0 && (t = n = e = NaN), new un(t, n, e, r)
            }

            function en(t) {
                return t instanceof Ft || (t = Kt(t)), t ? new un((t = t.rgb()).r, t.g, t.b, t.opacity) : new un
            }

            function rn(t, n, e, r) {
                return 1 === arguments.length ? en(t) : new un(t, n, e, null == r ? 1 : r)
            }

            function un(t, n, e, r) {
                this.r = +t, this.g = +n, this.b = +e, this.opacity = +r
            }

            function on(t, n, e, r) {
                return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new cn(t, n, e, r)
            }

            function an(t, n, e, r) {
                return 1 === arguments.length ? function (t) {
                    if (t instanceof cn) return new cn(t.h, t.s, t.l, t.opacity);
                    if (t instanceof Ft || (t = Kt(t)), !t) return new cn;
                    if (t instanceof cn) return t;
                    var n = (t = t.rgb()).r / 255,
                        e = t.g / 255,
                        r = t.b / 255,
                        i = Math.min(n, e, r),
                        u = Math.max(n, e, r),
                        o = NaN,
                        a = u - i,
                        c = (u + i) / 2;
                    return a ? (o = n === u ? (e - r) / a + 6 * (e < r) : e === u ? (r - n) / a + 2 : (n - e) / a + 4, a /= c < .5 ? u + i : 2 - u - i, o *= 60) : a = c > 0 && c < 1 ? 0 : o, new cn(o, a, c, t.opacity)
                }(t) : new cn(t, n, e, null == r ? 1 : r)
            }

            function cn(t, n, e, r) {
                this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
            }

            function fn(t, n, e) {
                return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
            }
            Dt(Ft, Kt, {
                displayable: function () {
                    return this.rgb().displayable()
                },
                toString: function () {
                    return this.rgb() + ""
                }
            }), Dt(un, rn, Ut(Ft, {
                brighter: function (t) {
                    return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new un(this.r * t, this.g * t, this.b * t, this.opacity)
                },
                darker: function (t) {
                    return t = null == t ? .7 : Math.pow(.7, t), new un(this.r * t, this.g * t, this.b * t, this.opacity)
                },
                rgb: function () {
                    return this
                },
                displayable: function () {
                    return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
                },
                toString: function () {
                    var t = this.opacity;
                    return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
                }
            })), Dt(cn, an, Ut(Ft, {
                brighter: function (t) {
                    return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new cn(this.h, this.s, this.l * t, this.opacity)
                },
                darker: function (t) {
                    return t = null == t ? .7 : Math.pow(.7, t), new cn(this.h, this.s, this.l * t, this.opacity)
                },
                rgb: function () {
                    var t = this.h % 360 + 360 * (this.h < 0),
                        n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                        e = this.l,
                        r = e + (e < .5 ? e : 1 - e) * n,
                        i = 2 * e - r;
                    return new un(fn(t >= 240 ? t - 240 : t + 120, i, r), fn(t, i, r), fn(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
                },
                displayable: function () {
                    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
                }
            }));
            var sn = Math.PI / 180,
                ln = 180 / Math.PI,
                hn = .95047,
                dn = 1,
                pn = 1.08883,
                vn = 4 / 29,
                gn = 6 / 29,
                yn = 3 * gn * gn,
                _n = gn * gn * gn;

            function mn(t) {
                if (t instanceof bn) return new bn(t.l, t.a, t.b, t.opacity);
                if (t instanceof Nn) {
                    var n = t.h * sn;
                    return new bn(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
                }
                t instanceof un || (t = en(t));
                var e = Tn(t.r),
                    r = Tn(t.g),
                    i = Tn(t.b),
                    u = wn((.4124564 * e + .3575761 * r + .1804375 * i) / hn),
                    o = wn((.2126729 * e + .7151522 * r + .072175 * i) / dn);
                return new bn(116 * o - 16, 500 * (u - o), 200 * (o - wn((.0193339 * e + .119192 * r + .9503041 * i) / pn)), t.opacity)
            }

            function xn(t, n, e, r) {
                return 1 === arguments.length ? mn(t) : new bn(t, n, e, null == r ? 1 : r)
            }

            function bn(t, n, e, r) {
                this.l = +t, this.a = +n, this.b = +e, this.opacity = +r
            }

            function wn(t) {
                return t > _n ? Math.pow(t, 1 / 3) : t / yn + vn
            }

            function Mn(t) {
                return t > gn ? t * t * t : yn * (t - vn)
            }

            function kn(t) {
                return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
            }

            function Tn(t) {
                return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
            }

            function En(t, n, e, r) {
                return 1 === arguments.length ? function (t) {
                    if (t instanceof Nn) return new Nn(t.h, t.c, t.l, t.opacity);
                    t instanceof bn || (t = mn(t));
                    var n = Math.atan2(t.b, t.a) * ln;
                    return new Nn(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
                }(t) : new Nn(t, n, e, null == r ? 1 : r)
            }

            function Nn(t, n, e, r) {
                this.h = +t, this.c = +n, this.l = +e, this.opacity = +r
            }
            Dt(bn, xn, Ut(Ft, {
                brighter: function (t) {
                    return new bn(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
                },
                darker: function (t) {
                    return new bn(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
                },
                rgb: function () {
                    var t = (this.l + 16) / 116,
                        n = isNaN(this.a) ? t : t + this.a / 500,
                        e = isNaN(this.b) ? t : t - this.b / 200;
                    return t = dn * Mn(t), new un(kn(3.2404542 * (n = hn * Mn(n)) - 1.5371385 * t - .4985314 * (e = pn * Mn(e))), kn(-.969266 * n + 1.8760108 * t + .041556 * e), kn(.0556434 * n - .2040259 * t + 1.0572252 * e), this.opacity)
                }
            })), Dt(Nn, En, Ut(Ft, {
                brighter: function (t) {
                    return new Nn(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
                },
                darker: function (t) {
                    return new Nn(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
                },
                rgb: function () {
                    return mn(this).rgb()
                }
            }));
            var Sn = -.29227,
                An = -.90649,
                Cn = 1.97294,
                zn = Cn * An,
                Ln = 1.78277 * Cn,
                On = 1.78277 * Sn - -.14861 * An;

            function Pn(t, n, e, r) {
                return 1 === arguments.length ? function (t) {
                    if (t instanceof Rn) return new Rn(t.h, t.s, t.l, t.opacity);
                    t instanceof un || (t = en(t));
                    var n = t.r / 255,
                        e = t.g / 255,
                        r = t.b / 255,
                        i = (On * r + zn * n - Ln * e) / (On + zn - Ln),
                        u = r - i,
                        o = (Cn * (e - i) - Sn * u) / An,
                        a = Math.sqrt(o * o + u * u) / (Cn * i * (1 - i)),
                        c = a ? Math.atan2(o, u) * ln - 120 : NaN;
                    return new Rn(c < 0 ? c + 360 : c, a, i, t.opacity)
                }(t) : new Rn(t, n, e, null == r ? 1 : r)
            }

            function Rn(t, n, e, r) {
                this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
            }

            function qn(t, n, e, r, i) {
                var u = t * t,
                    o = u * t;
                return ((1 - 3 * t + 3 * u - o) * n + (4 - 6 * u + 3 * o) * e + (1 + 3 * t + 3 * u - 3 * o) * r + o * i) / 6
            }
            Dt(Rn, Pn, Ut(Ft, {
                brighter: function (t) {
                    return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Rn(this.h, this.s, this.l * t, this.opacity)
                },
                darker: function (t) {
                    return t = null == t ? .7 : Math.pow(.7, t), new Rn(this.h, this.s, this.l * t, this.opacity)
                },
                rgb: function () {
                    var t = isNaN(this.h) ? 0 : (this.h + 120) * sn,
                        n = +this.l,
                        e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                        r = Math.cos(t),
                        i = Math.sin(t);
                    return new un(255 * (n + e * (-.14861 * r + 1.78277 * i)), 255 * (n + e * (Sn * r + An * i)), 255 * (n + e * (Cn * r)), this.opacity)
                }
            }));
            var jn = function (t) {
                    var n = t.length - 1;
                    return function (e) {
                        var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
                            i = t[r],
                            u = t[r + 1],
                            o = r > 0 ? t[r - 1] : 2 * i - u,
                            a = r < n - 1 ? t[r + 2] : 2 * u - i;
                        return qn((e - r / n) * n, o, i, u, a)
                    }
                },
                Dn = function (t) {
                    var n = t.length;
                    return function (e) {
                        var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
                            i = t[(r + n - 1) % n],
                            u = t[r % n],
                            o = t[(r + 1) % n],
                            a = t[(r + 2) % n];
                        return qn((e - r / n) * n, i, u, o, a)
                    }
                },
                Un = function (t) {
                    return function () {
                        return t
                    }
                };

            function Fn(t, n) {
                return function (e) {
                    return t + e * n
                }
            }

            function In(t, n) {
                var e = n - t;
                return e ? Fn(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : Un(isNaN(t) ? n : t)
            }

            function Yn(t, n) {
                var e = n - t;
                return e ? Fn(t, e) : Un(isNaN(t) ? n : t)
            }
            var Bn = function t(n) {
                var e = function (t) {
                    return 1 == (t = +t) ? Yn : function (n, e) {
                        return e - n ? function (t, n, e) {
                            return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e,
                                function (r) {
                                    return Math.pow(t + r * n, e)
                                }
                        }(n, e, t) : Un(isNaN(n) ? e : n)
                    }
                }(n);

                function r(t, n) {
                    var r = e((t = rn(t)).r, (n = rn(n)).r),
                        i = e(t.g, n.g),
                        u = e(t.b, n.b),
                        o = Yn(t.opacity, n.opacity);
                    return function (n) {
                        return t.r = r(n), t.g = i(n), t.b = u(n), t.opacity = o(n), t + ""
                    }
                }
                return r.gamma = t, r
            }(1);

            function Hn(t) {
                return function (n) {
                    var e, r, i = n.length,
                        u = new Array(i),
                        o = new Array(i),
                        a = new Array(i);
                    for (e = 0; e < i; ++e) r = rn(n[e]), u[e] = r.r || 0, o[e] = r.g || 0, a[e] = r.b || 0;
                    return u = t(u), o = t(o), a = t(a), r.opacity = 1,
                        function (t) {
                            return r.r = u(t), r.g = o(t), r.b = a(t), r + ""
                        }
                }
            }
            var Xn, Vn, $n, Wn, Gn = Hn(jn),
                Zn = Hn(Dn),
                Qn = function (t, n) {
                    var e, r = n ? n.length : 0,
                        i = t ? Math.min(r, t.length) : 0,
                        u = new Array(i),
                        o = new Array(r);
                    for (e = 0; e < i; ++e) u[e] = ie(t[e], n[e]);
                    for (; e < r; ++e) o[e] = n[e];
                    return function (t) {
                        for (e = 0; e < i; ++e) o[e] = u[e](t);
                        return o
                    }
                },
                Jn = function (t, n) {
                    var e = new Date;
                    return n -= t = +t,
                        function (r) {
                            return e.setTime(t + n * r), e
                        }
                },
                Kn = function (t, n) {
                    return n -= t = +t,
                        function (e) {
                            return t + n * e
                        }
                },
                te = function (t, n) {
                    var e, r = {},
                        i = {};
                    for (e in null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {}), n) e in t ? r[e] = ie(t[e], n[e]) : i[e] = n[e];
                    return function (t) {
                        for (e in r) i[e] = r[e](t);
                        return i
                    }
                },
                ne = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
                ee = new RegExp(ne.source, "g"),
                re = function (t, n) {
                    var e, r, i, u = ne.lastIndex = ee.lastIndex = 0,
                        o = -1,
                        a = [],
                        c = [];
                    for (t += "", n += "";
                        (e = ne.exec(t)) && (r = ee.exec(n));)(i = r.index) > u && (i = n.slice(u, i), a[o] ? a[o] += i : a[++o] = i), (e = e[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, c.push({
                        i: o,
                        x: Kn(e, r)
                    })), u = ee.lastIndex;
                    return u < n.length && (i = n.slice(u), a[o] ? a[o] += i : a[++o] = i), a.length < 2 ? c[0] ? function (t) {
                        return function (n) {
                            return t(n) + ""
                        }
                    }(c[0].x) : function (t) {
                        return function () {
                            return t
                        }
                    }(n) : (n = c.length, function (t) {
                        for (var e, r = 0; r < n; ++r) a[(e = c[r]).i] = e.x(t);
                        return a.join("")
                    })
                },
                ie = function (t, n) {
                    var e, r = typeof n;
                    return null == n || "boolean" === r ? Un(n) : ("number" === r ? Kn : "string" === r ? (e = Kt(n)) ? (n = e, Bn) : re : n instanceof Kt ? Bn : n instanceof Date ? Jn : Array.isArray(n) ? Qn : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? te : Kn)(t, n)
                },
                ue = function (t, n) {
                    return n -= t = +t,
                        function (e) {
                            return Math.round(t + n * e)
                        }
                },
                oe = 180 / Math.PI,
                ae = {
                    translateX: 0,
                    translateY: 0,
                    rotate: 0,
                    skewX: 0,
                    scaleX: 1,
                    scaleY: 1
                },
                ce = function (t, n, e, r, i, u) {
                    var o, a, c;
                    return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (c = t * e + n * r) && (e -= t * c, r -= n * c), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, c /= a), t * r < n * e && (t = -t, n = -n, c = -c, o = -o), {
                        translateX: i,
                        translateY: u,
                        rotate: Math.atan2(n, t) * oe,
                        skewX: Math.atan(c) * oe,
                        scaleX: o,
                        scaleY: a
                    }
                };

            function fe(t, n, e, r) {
                function i(t) {
                    return t.length ? t.pop() + " " : ""
                }
                return function (u, o) {
                    var a = [],
                        c = [];
                    return u = t(u), o = t(o),
                        function (t, r, i, u, o, a) {
                            if (t !== i || r !== u) {
                                var c = o.push("translate(", null, n, null, e);
                                a.push({
                                    i: c - 4,
                                    x: Kn(t, i)
                                }, {
                                    i: c - 2,
                                    x: Kn(r, u)
                                })
                            } else(i || u) && o.push("translate(" + i + n + u + e)
                        }(u.translateX, u.translateY, o.translateX, o.translateY, a, c),
                        function (t, n, e, u) {
                            t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), u.push({
                                i: e.push(i(e) + "rotate(", null, r) - 2,
                                x: Kn(t, n)
                            })) : n && e.push(i(e) + "rotate(" + n + r)
                        }(u.rotate, o.rotate, a, c),
                        function (t, n, e, u) {
                            t !== n ? u.push({
                                i: e.push(i(e) + "skewX(", null, r) - 2,
                                x: Kn(t, n)
                            }) : n && e.push(i(e) + "skewX(" + n + r)
                        }(u.skewX, o.skewX, a, c),
                        function (t, n, e, r, u, o) {
                            if (t !== e || n !== r) {
                                var a = u.push(i(u) + "scale(", null, ",", null, ")");
                                o.push({
                                    i: a - 4,
                                    x: Kn(t, e)
                                }, {
                                    i: a - 2,
                                    x: Kn(n, r)
                                })
                            } else 1 === e && 1 === r || u.push(i(u) + "scale(" + e + "," + r + ")")
                        }(u.scaleX, u.scaleY, o.scaleX, o.scaleY, a, c), u = o = null,
                        function (t) {
                            for (var n, e = -1, r = c.length; ++e < r;) a[(n = c[e]).i] = n.x(t);
                            return a.join("")
                        }
                }
            }
            var se = fe((function (t) {
                    return "none" === t ? ae : (Xn || (Xn = document.createElement("DIV"), Vn = document.documentElement, $n = document.defaultView), Xn.style.transform = t, t = $n.getComputedStyle(Vn.appendChild(Xn), null).getPropertyValue("transform"), Vn.removeChild(Xn), t = t.slice(7, -1).split(","), ce(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
                }), "px, ", "px)", "deg)"),
                le = fe((function (t) {
                    return null == t ? ae : (Wn || (Wn = document.createElementNS("http://www.w3.org/2000/svg", "g")), Wn.setAttribute("transform", t), (t = Wn.transform.baseVal.consolidate()) ? (t = t.matrix, ce(t.a, t.b, t.c, t.d, t.e, t.f)) : ae)
                }), ", ", ")", ")"),
                he = Math.SQRT2;

            function de(t) {
                return ((t = Math.exp(t)) + 1 / t) / 2
            }
            var pe = function (t, n) {
                var e, r, i = t[0],
                    u = t[1],
                    o = t[2],
                    a = n[0],
                    c = n[1],
                    f = n[2],
                    s = a - i,
                    l = c - u,
                    h = s * s + l * l;
                if (h < 1e-12) r = Math.log(f / o) / he, e = function (t) {
                    return [i + t * s, u + t * l, o * Math.exp(he * t * r)]
                };
                else {
                    var d = Math.sqrt(h),
                        p = (f * f - o * o + 4 * h) / (2 * o * 2 * d),
                        v = (f * f - o * o - 4 * h) / (2 * f * 2 * d),
                        g = Math.log(Math.sqrt(p * p + 1) - p),
                        y = Math.log(Math.sqrt(v * v + 1) - v);
                    r = (y - g) / he, e = function (t) {
                        var n, e = t * r,
                            a = de(g),
                            c = o / (2 * d) * (a * (n = he * e + g, ((n = Math.exp(2 * n)) - 1) / (n + 1)) - function (t) {
                                return ((t = Math.exp(t)) - 1 / t) / 2
                            }(g));
                        return [i + c * s, u + c * l, o * a / de(he * e + g)]
                    }
                }
                return e.duration = 1e3 * r, e
            };

            function ve(t) {
                return function (n, e) {
                    var r = t((n = an(n)).h, (e = an(e)).h),
                        i = Yn(n.s, e.s),
                        u = Yn(n.l, e.l),
                        o = Yn(n.opacity, e.opacity);
                    return function (t) {
                        return n.h = r(t), n.s = i(t), n.l = u(t), n.opacity = o(t), n + ""
                    }
                }
            }
            var ge = ve(In),
                ye = ve(Yn);

            function _e(t, n) {
                var e = Yn((t = xn(t)).l, (n = xn(n)).l),
                    r = Yn(t.a, n.a),
                    i = Yn(t.b, n.b),
                    u = Yn(t.opacity, n.opacity);
                return function (n) {
                    return t.l = e(n), t.a = r(n), t.b = i(n), t.opacity = u(n), t + ""
                }
            }

            function me(t) {
                return function (n, e) {
                    var r = t((n = En(n)).h, (e = En(e)).h),
                        i = Yn(n.c, e.c),
                        u = Yn(n.l, e.l),
                        o = Yn(n.opacity, e.opacity);
                    return function (t) {
                        return n.h = r(t), n.c = i(t), n.l = u(t), n.opacity = o(t), n + ""
                    }
                }
            }
            var xe = me(In),
                be = me(Yn);

            function we(t) {
                return function n(e) {
                    function r(n, r) {
                        var i = t((n = Pn(n)).h, (r = Pn(r)).h),
                            u = Yn(n.s, r.s),
                            o = Yn(n.l, r.l),
                            a = Yn(n.opacity, r.opacity);
                        return function (t) {
                            return n.h = i(t), n.s = u(t), n.l = o(Math.pow(t, e)), n.opacity = a(t), n + ""
                        }
                    }
                    return e = +e, r.gamma = n, r
                }(1)
            }
            var Me, ke, Te = we(In),
                Ee = we(Yn),
                Ne = function (t, n) {
                    for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1));
                    return e
                },
                Se = 0,
                Ae = 0,
                Ce = 0,
                ze = 1e3,
                Le = 0,
                Oe = 0,
                Pe = 0,
                Re = "object" == typeof performance && performance.now ? performance : Date,
                qe = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
                    setTimeout(t, 17)
                };

            function je() {
                return Oe || (qe(De), Oe = Re.now() + Pe)
            }

            function De() {
                Oe = 0
            }

            function Ue() {
                this._call = this._time = this._next = null
            }

            function Fe(t, n, e) {
                var r = new Ue;
                return r.restart(t, n, e), r
            }

            function Ie() {
                je(), ++Se;
                for (var t, n = Me; n;)(t = Oe - n._time) >= 0 && n._call.call(null, t), n = n._next;
                --Se
            }

            function Ye() {
                Oe = (Le = Re.now()) + Pe, Se = Ae = 0;
                try {
                    Ie()
                } finally {
                    Se = 0,
                        function () {
                            for (var t, n, e = Me, r = 1 / 0; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Me = n);
                            ke = t, He(r)
                        }(), Oe = 0
                }
            }

            function Be() {
                var t = Re.now(),
                    n = t - Le;
                n > ze && (Pe -= n, Le = t)
            }

            function He(t) {
                Se || (Ae && (Ae = clearTimeout(Ae)), t - Oe > 24 ? (t < 1 / 0 && (Ae = setTimeout(Ye, t - Re.now() - Pe)), Ce && (Ce = clearInterval(Ce))) : (Ce || (Le = Re.now(), Ce = setInterval(Be, ze)), Se = 1, qe(Ye)))
            }
            Ue.prototype = Fe.prototype = {
                constructor: Ue,
                restart: function (t, n, e) {
                    if ("function" != typeof t) throw new TypeError("callback is not a function");
                    e = (null == e ? je() : +e) + (null == n ? 0 : +n), this._next || ke === this || (ke ? ke._next = this : Me = this, ke = this), this._call = t, this._time = e, He()
                },
                stop: function () {
                    this._call && (this._call = null, this._time = 1 / 0, He())
                }
            };
            var Xe = function (t, n, e) {
                    var r = new Ue;
                    return n = null == n ? 0 : +n, r.restart((function (e) {
                        r.stop(), t(e + n)
                    }), n, e), r
                },
                Ve = function (t, n, e) {
                    var r = new Ue,
                        i = n;
                    return null == n ? (r.restart(t, n, e), r) : (n = +n, e = null == e ? je() : +e, r.restart((function u(o) {
                        o += i, r.restart(u, i += n, e), t(o)
                    }), n, e), r)
                },
                $e = k("start", "end", "interrupt"),
                We = [],
                Ge = 0,
                Ze = 1,
                Qe = 2,
                Je = 3,
                Ke = 4,
                tr = 5,
                nr = 6,
                er = function (t, n, e, r, i, u) {
                    var o = t.__transition;
                    if (o) {
                        if (e in o) return
                    } else t.__transition = {};
                    ! function (t, n, e) {
                        var r, i = t.__transition;

                        function u(c) {
                            var f, s, l, h;
                            if (e.state !== Ze) return a();
                            for (f in i)
                                if ((h = i[f]).name === e.name) {
                                    if (h.state === Je) return Xe(u);
                                    h.state === Ke ? (h.state = nr, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete i[f]) : +f < n && (h.state = nr, h.timer.stop(), delete i[f])
                                } if (Xe((function () {
                                    e.state === Je && (e.state = Ke, e.timer.restart(o, e.delay, e.time), o(c))
                                })), e.state = Qe, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Qe) {
                                for (e.state = Je, r = new Array(l = e.tween.length), f = 0, s = -1; f < l; ++f)(h = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (r[++s] = h);
                                r.length = s + 1
                            }
                        }

                        function o(n) {
                            for (var i = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(a), e.state = tr, 1), u = -1, o = r.length; ++u < o;) r[u].call(null, i);
                            e.state === tr && (e.on.call("end", t, t.__data__, e.index, e.group), a())
                        }

                        function a() {
                            for (var r in e.state = nr, e.timer.stop(), delete i[n], i) return;
                            delete t.__transition
                        }
                        i[n] = e, e.timer = Fe((function (t) {
                            e.state = Ze, e.timer.restart(u, e.delay, e.time), e.delay <= t && u(t - e.delay)
                        }), 0, e.time)
                    }(t, e, {
                        name: n,
                        index: r,
                        group: i,
                        on: $e,
                        tween: We,
                        time: u.time,
                        delay: u.delay,
                        duration: u.duration,
                        ease: u.ease,
                        timer: null,
                        state: Ge
                    })
                };

            function rr(t, n) {
                var e = ur(t, n);
                if (e.state > Ge) throw new Error("too late; already scheduled");
                return e
            }

            function ir(t, n) {
                var e = ur(t, n);
                if (e.state > Qe) throw new Error("too late; already started");
                return e
            }

            function ur(t, n) {
                var e = t.__transition;
                if (!e || !(e = e[n])) throw new Error("transition not found");
                return e
            }
            var or = function (t, n) {
                var e, r, i, u = t.__transition,
                    o = !0;
                if (u) {
                    for (i in n = null == n ? null : n + "", u)(e = u[i]).name === n ? (r = e.state > Qe && e.state < tr, e.state = nr, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete u[i]) : o = !1;
                    o && delete t.__transition
                }
            };

            function ar(t, n, e) {
                var r = t._id;
                return t.each((function () {
                        var t = ir(this, r);
                        (t.value || (t.value = {}))[n] = e.apply(this, arguments)
                    })),
                    function (t) {
                        return ur(t, r).value[n]
                    }
            }
            var cr = function (t, n) {
                    var e;
                    return ("number" == typeof n ? Kn : n instanceof Kt ? Bn : (e = Kt(n)) ? (n = e, Bn) : re)(t, n)
                },
                fr = vt.prototype.constructor,
                sr = 0;

            function lr(t, n, e, r) {
                this._groups = t, this._parents = n, this._name = e, this._id = r
            }

            function hr(t) {
                return vt().transition(t)
            }

            function dr() {
                return ++sr
            }
            var pr = vt.prototype;

            function vr(t) {
                return +t
            }

            function gr(t) {
                return t * t
            }

            function yr(t) {
                return t * (2 - t)
            }

            function _r(t) {
                return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2
            }

            function mr(t) {
                return t * t * t
            }

            function xr(t) {
                return --t * t * t + 1
            }

            function br(t) {
                return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
            }
            lr.prototype = hr.prototype = {
                constructor: lr,
                select: function (t) {
                    var n = this._name,
                        e = this._id;
                    "function" != typeof t && (t = C(t));
                    for (var r = this._groups, i = r.length, u = new Array(i), o = 0; o < i; ++o)
                        for (var a, c, f = r[o], s = f.length, l = u[o] = new Array(s), h = 0; h < s; ++h)(a = f[h]) && (c = t.call(a, a.__data__, h, f)) && ("__data__" in a && (c.__data__ = a.__data__), l[h] = c, er(l[h], n, e, h, l, ur(a, e)));
                    return new lr(u, this._parents, n, e)
                },
                selectAll: function (t) {
                    var n = this._name,
                        e = this._id;
                    "function" != typeof t && (t = L(t));
                    for (var r = this._groups, i = r.length, u = [], o = [], a = 0; a < i; ++a)
                        for (var c, f = r[a], s = f.length, l = 0; l < s; ++l)
                            if (c = f[l]) {
                                for (var h, d = t.call(c, c.__data__, l, f), p = ur(c, e), v = 0, g = d.length; v < g; ++v)(h = d[v]) && er(h, n, e, v, d, p);
                                u.push(d), o.push(c)
                            } return new lr(u, o, n, e)
                },
                filter: function (t) {
                    "function" != typeof t && (t = q(t));
                    for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                        for (var u, o = n[i], a = o.length, c = r[i] = [], f = 0; f < a; ++f)(u = o[f]) && t.call(u, u.__data__, f, o) && c.push(u);
                    return new lr(r, this._parents, this._name, this._id)
                },
                merge: function (t) {
                    if (t._id !== this._id) throw new Error;
                    for (var n = this._groups, e = t._groups, r = n.length, i = e.length, u = Math.min(r, i), o = new Array(r), a = 0; a < u; ++a)
                        for (var c, f = n[a], s = e[a], l = f.length, h = o[a] = new Array(l), d = 0; d < l; ++d)(c = f[d] || s[d]) && (h[d] = c);
                    for (; a < r; ++a) o[a] = n[a];
                    return new lr(o, this._parents, this._name, this._id)
                },
                selection: function () {
                    return new fr(this._groups, this._parents)
                },
                transition: function () {
                    for (var t = this._name, n = this._id, e = dr(), r = this._groups, i = r.length, u = 0; u < i; ++u)
                        for (var o, a = r[u], c = a.length, f = 0; f < c; ++f)
                            if (o = a[f]) {
                                var s = ur(o, n);
                                er(o, t, e, f, a, {
                                    time: s.time + s.delay + s.duration,
                                    delay: 0,
                                    duration: s.duration,
                                    ease: s.ease
                                })
                            } return new lr(r, this._parents, t, e)
                },
                call: pr.call,
                nodes: pr.nodes,
                node: pr.node,
                size: pr.size,
                empty: pr.empty,
                each: pr.each,
                on: function (t, n) {
                    var e = this._id;
                    return arguments.length < 2 ? ur(this.node(), e).on.on(t) : this.each(function (t, n, e) {
                        var r, i, u = function (t) {
                            return (t + "").trim().split(/^|\s+/).every((function (t) {
                                var n = t.indexOf(".");
                                return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
                            }))
                        }(n) ? rr : ir;
                        return function () {
                            var o = u(this, t),
                                a = o.on;
                            a !== r && (i = (r = a).copy()).on(n, e), o.on = i
                        }
                    }(e, t, n))
                },
                attr: function (t, n) {
                    var e = N(t),
                        r = "transform" === e ? le : cr;
                    return this.attrTween(t, "function" == typeof n ? (e.local ? function (t, n, e) {
                        var r, i, u;
                        return function () {
                            var o, a = e(this);
                            if (null != a) return (o = this.getAttributeNS(t.space, t.local)) === a ? null : o === r && a === i ? u : u = n(r = o, i = a);
                            this.removeAttributeNS(t.space, t.local)
                        }
                    } : function (t, n, e) {
                        var r, i, u;
                        return function () {
                            var o, a = e(this);
                            if (null != a) return (o = this.getAttribute(t)) === a ? null : o === r && a === i ? u : u = n(r = o, i = a);
                            this.removeAttribute(t)
                        }
                    })(e, r, ar(this, "attr." + t, n)) : null == n ? (e.local ? function (t) {
                        return function () {
                            this.removeAttributeNS(t.space, t.local)
                        }
                    } : function (t) {
                        return function () {
                            this.removeAttribute(t)
                        }
                    })(e) : (e.local ? function (t, n, e) {
                        var r, i;
                        return function () {
                            var u = this.getAttributeNS(t.space, t.local);
                            return u === e ? null : u === r ? i : i = n(r = u, e)
                        }
                    } : function (t, n, e) {
                        var r, i;
                        return function () {
                            var u = this.getAttribute(t);
                            return u === e ? null : u === r ? i : i = n(r = u, e)
                        }
                    })(e, r, n + ""))
                },
                attrTween: function (t, n) {
                    var e = "attr." + t;
                    if (arguments.length < 2) return (e = this.tween(e)) && e._value;
                    if (null == n) return this.tween(e, null);
                    if ("function" != typeof n) throw new Error;
                    var r = N(t);
                    return this.tween(e, (r.local ? function (t, n) {
                        function e() {
                            var e = this,
                                r = n.apply(e, arguments);
                            return r && function (n) {
                                e.setAttributeNS(t.space, t.local, r(n))
                            }
                        }
                        return e._value = n, e
                    } : function (t, n) {
                        function e() {
                            var e = this,
                                r = n.apply(e, arguments);
                            return r && function (n) {
                                e.setAttribute(t, r(n))
                            }
                        }
                        return e._value = n, e
                    })(r, n))
                },
                style: function (t, n, e) {
                    var r = "transform" == (t += "") ? se : cr;
                    return null == n ? this.styleTween(t, function (t, n) {
                        var e, r, i;
                        return function () {
                            var u = H(this, t),
                                o = (this.style.removeProperty(t), H(this, t));
                            return u === o ? null : u === e && o === r ? i : i = n(e = u, r = o)
                        }
                    }(t, r)).on("end.style." + t, function (t) {
                        return function () {
                            this.style.removeProperty(t)
                        }
                    }(t)) : this.styleTween(t, "function" == typeof n ? function (t, n, e) {
                        var r, i, u;
                        return function () {
                            var o = H(this, t),
                                a = e(this);
                            return null == a && (this.style.removeProperty(t), a = H(this, t)), o === a ? null : o === r && a === i ? u : u = n(r = o, i = a)
                        }
                    }(t, r, ar(this, "style." + t, n)) : function (t, n, e) {
                        var r, i;
                        return function () {
                            var u = H(this, t);
                            return u === e ? null : u === r ? i : i = n(r = u, e)
                        }
                    }(t, r, n + ""), e)
                },
                styleTween: function (t, n, e) {
                    var r = "style." + (t += "");
                    if (arguments.length < 2) return (r = this.tween(r)) && r._value;
                    if (null == n) return this.tween(r, null);
                    if ("function" != typeof n) throw new Error;
                    return this.tween(r, function (t, n, e) {
                        function r() {
                            var r = this,
                                i = n.apply(r, arguments);
                            return i && function (n) {
                                r.style.setProperty(t, i(n), e)
                            }
                        }
                        return r._value = n, r
                    }(t, n, null == e ? "" : e))
                },
                text: function (t) {
                    return this.tween("text", "function" == typeof t ? function (t) {
                        return function () {
                            var n = t(this);
                            this.textContent = null == n ? "" : n
                        }
                    }(ar(this, "text", t)) : function (t) {
                        return function () {
                            this.textContent = t
                        }
                    }(null == t ? "" : t + ""))
                },
                remove: function () {
                    return this.on("end.remove", (t = this._id, function () {
                        var n = this.parentNode;
                        for (var e in this.__transition)
                            if (+e !== t) return;
                        n && n.removeChild(this)
                    }));
                    var t
                },
                tween: function (t, n) {
                    var e = this._id;
                    if (t += "", arguments.length < 2) {
                        for (var r, i = ur(this.node(), e).tween, u = 0, o = i.length; u < o; ++u)
                            if ((r = i[u]).name === t) return r.value;
                        return null
                    }
                    return this.each((null == n ? function (t, n) {
                        var e, r;
                        return function () {
                            var i = ir(this, t),
                                u = i.tween;
                            if (u !== e)
                                for (var o = 0, a = (r = e = u).length; o < a; ++o)
                                    if (r[o].name === n) {
                                        (r = r.slice()).splice(o, 1);
                                        break
                                    } i.tween = r
                        }
                    } : function (t, n, e) {
                        var r, i;
                        if ("function" != typeof e) throw new Error;
                        return function () {
                            var u = ir(this, t),
                                o = u.tween;
                            if (o !== r) {
                                i = (r = o).slice();
                                for (var a = {
                                        name: n,
                                        value: e
                                    }, c = 0, f = i.length; c < f; ++c)
                                    if (i[c].name === n) {
                                        i[c] = a;
                                        break
                                    } c === f && i.push(a)
                            }
                            u.tween = i
                        }
                    })(e, t, n))
                },
                delay: function (t) {
                    var n = this._id;
                    return arguments.length ? this.each(("function" == typeof t ? function (t, n) {
                        return function () {
                            rr(this, t).delay = +n.apply(this, arguments)
                        }
                    } : function (t, n) {
                        return n = +n,
                            function () {
                                rr(this, t).delay = n
                            }
                    })(n, t)) : ur(this.node(), n).delay
                },
                duration: function (t) {
                    var n = this._id;
                    return arguments.length ? this.each(("function" == typeof t ? function (t, n) {
                        return function () {
                            ir(this, t).duration = +n.apply(this, arguments)
                        }
                    } : function (t, n) {
                        return n = +n,
                            function () {
                                ir(this, t).duration = n
                            }
                    })(n, t)) : ur(this.node(), n).duration
                },
                ease: function (t) {
                    var n = this._id;
                    return arguments.length ? this.each(function (t, n) {
                        if ("function" != typeof n) throw new Error;
                        return function () {
                            ir(this, t).ease = n
                        }
                    }(n, t)) : ur(this.node(), n).ease
                }
            };
            var wr = function t(n) {
                    function e(t) {
                        return Math.pow(t, n)
                    }
                    return n = +n, e.exponent = t, e
                }(3),
                Mr = function t(n) {
                    function e(t) {
                        return 1 - Math.pow(1 - t, n)
                    }
                    return n = +n, e.exponent = t, e
                }(3),
                kr = function t(n) {
                    function e(t) {
                        return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
                    }
                    return n = +n, e.exponent = t, e
                }(3),
                Tr = Math.PI,
                Er = Tr / 2;

            function Nr(t) {
                return 1 - Math.cos(t * Er)
            }

            function Sr(t) {
                return Math.sin(t * Er)
            }

            function Ar(t) {
                return (1 - Math.cos(Tr * t)) / 2
            }

            function Cr(t) {
                return Math.pow(2, 10 * t - 10)
            }

            function zr(t) {
                return 1 - Math.pow(2, -10 * t)
            }

            function Lr(t) {
                return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2
            }

            function Or(t) {
                return 1 - Math.sqrt(1 - t * t)
            }

            function Pr(t) {
                return Math.sqrt(1 - --t * t)
            }

            function Rr(t) {
                return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
            }
            var qr = 4 / 11,
                jr = 6 / 11,
                Dr = 8 / 11,
                Ur = .75,
                Fr = 9 / 11,
                Ir = 10 / 11,
                Yr = .9375,
                Br = 21 / 22,
                Hr = 63 / 64,
                Xr = 1 / qr / qr;

            function Vr(t) {
                return 1 - $r(1 - t)
            }

            function $r(t) {
                return (t = +t) < qr ? Xr * t * t : t < Dr ? Xr * (t -= jr) * t + Ur : t < Ir ? Xr * (t -= Fr) * t + Yr : Xr * (t -= Br) * t + Hr
            }

            function Wr(t) {
                return ((t *= 2) <= 1 ? 1 - $r(1 - t) : $r(t - 1) + 1) / 2
            }
            var Gr = function t(n) {
                    function e(t) {
                        return t * t * ((n + 1) * t - n)
                    }
                    return n = +n, e.overshoot = t, e
                }(1.70158),
                Zr = function t(n) {
                    function e(t) {
                        return --t * t * ((n + 1) * t + n) + 1
                    }
                    return n = +n, e.overshoot = t, e
                }(1.70158),
                Qr = function t(n) {
                    function e(t) {
                        return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
                    }
                    return n = +n, e.overshoot = t, e
                }(1.70158),
                Jr = 2 * Math.PI,
                Kr = function t(n, e) {
                    var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Jr);

                    function i(t) {
                        return n * Math.pow(2, 10 * --t) * Math.sin((r - t) / e)
                    }
                    return i.amplitude = function (n) {
                        return t(n, e * Jr)
                    }, i.period = function (e) {
                        return t(n, e)
                    }, i
                }(1, .3),
                ti = function t(n, e) {
                    var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Jr);

                    function i(t) {
                        return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + r) / e)
                    }
                    return i.amplitude = function (n) {
                        return t(n, e * Jr)
                    }, i.period = function (e) {
                        return t(n, e)
                    }, i
                }(1, .3),
                ni = function t(n, e) {
                    var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Jr);

                    function i(t) {
                        return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((r - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((r + t) / e)) / 2
                    }
                    return i.amplitude = function (n) {
                        return t(n, e * Jr)
                    }, i.period = function (e) {
                        return t(n, e)
                    }, i
                }(1, .3),
                ei = {
                    time: null,
                    delay: 0,
                    duration: 250,
                    ease: br
                };

            function ri(t, n) {
                for (var e; !(e = t.__transition) || !(e = e[n]);)
                    if (!(t = t.parentNode)) return ei.time = je(), ei;
                return e
            }
            vt.prototype.interrupt = function (t) {
                return this.each((function () {
                    or(this, t)
                }))
            }, vt.prototype.transition = function (t) {
                var n, e;
                t instanceof lr ? (n = t._id, t = t._name) : (n = dr(), (e = ei).time = je(), t = null == t ? null : t + "");
                for (var r = this._groups, i = r.length, u = 0; u < i; ++u)
                    for (var o, a = r[u], c = a.length, f = 0; f < c; ++f)(o = a[f]) && er(o, t, n, f, a, e || ri(o, n));
                return new lr(r, this._parents, t, n)
            };
            var ii = [null],
                ui = function (t, n) {
                    var e, r, i = t.__transition;
                    if (i)
                        for (r in n = null == n ? null : n + "", i)
                            if ((e = i[r]).state > Ze && e.name === n) return new lr([
                                [t]
                            ], ii, n, +r);
                    return null
                },
                oi = function (t) {
                    return function () {
                        return t
                    }
                },
                ai = function (t, n, e) {
                    this.target = t, this.type = n, this.selection = e
                };

            function ci() {
                ut.stopImmediatePropagation()
            }
            var fi = function () {
                    ut.preventDefault(), ut.stopImmediatePropagation()
                },
                si = {
                    name: "drag"
                },
                li = {
                    name: "space"
                },
                hi = {
                    name: "handle"
                },
                di = {
                    name: "center"
                },
                pi = {
                    name: "x",
                    handles: ["e", "w"].map(wi),
                    input: function (t, n) {
                        return t && [
                            [t[0], n[0][1]],
                            [t[1], n[1][1]]
                        ]
                    },
                    output: function (t) {
                        return t && [t[0][0], t[1][0]]
                    }
                },
                vi = {
                    name: "y",
                    handles: ["n", "s"].map(wi),
                    input: function (t, n) {
                        return t && [
                            [n[0][0], t[0]],
                            [n[1][0], t[1]]
                        ]
                    },
                    output: function (t) {
                        return t && [t[0][1], t[1][1]]
                    }
                },
                gi = {
                    name: "xy",
                    handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(wi),
                    input: function (t) {
                        return t
                    },
                    output: function (t) {
                        return t
                    }
                },
                yi = {
                    overlay: "crosshair",
                    selection: "move",
                    n: "ns-resize",
                    e: "ew-resize",
                    s: "ns-resize",
                    w: "ew-resize",
                    nw: "nwse-resize",
                    ne: "nesw-resize",
                    se: "nwse-resize",
                    sw: "nesw-resize"
                },
                _i = {
                    e: "w",
                    w: "e",
                    nw: "ne",
                    ne: "nw",
                    se: "sw",
                    sw: "se"
                },
                mi = {
                    n: "s",
                    s: "n",
                    nw: "sw",
                    ne: "se",
                    se: "ne",
                    sw: "nw"
                },
                xi = {
                    overlay: 1,
                    selection: 1,
                    n: null,
                    e: 1,
                    s: null,
                    w: -1,
                    nw: -1,
                    ne: 1,
                    se: 1,
                    sw: -1
                },
                bi = {
                    overlay: 1,
                    selection: 1,
                    n: -1,
                    e: null,
                    s: 1,
                    w: null,
                    nw: -1,
                    ne: -1,
                    se: 1,
                    sw: 1
                };

            function wi(t) {
                return {
                    type: t
                }
            }

            function Mi() {
                return !ut.button
            }

            function ki() {
                var t = this.ownerSVGElement || this;
                return [
                    [0, 0],
                    [t.width.baseVal.value, t.height.baseVal.value]
                ]
            }

            function Ti(t) {
                for (; !t.__brush;)
                    if (!(t = t.parentNode)) return;
                return t.__brush
            }

            function Ei(t) {
                return t[0][0] === t[1][0] || t[0][1] === t[1][1]
            }

            function Ni(t) {
                var n = t.__brush;
                return n ? n.dim.output(n.selection) : null
            }

            function Si() {
                return zi(pi)
            }

            function Ai() {
                return zi(vi)
            }
            var Ci = function () {
                return zi(gi)
            };

            function zi(t) {
                var n, e = ki,
                    r = Mi,
                    i = k(o, "start", "brush", "end"),
                    u = 6;

                function o(n) {
                    var e = n.property("__brush", l).selectAll(".overlay").data([wi("overlay")]);
                    e.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", yi.overlay).merge(e).each((function () {
                        var t = Ti(this).extent;
                        gt(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1])
                    })), n.selectAll(".selection").data([wi("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", yi.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
                    var r = n.selectAll(".handle").data(t.handles, (function (t) {
                        return t.type
                    }));
                    r.exit().remove(), r.enter().append("rect").attr("class", (function (t) {
                        return "handle handle--" + t.type
                    })).attr("cursor", (function (t) {
                        return yi[t.type]
                    })), n.each(a).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", s)
                }

                function a() {
                    var t = gt(this),
                        n = Ti(this).selection;
                    n ? (t.selectAll(".selection").style("display", null).attr("x", n[0][0]).attr("y", n[0][1]).attr("width", n[1][0] - n[0][0]).attr("height", n[1][1] - n[0][1]), t.selectAll(".handle").style("display", null).attr("x", (function (t) {
                        return "e" === t.type[t.type.length - 1] ? n[1][0] - u / 2 : n[0][0] - u / 2
                    })).attr("y", (function (t) {
                        return "s" === t.type[0] ? n[1][1] - u / 2 : n[0][1] - u / 2
                    })).attr("width", (function (t) {
                        return "n" === t.type || "s" === t.type ? n[1][0] - n[0][0] + u : u
                    })).attr("height", (function (t) {
                        return "e" === t.type || "w" === t.type ? n[1][1] - n[0][1] + u : u
                    }))) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null)
                }

                function c(t, n) {
                    return t.__brush.emitter || new f(t, n)
                }

                function f(t, n) {
                    this.that = t, this.args = n, this.state = t.__brush, this.active = 0
                }

                function s() {
                    if (ut.touches) {
                        if (ut.changedTouches.length < ut.touches.length) return fi()
                    } else if (n) return;
                    if (r.apply(this, arguments)) {
                        var e, i, u, o, f, s, l, h, d, p, v, g, y, _ = this,
                            m = ut.target.__data__.type,
                            x = "selection" === (ut.metaKey ? m = "overlay" : m) ? si : ut.altKey ? di : hi,
                            b = t === vi ? null : xi[m],
                            w = t === pi ? null : bi[m],
                            M = Ti(_),
                            k = M.extent,
                            T = M.selection,
                            E = k[0][0],
                            N = k[0][1],
                            S = k[1][0],
                            A = k[1][1],
                            C = b && w && ut.shiftKey,
                            z = Mt(_),
                            L = z,
                            O = c(_, arguments).beforestart();
                        "overlay" === m ? M.selection = T = [
                            [e = t === vi ? E : z[0], u = t === pi ? N : z[1]],
                            [f = t === vi ? S : e, l = t === pi ? A : u]
                        ] : (e = T[0][0], u = T[0][1], f = T[1][0], l = T[1][1]), i = e, o = u, s = f, h = l;
                        var P = gt(_).attr("pointer-events", "none"),
                            R = P.selectAll(".overlay").attr("cursor", yi[m]);
                        if (ut.touches) P.on("touchmove.brush", j, !0).on("touchend.brush touchcancel.brush", U, !0);
                        else {
                            var q = gt(ut.view).on("keydown.brush", (function () {
                                switch (ut.keyCode) {
                                    case 16:
                                        C = b && w;
                                        break;
                                    case 18:
                                        x === hi && (b && (f = s - d * b, e = i + d * b), w && (l = h - p * w, u = o + p * w), x = di, D());
                                        break;
                                    case 32:
                                        x !== hi && x !== di || (b < 0 ? f = s - d : b > 0 && (e = i - d), w < 0 ? l = h - p : w > 0 && (u = o - p), x = li, R.attr("cursor", yi.selection), D());
                                        break;
                                    default:
                                        return
                                }
                                fi()
                            }), !0).on("keyup.brush", (function () {
                                switch (ut.keyCode) {
                                    case 16:
                                        C && (g = y = C = !1, D());
                                        break;
                                    case 18:
                                        x === di && (b < 0 ? f = s : b > 0 && (e = i), w < 0 ? l = h : w > 0 && (u = o), x = hi, D());
                                        break;
                                    case 32:
                                        x === li && (ut.altKey ? (b && (f = s - d * b, e = i + d * b), w && (l = h - p * w, u = o + p * w), x = di) : (b < 0 ? f = s : b > 0 && (e = i), w < 0 ? l = h : w > 0 && (u = o), x = hi), R.attr("cursor", yi[m]), D());
                                        break;
                                    default:
                                        return
                                }
                                fi()
                            }), !0).on("mousemove.brush", j, !0).on("mouseup.brush", U, !0);
                            At(ut.view)
                        }
                        ci(), or(_), a.call(_), O.start()
                    }

                    function j() {
                        var t = Mt(_);
                        !C || g || y || (Math.abs(t[0] - L[0]) > Math.abs(t[1] - L[1]) ? y = !0 : g = !0), L = t, v = !0, fi(), D()
                    }

                    function D() {
                        var t;
                        switch (d = L[0] - z[0], p = L[1] - z[1], x) {
                            case li:
                            case si:
                                b && (d = Math.max(E - e, Math.min(S - f, d)), i = e + d, s = f + d), w && (p = Math.max(N - u, Math.min(A - l, p)), o = u + p, h = l + p);
                                break;
                            case hi:
                                b < 0 ? (d = Math.max(E - e, Math.min(S - e, d)), i = e + d, s = f) : b > 0 && (d = Math.max(E - f, Math.min(S - f, d)), i = e, s = f + d), w < 0 ? (p = Math.max(N - u, Math.min(A - u, p)), o = u + p, h = l) : w > 0 && (p = Math.max(N - l, Math.min(A - l, p)), o = u, h = l + p);
                                break;
                            case di:
                                b && (i = Math.max(E, Math.min(S, e - d * b)), s = Math.max(E, Math.min(S, f + d * b))), w && (o = Math.max(N, Math.min(A, u - p * w)), h = Math.max(N, Math.min(A, l + p * w)))
                        }
                        s < i && (b *= -1, t = e, e = f, f = t, t = i, i = s, s = t, m in _i && R.attr("cursor", yi[m = _i[m]])), h < o && (w *= -1, t = u, u = l, l = t, t = o, o = h, h = t, m in mi && R.attr("cursor", yi[m = mi[m]])), M.selection && (T = M.selection), g && (i = T[0][0], s = T[1][0]), y && (o = T[0][1], h = T[1][1]), T[0][0] === i && T[0][1] === o && T[1][0] === s && T[1][1] === h || (M.selection = [
                            [i, o],
                            [s, h]
                        ], a.call(_), O.brush())
                    }

                    function U() {
                        if (ci(), ut.touches) {
                            if (ut.touches.length) return;
                            n && clearTimeout(n), n = setTimeout((function () {
                                n = null
                            }), 500), P.on("touchmove.brush touchend.brush touchcancel.brush", null)
                        } else Ct(ut.view, v), q.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
                        P.attr("pointer-events", "all"), R.attr("cursor", yi.overlay), M.selection && (T = M.selection), Ei(T) && (M.selection = null, a.call(_)), O.end()
                    }
                }

                function l() {
                    var n = this.__brush || {
                        selection: null
                    };
                    return n.extent = e.apply(this, arguments), n.dim = t, n
                }
                return o.move = function (n, e) {
                    n.selection ? n.on("start.brush", (function () {
                        c(this, arguments).beforestart().start()
                    })).on("interrupt.brush end.brush", (function () {
                        c(this, arguments).end()
                    })).tween("brush", (function () {
                        var n = this,
                            r = n.__brush,
                            i = c(n, arguments),
                            u = r.selection,
                            o = t.input("function" == typeof e ? e.apply(this, arguments) : e, r.extent),
                            f = ie(u, o);

                        function s(t) {
                            r.selection = 1 === t && Ei(o) ? null : f(t), a.call(n), i.brush()
                        }
                        return u && o ? s : s(1)
                    })) : n.each((function () {
                        var n = arguments,
                            r = this.__brush,
                            i = t.input("function" == typeof e ? e.apply(this, n) : e, r.extent),
                            u = c(this, n).beforestart();
                        or(this), r.selection = null == i || Ei(i) ? null : i, a.call(this), u.start().brush().end()
                    }))
                }, f.prototype = {
                    beforestart: function () {
                        return 1 == ++this.active && (this.state.emitter = this, this.starting = !0), this
                    },
                    start: function () {
                        return this.starting && (this.starting = !1, this.emit("start")), this
                    },
                    brush: function () {
                        return this.emit("brush"), this
                    },
                    end: function () {
                        return 0 == --this.active && (delete this.state.emitter, this.emit("end")), this
                    },
                    emit: function (n) {
                        st(new ai(o, n, t.output(this.state.selection)), i.apply, i, [n, this.that, this.args])
                    }
                }, o.extent = function (t) {
                    return arguments.length ? (e = "function" == typeof t ? t : oi([
                        [+t[0][0], +t[0][1]],
                        [+t[1][0], +t[1][1]]
                    ]), o) : e
                }, o.filter = function (t) {
                    return arguments.length ? (r = "function" == typeof t ? t : oi(!!t), o) : r
                }, o.handleSize = function (t) {
                    return arguments.length ? (u = +t, o) : u
                }, o.on = function () {
                    var t = i.on.apply(i, arguments);
                    return t === i ? o : t
                }, o
            }
            var Li = Math.cos,
                Oi = Math.sin,
                Pi = Math.PI,
                Ri = Pi / 2,
                qi = 2 * Pi,
                ji = Math.max,
                Di = function () {
                    var t = 0,
                        n = null,
                        e = null,
                        i = null;

                    function u(u) {
                        var o, a, c, f, s, l, h = u.length,
                            d = [],
                            p = Object(r.s)(h),
                            v = [],
                            g = [],
                            y = g.groups = new Array(h),
                            _ = new Array(h * h);
                        for (o = 0, s = -1; ++s < h;) {
                            for (a = 0, l = -1; ++l < h;) a += u[s][l];
                            d.push(a), v.push(Object(r.s)(h)), o += a
                        }
                        for (n && p.sort((function (t, e) {
                                return n(d[t], d[e])
                            })), e && v.forEach((function (t, n) {
                                t.sort((function (t, r) {
                                    return e(u[n][t], u[n][r])
                                }))
                            })), f = (o = ji(0, qi - t * h) / o) ? t : qi / h, a = 0, s = -1; ++s < h;) {
                            for (c = a, l = -1; ++l < h;) {
                                var m = p[s],
                                    x = v[m][l],
                                    b = u[m][x],
                                    w = a,
                                    M = a += b * o;
                                _[x * h + m] = {
                                    index: m,
                                    subindex: x,
                                    startAngle: w,
                                    endAngle: M,
                                    value: b
                                }
                            }
                            y[m] = {
                                index: m,
                                startAngle: c,
                                endAngle: a,
                                value: d[m]
                            }, a += f
                        }
                        for (s = -1; ++s < h;)
                            for (l = s - 1; ++l < h;) {
                                var k = _[l * h + s],
                                    T = _[s * h + l];
                                (k.value || T.value) && g.push(k.value < T.value ? {
                                    source: T,
                                    target: k
                                } : {
                                    source: k,
                                    target: T
                                })
                            }
                        return i ? g.sort(i) : g
                    }
                    return u.padAngle = function (n) {
                        return arguments.length ? (t = ji(0, n), u) : t
                    }, u.sortGroups = function (t) {
                        return arguments.length ? (n = t, u) : n
                    }, u.sortSubgroups = function (t) {
                        return arguments.length ? (e = t, u) : e
                    }, u.sortChords = function (t) {
                        return arguments.length ? (null == t ? i = null : (n = t, i = function (t, e) {
                            return n(t.source.value + t.target.value, e.source.value + e.target.value)
                        })._ = t, u) : i && i._;
                        var n
                    }, u
                },
                Ui = Array.prototype.slice,
                Fi = function (t) {
                    return function () {
                        return t
                    }
                },
                Ii = e(1);

            function Yi(t) {
                return t.source
            }

            function Bi(t) {
                return t.target
            }

            function Hi(t) {
                return t.radius
            }

            function Xi(t) {
                return t.startAngle
            }

            function Vi(t) {
                return t.endAngle
            }
            var $i = function () {
                    var t = Yi,
                        n = Bi,
                        e = Hi,
                        r = Xi,
                        i = Vi,
                        u = null;

                    function o() {
                        var o, a = Ui.call(arguments),
                            c = t.apply(this, a),
                            f = n.apply(this, a),
                            s = +e.apply(this, (a[0] = c, a)),
                            l = r.apply(this, a) - Ri,
                            h = i.apply(this, a) - Ri,
                            d = s * Li(l),
                            p = s * Oi(l),
                            v = +e.apply(this, (a[0] = f, a)),
                            g = r.apply(this, a) - Ri,
                            y = i.apply(this, a) - Ri;
                        if (u || (u = o = Object(Ii.a)()), u.moveTo(d, p), u.arc(0, 0, s, l, h), l === g && h === y || (u.quadraticCurveTo(0, 0, v * Li(g), v * Oi(g)), u.arc(0, 0, v, g, y)), u.quadraticCurveTo(0, 0, d, p), u.closePath(), o) return u = null, o + "" || null
                    }
                    return o.radius = function (t) {
                        return arguments.length ? (e = "function" == typeof t ? t : Fi(+t), o) : e
                    }, o.startAngle = function (t) {
                        return arguments.length ? (r = "function" == typeof t ? t : Fi(+t), o) : r
                    }, o.endAngle = function (t) {
                        return arguments.length ? (i = "function" == typeof t ? t : Fi(+t), o) : i
                    }, o.source = function (n) {
                        return arguments.length ? (t = n, o) : t
                    }, o.target = function (t) {
                        return arguments.length ? (n = t, o) : n
                    }, o.context = function (t) {
                        return arguments.length ? (u = null == t ? null : t, o) : u
                    }, o
                },
                Wi = e(2),
                Gi = {},
                Zi = {},
                Qi = 34,
                Ji = 10,
                Ki = 13;

            function tu(t) {
                return new Function("d", "return {" + t.map((function (t, n) {
                    return JSON.stringify(t) + ": d[" + n + "]"
                })).join(",") + "}")
            }
            var nu = function (t) {
                    var n = new RegExp('["' + t + "\n\r]"),
                        e = t.charCodeAt(0);

                    function r(t, n) {
                        var r, i = [],
                            u = t.length,
                            o = 0,
                            a = 0,
                            c = u <= 0,
                            f = !1;

                        function s() {
                            if (c) return Zi;
                            if (f) return f = !1, Gi;
                            var n, r, i = o;
                            if (t.charCodeAt(i) === Qi) {
                                for (; o++ < u && t.charCodeAt(o) !== Qi || t.charCodeAt(++o) === Qi;);
                                return (n = o) >= u ? c = !0 : (r = t.charCodeAt(o++)) === Ji ? f = !0 : r === Ki && (f = !0, t.charCodeAt(o) === Ji && ++o), t.slice(i + 1, n - 1).replace(/""/g, '"')
                            }
                            for (; o < u;) {
                                if ((r = t.charCodeAt(n = o++)) === Ji) f = !0;
                                else if (r === Ki) f = !0, t.charCodeAt(o) === Ji && ++o;
                                else if (r !== e) continue;
                                return t.slice(i, n)
                            }
                            return c = !0, t.slice(i, u)
                        }
                        for (t.charCodeAt(u - 1) === Ji && --u, t.charCodeAt(u - 1) === Ki && --u;
                            (r = s()) !== Zi;) {
                            for (var l = []; r !== Gi && r !== Zi;) l.push(r), r = s();
                            n && null == (l = n(l, a++)) || i.push(l)
                        }
                        return i
                    }

                    function i(n) {
                        return n.map(u).join(t)
                    }

                    function u(t) {
                        return null == t ? "" : n.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t
                    }
                    return {
                        parse: function (t, n) {
                            var e, i, u = r(t, (function (t, r) {
                                if (e) return e(t, r - 1);
                                i = t, e = n ? function (t, n) {
                                    var e = tu(t);
                                    return function (r, i) {
                                        return n(e(r), i, t)
                                    }
                                }(t, n) : tu(t)
                            }));
                            return u.columns = i || [], u
                        },
                        parseRows: r,
                        format: function (n, e) {
                            return null == e && (e = function (t) {
                                var n = Object.create(null),
                                    e = [];
                                return t.forEach((function (t) {
                                    for (var r in t) r in n || e.push(n[r] = r)
                                })), e
                            }(n)), [e.map(u).join(t)].concat(n.map((function (n) {
                                return e.map((function (t) {
                                    return u(n[t])
                                })).join(t)
                            }))).join("\n")
                        },
                        formatRows: function (t) {
                            return t.map(i).join("\n")
                        }
                    }
                },
                eu = nu(","),
                ru = eu.parse,
                iu = eu.parseRows,
                uu = eu.format,
                ou = eu.formatRows,
                au = nu("\t"),
                cu = au.parse,
                fu = au.parseRows,
                su = au.format,
                lu = au.formatRows,
                hu = function (t, n) {
                    var e;

                    function r() {
                        var r, i, u = e.length,
                            o = 0,
                            a = 0;
                        for (r = 0; r < u; ++r) o += (i = e[r]).x, a += i.y;
                        for (o = o / u - t, a = a / u - n, r = 0; r < u; ++r)(i = e[r]).x -= o, i.y -= a
                    }
                    return null == t && (t = 0), null == n && (n = 0), r.initialize = function (t) {
                        e = t
                    }, r.x = function (n) {
                        return arguments.length ? (t = +n, r) : t
                    }, r.y = function (t) {
                        return arguments.length ? (n = +t, r) : n
                    }, r
                },
                du = function (t) {
                    return function () {
                        return t
                    }
                },
                pu = function () {
                    return 1e-6 * (Math.random() - .5)
                };

            function vu(t, n, e, r) {
                if (isNaN(n) || isNaN(e)) return t;
                var i, u, o, a, c, f, s, l, h, d = t._root,
                    p = {
                        data: r
                    },
                    v = t._x0,
                    g = t._y0,
                    y = t._x1,
                    _ = t._y1;
                if (!d) return t._root = p, t;
                for (; d.length;)
                    if ((f = n >= (u = (v + y) / 2)) ? v = u : y = u, (s = e >= (o = (g + _) / 2)) ? g = o : _ = o, i = d, !(d = d[l = s << 1 | f])) return i[l] = p, t;
                if (a = +t._x.call(null, d.data), c = +t._y.call(null, d.data), n === a && e === c) return p.next = d, i ? i[l] = p : t._root = p, t;
                do {
                    i = i ? i[l] = new Array(4) : t._root = new Array(4), (f = n >= (u = (v + y) / 2)) ? v = u : y = u, (s = e >= (o = (g + _) / 2)) ? g = o : _ = o
                } while ((l = s << 1 | f) == (h = (c >= o) << 1 | a >= u));
                return i[h] = d, i[l] = p, t
            }
            var gu = function (t, n, e, r, i) {
                this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = i
            };

            function yu(t) {
                return t[0]
            }

            function _u(t) {
                return t[1]
            }

            function mu(t, n, e) {
                var r = new xu(null == n ? yu : n, null == e ? _u : e, NaN, NaN, NaN, NaN);
                return null == t ? r : r.addAll(t)
            }

            function xu(t, n, e, r, i, u) {
                this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = u, this._root = void 0
            }

            function bu(t) {
                for (var n = {
                        data: t.data
                    }, e = n; t = t.next;) e = e.next = {
                    data: t.data
                };
                return n
            }
            var wu = mu.prototype = xu.prototype;

            function Mu(t) {
                return t.x + t.vx
            }

            function ku(t) {
                return t.y + t.vy
            }
            wu.copy = function () {
                var t, n, e = new xu(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
                    r = this._root;
                if (!r) return e;
                if (!r.length) return e._root = bu(r), e;
                for (t = [{
                        source: r,
                        target: e._root = new Array(4)
                    }]; r = t.pop();)
                    for (var i = 0; i < 4; ++i)(n = r.source[i]) && (n.length ? t.push({
                        source: n,
                        target: r.target[i] = new Array(4)
                    }) : r.target[i] = bu(n));
                return e
            }, wu.add = function (t) {
                var n = +this._x.call(null, t),
                    e = +this._y.call(null, t);
                return vu(this.cover(n, e), n, e, t)
            }, wu.addAll = function (t) {
                var n, e, r, i, u = t.length,
                    o = new Array(u),
                    a = new Array(u),
                    c = 1 / 0,
                    f = 1 / 0,
                    s = -1 / 0,
                    l = -1 / 0;
                for (e = 0; e < u; ++e) isNaN(r = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (o[e] = r, a[e] = i, r < c && (c = r), r > s && (s = r), i < f && (f = i), i > l && (l = i));
                for (s < c && (c = this._x0, s = this._x1), l < f && (f = this._y0, l = this._y1), this.cover(c, f).cover(s, l), e = 0; e < u; ++e) vu(this, o[e], a[e], t[e]);
                return this
            }, wu.cover = function (t, n) {
                if (isNaN(t = +t) || isNaN(n = +n)) return this;
                var e = this._x0,
                    r = this._y0,
                    i = this._x1,
                    u = this._y1;
                if (isNaN(e)) i = (e = Math.floor(t)) + 1, u = (r = Math.floor(n)) + 1;
                else {
                    if (!(e > t || t > i || r > n || n > u)) return this;
                    var o, a, c = i - e,
                        f = this._root;
                    switch (a = (n < (r + u) / 2) << 1 | t < (e + i) / 2) {
                        case 0:
                            do {
                                (o = new Array(4))[a] = f, f = o
                            } while (u = r + (c *= 2), t > (i = e + c) || n > u);
                            break;
                        case 1:
                            do {
                                (o = new Array(4))[a] = f, f = o
                            } while (u = r + (c *= 2), (e = i - c) > t || n > u);
                            break;
                        case 2:
                            do {
                                (o = new Array(4))[a] = f, f = o
                            } while (r = u - (c *= 2), t > (i = e + c) || r > n);
                            break;
                        case 3:
                            do {
                                (o = new Array(4))[a] = f, f = o
                            } while (r = u - (c *= 2), (e = i - c) > t || r > n)
                    }
                    this._root && this._root.length && (this._root = f)
                }
                return this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = u, this
            }, wu.data = function () {
                var t = [];
                return this.visit((function (n) {
                    if (!n.length)
                        do {
                            t.push(n.data)
                        } while (n = n.next)
                })), t
            }, wu.extent = function (t) {
                return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [
                    [this._x0, this._y0],
                    [this._x1, this._y1]
                ]
            }, wu.find = function (t, n, e) {
                var r, i, u, o, a, c, f, s = this._x0,
                    l = this._y0,
                    h = this._x1,
                    d = this._y1,
                    p = [],
                    v = this._root;
                for (v && p.push(new gu(v, s, l, h, d)), null == e ? e = 1 / 0 : (s = t - e, l = n - e, h = t + e, d = n + e, e *= e); c = p.pop();)
                    if (!(!(v = c.node) || (i = c.x0) > h || (u = c.y0) > d || (o = c.x1) < s || (a = c.y1) < l))
                        if (v.length) {
                            var g = (i + o) / 2,
                                y = (u + a) / 2;
                            p.push(new gu(v[3], g, y, o, a), new gu(v[2], i, y, g, a), new gu(v[1], g, u, o, y), new gu(v[0], i, u, g, y)), (f = (n >= y) << 1 | t >= g) && (c = p[p.length - 1], p[p.length - 1] = p[p.length - 1 - f], p[p.length - 1 - f] = c)
                        } else {
                            var _ = t - +this._x.call(null, v.data),
                                m = n - +this._y.call(null, v.data),
                                x = _ * _ + m * m;
                            if (x < e) {
                                var b = Math.sqrt(e = x);
                                s = t - b, l = n - b, h = t + b, d = n + b, r = v.data
                            }
                        } return r
            }, wu.remove = function (t) {
                if (isNaN(u = +this._x.call(null, t)) || isNaN(o = +this._y.call(null, t))) return this;
                var n, e, r, i, u, o, a, c, f, s, l, h, d = this._root,
                    p = this._x0,
                    v = this._y0,
                    g = this._x1,
                    y = this._y1;
                if (!d) return this;
                if (d.length)
                    for (;;) {
                        if ((f = u >= (a = (p + g) / 2)) ? p = a : g = a, (s = o >= (c = (v + y) / 2)) ? v = c : y = c, n = d, !(d = d[l = s << 1 | f])) return this;
                        if (!d.length) break;
                        (n[l + 1 & 3] || n[l + 2 & 3] || n[l + 3 & 3]) && (e = n, h = l)
                    }
                for (; d.data !== t;)
                    if (r = d, !(d = d.next)) return this;
                return (i = d.next) && delete d.next, r ? (i ? r.next = i : delete r.next, this) : n ? (i ? n[l] = i : delete n[l], (d = n[0] || n[1] || n[2] || n[3]) && d === (n[3] || n[2] || n[1] || n[0]) && !d.length && (e ? e[h] = d : this._root = d), this) : (this._root = i, this)
            }, wu.removeAll = function (t) {
                for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]);
                return this
            }, wu.root = function () {
                return this._root
            }, wu.size = function () {
                var t = 0;
                return this.visit((function (n) {
                    if (!n.length)
                        do {
                            ++t
                        } while (n = n.next)
                })), t
            }, wu.visit = function (t) {
                var n, e, r, i, u, o, a = [],
                    c = this._root;
                for (c && a.push(new gu(c, this._x0, this._y0, this._x1, this._y1)); n = a.pop();)
                    if (!t(c = n.node, r = n.x0, i = n.y0, u = n.x1, o = n.y1) && c.length) {
                        var f = (r + u) / 2,
                            s = (i + o) / 2;
                        (e = c[3]) && a.push(new gu(e, f, s, u, o)), (e = c[2]) && a.push(new gu(e, r, s, f, o)), (e = c[1]) && a.push(new gu(e, f, i, u, s)), (e = c[0]) && a.push(new gu(e, r, i, f, s))
                    } return this
            }, wu.visitAfter = function (t) {
                var n, e = [],
                    r = [];
                for (this._root && e.push(new gu(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
                    var i = n.node;
                    if (i.length) {
                        var u, o = n.x0,
                            a = n.y0,
                            c = n.x1,
                            f = n.y1,
                            s = (o + c) / 2,
                            l = (a + f) / 2;
                        (u = i[0]) && e.push(new gu(u, o, a, s, l)), (u = i[1]) && e.push(new gu(u, s, a, c, l)), (u = i[2]) && e.push(new gu(u, o, l, s, f)), (u = i[3]) && e.push(new gu(u, s, l, c, f))
                    }
                    r.push(n)
                }
                for (; n = r.pop();) t(n.node, n.x0, n.y0, n.x1, n.y1);
                return this
            }, wu.x = function (t) {
                return arguments.length ? (this._x = t, this) : this._x
            }, wu.y = function (t) {
                return arguments.length ? (this._y = t, this) : this._y
            };
            var Tu = function (t) {
                var n, e, r = 1,
                    i = 1;

                function u() {
                    for (var t, u, a, c, f, s, l, h = n.length, d = 0; d < i; ++d)
                        for (u = mu(n, Mu, ku).visitAfter(o), t = 0; t < h; ++t) a = n[t], s = e[a.index], l = s * s, c = a.x + a.vx, f = a.y + a.vy, u.visit(p);

                    function p(t, n, e, i, u) {
                        var o = t.data,
                            h = t.r,
                            d = s + h;
                        if (!o) return n > c + d || i < c - d || e > f + d || u < f - d;
                        if (o.index > a.index) {
                            var p = c - o.x - o.vx,
                                v = f - o.y - o.vy,
                                g = p * p + v * v;
                            g < d * d && (0 === p && (g += (p = pu()) * p), 0 === v && (g += (v = pu()) * v), g = (d - (g = Math.sqrt(g))) / g * r, a.vx += (p *= g) * (d = (h *= h) / (l + h)), a.vy += (v *= g) * d, o.vx -= p * (d = 1 - d), o.vy -= v * d)
                        }
                    }
                }

                function o(t) {
                    if (t.data) return t.r = e[t.data.index];
                    for (var n = t.r = 0; n < 4; ++n) t[n] && t[n].r > t.r && (t.r = t[n].r)
                }

                function a() {
                    if (n) {
                        var r, i, u = n.length;
                        for (e = new Array(u), r = 0; r < u; ++r) i = n[r], e[i.index] = +t(i, r, n)
                    }
                }
                return "function" != typeof t && (t = du(null == t ? 1 : +t)), u.initialize = function (t) {
                    n = t, a()
                }, u.iterations = function (t) {
                    return arguments.length ? (i = +t, u) : i
                }, u.strength = function (t) {
                    return arguments.length ? (r = +t, u) : r
                }, u.radius = function (n) {
                    return arguments.length ? (t = "function" == typeof n ? n : du(+n), a(), u) : t
                }, u
            };

            function Eu(t) {
                return t.index
            }

            function Nu(t, n) {
                var e = t.get(n);
                if (!e) throw new Error("missing: " + n);
                return e
            }
            var Su = function (t) {
                var n, e, r, i, u, o = Eu,
                    a = function (t) {
                        return 1 / Math.min(i[t.source.index], i[t.target.index])
                    },
                    c = du(30),
                    f = 1;

                function s(r) {
                    for (var i = 0, o = t.length; i < f; ++i)
                        for (var a, c, s, l, h, d, p, v = 0; v < o; ++v) c = (a = t[v]).source, l = (s = a.target).x + s.vx - c.x - c.vx || pu(), h = s.y + s.vy - c.y - c.vy || pu(), l *= d = ((d = Math.sqrt(l * l + h * h)) - e[v]) / d * r * n[v], h *= d, s.vx -= l * (p = u[v]), s.vy -= h * p, c.vx += l * (p = 1 - p), c.vy += h * p
                }

                function l() {
                    if (r) {
                        var a, c, f = r.length,
                            s = t.length,
                            l = Object(Wi.c)(r, o);
                        for (a = 0, i = new Array(f); a < s; ++a)(c = t[a]).index = a, "object" != typeof c.source && (c.source = Nu(l, c.source)), "object" != typeof c.target && (c.target = Nu(l, c.target)), i[c.source.index] = (i[c.source.index] || 0) + 1, i[c.target.index] = (i[c.target.index] || 0) + 1;
                        for (a = 0, u = new Array(s); a < s; ++a) c = t[a], u[a] = i[c.source.index] / (i[c.source.index] + i[c.target.index]);
                        n = new Array(s), h(), e = new Array(s), d()
                    }
                }

                function h() {
                    if (r)
                        for (var e = 0, i = t.length; e < i; ++e) n[e] = +a(t[e], e, t)
                }

                function d() {
                    if (r)
                        for (var n = 0, i = t.length; n < i; ++n) e[n] = +c(t[n], n, t)
                }
                return null == t && (t = []), s.initialize = function (t) {
                    r = t, l()
                }, s.links = function (n) {
                    return arguments.length ? (t = n, l(), s) : t
                }, s.id = function (t) {
                    return arguments.length ? (o = t, s) : o
                }, s.iterations = function (t) {
                    return arguments.length ? (f = +t, s) : f
                }, s.strength = function (t) {
                    return arguments.length ? (a = "function" == typeof t ? t : du(+t), h(), s) : a
                }, s.distance = function (t) {
                    return arguments.length ? (c = "function" == typeof t ? t : du(+t), d(), s) : c
                }, s
            };

            function Au(t) {
                return t.x
            }

            function Cu(t) {
                return t.y
            }
            var zu, Lu = 10,
                Ou = Math.PI * (3 - Math.sqrt(5)),
                Pu = function (t) {
                    var n, e = 1,
                        r = .001,
                        i = 1 - Math.pow(r, 1 / 300),
                        u = 0,
                        o = .6,
                        a = Object(Wi.c)(),
                        c = Fe(s),
                        f = k("tick", "end");

                    function s() {
                        l(), f.call("tick", n), e < r && (c.stop(), f.call("end", n))
                    }

                    function l() {
                        var n, r, c = t.length;
                        for (e += (u - e) * i, a.each((function (t) {
                                t(e)
                            })), n = 0; n < c; ++n) null == (r = t[n]).fx ? r.x += r.vx *= o : (r.x = r.fx, r.vx = 0), null == r.fy ? r.y += r.vy *= o : (r.y = r.fy, r.vy = 0)
                    }

                    function h() {
                        for (var n, e = 0, r = t.length; e < r; ++e) {
                            if ((n = t[e]).index = e, isNaN(n.x) || isNaN(n.y)) {
                                var i = Lu * Math.sqrt(e),
                                    u = e * Ou;
                                n.x = i * Math.cos(u), n.y = i * Math.sin(u)
                            }(isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0)
                        }
                    }

                    function d(n) {
                        return n.initialize && n.initialize(t), n
                    }
                    return null == t && (t = []), h(), n = {
                        tick: l,
                        restart: function () {
                            return c.restart(s), n
                        },
                        stop: function () {
                            return c.stop(), n
                        },
                        nodes: function (e) {
                            return arguments.length ? (t = e, h(), a.each(d), n) : t
                        },
                        alpha: function (t) {
                            return arguments.length ? (e = +t, n) : e
                        },
                        alphaMin: function (t) {
                            return arguments.length ? (r = +t, n) : r
                        },
                        alphaDecay: function (t) {
                            return arguments.length ? (i = +t, n) : +i
                        },
                        alphaTarget: function (t) {
                            return arguments.length ? (u = +t, n) : u
                        },
                        velocityDecay: function (t) {
                            return arguments.length ? (o = 1 - t, n) : 1 - o
                        },
                        force: function (t, e) {
                            return arguments.length > 1 ? (null == e ? a.remove(t) : a.set(t, d(e)), n) : a.get(t)
                        },
                        find: function (n, e, r) {
                            var i, u, o, a, c, f = 0,
                                s = t.length;
                            for (null == r ? r = 1 / 0 : r *= r, f = 0; f < s; ++f)(o = (i = n - (a = t[f]).x) * i + (u = e - a.y) * u) < r && (c = a, r = o);
                            return c
                        },
                        on: function (t, e) {
                            return arguments.length > 1 ? (f.on(t, e), n) : f.on(t)
                        }
                    }
                },
                Ru = function () {
                    var t, n, e, r, i = du(-30),
                        u = 1,
                        o = 1 / 0,
                        a = .81;

                    function c(r) {
                        var i, u = t.length,
                            o = mu(t, Au, Cu).visitAfter(s);
                        for (e = r, i = 0; i < u; ++i) n = t[i], o.visit(l)
                    }

                    function f() {
                        if (t) {
                            var n, e, u = t.length;
                            for (r = new Array(u), n = 0; n < u; ++n) e = t[n], r[e.index] = +i(e, n, t)
                        }
                    }

                    function s(t) {
                        var n, e, i, u, o, a = 0,
                            c = 0;
                        if (t.length) {
                            for (i = u = o = 0; o < 4; ++o)(n = t[o]) && (e = Math.abs(n.value)) && (a += n.value, c += e, i += e * n.x, u += e * n.y);
                            t.x = i / c, t.y = u / c
                        } else {
                            (n = t).x = n.data.x, n.y = n.data.y;
                            do {
                                a += r[n.data.index]
                            } while (n = n.next)
                        }
                        t.value = a
                    }

                    function l(t, i, c, f) {
                        if (!t.value) return !0;
                        var s = t.x - n.x,
                            l = t.y - n.y,
                            h = f - i,
                            d = s * s + l * l;
                        if (h * h / a < d) return d < o && (0 === s && (d += (s = pu()) * s), 0 === l && (d += (l = pu()) * l), d < u && (d = Math.sqrt(u * d)), n.vx += s * t.value * e / d, n.vy += l * t.value * e / d), !0;
                        if (!(t.length || d >= o)) {
                            (t.data !== n || t.next) && (0 === s && (d += (s = pu()) * s), 0 === l && (d += (l = pu()) * l), d < u && (d = Math.sqrt(u * d)));
                            do {
                                t.data !== n && (h = r[t.data.index] * e / d, n.vx += s * h, n.vy += l * h)
                            } while (t = t.next)
                        }
                    }
                    return c.initialize = function (n) {
                        t = n, f()
                    }, c.strength = function (t) {
                        return arguments.length ? (i = "function" == typeof t ? t : du(+t), f(), c) : i
                    }, c.distanceMin = function (t) {
                        return arguments.length ? (u = t * t, c) : Math.sqrt(u)
                    }, c.distanceMax = function (t) {
                        return arguments.length ? (o = t * t, c) : Math.sqrt(o)
                    }, c.theta = function (t) {
                        return arguments.length ? (a = t * t, c) : Math.sqrt(a)
                    }, c
                },
                qu = function (t, n, e) {
                    var r, i, u, o = du(.1);

                    function a(t) {
                        for (var o = 0, a = r.length; o < a; ++o) {
                            var c = r[o],
                                f = c.x - n || 1e-6,
                                s = c.y - e || 1e-6,
                                l = Math.sqrt(f * f + s * s),
                                h = (u[o] - l) * i[o] * t / l;
                            c.vx += f * h, c.vy += s * h
                        }
                    }

                    function c() {
                        if (r) {
                            var n, e = r.length;
                            for (i = new Array(e), u = new Array(e), n = 0; n < e; ++n) u[n] = +t(r[n], n, r), i[n] = isNaN(u[n]) ? 0 : +o(r[n], n, r)
                        }
                    }
                    return "function" != typeof t && (t = du(+t)), null == n && (n = 0), null == e && (e = 0), a.initialize = function (t) {
                        r = t, c()
                    }, a.strength = function (t) {
                        return arguments.length ? (o = "function" == typeof t ? t : du(+t), c(), a) : o
                    }, a.radius = function (n) {
                        return arguments.length ? (t = "function" == typeof n ? n : du(+n), c(), a) : t
                    }, a.x = function (t) {
                        return arguments.length ? (n = +t, a) : n
                    }, a.y = function (t) {
                        return arguments.length ? (e = +t, a) : e
                    }, a
                },
                ju = function (t) {
                    var n, e, r, i = du(.1);

                    function u(t) {
                        for (var i, u = 0, o = n.length; u < o; ++u)(i = n[u]).vx += (r[u] - i.x) * e[u] * t
                    }

                    function o() {
                        if (n) {
                            var u, o = n.length;
                            for (e = new Array(o), r = new Array(o), u = 0; u < o; ++u) e[u] = isNaN(r[u] = +t(n[u], u, n)) ? 0 : +i(n[u], u, n)
                        }
                    }
                    return "function" != typeof t && (t = du(null == t ? 0 : +t)), u.initialize = function (t) {
                        n = t, o()
                    }, u.strength = function (t) {
                        return arguments.length ? (i = "function" == typeof t ? t : du(+t), o(), u) : i
                    }, u.x = function (n) {
                        return arguments.length ? (t = "function" == typeof n ? n : du(+n), o(), u) : t
                    }, u
                },
                Du = function (t) {
                    var n, e, r, i = du(.1);

                    function u(t) {
                        for (var i, u = 0, o = n.length; u < o; ++u)(i = n[u]).vy += (r[u] - i.y) * e[u] * t
                    }

                    function o() {
                        if (n) {
                            var u, o = n.length;
                            for (e = new Array(o), r = new Array(o), u = 0; u < o; ++u) e[u] = isNaN(r[u] = +t(n[u], u, n)) ? 0 : +i(n[u], u, n)
                        }
                    }
                    return "function" != typeof t && (t = du(null == t ? 0 : +t)), u.initialize = function (t) {
                        n = t, o()
                    }, u.strength = function (t) {
                        return arguments.length ? (i = "function" == typeof t ? t : du(+t), o(), u) : i
                    }, u.y = function (n) {
                        return arguments.length ? (t = "function" == typeof n ? n : du(+n), o(), u) : t
                    }, u
                },
                Uu = function (t, n) {
                    if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
                    var e, r = t.slice(0, e);
                    return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
                },
                Fu = function (t) {
                    return (t = Uu(Math.abs(t))) ? t[1] : NaN
                },
                Iu = function (t, n) {
                    var e = Uu(t, n);
                    if (!e) return t + "";
                    var r = e[0],
                        i = e[1];
                    return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
                },
                Yu = {
                    "": function (t, n) {
                        t: for (var e, r = (t = t.toPrecision(n)).length, i = 1, u = -1; i < r; ++i) switch (t[i]) {
                            case ".":
                                u = e = i;
                                break;
                            case "0":
                                0 === u && (u = i), e = i;
                                break;
                            case "e":
                                break t;
                            default:
                                u > 0 && (u = 0)
                        }
                        return u > 0 ? t.slice(0, u) + t.slice(e + 1) : t
                    },
                    "%": function (t, n) {
                        return (100 * t).toFixed(n)
                    },
                    b: function (t) {
                        return Math.round(t).toString(2)
                    },
                    c: function (t) {
                        return t + ""
                    },
                    d: function (t) {
                        return Math.round(t).toString(10)
                    },
                    e: function (t, n) {
                        return t.toExponential(n)
                    },
                    f: function (t, n) {
                        return t.toFixed(n)
                    },
                    g: function (t, n) {
                        return t.toPrecision(n)
                    },
                    o: function (t) {
                        return Math.round(t).toString(8)
                    },
                    p: function (t, n) {
                        return Iu(100 * t, n)
                    },
                    r: Iu,
                    s: function (t, n) {
                        var e = Uu(t, n);
                        if (!e) return t + "";
                        var r = e[0],
                            i = e[1],
                            u = i - (zu = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
                            o = r.length;
                        return u === o ? r : u > o ? r + new Array(u - o + 1).join("0") : u > 0 ? r.slice(0, u) + "." + r.slice(u) : "0." + new Array(1 - u).join("0") + Uu(t, Math.max(0, n + u - 1))[0]
                    },
                    X: function (t) {
                        return Math.round(t).toString(16).toUpperCase()
                    },
                    x: function (t) {
                        return Math.round(t).toString(16)
                    }
                },
                Bu = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;

            function Hu(t) {
                return new Xu(t)
            }

            function Xu(t) {
                if (!(n = Bu.exec(t))) throw new Error("invalid format: " + t);
                var n, e = n[1] || " ",
                    r = n[2] || ">",
                    i = n[3] || "-",
                    u = n[4] || "",
                    o = !!n[5],
                    a = n[6] && +n[6],
                    c = !!n[7],
                    f = n[8] && +n[8].slice(1),
                    s = n[9] || "";
                "n" === s ? (c = !0, s = "g") : Yu[s] || (s = ""), (o || "0" === e && "=" === r) && (o = !0, e = "0", r = "="), this.fill = e, this.align = r, this.sign = i, this.symbol = u, this.zero = o, this.width = a, this.comma = c, this.precision = f, this.type = s
            }
            Hu.prototype = Xu.prototype, Xu.prototype.toString = function () {
                return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type
            };
            var Vu, $u, Wu, Gu = function (t) {
                    return t
                },
                Zu = ["y", "z", "a", "f", "p", "n", "Âµ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"],
                Qu = function (t) {
                    var n, e, r = t.grouping && t.thousands ? (n = t.grouping, e = t.thousands, function (t, r) {
                            for (var i = t.length, u = [], o = 0, a = n[0], c = 0; i > 0 && a > 0 && (c + a + 1 > r && (a = Math.max(1, r - c)), u.push(t.substring(i -= a, i + a)), !((c += a + 1) > r));) a = n[o = (o + 1) % n.length];
                            return u.reverse().join(e)
                        }) : Gu,
                        i = t.currency,
                        u = t.decimal,
                        o = t.numerals ? function (t) {
                            return function (n) {
                                return n.replace(/[0-9]/g, (function (n) {
                                    return t[+n]
                                }))
                            }
                        }(t.numerals) : Gu,
                        a = t.percent || "%";

                    function c(t) {
                        var n = (t = Hu(t)).fill,
                            e = t.align,
                            c = t.sign,
                            f = t.symbol,
                            s = t.zero,
                            l = t.width,
                            h = t.comma,
                            d = t.precision,
                            p = t.type,
                            v = "$" === f ? i[0] : "#" === f && /[boxX]/.test(p) ? "0" + p.toLowerCase() : "",
                            g = "$" === f ? i[1] : /[%p]/.test(p) ? a : "",
                            y = Yu[p],
                            _ = !p || /[defgprs%]/.test(p);

                        function m(t) {
                            var i, a, f, m = v,
                                x = g;
                            if ("c" === p) x = y(t) + x, t = "";
                            else {
                                var b = (t = +t) < 0;
                                if (t = y(Math.abs(t), d), b && 0 == +t && (b = !1), m = (b ? "(" === c ? c : "-" : "-" === c || "(" === c ? "" : c) + m, x = ("s" === p ? Zu[8 + zu / 3] : "") + x + (b && "(" === c ? ")" : ""), _)
                                    for (i = -1, a = t.length; ++i < a;)
                                        if (48 > (f = t.charCodeAt(i)) || f > 57) {
                                            x = (46 === f ? u + t.slice(i + 1) : t.slice(i)) + x, t = t.slice(0, i);
                                            break
                                        }
                            }
                            h && !s && (t = r(t, 1 / 0));
                            var w = m.length + t.length + x.length,
                                M = w < l ? new Array(l - w + 1).join(n) : "";
                            switch (h && s && (t = r(M + t, M.length ? l - x.length : 1 / 0), M = ""), e) {
                                case "<":
                                    t = m + t + x + M;
                                    break;
                                case "=":
                                    t = m + M + t + x;
                                    break;
                                case "^":
                                    t = M.slice(0, w = M.length >> 1) + m + t + x + M.slice(w);
                                    break;
                                default:
                                    t = M + m + t + x
                            }
                            return o(t)
                        }
                        return d = null == d ? p ? 6 : 12 : /[gprs]/.test(p) ? Math.max(1, Math.min(21, d)) : Math.max(0, Math.min(20, d)), m.toString = function () {
                            return t + ""
                        }, m
                    }
                    return {
                        format: c,
                        formatPrefix: function (t, n) {
                            var e = c(((t = Hu(t)).type = "f", t)),
                                r = 3 * Math.max(-8, Math.min(8, Math.floor(Fu(n) / 3))),
                                i = Math.pow(10, -r),
                                u = Zu[8 + r / 3];
                            return function (t) {
                                return e(i * t) + u
                            }
                        }
                    }
                };

            function Ju(t) {
                return Vu = Qu(t), $u = Vu.format, Wu = Vu.formatPrefix, Vu
            }
            Ju({
                decimal: ".",
                thousands: ",",
                grouping: [3],
                currency: ["$", ""]
            });
            var Ku = function (t) {
                    return Math.max(0, -Fu(Math.abs(t)))
                },
                to = function (t, n) {
                    return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Fu(n) / 3))) - Fu(Math.abs(t)))
                },
                no = function (t, n) {
                    return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Fu(n) - Fu(t)) + 1
                },
                eo = function () {
                    return new ro
                };

            function ro() {
                this.reset()
            }
            ro.prototype = {
                constructor: ro,
                reset: function () {
                    this.s = this.t = 0
                },
                add: function (t) {
                    uo(io, t, this.t), uo(this, io.s, this.s), this.s ? this.t += io.t : this.s = io.t
                },
                valueOf: function () {
                    return this.s
                }
            };
            var io = new ro;

            function uo(t, n, e) {
                var r = t.s = n + e,
                    i = r - n,
                    u = r - i;
                t.t = n - u + (e - i)
            }
            var oo = 1e-6,
                ao = Math.PI,
                co = ao / 2,
                fo = ao / 4,
                so = 2 * ao,
                lo = 180 / ao,
                ho = ao / 180,
                po = Math.abs,
                vo = Math.atan,
                go = Math.atan2,
                yo = Math.cos,
                _o = Math.ceil,
                mo = Math.exp,
                xo = (Math.floor, Math.log),
                bo = Math.pow,
                wo = Math.sin,
                Mo = Math.sign || function (t) {
                    return t > 0 ? 1 : t < 0 ? -1 : 0
                },
                ko = Math.sqrt,
                To = Math.tan;

            function Eo(t) {
                return t > 1 ? 0 : t < -1 ? ao : Math.acos(t)
            }

            function No(t) {
                return t > 1 ? co : t < -1 ? -co : Math.asin(t)
            }

            function So(t) {
                return (t = wo(t / 2)) * t
            }

            function Ao() {}

            function Co(t, n) {
                t && Lo.hasOwnProperty(t.type) && Lo[t.type](t, n)
            }
            var zo = {
                    Feature: function (t, n) {
                        Co(t.geometry, n)
                    },
                    FeatureCollection: function (t, n) {
                        for (var e = t.features, r = -1, i = e.length; ++r < i;) Co(e[r].geometry, n)
                    }
                },
                Lo = {
                    Sphere: function (t, n) {
                        n.sphere()
                    },
                    Point: function (t, n) {
                        t = t.coordinates, n.point(t[0], t[1], t[2])
                    },
                    MultiPoint: function (t, n) {
                        for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) t = e[r], n.point(t[0], t[1], t[2])
                    },
                    LineString: function (t, n) {
                        Oo(t.coordinates, n, 0)
                    },
                    MultiLineString: function (t, n) {
                        for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) Oo(e[r], n, 0)
                    },
                    Polygon: function (t, n) {
                        Po(t.coordinates, n)
                    },
                    MultiPolygon: function (t, n) {
                        for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) Po(e[r], n)
                    },
                    GeometryCollection: function (t, n) {
                        for (var e = t.geometries, r = -1, i = e.length; ++r < i;) Co(e[r], n)
                    }
                };

            function Oo(t, n, e) {
                var r, i = -1,
                    u = t.length - e;
                for (n.lineStart(); ++i < u;) r = t[i], n.point(r[0], r[1], r[2]);
                n.lineEnd()
            }

            function Po(t, n) {
                var e = -1,
                    r = t.length;
                for (n.polygonStart(); ++e < r;) Oo(t[e], n, 1);
                n.polygonEnd()
            }
            var Ro, qo, jo, Do, Uo, Fo = function (t, n) {
                    t && zo.hasOwnProperty(t.type) ? zo[t.type](t, n) : Co(t, n)
                },
                Io = eo(),
                Yo = eo(),
                Bo = {
                    point: Ao,
                    lineStart: Ao,
                    lineEnd: Ao,
                    polygonStart: function () {
                        Io.reset(), Bo.lineStart = Ho, Bo.lineEnd = Xo
                    },
                    polygonEnd: function () {
                        var t = +Io;
                        Yo.add(t < 0 ? so + t : t), this.lineStart = this.lineEnd = this.point = Ao
                    },
                    sphere: function () {
                        Yo.add(so)
                    }
                };

            function Ho() {
                Bo.point = Vo
            }

            function Xo() {
                $o(Ro, qo)
            }

            function Vo(t, n) {
                Bo.point = $o, Ro = t, qo = n, jo = t *= ho, Do = yo(n = (n *= ho) / 2 + fo), Uo = wo(n)
            }

            function $o(t, n) {
                var e = (t *= ho) - jo,
                    r = e >= 0 ? 1 : -1,
                    i = r * e,
                    u = yo(n = (n *= ho) / 2 + fo),
                    o = wo(n),
                    a = Uo * o,
                    c = Do * u + a * yo(i),
                    f = a * r * wo(i);
                Io.add(go(f, c)), jo = t, Do = u, Uo = o
            }
            var Wo = function (t) {
                return Yo.reset(), Fo(t, Bo), 2 * Yo
            };

            function Go(t) {
                return [go(t[1], t[0]), No(t[2])]
            }

            function Zo(t) {
                var n = t[0],
                    e = t[1],
                    r = yo(e);
                return [r * yo(n), r * wo(n), wo(e)]
            }

            function Qo(t, n) {
                return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
            }

            function Jo(t, n) {
                return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
            }

            function Ko(t, n) {
                t[0] += n[0], t[1] += n[1], t[2] += n[2]
            }

            function ta(t, n) {
                return [t[0] * n, t[1] * n, t[2] * n]
            }

            function na(t) {
                var n = ko(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
                t[0] /= n, t[1] /= n, t[2] /= n
            }
            var ea, ra, ia, ua, oa, aa, ca, fa, sa, la, ha = eo(),
                da = {
                    point: pa,
                    lineStart: ga,
                    lineEnd: ya,
                    polygonStart: function () {
                        da.point = _a, da.lineStart = ma, da.lineEnd = xa, ha.reset(), Bo.polygonStart()
                    },
                    polygonEnd: function () {
                        Bo.polygonEnd(), da.point = pa, da.lineStart = ga, da.lineEnd = ya, Io < 0 ? (ea = -(ia = 180), ra = -(ua = 90)) : ha > oo ? ua = 90 : ha < -oo && (ra = -90), la[0] = ea, la[1] = ia
                    }
                };

            function pa(t, n) {
                sa.push(la = [ea = t, ia = t]), n < ra && (ra = n), n > ua && (ua = n)
            }

            function va(t, n) {
                var e = Zo([t * ho, n * ho]);
                if (fa) {
                    var r = Jo(fa, e),
                        i = Jo([r[1], -r[0], 0], r);
                    na(i), i = Go(i);
                    var u, o = t - oa,
                        a = o > 0 ? 1 : -1,
                        c = i[0] * lo * a,
                        f = po(o) > 180;
                    f ^ (a * oa < c && c < a * t) ? (u = i[1] * lo) > ua && (ua = u) : f ^ (a * oa < (c = (c + 360) % 360 - 180) && c < a * t) ? (u = -i[1] * lo) < ra && (ra = u) : (n < ra && (ra = n), n > ua && (ua = n)), f ? t < oa ? ba(ea, t) > ba(ea, ia) && (ia = t) : ba(t, ia) > ba(ea, ia) && (ea = t) : ia >= ea ? (t < ea && (ea = t), t > ia && (ia = t)) : t > oa ? ba(ea, t) > ba(ea, ia) && (ia = t) : ba(t, ia) > ba(ea, ia) && (ea = t)
                } else sa.push(la = [ea = t, ia = t]);
                n < ra && (ra = n), n > ua && (ua = n), fa = e, oa = t
            }

            function ga() {
                da.point = va
            }

            function ya() {
                la[0] = ea, la[1] = ia, da.point = pa, fa = null
            }

            function _a(t, n) {
                if (fa) {
                    var e = t - oa;
                    ha.add(po(e) > 180 ? e + (e > 0 ? 360 : -360) : e)
                } else aa = t, ca = n;
                Bo.point(t, n), va(t, n)
            }

            function ma() {
                Bo.lineStart()
            }

            function xa() {
                _a(aa, ca), Bo.lineEnd(), po(ha) > oo && (ea = -(ia = 180)), la[0] = ea, la[1] = ia, fa = null
            }

            function ba(t, n) {
                return (n -= t) < 0 ? n + 360 : n
            }

            function wa(t, n) {
                return t[0] - n[0]
            }

            function Ma(t, n) {
                return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
            }
            var ka, Ta, Ea, Na, Sa, Aa, Ca, za, La, Oa, Pa, Ra, qa, ja, Da, Ua, Fa = function (t) {
                    var n, e, r, i, u, o, a;
                    if (ua = ia = -(ea = ra = 1 / 0), sa = [], Fo(t, da), e = sa.length) {
                        for (sa.sort(wa), n = 1, u = [r = sa[0]]; n < e; ++n) Ma(r, (i = sa[n])[0]) || Ma(r, i[1]) ? (ba(r[0], i[1]) > ba(r[0], r[1]) && (r[1] = i[1]), ba(i[0], r[1]) > ba(r[0], r[1]) && (r[0] = i[0])) : u.push(r = i);
                        for (o = -1 / 0, n = 0, r = u[e = u.length - 1]; n <= e; r = i, ++n) i = u[n], (a = ba(r[1], i[0])) > o && (o = a, ea = i[0], ia = r[1])
                    }
                    return sa = la = null, ea === 1 / 0 || ra === 1 / 0 ? [
                        [NaN, NaN],
                        [NaN, NaN]
                    ] : [
                        [ea, ra],
                        [ia, ua]
                    ]
                },
                Ia = {
                    sphere: Ao,
                    point: Ya,
                    lineStart: Ha,
                    lineEnd: $a,
                    polygonStart: function () {
                        Ia.lineStart = Wa, Ia.lineEnd = Ga
                    },
                    polygonEnd: function () {
                        Ia.lineStart = Ha, Ia.lineEnd = $a
                    }
                };

            function Ya(t, n) {
                t *= ho;
                var e = yo(n *= ho);
                Ba(e * yo(t), e * wo(t), wo(n))
            }

            function Ba(t, n, e) {
                Ea += (t - Ea) / ++ka, Na += (n - Na) / ka, Sa += (e - Sa) / ka
            }

            function Ha() {
                Ia.point = Xa
            }

            function Xa(t, n) {
                t *= ho;
                var e = yo(n *= ho);
                ja = e * yo(t), Da = e * wo(t), Ua = wo(n), Ia.point = Va, Ba(ja, Da, Ua)
            }

            function Va(t, n) {
                t *= ho;
                var e = yo(n *= ho),
                    r = e * yo(t),
                    i = e * wo(t),
                    u = wo(n),
                    o = go(ko((o = Da * u - Ua * i) * o + (o = Ua * r - ja * u) * o + (o = ja * i - Da * r) * o), ja * r + Da * i + Ua * u);
                Ta += o, Aa += o * (ja + (ja = r)), Ca += o * (Da + (Da = i)), za += o * (Ua + (Ua = u)), Ba(ja, Da, Ua)
            }

            function $a() {
                Ia.point = Ya
            }

            function Wa() {
                Ia.point = Za
            }

            function Ga() {
                Qa(Ra, qa), Ia.point = Ya
            }

            function Za(t, n) {
                Ra = t, qa = n, t *= ho, n *= ho, Ia.point = Qa;
                var e = yo(n);
                ja = e * yo(t), Da = e * wo(t), Ua = wo(n), Ba(ja, Da, Ua)
            }

            function Qa(t, n) {
                t *= ho;
                var e = yo(n *= ho),
                    r = e * yo(t),
                    i = e * wo(t),
                    u = wo(n),
                    o = Da * u - Ua * i,
                    a = Ua * r - ja * u,
                    c = ja * i - Da * r,
                    f = ko(o * o + a * a + c * c),
                    s = No(f),
                    l = f && -s / f;
                La += l * o, Oa += l * a, Pa += l * c, Ta += s, Aa += s * (ja + (ja = r)), Ca += s * (Da + (Da = i)), za += s * (Ua + (Ua = u)), Ba(ja, Da, Ua)
            }
            var Ja = function (t) {
                    ka = Ta = Ea = Na = Sa = Aa = Ca = za = La = Oa = Pa = 0, Fo(t, Ia);
                    var n = La,
                        e = Oa,
                        r = Pa,
                        i = n * n + e * e + r * r;
                    return i < 1e-12 && (n = Aa, e = Ca, r = za, Ta < oo && (n = Ea, e = Na, r = Sa), (i = n * n + e * e + r * r) < 1e-12) ? [NaN, NaN] : [go(e, n) * lo, No(r / ko(i)) * lo]
                },
                Ka = function (t) {
                    return function () {
                        return t
                    }
                },
                tc = function (t, n) {
                    function e(e, r) {
                        return e = t(e, r), n(e[0], e[1])
                    }
                    return t.invert && n.invert && (e.invert = function (e, r) {
                        return (e = n.invert(e, r)) && t.invert(e[0], e[1])
                    }), e
                };

            function nc(t, n) {
                return [t > ao ? t - so : t < -ao ? t + so : t, n]
            }

            function ec(t, n, e) {
                return (t %= so) ? n || e ? tc(ic(t), uc(n, e)) : ic(t) : n || e ? uc(n, e) : nc
            }

            function rc(t) {
                return function (n, e) {
                    return [(n += t) > ao ? n - so : n < -ao ? n + so : n, e]
                }
            }

            function ic(t) {
                var n = rc(t);
                return n.invert = rc(-t), n
            }

            function uc(t, n) {
                var e = yo(t),
                    r = wo(t),
                    i = yo(n),
                    u = wo(n);

                function o(t, n) {
                    var o = yo(n),
                        a = yo(t) * o,
                        c = wo(t) * o,
                        f = wo(n),
                        s = f * e + a * r;
                    return [go(c * i - s * u, a * e - f * r), No(s * i + c * u)]
                }
                return o.invert = function (t, n) {
                    var o = yo(n),
                        a = yo(t) * o,
                        c = wo(t) * o,
                        f = wo(n),
                        s = f * i - c * u;
                    return [go(c * i + f * u, a * e + s * r), No(s * e - a * r)]
                }, o
            }
            nc.invert = nc;
            var oc = function (t) {
                function n(n) {
                    return (n = t(n[0] * ho, n[1] * ho))[0] *= lo, n[1] *= lo, n
                }
                return t = ec(t[0] * ho, t[1] * ho, t.length > 2 ? t[2] * ho : 0), n.invert = function (n) {
                    return (n = t.invert(n[0] * ho, n[1] * ho))[0] *= lo, n[1] *= lo, n
                }, n
            };

            function ac(t, n, e, r, i, u) {
                if (e) {
                    var o = yo(n),
                        a = wo(n),
                        c = r * e;
                    null == i ? (i = n + r * so, u = n - c / 2) : (i = cc(o, i), u = cc(o, u), (r > 0 ? i < u : i > u) && (i += r * so));
                    for (var f, s = i; r > 0 ? s > u : s < u; s -= c) f = Go([o, -a * yo(s), -a * wo(s)]), t.point(f[0], f[1])
                }
            }

            function cc(t, n) {
                (n = Zo(n))[0] -= t, na(n);
                var e = Eo(-n[1]);
                return ((-n[2] < 0 ? -e : e) + so - oo) % so
            }
            var fc = function () {
                    var t, n, e = Ka([0, 0]),
                        r = Ka(90),
                        i = Ka(6),
                        u = {
                            point: function (e, r) {
                                t.push(e = n(e, r)), e[0] *= lo, e[1] *= lo
                            }
                        };

                    function o() {
                        var o = e.apply(this, arguments),
                            a = r.apply(this, arguments) * ho,
                            c = i.apply(this, arguments) * ho;
                        return t = [], n = ec(-o[0] * ho, -o[1] * ho, 0).invert, ac(u, a, c, 1), o = {
                            type: "Polygon",
                            coordinates: [t]
                        }, t = n = null, o
                    }
                    return o.center = function (t) {
                        return arguments.length ? (e = "function" == typeof t ? t : Ka([+t[0], +t[1]]), o) : e
                    }, o.radius = function (t) {
                        return arguments.length ? (r = "function" == typeof t ? t : Ka(+t), o) : r
                    }, o.precision = function (t) {
                        return arguments.length ? (i = "function" == typeof t ? t : Ka(+t), o) : i
                    }, o
                },
                sc = function () {
                    var t, n = [];
                    return {
                        point: function (n, e) {
                            t.push([n, e])
                        },
                        lineStart: function () {
                            n.push(t = [])
                        },
                        lineEnd: Ao,
                        rejoin: function () {
                            n.length > 1 && n.push(n.pop().concat(n.shift()))
                        },
                        result: function () {
                            var e = n;
                            return n = [], t = null, e
                        }
                    }
                },
                lc = function (t, n) {
                    return po(t[0] - n[0]) < oo && po(t[1] - n[1]) < oo
                };

            function hc(t, n, e, r) {
                this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
            }
            var dc = function (t, n, e, r, i) {
                var u, o, a = [],
                    c = [];
                if (t.forEach((function (t) {
                        if (!((n = t.length - 1) <= 0)) {
                            var n, e, r = t[0],
                                o = t[n];
                            if (lc(r, o)) {
                                for (i.lineStart(), u = 0; u < n; ++u) i.point((r = t[u])[0], r[1]);
                                i.lineEnd()
                            } else a.push(e = new hc(r, t, null, !0)), c.push(e.o = new hc(r, null, e, !1)), a.push(e = new hc(o, t, null, !1)), c.push(e.o = new hc(o, null, e, !0))
                        }
                    })), a.length) {
                    for (c.sort(n), pc(a), pc(c), u = 0, o = c.length; u < o; ++u) c[u].e = e = !e;
                    for (var f, s, l = a[0];;) {
                        for (var h = l, d = !0; h.v;)
                            if ((h = h.n) === l) return;
                        f = h.z, i.lineStart();
                        do {
                            if (h.v = h.o.v = !0, h.e) {
                                if (d)
                                    for (u = 0, o = f.length; u < o; ++u) i.point((s = f[u])[0], s[1]);
                                else r(h.x, h.n.x, 1, i);
                                h = h.n
                            } else {
                                if (d)
                                    for (f = h.p.z, u = f.length - 1; u >= 0; --u) i.point((s = f[u])[0], s[1]);
                                else r(h.x, h.p.x, -1, i);
                                h = h.p
                            }
                            f = (h = h.o).z, d = !d
                        } while (!h.v);
                        i.lineEnd()
                    }
                }
            };

            function pc(t) {
                if (n = t.length) {
                    for (var n, e, r = 0, i = t[0]; ++r < n;) i.n = e = t[r], e.p = i, i = e;
                    i.n = e = t[0], e.p = i
                }
            }
            var vc = eo(),
                gc = function (t, n) {
                    var e = n[0],
                        r = n[1],
                        i = [wo(e), -yo(e), 0],
                        u = 0,
                        o = 0;
                    vc.reset();
                    for (var a = 0, c = t.length; a < c; ++a)
                        if (s = (f = t[a]).length)
                            for (var f, s, l = f[s - 1], h = l[0], d = l[1] / 2 + fo, p = wo(d), v = yo(d), g = 0; g < s; ++g, h = _, p = x, v = b, l = y) {
                                var y = f[g],
                                    _ = y[0],
                                    m = y[1] / 2 + fo,
                                    x = wo(m),
                                    b = yo(m),
                                    w = _ - h,
                                    M = w >= 0 ? 1 : -1,
                                    k = M * w,
                                    T = k > ao,
                                    E = p * x;
                                if (vc.add(go(E * M * wo(k), v * b + E * yo(k))), u += T ? w + M * so : w, T ^ h >= e ^ _ >= e) {
                                    var N = Jo(Zo(l), Zo(y));
                                    na(N);
                                    var S = Jo(i, N);
                                    na(S);
                                    var A = (T ^ w >= 0 ? -1 : 1) * No(S[2]);
                                    (r > A || r === A && (N[0] || N[1])) && (o += T ^ w >= 0 ? 1 : -1)
                                }
                            }
                    return (u < -oo || u < oo && vc < -oo) ^ 1 & o
                },
                yc = function (t, n, e, i) {
                    return function (u) {
                        var o, a, c, f = n(u),
                            s = sc(),
                            l = n(s),
                            h = !1,
                            d = {
                                point: p,
                                lineStart: g,
                                lineEnd: y,
                                polygonStart: function () {
                                    d.point = _, d.lineStart = m, d.lineEnd = x, a = [], o = []
                                },
                                polygonEnd: function () {
                                    d.point = p, d.lineStart = g, d.lineEnd = y, a = Object(r.n)(a);
                                    var t = gc(o, i);
                                    a.length ? (h || (u.polygonStart(), h = !0), dc(a, mc, t, e, u)) : t && (h || (u.polygonStart(), h = !0), u.lineStart(), e(null, null, 1, u), u.lineEnd()), h && (u.polygonEnd(), h = !1), a = o = null
                                },
                                sphere: function () {
                                    u.polygonStart(), u.lineStart(), e(null, null, 1, u), u.lineEnd(), u.polygonEnd()
                                }
                            };

                        function p(n, e) {
                            t(n, e) && u.point(n, e)
                        }

                        function v(t, n) {
                            f.point(t, n)
                        }

                        function g() {
                            d.point = v, f.lineStart()
                        }

                        function y() {
                            d.point = p, f.lineEnd()
                        }

                        function _(t, n) {
                            c.push([t, n]), l.point(t, n)
                        }

                        function m() {
                            l.lineStart(), c = []
                        }

                        function x() {
                            _(c[0][0], c[0][1]), l.lineEnd();
                            var t, n, e, r, i = l.clean(),
                                f = s.result(),
                                d = f.length;
                            if (c.pop(), o.push(c), c = null, d)
                                if (1 & i) {
                                    if ((n = (e = f[0]).length - 1) > 0) {
                                        for (h || (u.polygonStart(), h = !0), u.lineStart(), t = 0; t < n; ++t) u.point((r = e[t])[0], r[1]);
                                        u.lineEnd()
                                    }
                                } else d > 1 && 2 & i && f.push(f.pop().concat(f.shift())), a.push(f.filter(_c))
                        }
                        return d
                    }
                };

            function _c(t) {
                return t.length > 1
            }

            function mc(t, n) {
                return ((t = t.x)[0] < 0 ? t[1] - co - oo : co - t[1]) - ((n = n.x)[0] < 0 ? n[1] - co - oo : co - n[1])
            }
            var xc = yc((function () {
                    return !0
                }), (function (t) {
                    var n, e = NaN,
                        r = NaN,
                        i = NaN;
                    return {
                        lineStart: function () {
                            t.lineStart(), n = 1
                        },
                        point: function (u, o) {
                            var a = u > 0 ? ao : -ao,
                                c = po(u - e);
                            po(c - ao) < oo ? (t.point(e, r = (r + o) / 2 > 0 ? co : -co), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), t.point(u, r), n = 0) : i !== a && c >= ao && (po(e - i) < oo && (e -= i * oo), po(u - a) < oo && (u -= a * oo), r = function (t, n, e, r) {
                                var i, u, o = wo(t - e);
                                return po(o) > oo ? vo((wo(n) * (u = yo(r)) * wo(e) - wo(r) * (i = yo(n)) * wo(t)) / (i * u * o)) : (n + r) / 2
                            }(e, r, u, o), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), n = 0), t.point(e = u, r = o), i = a
                        },
                        lineEnd: function () {
                            t.lineEnd(), e = r = NaN
                        },
                        clean: function () {
                            return 2 - n
                        }
                    }
                }), (function (t, n, e, r) {
                    var i;
                    if (null == t) i = e * co, r.point(-ao, i), r.point(0, i), r.point(ao, i), r.point(ao, 0), r.point(ao, -i), r.point(0, -i), r.point(-ao, -i), r.point(-ao, 0), r.point(-ao, i);
                    else if (po(t[0] - n[0]) > oo) {
                        var u = t[0] < n[0] ? ao : -ao;
                        i = e * u / 2, r.point(-u, i), r.point(0, i), r.point(u, i)
                    } else r.point(n[0], n[1])
                }), [-ao, -co]),
                bc = function (t) {
                    var n = yo(t),
                        e = 6 * ho,
                        r = n > 0,
                        i = po(n) > oo;

                    function u(t, e) {
                        return yo(t) * yo(e) > n
                    }

                    function o(t, e, r) {
                        var i = [1, 0, 0],
                            u = Jo(Zo(t), Zo(e)),
                            o = Qo(u, u),
                            a = u[0],
                            c = o - a * a;
                        if (!c) return !r && t;
                        var f = n * o / c,
                            s = -n * a / c,
                            l = Jo(i, u),
                            h = ta(i, f);
                        Ko(h, ta(u, s));
                        var d = l,
                            p = Qo(h, d),
                            v = Qo(d, d),
                            g = p * p - v * (Qo(h, h) - 1);
                        if (!(g < 0)) {
                            var y = ko(g),
                                _ = ta(d, (-p - y) / v);
                            if (Ko(_, h), _ = Go(_), !r) return _;
                            var m, x = t[0],
                                b = e[0],
                                w = t[1],
                                M = e[1];
                            b < x && (m = x, x = b, b = m);
                            var k = b - x,
                                T = po(k - ao) < oo;
                            if (!T && M < w && (m = w, w = M, M = m), T || k < oo ? T ? w + M > 0 ^ _[1] < (po(_[0] - x) < oo ? w : M) : w <= _[1] && _[1] <= M : k > ao ^ (x <= _[0] && _[0] <= b)) {
                                var E = ta(d, (-p + y) / v);
                                return Ko(E, h), [_, Go(E)]
                            }
                        }
                    }

                    function a(n, e) {
                        var i = r ? t : ao - t,
                            u = 0;
                        return n < -i ? u |= 1 : n > i && (u |= 2), e < -i ? u |= 4 : e > i && (u |= 8), u
                    }
                    return yc(u, (function (t) {
                        var n, e, c, f, s;
                        return {
                            lineStart: function () {
                                f = c = !1, s = 1
                            },
                            point: function (l, h) {
                                var d, p = [l, h],
                                    v = u(l, h),
                                    g = r ? v ? 0 : a(l, h) : v ? a(l + (l < 0 ? ao : -ao), h) : 0;
                                if (!n && (f = c = v) && t.lineStart(), v !== c && (!(d = o(n, p)) || lc(n, d) || lc(p, d)) && (p[0] += oo, p[1] += oo, v = u(p[0], p[1])), v !== c) s = 0, v ? (t.lineStart(), d = o(p, n), t.point(d[0], d[1])) : (d = o(n, p), t.point(d[0], d[1]), t.lineEnd()), n = d;
                                else if (i && n && r ^ v) {
                                    var y;
                                    g & e || !(y = o(p, n, !0)) || (s = 0, r ? (t.lineStart(), t.point(y[0][0], y[0][1]), t.point(y[1][0], y[1][1]), t.lineEnd()) : (t.point(y[1][0], y[1][1]), t.lineEnd(), t.lineStart(), t.point(y[0][0], y[0][1])))
                                }!v || n && lc(n, p) || t.point(p[0], p[1]), n = p, c = v, e = g
                            },
                            lineEnd: function () {
                                c && t.lineEnd(), n = null
                            },
                            clean: function () {
                                return s | (f && c) << 1
                            }
                        }
                    }), (function (n, r, i, u) {
                        ac(u, t, e, i, n, r)
                    }), r ? [0, -t] : [-ao, t - ao])
                },
                wc = function (t, n, e, r, i, u) {
                    var o, a = t[0],
                        c = t[1],
                        f = 0,
                        s = 1,
                        l = n[0] - a,
                        h = n[1] - c;
                    if (o = e - a, l || !(o > 0)) {
                        if (o /= l, l < 0) {
                            if (o < f) return;
                            o < s && (s = o)
                        } else if (l > 0) {
                            if (o > s) return;
                            o > f && (f = o)
                        }
                        if (o = i - a, l || !(o < 0)) {
                            if (o /= l, l < 0) {
                                if (o > s) return;
                                o > f && (f = o)
                            } else if (l > 0) {
                                if (o < f) return;
                                o < s && (s = o)
                            }
                            if (o = r - c, h || !(o > 0)) {
                                if (o /= h, h < 0) {
                                    if (o < f) return;
                                    o < s && (s = o)
                                } else if (h > 0) {
                                    if (o > s) return;
                                    o > f && (f = o)
                                }
                                if (o = u - c, h || !(o < 0)) {
                                    if (o /= h, h < 0) {
                                        if (o > s) return;
                                        o > f && (f = o)
                                    } else if (h > 0) {
                                        if (o < f) return;
                                        o < s && (s = o)
                                    }
                                    return f > 0 && (t[0] = a + f * l, t[1] = c + f * h), s < 1 && (n[0] = a + s * l, n[1] = c + s * h), !0
                                }
                            }
                        }
                    }
                },
                Mc = 1e9,
                kc = -Mc;

            function Tc(t, n, e, i) {
                function u(r, u) {
                    return t <= r && r <= e && n <= u && u <= i
                }

                function o(r, u, o, c) {
                    var s = 0,
                        l = 0;
                    if (null == r || (s = a(r, o)) !== (l = a(u, o)) || f(r, u) < 0 ^ o > 0)
                        do {
                            c.point(0 === s || 3 === s ? t : e, s > 1 ? i : n)
                        } while ((s = (s + o + 4) % 4) !== l);
                    else c.point(u[0], u[1])
                }

                function a(r, i) {
                    return po(r[0] - t) < oo ? i > 0 ? 0 : 3 : po(r[0] - e) < oo ? i > 0 ? 2 : 1 : po(r[1] - n) < oo ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
                }

                function c(t, n) {
                    return f(t.x, n.x)
                }

                function f(t, n) {
                    var e = a(t, 1),
                        r = a(n, 1);
                    return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0]
                }
                return function (a) {
                    var f, s, l, h, d, p, v, g, y, _, m, x = a,
                        b = sc(),
                        w = {
                            point: M,
                            lineStart: function () {
                                w.point = k, s && s.push(l = []), _ = !0, y = !1, v = g = NaN
                            },
                            lineEnd: function () {
                                f && (k(h, d), p && y && b.rejoin(), f.push(b.result())), w.point = M, y && x.lineEnd()
                            },
                            polygonStart: function () {
                                x = b, f = [], s = [], m = !0
                            },
                            polygonEnd: function () {
                                var n = function () {
                                        for (var n = 0, e = 0, r = s.length; e < r; ++e)
                                            for (var u, o, a = s[e], c = 1, f = a.length, l = a[0], h = l[0], d = l[1]; c < f; ++c) u = h, o = d, h = (l = a[c])[0], d = l[1], o <= i ? d > i && (h - u) * (i - o) > (d - o) * (t - u) && ++n : d <= i && (h - u) * (i - o) < (d - o) * (t - u) && --n;
                                        return n
                                    }(),
                                    e = m && n,
                                    u = (f = Object(r.n)(f)).length;
                                (e || u) && (a.polygonStart(), e && (a.lineStart(), o(null, null, 1, a), a.lineEnd()), u && dc(f, c, n, o, a), a.polygonEnd()), x = a, f = s = l = null
                            }
                        };

                    function M(t, n) {
                        u(t, n) && x.point(t, n)
                    }

                    function k(r, o) {
                        var a = u(r, o);
                        if (s && l.push([r, o]), _) h = r, d = o, p = a, _ = !1, a && (x.lineStart(), x.point(r, o));
                        else if (a && y) x.point(r, o);
                        else {
                            var c = [v = Math.max(kc, Math.min(Mc, v)), g = Math.max(kc, Math.min(Mc, g))],
                                f = [r = Math.max(kc, Math.min(Mc, r)), o = Math.max(kc, Math.min(Mc, o))];
                            wc(c, f, t, n, e, i) ? (y || (x.lineStart(), x.point(c[0], c[1])), x.point(f[0], f[1]), a || x.lineEnd(), m = !1) : a && (x.lineStart(), x.point(r, o), m = !1)
                        }
                        v = r, g = o, y = a
                    }
                    return w
                }
            }
            var Ec, Nc, Sc, Ac = function () {
                    var t, n, e, r = 0,
                        i = 0,
                        u = 960,
                        o = 500;
                    return e = {
                        stream: function (e) {
                            return t && n === e ? t : t = Tc(r, i, u, o)(n = e)
                        },
                        extent: function (a) {
                            return arguments.length ? (r = +a[0][0], i = +a[0][1], u = +a[1][0], o = +a[1][1], t = n = null, e) : [
                                [r, i],
                                [u, o]
                            ]
                        }
                    }
                },
                Cc = eo(),
                zc = {
                    sphere: Ao,
                    point: Ao,
                    lineStart: function () {
                        zc.point = Oc, zc.lineEnd = Lc
                    },
                    lineEnd: Ao,
                    polygonStart: Ao,
                    polygonEnd: Ao
                };

            function Lc() {
                zc.point = zc.lineEnd = Ao
            }

            function Oc(t, n) {
                Ec = t *= ho, Nc = wo(n *= ho), Sc = yo(n), zc.point = Pc
            }

            function Pc(t, n) {
                t *= ho;
                var e = wo(n *= ho),
                    r = yo(n),
                    i = po(t - Ec),
                    u = yo(i),
                    o = r * wo(i),
                    a = Sc * e - Nc * r * u,
                    c = Nc * e + Sc * r * u;
                Cc.add(go(ko(o * o + a * a), c)), Ec = t, Nc = e, Sc = r
            }
            var Rc = function (t) {
                    return Cc.reset(), Fo(t, zc), +Cc
                },
                qc = [null, null],
                jc = {
                    type: "LineString",
                    coordinates: qc
                },
                Dc = function (t, n) {
                    return qc[0] = t, qc[1] = n, Rc(jc)
                },
                Uc = {
                    Feature: function (t, n) {
                        return Ic(t.geometry, n)
                    },
                    FeatureCollection: function (t, n) {
                        for (var e = t.features, r = -1, i = e.length; ++r < i;)
                            if (Ic(e[r].geometry, n)) return !0;
                        return !1
                    }
                },
                Fc = {
                    Sphere: function () {
                        return !0
                    },
                    Point: function (t, n) {
                        return Yc(t.coordinates, n)
                    },
                    MultiPoint: function (t, n) {
                        for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
                            if (Yc(e[r], n)) return !0;
                        return !1
                    },
                    LineString: function (t, n) {
                        return Bc(t.coordinates, n)
                    },
                    MultiLineString: function (t, n) {
                        for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
                            if (Bc(e[r], n)) return !0;
                        return !1
                    },
                    Polygon: function (t, n) {
                        return Hc(t.coordinates, n)
                    },
                    MultiPolygon: function (t, n) {
                        for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
                            if (Hc(e[r], n)) return !0;
                        return !1
                    },
                    GeometryCollection: function (t, n) {
                        for (var e = t.geometries, r = -1, i = e.length; ++r < i;)
                            if (Ic(e[r], n)) return !0;
                        return !1
                    }
                };

            function Ic(t, n) {
                return !(!t || !Fc.hasOwnProperty(t.type)) && Fc[t.type](t, n)
            }

            function Yc(t, n) {
                return 0 === Dc(t, n)
            }

            function Bc(t, n) {
                var e = Dc(t[0], t[1]);
                return Dc(t[0], n) + Dc(n, t[1]) <= e + oo
            }

            function Hc(t, n) {
                return !!gc(t.map(Xc), Vc(n))
            }

            function Xc(t) {
                return (t = t.map(Vc)).pop(), t
            }

            function Vc(t) {
                return [t[0] * ho, t[1] * ho]
            }
            var $c = function (t, n) {
                return (t && Uc.hasOwnProperty(t.type) ? Uc[t.type] : Ic)(t, n)
            };

            function Wc(t, n, e) {
                var i = Object(r.s)(t, n - oo, e).concat(n);
                return function (t) {
                    return i.map((function (n) {
                        return [t, n]
                    }))
                }
            }

            function Gc(t, n, e) {
                var i = Object(r.s)(t, n - oo, e).concat(n);
                return function (t) {
                    return i.map((function (n) {
                        return [n, t]
                    }))
                }
            }

            function Zc() {
                var t, n, e, i, u, o, a, c, f, s, l, h, d = 10,
                    p = d,
                    v = 90,
                    g = 360,
                    y = 2.5;

                function _() {
                    return {
                        type: "MultiLineString",
                        coordinates: m()
                    }
                }

                function m() {
                    return Object(r.s)(_o(i / v) * v, e, v).map(l).concat(Object(r.s)(_o(c / g) * g, a, g).map(h)).concat(Object(r.s)(_o(n / d) * d, t, d).filter((function (t) {
                        return po(t % v) > oo
                    })).map(f)).concat(Object(r.s)(_o(o / p) * p, u, p).filter((function (t) {
                        return po(t % g) > oo
                    })).map(s))
                }
                return _.lines = function () {
                    return m().map((function (t) {
                        return {
                            type: "LineString",
                            coordinates: t
                        }
                    }))
                }, _.outline = function () {
                    return {
                        type: "Polygon",
                        coordinates: [l(i).concat(h(a).slice(1), l(e).reverse().slice(1), h(c).reverse().slice(1))]
                    }
                }, _.extent = function (t) {
                    return arguments.length ? _.extentMajor(t).extentMinor(t) : _.extentMinor()
                }, _.extentMajor = function (t) {
                    return arguments.length ? (i = +t[0][0], e = +t[1][0], c = +t[0][1], a = +t[1][1], i > e && (t = i, i = e, e = t), c > a && (t = c, c = a, a = t), _.precision(y)) : [
                        [i, c],
                        [e, a]
                    ]
                }, _.extentMinor = function (e) {
                    return arguments.length ? (n = +e[0][0], t = +e[1][0], o = +e[0][1], u = +e[1][1], n > t && (e = n, n = t, t = e), o > u && (e = o, o = u, u = e), _.precision(y)) : [
                        [n, o],
                        [t, u]
                    ]
                }, _.step = function (t) {
                    return arguments.length ? _.stepMajor(t).stepMinor(t) : _.stepMinor()
                }, _.stepMajor = function (t) {
                    return arguments.length ? (v = +t[0], g = +t[1], _) : [v, g]
                }, _.stepMinor = function (t) {
                    return arguments.length ? (d = +t[0], p = +t[1], _) : [d, p]
                }, _.precision = function (r) {
                    return arguments.length ? (y = +r, f = Wc(o, u, 90), s = Gc(n, t, y), l = Wc(c, a, 90), h = Gc(i, e, y), _) : y
                }, _.extentMajor([
                    [-180, -90 + oo],
                    [180, 90 - oo]
                ]).extentMinor([
                    [-180, -80 - oo],
                    [180, 80 + oo]
                ])
            }

            function Qc() {
                return Zc()()
            }
            var Jc, Kc, tf, nf, ef = function (t, n) {
                    var e = t[0] * ho,
                        r = t[1] * ho,
                        i = n[0] * ho,
                        u = n[1] * ho,
                        o = yo(r),
                        a = wo(r),
                        c = yo(u),
                        f = wo(u),
                        s = o * yo(e),
                        l = o * wo(e),
                        h = c * yo(i),
                        d = c * wo(i),
                        p = 2 * No(ko(So(u - r) + o * c * So(i - e))),
                        v = wo(p),
                        g = p ? function (t) {
                            var n = wo(t *= p) / v,
                                e = wo(p - t) / v,
                                r = e * s + n * h,
                                i = e * l + n * d,
                                u = e * a + n * f;
                            return [go(i, r) * lo, go(u, ko(r * r + i * i)) * lo]
                        } : function () {
                            return [e * lo, r * lo]
                        };
                    return g.distance = p, g
                },
                rf = function (t) {
                    return t
                },
                uf = eo(),
                of = eo(),
                af = {
                    point: Ao,
                    lineStart: Ao,
                    lineEnd: Ao,
                    polygonStart: function () {
                        af.lineStart = cf, af.lineEnd = lf
                    },
                    polygonEnd: function () {
                        af.lineStart = af.lineEnd = af.point = Ao, uf.add(po( of )), of .reset()
                    },
                    result: function () {
                        var t = uf / 2;
                        return uf.reset(), t
                    }
                };

            function cf() {
                af.point = ff
            }

            function ff(t, n) {
                af.point = sf, Jc = tf = t, Kc = nf = n
            }

            function sf(t, n) {
                of .add(nf * t - tf * n), tf = t, nf = n
            }

            function lf() {
                sf(Jc, Kc)
            }
            var hf, df, pf, vf, gf = af,
                yf = 1 / 0,
                _f = yf,
                mf = -yf,
                xf = mf,
                bf = {
                    point: function (t, n) {
                        t < yf && (yf = t), t > mf && (mf = t), n < _f && (_f = n), n > xf && (xf = n)
                    },
                    lineStart: Ao,
                    lineEnd: Ao,
                    polygonStart: Ao,
                    polygonEnd: Ao,
                    result: function () {
                        var t = [
                            [yf, _f],
                            [mf, xf]
                        ];
                        return mf = xf = -(_f = yf = 1 / 0), t
                    }
                },
                wf = 0,
                Mf = 0,
                kf = 0,
                Tf = 0,
                Ef = 0,
                Nf = 0,
                Sf = 0,
                Af = 0,
                Cf = 0,
                zf = {
                    point: Lf,
                    lineStart: Of,
                    lineEnd: qf,
                    polygonStart: function () {
                        zf.lineStart = jf, zf.lineEnd = Df
                    },
                    polygonEnd: function () {
                        zf.point = Lf, zf.lineStart = Of, zf.lineEnd = qf
                    },
                    result: function () {
                        var t = Cf ? [Sf / Cf, Af / Cf] : Nf ? [Tf / Nf, Ef / Nf] : kf ? [wf / kf, Mf / kf] : [NaN, NaN];
                        return wf = Mf = kf = Tf = Ef = Nf = Sf = Af = Cf = 0, t
                    }
                };

            function Lf(t, n) {
                wf += t, Mf += n, ++kf
            }

            function Of() {
                zf.point = Pf
            }

            function Pf(t, n) {
                zf.point = Rf, Lf(pf = t, vf = n)
            }

            function Rf(t, n) {
                var e = t - pf,
                    r = n - vf,
                    i = ko(e * e + r * r);
                Tf += i * (pf + t) / 2, Ef += i * (vf + n) / 2, Nf += i, Lf(pf = t, vf = n)
            }

            function qf() {
                zf.point = Lf
            }

            function jf() {
                zf.point = Uf
            }

            function Df() {
                Ff(hf, df)
            }

            function Uf(t, n) {
                zf.point = Ff, Lf(hf = pf = t, df = vf = n)
            }

            function Ff(t, n) {
                var e = t - pf,
                    r = n - vf,
                    i = ko(e * e + r * r);
                Tf += i * (pf + t) / 2, Ef += i * (vf + n) / 2, Nf += i, Sf += (i = vf * t - pf * n) * (pf + t), Af += i * (vf + n), Cf += 3 * i, Lf(pf = t, vf = n)
            }
            var If = zf;

            function Yf(t) {
                this._context = t
            }
            Yf.prototype = {
                _radius: 4.5,
                pointRadius: function (t) {
                    return this._radius = t, this
                },
                polygonStart: function () {
                    this._line = 0
                },
                polygonEnd: function () {
                    this._line = NaN
                },
                lineStart: function () {
                    this._point = 0
                },
                lineEnd: function () {
                    0 === this._line && this._context.closePath(), this._point = NaN
                },
                point: function (t, n) {
                    switch (this._point) {
                        case 0:
                            this._context.moveTo(t, n), this._point = 1;
                            break;
                        case 1:
                            this._context.lineTo(t, n);
                            break;
                        default:
                            this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, so)
                    }
                },
                result: Ao
            };
            var Bf, Hf, Xf, Vf, $f, Wf = eo(),
                Gf = {
                    point: Ao,
                    lineStart: function () {
                        Gf.point = Zf
                    },
                    lineEnd: function () {
                        Bf && Qf(Hf, Xf), Gf.point = Ao
                    },
                    polygonStart: function () {
                        Bf = !0
                    },
                    polygonEnd: function () {
                        Bf = null
                    },
                    result: function () {
                        var t = +Wf;
                        return Wf.reset(), t
                    }
                };

            function Zf(t, n) {
                Gf.point = Qf, Hf = Vf = t, Xf = $f = n
            }

            function Qf(t, n) {
                Vf -= t, $f -= n, Wf.add(ko(Vf * Vf + $f * $f)), Vf = t, $f = n
            }
            var Jf = Gf;

            function Kf() {
                this._string = []
            }

            function ts(t) {
                return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
            }
            Kf.prototype = {
                _radius: 4.5,
                _circle: ts(4.5),
                pointRadius: function (t) {
                    return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this
                },
                polygonStart: function () {
                    this._line = 0
                },
                polygonEnd: function () {
                    this._line = NaN
                },
                lineStart: function () {
                    this._point = 0
                },
                lineEnd: function () {
                    0 === this._line && this._string.push("Z"), this._point = NaN
                },
                point: function (t, n) {
                    switch (this._point) {
                        case 0:
                            this._string.push("M", t, ",", n), this._point = 1;
                            break;
                        case 1:
                            this._string.push("L", t, ",", n);
                            break;
                        default:
                            null == this._circle && (this._circle = ts(this._radius)), this._string.push("M", t, ",", n, this._circle)
                    }
                },
                result: function () {
                    if (this._string.length) {
                        var t = this._string.join("");
                        return this._string = [], t
                    }
                    return null
                }
            };
            var ns = function (t, n) {
                    var e, r, i = 4.5;

                    function u(t) {
                        return t && ("function" == typeof i && r.pointRadius(+i.apply(this, arguments)), Fo(t, e(r))), r.result()
                    }
                    return u.area = function (t) {
                        return Fo(t, e(gf)), gf.result()
                    }, u.measure = function (t) {
                        return Fo(t, e(Jf)), Jf.result()
                    }, u.bounds = function (t) {
                        return Fo(t, e(bf)), bf.result()
                    }, u.centroid = function (t) {
                        return Fo(t, e(If)), If.result()
                    }, u.projection = function (n) {
                        return arguments.length ? (e = null == n ? (t = null, rf) : (t = n).stream, u) : t
                    }, u.context = function (t) {
                        return arguments.length ? (r = null == t ? (n = null, new Kf) : new Yf(n = t), "function" != typeof i && r.pointRadius(i), u) : n
                    }, u.pointRadius = function (t) {
                        return arguments.length ? (i = "function" == typeof t ? t : (r.pointRadius(+t), +t), u) : i
                    }, u.projection(t).context(n)
                },
                es = function (t) {
                    return {
                        stream: rs(t)
                    }
                };

            function rs(t) {
                return function (n) {
                    var e = new is;
                    for (var r in t) e[r] = t[r];
                    return e.stream = n, e
                }
            }

            function is() {}

            function us(t, n, e) {
                var r = t.clipExtent && t.clipExtent();
                return t.scale(150).translate([0, 0]), null != r && t.clipExtent(null), Fo(e, t.stream(bf)), n(bf.result()), null != r && t.clipExtent(r), t
            }

            function os(t, n, e) {
                return us(t, (function (e) {
                    var r = n[1][0] - n[0][0],
                        i = n[1][1] - n[0][1],
                        u = Math.min(r / (e[1][0] - e[0][0]), i / (e[1][1] - e[0][1])),
                        o = +n[0][0] + (r - u * (e[1][0] + e[0][0])) / 2,
                        a = +n[0][1] + (i - u * (e[1][1] + e[0][1])) / 2;
                    t.scale(150 * u).translate([o, a])
                }), e)
            }

            function as(t, n, e) {
                return os(t, [
                    [0, 0], n
                ], e)
            }

            function cs(t, n, e) {
                return us(t, (function (e) {
                    var r = +n,
                        i = r / (e[1][0] - e[0][0]),
                        u = (r - i * (e[1][0] + e[0][0])) / 2,
                        o = -i * e[0][1];
                    t.scale(150 * i).translate([u, o])
                }), e)
            }

            function fs(t, n, e) {
                return us(t, (function (e) {
                    var r = +n,
                        i = r / (e[1][1] - e[0][1]),
                        u = -i * e[0][0],
                        o = (r - i * (e[1][1] + e[0][1])) / 2;
                    t.scale(150 * i).translate([u, o])
                }), e)
            }
            is.prototype = {
                constructor: is,
                point: function (t, n) {
                    this.stream.point(t, n)
                },
                sphere: function () {
                    this.stream.sphere()
                },
                lineStart: function () {
                    this.stream.lineStart()
                },
                lineEnd: function () {
                    this.stream.lineEnd()
                },
                polygonStart: function () {
                    this.stream.polygonStart()
                },
                polygonEnd: function () {
                    this.stream.polygonEnd()
                }
            };
            var ss = 16,
                ls = yo(30 * ho),
                hs = function (t, n) {
                    return +n ? function (t, n) {
                        function e(r, i, u, o, a, c, f, s, l, h, d, p, v, g) {
                            var y = f - r,
                                _ = s - i,
                                m = y * y + _ * _;
                            if (m > 4 * n && v--) {
                                var x = o + h,
                                    b = a + d,
                                    w = c + p,
                                    M = ko(x * x + b * b + w * w),
                                    k = No(w /= M),
                                    T = po(po(w) - 1) < oo || po(u - l) < oo ? (u + l) / 2 : go(b, x),
                                    E = t(T, k),
                                    N = E[0],
                                    S = E[1],
                                    A = N - r,
                                    C = S - i,
                                    z = _ * A - y * C;
                                (z * z / m > n || po((y * A + _ * C) / m - .5) > .3 || o * h + a * d + c * p < ls) && (e(r, i, u, o, a, c, N, S, T, x /= M, b /= M, w, v, g), g.point(N, S), e(N, S, T, x, b, w, f, s, l, h, d, p, v, g))
                            }
                        }
                        return function (n) {
                            var r, i, u, o, a, c, f, s, l, h, d, p, v = {
                                point: g,
                                lineStart: y,
                                lineEnd: m,
                                polygonStart: function () {
                                    n.polygonStart(), v.lineStart = x
                                },
                                polygonEnd: function () {
                                    n.polygonEnd(), v.lineStart = y
                                }
                            };

                            function g(e, r) {
                                e = t(e, r), n.point(e[0], e[1])
                            }

                            function y() {
                                s = NaN, v.point = _, n.lineStart()
                            }

                            function _(r, i) {
                                var u = Zo([r, i]),
                                    o = t(r, i);
                                e(s, l, f, h, d, p, s = o[0], l = o[1], f = r, h = u[0], d = u[1], p = u[2], ss, n), n.point(s, l)
                            }

                            function m() {
                                v.point = g, n.lineEnd()
                            }

                            function x() {
                                y(), v.point = b, v.lineEnd = w
                            }

                            function b(t, n) {
                                _(r = t, n), i = s, u = l, o = h, a = d, c = p, v.point = _
                            }

                            function w() {
                                e(s, l, f, h, d, p, i, u, r, o, a, c, ss, n), v.lineEnd = m, m()
                            }
                            return v
                        }
                    }(t, n) : function (t) {
                        return rs({
                            point: function (n, e) {
                                n = t(n, e), this.stream.point(n[0], n[1])
                            }
                        })
                    }(t)
                },
                ds = rs({
                    point: function (t, n) {
                        this.stream.point(t * ho, n * ho)
                    }
                });

            function ps(t) {
                return vs((function () {
                    return t
                }))()
            }

            function vs(t) {
                var n, e, r, i, u, o, a, c, f, s, l = 150,
                    h = 480,
                    d = 250,
                    p = 0,
                    v = 0,
                    g = 0,
                    y = 0,
                    _ = 0,
                    m = null,
                    x = xc,
                    b = null,
                    w = rf,
                    M = .5,
                    k = hs(N, M);

                function T(t) {
                    return [(t = u(t[0] * ho, t[1] * ho))[0] * l + e, r - t[1] * l]
                }

                function E(t) {
                    return (t = u.invert((t[0] - e) / l, (r - t[1]) / l)) && [t[0] * lo, t[1] * lo]
                }

                function N(t, i) {
                    return [(t = n(t, i))[0] * l + e, r - t[1] * l]
                }

                function S() {
                    u = tc(i = ec(g, y, _), n);
                    var t = n(p, v);
                    return e = h - t[0] * l, r = d + t[1] * l, A()
                }

                function A() {
                    return f = s = null, T
                }
                return T.stream = function (t) {
                        return f && s === t ? f : f = ds(function (t) {
                            return rs({
                                point: function (n, e) {
                                    var r = t(n, e);
                                    return this.stream.point(r[0], r[1])
                                }
                            })
                        }(i)(x(k(w(s = t)))))
                    }, T.preclip = function (t) {
                        return arguments.length ? (x = t, m = void 0, A()) : x
                    }, T.postclip = function (t) {
                        return arguments.length ? (w = t, b = o = a = c = null, A()) : w
                    }, T.clipAngle = function (t) {
                        return arguments.length ? (x = +t ? bc(m = t * ho) : (m = null, xc), A()) : m * lo
                    }, T.clipExtent = function (t) {
                        return arguments.length ? (w = null == t ? (b = o = a = c = null, rf) : Tc(b = +t[0][0], o = +t[0][1], a = +t[1][0], c = +t[1][1]), A()) : null == b ? null : [
                            [b, o],
                            [a, c]
                        ]
                    }, T.scale = function (t) {
                        return arguments.length ? (l = +t, S()) : l
                    }, T.translate = function (t) {
                        return arguments.length ? (h = +t[0], d = +t[1], S()) : [h, d]
                    }, T.center = function (t) {
                        return arguments.length ? (p = t[0] % 360 * ho, v = t[1] % 360 * ho, S()) : [p * lo, v * lo]
                    }, T.rotate = function (t) {
                        return arguments.length ? (g = t[0] % 360 * ho, y = t[1] % 360 * ho, _ = t.length > 2 ? t[2] % 360 * ho : 0, S()) : [g * lo, y * lo, _ * lo]
                    }, T.precision = function (t) {
                        return arguments.length ? (k = hs(N, M = t * t), A()) : ko(M)
                    }, T.fitExtent = function (t, n) {
                  
