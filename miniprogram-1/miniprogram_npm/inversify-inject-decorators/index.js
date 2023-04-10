module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1679470356954, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("./decorators");
function getDecorators(container, doCache) {
    if (doCache === void 0) { doCache = true; }
    var lazyInject = decorators_1.makePropertyInjectDecorator(container, doCache);
    var lazyInjectNamed = decorators_1.makePropertyInjectNamedDecorator(container, doCache);
    var lazyInjectTagged = decorators_1.makePropertyInjectTaggedDecorator(container, doCache);
    var lazyMultiInject = decorators_1.makePropertyMultiInjectDecorator(container, doCache);
    return {
        lazyInject: lazyInject,
        lazyInjectNamed: lazyInjectNamed,
        lazyInjectTagged: lazyInjectTagged,
        lazyMultiInject: lazyMultiInject
    };
}
exports.default = getDecorators;

}, function(modId) {var map = {"./decorators":1679470356955}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356955, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var INJECTION = Symbol.for("INJECTION");
function _proxyGetter(proto, key, resolve, doCache) {
    function getter() {
        if (doCache && !Reflect.hasMetadata(INJECTION, this, key)) {
            Reflect.defineMetadata(INJECTION, resolve(), this, key);
        }
        if (Reflect.hasMetadata(INJECTION, this, key)) {
            return Reflect.getMetadata(INJECTION, this, key);
        }
        else {
            return resolve();
        }
    }
    function setter(newVal) {
        Reflect.defineMetadata(INJECTION, newVal, this, key);
    }
    Object.defineProperty(proto, key, {
        configurable: true,
        enumerable: true,
        get: getter,
        set: setter
    });
}
function makePropertyInjectDecorator(container, doCache) {
    return function (serviceIdentifier) {
        return function (proto, key) {
            var resolve = function () {
                return container.get(serviceIdentifier);
            };
            _proxyGetter(proto, key, resolve, doCache);
        };
    };
}
exports.makePropertyInjectDecorator = makePropertyInjectDecorator;
function makePropertyInjectNamedDecorator(container, doCache) {
    return function (serviceIdentifier, named) {
        return function (proto, key) {
            var resolve = function () {
                return container.getNamed(serviceIdentifier, named);
            };
            _proxyGetter(proto, key, resolve, doCache);
        };
    };
}
exports.makePropertyInjectNamedDecorator = makePropertyInjectNamedDecorator;
function makePropertyInjectTaggedDecorator(container, doCache) {
    return function (serviceIdentifier, key, value) {
        return function (proto, propertyName) {
            var resolve = function () {
                return container.getTagged(serviceIdentifier, key, value);
            };
            _proxyGetter(proto, propertyName, resolve, doCache);
        };
    };
}
exports.makePropertyInjectTaggedDecorator = makePropertyInjectTaggedDecorator;
function makePropertyMultiInjectDecorator(container, doCache) {
    return function (serviceIdentifier) {
        return function (proto, key) {
            var resolve = function () {
                return container.getAll(serviceIdentifier);
            };
            _proxyGetter(proto, key, resolve, doCache);
        };
    };
}
exports.makePropertyMultiInjectDecorator = makePropertyMultiInjectDecorator;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1679470356954);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map