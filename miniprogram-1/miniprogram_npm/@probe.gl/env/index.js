module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1679470356775, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "VERSION", {
  enumerable: true,
  get: function get() {
    return _globals.VERSION;
  }
});
Object.defineProperty(exports, "assert", {
  enumerable: true,
  get: function get() {
    return _assert.default;
  }
});
Object.defineProperty(exports, "console", {
  enumerable: true,
  get: function get() {
    return _globals2.console;
  }
});
Object.defineProperty(exports, "document", {
  enumerable: true,
  get: function get() {
    return _globals2.document;
  }
});
Object.defineProperty(exports, "getBrowser", {
  enumerable: true,
  get: function get() {
    return _getBrowser.default;
  }
});
Object.defineProperty(exports, "global", {
  enumerable: true,
  get: function get() {
    return _globals2.global;
  }
});
Object.defineProperty(exports, "isBrowser", {
  enumerable: true,
  get: function get() {
    return _isBrowser.default;
  }
});
Object.defineProperty(exports, "isBrowserMainThread", {
  enumerable: true,
  get: function get() {
    return _isBrowser.isBrowserMainThread;
  }
});
Object.defineProperty(exports, "isElectron", {
  enumerable: true,
  get: function get() {
    return _isElectron.default;
  }
});
Object.defineProperty(exports, "isMobile", {
  enumerable: true,
  get: function get() {
    return _getBrowser.isMobile;
  }
});
Object.defineProperty(exports, "process", {
  enumerable: true,
  get: function get() {
    return _globals2.process;
  }
});
Object.defineProperty(exports, "self", {
  enumerable: true,
  get: function get() {
    return _globals2.self;
  }
});
Object.defineProperty(exports, "window", {
  enumerable: true,
  get: function get() {
    return _globals2.window;
  }
});

var _globals = require("./utils/globals");

var _globals2 = require("./lib/globals");

var _isBrowser = _interopRequireWildcard(require("./lib/is-browser"));

var _getBrowser = _interopRequireWildcard(require("./lib/get-browser"));

var _isElectron = _interopRequireDefault(require("./lib/is-electron"));

var _assert = _interopRequireDefault(require("./utils/assert"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {"./utils/globals":1679470356776,"./lib/globals":1679470356779,"./lib/is-browser":1679470356777,"./lib/get-browser":1679470356780,"./lib/is-electron":1679470356778,"./utils/assert":1679470356781}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356776, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VERSION = void 0;
Object.defineProperty(exports, "console", {
  enumerable: true,
  get: function get() {
    return _globals.console;
  }
});
Object.defineProperty(exports, "document", {
  enumerable: true,
  get: function get() {
    return _globals.document;
  }
});
Object.defineProperty(exports, "global", {
  enumerable: true,
  get: function get() {
    return _globals.global;
  }
});
exports.isBrowser = void 0;
Object.defineProperty(exports, "process", {
  enumerable: true,
  get: function get() {
    return _globals.process;
  }
});
Object.defineProperty(exports, "self", {
  enumerable: true,
  get: function get() {
    return _globals.self;
  }
});
Object.defineProperty(exports, "window", {
  enumerable: true,
  get: function get() {
    return _globals.window;
  }
});

var _isBrowser = _interopRequireDefault(require("../lib/is-browser"));

var _globals = require("../lib/globals");

var VERSION = typeof __VERSION__ !== 'undefined' ? __VERSION__ : 'untranspiled source';
exports.VERSION = VERSION;
var isBrowser = (0, _isBrowser.default)();
exports.isBrowser = isBrowser;
//# sourceMappingURL=globals.js.map
}, function(modId) { var map = {"../lib/is-browser":1679470356777,"../lib/globals":1679470356779}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356777, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBrowser;
exports.isBrowserMainThread = isBrowserMainThread;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _isElectron = _interopRequireDefault(require("./is-electron"));

function isBrowser() {
  var isNode = (typeof process === "undefined" ? "undefined" : (0, _typeof2.default)(process)) === 'object' && String(process) === '[object process]' && !process.browser;
  return !isNode || (0, _isElectron.default)();
}

function isBrowserMainThread() {
  return isBrowser() && typeof document !== 'undefined';
}
//# sourceMappingURL=is-browser.js.map
}, function(modId) { var map = {"./is-electron":1679470356778}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356778, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isElectron;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function isElectron(mockUserAgent) {
  if (typeof window !== 'undefined' && (0, _typeof2.default)(window.process) === 'object' && window.process.type === 'renderer') {
    return true;
  }

  if (typeof process !== 'undefined' && (0, _typeof2.default)(process.versions) === 'object' && Boolean(process.versions['electron'])) {
    return true;
  }

  var realUserAgent = (typeof navigator === "undefined" ? "undefined" : (0, _typeof2.default)(navigator)) === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent;
  var userAgent = mockUserAgent || realUserAgent;

  if (userAgent && userAgent.indexOf('Electron') >= 0) {
    return true;
  }

  return false;
}
//# sourceMappingURL=is-electron.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356779, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.window = exports.self = exports.process = exports.global = exports.document = exports.console = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var globals = {
  self: typeof self !== 'undefined' && self,
  window: typeof window !== 'undefined' && window,
  global: typeof global !== 'undefined' && global,
  document: typeof document !== 'undefined' && document,
  process: (typeof process === "undefined" ? "undefined" : (0, _typeof2.default)(process)) === 'object' && process
};
var global_ = globalThis;
exports.global = global_;
var self_ = globals.self || globals.window || globals.global;
exports.self = self_;
var window_ = globals.window || globals.self || globals.global;
exports.window = window_;
var document_ = globals.document || {};
exports.document = document_;
var process_ = globals.process || {};
exports.process = process_;
var console_ = console;
exports.console = console_;
//# sourceMappingURL=globals.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356780, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBrowser;
exports.isMobile = isMobile;

var _isBrowser = _interopRequireDefault(require("./is-browser"));

var _isElectron = _interopRequireDefault(require("./is-electron"));

var window = globalThis;

function isMobile() {
  return typeof window.orientation !== 'undefined';
}

function getBrowser(mockUserAgent) {
  if (!mockUserAgent && !(0, _isBrowser.default)()) {
    return 'Node';
  }

  if ((0, _isElectron.default)(mockUserAgent)) {
    return 'Electron';
  }

  var navigator_ = typeof navigator !== 'undefined' ? navigator : {};
  var userAgent = mockUserAgent || navigator_.userAgent || '';

  if (userAgent.indexOf('Edge') > -1) {
    return 'Edge';
  }

  var isMSIE = userAgent.indexOf('MSIE ') !== -1;
  var isTrident = userAgent.indexOf('Trident/') !== -1;

  if (isMSIE || isTrident) {
    return 'IE';
  }

  if (window.chrome) {
    return 'Chrome';
  }

  if (window.safari) {
    return 'Safari';
  }

  if (window.mozInnerScreenX) {
    return 'Firefox';
  }

  return 'Unknown';
}
//# sourceMappingURL=get-browser.js.map
}, function(modId) { var map = {"./is-browser":1679470356777,"./is-electron":1679470356778}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356781, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assert;

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}
//# sourceMappingURL=assert.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1679470356775);
})()
//miniprogram-npm-outsideDeps=["@babel/runtime/helpers/interopRequireDefault","@babel/runtime/helpers/typeof"]
//# sourceMappingURL=index.js.map