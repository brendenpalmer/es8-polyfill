!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","./../../common/utils/string-util"],e)}(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("./../../common/utils/string-util");t.padStart=function(e,t,o){if(void 0===t&&(t=0),void 0===o&&(o=" "),e.length>t||!o)return e;var r=t-e.length,n=Math.ceil(r/o.length);return""+i.StringUtility.repeat(o,n).substring(0,r)+e}});