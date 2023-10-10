"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toWINDOWS1258 = exports.toNCRHEX = exports.toNCRDECIMAL = exports.toUTF8 = exports.toVIETWAREF = exports.toVIETWAREX = exports.toBKHCM1 = exports.toBKHCM2 = exports.toVPS = exports.toVISCII = exports.toVIQR = exports.toVNI = exports.toTCVN3 = exports.toUnicode = void 0;
var VietnameseConversion_1 = __importDefault(require("./VietnameseConversion"));
function toUnicode(text, currentCharset) {
    var conversion = new VietnameseConversion_1.default(text, currentCharset);
    return conversion.toCharset('unicode');
}
exports.toUnicode = toUnicode;
function toTCVN3(text, currentCharset) {
    var conversion = new VietnameseConversion_1.default(text, currentCharset);
    return conversion.toCharset('tcvn3');
}
exports.toTCVN3 = toTCVN3;
function toVNI(text, currentCharset) {
    var conversion = new VietnameseConversion_1.default(text, currentCharset);
    return conversion.toCharset('vni');
}
exports.toVNI = toVNI;
function toVIQR(text, currentCharset) {
    var conversion = new VietnameseConversion_1.default(text, currentCharset);
    return conversion.toCharset('viqr');
}
exports.toVIQR = toVIQR;
function toVISCII(text, currentCharset) {
    var conversion = new VietnameseConversion_1.default(text, currentCharset);
    return conversion.toCharset('viscii');
}
exports.toVISCII = toVISCII;
function toVPS(text, currentCharset) {
    var conversion = new VietnameseConversion_1.default(text, currentCharset);
    return conversion.toCharset('vps');
}
exports.toVPS = toVPS;
function toBKHCM2(text, currentCharset) {
    var conversion = new VietnameseConversion_1.default(text, currentCharset);
    return conversion.toCharset('bkhcm2');
}
exports.toBKHCM2 = toBKHCM2;
function toBKHCM1(text, currentCharset) {
    var conversion = new VietnameseConversion_1.default(text, currentCharset);
    return conversion.toCharset('bkhcm1');
}
exports.toBKHCM1 = toBKHCM1;
function toVIETWAREX(text, currentCharset) {
    var conversion = new VietnameseConversion_1.default(text, currentCharset);
    return conversion.toCharset('vietwarex');
}
exports.toVIETWAREX = toVIETWAREX;
function toVIETWAREF(text, currentCharset) {
    var conversion = new VietnameseConversion_1.default(text, currentCharset);
    return conversion.toCharset('vietwaref');
}
exports.toVIETWAREF = toVIETWAREF;
function toUTF8(text, currentCharset) {
    var conversion = new VietnameseConversion_1.default(text, currentCharset);
    return conversion.toCharset('utf8');
}
exports.toUTF8 = toUTF8;
function toNCRDECIMAL(text, currentCharset) {
    var conversion = new VietnameseConversion_1.default(text, currentCharset);
    return conversion.toCharset('ncrdecimal');
}
exports.toNCRDECIMAL = toNCRDECIMAL;
function toNCRHEX(text, currentCharset) {
    var conversion = new VietnameseConversion_1.default(text, currentCharset);
    return conversion.toCharset('ncrhex');
}
exports.toNCRHEX = toNCRHEX;
function toWINDOWS1258(text, currentCharset) {
    var conversion = new VietnameseConversion_1.default(text, currentCharset);
    return conversion.toCharset('windows1258');
}
exports.toWINDOWS1258 = toWINDOWS1258;
