var chuyenMaNhanh;

(() => {
    "use strict";
    var e = {
            508: function (e, t, r) {
                var o = this && this.__importDefault || function (e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.VietnameseConversion = void 0;
                var a = o(r(812)),
                    n = function () {
                        function e(e, t) {
                            if (this._charsets = a.default, !this.isValidCharset(t)) throw Error("Charset is not valid");
                            this._text = e, this._chartset = t.toUpperCase()
                        }
                        return e.prototype.isValidCharset = function (e) {
                            return Object.keys(this._charsets).indexOf(e.toUpperCase()) > -1
                        }, e.prototype.getCharsArray = function (e) {
                            return this._charsets[e]
                        }, e.prototype.toCharset = function (e) {
                            if (!this.isValidCharset(e)) throw Error("Charset is not valid");
                            if (this._chartset === e.toUpperCase()) return this._text;
                            for (var t = this.getCharsArray(this._chartset), r = this.getCharsArray(e.toUpperCase()), o = t.length, a = this._text, n = 0; n < o; n++) {
                                var i = t[n],
                                    u = new RegExp(i, "g");
                                a = a.replace(u, "::".concat(n, "::"))
                            }
                            for (n = 0; n < o; n++) i = r[n], u = new RegExp("::".concat(n, "::"), "g"), a = a.replace(u, i);
                            return a
                        }, e
                    }();
                t.VietnameseConversion = n, t.default = n
            },
            812: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                t.default = {
                    UNICODE: ["À", "Á", "Â", "Ã", "È", "É", "Ê", "Ì", "Í", "Ò", "Ó", "Ô", "Õ", "Ù", "Ú", "Ý", "à", "á", "â", "ã", "è", "é", "ê", "ì", "í", "ò", "ó", "ô", "õ", "ù", "ú", "ý", "Ă", "ă", "Đ", "đ", "Ĩ", "ĩ", "Ũ", "ũ", "Ơ", "ơ", "Ư", "ư", "Ạ", "ạ", "Ả", "ả", "Ấ", "ấ", "Ầ", "ầ", "Ẩ", "ẩ", "Ẫ", "ẫ", "Ậ", "ậ", "Ắ", "ắ", "Ằ", "ằ", "Ẳ", "ẳ", "Ẵ", "ẵ", "Ặ", "ặ", "Ẹ", "ẹ", "Ẻ", "ẻ", "Ẽ", "ẽ", "Ế", "ế", "Ề", "ề", "Ể", "ể", "Ễ", "ễ", "Ệ", "ệ", "Ỉ", "ỉ", "Ị", "ị", "Ọ", "ọ", "Ỏ", "ỏ", "Ố", "ố", "Ồ", "ồ", "Ổ", "ổ", "Ỗ", "ỗ", "Ộ", "ộ", "Ớ", "ớ", "Ờ", "ờ", "Ở", "ở", "Ỡ", "ỡ", "Ợ", "ợ", "Ụ", "ụ", "Ủ", "ủ", "Ứ", "ứ", "Ừ", "ừ", "Ử", "ử", "Ữ", "ữ", "Ự", "ự", "Ỳ", "ỳ", "Ỵ", "ỵ", "Ỷ", "ỷ", "Ỹ", "ỹ"],
                    VNI: ["AØ", "AÙ", "AÂ", "AÕ", "EØ", "EÙ", "EÂ", "Ì", "Í", "OØ", "OÙ", "OÂ", "OÕ", "UØ", "UÙ", "YÙ", "aø", "aù", "aâ", "aõ", "eø", "eù", "eâ", "ì", "í", "oø", "où", "oâ", "oõ", "uø", "uù", "yù", "AÊ", "aê", "Ñ", "ñ", "Ó", "ó", "UÕ", "uõ", "Ô", "ô", "Ö", "ö", "AÏ", "aï", "AÛ", "aû", "AÁ", "aá", "AÀ", "aà", "AÅ", "aå", "AÃ", "aã", "AÄ", "aä", "AÉ", "aé", "AÈ", "aè", "AÚ", "aú", "AÜ", "aü", "AË", "aë", "EÏ", "eï", "EÛ", "eû", "EÕ", "eõ", "EÁ", "eá", "EÀ", "eà", "EÅ", "eå", "EÃ", "eã", "EÄ", "eä", "Æ", "æ", "Ò", "ò", "OÏ", "oï", "OÛ", "oû", "OÁ", "oá", "OÀ", "oà", "OÅ", "oå", "OÃ", "oã", "OÄ", "oä", "ÔÙ", "ôù", "ÔØ", "ôø", "ÔÛ", "ôû", "ÔÕ", "ôõ", "ÔÏ", "ôï", "UÏ", "uï", "UÛ", "uû", "ÖÙ", "öù", "ÖØ", "öø", "ÖÛ", "öû", "ÖÕ", "öõ", "ÖÏ", "öï", "YØ", "yø", "Î", "î", "YÛ", "yû", "YÕ", "yõ"],
                    TCVN3: ["Aµ", "A¸", "¢", "A·", "EÌ", "EÐ", "£", "I×", "IÝ", "Oß", "Oã", "¤", "Oâ", "Uï", "Uó", "Yý", "µ", "¸", "©", "·", "Ì", "Ð", "ª", "×", "Ý", "ß", "ã", "«", "â", "ï", "ó", "ý", "¡", "¨", "§", "®", "IÜ", "Ü", "Uò", "ò", "¥", "¬", "¦", "­", "A¹", "¹", "A¶", "¶", "¢Ê", "Ê", "¢Ç", "Ç", "¢È", "È", "¢É", "É", "¢Ë", "Ë", "¡¾", "¾", "¡»", "»", "¡¼", "¼", "¡½", "½", "¡Æ", "Æ", "EÑ", "Ñ", "EÎ", "Î", "EÏ", "Ï", "£Õ", "Õ", "£Ò", "Ò", "£Ó", "Ó", "£Ô", "Ô", "£Ö", "Ö", "IØ", "Ø", "IÞ", "Þ", "Oä", "ä", "Oá", "á", "¤è", "è", "¤å", "å", "¤æ", "æ", "¤ç", "ç", "¤é", "é", "¥í", "í", "¥ê", "ê", "¥ë", "ë", "¥ì", "ì", "¥î", "î", "Uô", "ô", "Uñ", "ñ", "¦ø", "ø", "¦õ", "õ", "¦ö", "ö", "¦÷", "÷", "¦ù", "ù", "Yú", "ú", "Yþ", "þ", "Yû", "û", "Yü", "ü"],
                    VIQR: ["A`", "A'", "A^", "A~", "E`", "E'", "E^", "I`", "I'", "O`", "O'", "O^", "O~", "U`", "U'", "Y'", "a`", "a'", "a^", "a~", "e`", "e'", "e^", "i`", "i'", "o`", "o'", "o^", "o~", "u`", "u'", "y'", "A(", "a(", "DD", "dd", "I~", "i~", "U~", "u~", "O+", "o+", "U+", "u+", "A.", "a.", "A?", "a?", "A^'", "a^'", "A^`", "a^`", "A^?", "a^?", "A^~", "a^~", "A^.", "a^.", "A('", "a('", "A(`", "a(`", "A(?", "a(?", "A(~", "a(~", "A(.", "a(.", "E.", "e.", "E?", "e?", "E~", "e~", "E^'", "e^'", "E^`", "e^`", "E^?", "e^?", "E^~", "e^~", "E^.", "e^.", "I?", "i?", "I.", "i.", "O.", "o.", "O?", "o?", "O^'", "o^'", "O^`", "o^`", "O^?", "o^?", "O^~", "o^~", "O^.", "o^.", "O+'", "o+'", "O+`", "o+`", "O+?", "o+?", "O+~", "o+~", "O+.", "o+.", "U.", "u.", "U?", "u?", "U+'", "u+'", "U+`", "u+`", "U+?", "u+?", "U+~", "u+~", "U+.", "u+.", "Y`", "y`", "Y.", "y.", "Y?", "y?", "Y~", "y~"]
                }
            },
            89: function (e, t, r) {
                var o = this && this.__importDefault || function (e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.toVIQR = t.toTCVN3 = t.toVNI = t.toUnicode = void 0;
                var a = o(r(508));
                t.toUnicode = function (e, t) {
                    return new a.default(e, t).toCharset("unicode")
                }, t.toVNI = function (e, t) {
                    return new a.default(e, t).toCharset("vni")
                }, t.toTCVN3 = function (e, t) {
                    return new a.default(e, t).toCharset("tcvn3")
                }, t.toVIQR = function (e, t) {
                    return new a.default(e, t).toCharset("viqr")
                }
            },
            193: function (e, t, r) {
                var o = this && this.__createBinding || (Object.create ? function (e, t, r, o) {
                        void 0 === o && (o = r);
                        var a = Object.getOwnPropertyDescriptor(t, r);
                        a && !("get" in a ? !t.__esModule : a.writable || a.configurable) || (a = {
                            enumerable: !0,
                            get: function () {
                                return t[r]
                            }
                        }), Object.defineProperty(e, o, a)
                    } : function (e, t, r, o) {
                        void 0 === o && (o = r), e[o] = t[r]
                    }),
                    a = this && this.__exportStar || function (e, t) {
                        for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || o(t, e, r)
                    },
                    n = this && this.__importDefault || function (e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.VietnameseConversion = void 0;
                var i = r(508);
                Object.defineProperty(t, "VietnameseConversion", {
                    enumerable: !0,
                    get: function () {
                        return n(i).default
                    }
                }), a(r(89), t)
            }
        },
        t = {};
        chuyenMaNhanh = function r(o) {
        var a = t[o];
        if (void 0 !== a) return a.exports;
        var n = t[o] = {
            exports: {}
        };
        return e[o].call(n.exports, n, n.exports, r), n.exports
    }(193)
})();