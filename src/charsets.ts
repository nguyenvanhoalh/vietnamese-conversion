import { Charset, Charsets } from './types';

const UNICODE: Charset = [
  'À',
  'Á',
  'Â',
  'Ã',
  'È',
  'É',
  'Ê',
  'Ì',
  'Í',
  'Ò',
  'Ó',
  'Ô',
  'Õ',
  'Ù',
  'Ú',
  'Ý',
  'à',
  'á',
  'â',
  'ã',
  'è',
  'é',
  'ê',
  'ì',
  'í',
  'ò',
  'ó',
  'ô',
  'õ',
  'ù',
  'ú',
  'ý',
  'Ă',
  'ă',
  'Đ',
  'đ',
  'Ĩ',
  'ĩ',
  'Ũ',
  'ũ',
  'Ơ',
  'ơ',
  'Ư',
  'ư',
  'Ạ',
  'ạ',
  'Ả',
  'ả',
  'Ấ',
  'ấ',
  'Ầ',
  'ầ',
  'Ẩ',
  'ẩ',
  'Ẫ',
  'ẫ',
  'Ậ',
  'ậ',
  'Ắ',
  'ắ',
  'Ằ',
  'ằ',
  'Ẳ',
  'ẳ',
  'Ẵ',
  'ẵ',
  'Ặ',
  'ặ',
  'Ẹ',
  'ẹ',
  'Ẻ',
  'ẻ',
  'Ẽ',
  'ẽ',
  'Ế',
  'ế',
  'Ề',
  'ề',
  'Ể',
  'ể',
  'Ễ',
  'ễ',
  'Ệ',
  'ệ',
  'Ỉ',
  'ỉ',
  'Ị',
  'ị',
  'Ọ',
  'ọ',
  'Ỏ',
  'ỏ',
  'Ố',
  'ố',
  'Ồ',
  'ồ',
  'Ổ',
  'ổ',
  'Ỗ',
  'ỗ',
  'Ộ',
  'ộ',
  'Ớ',
  'ớ',
  'Ờ',
  'ờ',
  'Ở',
  'ở',
  'Ỡ',
  'ỡ',
  'Ợ',
  'ợ',
  'Ụ',
  'ụ',
  'Ủ',
  'ủ',
  'Ứ',
  'ứ',
  'Ừ',
  'ừ',
  'Ử',
  'ử',
  'Ữ',
  'ữ',
  'Ự',
  'ự',
  'Ỳ',
  'ỳ',
  'Ỵ',
  'ỵ',
  'Ỷ',
  'ỷ',
  'Ỹ',
  'ỹ'
];

const VNI: Charset = [
  'AØ',
  'AÙ',
  'AÂ',
  'AÕ',
  'EØ',
  'EÙ',
  'EÂ',
  'Ì',
  'Í',
  'OØ',
  'OÙ',
  'OÂ',
  'OÕ',
  'UØ',
  'UÙ',
  'YÙ',
  'aø',
  'aù',
  'aâ',
  'aõ',
  'eø',
  'eù',
  'eâ',
  'ì',
  'í',
  'oø',
  'où',
  'oâ',
  'oõ',
  'uø',
  'uù',
  'yù',
  'AÊ',
  'aê',
  'Ñ',
  'ñ',
  'Ó',
  'ó',
  'UÕ',
  'uõ',
  'Ô',
  'ô',
  'Ö',
  'ö',
  'AÏ',
  'aï',
  'AÛ',
  'aû',
  'AÁ',
  'aá',
  'AÀ',
  'aà',
  'AÅ',
  'aå',
  'AÃ',
  'aã',
  'AÄ',
  'aä',
  'AÉ',
  'aé',
  'AÈ',
  'aè',
  'AÚ',
  'aú',
  'AÜ',
  'aü',
  'AË',
  'aë',
  'EÏ',
  'eï',
  'EÛ',
  'eû',
  'EÕ',
  'eõ',
  'EÁ',
  'eá',
  'EÀ',
  'eà',
  'EÅ',
  'eå',
  'EÃ',
  'eã',
  'EÄ',
  'eä',
  'Æ',
  'æ',
  'Ò',
  'ò',
  'OÏ',
  'oï',
  'OÛ',
  'oû',
  'OÁ',
  'oá',
  'OÀ',
  'oà',
  'OÅ',
  'oå',
  'OÃ',
  'oã',
  'OÄ',
  'oä',
  'ÔÙ',
  'ôù',
  'ÔØ',
  'ôø',
  'ÔÛ',
  'ôû',
  'ÔÕ',
  'ôõ',
  'ÔÏ',
  'ôï',
  'UÏ',
  'uï',
  'UÛ',
  'uû',
  'ÖÙ',
  'öù',
  'ÖØ',
  'öø',
  'ÖÛ',
  'öû',
  'ÖÕ',
  'öõ',
  'ÖÏ',
  'öï',
  'YØ',
  'yø',
  'Î',
  'î',
  'YÛ',
  'yû',
  'YÕ',
  'yõ'
];

const TCVN3: Charset = [
  'Aµ',
  'A¸',
  '¢',
  'A·',
  'EÌ',
  'EÐ',
  '£',
  'I×',
  'IÝ',
  'Oß',
  'Oã',
  '¤',
  'Oâ',
  'Uï',
  'Uó',
  'Yý',
  'µ',
  '¸',
  '©',
  '·',
  'Ì',
  'Ð',
  'ª',
  '×',
  'Ý',
  'ß',
  'ã',
  '«',
  'â',
  'ï',
  'ó',
  'ý',
  '¡',
  '¨',
  '§',
  '®',
  'IÜ',
  'Ü',
  'Uò',
  'ò',
  '¥',
  '¬',
  '¦',
  '­',
  'A¹',
  '¹',
  'A¶',
  '¶',
  '¢Ê',
  'Ê',
  '¢Ç',
  'Ç',
  '¢È',
  'È',
  '¢É',
  'É',
  '¢Ë',
  'Ë',
  '¡¾',
  '¾',
  '¡»',
  '»',
  '¡¼',
  '¼',
  '¡½',
  '½',
  '¡Æ',
  'Æ',
  'EÑ',
  'Ñ',
  'EÎ',
  'Î',
  'EÏ',
  'Ï',
  '£Õ',
  'Õ',
  '£Ò',
  'Ò',
  '£Ó',
  'Ó',
  '£Ô',
  'Ô',
  '£Ö',
  'Ö',
  'IØ',
  'Ø',
  'IÞ',
  'Þ',
  'Oä',
  'ä',
  'Oá',
  'á',
  '¤è',
  'è',
  '¤å',
  'å',
  '¤æ',
  'æ',
  '¤ç',
  'ç',
  '¤é',
  'é',
  '¥í',
  'í',
  '¥ê',
  'ê',
  '¥ë',
  'ë',
  '¥ì',
  'ì',
  '¥î',
  'î',
  'Uô',
  'ô',
  'Uñ',
  'ñ',
  '¦ø',
  'ø',
  '¦õ',
  'õ',
  '¦ö',
  'ö',
  '¦÷',
  '÷',
  '¦ù',
  'ù',
  'Yú',
  'ú',
  'Yþ',
  'þ',
  'Yû',
  'û',
  'Yü',
  'ü'
];

const VIQR: Charset = [
  'A`',
  "A'",
  'A^',
  'A~',
  'E`',
  "E'",
  'E^',
  'I`',
  "I'",
  'O`',
  "O'",
  'O^',
  'O~',
  'U`',
  "U'",
  "Y'",
  'a`',
  "a'",
  'a^',
  'a~',
  'e`',
  "e'",
  'e^',
  'i`',
  "i'",
  'o`',
  "o'",
  'o^',
  'o~',
  'u`',
  "u'",
  "y'",
  'A(',
  'a(',
  'DD',
  'dd',
  'I~',
  'i~',
  'U~',
  'u~',
  'O+',
  'o+',
  'U+',
  'u+',
  'A.',
  'a.',
  'A?',
  'a?',
  "A^'",
  "a^'",
  'A^`',
  'a^`',
  'A^?',
  'a^?',
  'A^~',
  'a^~',
  'A^.',
  'a^.',
  "A('",
  "a('",
  'A(`',
  'a(`',
  'A(?',
  'a(?',
  'A(~',
  'a(~',
  'A(.',
  'a(.',
  'E.',
  'e.',
  'E?',
  'e?',
  'E~',
  'e~',
  "E^'",
  "e^'",
  'E^`',
  'e^`',
  'E^?',
  'e^?',
  'E^~',
  'e^~',
  'E^.',
  'e^.',
  'I?',
  'i?',
  'I.',
  'i.',
  'O.',
  'o.',
  'O?',
  'o?',
  "O^'",
  "o^'",
  'O^`',
  'o^`',
  'O^?',
  'o^?',
  'O^~',
  'o^~',
  'O^.',
  'o^.',
  "O+'",
  "o+'",
  'O+`',
  'o+`',
  'O+?',
  'o+?',
  'O+~',
  'o+~',
  'O+.',
  'o+.',
  'U.',
  'u.',
  'U?',
  'u?',
  "U+'",
  "u+'",
  'U+`',
  'u+`',
  'U+?',
  'u+?',
  'U+~',
  'u+~',
  'U+.',
  'u+.',
  'Y`',
  'y`',
  'Y.',
  'y.',
  'Y?',
  'y?',
  'Y~',
  'y~'
];

const CHARSETS: Charsets = {
  UNICODE,
  VNI,
  TCVN3,
  VIQR
};

export default CHARSETS;