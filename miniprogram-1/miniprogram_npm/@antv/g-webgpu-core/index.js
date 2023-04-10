module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1679470356438, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  AST_TOKEN_TYPES: true,
  AST_NODE_TYPES: true,
  STORAGE_CLASS: true,
  Target: true,
  DefineValuePlaceholder: true,
  Component: true,
  ComponentManager: true,
  FrameGraphSystem: true,
  GeometryComponent: true,
  GeometrySystem: true,
  MaterialComponent: true,
  MaterialSystem: true,
  CullableComponent: true,
  MeshComponent: true,
  MeshSystem: true,
  PixelPickingPass: true,
  RendererSystem: true,
  HierarchyComponent: true,
  SceneGraphSystem: true,
  TransformComponent: true,
  createEntity: true,
  IDENTIFIER: true,
  container: true,
  createWorldContainer: true,
  lazyInject: true,
  lazyMultiInject: true,
  generateAABBFromVertices: true,
  isSafari: true
};
Object.defineProperty(exports, "Component", {
  enumerable: true,
  get: function get() {
    return _ComponentManager.Component;
  }
});
Object.defineProperty(exports, "ComponentManager", {
  enumerable: true,
  get: function get() {
    return _ComponentManager.ComponentManager;
  }
});
Object.defineProperty(exports, "FrameGraphSystem", {
  enumerable: true,
  get: function get() {
    return _System.FrameGraphSystem;
  }
});
Object.defineProperty(exports, "GeometryComponent", {
  enumerable: true,
  get: function get() {
    return _GeometryComponent.GeometryComponent;
  }
});
Object.defineProperty(exports, "GeometrySystem", {
  enumerable: true,
  get: function get() {
    return _System2.GeometrySystem;
  }
});
Object.defineProperty(exports, "MaterialComponent", {
  enumerable: true,
  get: function get() {
    return _MaterialComponent.MaterialComponent;
  }
});
Object.defineProperty(exports, "MaterialSystem", {
  enumerable: true,
  get: function get() {
    return _System3.MaterialSystem;
  }
});
Object.defineProperty(exports, "CullableComponent", {
  enumerable: true,
  get: function get() {
    return _CullableComponent.CullableComponent;
  }
});
Object.defineProperty(exports, "MeshComponent", {
  enumerable: true,
  get: function get() {
    return _MeshComponent.MeshComponent;
  }
});
Object.defineProperty(exports, "MeshSystem", {
  enumerable: true,
  get: function get() {
    return _System4.MeshSystem;
  }
});
Object.defineProperty(exports, "PixelPickingPass", {
  enumerable: true,
  get: function get() {
    return _PixelPickingPass.PixelPickingPass;
  }
});
Object.defineProperty(exports, "RendererSystem", {
  enumerable: true,
  get: function get() {
    return _System5.RendererSystem;
  }
});
Object.defineProperty(exports, "HierarchyComponent", {
  enumerable: true,
  get: function get() {
    return _HierarchyComponent.HierarchyComponent;
  }
});
Object.defineProperty(exports, "SceneGraphSystem", {
  enumerable: true,
  get: function get() {
    return _System6.SceneGraphSystem;
  }
});
Object.defineProperty(exports, "TransformComponent", {
  enumerable: true,
  get: function get() {
    return _TransformComponent.TransformComponent;
  }
});
Object.defineProperty(exports, "createEntity", {
  enumerable: true,
  get: function get() {
    return _Entity.createEntity;
  }
});
Object.defineProperty(exports, "IDENTIFIER", {
  enumerable: true,
  get: function get() {
    return _identifier.IDENTIFIER;
  }
});
Object.defineProperty(exports, "container", {
  enumerable: true,
  get: function get() {
    return _inversify.container;
  }
});
Object.defineProperty(exports, "createWorldContainer", {
  enumerable: true,
  get: function get() {
    return _inversify.createWorldContainer;
  }
});
Object.defineProperty(exports, "lazyInject", {
  enumerable: true,
  get: function get() {
    return _inversify.lazyInject;
  }
});
Object.defineProperty(exports, "lazyMultiInject", {
  enumerable: true,
  get: function get() {
    return _inversify.lazyMultiInject;
  }
});
Object.defineProperty(exports, "generateAABBFromVertices", {
  enumerable: true,
  get: function get() {
    return _aabb.generateAABBFromVertices;
  }
});
Object.defineProperty(exports, "isSafari", {
  enumerable: true,
  get: function get() {
    return _isSafari.isSafari;
  }
});
exports.DefineValuePlaceholder = exports.Target = exports.STORAGE_CLASS = exports.AST_NODE_TYPES = exports.AST_TOKEN_TYPES = void 0;

require("reflect-metadata");

var _ComponentManager = require("./ComponentManager");

Object.keys(_ComponentManager).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ComponentManager[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ComponentManager[key];
    }
  });
});

var _System = require("./components/framegraph/System");

var _GeometryComponent = require("./components/geometry/GeometryComponent");

var _System2 = require("./components/geometry/System");

var _MaterialComponent = require("./components/material/MaterialComponent");

var _System3 = require("./components/material/System");

var _CullableComponent = require("./components/mesh/CullableComponent");

var _MeshComponent = require("./components/mesh/MeshComponent");

var _System4 = require("./components/mesh/System");

var _PixelPickingPass = require("./components/renderer/passes/PixelPickingPass");

var _System5 = require("./components/renderer/System");

var _HierarchyComponent = require("./components/scenegraph/HierarchyComponent");

var _System6 = require("./components/scenegraph/System");

var _TransformComponent = require("./components/scenegraph/TransformComponent");

var _Entity = require("./Entity");

var _identifier = require("./identifier");

var _inversify = require("./inversify.config");

var _aabb = require("./utils/aabb");

var _isSafari = require("./utils/isSafari");

var _services = require("./services");

Object.keys(_services).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _services[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _services[key];
    }
  });
});

var _shape = require("./shape");

Object.keys(_shape).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _shape[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _shape[key];
    }
  });
});

var _renderer = require("./components/renderer");

Object.keys(_renderer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _renderer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _renderer[key];
    }
  });
});

var _interface = require("./components/material/interface");

Object.keys(_interface).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _interface[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _interface[key];
    }
  });
});

var _interface2 = require("./components/mesh/interface");

Object.keys(_interface2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _interface2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _interface2[key];
    }
  });
});
// tslint:disable-next-line:no-reference
/// <reference path="../../../node_modules/@webgpu/types/dist/index.d.ts" />
var AST_TOKEN_TYPES;
exports.AST_TOKEN_TYPES = AST_TOKEN_TYPES;

(function (AST_TOKEN_TYPES) {
  AST_TOKEN_TYPES["Void"] = "Void";
  AST_TOKEN_TYPES["Boolean"] = "Boolean";
  AST_TOKEN_TYPES["Float"] = "Float";
  AST_TOKEN_TYPES["Uint32"] = "Uint32";
  AST_TOKEN_TYPES["Int32"] = "Int32";
  AST_TOKEN_TYPES["Vector"] = "Vector";
  AST_TOKEN_TYPES["Vector2Float"] = "vec2<f32>";
  AST_TOKEN_TYPES["Vector3Float"] = "vec3<f32>";
  AST_TOKEN_TYPES["Vector4Float"] = "vec4<f32>";
  AST_TOKEN_TYPES["Vector2Boolean"] = "vec2<bool>";
  AST_TOKEN_TYPES["Vector3Boolean"] = "vec3<bool>";
  AST_TOKEN_TYPES["Vector4Boolean"] = "vec4<bool>";
  AST_TOKEN_TYPES["Vector2Uint"] = "vec2<u32>";
  AST_TOKEN_TYPES["Vector3Uint"] = "vec3<u32>";
  AST_TOKEN_TYPES["Vector4Uint"] = "vec4<u32>";
  AST_TOKEN_TYPES["Vector2Int"] = "vec2<i32>";
  AST_TOKEN_TYPES["Vector3Int"] = "vec3<i32>";
  AST_TOKEN_TYPES["Vector4Int"] = "vec4<i32>";
  AST_TOKEN_TYPES["Matrix"] = "Matrix";
  AST_TOKEN_TYPES["Matrix3x3Float"] = "mat3x3<f32>";
  AST_TOKEN_TYPES["Matrix4x4Float"] = "mat4x4<i32>";
  AST_TOKEN_TYPES["Struct"] = "Struct";
  AST_TOKEN_TYPES["FloatArray"] = "Float[]";
  AST_TOKEN_TYPES["Vector4FloatArray"] = "vec4<f32>[]";
})(AST_TOKEN_TYPES || (exports.AST_TOKEN_TYPES = AST_TOKEN_TYPES = {}));

var AST_NODE_TYPES;
exports.AST_NODE_TYPES = AST_NODE_TYPES;

(function (AST_NODE_TYPES) {
  AST_NODE_TYPES["Program"] = "Program";
  AST_NODE_TYPES["Identifier"] = "Identifier";
  AST_NODE_TYPES["VariableDeclaration"] = "VariableDeclaration";
  AST_NODE_TYPES["BlockStatement"] = "BlockStatement";
  AST_NODE_TYPES["ReturnStatement"] = "ReturnStatement";
  AST_NODE_TYPES["FunctionDeclaration"] = "FunctionDeclaration";
  AST_NODE_TYPES["VariableDeclarator"] = "VariableDeclarator";
  AST_NODE_TYPES["AssignmentExpression"] = "AssignmentExpression";
  AST_NODE_TYPES["LogicalExpression"] = "LogicalExpression";
  AST_NODE_TYPES["BinaryExpression"] = "BinaryExpression";
  AST_NODE_TYPES["ArrayExpression"] = "ArrayExpression";
  AST_NODE_TYPES["UnaryExpression"] = "UnaryExpression";
  AST_NODE_TYPES["UpdateExpression"] = "UpdateExpression";
  AST_NODE_TYPES["FunctionExpression"] = "FunctionExpression";
  AST_NODE_TYPES["MemberExpression"] = "MemberExpression";
  AST_NODE_TYPES["ConditionalExpression"] = "ConditionalExpression";
  AST_NODE_TYPES["ExpressionStatement"] = "ExpressionStatement";
  AST_NODE_TYPES["CallExpression"] = "CallExpression";
  AST_NODE_TYPES["NumThreadStatement"] = "NumThreadStatement";
  AST_NODE_TYPES["StorageStatement"] = "StorageStatement";
  AST_NODE_TYPES["DoWhileStatement"] = "DoWhileStatement";
  AST_NODE_TYPES["WhileStatement"] = "WhileStatement";
  AST_NODE_TYPES["ForStatement"] = "ForStatement";
  AST_NODE_TYPES["BreakStatement"] = "BreakStatement";
  AST_NODE_TYPES["ContinueStatement"] = "ContinueStatement";
  AST_NODE_TYPES["IfStatement"] = "IfStatement";
  AST_NODE_TYPES["ImportedFunctionStatement"] = "ImportedFunctionStatement";
})(AST_NODE_TYPES || (exports.AST_NODE_TYPES = AST_NODE_TYPES = {}));

var STORAGE_CLASS;
exports.STORAGE_CLASS = STORAGE_CLASS;

(function (STORAGE_CLASS) {
  STORAGE_CLASS["Input"] = "Input";
  STORAGE_CLASS["Output"] = "Output";
  STORAGE_CLASS["Uniform"] = "Uniform";
  STORAGE_CLASS["Workgroup"] = "Workgroup";
  STORAGE_CLASS["UniformConstant"] = "UniformConstant";
  STORAGE_CLASS["Image"] = "Image";
  STORAGE_CLASS["StorageBuffer"] = "StorageBuffer";
  STORAGE_CLASS["Private"] = "Private";
  STORAGE_CLASS["Function"] = "Function";
})(STORAGE_CLASS || (exports.STORAGE_CLASS = STORAGE_CLASS = {}));

/**
 * 根据目标平台生成 Shader 代码
 * * WebGL GLSL 1.0
 * * WebGPU Chrome/Edge GLSL 4.5 & WGSL @see https://gpuweb.github.io/gpuweb/wgsl.html
 * * Safari WHLSL (maybe deprecated)
 */
var Target;
exports.Target = Target;

(function (Target) {
  Target["GLSL100"] = "GLSL100";
  Target["GLSL450"] = "GLSL450";
  Target["WGSL"] = "WGSL";
})(Target || (exports.Target = Target = {}));

var DefineValuePlaceholder = '__DefineValuePlaceholder__';
exports.DefineValuePlaceholder = DefineValuePlaceholder;
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {"./ComponentManager":1679470356439,"./components/framegraph/System":1679470356441,"./components/geometry/GeometryComponent":1679470356449,"./components/geometry/System":1679470356451,"./components/material/MaterialComponent":1679470356453,"./components/material/System":1679470356454,"./components/mesh/CullableComponent":1679470356455,"./components/mesh/MeshComponent":1679470356456,"./components/mesh/System":1679470356458,"./components/renderer/passes/PixelPickingPass":1679470356463,"./components/renderer/System":1679470356465,"./components/scenegraph/HierarchyComponent":1679470356467,"./components/scenegraph/System":1679470356468,"./components/scenegraph/TransformComponent":1679470356469,"./Entity":1679470356440,"./identifier":1679470356442,"./inversify.config":1679470356470,"./utils/aabb":1679470356478,"./utils/isSafari":1679470356479,"./services":1679470356480,"./shape":1679470356484,"./components/renderer":1679470356487,"./components/material/interface":1679470356499,"./components/mesh/interface":1679470356500}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356439, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentManager = exports.Component = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _Entity = require("./Entity");

var Component = function Component(data) {//

  (0, _classCallCheck2.default)(this, Component);
};
/**
 * 管理某一类 Component，尽可能做到 AoS 而非 SoA
 * @see https://wickedengine.net/2019/09/29/entity-component-system/
 * @see https://github.com/turanszkij/WickedEngine/blob/master/WickedEngine/wiECS.h
 */
// tslint:disable-next-line:max-classes-per-file


exports.Component = Component;

var ComponentManager = /*#__PURE__*/function () {
  /**
   * 不在 Entity 中维护拥有的 Component 列表，反之亦然
   */
  function ComponentManager(clazz) {
    (0, _classCallCheck2.default)(this, ComponentManager);
    this.clazz = void 0;
    this.components = [];
    this.entities = [];
    this.lookup = {};
    this.clazz = clazz;
  }

  (0, _createClass2.default)(ComponentManager, [{
    key: "clear",
    value: function clear() {
      this.components = [];
      this.entities = [];
      this.lookup = {};
    }
  }, {
    key: "contains",
    value: function contains(entity) {
      return this.lookup[entity] > -1;
    }
  }, {
    key: "create",
    value: function create(entity, data) {
      this.lookup[entity] = this.components.length;
      var component = new this.clazz(data || {});
      this.components.push(component);
      this.entities.push(entity);
      return component;
    }
  }, {
    key: "remove",
    value: function remove(entity) {
      var componentIndex = this.lookup[entity];

      if (componentIndex > -1) {
        if (componentIndex < this.components.length - 1) {
          // 将待删除元素和最后一个元素交换
          // C++ 中有 std::move 这样的操作，避免数据的拷贝
          // @see https://github.com/turanszkij/WickedEngine/blob/master/WickedEngine/wiECS.h#L169
          this.components[componentIndex] = this.components[this.components.length - 1];
          this.entities[componentIndex] = this.entities[this.entities.length - 1];
          this.lookup[this.entities[componentIndex]] = componentIndex;
        }
      } // 待删除元素已经移动到了最后一个


      this.components.pop();
      this.entities.pop();
      delete this.lookup[entity];
    }
  }, {
    key: "removeKeepSorted",
    value: function removeKeepSorted(entity) {
      var componentIndex = this.lookup[entity];

      if (componentIndex > -1) {
        var entity2 = this.entities[componentIndex];

        if (componentIndex < this.components.length - 1) {
          // Move every component left by one that is after this element:
          for (var _i = componentIndex + 1; _i < this.components.length; ++_i) {
            this.components[_i - 1] = this.components[_i];
          } // Move every entity left by one that is after this element and update lut:


          for (var _i2 = componentIndex + 1; _i2 < this.entities.length; ++_i2) {
            this.entities[_i2 - 1] = this.entities[_i2];
            this.lookup[this.entities[_i2 - 1]] = _i2 - 1;
          }
        }

        this.components.pop();
        this.entities.pop();
        delete this.lookup[entity2];
      }
    }
  }, {
    key: "moveItem",
    value: function moveItem(srcIndex, destIndex) {
      if (srcIndex === destIndex) {
        return;
      } // Save the moved component and entity:


      var srcComponent = this.components[srcIndex];
      var srcEntity = this.entities[srcIndex]; // Every other entity-component that's in the way gets moved by one and lut is kept updated:

      var direction = srcIndex < destIndex ? 1 : -1;

      for (var _i3 = srcIndex; _i3 !== destIndex; _i3 += direction) {
        var next = _i3 + direction;
        this.components[_i3] = this.components[next];
        this.entities[_i3] = this.entities[next];
        this.lookup[this.entities[_i3]] = _i3;
      } // Saved entity-component moved to the required position:


      this.components[destIndex] = srcComponent;
      this.entities[destIndex] = srcEntity;
      this.lookup[srcEntity] = destIndex;
    }
  }, {
    key: "getEntity",
    value: function getEntity(index) {
      return this.entities[index];
    }
    /**
     * 由于缺少类似 C++ 的重载操作符，没法通过 [下标] 直接访问。因此只能增加该方法用于遍历。
     */

  }, {
    key: "getComponent",
    value: function getComponent(index) {
      return this.components[index];
    }
  }, {
    key: "getComponentByEntity",
    value: function getComponentByEntity(entity) {
      var componentIndex = this.lookup[entity];

      if (componentIndex > -1) {
        return this.components[componentIndex];
      }

      return null;
    }
  }, {
    key: "getCount",
    value: function getCount() {
      return this.components.length;
    }
  }, {
    key: "getEntityByComponentIndex",
    value: function getEntityByComponentIndex(componentIdx) {
      for (var _i4 = 0, _Object$keys = Object.keys(this.lookup); _i4 < _Object$keys.length; _i4++) {
        var _entity = _Object$keys[_i4];
        var entityInNum = Number(_entity);

        if (this.lookup[entityInNum] === componentIdx) {
          return entityInNum;
        }
      }

      return _Entity.EMPTY;
    }
  }, {
    key: "find",
    value: function find(callback) {
      for (var _i5 = 0; _i5 < this.getCount(); _i5++) {
        var _component = this.getComponent(_i5);

        if (callback(_component, _i5)) {
          return _component;
        }
      }

      return null;
    }
  }, {
    key: "findIndex",
    value: function findIndex(callback) {
      for (var _i6 = 0; _i6 < this.getCount(); _i6++) {
        var _component2 = this.getComponent(_i6);

        if (callback(_component2, _i6)) {
          return _i6;
        }
      }

      return -1;
    }
  }, {
    key: "forEach",
    value: function forEach(callback) {
      for (var _i7 = 0, _Object$keys2 = Object.keys(this.lookup); _i7 < _Object$keys2.length; _i7++) {
        var _entity2 = _Object$keys2[_i7];
        var entityInNum = Number(_entity2);
        var componentIndex = this.lookup[entityInNum];
        callback(entityInNum, this.getComponent(componentIndex));
      }
    }
  }, {
    key: "forEachAsync",
    value: function () {
      var _forEachAsync = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(callback) {
        var _i8, _Object$keys3, _entity3, entityInNum, componentIndex;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _i8 = 0, _Object$keys3 = Object.keys(this.lookup);

              case 1:
                if (!(_i8 < _Object$keys3.length)) {
                  _context.next = 10;
                  break;
                }

                _entity3 = _Object$keys3[_i8];
                entityInNum = Number(_entity3);
                componentIndex = this.lookup[entityInNum];
                _context.next = 7;
                return callback(entityInNum, this.getComponent(componentIndex));

              case 7:
                _i8++;
                _context.next = 1;
                break;

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function forEachAsync(_x) {
        return _forEachAsync.apply(this, arguments);
      }

      return forEachAsync;
    }()
  }, {
    key: "map",
    value: function map(callback) {
      var result = [];

      for (var _i9 = 0, _Object$keys4 = Object.keys(this.lookup); _i9 < _Object$keys4.length; _i9++) {
        var _entity4 = _Object$keys4[_i9];
        var entityInNum = Number(_entity4);
        var componentIndex = this.lookup[entityInNum];
        result.push(callback(entityInNum, this.getComponent(componentIndex)));
      }

      return result;
    }
  }]);
  return ComponentManager;
}();

exports.ComponentManager = ComponentManager;
//# sourceMappingURL=ComponentManager.js.map
}, function(modId) { var map = {"./Entity":1679470356440}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356440, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEntity = createEntity;
exports.EMPTY = void 0;
var EMPTY = -1;
exports.EMPTY = EMPTY;
var entitySequence = 1;
/**
 * 类似关系型数据库的主键
 * TODO: 自动生成，考虑序列化
 */

function createEntity() {
  return entitySequence++;
}
//# sourceMappingURL=Entity.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356441, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FrameGraphSystem = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _inversify = require("inversify");

var _identifier = require("../../identifier");

var _FrameGraphHandle = require("./FrameGraphHandle");

var _FrameGraphPass = require("./FrameGraphPass");

var _PassNode = require("./PassNode");

var _ResourceEntry = require("./ResourceEntry");

var _ResourceNode = require("./ResourceNode");

var _dec, _dec2, _class, _class2, _descriptor, _temp;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * ported from FrameGraph implemented by SakuraRender
 * @see https://zhuanlan.zhihu.com/p/98572442
 * @see https://github.com/SaeruHikari/Sakura/blob/RenderGraph/SakuraCore/Source/Framework/GraphicTypes/FrameGraph/SakuraFrameGraph.cpp
 */
var FrameGraphSystem = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_identifier.IDENTIFIER.RenderEngine), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function () {
  function FrameGraphSystem() {
    (0, _classCallCheck2.default)(this, FrameGraphSystem);
    this.passNodes = [];
    this.resourceNodes = [];
    this.frameGraphPasses = [];
    (0, _initializerDefineProperty2.default)(this, "engine", _descriptor, this);
  }

  (0, _createClass2.default)(FrameGraphSystem, [{
    key: "execute",
    value: function () {
      var _execute = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(views) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // this.engine.beginFrame();
                this.compile();
                _context.next = 3;
                return this.executePassNodes(views);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function execute(_x) {
        return _execute.apply(this, arguments);
      }

      return execute;
    }()
  }, {
    key: "tearDown",
    value: function tearDown() {
      this.frameGraphPasses.forEach(function (pass) {
        if (pass.tearDown) {
          pass.tearDown();
        }
      });
      this.reset();
    }
  }, {
    key: "addPass",
    value: function addPass(name, setup, execute, tearDown) {
      var frameGraphPass = new _FrameGraphPass.FrameGraphPass();
      frameGraphPass.execute = execute;

      if (tearDown) {
        frameGraphPass.tearDown = tearDown;
      }

      frameGraphPass.name = name;
      var passNode = new _PassNode.PassNode();
      passNode.name = name;
      this.passNodes.push(passNode);
      this.frameGraphPasses.push(frameGraphPass);
      setup(this, passNode, frameGraphPass);
      return frameGraphPass;
    }
  }, {
    key: "getPass",
    value: function getPass(name) {
      return this.frameGraphPasses.find(function (p) {
        return p.name === name;
      });
    }
  }, {
    key: "compile",
    value: function compile() {
      var _this = this;

      var _iterator = _createForOfIteratorHelper(this.passNodes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _pass = _step.value;
          _pass.refCount = _pass.writes.length + (_pass.hasSideEffect ? 1 : 0);

          _pass.reads.forEach(function (handle) {
            _this.resourceNodes[handle.index].readerCount++;
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var stack = [];

      var _iterator2 = _createForOfIteratorHelper(this.resourceNodes),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var node = _step2.value;

          if (node.readerCount === 0) {
            stack.push(node);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      while (stack.length) {
        var pNode = stack.pop();
        var writer = pNode && pNode.writer;

        if (writer) {
          if (--writer.refCount === 0) {
            // this pass is culled
            // assert(!writer->hasSideEffect);
            var _iterator3 = _createForOfIteratorHelper(writer.reads),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var resource = _step3.value;
                var r = this.resourceNodes[resource.index];

                if (--r.readerCount === 0) {
                  stack.push(r);
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }
      } // update the final reference counts


      this.resourceNodes.forEach(function (node) {
        node.resource.refs += node.readerCount;
      });

      var _iterator4 = _createForOfIteratorHelper(this.passNodes),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _pass2 = _step4.value;

          if (!_pass2.refCount) {
            continue;
          }

          var _iterator6 = _createForOfIteratorHelper(_pass2.reads),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var _resource2 = _step6.value;
              var pResource = this.resourceNodes[_resource2.index].resource;
              pResource.first = pResource.first ? pResource.first : _pass2;
              pResource.last = _pass2;
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          var _iterator7 = _createForOfIteratorHelper(_pass2.writes),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var _resource3 = _step7.value;
              var _pResource = this.resourceNodes[_resource3.index].resource;
              _pResource.first = _pResource.first ? _pResource.first : _pass2;
              _pResource.last = _pass2;
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      for (var priority = 0; priority < 2; priority++) {
        var _iterator5 = _createForOfIteratorHelper(this.resourceNodes),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var resoureNode = _step5.value;
            var _resource = resoureNode.resource;

            if (_resource.priority === priority && _resource.refs) {
              var pFirst = _resource.first;
              var pLast = _resource.last;

              if (pFirst && pLast) {
                pFirst.devirtualize.push(_resource);
                pLast.destroy.push(_resource);
              }
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    }
  }, {
    key: "executePassNodes",
    value: function () {
      var _executePassNodes = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(views) {
        var _iterator8, _step8, _step8$value, index, node, _iterator9, _step9, resource, _iterator10, _step10, _resource4, _iterator11, _step11, _resource5, _iterator12, _step12, _resource6;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _iterator8 = _createForOfIteratorHelper(this.passNodes.entries());
                _context2.prev = 1;

                _iterator8.s();

              case 3:
                if ((_step8 = _iterator8.n()).done) {
                  _context2.next = 18;
                  break;
                }

                _step8$value = (0, _slicedToArray2.default)(_step8.value, 2), index = _step8$value[0], node = _step8$value[1];

                if (!node.refCount) {
                  _context2.next = 16;
                  break;
                }

                _iterator9 = _createForOfIteratorHelper(node.devirtualize);

                try {
                  for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                    resource = _step9.value;
                    resource.preExecuteDevirtualize(this.engine);
                  }
                } catch (err) {
                  _iterator9.e(err);
                } finally {
                  _iterator9.f();
                }

                _iterator10 = _createForOfIteratorHelper(node.destroy);

                try {
                  for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                    _resource4 = _step10.value;

                    _resource4.preExecuteDestroy(this.engine);
                  }
                } catch (err) {
                  _iterator10.e(err);
                } finally {
                  _iterator10.f();
                }

                _context2.next = 12;
                return this.frameGraphPasses[index].execute(this, this.frameGraphPasses[index], views);

              case 12:
                _iterator11 = _createForOfIteratorHelper(node.devirtualize);

                try {
                  for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                    _resource5 = _step11.value;

                    _resource5.postExecuteDevirtualize(this.engine);
                  }
                } catch (err) {
                  _iterator11.e(err);
                } finally {
                  _iterator11.f();
                }

                _iterator12 = _createForOfIteratorHelper(node.destroy);

                try {
                  for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                    _resource6 = _step12.value;

                    _resource6.postExecuteDestroy(this.engine);
                  }
                } catch (err) {
                  _iterator12.e(err);
                } finally {
                  _iterator12.f();
                }

              case 16:
                _context2.next = 3;
                break;

              case 18:
                _context2.next = 23;
                break;

              case 20:
                _context2.prev = 20;
                _context2.t0 = _context2["catch"](1);

                _iterator8.e(_context2.t0);

              case 23:
                _context2.prev = 23;

                _iterator8.f();

                return _context2.finish(23);

              case 26:
                this.reset();

              case 27:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 20, 23, 26]]);
      }));

      function executePassNodes(_x2) {
        return _executePassNodes.apply(this, arguments);
      }

      return executePassNodes;
    }()
  }, {
    key: "reset",
    value: function reset() {
      this.passNodes = [];
      this.resourceNodes = [];
      this.frameGraphPasses = [];
    }
  }, {
    key: "getResourceNode",
    value: function getResourceNode(r) {
      return this.resourceNodes[r.index];
    }
  }, {
    key: "createResourceNode",
    value: function createResourceNode(resourceEntry) {
      var resourceNode = new _ResourceNode.ResourceNode();
      resourceNode.resource = resourceEntry;
      resourceNode.version = resourceEntry.version;
      this.resourceNodes.push(resourceNode);
      var fgh = new _FrameGraphHandle.FrameGraphHandle();
      fgh.index = this.resourceNodes.length - 1;
      return fgh;
    }
  }, {
    key: "createTexture",
    value: function createTexture(passNode, name, descriptor) {
      var resource = new _ResourceEntry.ResourceEntry();
      resource.name = name;
      resource.descriptor = descriptor;
      return this.createResourceNode(resource);
    }
  }, {
    key: "createRenderTarget",
    value: function createRenderTarget(passNode, name, descriptor) {
      var resource = new _ResourceEntry.ResourceEntry();
      resource.name = name;
      resource.descriptor = descriptor;
      return this.createResourceNode(resource);
    }
  }, {
    key: "present",
    value: function present(input) {
      this.addPass('Present', function (fg, passNode) {
        passNode.read(input);
        passNode.hasSideEffect = true;
      }, /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      })));
    }
  }]);
  return FrameGraphSystem;
}(), _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "engine", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.FrameGraphSystem = FrameGraphSystem;
//# sourceMappingURL=System.js.map
}, function(modId) { var map = {"../../identifier":1679470356442,"./FrameGraphHandle":1679470356443,"./FrameGraphPass":1679470356444,"./PassNode":1679470356445,"./ResourceEntry":1679470356446,"./ResourceNode":1679470356448}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356442, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IDENTIFIER = void 0;
var IDENTIFIER = {
  // SceneGraph
  HierarchyComponentManager: Symbol('HierarchyComponentManager'),
  TransformComponentManager: Symbol('TransformComponentManager'),
  NameComponentManager: Symbol('NameComponentManager'),
  SceneGraphSystem: Symbol('SceneGraphSystem'),
  // FrameGraph
  FrameGraphSystem: Symbol('FrameGraphSystem'),
  ResourcePool: Symbol('ResourcePool'),
  ResourceHandleComponentManager: Symbol('ResourceHandleComponentManager'),
  PassNodeComponentManager: Symbol('PassNodeComponentManager'),
  // Renderer
  RendererSystem: Symbol('RendererSystem'),
  RenderPass: Symbol('RenderPass'),
  RenderPassFactory: Symbol('Factory<IRenderPass>'),
  Renderable: Symbol('Factory<IRenderPass>'),
  // Mesh
  MeshSystem: Symbol('MeshSystem'),
  MeshComponentManager: Symbol('MeshComponentManager'),
  CullableComponentManager: Symbol('CullableComponentManager'),
  // Geometry
  Geometry: Symbol('Geometry'),
  GeometrySystem: Symbol('GeometrySystem'),
  GeometryComponentManager: Symbol('GeometryComponentManager'),
  // Material
  Material: Symbol('Material'),
  MaterialSystem: Symbol('MaterialSystem'),
  MaterialComponentManager: Symbol('MaterialComponentManager'),
  // RenderPath
  ForwardRenderPath: Symbol('ForwardRenderPath'),
  // ComputeSystem
  ComputeSystem: Symbol('ComputeSystem'),
  ComputeComponentManager: Symbol('ComputeComponentManager'),
  ComputeStrategy: Symbol('ComputeStrategy'),
  Systems: Symbol('Systems'),
  World: Symbol('World'),
  // RenderEngine
  RenderEngine: Symbol('RenderEngine'),
  WebGPUEngine: Symbol('WebGPUEngine'),
  WebGLEngine: Symbol('WebGLEngine'),
  // Shader Module
  ShaderModuleService: Symbol('ShaderModuleService'),
  ConfigService: Symbol('ConfigService'),
  InteractorService: Symbol('InteractorService'),
  IEventEmitter: Symbol('IEventEmitter'),
  // Light
  Light: Symbol('Light')
};
exports.IDENTIFIER = IDENTIFIER;
//# sourceMappingURL=identifier.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356443, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FrameGraphHandle = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var FrameGraphHandle = function FrameGraphHandle() {
  (0, _classCallCheck2.default)(this, FrameGraphHandle);
  this.index = void 0;
};

exports.FrameGraphHandle = FrameGraphHandle;
//# sourceMappingURL=FrameGraphHandle.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356444, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FrameGraphPass = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var FrameGraphPass = function FrameGraphPass() {
  (0, _classCallCheck2.default)(this, FrameGraphPass);
  this.name = void 0;
  this.data = void 0;
  this.execute = void 0;
  this.tearDown = void 0;
};

exports.FrameGraphPass = FrameGraphPass;
//# sourceMappingURL=FrameGraphPass.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356445, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PassNode = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PassNode = /*#__PURE__*/function () {
  function PassNode() {
    (0, _classCallCheck2.default)(this, PassNode);
    this.name = void 0;
    this.refCount = 0;
    this.hasSideEffect = false;
    this.devirtualize = [];
    this.destroy = [];
    this.reads = [];
    this.writes = [];
  }

  (0, _createClass2.default)(PassNode, [{
    key: "read",
    value: function read(handle) {
      if (!this.reads.find(function (h) {
        return h.index === handle.index;
      })) {
        this.reads.push(handle);
      }

      return handle;
    }
  }, {
    key: "sample",
    value: function sample(handle) {
      this.read(handle); // TODO: 记录在 this.samples 中

      return handle;
    }
  }, {
    key: "write",
    value: function write(fg, handle) {
      var existed = this.writes.find(function (h) {
        return h.index === handle.index;
      });

      if (existed) {
        return handle;
      }

      var node = fg.getResourceNode(handle);
      node.resource.version++;

      if (node.resource.imported) {
        this.hasSideEffect = true;
      }

      var r = fg.createResourceNode(node.resource);
      var newNode = fg.getResourceNode(r);
      newNode.writer = this;
      this.writes.push(r);
      return r;
    }
  }]);
  return PassNode;
}();

exports.PassNode = PassNode;
//# sourceMappingURL=PassNode.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356446, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResourceEntry = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _VirtualResource2 = require("./VirtualResource");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ResourceEntry = /*#__PURE__*/function (_VirtualResource) {
  (0, _inherits2.default)(ResourceEntry, _VirtualResource);

  var _super = _createSuper(ResourceEntry);

  function ResourceEntry() {
    var _this;

    (0, _classCallCheck2.default)(this, ResourceEntry);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.version = 0;
    _this.refs = 0;
    _this.name = void 0;
    _this.imported = void 0;
    _this.priority = void 0;
    _this.discardStart = true;
    _this.discardEnd = false;
    _this.descriptor = void 0;
    _this.resource = void 0;
    return _this;
  }

  (0, _createClass2.default)(ResourceEntry, [{
    key: "preExecuteDestroy",

    /**
     * Lifecycles in FG's execute
     */
    value: function preExecuteDestroy() {
      this.discardEnd = true;
    }
  }, {
    key: "postExecuteDestroy",
    value: function postExecuteDestroy() {
      if (!this.imported) {// TODO: 不需要每一帧结束后都销毁资源，可以增加临时资源标志
        // this.resource.destroy();
      }
    }
  }, {
    key: "postExecuteDevirtualize",
    value: function postExecuteDevirtualize() {
      this.discardStart = false;
    }
  }, {
    key: "preExecuteDevirtualize",
    value: function preExecuteDevirtualize() {
      if (!this.imported) {//
      }
    }
  }]);
  return ResourceEntry;
}(_VirtualResource2.VirtualResource);

exports.ResourceEntry = ResourceEntry;
//# sourceMappingURL=ResourceEntry.js.map
}, function(modId) { var map = {"./VirtualResource":1679470356447}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356447, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VirtualResource = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

/**
 * ported from filament
 */
var VirtualResource = function VirtualResource() {
  (0, _classCallCheck2.default)(this, VirtualResource);
  this.first = void 0;
  this.last = void 0;
};

exports.VirtualResource = VirtualResource;
//# sourceMappingURL=VirtualResource.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356448, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResourceNode = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var ResourceNode = function ResourceNode() {
  (0, _classCallCheck2.default)(this, ResourceNode);
  this.resource = void 0;
  this.writer = void 0;
  this.readerCount = 0;
  this.version = void 0;
};

exports.ResourceNode = ResourceNode;
//# sourceMappingURL=ResourceNode.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356449, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeometryComponent = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _glMatrix = require("gl-matrix");

var _ComponentManager = require("../../ComponentManager");

var _isTypedarray = require("../../utils/is-typedarray");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var GeometryComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(GeometryComponent, _Component);

  var _super = _createSuper(GeometryComponent);

  // instanced count
  function GeometryComponent(data) {
    var _this;

    (0, _classCallCheck2.default)(this, GeometryComponent);
    _this = _super.call(this, data);
    _this.dirty = true;
    _this.attributes = [];
    _this.indices = void 0;
    _this.indicesBuffer = void 0;
    _this.vertexCount = 0;
    _this.maxInstancedCount = void 0;
    _this.aabb = void 0;
    _this.entity = void 0;
    Object.assign((0, _assertThisInitialized2.default)(_this), data);
    return _this;
  }
  /**
   * @see https://threejs.org/docs/#api/en/core/BufferAttribute
   */


  (0, _createClass2.default)(GeometryComponent, [{
    key: "setAttribute",
    value: function setAttribute(name, data, descriptor, bufferGetter) {
      var existed = this.attributes.find(function (a) {
        return a.name === name;
      });

      if (!existed) {
        this.attributes.push(_objectSpread(_objectSpread({
          dirty: true,
          name: name,
          data: data
        }, descriptor), {}, {
          bufferGetter: bufferGetter
        }));
      } else {
        existed.data = data;
        existed.dirty = true;
      }

      this.dirty = true;
      return this;
    }
  }, {
    key: "setIndex",
    value: function setIndex(data) {
      this.indices = new Uint32Array( // @ts-ignore
      data.buffer ? data.buffer : data);
      this.dirty = true;
      return this;
    }
    /**
     * when merge all the geometries into one, we need to transform every vertex's position
     * and every face's normal
     */

  }, {
    key: "applyMatrix",
    value: function applyMatrix(matrix) {
      var positionAttribute = this.attributes.find(function (_ref) {
        var name = _ref.name;
        return name === 'position';
      });
      var normalAttribute = this.attributes.find(function (_ref2) {
        var name = _ref2.name;
        return name === 'normal';
      });

      if (positionAttribute) {
        positionAttribute.dirty = true; // @ts-ignore

        if (positionAttribute.data && positionAttribute.data.length) {
          // @ts-ignore
          for (var i = 0; i < positionAttribute.data.length; i += 3) {
            var position = _glMatrix.vec4.fromValues( // @ts-ignore
            positionAttribute.data[i], // @ts-ignore
            positionAttribute.data[i + 1], // @ts-ignore
            positionAttribute.data[i + 2], 1);

            _glMatrix.vec4.transformMat4(position, position, matrix);

            if ((0, _isTypedarray.isTypedArray)(positionAttribute.data)) {
              // @ts-ignore
              positionAttribute.data.set([position[0], position[1], position[2]], i);
            } else {
              // @ts-ignore
              positionAttribute.data[i] = position[0]; // @ts-ignore

              positionAttribute.data[i + 1] = position[1]; // @ts-ignore

              positionAttribute.data[i + 2] = position[2];
            }
          }
        }
      }

      if (normalAttribute) {
        var normalMatrix = _glMatrix.mat3.normalFromMat4(_glMatrix.mat3.create(), matrix); // @ts-ignore


        if (normalAttribute.data && normalAttribute.data.length) {
          // @ts-ignore
          for (var _i = 0; _i < normalAttribute.data.length; _i += 3) {
            var normal = _glMatrix.vec3.fromValues( // @ts-ignore
            normalAttribute.data[_i], // @ts-ignore
            normalAttribute.data[_i + 1], // @ts-ignore
            normalAttribute.data[_i + 2]);

            _glMatrix.vec3.transformMat3(normal, normal, normalMatrix);

            _glMatrix.vec3.normalize(normal, normal);

            if ((0, _isTypedarray.isTypedArray)(normalAttribute.data)) {
              // @ts-ignore
              normalAttribute.data.set([normal[0], normal[1], normal[2]], _i);
            } else {
              // @ts-ignore
              normalAttribute.data[_i] = normal[0]; // @ts-ignore

              normalAttribute.data[_i + 1] = normal[1]; // @ts-ignore

              normalAttribute.data[_i + 2] = normal[2];
            }
          }
        }
      }
    }
  }]);
  return GeometryComponent;
}(_ComponentManager.Component);

exports.GeometryComponent = GeometryComponent;
//# sourceMappingURL=GeometryComponent.js.map
}, function(modId) { var map = {"../../ComponentManager":1679470356439,"../../utils/is-typedarray":1679470356450}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356450, function(require, module, exports) {


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
__DEFINE__(1679470356451, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeometrySystem = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _inversify = require("inversify");

var _2 = require("../..");

var _identifier = require("../../identifier");

var _gl = require("../renderer/gl");

var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

var GeometrySystem = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_identifier.IDENTIFIER.GeometryComponentManager), _dec3 = (0, _inversify.inject)(_identifier.IDENTIFIER.RenderEngine), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function () {
  function GeometrySystem() {
    (0, _classCallCheck2.default)(this, GeometrySystem);
    (0, _initializerDefineProperty2.default)(this, "geometry", _descriptor, this);
    (0, _initializerDefineProperty2.default)(this, "engine", _descriptor2, this);
  }

  (0, _createClass2.default)(GeometrySystem, [{
    key: "execute",
    value: function () {
      var _execute = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _this = this;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.geometry.forEach(function (entity, component) {
                  // build buffers for each geometry
                  if (component.dirty) {
                    component.attributes.forEach(function (attribute) {
                      if (attribute.dirty && attribute.data) {
                        if (!attribute.buffer) {
                          attribute.buffer = _this.engine.createBuffer({
                            data: attribute.data,
                            type: _gl.gl.FLOAT
                          });
                        } else {
                          var _attribute$buffer;

                          (_attribute$buffer = attribute.buffer) === null || _attribute$buffer === void 0 ? void 0 : _attribute$buffer.subData({
                            data: attribute.data,
                            // TODO: support offset in subdata
                            offset: 0
                          });
                        }

                        attribute.dirty = false;
                      }
                    }); // create index buffer if needed

                    if (component.indices) {
                      if (!component.indicesBuffer) {
                        component.indicesBuffer = _this.engine.createElements({
                          data: component.indices,
                          count: component.indices.length,
                          type: _gl.gl.UNSIGNED_INT,
                          usage: _gl.gl.STATIC_DRAW
                        });
                      } else {
                        component.indicesBuffer.subData({
                          data: component.indices,
                          offset: 0
                        });
                      }
                    }

                    component.dirty = false;
                  }
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function execute() {
        return _execute.apply(this, arguments);
      }

      return execute;
    }()
  }, {
    key: "tearDown",
    value: function tearDown() {
      this.geometry.forEach(function (_, geometry) {
        if (geometry.indicesBuffer) {
          geometry.indicesBuffer.destroy();
        }

        geometry.attributes.forEach(function (attribute) {
          if (attribute.buffer) {
            attribute.buffer.destroy();
          }
        });
      });
      this.geometry.clear();
    }
    /**
     * @see https://threejs.org/docs/#api/en/core/BufferGeometry
     */

  }, {
    key: "createBufferGeometry",
    value: function createBufferGeometry() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        vertexCount: 3
      },
          vertexCount = _ref.vertexCount;

      var entity = (0, _2.createEntity)();
      return this.geometry.create(entity, {
        vertexCount: vertexCount
      });
    }
    /**
     * @see https://threejs.org/docs/#api/en/core/InstancedBufferGeometry
     */

  }, {
    key: "createInstancedBufferGeometry",
    value: function createInstancedBufferGeometry(_ref2) {
      var maxInstancedCount = _ref2.maxInstancedCount,
          vertexCount = _ref2.vertexCount;
      var entity = (0, _2.createEntity)();
      return this.geometry.create(entity, {
        maxInstancedCount: maxInstancedCount,
        vertexCount: vertexCount
      });
    }
  }]);
  return GeometrySystem;
}(), _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "geometry", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "engine", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.GeometrySystem = GeometrySystem;
//# sourceMappingURL=System.js.map
}, function(modId) { var map = {"../..":1679470356438,"../../identifier":1679470356442,"../renderer/gl":1679470356452}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356452, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gl = void 0;

/**
 * WebGL 枚举值
 * @see http://www.khronos.org/registry/webgl/specs/latest/1.0/#5.14
 * 使用 babel 插件对常量进行内联，以减少最终打包产物大小
 * @see https://github.com/uber/deck.gl/blob/7.1-release/dev-docs/roadmaps/dist-size-roadmap.md#inline-gl-constants
 * 为了支持 WebGPU，新增 TextureUsage
 * @see https://gpuweb.github.io/gpuweb/#gputextureusage
 */
var gl;
exports.gl = gl;

(function (gl) {
  gl[gl["DEPTH_BUFFER_BIT"] = 256] = "DEPTH_BUFFER_BIT";
  gl[gl["STENCIL_BUFFER_BIT"] = 1024] = "STENCIL_BUFFER_BIT";
  gl[gl["COLOR_BUFFER_BIT"] = 16384] = "COLOR_BUFFER_BIT";
  gl[gl["POINTS"] = 0] = "POINTS";
  gl[gl["LINES"] = 1] = "LINES";
  gl[gl["LINE_LOOP"] = 2] = "LINE_LOOP";
  gl[gl["LINE_STRIP"] = 3] = "LINE_STRIP";
  gl[gl["TRIANGLES"] = 4] = "TRIANGLES";
  gl[gl["TRIANGLE_STRIP"] = 5] = "TRIANGLE_STRIP";
  gl[gl["TRIANGLE_FAN"] = 6] = "TRIANGLE_FAN";
  gl[gl["ZERO"] = 0] = "ZERO";
  gl[gl["ONE"] = 1] = "ONE";
  gl[gl["SRC_COLOR"] = 768] = "SRC_COLOR";
  gl[gl["ONE_MINUS_SRC_COLOR"] = 769] = "ONE_MINUS_SRC_COLOR";
  gl[gl["SRC_ALPHA"] = 770] = "SRC_ALPHA";
  gl[gl["ONE_MINUS_SRC_ALPHA"] = 771] = "ONE_MINUS_SRC_ALPHA";
  gl[gl["DST_ALPHA"] = 772] = "DST_ALPHA";
  gl[gl["ONE_MINUS_DST_ALPHA"] = 773] = "ONE_MINUS_DST_ALPHA";
  gl[gl["DST_COLOR"] = 774] = "DST_COLOR";
  gl[gl["ONE_MINUS_DST_COLOR"] = 775] = "ONE_MINUS_DST_COLOR";
  gl[gl["SRC_ALPHA_SATURATE"] = 776] = "SRC_ALPHA_SATURATE";
  gl[gl["FUNC_ADD"] = 32774] = "FUNC_ADD";
  gl[gl["BLEND_EQUATION"] = 32777] = "BLEND_EQUATION";
  gl[gl["BLEND_EQUATION_RGB"] = 32777] = "BLEND_EQUATION_RGB";
  gl[gl["BLEND_EQUATION_ALPHA"] = 34877] = "BLEND_EQUATION_ALPHA";
  gl[gl["FUNC_SUBTRACT"] = 32778] = "FUNC_SUBTRACT";
  gl[gl["FUNC_REVERSE_SUBTRACT"] = 32779] = "FUNC_REVERSE_SUBTRACT";
  gl[gl["MAX_EXT"] = 32776] = "MAX_EXT";
  gl[gl["MIN_EXT"] = 32775] = "MIN_EXT";
  gl[gl["BLEND_DST_RGB"] = 32968] = "BLEND_DST_RGB";
  gl[gl["BLEND_SRC_RGB"] = 32969] = "BLEND_SRC_RGB";
  gl[gl["BLEND_DST_ALPHA"] = 32970] = "BLEND_DST_ALPHA";
  gl[gl["BLEND_SRC_ALPHA"] = 32971] = "BLEND_SRC_ALPHA";
  gl[gl["CONSTANT_COLOR"] = 32769] = "CONSTANT_COLOR";
  gl[gl["ONE_MINUS_CONSTANT_COLOR"] = 32770] = "ONE_MINUS_CONSTANT_COLOR";
  gl[gl["CONSTANT_ALPHA"] = 32771] = "CONSTANT_ALPHA";
  gl[gl["ONE_MINUS_CONSTANT_ALPHA"] = 32772] = "ONE_MINUS_CONSTANT_ALPHA";
  gl[gl["BLEND_COLOR"] = 32773] = "BLEND_COLOR";
  gl[gl["ARRAY_BUFFER"] = 34962] = "ARRAY_BUFFER";
  gl[gl["ELEMENT_ARRAY_BUFFER"] = 34963] = "ELEMENT_ARRAY_BUFFER";
  gl[gl["ARRAY_BUFFER_BINDING"] = 34964] = "ARRAY_BUFFER_BINDING";
  gl[gl["ELEMENT_ARRAY_BUFFER_BINDING"] = 34965] = "ELEMENT_ARRAY_BUFFER_BINDING";
  gl[gl["STREAM_DRAW"] = 35040] = "STREAM_DRAW";
  gl[gl["STATIC_DRAW"] = 35044] = "STATIC_DRAW";
  gl[gl["DYNAMIC_DRAW"] = 35048] = "DYNAMIC_DRAW";
  gl[gl["BUFFER_SIZE"] = 34660] = "BUFFER_SIZE";
  gl[gl["BUFFER_USAGE"] = 34661] = "BUFFER_USAGE";
  gl[gl["CURRENT_VERTEX_ATTRIB"] = 34342] = "CURRENT_VERTEX_ATTRIB";
  gl[gl["FRONT"] = 1028] = "FRONT";
  gl[gl["BACK"] = 1029] = "BACK";
  gl[gl["FRONT_AND_BACK"] = 1032] = "FRONT_AND_BACK";
  gl[gl["CULL_FACE"] = 2884] = "CULL_FACE";
  gl[gl["BLEND"] = 3042] = "BLEND";
  gl[gl["DITHER"] = 3024] = "DITHER";
  gl[gl["STENCIL_TEST"] = 2960] = "STENCIL_TEST";
  gl[gl["DEPTH_TEST"] = 2929] = "DEPTH_TEST";
  gl[gl["SCISSOR_TEST"] = 3089] = "SCISSOR_TEST";
  gl[gl["POLYGON_OFFSET_FILL"] = 32823] = "POLYGON_OFFSET_FILL";
  gl[gl["SAMPLE_ALPHA_TO_COVERAGE"] = 32926] = "SAMPLE_ALPHA_TO_COVERAGE";
  gl[gl["SAMPLE_COVERAGE"] = 32928] = "SAMPLE_COVERAGE";
  gl[gl["NO_ERROR"] = 0] = "NO_ERROR";
  gl[gl["INVALID_ENUM"] = 1280] = "INVALID_ENUM";
  gl[gl["INVALID_VALUE"] = 1281] = "INVALID_VALUE";
  gl[gl["INVALID_OPERATION"] = 1282] = "INVALID_OPERATION";
  gl[gl["OUT_OF_MEMORY"] = 1285] = "OUT_OF_MEMORY";
  gl[gl["CW"] = 2304] = "CW";
  gl[gl["CCW"] = 2305] = "CCW";
  gl[gl["LINE_WIDTH"] = 2849] = "LINE_WIDTH";
  gl[gl["ALIASED_POINT_SIZE_RANGE"] = 33901] = "ALIASED_POINT_SIZE_RANGE";
  gl[gl["ALIASED_LINE_WIDTH_RANGE"] = 33902] = "ALIASED_LINE_WIDTH_RANGE";
  gl[gl["CULL_FACE_MODE"] = 2885] = "CULL_FACE_MODE";
  gl[gl["FRONT_FACE"] = 2886] = "FRONT_FACE";
  gl[gl["DEPTH_RANGE"] = 2928] = "DEPTH_RANGE";
  gl[gl["DEPTH_WRITEMASK"] = 2930] = "DEPTH_WRITEMASK";
  gl[gl["DEPTH_CLEAR_VALUE"] = 2931] = "DEPTH_CLEAR_VALUE";
  gl[gl["DEPTH_FUNC"] = 2932] = "DEPTH_FUNC";
  gl[gl["STENCIL_CLEAR_VALUE"] = 2961] = "STENCIL_CLEAR_VALUE";
  gl[gl["STENCIL_FUNC"] = 2962] = "STENCIL_FUNC";
  gl[gl["STENCIL_FAIL"] = 2964] = "STENCIL_FAIL";
  gl[gl["STENCIL_PASS_DEPTH_FAIL"] = 2965] = "STENCIL_PASS_DEPTH_FAIL";
  gl[gl["STENCIL_PASS_DEPTH_PASS"] = 2966] = "STENCIL_PASS_DEPTH_PASS";
  gl[gl["STENCIL_REF"] = 2967] = "STENCIL_REF";
  gl[gl["STENCIL_VALUE_MASK"] = 2963] = "STENCIL_VALUE_MASK";
  gl[gl["STENCIL_WRITEMASK"] = 2968] = "STENCIL_WRITEMASK";
  gl[gl["STENCIL_BACK_FUNC"] = 34816] = "STENCIL_BACK_FUNC";
  gl[gl["STENCIL_BACK_FAIL"] = 34817] = "STENCIL_BACK_FAIL";
  gl[gl["STENCIL_BACK_PASS_DEPTH_FAIL"] = 34818] = "STENCIL_BACK_PASS_DEPTH_FAIL";
  gl[gl["STENCIL_BACK_PASS_DEPTH_PASS"] = 34819] = "STENCIL_BACK_PASS_DEPTH_PASS";
  gl[gl["STENCIL_BACK_REF"] = 36003] = "STENCIL_BACK_REF";
  gl[gl["STENCIL_BACK_VALUE_MASK"] = 36004] = "STENCIL_BACK_VALUE_MASK";
  gl[gl["STENCIL_BACK_WRITEMASK"] = 36005] = "STENCIL_BACK_WRITEMASK";
  gl[gl["VIEWPORT"] = 2978] = "VIEWPORT";
  gl[gl["SCISSOR_BOX"] = 3088] = "SCISSOR_BOX";
  gl[gl["COLOR_CLEAR_VALUE"] = 3106] = "COLOR_CLEAR_VALUE";
  gl[gl["COLOR_WRITEMASK"] = 3107] = "COLOR_WRITEMASK";
  gl[gl["UNPACK_ALIGNMENT"] = 3317] = "UNPACK_ALIGNMENT";
  gl[gl["PACK_ALIGNMENT"] = 3333] = "PACK_ALIGNMENT";
  gl[gl["MAX_TEXTURE_SIZE"] = 3379] = "MAX_TEXTURE_SIZE";
  gl[gl["MAX_VIEWPORT_DIMS"] = 3386] = "MAX_VIEWPORT_DIMS";
  gl[gl["SUBPIXEL_BITS"] = 3408] = "SUBPIXEL_BITS";
  gl[gl["RED_BITS"] = 3410] = "RED_BITS";
  gl[gl["GREEN_BITS"] = 3411] = "GREEN_BITS";
  gl[gl["BLUE_BITS"] = 3412] = "BLUE_BITS";
  gl[gl["ALPHA_BITS"] = 3413] = "ALPHA_BITS";
  gl[gl["DEPTH_BITS"] = 3414] = "DEPTH_BITS";
  gl[gl["STENCIL_BITS"] = 3415] = "STENCIL_BITS";
  gl[gl["POLYGON_OFFSET_UNITS"] = 10752] = "POLYGON_OFFSET_UNITS";
  gl[gl["POLYGON_OFFSET_FACTOR"] = 32824] = "POLYGON_OFFSET_FACTOR";
  gl[gl["TEXTURE_BINDING_2D"] = 32873] = "TEXTURE_BINDING_2D";
  gl[gl["SAMPLE_BUFFERS"] = 32936] = "SAMPLE_BUFFERS";
  gl[gl["SAMPLES"] = 32937] = "SAMPLES";
  gl[gl["SAMPLE_COVERAGE_VALUE"] = 32938] = "SAMPLE_COVERAGE_VALUE";
  gl[gl["SAMPLE_COVERAGE_INVERT"] = 32939] = "SAMPLE_COVERAGE_INVERT";
  gl[gl["COMPRESSED_TEXTURE_FORMATS"] = 34467] = "COMPRESSED_TEXTURE_FORMATS";
  gl[gl["DONT_CARE"] = 4352] = "DONT_CARE";
  gl[gl["FASTEST"] = 4353] = "FASTEST";
  gl[gl["NICEST"] = 4354] = "NICEST";
  gl[gl["GENERATE_MIPMAP_HINT"] = 33170] = "GENERATE_MIPMAP_HINT";
  gl[gl["BYTE"] = 5120] = "BYTE";
  gl[gl["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
  gl[gl["SHORT"] = 5122] = "SHORT";
  gl[gl["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
  gl[gl["INT"] = 5124] = "INT";
  gl[gl["UNSIGNED_INT"] = 5125] = "UNSIGNED_INT";
  gl[gl["FLOAT"] = 5126] = "FLOAT";
  gl[gl["DEPTH_COMPONENT"] = 6402] = "DEPTH_COMPONENT";
  gl[gl["ALPHA"] = 6406] = "ALPHA";
  gl[gl["RGB"] = 6407] = "RGB";
  gl[gl["RGBA"] = 6408] = "RGBA";
  gl[gl["LUMINANCE"] = 6409] = "LUMINANCE";
  gl[gl["LUMINANCE_ALPHA"] = 6410] = "LUMINANCE_ALPHA";
  gl[gl["UNSIGNED_SHORT_4_4_4_4"] = 32819] = "UNSIGNED_SHORT_4_4_4_4";
  gl[gl["UNSIGNED_SHORT_5_5_5_1"] = 32820] = "UNSIGNED_SHORT_5_5_5_1";
  gl[gl["UNSIGNED_SHORT_5_6_5"] = 33635] = "UNSIGNED_SHORT_5_6_5";
  gl[gl["FRAGMENT_SHADER"] = 35632] = "FRAGMENT_SHADER";
  gl[gl["VERTEX_SHADER"] = 35633] = "VERTEX_SHADER";
  gl[gl["MAX_VERTEX_ATTRIBS"] = 34921] = "MAX_VERTEX_ATTRIBS";
  gl[gl["MAX_VERTEX_UNIFORM_VECTORS"] = 36347] = "MAX_VERTEX_UNIFORM_VECTORS";
  gl[gl["MAX_VARYING_VECTORS"] = 36348] = "MAX_VARYING_VECTORS";
  gl[gl["MAX_COMBINED_TEXTURE_IMAGE_UNITS"] = 35661] = "MAX_COMBINED_TEXTURE_IMAGE_UNITS";
  gl[gl["MAX_VERTEX_TEXTURE_IMAGE_UNITS"] = 35660] = "MAX_VERTEX_TEXTURE_IMAGE_UNITS";
  gl[gl["MAX_TEXTURE_IMAGE_UNITS"] = 34930] = "MAX_TEXTURE_IMAGE_UNITS";
  gl[gl["MAX_FRAGMENT_UNIFORM_VECTORS"] = 36349] = "MAX_FRAGMENT_UNIFORM_VECTORS";
  gl[gl["SHADER_TYPE"] = 35663] = "SHADER_TYPE";
  gl[gl["DELETE_STATUS"] = 35712] = "DELETE_STATUS";
  gl[gl["LINK_STATUS"] = 35714] = "LINK_STATUS";
  gl[gl["VALIDATE_STATUS"] = 35715] = "VALIDATE_STATUS";
  gl[gl["ATTACHED_SHADERS"] = 35717] = "ATTACHED_SHADERS";
  gl[gl["ACTIVE_UNIFORMS"] = 35718] = "ACTIVE_UNIFORMS";
  gl[gl["ACTIVE_ATTRIBUTES"] = 35721] = "ACTIVE_ATTRIBUTES";
  gl[gl["SHADING_LANGUAGE_VERSION"] = 35724] = "SHADING_LANGUAGE_VERSION";
  gl[gl["CURRENT_PROGRAM"] = 35725] = "CURRENT_PROGRAM";
  gl[gl["NEVER"] = 512] = "NEVER";
  gl[gl["LESS"] = 513] = "LESS";
  gl[gl["EQUAL"] = 514] = "EQUAL";
  gl[gl["LEQUAL"] = 515] = "LEQUAL";
  gl[gl["GREATER"] = 516] = "GREATER";
  gl[gl["NOTEQUAL"] = 517] = "NOTEQUAL";
  gl[gl["GEQUAL"] = 518] = "GEQUAL";
  gl[gl["ALWAYS"] = 519] = "ALWAYS";
  gl[gl["KEEP"] = 7680] = "KEEP";
  gl[gl["REPLACE"] = 7681] = "REPLACE";
  gl[gl["INCR"] = 7682] = "INCR";
  gl[gl["DECR"] = 7683] = "DECR";
  gl[gl["INVERT"] = 5386] = "INVERT";
  gl[gl["INCR_WRAP"] = 34055] = "INCR_WRAP";
  gl[gl["DECR_WRAP"] = 34056] = "DECR_WRAP";
  gl[gl["VENDOR"] = 7936] = "VENDOR";
  gl[gl["RENDERER"] = 7937] = "RENDERER";
  gl[gl["VERSION"] = 7938] = "VERSION";
  gl[gl["NEAREST"] = 9728] = "NEAREST";
  gl[gl["LINEAR"] = 9729] = "LINEAR";
  gl[gl["NEAREST_MIPMAP_NEAREST"] = 9984] = "NEAREST_MIPMAP_NEAREST";
  gl[gl["LINEAR_MIPMAP_NEAREST"] = 9985] = "LINEAR_MIPMAP_NEAREST";
  gl[gl["NEAREST_MIPMAP_LINEAR"] = 9986] = "NEAREST_MIPMAP_LINEAR";
  gl[gl["LINEAR_MIPMAP_LINEAR"] = 9987] = "LINEAR_MIPMAP_LINEAR";
  gl[gl["TEXTURE_MAG_FILTER"] = 10240] = "TEXTURE_MAG_FILTER";
  gl[gl["TEXTURE_MIN_FILTER"] = 10241] = "TEXTURE_MIN_FILTER";
  gl[gl["TEXTURE_WRAP_S"] = 10242] = "TEXTURE_WRAP_S";
  gl[gl["TEXTURE_WRAP_T"] = 10243] = "TEXTURE_WRAP_T";
  gl[gl["TEXTURE_2D"] = 3553] = "TEXTURE_2D";
  gl[gl["TEXTURE"] = 5890] = "TEXTURE";
  gl[gl["TEXTURE_CUBE_MAP"] = 34067] = "TEXTURE_CUBE_MAP";
  gl[gl["TEXTURE_BINDING_CUBE_MAP"] = 34068] = "TEXTURE_BINDING_CUBE_MAP";
  gl[gl["TEXTURE_CUBE_MAP_POSITIVE_X"] = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X";
  gl[gl["TEXTURE_CUBE_MAP_NEGATIVE_X"] = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X";
  gl[gl["TEXTURE_CUBE_MAP_POSITIVE_Y"] = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y";
  gl[gl["TEXTURE_CUBE_MAP_NEGATIVE_Y"] = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y";
  gl[gl["TEXTURE_CUBE_MAP_POSITIVE_Z"] = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z";
  gl[gl["TEXTURE_CUBE_MAP_NEGATIVE_Z"] = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z";
  gl[gl["MAX_CUBE_MAP_TEXTURE_SIZE"] = 34076] = "MAX_CUBE_MAP_TEXTURE_SIZE";
  gl[gl["TEXTURE0"] = 33984] = "TEXTURE0";
  gl[gl["TEXTURE1"] = 33985] = "TEXTURE1";
  gl[gl["TEXTURE2"] = 33986] = "TEXTURE2";
  gl[gl["TEXTURE3"] = 33987] = "TEXTURE3";
  gl[gl["TEXTURE4"] = 33988] = "TEXTURE4";
  gl[gl["TEXTURE5"] = 33989] = "TEXTURE5";
  gl[gl["TEXTURE6"] = 33990] = "TEXTURE6";
  gl[gl["TEXTURE7"] = 33991] = "TEXTURE7";
  gl[gl["TEXTURE8"] = 33992] = "TEXTURE8";
  gl[gl["TEXTURE9"] = 33993] = "TEXTURE9";
  gl[gl["TEXTURE10"] = 33994] = "TEXTURE10";
  gl[gl["TEXTURE11"] = 33995] = "TEXTURE11";
  gl[gl["TEXTURE12"] = 33996] = "TEXTURE12";
  gl[gl["TEXTURE13"] = 33997] = "TEXTURE13";
  gl[gl["TEXTURE14"] = 33998] = "TEXTURE14";
  gl[gl["TEXTURE15"] = 33999] = "TEXTURE15";
  gl[gl["TEXTURE16"] = 34000] = "TEXTURE16";
  gl[gl["TEXTURE17"] = 34001] = "TEXTURE17";
  gl[gl["TEXTURE18"] = 34002] = "TEXTURE18";
  gl[gl["TEXTURE19"] = 34003] = "TEXTURE19";
  gl[gl["TEXTURE20"] = 34004] = "TEXTURE20";
  gl[gl["TEXTURE21"] = 34005] = "TEXTURE21";
  gl[gl["TEXTURE22"] = 34006] = "TEXTURE22";
  gl[gl["TEXTURE23"] = 34007] = "TEXTURE23";
  gl[gl["TEXTURE24"] = 34008] = "TEXTURE24";
  gl[gl["TEXTURE25"] = 34009] = "TEXTURE25";
  gl[gl["TEXTURE26"] = 34010] = "TEXTURE26";
  gl[gl["TEXTURE27"] = 34011] = "TEXTURE27";
  gl[gl["TEXTURE28"] = 34012] = "TEXTURE28";
  gl[gl["TEXTURE29"] = 34013] = "TEXTURE29";
  gl[gl["TEXTURE30"] = 34014] = "TEXTURE30";
  gl[gl["TEXTURE31"] = 34015] = "TEXTURE31";
  gl[gl["ACTIVE_TEXTURE"] = 34016] = "ACTIVE_TEXTURE";
  gl[gl["REPEAT"] = 10497] = "REPEAT";
  gl[gl["CLAMP_TO_EDGE"] = 33071] = "CLAMP_TO_EDGE";
  gl[gl["MIRRORED_REPEAT"] = 33648] = "MIRRORED_REPEAT";
  gl[gl["FLOAT_VEC2"] = 35664] = "FLOAT_VEC2";
  gl[gl["FLOAT_VEC3"] = 35665] = "FLOAT_VEC3";
  gl[gl["FLOAT_VEC4"] = 35666] = "FLOAT_VEC4";
  gl[gl["INT_VEC2"] = 35667] = "INT_VEC2";
  gl[gl["INT_VEC3"] = 35668] = "INT_VEC3";
  gl[gl["INT_VEC4"] = 35669] = "INT_VEC4";
  gl[gl["BOOL"] = 35670] = "BOOL";
  gl[gl["BOOL_VEC2"] = 35671] = "BOOL_VEC2";
  gl[gl["BOOL_VEC3"] = 35672] = "BOOL_VEC3";
  gl[gl["BOOL_VEC4"] = 35673] = "BOOL_VEC4";
  gl[gl["FLOAT_MAT2"] = 35674] = "FLOAT_MAT2";
  gl[gl["FLOAT_MAT3"] = 35675] = "FLOAT_MAT3";
  gl[gl["FLOAT_MAT4"] = 35676] = "FLOAT_MAT4";
  gl[gl["SAMPLER_2D"] = 35678] = "SAMPLER_2D";
  gl[gl["SAMPLER_CUBE"] = 35680] = "SAMPLER_CUBE";
  gl[gl["VERTEX_ATTRIB_ARRAY_ENABLED"] = 34338] = "VERTEX_ATTRIB_ARRAY_ENABLED";
  gl[gl["VERTEX_ATTRIB_ARRAY_SIZE"] = 34339] = "VERTEX_ATTRIB_ARRAY_SIZE";
  gl[gl["VERTEX_ATTRIB_ARRAY_STRIDE"] = 34340] = "VERTEX_ATTRIB_ARRAY_STRIDE";
  gl[gl["VERTEX_ATTRIB_ARRAY_TYPE"] = 34341] = "VERTEX_ATTRIB_ARRAY_TYPE";
  gl[gl["VERTEX_ATTRIB_ARRAY_NORMALIZED"] = 34922] = "VERTEX_ATTRIB_ARRAY_NORMALIZED";
  gl[gl["VERTEX_ATTRIB_ARRAY_POINTER"] = 34373] = "VERTEX_ATTRIB_ARRAY_POINTER";
  gl[gl["VERTEX_ATTRIB_ARRAY_BUFFER_BINDING"] = 34975] = "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING";
  gl[gl["COMPILE_STATUS"] = 35713] = "COMPILE_STATUS";
  gl[gl["LOW_FLOAT"] = 36336] = "LOW_FLOAT";
  gl[gl["MEDIUM_FLOAT"] = 36337] = "MEDIUM_FLOAT";
  gl[gl["HIGH_FLOAT"] = 36338] = "HIGH_FLOAT";
  gl[gl["LOW_INT"] = 36339] = "LOW_INT";
  gl[gl["MEDIUM_INT"] = 36340] = "MEDIUM_INT";
  gl[gl["HIGH_INT"] = 36341] = "HIGH_INT";
  gl[gl["FRAMEBUFFER"] = 36160] = "FRAMEBUFFER";
  gl[gl["RENDERBUFFER"] = 36161] = "RENDERBUFFER";
  gl[gl["RGBA4"] = 32854] = "RGBA4";
  gl[gl["RGB5_A1"] = 32855] = "RGB5_A1";
  gl[gl["RGB565"] = 36194] = "RGB565";
  gl[gl["DEPTH_COMPONENT16"] = 33189] = "DEPTH_COMPONENT16";
  gl[gl["STENCIL_INDEX"] = 6401] = "STENCIL_INDEX";
  gl[gl["STENCIL_INDEX8"] = 36168] = "STENCIL_INDEX8";
  gl[gl["DEPTH_STENCIL"] = 34041] = "DEPTH_STENCIL";
  gl[gl["RENDERBUFFER_WIDTH"] = 36162] = "RENDERBUFFER_WIDTH";
  gl[gl["RENDERBUFFER_HEIGHT"] = 36163] = "RENDERBUFFER_HEIGHT";
  gl[gl["RENDERBUFFER_INTERNAL_FORMAT"] = 36164] = "RENDERBUFFER_INTERNAL_FORMAT";
  gl[gl["RENDERBUFFER_RED_SIZE"] = 36176] = "RENDERBUFFER_RED_SIZE";
  gl[gl["RENDERBUFFER_GREEN_SIZE"] = 36177] = "RENDERBUFFER_GREEN_SIZE";
  gl[gl["RENDERBUFFER_BLUE_SIZE"] = 36178] = "RENDERBUFFER_BLUE_SIZE";
  gl[gl["RENDERBUFFER_ALPHA_SIZE"] = 36179] = "RENDERBUFFER_ALPHA_SIZE";
  gl[gl["RENDERBUFFER_DEPTH_SIZE"] = 36180] = "RENDERBUFFER_DEPTH_SIZE";
  gl[gl["RENDERBUFFER_STENCIL_SIZE"] = 36181] = "RENDERBUFFER_STENCIL_SIZE";
  gl[gl["FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE"] = 36048] = "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE";
  gl[gl["FRAMEBUFFER_ATTACHMENT_OBJECT_NAME"] = 36049] = "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME";
  gl[gl["FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL"] = 36050] = "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL";
  gl[gl["FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE"] = 36051] = "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE";
  gl[gl["COLOR_ATTACHMENT0"] = 36064] = "COLOR_ATTACHMENT0";
  gl[gl["DEPTH_ATTACHMENT"] = 36096] = "DEPTH_ATTACHMENT";
  gl[gl["STENCIL_ATTACHMENT"] = 36128] = "STENCIL_ATTACHMENT";
  gl[gl["DEPTH_STENCIL_ATTACHMENT"] = 33306] = "DEPTH_STENCIL_ATTACHMENT";
  gl[gl["NONE"] = 0] = "NONE";
  gl[gl["FRAMEBUFFER_COMPLETE"] = 36053] = "FRAMEBUFFER_COMPLETE";
  gl[gl["FRAMEBUFFER_INCOMPLETE_ATTACHMENT"] = 36054] = "FRAMEBUFFER_INCOMPLETE_ATTACHMENT";
  gl[gl["FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT"] = 36055] = "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";
  gl[gl["FRAMEBUFFER_INCOMPLETE_DIMENSIONS"] = 36057] = "FRAMEBUFFER_INCOMPLETE_DIMENSIONS";
  gl[gl["FRAMEBUFFER_UNSUPPORTED"] = 36061] = "FRAMEBUFFER_UNSUPPORTED";
  gl[gl["FRAMEBUFFER_BINDING"] = 36006] = "FRAMEBUFFER_BINDING";
  gl[gl["RENDERBUFFER_BINDING"] = 36007] = "RENDERBUFFER_BINDING";
  gl[gl["MAX_RENDERBUFFER_SIZE"] = 34024] = "MAX_RENDERBUFFER_SIZE";
  gl[gl["INVALID_FRAMEBUFFER_OPERATION"] = 1286] = "INVALID_FRAMEBUFFER_OPERATION";
  gl[gl["UNPACK_FLIP_Y_WEBGL"] = 37440] = "UNPACK_FLIP_Y_WEBGL";
  gl[gl["UNPACK_PREMULTIPLY_ALPHA_WEBGL"] = 37441] = "UNPACK_PREMULTIPLY_ALPHA_WEBGL";
  gl[gl["CONTEXT_LOST_WEBGL"] = 37442] = "CONTEXT_LOST_WEBGL";
  gl[gl["UNPACK_COLORSPACE_CONVERSION_WEBGL"] = 37443] = "UNPACK_COLORSPACE_CONVERSION_WEBGL";
  gl[gl["BROWSER_DEFAULT_WEBGL"] = 37444] = "BROWSER_DEFAULT_WEBGL";
  gl[gl["COPY_SRC"] = 1] = "COPY_SRC";
  gl[gl["COPY_DST"] = 2] = "COPY_DST";
  gl[gl["SAMPLED"] = 4] = "SAMPLED";
  gl[gl["STORAGE"] = 8] = "STORAGE";
  gl[gl["RENDER_ATTACHMENT"] = 16] = "RENDER_ATTACHMENT";
})(gl || (exports.gl = gl = {}));
//# sourceMappingURL=gl.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356453, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MaterialComponent = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _ = require("../..");

var _ComponentManager = require("../../ComponentManager");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var MaterialComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(MaterialComponent, _Component);

  var _super = _createSuper(MaterialComponent);

  // control flow in shaders, eg. USE_UV, USE_MAP...
  function MaterialComponent(data) {
    var _this;

    (0, _classCallCheck2.default)(this, MaterialComponent);
    _this = _super.call(this, data);
    _this.vertexShaderGLSL = void 0;
    _this.fragmentShaderGLSL = void 0;
    _this.defines = {};
    _this.dirty = true;
    _this.uniforms = [];
    _this.cull = {
      enable: true,
      face: _.gl.BACK
    };
    _this.depth = {
      enable: true
    };
    _this.blend = void 0;
    _this.entity = void 0;
    _this.type = void 0;
    Object.assign((0, _assertThisInitialized2.default)(_this), data);
    return _this;
  }

  (0, _createClass2.default)(MaterialComponent, [{
    key: "setDefines",
    value: function setDefines(defines) {
      this.defines = _objectSpread(_objectSpread({}, this.defines), defines);
      return this;
    }
  }, {
    key: "setCull",
    value: function setCull(cull) {
      this.cull = cull;
      return this;
    }
  }, {
    key: "setDepth",
    value: function setDepth(depth) {
      this.depth = depth;
      return this;
    }
  }, {
    key: "setBlend",
    value: function setBlend(blend) {
      this.blend = blend;
      return this;
    }
  }, {
    key: "setUniform",
    value: function setUniform(name, data) {
      var _this2 = this;

      if (typeof name !== 'string') {
        Object.keys(name).forEach(function (key) {
          return _this2.setUniform(key, name[key]);
        });
        return this;
      }

      var existedUniform = this.uniforms.find(function (u) {
        return u.name === name;
      });

      if (!existedUniform) {
        this.uniforms.push({
          name: name,
          dirty: true,
          data: data
        });
      } else {
        existedUniform.dirty = true;
        existedUniform.data = data;
      }

      this.dirty = true;
      return this;
    }
  }]);
  return MaterialComponent;
}(_ComponentManager.Component);

exports.MaterialComponent = MaterialComponent;
//# sourceMappingURL=MaterialComponent.js.map
}, function(modId) { var map = {"../..":1679470356438,"../../ComponentManager":1679470356439}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356454, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MaterialSystem = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _inversify = require("inversify");

var _ = require("../..");

var _identifier = require("../../identifier");

var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var MaterialSystem = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_identifier.IDENTIFIER.MaterialComponentManager), _dec3 = (0, _inversify.inject)(_identifier.IDENTIFIER.RenderEngine), _dec4 = (0, _inversify.inject)(_identifier.IDENTIFIER.ShaderModuleService), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function () {
  function MaterialSystem() {
    (0, _classCallCheck2.default)(this, MaterialSystem);
    (0, _initializerDefineProperty2.default)(this, "material", _descriptor, this);
    (0, _initializerDefineProperty2.default)(this, "engine", _descriptor2, this);
    (0, _initializerDefineProperty2.default)(this, "shaderModule", _descriptor3, this);
  }

  (0, _createClass2.default)(MaterialSystem, [{
    key: "execute",
    value: function () {
      var _execute = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function execute() {
        return _execute.apply(this, arguments);
      }

      return execute;
    }()
  }, {
    key: "tearDown",
    value: function tearDown() {
      this.material.clear();
    }
    /**
     * @see https://threejs.org/docs/#api/en/materials/ShaderMaterial
     */

  }, {
    key: "createShaderMaterial",
    value: function createShaderMaterial(params) {
      var entity = (0, _.createEntity)();
      var vertexShaderGLSL = params.vertexShader;
      var fragmentShaderGLSL = params.fragmentShader;
      var uniforms = [];

      if (!this.engine.supportWebGPU) {
        var moduleName = "material-".concat(entity);
        this.shaderModule.registerModule(moduleName, {
          vs: params.vertexShader,
          fs: params.fragmentShader
        });
        var materialModule = this.shaderModule.getModule(moduleName);
        vertexShaderGLSL = materialModule.vs;
        fragmentShaderGLSL = materialModule.fs;

        if (materialModule.uniforms) {
          // @ts-ignore
          uniforms = Object.keys(materialModule.uniforms).map(function (uniformName) {
            return {
              dirty: true,
              name: uniformName,
              // @ts-ignore
              data: materialModule.uniforms[uniformName]
            };
          });
        }
      }

      return this.material.create(entity, _objectSpread(_objectSpread({
        vertexShaderGLSL: vertexShaderGLSL,
        fragmentShaderGLSL: fragmentShaderGLSL
      }, params), {}, {
        uniforms: uniforms
      }));
    }
  }]);
  return MaterialSystem;
}(), _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "material", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "engine", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "shaderModule", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.MaterialSystem = MaterialSystem;
//# sourceMappingURL=System.js.map
}, function(modId) { var map = {"../..":1679470356438,"../../identifier":1679470356442}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356455, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CullableComponent = exports.Strategy = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _ComponentManager = require("../../ComponentManager");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @see https://doc.babylonjs.com/how_to/optimizing_your_scene#changing-mesh-culling-strategy
 */
var Strategy;
exports.Strategy = Strategy;

(function (Strategy) {
  Strategy[Strategy["Standard"] = 0] = "Standard";
})(Strategy || (exports.Strategy = Strategy = {}));

var CullableComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(CullableComponent, _Component);

  var _super = _createSuper(CullableComponent);

  function CullableComponent(data) {
    var _this;

    (0, _classCallCheck2.default)(this, CullableComponent);
    _this = _super.call(this, data);
    _this.strategy = Strategy.Standard;
    _this.visibilityPlaneMask = 0;
    _this.visible = false;
    Object.assign((0, _assertThisInitialized2.default)(_this), data);
    return _this;
  }

  return CullableComponent;
}(_ComponentManager.Component);

exports.CullableComponent = CullableComponent;
//# sourceMappingURL=CullableComponent.js.map
}, function(modId) { var map = {"../../ComponentManager":1679470356439}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356456, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeshComponent = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _ComponentManager = require("../../ComponentManager");

var _AABB = require("../../shape/AABB");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var MeshComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(MeshComponent, _Component);

  var _super = _createSuper(MeshComponent);

  /**
   * aabb 应该存在 Mesh 而非 Geometry 中，原因包括：
   * 1. 包围盒会受 transform 影响。例如每次 transform 之后应该重新计算包围盒（center 发生偏移）。
   * 2. 多个 Mesh 可以共享一个 Geometry，但可以各自拥有不同的 aabb
   */

  /**
   * transform 之后需要重新计算包围盒
   */

  /**
   * 实际渲染 Model
   */
  function MeshComponent(data) {
    var _this;

    (0, _classCallCheck2.default)(this, MeshComponent);
    _this = _super.call(this, data);
    _this.material = void 0;
    _this.geometry = void 0;
    _this.aabb = new _AABB.AABB();
    _this.aabbDirty = true;
    _this.model = void 0;
    _this.visible = true;
    _this.children = [];
    Object.assign((0, _assertThisInitialized2.default)(_this), data);
    return _this;
  }

  return MeshComponent;
}(_ComponentManager.Component);

exports.MeshComponent = MeshComponent;
//# sourceMappingURL=MeshComponent.js.map
}, function(modId) { var map = {"../../ComponentManager":1679470356439,"../../shape/AABB":1679470356457}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356457, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AABB = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _glMatrix = require("gl-matrix");

/**
 * Axis-Aligned Bounding Box
 * 为了便于后续 Frustum Culling，通过查找表定义 p-vertex 和 n-vertex
 * @see https://github.com/antvis/GWebGPUEngine/issues/3
 */
var AABB = /*#__PURE__*/function () {
  function AABB(center, halfExtents) {
    (0, _classCallCheck2.default)(this, AABB);
    this.center = void 0;
    this.halfExtents = void 0;
    this.min = _glMatrix.vec3.create();
    this.max = _glMatrix.vec3.create();
    this.update(center, halfExtents);
  }

  (0, _createClass2.default)(AABB, [{
    key: "update",
    value: function update(center, halfExtents) {
      this.center = center || _glMatrix.vec3.create();
      this.halfExtents = halfExtents || _glMatrix.vec3.fromValues(0.5, 0.5, 0.5);
      this.min = _glMatrix.vec3.sub(this.min, this.center, this.halfExtents);
      this.max = _glMatrix.vec3.add(this.max, this.center, this.halfExtents);
    }
  }, {
    key: "setMinMax",
    value: function setMinMax(min, max) {
      _glMatrix.vec3.add(this.center, max, min);

      _glMatrix.vec3.scale(this.center, this.center, 0.5);

      _glMatrix.vec3.sub(this.halfExtents, max, min);

      _glMatrix.vec3.scale(this.halfExtents, this.halfExtents, 0.5);

      _glMatrix.vec3.copy(this.min, min);

      _glMatrix.vec3.copy(this.max, max);
    }
  }, {
    key: "getMin",
    value: function getMin() {
      return this.min;
    }
  }, {
    key: "getMax",
    value: function getMax() {
      return this.max;
    }
  }, {
    key: "add",
    value: function add(aabb) {
      var tc = this.center;
      var tcx = tc[0];
      var tcy = tc[1];
      var tcz = tc[2];
      var th = this.halfExtents;
      var thx = th[0];
      var thy = th[1];
      var thz = th[2];
      var tminx = tcx - thx;
      var tmaxx = tcx + thx;
      var tminy = tcy - thy;
      var tmaxy = tcy + thy;
      var tminz = tcz - thz;
      var tmaxz = tcz + thz;
      var oc = aabb.center;
      var ocx = oc[0];
      var ocy = oc[1];
      var ocz = oc[2];
      var oh = aabb.halfExtents;
      var ohx = oh[0];
      var ohy = oh[1];
      var ohz = oh[2];
      var ominx = ocx - ohx;
      var omaxx = ocx + ohx;
      var ominy = ocy - ohy;
      var omaxy = ocy + ohy;
      var ominz = ocz - ohz;
      var omaxz = ocz + ohz;

      if (ominx < tminx) {
        tminx = ominx;
      }

      if (omaxx > tmaxx) {
        tmaxx = omaxx;
      }

      if (ominy < tminy) {
        tminy = ominy;
      }

      if (omaxy > tmaxy) {
        tmaxy = omaxy;
      }

      if (ominz < tminz) {
        tminz = ominz;
      }

      if (omaxz > tmaxz) {
        tmaxz = omaxz;
      }

      tc[0] = (tminx + tmaxx) * 0.5;
      tc[1] = (tminy + tmaxy) * 0.5;
      tc[2] = (tminz + tmaxz) * 0.5;
      th[0] = (tmaxx - tminx) * 0.5;
      th[1] = (tmaxy - tminy) * 0.5;
      th[2] = (tmaxz - tminz) * 0.5;
      this.min[0] = tminx;
      this.min[1] = tminy;
      this.min[2] = tminz;
      this.max[0] = tmaxx;
      this.max[1] = tmaxy;
      this.max[2] = tmaxz;
    }
  }, {
    key: "intersects",
    value: function intersects(aabb) {
      var aMax = this.getMax();
      var aMin = this.getMin();
      var bMax = aabb.getMax();
      var bMin = aabb.getMin();
      return aMin[0] <= bMax[0] && aMax[0] >= bMin[0] && aMin[1] <= bMax[1] && aMax[1] >= bMin[1] && aMin[2] <= bMax[2] && aMax[2] >= bMin[2];
    }
  }, {
    key: "containsPoint",
    value: function containsPoint(point) {
      var min = this.getMin();
      var max = this.getMax();
      return !(point[0] < min[0] || point[0] > max[0] || point[1] < min[1] || point[1] > max[1] || point[2] < min[2] || point[2] > max[2]);
    }
    /**
     * get n-vertex
     * @param plane plane of CullingVolume
     */

  }, {
    key: "getNegativeFarPoint",
    value: function getNegativeFarPoint(plane) {
      if (plane.pnVertexFlag === 0x111) {
        return _glMatrix.vec3.copy(_glMatrix.vec3.create(), this.min);
      } else if (plane.pnVertexFlag === 0x110) {
        return _glMatrix.vec3.fromValues(this.min[0], this.min[1], this.max[2]);
      } else if (plane.pnVertexFlag === 0x101) {
        return _glMatrix.vec3.fromValues(this.min[0], this.max[1], this.min[2]);
      } else if (plane.pnVertexFlag === 0x100) {
        return _glMatrix.vec3.fromValues(this.min[0], this.max[1], this.max[2]);
      } else if (plane.pnVertexFlag === 0x011) {
        return _glMatrix.vec3.fromValues(this.max[0], this.min[1], this.min[2]);
      } else if (plane.pnVertexFlag === 0x010) {
        return _glMatrix.vec3.fromValues(this.max[0], this.min[1], this.max[2]);
      } else if (plane.pnVertexFlag === 0x001) {
        return _glMatrix.vec3.fromValues(this.max[0], this.max[1], this.min[2]);
      } else {
        return _glMatrix.vec3.fromValues(this.max[0], this.max[1], this.max[2]);
      }
    }
    /**
     * get p-vertex
     * @param plane plane of CullingVolume
     */

  }, {
    key: "getPositiveFarPoint",
    value: function getPositiveFarPoint(plane) {
      if (plane.pnVertexFlag === 0x111) {
        return _glMatrix.vec3.copy(_glMatrix.vec3.create(), this.max);
      } else if (plane.pnVertexFlag === 0x110) {
        return _glMatrix.vec3.fromValues(this.max[0], this.max[1], this.min[2]);
      } else if (plane.pnVertexFlag === 0x101) {
        return _glMatrix.vec3.fromValues(this.max[0], this.min[1], this.max[2]);
      } else if (plane.pnVertexFlag === 0x100) {
        return _glMatrix.vec3.fromValues(this.max[0], this.min[1], this.min[2]);
      } else if (plane.pnVertexFlag === 0x011) {
        return _glMatrix.vec3.fromValues(this.min[0], this.max[1], this.max[2]);
      } else if (plane.pnVertexFlag === 0x010) {
        return _glMatrix.vec3.fromValues(this.min[0], this.max[1], this.min[2]);
      } else if (plane.pnVertexFlag === 0x001) {
        return _glMatrix.vec3.fromValues(this.min[0], this.min[1], this.max[2]);
      } else {
        return _glMatrix.vec3.fromValues(this.min[0], this.min[1], this.min[2]);
      }
    }
  }]);
  return AABB;
}();

exports.AABB = AABB;
//# sourceMappingURL=AABB.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356458, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeshSystem = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _glMatrix = require("gl-matrix");

var _inversify = require("inversify");

var _identifier = require("../../identifier");

var _Frustum = require("../../shape/Frustum");

var _math = require("../../utils/math");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var MeshSystem = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_identifier.IDENTIFIER.MeshComponentManager), _dec3 = (0, _inversify.inject)(_identifier.IDENTIFIER.CullableComponentManager), _dec4 = (0, _inversify.inject)(_identifier.IDENTIFIER.GeometryComponentManager), _dec5 = (0, _inversify.inject)(_identifier.IDENTIFIER.HierarchyComponentManager), _dec6 = (0, _inversify.inject)(_identifier.IDENTIFIER.TransformComponentManager), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function () {
  function MeshSystem() {
    (0, _classCallCheck2.default)(this, MeshSystem);
    (0, _initializerDefineProperty2.default)(this, "mesh", _descriptor, this);
    (0, _initializerDefineProperty2.default)(this, "cullable", _descriptor2, this);
    (0, _initializerDefineProperty2.default)(this, "geometry", _descriptor3, this);
    (0, _initializerDefineProperty2.default)(this, "hierarchy", _descriptor4, this);
    (0, _initializerDefineProperty2.default)(this, "transform", _descriptor5, this);
    this.planes = void 0;
  }

  (0, _createClass2.default)(MeshSystem, [{
    key: "setFrustumPlanes",
    value: function setFrustumPlanes(planes) {
      this.planes = planes;
    }
  }, {
    key: "execute",
    value: function () {
      var _execute = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(views) {
        var _iterator, _step, view, scene, camera, _iterator2, _step2, entity, component, hierarchyComponent, cullableComponent, geometryComponent, meshTransform, worldTransform, _geometryComponent$aa, center, halfExtents, transformedCenter, rotationScale, transformedHalfExtents, parentCullableComponent;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _iterator = _createForOfIteratorHelper(views);

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    view = _step.value;
                    scene = view.getScene();
                    camera = view.getCamera(); // get VP matrix from camera

                    _iterator2 = _createForOfIteratorHelper(scene.getEntities());

                    try {
                      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                        entity = _step2.value;
                        component = this.mesh.getComponentByEntity(entity);

                        if (component) {
                          hierarchyComponent = this.hierarchy.getComponentByEntity(entity);
                          cullableComponent = this.cullable.getComponentByEntity(entity);
                          geometryComponent = component.geometry;
                          meshTransform = this.transform.getComponentByEntity(entity); // update mesh.aabb

                          if (geometryComponent && geometryComponent.aabb && meshTransform && component.aabbDirty) {
                            worldTransform = meshTransform.worldTransform; // apply transform to geometry.aabb

                            _geometryComponent$aa = geometryComponent.aabb, center = _geometryComponent$aa.center, halfExtents = _geometryComponent$aa.halfExtents;
                            transformedCenter = _glMatrix.vec3.transformMat4(_glMatrix.vec3.create(), center, worldTransform);
                            rotationScale = (0, _math.getRotationScale)(worldTransform, _glMatrix.mat3.create());
                            transformedHalfExtents = _glMatrix.vec3.transformMat3(_glMatrix.vec3.create(), halfExtents, rotationScale);
                            component.aabb.update(transformedCenter, transformedHalfExtents);
                            component.aabbDirty = false;
                          } // culling


                          if (cullableComponent && geometryComponent) {
                            parentCullableComponent = this.cullable.getComponentByEntity((hierarchyComponent === null || hierarchyComponent === void 0 ? void 0 : hierarchyComponent.parentID) || -1);
                            cullableComponent.visibilityPlaneMask = this.computeVisibilityWithPlaneMask(component.aabb, (parentCullableComponent === null || parentCullableComponent === void 0 ? void 0 : parentCullableComponent.visibilityPlaneMask) || _Frustum.Mask.INDETERMINATE, this.planes || camera.getFrustum().planes);
                            cullableComponent.visible = cullableComponent.visibilityPlaneMask !== _Frustum.Mask.OUTSIDE;
                          }
                        }
                      }
                    } catch (err) {
                      _iterator2.e(err);
                    } finally {
                      _iterator2.f();
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function execute(_x) {
        return _execute.apply(this, arguments);
      }

      return execute;
    }()
  }, {
    key: "tearDown",
    value: function tearDown() {
      this.cullable.clear();
      this.mesh.clear();
    }
    /**
     *
     * @see「Optimized View Frustum Culling Algorithms for Bounding Boxes」
     * @see https://github.com/antvis/GWebGPUEngine/issues/3
     *
     * * 基础相交测试 the basic intersection test
     * * 标记 masking @see https://cesium.com/blog/2015/08/04/fast-hierarchical-culling/
     * * TODO: 平面一致性测试 the plane-coherency test
     * * TODO: 支持 mesh 指定自身的剔除策略，参考 Babylon.js @see https://doc.babylonjs.com/how_to/optimizing_your_scene#changing-mesh-culling-strategy
     *
     * @param aabb aabb
     * @param parentPlaneMask mask of parent
     * @param planes planes of frustum
     */

  }, {
    key: "computeVisibilityWithPlaneMask",
    value: function computeVisibilityWithPlaneMask(aabb, parentPlaneMask, planes) {
      if (parentPlaneMask === _Frustum.Mask.OUTSIDE || parentPlaneMask === _Frustum.Mask.INSIDE) {
        // 父节点完全位于视锥内或者外部，直接返回
        return parentPlaneMask;
      } // Start with MASK_INSIDE (all zeros) so that after the loop, the return value can be compared with MASK_INSIDE.
      // (Because if there are fewer than 31 planes, the upper bits wont be changed.)


      var mask = _Frustum.Mask.INSIDE;

      for (var k = 0, len = planes.length; k < len; ++k) {
        // For k greater than 31 (since 31 is the maximum number of INSIDE/INTERSECTING bits we can store), skip the optimization.
        var flag = k < 31 ? 1 << k : 0;

        if (k < 31 && (parentPlaneMask & flag) === 0) {
          // 父节点处于当前面内部，可以跳过
          continue;
        } // 使用 p-vertex 和 n-vertex 加速，避免进行平面和 aabb 全部顶点的相交检测


        var _planes$k = planes[k],
            normal = _planes$k.normal,
            distance = _planes$k.distance;

        if (_glMatrix.vec3.dot(normal, aabb.getNegativeFarPoint(planes[k])) + distance > 0) {
          return _Frustum.Mask.OUTSIDE;
        }

        if (_glMatrix.vec3.dot(normal, aabb.getPositiveFarPoint(planes[k])) + distance > 0) {
          // 和当前面相交，对应位置为1，继续检测下一个面
          mask |= flag;
        }
      }

      return mask;
    }
  }]);
  return MeshSystem;
}(), _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "mesh", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "cullable", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "geometry", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "hierarchy", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "transform", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.MeshSystem = MeshSystem;
//# sourceMappingURL=System.js.map
}, function(modId) { var map = {"../../identifier":1679470356442,"../../shape/Frustum":1679470356459,"../../utils/math":1679470356461}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356459, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Frustum = exports.Mask = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _glMatrix = require("gl-matrix");

var _Plane = require("./Plane");

var Mask;
exports.Mask = Mask;

(function (Mask) {
  Mask[Mask["OUTSIDE"] = 4294967295] = "OUTSIDE";
  Mask[Mask["INSIDE"] = 0] = "INSIDE";
  Mask[Mask["INDETERMINATE"] = 2147483647] = "INDETERMINATE";
})(Mask || (exports.Mask = Mask = {}));

var Frustum = /*#__PURE__*/function () {
  function Frustum(planes) {
    (0, _classCallCheck2.default)(this, Frustum);
    this.planes = [];

    if (planes) {
      this.planes = planes;
    } else {
      for (var i = 0; i < 6; i++) {
        this.planes.push(new _Plane.Plane());
      }
    }
  }
  /**
   * extract 6 planes from vpMatrix
   * @see http://www8.cs.umu.se/kurser/5DV051/HT12/lab/plane_extraction.pdf
   * @param vpMatrix viewProjectionMatrix
   */


  (0, _createClass2.default)(Frustum, [{
    key: "extractFromVPMatrix",
    value: function extractFromVPMatrix(vpMatrix) {
      var _vpMatrix = (0, _slicedToArray2.default)(vpMatrix, 16),
          m0 = _vpMatrix[0],
          m1 = _vpMatrix[1],
          m2 = _vpMatrix[2],
          m3 = _vpMatrix[3],
          m4 = _vpMatrix[4],
          m5 = _vpMatrix[5],
          m6 = _vpMatrix[6],
          m7 = _vpMatrix[7],
          m8 = _vpMatrix[8],
          m9 = _vpMatrix[9],
          m10 = _vpMatrix[10],
          m11 = _vpMatrix[11],
          m12 = _vpMatrix[12],
          m13 = _vpMatrix[13],
          m14 = _vpMatrix[14],
          m15 = _vpMatrix[15]; // right


      _glMatrix.vec3.set(this.planes[0].normal, m3 - m0, m7 - m4, m11 - m8);

      this.planes[0].distance = -(m15 - m12); // left

      _glMatrix.vec3.set(this.planes[1].normal, m3 + m0, m7 + m4, m11 + m8);

      this.planes[1].distance = -(m15 + m12); // bottom

      _glMatrix.vec3.set(this.planes[2].normal, m3 + m1, m7 + m5, m11 + m9);

      this.planes[2].distance = -(m15 + m13); // top

      _glMatrix.vec3.set(this.planes[3].normal, m3 - m1, m7 - m5, m11 - m9);

      this.planes[3].distance = -(m15 - m13); // far

      _glMatrix.vec3.set(this.planes[4].normal, m3 - m2, m7 - m6, m11 - m10);

      this.planes[4].distance = -(m15 - m14); // near

      _glMatrix.vec3.set(this.planes[5].normal, m3 + m2, m7 + m6, m11 + m10);

      this.planes[5].distance = -(m15 + m14);
      this.planes.forEach(function (plane) {
        plane.normalize();
        plane.updatePNVertexFlag();
      });
    }
  }]);
  return Frustum;
}();

exports.Frustum = Frustum;
//# sourceMappingURL=Frustum.js.map
}, function(modId) { var map = {"./Plane":1679470356460}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356460, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Plane = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _glMatrix = require("gl-matrix");

var Plane = /*#__PURE__*/function () {
  /**
   * lookup table for p-vertex & n-vertex when doing frustum culling
   */
  function Plane(distance, normal) {
    (0, _classCallCheck2.default)(this, Plane);
    this.distance = void 0;
    this.normal = void 0;
    this.pnVertexFlag = void 0;
    this.distance = distance || 0;
    this.normal = normal || _glMatrix.vec3.fromValues(0, 1, 0);
    this.updatePNVertexFlag();
  }

  (0, _createClass2.default)(Plane, [{
    key: "updatePNVertexFlag",
    value: function updatePNVertexFlag() {
      this.pnVertexFlag = (Number(this.normal[0] >= 0) << 8) + (Number(this.normal[1] >= 0) << 4) + Number(this.normal[2] >= 0);
    }
  }, {
    key: "distanceToPoint",
    value: function distanceToPoint(point) {
      return _glMatrix.vec3.dot(point, this.normal) - this.distance;
    }
  }, {
    key: "normalize",
    value: function normalize() {
      var invLen = 1 / _glMatrix.vec3.len(this.normal);

      _glMatrix.vec3.scale(this.normal, this.normal, invLen);

      this.distance *= invLen;
    }
  }, {
    key: "intersectsLine",
    value: function intersectsLine(start, end, point) {
      var d0 = this.distanceToPoint(start);
      var d1 = this.distanceToPoint(end);
      var t = d0 / (d0 - d1);
      var intersects = t >= 0 && t <= 1;

      if (intersects && point) {
        _glMatrix.vec3.lerp(point, start, end, t);
      }

      return intersects;
    }
  }]);
  return Plane;
}();

exports.Plane = Plane;
//# sourceMappingURL=Plane.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356461, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAngle = getAngle;
exports.createVec3 = createVec3;
exports.getRotationScale = getRotationScale;
exports.decodePickingColor = decodePickingColor;
exports.encodePickingColor = encodePickingColor;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _glMatrix = require("gl-matrix");

var _isNumber = require("./is-number");

function getAngle(angle) {
  if (angle === undefined) {
    return 0;
  } else if (angle > 360 || angle < -360) {
    return angle % 360;
  }

  return angle;
}

function createVec3(x, y, z) {
  if ((0, _isNumber.isNumber)(x)) {
    return _glMatrix.vec3.fromValues(x, y, z);
  }

  if (x.length === 3) {
    return _glMatrix.vec3.clone(x);
  } // @ts-ignore


  return _glMatrix.vec3.fromValues(x[0], x[1], x[2]);
}

function getRotationScale(matrix, result) {
  result[0] = matrix[0];
  result[1] = matrix[1];
  result[2] = matrix[2];
  result[3] = matrix[4];
  result[4] = matrix[5];
  result[5] = matrix[6];
  result[6] = matrix[8];
  result[7] = matrix[9];
  result[8] = matrix[10];
  return result;
}

function decodePickingColor(color) {
  var _color = (0, _slicedToArray2.default)(color, 3),
      i1 = _color[0],
      i2 = _color[1],
      i3 = _color[2]; // 1 was added to seperate from no selection


  var index = i1 + i2 * 256 + i3 * 65536 - 1;
  return index;
}

function encodePickingColor(featureIdx) {
  return [featureIdx + 1 & 255, featureIdx + 1 >> 8 & 255, featureIdx + 1 >> 8 >> 8 & 255];
}
//# sourceMappingURL=math.js.map
}, function(modId) { var map = {"./is-number":1679470356462}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356462, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumber = isNumber;

function isNumber(value) {
  return typeof value === 'number';
}
//# sourceMappingURL=is-number.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356463, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PixelPickingPass = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _inversify = require("inversify");

var _identifier = require("../../../identifier");

var _math = require("../../../utils/math");

var _RenderPass = require("./RenderPass");

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _temp;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var PickingStage = {
  NONE: 0.0,
  ENCODE: 1.0,
  HIGHLIGHT: 2.0
};
/**
 * color-based picking
 * @see https://threejsfundamentals.org/threejs/lessons/threejs-picking.html
 */

var PixelPickingPass = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_identifier.IDENTIFIER.RenderEngine), _dec3 = (0, _inversify.inject)(_identifier.IDENTIFIER.ResourcePool), _dec4 = (0, _inversify.inject)(_identifier.IDENTIFIER.RenderPassFactory), _dec5 = (0, _inversify.inject)(_identifier.IDENTIFIER.MeshComponentManager), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function () {
  function PixelPickingPass() {
    var _this = this;

    (0, _classCallCheck2.default)(this, PixelPickingPass);
    (0, _initializerDefineProperty2.default)(this, "engine", _descriptor, this);
    (0, _initializerDefineProperty2.default)(this, "resourcePool", _descriptor2, this);
    (0, _initializerDefineProperty2.default)(this, "renderPassFactory", _descriptor3, this);
    (0, _initializerDefineProperty2.default)(this, "mesh", _descriptor4, this);
    this.pickingFBO = void 0;
    this.views = void 0;
    this.highlightEnabled = true;
    this.highlightColor = [255, 0, 0, 255];
    this.alreadyInRendering = false;

    this.setup = function (fg, passNode, pass) {
      var output = fg.createRenderTarget(passNode, 'picking fbo', {
        width: 1,
        height: 1
      });
      pass.data = {
        output: passNode.write(fg, output)
      }; // 防止被 FrameGraph 剔除

      passNode.hasSideEffect = true;
    };

    this.execute = /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(fg, pass, views) {
        var _iterator, _step, _loop;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.views = views;

                if (!_this.alreadyInRendering) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _iterator = _createForOfIteratorHelper(views);

                try {
                  _loop = function _loop() {
                    var view = _step.value;

                    var _view$getViewport = view.getViewport(),
                        width = _view$getViewport.width,
                        height = _view$getViewport.height; // throttled


                    _this.alreadyInRendering = true; // 实例化资源

                    var resourceNode = fg.getResourceNode(pass.data.output);
                    _this.pickingFBO = _this.resourcePool.getOrCreateResource(resourceNode.resource); // TODO: only draw 1x1 quad, with offset camera

                    _this.pickingFBO.resize({
                      width: width,
                      height: height
                    });

                    _this.engine.useFramebuffer(_this.pickingFBO, function () {
                      _this.engine.clear({
                        framebuffer: _this.pickingFBO,
                        color: [0, 0, 0, 0],
                        stencil: 0,
                        depth: 1
                      }); // 渲染


                      var renderPass = _this.renderPassFactory(_RenderPass.RenderPass.IDENTIFIER); // 修改所有


                      var meshes = [];
                      var scene = view.getScene();

                      var _iterator2 = _createForOfIteratorHelper(scene.getEntities()),
                          _step2;

                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                          var meshEntity = _step2.value;

                          var mesh = _this.mesh.getComponentByEntity(meshEntity);

                          var material = mesh.material;
                          material.setUniform('u_PickingStage', PickingStage.ENCODE);
                          meshes.push(mesh);
                        } // @ts-ignore

                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }

                      renderPass.renderView(view);
                      meshes.forEach(function (mesh) {
                        var material = mesh.material;
                        material.setUniform('u_PickingStage', PickingStage.HIGHLIGHT);
                      });
                      _this.alreadyInRendering = false;
                    });
                  };

                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    _loop();
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }();

    this.pick = function (_ref2, view) {
      var x = _ref2.x,
          y = _ref2.y;
      var _this$engine = _this.engine,
          readPixels = _this$engine.readPixels,
          useFramebuffer = _this$engine.useFramebuffer;

      var _view$getViewport2 = view.getViewport(),
          width = _view$getViewport2.width,
          height = _view$getViewport2.height;

      var xInDevicePixel = x * window.devicePixelRatio;
      var yInDevicePixel = y * window.devicePixelRatio; // const xInDevicePixel = x;
      // const yInDevicePixel = y;

      if (xInDevicePixel > width || xInDevicePixel < 0 || yInDevicePixel > height || yInDevicePixel < 0) {
        return;
      }

      var pickedColors;
      var pickedFeatureIdx;
      useFramebuffer(_this.pickingFBO, function () {
        // avoid realloc
        pickedColors = readPixels({
          x: Math.round(xInDevicePixel),
          // 视口坐标系原点在左上，而 WebGL 在左下，需要翻转 Y 轴
          y: Math.round(height - (y + 1) * window.devicePixelRatio),
          // y: Math.round(height - (y + 1)),
          width: 1,
          height: 1,
          data: new Uint8Array(1 * 1 * 4),
          framebuffer: _this.pickingFBO
        });

        if (pickedColors[0] !== 0 || pickedColors[1] !== 0 || pickedColors[2] !== 0) {
          pickedFeatureIdx = (0, _math.decodePickingColor)(pickedColors);

          if (_this.highlightEnabled) {
            // 高亮
            _this.highlightPickedFeature(pickedColors, view);
          }
        }
      });
      return pickedFeatureIdx;
    };
  }

  (0, _createClass2.default)(PixelPickingPass, [{
    key: "enableHighlight",
    value: function enableHighlight(enabled) {
      this.highlightEnabled = enabled;
    }
  }, {
    key: "setHighlightColor",
    value: function setHighlightColor(color) {
      this.highlightColor = color;
    }
  }, {
    key: "highlightPickedFeature",

    /**
     * highlight 如果直接修改选中 feature 的 buffer，存在两个问题：
     * 1. 鼠标移走时无法恢复
     * 2. 无法实现高亮颜色与原始原色的 alpha 混合
     * 因此高亮还是放在 shader 中做比较好
     */
    value: function highlightPickedFeature(pickedColors, view) {
      if (pickedColors) {
        var _iterator3 = _createForOfIteratorHelper(view.getScene().getEntities()),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var meshEntity = _step3.value;
            var mesh = this.mesh.getComponentByEntity(meshEntity);
            var material = mesh.material;
            material.setUniform('u_PickingStage', PickingStage.HIGHLIGHT);
            material.setUniform('u_PickingColor', [pickedColors[0], pickedColors[1], pickedColors[2]]);
            material.setUniform('u_HighlightColor', this.highlightColor);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    }
  }]);
  return PixelPickingPass;
}(), _class3.IDENTIFIER = 'PixelPicking Pass', _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "engine", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "resourcePool", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "renderPassFactory", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "mesh", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.PixelPickingPass = PixelPickingPass;
//# sourceMappingURL=PixelPickingPass.js.map
}, function(modId) { var map = {"../../../identifier":1679470356442,"../../../utils/math":1679470356461,"./RenderPass":1679470356464}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356464, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderPass = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _glMatrix = require("gl-matrix");

var _inversify = require("inversify");

var _identifier = require("../../../identifier");

var _gl = require("../gl");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _class3, _temp;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var RenderPass = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_identifier.IDENTIFIER.MeshComponentManager), _dec3 = (0, _inversify.inject)(_identifier.IDENTIFIER.GeometryComponentManager), _dec4 = (0, _inversify.inject)(_identifier.IDENTIFIER.MaterialComponentManager), _dec5 = (0, _inversify.inject)(_identifier.IDENTIFIER.CullableComponentManager), _dec6 = (0, _inversify.inject)(_identifier.IDENTIFIER.TransformComponentManager), _dec7 = (0, _inversify.inject)(_identifier.IDENTIFIER.HierarchyComponentManager), _dec8 = (0, _inversify.inject)(_identifier.IDENTIFIER.Systems), _dec9 = (0, _inversify.named)(_identifier.IDENTIFIER.FrameGraphSystem), _dec10 = (0, _inversify.inject)(_identifier.IDENTIFIER.RenderEngine), _dec11 = (0, _inversify.inject)(_identifier.IDENTIFIER.ResourcePool), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function () {
  function RenderPass() {
    var _this = this;

    (0, _classCallCheck2.default)(this, RenderPass);
    (0, _initializerDefineProperty2.default)(this, "mesh", _descriptor, this);
    (0, _initializerDefineProperty2.default)(this, "geometry", _descriptor2, this);
    (0, _initializerDefineProperty2.default)(this, "material", _descriptor3, this);
    (0, _initializerDefineProperty2.default)(this, "cullable", _descriptor4, this);
    (0, _initializerDefineProperty2.default)(this, "transform", _descriptor5, this);
    (0, _initializerDefineProperty2.default)(this, "hierarchy", _descriptor6, this);
    (0, _initializerDefineProperty2.default)(this, "frameGraphSystem", _descriptor7, this);
    (0, _initializerDefineProperty2.default)(this, "engine", _descriptor8, this);
    (0, _initializerDefineProperty2.default)(this, "resourcePool", _descriptor9, this);
    this.modelCache = {};

    this.setup = function (fg, passNode, pass) {
      var output = fg.createRenderTarget(passNode, 'color buffer', {
        width: 1,
        height: 1,
        usage: _gl.gl.RENDER_ATTACHMENT | _gl.gl.SAMPLED | _gl.gl.COPY_SRC
      });
      pass.data = {
        output: passNode.write(fg, output)
      };
    };

    this.execute = /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(fg, pass, views) {
        var resourceNode, framebuffer, _iterator, _step, view, canvas;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                resourceNode = fg.getResourceNode(pass.data.output);
                framebuffer = _this.resourcePool.getOrCreateResource(resourceNode.resource); // initialize model of each mesh

                _iterator = _createForOfIteratorHelper(views);
                _context.prev = 3;

                _iterator.s();

              case 5:
                if ((_step = _iterator.n()).done) {
                  _context.next = 11;
                  break;
                }

                view = _step.value;
                _context.next = 9;
                return _this.initView(view);

              case 9:
                _context.next = 5;
                break;

              case 11:
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](3);

                _iterator.e(_context.t0);

              case 16:
                _context.prev = 16;

                _iterator.f();

                return _context.finish(16);

              case 19:
                canvas = _this.engine.getCanvas();
                framebuffer.resize({
                  width: canvas.width,
                  height: canvas.height
                });

                _this.engine.setScissor({
                  enable: false
                });

                _this.engine.clear({
                  framebuffer: framebuffer,
                  color: views[0].getClearColor(),
                  // TODO: use clearColor defined in view
                  depth: 1
                });

                _this.engine.useFramebuffer(framebuffer, function () {
                  var _iterator2 = _createForOfIteratorHelper(views),
                      _step2;

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var view = _step2.value;

                      // must do rendering in a sync way
                      _this.renderView(view);
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                });

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 13, 16, 19]]);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }();
  }

  (0, _createClass2.default)(RenderPass, [{
    key: "renderView",
    value: function renderView(view) {
      var scene = view.getScene();
      var camera = view.getCamera(); // get VP matrix from camera

      var viewMatrix = camera.getViewTransform();

      var viewProjectionMatrix = _glMatrix.mat4.multiply(_glMatrix.mat4.create(), camera.getPerspective(), viewMatrix); // TODO: use cached planes if camera was not changed


      camera.getFrustum().extractFromVPMatrix(viewProjectionMatrix);

      var _view$getViewport = view.getViewport(),
          x = _view$getViewport.x,
          y = _view$getViewport.y,
          width = _view$getViewport.width,
          height = _view$getViewport.height;

      this.engine.viewport({
        x: x,
        y: y,
        width: width,
        height: height
      }); // this.engine.setScissor({
      //   enable: true,
      //   box: { x, y, width, height },
      // });
      // this.engine.clear({
      //   // framebuffer,
      //   color: [1, 1, 1, 1], // TODO: use clearColor defined in view
      //   depth: 1,
      // });

      var _iterator3 = _createForOfIteratorHelper(scene.getEntities()),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var meshEntity = _step3.value;
          this.renderMesh(meshEntity, {
            camera: camera,
            view: view,
            viewMatrix: viewMatrix
          });
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "renderMesh",
    value: function renderMesh(meshEntity, _ref2) {
      var camera = _ref2.camera,
          view = _ref2.view,
          viewMatrix = _ref2.viewMatrix;
      var mesh = this.mesh.getComponentByEntity(meshEntity);

      if (!mesh || !mesh.visible) {
        return;
      } // filter meshes with frustum culling
      // if (!this.cullable.getComponentByEntity(meshEntity)?.visible) {
      //   return;
      // }


      var material = mesh.material;
      var geometry = mesh.geometry; // geometry 在自己的 System 中完成脏检查后的更新

      if (!geometry || geometry.dirty || !material) {
        return;
      } // get model matrix from mesh


      var transform = this.transform.getComponentByEntity(meshEntity);

      var modelViewMatrix = _glMatrix.mat4.multiply(_glMatrix.mat4.create(), viewMatrix, transform.worldTransform);

      var _view$getViewport2 = view.getViewport(),
          width = _view$getViewport2.width,
          height = _view$getViewport2.height; // set MVP matrix, other builtin uniforms @see https://threejs.org/docs/#api/en/renderers/webgl/WebGLProgram


      material.setUniform({
        projectionMatrix: camera.getPerspective(),
        modelViewMatrix: modelViewMatrix,
        modelMatrix: transform.worldTransform,
        viewMatrix: viewMatrix,
        cameraPosition: camera.getPosition(),
        u_viewport: [width, height]
      });

      if (mesh.model) {
        mesh.model.draw({
          uniforms: material.uniforms.reduce(function (cur, prev) {
            cur[prev.name] = prev.data;
            return cur;
          }, {})
        });
        material.uniforms.forEach(function (u) {
          u.dirty = false;
        });
        material.dirty = false;
      }
    }
  }, {
    key: "initMesh",
    value: function () {
      var _initMesh = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(meshEntity, view) {
        var mesh, material, geometry, modelCacheKey, _this$engine, createModel, createAttribute, modelInitializationOptions;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                mesh = this.mesh.getComponentByEntity(meshEntity);

                if (mesh) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return");

              case 3:
                material = mesh.material;
                geometry = mesh.geometry;

                if (!(!geometry || geometry.dirty || !material)) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return");

              case 7:
                if (mesh.model) {
                  _context2.next = 24;
                  break;
                }

                modelCacheKey = "m-".concat(material.entity, "-g-").concat(geometry.entity);

                if (!this.modelCache[modelCacheKey]) {
                  _context2.next = 12;
                  break;
                }

                mesh.model = this.modelCache[modelCacheKey];
                return _context2.abrupt("return");

              case 12:
                material.setUniform({
                  projectionMatrix: 1,
                  modelViewMatrix: 1,
                  modelMatrix: 1,
                  viewMatrix: 1,
                  cameraPosition: 1,
                  u_viewport: 1
                });
                _this$engine = this.engine, createModel = _this$engine.createModel, createAttribute = _this$engine.createAttribute;
                modelInitializationOptions = {
                  vs: material.vertexShaderGLSL,
                  fs: material.fragmentShaderGLSL,
                  defines: material.defines,
                  attributes: geometry.attributes.reduce(function (cur, prev) {
                    if (prev.data && prev.buffer) {
                      cur[prev.name] = createAttribute({
                        buffer: prev.buffer,
                        attributes: prev.attributes,
                        arrayStride: prev.arrayStride,
                        stepMode: prev.stepMode,
                        divisor: prev.stepMode === 'vertex' ? 0 : 1
                      });
                    }

                    return cur;
                  }, {}),
                  uniforms: material.uniforms.reduce(function (cur, prev) {
                    cur[prev.name] = prev.data;
                    return cur;
                  }, {}),
                  scissor: {
                    enable: true,
                    // @ts-ignore
                    box: function box() {
                      return view.getViewport();
                    }
                  }
                };

                if (material.cull) {
                  modelInitializationOptions.cull = material.cull;
                }

                if (material.depth) {
                  modelInitializationOptions.depth = material.depth;
                }

                if (material.blend) {
                  modelInitializationOptions.blend = material.blend;
                }

                if (geometry.indicesBuffer) {
                  modelInitializationOptions.elements = geometry.indicesBuffer;
                }

                if (geometry.maxInstancedCount) {
                  modelInitializationOptions.instances = geometry.maxInstancedCount;
                  modelInitializationOptions.count = geometry.vertexCount || 3;
                }

                _context2.next = 22;
                return createModel(modelInitializationOptions);

              case 22:
                mesh.model = _context2.sent;
                this.modelCache[modelCacheKey] = mesh.model;

              case 24:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function initMesh(_x4, _x5) {
        return _initMesh.apply(this, arguments);
      }

      return initMesh;
    }()
  }, {
    key: "initView",
    value: function () {
      var _initView = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(view) {
        var scene, _iterator4, _step4, meshEntity;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                scene = view.getScene();
                _iterator4 = _createForOfIteratorHelper(scene.getEntities());
                _context3.prev = 2;

                _iterator4.s();

              case 4:
                if ((_step4 = _iterator4.n()).done) {
                  _context3.next = 10;
                  break;
                }

                meshEntity = _step4.value;
                _context3.next = 8;
                return this.initMesh(meshEntity, view);

              case 8:
                _context3.next = 4;
                break;

              case 10:
                _context3.next = 15;
                break;

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3["catch"](2);

                _iterator4.e(_context3.t0);

              case 15:
                _context3.prev = 15;

                _iterator4.f();

                return _context3.finish(15);

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 12, 15, 18]]);
      }));

      function initView(_x6) {
        return _initView.apply(this, arguments);
      }

      return initView;
    }()
  }]);
  return RenderPass;
}(), _class3.IDENTIFIER = 'Render Pass', _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "mesh", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "geometry", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "material", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "cullable", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "transform", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "hierarchy", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "frameGraphSystem", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "engine", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "resourcePool", [_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.RenderPass = RenderPass;
//# sourceMappingURL=RenderPass.js.map
}, function(modId) { var map = {"../../../identifier":1679470356442,"../gl":1679470356452}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356465, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RendererSystem = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _inversify = require("inversify");

var _identifier = require("../../identifier");

var _CopyPass = require("./passes/CopyPass");

var _PixelPickingPass = require("./passes/PixelPickingPass");

var _RenderPass = require("./passes/RenderPass");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

var RendererSystem = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_identifier.IDENTIFIER.Systems), _dec3 = (0, _inversify.named)(_identifier.IDENTIFIER.FrameGraphSystem), _dec4 = (0, _inversify.inject)(_identifier.IDENTIFIER.RenderPassFactory), _dec5 = (0, _inversify.inject)(_identifier.IDENTIFIER.ConfigService), _dec6 = (0, _inversify.inject)(_identifier.IDENTIFIER.ResourcePool), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function () {
  function RendererSystem() {
    (0, _classCallCheck2.default)(this, RendererSystem);
    (0, _initializerDefineProperty2.default)(this, "frameGraphSystem", _descriptor, this);
    (0, _initializerDefineProperty2.default)(this, "renderPassFactory", _descriptor2, this);
    (0, _initializerDefineProperty2.default)(this, "configService", _descriptor3, this);
    (0, _initializerDefineProperty2.default)(this, "resourcePool", _descriptor4, this);
  }

  (0, _createClass2.default)(RendererSystem, [{
    key: "execute",
    value: function () {
      var _execute = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(views) {
        var _this$renderPassFacto, setupRenderPass, executeRenderPass, renderPass, _this$renderPassFacto2, setupCopyPass, executeCopyPass, tearDownCopyPass, copyPass;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // const pixelPickingPass = this.renderPassFactory<PixelPickingPassData>(
                //   PixelPickingPass.IDENTIFIER,
                // );
                // const {
                //   setup: setupPixelPickingPass,
                //   execute: executePixelPickingPass,
                //   tearDown: tearDownPickingPass,
                // } = pixelPickingPass;
                // this.frameGraphSystem.addPass<PixelPickingPassData>(
                //   PixelPickingPass.IDENTIFIER,
                //   setupPixelPickingPass,
                //   executePixelPickingPass,
                //   tearDownPickingPass,
                // );
                _this$renderPassFacto = this.renderPassFactory(_RenderPass.RenderPass.IDENTIFIER), setupRenderPass = _this$renderPassFacto.setup, executeRenderPass = _this$renderPassFacto.execute;
                renderPass = this.frameGraphSystem.addPass(_RenderPass.RenderPass.IDENTIFIER, setupRenderPass, executeRenderPass);
                _this$renderPassFacto2 = this.renderPassFactory(_CopyPass.CopyPass.IDENTIFIER), setupCopyPass = _this$renderPassFacto2.setup, executeCopyPass = _this$renderPassFacto2.execute, tearDownCopyPass = _this$renderPassFacto2.tearDown;
                copyPass = this.frameGraphSystem.addPass(_CopyPass.CopyPass.IDENTIFIER, setupCopyPass, executeCopyPass, tearDownCopyPass);
                this.frameGraphSystem.present(copyPass.data.output); // this.frameGraphSystem.present(renderPass.data.output);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function execute(_x) {
        return _execute.apply(this, arguments);
      }

      return execute;
    }()
  }, {
    key: "tearDown",
    value: function tearDown() {
      this.resourcePool.clean();
    }
  }, {
    key: "pick",
    value: function pick(position, view) {
      var pickingPass = this.renderPassFactory(_PixelPickingPass.PixelPickingPass.IDENTIFIER);
      return pickingPass.pick(position, view);
    }
  }]);
  return RendererSystem;
}(), _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "frameGraphSystem", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "renderPassFactory", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "configService", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "resourcePool", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.RendererSystem = RendererSystem;
//# sourceMappingURL=System.js.map
}, function(modId) { var map = {"../../identifier":1679470356442,"./passes/CopyPass":1679470356466,"./passes/PixelPickingPass":1679470356463,"./passes/RenderPass":1679470356464}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356466, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyPass = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _inversify = require("inversify");

var _identifier = require("../../../identifier");

var _gl = require("../gl");

var _RenderPass = require("./RenderPass");

var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _temp;

/* babel-plugin-inline-import '../../../services/shader-module/shaders/webgl.copy.frag.glsl' */
var copyFrag = "varying vec2 v_UV;\n\nuniform sampler2D u_Texture;\n\nvoid main() {\n  gl_FragColor = vec4(texture2D(u_Texture, v_UV));\n}";

/* babel-plugin-inline-import '../../../services/shader-module/shaders/webgl.copy.vert.glsl' */
var copyVert = "attribute vec2 a_Position;\n\nvarying vec2 v_UV;\n\nvoid main() {\n  v_UV = 0.5 * (a_Position + 1.0);\n  gl_Position = vec4(a_Position, 0., 1.);\n}";

/* babel-plugin-inline-import '../../../services/shader-module/shaders/webgpu.copy.frag.glsl' */
var copyFragWebGPU = "layout(set = 0, binding = 0) uniform sampler u_TextureSampler;\nlayout(set = 0, binding = 1) uniform texture2D u_Texture;\n\nlayout(location = 0) in vec2 v_UV;\nlayout(location = 0) out vec4 outColor;\n\nvoid main() {\n  outColor = texture(sampler2D(u_Texture, u_TextureSampler), v_UV);\n}";

/* babel-plugin-inline-import '../../../services/shader-module/shaders/webgpu.copy.vert.glsl' */
var copyVertWebGPU = "layout(location = 0) in vec2 a_Position;\nlayout(location = 0) out vec2 v_UV;\n\nvoid main() {\n  v_UV = 0.5 * (a_Position + 1.0);\n  gl_Position = vec4(a_Position, 0., 1.);\n}";
var CopyPass = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_identifier.IDENTIFIER.RenderEngine), _dec3 = (0, _inversify.inject)(_identifier.IDENTIFIER.ResourcePool), _dec(_class = (_class2 = (_temp = _class3 = function CopyPass() {
  var _this = this;

  (0, _classCallCheck2.default)(this, CopyPass);
  (0, _initializerDefineProperty2.default)(this, "engine", _descriptor, this);
  (0, _initializerDefineProperty2.default)(this, "resourcePool", _descriptor2, this);
  this.model = void 0;

  this.setup = function (fg, passNode, pass) {
    var renderPass = fg.getPass(_RenderPass.RenderPass.IDENTIFIER);

    if (renderPass) {
      var output = fg.createRenderTarget(passNode, 'render to screen', {
        width: 1,
        height: 1
      });
      pass.data = {
        input: passNode.read(renderPass.data.output),
        output: passNode.write(fg, output)
      };
    }
  };

  this.execute = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(fg, pass) {
      var _this$engine, createModel, createAttribute, createBuffer, model, resourceNode, framebuffer;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$engine = _this.engine, createModel = _this$engine.createModel, createAttribute = _this$engine.createAttribute, createBuffer = _this$engine.createBuffer;

              if (_this.model) {
                _context.next = 6;
                break;
              }

              _context.next = 4;
              return createModel({
                vs: _this.engine.supportWebGPU ? copyVertWebGPU : copyVert,
                fs: _this.engine.supportWebGPU ? copyFragWebGPU : copyFrag,
                attributes: {
                  // rendering a fullscreen triangle instead of quad
                  // @see https://www.saschawillems.de/blog/2016/08/13/vulkan-tutorial-on-rendering-a-fullscreen-quad-without-buffers/
                  a_Position: createAttribute({
                    buffer: createBuffer({
                      data: [-4, -4, 4, -4, 0, 4],
                      type: _gl.gl.FLOAT
                    }),
                    size: 2,
                    arrayStride: 2 * 4,
                    stepMode: 'vertex',
                    attributes: [{
                      shaderLocation: 0,
                      offset: 0,
                      format: 'float2'
                    }]
                  })
                },
                uniforms: {
                  // @ts-ignore
                  u_Texture: null
                },
                depth: {
                  enable: false
                },
                count: 3,
                blend: {
                  // copy pass 需要混合
                  // enable: this.getName() === 'copy',
                  enable: true
                }
              });

            case 4:
              model = _context.sent;
              _this.model = model;

            case 6:
              // 实例化资源
              resourceNode = fg.getResourceNode(pass.data.input);
              framebuffer = _this.resourcePool.getOrCreateResource(resourceNode.resource);

              _this.engine.useFramebuffer(null, function () {
                _this.engine.clear({
                  framebuffer: null,
                  color: [0, 0, 0, 0],
                  depth: 1,
                  stencil: 0
                });

                _this.model.draw({
                  uniforms: {
                    u_Texture: framebuffer // u_ViewportSize: [width, height],

                  }
                });
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  this.tearDown = function () {
    _this.model = undefined;
  };
}, _class3.IDENTIFIER = 'Copy Pass', _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "engine", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "resourcePool", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.CopyPass = CopyPass;
//# sourceMappingURL=CopyPass.js.map
}, function(modId) { var map = {"../../../identifier":1679470356442,"../gl":1679470356452,"./RenderPass":1679470356464}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356467, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HierarchyComponent = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _ComponentManager = require("../../ComponentManager");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var HierarchyComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(HierarchyComponent, _Component);

  var _super = _createSuper(HierarchyComponent);

  function HierarchyComponent(data) {
    var _this;

    (0, _classCallCheck2.default)(this, HierarchyComponent);
    _this = _super.call(this, data);
    _this.parentID = void 0;
    Object.assign((0, _assertThisInitialized2.default)(_this), data);
    return _this;
  }

  return HierarchyComponent;
}(_ComponentManager.Component);

exports.HierarchyComponent = HierarchyComponent;
//# sourceMappingURL=HierarchyComponent.js.map
}, function(modId) { var map = {"../../ComponentManager":1679470356439}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356468, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SceneGraphSystem = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _glMatrix = require("gl-matrix");

var _inversify = require("inversify");

var _identifier = require("../../identifier");

var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

var SceneGraphSystem = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_identifier.IDENTIFIER.HierarchyComponentManager), _dec3 = (0, _inversify.inject)(_identifier.IDENTIFIER.TransformComponentManager), _dec4 = (0, _inversify.inject)(_identifier.IDENTIFIER.MeshComponentManager), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function () {
  function SceneGraphSystem() {
    (0, _classCallCheck2.default)(this, SceneGraphSystem);
    (0, _initializerDefineProperty2.default)(this, "hierarchy", _descriptor, this);
    (0, _initializerDefineProperty2.default)(this, "transform", _descriptor2, this);
    (0, _initializerDefineProperty2.default)(this, "mesh", _descriptor3, this);
  }

  (0, _createClass2.default)(SceneGraphSystem, [{
    key: "execute",
    value: function () {
      var _execute = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.runTransformUpdateSystem();
                this.runHierarchyUpdateSystem();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function execute() {
        return _execute.apply(this, arguments);
      }

      return execute;
    }()
  }, {
    key: "tearDown",
    value: function tearDown() {
      this.hierarchy.clear();
      this.transform.clear();
    }
  }, {
    key: "getHierarchyComponentManager",
    value: function getHierarchyComponentManager() {
      return this.hierarchy;
    }
  }, {
    key: "getTransformComponentManager",
    value: function getTransformComponentManager() {
      return this.transform;
    }
  }, {
    key: "runTransformUpdateSystem",
    value: function runTransformUpdateSystem() {
      var _this = this;

      // 原版基于 JobSystem 实现
      this.transform.forEach(function (entity, transform) {
        if (transform.isDirty() || transform.isLocalDirty()) {
          _this.setMeshAABBDirty(_this.mesh.getComponentByEntity(entity));

          transform.updateTransform();
        }
      });
    }
  }, {
    key: "runHierarchyUpdateSystem",
    value: function runHierarchyUpdateSystem() {
      var _this2 = this;

      this.hierarchy.forEach(function (entity, parentComponent) {
        var transformChild = _this2.transform.getComponentByEntity(entity);

        var transformParent = _this2.transform.getComponentByEntity(parentComponent.parentID);

        if (transformChild !== null && transformParent !== null) {
          transformChild.updateTransformWithParent(transformParent);
        }
      });
    }
  }, {
    key: "attach",
    value: function attach(entity, parent, isChildAlreadyInLocalSpace) {
      if (this.hierarchy.contains(entity)) {
        this.detach(entity);
      }

      this.hierarchy.create(entity, {
        parentID: parent
      });
      var mesh = this.mesh.getComponentByEntity(parent); // inform parent mesh to update its aabb

      this.setMeshAABBDirty(mesh);

      if (mesh && mesh.children.indexOf(entity) === -1) {
        mesh.children.push(entity);
      }

      if (this.hierarchy.getCount() > 1) {
        for (var i = this.hierarchy.getCount() - 1; i > 0; --i) {
          var parentCandidateEntity = this.hierarchy.getEntity(i); // const parentCandidateComponent = this.hierarchy.getComponent(i);

          for (var j = 0; j < i; ++j) {
            var childCandidateEntity = this.hierarchy.getComponent(j);

            if (childCandidateEntity.parentID === parentCandidateEntity) {
              this.hierarchy.moveItem(i, j);
              ++i; // next outer iteration will check the same index again as parent candidate, however things were moved upwards, so it will be a different entity!

              break;
            }
          }
        }
      } // Re-query parent after potential MoveItem(), because it invalidates references:


      var parentcomponent = this.hierarchy.getComponentByEntity(entity);
      var transformParent = this.transform.getComponentByEntity(parent);

      if (transformParent === null) {
        transformParent = this.transform.create(parent);
      }

      var transformChild = this.transform.getComponentByEntity(entity);

      if (transformChild === null) {
        transformChild = this.transform.create(entity); // after transforms.Create(), transform_parent pointer could have become invalidated!

        transformParent = this.transform.getComponentByEntity(parent);
      }

      transformChild.parent = transformParent;

      if (!isChildAlreadyInLocalSpace && transformParent) {
        transformChild.matrixTransform(_glMatrix.mat4.invert(_glMatrix.mat4.create(), transformParent.worldTransform));
        transformChild.updateTransform();
      }

      if (transformParent) {
        transformChild.updateTransformWithParent(transformParent);
      }
    }
  }, {
    key: "detach",
    value: function detach(entity) {
      var self = this.hierarchy.getComponentByEntity(entity);

      if (self !== null) {
        var transform = this.transform.getComponentByEntity(entity);

        if (transform !== null) {
          transform.parent = null;
          transform.applyTransform();
        }

        this.hierarchy.removeKeepSorted(entity); // inform parent mesh to update its aabb

        var mesh = this.mesh.getComponentByEntity(self.parentID);

        if (mesh) {
          var index = mesh.children.indexOf(entity);
          mesh.children.splice(index, 1);
        }

        this.setMeshAABBDirty(mesh);
      }
    }
  }, {
    key: "detachChildren",
    value: function detachChildren(parent) {
      var mesh = this.mesh.getComponentByEntity(parent);

      if (mesh) {
        mesh.children = [];
      }

      for (var i = 0; i < this.hierarchy.getCount();) {
        var _this$hierarchy$getCo;

        if (((_this$hierarchy$getCo = this.hierarchy.getComponent(i)) === null || _this$hierarchy$getCo === void 0 ? void 0 : _this$hierarchy$getCo.parentID) === parent) {
          var entity = this.hierarchy.getEntity(i);
          this.detach(entity);
        } else {
          ++i;
        }
      }
    }
  }, {
    key: "setMeshAABBDirty",
    value: function setMeshAABBDirty(mesh) {
      if (mesh) {
        mesh.aabbDirty = true;
      }
    }
  }]);
  return SceneGraphSystem;
}(), _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "hierarchy", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "transform", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "mesh", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.SceneGraphSystem = SceneGraphSystem;
//# sourceMappingURL=System.js.map
}, function(modId) { var map = {"../../identifier":1679470356442}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356469, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransformComponent = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _glMatrix = require("gl-matrix");

var _ComponentManager = require("../../ComponentManager");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TransformComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(TransformComponent, _Component);

  var _super = _createSuper(TransformComponent);

  /**
   * local space RTS
   */

  /**
   * XMFLOAT4X4._41
   * @see https://docs.microsoft.com/en-us/windows/win32/api/directxmath/nf-directxmath-xmfloat4x4-xmfloat4x4(constfloat)#remarks
   */

  /**
   * world space RTS
   */
  // 高阶函数，利用闭包重复利用临时变量
  // @see playcanvas graph node

  /**
   * @see https://docs.microsoft.com/en-us/windows/win32/api/directxmath/nf-directxmath-xmquaternionrotationrollpitchyaw
   */

  /**
   * @see https://xiaoiver.github.io/coding/2018/12/28/Camera-%E8%AE%BE%E8%AE%A1-%E4%B8%80.html
   */

  /**
   * TODO: 支持以下两种：
   * * translate(x, y, z)
   * * translate(vec3(x, y, z))
   */

  /**
   * @see https://en.wikipedia.org/wiki/Centripetal_Catmull%E2%80%93Rom_spline
   */
  // public catmullRom = (() => {
  //   const aS = vec3.create();
  //   const aR = quat.create();
  //   const aT = vec3.create();
  //   const bS = vec3.create();
  //   const bR = quat.create();
  //   const bT = vec3.create();
  //   const cS = vec3.create();
  //   const cR = quat.create();
  //   const cT = vec3.create();
  //   const dS = vec3.create();
  //   const dR = quat.create();
  //   const dT = vec3.create();
  //   const R = quat.create();
  //   return (
  //     a: TransformComponent,
  //     b: TransformComponent,
  //     c: TransformComponent,
  //     d: TransformComponent,
  //     t: number,
  //   ) => {
  //     this.setDirty();
  //     mat4.getScaling(aS, a.worldTransform);
  //     mat4.getTranslation(aT, a.worldTransform);
  //     mat4.getRotation(aR, a.worldTransform);
  //     mat4.getScaling(bS, b.worldTransform);
  //     mat4.getTranslation(bT, b.worldTransform);
  //     mat4.getRotation(bR, b.worldTransform);
  //     mat4.getScaling(cS, c.worldTransform);
  //     mat4.getTranslation(cT, c.worldTransform);
  //     mat4.getRotation(cR, c.worldTransform);
  //     mat4.getScaling(dS, d.worldTransform);
  //     mat4.getTranslation(dT, d.worldTransform);
  //     mat4.getRotation(dR, d.worldTransform);
  //     vec3.catmullRom(this.localPosition, aT, bT, cT, dT, t);
  //     vec3.catmullRom(R, aR, bR, cR, dR, t);
  //     quat.normalize(this.localRotation, R);
  //     vec3.catmullRom(this.localScale, aS, bS, cS, dS, t);
  //   };
  // })();
  function TransformComponent(data) {
    var _this;

    (0, _classCallCheck2.default)(this, TransformComponent);
    _this = _super.call(this, data);
    _this.dirtyFlag = void 0;
    _this.localDirtyFlag = void 0;
    _this.parent = null;
    _this.localPosition = _glMatrix.vec3.fromValues(0, 0, 0);
    _this.localRotation = _glMatrix.quat.fromValues(0, 0, 0, 1);
    _this.localScale = _glMatrix.vec3.fromValues(1, 1, 1);
    _this.localTransform = _glMatrix.mat4.create();
    _this.position = _glMatrix.vec3.fromValues(0, 0, 0);
    _this.rotation = _glMatrix.quat.fromValues(0, 0, 0, 1);
    _this.scaling = _glMatrix.vec3.fromValues(1, 1, 1);
    _this.worldTransform = _glMatrix.mat4.create();

    _this.matrixTransform = function () {
      var transformed = _glMatrix.mat4.create();

      return function (mat) {
        _glMatrix.mat4.multiply(transformed, _this.getLocalTransform(), mat);

        _glMatrix.mat4.getScaling(_this.localScale, transformed);

        _glMatrix.mat4.getTranslation(_this.localPosition, transformed);

        _glMatrix.mat4.getRotation(_this.localRotation, transformed);
      };
    }();

    _this.rotateRollPitchYaw = function () {
      var quatX = _glMatrix.quat.create();

      var quatY = _glMatrix.quat.create();

      var quatZ = _glMatrix.quat.create();

      return function (x, y, z) {
        _this.setDirty();

        _glMatrix.quat.fromEuler(quatX, x, 0, 0);

        _glMatrix.quat.fromEuler(quatY, 0, y, 0);

        _glMatrix.quat.fromEuler(quatZ, 0, 0, z);

        _glMatrix.quat.multiply(_this.localRotation, quatX, _this.localRotation);

        _glMatrix.quat.multiply(_this.localRotation, _this.localRotation, quatY);

        _glMatrix.quat.multiply(_this.localRotation, quatZ, _this.localRotation);

        _glMatrix.quat.normalize(_this.localRotation, _this.localRotation);
      };
    }();

    _this.lerp = function () {
      var aS = _glMatrix.vec3.create();

      var aR = _glMatrix.quat.create();

      var aT = _glMatrix.vec3.create();

      var bS = _glMatrix.vec3.create();

      var bR = _glMatrix.quat.create();

      var bT = _glMatrix.vec3.create();

      return function (a, b, t) {
        _this.setDirty();

        _glMatrix.mat4.getScaling(aS, a.worldTransform);

        _glMatrix.mat4.getTranslation(aT, a.worldTransform);

        _glMatrix.mat4.getRotation(aR, a.worldTransform);

        _glMatrix.mat4.getScaling(bS, b.worldTransform);

        _glMatrix.mat4.getTranslation(bT, b.worldTransform);

        _glMatrix.mat4.getRotation(bR, b.worldTransform);

        _glMatrix.vec3.lerp(_this.localScale, aS, bS, t);

        _glMatrix.quat.slerp(_this.localRotation, aR, bR, t);

        _glMatrix.vec3.lerp(_this.localPosition, aT, bT, t);
      };
    }();

    _this.translate = function () {
      var tr = _glMatrix.vec3.create();

      return function (translation) {
        _glMatrix.vec3.add(tr, _this.getPosition(), translation);

        _this.setPosition(tr);

        _this.setDirty(true);

        return (0, _assertThisInitialized2.default)(_this);
      };
    }();

    _this.translateLocal = function () {
      return function (translation) {
        _glMatrix.vec3.transformQuat(translation, translation, _this.localRotation);

        _glMatrix.vec3.add(_this.localPosition, _this.localPosition, translation);

        _this.setLocalDirty(true);

        return (0, _assertThisInitialized2.default)(_this);
      };
    }();

    _this.setPosition = function () {
      var parentInvertMatrix = _glMatrix.mat4.create();

      return function (position) {
        _this.position = position;

        _this.setLocalDirty(true);

        if (_this.parent === null) {
          _glMatrix.vec3.copy(_this.localPosition, position);
        } else {
          _glMatrix.mat4.copy(parentInvertMatrix, _this.parent.worldTransform);

          _glMatrix.mat4.invert(parentInvertMatrix, parentInvertMatrix);

          _glMatrix.vec3.transformMat4(_this.localPosition, position, parentInvertMatrix);
        }

        return (0, _assertThisInitialized2.default)(_this);
      };
    }();

    _this.rotate = function () {
      var parentInvertRotation = _glMatrix.quat.create();

      return function (quaternion) {
        if (_this.parent === null) {
          _glMatrix.quat.multiply(_this.localRotation, _this.localRotation, quaternion);

          _glMatrix.quat.normalize(_this.localRotation, _this.localRotation);
        } else {
          var rot = _this.getRotation();

          var parentRot = _this.parent.getRotation();

          _glMatrix.quat.copy(parentInvertRotation, parentRot);

          _glMatrix.quat.invert(parentInvertRotation, parentInvertRotation);

          _glMatrix.quat.multiply(parentInvertRotation, parentInvertRotation, quaternion);

          _glMatrix.quat.multiply(_this.localRotation, quaternion, rot);

          _glMatrix.quat.normalize(_this.localRotation, _this.localRotation);
        }

        _this.setLocalDirty();

        return (0, _assertThisInitialized2.default)(_this);
      };
    }();

    _this.rotateLocal = function () {
      return function (quaternion) {
        _glMatrix.quat.multiply(_this.localRotation, _this.localRotation, quaternion);

        _glMatrix.quat.normalize(_this.localRotation, _this.localRotation);

        _this.setLocalDirty(true);

        return (0, _assertThisInitialized2.default)(_this);
      };
    }();

    _this.setRotation = function () {
      var invParentRot = _glMatrix.quat.create();

      return function (rotation) {
        if (_this.parent === null) {
          _glMatrix.quat.copy(_this.localRotation, rotation);
        } else {
          _glMatrix.quat.copy(invParentRot, _this.parent.getRotation());

          _glMatrix.quat.invert(invParentRot, invParentRot);

          _glMatrix.quat.copy(_this.localRotation, invParentRot);

          _glMatrix.quat.mul(_this.localRotation, _this.localRotation, rotation);
        }

        _this.setLocalDirty(true);

        return (0, _assertThisInitialized2.default)(_this);
      };
    }();

    return _this;
  }

  (0, _createClass2.default)(TransformComponent, [{
    key: "setLocalPosition",
    value: function setLocalPosition(position) {
      _glMatrix.vec3.copy(this.localPosition, position);

      this.setLocalDirty(true);
    }
  }, {
    key: "setLocalScale",
    value: function setLocalScale(scale) {
      _glMatrix.vec3.copy(this.localScale, scale);

      this.setLocalDirty(true);
    }
  }, {
    key: "setLocalRotation",
    value: function setLocalRotation(rotation) {
      _glMatrix.quat.copy(this.localRotation, rotation);

      this.setLocalDirty(true);
      return this;
    }
  }, {
    key: "isDirty",
    value: function isDirty() {
      return this.dirtyFlag;
    }
  }, {
    key: "setDirty",
    value: function setDirty() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (value) {
        this.dirtyFlag |= TransformComponent.DIRTY;
      } else {
        this.dirtyFlag &= ~TransformComponent.DIRTY;
      }
    }
  }, {
    key: "isLocalDirty",
    value: function isLocalDirty() {
      return this.localDirtyFlag;
    }
  }, {
    key: "setLocalDirty",
    value: function setLocalDirty() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (value) {
        this.localDirtyFlag |= TransformComponent.DIRTY;
        this.setDirty(true);
      } else {
        this.localDirtyFlag &= ~TransformComponent.DIRTY;
      }
    }
  }, {
    key: "updateTransform",
    value: function updateTransform() {
      if (this.isLocalDirty()) {
        this.getLocalTransform();
      }

      if (this.isDirty()) {
        if (this.parent === null) {
          _glMatrix.mat4.copy(this.worldTransform, this.getLocalTransform());

          this.setDirty(false);
        }
      }
    }
  }, {
    key: "updateTransformWithParent",
    value: function updateTransformWithParent(parent) {
      _glMatrix.mat4.multiply(this.worldTransform, parent.worldTransform, this.getLocalTransform());
    }
  }, {
    key: "applyTransform",
    value: function applyTransform() {
      this.setDirty();

      _glMatrix.mat4.getScaling(this.localScale, this.worldTransform);

      _glMatrix.mat4.getTranslation(this.localPosition, this.worldTransform);

      _glMatrix.mat4.getRotation(this.localRotation, this.worldTransform);
    }
  }, {
    key: "clearTransform",
    value: function clearTransform() {
      this.setDirty();
      this.localPosition = _glMatrix.vec3.fromValues(0, 0, 0);
      this.localRotation = _glMatrix.quat.fromValues(0, 0, 0, 1);
      this.localScale = _glMatrix.vec3.fromValues(1, 1, 1);
    }
  }, {
    key: "scaleLocal",
    value: function scaleLocal(scaling) {
      this.setLocalDirty();

      _glMatrix.vec3.multiply(this.localScale, this.localScale, scaling);

      return this;
    }
  }, {
    key: "getLocalPosition",
    value: function getLocalPosition() {
      return this.localPosition;
    }
  }, {
    key: "getLocalRotation",
    value: function getLocalRotation() {
      return this.localRotation;
    }
  }, {
    key: "getLocalScale",
    value: function getLocalScale() {
      return this.localScale;
    }
  }, {
    key: "getLocalTransform",
    value: function getLocalTransform() {
      if (this.localDirtyFlag) {
        _glMatrix.mat4.fromRotationTranslationScale(this.localTransform, this.localRotation, this.localPosition, this.localScale);

        this.setLocalDirty(false);
      }

      return this.localTransform;
    }
  }, {
    key: "getWorldTransform",
    value: function getWorldTransform() {
      if (!this.isLocalDirty() && !this.isDirty()) {
        return this.worldTransform;
      }

      if (this.parent) {
        this.parent.getWorldTransform();
      }

      this.updateTransform();
      return this.worldTransform;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      _glMatrix.mat4.getTranslation(this.position, this.worldTransform);

      return this.position;
    }
  }, {
    key: "getRotation",
    value: function getRotation() {
      _glMatrix.mat4.getRotation(this.rotation, this.worldTransform);

      return this.rotation;
    }
  }, {
    key: "getScale",
    value: function getScale() {
      _glMatrix.mat4.getScaling(this.scaling, this.worldTransform);

      return this.scaling;
    }
  }]);
  return TransformComponent;
}(_ComponentManager.Component);

exports.TransformComponent = TransformComponent;
TransformComponent.DIRTY = 1 << 0;
//# sourceMappingURL=TransformComponent.js.map
}, function(modId) { var map = {"../../ComponentManager":1679470356439}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356470, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createWorldContainer = createWorldContainer;
exports.lazyMultiInject = exports.lazyInject = exports.container = void 0;

require("reflect-metadata");

var _inversify = require("inversify");

var _inversifyInjectDecorators = _interopRequireDefault(require("inversify-inject-decorators"));

var _ComponentManager = require("./ComponentManager");

var _ResourcePool = require("./components/framegraph/ResourcePool");

var _System = require("./components/framegraph/System");

var _GeometryComponent = require("./components/geometry/GeometryComponent");

var _System2 = require("./components/geometry/System");

var _MaterialComponent = require("./components/material/MaterialComponent");

var _System3 = require("./components/material/System");

var _CullableComponent = require("./components/mesh/CullableComponent");

var _MeshComponent = require("./components/mesh/MeshComponent");

var _System4 = require("./components/mesh/System");

var _CopyPass = require("./components/renderer/passes/CopyPass");

var _PixelPickingPass = require("./components/renderer/passes/PixelPickingPass");

var _RenderPass = require("./components/renderer/passes/RenderPass");

var _System5 = require("./components/renderer/System");

var _HierarchyComponent = require("./components/scenegraph/HierarchyComponent");

var _NameComponent = require("./components/scenegraph/NameComponent");

var _System6 = require("./components/scenegraph/System");

var _TransformComponent = require("./components/scenegraph/TransformComponent");

var _identifier = require("./identifier");

var _ConfigService = require("./services/config/ConfigService");

var _IteractorService = require("./services/interactor/IteractorService");

var _ShaderModuleService = _interopRequireDefault(require("./services/shader-module/ShaderModuleService"));

/**
 * Root Container
 * @see /dev-docs/IoC 容器、依赖注入与服务说明.md
 */
// import { InteractionSystem } from './components/interaction/System';
// @see https://github.com/inversify/InversifyJS/blob/master/wiki/container_api.md#defaultscope
var container = new _inversify.Container(); // @see https://github.com/inversify/InversifyJS/blob/master/wiki/inheritance.md#what-can-i-do-when-my-base-class-is-provided-by-a-third-party-module
// decorate(injectable(), EventEmitter);
// container.bind(IDENTIFIER.IEventEmitter).to(EventEmitter);
// 支持使用 new 而非容器实例化的场景，同时禁止 lazyInject cache
// @see https://github.com/inversify/inversify-inject-decorators#caching-vs-non-caching-behaviour

exports.container = container;
var DECORATORS = (0, _inversifyInjectDecorators.default)(container, false);

// Add babel legacy decorators support
// @see https://github.com/inversify/InversifyJS/issues/1050
// @see https://github.com/inversify/InversifyJS/issues/1026#issuecomment-504936034
var lazyInject = function lazyInject(serviceIdentifier) {
  var original = DECORATORS.lazyInject(serviceIdentifier); // the 'descriptor' parameter is actually always defined for class fields for Babel, but is considered undefined for TSC
  // so we just hack it with ?/! combination to avoid "TS1240: Unable to resolve signature of property decorator when called as an expression"

  return function (proto, key, descriptor) {
    // make it work as usual
    original.call(this, proto, key); // return link to proto, so own value wont be 'undefined' after component's creation

    if (descriptor) {
      descriptor.initializer = function () {
        return proto[key];
      };
    }
  };
};

exports.lazyInject = lazyInject;

var lazyMultiInject = function lazyMultiInject(serviceIdentifier) {
  var original = DECORATORS.lazyMultiInject(serviceIdentifier); // the 'descriptor' parameter is actually always defined for class fields for Babel, but is considered undefined for TSC
  // so we just hack it with ?/! combination to avoid "TS1240: Unable to resolve signature of property decorator when called as an expression"

  return function (proto, key, descriptor) {
    // make it work as usual
    original.call(this, proto, key);

    if (descriptor) {
      // return link to proto, so own value wont be 'undefined' after component's creation
      descriptor.initializer = function () {
        return proto[key];
      };
    }
  };
};
/** global services */


exports.lazyMultiInject = lazyMultiInject;
container.bind(_identifier.IDENTIFIER.ShaderModuleService).to(_ShaderModuleService.default).inSingletonScope();
/**
 * bind global component managers in root container
 */

container.bind(_identifier.IDENTIFIER.NameComponentManager).toConstantValue(new _ComponentManager.ComponentManager(_NameComponent.NameComponent));
container.bind(_identifier.IDENTIFIER.HierarchyComponentManager).toConstantValue(new _ComponentManager.ComponentManager(_HierarchyComponent.HierarchyComponent));
container.bind(_identifier.IDENTIFIER.TransformComponentManager).toConstantValue(new _ComponentManager.ComponentManager(_TransformComponent.TransformComponent));
container.bind(_identifier.IDENTIFIER.MeshComponentManager).toConstantValue(new _ComponentManager.ComponentManager(_MeshComponent.MeshComponent));
container.bind(_identifier.IDENTIFIER.CullableComponentManager).toConstantValue(new _ComponentManager.ComponentManager(_CullableComponent.CullableComponent));
container.bind(_identifier.IDENTIFIER.GeometryComponentManager).toConstantValue(new _ComponentManager.ComponentManager(_GeometryComponent.GeometryComponent));
container.bind(_identifier.IDENTIFIER.MaterialComponentManager).toConstantValue(new _ComponentManager.ComponentManager(_MaterialComponent.MaterialComponent)); // https://github.com/inversify/InversifyJS/blob/master/wiki/hierarchical_di.md#support-for-hierarchical-di-systems

function createWorldContainer() {
  var worldContainer = new _inversify.Container();
  worldContainer.parent = container;
  /**
   * bind systems
   */

  worldContainer.bind(_identifier.IDENTIFIER.Systems).to(_System6.SceneGraphSystem).inSingletonScope().whenTargetNamed(_identifier.IDENTIFIER.SceneGraphSystem);
  worldContainer.bind(_identifier.IDENTIFIER.Systems).to(_System.FrameGraphSystem).inSingletonScope().whenTargetNamed(_identifier.IDENTIFIER.FrameGraphSystem);
  worldContainer.bind(_identifier.IDENTIFIER.Systems).to(_System4.MeshSystem).inSingletonScope().whenTargetNamed(_identifier.IDENTIFIER.MeshSystem);
  worldContainer.bind(_identifier.IDENTIFIER.Systems).to(_System2.GeometrySystem).inSingletonScope().whenTargetNamed(_identifier.IDENTIFIER.GeometrySystem);
  worldContainer.bind(_identifier.IDENTIFIER.Systems).to(_System3.MaterialSystem).inSingletonScope().whenTargetNamed(_identifier.IDENTIFIER.MaterialSystem);
  worldContainer.bind(_identifier.IDENTIFIER.Systems).to(_System5.RendererSystem).inSingletonScope().whenTargetNamed(_identifier.IDENTIFIER.RendererSystem); // 资源池

  worldContainer.bind(_identifier.IDENTIFIER.ResourcePool).to(_ResourcePool.ResourcePool).inSingletonScope();
  worldContainer.bind(_identifier.IDENTIFIER.ConfigService).to(_ConfigService.ConfigService).inSingletonScope();
  worldContainer.bind(_identifier.IDENTIFIER.InteractorService).to(_IteractorService.InteractorService).inSingletonScope();
  /**
   * bind render passes
   */

  worldContainer.bind(_identifier.IDENTIFIER.RenderPass).to(_RenderPass.RenderPass).inSingletonScope().whenTargetNamed(_RenderPass.RenderPass.IDENTIFIER);
  worldContainer.bind(_identifier.IDENTIFIER.RenderPass).to(_CopyPass.CopyPass).inSingletonScope().whenTargetNamed(_CopyPass.CopyPass.IDENTIFIER);
  worldContainer.bind(_identifier.IDENTIFIER.RenderPass).to(_PixelPickingPass.PixelPickingPass).inSingletonScope().whenTargetNamed(_PixelPickingPass.PixelPickingPass.IDENTIFIER);
  worldContainer.bind(_identifier.IDENTIFIER.RenderPassFactory).toFactory(function (context) {
    return function (name) {
      return context.container.getNamed(_identifier.IDENTIFIER.RenderPass, name);
    };
  });
  return worldContainer;
}
//# sourceMappingURL=inversify.config.js.map
}, function(modId) { var map = {"./ComponentManager":1679470356439,"./components/framegraph/ResourcePool":1679470356471,"./components/framegraph/System":1679470356441,"./components/geometry/GeometryComponent":1679470356449,"./components/geometry/System":1679470356451,"./components/material/MaterialComponent":1679470356453,"./components/material/System":1679470356454,"./components/mesh/CullableComponent":1679470356455,"./components/mesh/MeshComponent":1679470356456,"./components/mesh/System":1679470356458,"./components/renderer/passes/CopyPass":1679470356466,"./components/renderer/passes/PixelPickingPass":1679470356463,"./components/renderer/passes/RenderPass":1679470356464,"./components/renderer/System":1679470356465,"./components/scenegraph/HierarchyComponent":1679470356467,"./components/scenegraph/NameComponent":1679470356472,"./components/scenegraph/System":1679470356468,"./components/scenegraph/TransformComponent":1679470356469,"./identifier":1679470356442,"./services/config/ConfigService":1679470356473,"./services/interactor/IteractorService":1679470356474,"./services/shader-module/ShaderModuleService":1679470356475}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356471, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResourcePool = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _inversify = require("inversify");

var _identifier = require("../../identifier");

var _gl = require("../renderer/gl");

var _dec, _dec2, _class, _class2, _descriptor, _temp;

var ResourcePool = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_identifier.IDENTIFIER.RenderEngine), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function () {
  function ResourcePool() {
    (0, _classCallCheck2.default)(this, ResourcePool);
    (0, _initializerDefineProperty2.default)(this, "engine", _descriptor, this);
    this.resourcePool = {};
  }

  (0, _createClass2.default)(ResourcePool, [{
    key: "getOrCreateResource",

    /**
     * 负责实例化虚拟资源，通过引擎服务
     * @param resource 虚拟资源
     */
    value: function getOrCreateResource(resource) {
      if (!this.resourcePool[resource.name]) {
        var _resource$descriptor = resource.descriptor,
            width = _resource$descriptor.width,
            height = _resource$descriptor.height,
            usage = _resource$descriptor.usage;
        this.resourcePool[resource.name] = this.engine.createFramebuffer({
          color: this.engine.createTexture2D({
            width: width,
            height: height,
            wrapS: _gl.gl.CLAMP_TO_EDGE,
            wrapT: _gl.gl.CLAMP_TO_EDGE,
            usage: usage
          })
        });
      }

      return this.resourcePool[resource.name];
    }
  }, {
    key: "clean",
    value: function clean() {
      this.resourcePool = {};
    }
  }]);
  return ResourcePool;
}(), _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "engine", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.ResourcePool = ResourcePool;
//# sourceMappingURL=ResourcePool.js.map
}, function(modId) { var map = {"../../identifier":1679470356442,"../renderer/gl":1679470356452}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356472, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NameComponent = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _ComponentManager = require("../../ComponentManager");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var NameComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(NameComponent, _Component);

  var _super = _createSuper(NameComponent);

  function NameComponent(data) {
    var _this;

    (0, _classCallCheck2.default)(this, NameComponent);
    _this = _super.call(this, data);
    _this.name = void 0;
    _this.name = data.name || '';
    return _this;
  }

  return NameComponent;
}(_ComponentManager.Component);

exports.NameComponent = NameComponent;
//# sourceMappingURL=NameComponent.js.map
}, function(modId) { var map = {"../../ComponentManager":1679470356439}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356473, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigService = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inversify = require("inversify");

var _dec, _class, _temp;

var ConfigService = (_dec = (0, _inversify.injectable)(), _dec(_class = (_temp = /*#__PURE__*/function () {
  function ConfigService() {
    (0, _classCallCheck2.default)(this, ConfigService);
    this.config = void 0;
  }

  (0, _createClass2.default)(ConfigService, [{
    key: "get",
    value: function get() {
      return this.config;
    }
  }, {
    key: "set",
    value: function set(config) {
      this.config = config;
    }
  }]);
  return ConfigService;
}(), _temp)) || _class);
exports.ConfigService = ConfigService;
//# sourceMappingURL=ConfigService.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356474, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InteractorService = exports.IInteractorEvent = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inversify = require("inversify");

var _dec, _class;

var IInteractorEvent;
exports.IInteractorEvent = IInteractorEvent;

(function (IInteractorEvent) {
  IInteractorEvent["PANSTART"] = "PANSTART";
  IInteractorEvent["PANEND"] = "PANEND";
  IInteractorEvent["PANMOVE"] = "PANMOVE";
  IInteractorEvent["PINCH"] = "PINCH";
  IInteractorEvent["KEYDOWN"] = "KEYDOWN";
  IInteractorEvent["KEYUP"] = "KEYUP";
  IInteractorEvent["HOVER"] = "HOVER";
})(IInteractorEvent || (exports.IInteractorEvent = IInteractorEvent = {}));

var InteractorService = (_dec = (0, _inversify.injectable)(), _dec(_class = /*#__PURE__*/function () {
  function InteractorService() {
    (0, _classCallCheck2.default)(this, InteractorService);
  }

  (0, _createClass2.default)(InteractorService, [{
    key: "listen",
    value: function listen(canvas) {}
  }, {
    key: "on",
    value: function on(event, args) {}
  }, {
    key: "connect",
    value: function connect() {}
  }, {
    key: "disconnect",
    value: function disconnect() {}
  }, {
    key: "destroy",
    value: function destroy() {}
  }]);
  return InteractorService;
}()) || _class);
exports.InteractorService = InteractorService;
//# sourceMappingURL=IteractorService.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356475, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inversify = require("inversify");

var _shaderModule = require("../../utils/shader-module");

var _uniq = require("../../utils/uniq");

var _dec, _class, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* babel-plugin-inline-import './shaders/webgl.picking.frag.glsl' */
var pickingFrag = "varying vec4 v_PickingResult;\nuniform vec4 u_HighlightColor : [0, 0, 0, 0];\nuniform float u_PickingStage : 0.0;\n\n#define PICKING_ENCODE 1.0\n#define PICKING_HIGHLIGHT 2.0\n#define COLOR_SCALE 1. / 255.\n\n/*\n * Returns highlight color if this item is selected.\n */\nvec4 filterHighlightColor(vec4 color) {\n  bool selected = bool(v_PickingResult.a);\n\n  if (selected) {\n    vec4 highLightColor = u_HighlightColor * COLOR_SCALE;\n\n    float highLightAlpha = highLightColor.a;\n    float highLightRatio = highLightAlpha / (highLightAlpha + color.a * (1.0 - highLightAlpha));\n\n    vec3 resultRGB = mix(color.rgb, highLightColor.rgb, highLightRatio);\n    return vec4(resultRGB, color.a);\n  } else {\n    return color;\n  }\n}\n\n/*\n * Returns picking color if picking enabled else unmodified argument.\n */\nvec4 filterPickingColor(vec4 color) {\n  vec3 pickingColor = v_PickingResult.rgb;\n  if (u_PickingStage == PICKING_ENCODE && length(pickingColor) < 0.001) {\n    discard;\n  }\n  return u_PickingStage == PICKING_ENCODE ? vec4(pickingColor, step(0.001,color.a)): color;\n}\n\n/*\n * Returns picking color if picking is enabled if not\n * highlight color if this item is selected, otherwise unmodified argument.\n */\nvec4 filterColor(vec4 color) {\n  return filterPickingColor(filterHighlightColor(color));\n}\n";

/* babel-plugin-inline-import './shaders/webgl.picking.vert.glsl' */
var pickingVert = "attribute vec3 a_PickingColor;\nvarying vec4 v_PickingResult;\n\nuniform vec3 u_PickingColor : [0, 0, 0];\nuniform vec4 u_HighlightColor : [0, 0, 0, 0];\nuniform float u_PickingStage : 0.0;\nuniform float u_PickingThreshold : 1.0;\nuniform float u_PickingBuffer: 0.0;\n\n#define PICKING_ENCODE 1.0\n#define PICKING_HIGHLIGHT 2.0\n#define COLOR_SCALE 1. / 255.\n\nbool isVertexPicked(vec3 vertexColor) {\n  return\n    abs(vertexColor.r - u_PickingColor.r) < u_PickingThreshold &&\n    abs(vertexColor.g - u_PickingColor.g) < u_PickingThreshold &&\n    abs(vertexColor.b - u_PickingColor.b) < u_PickingThreshold;\n}\n\nvoid setPickingColor(vec3 pickingColor) {\n  // compares only in highlight stage\n  v_PickingResult.a = float((u_PickingStage == PICKING_HIGHLIGHT) && isVertexPicked(pickingColor));\n\n  // Stores the picking color so that the fragment shader can render it during picking\n  v_PickingResult.rgb = pickingColor * COLOR_SCALE;\n}\n\nfloat setPickingSize(float x) {\n   return u_PickingStage == PICKING_ENCODE ? x + u_PickingBuffer : x;\n}";

/* babel-plugin-inline-import './shaders/webgl.sdf2d.frag.glsl' */
var sdf2dFrag = "/**\n * 2D signed distance field functions\n * @see http://www.iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm\n */\n\nfloat ndot(vec2 a, vec2 b ) { return a.x*b.x - a.y*b.y; }\n\nfloat sdCircle(vec2 p, float r) {\n  return length(p) - r;\n}\n\nfloat sdEquilateralTriangle(vec2 p) {\n  float k = sqrt(3.0);\n  p.x = abs(p.x) - 1.0;\n  p.y = p.y + 1.0/k;\n  if( p.x + k*p.y > 0.0 ) p = vec2(p.x-k*p.y,-k*p.x-p.y)/2.0;\n  p.x -= clamp( p.x, -2.0, 0.0 );\n  return -length(p)*sign(p.y);\n}\n\nfloat sdBox(vec2 p, vec2 b) {\n  vec2 d = abs(p)-b;\n  return length(max(d,vec2(0))) + min(max(d.x,d.y),0.0);\n}\n\nfloat sdPentagon(vec2 p, float r) {\n  vec3 k = vec3(0.809016994,0.587785252,0.726542528);\n  p.x = abs(p.x);\n  p -= 2.0*min(dot(vec2(-k.x,k.y),p),0.0)*vec2(-k.x,k.y);\n  p -= 2.0*min(dot(vec2( k.x,k.y),p),0.0)*vec2( k.x,k.y);\n  p -= vec2(clamp(p.x,-r*k.z,r*k.z),r);\n  return length(p)*sign(p.y);\n}\n\nfloat sdHexagon(vec2 p, float r) {\n  vec3 k = vec3(-0.866025404,0.5,0.577350269);\n  p = abs(p);\n  p -= 2.0*min(dot(k.xy,p),0.0)*k.xy;\n  p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);\n  return length(p)*sign(p.y);\n}\n\nfloat sdOctogon(vec2 p, float r) {\n  vec3 k = vec3(-0.9238795325, 0.3826834323, 0.4142135623 );\n  p = abs(p);\n  p -= 2.0*min(dot(vec2( k.x,k.y),p),0.0)*vec2( k.x,k.y);\n  p -= 2.0*min(dot(vec2(-k.x,k.y),p),0.0)*vec2(-k.x,k.y);\n  p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);\n  return length(p)*sign(p.y);\n}\n\nfloat sdHexagram(vec2 p, float r) {\n  vec4 k=vec4(-0.5,0.8660254038,0.5773502692,1.7320508076);\n  p = abs(p);\n  p -= 2.0*min(dot(k.xy,p),0.0)*k.xy;\n  p -= 2.0*min(dot(k.yx,p),0.0)*k.yx;\n  p -= vec2(clamp(p.x,r*k.z,r*k.w),r);\n  return length(p)*sign(p.y);\n}\n\nfloat sdRhombus(vec2 p, vec2 b) {\n  vec2 q = abs(p);\n  float h = clamp((-2.0*ndot(q,b)+ndot(b,b))/dot(b,b),-1.0,1.0);\n  float d = length( q - 0.5*b*vec2(1.0-h,1.0+h) );\n  return d * sign( q.x*b.y + q.y*b.x - b.x*b.y );\n}\n\nfloat sdVesica(vec2 p, float r, float d) {\n  p = abs(p);\n  float b = sqrt(r*r-d*d); // can delay this sqrt\n  return ((p.y-b)*d>p.x*b)\n          ? length(p-vec2(0.0,b))\n          : length(p-vec2(-d,0.0))-r;\n}";
var precisionRegExp = /precision\s+(high|low|medium)p\s+float/;
var globalDefaultprecision = '#ifdef GL_FRAGMENT_PRECISION_HIGH\n precision highp float;\n #else\n precision mediump float;\n#endif\n';
var includeRegExp = /#pragma include (["^+"]?["\ "[a-zA-Z_0-9](.*)"]*?)/g;
var ShaderModuleService = (_dec = (0, _inversify.injectable)(), _dec(_class = (_temp = /*#__PURE__*/function () {
  function ShaderModuleService() {
    (0, _classCallCheck2.default)(this, ShaderModuleService);
    this.moduleCache = {};
    this.rawContentCache = {};
  }

  (0, _createClass2.default)(ShaderModuleService, [{
    key: "registerBuiltinModules",
    value: function registerBuiltinModules() {
      this.destroy();
      this.registerModule('picking', {
        vs: pickingVert,
        fs: pickingFrag
      });
      this.registerModule('sdf2d', {
        vs: '',
        fs: sdf2dFrag
      });
    }
  }, {
    key: "registerModule",
    value: function registerModule(moduleName, moduleParams) {
      // prevent registering the same module multiple times
      if (this.rawContentCache[moduleName]) {
        return;
      }

      var _moduleParams$vs = moduleParams.vs,
          vs = _moduleParams$vs === void 0 ? '' : _moduleParams$vs,
          _moduleParams$fs = moduleParams.fs,
          fs = _moduleParams$fs === void 0 ? '' : _moduleParams$fs,
          declaredUniforms = moduleParams.uniforms;

      var _extractUniforms = (0, _shaderModule.extractUniforms)(vs),
          extractedVS = _extractUniforms.content,
          vsUniforms = _extractUniforms.uniforms;

      var _extractUniforms2 = (0, _shaderModule.extractUniforms)(fs),
          extractedFS = _extractUniforms2.content,
          fsUniforms = _extractUniforms2.uniforms;

      this.rawContentCache[moduleName] = {
        fs: extractedFS,
        uniforms: _objectSpread(_objectSpread(_objectSpread({}, vsUniforms), fsUniforms), declaredUniforms),
        vs: extractedVS
      };
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.moduleCache = {};
      this.rawContentCache = {};
    }
  }, {
    key: "getModule",
    value: function getModule(moduleName) {
      var _this = this;

      if (this.moduleCache[moduleName]) {
        return this.moduleCache[moduleName];
      }

      var rawVS = this.rawContentCache[moduleName].vs || '';
      var rawFS = this.rawContentCache[moduleName].fs || '';

      var _this$processModule = this.processModule(rawVS, [], 'vs'),
          vs = _this$processModule.content,
          vsIncludeList = _this$processModule.includeList;

      var _this$processModule2 = this.processModule(rawFS, [], 'fs'),
          fs = _this$processModule2.content,
          fsIncludeList = _this$processModule2.includeList;

      var compiledFs = fs; // TODO: extract uniforms and their default values from GLSL

      var uniforms = (0, _uniq.uniq)(vsIncludeList.concat(fsIncludeList).concat(moduleName)).reduce(function (prev, cur) {
        return _objectSpread(_objectSpread({}, prev), _this.rawContentCache[cur].uniforms);
      }, {});
      /**
       * set default precision for fragment shader
       * https://stackoverflow.com/questions/28540290/why-it-is-necessary-to-set-precision-for-the-fragment-shader
       */

      if (!precisionRegExp.test(fs)) {
        compiledFs = globalDefaultprecision + fs;
      }

      this.moduleCache[moduleName] = {
        fs: compiledFs.trim(),
        uniforms: uniforms,
        vs: vs.trim()
      };
      return this.moduleCache[moduleName];
    }
  }, {
    key: "processModule",
    value: function processModule(rawContent, includeList, type) {
      var _this2 = this;

      var compiled = rawContent.replace(includeRegExp, function (_, strMatch) {
        var includeOpt = strMatch.split(' ');
        var includeName = includeOpt[0].replace(/"/g, '');

        if (includeList.indexOf(includeName) > -1) {
          return '';
        }

        var txt = _this2.rawContentCache[includeName][type];
        includeList.push(includeName);

        var _this2$processModule = _this2.processModule(txt || '', includeList, type),
            content = _this2$processModule.content;

        return content;
      });
      return {
        content: compiled,
        includeList: includeList
      };
    }
  }]);
  return ShaderModuleService;
}(), _temp)) || _class);
exports.default = ShaderModuleService;
//# sourceMappingURL=ShaderModuleService.js.map
}, function(modId) { var map = {"../../utils/shader-module":1679470356476,"../../utils/uniq":1679470356477}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356476, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUniformLengthByType = getUniformLengthByType;
exports.extractUniforms = extractUniforms;

function getUniformLengthByType(type) {
  var arrayLength = 0;

  switch (type) {
    case 'vec2':
    case 'ivec2':
      arrayLength = 2;
      break;

    case 'vec3':
    case 'ivec3':
      arrayLength = 3;
      break;

    case 'vec4':
    case 'ivec4':
    case 'mat2':
      arrayLength = 4;
      break;

    case 'mat3':
      arrayLength = 9;
      break;

    case 'mat4':
      arrayLength = 16;
      break;

    default:
  }

  return arrayLength;
}

var uniformRegExp = /uniform\s+(bool|float|int|vec2|vec3|vec4|ivec2|ivec3|ivec4|mat2|mat3|mat4|sampler2D|samplerCube)\s+([\s\S]*?);/g;

function extractUniforms(content) {
  var uniforms = {};
  content = content.replace(uniformRegExp, function (_, type, c) {
    var defaultValues = c.split(':');
    var uniformName = defaultValues[0].trim();
    var defaultValue = '';

    if (defaultValues.length > 1) {
      defaultValue = defaultValues[1].trim();
    } // set default value for uniform according to its type
    // eg. vec2 u -> [0.0, 0.0]


    switch (type) {
      case 'bool':
        defaultValue = defaultValue === 'true';
        break;

      case 'float':
      case 'int':
        defaultValue = Number(defaultValue);
        break;

      case 'vec2':
      case 'vec3':
      case 'vec4':
      case 'ivec2':
      case 'ivec3':
      case 'ivec4':
      case 'mat2':
      case 'mat3':
      case 'mat4':
        if (defaultValue) {
          defaultValue = defaultValue.replace('[', '').replace(']', '').split(',').reduce(function (prev, cur) {
            prev.push(Number(cur.trim()));
            return prev;
          }, []);
        } else {
          defaultValue = new Array(getUniformLengthByType(type)).fill(0);
        }

        break;

      default:
    } // @ts-ignore


    uniforms[uniformName] = defaultValue;
    return "uniform ".concat(type, " ").concat(uniformName, ";\n");
  });
  return {
    content: content,
    uniforms: uniforms
  };
}
//# sourceMappingURL=shader-module.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356477, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uniq = uniq;

function uniq(array) {
  return array.filter(function (v, i, a) {
    return a.indexOf(v) === i;
  });
}
//# sourceMappingURL=uniq.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356478, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateAABBFromVertices = generateAABBFromVertices;

var _glMatrix = require("gl-matrix");

var _AABB = require("../shape/AABB");

/**
 * generate AABB with positions
 * @param positions [x1,y1,z1, x2,y2,z2]
 */
function generateAABBFromVertices(positions) {
  var aabb = new _AABB.AABB();

  var min = _glMatrix.vec3.fromValues(positions[0], positions[1], positions[2]);

  var max = _glMatrix.vec3.fromValues(positions[0], positions[1], positions[2]);

  for (var i = 3; i < positions.length;) {
    var x = positions[i++];
    var y = positions[i++];
    var z = positions[i++];

    if (x < min[0]) {
      min[0] = x;
    }

    if (y < min[1]) {
      min[1] = y;
    }

    if (z < min[2]) {
      min[2] = z;
    }

    if (x > max[0]) {
      max[0] = x;
    }

    if (y > max[1]) {
      max[1] = y;
    }

    if (z > max[2]) {
      max[2] = z;
    }
  }

  aabb.setMinMax(min, max);
  return aabb;
}
//# sourceMappingURL=aabb.js.map
}, function(modId) { var map = {"../shape/AABB":1679470356457}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356479, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSafari = void 0;
var isSafari = typeof navigator !== 'undefined' && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent);
exports.isSafari = isSafari;
//# sourceMappingURL=isSafari.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356480, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require("./config");

Object.keys(_config).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _config[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _config[key];
    }
  });
});

var _interactor = require("./interactor");

Object.keys(_interactor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _interactor[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _interactor[key];
    }
  });
});

var _shaderModule = require("./shader-module");

Object.keys(_shaderModule).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _shaderModule[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _shaderModule[key];
    }
  });
});
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"./config":1679470356481,"./interactor":1679470356482,"./shader-module":1679470356483}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356481, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ConfigService = require("./ConfigService");

Object.keys(_ConfigService).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ConfigService[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ConfigService[key];
    }
  });
});
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"./ConfigService":1679470356473}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356482, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _IteractorService = require("./IteractorService");

Object.keys(_IteractorService).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IteractorService[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IteractorService[key];
    }
  });
});
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"./IteractorService":1679470356474}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356483, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ShaderModuleService = require("./ShaderModuleService");

Object.keys(_ShaderModuleService).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ShaderModuleService[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ShaderModuleService[key];
    }
  });
});
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"./ShaderModuleService":1679470356475}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356484, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AABB = require("./AABB");

Object.keys(_AABB).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AABB[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _AABB[key];
    }
  });
});

var _BoundingSphere = require("./BoundingSphere");

Object.keys(_BoundingSphere).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BoundingSphere[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _BoundingSphere[key];
    }
  });
});

var _Frustum = require("./Frustum");

Object.keys(_Frustum).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Frustum[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Frustum[key];
    }
  });
});

var _Plane = require("./Plane");

Object.keys(_Plane).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Plane[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Plane[key];
    }
  });
});

var _Ray = require("./Ray");

Object.keys(_Ray).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Ray[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Ray[key];
    }
  });
});
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"./AABB":1679470356457,"./BoundingSphere":1679470356485,"./Frustum":1679470356459,"./Plane":1679470356460,"./Ray":1679470356486}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356485, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoundingSphere = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _glMatrix = require("gl-matrix");

var tmpVecA = _glMatrix.vec3.create();

var BoundingSphere = /*#__PURE__*/function () {
  function BoundingSphere(center, radius) {
    (0, _classCallCheck2.default)(this, BoundingSphere);
    this.center = void 0;
    this.radius = void 0;
    this.center = center || _glMatrix.vec3.create();
    this.radius = radius || 0.5;
  }

  (0, _createClass2.default)(BoundingSphere, [{
    key: "containsPoint",
    value: function containsPoint(point) {
      _glMatrix.vec3.sub(tmpVecA, point, this.center);

      return _glMatrix.vec3.length(tmpVecA) < this.radius * this.radius;
    }
  }, {
    key: "intersects",
    value: function intersects(sphere) {
      _glMatrix.vec3.sub(tmpVecA, sphere.center, this.center);

      var totalRadius = sphere.radius + this.radius;

      if (_glMatrix.vec3.length(tmpVecA) <= totalRadius * totalRadius) {
        return true;
      }

      return false;
    }
  }]);
  return BoundingSphere;
}();

exports.BoundingSphere = BoundingSphere;
//# sourceMappingURL=BoundingSphere.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356486, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ray = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _glMatrix = require("gl-matrix");

var tmpVecA = _glMatrix.vec3.create();

var tmpVecB = _glMatrix.vec3.create();

var tmpVecC = _glMatrix.vec3.create();

var tmpVecD = _glMatrix.vec3.create();

var tmpVecE = _glMatrix.vec3.create();
/**
 * 包含求交方法：
 * * intersectsShape(Shape, intersection) 返回交点和求交结果
 * @see https://github.com/playcanvas/engine/blob/master/src/shape/bounding-box.js#L161
 * @see https://github.com/mrdoob/three.js/blob/dev/src/math/Ray.js
 */


var Ray = /*#__PURE__*/function () {
  function Ray(origin, direction) {
    (0, _classCallCheck2.default)(this, Ray);
    this.origin = void 0;
    this.direction = void 0;
    this.origin = origin || _glMatrix.vec3.create();
    this.direction = direction || _glMatrix.vec3.fromValues(0, 0, -1);
  }

  (0, _createClass2.default)(Ray, [{
    key: "intersectsAABB",
    value: function intersectsAABB(aabb, intersection) {
      return intersection ? this.intersectAABBWithIntersection(aabb, intersection) : this.intersectsAABBWithoutIntersection(aabb);
    }
  }, {
    key: "intersectsSphere",
    value: function intersectsSphere(sphere, intersection) {
      var m = _glMatrix.vec3.sub(tmpVecA, this.origin, sphere.center);

      _glMatrix.vec3.normalize(tmpVecB, _glMatrix.vec3.copy(tmpVecB, this.direction));

      var b = _glMatrix.vec3.dot(m, tmpVecB);

      var c = _glMatrix.vec3.dot(m, m) - sphere.radius * sphere.radius; // exit if ray's origin outside of sphere (c > 0) and ray pointing away from s (b > 0)

      if (c > 0 && b > 0) {
        return null;
      }

      var discr = b * b - c; // a negative discriminant corresponds to ray missing sphere

      if (discr < 0) {
        return false;
      } // ray intersects sphere, compute smallest t value of intersection


      var t = Math.abs(-b - Math.sqrt(discr)); // if t is negative, ray started inside sphere so clamp t to zero

      if (intersection) {
        _glMatrix.vec3.copy(intersection, this.direction);

        _glMatrix.vec3.scaleAndAdd(intersection, this.origin, intersection, t);
      }

      return true;
    }
  }, {
    key: "intersectsPlane",
    value: function intersectsPlane(plane, intersection) {
      var t = (plane.distance - _glMatrix.vec3.dot(plane.normal, this.origin)) / _glMatrix.vec3.dot(plane.normal, this.direction);

      var intersects = t >= 0;

      if (intersects && intersection) {
        _glMatrix.vec3.scaleAndAdd(intersection, this.origin, this.direction, t);
      }

      return intersects;
    }
    /**
     * faster than implements like Three.js
     * @see https://github.com/playcanvas/engine/blob/master/src/shape/bounding-box.js#L161
     */

  }, {
    key: "intersectsAABBWithoutIntersection",
    value: function intersectsAABBWithoutIntersection(aabb) {
      var diff = tmpVecA;
      var cross = tmpVecB;
      var prod = tmpVecC;
      var absDiff = tmpVecD;
      var absDir = tmpVecE;
      var rayDir = this.direction;

      _glMatrix.vec3.sub(diff, this.origin, aabb.center);

      _glMatrix.vec3.set(absDiff, Math.abs(diff[0]), Math.abs(diff[1]), Math.abs(diff[2]));

      _glMatrix.vec3.mul(prod, diff, rayDir);

      if (absDiff[0] > aabb.halfExtents[0] && prod[0] >= 0 || absDiff[1] > aabb.halfExtents[1] && prod[1] >= 0 || absDiff[2] > aabb.halfExtents[2] && prod[2] >= 0) {
        return false;
      }

      _glMatrix.vec3.set(absDir, Math.abs(rayDir[0]), Math.abs(rayDir[1]), Math.abs(rayDir[2]));

      _glMatrix.vec3.cross(cross, rayDir, diff);

      _glMatrix.vec3.set(cross, Math.abs(cross[0]), Math.abs(cross[1]), Math.abs(cross[2]));

      return !(cross[0] > aabb.halfExtents[1] * absDir[2] + aabb.halfExtents[2] * absDir[1] || cross[1] > aabb.halfExtents[0] * absDir[2] + aabb.halfExtents[2] * absDir[0] || cross[2] > aabb.halfExtents[0] * absDir[1] + aabb.halfExtents[1] * absDir[0]);
    }
  }, {
    key: "intersectAABBWithIntersection",
    value: function intersectAABBWithIntersection(aabb, intersection) {
      var tMin = _glMatrix.vec3.copy(_glMatrix.vec3.create(), aabb.getMin());

      _glMatrix.vec3.sub(tMin, tMin, this.origin);

      var tMax = _glMatrix.vec3.copy(_glMatrix.vec3.create(), aabb.getMax());

      _glMatrix.vec3.sub(tMax, tMax, this.origin);

      var dir = this.direction; // Ensure that we are not dividing it by zero

      if (dir[0] === 0) {
        tMin[0] = tMin[0] < 0 ? -Number.MAX_VALUE : Number.MAX_VALUE;
        tMax[0] = tMax[0] < 0 ? -Number.MAX_VALUE : Number.MAX_VALUE;
      } else {
        tMin[0] /= dir[0];
        tMax[0] /= dir[0];
      }

      if (dir[1] === 0) {
        tMin[1] = tMin[1] < 0 ? -Number.MAX_VALUE : Number.MAX_VALUE;
        tMax[1] = tMax[1] < 0 ? -Number.MAX_VALUE : Number.MAX_VALUE;
      } else {
        tMin[1] /= dir[1];
        tMax[1] /= dir[1];
      }

      if (dir[2] === 0) {
        tMin[2] = tMin[2] < 0 ? -Number.MAX_VALUE : Number.MAX_VALUE;
        tMax[2] = tMax[2] < 0 ? -Number.MAX_VALUE : Number.MAX_VALUE;
      } else {
        tMin[2] /= dir[2];
        tMax[2] /= dir[2];
      }

      var realMin = _glMatrix.vec3.set(tmpVecC, Math.min(tMin[0], tMax[0]), Math.min(tMin[1], tMax[1]), Math.min(tMin[2], tMax[2]));

      var realMax = _glMatrix.vec3.set(tmpVecD, Math.max(tMin[0], tMax[0]), Math.max(tMin[1], tMax[1]), Math.max(tMin[2], tMax[2]));

      var minMax = Math.min(Math.min(realMax[0], realMax[1]), realMax[2]);
      var maxMin = Math.max(Math.max(realMin[0], realMin[1]), realMin[2]);
      var intersects = minMax >= maxMin && maxMin >= 0;

      if (intersects) {
        _glMatrix.vec3.copy(intersection, this.direction);

        _glMatrix.vec3.scaleAndAdd(intersection, this.origin, intersection, maxMin);
      }

      return intersects;
    }
  }]);
  return Ray;
}();

exports.Ray = Ray;
//# sourceMappingURL=Ray.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356487, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gl = require("./gl");

Object.keys(_gl).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _gl[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _gl[key];
    }
  });
});

var _IAttribute = require("./IAttribute");

Object.keys(_IAttribute).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IAttribute[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IAttribute[key];
    }
  });
});

var _IBuffer = require("./IBuffer");

Object.keys(_IBuffer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IBuffer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IBuffer[key];
    }
  });
});

var _IComputeModel = require("./IComputeModel");

Object.keys(_IComputeModel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IComputeModel[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IComputeModel[key];
    }
  });
});

var _IElements = require("./IElements");

Object.keys(_IElements).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IElements[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IElements[key];
    }
  });
});

var _IFramebuffer = require("./IFramebuffer");

Object.keys(_IFramebuffer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IFramebuffer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IFramebuffer[key];
    }
  });
});

var _IModel = require("./IModel");

Object.keys(_IModel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IModel[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IModel[key];
    }
  });
});

var _IMultiPassRenderer = require("./IMultiPassRenderer");

Object.keys(_IMultiPassRenderer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IMultiPassRenderer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IMultiPassRenderer[key];
    }
  });
});

var _IRenderbuffer = require("./IRenderbuffer");

Object.keys(_IRenderbuffer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IRenderbuffer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IRenderbuffer[key];
    }
  });
});

var _IRendererService = require("./IRendererService");

Object.keys(_IRendererService).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IRendererService[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IRendererService[key];
    }
  });
});

var _ITexture2D = require("./ITexture2D");

Object.keys(_ITexture2D).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ITexture2D[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ITexture2D[key];
    }
  });
});

var _IUniform = require("./IUniform");

Object.keys(_IUniform).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IUniform[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IUniform[key];
    }
  });
});
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"./gl":1679470356452,"./IAttribute":1679470356488,"./IBuffer":1679470356489,"./IComputeModel":1679470356490,"./IElements":1679470356491,"./IFramebuffer":1679470356492,"./IModel":1679470356493,"./IMultiPassRenderer":1679470356494,"./IRenderbuffer":1679470356495,"./IRendererService":1679470356496,"./ITexture2D":1679470356497,"./IUniform":1679470356498}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356488, function(require, module, exports) {

//# sourceMappingURL=IAttribute.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356489, function(require, module, exports) {

//# sourceMappingURL=IBuffer.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356490, function(require, module, exports) {

//# sourceMappingURL=IComputeModel.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356491, function(require, module, exports) {

//# sourceMappingURL=IElements.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356492, function(require, module, exports) {

//# sourceMappingURL=IFramebuffer.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356493, function(require, module, exports) {

//# sourceMappingURL=IModel.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356494, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PassType = void 0;
var PassType;
/**
 * Pass 分两类：
 * 1. 渲染相关 eg. ClearPass、RenderPass、PickingPass、ShadowPass
 * 2. PostProcessing eg. CopyPass、BlurPass
 * 另外考虑到 Pass 之间严格的执行顺序，render 方法必须是异步的
 */

exports.PassType = PassType;

(function (PassType) {
  PassType["Normal"] = "normal";
  PassType["PostProcessing"] = "post-processing";
})(PassType || (exports.PassType = PassType = {}));
//# sourceMappingURL=IMultiPassRenderer.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356495, function(require, module, exports) {

//# sourceMappingURL=IRenderbuffer.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356496, function(require, module, exports) {

//# sourceMappingURL=IRendererService.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356497, function(require, module, exports) {

//# sourceMappingURL=ITexture2D.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356498, function(require, module, exports) {

//# sourceMappingURL=IUniform.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356499, function(require, module, exports) {

//# sourceMappingURL=interface.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356500, function(require, module, exports) {

//# sourceMappingURL=interface.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1679470356438);
})()
//miniprogram-npm-outsideDeps=["reflect-metadata","@babel/runtime/helpers/interopRequireDefault","@babel/runtime/regenerator","@babel/runtime/helpers/asyncToGenerator","@babel/runtime/helpers/createClass","@babel/runtime/helpers/classCallCheck","@babel/runtime/helpers/slicedToArray","@babel/runtime/helpers/initializerDefineProperty","@babel/runtime/helpers/applyDecoratedDescriptor","@babel/runtime/helpers/initializerWarningHelper","inversify","@babel/runtime/helpers/inherits","@babel/runtime/helpers/possibleConstructorReturn","@babel/runtime/helpers/getPrototypeOf","@babel/runtime/helpers/defineProperty","@babel/runtime/helpers/assertThisInitialized","gl-matrix","@babel/runtime/helpers/typeof","inversify-inject-decorators"]
//# sourceMappingURL=index.js.map