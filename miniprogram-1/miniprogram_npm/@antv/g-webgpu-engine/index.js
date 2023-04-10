module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1679470356501, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "WebGLEngine", {
  enumerable: true,
  get: function get() {
    return _webgl.WebGLEngine;
  }
});
Object.defineProperty(exports, "WebGPUEngine", {
  enumerable: true,
  get: function get() {
    return _webgpu.WebGPUEngine;
  }
});

var _webgl = require("./webgl");

var _webgpu = require("./webgpu");
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {"./webgl":1679470356502,"./webgpu":1679470356514}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356502, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebGLEngine = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var _inversify = require("inversify");

var _regl = _interopRequireDefault(require("regl"));

var _ReglAttribute = _interopRequireDefault(require("./ReglAttribute"));

var _ReglBuffer = _interopRequireDefault(require("./ReglBuffer"));

var _ReglComputeModel = _interopRequireDefault(require("./ReglComputeModel"));

var _ReglElements = _interopRequireDefault(require("./ReglElements"));

var _ReglFramebuffer = _interopRequireDefault(require("./ReglFramebuffer"));

var _ReglModel = _interopRequireDefault(require("./ReglModel"));

var _ReglTexture2D = _interopRequireDefault(require("./ReglTexture2D"));

var _dec, _class, _temp;

/**
 * regl renderer
 */
var WebGLEngine = (_dec = (0, _inversify.injectable)(), _dec(_class = (_temp = /*#__PURE__*/function () {
  function WebGLEngine() {
    var _this = this;

    (0, _classCallCheck2.default)(this, WebGLEngine);
    this.supportWebGPU = false;
    this.useWGSL = false;
    this.$canvas = void 0;
    this.gl = void 0;
    this.inited = void 0;

    this.createModel = /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(options) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!options.uniforms) {
                  _context2.next = 3;
                  break;
                }

                _context2.next = 3;
                return Promise.all(Object.keys(options.uniforms).map( /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(name) {
                    var texture;
                    return _regenerator.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (!(options.uniforms[name] && options.uniforms[name].load !== undefined)) {
                              _context.next = 5;
                              break;
                            }

                            _context.next = 3;
                            return options.uniforms[name].load();

                          case 3:
                            texture = _context.sent;
                            // @ts-ignore
                            options.uniforms[name] = texture;

                          case 5:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x2) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 3:
                return _context2.abrupt("return", new _ReglModel.default(_this.gl, options));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.createAttribute = function (options) {
      return new _ReglAttribute.default(_this.gl, options);
    };

    this.createBuffer = function (options) {
      return new _ReglBuffer.default(_this.gl, options);
    };

    this.createElements = function (options) {
      return new _ReglElements.default(_this.gl, options);
    };

    this.createTexture2D = function (options) {
      return new _ReglTexture2D.default(_this.gl, options);
    };

    this.createFramebuffer = function (options) {
      return new _ReglFramebuffer.default(_this.gl, options);
    };

    this.useFramebuffer = function (framebuffer, drawCommands) {
      _this.gl({
        framebuffer: framebuffer ? framebuffer.get() : null
      })(drawCommands);
    };

    this.createComputeModel = /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(context) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", new _ReglComputeModel.default(_this.gl, context));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }();

    this.clear = function (options) {
      // @see https://github.com/regl-project/regl/blob/gh-pages/API.md#clear-the-draw-buffer
      var color = options.color,
          depth = options.depth,
          stencil = options.stencil,
          _options$framebuffer = options.framebuffer,
          framebuffer = _options$framebuffer === void 0 ? null : _options$framebuffer;
      var reglClearOptions = {
        color: color,
        depth: depth,
        stencil: stencil
      };
      reglClearOptions.framebuffer = framebuffer === null ? framebuffer : framebuffer.get();

      _this.gl.clear(reglClearOptions);
    };

    this.setScissor = function (scissor) {
      if (_this.gl && _this.gl._gl) {
        // https://developer.mozilla.org/zh-CN/docs/Web/API/WebGLRenderingContext/scissor
        if (scissor.enable && scissor.box) {
          // console.log(scissor.box);
          _this.gl._gl.enable(_gWebgpuCore.gl.SCISSOR_TEST);

          _this.gl._gl.scissor(scissor.box.x, scissor.box.y, scissor.box.width, scissor.box.height);
        } else {
          _this.gl._gl.disable(_gWebgpuCore.gl.SCISSOR_TEST);
        }

        _this.gl._refresh();
      }
    };

    this.viewport = function (_ref4) {
      var x = _ref4.x,
          y = _ref4.y,
          width = _ref4.width,
          height = _ref4.height;

      if (_this.gl && _this.gl._gl) {
        // use WebGL context directly
        // @see https://github.com/regl-project/regl/blob/gh-pages/API.md#unsafe-escape-hatch
        _this.gl._gl.viewport(x, y, width, height);

        _this.gl._refresh();
      }
    };

    this.readPixels = function (options) {
      var framebuffer = options.framebuffer,
          x = options.x,
          y = options.y,
          width = options.width,
          height = options.height;
      var readPixelsOptions = {
        x: x,
        y: y,
        width: width,
        height: height
      };

      if (framebuffer) {
        readPixelsOptions.framebuffer = framebuffer.get();
      }

      return _this.gl.read(readPixelsOptions);
    };

    this.getCanvas = function () {
      return _this.$canvas;
    };

    this.getGLContext = function () {
      return _this.gl._gl;
    };

    this.destroy = function () {
      if (_this.gl) {
        // @see https://github.com/regl-project/regl/blob/gh-pages/API.md#clean-up
        _this.gl.destroy();

        _this.inited = false;
      }
    };
  }

  (0, _createClass2.default)(WebGLEngine, [{
    key: "init",
    value: function () {
      var _init = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(cfg) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!this.inited) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return");

              case 2:
                this.$canvas = cfg.canvas; // tslint:disable-next-line:typedef

                _context4.next = 5;
                return new Promise(function (resolve, reject) {
                  (0, _regl.default)({
                    canvas: cfg.canvas,
                    attributes: {
                      alpha: true,
                      // use TAA instead of MSAA
                      // @see https://www.khronos.org/registry/webgl/specs/1.0/#5.2.1
                      antialias: cfg.antialias,
                      premultipliedAlpha: true // preserveDrawingBuffer: false,

                    },
                    pixelRatio: 1,
                    // TODO: use extensions
                    extensions: ['OES_element_index_uint', 'OES_texture_float', 'OES_standard_derivatives', // wireframe
                    'angle_instanced_arrays' // VSM shadow map
                    ],
                    optionalExtensions: ['EXT_texture_filter_anisotropic', 'EXT_blend_minmax', 'WEBGL_depth_texture'],
                    profile: true,
                    onDone: function onDone(err, r) {
                      if (err || !r) {
                        reject(err);
                      } // @ts-ignore


                      resolve(r);
                    }
                  });
                });

              case 5:
                this.gl = _context4.sent;
                this.inited = true;

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function init(_x4) {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "isFloatSupported",
    value: function isFloatSupported() {
      // @see https://github.com/antvis/GWebGPUEngine/issues/26
      // @ts-ignore
      return this.gl.limits.readFloat;
    }
  }, {
    key: "beginFrame",
    value: function beginFrame() {//
    }
  }, {
    key: "endFrame",
    value: function endFrame() {//
    }
  }]);
  return WebGLEngine;
}(), _temp)) || _class);
exports.WebGLEngine = WebGLEngine;
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"./ReglAttribute":1679470356503,"./ReglBuffer":1679470356504,"./ReglComputeModel":1679470356506,"./ReglElements":1679470356508,"./ReglFramebuffer":1679470356509,"./ReglModel":1679470356510,"./ReglTexture2D":1679470356513}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356503, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * @see https://github.com/regl-project/regl/blob/gh-pages/API.md#attributes
 */
var ReglAttribute = /*#__PURE__*/function () {
  function ReglAttribute(gl, options) {
    (0, _classCallCheck2.default)(this, ReglAttribute);
    this.attribute = void 0;
    this.buffer = void 0;
    var buffer = options.buffer,
        offset = options.offset,
        stride = options.stride,
        normalized = options.normalized,
        size = options.size,
        divisor = options.divisor;
    this.buffer = buffer;
    this.attribute = {
      buffer: buffer.get(),
      offset: offset || 0,
      stride: stride || 0,
      normalized: normalized || false,
      divisor: divisor || 0
    };

    if (size) {
      this.attribute.size = size;
    }
  }

  (0, _createClass2.default)(ReglAttribute, [{
    key: "get",
    value: function get() {
      return this.attribute;
    }
  }, {
    key: "updateBuffer",
    value: function updateBuffer(options) {
      this.buffer.subData(options);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.buffer.destroy();
    }
  }]);
  return ReglAttribute;
}();

exports.default = ReglAttribute;
//# sourceMappingURL=ReglAttribute.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356504, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var _constants = require("./constants");

/**
 * adaptor for regl.Buffer
 * @see https://github.com/regl-project/regl/blob/gh-pages/API.md#buffers
 */
var ReglBuffer = /*#__PURE__*/function () {
  function ReglBuffer(reGl, options) {
    (0, _classCallCheck2.default)(this, ReglBuffer);
    this.buffer = void 0;
    var data = options.data,
        usage = options.usage,
        type = options.type; // @ts-ignore

    this.buffer = reGl.buffer({
      data: data,
      usage: _constants.usageMap[usage || _gWebgpuCore.gl.STATIC_DRAW],
      type: _constants.dataTypeMap[type || _gWebgpuCore.gl.UNSIGNED_BYTE] // length: 0,

    });
  }

  (0, _createClass2.default)(ReglBuffer, [{
    key: "get",
    value: function get() {
      return this.buffer;
    }
  }, {
    key: "destroy",
    value: function destroy() {// this.buffer.destroy();
    }
  }, {
    key: "subData",
    value: function subData(_ref) {
      var data = _ref.data,
          offset = _ref.offset;
      // @ts-ignore
      this.buffer.subdata(data, offset);
    }
  }]);
  return ReglBuffer;
}();

exports.default = ReglBuffer;
//# sourceMappingURL=ReglBuffer.js.map
}, function(modId) { var map = {"./constants":1679470356505}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356505, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cullFaceMap = exports.stencilOpMap = exports.stencilFuncMap = exports.blendFuncMap = exports.blendEquationMap = exports.depthFuncMap = exports.colorSpaceMap = exports.wrapModeMap = exports.filterMap = exports.mipmapMap = exports.formatMap = exports.dataTypeMap = exports.usageMap = exports.primitiveMap = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var _primitiveMap, _usageMap, _dataTypeMap, _formatMap, _mipmapMap, _filterMap, _wrapModeMap, _colorSpaceMap, _depthFuncMap, _blendEquationMap, _blendFuncMap, _stencilFuncMap, _stencilOpMap, _cullFaceMap;

// @see https://github.com/regl-project/regl/blob/gh-pages/lib/constants/primitives.json
var primitiveMap = (_primitiveMap = {}, (0, _defineProperty2.default)(_primitiveMap, _gWebgpuCore.gl.POINTS, 'points'), (0, _defineProperty2.default)(_primitiveMap, _gWebgpuCore.gl.LINES, 'lines'), (0, _defineProperty2.default)(_primitiveMap, _gWebgpuCore.gl.LINE_LOOP, 'line loop'), (0, _defineProperty2.default)(_primitiveMap, _gWebgpuCore.gl.LINE_STRIP, 'line strip'), (0, _defineProperty2.default)(_primitiveMap, _gWebgpuCore.gl.TRIANGLES, 'triangles'), (0, _defineProperty2.default)(_primitiveMap, _gWebgpuCore.gl.TRIANGLE_FAN, 'triangle fan'), (0, _defineProperty2.default)(_primitiveMap, _gWebgpuCore.gl.TRIANGLE_STRIP, 'triangle strip'), _primitiveMap);
exports.primitiveMap = primitiveMap;
var usageMap = (_usageMap = {}, (0, _defineProperty2.default)(_usageMap, _gWebgpuCore.gl.STATIC_DRAW, 'static'), (0, _defineProperty2.default)(_usageMap, _gWebgpuCore.gl.DYNAMIC_DRAW, 'dynamic'), (0, _defineProperty2.default)(_usageMap, _gWebgpuCore.gl.STREAM_DRAW, 'stream'), _usageMap);
exports.usageMap = usageMap;
var dataTypeMap = (_dataTypeMap = {}, (0, _defineProperty2.default)(_dataTypeMap, _gWebgpuCore.gl.BYTE, 'int8'), (0, _defineProperty2.default)(_dataTypeMap, _gWebgpuCore.gl.UNSIGNED_INT, 'int16'), (0, _defineProperty2.default)(_dataTypeMap, _gWebgpuCore.gl.INT, 'int32'), (0, _defineProperty2.default)(_dataTypeMap, _gWebgpuCore.gl.UNSIGNED_BYTE, 'uint8'), (0, _defineProperty2.default)(_dataTypeMap, _gWebgpuCore.gl.UNSIGNED_SHORT, 'uint16'), (0, _defineProperty2.default)(_dataTypeMap, _gWebgpuCore.gl.UNSIGNED_INT, 'uint32'), (0, _defineProperty2.default)(_dataTypeMap, _gWebgpuCore.gl.FLOAT, 'float'), _dataTypeMap);
exports.dataTypeMap = dataTypeMap;
var formatMap = (_formatMap = {}, (0, _defineProperty2.default)(_formatMap, _gWebgpuCore.gl.ALPHA, 'alpha'), (0, _defineProperty2.default)(_formatMap, _gWebgpuCore.gl.LUMINANCE, 'luminance'), (0, _defineProperty2.default)(_formatMap, _gWebgpuCore.gl.LUMINANCE_ALPHA, 'luminance alpha'), (0, _defineProperty2.default)(_formatMap, _gWebgpuCore.gl.RGB, 'rgb'), (0, _defineProperty2.default)(_formatMap, _gWebgpuCore.gl.RGBA, 'rgba'), (0, _defineProperty2.default)(_formatMap, _gWebgpuCore.gl.RGBA4, 'rgba4'), (0, _defineProperty2.default)(_formatMap, _gWebgpuCore.gl.RGB5_A1, 'rgb5 a1'), (0, _defineProperty2.default)(_formatMap, _gWebgpuCore.gl.RGB565, 'rgb565'), (0, _defineProperty2.default)(_formatMap, _gWebgpuCore.gl.DEPTH_COMPONENT, 'depth'), (0, _defineProperty2.default)(_formatMap, _gWebgpuCore.gl.DEPTH_STENCIL, 'depth stencil'), _formatMap);
exports.formatMap = formatMap;
var mipmapMap = (_mipmapMap = {}, (0, _defineProperty2.default)(_mipmapMap, _gWebgpuCore.gl.DONT_CARE, 'dont care'), (0, _defineProperty2.default)(_mipmapMap, _gWebgpuCore.gl.NICEST, 'nice'), (0, _defineProperty2.default)(_mipmapMap, _gWebgpuCore.gl.FASTEST, 'fast'), _mipmapMap);
exports.mipmapMap = mipmapMap;
var filterMap = (_filterMap = {}, (0, _defineProperty2.default)(_filterMap, _gWebgpuCore.gl.NEAREST, 'nearest'), (0, _defineProperty2.default)(_filterMap, _gWebgpuCore.gl.LINEAR, 'linear'), (0, _defineProperty2.default)(_filterMap, _gWebgpuCore.gl.LINEAR_MIPMAP_LINEAR, 'mipmap'), (0, _defineProperty2.default)(_filterMap, _gWebgpuCore.gl.NEAREST_MIPMAP_LINEAR, 'nearest mipmap linear'), (0, _defineProperty2.default)(_filterMap, _gWebgpuCore.gl.LINEAR_MIPMAP_NEAREST, 'linear mipmap nearest'), (0, _defineProperty2.default)(_filterMap, _gWebgpuCore.gl.NEAREST_MIPMAP_NEAREST, 'nearest mipmap nearest'), _filterMap);
exports.filterMap = filterMap;
var wrapModeMap = (_wrapModeMap = {}, (0, _defineProperty2.default)(_wrapModeMap, _gWebgpuCore.gl.REPEAT, 'repeat'), (0, _defineProperty2.default)(_wrapModeMap, _gWebgpuCore.gl.CLAMP_TO_EDGE, 'clamp'), (0, _defineProperty2.default)(_wrapModeMap, _gWebgpuCore.gl.MIRRORED_REPEAT, 'mirror'), _wrapModeMap);
exports.wrapModeMap = wrapModeMap;
var colorSpaceMap = (_colorSpaceMap = {}, (0, _defineProperty2.default)(_colorSpaceMap, _gWebgpuCore.gl.NONE, 'none'), (0, _defineProperty2.default)(_colorSpaceMap, _gWebgpuCore.gl.BROWSER_DEFAULT_WEBGL, 'browser'), _colorSpaceMap);
exports.colorSpaceMap = colorSpaceMap;
var depthFuncMap = (_depthFuncMap = {}, (0, _defineProperty2.default)(_depthFuncMap, _gWebgpuCore.gl.NEVER, 'never'), (0, _defineProperty2.default)(_depthFuncMap, _gWebgpuCore.gl.ALWAYS, 'always'), (0, _defineProperty2.default)(_depthFuncMap, _gWebgpuCore.gl.LESS, 'less'), (0, _defineProperty2.default)(_depthFuncMap, _gWebgpuCore.gl.LEQUAL, 'lequal'), (0, _defineProperty2.default)(_depthFuncMap, _gWebgpuCore.gl.GREATER, 'greater'), (0, _defineProperty2.default)(_depthFuncMap, _gWebgpuCore.gl.GEQUAL, 'gequal'), (0, _defineProperty2.default)(_depthFuncMap, _gWebgpuCore.gl.EQUAL, 'equal'), (0, _defineProperty2.default)(_depthFuncMap, _gWebgpuCore.gl.NOTEQUAL, 'notequal'), _depthFuncMap);
exports.depthFuncMap = depthFuncMap;
var blendEquationMap = (_blendEquationMap = {}, (0, _defineProperty2.default)(_blendEquationMap, _gWebgpuCore.gl.FUNC_ADD, 'add'), (0, _defineProperty2.default)(_blendEquationMap, _gWebgpuCore.gl.MIN_EXT, 'min'), (0, _defineProperty2.default)(_blendEquationMap, _gWebgpuCore.gl.MAX_EXT, 'max'), (0, _defineProperty2.default)(_blendEquationMap, _gWebgpuCore.gl.FUNC_SUBTRACT, 'subtract'), (0, _defineProperty2.default)(_blendEquationMap, _gWebgpuCore.gl.FUNC_REVERSE_SUBTRACT, 'reverse subtract'), _blendEquationMap);
exports.blendEquationMap = blendEquationMap;
var blendFuncMap = (_blendFuncMap = {}, (0, _defineProperty2.default)(_blendFuncMap, _gWebgpuCore.gl.ZERO, 'zero'), (0, _defineProperty2.default)(_blendFuncMap, _gWebgpuCore.gl.ONE, 'one'), (0, _defineProperty2.default)(_blendFuncMap, _gWebgpuCore.gl.SRC_COLOR, 'src color'), (0, _defineProperty2.default)(_blendFuncMap, _gWebgpuCore.gl.ONE_MINUS_SRC_COLOR, 'one minus src color'), (0, _defineProperty2.default)(_blendFuncMap, _gWebgpuCore.gl.SRC_ALPHA, 'src alpha'), (0, _defineProperty2.default)(_blendFuncMap, _gWebgpuCore.gl.ONE_MINUS_SRC_ALPHA, 'one minus src alpha'), (0, _defineProperty2.default)(_blendFuncMap, _gWebgpuCore.gl.DST_COLOR, 'dst color'), (0, _defineProperty2.default)(_blendFuncMap, _gWebgpuCore.gl.ONE_MINUS_DST_COLOR, 'one minus dst color'), (0, _defineProperty2.default)(_blendFuncMap, _gWebgpuCore.gl.DST_ALPHA, 'dst alpha'), (0, _defineProperty2.default)(_blendFuncMap, _gWebgpuCore.gl.ONE_MINUS_DST_ALPHA, 'one minus dst alpha'), (0, _defineProperty2.default)(_blendFuncMap, _gWebgpuCore.gl.CONSTANT_COLOR, 'constant color'), (0, _defineProperty2.default)(_blendFuncMap, _gWebgpuCore.gl.ONE_MINUS_CONSTANT_COLOR, 'one minus constant color'), (0, _defineProperty2.default)(_blendFuncMap, _gWebgpuCore.gl.CONSTANT_ALPHA, 'constant alpha'), (0, _defineProperty2.default)(_blendFuncMap, _gWebgpuCore.gl.ONE_MINUS_CONSTANT_ALPHA, 'one minus constant alpha'), (0, _defineProperty2.default)(_blendFuncMap, _gWebgpuCore.gl.SRC_ALPHA_SATURATE, 'src alpha saturate'), _blendFuncMap);
exports.blendFuncMap = blendFuncMap;
var stencilFuncMap = (_stencilFuncMap = {}, (0, _defineProperty2.default)(_stencilFuncMap, _gWebgpuCore.gl.NEVER, 'never'), (0, _defineProperty2.default)(_stencilFuncMap, _gWebgpuCore.gl.ALWAYS, 'always'), (0, _defineProperty2.default)(_stencilFuncMap, _gWebgpuCore.gl.LESS, 'less'), (0, _defineProperty2.default)(_stencilFuncMap, _gWebgpuCore.gl.LEQUAL, 'lequal'), (0, _defineProperty2.default)(_stencilFuncMap, _gWebgpuCore.gl.GREATER, 'greater'), (0, _defineProperty2.default)(_stencilFuncMap, _gWebgpuCore.gl.GEQUAL, 'gequal'), (0, _defineProperty2.default)(_stencilFuncMap, _gWebgpuCore.gl.EQUAL, 'equal'), (0, _defineProperty2.default)(_stencilFuncMap, _gWebgpuCore.gl.NOTEQUAL, 'notequal'), _stencilFuncMap);
exports.stencilFuncMap = stencilFuncMap;
var stencilOpMap = (_stencilOpMap = {}, (0, _defineProperty2.default)(_stencilOpMap, _gWebgpuCore.gl.ZERO, 'zero'), (0, _defineProperty2.default)(_stencilOpMap, _gWebgpuCore.gl.KEEP, 'keep'), (0, _defineProperty2.default)(_stencilOpMap, _gWebgpuCore.gl.REPLACE, 'replace'), (0, _defineProperty2.default)(_stencilOpMap, _gWebgpuCore.gl.INVERT, 'invert'), (0, _defineProperty2.default)(_stencilOpMap, _gWebgpuCore.gl.INCR, 'increment'), (0, _defineProperty2.default)(_stencilOpMap, _gWebgpuCore.gl.DECR, 'decrement'), (0, _defineProperty2.default)(_stencilOpMap, _gWebgpuCore.gl.INCR_WRAP, 'increment wrap'), (0, _defineProperty2.default)(_stencilOpMap, _gWebgpuCore.gl.DECR_WRAP, 'decrement wrap'), _stencilOpMap);
exports.stencilOpMap = stencilOpMap;
var cullFaceMap = (_cullFaceMap = {}, (0, _defineProperty2.default)(_cullFaceMap, _gWebgpuCore.gl.FRONT, 'front'), (0, _defineProperty2.default)(_cullFaceMap, _gWebgpuCore.gl.BACK, 'back'), _cullFaceMap);
exports.cullFaceMap = cullFaceMap;
//# sourceMappingURL=constants.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356506, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var _isTypedarray = require("../utils/is-typedarray");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* babel-plugin-inline-import './shaders/quad.vert.glsl' */
var quadVert = "attribute vec3 a_Position;\nattribute vec2 a_TexCoord;\n\nvarying vec2 v_TexCoord;\n\nvoid main() {\n  gl_Position = vec4(a_Position, 1.0);\n  v_TexCoord = a_TexCoord;\n}";
var textureId = 0;
var debug = false;
/**
 * adaptor for regl.DrawCommand
 */

var ReglComputeModel = /*#__PURE__*/function () {
  function ReglComputeModel(reGl, context) {
    var _this = this;

    (0, _classCallCheck2.default)(this, ReglComputeModel);
    this.reGl = reGl;
    this.context = context;
    this.entity = (0, _gWebgpuCore.createEntity)();
    this.texFBO = void 0;
    this.computeCommand = void 0;
    this.textureCache = {};
    this.outputTextureName = void 0;
    this.swapOutputTextureName = void 0;
    this.compiledPingpong = void 0;
    this.dynamicPingpong = void 0;
    var uniforms = {};
    this.context.uniforms.forEach(function (uniform) {
      var name = uniform.name,
          type = uniform.type,
          data = uniform.data,
          isReferer = uniform.isReferer,
          storageClass = uniform.storageClass; // store data with a 2D texture

      if (storageClass === _gWebgpuCore.STORAGE_CLASS.StorageBuffer) {
        if (!isReferer) {
          _this.textureCache[name] = _this.calcDataTexture(name, type, data);
          var _this$textureCache$na = _this.textureCache[name],
              width = _this$textureCache$na.textureWidth,
              isOutput = _this$textureCache$na.isOutput;
          uniforms["".concat(name, "Size")] = [width, width];

          if (isOutput) {
            _this.outputTextureName = name;

            if (_this.context.needPingpong) {
              _this.outputTextureName = "".concat(name, "Output");
              _this.textureCache[_this.outputTextureName] = _this.calcDataTexture(name, type, data);
            }
          }
        } else {
          // @ts-ignore
          _this.textureCache[name] = {
            data: undefined
          }; // refer to another kernel's output,
          // the referred kernel may not have been initialized, so we use dynamic way here

          uniforms["".concat(name, "Size")] = function () {
            return (// @ts-ignore
              data.compiledBundle.context.output.textureSize
            );
          };
        }

        uniforms[name] = function () {
          if (debug) {
            console.log("[".concat(_this.entity, "]: ").concat(name, " ").concat(_this.textureCache[name].id));
          }

          return _this.textureCache[name].texture;
        };
      } else if (storageClass === _gWebgpuCore.STORAGE_CLASS.Uniform) {
        if (data && (Array.isArray(data) || (0, _isTypedarray.isTypedArray)(data)) && data.length > 16) {
          // up to mat4 which includes 16 elements
          throw new Error("invalid data type ".concat(type));
        } // get uniform dynamically


        uniforms[name] = function () {
          return uniform.data;
        };
      }
    });

    var _this$getOuputDataTex = this.getOuputDataTexture(),
        textureWidth = _this$getOuputDataTex.textureWidth,
        texelCount = _this$getOuputDataTex.texelCount; // 传入 output 纹理尺寸和数据长度，便于多余的 texel 提前退出


    uniforms.u_OutputTextureSize = [textureWidth, textureWidth];
    uniforms.u_OutputTexelCount = texelCount; // 保存在 Kernel 的上下文中，供其他 Kernel 引用

    this.context.output.textureSize = [textureWidth, textureWidth];
    var drawParams = {
      attributes: {
        a_Position: [[-1, 1, 0], [-1, -1, 0], [1, 1, 0], [1, -1, 0]],
        a_TexCoord: [[0, 1], [0, 0], [1, 1], [1, 0]]
      },
      frag: "#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n#else\n  precision mediump float;\n#endif\n".concat(this.context.shader),
      uniforms: uniforms,
      vert: quadVert,
      // TODO: use a fullscreen triangle instead.
      primitive: 'triangle strip',
      count: 4
    };
    this.computeCommand = this.reGl(drawParams);
  }

  (0, _createClass2.default)(ReglComputeModel, [{
    key: "run",
    value: function run() {
      var _this2 = this;

      if (this.context.maxIteration > 1 && this.context.needPingpong) {
        this.compiledPingpong = true;
      } // need pingpong when (@in@out and execute(10)) or use `setBinding('out', self)`
      // this.needPingpong =
      //   !!(this.context.maxIteration > 1 && this.context.needPingpong);
      // if (this.relativeOutputTextureNames.length) {
      //   const { id, texture } = this.getOuputDataTexture();
      //   this.relativeOutputTextureNames.forEach((name) => {
      //     this.textureCache[name].id = id;
      //     this.textureCache[name].texture = texture;
      //   });
      //   this.swap();
      // }


      if (this.compiledPingpong || this.dynamicPingpong) {
        this.swap();
      }

      this.texFBO = this.reGl.framebuffer({
        color: this.getOuputDataTexture().texture
      });
      this.texFBO.use(function () {
        _this2.computeCommand();
      });

      if (debug) {
        console.log("[".concat(this.entity, "]: output ").concat(this.getOuputDataTexture().id));
      }
    }
  }, {
    key: "readData",
    value: function () {
      var _readData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _this3 = this;

        var pixels, _this$getOuputDataTex2, originalDataLength, elementsPerTexel, _this$getOuputDataTex3, typedArrayConstructor, formattedPixels, i;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.reGl({
                  framebuffer: this.texFBO
                })(function () {
                  pixels = _this3.reGl.read();
                }); // @ts-ignore

                if (!pixels) {
                  _context.next = 6;
                  break;
                }

                _this$getOuputDataTex2 = this.getOuputDataTexture(), originalDataLength = _this$getOuputDataTex2.originalDataLength, elementsPerTexel = _this$getOuputDataTex2.elementsPerTexel, _this$getOuputDataTex3 = _this$getOuputDataTex2.typedArrayConstructor, typedArrayConstructor = _this$getOuputDataTex3 === void 0 ? Float32Array : _this$getOuputDataTex3;
                formattedPixels = [];

                if (elementsPerTexel !== 4) {
                  for (i = 0; i < pixels.length; i += 4) {
                    if (elementsPerTexel === 1) {
                      formattedPixels.push(pixels[i]);
                    } else if (elementsPerTexel === 2) {
                      formattedPixels.push(pixels[i], pixels[i + 1]);
                    } else {
                      formattedPixels.push(pixels[i], pixels[i + 1], pixels[i + 2]);
                    }
                  }
                } else {
                  // @ts-ignore
                  formattedPixels = pixels;
                } // 截取多余的部分
                // @ts-ignore


                return _context.abrupt("return", new typedArrayConstructor(formattedPixels.slice(0, originalDataLength)));

              case 6:
                return _context.abrupt("return", new Float32Array());

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function readData() {
        return _readData.apply(this, arguments);
      }

      return readData;
    }()
  }, {
    key: "confirmInput",
    value: function confirmInput(model, inputName) {
      var inputModel; // refer to self, same as pingpong

      if (this.entity === model.entity) {
        this.dynamicPingpong = true;
        inputModel = this;
      } else {
        inputModel = model;
      }

      this.textureCache[inputName].id = inputModel.getOuputDataTexture().id;
      this.textureCache[inputName].texture = inputModel.getOuputDataTexture().texture;

      if (debug) {
        console.log("[".concat(this.entity, "]: confirm input ").concat(inputName, " from model ").concat(inputModel.entity, ", ").concat(inputModel.getOuputDataTexture().id));
      }
    }
  }, {
    key: "updateUniform",
    value: function updateUniform() {// already get uniform's data dynamically when created, do nothing here
    }
  }, {
    key: "updateBuffer",
    value: function updateBuffer(bufferName, data) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      // regenerate data texture
      var buffer = this.context.uniforms.find(function (_ref) {
        var name = _ref.name;
        return name === bufferName;
      });

      if (buffer) {
        var _this$calcDataTexture = this.calcDataTexture(bufferName, buffer.type, data),
            texture = _this$calcDataTexture.texture,
            paddingData = _this$calcDataTexture.data; // TODO: destroy outdated texture


        this.textureCache[bufferName].data = paddingData;
        this.textureCache[bufferName].texture = texture;
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {// regl will destroy all resources
    }
  }, {
    key: "swap",
    value: function swap() {
      if (!this.swapOutputTextureName) {
        this.createSwapOutputDataTexture();
      }

      if (this.compiledPingpong) {
        var outputTextureUniformName = this.context.output.name;
        this.textureCache[outputTextureUniformName].id = this.getOuputDataTexture().id;
        this.textureCache[outputTextureUniformName].texture = this.getOuputDataTexture().texture;
      }

      var tmp = this.outputTextureName;
      this.outputTextureName = this.swapOutputTextureName;
      this.swapOutputTextureName = tmp;

      if (debug) {
        console.log("[".concat(this.entity, "]: after swap, output ").concat(this.getOuputDataTexture().id));
      }
    }
  }, {
    key: "getOuputDataTexture",
    value: function getOuputDataTexture() {
      return this.textureCache[this.outputTextureName];
    }
  }, {
    key: "createSwapOutputDataTexture",
    value: function createSwapOutputDataTexture() {
      var texture = this.cloneDataTexture(this.getOuputDataTexture());
      this.swapOutputTextureName = "".concat(this.entity, "-swap");
      this.textureCache[this.swapOutputTextureName] = texture;
    }
  }, {
    key: "cloneDataTexture",
    value: function cloneDataTexture(texture) {
      var data = texture.data,
          textureWidth = texture.textureWidth;
      return _objectSpread(_objectSpread({}, texture), {}, {
        id: textureId++,
        // @ts-ignore
        texture: this.reGl.texture({
          width: textureWidth,
          height: textureWidth,
          data: data,
          type: 'float'
        })
      });
    }
  }, {
    key: "calcDataTexture",
    value: function calcDataTexture(name, type, data) {
      var elementsPerTexel = 1;

      if (type === _gWebgpuCore.AST_TOKEN_TYPES.Vector4FloatArray) {
        elementsPerTexel = 4;
      } // 用 0 补全不足 vec4 的部分


      var paddingData = [];

      for (var i = 0; i < data.length; i += elementsPerTexel) {
        if (elementsPerTexel === 1) {
          paddingData.push(data[i], 0, 0, 0);
        } else if (elementsPerTexel === 2) {
          paddingData.push(data[i], data[i + 1], 0, 0);
        } else if (elementsPerTexel === 3) {
          paddingData.push(data[i], data[i + 1], data[i + 2], 0);
        } else if (elementsPerTexel === 4) {
          paddingData.push(data[i], data[i + 1], data[i + 2], data[i + 3]);
        }
      } // 使用纹理存储，例如 Array(8) 使用 3 * 3 纹理，末尾空白使用 0 填充


      var originalDataLength = data.length;
      var texelCount = Math.ceil(originalDataLength / elementsPerTexel);
      var width = Math.ceil(Math.sqrt(texelCount));
      var paddingTexelCount = width * width;

      if (texelCount < paddingTexelCount) {
        paddingData.push.apply(paddingData, (0, _toConsumableArray2.default)(new Array((paddingTexelCount - texelCount) * 4).fill(0)));
      }

      var texture = this.reGl.texture({
        width: width,
        height: width,
        data: paddingData,
        type: 'float'
      });
      return {
        id: textureId++,
        data: paddingData,
        originalDataLength: originalDataLength,
        typedArrayConstructor: (0, _isTypedarray.isTypedArray)(data) ? data.constructor : undefined,
        textureWidth: width,
        texture: texture,
        texelCount: texelCount,
        elementsPerTexel: elementsPerTexel,
        isOutput: name === this.context.output.name
      };
    }
  }]);
  return ReglComputeModel;
}();

exports.default = ReglComputeModel;
//# sourceMappingURL=ReglComputeModel.js.map
}, function(modId) { var map = {"../utils/is-typedarray":1679470356507}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356507, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTypedArray = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]';
var arrayTag = '[object Array]';
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var funcTag = '[object Function]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var objectTag = '[object Object]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';
var float32Tag = '[object Float32Array]';
var float64Tag = '[object Float64Array]';
var int8Tag = '[object Int8Array]';
var int16Tag = '[object Int16Array]';
var int32Tag = '[object Int32Array]';
var uint8Tag = '[object Uint8Array]';
var uint8ClampedTag = '[object Uint8ClampedArray]';
var uint16Tag = '[object Uint16Array]';
var uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */

function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}
/** Used for built-in method references. */


var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

function isLength(value) {
  return typeof value === 'number' && value > -1 && value % 1 === 0 && value <= MAX_SAFE_INTEGER;
}

function isObjectLike(value) {
  return !!value && (0, _typeof2.default)(value) === 'object';
}
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */


var isTypedArray = baseIsTypedArray;
exports.isTypedArray = isTypedArray;
//# sourceMappingURL=is-typedarray.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356508, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var _constants = require("./constants");

/**
 * @see https://github.com/regl-project/regl/blob/gh-pages/API.md#elements
 */
var ReglElements = /*#__PURE__*/function () {
  function ReglElements(reGl, options) {
    (0, _classCallCheck2.default)(this, ReglElements);
    this.elements = void 0;
    var data = options.data,
        usage = options.usage,
        type = options.type,
        count = options.count;
    this.elements = reGl.elements({
      data: data,
      usage: _constants.usageMap[usage || _gWebgpuCore.gl.STATIC_DRAW],
      type: _constants.dataTypeMap[type || _gWebgpuCore.gl.UNSIGNED_BYTE],
      count: count
    });
  }

  (0, _createClass2.default)(ReglElements, [{
    key: "get",
    value: function get() {
      return this.elements;
    }
  }, {
    key: "subData",
    value: function subData(_ref) {
      var data = _ref.data;
      this.elements.subdata(data);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.elements.destroy();
    }
  }]);
  return ReglElements;
}();

exports.default = ReglElements;
//# sourceMappingURL=ReglElements.js.map
}, function(modId) { var map = {"./constants":1679470356505}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356509, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * adaptor for regl.Framebuffer
 * @see https://github.com/regl-project/regl/blob/gh-pages/API.md#framebuffers
 */
var ReglFramebuffer = /*#__PURE__*/function () {
  function ReglFramebuffer(reGl, options) {
    (0, _classCallCheck2.default)(this, ReglFramebuffer);
    this.framebuffer = void 0;
    var width = options.width,
        height = options.height,
        color = options.color,
        colors = options.colors,
        depth = options.depth,
        stencil = options.stencil;
    var framebufferOptions = {
      width: width,
      height: height
    };

    if (Array.isArray(colors)) {
      framebufferOptions.colors = colors.map(function (c) {
        return c.get();
      });
    }

    if (color && typeof color !== 'boolean') {
      framebufferOptions.color = color.get();
    } // TODO: depth & stencil


    this.framebuffer = reGl.framebuffer(framebufferOptions);
  }

  (0, _createClass2.default)(ReglFramebuffer, [{
    key: "get",
    value: function get() {
      return this.framebuffer;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.framebuffer.destroy();
    }
  }, {
    key: "resize",
    value: function resize(_ref) {
      var width = _ref.width,
          height = _ref.height;
      this.framebuffer.resize(width, height);
    }
  }]);
  return ReglFramebuffer;
}();

exports.default = ReglFramebuffer;
//# sourceMappingURL=ReglFramebuffer.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356510, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var _uniform = require("../utils/uniform");

var _constants = require("./constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * adaptor for regl.DrawCommand
 */
var ReglModel = /*#__PURE__*/function () {
  function ReglModel(reGl, options) {
    (0, _classCallCheck2.default)(this, ReglModel);
    this.reGl = void 0;
    this.drawCommand = void 0;
    this.uniforms = {};
    this.reGl = reGl;
    var vs = options.vs,
        fs = options.fs,
        defines = options.defines,
        attributes = options.attributes,
        uniforms = options.uniforms,
        primitive = options.primitive,
        count = options.count,
        elements = options.elements,
        depth = options.depth,
        blend = options.blend,
        stencil = options.stencil,
        cull = options.cull,
        instances = options.instances,
        scissor = options.scissor,
        viewport = options.viewport;
    var reglUniforms = {};

    if (uniforms) {
      this.uniforms = (0, _uniform.extractUniforms)(uniforms);
      Object.keys(uniforms).forEach(function (uniformName) {
        // use regl prop API
        // @ts-ignore
        reglUniforms[uniformName] = reGl.prop(uniformName);
      });
    }

    var reglAttributes = {};
    Object.keys(attributes).forEach(function (name) {
      reglAttributes[name] = attributes[name].get();
    });
    var defineStmts = defines && this.generateDefines(defines) || '';
    var drawParams = {
      attributes: reglAttributes,
      frag: "#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n#else\n  precision mediump float;\n#endif\n".concat(defineStmts, "\n").concat(fs),
      uniforms: reglUniforms,
      vert: "\n".concat(defineStmts, "\n").concat(vs),
      primitive: _constants.primitiveMap[primitive === undefined ? _gWebgpuCore.gl.TRIANGLES : primitive]
    };

    if (instances) {
      drawParams.instances = instances;
    } // elements 中可能包含 count，此时不应传入


    if (count) {
      drawParams.count = count;
    }

    if (elements) {
      drawParams.elements = elements.get();
    }

    if (scissor) {
      drawParams.scissor = scissor;
    }

    if (viewport) {
      drawParams.viewport = viewport;
    }

    this.initDepthDrawParams({
      depth: depth
    }, drawParams);
    this.initBlendDrawParams({
      blend: blend
    }, drawParams);
    this.initStencilDrawParams({
      stencil: stencil
    }, drawParams);
    this.initCullDrawParams({
      cull: cull
    }, drawParams);
    this.drawCommand = reGl(drawParams);
  }

  (0, _createClass2.default)(ReglModel, [{
    key: "addUniforms",
    value: function addUniforms(uniforms) {
      this.uniforms = _objectSpread(_objectSpread({}, this.uniforms), (0, _uniform.extractUniforms)(uniforms));
    }
  }, {
    key: "draw",
    value: function draw(options) {
      var uniforms = _objectSpread(_objectSpread({}, this.uniforms), (0, _uniform.extractUniforms)(options.uniforms || {}));

      var reglDrawProps = {};
      Object.keys(uniforms).forEach(function (uniformName) {
        var type = (0, _typeof2.default)(uniforms[uniformName]);

        if (type === 'boolean' || type === 'number' || Array.isArray(uniforms[uniformName]) || // @ts-ignore
        uniforms[uniformName].BYTES_PER_ELEMENT) {
          reglDrawProps[uniformName] = uniforms[uniformName];
        } else if (type === 'string') {// TODO: image url
        } else {
          reglDrawProps[uniformName] = uniforms[uniformName].get();
        }
      });
      this.drawCommand(reglDrawProps);
    }
  }, {
    key: "destroy",
    value: function destroy() {// don't need do anything since we will call `rendererService.cleanup()`
    }
    /**
     * @see https://github.com/regl-project/regl/blob/gh-pages/API.md#depth-buffer
     */

  }, {
    key: "initDepthDrawParams",
    value: function initDepthDrawParams(_ref, drawParams) {
      var depth = _ref.depth;

      if (depth) {
        drawParams.depth = {
          enable: depth.enable === undefined ? true : !!depth.enable,
          mask: depth.mask === undefined ? true : !!depth.mask,
          func: _constants.depthFuncMap[depth.func || _gWebgpuCore.gl.LESS],
          range: depth.range || [0, 1]
        };
      }
    }
    /**
     * @see https://github.com/regl-project/regl/blob/gh-pages/API.md#blending
     */

  }, {
    key: "initBlendDrawParams",
    value: function initBlendDrawParams(_ref2, drawParams) {
      var blend = _ref2.blend;

      if (blend) {
        var enable = blend.enable,
            func = blend.func,
            equation = blend.equation,
            _blend$color = blend.color,
            color = _blend$color === void 0 ? [0, 0, 0, 0] : _blend$color; // @ts-ignore

        drawParams.blend = {
          enable: !!enable,
          func: {
            srcRGB: _constants.blendFuncMap[func && func.srcRGB || _gWebgpuCore.gl.SRC_ALPHA],
            srcAlpha: _constants.blendFuncMap[func && func.srcAlpha || _gWebgpuCore.gl.SRC_ALPHA],
            dstRGB: _constants.blendFuncMap[func && func.dstRGB || _gWebgpuCore.gl.ONE_MINUS_SRC_ALPHA],
            dstAlpha: _constants.blendFuncMap[func && func.dstAlpha || _gWebgpuCore.gl.ONE_MINUS_SRC_ALPHA]
          },
          equation: {
            rgb: _constants.blendEquationMap[equation && equation.rgb || _gWebgpuCore.gl.FUNC_ADD],
            alpha: _constants.blendEquationMap[equation && equation.alpha || _gWebgpuCore.gl.FUNC_ADD]
          },
          color: color
        };
      }
    }
    /**
     * @see https://github.com/regl-project/regl/blob/gh-pages/API.md#stencil
     */

  }, {
    key: "initStencilDrawParams",
    value: function initStencilDrawParams(_ref3, drawParams) {
      var stencil = _ref3.stencil;

      if (stencil) {
        var enable = stencil.enable,
            _stencil$mask = stencil.mask,
            mask = _stencil$mask === void 0 ? -1 : _stencil$mask,
            _stencil$func = stencil.func,
            func = _stencil$func === void 0 ? {
          cmp: _gWebgpuCore.gl.ALWAYS,
          ref: 0,
          mask: -1
        } : _stencil$func,
            _stencil$opFront = stencil.opFront,
            opFront = _stencil$opFront === void 0 ? {
          fail: _gWebgpuCore.gl.KEEP,
          zfail: _gWebgpuCore.gl.KEEP,
          zpass: _gWebgpuCore.gl.KEEP
        } : _stencil$opFront,
            _stencil$opBack = stencil.opBack,
            opBack = _stencil$opBack === void 0 ? {
          fail: _gWebgpuCore.gl.KEEP,
          zfail: _gWebgpuCore.gl.KEEP,
          zpass: _gWebgpuCore.gl.KEEP
        } : _stencil$opBack;
        drawParams.stencil = {
          enable: !!enable,
          mask: mask,
          func: _objectSpread(_objectSpread({}, func), {}, {
            cmp: _constants.stencilFuncMap[func.cmp]
          }),
          opFront: {
            fail: _constants.stencilOpMap[opFront.fail],
            zfail: _constants.stencilOpMap[opFront.zfail],
            zpass: _constants.stencilOpMap[opFront.zpass]
          },
          opBack: {
            fail: _constants.stencilOpMap[opBack.fail],
            zfail: _constants.stencilOpMap[opBack.zfail],
            zpass: _constants.stencilOpMap[opBack.zpass]
          }
        };
      }
    }
    /**
     * @see https://github.com/regl-project/regl/blob/gh-pages/API.md#culling
     */

  }, {
    key: "initCullDrawParams",
    value: function initCullDrawParams(_ref4, drawParams) {
      var cull = _ref4.cull;

      if (cull) {
        var enable = cull.enable,
            _cull$face = cull.face,
            face = _cull$face === void 0 ? _gWebgpuCore.gl.BACK : _cull$face;
        drawParams.cull = {
          enable: !!enable,
          face: _constants.cullFaceMap[face]
        };
      }
    }
  }, {
    key: "generateDefines",
    value: function generateDefines(defines) {
      return Object.keys(defines).map(function (name) {
        return "#define ".concat(name, " ").concat(Number(defines[name]));
      }).join('\n');
    }
  }]);
  return ReglModel;
}();

exports.default = ReglModel;
//# sourceMappingURL=ReglModel.js.map
}, function(modId) { var map = {"../utils/uniform":1679470356511,"./constants":1679470356505}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356511, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractUniforms = extractUniforms;

var _isObject = require("./is-object");

var _isTypedarray = require("./is-typedarray");

/**
 * 考虑结构体命名, eg:
 * a: { b: 1 }  ->  'a.b'
 * a: [ { b: 1 } ] -> 'a[0].b'
 */
function extractUniforms(uniforms) {
  var extractedUniforms = {};
  Object.keys(uniforms).forEach(function (uniformName) {
    extractUniformsRecursively(uniformName, uniforms[uniformName], extractedUniforms, '');
  });
  return extractedUniforms;
}

function extractUniformsRecursively(uniformName, uniformValue, uniforms, prefix) {
  if (uniformValue === null || typeof uniformValue === 'number' || // u_A: 1
  typeof uniformValue === 'boolean' || // u_A: false
  Array.isArray(uniformValue) && typeof uniformValue[0] === 'number' || // u_A: [1, 2, 3]
  (0, _isTypedarray.isTypedArray)(uniformValue) || // u_A: Float32Array
  // @ts-ignore
  uniformValue === '' || // @ts-ignore
  uniformValue.resize !== undefined) {
    uniforms["".concat(prefix && prefix + '.').concat(uniformName)] = uniformValue;
    return;
  } // u_Struct.a.b.c


  if ((0, _isObject.isObject)(uniformValue)) {
    Object.keys(uniformValue).forEach(function (childName) {
      extractUniformsRecursively(childName, // @ts-ignore
      uniformValue[childName], uniforms, "".concat(prefix && prefix + '.').concat(uniformName));
    });
  } // u_Struct[0].a


  if (Array.isArray(uniformValue)) {
    // @ts-ignore
    uniformValue.forEach(function (child, idx) {
      Object.keys(child).forEach(function (childName) {
        extractUniformsRecursively(childName, // @ts-ignore
        child[childName], uniforms, "".concat(prefix && prefix + '.').concat(uniformName, "[").concat(idx, "]"));
      });
    });
  }
}
//# sourceMappingURL=uniform.js.map
}, function(modId) { var map = {"./is-object":1679470356512,"./is-typedarray":1679470356507}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356512, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObject = isObject;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function isObject(value) {
  var type = (0, _typeof2.default)(value);
  return value != null && (type === 'object' || type === 'function');
}
//# sourceMappingURL=is-object.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356513, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var _constants = require("./constants");

/**
 * adaptor for regl.Buffer
 * @see https://github.com/regl-project/regl/blob/gh-pages/API.md#buffers
 */
var ReglTexture2D = /*#__PURE__*/function () {
  function ReglTexture2D(reGl, options) {
    (0, _classCallCheck2.default)(this, ReglTexture2D);
    this.texture = void 0;
    this.width = void 0;
    this.height = void 0;
    var data = options.data,
        _options$type = options.type,
        type = _options$type === void 0 ? _gWebgpuCore.gl.UNSIGNED_BYTE : _options$type,
        width = options.width,
        height = options.height,
        _options$flipY = options.flipY,
        flipY = _options$flipY === void 0 ? false : _options$flipY,
        _options$format = options.format,
        format = _options$format === void 0 ? _gWebgpuCore.gl.RGBA : _options$format,
        _options$mipmap = options.mipmap,
        mipmap = _options$mipmap === void 0 ? false : _options$mipmap,
        _options$wrapS = options.wrapS,
        wrapS = _options$wrapS === void 0 ? _gWebgpuCore.gl.CLAMP_TO_EDGE : _options$wrapS,
        _options$wrapT = options.wrapT,
        wrapT = _options$wrapT === void 0 ? _gWebgpuCore.gl.CLAMP_TO_EDGE : _options$wrapT,
        _options$aniso = options.aniso,
        aniso = _options$aniso === void 0 ? 0 : _options$aniso,
        _options$alignment = options.alignment,
        alignment = _options$alignment === void 0 ? 1 : _options$alignment,
        _options$premultiplyA = options.premultiplyAlpha,
        premultiplyAlpha = _options$premultiplyA === void 0 ? false : _options$premultiplyA,
        _options$mag = options.mag,
        mag = _options$mag === void 0 ? _gWebgpuCore.gl.NEAREST : _options$mag,
        _options$min = options.min,
        min = _options$min === void 0 ? _gWebgpuCore.gl.NEAREST : _options$min,
        _options$colorSpace = options.colorSpace,
        colorSpace = _options$colorSpace === void 0 ? _gWebgpuCore.gl.BROWSER_DEFAULT_WEBGL : _options$colorSpace;
    this.width = width;
    this.height = height;
    var textureOptions = {
      width: width,
      height: height,
      // @ts-ignore
      type: _constants.dataTypeMap[type],
      format: _constants.formatMap[format],
      wrapS: _constants.wrapModeMap[wrapS],
      wrapT: _constants.wrapModeMap[wrapT],
      // @ts-ignore
      mag: _constants.filterMap[mag],
      min: _constants.filterMap[min],
      alignment: alignment,
      flipY: flipY,
      colorSpace: _constants.colorSpaceMap[colorSpace],
      premultiplyAlpha: premultiplyAlpha,
      aniso: aniso
    };

    if (data) {
      textureOptions.data = data;
    }

    if (typeof mipmap === 'number') {
      textureOptions.mipmap = _constants.mipmapMap[mipmap];
    } else if (typeof mipmap === 'boolean') {
      textureOptions.mipmap = mipmap;
    }

    this.texture = reGl.texture(textureOptions);
  }

  (0, _createClass2.default)(ReglTexture2D, [{
    key: "get",
    value: function get() {
      return this.texture;
    }
  }, {
    key: "update",
    value: function update() {
      // @ts-ignore
      this.texture._texture.bind();
    }
  }, {
    key: "resize",
    value: function resize(_ref) {
      var width = _ref.width,
          height = _ref.height;
      this.texture.resize(width, height);
      this.width = width;
      this.height = height;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.texture.destroy();
    }
  }]);
  return ReglTexture2D;
}();

exports.default = ReglTexture2D;
//# sourceMappingURL=ReglTexture2D.js.map
}, function(modId) { var map = {"./constants":1679470356505}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356514, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebGPUEngine = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var WebGPUConstants = _interopRequireWildcard(require("@webgpu/types/dist/constants"));

var _inversify = require("inversify");

var _glslang = _interopRequireDefault(require("./glslang"));

var _WebGPUAttribute = _interopRequireDefault(require("./WebGPUAttribute"));

var _WebGPUBuffer = _interopRequireDefault(require("./WebGPUBuffer"));

var _WebGPUComputeModel = _interopRequireDefault(require("./WebGPUComputeModel"));

var _WebGPUElements = _interopRequireDefault(require("./WebGPUElements"));

var _WebGPUFramebuffer = _interopRequireDefault(require("./WebGPUFramebuffer"));

var _WebGPUModel = _interopRequireDefault(require("./WebGPUModel"));

var _WebGPUTexture2D = _interopRequireDefault(require("./WebGPUTexture2D"));

var _dec, _class, _temp;

/**
 * regl renderer
 */
var WebGPUEngine = (_dec = (0, _inversify.injectable)(), _dec(_class = (_temp = /*#__PURE__*/function () {
  function WebGPUEngine() {
    var _this = this;

    (0, _classCallCheck2.default)(this, WebGPUEngine);
    this.supportWebGPU = true;
    this.useWGSL = false;
    this.options = void 0;
    this.canvas = void 0;
    this.context = void 0;
    this.glslang = void 0;
    this.adapter = void 0;
    this.device = void 0;
    this.swapChain = void 0;
    this.mainPassSampleCount = void 0;
    this.mainTexture = void 0;
    this.depthTexture = void 0;
    this.mainColorAttachments = void 0;
    this.mainTextureExtends = void 0;
    this.mainDepthAttachment = void 0;
    this.uploadEncoder = void 0;
    this.renderEncoder = void 0;
    this.computeEncoder = void 0;
    this.renderTargetEncoder = void 0;
    this.commandBuffers = new Array(4).fill(undefined);
    this.currentRenderPass = null;
    this.mainRenderPass = null;
    this.currentRenderTargetViewDescriptor = void 0;
    this.currentComputePass = null;
    this.bundleEncoder = void 0;
    this.tempBuffers = [];
    this.currentRenderTarget = null;
    this.uploadEncoderDescriptor = {
      label: 'upload'
    };
    this.renderEncoderDescriptor = {
      label: 'render'
    };
    this.renderTargetEncoderDescriptor = {
      label: 'renderTarget'
    };
    this.computeEncoderDescriptor = {
      label: 'compute'
    };
    this.pipelines = {};
    this.computePipelines = {};
    this.defaultSampleCount = 4;
    this.clearDepthValue = 1;
    this.clearStencilValue = 0;
    this.transientViewport = {
      x: Infinity,
      y: 0,
      width: 0,
      height: 0
    };
    this.cachedViewport = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };

    this.clear = function (options) {
      var framebuffer = options.framebuffer,
          color = options.color,
          depth = options.depth,
          stencil = options.stencil;

      if (_this.options.supportCompute) {
        _this.startComputePass();
      } // We need to recreate the render pass so that the new parameters for clear color / depth / stencil are taken into account


      if (_this.currentRenderTarget) {
        if (_this.currentRenderPass) {
          _this.endRenderTargetRenderPass();
        }

        _this.startRenderTargetRenderPass(_this.currentRenderTarget, color ? color : null, !!depth, !!stencil);
      } else {
        // if (this.useReverseDepthBuffer) {
        //     this._depthCullingState.depthFunc = Constants.GREATER;
        // }
        _this.mainColorAttachments[0].loadValue = color ? color : WebGPUConstants.LoadOp.Load;
        _this.mainDepthAttachment.depthLoadValue = depth ? depth : WebGPUConstants.LoadOp.Load;
        _this.mainDepthAttachment.stencilLoadValue = stencil ? _this.clearStencilValue : WebGPUConstants.LoadOp.Load;

        if (_this.mainRenderPass) {
          _this.endMainRenderPass();
        }

        _this.startMainRenderPass();
      }
    };

    this.createModel = /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(options) {
        var model;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                model = new _WebGPUModel.default(_this, options);
                _context.next = 3;
                return model.init();

              case 3:
                return _context.abrupt("return", model);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.createAttribute = function (options) {
      return new _WebGPUAttribute.default(_this, options);
    };

    this.createBuffer = function (options) {
      return new _WebGPUBuffer.default(_this, options);
    };

    this.createElements = function (options) {
      return new _WebGPUElements.default(_this, options);
    };

    this.createTexture2D = function (options) {
      return new _WebGPUTexture2D.default(_this, options);
    };

    this.createFramebuffer = function (options) {
      return new _WebGPUFramebuffer.default(_this, options);
    };

    this.useFramebuffer = function (framebuffer, drawCommands) {
      // bind
      if (_this.currentRenderTarget) {
        _this.unbindFramebuffer(_this.currentRenderTarget);
      }

      _this.currentRenderTarget = framebuffer; // TODO: use mipmap options in framebuffer

      _this.currentRenderTargetViewDescriptor = {
        dimension: WebGPUConstants.TextureViewDimension.E2d,
        // mipLevelCount: bindWithMipMaps ? WebGPUTextureHelper.computeNumMipmapLevels(texture.width, texture.height) - lodLevel : 1,
        // baseArrayLayer: faceIndex,
        // baseMipLevel: lodLevel,
        arrayLayerCount: 1,
        aspect: WebGPUConstants.TextureAspect.All
      };
      _this.currentRenderPass = null;
      drawCommands();
    };

    this.createComputeModel = /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(context) {
        var model;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                model = new _WebGPUComputeModel.default(_this, context);
                _context2.next = 3;
                return model.init();

              case 3:
                return _context2.abrupt("return", model);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    this.getCanvas = function () {
      return _this.canvas;
    };

    this.getGLContext = function () {
      throw new Error('Method not implemented.');
    };

    this.viewport = function (_ref3) {
      var x = _ref3.x,
          y = _ref3.y,
          width = _ref3.width,
          height = _ref3.height;

      if (!_this.currentRenderPass) {
        // call viewport() before current render pass created
        _this.transientViewport = {
          x: x,
          y: y,
          width: width,
          height: height
        };
      } else if (_this.transientViewport.x !== Infinity) {
        var renderPass = _this.getCurrentRenderPass(); // @see https://gpuweb.github.io/gpuweb/#dom-gpurenderpassencoder-setviewport


        renderPass.setViewport(_this.transientViewport.x, _this.transientViewport.y, _this.transientViewport.width, _this.transientViewport.height, 0, 1);
      } else if (x !== _this.cachedViewport.x || y !== _this.cachedViewport.y || width !== _this.cachedViewport.width || height !== _this.cachedViewport.height) {
        _this.cachedViewport = {
          x: x,
          y: y,
          width: width,
          height: height
        };

        var _renderPass = _this.getCurrentRenderPass();

        _renderPass.setViewport(x, y, width, height, 0, 1);
      }
    };

    this.readPixels = function (options) {
      throw new Error('Method not implemented.');
    };
  }

  (0, _createClass2.default)(WebGPUEngine, [{
    key: "isFloatSupported",
    value: function isFloatSupported() {
      return true;
    }
  }, {
    key: "init",
    value: function () {
      var _init = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(config) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.canvas = config.canvas;
                this.options = config;
                this.useWGSL = !!config.useWGSL;
                this.mainPassSampleCount = config.antialiasing ? this.defaultSampleCount : 1;
                _context3.next = 6;
                return this.initGlslang();

              case 6:
                this.initContextAndSwapChain();
                this.initMainAttachments();

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function init(_x3) {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "setScissor",
    value: function setScissor(scissor) {
      throw new Error('Method not implemented.');
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.mainTexture) {
        this.mainTexture.destroy();
      }

      if (this.depthTexture) {
        this.depthTexture.destroy();
      }

      this.tempBuffers.forEach(function (buffer) {
        return buffer.destroy();
      });
      this.tempBuffers = [];
    }
  }, {
    key: "beginFrame",
    value: function beginFrame() {
      this.uploadEncoder = this.device.createCommandEncoder(this.uploadEncoderDescriptor);
      this.renderEncoder = this.device.createCommandEncoder(this.renderEncoderDescriptor);
      this.renderTargetEncoder = this.device.createCommandEncoder(this.renderTargetEncoderDescriptor);

      if (this.options.supportCompute) {
        this.computeEncoder = this.device.createCommandEncoder(this.computeEncoderDescriptor);
      }
    }
  }, {
    key: "endFrame",
    value: function endFrame() {
      if (this.options.supportCompute) {
        this.endComputePass();
      }

      this.endMainRenderPass();
      this.commandBuffers[0] = this.uploadEncoder.finish();
      this.commandBuffers[1] = this.renderEncoder.finish();

      if (this.options.supportCompute) {
        this.commandBuffers[2] = this.computeEncoder.finish();
      }

      this.commandBuffers[3] = this.renderTargetEncoder.finish();

      if (_gWebgpuCore.isSafari) {
        this.device // @ts-ignore
        .getQueue().submit(this.commandBuffers.filter(function (buffer) {
          return buffer;
        }));
      } else {
        this.device.defaultQueue.submit(this.commandBuffers.filter(function (buffer) {
          return buffer;
        }));
      }
    }
  }, {
    key: "getCurrentRenderPass",
    value: function getCurrentRenderPass() {
      if (this.currentRenderTarget && !this.currentRenderPass) {
        this.startRenderTargetRenderPass(this.currentRenderTarget, null, false, false);
      } else if (!this.currentRenderPass) {
        this.startMainRenderPass();
      }

      return this.currentRenderPass;
    }
  }, {
    key: "initGlslang",
    value: function () {
      var _initGlslang = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var _navigator, _navigator$gpu;

        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _glslang.default)();

              case 2:
                this.glslang = _context4.sent;
                _context4.next = 5;
                return (_navigator = navigator) === null || _navigator === void 0 ? void 0 : (_navigator$gpu = _navigator.gpu) === null || _navigator$gpu === void 0 ? void 0 : _navigator$gpu.requestAdapter();

              case 5:
                this.adapter = _context4.sent;
                _context4.next = 8;
                return this.adapter.requestDevice();

              case 8:
                this.device = _context4.sent;

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function initGlslang() {
        return _initGlslang.apply(this, arguments);
      }

      return initGlslang;
    }()
  }, {
    key: "initContextAndSwapChain",
    value: function initContextAndSwapChain() {
      this.context = this.canvas.getContext(_gWebgpuCore.isSafari ? 'gpu' : 'gpupresent');
      this.swapChain = this.context.configureSwapChain({
        device: this.device,
        format: this.options.swapChainFormat,
        usage: WebGPUConstants.TextureUsage.OutputAttachment | WebGPUConstants.TextureUsage.CopySrc
      });
    }
  }, {
    key: "initMainAttachments",
    value: function initMainAttachments() {
      this.mainTextureExtends = {
        width: this.canvas.width,
        height: this.canvas.height,
        depth: 1
      };

      if (this.options.antialiasing) {
        var mainTextureDescriptor = {
          size: this.mainTextureExtends,
          // TODO: arrayLayerCount is deprecated: use size.depth
          // arrayLayerCount: 1,
          mipLevelCount: 1,
          sampleCount: this.mainPassSampleCount,
          dimension: WebGPUConstants.TextureDimension.E2d,
          format: WebGPUConstants.TextureFormat.BGRA8Unorm,
          usage: WebGPUConstants.TextureUsage.OutputAttachment
        };

        if (this.mainTexture) {
          this.mainTexture.destroy();
        }

        this.mainTexture = this.device.createTexture(mainTextureDescriptor);
        this.mainColorAttachments = [{
          attachment: _gWebgpuCore.isSafari ? // @ts-ignore
          this.mainTexture.createDefaultView() : this.mainTexture.createView(),
          loadValue: [0, 0, 0, 1],
          storeOp: WebGPUConstants.StoreOp.Store
        }];
      } else {
        this.mainColorAttachments = [{
          attachment: _gWebgpuCore.isSafari ? // @ts-ignore
          this.swapChain.getCurrentTexture().createDefaultView() : this.swapChain.getCurrentTexture().createView(),
          loadValue: [0, 0, 0, 1],
          storeOp: WebGPUConstants.StoreOp.Store
        }];
      }

      var depthTextureDescriptor = {
        size: this.mainTextureExtends,
        // arrayLayerCount: 1,
        mipLevelCount: 1,
        sampleCount: this.mainPassSampleCount,
        dimension: WebGPUConstants.TextureDimension.E2d,
        format: _gWebgpuCore.isSafari ? 'depth32float-stencil8' : WebGPUConstants.TextureFormat.Depth24PlusStencil8,
        usage: WebGPUConstants.TextureUsage.OutputAttachment
      };

      if (this.depthTexture) {
        this.depthTexture.destroy();
      }

      this.depthTexture = this.device.createTexture( // @ts-ignore
      depthTextureDescriptor);
      this.mainDepthAttachment = {
        attachment: _gWebgpuCore.isSafari ? // @ts-ignore
        this.depthTexture.createDefaultView() : this.depthTexture.createView(),
        depthLoadValue: this.clearDepthValue,
        depthStoreOp: WebGPUConstants.StoreOp.Store,
        stencilLoadValue: this.clearStencilValue,
        stencilStoreOp: WebGPUConstants.StoreOp.Store
      };
    }
  }, {
    key: "startComputePass",
    value: function startComputePass() {
      if (this.currentComputePass) {
        this.endComputePass();
      }

      this.currentComputePass = this.computeEncoder.beginComputePass();
    }
  }, {
    key: "startMainRenderPass",
    value: function startMainRenderPass() {
      if (this.currentRenderPass && !this.currentRenderTarget) {
        this.endMainRenderPass();
      } // Resolve in case of MSAA


      if (this.options.antialiasing) {
        this.mainColorAttachments[0].resolveTarget = _gWebgpuCore.isSafari ? // @ts-ignore
        this.swapChain.getCurrentTexture().createDefaultView() : this.swapChain.getCurrentTexture().createView();
      } else {
        this.mainColorAttachments[0].attachment = _gWebgpuCore.isSafari ? // @ts-ignore
        this.swapChain.getCurrentTexture().createDefaultView() : this.swapChain.getCurrentTexture().createView();
      }

      this.currentRenderPass = this.renderEncoder.beginRenderPass({
        colorAttachments: this.mainColorAttachments,
        depthStencilAttachment: this.mainDepthAttachment // TODO: use framebuffer's depth & stencil

      });
      this.mainRenderPass = this.currentRenderPass;

      if (this.cachedViewport) {
        this.viewport(this.cachedViewport);
      }
    }
  }, {
    key: "startRenderTargetRenderPass",
    value: function startRenderTargetRenderPass(renderTarget, clearColor, clearDepth) {
      var _renderTarget$get$col, _renderTarget$get$dep;

      var clearStencil = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var gpuTexture = (_renderTarget$get$col = renderTarget.get().color) === null || _renderTarget$get$col === void 0 ? void 0 : _renderTarget$get$col.texture;
      var colorTextureView;

      if (gpuTexture) {
        colorTextureView = gpuTexture.createView(this.currentRenderTargetViewDescriptor);
      }

      var depthStencilTexture = (_renderTarget$get$dep = renderTarget.get().depth) === null || _renderTarget$get$dep === void 0 ? void 0 : _renderTarget$get$dep.texture;
      var depthStencilTextureView;

      if (depthStencilTexture) {
        depthStencilTextureView = depthStencilTexture.createView();
      }

      var renderPass = this.renderTargetEncoder.beginRenderPass({
        colorAttachments: [{
          attachment: colorTextureView,
          loadValue: clearColor !== null ? clearColor : WebGPUConstants.LoadOp.Load,
          storeOp: WebGPUConstants.StoreOp.Store
        }],
        depthStencilAttachment: depthStencilTexture && depthStencilTextureView ? {
          attachment: depthStencilTextureView,
          depthLoadValue: clearDepth ? this.clearDepthValue : WebGPUConstants.LoadOp.Load,
          depthStoreOp: WebGPUConstants.StoreOp.Store,
          stencilLoadValue: clearStencil ? this.clearStencilValue : WebGPUConstants.LoadOp.Load,
          stencilStoreOp: WebGPUConstants.StoreOp.Store
        } : undefined
      });
      this.currentRenderPass = renderPass;

      if (this.cachedViewport) {
        this.viewport(this.cachedViewport);
      } // TODO WEBGPU set the scissor rect and the stencil reference value

    }
  }, {
    key: "endMainRenderPass",
    value: function endMainRenderPass() {
      if (this.currentRenderPass === this.mainRenderPass && this.currentRenderPass !== null) {
        this.currentRenderPass.endPass();
        this.resetCachedViewport();
        this.currentRenderPass = null;
        this.mainRenderPass = null;
      }
    }
  }, {
    key: "endComputePass",
    value: function endComputePass() {
      if (this.currentComputePass) {
        this.currentComputePass.endPass();
        this.currentComputePass = null;
      }
    }
  }, {
    key: "endRenderTargetRenderPass",
    value: function endRenderTargetRenderPass() {
      if (this.currentRenderPass) {
        this.currentRenderPass.endPass();
        this.resetCachedViewport();
      }
    }
  }, {
    key: "resetCachedViewport",
    value: function resetCachedViewport() {
      this.cachedViewport = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }
  }, {
    key: "unbindFramebuffer",
    value: function unbindFramebuffer(framebuffer) {
      // unbind
      if (this.currentRenderPass && this.currentRenderPass !== this.mainRenderPass) {
        this.endRenderTargetRenderPass();
      }

      this.transientViewport.x = Infinity;
      this.currentRenderTarget = null; // if (texture.generateMipMaps && !disableGenerateMipMaps && !texture.isCube) {
      //   this._generateMipmaps(texture);
      // }

      this.currentRenderPass = this.mainRenderPass;
    }
  }]);
  return WebGPUEngine;
}(), _temp)) || _class);
exports.WebGPUEngine = WebGPUEngine;
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"./glslang":1679470356515,"./WebGPUAttribute":1679470356517,"./WebGPUBuffer":1679470356518,"./WebGPUComputeModel":1679470356519,"./WebGPUElements":1679470356521,"./WebGPUFramebuffer":1679470356522,"./WebGPUModel":1679470356523,"./WebGPUTexture2D":1679470356525}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356515, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dom = require("../utils/dom");

var glslang;

function _default() {
  return _ref.apply(this, arguments);
}

function _ref() {
  _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!glslang) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", glslang);

          case 2:
            _context.next = 4;
            return (0, _dom.loadScriptAsync)('https://preview.babylonjs.com/glslang/glslang.js');

          case 4:
            glslang = window.glslang('https://preview.babylonjs.com/glslang/glslang.wasm');
            return _context.abrupt("return", glslang);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _ref.apply(this, arguments);
}
//# sourceMappingURL=glslang.js.map
}, function(modId) { var map = {"../utils/dom":1679470356516}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356516, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isWindowObjectExist = isWindowObjectExist;
exports.loadScript = loadScript;
exports.loadScriptAsync = loadScriptAsync;

function isWindowObjectExist() {
  return typeof window !== 'undefined';
}

function loadScript(scriptUrl, onSuccess, onError, scriptId) {
  if (!isWindowObjectExist()) {
    return;
  }

  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', scriptUrl);

  if (scriptId) {
    script.id = scriptId;
  }

  script.onload = function () {
    if (onSuccess) {
      onSuccess();
    }
  };

  script.onerror = function (e) {
    if (onError) {
      onError("Unable to load script '".concat(scriptUrl, "'"), e);
    }
  };

  head.appendChild(script);
}

function loadScriptAsync(scriptUrl, scriptId) {
  return new Promise(function (resolve, reject) {
    loadScript(scriptUrl, function () {
      resolve();
    }, function (message, exception) {
      reject(exception);
    });
  });
}
//# sourceMappingURL=dom.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356517, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var WebGPUAttribute = /*#__PURE__*/function () {
  function WebGPUAttribute(engine, options) {
    (0, _classCallCheck2.default)(this, WebGPUAttribute);
    this.engine = engine;
    this.options = options;
    this.attribute = void 0;
    this.buffer = void 0;
    var _options = options,
        buffer = _options.buffer,
        offset = _options.offset,
        stride = _options.stride,
        normalized = _options.normalized,
        size = _options.size,
        divisor = _options.divisor,
        arrayStride = _options.arrayStride,
        attributes = _options.attributes,
        stepMode = _options.stepMode;
    this.buffer = buffer;
    this.attribute = {
      buffer: buffer.get(),
      offset: offset || 0,
      stride: stride || 0,
      normalized: normalized || false,
      divisor: divisor || 0,
      arrayStride: arrayStride || 0,
      // @ts-ignore
      attributes: attributes,
      stepMode: stepMode || 'vertex'
    };

    if (size) {
      this.attribute.size = size;
    }
  }

  (0, _createClass2.default)(WebGPUAttribute, [{
    key: "get",
    value: function get() {
      return this.attribute;
    }
  }, {
    key: "updateBuffer",
    value: function updateBuffer(options) {
      this.buffer.subData(options);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.buffer.destroy();
    }
  }]);
  return WebGPUAttribute;
}();

exports.default = WebGPUAttribute;
//# sourceMappingURL=WebGPUAttribute.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356518, function(require, module, exports) {


var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var WebGPUConstants = _interopRequireWildcard(require("@webgpu/types/dist/constants"));

var WebGPUBuffer = /*#__PURE__*/function () {
  function WebGPUBuffer(engine, options) {
    (0, _classCallCheck2.default)(this, WebGPUBuffer);
    this.engine = engine;
    this.options = options;
    this.buffer = void 0;
    var _options = options,
        data = _options.data,
        usage = _options.usage,
        type = _options.type;
    this.buffer = this.createBuffer(data instanceof Array ? new Float32Array(data) : data, // TODO: WebGL 和 WebGPU buffer usage 映射关系
    usage || WebGPUConstants.BufferUsage.Vertex | WebGPUConstants.BufferUsage.CopyDst);
  }

  (0, _createClass2.default)(WebGPUBuffer, [{
    key: "get",
    value: function get() {
      return this.buffer;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.buffer.destroy();
    }
  }, {
    key: "subData",
    value: function subData(_ref) {
      var data = _ref.data,
          offset = _ref.offset;
      this.setSubData(this.buffer, offset, data instanceof Array ? new Float32Array(data) : data);
    }
  }, {
    key: "createBuffer",
    value: function createBuffer(view, flags) {
      // @ts-ignore
      var padding = view.byteLength % 4;
      var verticesBufferDescriptor = {
        // @ts-ignore
        size: view.byteLength + padding,
        usage: flags
      };
      var buffer = this.engine.device.createBuffer(verticesBufferDescriptor);
      this.setSubData(buffer, 0, view);
      return buffer;
    }
    /**
     * 不同于 Babylon.js 的版本，使用最新的 GPUQueue.writeBuffer 方法
     * @see https://gpuweb.github.io/gpuweb/#dom-gpuqueue-writebuffer
     * 已废弃创建一个临时的 mapped buffer 用于拷贝数据 @see https://gpuweb.github.io/gpuweb/#GPUDevice-createBufferMapped
     * @see https://github.com/gpuweb/gpuweb/blob/master/design/BufferOperations.md#updating-data-to-an-existing-buffer-like-webgls-buffersubdata
     */

  }, {
    key: "setSubData",
    value: function setSubData(destBuffer, destOffset, srcArrayBuffer) {
      // deprecated API setSubData
      // destBuffer.setSubData(0, srcArrayBuffer);
      // deprecated API createBufferMapped
      // use createBuffer & getMappedRange instead
      // const [srcBuffer, arrayBuffer] = this.engine.device.createBufferMapped({
      //   size: byteCount,
      //   usage: WebGPUConstants.BufferUsage.CopySrc,
      // });
      var queue = _gWebgpuCore.isSafari ? // @ts-ignore
      this.engine.device.getQueue() : this.engine.device.defaultQueue; // @ts-ignore

      queue.writeBuffer(destBuffer, destOffset, srcArrayBuffer);
    }
  }]);
  return WebGPUBuffer;
}();

exports.default = WebGPUBuffer;
//# sourceMappingURL=WebGPUBuffer.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356519, function(require, module, exports) {


var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var WebGPUConstants = _interopRequireWildcard(require("@webgpu/types/dist/constants"));

var _isNumber = require("../utils/is-number");

var _WebGPUBuffer = _interopRequireDefault(require("./WebGPUBuffer"));

var WebGPUComputeModel = /*#__PURE__*/function () {
  /**
   * 用于后续渲染时动态更新
   */
  function WebGPUComputeModel(engine, context) {
    (0, _classCallCheck2.default)(this, WebGPUComputeModel);
    this.engine = engine;
    this.context = context;
    this.entity = (0, _gWebgpuCore.createEntity)();
    this.uniformGPUBufferLayout = [];
    this.uniformBuffer = void 0;
    this.vertexBuffers = {};
    this.outputBuffer = void 0;
    this.bindGroupEntries = void 0;
    this.bindGroup = void 0;
    this.computePipeline = void 0;
  }

  (0, _createClass2.default)(WebGPUComputeModel, [{
    key: "init",
    value: function () {
      var _init = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _this = this;

        var _yield$this$compileCo, computeStage, buffers, uniforms, bufferBindingIndex, offset, mergedUniformData;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.compileComputePipelineStageDescriptor(this.context.shader);

              case 2:
                _yield$this$compileCo = _context.sent;
                computeStage = _yield$this$compileCo.computeStage;
                buffers = this.context.uniforms.filter(function (uniform) {
                  return uniform.storageClass === _gWebgpuCore.STORAGE_CLASS.StorageBuffer;
                });
                uniforms = this.context.uniforms.filter(function (uniform) {
                  return uniform.storageClass === _gWebgpuCore.STORAGE_CLASS.Uniform;
                });
                bufferBindingIndex = uniforms.length ? 1 : 0;
                this.bindGroupEntries = [];

                if (bufferBindingIndex) {
                  offset = 0; // FIXME: 所有 uniform 合并成一个 buffer，固定使用 Float32Array 存储，确实会造成一些内存的浪费
                  // we use std140 layout @see https://www.khronos.org/opengl/wiki/Interface_Block_(GLSL)

                  mergedUniformData = [];
                  uniforms.forEach(function (uniform) {
                    if ((0, _isNumber.isNumber)(uniform.data)) {
                      _this.uniformGPUBufferLayout.push({
                        name: uniform.name,
                        offset: offset
                      });

                      offset += 4; // @ts-ignore

                      mergedUniformData.push(uniform.data);
                    } else {
                      var _uniform$data;

                      // @ts-ignore
                      var originDataLength = ((_uniform$data = uniform.data) === null || _uniform$data === void 0 ? void 0 : _uniform$data.length) || 1;

                      if (originDataLength === 3) {
                        // vec3 -> vec4
                        // @see http://ptgmedia.pearsoncmg.com/images/9780321552624/downloads/0321552628_AppL.pdf
                        originDataLength = 4; // @ts-ignore

                        uniform.data.push(0);
                      } // 4 elements per block/line


                      var padding = offset / 4 % 4;

                      if (padding > 0) {
                        var space = 4 - padding;

                        if (originDataLength > 1 && originDataLength <= space) {
                          if (originDataLength === 2) {
                            if (space === 3) {
                              offset += 4;
                              mergedUniformData.push(0);
                            } // @ts-ignore


                            mergedUniformData.push.apply(mergedUniformData, (0, _toConsumableArray2.default)(uniform.data));

                            _this.uniformGPUBufferLayout.push({
                              name: uniform.name,
                              offset: offset
                            });
                          }
                        } else {
                          for (var i = 0; i < space; i++) {
                            offset += 4;
                            mergedUniformData.push(0);
                          } // @ts-ignore


                          mergedUniformData.push.apply(mergedUniformData, (0, _toConsumableArray2.default)(uniform.data));

                          _this.uniformGPUBufferLayout.push({
                            name: uniform.name,
                            offset: offset
                          });
                        }
                      }

                      offset += 4 * originDataLength;
                    }
                  });
                  this.uniformBuffer = new _WebGPUBuffer.default(this.engine, {
                    // TODO: 处理 Struct 和 boolean
                    // @ts-ignore
                    data: mergedUniformData instanceof Array ? // @ts-ignore
                    new Float32Array(mergedUniformData) : mergedUniformData,
                    usage: WebGPUConstants.BufferUsage.Uniform | WebGPUConstants.BufferUsage.CopyDst
                  });
                  this.bindGroupEntries.push({
                    binding: 0,
                    resource: {
                      buffer: this.uniformBuffer.get()
                    }
                  });
                } // create GPUBuffers for storeage buffers


                buffers.forEach(function (buffer) {
                  if (buffer.data !== null) {
                    if (buffer.type === _gWebgpuCore.AST_TOKEN_TYPES.Vector4FloatArray || buffer.type === _gWebgpuCore.AST_TOKEN_TYPES.FloatArray) {
                      var gpuBuffer;

                      if (buffer.name === _this.context.output.name) {
                        gpuBuffer = new _WebGPUBuffer.default(_this.engine, {
                          // @ts-ignore
                          data: isFinite(Number(buffer.data)) ? [buffer.data] : buffer.data,
                          usage: WebGPUConstants.BufferUsage.Storage | WebGPUConstants.BufferUsage.CopyDst | WebGPUConstants.BufferUsage.CopySrc
                        });
                        _this.outputBuffer = gpuBuffer;
                        _this.context.output = {
                          name: buffer.name,
                          // @ts-ignore
                          length: isFinite(Number(buffer.data)) ? 1 : buffer.data.length,
                          typedArrayConstructor: Float32Array,
                          gpuBuffer: gpuBuffer.get()
                        };
                      } else {
                        if (buffer.isReferer) {
                          // @ts-ignore
                          if (buffer.data.model && buffer.data.model.outputBuffer) {
                            // @ts-ignore
                            gpuBuffer = buffer.data.model.outputBuffer;
                          } else {// referred kernel haven't been executed
                          }
                        } else {
                          gpuBuffer = new _WebGPUBuffer.default(_this.engine, {
                            // @ts-ignore
                            data: isFinite(Number(buffer.data)) ? [buffer.data] : buffer.data,
                            usage: WebGPUConstants.BufferUsage.Storage | WebGPUConstants.BufferUsage.CopyDst | WebGPUConstants.BufferUsage.CopySrc
                          });
                        }
                      } // @ts-ignore


                      _this.vertexBuffers[buffer.name] = gpuBuffer;

                      _this.bindGroupEntries.push({
                        binding: bufferBindingIndex,
                        resource: {
                          name: buffer.name,
                          refer: gpuBuffer ? undefined : buffer.data,
                          // @ts-ignore
                          buffer: gpuBuffer ? gpuBuffer.get() : undefined
                        }
                      });

                      bufferBindingIndex++;
                    }
                  }
                }); // create compute pipeline layout

                this.computePipeline = this.engine.device.createComputePipeline({
                  computeStage: computeStage
                });
                console.log(this.bindGroupEntries);
                this.bindGroup = this.engine.device.createBindGroup({
                  layout: this.computePipeline.getBindGroupLayout(0),
                  entries: this.bindGroupEntries
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "destroy",
    value: function destroy() {
      var _this2 = this;

      if (this.uniformBuffer) {
        this.uniformBuffer.destroy();
      }

      Object.keys(this.vertexBuffers).forEach(function (bufferName) {
        return _this2.vertexBuffers[bufferName].destroy();
      });
    }
  }, {
    key: "readData",
    value: function () {
      var _readData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var output, length, typedArrayConstructor, gpuBuffer, byteCount, gpuReadBuffer, encoder, queue, arraybuffer, typedArray;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                output = this.context.output;

                if (!output) {
                  _context2.next = 16;
                  break;
                }

                length = output.length, typedArrayConstructor = output.typedArrayConstructor, gpuBuffer = output.gpuBuffer;

                if (!gpuBuffer) {
                  _context2.next = 16;
                  break;
                }

                // await gpuBuffer.mapAsync(WebGPUConstants.MapMode.Read);
                // const arraybuffer = gpuBuffer.getMappedRange();
                // let arraybuffer;
                // if (isSafari) {
                //   arraybuffer = await gpuBuffer.mapReadAsync();
                // } else {
                byteCount = length * typedArrayConstructor.BYTES_PER_ELEMENT; // @see https://developers.google.com/web/updates/2019/08/get-started-with-gpu-compute-on-the-web

                gpuReadBuffer = this.engine.device.createBuffer({
                  size: byteCount,
                  usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
                });
                encoder = this.engine.device.createCommandEncoder();
                encoder.copyBufferToBuffer(gpuBuffer, 0, gpuReadBuffer, 0, byteCount);
                queue = _gWebgpuCore.isSafari ? // @ts-ignore
                this.engine.device.getQueue() : this.engine.device.defaultQueue;
                queue.submit([encoder.finish()]);
                _context2.next = 12;
                return gpuReadBuffer.mapAsync(WebGPUConstants.MapMode.Read);

              case 12:
                arraybuffer = gpuReadBuffer.getMappedRange();
                typedArray = new typedArrayConstructor(arraybuffer.slice(0));
                gpuReadBuffer.unmap();
                return _context2.abrupt("return", typedArray);

              case 16:
                return _context2.abrupt("return", new Float32Array());

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function readData() {
        return _readData.apply(this, arguments);
      }

      return readData;
    }()
  }, {
    key: "run",
    value: function run() {
      if (this.engine.currentComputePass) {
        var _this$engine$currentC;

        this.engine.currentComputePass.setPipeline(this.computePipeline); // this.bindGroupEntries.forEach((entry) => {
        //   if (!entry.resource.buffer) {
        //     // get referred kernel's output
        //     const gpuBuffer = (entry.resource.refer.model as WebGPUComputeModel)
        //       .outputBuffer;
        //     this.vertexBuffers[entry.resource.name] = gpuBuffer;
        //     entry.resource.buffer = gpuBuffer.get();
        //   }
        // });
        // const bindGroup = this.engine.device.createBindGroup({
        //   layout: this.computePipeline.getBindGroupLayout(0),
        //   entries: this.bindGroupEntries,
        // });

        this.engine.currentComputePass.setBindGroup(0, this.bindGroup);

        (_this$engine$currentC = this.engine.currentComputePass).dispatch.apply(_this$engine$currentC, (0, _toConsumableArray2.default)(this.context.dispatch));
      }
    }
  }, {
    key: "updateBuffer",
    value: function updateBuffer(bufferName, data) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var buffer = this.vertexBuffers[bufferName];

      if (buffer) {
        buffer.subData({
          data: data,
          offset: offset
        });
      }
    }
  }, {
    key: "updateUniform",
    value: function updateUniform(uniformName, data) {
      var layout = this.uniformGPUBufferLayout.find(function (l) {
        return l.name === uniformName;
      });

      if (layout) {
        this.uniformBuffer.subData({
          data: Number.isFinite(data) ? new Float32Array([data]) : new Float32Array(data),
          offset: layout.offset
        });
      }
    }
  }, {
    key: "confirmInput",
    value: function confirmInput(model, inputName) {
      // copy output GPUBuffer of kernel
      var inputBuffer = this.vertexBuffers[inputName];
      var outputBuffer = model.outputBuffer;

      if (inputBuffer && outputBuffer && inputBuffer !== outputBuffer) {
        var encoder = this.engine.device.createCommandEncoder();
        var _context$output = model.context.output,
            length = _context$output.length,
            typedArrayConstructor = _context$output.typedArrayConstructor;
        var byteCount = length * typedArrayConstructor.BYTES_PER_ELEMENT;
        encoder.copyBufferToBuffer(outputBuffer.get(), 0, inputBuffer.get(), 0, byteCount);
        var queue = _gWebgpuCore.isSafari ? // @ts-ignore
        this.engine.device.getQueue() : this.engine.device.defaultQueue;
        queue.submit([encoder.finish()]);
      }
    }
  }, {
    key: "compileShaderToSpirV",
    value: function compileShaderToSpirV(source, type, shaderVersion) {
      return this.compileRawShaderToSpirV(shaderVersion + source, type);
    }
  }, {
    key: "compileRawShaderToSpirV",
    value: function compileRawShaderToSpirV(source, type) {
      return this.engine.glslang.compileGLSL(source, type);
    }
  }, {
    key: "compileComputePipelineStageDescriptor",
    value: function () {
      var _compileComputePipelineStageDescriptor = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(computeCode) {
        var computeShader, shaderVersion;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                computeShader = computeCode;
                shaderVersion = '#version 450\n';

                if (this.engine.options.useWGSL) {
                  _context3.next = 6;
                  break;
                }

                _context3.next = 5;
                return this.compileShaderToSpirV(computeCode, 'compute', shaderVersion);

              case 5:
                computeShader = _context3.sent;

              case 6:
                return _context3.abrupt("return", {
                  computeStage: {
                    module: this.engine.device.createShaderModule({
                      code: computeShader,
                      // @ts-ignore
                      isWHLSL: _gWebgpuCore.isSafari
                    }),
                    entryPoint: 'main'
                  }
                });

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function compileComputePipelineStageDescriptor(_x) {
        return _compileComputePipelineStageDescriptor.apply(this, arguments);
      }

      return compileComputePipelineStageDescriptor;
    }()
  }]);
  return WebGPUComputeModel;
}();

exports.default = WebGPUComputeModel;
//# sourceMappingURL=WebGPUComputeModel.js.map
}, function(modId) { var map = {"../utils/is-number":1679470356520,"./WebGPUBuffer":1679470356518}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356520, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumber = isNumber;

function isNumber(value) {
  return typeof value === 'number';
}
//# sourceMappingURL=is-number.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356521, function(require, module, exports) {


var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var WebGPUConstants = _interopRequireWildcard(require("@webgpu/types/dist/constants"));

var _WebGPUBuffer = _interopRequireDefault(require("./WebGPUBuffer"));

var WebGPUElements = /*#__PURE__*/function () {
  function WebGPUElements(engine, options) {
    (0, _classCallCheck2.default)(this, WebGPUElements);
    this.engine = engine;
    this.options = options;
    this.indexCount = void 0;
    this.buffer = void 0;
    var _options = options,
        data = _options.data,
        usage = _options.usage,
        type = _options.type,
        count = _options.count;
    this.indexCount = count || 0;
    this.buffer = new _WebGPUBuffer.default(engine, {
      // @ts-ignore
      data: data instanceof Array ? new Uint16Array(data) : data,
      usage: WebGPUConstants.BufferUsage.Index | WebGPUConstants.BufferUsage.CopyDst
    });
  }

  (0, _createClass2.default)(WebGPUElements, [{
    key: "get",
    value: function get() {
      return this.buffer;
    }
  }, {
    key: "subData",
    value: function subData(options) {
      this.buffer.subData(options);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.buffer.destroy();
    }
  }]);
  return WebGPUElements;
}();

exports.default = WebGPUElements;
//# sourceMappingURL=WebGPUElements.js.map
}, function(modId) { var map = {"./WebGPUBuffer":1679470356518}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356522, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var WebGPUFramebuffer = /*#__PURE__*/function () {
  function WebGPUFramebuffer(engine, options) {
    (0, _classCallCheck2.default)(this, WebGPUFramebuffer);
    this.engine = engine;
    this.options = options;
    this.colorTexture = void 0;
    this.depthTexture = void 0;
    this.width = 0;
    this.height = 0;
    var _options = options,
        width = _options.width,
        height = _options.height,
        color = _options.color,
        colors = _options.colors,
        depth = _options.depth,
        stencil = _options.stencil;

    if (color) {
      this.colorTexture = color;
    }

    if (depth) {
      this.depthTexture = depth;
    } // TODO: depth & stencil

  }

  (0, _createClass2.default)(WebGPUFramebuffer, [{
    key: "get",
    value: function get() {
      var _this$colorTexture, _this$depthTexture;

      return {
        color: (_this$colorTexture = this.colorTexture) === null || _this$colorTexture === void 0 ? void 0 : _this$colorTexture.get(),
        depth: (_this$depthTexture = this.depthTexture) === null || _this$depthTexture === void 0 ? void 0 : _this$depthTexture.get()
      };
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this$colorTexture2, _this$depthTexture2;

      (_this$colorTexture2 = this.colorTexture) === null || _this$colorTexture2 === void 0 ? void 0 : _this$colorTexture2.destroy();
      (_this$depthTexture2 = this.depthTexture) === null || _this$depthTexture2 === void 0 ? void 0 : _this$depthTexture2.destroy();
    }
  }, {
    key: "resize",
    value: function resize(_ref) {
      var width = _ref.width,
          height = _ref.height;

      if (width !== this.width || height !== this.height) {
        var _this$colorTexture3, _this$depthTexture3;

        (_this$colorTexture3 = this.colorTexture) === null || _this$colorTexture3 === void 0 ? void 0 : _this$colorTexture3.resize({
          width: width,
          height: height
        });
        (_this$depthTexture3 = this.depthTexture) === null || _this$depthTexture3 === void 0 ? void 0 : _this$depthTexture3.resize({
          width: width,
          height: height
        });
      }

      this.width = width;
      this.height = height;
    }
  }]);
  return WebGPUFramebuffer;
}();

exports.default = WebGPUFramebuffer;
//# sourceMappingURL=WebGPUFramebuffer.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356523, function(require, module, exports) {


var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var WebGPUConstants = _interopRequireWildcard(require("@webgpu/types/dist/constants"));

var _uniform = require("../utils/uniform");

var _constants2 = require("./constants");

var _WebGPUBuffer = _interopRequireDefault(require("./WebGPUBuffer"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// @ts-ignore
function concatenate(resultConstructor) {
  var totalLength = 0;

  for (var _len = arguments.length, arrays = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arrays[_key - 1] = arguments[_key];
  }

  for (var _i = 0, _arrays = arrays; _i < _arrays.length; _i++) {
    var arr = _arrays[_i];
    totalLength += arr.length;
  }

  var result = new resultConstructor(totalLength);
  var offset = 0;

  for (var _i2 = 0, _arrays2 = arrays; _i2 < _arrays2.length; _i2++) {
    var _arr = _arrays2[_i2];
    result.set(_arr, offset);
    offset += _arr.length;
  }

  return result;
}

var WebGPUModel = /*#__PURE__*/function () {
  /**
   * 用于后续渲染时动态更新
   */

  /**
   * vertex
   */

  /**
   * indices's buffer
   */
  function WebGPUModel(engine, options) {
    (0, _classCallCheck2.default)(this, WebGPUModel);
    this.engine = engine;
    this.options = options;
    this.pipelineLayout = void 0;
    this.renderPipeline = void 0;
    this.uniformsBindGroupLayout = void 0;
    this.uniformBindGroup = void 0;
    this.uniformBuffer = void 0;
    this.uniforms = {};
    this.uniformGPUBufferLayout = [];
    this.attributeCache = {};
    this.indexBuffer = void 0;
    this.indexCount = void 0;
  }

  (0, _createClass2.default)(WebGPUModel, [{
    key: "init",
    value: function () {
      var _init = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _this = this;

        var _this$options, vs, fs, attributes, uniforms, primitive, count, elements, depth, blend, stencil, cull, instances, _yield$this$compilePi, vertexStage, fragmentStage, vertexState, descriptor;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$options = this.options, vs = _this$options.vs, fs = _this$options.fs, attributes = _this$options.attributes, uniforms = _this$options.uniforms, primitive = _this$options.primitive, count = _this$options.count, elements = _this$options.elements, depth = _this$options.depth, blend = _this$options.blend, stencil = _this$options.stencil, cull = _this$options.cull, instances = _this$options.instances; // build shaders first

                _context.next = 3;
                return this.compilePipelineStageDescriptor(vs, fs, null);

              case 3:
                _yield$this$compilePi = _context.sent;
                vertexStage = _yield$this$compilePi.vertexStage;
                fragmentStage = _yield$this$compilePi.fragmentStage;

                if (uniforms) {
                  // create uniform bind groups & layout
                  this.buildUniformBindGroup(uniforms);
                }

                if (elements) {
                  this.indexBuffer = elements.get();
                  this.indexCount = elements.indexCount;
                } // TODO: instanced array


                vertexState = {
                  vertexBuffers: Object.keys(attributes).map(function (attributeName, i) {
                    var attribute = attributes[attributeName];

                    var _attribute$get = attribute.get(),
                        arrayStride = _attribute$get.arrayStride,
                        stepMode = _attribute$get.stepMode,
                        ats = _attribute$get.attributes;

                    _this.attributeCache[attributeName] = attribute;
                    return {
                      arrayStride: arrayStride,
                      stepMode: stepMode,
                      attributes: ats
                    };
                  })
                };
                descriptor = {
                  sampleCount: this.engine.mainPassSampleCount,
                  primitiveTopology: _constants2.primitiveMap[primitive || _gWebgpuCore.gl.TRIANGLES],
                  rasterizationState: _objectSpread(_objectSpread({}, this.getDefaultRasterizationStateDescriptor()), {}, {
                    // TODO: support frontface
                    cullMode: (0, _constants2.getCullMode)({
                      cull: cull
                    })
                  }),
                  depthStencilState: (0, _constants2.getDepthStencilStateDescriptor)({
                    depth: depth,
                    stencil: stencil
                  }),
                  colorStates: (0, _constants2.getColorStateDescriptors)({
                    blend: blend
                  }, this.engine.options.swapChainFormat),
                  layout: this.pipelineLayout,
                  vertexStage: vertexStage,
                  fragmentStage: fragmentStage,
                  vertexState: vertexState
                }; // create pipeline

                this.renderPipeline = this.engine.device.createRenderPipeline(descriptor);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "addUniforms",
    value: function addUniforms(uniforms) {
      this.uniforms = _objectSpread(_objectSpread({}, this.uniforms), (0, _uniform.extractUniforms)(uniforms));
    }
  }, {
    key: "draw",
    value: function draw(options) {
      var _this2 = this;

      var renderPass = this.engine.getCurrentRenderPass();

      var uniforms = _objectSpread(_objectSpread({}, this.uniforms), (0, _uniform.extractUniforms)(options.uniforms || {}));

      var bindGroupBindings = []; // TODO: uniform 发生修改

      Object.keys(uniforms).forEach(function (uniformName) {
        var type = (0, _typeof2.default)(uniforms[uniformName]);

        if (type === 'boolean' || type === 'number' || Array.isArray(uniforms[uniformName]) || // @ts-ignore
        uniforms[uniformName].BYTES_PER_ELEMENT) {
          var _this2$uniformGPUBuff;

          var offset = (_this2$uniformGPUBuff = _this2.uniformGPUBufferLayout.find(function (_ref) {
            var name = _ref.name;
            return name === uniformName;
          })) === null || _this2$uniformGPUBuff === void 0 ? void 0 : _this2$uniformGPUBuff.offset;

          if (offset !== null) {
            _this2.uniformBuffer.subData({
              // @ts-ignore
              data: uniforms[uniformName],
              // @ts-ignore
              offset: offset
            });
          }
        } else {
          var _this2$uniformGPUBuff2;

          var _offset = (_this2$uniformGPUBuff2 = _this2.uniformGPUBufferLayout.find(function (_ref2) {
            var name = _ref2.name;
            return name === uniformName;
          })) === null || _this2$uniformGPUBuff2 === void 0 ? void 0 : _this2$uniformGPUBuff2.offset;

          if (_offset !== null) {
            var textureOrFramebuffer = uniforms[uniformName].get();

            var _ref3 = // @ts-ignore
            textureOrFramebuffer.color || textureOrFramebuffer,
                texture = _ref3.texture,
                sampler = _ref3.sampler;

            if (sampler) {
              bindGroupBindings.push({
                // @ts-ignore
                binding: _offset,
                resource: sampler
              }); // @ts-ignore

              _offset++;
            }

            bindGroupBindings.push({
              // @ts-ignore
              binding: _offset,
              resource: texture.createView()
            });
          }
        }
      });

      if (this.uniformBuffer) {
        bindGroupBindings[0] = {
          binding: 0,
          resource: {
            buffer: this.uniformBuffer.get() // 返回 GPUBuffer 原生对象

          }
        };
      }

      this.uniformBindGroup = this.engine.device.createBindGroup({
        layout: this.uniformsBindGroupLayout,
        entries: bindGroupBindings
      });

      if (this.renderPipeline) {
        renderPass.setPipeline(this.renderPipeline);
      }

      renderPass.setBindGroup(0, this.uniformBindGroup);

      if (this.indexBuffer) {
        renderPass.setIndexBuffer(this.indexBuffer.get(), WebGPUConstants.IndexFormat.Uint32, 0);
      }

      Object.keys(this.attributeCache).forEach(function (attributeName, i) {
        renderPass.setVertexBuffer(0 + i, _this2.attributeCache[attributeName].get().buffer, 0);
      }); // renderPass.draw(verticesCount, instancesCount, verticesStart, 0);

      if (this.indexBuffer) {
        renderPass.drawIndexed(this.indexCount, this.options.instances || 1, 0, 0, 0);
      } else {
        renderPass.draw(this.options.count || 0, this.options.instances || 0, 0, 0);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      throw new Error('Method not implemented.');
    }
  }, {
    key: "compilePipelineStageDescriptor",
    value: function () {
      var _compilePipelineStageDescriptor = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(vertexCode, fragmentCode, defines) {
        var shaderVersion, vertexShader, fragmentShader;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                shaderVersion = '#version 450\n';
                vertexShader = vertexCode;
                fragmentShader = fragmentCode;

                if (this.engine.options.useWGSL) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 6;
                return this.compileShaderToSpirV(vertexCode, 'vertex', shaderVersion);

              case 6:
                vertexShader = _context2.sent;
                _context2.next = 9;
                return this.compileShaderToSpirV(fragmentCode, 'fragment', shaderVersion);

              case 9:
                fragmentShader = _context2.sent;

              case 10:
                return _context2.abrupt("return", this.createPipelineStageDescriptor(vertexShader, fragmentShader));

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function compilePipelineStageDescriptor(_x, _x2, _x3) {
        return _compilePipelineStageDescriptor.apply(this, arguments);
      }

      return compilePipelineStageDescriptor;
    }()
  }, {
    key: "compileShaderToSpirV",
    value: function compileShaderToSpirV(source, type, shaderVersion) {
      return this.compileRawShaderToSpirV(shaderVersion + source, type);
    }
  }, {
    key: "compileRawShaderToSpirV",
    value: function compileRawShaderToSpirV(source, type) {
      return this.engine.glslang.compileGLSL(source, type);
    }
  }, {
    key: "createPipelineStageDescriptor",
    value: function createPipelineStageDescriptor(vertexShader, fragmentShader) {
      return {
        vertexStage: {
          module: this.engine.device.createShaderModule({
            code: vertexShader,
            // @ts-ignore
            isWHLSL: _gWebgpuCore.isSafari
          }),
          entryPoint: 'main'
        },
        fragmentStage: {
          module: this.engine.device.createShaderModule({
            code: fragmentShader,
            // @ts-ignore
            isWHLSL: _gWebgpuCore.isSafari
          }),
          entryPoint: 'main'
        }
      };
    }
    /**
     * @see https://gpuweb.github.io/gpuweb/#rasterization-state
     */

  }, {
    key: "getDefaultRasterizationStateDescriptor",
    value: function getDefaultRasterizationStateDescriptor() {
      return {
        frontFace: WebGPUConstants.FrontFace.CCW,
        cullMode: WebGPUConstants.CullMode.None,
        depthBias: 0,
        depthBiasSlopeScale: 0,
        depthBiasClamp: 0
      };
    }
  }, {
    key: "buildUniformBindGroup",
    value: function buildUniformBindGroup(uniforms) {
      var _this3 = this;

      var offset = 0; // FIXME: 所有 uniform 合并成一个 buffer，固定使用 Float32Array 存储，确实会造成一些内存的浪费

      var mergedUniformData = concatenate.apply(void 0, [Float32Array].concat((0, _toConsumableArray2.default)(Object.keys(uniforms).map(function (uniformName) {
        if (uniforms[uniformName]) {
          _this3.uniformGPUBufferLayout.push({
            name: uniformName,
            offset: offset
          }); // @ts-ignore


          offset += (uniforms[uniformName].length || 1) * 4;
          return uniforms[uniformName];
        } else {
          // texture & framebuffer
          return [];
        }
      }))));
      var entries = [];
      var hasUniform = false;

      if (mergedUniformData.length) {
        hasUniform = true; // TODO: 所有 uniform 绑定到 slot 0，通过解析 Shader 代码判定可见性

        entries.push({
          // TODO: 暂时都绑定到 slot 0
          binding: 0,
          visibility: WebGPUConstants.ShaderStage.Fragment | WebGPUConstants.ShaderStage.Vertex,
          // TODO: 暂时 VS 和 FS 都可见
          type: WebGPUConstants.BindingType.UniformBuffer
        });
      } // 声明 texture & sampler


      Object.keys(uniforms).filter(function (uniformName) {
        return uniforms[uniformName] === null;
      }).forEach(function (uniformName, i) {
        _this3.uniformGPUBufferLayout.push({
          name: uniformName,
          offset: i * 2 + (hasUniform ? 1 : 0)
        });

        entries.push({
          // Sampler
          binding: i * 2 + (hasUniform ? 1 : 0),
          visibility: WebGPUConstants.ShaderStage.Fragment,
          type: WebGPUConstants.BindingType.Sampler
        }, {
          // Texture view
          binding: i * 2 + (hasUniform ? 1 : 0) + 1,
          visibility: WebGPUConstants.ShaderStage.Fragment,
          type: WebGPUConstants.BindingType.SampledTexture
        });
      });
      this.uniformsBindGroupLayout = this.engine.device.createBindGroupLayout({
        // 最新 API 0.0.22 版本使用 entries。Chrome Canary 84.0.4110.0 已实现。
        // 使用 bindings 会报 Warning: GPUBindGroupLayoutDescriptor.bindings is deprecated: renamed to entries
        // @see https://github.com/antvis/GWebGPUEngine/issues/5
        entries: entries
      });
      this.pipelineLayout = this.engine.device.createPipelineLayout({
        bindGroupLayouts: [this.uniformsBindGroupLayout]
      });

      if (hasUniform) {
        this.uniformBuffer = new _WebGPUBuffer.default(this.engine, {
          // TODO: 处理 Struct 和 boolean
          // @ts-ignore
          data: mergedUniformData instanceof Array ? // @ts-ignore
          new Float32Array(mergedUniformData) : mergedUniformData,
          usage: WebGPUConstants.BufferUsage.Uniform | WebGPUConstants.BufferUsage.CopyDst
        });
      }
    }
  }]);
  return WebGPUModel;
}();

exports.default = WebGPUModel;
//# sourceMappingURL=WebGPUModel.js.map
}, function(modId) { var map = {"../utils/uniform":1679470356511,"./constants":1679470356524,"./WebGPUBuffer":1679470356518}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356524, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCullMode = getCullMode;
exports.getDepthStencilStateDescriptor = getDepthStencilStateDescriptor;
exports.getColorStateDescriptors = getColorStateDescriptors;
exports.wrapModeMap = exports.filterMap = exports.formatMap = exports.blendFuncMap = exports.blendEquationMap = exports.depthFuncMap = exports.primitiveMap = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var WebGPUConstants = _interopRequireWildcard(require("@webgpu/types/dist/constants"));

var _primitiveMap, _depthFuncMap, _blendEquationMap, _blendFuncMap, _formatMap, _filterMap, _wrapModeMap;

// WebGPU 不支持 LINE_LOOP & TRIANGLE_FAN
var primitiveMap = (_primitiveMap = {}, (0, _defineProperty2.default)(_primitiveMap, _gWebgpuCore.gl.POINTS, WebGPUConstants.PrimitiveTopology.PointList), (0, _defineProperty2.default)(_primitiveMap, _gWebgpuCore.gl.LINES, WebGPUConstants.PrimitiveTopology.LineList), (0, _defineProperty2.default)(_primitiveMap, _gWebgpuCore.gl.LINE_LOOP, WebGPUConstants.PrimitiveTopology.LineList), (0, _defineProperty2.default)(_primitiveMap, _gWebgpuCore.gl.LINE_STRIP, WebGPUConstants.PrimitiveTopology.LineStrip), (0, _defineProperty2.default)(_primitiveMap, _gWebgpuCore.gl.TRIANGLES, WebGPUConstants.PrimitiveTopology.TriangleList), (0, _defineProperty2.default)(_primitiveMap, _gWebgpuCore.gl.TRIANGLE_FAN, WebGPUConstants.PrimitiveTopology.TriangleList), (0, _defineProperty2.default)(_primitiveMap, _gWebgpuCore.gl.TRIANGLE_STRIP, WebGPUConstants.PrimitiveTopology.TriangleStrip), _primitiveMap);
exports.primitiveMap = primitiveMap;
var depthFuncMap = (_depthFuncMap = {}, (0, _defineProperty2.default)(_depthFuncMap, _gWebgpuCore.gl.NEVER, WebGPUConstants.CompareFunction.Never), (0, _defineProperty2.default)(_depthFuncMap, _gWebgpuCore.gl.ALWAYS, WebGPUConstants.CompareFunction.Always), (0, _defineProperty2.default)(_depthFuncMap, _gWebgpuCore.gl.LESS, WebGPUConstants.CompareFunction.Less), (0, _defineProperty2.default)(_depthFuncMap, _gWebgpuCore.gl.LEQUAL, WebGPUConstants.CompareFunction.LessEqual), (0, _defineProperty2.default)(_depthFuncMap, _gWebgpuCore.gl.GREATER, WebGPUConstants.CompareFunction.Greater), (0, _defineProperty2.default)(_depthFuncMap, _gWebgpuCore.gl.GEQUAL, WebGPUConstants.CompareFunction.GreaterEqual), (0, _defineProperty2.default)(_depthFuncMap, _gWebgpuCore.gl.EQUAL, WebGPUConstants.CompareFunction.Equal), (0, _defineProperty2.default)(_depthFuncMap, _gWebgpuCore.gl.NOTEQUAL, WebGPUConstants.CompareFunction.NotEqual), _depthFuncMap);
exports.depthFuncMap = depthFuncMap;
var blendEquationMap = (_blendEquationMap = {}, (0, _defineProperty2.default)(_blendEquationMap, _gWebgpuCore.gl.FUNC_ADD, WebGPUConstants.BlendOperation.Add), (0, _defineProperty2.default)(_blendEquationMap, _gWebgpuCore.gl.MIN_EXT, WebGPUConstants.BlendOperation.Min), (0, _defineProperty2.default)(_blendEquationMap, _gWebgpuCore.gl.MAX_EXT, WebGPUConstants.BlendOperation.Max), (0, _defineProperty2.default)(_blendEquationMap, _gWebgpuCore.gl.FUNC_SUBTRACT, WebGPUConstants.BlendOperation.Subtract), (0, _defineProperty2.default)(_blendEquationMap, _gWebgpuCore.gl.FUNC_REVERSE_SUBTRACT, WebGPUConstants.BlendOperation.ReverseSubtract), _blendEquationMap); // @see https://gpuweb.github.io/gpuweb/#blend-state
// 不支持 'constant alpha' 和 'one minus constant alpha'

exports.blendEquationMap = blendEquationMap;
var blendFuncMap = (_blendFuncMap = {}, (0, _defineProperty2.default)(_blendFuncMap, _gWebgpuCore.gl.ZERO, WebGPUConstants.BlendFactor.Zero), (0, _defineProperty2.default)(_blendFuncMap, _gWebgpuCore.gl.ONE, WebGPUConstants.BlendFactor.One), (0, _defineProperty2.default)(_blendFuncMap, _gWebgpuCore.gl.SRC_COLOR, WebGPUConstants.BlendFactor.SrcColor), (0, _defineProperty2.default)(_blendFuncMap, _gWebgpuCore.gl.ONE_MINUS_SRC_COLOR, WebGPUConstants.BlendFactor.OneMinusSrcColor), (0, _defineProperty2.default)(_blendFuncMap, _gWebgpuCore.gl.SRC_ALPHA, WebGPUConstants.BlendFactor.SrcAlpha), (0, _defineProperty2.default)(_blendFuncMap, _gWebgpuCore.gl.ONE_MINUS_SRC_ALPHA, WebGPUConstants.BlendFactor.OneMinusSrcAlpha), (0, _defineProperty2.default)(_blendFuncMap, _gWebgpuCore.gl.DST_COLOR, WebGPUConstants.BlendFactor.DstColor), (0, _defineProperty2.default)(_blendFuncMap, _gWebgpuCore.gl.ONE_MINUS_DST_COLOR, WebGPUConstants.BlendFactor.OneMinusDstColor), (0, _defineProperty2.default)(_blendFuncMap, _gWebgpuCore.gl.DST_ALPHA, WebGPUConstants.BlendFactor.DstAlpha), (0, _defineProperty2.default)(_blendFuncMap, _gWebgpuCore.gl.ONE_MINUS_DST_ALPHA, WebGPUConstants.BlendFactor.OneMinusDstAlpha), (0, _defineProperty2.default)(_blendFuncMap, _gWebgpuCore.gl.CONSTANT_COLOR, WebGPUConstants.BlendFactor.BlendColor), (0, _defineProperty2.default)(_blendFuncMap, _gWebgpuCore.gl.ONE_MINUS_CONSTANT_COLOR, WebGPUConstants.BlendFactor.OneMinusBlendColor), (0, _defineProperty2.default)(_blendFuncMap, _gWebgpuCore.gl.SRC_ALPHA_SATURATE, WebGPUConstants.BlendFactor.SrcAlphaSaturated), _blendFuncMap); // @see https://gpuweb.github.io/gpuweb/#texture-formats

exports.blendFuncMap = blendFuncMap;
var formatMap = (_formatMap = {}, (0, _defineProperty2.default)(_formatMap, _gWebgpuCore.gl.ALPHA, 'r8unorm'), (0, _defineProperty2.default)(_formatMap, _gWebgpuCore.gl.RGBA, 'rgba8unorm'), (0, _defineProperty2.default)(_formatMap, _gWebgpuCore.gl.DEPTH_COMPONENT, 'depth32float'), (0, _defineProperty2.default)(_formatMap, _gWebgpuCore.gl.DEPTH_STENCIL, 'depth24plus-stencil8'), _formatMap); // @see https://gpuweb.github.io/gpuweb/#enumdef-gpufiltermode

exports.formatMap = formatMap;
var filterMap = (_filterMap = {}, (0, _defineProperty2.default)(_filterMap, _gWebgpuCore.gl.NEAREST, 'nearest'), (0, _defineProperty2.default)(_filterMap, _gWebgpuCore.gl.LINEAR, 'linear'), _filterMap); // @see https://gpuweb.github.io/gpuweb/#enumdef-gpuaddressmode

exports.filterMap = filterMap;
var wrapModeMap = (_wrapModeMap = {}, (0, _defineProperty2.default)(_wrapModeMap, _gWebgpuCore.gl.REPEAT, 'repeat'), (0, _defineProperty2.default)(_wrapModeMap, _gWebgpuCore.gl.CLAMP_TO_EDGE, 'clamp-to-edge'), (0, _defineProperty2.default)(_wrapModeMap, _gWebgpuCore.gl.MIRRORED_REPEAT, 'mirror-repeat'), _wrapModeMap);
exports.wrapModeMap = wrapModeMap;

function getCullMode(_ref) {
  var cull = _ref.cull;

  if (!cull || !cull.enable) {
    return WebGPUConstants.CullMode.None;
  }

  if (cull.face) {
    return cull.face === _gWebgpuCore.gl.FRONT ? WebGPUConstants.CullMode.Front : WebGPUConstants.CullMode.Back;
  }
}

function getDepthStencilStateDescriptor(_ref2) {
  var depth = _ref2.depth,
      stencil = _ref2.stencil;
  // TODO: stencil
  var stencilFrontBack = {
    compare: WebGPUConstants.CompareFunction.Always,
    depthFailOp: WebGPUConstants.StencilOperation.Keep,
    failOp: WebGPUConstants.StencilOperation.Keep,
    passOp: WebGPUConstants.StencilOperation.Keep
  };
  return {
    depthWriteEnabled: depth && depth.enable,
    depthCompare: depthFuncMap[(depth === null || depth === void 0 ? void 0 : depth.func) || _gWebgpuCore.gl.ALWAYS],
    format: WebGPUConstants.TextureFormat.Depth24PlusStencil8,
    stencilFront: stencilFrontBack,
    stencilBack: stencilFrontBack,
    stencilReadMask: 0xffffffff,
    stencilWriteMask: 0xffffffff
  };
}
/**
 * @see https://gpuweb.github.io/gpuweb/#color-state
 */


function getColorStateDescriptors(_ref3, swapChainFormat) {
  var blend = _ref3.blend;
  return [{
    format: swapChainFormat,
    // https://gpuweb.github.io/gpuweb/#blend-state
    alphaBlend: {
      srcFactor: blendFuncMap[blend && blend.func && blend.func.srcAlpha || _gWebgpuCore.gl.ONE],
      dstFactor: blendFuncMap[blend && blend.func && blend.func.dstAlpha || _gWebgpuCore.gl.ZERO],
      operation: blendEquationMap[blend && blend.equation && blend.equation.alpha || _gWebgpuCore.gl.FUNC_ADD]
    },
    colorBlend: {
      srcFactor: blendFuncMap[blend && blend.func && blend.func.srcRGB || _gWebgpuCore.gl.ONE],
      dstFactor: blendFuncMap[blend && blend.func && blend.func.dstRGB || _gWebgpuCore.gl.ZERO],
      operation: blendEquationMap[blend && blend.equation && blend.equation.rgb || _gWebgpuCore.gl.FUNC_ADD]
    },
    writeMask: WebGPUConstants.ColorWrite.All
  }];
}
//# sourceMappingURL=constants.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356525, function(require, module, exports) {


var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var WebGPUConstants = _interopRequireWildcard(require("@webgpu/types/dist/constants"));

var _constants2 = require("./constants");

/**
 * adaptor for regl.Buffer
 * @see https://github.com/regl-project/regl/blob/gh-pages/API.md#buffers
 */
var WebGPUTexture2D = /*#__PURE__*/function () {
  function WebGPUTexture2D(engine, options) {
    (0, _classCallCheck2.default)(this, WebGPUTexture2D);
    this.engine = engine;
    this.options = options;
    this.texture = void 0;
    this.sampler = void 0;
    this.width = void 0;
    this.height = void 0;
    this.createTexture();
  }

  (0, _createClass2.default)(WebGPUTexture2D, [{
    key: "get",
    value: function get() {
      return {
        texture: this.texture,
        sampler: this.sampler
      };
    }
  }, {
    key: "update",
    value: function update() {// TODO
    }
  }, {
    key: "resize",
    value: function resize(_ref) {
      var width = _ref.width,
          height = _ref.height;

      // TODO: it seems that Texture doesn't support `resize`
      if (width !== this.width || height !== this.height) {
        this.destroy();
        this.createTexture();
      }

      this.width = width;
      this.height = height;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.texture) {
        this.texture.destroy();
      }
    }
  }, {
    key: "createTexture",
    value: function createTexture() {
      var _this$options = this.options,
          data = _this$options.data,
          _this$options$type = _this$options.type,
          type = _this$options$type === void 0 ? _gWebgpuCore.gl.UNSIGNED_BYTE : _this$options$type,
          width = _this$options.width,
          height = _this$options.height,
          _this$options$flipY = _this$options.flipY,
          flipY = _this$options$flipY === void 0 ? false : _this$options$flipY,
          _this$options$format = _this$options.format,
          format = _this$options$format === void 0 ? _gWebgpuCore.gl.RGBA : _this$options$format,
          _this$options$mipmap = _this$options.mipmap,
          mipmap = _this$options$mipmap === void 0 ? false : _this$options$mipmap,
          _this$options$wrapS = _this$options.wrapS,
          wrapS = _this$options$wrapS === void 0 ? _gWebgpuCore.gl.CLAMP_TO_EDGE : _this$options$wrapS,
          _this$options$wrapT = _this$options.wrapT,
          wrapT = _this$options$wrapT === void 0 ? _gWebgpuCore.gl.CLAMP_TO_EDGE : _this$options$wrapT,
          _this$options$aniso = _this$options.aniso,
          aniso = _this$options$aniso === void 0 ? 0 : _this$options$aniso,
          _this$options$alignme = _this$options.alignment,
          alignment = _this$options$alignme === void 0 ? 1 : _this$options$alignme,
          _this$options$premult = _this$options.premultiplyAlpha,
          premultiplyAlpha = _this$options$premult === void 0 ? false : _this$options$premult,
          _this$options$mag = _this$options.mag,
          mag = _this$options$mag === void 0 ? _gWebgpuCore.gl.NEAREST : _this$options$mag,
          _this$options$min = _this$options.min,
          min = _this$options$min === void 0 ? _gWebgpuCore.gl.NEAREST : _this$options$min,
          _this$options$colorSp = _this$options.colorSpace,
          colorSpace = _this$options$colorSp === void 0 ? _gWebgpuCore.gl.BROWSER_DEFAULT_WEBGL : _this$options$colorSp,
          usage = _this$options.usage;
      this.width = width;
      this.height = height;
      this.texture = this.engine.device.createTexture({
        size: [width, height, 1],
        // TODO: arrayLayerCount is deprecated: use size.depth
        // arrayLayerCount: 1,
        mipLevelCount: 1,
        // TODO: https://gpuweb.github.io/gpuweb/#dom-gputextureviewdescriptor-miplevelcount
        sampleCount: 1,
        dimension: WebGPUConstants.TextureDimension.E2d,
        format: _constants2.formatMap[format],
        // could throw texture binding usage mismatch
        usage: usage || WebGPUConstants.TextureUsage.Sampled | WebGPUConstants.TextureUsage.CopyDst
      });

      if (!usage || usage & WebGPUConstants.TextureUsage.Sampled) {
        this.sampler = this.engine.device.createSampler({
          addressModeU: _constants2.wrapModeMap[wrapS],
          addressModeV: _constants2.wrapModeMap[wrapT],
          addressModeW: _constants2.wrapModeMap[wrapS],
          // TODO: same as addressModeU
          magFilter: _constants2.filterMap[mag],
          minFilter: _constants2.filterMap[min],
          maxAnisotropy: aniso // @see https://gpuweb.github.io/gpuweb/#dom-gpusamplerdescriptor-maxanisotropy

        });
      }
    }
  }]);
  return WebGPUTexture2D;
}();

exports.default = WebGPUTexture2D;
//# sourceMappingURL=WebGPUTexture2D.js.map
}, function(modId) { var map = {"./constants":1679470356524}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1679470356501);
})()
//miniprogram-npm-outsideDeps=["@babel/runtime/helpers/interopRequireDefault","@babel/runtime/regenerator","@babel/runtime/helpers/asyncToGenerator","@babel/runtime/helpers/classCallCheck","@babel/runtime/helpers/createClass","@antv/g-webgpu-core","inversify","regl","@babel/runtime/helpers/defineProperty","@babel/runtime/helpers/toConsumableArray","@babel/runtime/helpers/typeof","@babel/runtime/helpers/interopRequireWildcard","@webgpu/types/dist/constants"]
//# sourceMappingURL=index.js.map