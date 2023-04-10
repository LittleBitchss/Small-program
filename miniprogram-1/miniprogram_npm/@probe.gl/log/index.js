module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1679470356782, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "COLOR", {
  enumerable: true,
  get: function get() {
    return _color.COLOR;
  }
});
Object.defineProperty(exports, "LocalStorage", {
  enumerable: true,
  get: function get() {
    return _localStorage.LocalStorage;
  }
});
Object.defineProperty(exports, "Log", {
  enumerable: true,
  get: function get() {
    return _log.Log;
  }
});
Object.defineProperty(exports, "addColor", {
  enumerable: true,
  get: function get() {
    return _color.addColor;
  }
});
Object.defineProperty(exports, "autobind", {
  enumerable: true,
  get: function get() {
    return _autobind.autobind;
  }
});
exports.default = void 0;
Object.defineProperty(exports, "getHiResTimestamp", {
  enumerable: true,
  get: function get() {
    return _hiResTimestamp.getHiResTimestamp;
  }
});
Object.defineProperty(exports, "leftPad", {
  enumerable: true,
  get: function get() {
    return _formatters.leftPad;
  }
});
Object.defineProperty(exports, "rightPad", {
  enumerable: true,
  get: function get() {
    return _formatters.rightPad;
  }
});

var _log = require("./log");

var _color = require("./utils/color");

var _formatters = require("./utils/formatters");

var _autobind = require("./utils/autobind");

var _localStorage = require("./utils/local-storage");

var _hiResTimestamp = require("./utils/hi-res-timestamp");

require("./init");

var _default = new _log.Log({
  id: '@probe.gl/log'
});

exports.default = _default;
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {"./log":1679470356783,"./utils/color":1679470356786,"./utils/formatters":1679470356785,"./utils/autobind":1679470356787,"./utils/local-storage":1679470356784,"./utils/hi-res-timestamp":1679470356789,"./init":1679470356790}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356783, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Log = void 0;
exports.normalizeArguments = normalizeArguments;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _env = require("@probe.gl/env");

var _localStorage = require("./utils/local-storage");

var _formatters = require("./utils/formatters");

var _color = require("./utils/color");

var _autobind = require("./utils/autobind");

var _assert2 = _interopRequireDefault(require("./utils/assert"));

var _hiResTimestamp = require("./utils/hi-res-timestamp");

var originalConsole = {
  debug: _env.isBrowser ? console.debug || console.log : console.log,
  log: console.log,
  info: console.info,
  warn: console.warn,
  error: console.error
};
var DEFAULT_SETTINGS = {
  enabled: true,
  level: 0
};

function noop() {}

var cache = {};
var ONCE = {
  once: true
};

var Log = function () {
  function Log() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      id: ''
    },
        id = _ref.id;

    (0, _classCallCheck2.default)(this, Log);
    (0, _defineProperty2.default)(this, "id", void 0);
    (0, _defineProperty2.default)(this, "VERSION", _env.VERSION);
    (0, _defineProperty2.default)(this, "_startTs", (0, _hiResTimestamp.getHiResTimestamp)());
    (0, _defineProperty2.default)(this, "_deltaTs", (0, _hiResTimestamp.getHiResTimestamp)());
    (0, _defineProperty2.default)(this, "_storage", void 0);
    (0, _defineProperty2.default)(this, "userData", {});
    (0, _defineProperty2.default)(this, "LOG_THROTTLE_TIMEOUT", 0);
    this.id = id;
    this.userData = {};
    this._storage = new _localStorage.LocalStorage("__probe-".concat(this.id, "__"), DEFAULT_SETTINGS);
    this.timeStamp("".concat(this.id, " started"));
    (0, _autobind.autobind)(this);
    Object.seal(this);
  }

  (0, _createClass2.default)(Log, [{
    key: "level",
    get: function get() {
      return this.getLevel();
    },
    set: function set(newLevel) {
      this.setLevel(newLevel);
    }
  }, {
    key: "isEnabled",
    value: function isEnabled() {
      return this._storage.config.enabled;
    }
  }, {
    key: "getLevel",
    value: function getLevel() {
      return this._storage.config.level;
    }
  }, {
    key: "getTotal",
    value: function getTotal() {
      return Number(((0, _hiResTimestamp.getHiResTimestamp)() - this._startTs).toPrecision(10));
    }
  }, {
    key: "getDelta",
    value: function getDelta() {
      return Number(((0, _hiResTimestamp.getHiResTimestamp)() - this._deltaTs).toPrecision(10));
    }
  }, {
    key: "priority",
    get: function get() {
      return this.level;
    },
    set: function set(newPriority) {
      this.level = newPriority;
    }
  }, {
    key: "getPriority",
    value: function getPriority() {
      return this.level;
    }
  }, {
    key: "enable",
    value: function enable() {
      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this._storage.setConfiguration({
        enabled: enabled
      });

      return this;
    }
  }, {
    key: "setLevel",
    value: function setLevel(level) {
      this._storage.setConfiguration({
        level: level
      });

      return this;
    }
  }, {
    key: "get",
    value: function get(setting) {
      return this._storage.config[setting];
    }
  }, {
    key: "set",
    value: function set(setting, value) {
      this._storage.setConfiguration((0, _defineProperty2.default)({}, setting, value));
    }
  }, {
    key: "settings",
    value: function settings() {
      if (console.table) {
        console.table(this._storage.config);
      } else {
        console.log(this._storage.config);
      }
    }
  }, {
    key: "assert",
    value: function assert(condition, message) {
      (0, _assert2.default)(condition, message);
    }
  }, {
    key: "warn",
    value: function warn(message) {
      return this._getLogFunction(0, message, originalConsole.warn, arguments, ONCE);
    }
  }, {
    key: "error",
    value: function error(message) {
      return this._getLogFunction(0, message, originalConsole.error, arguments);
    }
  }, {
    key: "deprecated",
    value: function deprecated(oldUsage, newUsage) {
      return this.warn("`".concat(oldUsage, "` is deprecated and will be removed in a later version. Use `").concat(newUsage, "` instead"));
    }
  }, {
    key: "removed",
    value: function removed(oldUsage, newUsage) {
      return this.error("`".concat(oldUsage, "` has been removed. Use `").concat(newUsage, "` instead"));
    }
  }, {
    key: "probe",
    value: function probe(logLevel, message) {
      return this._getLogFunction(logLevel, message, originalConsole.log, arguments, {
        time: true,
        once: true
      });
    }
  }, {
    key: "log",
    value: function log(logLevel, message) {
      return this._getLogFunction(logLevel, message, originalConsole.debug, arguments);
    }
  }, {
    key: "info",
    value: function info(logLevel, message) {
      return this._getLogFunction(logLevel, message, console.info, arguments);
    }
  }, {
    key: "once",
    value: function once(logLevel, message) {
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      return this._getLogFunction(logLevel, message, originalConsole.debug || originalConsole.info, arguments, ONCE);
    }
  }, {
    key: "table",
    value: function table(logLevel, _table, columns) {
      if (_table) {
        return this._getLogFunction(logLevel, _table, console.table || noop, columns && [columns], {
          tag: getTableHeader(_table)
        });
      }

      return noop;
    }
  }, {
    key: "image",
    value: function image(_ref2) {
      var logLevel = _ref2.logLevel,
          priority = _ref2.priority,
          _image = _ref2.image,
          _ref2$message = _ref2.message,
          message = _ref2$message === void 0 ? '' : _ref2$message,
          _ref2$scale = _ref2.scale,
          scale = _ref2$scale === void 0 ? 1 : _ref2$scale;

      if (!this._shouldLog(logLevel || priority)) {
        return noop;
      }

      return _env.isBrowser ? logImageInBrowser({
        image: _image,
        message: message,
        scale: scale
      }) : logImageInNode({
        image: _image,
        message: message,
        scale: scale
      });
    }
  }, {
    key: "time",
    value: function time(logLevel, message) {
      return this._getLogFunction(logLevel, message, console.time ? console.time : console.info);
    }
  }, {
    key: "timeEnd",
    value: function timeEnd(logLevel, message) {
      return this._getLogFunction(logLevel, message, console.timeEnd ? console.timeEnd : console.info);
    }
  }, {
    key: "timeStamp",
    value: function timeStamp(logLevel, message) {
      return this._getLogFunction(logLevel, message, console.timeStamp || noop);
    }
  }, {
    key: "group",
    value: function group(logLevel, message) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        collapsed: false
      };
      var options = normalizeArguments({
        logLevel: logLevel,
        message: message,
        opts: opts
      });
      var collapsed = opts.collapsed;
      options.method = (collapsed ? console.groupCollapsed : console.group) || console.info;
      return this._getLogFunction(options);
    }
  }, {
    key: "groupCollapsed",
    value: function groupCollapsed(logLevel, message) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.group(logLevel, message, Object.assign({}, opts, {
        collapsed: true
      }));
    }
  }, {
    key: "groupEnd",
    value: function groupEnd(logLevel) {
      return this._getLogFunction(logLevel, '', console.groupEnd || noop);
    }
  }, {
    key: "withGroup",
    value: function withGroup(logLevel, message, func) {
      this.group(logLevel, message)();

      try {
        func();
      } finally {
        this.groupEnd(logLevel)();
      }
    }
  }, {
    key: "trace",
    value: function trace() {
      if (console.trace) {
        console.trace();
      }
    }
  }, {
    key: "_shouldLog",
    value: function _shouldLog(logLevel) {
      return this.isEnabled() && this.getLevel() >= normalizeLogLevel(logLevel);
    }
  }, {
    key: "_getLogFunction",
    value: function _getLogFunction(logLevel, message, method, args, opts) {
      if (this._shouldLog(logLevel)) {
        var _method;

        opts = normalizeArguments({
          logLevel: logLevel,
          message: message,
          args: args,
          opts: opts
        });
        method = method || opts.method;
        (0, _assert2.default)(method);
        opts.total = this.getTotal();
        opts.delta = this.getDelta();
        this._deltaTs = (0, _hiResTimestamp.getHiResTimestamp)();
        var tag = opts.tag || opts.message;

        if (opts.once) {
          if (!cache[tag]) {
            cache[tag] = (0, _hiResTimestamp.getHiResTimestamp)();
          } else {
            return noop;
          }
        }

        message = decorateMessage(this.id, opts.message, opts);
        return (_method = method).bind.apply(_method, [console, message].concat((0, _toConsumableArray2.default)(opts.args)));
      }

      return noop;
    }
  }]);
  return Log;
}();

exports.Log = Log;
(0, _defineProperty2.default)(Log, "VERSION", _env.VERSION);

function normalizeLogLevel(logLevel) {
  if (!logLevel) {
    return 0;
  }

  var resolvedLevel;

  switch ((0, _typeof2.default)(logLevel)) {
    case 'number':
      resolvedLevel = logLevel;
      break;

    case 'object':
      resolvedLevel = logLevel.logLevel || logLevel.priority || 0;
      break;

    default:
      return 0;
  }

  (0, _assert2.default)(Number.isFinite(resolvedLevel) && resolvedLevel >= 0);
  return resolvedLevel;
}

function normalizeArguments(opts) {
  var logLevel = opts.logLevel,
      message = opts.message;
  opts.logLevel = normalizeLogLevel(logLevel);
  var args = opts.args ? Array.from(opts.args) : [];

  while (args.length && args.shift() !== message) {}

  switch ((0, _typeof2.default)(logLevel)) {
    case 'string':
    case 'function':
      if (message !== undefined) {
        args.unshift(message);
      }

      opts.message = logLevel;
      break;

    case 'object':
      Object.assign(opts, logLevel);
      break;

    default:
  }

  if (typeof opts.message === 'function') {
    opts.message = opts.message();
  }

  var messageType = (0, _typeof2.default)(opts.message);
  (0, _assert2.default)(messageType === 'string' || messageType === 'object');
  return Object.assign(opts, {
    args: args
  }, opts.opts);
}

function decorateMessage(id, message, opts) {
  if (typeof message === 'string') {
    var time = opts.time ? (0, _formatters.leftPad)((0, _formatters.formatTime)(opts.total)) : '';
    message = opts.time ? "".concat(id, ": ").concat(time, "  ").concat(message) : "".concat(id, ": ").concat(message);
    message = (0, _color.addColor)(message, opts.color, opts.background);
  }

  return message;
}

function logImageInNode(_ref3) {
  var image = _ref3.image,
      _ref3$message = _ref3.message,
      message = _ref3$message === void 0 ? '' : _ref3$message,
      _ref3$scale = _ref3.scale,
      scale = _ref3$scale === void 0 ? 1 : _ref3$scale;
  console.warn('removed');
  return noop;
}

function logImageInBrowser(_ref4) {
  var image = _ref4.image,
      _ref4$message = _ref4.message,
      message = _ref4$message === void 0 ? '' : _ref4$message,
      _ref4$scale = _ref4.scale,
      scale = _ref4$scale === void 0 ? 1 : _ref4$scale;

  if (typeof image === 'string') {
    var img = new Image();

    img.onload = function () {
      var _console;

      var args = (0, _formatters.formatImage)(img, message, scale);

      (_console = console).log.apply(_console, (0, _toConsumableArray2.default)(args));
    };

    img.src = image;
    return noop;
  }

  var element = image.nodeName || '';

  if (element.toLowerCase() === 'img') {
    var _console2;

    (_console2 = console).log.apply(_console2, (0, _toConsumableArray2.default)((0, _formatters.formatImage)(image, message, scale)));

    return noop;
  }

  if (element.toLowerCase() === 'canvas') {
    var _img = new Image();

    _img.onload = function () {
      var _console3;

      return (_console3 = console).log.apply(_console3, (0, _toConsumableArray2.default)((0, _formatters.formatImage)(_img, message, scale)));
    };

    _img.src = image.toDataURL();
    return noop;
  }

  return noop;
}

function getTableHeader(table) {
  for (var _key2 in table) {
    for (var title in table[_key2]) {
      return title || 'untitled';
    }
  }

  return 'empty';
}
//# sourceMappingURL=log.js.map
}, function(modId) { var map = {"./utils/local-storage":1679470356784,"./utils/formatters":1679470356785,"./utils/color":1679470356786,"./utils/autobind":1679470356787,"./utils/assert":1679470356788,"./utils/hi-res-timestamp":1679470356789}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356784, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocalStorage = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function getStorage(type) {
  try {
    var storage = window[type];
    var x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return storage;
  } catch (e) {
    return null;
  }
}

var LocalStorage = function () {
  function LocalStorage(id, defaultConfig) {
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'sessionStorage';
    (0, _classCallCheck2.default)(this, LocalStorage);
    (0, _defineProperty2.default)(this, "storage", void 0);
    (0, _defineProperty2.default)(this, "id", void 0);
    (0, _defineProperty2.default)(this, "config", void 0);
    this.storage = getStorage(type);
    this.id = id;
    this.config = defaultConfig;

    this._loadConfiguration();
  }

  (0, _createClass2.default)(LocalStorage, [{
    key: "getConfiguration",
    value: function getConfiguration() {
      return this.config;
    }
  }, {
    key: "setConfiguration",
    value: function setConfiguration(configuration) {
      Object.assign(this.config, configuration);

      if (this.storage) {
        var serialized = JSON.stringify(this.config);
        this.storage.setItem(this.id, serialized);
      }
    }
  }, {
    key: "_loadConfiguration",
    value: function _loadConfiguration() {
      var configuration = {};

      if (this.storage) {
        var serializedConfiguration = this.storage.getItem(this.id);
        configuration = serializedConfiguration ? JSON.parse(serializedConfiguration) : {};
      }

      Object.assign(this.config, configuration);
      return this;
    }
  }]);
  return LocalStorage;
}();

exports.LocalStorage = LocalStorage;
//# sourceMappingURL=local-storage.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356785, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatImage = formatImage;
exports.formatTime = formatTime;
exports.formatValue = formatValue;
exports.leftPad = leftPad;
exports.rightPad = rightPad;

function formatTime(ms) {
  var formatted;

  if (ms < 10) {
    formatted = "".concat(ms.toFixed(2), "ms");
  } else if (ms < 100) {
    formatted = "".concat(ms.toFixed(1), "ms");
  } else if (ms < 1000) {
    formatted = "".concat(ms.toFixed(0), "ms");
  } else {
    formatted = "".concat((ms / 1000).toFixed(2), "s");
  }

  return formatted;
}

function leftPad(string) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
  var padLength = Math.max(length - string.length, 0);
  return "".concat(' '.repeat(padLength)).concat(string);
}

function rightPad(string) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
  var padLength = Math.max(length - string.length, 0);
  return "".concat(string).concat(' '.repeat(padLength));
}

function formatValue(v) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var EPSILON = 1e-16;
  var _opts$isInteger = opts.isInteger,
      isInteger = _opts$isInteger === void 0 ? false : _opts$isInteger;

  if (Array.isArray(v) || ArrayBuffer.isView(v)) {
    return formatArrayValue(v, opts);
  }

  if (!Number.isFinite(v)) {
    return String(v);
  }

  if (Math.abs(v) < EPSILON) {
    return isInteger ? '0' : '0.';
  }

  if (isInteger) {
    return v.toFixed(0);
  }

  if (Math.abs(v) > 100 && Math.abs(v) < 10000) {
    return v.toFixed(0);
  }

  var string = v.toPrecision(2);
  var decimal = string.indexOf('.0');
  return decimal === string.length - 2 ? string.slice(0, -1) : string;
}

function formatArrayValue(v, opts) {
  var _opts$maxElts = opts.maxElts,
      maxElts = _opts$maxElts === void 0 ? 16 : _opts$maxElts,
      _opts$size = opts.size,
      size = _opts$size === void 0 ? 1 : _opts$size;
  var string = '[';

  for (var i = 0; i < v.length && i < maxElts; ++i) {
    if (i > 0) {
      string += ",".concat(i % size === 0 ? ' ' : '');
    }

    string += formatValue(v[i], opts);
  }

  var terminator = v.length > maxElts ? '...' : ']';
  return "".concat(string).concat(terminator);
}

function formatImage(image, message, scale) {
  var maxWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 600;
  var imageUrl = image.src.replace(/\(/g, '%28').replace(/\)/g, '%29');

  if (image.width > maxWidth) {
    scale = Math.min(scale, maxWidth / image.width);
  }

  var width = image.width * scale;
  var height = image.height * scale;
  var style = ['font-size:1px;', "padding:".concat(Math.floor(height / 2), "px ").concat(Math.floor(width / 2), "px;"), "line-height:".concat(height, "px;"), "background:url(".concat(imageUrl, ");"), "background-size:".concat(width, "px ").concat(height, "px;"), 'color:transparent;'].join('');
  return ["".concat(message, " %c+"), style];
}
//# sourceMappingURL=formatters.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356786, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COLOR = void 0;
exports.addColor = addColor;

var _env = require("@probe.gl/env");

var COLOR;
exports.COLOR = COLOR;

(function (COLOR) {
  COLOR[COLOR["BLACK"] = 30] = "BLACK";
  COLOR[COLOR["RED"] = 31] = "RED";
  COLOR[COLOR["GREEN"] = 32] = "GREEN";
  COLOR[COLOR["YELLOW"] = 33] = "YELLOW";
  COLOR[COLOR["BLUE"] = 34] = "BLUE";
  COLOR[COLOR["MAGENTA"] = 35] = "MAGENTA";
  COLOR[COLOR["CYAN"] = 36] = "CYAN";
  COLOR[COLOR["WHITE"] = 37] = "WHITE";
  COLOR[COLOR["BRIGHT_BLACK"] = 90] = "BRIGHT_BLACK";
  COLOR[COLOR["BRIGHT_RED"] = 91] = "BRIGHT_RED";
  COLOR[COLOR["BRIGHT_GREEN"] = 92] = "BRIGHT_GREEN";
  COLOR[COLOR["BRIGHT_YELLOW"] = 93] = "BRIGHT_YELLOW";
  COLOR[COLOR["BRIGHT_BLUE"] = 94] = "BRIGHT_BLUE";
  COLOR[COLOR["BRIGHT_MAGENTA"] = 95] = "BRIGHT_MAGENTA";
  COLOR[COLOR["BRIGHT_CYAN"] = 96] = "BRIGHT_CYAN";
  COLOR[COLOR["BRIGHT_WHITE"] = 97] = "BRIGHT_WHITE";
})(COLOR || (exports.COLOR = COLOR = {}));

function getColor(color) {
  return typeof color === 'string' ? COLOR[color.toUpperCase()] || COLOR.WHITE : color;
}

function addColor(string, color, background) {
  if (!_env.isBrowser && typeof string === 'string') {
    if (color) {
      color = getColor(color);
      string = "\x1B[".concat(color, "m").concat(string, "\x1B[39m");
    }

    if (background) {
      color = getColor(background);
      string = "\x1B[".concat(background + 10, "m").concat(string, "\x1B[49m");
    }
  }

  return string;
}
//# sourceMappingURL=color.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356787, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.autobind = autobind;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function autobind(obj) {
  var predefined = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['constructor'];
  var proto = Object.getPrototypeOf(obj);
  var propNames = Object.getOwnPropertyNames(proto);

  var _iterator = _createForOfIteratorHelper(propNames),
      _step;

  try {
    var _loop = function _loop() {
      var key = _step.value;

      if (typeof obj[key] === 'function') {
        if (!predefined.find(function (name) {
          return key === name;
        })) {
          obj[key] = obj[key].bind(obj);
        }
      }
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
//# sourceMappingURL=autobind.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356788, function(require, module, exports) {


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
__DEFINE__(1679470356789, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHiResTimestamp = getHiResTimestamp;

var _env = require("@probe.gl/env");

function getHiResTimestamp() {
  var timestamp;

  if (_env.isBrowser && 'performance' in _env.window) {
    var _window$performance, _window$performance$n;

    timestamp = _env.window === null || _env.window === void 0 ? void 0 : (_window$performance = _env.window.performance) === null || _window$performance === void 0 ? void 0 : (_window$performance$n = _window$performance.now) === null || _window$performance$n === void 0 ? void 0 : _window$performance$n.call(_window$performance);
  } else if ('hrtime' in _env.process) {
    var _process$hrtime;

    var timeParts = _env.process === null || _env.process === void 0 ? void 0 : (_process$hrtime = _env.process.hrtime) === null || _process$hrtime === void 0 ? void 0 : _process$hrtime.call(_env.process);
    timestamp = timeParts[0] * 1000 + timeParts[1] / 1e6;
  } else {
    timestamp = Date.now();
  }

  return timestamp;
}
//# sourceMappingURL=hi-res-timestamp.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356790, function(require, module, exports) {


globalThis.probe = {};
//# sourceMappingURL=init.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1679470356782);
})()
//miniprogram-npm-outsideDeps=["@babel/runtime/helpers/interopRequireDefault","@babel/runtime/helpers/typeof","@babel/runtime/helpers/toConsumableArray","@babel/runtime/helpers/classCallCheck","@babel/runtime/helpers/createClass","@babel/runtime/helpers/defineProperty","@probe.gl/env"]
//# sourceMappingURL=index.js.map