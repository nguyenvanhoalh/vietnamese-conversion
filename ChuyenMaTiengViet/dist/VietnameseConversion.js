"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VietnameseConversion = void 0;
var charsets_1 = __importDefault(require("./charsets"));
var VietnameseConversion = /** @class */ (function () {
    function VietnameseConversion(text, charset) {
        this._charsets = charsets_1.default;
        if (!this.isValidCharset(charset)) {
            throw Error('Charset is not valid');
        }
        this._text = text;
        this._chartset = charset.toUpperCase();
    }
    VietnameseConversion.prototype.isValidCharset = function (charset) {
        var charsetNames = Object.keys(this._charsets);
        return charsetNames.indexOf(charset.toUpperCase()) > -1;
    };
    VietnameseConversion.prototype.getCharsArray = function (charset) {
        return this._charsets[charset];
    };
    VietnameseConversion.prototype.toCharset = function (charset) {
        if (!this.isValidCharset(charset)) {
            throw Error('Charset is not valid');
        }
        if (this._chartset === charset.toUpperCase()) {
            return this._text;
        }
        var fromCharsArray = this.getCharsArray(this._chartset);
        var toCharsArray = this.getCharsArray(charset.toUpperCase());
        var countChars = fromCharsArray.length;
        var text = this._text;
        for (var i = 0; i < countChars; i++) {
            var char = fromCharsArray[i];
            var re = new RegExp(char, 'g');
            text = text.replace(re, "::".concat(i, "::"));
        }
        for (var i = 0; i < countChars; i++) {
            var char = toCharsArray[i];
            var re = new RegExp("::".concat(i, "::"), 'g');
            text = text.replace(re, char);
        }
        return text;
    };
    return VietnameseConversion;
}());
exports.VietnameseConversion = VietnameseConversion;
exports.default = VietnameseConversion;
