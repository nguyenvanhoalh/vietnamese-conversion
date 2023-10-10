import { Charset, Charsets } from './types';

const UNICODE: Charset = [
    'À', 'Á', 'Â', 'Ã', 'È', 'É', 'Ê', 'Ì', 'Í', 'Ò', 'Ó', 'Ô', 'Õ', 'Ù', 'Ú', 'Ý', 'à', 'á', 'â', 'ã', 'è', 'é', 'ê', 'ì', 'í', 'ò', 'ó', 'ô', 'õ', 'ù', 'ú', 'ý', 'Ă', 'ă', 'Đ', 'đ', 'Ĩ', 'ĩ', 'Ũ', 'ũ', 'Ơ', 'ơ', 'Ư', 'ư', 'Ạ', 'ạ', 'Ả', 'ả', 'Ấ', 'ấ', 'Ầ', 'ầ', 'Ẩ', 'ẩ', 'Ẫ', 'ẫ', 'Ậ', 'ậ', 'Ắ', 'ắ', 'Ằ', 'ằ', 'Ẳ', 'ẳ', 'Ẵ', 'ẵ', 'Ặ', 'ặ', 'Ẹ', 'ẹ', 'Ẻ', 'ẻ', 'Ẽ', 'ẽ', 'Ế', 'ế', 'Ề', 'ề', 'Ể', 'ể', 'Ễ', 'ễ', 'Ệ', 'ệ', 'Ỉ', 'ỉ', 'Ị', 'ị', 'Ọ', 'ọ', 'Ỏ', 'ỏ', 'Ố', 'ố', 'Ồ', 'ồ', 'Ổ', 'ổ', 'Ỗ', 'ỗ', 'Ộ', 'ộ', 'Ớ', 'ớ', 'Ờ', 'ờ', 'Ở', 'ở', 'Ỡ', 'ỡ', 'Ợ', 'ợ', 'Ụ', 'ụ', 'Ủ', 'ủ', 'Ứ', 'ứ', 'Ừ', 'ừ', 'Ử', 'ử', 'Ữ', 'ữ', 'Ự', 'ự', 'Ỳ', 'ỳ', 'Ỵ', 'ỵ', 'Ỷ', 'ỷ', 'Ỹ', 'ỹ'
];

const TCVN3: Charset = [
    'Aµ', 'A¸', '¢', 'A·', 'EÌ', 'EÐ', '£', 'I×', 'IÝ', 'Oß', 'Oã', '¤', 'Oâ', 'Uï', 'Uó', 'Yý', 'µ', '¸', '©', '·', 'Ì', 'Ð', 'ª', '×', 'Ý', 'ß', 'ã', '«', 'â', 'ï', 'ó', 'ý', '¡', '¨', '§', '®', 'IÜ', 'Ü', 'Uò', 'ò', '¥', '¬', '¦', '­', 'A¹', '¹', 'A¶', '¶', '¢Ê', 'Ê', '¢Ç', 'Ç', '¢È', 'È', '¢É', 'É', '¢Ë', 'Ë', '¡¾', '¾', '¡»', '»', '¡¼', '¼', '¡½', '½', '¡Æ', 'Æ', 'EÑ', 'Ñ', 'EÎ', 'Î', 'EÏ', 'Ï', '£Õ', 'Õ', '£Ò', 'Ò', '£Ó', 'Ó', '£Ô', 'Ô', '£Ö', 'Ö', 'IØ', 'Ø', 'IÞ', 'Þ', 'Oä', 'ä', 'Oá', 'á', '¤è', 'è', '¤å', 'å', '¤æ', 'æ', '¤ç', 'ç', '¤é', 'é', '¥í', 'í', '¥ê', 'ê', '¥ë', 'ë', '¥ì', 'ì', '¥î', 'î', 'Uô', 'ô', 'Uñ', 'ñ', '¦ø', 'ø', '¦õ', 'õ', '¦ö', 'ö', '¦÷', '÷', '¦ù', 'ù', 'Yú', 'ú', 'Yþ', 'þ', 'Yû', 'û', 'Yü', 'ü'
];

const VNI: Charset = [
    'AØ', 'AÙ', 'AÂ', 'AÕ', 'EØ', 'EÙ', 'EÂ', 'Ì', 'Í', 'OØ', 'OÙ', 'OÂ', 'OÕ', 'UØ', 'UÙ', 'YÙ', 'aø', 'aù', 'aâ', 'aõ', 'eø', 'eù', 'eâ', 'ì', 'í', 'oø', 'où', 'oâ', 'oõ', 'uø', 'uù', 'yù', 'AÊ', 'aê', 'Ñ', 'ñ', 'Ó', 'ó', 'UÕ', 'uõ', 'Ô', 'ô', 'Ö', 'ö', 'AÏ', 'aï', 'AÛ', 'aû', 'AÁ', 'aá', 'AÀ', 'aà', 'AÅ', 'aå', 'AÃ', 'aã', 'AÄ', 'aä', 'AÉ', 'aé', 'AÈ', 'aè', 'AÚ', 'aú', 'AÜ', 'aü', 'AË', 'aë', 'EÏ', 'eï', 'EÛ', 'eû', 'EÕ', 'eõ', 'EÁ', 'eá', 'EÀ', 'eà', 'EÅ', 'eå', 'EÃ', 'eã', 'EÄ', 'eä', 'Æ', 'æ', 'Ò', 'ò', 'OÏ', 'oï', 'OÛ', 'oû', 'OÁ', 'oá', 'OÀ', 'oà', 'OÅ', 'oå', 'OÃ', 'oã', 'OÄ', 'oä', 'ÔÙ', 'ôù', 'ÔØ', 'ôø', 'ÔÛ', 'ôû', 'ÔÕ', 'ôõ', 'ÔÏ', 'ôï', 'UÏ', 'uï', 'UÛ', 'uû', 'ÖÙ', 'öù', 'ÖØ', 'öø', 'ÖÛ', 'öû', 'ÖÕ', 'öõ', 'ÖÏ', 'öï', 'YØ', 'yø', 'Î', 'î', 'YÛ', 'yû', 'YÕ', 'yõ'
];

const VIQR: Charset = [
    'A`', "A'", 'A^', 'A~', 'E`', "E'", 'E^', 'I`', "I'", 'O`', "O'", 'O^', 'O~', 'U`', "U'", "Y'", 'a`', "a'", 'a^', 'a~', 'e`', "e'", 'e^', 'i`', "i'", 'o`', "o'", 'o^', 'o~', 'u`', "u'", "y'", 'A(', 'a(', 'DD', 'dd', 'I~', 'i~', 'U~', 'u~', 'O+', 'o+', 'U+', 'u+', 'A.', 'a.', 'A?', 'a?', "A^'", "a^'", 'A^`', 'a^`', 'A^?', 'a^?', 'A^~', 'a^~', 'A^.', 'a^.', "A('", "a('", 'A(`', 'a(`', 'A(?', 'a(?', 'A(~', 'a(~', 'A(.', 'a(.', 'E.', 'e.', 'E?', 'e?', 'E~', 'e~', "E^'", "e^'", 'E^`', 'e^`', 'E^?', 'e^?', 'E^~', 'e^~', 'E^.', 'e^.', 'I?', 'i?', 'I.', 'i.', 'O.', 'o.', 'O?', 'o?', "O^'", "o^'", 'O^`', 'o^`', 'O^?', 'o^?', 'O^~', 'o^~', 'O^.', 'o^.', "O+'", "o+'", 'O+`', 'o+`', 'O+?', 'o+?', 'O+~', 'o+~', 'O+.', 'o+.', 'U.', 'u.', 'U?', 'u?', "U+'", "u+'", 'U+`', 'u+`', 'U+?', 'u+?', 'U+~', 'u+~', 'U+.', 'u+.', 'Y`', 'y`', 'Y.', 'y.', 'Y?', 'y?', 'Y~', 'y~'
];

const VISCII: Charset = [
    'À', 'Á', 'Â', 'Ã', 'È', 'É', 'Ê', 'Ì', 'Í', 'Ò', 'Ó', 'Ô', 'õ', 'Ù', 'Ú', 'Ý', 'à', 'á', 'â', 'ã', 'è', 'é', 'ê', 'ì', 'í', 'ò', 'ó', 'ô', 'õ', 'ù', 'ú', 'ý', 'Å', 'å', 'Ð', 'ð', 'Î', 'î', '', 'û', '´', '½', '¿', 'ß', '€', 'Õ', 'Ä', 'ä', '„', '¤', '…', '¥', '†', '¦', 'ç', 'ç', '‡', '§', '', '¡', '‚', '¢', 'Æ', 'Æ', 'Ç', 'Ç', 'ƒ', '£', '‰', '©', 'Ë', 'ë', 'ˆ', '¨', 'Š', 'ª', '‹', '«', 'Œ', '¬', '', '­', 'Ž', '®', '›', 'ï', '˜', '¸', 'š', '÷', '™', 'ö', '', '¯', '', '°', '‘', '±', '’', '²', '“', 'µ', '•', '¾', '–', '¶', '—', '·', '³', 'Þ', '”', 'þ', 'ž', 'ø', 'œ', 'ü', 'º', 'Ñ', '»', '×', '¼', 'Ø', 'ÿ', 'æ', '¹', 'ñ', 'Ÿ', 'Ï', 'Ü', 'Ü', 'Ö', 'Ö', 'Û', 'Û'
];

const VPS: Charset = [
    '€', 'Á', 'Â', '‚', '×', 'É', 'Ê', 'µ', '´', '¼', '¹', 'Ô', '¾', '¨', 'Ú', 'Ý', 'à', 'á', 'â', 'ã', 'è', 'é', 'ê', 'ì', 'í', 'ò', 'ó', 'ô', 'õ', 'ù', 'ú', 'š', 'ˆ', 'æ', 'ñ', 'Ç', '¸', 'ï', '¬', 'Û', '÷', 'Ö', 'Ð', 'Ü', 'å', 'å', '', 'ä', 'ƒ', 'Ã', '„', 'À', '…', 'Ä', 'Å', 'Å', 'Æ', 'Æ', '', '¡', 'Ž', '¢', '', '£', 'ð', '¤', '¥', '¥', 'Ë', 'Ë', 'Þ', 'È', 'þ', 'ë', '', '‰', '“', 'Š', '”', '‹', '•', 'Í', 'Œ', 'Œ', '·', 'Ì', 'Î', 'Î', '†', '†', '½', 'Õ', '–', 'Ó', '—', 'Ò', '˜', '°', '™', '‡', '¶', '¶', '', '§', 'ž', '©', 'Ÿ', 'ª', '¦', '«', '®', '®', 'ø', 'ø', 'Ñ', 'û', '­', 'Ù', '¯', 'Ø', '±', 'º', '»', '»', '¿', '¿', '²', 'ÿ', 'œ', 'œ', 'ý', '›', '³', 'Ï'
];

const BKHCM2: Charset = [
    'AÂ', 'AÁ', 'Ê', 'AÄ', 'EÂ', 'EÁ', 'Ï', 'Ò', 'Ñ', 'OÂ', 'OÁ', 'Ö', 'OÄ', 'UÂ', 'UÁ', 'YÁ', 'aâ', 'aá', 'ê', 'aä', 'eâ', 'eá', 'ï', 'ò', 'ñ', 'oâ', 'oá', 'ö', 'oä', 'uâ', 'uá', 'yá', 'Ù', 'ù', 'À', 'à', 'Ô', 'ô', 'UÄ', 'uä', 'Ú', 'ú', 'Û', 'û', 'AÅ', 'aå', 'AÃ', 'aã', 'ÊË', 'êë', 'ÊÌ', 'êì', 'ÊÍ', 'êí', 'ÊÎ', 'êî', 'ÊÅ', 'êå', 'ÙÆ', 'ùæ', 'ÙÇ', 'ùç', 'ÙÈ', 'ùè', 'ÙÉ', 'ùé', 'ÙÅ', 'ùå', 'EÅ', 'eå', 'EÃ', 'eã', 'EÄ', 'eä', 'ÏË', 'ïë', 'ÏÌ', 'ïì', 'ÏÍ', 'ïí', 'ÏÎ', 'ïî', 'Ïå', 'ïå', 'Ó', 'ó', 'Õ', 'õ', 'OÅ', 'oå', 'OÃ', 'oã', 'ÖË', 'öë', 'ÖÌ', 'öì', 'ÖÍ', 'öí', 'ÖÎ', 'öî', 'ÖÅ', 'öå', 'ÚÁ', 'úá', 'ÚÂ', 'úâ', 'ÚÃ', 'úã', 'ÚÄ', 'úä', 'ÚÅ', 'úå', 'UÅ', 'uå', 'UÃ', 'uã', 'ÛÁ', 'ûá', 'ÛÂ', 'ûâ', 'ÛÃ', 'ûã', 'ÛÄ', 'ûä', 'ÛÅ', 'ûå', 'YÂ', 'yâ', 'YÅ', 'yå', 'YÃ', 'yã', 'YÄ', 'yä'
];

const BKHCM1: Charset = [
    '', '€', 'Ÿ', 'ƒ', '†', '…', '¥', '‹', 'Š', '', '', '«', '’', '•', '”', '{', '¿', '¾', 'Ý', 'Á', 'Ä', 'Ã', 'ã', 'É', 'È', 'Î', 'Í', 'é', 'Ð', 'Ó', 'Ò', 'û', '™', '×', '}', '½', '', 'Ë', '—', 'Õ', '±', 'ï', '·', 'õ', '„', 'Â', '‚', 'À', '~', 'Þ', '¡', 'ß', '¢', 'à', '£', 'á', '¤', 'â', 'š', 'Ø', '›', 'Ù', 'œ', 'Ú', '', 'Û', '˜', 'Ü', '‰', 'Ç', '‡', 'Å', 'ˆ', 'Æ', '¦', 'ä', '§', 'å', '¨', 'æ', '©', 'ç', 'ª', 'è', 'Œ', 'Ê', 'Ž', 'Ì', '“', 'Ñ', '‘', 'Ï', '¬', 'ê', '­', 'ë', '®', 'ì', '¯', 'í', '°', 'î', '²', 'ð', '³', 'ñ', '´', 'ò', 'µ', 'ó', '¶', 'ô', '˜', 'Ö', '–', 'Ô', '¸', 'ö', '¹', '÷', 'º', 'ø', '»', 'ù', '¼', 'ú', '^', 'ü', 'Ž', 'ÿ', '`', 'ý', '|', 'þ'
];

const VIETWAREX: Charset = [
    'AÌ', 'AÏ', 'Á', 'AÎ', 'EÌ', 'EÏ', 'Ã', 'Ç', 'Ê', 'OÌ', 'OÏ', 'Ä', 'OÎ', 'UÌ', 'UÏ', 'YÏ', 'aì', 'aï', 'á', 'aî', 'eì', 'eï', 'ã', 'ç', 'ê', 'oì', 'oï', 'ä', 'oî', 'uì', 'uï', 'yï', 'À', 'à', 'Â', 'â', 'É', 'é', 'UÎ', 'uî', 'Å', 'å', 'Æ', 'æ', 'AÛ', 'aû', 'AÍ', 'aí', 'ÁÚ', 'áú', 'ÁÖ', 'áö', 'ÁØ', 'áø', 'ÁÙ', 'áù', 'ÁÛ', 'áû', 'ÀÕ', 'àõ', 'ÀÒ', 'àò', 'ÀÓ', 'àó', 'ÀÔ', 'àô', 'ÀÛ', 'àû', 'EÛ', 'eû', 'EÍ', 'eí', 'EÎ', 'eî', 'ÃÚ', 'ãú', 'ÃÖ', 'ãö', 'ÃØ', 'ãø', 'ÃÙ', 'ãù', 'ÃÛ', 'ãû', 'È', 'è', 'Ë', 'ë', 'OÜ', 'oü', 'OÍ', 'oí', 'ÄÚ', 'äú', 'ÄÖ', 'äö', 'ÄØ', 'äø', 'ÄÙ', 'äù', 'ÄÜ', 'äü', 'ÅÏ', 'åï', 'ÅÌ', 'åì', 'ÅÍ', 'åí', 'ÅÎ', 'åî', 'ÅÜ', 'åü', 'UÛ', 'uû', 'UÍ', 'uí', 'ÆÏ', 'æï', 'ÆÌ', 'æì', 'ÆÍ', 'æí', 'ÆÎ', 'æî', 'ÆÛ', 'æû', 'YÌ', 'yì', 'YÑ', 'yñ', 'YÍ', 'yí', 'YÎ', 'yî'
];

const VIETWAREF: Charset = [
    'ª', 'À', '—', 'º', 'Ì', 'Ï', '™', 'Ø', 'Û', 'ß', 'â', 'š', 'á', 'î', 'ò', 'ü', 'ª', 'À', '¡', 'º', 'Ì', 'Ï', '£', 'Ø', 'Û', 'ß', 'â', '¤', 'á', 'î', 'ò', 'ü', '–', 'Ÿ', '˜', '¢', 'Ú', 'Ú', 'ñ', 'ñ', '›', '¥', 'œ', '§', 'Á', 'Á', '¶', '¶', 'Ê', 'Ê', 'Ç', 'Ç', 'È', 'È', 'É', 'É', 'Ë', 'Ë', 'Å', 'Å', 'Â', 'Â', 'Ã', 'Ã', 'Ä', 'Ä', 'Æ', 'Æ', 'Ñ', 'Ñ', 'Í', 'Í', 'Î', 'Î', 'Õ', 'Õ', 'Ò', 'Ò', 'Ó', 'Ó', 'Ô', 'Ô', 'Ö', 'Ö', 'Ù', 'Ù', 'Ü', 'Ü', 'ã', 'ã', 'à', 'à', 'ç', 'ç', 'ä', 'ä', 'å', 'å', 'æ', 'æ', 'è', 'è', 'ì', 'ì', 'é', 'é', 'ê', 'ê', 'ë', 'ë', 'í', 'í', 'ó', 'ó', 'ï', 'ï', '÷', '÷', 'ô', 'ô', 'õ', 'õ', 'ö', 'ö', 'ø', 'ø', 'ù', 'ù', 'ÿ', 'ÿ', 'ú', 'ú', 'û', 'û'
];

const UTF8: Charset = [
    'Ã€', 'Ã', 'Ã‚', 'Ãƒ', 'Ãˆ', 'Ã‰', 'ÃŠ', 'ÃŒ', 'Ã', 'Ã’', 'Ã“', 'Ã”', 'Ã•', 'Ã™', 'Ãš', 'Ã', 'Ã ', 'Ã¡', 'Ã¢', 'Ã£', 'Ã¨', 'Ã©', 'Ãª', 'Ã¬', 'Ã­', 'Ã²', 'Ã³', 'Ã´', 'Ãµ', 'Ã¹', 'Ãº', 'Ã½', 'Ä‚', 'Äƒ', 'Ä', 'Ä‘', 'Ä¨', 'Ä©', 'Å¨', 'Å©', 'Æ ', 'Æ¡', 'Æ¯', 'Æ°', 'áº ', 'áº¡', 'áº¢', 'áº£', 'áº¤', 'áº¥', 'áº¦', 'áº§', 'áº¨', 'áº©', 'áºª', 'áº«', 'áº¬', 'áº­', 'áº®', 'áº¯', 'áº°', 'áº±', 'áº²', 'áº³', 'áº´', 'áºµ', 'áº¶', 'áº·', 'áº¸', 'áº¹', 'áºº', 'áº»', 'áº¼', 'áº½', 'áº¾', 'áº¿', 'á»€', 'á»', 'á»‚', 'á»ƒ', 'á»„', 'á»…', 'á»†', 'á»‡', 'á»ˆ', 'á»‰', 'á»Š', 'á»‹', 'á»Œ', 'á»', 'á»Ž', 'á»', 'á»', 'á»‘', 'á»’', 'á»“', 'á»”', 'á»•', 'á»–', 'á»—', 'á»˜', 'á»™', 'á»š', 'á»›', 'á»œ', 'á»', 'á»ž', 'á»Ÿ', 'á» ', 'á»¡', 'á»¢', 'á»£', 'á»¤', 'á»¥', 'á»¦', 'á»§', 'á»¨', 'á»©', 'á»ª', 'á»«', 'á»¬', 'á»­', 'á»®', 'á»¯', 'á»°', 'á»±', 'á»²', 'á»³', 'á»´', 'á»µ', 'á»¶', 'á»·', 'á»¸', 'á»¹'
];

const NCRDECIMAL: Charset = [
    '&#192;', '&#193;', '&#194;', '&#195;', '&#200;', '&#201;', '&#202;', '&#204;', '&#205;', '&#210;', '&#211;', '&#212;', '&#213;', '&#217;', '&#218;', '&#221;', '&#224;', '&#225;', '&#226;', '&#227;', '&#232;', '&#233;', '&#234;', '&#236;', '&#237;', '&#242;', '&#243;', '&#244;', '&#245;', '&#249;', '&#250;', '&#253;', '&#258;', '&#259;', '&#272;', '&#273;', '&#296;', '&#297;', '&#360;', '&#361;', '&#416;', '&#417;', '&#431;', '&#432;', '&#7840;', '&#7841;', '&#7842;', '&#7843;', '&#7844;', '&#7845;', '&#7846;', '&#7847;', '&#7848;', '&#7849;', '&#7850;', '&#7851;', '&#7852;', '&#7853;', '&#7854;', '&#7855;', '&#7856;', '&#7857;', '&#7858;', '&#7859;', '&#7860;', '&#7861;', '&#7862;', '&#7863;', '&#7864;', '&#7865;', '&#7866;', '&#7867;', '&#7868;', '&#7869;', '&#7870;', '&#7871;', '&#7872;', '&#7873;', '&#7874;', '&#7875;', '&#7876;', '&#7877;', '&#7878;', '&#7879;', '&#7880;', '&#7881;', '&#7882;', '&#7883;', '&#7884;', '&#7885;', '&#7886;', '&#7887;', '&#7888;', '&#7889;', '&#7890;', '&#7891;', '&#7892;', '&#7893;', '&#7894;', '&#7895;', '&#7896;', '&#7897;', '&#7898;', '&#7899;', '&#7900;', '&#7901;', '&#7902;', '&#7903;', '&#7904;', '&#7905;', '&#7906;', '&#7907;', '&#7908;', '&#7909;', '&#7910;', '&#7911;', '&#7912;', '&#7913;', '&#7914;', '&#7915;', '&#7916;', '&#7917;', '&#7918;', '&#7919;', '&#7920;', '&#7921;', '&#7922;', '&#7923;', '&#7924;', '&#7925;', '&#7926;', '&#7927;', '&#7928;', '&#7929;'
];

const NCRHEX: Charset = [
    'À', 'Á', 'Â', 'Ã', 'È', 'É', 'Ê', 'Ì', 'Í', 'Ò', 'Ó', 'Ô', 'Õ', 'Ù', 'Ú', 'Ý', 'à', 'á', 'â', 'ã', 'è', 'é', 'ê', 'ì', 'í', 'ò', 'ó', 'ô', 'õ', 'ù', 'ú', 'ý', '&#x102;', '&#x103;', '&#x110;', '&#x111;', '&#x128;', '&#x129;', '&#x168;', '&#x169;', '&#x1A0;', '&#x1A1;', '&#x1AF;', '&#x1B0;', '&#x1EA0;', '&#x1EA1;', '&#x1EA2;', '&#x1EA3;', '&#x1EA4;', '&#x1EA5;', '&#x1EA6;', '&#x1EA7;', '&#x1EA8;', '&#x1EA9;', '&#x1EAA;', '&#x1EAB;', '&#x1EAC;', '&#x1EAD;', '&#x1EAE;', '&#x1EAF;', '&#x1EB0;', '&#x1EB1;', '&#x1EB2;', '&#x1EB3;', '&#x1EB4;', '&#x1EB5;', '&#x1EB6;', '&#x1EB7;', '&#x1EB8;', '&#x1EB9;', '&#x1EBA;', '&#x1EBB;', '&#x1EBC;', '&#x1EBD;', '&#x1EBE;', '&#x1EBF;', '&#x1EC0;', '&#x1EC1;', '&#x1EC2;', '&#x1EC3;', '&#x1EC4;', '&#x1EC5;', '&#x1EC6;', '&#x1EC7;', '&#x1EC8;', '&#x1EC9;', '&#x1ECA;', '&#x1ECB;', '&#x1ECC;', '&#x1ECD;', '&#x1ECE;', '&#x1ECF;', '&#x1ED0;', '&#x1ED1;', '&#x1ED2;', '&#x1ED3;', '&#x1ED4;', '&#x1ED5;', '&#x1ED6;', '&#x1ED7;', '&#x1ED8;', '&#x1ED9;', '&#x1EDA;', '&#x1EDB;', '&#x1EDC;', '&#x1EDD;', '&#x1EDE;', '&#x1EDF;', '&#x1EE0;', '&#x1EE1;', '&#x1EE2;', '&#x1EE3;', '&#x1EE4;', '&#x1EE5;', '&#x1EE6;', '&#x1EE7;', '&#x1EE8;', '&#x1EE9;', '&#x1EEA;', '&#x1EEB;', '&#x1EEC;', '&#x1EED;', '&#x1EEE;', '&#x1EEF;', '&#x1EF0;', '&#x1EF1;', '&#x1EF2;', '&#x1EF3;', '&#x1EF4;', '&#x1EF5;', '&#x1EF6;', '&#x1EF7;', '&#x1EF8;', '&#x1EF9;'
];

const CHARSETS: Charsets = {
    UNICODE,
    TCVN3,
    VNI,  
    VIQR,
    VISCII,
    VPS,
    BKHCM2,
    BKHCM1,
    VIETWAREX,
    VIETWAREF,
    UTF8,
    NCRDECIMAL,
    NCRHEX
};

export default CHARSETS;
