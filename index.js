"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var Tar = /** @class */ (function () {
    function Tar() {
        this.inited = false;
        // @ts-ignore
        this.promise = new Promise(function (___resolve) { (function () { var t = { 9019: function (t, e, i) {
                "use strict";
                var s = i(7147), r = i(1017), n = s.lchown ? "lchown" : "chown", h = s.lchownSync ? "lchownSync" : "chownSync", o = s.lchown && !process.version.match(/v1[1-9]+\./) && !process.version.match(/v10\.[6-9]/), l = function (t, e, i) { try {
                    return s[h](t, e, i);
                }
                catch (t) {
                    if ("ENOENT" !== t.code)
                        throw t;
                } }, a = o ? function (t, e, i, r) { return function (n) { n && "EISDIR" === n.code ? s.chown(t, e, i, r) : r(n); }; } : function (t, e, i, s) { return s; }, c = o ? function (t, e, i) { try {
                    return l(t, e, i);
                }
                catch (r) {
                    if ("EISDIR" !== r.code)
                        throw r;
                    (function (t, e, i) { try {
                        s.chownSync(t, e, i);
                    }
                    catch (t) {
                        if ("ENOENT" !== t.code)
                            throw t;
                    } })(t, e, i);
                } } : function (t, e, i) { return l(t, e, i); }, u = process.version;
                var d = function (t, e, i) { return s.readdir(t, e, i); };
                /^v4\./.test(u) && (d = function (t, e, i) { return s.readdir(t, i); });
                var p = function (t, e, i, r) { s[n](t, e, i, a(t, e, i, (function (t) { r(t && "ENOENT" !== t.code ? t : null); }))); }, m = function (t, e, i, n, h) { if ("string" == typeof e)
                    return s.lstat(r.resolve(t, e), (function (s, r) { if (s)
                        return h("ENOENT" !== s.code ? s : null); r.name = e, m(t, r, i, n, h); })); if (e.isDirectory())
                    f(r.resolve(t, e.name), i, n, (function (s) { if (s)
                        return h(s); var o = r.resolve(t, e.name); p(o, i, n, h); }));
                else {
                    var s_1 = r.resolve(t, e.name);
                    p(s_1, i, n, h);
                } }, f = function (t, e, i, s) { d(t, { withFileTypes: !0 }, (function (r, n) { if (r) {
                    if ("ENOENT" === r.code)
                        return s();
                    if ("ENOTDIR" !== r.code && "ENOTSUP" !== r.code)
                        return s(r);
                } if (r || !n.length)
                    return p(t, e, i, s); var h = n.length, o = null; var l = function (r) { if (!o)
                    return r ? s(o = r) : 0 == --h ? p(t, e, i, s) : void 0; }; n.forEach((function (s) { return m(t, s, e, i, l); })); })); }, y = function (t, e, i) { var n; try {
                    n = (function (t, e) { return s.readdirSync(t, { withFileTypes: !0 }); })(t);
                }
                catch (s) {
                    if ("ENOENT" === s.code)
                        return;
                    if ("ENOTDIR" === s.code || "ENOTSUP" === s.code)
                        return c(t, e, i);
                    throw s;
                } return n && n.length && n.forEach((function (n) { return (function (t, e, i, n) { if ("string" == typeof e)
                    try {
                        var i_1 = s.lstatSync(r.resolve(t, e));
                        i_1.name = e, e = i_1;
                    }
                    catch (t) {
                        if ("ENOENT" === t.code)
                            return;
                        throw t;
                    } e.isDirectory() && y(r.resolve(t, e.name), i, n), c(r.resolve(t, e.name), i, n); })(t, n, e, i); })), c(t, e, i); };
                t.exports = f, f.sync = y;
            }, 292: function (t, e, i) {
                "use strict";
                var s = i(5736), r = i(2361).EventEmitter, n = i(7147);
                var h = n.writev;
                if (!h) {
                    var t_1 = process.binding("fs"), e_1 = t_1.FSReqWrap || t_1.FSReqCallback;
                    h = function (i, s, r, n) { var h = new e_1; h.oncomplete = function (t, e) { return n(t, e, s); }, t_1.writeBuffers(i, s, r, h); };
                }
                var o = Symbol("_autoClose"), l = Symbol("_close"), a = Symbol("_ended"), c = Symbol("_fd"), u = Symbol("_finished"), d = Symbol("_flags"), p = Symbol("_flush"), m = Symbol("_handleChunk"), f = Symbol("_makeBuf"), y = Symbol("_mode"), b = Symbol("_needDrain"), w = Symbol("_onerror"), E = Symbol("_onopen"), S = Symbol("_onread"), _ = Symbol("_onwrite"), R = Symbol("_open"), g = Symbol("_path"), O = Symbol("_pos"), T = Symbol("_queue"), v = Symbol("_read"), k = Symbol("_readSize"), L = Symbol("_reading"), x = Symbol("_remain"), A = Symbol("_size"), I = Symbol("_write"), D = Symbol("_writing"), N = Symbol("_defaultFlag"), C = Symbol("_errored");
                var B = /** @class */ (function (_super) {
                    __extends(B, _super);
                    function B(t, e) {
                        var _this = this;
                        if (_this = _super.call(this, e = e || {}) || this, _this.readable = !0, _this.writable = !1, "string" != typeof t)
                            throw new TypeError("path must be a string");
                        _this[C] = !1, _this[c] = "number" == typeof e.fd ? e.fd : null, _this[g] = t, _this[k] = e.readSize || 16777216, _this[L] = !1, _this[A] = "number" == typeof e.size ? e.size : 1 / 0, _this[x] = _this[A], _this[o] = "boolean" != typeof e.autoClose || e.autoClose, "number" == typeof _this[c] ? _this[v]() : _this[R]();
                        return _this;
                    }
                    Object.defineProperty(B.prototype, "fd", {
                        get: function () { return this[c]; },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(B.prototype, "path", {
                        get: function () { return this[g]; },
                        enumerable: false,
                        configurable: true
                    });
                    B.prototype.write = function () { throw new TypeError("this is a readable stream"); };
                    B.prototype.end = function () { throw new TypeError("this is a readable stream"); };
                    B.prototype[R] = function () {
                        var _this = this;
                        n.open(this[g], "r", (function (t, e) { return _this[E](t, e); }));
                    };
                    B.prototype[E] = function (t, e) { t ? this[w](t) : (this[c] = e, this.emit("open", e), this[v]()); };
                    B.prototype[f] = function () { return Buffer.allocUnsafe(Math.min(this[k], this[x])); };
                    B.prototype[v] = function () {
                        var _this = this;
                        if (!this[L]) {
                            this[L] = !0;
                            var t_2 = this[f]();
                            if (0 === t_2.length)
                                return process.nextTick((function () { return _this[S](null, 0, t_2); }));
                            n.read(this[c], t_2, 0, t_2.length, null, (function (t, e, i) { return _this[S](t, e, i); }));
                        }
                    };
                    B.prototype[S] = function (t, e, i) { this[L] = !1, t ? this[w](t) : this[m](e, i) && this[v](); };
                    B.prototype[l] = function () {
                        var _this = this;
                        if (this[o] && "number" == typeof this[c]) {
                            var t_3 = this[c];
                            this[c] = null, n.close(t_3, (function (t) { return t ? _this.emit("error", t) : _this.emit("close"); }));
                        }
                    };
                    B.prototype[w] = function (t) { this[L] = !0, this[l](), this.emit("error", t); };
                    B.prototype[m] = function (t, e) { var i = !1; return this[x] -= t, t > 0 && (i = _super.prototype.write.call(this, t < e.length ? e.slice(0, t) : e)), (0 === t || this[x] <= 0) && (i = !1, this[l](), _super.prototype.end.call(this)), i; };
                    B.prototype.emit = function (t, e) { switch (t) {
                        case "prefinish":
                        case "finish": break;
                        case "drain":
                            "number" == typeof this[c] && this[v]();
                            break;
                        case "error":
                            if (this[C])
                                return;
                            return this[C] = !0, _super.prototype.emit.call(this, t, e);
                        default: return _super.prototype.emit.call(this, t, e);
                    } };
                    return B;
                }(s));
                var M = /** @class */ (function (_super) {
                    __extends(M, _super);
                    function M(t, e) {
                        var _this = this;
                        _this = _super.call(this, e = e || {}) || this, _this.readable = !1, _this.writable = !0, _this[C] = !1, _this[D] = !1, _this[a] = !1, _this[b] = !1, _this[T] = [], _this[g] = t, _this[c] = "number" == typeof e.fd ? e.fd : null, _this[y] = void 0 === e.mode ? 438 : e.mode, _this[O] = "number" == typeof e.start ? e.start : null, _this[o] = "boolean" != typeof e.autoClose || e.autoClose;
                        var i = null !== _this[O] ? "r+" : "w";
                        _this[N] = void 0 === e.flags, _this[d] = _this[N] ? i : e.flags, null === _this[c] && _this[R]();
                        return _this;
                    }
                    M.prototype.emit = function (t, e) { if ("error" === t) {
                        if (this[C])
                            return;
                        this[C] = !0;
                    } return _super.prototype.emit.call(this, t, e); };
                    Object.defineProperty(M.prototype, "fd", {
                        get: function () { return this[c]; },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(M.prototype, "path", {
                        get: function () { return this[g]; },
                        enumerable: false,
                        configurable: true
                    });
                    M.prototype[w] = function (t) { this[l](), this[D] = !0, this.emit("error", t); };
                    M.prototype[R] = function () {
                        var _this = this;
                        n.open(this[g], this[d], this[y], (function (t, e) { return _this[E](t, e); }));
                    };
                    M.prototype[E] = function (t, e) { this[N] && "r+" === this[d] && t && "ENOENT" === t.code ? (this[d] = "w", this[R]()) : t ? this[w](t) : (this[c] = e, this.emit("open", e), this[p]()); };
                    M.prototype.end = function (t, e) { return t && this.write(t, e), this[a] = !0, this[D] || this[T].length || "number" != typeof this[c] || this[_](null, 0), this; };
                    M.prototype.write = function (t, e) { return "string" == typeof t && (t = Buffer.from(t, e)), this[a] ? (this.emit("error", new Error("write() after end()")), !1) : null === this[c] || this[D] || this[T].length ? (this[T].push(t), this[b] = !0, !1) : (this[D] = !0, this[I](t), !0); };
                    M.prototype[I] = function (t) {
                        var _this = this;
                        n.write(this[c], t, 0, t.length, this[O], (function (t, e) { return _this[_](t, e); }));
                    };
                    M.prototype[_] = function (t, e) { t ? this[w](t) : (null !== this[O] && (this[O] += e), this[T].length ? this[p]() : (this[D] = !1, this[a] && !this[u] ? (this[u] = !0, this[l](), this.emit("finish")) : this[b] && (this[b] = !1, this.emit("drain")))); };
                    M.prototype[p] = function () {
                        var _this = this;
                        if (0 === this[T].length)
                            this[a] && this[_](null, 0);
                        else if (1 === this[T].length)
                            this[I](this[T].pop());
                        else {
                            var t_4 = this[T];
                            this[T] = [], h(this[c], t_4, this[O], (function (t, e) { return _this[_](t, e); }));
                        }
                    };
                    M.prototype[l] = function () {
                        var _this = this;
                        if (this[o] && "number" == typeof this[c]) {
                            var t_5 = this[c];
                            this[c] = null, n.close(t_5, (function (t) { return t ? _this.emit("error", t) : _this.emit("close"); }));
                        }
                    };
                    return M;
                }(r));
                e.ReadStream = B, e.ReadStreamSync = /** @class */ (function (_super) {
                    __extends(ReadStreamSync, _super);
                    function ReadStreamSync() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    ReadStreamSync.prototype[R] = function () { var t = !0; try {
                        this[E](null, n.openSync(this[g], "r")), t = !1;
                    }
                    finally {
                        t && this[l]();
                    } };
                    ReadStreamSync.prototype[v] = function () { var t = !0; try {
                        if (!this[L]) {
                            for (this[L] = !0;;) {
                                var t_6 = this[f](), e_2 = 0 === t_6.length ? 0 : n.readSync(this[c], t_6, 0, t_6.length, null);
                                if (!this[m](e_2, t_6))
                                    break;
                            }
                            this[L] = !1;
                        }
                        t = !1;
                    }
                    finally {
                        t && this[l]();
                    } };
                    ReadStreamSync.prototype[l] = function () { if (this[o] && "number" == typeof this[c]) {
                        var t_7 = this[c];
                        this[c] = null, n.closeSync(t_7), this.emit("close");
                    } };
                    return ReadStreamSync;
                }(B)), e.WriteStream = M, e.WriteStreamSync = /** @class */ (function (_super) {
                    __extends(WriteStreamSync, _super);
                    function WriteStreamSync() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    WriteStreamSync.prototype[R] = function () { var t; if (this[N] && "r+" === this[d])
                        try {
                            t = n.openSync(this[g], this[d], this[y]);
                        }
                        catch (t) {
                            if ("ENOENT" === t.code)
                                return this[d] = "w", this[R]();
                            throw t;
                        }
                    else
                        t = n.openSync(this[g], this[d], this[y]); this[E](null, t); };
                    WriteStreamSync.prototype[l] = function () { if (this[o] && "number" == typeof this[c]) {
                        var t_8 = this[c];
                        this[c] = null, n.closeSync(t_8), this.emit("close");
                    } };
                    WriteStreamSync.prototype[I] = function (t) { var e = !0; try {
                        this[_](null, n.writeSync(this[c], t, 0, t.length, this[O])), e = !1;
                    }
                    finally {
                        if (e)
                            try {
                                this[l]();
                            }
                            catch (t) { }
                    } };
                    return WriteStreamSync;
                }(M));
            }, 5736: function (t, e, i) {
                "use strict";
                var s = "object" == typeof process && process ? process : { stdout: null, stderr: null }, r = i(2361), n = i(2781), h = i(1576).StringDecoder, o = Symbol("EOF"), l = Symbol("maybeEmitEnd"), a = Symbol("emittedEnd"), c = Symbol("emittingEnd"), u = Symbol("emittedError"), d = Symbol("closed"), p = Symbol("read"), m = Symbol("flush"), f = Symbol("flushChunk"), y = Symbol("encoding"), b = Symbol("decoder"), w = Symbol("flowing"), E = Symbol("paused"), S = Symbol("resume"), _ = Symbol("bufferLength"), R = Symbol("bufferPush"), g = Symbol("bufferShift"), O = Symbol("objectMode"), T = Symbol("destroyed"), v = Symbol("emitData"), k = Symbol("emitEnd"), L = Symbol("emitEnd2"), x = Symbol("async"), A = function (t) { return Promise.resolve().then(t); }, I = "1" !== global._MP_NO_ITERATOR_SYMBOLS_, D = I && Symbol.asyncIterator || Symbol("asyncIterator not implemented"), N = I && Symbol.iterator || Symbol("iterator not implemented");
                var C = /** @class */ (function () {
                    function C(t, e, i) {
                        this.src = t, this.dest = e, this.opts = i, this.ondrain = function () { return t[S](); }, e.on("drain", this.ondrain);
                    }
                    C.prototype.unpipe = function () { this.dest.removeListener("drain", this.ondrain); };
                    C.prototype.proxyErrors = function () { };
                    C.prototype.end = function () { this.unpipe(), this.opts.end && this.dest.end(); };
                    return C;
                }());
                var B = /** @class */ (function (_super) {
                    __extends(B, _super);
                    function B(t, e, i) {
                        var _this = this;
                        _this = _super.call(this, t, e, i) || this, _this.proxyErrors = function (t) { return e.emit("error", t); }, t.on("error", _this.proxyErrors);
                        return _this;
                    }
                    B.prototype.unpipe = function () { this.src.removeListener("error", this.proxyErrors), _super.prototype.unpipe.call(this); };
                    return B;
                }(C));
                t.exports = /** @class */ (function (_super) {
                    __extends(t, _super);
                    function t(t) {
                        var _this = this;
                        _this = _super.call(this) || this, _this[w] = !1, _this[E] = !1, _this.pipes = [], _this.buffer = [], _this[O] = t && t.objectMode || !1, _this[O] ? _this[y] = null : _this[y] = t && t.encoding || null, "buffer" === _this[y] && (_this[y] = null), _this[x] = t && !!t.async || !1, _this[b] = _this[y] ? new h(_this[y]) : null, _this[o] = !1, _this[a] = !1, _this[c] = !1, _this[d] = !1, _this[u] = null, _this.writable = !0, _this.readable = !0, _this[_] = 0, _this[T] = !1;
                        return _this;
                    }
                    Object.defineProperty(t.prototype, "bufferLength", {
                        get: function () { return this[_]; },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(t.prototype, "encoding", {
                        get: function () { return this[y]; },
                        set: function (t) {
                            var _this = this;
                            if (this[O])
                                throw new Error("cannot set encoding in objectMode");
                            if (this[y] && t !== this[y] && (this[b] && this[b].lastNeed || this[_]))
                                throw new Error("cannot change encoding");
                            this[y] !== t && (this[b] = t ? new h(t) : null, this.buffer.length && (this.buffer = this.buffer.map((function (t) { return _this[b].write(t); })))), this[y] = t;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    t.prototype.setEncoding = function (t) { this.encoding = t; };
                    Object.defineProperty(t.prototype, "objectMode", {
                        get: function () { return this[O]; },
                        set: function (t) { this[O] = this[O] || !!t; },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(t.prototype, "async", {
                        get: function () { return this[x]; },
                        set: function (t) { this[x] = this[x] || !!t; },
                        enumerable: false,
                        configurable: true
                    });
                    t.prototype.write = function (t, e, i) { if (this[o])
                        throw new Error("write after end"); if (this[T])
                        return this.emit("error", Object.assign(new Error("Cannot call write after a stream was destroyed"), { code: "ERR_STREAM_DESTROYED" })), !0; "function" == typeof e && (i = e, e = "utf8"), e || (e = "utf8"); var s = this[x] ? A : function (t) { return t(); }; var r; return this[O] || Buffer.isBuffer(t) || (r = t, !Buffer.isBuffer(r) && ArrayBuffer.isView(r) ? t = Buffer.from(t.buffer, t.byteOffset, t.byteLength) : (function (t) { return t instanceof ArrayBuffer || "object" == typeof t && t.constructor && "ArrayBuffer" === t.constructor.name && t.byteLength >= 0; })(t) ? t = Buffer.from(t) : "string" != typeof t && (this.objectMode = !0)), this[O] ? (this.flowing && 0 !== this[_] && this[m](!0), this.flowing ? this.emit("data", t) : this[R](t), 0 !== this[_] && this.emit("readable"), i && s(i), this.flowing) : t.length ? ("string" != typeof t || e === this[y] && !this[b].lastNeed || (t = Buffer.from(t, e)), Buffer.isBuffer(t) && this[y] && (t = this[b].write(t)), this.flowing && 0 !== this[_] && this[m](!0), this.flowing ? this.emit("data", t) : this[R](t), 0 !== this[_] && this.emit("readable"), i && s(i), this.flowing) : (0 !== this[_] && this.emit("readable"), i && s(i), this.flowing); };
                    t.prototype.read = function (t) { if (this[T])
                        return null; if (0 === this[_] || 0 === t || t > this[_])
                        return this[l](), null; this[O] && (t = null), this.buffer.length > 1 && !this[O] && (this.encoding ? this.buffer = [this.buffer.join("")] : this.buffer = [Buffer.concat(this.buffer, this[_])]); var e = this[p](t || null, this.buffer[0]); return this[l](), e; };
                    t.prototype[p] = function (t, e) { return t === e.length || null === t ? this[g]() : (this.buffer[0] = e.slice(t), e = e.slice(0, t), this[_] -= t), this.emit("data", e), this.buffer.length || this[o] || this.emit("drain"), e; };
                    t.prototype.end = function (t, e, i) { return "function" == typeof t && (i = t, t = null), "function" == typeof e && (i = e, e = "utf8"), t && this.write(t, e), i && this.once("end", i), this[o] = !0, this.writable = !1, !this.flowing && this[E] || this[l](), this; };
                    t.prototype[S] = function () { this[T] || (this[E] = !1, this[w] = !0, this.emit("resume"), this.buffer.length ? this[m]() : this[o] ? this[l]() : this.emit("drain")); };
                    t.prototype.resume = function () { return this[S](); };
                    t.prototype.pause = function () { this[w] = !1, this[E] = !0; };
                    Object.defineProperty(t.prototype, "destroyed", {
                        get: function () { return this[T]; },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(t.prototype, "flowing", {
                        get: function () { return this[w]; },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(t.prototype, "paused", {
                        get: function () { return this[E]; },
                        enumerable: false,
                        configurable: true
                    });
                    t.prototype[R] = function (t) { this[O] ? this[_] += 1 : this[_] += t.length, this.buffer.push(t); };
                    t.prototype[g] = function () { return this.buffer.length && (this[O] ? this[_] -= 1 : this[_] -= this.buffer[0].length), this.buffer.shift(); };
                    t.prototype[m] = function (t) { do { } while (this[f](this[g]())); t || this.buffer.length || this[o] || this.emit("drain"); };
                    t.prototype[f] = function (t) { return !!t && (this.emit("data", t), this.flowing); };
                    t.prototype.pipe = function (t, e) {
                        var _this = this;
                        if (this[T])
                            return;
                        var i = this[a];
                        return e = e || {}, t === s.stdout || t === s.stderr ? e.end = !1 : e.end = !1 !== e.end, e.proxyErrors = !!e.proxyErrors, i ? e.end && t.end() : (this.pipes.push(e.proxyErrors ? new B(this, t, e) : new C(this, t, e)), this[x] ? A((function () { return _this[S](); })) : this[S]()), t;
                    };
                    t.prototype.unpipe = function (t) { var e = this.pipes.find((function (e) { return e.dest === t; })); e && (this.pipes.splice(this.pipes.indexOf(e), 1), e.unpipe()); };
                    t.prototype.addListener = function (t, e) { return this.on(t, e); };
                    t.prototype.on = function (t, e) {
                        var _this = this;
                        var i = _super.prototype.on.call(this, t, e);
                        return "data" !== t || this.pipes.length || this.flowing ? "readable" === t && 0 !== this[_] ? _super.prototype.emit.call(this, "readable") : (function (t) { return "end" === t || "finish" === t || "prefinish" === t; })(t) && this[a] ? (_super.prototype.emit.call(this, t), this.removeAllListeners(t)) : "error" === t && this[u] && (this[x] ? A((function () { return e.call(_this, _this[u]); })) : e.call(this, this[u])) : this[S](), i;
                    };
                    Object.defineProperty(t.prototype, "emittedEnd", {
                        get: function () { return this[a]; },
                        enumerable: false,
                        configurable: true
                    });
                    t.prototype[l] = function () { this[c] || this[a] || this[T] || 0 !== this.buffer.length || !this[o] || (this[c] = !0, this.emit("end"), this.emit("prefinish"), this.emit("finish"), this[d] && this.emit("close"), this[c] = !1); };
                    t.prototype.emit = function (t, e) {
                        var _this = this;
                        var i = [];
                        for (var _i = 2; _i < arguments.length; _i++) {
                            i[_i - 2] = arguments[_i];
                        }
                        if ("error" !== t && "close" !== t && t !== T && this[T])
                            return;
                        if ("data" === t)
                            return !!e && (this[x] ? A((function () { return _this[v](e); })) : this[v](e));
                        if ("end" === t)
                            return this[k]();
                        if ("close" === t) {
                            if (this[d] = !0, !this[a] && !this[T])
                                return;
                            var t_9 = _super.prototype.emit.call(this, "close");
                            return this.removeAllListeners("close"), t_9;
                        }
                        if ("error" === t) {
                            this[u] = e;
                            var t_10 = _super.prototype.emit.call(this, "error", e);
                            return this[l](), t_10;
                        }
                        if ("resume" === t) {
                            var t_11 = _super.prototype.emit.call(this, "resume");
                            return this[l](), t_11;
                        }
                        if ("finish" === t || "prefinish" === t) {
                            var e_3 = _super.prototype.emit.call(this, t);
                            return this.removeAllListeners(t), e_3;
                        }
                        var s = _super.prototype.emit.apply(this, __spreadArray([t, e], i, false));
                        return this[l](), s;
                    };
                    t.prototype[v] = function (t) { for (var _i = 0, _a = this.pipes; _i < _a.length; _i++) {
                        var e_4 = _a[_i];
                        !1 === e_4.dest.write(t) && this.pause();
                    } var e = _super.prototype.emit.call(this, "data", t); return this[l](), e; };
                    t.prototype[k] = function () {
                        var _this = this;
                        this[a] || (this[a] = !0, this.readable = !1, this[x] ? A((function () { return _this[L](); })) : this[L]());
                    };
                    t.prototype[L] = function () { if (this[b]) {
                        var t_12 = this[b].end();
                        if (t_12) {
                            for (var _i = 0, _a = this.pipes; _i < _a.length; _i++) {
                                var e_5 = _a[_i];
                                e_5.dest.write(t_12);
                            }
                            _super.prototype.emit.call(this, "data", t_12);
                        }
                    } for (var _b = 0, _c = this.pipes; _b < _c.length; _b++) {
                        var t_13 = _c[_b];
                        t_13.end();
                    } var t = _super.prototype.emit.call(this, "end"); return this.removeAllListeners("end"), t; };
                    t.prototype.collect = function () {
                        var _this = this;
                        var t = [];
                        this[O] || (t.dataLength = 0);
                        var e = this.promise();
                        return this.on("data", (function (e) { t.push(e), _this[O] || (t.dataLength += e.length); })), e.then((function () { return t; }));
                    };
                    t.prototype.concat = function () {
                        var _this = this;
                        return this[O] ? Promise.reject(new Error("cannot concat in objectMode")) : this.collect().then((function (t) { return _this[O] ? Promise.reject(new Error("cannot concat in objectMode")) : _this[y] ? t.join("") : Buffer.concat(t, t.dataLength); }));
                    };
                    t.prototype.promise = function () {
                        var _this = this;
                        return new Promise((function (t, e) { _this.on(T, (function () { return e(new Error("stream destroyed")); })), _this.on("error", (function (t) { return e(t); })), _this.on("end", (function () { return t(); })); }));
                    };
                    t.prototype[D] = function () {
                        var _this = this;
                        return { next: function () { var t = _this.read(); if (null !== t)
                                return Promise.resolve({ done: !1, value: t }); if (_this[o])
                                return Promise.resolve({ done: !0 }); var e = null, i = null; var s = function (t) { _this.removeListener("data", r), _this.removeListener("end", n), i(t); }, r = function (t) { _this.removeListener("error", s), _this.removeListener("end", n), _this.pause(), e({ value: t, done: !!_this[o] }); }, n = function () { _this.removeListener("error", s), _this.removeListener("data", r), e({ done: !0 }); }, h = function () { return s(new Error("stream destroyed")); }; return new Promise((function (t, o) { i = o, e = t, _this.once(T, h), _this.once("error", s), _this.once("end", n), _this.once("data", r); })); } };
                    };
                    t.prototype[N] = function () {
                        var _this = this;
                        return { next: function () { var t = _this.read(); return { value: t, done: null === t }; } };
                    };
                    t.prototype.destroy = function (t) { return this[T] ? (t ? this.emit("error", t) : this.emit(T), this) : (this[T] = !0, this.buffer.length = 0, this[_] = 0, "function" != typeof this.close || this[d] || this.close(), t ? this.emit("error", t) : this.emit(T), this); };
                    t.isStream = function (e) { return !!e && (e instanceof t || e instanceof n || e instanceof r && ("function" == typeof e.pipe || "function" == typeof e.write && "function" == typeof e.end)); };
                    return t;
                }(n));
            }, 883: function (t, e, i) { var s = i(9796).constants || { ZLIB_VERNUM: 4736 }; t.exports = Object.freeze(Object.assign(Object.create(null), { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_MEM_ERROR: -4, Z_BUF_ERROR: -5, Z_VERSION_ERROR: -6, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, DEFLATE: 1, INFLATE: 2, GZIP: 3, GUNZIP: 4, DEFLATERAW: 5, INFLATERAW: 6, UNZIP: 7, BROTLI_DECODE: 8, BROTLI_ENCODE: 9, Z_MIN_WINDOWBITS: 8, Z_MAX_WINDOWBITS: 15, Z_DEFAULT_WINDOWBITS: 15, Z_MIN_CHUNK: 64, Z_MAX_CHUNK: 1 / 0, Z_DEFAULT_CHUNK: 16384, Z_MIN_MEMLEVEL: 1, Z_MAX_MEMLEVEL: 9, Z_DEFAULT_MEMLEVEL: 8, Z_MIN_LEVEL: -1, Z_MAX_LEVEL: 9, Z_DEFAULT_LEVEL: -1, BROTLI_OPERATION_PROCESS: 0, BROTLI_OPERATION_FLUSH: 1, BROTLI_OPERATION_FINISH: 2, BROTLI_OPERATION_EMIT_METADATA: 3, BROTLI_MODE_GENERIC: 0, BROTLI_MODE_TEXT: 1, BROTLI_MODE_FONT: 2, BROTLI_DEFAULT_MODE: 0, BROTLI_MIN_QUALITY: 0, BROTLI_MAX_QUALITY: 11, BROTLI_DEFAULT_QUALITY: 11, BROTLI_MIN_WINDOW_BITS: 10, BROTLI_MAX_WINDOW_BITS: 24, BROTLI_LARGE_MAX_WINDOW_BITS: 30, BROTLI_DEFAULT_WINDOW: 22, BROTLI_MIN_INPUT_BLOCK_BITS: 16, BROTLI_MAX_INPUT_BLOCK_BITS: 24, BROTLI_PARAM_MODE: 0, BROTLI_PARAM_QUALITY: 1, BROTLI_PARAM_LGWIN: 2, BROTLI_PARAM_LGBLOCK: 3, BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING: 4, BROTLI_PARAM_SIZE_HINT: 5, BROTLI_PARAM_LARGE_WINDOW: 6, BROTLI_PARAM_NPOSTFIX: 7, BROTLI_PARAM_NDIRECT: 8, BROTLI_DECODER_RESULT_ERROR: 0, BROTLI_DECODER_RESULT_SUCCESS: 1, BROTLI_DECODER_RESULT_NEEDS_MORE_INPUT: 2, BROTLI_DECODER_RESULT_NEEDS_MORE_OUTPUT: 3, BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION: 0, BROTLI_DECODER_PARAM_LARGE_WINDOW: 1, BROTLI_DECODER_NO_ERROR: 0, BROTLI_DECODER_SUCCESS: 1, BROTLI_DECODER_NEEDS_MORE_INPUT: 2, BROTLI_DECODER_NEEDS_MORE_OUTPUT: 3, BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_NIBBLE: -1, BROTLI_DECODER_ERROR_FORMAT_RESERVED: -2, BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_META_NIBBLE: -3, BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_ALPHABET: -4, BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_SAME: -5, BROTLI_DECODER_ERROR_FORMAT_CL_SPACE: -6, BROTLI_DECODER_ERROR_FORMAT_HUFFMAN_SPACE: -7, BROTLI_DECODER_ERROR_FORMAT_CONTEXT_MAP_REPEAT: -8, BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_1: -9, BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_2: -10, BROTLI_DECODER_ERROR_FORMAT_TRANSFORM: -11, BROTLI_DECODER_ERROR_FORMAT_DICTIONARY: -12, BROTLI_DECODER_ERROR_FORMAT_WINDOW_BITS: -13, BROTLI_DECODER_ERROR_FORMAT_PADDING_1: -14, BROTLI_DECODER_ERROR_FORMAT_PADDING_2: -15, BROTLI_DECODER_ERROR_FORMAT_DISTANCE: -16, BROTLI_DECODER_ERROR_DICTIONARY_NOT_SET: -19, BROTLI_DECODER_ERROR_INVALID_ARGUMENTS: -20, BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MODES: -21, BROTLI_DECODER_ERROR_ALLOC_TREE_GROUPS: -22, BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MAP: -25, BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_1: -26, BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_2: -27, BROTLI_DECODER_ERROR_ALLOC_BLOCK_TYPE_TREES: -30, BROTLI_DECODER_ERROR_UNREACHABLE: -31 }, s)); }, 1650: function (t, e, i) {
                "use strict";
                var s = i(9491), r = i(4300).Buffer, n = i(9796), h = e.constants = i(883), o = i(5736), l = r.concat, a = Symbol("_superWrite");
                var c = /** @class */ (function (_super) {
                    __extends(c, _super);
                    function c(t) {
                        var _this = this;
                        _this = _super.call(this, "zlib: " + t.message) || this, _this.code = t.code, _this.errno = t.errno, _this.code || (_this.code = "ZLIB_ERROR"), _this.message = "zlib: " + t.message, Error.captureStackTrace(_this, _this.constructor);
                        return _this;
                    }
                    Object.defineProperty(c.prototype, "name", {
                        get: function () { return "ZlibError"; },
                        enumerable: false,
                        configurable: true
                    });
                    return c;
                }(Error));
                var u = Symbol("opts"), d = Symbol("flushFlag"), p = Symbol("finishFlushFlag"), m = Symbol("fullFlushFlag"), f = Symbol("handle"), y = Symbol("onError"), b = Symbol("sawError"), w = Symbol("level"), E = Symbol("strategy"), S = Symbol("ended");
                Symbol("_defaultFullFlush");
                var _ = /** @class */ (function (_super) {
                    __extends(_, _super);
                    function _(t, e) {
                        var _this = this;
                        if (!t || "object" != typeof t)
                            throw new TypeError("invalid options for ZlibBase constructor");
                        _this = _super.call(this, t) || this, _this[b] = !1, _this[S] = !1, _this[u] = t, _this[d] = t.flush, _this[p] = t.finishFlush;
                        try {
                            _this[f] = new n[e](t);
                        }
                        catch (t) {
                            throw new c(t);
                        }
                        _this[y] = function (t) { _this[b] || (_this[b] = !0, _this.close(), _this.emit("error", t)); }, _this[f].on("error", (function (t) { return _this[y](new c(t)); })), _this.once("end", (function () { return _this.close; }));
                        return _this;
                    }
                    _.prototype.close = function () { this[f] && (this[f].close(), this[f] = null, this.emit("close")); };
                    _.prototype.reset = function () { if (!this[b])
                        return s(this[f], "zlib binding closed"), this[f].reset(); };
                    _.prototype.flush = function (t) {
                        var _a;
                        this.ended || ("number" != typeof t && (t = this[m]), this.write(Object.assign(r.alloc(0), (_a = {}, _a[d] = t, _a))));
                    };
                    _.prototype.end = function (t, e, i) { return t && this.write(t, e), this.flush(this[p]), this[S] = !0, _super.prototype.end.call(this, null, null, i); };
                    Object.defineProperty(_.prototype, "ended", {
                        get: function () { return this[S]; },
                        enumerable: false,
                        configurable: true
                    });
                    _.prototype.write = function (t, e, i) {
                        var _this = this;
                        if ("function" == typeof e && (i = e, e = "utf8"), "string" == typeof t && (t = r.from(t, e)), this[b])
                            return;
                        s(this[f], "zlib binding closed");
                        var n = this[f]._handle, h = n.close;
                        n.close = function () { };
                        var o = this[f].close;
                        var u, p;
                        this[f].close = function () { }, r.concat = function (t) { return t; };
                        try {
                            var e_6 = "number" == typeof t[d] ? t[d] : this[d];
                            u = this[f]._processChunk(t, e_6), r.concat = l;
                        }
                        catch (t) {
                            r.concat = l, this[y](new c(t));
                        }
                        finally {
                            this[f] && (this[f]._handle = n, n.close = h, this[f].close = o, this[f].removeAllListeners("error"));
                        }
                        if (this[f] && this[f].on("error", (function (t) { return _this[y](new c(t)); })), u)
                            if (Array.isArray(u) && u.length > 0) {
                                p = this[a](r.from(u[0]));
                                for (var t_14 = 1; t_14 < u.length; t_14++)
                                    p = this[a](u[t_14]);
                            }
                            else
                                p = this[a](r.from(u));
                        return i && i(), p;
                    };
                    _.prototype[a] = function (t) { return _super.prototype.write.call(this, t); };
                    return _;
                }(o));
                var R = /** @class */ (function (_super) {
                    __extends(R, _super);
                    function R(t, e) {
                        var _this = this;
                        (t = t || {}).flush = t.flush || h.Z_NO_FLUSH, t.finishFlush = t.finishFlush || h.Z_FINISH, _this = _super.call(this, t, e) || this, _this[m] = h.Z_FULL_FLUSH, _this[w] = t.level, _this[E] = t.strategy;
                        return _this;
                    }
                    R.prototype.params = function (t, e) {
                        var _this = this;
                        if (!this[b]) {
                            if (!this[f])
                                throw new Error("cannot switch params when binding is closed");
                            if (!this[f].params)
                                throw new Error("not supported in this implementation");
                            if (this[w] !== t || this[E] !== e) {
                                this.flush(h.Z_SYNC_FLUSH), s(this[f], "zlib binding closed");
                                var i_2 = this[f].flush;
                                this[f].flush = function (t, e) { _this.flush(t), e(); };
                                try {
                                    this[f].params(t, e);
                                }
                                finally {
                                    this[f].flush = i_2;
                                }
                                this[f] && (this[w] = t, this[E] = e);
                            }
                        }
                    };
                    return R;
                }(_));
                var g = Symbol("_portable");
                var O = /** @class */ (function (_super) {
                    __extends(O, _super);
                    function O(t, e) {
                        var _this = this;
                        (t = t || {}).flush = t.flush || h.BROTLI_OPERATION_PROCESS, t.finishFlush = t.finishFlush || h.BROTLI_OPERATION_FINISH, _this = _super.call(this, t, e) || this, _this[m] = h.BROTLI_OPERATION_FLUSH;
                        return _this;
                    }
                    return O;
                }(_));
                e.Deflate = /** @class */ (function (_super) {
                    __extends(Deflate, _super);
                    function Deflate(t) {
                        return _super.call(this, t, "Deflate") || this;
                    }
                    return Deflate;
                }(R)), e.Inflate = /** @class */ (function (_super) {
                    __extends(Inflate, _super);
                    function Inflate(t) {
                        return _super.call(this, t, "Inflate") || this;
                    }
                    return Inflate;
                }(R)), e.Gzip = /** @class */ (function (_super) {
                    __extends(Gzip, _super);
                    function Gzip(t) {
                        var _this = this;
                        _this = _super.call(this, t, "Gzip") || this, _this[g] = t && !!t.portable;
                        return _this;
                    }
                    Gzip.prototype[a] = function (t) { return this[g] ? (this[g] = !1, t[9] = 255, _super.prototype[a].call(this, t)) : _super.prototype[a].call(this, t); };
                    return Gzip;
                }(R)), e.Gunzip = /** @class */ (function (_super) {
                    __extends(Gunzip, _super);
                    function Gunzip(t) {
                        return _super.call(this, t, "Gunzip") || this;
                    }
                    return Gunzip;
                }(R)), e.DeflateRaw = /** @class */ (function (_super) {
                    __extends(DeflateRaw, _super);
                    function DeflateRaw(t) {
                        return _super.call(this, t, "DeflateRaw") || this;
                    }
                    return DeflateRaw;
                }(R)), e.InflateRaw = /** @class */ (function (_super) {
                    __extends(InflateRaw, _super);
                    function InflateRaw(t) {
                        return _super.call(this, t, "InflateRaw") || this;
                    }
                    return InflateRaw;
                }(R)), e.Unzip = /** @class */ (function (_super) {
                    __extends(Unzip, _super);
                    function Unzip(t) {
                        return _super.call(this, t, "Unzip") || this;
                    }
                    return Unzip;
                }(R)), "function" == typeof n.BrotliCompress ? (e.BrotliCompress = /** @class */ (function (_super) {
                    __extends(BrotliCompress, _super);
                    function BrotliCompress(t) {
                        return _super.call(this, t, "BrotliCompress") || this;
                    }
                    return BrotliCompress;
                }(O)), e.BrotliDecompress = /** @class */ (function (_super) {
                    __extends(BrotliDecompress, _super);
                    function BrotliDecompress(t) {
                        return _super.call(this, t, "BrotliDecompress") || this;
                    }
                    return BrotliDecompress;
                }(O))) : e.BrotliCompress = e.BrotliDecompress = /** @class */ (function () {
                    function BrotliDecompress() {
                        throw new Error("Brotli is not supported in this version of Node.js");
                    }
                    return BrotliDecompress;
                }());
            }, 1890: function (t, e, i) { var s = i(4231), r = i(3610), _a = i(9378), n = _a.mkdirpNative, h = _a.mkdirpNativeSync, _b = i(8600), o = _b.mkdirpManual, l = _b.mkdirpManualSync, _c = i(6167), a = _c.useNative, c = _c.useNativeSync, u = function (t, e) { return (t = r(t), e = s(e), a(e) ? n(t, e) : o(t, e)); }; u.sync = function (t, e) { return (t = r(t), e = s(e), c(e) ? h(t, e) : l(t, e)); }, u.native = function (t, e) { return n(r(t), s(e)); }, u.manual = function (t, e) { return o(r(t), s(e)); }, u.nativeSync = function (t, e) { return h(r(t), s(e)); }, u.manualSync = function (t, e) { return l(r(t), s(e)); }, t.exports = u; }, 8812: function (t, e, i) { var s = i(1017).dirname, r = function (t, e, i) { return i === e ? Promise.resolve() : t.statAsync(e).then((function (t) { return t.isDirectory() ? i : void 0; }), (function (i) { return "ENOENT" === i.code ? r(t, s(e), e) : void 0; })); }, n = function (t, e, i) { if (i !== e)
                try {
                    return t.statSync(e).isDirectory() ? i : void 0;
                }
                catch (i) {
                    return "ENOENT" === i.code ? n(t, s(e), e) : void 0;
                } }; t.exports = { findMade: r, findMadeSync: n }; }, 8600: function (t, e, i) { var s = i(1017).dirname, r = function (t, e, i) { e.recursive = !1; var n = s(t); return n === t ? e.mkdirAsync(t, e).catch((function (t) { if ("EISDIR" !== t.code)
                throw t; })) : e.mkdirAsync(t, e).then((function () { return i || t; }), (function (s) { if ("ENOENT" === s.code)
                return r(n, e).then((function (i) { return r(t, e, i); })); if ("EEXIST" !== s.code && "EROFS" !== s.code)
                throw s; return e.statAsync(t).then((function (t) { if (t.isDirectory())
                return i; throw s; }), (function () { throw s; })); })); }, n = function (t, e, i) { var r = s(t); if (e.recursive = !1, r === t)
                try {
                    return e.mkdirSync(t, e);
                }
                catch (t) {
                    if ("EISDIR" !== t.code)
                        throw t;
                    return;
                } try {
                return e.mkdirSync(t, e), i || t;
            }
            catch (s) {
                if ("ENOENT" === s.code)
                    return n(t, e, n(r, e, i));
                if ("EEXIST" !== s.code && "EROFS" !== s.code)
                    throw s;
                try {
                    if (!e.statSync(t).isDirectory())
                        throw s;
                }
                catch (t) {
                    throw s;
                }
            } }; t.exports = { mkdirpManual: r, mkdirpManualSync: n }; }, 9378: function (t, e, i) { var s = i(1017).dirname, _a = i(8812), r = _a.findMade, n = _a.findMadeSync, _b = i(8600), h = _b.mkdirpManual, o = _b.mkdirpManualSync; t.exports = { mkdirpNative: function (t, e) { return (e.recursive = !0, s(t) === t ? e.mkdirAsync(t, e) : r(e, t).then((function (i) { return e.mkdirAsync(t, e).then((function () { return i; })).catch((function (i) { if ("ENOENT" === i.code)
                    return h(t, e); throw i; })); }))); }, mkdirpNativeSync: function (t, e) { if (e.recursive = !0, s(t) === t)
                    return e.mkdirSync(t, e); var i = n(e, t); try {
                    return e.mkdirSync(t, e), i;
                }
                catch (i) {
                    if ("ENOENT" === i.code)
                        return o(t, e);
                    throw i;
                } } }; }, 4231: function (t, e, i) { var s = i(3837).promisify, r = i(7147); t.exports = function (t) { if (t)
                if ("object" == typeof t)
                    t = __assign({ mode: 511, fs: r }, t);
                else if ("number" == typeof t)
                    t = { mode: t, fs: r };
                else {
                    if ("string" != typeof t)
                        throw new TypeError("invalid options argument");
                    t = { mode: parseInt(t, 8), fs: r };
                }
            else
                t = { mode: 511, fs: r }; return t.mkdir = t.mkdir || t.fs.mkdir || r.mkdir, t.mkdirAsync = s(t.mkdir), t.stat = t.stat || t.fs.stat || r.stat, t.statAsync = s(t.stat), t.statSync = t.statSync || t.fs.statSync || r.statSync, t.mkdirSync = t.mkdirSync || t.fs.mkdirSync || r.mkdirSync, t; }; }, 3610: function (t, e, i) { var s = process.env.__TESTING_MKDIRP_PLATFORM__ || process.platform, _a = i(1017), r = _a.resolve, n = _a.parse; t.exports = function (t) { if (/\0/.test(t))
                throw Object.assign(new TypeError("path must be a string without null bytes"), { path: t, code: "ERR_INVALID_ARG_VALUE" }); if (t = r(t), "win32" === s) {
                var e_7 = /[*|"<>?:]/, i_3 = n(t).root;
                if (e_7.test(t.substr(i_3.length)))
                    throw Object.assign(new Error("Illegal characters in path."), { path: t, code: "EINVAL" });
            } return t; }; }, 6167: function (t, e, i) { var s = i(7147), r = (process.env.__TESTING_MKDIRP_NODE_VERSION__ || process.version).replace(/^v/, "").split("."), n = +r[0] > 10 || 10 == +r[0] && +r[1] >= 12, h = n ? function (t) { return t.mkdir === s.mkdir; } : function () { return !1; }, o = n ? function (t) { return t.mkdirSync === s.mkdirSync; } : function () { return !1; }; t.exports = { useNative: h, useNativeSync: o }; }, 7998: function (t, e, i) {
                "use strict";
                e.c = e.create = i(4629), e.r = e.replace = i(1746), e.t = e.list = i(6473), e.u = e.update = i(5997), e.x = e.extract = i(769), e.Pack = i(8042), e.Unpack = i(2699), e.Parse = i(6824), e.ReadEntry = i(6277), e.WriteEntry = i(7620), e.Header = i(7134), e.Pax = i(4747), e.types = i(4402);
            }, 4629: function (t, e, i) {
                "use strict";
                var s = i(2093), r = i(8042), n = i(292), h = i(6473), o = i(1017);
                t.exports = function (t, e, i) { if ("function" == typeof e && (i = e), Array.isArray(t) && (e = t, t = {}), !e || !Array.isArray(e) || !e.length)
                    throw new TypeError("no files or directories specified"); e = Array.from(e); var r = s(t); if (r.sync && "function" == typeof i)
                    throw new TypeError("callback not supported for sync tar functions"); if (!r.file && "function" == typeof i)
                    throw new TypeError("callback only supported with file option"); return r.file && r.sync ? l(r, e) : r.file ? a(r, e, i) : r.sync ? d(r, e) : p(r, e); };
                var l = function (t, e) { var i = new r.Sync(t), s = new n.WriteStreamSync(t.file, { mode: t.mode || 438 }); i.pipe(s), c(i, e); }, a = function (t, e, i) { var s = new r(t), h = new n.WriteStream(t.file, { mode: t.mode || 438 }); s.pipe(h); var o = new Promise((function (t, e) { h.on("error", e), h.on("close", t), s.on("error", e); })); return u(s, e), i ? o.then(i, i) : o; }, c = function (t, e) { e.forEach((function (e) { "@" === e.charAt(0) ? h({ file: o.resolve(t.cwd, e.substr(1)), sync: !0, noResume: !0, onentry: function (e) { return t.add(e); } }) : t.add(e); })), t.end(); }, u = function (t, e) { for (; e.length;) {
                    var i_4 = e.shift();
                    if ("@" === i_4.charAt(0))
                        return h({ file: o.resolve(t.cwd, i_4.substr(1)), noResume: !0, onentry: function (e) { return t.add(e); } }).then((function (i) { return u(t, e); }));
                    t.add(i_4);
                } t.end(); }, d = function (t, e) { var i = new r.Sync(t); return c(i, e), i; }, p = function (t, e) { var i = new r(t); return u(i, e), i; };
            }, 769: function (t, e, i) {
                "use strict";
                var s = i(2093), r = i(2699), n = i(7147), h = i(292), o = i(1017), l = i(4922);
                t.exports = function (t, e, i) { "function" == typeof t ? (i = t, e = null, t = {}) : Array.isArray(t) && (e = t, t = {}), "function" == typeof e && (i = e, e = null), e = e ? Array.from(e) : []; var r = s(t); if (r.sync && "function" == typeof i)
                    throw new TypeError("callback not supported for sync tar functions"); if (!r.file && "function" == typeof i)
                    throw new TypeError("callback only supported with file option"); return e.length && a(r, e), r.file && r.sync ? c(r) : r.file ? u(r, i) : r.sync ? d(r) : p(r); };
                var a = function (t, e) { var i = new Map(e.map((function (t) { return [l(t), !0]; }))), s = t.filter, r = function (t, e) { var s = e || o.parse(t).root || ".", n = t !== s && (i.has(t) ? i.get(t) : r(o.dirname(t), s)); return i.set(t, n), n; }; t.filter = s ? function (t, e) { return s(t, e) && r(l(t)); } : function (t) { return r(l(t)); }; }, c = function (t) { var e = new r.Sync(t), i = t.file, s = n.statSync(i), o = t.maxReadSize || 16777216; new h.ReadStreamSync(i, { readSize: o, size: s.size }).pipe(e); }, u = function (t, e) { var i = new r(t), s = t.maxReadSize || 16777216, o = t.file, l = new Promise((function (t, e) { i.on("error", e), i.on("close", t), n.stat(o, (function (t, r) { if (t)
                    e(t);
                else {
                    var t_15 = new h.ReadStream(o, { readSize: s, size: r.size });
                    t_15.on("error", e), t_15.pipe(i);
                } })); })); return e ? l.then(e, e) : l; }, d = function (t) { return new r.Sync(t); }, p = function (t) { return new r(t); };
            }, 5879: function (t, e, i) { var s = "win32" === (process.env.__FAKE_PLATFORM__ || process.platform), r = global.__FAKE_TESTING_FS__ || i(7147), _a = r.constants, n = _a.O_CREAT, h = _a.O_TRUNC, o = _a.O_WRONLY, _b = _a.UV_FS_O_FILEMAP, l = _b === void 0 ? 0 : _b, a = s && !!l, c = l | h | n | o; t.exports = a ? function (t) { return t < 524288 ? c : "w"; } : function () { return "w"; }; }, 7134: function (t, e, i) {
                "use strict";
                var s = i(4402), r = i(1017).posix, n = i(9678), h = Symbol("slurp"), o = Symbol("type"), l = function (t, e, i) { return t.slice(e, e + i).toString("utf8").replace(/\0.*/, ""); }, a = function (t, e, i) { return c(u(t, e, i)); }, c = function (t) { return null === t ? null : new Date(1e3 * t); }, u = function (t, e, i) { return 128 & t[e] ? n.parse(t.slice(e, e + i)) : d(t, e, i); }, d = function (t, e, i) { return s = parseInt(t.slice(e, e + i).toString("utf8").replace(/\0.*$/, "").trim(), 8), isNaN(s) ? null : s; var s; }, p = { 12: 8589934591, 8: 2097151 }, m = function (t, e, i, s) { return null !== s && (s > p[i] || s < 0 ? (n.encode(s, t.slice(e, e + i)), !0) : (f(t, e, i, s), !1)); }, f = function (t, e, i, s) { return t.write(y(s, i), e, i, "ascii"); }, y = function (t, e) { return b(Math.floor(t).toString(8), e); }, b = function (t, e) { return (t.length === e - 1 ? t : new Array(e - t.length - 1).join("0") + t + " ") + "\0"; }, w = function (t, e, i, s) { return null !== s && m(t, e, i, s.getTime() / 1e3); }, E = new Array(156).join("\0"), S = function (t, e, i, s) { return null !== s && (t.write(s + E, e, i, "utf8"), s.length !== Buffer.byteLength(s) || s.length > i); };
                t.exports = /** @class */ (function () {
                    function exports(t, e, i, s) {
                        this.cksumValid = !1, this.needPax = !1, this.nullBlock = !1, this.block = null, this.path = null, this.mode = null, this.uid = null, this.gid = null, this.size = null, this.mtime = null, this.cksum = null, this[o] = "0", this.linkpath = null, this.uname = null, this.gname = null, this.devmaj = 0, this.devmin = 0, this.atime = null, this.ctime = null, Buffer.isBuffer(t) ? this.decode(t, e || 0, i, s) : t && this.set(t);
                    }
                    exports.prototype.decode = function (t, e, i, s) { if (e || (e = 0), !(t && t.length >= e + 512))
                        throw new Error("need 512 bytes for header"); if (this.path = l(t, e, 100), this.mode = u(t, e + 100, 8), this.uid = u(t, e + 108, 8), this.gid = u(t, e + 116, 8), this.size = u(t, e + 124, 12), this.mtime = a(t, e + 136, 12), this.cksum = u(t, e + 148, 12), this[h](i), this[h](s, !0), this[o] = l(t, e + 156, 1), "" === this[o] && (this[o] = "0"), "0" === this[o] && "/" === this.path.substr(-1) && (this[o] = "5"), "5" === this[o] && (this.size = 0), this.linkpath = l(t, e + 157, 100), "ustar\x0000" === t.slice(e + 257, e + 265).toString())
                        if (this.uname = l(t, e + 265, 32), this.gname = l(t, e + 297, 32), this.devmaj = u(t, e + 329, 8), this.devmin = u(t, e + 337, 8), 0 !== t[e + 475]) {
                            var i_5 = l(t, e + 345, 155);
                            this.path = i_5 + "/" + this.path;
                        }
                        else {
                            var i_6 = l(t, e + 345, 130);
                            i_6 && (this.path = i_6 + "/" + this.path), this.atime = a(t, e + 476, 12), this.ctime = a(t, e + 488, 12);
                        } var r = 256; for (var i_7 = e; i_7 < e + 148; i_7++)
                        r += t[i_7]; for (var i_8 = e + 156; i_8 < e + 512; i_8++)
                        r += t[i_8]; this.cksumValid = r === this.cksum, null === this.cksum && 256 === r && (this.nullBlock = !0); };
                    exports.prototype[h] = function (t, e) { for (var i_9 in t)
                        null === t[i_9] || void 0 === t[i_9] || e && "path" === i_9 || (this[i_9] = t[i_9]); };
                    exports.prototype.encode = function (t, e) { if (t || (t = this.block = Buffer.alloc(512), e = 0), e || (e = 0), !(t.length >= e + 512))
                        throw new Error("need 512 bytes for header"); var i = this.ctime || this.atime ? 130 : 155, s = (function (t, e) { var i, s = t, n = ""; var h = r.parse(t).root || "."; if (Buffer.byteLength(s) < 100)
                        i = [s, n, !1];
                    else {
                        n = r.dirname(s), s = r.basename(s);
                        do {
                            Buffer.byteLength(s) <= 100 && Buffer.byteLength(n) <= e ? i = [s, n, !1] : Buffer.byteLength(s) > 100 && Buffer.byteLength(n) <= e ? i = [s.substr(0, 99), n, !0] : (s = r.join(r.basename(n), s), n = r.dirname(n));
                        } while (n !== h && !i);
                        i || (i = [t.substr(0, 99), "", !0]);
                    } return i; })(this.path || "", i), n = s[0], h = s[1]; this.needPax = s[2], this.needPax = S(t, e, 100, n) || this.needPax, this.needPax = m(t, e + 100, 8, this.mode) || this.needPax, this.needPax = m(t, e + 108, 8, this.uid) || this.needPax, this.needPax = m(t, e + 116, 8, this.gid) || this.needPax, this.needPax = m(t, e + 124, 12, this.size) || this.needPax, this.needPax = w(t, e + 136, 12, this.mtime) || this.needPax, t[e + 156] = this[o].charCodeAt(0), this.needPax = S(t, e + 157, 100, this.linkpath) || this.needPax, t.write("ustar\x0000", e + 257, 8), this.needPax = S(t, e + 265, 32, this.uname) || this.needPax, this.needPax = S(t, e + 297, 32, this.gname) || this.needPax, this.needPax = m(t, e + 329, 8, this.devmaj) || this.needPax, this.needPax = m(t, e + 337, 8, this.devmin) || this.needPax, this.needPax = S(t, e + 345, i, h) || this.needPax, 0 !== t[e + 475] ? this.needPax = S(t, e + 345, 155, h) || this.needPax : (this.needPax = S(t, e + 345, 130, h) || this.needPax, this.needPax = w(t, e + 476, 12, this.atime) || this.needPax, this.needPax = w(t, e + 488, 12, this.ctime) || this.needPax); var l = 256; for (var i_10 = e; i_10 < e + 148; i_10++)
                        l += t[i_10]; for (var i_11 = e + 156; i_11 < e + 512; i_11++)
                        l += t[i_11]; return this.cksum = l, m(t, e + 148, 8, this.cksum), this.cksumValid = !0, this.needPax; };
                    exports.prototype.set = function (t) { for (var e_8 in t)
                        null !== t[e_8] && void 0 !== t[e_8] && (this[e_8] = t[e_8]); };
                    Object.defineProperty(exports.prototype, "type", {
                        get: function () { return s.name.get(this[o]) || this[o]; },
                        set: function (t) { s.code.has(t) ? this[o] = s.code.get(t) : this[o] = t; },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(exports.prototype, "typeKey", {
                        get: function () { return this[o]; },
                        enumerable: false,
                        configurable: true
                    });
                    return exports;
                }());
            }, 2093: function (t) {
                "use strict";
                var e = new Map([["C", "cwd"], ["f", "file"], ["z", "gzip"], ["P", "preservePaths"], ["U", "unlink"], ["strip-components", "strip"], ["stripComponents", "strip"], ["keep-newer", "newer"], ["keepNewer", "newer"], ["keep-newer-files", "newer"], ["keepNewerFiles", "newer"], ["k", "keep"], ["keep-existing", "keep"], ["keepExisting", "keep"], ["m", "noMtime"], ["no-mtime", "noMtime"], ["p", "preserveOwner"], ["L", "follow"], ["h", "follow"]]);
                t.exports = function (t) { return t ? Object.keys(t).map((function (i) { return [e.has(i) ? e.get(i) : i, t[i]]; })).reduce((function (t, e) { return (t[e[0]] = e[1], t); }), Object.create(null)) : {}; };
            }, 9678: function (t) {
                "use strict";
                var e = function (t) { return 255 & (255 ^ t); }, i = function (t) { return 1 + (255 ^ t) & 255; };
                t.exports = { encode: function (t, s) { if (!Number.isSafeInteger(t))
                        throw Error("cannot encode number outside of javascript safe integer range"); return t < 0 ? (function (t, s) { s[0] = 255; var r = !1; t *= -1; for (var n = s.length; n > 1; n--) {
                        var h = 255 & t;
                        t = Math.floor(t / 256), r ? s[n - 1] = e(h) : 0 === h ? s[n - 1] = 0 : (r = !0, s[n - 1] = i(h));
                    } })(t, s) : (function (t, e) { e[0] = 128; for (var i = e.length; i > 1; i--)
                        e[i - 1] = 255 & t, t = Math.floor(t / 256); })(t, s), s; }, parse: function (t) { var s = t[0], r = 128 === s ? (function (t) { for (var e = t.length, i = 0, s = e - 1; s > -1; s--) {
                        var r = t[s];
                        0 !== r && (i += r * Math.pow(256, e - s - 1));
                    } return i; })(t.slice(1, t.length)) : 255 === s ? (function (t) { for (var s = t.length, r = 0, n = !1, h = s - 1; h > -1; h--) {
                        var o, l = t[h];
                        n ? o = e(l) : 0 === l ? o = l : (n = !0, o = i(l)), 0 !== o && (r -= o * Math.pow(256, s - h - 1));
                    } return r; })(t) : null; if (null === r)
                        throw Error("invalid base256 encoding"); if (!Number.isSafeInteger(r))
                        throw Error("parsed number outside of javascript safe integer range"); return r; } };
            }, 6473: function (t, e, i) {
                "use strict";
                var s = i(2093), r = i(6824), n = i(7147), h = i(292), o = i(1017), l = i(4922);
                t.exports = function (t, e, i) { "function" == typeof t ? (i = t, e = null, t = {}) : Array.isArray(t) && (e = t, t = {}), "function" == typeof e && (i = e, e = null), e = e ? Array.from(e) : []; var r = s(t); if (r.sync && "function" == typeof i)
                    throw new TypeError("callback not supported for sync tar functions"); if (!r.file && "function" == typeof i)
                    throw new TypeError("callback only supported with file option"); return e.length && c(r, e), r.noResume || a(r), r.file && r.sync ? u(r) : r.file ? d(r, i) : p(r); };
                var a = function (t) { var e = t.onentry; t.onentry = e ? function (t) { e(t), t.resume(); } : function (t) { return t.resume(); }; }, c = function (t, e) { var i = new Map(e.map((function (t) { return [l(t), !0]; }))), s = t.filter, r = function (t, e) { var s = e || o.parse(t).root || ".", n = t !== s && (i.has(t) ? i.get(t) : r(o.dirname(t), s)); return i.set(t, n), n; }; t.filter = s ? function (t, e) { return s(t, e) && r(l(t)); } : function (t) { return r(l(t)); }; }, u = function (t) { var e = p(t), i = t.file; var s, r = !0; try {
                    var h_1 = n.statSync(i), o_1 = t.maxReadSize || 16777216;
                    if (h_1.size < o_1)
                        e.end(n.readFileSync(i));
                    else {
                        var t_16 = 0;
                        var r_1 = Buffer.allocUnsafe(o_1);
                        for (s = n.openSync(i, "r"); t_16 < h_1.size;) {
                            var i_12 = n.readSync(s, r_1, 0, o_1, t_16);
                            t_16 += i_12, e.write(r_1.slice(0, i_12));
                        }
                        e.end();
                    }
                    r = !1;
                }
                finally {
                    if (r && s)
                        try {
                            n.closeSync(s);
                        }
                        catch (t) { }
                } }, d = function (t, e) { var i = new r(t), s = t.maxReadSize || 16777216, o = t.file, l = new Promise((function (t, e) { i.on("error", e), i.on("end", t), n.stat(o, (function (t, r) { if (t)
                    e(t);
                else {
                    var t_17 = new h.ReadStream(o, { readSize: s, size: r.size });
                    t_17.on("error", e), t_17.pipe(i);
                } })); })); return e ? l.then(e, e) : l; }, p = function (t) { return new r(t); };
            }, 3248: function (t, e, i) {
                "use strict";
                var s = i(1890), r = i(7147), n = i(1017), h = i(9019), o = i(2905);
                var l = /** @class */ (function (_super) {
                    __extends(l, _super);
                    function l(t, e) {
                        var _this = this;
                        _this = _super.call(this, "Cannot extract through symbolic link") || this, _this.path = e, _this.symlink = t;
                        return _this;
                    }
                    Object.defineProperty(l.prototype, "name", {
                        get: function () { return "SylinkError"; },
                        enumerable: false,
                        configurable: true
                    });
                    return l;
                }(Error));
                var a = /** @class */ (function (_super) {
                    __extends(a, _super);
                    function a(t, e) {
                        var _this = this;
                        _this = _super.call(this, e + ": Cannot cd into '" + t + "'") || this, _this.path = t, _this.code = e;
                        return _this;
                    }
                    Object.defineProperty(a.prototype, "name", {
                        get: function () { return "CwdError"; },
                        enumerable: false,
                        configurable: true
                    });
                    return a;
                }(Error));
                var c = function (t, e) { return t.get(o(e)); }, u = function (t, e, i) { return t.set(o(e), i); };
                t.exports = function (t, e, i) { t = o(t); var l = e.umask, p = 448 | e.mode, m = 0 != (p & l), f = e.uid, y = e.gid, b = "number" == typeof f && "number" == typeof y && (f !== e.processUid || y !== e.processGid), w = e.preserve, E = e.unlink, S = e.cache, _ = o(e.cwd), R = function (e, s) { e ? i(e) : (u(S, t, !0), s && b ? h(s, f, y, (function (t) { return R(t); })) : m ? r.chmod(t, p, i) : i()); }; if (S && !0 === c(S, t))
                    return R(); if (t === _)
                    return (function (t, e) { r.stat(t, (function (i, s) { !i && s.isDirectory() || (i = new a(t, i && i.code || "ENOTDIR")), e(i); })); })(t, R); if (w)
                    return s(t, { mode: p }).then((function (t) { return R(null, t); }), R); var g = o(n.relative(_, t)).split("/"); d(_, g, p, S, E, _, null, R); };
                var d = function (t, e, i, s, h, l, a, u) { if (!e.length)
                    return u(null, a); var m = e.shift(), f = o(n.resolve(t + "/" + m)); if (c(s, f))
                    return d(f, e, i, s, h, l, a, u); r.mkdir(f, i, p(f, e, i, s, h, l, a, u)); }, p = function (t, e, i, s, n, h, a, c) { return function (u) { u ? r.lstat(t, (function (m, f) { if (m)
                    m.path = m.path && o(m.path), c(m);
                else if (f.isDirectory())
                    d(t, e, i, s, n, h, a, c);
                else if (n)
                    r.unlink(t, (function (o) { if (o)
                        return c(o); r.mkdir(t, i, p(t, e, i, s, n, h, a, c)); }));
                else {
                    if (f.isSymbolicLink())
                        return c(new l(t, t + "/" + e.join("/")));
                    c(u);
                } })) : d(t, e, i, s, n, h, a = a || t, c); }; };
                t.exports.sync = function (t, e) { t = o(t); var i = e.umask, d = 448 | e.mode, p = 0 != (d & i), m = e.uid, f = e.gid, y = "number" == typeof m && "number" == typeof f && (m !== e.processUid || f !== e.processGid), b = e.preserve, w = e.unlink, E = e.cache, S = o(e.cwd), _ = function (e) { u(E, t, !0), e && y && h.sync(e, m, f), p && r.chmodSync(t, d); }; if (E && !0 === c(E, t))
                    return _(); if (t === S)
                    return (function (t) { var e = !1, i = "ENOTDIR"; try {
                        e = r.statSync(t).isDirectory();
                    }
                    catch (t) {
                        i = t.code;
                    }
                    finally {
                        if (!e)
                            throw new a(t, i);
                    } })(S), _(); if (b)
                    return _(s.sync(t, d)); var R = o(n.relative(S, t)).split("/"); var g = null; for (var t_18 = R.shift(), e_9 = S; t_18 && (e_9 += "/" + t_18); t_18 = R.shift())
                    if (e_9 = o(n.resolve(e_9)), !c(E, e_9))
                        try {
                            r.mkdirSync(e_9, d), g = g || e_9, u(E, e_9, !0);
                        }
                        catch (t) {
                            var i_13 = r.lstatSync(e_9);
                            if (i_13.isDirectory()) {
                                u(E, e_9, !0);
                                continue;
                            }
                            if (w) {
                                r.unlinkSync(e_9), r.mkdirSync(e_9, d), g = g || e_9, u(E, e_9, !0);
                                continue;
                            }
                            if (i_13.isSymbolicLink())
                                return new l(e_9, e_9 + "/" + R.join("/"));
                        } return _(g); };
            }, 7716: function (t) {
                "use strict";
                t.exports = function (t, e, i) { return (t &= 4095, i && (t = -19 & (384 | t)), e && (256 & t && (t |= 64), 32 & t && (t |= 8), 4 & t && (t |= 1)), t); };
            }, 1946: function (t) { var e = Object.create(null), i = Object.prototype.hasOwnProperty; t.exports = function (t) { return (i.call(e, t) || (e[t] = t.normalize("NFKD")), e[t]); }; }, 2905: function (t) { var e = process.env.TESTING_TAR_FAKE_PLATFORM || process.platform; t.exports = "win32" !== e ? function (t) { return t; } : function (t) { return t && t.replace(/\\/g, "/"); }; }, 8042: function (t, e, i) {
                "use strict";
                var s = /** @class */ (function () {
                    function s(t, e) {
                        this.path = t || "./", this.absolute = e, this.entry = null, this.stat = null, this.readdir = null, this.pending = !1, this.ignore = !1, this.piped = !1;
                    }
                    return s;
                }());
                var r = i(5736), n = i(1650), h = i(6277), o = i(7620), l = o.Sync, a = o.Tar, c = i(4411), u = Buffer.alloc(1024), d = Symbol("onStat"), p = Symbol("ended"), m = Symbol("queue"), f = Symbol("current"), y = Symbol("process"), b = Symbol("processing"), w = Symbol("processJob"), E = Symbol("jobs"), S = Symbol("jobDone"), _ = Symbol("addFSEntry"), R = Symbol("addTarEntry"), g = Symbol("stat"), O = Symbol("readdir"), T = Symbol("onreaddir"), v = Symbol("pipe"), k = Symbol("entry"), L = Symbol("entryOpt"), x = Symbol("writeEntryClass"), A = Symbol("write"), I = Symbol("ondrain"), D = i(7147), N = i(1017), C = i(7902), B = i(2905), M = C(/** @class */ (function (_super) {
                    __extends(class_1, _super);
                    function class_1(t) {
                        var _this = this;
                        _this = _super.call(this, t) || this, t = t || Object.create(null), _this.opt = t, _this.file = t.file || "", _this.cwd = t.cwd || process.cwd(), _this.maxReadSize = t.maxReadSize, _this.preservePaths = !!t.preservePaths, _this.strict = !!t.strict, _this.noPax = !!t.noPax, _this.prefix = B(t.prefix || ""), _this.linkCache = t.linkCache || new Map, _this.statCache = t.statCache || new Map, _this.readdirCache = t.readdirCache || new Map, _this[x] = o, "function" == typeof t.onwarn && _this.on("warn", t.onwarn), _this.portable = !!t.portable, _this.zip = null, t.gzip ? ("object" != typeof t.gzip && (t.gzip = {}), _this.portable && (t.gzip.portable = !0), _this.zip = new n.Gzip(t.gzip), _this.zip.on("data", (function (t) { return _super.prototype.write.call(_this, t); })), _this.zip.on("end", (function (t) { return _super.prototype.end.call(_this); })), _this.zip.on("drain", (function (t) { return _this[I](); })), _this.on("resume", (function (t) { return _this.zip.resume(); }))) : _this.on("drain", _this[I]), _this.noDirRecurse = !!t.noDirRecurse, _this.follow = !!t.follow, _this.noMtime = !!t.noMtime, _this.mtime = t.mtime || null, _this.filter = "function" == typeof t.filter ? t.filter : function (t) { return !0; }, _this[m] = new c, _this[E] = 0, _this.jobs = +t.jobs || 4, _this[b] = !1, _this[p] = !1;
                        return _this;
                    }
                    class_1.prototype[A] = function (t) { return _super.prototype.write.call(this, t); };
                    class_1.prototype.add = function (t) { return this.write(t), this; };
                    class_1.prototype.end = function (t) { return t && this.write(t), this[p] = !0, this[y](), this; };
                    class_1.prototype.write = function (t) { if (this[p])
                        throw new Error("write after end"); return t instanceof h ? this[R](t) : this[_](t), this.flowing; };
                    class_1.prototype[R] = function (t) {
                        var _this = this;
                        var e = B(N.resolve(this.cwd, t.path));
                        if (this.filter(t.path, t)) {
                            var i_14 = new s(t.path, e, !1);
                            i_14.entry = new a(t, this[L](i_14)), i_14.entry.on("end", (function (t) { return _this[S](i_14); })), this[E] += 1, this[m].push(i_14);
                        }
                        else
                            t.resume();
                        this[y]();
                    };
                    class_1.prototype[_] = function (t) { var e = B(N.resolve(this.cwd, t)); this[m].push(new s(t, e)), this[y](); };
                    class_1.prototype[g] = function (t) {
                        var _this = this;
                        t.pending = !0, this[E] += 1;
                        var e = this.follow ? "stat" : "lstat";
                        D[e](t.absolute, (function (e, i) { t.pending = !1, _this[E] -= 1, e ? _this.emit("error", e) : _this[d](t, i); }));
                    };
                    class_1.prototype[d] = function (t, e) { this.statCache.set(t.absolute, e), t.stat = e, this.filter(t.path, e) || (t.ignore = !0), this[y](); };
                    class_1.prototype[O] = function (t) {
                        var _this = this;
                        t.pending = !0, this[E] += 1, D.readdir(t.absolute, (function (e, i) { if (t.pending = !1, _this[E] -= 1, e)
                            return _this.emit("error", e); _this[T](t, i); }));
                    };
                    class_1.prototype[T] = function (t, e) { this.readdirCache.set(t.absolute, e), t.readdir = e, this[y](); };
                    class_1.prototype[y] = function () { if (!this[b]) {
                        this[b] = !0;
                        for (var t_19 = this[m].head; null !== t_19 && this[E] < this.jobs; t_19 = t_19.next)
                            if (this[w](t_19.value), t_19.value.ignore) {
                                var e_10 = t_19.next;
                                this[m].removeNode(t_19), t_19.next = e_10;
                            }
                        this[b] = !1, this[p] && !this[m].length && 0 === this[E] && (this.zip ? this.zip.end(u) : (_super.prototype.write.call(this, u), _super.prototype.end.call(this)));
                    } };
                    Object.defineProperty(class_1.prototype, f, {
                        get: function () { return this[m] && this[m].head && this[m].head.value; },
                        enumerable: false,
                        configurable: true
                    });
                    class_1.prototype[S] = function (t) { this[m].shift(), this[E] -= 1, this[y](); };
                    class_1.prototype[w] = function (t) { t.pending || (t.entry ? t !== this[f] || t.piped || this[v](t) : (t.stat || (this.statCache.has(t.absolute) ? this[d](t, this.statCache.get(t.absolute)) : this[g](t)), t.stat && (t.ignore || (this.noDirRecurse || !t.stat.isDirectory() || t.readdir || (this.readdirCache.has(t.absolute) ? this[T](t, this.readdirCache.get(t.absolute)) : this[O](t), t.readdir)) && (t.entry = this[k](t), t.entry ? t !== this[f] || t.piped || this[v](t) : t.ignore = !0)))); };
                    class_1.prototype[L] = function (t) {
                        var _this = this;
                        return { onwarn: function (t, e, i) { return _this.warn(t, e, i); }, noPax: this.noPax, cwd: this.cwd, absolute: t.absolute, preservePaths: this.preservePaths, maxReadSize: this.maxReadSize, strict: this.strict, portable: this.portable, linkCache: this.linkCache, statCache: this.statCache, noMtime: this.noMtime, mtime: this.mtime, prefix: this.prefix };
                    };
                    class_1.prototype[k] = function (t) {
                        var _this = this;
                        this[E] += 1;
                        try {
                            return new this[x](t.path, this[L](t)).on("end", (function () { return _this[S](t); })).on("error", (function (t) { return _this.emit("error", t); }));
                        }
                        catch (t) {
                            this.emit("error", t);
                        }
                    };
                    class_1.prototype[I] = function () { this[f] && this[f].entry && this[f].entry.resume(); };
                    class_1.prototype[v] = function (t) {
                        var _this = this;
                        t.piped = !0, t.readdir && t.readdir.forEach((function (e) { var i = t.path, s = "./" === i ? "" : i.replace(/\/*$/, "/"); _this[_](s + e); }));
                        var e = t.entry, i = this.zip;
                        i ? e.on("data", (function (t) { i.write(t) || e.pause(); })) : e.on("data", (function (t) { _super.prototype.write.call(_this, t) || e.pause(); }));
                    };
                    class_1.prototype.pause = function () { return this.zip && this.zip.pause(), _super.prototype.pause.call(this); };
                    return class_1;
                }(r)));
                M.Sync = /** @class */ (function (_super) {
                    __extends(Sync, _super);
                    function Sync(t) {
                        var _this = this;
                        _this = _super.call(this, t) || this, _this[x] = l;
                        return _this;
                    }
                    Sync.prototype.pause = function () { };
                    Sync.prototype.resume = function () { };
                    Sync.prototype[g] = function (t) { var e = this.follow ? "statSync" : "lstatSync"; this[d](t, D[e](t.absolute)); };
                    Sync.prototype[O] = function (t, e) { this[T](t, D.readdirSync(t.absolute)); };
                    Sync.prototype[v] = function (t) {
                        var _this = this;
                        var e = t.entry, i = this.zip;
                        t.readdir && t.readdir.forEach((function (e) { var i = t.path, s = "./" === i ? "" : i.replace(/\/*$/, "/"); _this[_](s + e); })), i ? e.on("data", (function (t) { i.write(t); })) : e.on("data", (function (t) { _super.prototype[A].call(_this, t); }));
                    };
                    return Sync;
                }(M)), t.exports = M;
            }, 6824: function (t, e, i) {
                "use strict";
                var s = i(7902), r = i(7134), n = i(2361), h = i(4411), o = i(6277), l = i(4747), a = i(1650), c = Buffer.from([31, 139]), u = Symbol("state"), d = Symbol("writeEntry"), p = Symbol("readEntry"), m = Symbol("nextEntry"), f = Symbol("processEntry"), y = Symbol("extendedHeader"), b = Symbol("globalExtendedHeader"), w = Symbol("meta"), E = Symbol("emitMeta"), S = Symbol("buffer"), _ = Symbol("queue"), R = Symbol("ended"), g = Symbol("emittedEnd"), O = Symbol("emit"), T = Symbol("unzip"), v = Symbol("consumeChunk"), k = Symbol("consumeChunkSub"), L = Symbol("consumeBody"), x = Symbol("consumeMeta"), A = Symbol("consumeHeader"), I = Symbol("consuming"), D = Symbol("bufferConcat"), N = Symbol("maybeEnd"), C = Symbol("writing"), B = Symbol("aborted"), M = Symbol("onDone"), F = Symbol("sawValidEntry"), P = Symbol("sawNullBlock"), z = Symbol("sawEOF"), U = function (t) { return !0; };
                t.exports = s(/** @class */ (function (_super) {
                    __extends(class_2, _super);
                    function class_2(t) {
                        var _this = this;
                        _this = _super.call(this, t = t || {}) || this, _this.file = t.file || "", _this[F] = null, _this.on(M, (function (t) { "begin" !== _this[u] && !1 !== _this[F] || _this.warn("TAR_BAD_ARCHIVE", "Unrecognized archive format"); })), t.ondone ? _this.on(M, t.ondone) : _this.on(M, (function (t) { _this.emit("prefinish"), _this.emit("finish"), _this.emit("end"), _this.emit("close"); })), _this.strict = !!t.strict, _this.maxMetaEntrySize = t.maxMetaEntrySize || 1048576, _this.filter = "function" == typeof t.filter ? t.filter : U, _this.writable = !0, _this.readable = !1, _this[_] = new h, _this[S] = null, _this[p] = null, _this[d] = null, _this[u] = "begin", _this[w] = "", _this[y] = null, _this[b] = null, _this[R] = !1, _this[T] = null, _this[B] = !1, _this[P] = !1, _this[z] = !1, "function" == typeof t.onwarn && _this.on("warn", t.onwarn), "function" == typeof t.onentry && _this.on("entry", t.onentry);
                        return _this;
                    }
                    class_2.prototype[A] = function (t, e) {
                        var _this = this;
                        var i;
                        null === this[F] && (this[F] = !1);
                        try {
                            i = new r(t, e, this[y], this[b]);
                        }
                        catch (t) {
                            return this.warn("TAR_ENTRY_INVALID", t);
                        }
                        if (i.nullBlock)
                            this[P] ? (this[z] = !0, "begin" === this[u] && (this[u] = "header"), this[O]("eof")) : (this[P] = !0, this[O]("nullBlock"));
                        else if (this[P] = !1, i.cksumValid)
                            if (i.path) {
                                var t_20 = i.type;
                                if (/^(Symbolic)?Link$/.test(t_20) && !i.linkpath)
                                    this.warn("TAR_ENTRY_INVALID", "linkpath required", { header: i });
                                else if (!/^(Symbolic)?Link$/.test(t_20) && i.linkpath)
                                    this.warn("TAR_ENTRY_INVALID", "linkpath forbidden", { header: i });
                                else {
                                    var t_21 = this[d] = new o(i, this[y], this[b]);
                                    if (!this[F])
                                        if (t_21.remain) {
                                            var e_11 = function () { t_21.invalid || (_this[F] = !0); };
                                            t_21.on("end", e_11);
                                        }
                                        else
                                            this[F] = !0;
                                    t_21.meta ? t_21.size > this.maxMetaEntrySize ? (t_21.ignore = !0, this[O]("ignoredEntry", t_21), this[u] = "ignore", t_21.resume()) : t_21.size > 0 && (this[w] = "", t_21.on("data", (function (t) { return _this[w] += t; })), this[u] = "meta") : (this[y] = null, t_21.ignore = t_21.ignore || !this.filter(t_21.path, t_21), t_21.ignore ? (this[O]("ignoredEntry", t_21), this[u] = t_21.remain ? "ignore" : "header", t_21.resume()) : (t_21.remain ? this[u] = "body" : (this[u] = "header", t_21.end()), this[p] ? this[_].push(t_21) : (this[_].push(t_21), this[m]())));
                                }
                            }
                            else
                                this.warn("TAR_ENTRY_INVALID", "path is required", { header: i });
                        else
                            this.warn("TAR_ENTRY_INVALID", "checksum failure", { header: i });
                    };
                    class_2.prototype[f] = function (t) {
                        var _this = this;
                        var e = !0;
                        return t ? Array.isArray(t) ? this.emit.apply(this, t) : (this[p] = t, this.emit("entry", t), t.emittedEnd || (t.on("end", (function (t) { return _this[m](); })), e = !1)) : (this[p] = null, e = !1), e;
                    };
                    class_2.prototype[m] = function () {
                        var _this = this;
                        do { } while (this[f](this[_].shift()));
                        if (!this[_].length) {
                            var t_22 = this[p];
                            !t_22 || t_22.flowing || t_22.size === t_22.remain ? this[C] || this.emit("drain") : t_22.once("drain", (function (t) { return _this.emit("drain"); }));
                        }
                    };
                    class_2.prototype[L] = function (t, e) { var i = this[d], s = i.blockRemain, r = s >= t.length && 0 === e ? t : t.slice(e, e + s); return i.write(r), i.blockRemain || (this[u] = "header", this[d] = null, i.end()), r.length; };
                    class_2.prototype[x] = function (t, e) { var i = this[d], s = this[L](t, e); return this[d] || this[E](i), s; };
                    class_2.prototype[O] = function (t, e, i) { this[_].length || this[p] ? this[_].push([t, e, i]) : this.emit(t, e, i); };
                    class_2.prototype[E] = function (t) { switch (this[O]("meta", this[w]), t.type) {
                        case "ExtendedHeader":
                        case "OldExtendedHeader":
                            this[y] = l.parse(this[w], this[y], !1);
                            break;
                        case "GlobalExtendedHeader":
                            this[b] = l.parse(this[w], this[b], !0);
                            break;
                        case "NextFileHasLongPath":
                        case "OldGnuLongPath":
                            this[y] = this[y] || Object.create(null), this[y].path = this[w].replace(/\0.*/, "");
                            break;
                        case "NextFileHasLongLinkpath":
                            this[y] = this[y] || Object.create(null), this[y].linkpath = this[w].replace(/\0.*/, "");
                            break;
                        default: throw new Error("unknown meta: " + t.type);
                    } };
                    class_2.prototype.abort = function (t) { this[B] = !0, this.emit("abort", t), this.warn("TAR_ABORT", t, { recoverable: !1 }); };
                    class_2.prototype.write = function (t) {
                        var _this = this;
                        if (this[B])
                            return;
                        if (null === this[T] && t) {
                            if (this[S] && (t = Buffer.concat([this[S], t]), this[S] = null), t.length < c.length)
                                return this[S] = t, !0;
                            for (var e_12 = 0; null === this[T] && e_12 < c.length; e_12++)
                                t[e_12] !== c[e_12] && (this[T] = !1);
                            if (null === this[T]) {
                                var e_13 = this[R];
                                this[R] = !1, this[T] = new a.Unzip, this[T].on("data", (function (t) { return _this[v](t); })), this[T].on("error", (function (t) { return _this.abort(t); })), this[T].on("end", (function (t) { _this[R] = !0, _this[v](); })), this[C] = !0;
                                var i_15 = this[T][e_13 ? "end" : "write"](t);
                                return this[C] = !1, i_15;
                            }
                        }
                        this[C] = !0, this[T] ? this[T].write(t) : this[v](t), this[C] = !1;
                        var e = !this[_].length && (!this[p] || this[p].flowing);
                        return e || this[_].length || this[p].once("drain", (function (t) { return _this.emit("drain"); })), e;
                    };
                    class_2.prototype[D] = function (t) { t && !this[B] && (this[S] = this[S] ? Buffer.concat([this[S], t]) : t); };
                    class_2.prototype[N] = function () { if (this[R] && !this[g] && !this[B] && !this[I]) {
                        this[g] = !0;
                        var t_23 = this[d];
                        if (t_23 && t_23.blockRemain) {
                            var e_14 = this[S] ? this[S].length : 0;
                            this.warn("TAR_BAD_ARCHIVE", "Truncated input (needed ".concat(t_23.blockRemain, " more bytes, only ").concat(e_14, " available)"), { entry: t_23 }), this[S] && t_23.write(this[S]), t_23.end();
                        }
                        this[O](M);
                    } };
                    class_2.prototype[v] = function (t) { if (this[I])
                        this[D](t);
                    else if (t || this[S]) {
                        if (this[I] = !0, this[S]) {
                            this[D](t);
                            var e_15 = this[S];
                            this[S] = null, this[k](e_15);
                        }
                        else
                            this[k](t);
                        for (; this[S] && this[S].length >= 512 && !this[B] && !this[z];) {
                            var t_24 = this[S];
                            this[S] = null, this[k](t_24);
                        }
                        this[I] = !1;
                    }
                    else
                        this[N](); this[S] && !this[R] || this[N](); };
                    class_2.prototype[k] = function (t) { var e = 0; var i = t.length; for (; e + 512 <= i && !this[B] && !this[z];)
                        switch (this[u]) {
                            case "begin":
                            case "header":
                                this[A](t, e), e += 512;
                                break;
                            case "ignore":
                            case "body":
                                e += this[L](t, e);
                                break;
                            case "meta":
                                e += this[x](t, e);
                                break;
                            default: throw new Error("invalid state: " + this[u]);
                        } e < i && (this[S] ? this[S] = Buffer.concat([t.slice(e), this[S]]) : this[S] = t.slice(e)); };
                    class_2.prototype.end = function (t) { this[B] || (this[T] ? this[T].end(t) : (this[R] = !0, this.write(t))); };
                    return class_2;
                }(n)));
            }, 10: function (t, e, i) { var s = i(9491), r = i(1946), n = i(4922), h = i(1017).join, o = "win32" === (process.env.TESTING_TAR_FAKE_PLATFORM || process.platform); t.exports = function () { var t = new Map, e = new Map, i = new Set, l = function (i) { var _a = (function (i) { var s = e.get(i); if (!s)
                throw new Error("function does not have any path reservations"); return { paths: s.paths.map((function (e) { return t.get(e); })), dirs: __spreadArray([], s.dirs, true).map((function (e) { return t.get(e); })) }; })(i), s = _a.paths, r = _a.dirs; return s.every((function (t) { return t[0] === i; })) && r.every((function (t) { return t[0] instanceof Set && t[0].has(i); })); }, a = function (t) { return !(i.has(t) || !l(t) || (i.add(t), t((function () { return c(t); })), 0)); }, c = function (r) { if (!i.has(r))
                return !1; var _a = e.get(r), n = _a.paths, h = _a.dirs, o = new Set; return n.forEach((function (e) { var i = t.get(e); s.equal(i[0], r), 1 === i.length ? t.delete(e) : (i.shift(), "function" == typeof i[0] ? o.add(i[0]) : i[0].forEach((function (t) { return o.add(t); }))); })), h.forEach((function (e) { var i = t.get(e); s(i[0] instanceof Set), 1 === i[0].size && 1 === i.length ? t.delete(e) : 1 === i[0].size ? (i.shift(), o.add(i[0])) : i[0].delete(r); })), i.delete(r), o.forEach((function (t) { return a(t); })), !0; }; return { check: l, reserve: function (i, s) { i = o ? ["win32 parallelization disabled"] : i.map((function (t) { return r(n(h(t))).toLowerCase(); })); var l = new Set(i.map((function (t) { return (function (t) { var e = t.split("/").slice(0, -1).reduce((function (t, e) { return (t.length && (e = h(t[t.length - 1], e)), t.push(e || "/"), t); }), []); return e; })(t); })).reduce((function (t, e) { return t.concat(e); }))); return e.set(s, { dirs: l, paths: i }), i.forEach((function (e) { var i = t.get(e); i ? i.push(s) : t.set(e, [s]); })), l.forEach((function (e) { var i = t.get(e); i ? i[i.length - 1] instanceof Set ? i[i.length - 1].add(s) : i.push(new Set([s])) : t.set(e, [new Set([s])]); })), a(s); } }; }; }, 4747: function (t, e, i) {
                "use strict";
                var s = i(7134), r = i(1017);
                var n = /** @class */ (function () {
                    function n(t, e) {
                        this.atime = t.atime || null, this.charset = t.charset || null, this.comment = t.comment || null, this.ctime = t.ctime || null, this.gid = t.gid || null, this.gname = t.gname || null, this.linkpath = t.linkpath || null, this.mtime = t.mtime || null, this.path = t.path || null, this.size = t.size || null, this.uid = t.uid || null, this.uname = t.uname || null, this.dev = t.dev || null, this.ino = t.ino || null, this.nlink = t.nlink || null, this.global = e || !1;
                    }
                    n.prototype.encode = function () { var t = this.encodeBody(); if ("" === t)
                        return null; var e = Buffer.byteLength(t), i = 512 * Math.ceil(1 + e / 512), n = Buffer.allocUnsafe(i); for (var t_25 = 0; t_25 < 512; t_25++)
                        n[t_25] = 0; new s({ path: ("PaxHeader/" + r.basename(this.path)).slice(0, 99), mode: this.mode || 420, uid: this.uid || null, gid: this.gid || null, size: e, mtime: this.mtime || null, type: this.global ? "GlobalExtendedHeader" : "ExtendedHeader", linkpath: "", uname: this.uname || "", gname: this.gname || "", devmaj: 0, devmin: 0, atime: this.atime || null, ctime: this.ctime || null }).encode(n), n.write(t, 512, e, "utf8"); for (var t_26 = e + 512; t_26 < n.length; t_26++)
                        n[t_26] = 0; return n; };
                    n.prototype.encodeBody = function () { return this.encodeField("path") + this.encodeField("ctime") + this.encodeField("atime") + this.encodeField("dev") + this.encodeField("ino") + this.encodeField("nlink") + this.encodeField("charset") + this.encodeField("comment") + this.encodeField("gid") + this.encodeField("gname") + this.encodeField("linkpath") + this.encodeField("mtime") + this.encodeField("size") + this.encodeField("uid") + this.encodeField("uname"); };
                    n.prototype.encodeField = function (t) { if (null === this[t] || void 0 === this[t])
                        return ""; var e = " " + ("dev" === t || "ino" === t || "nlink" === t ? "SCHILY." : "") + t + "=" + (this[t] instanceof Date ? this[t].getTime() / 1e3 : this[t]) + "\n", i = Buffer.byteLength(e); var s = Math.floor(Math.log(i) / Math.log(10)) + 1; return i + s >= Math.pow(10, s) && (s += 1), s + i + e; };
                    return n;
                }());
                n.parse = function (t, e, i) { return new n(h(o(t), e), i); };
                var h = function (t, e) { return e ? Object.keys(t).reduce((function (e, i) { return (e[i] = t[i], e); }), e) : t; }, o = function (t) { return t.replace(/\n$/, "").split("\n").reduce(l, Object.create(null)); }, l = function (t, e) { var i = parseInt(e, 10); if (i !== Buffer.byteLength(e) + 1)
                    return t; var s = (e = e.substr((i + " ").length)).split("="), r = s.shift().replace(/^SCHILY\.(dev|ino|nlink)/, "$1"); if (!r)
                    return t; var n = s.join("="); return t[r] = /^([A-Z]+\.)?([mac]|birth|creation)time$/.test(r) ? new Date(1e3 * n) : /^[0-9]+$/.test(n) ? +n : n, t; };
                t.exports = n;
            }, 6277: function (t, e, i) {
                "use strict";
                var s = i(5736), r = i(2905), n = Symbol("slurp");
                t.exports = /** @class */ (function (_super) {
                    __extends(exports, _super);
                    function exports(t, e, i) {
                        var _this = this;
                        switch ((_this = _super.call(this) || this, _this.pause(), _this.extended = e, _this.globalExtended = i, _this.header = t, _this.startBlockSize = 512 * Math.ceil(t.size / 512), _this.blockRemain = _this.startBlockSize, _this.remain = t.size, _this.type = t.type, _this.meta = !1, _this.ignore = !1, _this.type)) {
                            case "File":
                            case "OldFile":
                            case "Link":
                            case "SymbolicLink":
                            case "CharacterDevice":
                            case "BlockDevice":
                            case "Directory":
                            case "FIFO":
                            case "ContiguousFile":
                            case "GNUDumpDir": break;
                            case "NextFileHasLongLinkpath":
                            case "NextFileHasLongPath":
                            case "OldGnuLongPath":
                            case "GlobalExtendedHeader":
                            case "ExtendedHeader":
                            case "OldExtendedHeader":
                                _this.meta = !0;
                                break;
                            default: _this.ignore = !0;
                        }
                        _this.path = r(t.path), _this.mode = t.mode, _this.mode && (_this.mode = 4095 & _this.mode), _this.uid = t.uid, _this.gid = t.gid, _this.uname = t.uname, _this.gname = t.gname, _this.size = t.size, _this.mtime = t.mtime, _this.atime = t.atime, _this.ctime = t.ctime, _this.linkpath = r(t.linkpath), _this.uname = t.uname, _this.gname = t.gname, e && _this[n](e), i && _this[n](i, !0);
                        return _this;
                    }
                    exports.prototype.write = function (t) { var e = t.length; if (e > this.blockRemain)
                        throw new Error("writing more to entry than is appropriate"); var i = this.remain, s = this.blockRemain; return this.remain = Math.max(0, i - e), this.blockRemain = Math.max(0, s - e), !!this.ignore || (i >= e ? _super.prototype.write.call(this, t) : _super.prototype.write.call(this, t.slice(0, i))); };
                    exports.prototype[n] = function (t, e) { for (var i_16 in t)
                        null === t[i_16] || void 0 === t[i_16] || e && "path" === i_16 || (this[i_16] = "path" === i_16 || "linkpath" === i_16 ? r(t[i_16]) : t[i_16]); };
                    return exports;
                }(s));
            }, 1746: function (t, e, i) {
                "use strict";
                var s = i(2093), r = i(8042), n = i(7147), h = i(292), o = i(6473), l = i(1017), a = i(7134);
                t.exports = function (t, e, i) { var r = s(t); if (!r.file)
                    throw new TypeError("file is required"); if (r.gzip)
                    throw new TypeError("cannot append to compressed archives"); if (!e || !Array.isArray(e) || !e.length)
                    throw new TypeError("no files or directories specified"); return e = Array.from(e), r.sync ? c(r, e) : d(r, e, i); };
                var c = function (t, e) { var i = new r.Sync(t); var s, h, o = !0; try {
                    try {
                        s = n.openSync(t.file, "r+");
                    }
                    catch (e) {
                        if ("ENOENT" !== e.code)
                            throw e;
                        s = n.openSync(t.file, "w+");
                    }
                    var r_2 = n.fstatSync(s), l_1 = Buffer.alloc(512);
                    t: for (h = 0; h < r_2.size; h += 512) {
                        for (var t_27 = 0, e_16 = 0; t_27 < 512; t_27 += e_16) {
                            if (e_16 = n.readSync(s, l_1, t_27, l_1.length - t_27, h + t_27), 0 === h && 31 === l_1[0] && 139 === l_1[1])
                                throw new Error("cannot append to compressed archives");
                            if (!e_16)
                                break t;
                        }
                        var e_17 = new a(l_1);
                        if (!e_17.cksumValid)
                            break;
                        var i_17 = 512 * Math.ceil(e_17.size / 512);
                        if (h + i_17 + 512 > r_2.size)
                            break;
                        h += i_17, t.mtimeCache && t.mtimeCache.set(e_17.path, e_17.mtime);
                    }
                    o = !1, u(t, i, h, s, e);
                }
                finally {
                    if (o)
                        try {
                            n.closeSync(s);
                        }
                        catch (t) { }
                } }, u = function (t, e, i, s, r) { var n = new h.WriteStreamSync(t.file, { fd: s, start: i }); e.pipe(n), p(e, r); }, d = function (t, e, i) { e = Array.from(e); var s = new r(t), o = new Promise((function (i, r) { s.on("error", r); var o = "r+"; var l = function (c, u) { return c && "ENOENT" === c.code && "r+" === o ? (o = "w+", n.open(t.file, o, l)) : c ? r(c) : void n.fstat(u, (function (o, l) { if (o)
                    return n.close(u, (function () { return r(o); })); (function (e, i, s) { var r = function (t, i) { t ? n.close(e, (function (e) { return s(t); })) : s(null, i); }; var h = 0; if (0 === i)
                    return r(null, 0); var o = 0; var l = Buffer.alloc(512), c = function (s, u) { if (s)
                    return r(s); if (o += u, o < 512 && u)
                    return n.read(e, l, o, l.length - o, h + o, c); if (0 === h && 31 === l[0] && 139 === l[1])
                    return r(new Error("cannot append to compressed archives")); if (o < 512)
                    return r(null, h); var d = new a(l); if (!d.cksumValid)
                    return r(null, h); var p = 512 * Math.ceil(d.size / 512); return h + p + 512 > i ? r(null, h) : (h += p + 512, h >= i ? r(null, h) : (t.mtimeCache && t.mtimeCache.set(d.path, d.mtime), o = 0, void n.read(e, l, 0, 512, h, c))); }; n.read(e, l, 0, 512, h, c); })(u, l.size, (function (n, o) { if (n)
                    return r(n); var l = new h.WriteStream(t.file, { fd: u, start: o }); s.pipe(l), l.on("error", r), l.on("close", i), m(s, e); })); })); }; n.open(t.file, o, l); })); return i ? o.then(i, i) : o; }, p = function (t, e) { e.forEach((function (e) { "@" === e.charAt(0) ? o({ file: l.resolve(t.cwd, e.substr(1)), sync: !0, noResume: !0, onentry: function (e) { return t.add(e); } }) : t.add(e); })), t.end(); }, m = function (t, e) { for (; e.length;) {
                    var i_18 = e.shift();
                    if ("@" === i_18.charAt(0))
                        return o({ file: l.resolve(t.cwd, i_18.substr(1)), noResume: !0, onentry: function (e) { return t.add(e); } }).then((function (i) { return m(t, e); }));
                    t.add(i_18);
                } t.end(); };
            }, 2214: function (t, e, i) { var _a = i(1017).win32, s = _a.isAbsolute, r = _a.parse; t.exports = function (t) { var e = "", i = r(t); for (; s(t) || i.root;) {
                var s_2 = "/" === t.charAt(0) && "//?/" !== t.slice(0, 4) ? "/" : i.root;
                t = t.substr(s_2.length), e += s_2, i = r(t);
            } return [e, t]; }; }, 4922: function (t) { t.exports = function (t) { var e = t.length - 1, i = -1; for (; e > -1 && "/" === t.charAt(e);)
                i = e, e--; return -1 === i ? t : t.slice(0, i); }; }, 4402: function (t, e) {
                "use strict";
                e.name = new Map([["0", "File"], ["", "OldFile"], ["1", "Link"], ["2", "SymbolicLink"], ["3", "CharacterDevice"], ["4", "BlockDevice"], ["5", "Directory"], ["6", "FIFO"], ["7", "ContiguousFile"], ["g", "GlobalExtendedHeader"], ["x", "ExtendedHeader"], ["A", "SolarisACL"], ["D", "GNUDumpDir"], ["I", "Inode"], ["K", "NextFileHasLongLinkpath"], ["L", "NextFileHasLongPath"], ["M", "ContinuationFile"], ["N", "OldGnuLongPath"], ["S", "SparseFile"], ["V", "TapeVolumeHeader"], ["X", "OldExtendedHeader"]]), e.code = new Map(Array.from(e.name).map((function (t) { return [t[1], t[0]]; })));
            }, 2699: function (t, e, i) {
                "use strict";
                var s = i(9491), r = i(6824), n = i(7147), h = i(292), o = i(1017), l = i(3248), a = i(619), c = i(10), u = i(2214), d = i(2905), p = i(4922), m = i(1946), f = Symbol("onEntry"), y = Symbol("checkFs"), b = Symbol("checkFs2"), w = Symbol("pruneCache"), E = Symbol("isReusable"), S = Symbol("makeFs"), _ = Symbol("file"), R = Symbol("directory"), g = Symbol("link"), O = Symbol("symlink"), T = Symbol("hardlink"), v = Symbol("unsupported"), k = Symbol("checkPath"), L = Symbol("mkdir"), x = Symbol("onError"), A = Symbol("pending"), I = Symbol("pend"), D = Symbol("unpend"), N = Symbol("ended"), C = Symbol("maybeClose"), B = Symbol("skip"), M = Symbol("doChown"), F = Symbol("uid"), P = Symbol("gid"), z = Symbol("checkedCwd"), U = i(6113), j = i(5879), G = "win32" === (process.env.TESTING_TAR_FAKE_PLATFORM || process.platform), H = function (t, e, i) { return t === t >>> 0 ? t : e === e >>> 0 ? e : i; }, Z = function (t) { return m(p(d(t))).toLowerCase(); };
                var W = /** @class */ (function (_super) {
                    __extends(W, _super);
                    function W(t) {
                        var _this = this;
                        if (t || (t = {}), t.ondone = function (t) { _this[N] = !0, _this[C](); }, _this = _super.call(this, t) || this, _this[z] = !1, _this.reservations = c(), _this.transform = "function" == typeof t.transform ? t.transform : null, _this.writable = !0, _this.readable = !1, _this[A] = 0, _this[N] = !1, _this.dirCache = t.dirCache || new Map, "number" == typeof t.uid || "number" == typeof t.gid) {
                            if ("number" != typeof t.uid || "number" != typeof t.gid)
                                throw new TypeError("cannot set owner without number uid and gid");
                            if (t.preserveOwner)
                                throw new TypeError("cannot preserve owner in archive and also set owner explicitly");
                            _this.uid = t.uid, _this.gid = t.gid, _this.setOwner = !0;
                        }
                        else
                            _this.uid = null, _this.gid = null, _this.setOwner = !1;
                        void 0 === t.preserveOwner && "number" != typeof t.uid ? _this.preserveOwner = process.getuid && 0 === process.getuid() : _this.preserveOwner = !!t.preserveOwner, _this.processUid = (_this.preserveOwner || _this.setOwner) && process.getuid ? process.getuid() : null, _this.processGid = (_this.preserveOwner || _this.setOwner) && process.getgid ? process.getgid() : null, _this.forceChown = !0 === t.forceChown, _this.win32 = !!t.win32 || G, _this.newer = !!t.newer, _this.keep = !!t.keep, _this.noMtime = !!t.noMtime, _this.preservePaths = !!t.preservePaths, _this.unlink = !!t.unlink, _this.cwd = d(o.resolve(t.cwd || process.cwd())), _this.strip = +t.strip || 0, _this.processUmask = t.noChmod ? 0 : process.umask(), _this.umask = "number" == typeof t.umask ? t.umask : _this.processUmask, _this.dmode = t.dmode || 511 & ~_this.umask, _this.fmode = t.fmode || 438 & ~_this.umask, _this.on("entry", (function (t) { return _this[f](t); }));
                        return _this;
                    }
                    W.prototype.warn = function (t, e, i) {
                        if (i === void 0) { i = {}; }
                        return "TAR_BAD_ARCHIVE" !== t && "TAR_ABORT" !== t || (i.recoverable = !1), _super.prototype.warn.call(this, t, e, i);
                    };
                    W.prototype[C] = function () { this[N] && 0 === this[A] && (this.emit("prefinish"), this.emit("finish"), this.emit("end"), this.emit("close")); };
                    W.prototype[k] = function (t) { if (this.strip) {
                        var e_18 = d(t.path).split("/");
                        if (e_18.length < this.strip)
                            return !1;
                        if (t.path = e_18.slice(this.strip).join("/"), "Link" === t.type) {
                            var e_19 = d(t.linkpath).split("/");
                            if (!(e_19.length >= this.strip))
                                return !1;
                            t.linkpath = e_19.slice(this.strip).join("/");
                        }
                    } if (!this.preservePaths) {
                        var e_20 = d(t.path), i_19 = e_20.split("/");
                        if (i_19.includes("..") || G && /^[a-z]:\.\.$/i.test(i_19[0]))
                            return this.warn("TAR_ENTRY_ERROR", "path contains '..'", { entry: t, path: e_20 }), !1;
                        var _a = u(e_20), s_3 = _a[0], r_3 = _a[1];
                        s_3 && (t.path = r_3, this.warn("TAR_ENTRY_INFO", "stripping ".concat(s_3, " from absolute path"), { entry: t, path: e_20 }));
                    } if (o.isAbsolute(t.path) ? t.absolute = d(o.resolve(t.path)) : t.absolute = d(o.resolve(this.cwd, t.path)), !this.preservePaths && 0 !== t.absolute.indexOf(this.cwd + "/") && t.absolute !== this.cwd)
                        return this.warn("TAR_ENTRY_ERROR", "path escaped extraction target", { entry: t, path: d(t.path), resolvedPath: t.absolute, cwd: this.cwd }), !1; if (t.absolute === this.cwd && "Directory" !== t.type && "GNUDumpDir" !== t.type)
                        return !1; if (this.win32) {
                        var e_21 = o.win32.parse(t.absolute).root;
                        t.absolute = e_21 + a.encode(t.absolute.substr(e_21.length));
                        var i_20 = o.win32.parse(t.path).root;
                        t.path = i_20 + a.encode(t.path.substr(i_20.length));
                    } return !0; };
                    W.prototype[f] = function (t) { if (!this[k](t))
                        return t.resume(); switch (s.equal(typeof t.absolute, "string"), t.type) {
                        case "Directory":
                        case "GNUDumpDir": t.mode && (t.mode = 448 | t.mode);
                        case "File":
                        case "OldFile":
                        case "ContiguousFile":
                        case "Link":
                        case "SymbolicLink": return this[y](t);
                        default: return this[v](t);
                    } };
                    W.prototype[x] = function (t, e) { "CwdError" === t.name ? this.emit("error", t) : (this.warn("TAR_ENTRY_ERROR", t, { entry: e }), this[D](), e.resume()); };
                    W.prototype[L] = function (t, e, i) { l(d(t), { uid: this.uid, gid: this.gid, processUid: this.processUid, processGid: this.processGid, umask: this.processUmask, preserve: this.preservePaths, unlink: this.unlink, cache: this.dirCache, cwd: this.cwd, mode: e, noChmod: this.noChmod }, i); };
                    W.prototype[M] = function (t) { return this.forceChown || this.preserveOwner && ("number" == typeof t.uid && t.uid !== this.processUid || "number" == typeof t.gid && t.gid !== this.processGid) || "number" == typeof this.uid && this.uid !== this.processUid || "number" == typeof this.gid && this.gid !== this.processGid; };
                    W.prototype[F] = function (t) { return H(this.uid, t.uid, this.processUid); };
                    W.prototype[P] = function (t) { return H(this.gid, t.gid, this.processGid); };
                    W.prototype[_] = function (t, e) {
                        var _this = this;
                        var i = 4095 & t.mode || this.fmode, s = new h.WriteStream(t.absolute, { flags: j(t.size), mode: i, autoClose: !1 });
                        s.on("error", (function (i) { s.fd && n.close(s.fd, (function () { })), s.write = function () { return !0; }, _this[x](i, t), e(); }));
                        var r = 1;
                        var o = function (i) { if (i)
                            return s.fd && n.close(s.fd, (function () { })), _this[x](i, t), void e(); 0 == --r && n.close(s.fd, (function (i) { i ? _this[x](i, t) : _this[D](), e(); })); };
                        s.on("finish", (function (e) { var i = t.absolute, h = s.fd; if (t.mtime && !_this.noMtime) {
                            r++;
                            var e_22 = t.atime || new Date, s_4 = t.mtime;
                            n.futimes(h, e_22, s_4, (function (t) { return t ? n.utimes(i, e_22, s_4, (function (e) { return o(e && t); })) : o(); }));
                        } if (_this[M](t)) {
                            r++;
                            var e_23 = _this[F](t), s_5 = _this[P](t);
                            n.fchown(h, e_23, s_5, (function (t) { return t ? n.chown(i, e_23, s_5, (function (e) { return o(e && t); })) : o(); }));
                        } o(); }));
                        var l = this.transform && this.transform(t) || t;
                        l !== t && (l.on("error", (function (i) { _this[x](i, t), e(); })), t.pipe(l)), l.pipe(s);
                    };
                    W.prototype[R] = function (t, e) {
                        var _this = this;
                        var i = 4095 & t.mode || this.dmode;
                        this[L](t.absolute, i, (function (i) { if (i)
                            return _this[x](i, t), void e(); var s = 1; var r = function (i) { 0 == --s && (e(), _this[D](), t.resume()); }; t.mtime && !_this.noMtime && (s++, n.utimes(t.absolute, t.atime || new Date, t.mtime, r)), _this[M](t) && (s++, n.chown(t.absolute, _this[F](t), _this[P](t), r)), r(); }));
                    };
                    W.prototype[v] = function (t) { t.unsupported = !0, this.warn("TAR_ENTRY_UNSUPPORTED", "unsupported entry type: ".concat(t.type), { entry: t }), t.resume(); };
                    W.prototype[O] = function (t, e) { this[g](t, t.linkpath, "symlink", e); };
                    W.prototype[T] = function (t, e) { var i = d(o.resolve(this.cwd, t.linkpath)); this[g](t, i, "link", e); };
                    W.prototype[I] = function () { this[A]++; };
                    W.prototype[D] = function () { this[A]--, this[C](); };
                    W.prototype[B] = function (t) { this[D](), t.resume(); };
                    W.prototype[E] = function (t, e) { return "File" === t.type && !this.unlink && e.isFile() && e.nlink <= 1 && !G; };
                    W.prototype[y] = function (t) {
                        var _this = this;
                        this[I]();
                        var e = [t.path];
                        t.linkpath && e.push(t.linkpath), this.reservations.reserve(e, (function (e) { return _this[b](t, e); }));
                    };
                    W.prototype[w] = function (t) { "SymbolicLink" === t.type ? (function (t) { for (var _i = 0, _a = t.keys(); _i < _a.length; _i++) {
                        var e_24 = _a[_i];
                        t.delete(e_24);
                    } })(this.dirCache) : "Directory" !== t.type && (function (t, e) { e = Z(e); for (var _i = 0, _a = t.keys(); _i < _a.length; _i++) {
                        var i_21 = _a[_i];
                        var s_6 = Z(i_21);
                        s_6 !== e && 0 !== s_6.indexOf(e + "/") || t.delete(i_21);
                    } })(this.dirCache, t.absolute); };
                    W.prototype[b] = function (t, e) {
                        var _this = this;
                        this[w](t);
                        var i = function (i) { _this[w](t), e(i); }, s = function () { if (t.absolute !== _this.cwd) {
                            var e_25 = d(o.dirname(t.absolute));
                            if (e_25 !== _this.cwd)
                                return _this[L](e_25, _this.dmode, (function (e) { if (e)
                                    return _this[x](e, t), void i(); r(); }));
                        } r(); }, r = function () { n.lstat(t.absolute, (function (e, s) { if (s && (_this.keep || _this.newer && s.mtime > t.mtime))
                            return _this[B](t), void i(); if (e || _this[E](t, s))
                            return _this[S](null, t, i); if (s.isDirectory()) {
                            if ("Directory" === t.type) {
                                var e_26 = function (e) { return _this[S](e, t, i); };
                                return !_this.noChmod && t.mode && (4095 & s.mode) !== t.mode ? n.chmod(t.absolute, t.mode, e_26) : e_26();
                            }
                            if (t.absolute !== _this.cwd)
                                return n.rmdir(t.absolute, (function (e) { return _this[S](e, t, i); }));
                        } if (t.absolute === _this.cwd)
                            return _this[S](null, t, i); (function (t, e) { if (!G)
                            return n.unlink(t, e); var i = t + ".DELETE." + U.randomBytes(16).toString("hex"); n.rename(t, i, (function (t) { if (t)
                            return e(t); n.unlink(i, e); })); })(t.absolute, (function (e) { return _this[S](e, t, i); })); })); };
                        this[z] ? s() : (function () { _this[L](_this.cwd, _this.dmode, (function (e) { if (e)
                            return _this[x](e, t), void i(); _this[z] = !0, s(); })); })();
                    };
                    W.prototype[S] = function (t, e, i) { if (t)
                        return this[x](t, e), void i(); switch (e.type) {
                        case "File":
                        case "OldFile":
                        case "ContiguousFile": return this[_](e, i);
                        case "Link": return this[T](e, i);
                        case "SymbolicLink": return this[O](e, i);
                        case "Directory":
                        case "GNUDumpDir": return this[R](e, i);
                    } };
                    W.prototype[g] = function (t, e, i, s) {
                        var _this = this;
                        n[i](e, t.absolute, (function (e) { e ? _this[x](e, t) : (_this[D](), t.resume()), s(); }));
                    };
                    return W;
                }(r));
                var V = function (t) { try {
                    return [null, t()];
                }
                catch (t) {
                    return [t, null];
                } };
                W.Sync = /** @class */ (function (_super) {
                    __extends(Sync, _super);
                    function Sync() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Sync.prototype[S] = function (t, e) { return _super.prototype[S].call(this, t, e, (function () { })); };
                    Sync.prototype[y] = function (t) { if (this[w](t), !this[z]) {
                        var e_27 = this[L](this.cwd, this.dmode);
                        if (e_27)
                            return this[x](e_27, t);
                        this[z] = !0;
                    } if (t.absolute !== this.cwd) {
                        var e_28 = d(o.dirname(t.absolute));
                        if (e_28 !== this.cwd) {
                            var i_22 = this[L](e_28, this.dmode);
                            if (i_22)
                                return this[x](i_22, t);
                        }
                    } var _a = V((function () { return n.lstatSync(t.absolute); })), e = _a[0], i = _a[1]; if (i && (this.keep || this.newer && i.mtime > t.mtime))
                        return this[B](t); if (e || this[E](t, i))
                        return this[S](null, t); if (i.isDirectory()) {
                        if ("Directory" === t.type) {
                            var e_29 = !this.noChmod && t.mode && (4095 & i.mode) !== t.mode, s_7 = (e_29 ? V((function () { n.chmodSync(t.absolute, t.mode); })) : [])[0];
                            return this[S](s_7, t);
                        }
                        var e_30 = V((function () { return n.rmdirSync(t.absolute); }))[0];
                        this[S](e_30, t);
                    } var s = (t.absolute === this.cwd ? [] : V((function () { return (function (t) { if (!G)
                        return n.unlinkSync(t); var e = t + ".DELETE." + U.randomBytes(16).toString("hex"); n.renameSync(t, e), n.unlinkSync(e); })(t.absolute); })))[0]; this[S](s, t); };
                    Sync.prototype[_] = function (t, e) {
                        var _this = this;
                        var i = 4095 & t.mode || this.fmode, s = function (i) { var s; try {
                            n.closeSync(r);
                        }
                        catch (t) {
                            s = t;
                        } (i || s) && _this[x](i || s, t), e(); };
                        var r;
                        try {
                            r = n.openSync(t.absolute, j(t.size), i);
                        }
                        catch (t) {
                            return s(t);
                        }
                        var h = this.transform && this.transform(t) || t;
                        h !== t && (h.on("error", (function (e) { return _this[x](e, t); })), t.pipe(h)), h.on("data", (function (t) { try {
                            n.writeSync(r, t, 0, t.length);
                        }
                        catch (t) {
                            s(t);
                        } })), h.on("end", (function (e) { var i = null; if (t.mtime && !_this.noMtime) {
                            var e_31 = t.atime || new Date, s_8 = t.mtime;
                            try {
                                n.futimesSync(r, e_31, s_8);
                            }
                            catch (r) {
                                try {
                                    n.utimesSync(t.absolute, e_31, s_8);
                                }
                                catch (t) {
                                    i = r;
                                }
                            }
                        } if (_this[M](t)) {
                            var e_32 = _this[F](t), s_9 = _this[P](t);
                            try {
                                n.fchownSync(r, e_32, s_9);
                            }
                            catch (r) {
                                try {
                                    n.chownSync(t.absolute, e_32, s_9);
                                }
                                catch (t) {
                                    i = i || r;
                                }
                            }
                        } s(i); }));
                    };
                    Sync.prototype[R] = function (t, e) { var i = 4095 & t.mode || this.dmode, s = this[L](t.absolute, i); if (s)
                        return this[x](s, t), void e(); if (t.mtime && !this.noMtime)
                        try {
                            n.utimesSync(t.absolute, t.atime || new Date, t.mtime);
                        }
                        catch (s) { } if (this[M](t))
                        try {
                            n.chownSync(t.absolute, this[F](t), this[P](t));
                        }
                        catch (s) { } e(), t.resume(); };
                    Sync.prototype[L] = function (t, e) { try {
                        return l.sync(d(t), { uid: this.uid, gid: this.gid, processUid: this.processUid, processGid: this.processGid, umask: this.processUmask, preserve: this.preservePaths, unlink: this.unlink, cache: this.dirCache, cwd: this.cwd, mode: e });
                    }
                    catch (t) {
                        return t;
                    } };
                    Sync.prototype[g] = function (t, e, i, s) { try {
                        n[i + "Sync"](e, t.absolute), s(), t.resume();
                    }
                    catch (e) {
                        return this[x](e, t);
                    } };
                    return Sync;
                }(W)), t.exports = W;
            }, 5997: function (t, e, i) {
                "use strict";
                var s = i(2093), r = i(1746);
                t.exports = function (t, e, i) { var h = s(t); if (!h.file)
                    throw new TypeError("file is required"); if (h.gzip)
                    throw new TypeError("cannot append to compressed archives"); if (!e || !Array.isArray(e) || !e.length)
                    throw new TypeError("no files or directories specified"); return e = Array.from(e), n(h), r(h, e, i); };
                var n = function (t) { var e = t.filter; t.mtimeCache || (t.mtimeCache = new Map), t.filter = e ? function (i, s) { return e(i, s) && !(t.mtimeCache.get(i) > s.mtime); } : function (e, i) { return !(t.mtimeCache.get(e) > i.mtime); }; };
            }, 7902: function (t) {
                "use strict";
                t.exports = function (t) { return /** @class */ (function (_super) {
                    __extends(class_3, _super);
                    function class_3() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    class_3.prototype.warn = function (t, e, i) {
                        if (i === void 0) { i = {}; }
                        this.file && (i.file = this.file), this.cwd && (i.cwd = this.cwd), i.code = e instanceof Error && e.code || t, i.tarCode = t, this.strict || !1 === i.recoverable ? e instanceof Error ? this.emit("error", Object.assign(e, i)) : this.emit("error", Object.assign(new Error("".concat(t, ": ").concat(e)), i)) : (e instanceof Error && (i = Object.assign(e, i), e = e.message), this.emit("warn", i.tarCode, e, i));
                    };
                    return class_3;
                }(t)); };
            }, 619: function (t) {
                "use strict";
                var e = ["|", "<", ">", "?", ":"], i = e.map((function (t) { return String.fromCharCode(61440 + t.charCodeAt(0)); })), s = new Map(e.map((function (t, e) { return [t, i[e]]; }))), r = new Map(i.map((function (t, i) { return [t, e[i]]; })));
                t.exports = { encode: function (t) { return e.reduce((function (t, e) { return t.split(e).join(s.get(e)); }), t); }, decode: function (t) { return i.reduce((function (t, e) { return t.split(e).join(r.get(e)); }), t); } };
            }, 7620: function (t, e, i) {
                "use strict";
                var s = i(5736), r = i(4747), n = i(7134), h = i(7147), o = i(1017), l = i(2905), a = i(4922), c = function (t, e) { return e ? (t = l(t).replace(/^\.(\/|$)/, ""), a(e) + "/" + t) : l(t); }, u = Symbol("process"), d = Symbol("file"), p = Symbol("directory"), m = Symbol("symlink"), f = Symbol("hardlink"), y = Symbol("header"), b = Symbol("read"), w = Symbol("lstat"), E = Symbol("onlstat"), S = Symbol("onread"), _ = Symbol("onreadlink"), R = Symbol("openfile"), g = Symbol("onopenfile"), O = Symbol("close"), T = Symbol("mode"), v = Symbol("awaitDrain"), k = Symbol("ondrain"), L = Symbol("prefix"), x = Symbol("hadError"), A = i(7902), I = i(619), D = i(2214), N = i(7716), C = A(/** @class */ (function (_super) {
                    __extends(class_4, _super);
                    function class_4(t, e) {
                        var _this = this;
                        if (_this = _super.call(this, e = e || {}) || this, "string" != typeof t)
                            throw new TypeError("path is required");
                        _this.path = l(t), _this.portable = !!e.portable, _this.myuid = process.getuid && process.getuid() || 0, _this.myuser = process.env.USER || "", _this.maxReadSize = e.maxReadSize || 16777216, _this.linkCache = e.linkCache || new Map, _this.statCache = e.statCache || new Map, _this.preservePaths = !!e.preservePaths, _this.cwd = l(e.cwd || process.cwd()), _this.strict = !!e.strict, _this.noPax = !!e.noPax, _this.noMtime = !!e.noMtime, _this.mtime = e.mtime || null, _this.prefix = e.prefix ? l(e.prefix) : null, _this.fd = null, _this.blockLen = null, _this.blockRemain = null, _this.buf = null, _this.offset = null, _this.length = null, _this.pos = null, _this.remain = null, "function" == typeof e.onwarn && _this.on("warn", e.onwarn);
                        var i = !1;
                        if (!_this.preservePaths) {
                            var _a = D(_this.path), t_28 = _a[0], e_33 = _a[1];
                            t_28 && (_this.path = e_33, i = t_28);
                        }
                        _this.win32 = !!e.win32 || "win32" === process.platform, _this.win32 && (_this.path = I.decode(_this.path.replace(/\\/g, "/")), t = t.replace(/\\/g, "/")), _this.absolute = l(e.absolute || o.resolve(_this.cwd, t)), "" === _this.path && (_this.path = "./"), i && _this.warn("TAR_ENTRY_INFO", "stripping ".concat(i, " from absolute path"), { entry: _this, path: i + _this.path }), _this.statCache.has(_this.absolute) ? _this[E](_this.statCache.get(_this.absolute)) : _this[w]();
                        return _this;
                    }
                    class_4.prototype.emit = function (t) {
                        var e = [];
                        for (var _i = 1; _i < arguments.length; _i++) {
                            e[_i - 1] = arguments[_i];
                        }
                        return "error" === t && (this[x] = !0), _super.prototype.emit.apply(this, __spreadArray([t], e, false));
                    };
                    class_4.prototype[w] = function () {
                        var _this = this;
                        h.lstat(this.absolute, (function (t, e) { if (t)
                            return _this.emit("error", t); _this[E](e); }));
                    };
                    class_4.prototype[E] = function (t) { this.statCache.set(this.absolute, t), this.stat = t, t.isFile() || (t.size = 0), this.type = M(t), this.emit("stat", t), this[u](); };
                    class_4.prototype[u] = function () { switch (this.type) {
                        case "File": return this[d]();
                        case "Directory": return this[p]();
                        case "SymbolicLink": return this[m]();
                        default: return this.end();
                    } };
                    class_4.prototype[T] = function (t) { return N(t, "Directory" === this.type, this.portable); };
                    class_4.prototype[L] = function (t) { return c(t, this.prefix); };
                    class_4.prototype[y] = function () { "Directory" === this.type && this.portable && (this.noMtime = !0), this.header = new n({ path: this[L](this.path), linkpath: "Link" === this.type ? this[L](this.linkpath) : this.linkpath, mode: this[T](this.stat.mode), uid: this.portable ? null : this.stat.uid, gid: this.portable ? null : this.stat.gid, size: this.stat.size, mtime: this.noMtime ? null : this.mtime || this.stat.mtime, type: this.type, uname: this.portable ? null : this.stat.uid === this.myuid ? this.myuser : "", atime: this.portable ? null : this.stat.atime, ctime: this.portable ? null : this.stat.ctime }), this.header.encode() && !this.noPax && _super.prototype.write.call(this, new r({ atime: this.portable ? null : this.header.atime, ctime: this.portable ? null : this.header.ctime, gid: this.portable ? null : this.header.gid, mtime: this.noMtime ? null : this.mtime || this.header.mtime, path: this[L](this.path), linkpath: "Link" === this.type ? this[L](this.linkpath) : this.linkpath, size: this.header.size, uid: this.portable ? null : this.header.uid, uname: this.portable ? null : this.header.uname, dev: this.portable ? null : this.stat.dev, ino: this.portable ? null : this.stat.ino, nlink: this.portable ? null : this.stat.nlink }).encode()), _super.prototype.write.call(this, this.header.block); };
                    class_4.prototype[p] = function () { "/" !== this.path.substr(-1) && (this.path += "/"), this.stat.size = 0, this[y](), this.end(); };
                    class_4.prototype[m] = function () {
                        var _this = this;
                        h.readlink(this.absolute, (function (t, e) { if (t)
                            return _this.emit("error", t); _this[_](e); }));
                    };
                    class_4.prototype[_] = function (t) { this.linkpath = l(t), this[y](), this.end(); };
                    class_4.prototype[f] = function (t) { this.type = "Link", this.linkpath = l(o.relative(this.cwd, t)), this.stat.size = 0, this[y](), this.end(); };
                    class_4.prototype[d] = function () { if (this.stat.nlink > 1) {
                        var t_29 = this.stat.dev + ":" + this.stat.ino;
                        if (this.linkCache.has(t_29)) {
                            var e_34 = this.linkCache.get(t_29);
                            if (0 === e_34.indexOf(this.cwd))
                                return this[f](e_34);
                        }
                        this.linkCache.set(t_29, this.absolute);
                    } if (this[y](), 0 === this.stat.size)
                        return this.end(); this[R](); };
                    class_4.prototype[R] = function () {
                        var _this = this;
                        h.open(this.absolute, "r", (function (t, e) { if (t)
                            return _this.emit("error", t); _this[g](e); }));
                    };
                    class_4.prototype[g] = function (t) { if (this.fd = t, this[x])
                        return this[O](); this.blockLen = 512 * Math.ceil(this.stat.size / 512), this.blockRemain = this.blockLen; var e = Math.min(this.blockLen, this.maxReadSize); this.buf = Buffer.allocUnsafe(e), this.offset = 0, this.pos = 0, this.remain = this.stat.size, this.length = this.buf.length, this[b](); };
                    class_4.prototype[b] = function () {
                        var _this = this;
                        var _a = this, t = _a.fd, e = _a.buf, i = _a.offset, s = _a.length, r = _a.pos;
                        h.read(t, e, i, s, r, (function (t, e) { if (t)
                            return _this[O]((function () { return _this.emit("error", t); })); _this[S](e); }));
                    };
                    class_4.prototype[O] = function (t) { h.close(this.fd, t); };
                    class_4.prototype[S] = function (t) {
                        var _this = this;
                        if (t <= 0 && this.remain > 0) {
                            var t_30 = new Error("encountered unexpected EOF");
                            return t_30.path = this.absolute, t_30.syscall = "read", t_30.code = "EOF", this[O]((function () { return _this.emit("error", t_30); }));
                        }
                        if (t > this.remain) {
                            var t_31 = new Error("did not encounter expected EOF");
                            return t_31.path = this.absolute, t_31.syscall = "read", t_31.code = "EOF", this[O]((function () { return _this.emit("error", t_31); }));
                        }
                        if (t === this.remain)
                            for (var e_35 = t; e_35 < this.length && t < this.blockRemain; e_35++)
                                this.buf[e_35 + this.offset] = 0, t++, this.remain++;
                        var e = 0 === this.offset && t === this.buf.length ? this.buf : this.buf.slice(this.offset, this.offset + t);
                        this.write(e) ? this[k]() : this[v]((function () { return _this[k](); }));
                    };
                    class_4.prototype[v] = function (t) { this.once("drain", t); };
                    class_4.prototype.write = function (t) { if (this.blockRemain < t.length) {
                        var t_32 = new Error("writing more data than expected");
                        return t_32.path = this.absolute, this.emit("error", t_32);
                    } return this.remain -= t.length, this.blockRemain -= t.length, this.pos += t.length, this.offset += t.length, _super.prototype.write.call(this, t); };
                    class_4.prototype[k] = function () {
                        var _this = this;
                        if (!this.remain)
                            return this.blockRemain && _super.prototype.write.call(this, Buffer.alloc(this.blockRemain)), this[O]((function (t) { return t ? _this.emit("error", t) : _this.end(); }));
                        this.offset >= this.length && (this.buf = Buffer.allocUnsafe(Math.min(this.blockRemain, this.buf.length)), this.offset = 0), this.length = this.buf.length - this.offset, this[b]();
                    };
                    return class_4;
                }(s))), B = A(/** @class */ (function (_super) {
                    __extends(class_5, _super);
                    function class_5(t, e) {
                        var _this = this;
                        _this = _super.call(this, e = e || {}) || this, _this.preservePaths = !!e.preservePaths, _this.portable = !!e.portable, _this.strict = !!e.strict, _this.noPax = !!e.noPax, _this.noMtime = !!e.noMtime, _this.readEntry = t, _this.type = t.type, "Directory" === _this.type && _this.portable && (_this.noMtime = !0), _this.prefix = e.prefix || null, _this.path = l(t.path), _this.mode = _this[T](t.mode), _this.uid = _this.portable ? null : t.uid, _this.gid = _this.portable ? null : t.gid, _this.uname = _this.portable ? null : t.uname, _this.gname = _this.portable ? null : t.gname, _this.size = t.size, _this.mtime = _this.noMtime ? null : e.mtime || t.mtime, _this.atime = _this.portable ? null : t.atime, _this.ctime = _this.portable ? null : t.ctime, _this.linkpath = l(t.linkpath), "function" == typeof e.onwarn && _this.on("warn", e.onwarn);
                        var i = !1;
                        if (!_this.preservePaths) {
                            var _a = D(_this.path), t_33 = _a[0], e_36 = _a[1];
                            t_33 && (_this.path = e_36, i = t_33);
                        }
                        _this.remain = t.size, _this.blockRemain = t.startBlockSize, _this.header = new n({ path: _this[L](_this.path), linkpath: "Link" === _this.type ? _this[L](_this.linkpath) : _this.linkpath, mode: _this.mode, uid: _this.portable ? null : _this.uid, gid: _this.portable ? null : _this.gid, size: _this.size, mtime: _this.noMtime ? null : _this.mtime, type: _this.type, uname: _this.portable ? null : _this.uname, atime: _this.portable ? null : _this.atime, ctime: _this.portable ? null : _this.ctime }), i && _this.warn("TAR_ENTRY_INFO", "stripping ".concat(i, " from absolute path"), { entry: _this, path: i + _this.path }), _this.header.encode() && !_this.noPax && _super.prototype.write.call(_this, new r({ atime: _this.portable ? null : _this.atime, ctime: _this.portable ? null : _this.ctime, gid: _this.portable ? null : _this.gid, mtime: _this.noMtime ? null : _this.mtime, path: _this[L](_this.path), linkpath: "Link" === _this.type ? _this[L](_this.linkpath) : _this.linkpath, size: _this.size, uid: _this.portable ? null : _this.uid, uname: _this.portable ? null : _this.uname, dev: _this.portable ? null : _this.readEntry.dev, ino: _this.portable ? null : _this.readEntry.ino, nlink: _this.portable ? null : _this.readEntry.nlink }).encode()), _super.prototype.write.call(_this, _this.header.block), t.pipe(_this);
                        return _this;
                    }
                    class_5.prototype[L] = function (t) { return c(t, this.prefix); };
                    class_5.prototype[T] = function (t) { return N(t, "Directory" === this.type, this.portable); };
                    class_5.prototype.write = function (t) { var e = t.length; if (e > this.blockRemain)
                        throw new Error("writing more to entry than is appropriate"); return this.blockRemain -= e, _super.prototype.write.call(this, t); };
                    class_5.prototype.end = function () { return this.blockRemain && _super.prototype.write.call(this, Buffer.alloc(this.blockRemain)), _super.prototype.end.call(this); };
                    return class_5;
                }(s)));
                C.Sync = /** @class */ (function (_super) {
                    __extends(Sync, _super);
                    function Sync() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Sync.prototype[w] = function () { this[E](h.lstatSync(this.absolute)); };
                    Sync.prototype[m] = function () { this[_](h.readlinkSync(this.absolute)); };
                    Sync.prototype[R] = function () { this[g](h.openSync(this.absolute, "r")); };
                    Sync.prototype[b] = function () { var t = !0; try {
                        var _a = this, e_37 = _a.fd, i_23 = _a.buf, s_10 = _a.offset, r_4 = _a.length, n_1 = _a.pos, o_2 = h.readSync(e_37, i_23, s_10, r_4, n_1);
                        this[S](o_2), t = !1;
                    }
                    finally {
                        if (t)
                            try {
                                this[O]((function () { }));
                            }
                            catch (t) { }
                    } };
                    Sync.prototype[v] = function (t) { t(); };
                    Sync.prototype[O] = function (t) { h.closeSync(this.fd), t(); };
                    return Sync;
                }(C)), C.Tar = B;
                var M = function (t) { return t.isFile() ? "File" : t.isDirectory() ? "Directory" : t.isSymbolicLink() ? "SymbolicLink" : "Unsupported"; };
                t.exports = C;
            }, 9602: function (t) {
                "use strict";
                t.exports = function (t) { t.prototype[Symbol.iterator] = function () { var t_34; return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            t_34 = this.head;
                            _a.label = 1;
                        case 1:
                            if (!t_34) return [3 /*break*/, 4];
                            return [4 /*yield*/, t_34.value];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            t_34 = t_34.next;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                }); }; };
            }, 4411: function (t, e, i) {
                "use strict";
                function s(t) { var e = this; if (e instanceof s || (e = new s), e.tail = null, e.head = null, e.length = 0, t && "function" == typeof t.forEach)
                    t.forEach((function (t) { e.push(t); }));
                else if (arguments.length > 0)
                    for (var i = 0, r = arguments.length; i < r; i++)
                        e.push(arguments[i]); return e; }
                function r(t, e) { t.tail = new h(e, t.tail, null, t), t.head || (t.head = t.tail), t.length++; }
                function n(t, e) { t.head = new h(e, null, t.head, t), t.tail || (t.tail = t.head), t.length++; }
                function h(t, e, i, s) { if (!(this instanceof h))
                    return new h(t, e, i, s); this.list = s, this.value = t, e ? (e.next = this, this.prev = e) : this.prev = null, i ? (i.prev = this, this.next = i) : this.next = null; }
                t.exports = s, s.Node = h, s.create = s, s.prototype.removeNode = function (t) { if (t.list !== this)
                    throw new Error("removing node which does not belong to this list"); var e = t.next, i = t.prev; return e && (e.prev = i), i && (i.next = e), t === this.head && (this.head = e), t === this.tail && (this.tail = i), t.list.length--, t.next = null, t.prev = null, t.list = null, e; }, s.prototype.unshiftNode = function (t) { if (t !== this.head) {
                    t.list && t.list.removeNode(t);
                    var e = this.head;
                    t.list = this, t.next = e, e && (e.prev = t), this.head = t, this.tail || (this.tail = t), this.length++;
                } }, s.prototype.pushNode = function (t) { if (t !== this.tail) {
                    t.list && t.list.removeNode(t);
                    var e = this.tail;
                    t.list = this, t.prev = e, e && (e.next = t), this.tail = t, this.head || (this.head = t), this.length++;
                } }, s.prototype.push = function () { for (var t = 0, e = arguments.length; t < e; t++)
                    r(this, arguments[t]); return this.length; }, s.prototype.unshift = function () { for (var t = 0, e = arguments.length; t < e; t++)
                    n(this, arguments[t]); return this.length; }, s.prototype.pop = function () { if (this.tail) {
                    var t = this.tail.value;
                    return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, t;
                } }, s.prototype.shift = function () { if (this.head) {
                    var t = this.head.value;
                    return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, t;
                } }, s.prototype.forEach = function (t, e) { e = e || this; for (var i = this.head, s = 0; null !== i; s++)
                    t.call(e, i.value, s, this), i = i.next; }, s.prototype.forEachReverse = function (t, e) { e = e || this; for (var i = this.tail, s = this.length - 1; null !== i; s--)
                    t.call(e, i.value, s, this), i = i.prev; }, s.prototype.get = function (t) { for (var e = 0, i = this.head; null !== i && e < t; e++)
                    i = i.next; if (e === t && null !== i)
                    return i.value; }, s.prototype.getReverse = function (t) { for (var e = 0, i = this.tail; null !== i && e < t; e++)
                    i = i.prev; if (e === t && null !== i)
                    return i.value; }, s.prototype.map = function (t, e) { e = e || this; for (var i = new s, r = this.head; null !== r;)
                    i.push(t.call(e, r.value, this)), r = r.next; return i; }, s.prototype.mapReverse = function (t, e) { e = e || this; for (var i = new s, r = this.tail; null !== r;)
                    i.push(t.call(e, r.value, this)), r = r.prev; return i; }, s.prototype.reduce = function (t, e) { var i, s = this.head; if (arguments.length > 1)
                    i = e;
                else {
                    if (!this.head)
                        throw new TypeError("Reduce of empty list with no initial value");
                    s = this.head.next, i = this.head.value;
                } for (var r = 0; null !== s; r++)
                    i = t(i, s.value, r), s = s.next; return i; }, s.prototype.reduceReverse = function (t, e) { var i, s = this.tail; if (arguments.length > 1)
                    i = e;
                else {
                    if (!this.tail)
                        throw new TypeError("Reduce of empty list with no initial value");
                    s = this.tail.prev, i = this.tail.value;
                } for (var r = this.length - 1; null !== s; r--)
                    i = t(i, s.value, r), s = s.prev; return i; }, s.prototype.toArray = function () { for (var t = new Array(this.length), e = 0, i = this.head; null !== i; e++)
                    t[e] = i.value, i = i.next; return t; }, s.prototype.toArrayReverse = function () { for (var t = new Array(this.length), e = 0, i = this.tail; null !== i; e++)
                    t[e] = i.value, i = i.prev; return t; }, s.prototype.slice = function (t, e) { (e = e || this.length) < 0 && (e += this.length), (t = t || 0) < 0 && (t += this.length); var i = new s; if (e < t || e < 0)
                    return i; t < 0 && (t = 0), e > this.length && (e = this.length); for (var r = 0, n = this.head; null !== n && r < t; r++)
                    n = n.next; for (; null !== n && r < e; r++, n = n.next)
                    i.push(n.value); return i; }, s.prototype.sliceReverse = function (t, e) { (e = e || this.length) < 0 && (e += this.length), (t = t || 0) < 0 && (t += this.length); var i = new s; if (e < t || e < 0)
                    return i; t < 0 && (t = 0), e > this.length && (e = this.length); for (var r = this.length, n = this.tail; null !== n && r > e; r--)
                    n = n.prev; for (; null !== n && r > t; r--, n = n.prev)
                    i.push(n.value); return i; }, s.prototype.splice = function (t, e) {
                    var i = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        i[_i - 2] = arguments[_i];
                    }
                    t > this.length && (t = this.length - 1), t < 0 && (t = this.length + t);
                    for (var s = 0, r = this.head; null !== r && s < t; s++)
                        r = r.next;
                    var n, o, l, a, c = [];
                    for (s = 0; r && s < e; s++)
                        c.push(r.value), r = this.removeNode(r);
                    for (null === r && (r = this.tail), r !== this.head && r !== this.tail && (r = r.prev), s = 0; s < i.length; s++)
                        n = this, o = r, l = i[s], a = void 0, null === (a = o === n.head ? new h(l, null, o, n) : new h(l, o, o.next, n)).next && (n.tail = a), null === a.prev && (n.head = a), n.length++, r = a;
                    return c;
                }, s.prototype.reverse = function () { for (var t = this.head, e = this.tail, i = t; null !== i; i = i.prev) {
                    var s = i.prev;
                    i.prev = i.next, i.next = s;
                } return this.head = e, this.tail = t, this; };
                try {
                    i(9602)(s);
                }
                catch (t) { }
            }, 9491: function (t) {
                "use strict";
                t.exports = require("assert");
            }, 4300: function (t) {
                "use strict";
                t.exports = require("buffer");
            }, 6113: function (t) {
                "use strict";
                t.exports = require("crypto");
            }, 2361: function (t) {
                "use strict";
                t.exports = require("events");
            }, 7147: function (t) {
                "use strict";
                t.exports = require("fs");
            }, 1017: function (t) {
                "use strict";
                t.exports = require("path");
            }, 2781: function (t) {
                "use strict";
                t.exports = require("stream");
            }, 1576: function (t) {
                "use strict";
                t.exports = require("string_decoder");
            }, 3837: function (t) {
                "use strict";
                t.exports = require("util");
            }, 9796: function (t) {
                "use strict";
                t.exports = require("zlib");
            } }, e = {}; function i(s) { var r = e[s]; if (void 0 !== r)
            return r.exports; var n = e[s] = { exports: {} }; return t[s](n, n.exports, i), n.exports; } (function () { var t = i(7998).x; ___resolve(t); })(); })(); });
    }
    Tar.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.inited) return [3 /*break*/, 1];
                        _a = this.func;
                        return [3 /*break*/, 3];
                    case 1:
                        _b = this;
                        return [4 /*yield*/, this.promise];
                    case 2:
                        _a = _b.func = _c.sent();
                        _c.label = 3;
                    case 3: return [2 /*return*/, _a];
                }
            });
        });
    };
    return Tar;
}());
var ModuleLoader = /** @class */ (function () {
    function ModuleLoader(basepath) {
        this.cache = {};
        basepath = path_1.default.join(basepath, 'node_modules');
        this.basepath = basepath;
        fs_1.default.promises.mkdir(basepath, { recursive: true });
        fs_1.default.promises.mkdir(path_1.default.join(basepath, '..', '_RAW_'), { recursive: true });
        this.tar = new Tar();
    }
    ModuleLoader.prototype.download = function (url, filename) {
        return __awaiter(this, void 0, void 0, function () {
            var filepath, response, data, _a, _b, _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        filepath = path_1.default.join(this.basepath, '..', '_RAW_', filename);
                        return [4 /*yield*/, fetch(url)];
                    case 1:
                        response = _f.sent();
                        return [4 /*yield*/, response.blob()];
                    case 2:
                        data = _f.sent();
                        _b = (_a = fs_1.default.promises).writeFile;
                        _c = [filepath];
                        _e = (_d = Buffer).from;
                        return [4 /*yield*/, data.arrayBuffer()];
                    case 3: return [4 /*yield*/, _b.apply(_a, _c.concat([_e.apply(_d, [_f.sent()])]))];
                    case 4:
                        _f.sent();
                        return [2 /*return*/, filepath];
                }
            });
        });
    };
    ModuleLoader.prototype.geturl = function (module, version) {
        return __awaiter(this, void 0, void 0, function () {
            var res, json, pversion, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("https://registry.npmjs.org/".concat(module), {
                            headers: {
                                Accept: 'application/vnd.npm.install-v1+json'
                            }
                        })];
                    case 1:
                        res = _a.sent();
                        if (res.status !== 200) {
                            throw new Error("Module ".concat(module, " not found"));
                        }
                        return [4 /*yield*/, res.json()];
                    case 2:
                        json = _a.sent();
                        pversion = version !== null && version !== void 0 ? version : json['dist-tags'].latest;
                        url = json.versions[pversion].dist.tarball;
                        return [2 /*return*/, {
                                url: url,
                                _version: pversion,
                            }];
                }
            });
        });
    };
    ModuleLoader.prototype.require = function (module, version) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, url, _version, fpath, folder, tarx, pkg, entry, file, _i, _c, key, vers, loaded;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.geturl(module, version)];
                    case 1:
                        _b = _d.sent(), url = _b.url, _version = _b._version;
                        version = version || _version;
                        if (!!this.cache[module]) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.download(url, "".concat(module, ".tgz"))];
                    case 2:
                        fpath = _d.sent();
                        folder = path_1.default.join(this.basepath, module);
                        return [4 /*yield*/, fs_1.default.promises.mkdir(folder, { recursive: true })];
                    case 3:
                        _d.sent();
                        return [4 /*yield*/, this.tar.init()];
                    case 4:
                        tarx = _d.sent();
                        return [4 /*yield*/, tarx({
                                C: folder,
                                file: fpath,
                                strip: 1,
                            })];
                    case 5:
                        _d.sent();
                        pkg = require(path_1.default.resolve(path_1.default.join(folder, 'package.json')));
                        entry = (pkg === null || pkg === void 0 ? void 0 : pkg.main) || 'index.js';
                        file = path_1.default.join(folder, entry);
                        _i = 0, _c = Object.keys(pkg.dependencies || {});
                        _d.label = 6;
                    case 6:
                        if (!(_i < _c.length)) return [3 /*break*/, 9];
                        key = _c[_i];
                        vers = ((_a = pkg.dependencies[key].match(/(\d+\.\d+\.\d+)/)) === null || _a === void 0 ? void 0 : _a[1]) || undefined;
                        if (key.startsWith('file:'))
                            return [3 /*break*/, 8];
                        if (key.startsWith('@types/'))
                            return [3 /*break*/, 8];
                        return [4 /*yield*/, this.require(key, vers)];
                    case 7:
                        _d.sent();
                        _d.label = 8;
                    case 8:
                        _i++;
                        return [3 /*break*/, 6];
                    case 9:
                        loaded = require(path_1.default.resolve(file));
                        this.cache["".concat(module, "@").concat(version)] = loaded;
                        _d.label = 10;
                    case 10: return [2 /*return*/, this.cache["".concat(module, "@").concat(version)]];
                }
            });
        });
    };
    return ModuleLoader;
}());
//# sourceMappingURL=index.js.map