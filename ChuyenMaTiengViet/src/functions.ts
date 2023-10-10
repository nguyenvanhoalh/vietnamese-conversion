import VietnameseConversion from './VietnameseConversion';

export function toUnicode(text: string, currentCharset: string) {
  const conversion = new VietnameseConversion(text, currentCharset);

  return conversion.toCharset('unicode');
}

export function toTCVN3(text: string, currentCharset: string) {
    const conversion = new VietnameseConversion(text, currentCharset);

    return conversion.toCharset('tcvn3');
}

export function toVNI(text: string, currentCharset: string) {
  const conversion = new VietnameseConversion(text, currentCharset);

  return conversion.toCharset('vni');
}

export function toVIQR(text: string, currentCharset: string) {
  const conversion = new VietnameseConversion(text, currentCharset);

  return conversion.toCharset('viqr');
}

export function toVISCII(text: string, currentCharset: string) {
    const conversion = new VietnameseConversion(text, currentCharset);

    return conversion.toCharset('viscii');
}

export function toVPS(text: string, currentCharset: string) {
    const conversion = new VietnameseConversion(text, currentCharset);

    return conversion.toCharset('vps');
}

export function toBKHCM2(text: string, currentCharset: string) {
    const conversion = new VietnameseConversion(text, currentCharset);

    return conversion.toCharset('bkhcm2');
}

export function toBKHCM1(text: string, currentCharset: string) {
    const conversion = new VietnameseConversion(text, currentCharset);

    return conversion.toCharset('bkhcm1');
}

export function toVIETWAREX(text: string, currentCharset: string) {
    const conversion = new VietnameseConversion(text, currentCharset);

    return conversion.toCharset('vietwarex');
}

export function toVIETWAREF(text: string, currentCharset: string) {
    const conversion = new VietnameseConversion(text, currentCharset);

    return conversion.toCharset('vietwaref');
}

export function toUTF8(text: string, currentCharset: string) {
    const conversion = new VietnameseConversion(text, currentCharset);

    return conversion.toCharset('utf8');
}

export function toNCRDECIMAL(text: string, currentCharset: string) {
    const conversion = new VietnameseConversion(text, currentCharset);

    return conversion.toCharset('ncrdecimal');
}

export function toNCRHEX(text: string, currentCharset: string) {
    const conversion = new VietnameseConversion(text, currentCharset);

    return conversion.toCharset('ncrhex');
}