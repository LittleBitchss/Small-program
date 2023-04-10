module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1679470356557, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLayoutByName = exports.unRegisterLayout = exports.registerLayout = void 0;
var registy_1 = require("./registy");
Object.defineProperty(exports, "registerLayout", { enumerable: true, get: function () { return registy_1.registerLayout; } });
Object.defineProperty(exports, "unRegisterLayout", { enumerable: true, get: function () { return registy_1.unRegisterLayout; } });
Object.defineProperty(exports, "getLayoutByName", { enumerable: true, get: function () { return registy_1.getLayoutByName; } });
// layout, layout types file, worker
__exportStar(require("./layout"), exports);
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {"./registy":1679470356558,"./layout":1679470356567}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356558, function(require, module, exports) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLayoutByName = exports.unRegisterLayout = exports.registerLayout = void 0;
var base_1 = require("../layout/base");
var util_1 = require("../util");
var map = new Map();
var registerLayout = function (name, layoutOverride) {
    if (map.get(name)) {
        console.warn("The layout with the name " + name + " exists already, it will be overridden");
    }
    if (util_1.isObject(layoutOverride)) {
        // tslint:disable-next-line: max-classes-per-file
        var GLayout = /** @class */ (function (_super) {
            __extends(GLayout, _super);
            function GLayout(cfg) {
                var _this = _super.call(this) || this;
                var self = _this;
                var props = {};
                var defaultCfg = self.getDefaultCfg();
                Object.assign(props, defaultCfg, layoutOverride, cfg);
                Object.keys(props).forEach(function (key) {
                    var value = props[key];
                    self[key] = value;
                });
                return _this;
            }
            return GLayout;
        }(base_1.Base));
        map.set(name, GLayout);
    }
    else {
        map.set(name, layoutOverride);
    }
};
exports.registerLayout = registerLayout;
var unRegisterLayout = function (name) {
    if (map.has(name)) {
        map.delete(name);
    }
};
exports.unRegisterLayout = unRegisterLayout;
var getLayoutByName = function (name) {
    if (map.has(name)) {
        return map.get(name);
    }
    return null;
};
exports.getLayoutByName = getLayoutByName;
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"../layout/base":1679470356559,"../util":1679470356560}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356559, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
var Base = /** @class */ (function () {
    function Base() {
        this.nodes = [];
        this.edges = [];
        this.combos = [];
        this.positions = [];
        this.destroyed = false;
        this.onLayoutEnd = function () { };
    }
    Base.prototype.layout = function (data) {
        this.init(data);
        return this.execute(true);
    };
    Base.prototype.init = function (data) {
        this.nodes = data.nodes || [];
        this.edges = data.edges || [];
        this.combos = data.combos || [];
    };
    Base.prototype.execute = function (reloadData) { };
    Base.prototype.executeWithWorker = function () { };
    Base.prototype.getDefaultCfg = function () {
        return {};
    };
    Base.prototype.updateCfg = function (cfg) {
        if (cfg) {
            Object.assign(this, cfg);
        }
    };
    Base.prototype.getType = function () {
        return 'base';
    };
    Base.prototype.destroy = function () {
        this.nodes = null;
        this.edges = null;
        this.combos = null;
        this.positions = null;
        this.destroyed = true;
    };
    return Base;
}());
exports.Base = Base;
//# sourceMappingURL=base.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356560, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./string"), exports);
__exportStar(require("./array"), exports);
__exportStar(require("./number"), exports);
__exportStar(require("./math"), exports);
__exportStar(require("./object"), exports);
__exportStar(require("./function"), exports);
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"./string":1679470356561,"./array":1679470356562,"./number":1679470356563,"./math":1679470356564,"./object":1679470356565,"./function":1679470356566}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356561, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.camelize = exports.isString = void 0;
var isString = function (val) { return typeof val === 'string'; };
exports.isString = isString;
var cacheStringFunction = function (fn) {
    var cache = Object.create(null);
    return (function (str) {
        var hit = cache[str];
        return hit || (cache[str] = fn(str));
    });
};
var camelizeRE = /-(\w)/g;
exports.camelize = cacheStringFunction(function (str) {
    return str.replace(camelizeRE, function (_, c) { return (c ? c.toUpperCase() : ''); });
});
// export const capitalize = cacheStringFunction(
//   (str: string) => str.charAt(0).toUpperCase() + str.slice(1),
// )
//# sourceMappingURL=string.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356562, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = void 0;
exports.isArray = Array.isArray;
//# sourceMappingURL=array.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356563, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.toNumber = exports.isNaN = exports.isNumber = void 0;
var isNumber = function (val) { return typeof val === 'number'; };
exports.isNumber = isNumber;
var isNaN = function (num) { return Number.isNaN(Number(num)); };
exports.isNaN = isNaN;
var toNumber = function (val) {
    var n = parseFloat(val);
    return exports.isNaN(n) ? val : n;
};
exports.toNumber = toNumber;
//# sourceMappingURL=number.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356564, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.traverseTreeUp = exports.scaleMatrix = exports.getAdjMatrix = exports.floydWarshall = exports.getDegree = void 0;
var getDegree = function (n, nodeIdxMap, edges) {
    var degrees = [];
    for (var i = 0; i < n; i++) {
        degrees[i] = 0;
    }
    if (!edges)
        return degrees;
    edges.forEach(function (e) {
        if (e.source) {
            degrees[nodeIdxMap[e.source]] += 1;
        }
        if (e.target) {
            degrees[nodeIdxMap[e.target]] += 1;
        }
    });
    return degrees;
};
exports.getDegree = getDegree;
var floydWarshall = function (adjMatrix) {
    // initialize
    var dist = [];
    var size = adjMatrix.length;
    for (var i = 0; i < size; i += 1) {
        dist[i] = [];
        for (var j = 0; j < size; j += 1) {
            if (i === j) {
                dist[i][j] = 0;
            }
            else if (adjMatrix[i][j] === 0 || !adjMatrix[i][j]) {
                dist[i][j] = Infinity;
            }
            else {
                dist[i][j] = adjMatrix[i][j];
            }
        }
    }
    // floyd
    for (var k = 0; k < size; k += 1) {
        for (var i = 0; i < size; i += 1) {
            for (var j = 0; j < size; j += 1) {
                if (dist[i][j] > dist[i][k] + dist[k][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    return dist;
};
exports.floydWarshall = floydWarshall;
var getAdjMatrix = function (data, directed) {
    var nodes = data.nodes, edges = data.edges;
    var matrix = [];
    // map node with index in data.nodes
    var nodeMap = {};
    if (!nodes) {
        throw new Error('invalid nodes data!');
    }
    if (nodes) {
        nodes.forEach(function (node, i) {
            nodeMap[node.id] = i;
            var row = [];
            matrix.push(row);
        });
    }
    if (edges) {
        edges.forEach(function (e) {
            var source = e.source, target = e.target;
            var sIndex = nodeMap[source];
            var tIndex = nodeMap[target];
            matrix[sIndex][tIndex] = 1;
            if (!directed) {
                matrix[tIndex][sIndex] = 1;
            }
        });
    }
    return matrix;
};
exports.getAdjMatrix = getAdjMatrix;
/**
 * scale matrix
 * @param matrix [ [], [], [] ]
 * @param ratio
 */
var scaleMatrix = function (matrix, ratio) {
    var result = [];
    matrix.forEach(function (row) {
        var newRow = [];
        row.forEach(function (v) {
            newRow.push(v * ratio);
        });
        result.push(newRow);
    });
    return result;
};
exports.scaleMatrix = scaleMatrix;
/**
 * depth first traverse, from leaves to root, children in inverse order
 *  if the fn returns false, terminate the traverse
 */
var traverseUp = function (data, fn) {
    if (data && data.children) {
        for (var i = data.children.length - 1; i >= 0; i--) {
            if (!traverseUp(data.children[i], fn))
                return;
        }
    }
    if (!fn(data)) {
        return false;
    }
    return true;
};
/**
 * depth first traverse, from leaves to root, children in inverse order
 * if the fn returns false, terminate the traverse
 */
var traverseTreeUp = function (data, fn) {
    if (typeof fn !== 'function') {
        return;
    }
    traverseUp(data, fn);
};
exports.traverseTreeUp = traverseTreeUp;
//# sourceMappingURL=math.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356565, function(require, module, exports) {

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clone = exports.isObject = void 0;
var isObject = function (val) {
    return val !== null && typeof val === 'object';
};
exports.isObject = isObject;
var clone = function (target) {
    if (target === null) {
        return target;
    }
    if (target instanceof Date) {
        return new Date(target.getTime());
    }
    if (target instanceof Array) {
        var cp_1 = [];
        target.forEach(function (v) {
            cp_1.push(v);
        });
        return cp_1.map(function (n) { return exports.clone(n); });
    }
    if (typeof target === 'object' && target !== {}) {
        var cp_2 = __assign({}, target);
        Object.keys(cp_2).forEach(function (k) {
            cp_2[k] = exports.clone(cp_2[k]);
        });
        return cp_2;
    }
    return target;
};
exports.clone = clone;
//# sourceMappingURL=object.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356566, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.isFunction = void 0;
var isFunction = function (val) {
    return typeof val === 'function';
};
exports.isFunction = isFunction;
//# sourceMappingURL=function.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356567, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForceAtlas2Layout = exports.ComboForceLayout = exports.GForceGPULayout = exports.FruchtermanGPULayout = exports.FruchtermanLayout = exports.MDSLayout = exports.ConcentricLayout = exports.RadialLayout = exports.DagreLayout = exports.CircularLayout = exports.ForceLayout = exports.GForceLayout = exports.RandomLayout = exports.GridLayout = exports.Layouts = exports.Layout = void 0;
var grid_1 = require("./grid");
Object.defineProperty(exports, "GridLayout", { enumerable: true, get: function () { return grid_1.GridLayout; } });
var random_1 = require("./random");
Object.defineProperty(exports, "RandomLayout", { enumerable: true, get: function () { return random_1.RandomLayout; } });
var gForce_1 = require("./gForce");
Object.defineProperty(exports, "GForceLayout", { enumerable: true, get: function () { return gForce_1.GForceLayout; } });
var force_1 = require("./force");
Object.defineProperty(exports, "ForceLayout", { enumerable: true, get: function () { return force_1.ForceLayout; } });
var circular_1 = require("./circular");
Object.defineProperty(exports, "CircularLayout", { enumerable: true, get: function () { return circular_1.CircularLayout; } });
var dagre_1 = require("./dagre");
Object.defineProperty(exports, "DagreLayout", { enumerable: true, get: function () { return dagre_1.DagreLayout; } });
var radial_1 = require("./radial");
Object.defineProperty(exports, "RadialLayout", { enumerable: true, get: function () { return radial_1.RadialLayout; } });
var concentric_1 = require("./concentric");
Object.defineProperty(exports, "ConcentricLayout", { enumerable: true, get: function () { return concentric_1.ConcentricLayout; } });
var mds_1 = require("./mds");
Object.defineProperty(exports, "MDSLayout", { enumerable: true, get: function () { return mds_1.MDSLayout; } });
var fruchterman_1 = require("./fruchterman");
Object.defineProperty(exports, "FruchtermanLayout", { enumerable: true, get: function () { return fruchterman_1.FruchtermanLayout; } });
var fruchterman_2 = require("./gpu/fruchterman");
Object.defineProperty(exports, "FruchtermanGPULayout", { enumerable: true, get: function () { return fruchterman_2.FruchtermanGPULayout; } });
var gForce_2 = require("./gpu/gForce");
Object.defineProperty(exports, "GForceGPULayout", { enumerable: true, get: function () { return gForce_2.GForceGPULayout; } });
var comboForce_1 = require("./comboForce");
Object.defineProperty(exports, "ComboForceLayout", { enumerable: true, get: function () { return comboForce_1.ComboForceLayout; } });
var forceAtlas2_1 = require("./forceAtlas2");
Object.defineProperty(exports, "ForceAtlas2Layout", { enumerable: true, get: function () { return forceAtlas2_1.ForceAtlas2Layout; } });
var layout_1 = require("./layout");
Object.defineProperty(exports, "Layout", { enumerable: true, get: function () { return layout_1.Layout; } });
Object.defineProperty(exports, "Layouts", { enumerable: true, get: function () { return layout_1.Layouts; } });
// types file
__exportStar(require("./types"), exports);
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"./grid":1679470356568,"./random":1679470356569,"./gForce":1679470356570,"./force":1679470356571,"./circular":1679470356575,"./dagre":1679470356576,"./radial":1679470356577,"./concentric":1679470356581,"./mds":1679470356582,"./fruchterman":1679470356583,"./gpu/fruchterman":1679470356584,"./gpu/gForce":1679470356587,"./comboForce":1679470356589,"./forceAtlas2":1679470356590,"./layout":1679470356594,"./types":1679470356595}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356568, function(require, module, exports) {

/**
 * @fileOverview grid layout
 * @author shiwu.wyy@antfin.com
 * this algorithm refers to <cytoscape.js> - https://github.com/cytoscape/cytoscape.js/
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridLayout = void 0;
var util_1 = require("../util");
var base_1 = require("./base");
/**
 * 网格布局
 */
var GridLayout = /** @class */ (function (_super) {
    __extends(GridLayout, _super);
    function GridLayout(options) {
        var _this = _super.call(this) || this;
        /** 布局起始点 */
        _this.begin = [0, 0];
        /** prevents node overlap, may overflow boundingBox if not enough space */
        _this.preventOverlap = true;
        /** extra spacing around nodes when preventOverlap: true */
        _this.preventOverlapPadding = 10;
        /** uses all available space on false, uses minimal space on true */
        _this.condense = false;
        /** a sorting function to order the nodes; e.g. function(a, b){ return a.datapublic ('weight') - b.data('weight') } */
        _this.sortBy = "degree";
        _this.nodeSize = 30;
        _this.nodes = [];
        _this.edges = [];
        _this.width = 300;
        _this.height = 300;
        _this.row = 0;
        _this.col = 0;
        _this.cellWidth = 0;
        _this.cellHeight = 0;
        _this.cellUsed = {};
        _this.id2manPos = {};
        /** 迭代结束的回调函数 */
        _this.onLayoutEnd = function () { };
        _this.updateCfg(options);
        return _this;
    }
    GridLayout.prototype.getDefaultCfg = function () {
        return {
            begin: [0, 0],
            preventOverlap: true,
            preventOverlapPadding: 10,
            condense: false,
            rows: undefined,
            cols: undefined,
            position: undefined,
            sortBy: "degree",
            nodeSize: 30
        };
    };
    /**
     * 执行布局
     */
    GridLayout.prototype.execute = function () {
        var self = this;
        var nodes = self.nodes;
        var n = nodes.length;
        var begin = self.begin;
        if (n === 0) {
            if (self.onLayoutEnd)
                self.onLayoutEnd();
            return;
        }
        if (n === 1) {
            nodes[0].x = begin[0];
            nodes[0].y = begin[1];
            if (self.onLayoutEnd)
                self.onLayoutEnd();
            return;
        }
        var edges = self.edges;
        var layoutNodes = [];
        nodes.forEach(function (node) {
            layoutNodes.push(node);
        });
        var nodeIdxMap = {};
        layoutNodes.forEach(function (node, i) {
            nodeIdxMap[node.id] = i;
        });
        if (self.sortBy === "degree" ||
            !util_1.isString(self.sortBy) ||
            layoutNodes[0][self.sortBy] === undefined) {
            self.sortBy = "degree";
            if (util_1.isNaN(nodes[0].degree)) {
                var values_1 = util_1.getDegree(layoutNodes.length, nodeIdxMap, edges);
                layoutNodes.forEach(function (node, i) {
                    node.degree = values_1[i];
                });
            }
        }
        // sort nodes by value
        layoutNodes.sort(function (n1, n2) { return n2[self.sortBy] - n1[self.sortBy]; });
        if (!self.width && typeof window !== "undefined") {
            self.width = window.innerWidth;
        }
        if (!self.height && typeof window !== "undefined") {
            self.height = window.innerHeight;
        }
        var oRows = self.rows;
        var oCols = self.cols != null ? self.cols : self.columns;
        self.cells = n;
        // if rows or columns were set in self, use those values
        if (oRows != null && oCols != null) {
            self.rows = oRows;
            self.cols = oCols;
        }
        else if (oRows != null && oCols == null) {
            self.rows = oRows;
            self.cols = Math.ceil(self.cells / self.rows);
        }
        else if (oRows == null && oCols != null) {
            self.cols = oCols;
            self.rows = Math.ceil(self.cells / self.cols);
        }
        else {
            // otherwise use the automatic values and adjust accordingly	      // otherwise use the automatic values and adjust accordingly
            // width/height * splits^2 = cells where splits is number of times to split width
            self.splits = Math.sqrt((self.cells * self.height) / self.width);
            self.rows = Math.round(self.splits);
            self.cols = Math.round((self.width / self.height) * self.splits);
        }
        if (self.cols * self.rows > self.cells) {
            // otherwise use the automatic values and adjust accordingly
            // if rounding was up, see if we can reduce rows or columns
            var sm = self.small();
            var lg = self.large();
            // reducing the small side takes away the most cells, so try it first
            if ((sm - 1) * lg >= self.cells) {
                self.small(sm - 1);
            }
            else if ((lg - 1) * sm >= self.cells) {
                self.large(lg - 1);
            }
        }
        else {
            // if rounding was too low, add rows or columns
            while (self.cols * self.rows < self.cells) {
                var sm = self.small();
                var lg = self.large();
                // try to add to larger side first (adds less in multiplication)
                if ((lg + 1) * sm >= self.cells) {
                    self.large(lg + 1);
                }
                else {
                    self.small(sm + 1);
                }
            }
        }
        self.cellWidth = self.width / self.cols;
        self.cellHeight = self.height / self.rows;
        if (self.condense) {
            self.cellWidth = 0;
            self.cellHeight = 0;
        }
        if (self.preventOverlap) {
            layoutNodes.forEach(function (node) {
                if (!node.x || !node.y) {
                    // for bb
                    node.x = 0;
                    node.y = 0;
                }
                var nodew;
                var nodeh;
                if (util_1.isArray(node.size)) {
                    nodew = node.size[0];
                    nodeh = node.size[1];
                }
                else if (util_1.isNumber(node.size)) {
                    nodew = node.size;
                    nodeh = node.size;
                }
                if (nodew === undefined || nodeh === undefined) {
                    if (util_1.isArray(self.nodeSize)) {
                        nodew = self.nodeSize[0];
                        nodeh = self.nodeSize[1];
                    }
                    else if (util_1.isNumber(self.nodeSize)) {
                        nodew = self.nodeSize;
                        nodeh = self.nodeSize;
                    }
                    else {
                        nodew = 30;
                        nodeh = 30;
                    }
                }
                var p = self.preventOverlapPadding;
                var w = nodew + p;
                var h = nodeh + p;
                self.cellWidth = Math.max(self.cellWidth, w);
                self.cellHeight = Math.max(self.cellHeight, h);
            });
        }
        self.cellUsed = {}; // e.g. 'c-0-2' => true
        // to keep track of current cell position
        self.row = 0;
        self.col = 0;
        // get a cache of all the manual positions
        self.id2manPos = {};
        for (var i = 0; i < layoutNodes.length; i++) {
            var node = layoutNodes[i];
            var rcPos = void 0;
            if (self.position) {
                rcPos = self.position(node);
            }
            if (rcPos && (rcPos.row !== undefined || rcPos.col !== undefined)) {
                // must have at least row or col def'd
                var pos = {
                    row: rcPos.row,
                    col: rcPos.col
                };
                if (pos.col === undefined) {
                    // find unused col
                    pos.col = 0;
                    while (self.used(pos.row, pos.col)) {
                        pos.col++;
                    }
                }
                else if (pos.row === undefined) {
                    // find unused row
                    pos.row = 0;
                    while (self.used(pos.row, pos.col)) {
                        pos.row++;
                    }
                }
                self.id2manPos[node.id] = pos;
                self.use(pos.row, pos.col);
            }
            self.getPos(node);
        }
        if (self.onLayoutEnd)
            self.onLayoutEnd();
        return {
            edges: edges,
            nodes: layoutNodes
        };
    };
    GridLayout.prototype.small = function (val) {
        var self = this;
        var res;
        var rows = self.rows || 5;
        var cols = self.cols || 5;
        if (val == null) {
            res = Math.min(rows, cols);
        }
        else {
            var min = Math.min(rows, cols);
            if (min === self.rows) {
                self.rows = val;
            }
            else {
                self.cols = val;
            }
        }
        return res;
    };
    GridLayout.prototype.large = function (val) {
        var self = this;
        var res;
        var rows = self.rows || 5;
        var cols = self.cols || 5;
        if (val == null) {
            res = Math.max(rows, cols);
        }
        else {
            var max = Math.max(rows, cols);
            if (max === self.rows) {
                self.rows = val;
            }
            else {
                self.cols = val;
            }
        }
        return res;
    };
    GridLayout.prototype.used = function (row, col) {
        var self = this;
        return self.cellUsed["c-" + row + "-" + col] || false;
    };
    GridLayout.prototype.use = function (row, col) {
        var self = this;
        self.cellUsed["c-" + row + "-" + col] = true;
    };
    GridLayout.prototype.moveToNextCell = function () {
        var self = this;
        var cols = self.cols || 5;
        self.col++;
        if (self.col >= cols) {
            self.col = 0;
            self.row++;
        }
    };
    GridLayout.prototype.getPos = function (node) {
        var self = this;
        var begin = self.begin;
        var cellWidth = self.cellWidth;
        var cellHeight = self.cellHeight;
        var x;
        var y;
        // see if we have a manual position set
        var rcPos = self.id2manPos[node.id];
        if (rcPos) {
            x = rcPos.col * cellWidth + cellWidth / 2 + begin[0];
            y = rcPos.row * cellHeight + cellHeight / 2 + begin[1];
        }
        else {
            // otherwise set automatically
            while (self.used(self.row, self.col)) {
                self.moveToNextCell();
            }
            x = self.col * cellWidth + cellWidth / 2 + begin[0];
            y = self.row * cellHeight + cellHeight / 2 + begin[1];
            self.use(self.row, self.col);
            self.moveToNextCell();
        }
        node.x = x;
        node.y = y;
    };
    GridLayout.prototype.getType = function () {
        return "grid";
    };
    return GridLayout;
}(base_1.Base));
exports.GridLayout = GridLayout;
//# sourceMappingURL=grid.js.map
}, function(modId) { var map = {"../util":1679470356560,"./base":1679470356559}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356569, function(require, module, exports) {

/**
 * @fileOverview random layout
 * @author shiwu.wyy@antfin.com
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomLayout = void 0;
var base_1 = require("./base");
/**
 * 随机布局
 */
var RandomLayout = /** @class */ (function (_super) {
    __extends(RandomLayout, _super);
    function RandomLayout(options) {
        var _this = _super.call(this) || this;
        /** 布局中心 */
        _this.center = [0, 0];
        /** 宽度 */
        _this.width = 300;
        /** 高度 */
        _this.height = 300;
        _this.nodes = [];
        _this.edges = [];
        /** 迭代结束的回调函数 */
        _this.onLayoutEnd = function () { };
        _this.updateCfg(options);
        return _this;
    }
    RandomLayout.prototype.getDefaultCfg = function () {
        return {
            center: [0, 0],
            width: 300,
            height: 300
        };
    };
    /**
     * 执行布局
     */
    RandomLayout.prototype.execute = function () {
        var self = this;
        var nodes = self.nodes;
        var layoutScale = 0.9;
        var center = self.center;
        if (!self.width && typeof window !== "undefined") {
            self.width = window.innerWidth;
        }
        if (!self.height && typeof window !== "undefined") {
            self.height = window.innerHeight;
        }
        if (nodes) {
            nodes.forEach(function (node) {
                node.x = (Math.random() - 0.5) * layoutScale * self.width + center[0];
                node.y = (Math.random() - 0.5) * layoutScale * self.height + center[1];
            });
        }
        if (self.onLayoutEnd)
            self.onLayoutEnd();
        return {
            nodes: nodes,
            edges: this.edges
        };
    };
    RandomLayout.prototype.getType = function () {
        return "random";
    };
    return RandomLayout;
}(base_1.Base));
exports.RandomLayout = RandomLayout;
//# sourceMappingURL=random.js.map
}, function(modId) { var map = {"./base":1679470356559}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356570, function(require, module, exports) {

/**
 * @fileOverview fruchterman layout
 * @author shiwu.wyy@antfin.com
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GForceLayout = void 0;
var base_1 = require("./base");
var util_1 = require("../util");
var proccessToFunc = function (value, defaultV) {
    var func;
    if (!value) {
        func = function (d) {
            return defaultV || 1;
        };
    }
    else if (util_1.isNumber(value)) {
        func = function (d) {
            return value;
        };
    }
    else {
        func = value;
    }
    return func;
};
/**
 * graphin 中的 force 布局
 */
var GForceLayout = /** @class */ (function (_super) {
    __extends(GForceLayout, _super);
    function GForceLayout(options) {
        var _this = _super.call(this) || this;
        /** 停止迭代的最大迭代数 */
        _this.maxIteration = 1000;
        /** 弹簧引力系数 */
        _this.edgeStrength = 200;
        /** 斥力系数 */
        _this.nodeStrength = 1000;
        /** 库伦系数 */
        _this.coulombDisScale = 0.005;
        /** 阻尼系数 */
        _this.damping = 0.9;
        /** 最大速度 */
        _this.maxSpeed = 1000;
        /** 一次迭代的平均移动距离小于该值时停止迭代 */
        _this.minMovement = 0.5;
        /** 迭代中衰减 */
        _this.interval = 0.02;
        /** 斥力的一个系数 */
        _this.factor = 1;
        /** 理想边长 */
        _this.linkDistance = 1;
        /** 重力大小 */
        _this.gravity = 10;
        /** 是否防止重叠 */
        _this.preventOverlap = true;
        /** 每次迭代结束的回调函数 */
        _this.tick = function () { };
        _this.nodes = [];
        _this.edges = [];
        _this.width = 300;
        _this.height = 300;
        _this.nodeMap = {};
        _this.nodeIdxMap = {};
        _this.updateCfg(options);
        return _this;
    }
    GForceLayout.prototype.getDefaultCfg = function () {
        return {
            maxIteration: 500,
            gravity: 10,
            enableTick: true
        };
    };
    /**
     * 执行布局
     */
    GForceLayout.prototype.execute = function () {
        var self = this;
        var nodes = self.nodes;
        if (self.timeInterval !== undefined && typeof window !== "undefined") {
            window.clearInterval(self.timeInterval);
        }
        if (!nodes || nodes.length === 0) {
            if (self.onLayoutEnd)
                self.onLayoutEnd();
            return;
        }
        if (!self.width && typeof window !== "undefined") {
            self.width = window.innerWidth;
        }
        if (!self.height && typeof window !== "undefined") {
            self.height = window.innerHeight;
        }
        if (!self.center) {
            self.center = [self.width / 2, self.height / 2];
        }
        var center = self.center;
        if (nodes.length === 1) {
            nodes[0].x = center[0];
            nodes[0].y = center[1];
            if (self.onLayoutEnd)
                self.onLayoutEnd();
            return;
        }
        var nodeMap = {};
        var nodeIdxMap = {};
        nodes.forEach(function (node, i) {
            if (!util_1.isNumber(node.x))
                node.x = Math.random() * self.width;
            if (!util_1.isNumber(node.y))
                node.y = Math.random() * self.height;
            nodeMap[node.id] = node;
            nodeIdxMap[node.id] = i;
        });
        self.nodeMap = nodeMap;
        self.nodeIdxMap = nodeIdxMap;
        self.linkDistance = proccessToFunc(self.linkDistance, 1);
        self.nodeStrength = proccessToFunc(self.nodeStrength, 1);
        self.edgeStrength = proccessToFunc(self.edgeStrength, 1);
        // node size function
        var nodeSize = self.nodeSize;
        var nodeSizeFunc;
        if (self.preventOverlap) {
            var nodeSpacing_1 = self.nodeSpacing;
            var nodeSpacingFunc_1;
            if (util_1.isNumber(nodeSpacing_1)) {
                nodeSpacingFunc_1 = function () { return nodeSpacing_1; };
            }
            else if (util_1.isFunction(nodeSpacing_1)) {
                nodeSpacingFunc_1 = nodeSpacing_1;
            }
            else {
                nodeSpacingFunc_1 = function () { return 0; };
            }
            if (!nodeSize) {
                nodeSizeFunc = function (d) {
                    if (d.size) {
                        if (util_1.isArray(d.size)) {
                            var res = d.size[0] > d.size[1] ? d.size[0] : d.size[1];
                            return res + nodeSpacingFunc_1(d);
                        }
                        return d.size + nodeSpacingFunc_1(d);
                    }
                    return 10 + nodeSpacingFunc_1(d);
                };
            }
            else if (util_1.isArray(nodeSize)) {
                nodeSizeFunc = function (d) {
                    var res = nodeSize[0] > nodeSize[1] ? nodeSize[0] : nodeSize[1];
                    return res + nodeSpacingFunc_1(d);
                };
            }
            else {
                nodeSizeFunc = function (d) { return nodeSize + nodeSpacingFunc_1(d); };
            }
        }
        self.nodeSize = nodeSizeFunc;
        var edges = self.edges;
        self.degrees = util_1.getDegree(nodes.length, self.nodeIdxMap, edges);
        if (!self.getMass) {
            self.getMass = function (d) {
                var mass = self.degrees[self.nodeIdxMap[d.id]] || 1;
                return mass;
            };
        }
        // layout
        self.run();
    };
    GForceLayout.prototype.run = function () {
        var self = this;
        var nodes = self.nodes;
        var edges = self.edges;
        var maxIteration = self.maxIteration;
        if (typeof window === "undefined")
            return;
        var iter = 0;
        // interval for render the result after each iteration
        this.timeInterval = window.setInterval(function () {
            var accArray = [];
            var velArray = [];
            if (!nodes)
                return;
            nodes.forEach(function (_, i) {
                accArray[2 * i] = 0;
                accArray[2 * i + 1] = 0;
                velArray[2 * i] = 0;
                velArray[2 * i + 1] = 0;
            });
            self.calRepulsive(accArray, nodes);
            if (edges)
                self.calAttractive(accArray, edges);
            self.calGravity(accArray, nodes);
            var stepInterval = Math.max(0.02, self.interval - iter * 0.002);
            self.updateVelocity(accArray, velArray, stepInterval, nodes);
            var previousPos = [];
            nodes.forEach(function (node) {
                previousPos.push({
                    x: node.x,
                    y: node.y
                });
            });
            self.updatePosition(velArray, stepInterval, nodes);
            if (self.tick)
                self.tick();
            // whether to stop the iteration
            var movement = 0;
            nodes.forEach(function (node, j) {
                var vx = node.x - previousPos[j].x;
                var vy = node.y - previousPos[j].y;
                movement += Math.sqrt(vx * vx + vy * vy);
            });
            movement /= nodes.length;
            if (movement < self.minMovement) {
                window.clearInterval(self.timeInterval);
                if (self.onLayoutEnd)
                    self.onLayoutEnd();
            }
            iter++;
            if (iter >= maxIteration) {
                if (self.onLayoutEnd)
                    self.onLayoutEnd();
                window.clearInterval(self.timeInterval);
            }
        }, 0);
    };
    GForceLayout.prototype.calRepulsive = function (accArray, nodes) {
        var self = this;
        // const nodes = self.nodes;
        var getMass = self.getMass;
        var nodeStrength = self.nodeStrength;
        var factor = self.factor;
        var coulombDisScale = self.coulombDisScale;
        var preventOverlap = self.preventOverlap;
        var nodeSize = self.nodeSize;
        nodes.forEach(function (ni, i) {
            var massi = getMass ? getMass(ni) : 1;
            nodes.forEach(function (nj, j) {
                if (i >= j)
                    return;
                // if (!accArray[j]) accArray[j] = 0;
                var vecX = ni.x - nj.x;
                var vecY = ni.y - nj.y;
                var vecLength = Math.sqrt(vecX * vecX + vecY * vecY) + 0.01;
                var nVecLength = (vecLength + 0.1) * coulombDisScale;
                var direX = vecX / vecLength;
                var direY = vecY / vecLength;
                var param = (((nodeStrength(ni) + nodeStrength(nj)) / 2) * factor) /
                    (nVecLength * nVecLength);
                var massj = getMass ? getMass(nj) : 1;
                accArray[2 * i] += (direX * param);
                accArray[2 * i + 1] += (direY * param);
                accArray[2 * j] -= (direX * param);
                accArray[2 * j + 1] -= (direY * param);
                if (preventOverlap && vecLength < (nodeSize(ni) + nodeSize(nj)) / 2) {
                    var paramOverlap = (nodeStrength(ni) + nodeStrength(nj)) / 2 / (vecLength * vecLength);
                    accArray[2 * i] += (direX * paramOverlap) / massi;
                    accArray[2 * i + 1] += (direY * paramOverlap) / massi;
                    accArray[2 * j] -= (direX * paramOverlap) / massj;
                    accArray[2 * j + 1] -= (direY * paramOverlap) / massj;
                }
            });
        });
    };
    GForceLayout.prototype.calAttractive = function (accArray, edges) {
        var self = this;
        // const edges = self.edges;
        var nodeMap = self.nodeMap;
        var nodeIdxMap = self.nodeIdxMap;
        var linkDistance = self.linkDistance;
        var edgeStrength = self.edgeStrength;
        var getMass = self.getMass;
        edges.forEach(function (edge, i) {
            var sourceNode = nodeMap[edge.source];
            var targetNode = nodeMap[edge.target];
            var vecX = targetNode.x - sourceNode.x;
            var vecY = targetNode.y - sourceNode.y;
            var vecLength = Math.sqrt(vecX * vecX + vecY * vecY) + 0.01;
            var direX = vecX / vecLength;
            var direY = vecY / vecLength;
            var length = linkDistance(edge) || 1;
            var diff = length - vecLength;
            var param = diff * edgeStrength(edge);
            var sourceIdx = nodeIdxMap[edge.source];
            var targetIdx = nodeIdxMap[edge.target];
            var massSource = getMass ? getMass(sourceNode) : 1;
            var massTarget = getMass ? getMass(targetNode) : 1;
            accArray[2 * sourceIdx] -= (direX * param) / massSource;
            accArray[2 * sourceIdx + 1] -= (direY * param) / massSource;
            accArray[2 * targetIdx] += (direX * param) / massTarget;
            accArray[2 * targetIdx + 1] += (direY * param) / massTarget;
        });
    };
    GForceLayout.prototype.calGravity = function (accArray, nodes) {
        var self = this;
        // const nodes = self.nodes;
        var center = self.center;
        var defaultGravity = self.gravity;
        var degrees = self.degrees;
        var nodeLength = nodes.length;
        for (var i = 0; i < nodeLength; i++) {
            var node = nodes[i];
            var vecX = node.x - center[0];
            var vecY = node.y - center[1];
            var gravity = defaultGravity;
            if (self.getCenter) {
                var customCenterOpt = self.getCenter(node, degrees[i]);
                if (customCenterOpt &&
                    util_1.isNumber(customCenterOpt[0]) &&
                    util_1.isNumber(customCenterOpt[1]) &&
                    util_1.isNumber(customCenterOpt[2])) {
                    vecX = node.x - customCenterOpt[0];
                    vecY = node.y - customCenterOpt[1];
                    gravity = customCenterOpt[2];
                }
            }
            if (!gravity)
                continue;
            accArray[2 * i] -= gravity * vecX;
            accArray[2 * i + 1] -= gravity * vecY;
        }
    };
    GForceLayout.prototype.updateVelocity = function (accArray, velArray, stepInterval, nodes) {
        var self = this;
        var param = stepInterval * self.damping;
        // const nodes = self.nodes;
        nodes.forEach(function (node, i) {
            var vx = accArray[2 * i] * param || 0.01;
            var vy = accArray[2 * i + 1] * param || 0.01;
            var vLength = Math.sqrt(vx * vx + vy * vy);
            if (vLength > self.maxSpeed) {
                var param2 = self.maxSpeed / vLength;
                vx = param2 * vx;
                vy = param2 * vy;
            }
            velArray[2 * i] = vx;
            velArray[2 * i + 1] = vy;
        });
    };
    GForceLayout.prototype.updatePosition = function (velArray, stepInterval, nodes) {
        nodes.forEach(function (node, i) {
            if (util_1.isNumber(node.fx) && util_1.isNumber(node.fy)) {
                node.x = node.fx;
                node.y = node.fy;
                return;
            }
            var distX = velArray[2 * i] * stepInterval;
            var distY = velArray[2 * i + 1] * stepInterval;
            node.x += distX;
            node.y += distY;
        });
    };
    GForceLayout.prototype.stop = function () {
        if (this.timeInterval && typeof window !== "undefined") {
            window.clearInterval(this.timeInterval);
        }
    };
    GForceLayout.prototype.destroy = function () {
        var self = this;
        self.stop();
        self.tick = null;
        self.nodes = null;
        self.edges = null;
        self.destroyed = true;
    };
    GForceLayout.prototype.getType = function () {
        return "gForce";
    };
    return GForceLayout;
}(base_1.Base));
exports.GForceLayout = GForceLayout;
//# sourceMappingURL=gForce.js.map
}, function(modId) { var map = {"./base":1679470356559,"../util":1679470356560}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356571, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./force"), exports);
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"./force":1679470356572}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356572, function(require, module, exports) {

/**
 * @fileOverview random layout
 * @author shiwu.wyy@antfin.com
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForceLayout = void 0;
var d3Force = __importStar(require("d3-force"));
var force_in_a_box_1 = __importDefault(require("./force-in-a-box"));
var util_1 = require("../../util");
var base_1 = require("../base");
var constants_1 = require("../constants");
/**
 * 经典力导布局 force-directed
 */
var ForceLayout = /** @class */ (function (_super) {
    __extends(ForceLayout, _super);
    function ForceLayout(options) {
        var _this = _super.call(this) || this;
        /** 向心力作用点 */
        _this.center = [0, 0];
        /** 节点作用力 */
        _this.nodeStrength = null;
        /** 边的作用力, 默认为根据节点的入度出度自适应 */
        _this.edgeStrength = null;
        /** 是否防止节点相互覆盖 */
        _this.preventOverlap = false;
        /** 聚类节点作用力 */
        _this.clusterNodeStrength = null;
        /** 聚类边作用力 */
        _this.clusterEdgeStrength = null;
        /** 聚类边长度 */
        _this.clusterEdgeDistance = null;
        /** 聚类节点大小 / 直径，直径越大，越分散 */
        _this.clusterNodeSize = null;
        /** 用于 foci 的力 */
        _this.clusterFociStrength = null;
        /** 默认边长度 */
        _this.linkDistance = 50;
        /** 迭代阈值的衰减率 [0, 1]，0.028 对应最大迭代数为 300 */
        _this.alphaDecay = 0.028;
        /** 停止迭代的阈值 */
        _this.alphaMin = 0.001;
        /** 当前阈值 */
        _this.alpha = 0.3;
        /** 防止重叠的力强度 */
        _this.collideStrength = 1;
        /** 是否启用web worker。前提是在web worker里执行布局，否则无效	*/
        _this.workerEnabled = false;
        _this.tick = function () { };
        /** 布局完成回调 */
        _this.onLayoutEnd = function () { };
        /** 是否正在布局 */
        _this.ticking = undefined;
        if (options) {
            _this.updateCfg(options);
        }
        return _this;
    }
    ForceLayout.prototype.getDefaultCfg = function () {
        return {
            center: [0, 0],
            nodeStrength: null,
            edgeStrength: null,
            preventOverlap: false,
            nodeSize: undefined,
            nodeSpacing: undefined,
            linkDistance: 50,
            forceSimulation: null,
            alphaDecay: 0.028,
            alphaMin: 0.001,
            alpha: 0.3,
            collideStrength: 1,
            clustering: false,
            clusterNodeStrength: -1,
            clusterEdgeStrength: 0.1,
            clusterEdgeDistance: 100,
            clusterFociStrength: 0.8,
            clusterNodeSize: 10,
            tick: function () { },
            onLayoutEnd: function () { },
            // 是否启用web worker。前提是在web worker里执行布局，否则无效
            workerEnabled: false
        };
    };
    /**
     * 初始化
     * @param {object} data 数据
     */
    ForceLayout.prototype.init = function (data) {
        var self = this;
        self.nodes = data.nodes || [];
        var edges = data.edges || [];
        self.edges = edges.map(function (edge) {
            var res = {};
            var expectKeys = ["targetNode", "sourceNode", "startPoint", "endPoint"];
            Object.keys(edge).forEach(function (key) {
                if (!(expectKeys.indexOf(key) > -1)) {
                    res[key] = edge[key];
                }
            });
            return res;
        });
        self.ticking = false;
    };
    /**
     * 执行布局
     */
    ForceLayout.prototype.execute = function (reloadData) {
        var self = this;
        var nodes = self.nodes;
        var edges = self.edges;
        // 如果正在布局，忽略布局请求
        if (self.ticking) {
            return;
        }
        var simulation = self.forceSimulation;
        var alphaMin = self.alphaMin;
        var alphaDecay = self.alphaDecay;
        var alpha = self.alpha;
        if (!simulation) {
            try {
                // 定义节点的力
                var nodeForce = d3Force.forceManyBody();
                if (self.nodeStrength) {
                    nodeForce.strength(self.nodeStrength);
                }
                simulation = d3Force.forceSimulation().nodes(nodes);
                if (self.clustering) {
                    var clusterForce = force_in_a_box_1.default();
                    clusterForce
                        .centerX(self.center[0])
                        .centerY(self.center[1])
                        .template("force")
                        .strength(self.clusterFociStrength);
                    if (edges) {
                        clusterForce.links(edges);
                    }
                    if (nodes) {
                        clusterForce.nodes(nodes);
                    }
                    clusterForce
                        .forceLinkDistance(self.clusterEdgeDistance)
                        .forceLinkStrength(self.clusterEdgeStrength)
                        .forceCharge(self.clusterNodeStrength)
                        .forceNodeSize(self.clusterNodeSize);
                    self.clusterForce = clusterForce;
                    simulation.force("group", clusterForce);
                }
                simulation
                    .force("center", d3Force.forceCenter(self.center[0], self.center[1]))
                    .force("charge", nodeForce)
                    .alpha(alpha)
                    .alphaDecay(alphaDecay)
                    .alphaMin(alphaMin);
                if (self.preventOverlap) {
                    self.overlapProcess(simulation);
                }
                // 如果有边，定义边的力
                if (edges) {
                    // d3 的 forceLayout 会重新生成边的数据模型，为了避免污染源数据
                    var edgeForce = d3Force
                        .forceLink()
                        .id(function (d) { return d.id; })
                        .links(edges);
                    if (self.edgeStrength) {
                        edgeForce.strength(self.edgeStrength);
                    }
                    if (self.linkDistance) {
                        edgeForce.distance(self.linkDistance);
                    }
                    self.edgeForce = edgeForce;
                    simulation.force("link", edgeForce);
                }
                if (self.workerEnabled && !isInWorker()) {
                    // 如果不是运行在web worker里，不用web worker布局
                    self.workerEnabled = false;
                    console.warn("workerEnabled option is only supported when running in web worker.");
                }
                if (!self.workerEnabled) {
                    simulation
                        .on("tick", function () {
                        self.tick();
                    })
                        .on("end", function () {
                        self.ticking = false;
                        if (self.onLayoutEnd)
                            self.onLayoutEnd();
                    });
                    self.ticking = true;
                }
                else {
                    // worker is enabled
                    simulation.stop();
                    var totalTicks = getSimulationTicks(simulation);
                    for (var currentTick = 1; currentTick <= totalTicks; currentTick++) {
                        simulation.tick();
                        // currentTick starts from 1.
                        postMessage({
                            nodes: nodes,
                            currentTick: currentTick,
                            totalTicks: totalTicks,
                            type: constants_1.LAYOUT_MESSAGE.TICK
                        }, undefined);
                    }
                    self.ticking = false;
                }
                self.forceSimulation = simulation;
                self.ticking = true;
            }
            catch (e) {
                self.ticking = false;
                console.warn(e);
            }
        }
        else {
            if (reloadData) {
                if (self.clustering && self.clusterForce) {
                    self.clusterForce.nodes(nodes);
                    self.clusterForce.links(edges);
                }
                simulation.nodes(nodes);
                if (edges && self.edgeForce)
                    self.edgeForce.links(edges);
                else if (edges && !self.edgeForce) {
                    // d3 的 forceLayout 会重新生成边的数据模型，为了避免污染源数据
                    var edgeForce = d3Force
                        .forceLink()
                        .id(function (d) { return d.id; })
                        .links(edges);
                    if (self.edgeStrength) {
                        edgeForce.strength(self.edgeStrength);
                    }
                    if (self.linkDistance) {
                        edgeForce.distance(self.linkDistance);
                    }
                    self.edgeForce = edgeForce;
                    simulation.force("link", edgeForce);
                }
            }
            if (self.preventOverlap) {
                self.overlapProcess(simulation);
            }
            simulation.alpha(alpha).restart();
            this.ticking = true;
        }
    };
    /**
     * 防止重叠
     * @param {object} simulation 力模拟模型
     */
    ForceLayout.prototype.overlapProcess = function (simulation) {
        var self = this;
        var nodeSize = self.nodeSize;
        var nodeSpacing = self.nodeSpacing;
        var nodeSizeFunc;
        var nodeSpacingFunc;
        var collideStrength = self.collideStrength;
        if (util_1.isNumber(nodeSpacing)) {
            nodeSpacingFunc = function () { return nodeSpacing; };
        }
        else if (util_1.isFunction(nodeSpacing)) {
            nodeSpacingFunc = nodeSpacing;
        }
        else {
            nodeSpacingFunc = function () { return 0; };
        }
        if (!nodeSize) {
            nodeSizeFunc = function (d) {
                if (d.size) {
                    if (util_1.isArray(d.size)) {
                        var res = d.size[0] > d.size[1] ? d.size[0] : d.size[1];
                        return res / 2 + nodeSpacingFunc(d);
                    }
                    return d.size / 2 + nodeSpacingFunc(d);
                }
                return 10 + nodeSpacingFunc(d);
            };
        }
        else if (util_1.isFunction(nodeSize)) {
            nodeSizeFunc = function (d) {
                var size = nodeSize(d);
                return size + nodeSpacingFunc(d);
            };
        }
        else if (util_1.isArray(nodeSize)) {
            var larger = nodeSize[0] > nodeSize[1] ? nodeSize[0] : nodeSize[1];
            var radius_1 = larger / 2;
            nodeSizeFunc = function (d) { return radius_1 + nodeSpacingFunc(d); };
        }
        else if (util_1.isNumber(nodeSize)) {
            var radius_2 = nodeSize / 2;
            nodeSizeFunc = function (d) { return radius_2 + nodeSpacingFunc(d); };
        }
        else {
            nodeSizeFunc = function () { return 10; };
        }
        // forceCollide's parameter is a radius
        simulation.force("collisionForce", d3Force.forceCollide(nodeSizeFunc).strength(collideStrength));
    };
    /**
     * 更新布局配置，但不执行布局
     * @param {object} cfg 需要更新的配置项
     */
    ForceLayout.prototype.updateCfg = function (cfg) {
        var self = this;
        if (self.ticking) {
            self.forceSimulation.stop();
            self.ticking = false;
        }
        self.forceSimulation = null;
        Object.assign(self, cfg);
    };
    ForceLayout.prototype.destroy = function () {
        var self = this;
        if (self.ticking) {
            self.forceSimulation.stop();
            self.ticking = false;
        }
        self.nodes = null;
        self.edges = null;
        self.destroyed = true;
    };
    return ForceLayout;
}(base_1.Base));
exports.ForceLayout = ForceLayout;
// Return total ticks of d3-force simulation
function getSimulationTicks(simulation) {
    var alphaMin = simulation.alphaMin();
    var alphaTarget = simulation.alphaTarget();
    var alpha = simulation.alpha();
    var totalTicksFloat = Math.log((alphaMin - alphaTarget) / (alpha - alphaTarget)) /
        Math.log(1 - simulation.alphaDecay());
    var totalTicks = Math.ceil(totalTicksFloat);
    return totalTicks;
}
// 判断是否运行在web worker里
function isInWorker() {
    // eslint-disable-next-line no-undef
    return (typeof WorkerGlobalScope !== "undefined" &&
        self instanceof WorkerGlobalScope);
}
//# sourceMappingURL=force.js.map
}, function(modId) { var map = {"./force-in-a-box":1679470356573,"../../util":1679470356560,"../base":1679470356559,"../constants":1679470356574}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356573, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var d3Force = __importStar(require("d3-force"));
// https://github.com/john-guerra/forceInABox/blob/master/src/forceInABox.js
function forceInABox() {
    function constant(_) {
        return function () { return _; };
    }
    var groupBy = function (d) {
        return d.cluster;
    };
    var forceNodeSize = constant(1);
    var forceCharge = constant(-1);
    var forceLinkDistance = constant(100);
    var forceLinkStrength = constant(0.1);
    var offset = [0, 0];
    var nodes = [];
    var nodesMap = {};
    var links = [];
    var centerX = 100;
    var centerY = 100;
    var foci = {
        none: {
            x: 0,
            y: 0,
        },
    };
    var templateNodes = [];
    var templateForce;
    var template = 'force';
    var enableGrouping = true;
    var strength = 0.1;
    function force(alpha) {
        if (!enableGrouping) {
            return force;
        }
        templateForce.tick();
        getFocisFromTemplate();
        for (var i = 0, n = nodes.length, node = void 0, k = alpha * strength; i < n; ++i) {
            node = nodes[i];
            node.vx += (foci[groupBy(node)].x - node.x) * k;
            node.vy += (foci[groupBy(node)].y - node.y) * k;
        }
    }
    function initialize() {
        if (!nodes)
            return;
        initializeWithForce();
    }
    function initializeWithForce() {
        if (!nodes || !nodes.length) {
            return;
        }
        if (groupBy(nodes[0]) === undefined) {
            throw Error("Couldnt find the grouping attribute for the nodes. Make sure to set it up with forceInABox.groupBy('clusterAttr') before calling .links()");
        }
        // checkLinksAsObjects();
        var net = getGroupsGraph();
        templateForce = d3Force
            .forceSimulation(net.nodes)
            .force('x', d3Force.forceX(centerX).strength(0.1))
            .force('y', d3Force.forceY(centerY).strength(0.1))
            .force('collide', d3Force.forceCollide(function (d) { return d.r; }).iterations(4))
            .force('charge', d3Force.forceManyBody().strength(forceCharge))
            .force('links', d3Force
            .forceLink(net.nodes.length ? net.links : [])
            .distance(forceLinkDistance)
            .strength(forceLinkStrength));
        templateNodes = templateForce.nodes();
        getFocisFromTemplate();
    }
    function getGroupsGraph() {
        var gnodes = [];
        var glinks = [];
        var dNodes = {};
        var clustersList = [];
        var clustersCounts = {};
        var clustersLinks = [];
        clustersCounts = computeClustersNodeCounts(nodes);
        clustersLinks = computeClustersLinkCounts(links);
        clustersList = Object.keys(clustersCounts);
        clustersList.forEach(function (key, index) {
            var val = clustersCounts[key];
            // Uses approx meta-node size
            gnodes.push({
                id: key,
                size: val.count,
                r: Math.sqrt(val.sumforceNodeSize / Math.PI),
            });
            dNodes[key] = index;
        });
        clustersLinks.forEach(function (l) {
            var source = dNodes[l.source];
            var target = dNodes[l.target];
            if (source !== undefined && target !== undefined) {
                glinks.push({
                    source: source,
                    target: target,
                    count: l.count,
                });
            }
        });
        return {
            nodes: gnodes,
            links: glinks,
        };
    }
    function computeClustersNodeCounts(nodes) {
        var clustersCounts = {};
        nodes.forEach(function (d) {
            var key = groupBy(d);
            if (!clustersCounts[key]) {
                clustersCounts[key] = {
                    count: 0,
                    sumforceNodeSize: 0,
                };
            }
        });
        nodes.forEach(function (d) {
            var key = groupBy(d);
            var nodeSize = forceNodeSize(d);
            var tmpCount = clustersCounts[key];
            tmpCount.count = tmpCount.count + 1;
            tmpCount.sumforceNodeSize =
                tmpCount.sumforceNodeSize + Math.PI * (nodeSize * nodeSize) * 1.3;
            clustersCounts[key] = tmpCount;
        });
        return clustersCounts;
    }
    function computeClustersLinkCounts(links) {
        var dClusterLinks = {};
        var clusterLinks = [];
        links.forEach(function (l) {
            var key = getLinkKey(l);
            var count = 0;
            if (dClusterLinks[key] !== undefined) {
                count = dClusterLinks[key];
            }
            count += 1;
            dClusterLinks[key] = count;
        });
        var entries = Object.entries(dClusterLinks);
        entries.forEach(function (_a) {
            var key = _a[0], count = _a[1];
            var source = key.split('~')[0];
            var target = key.split('~')[1];
            if (source !== undefined && target !== undefined) {
                clusterLinks.push({
                    source: source,
                    target: target,
                    count: count,
                });
            }
        });
        return clusterLinks;
    }
    function getFocisFromTemplate() {
        foci = {
            none: {
                x: 0,
                y: 0,
            },
        };
        templateNodes.forEach(function (d) {
            foci[d.id] = {
                x: d.x - offset[0],
                y: d.y - offset[1],
            };
        });
        return foci;
    }
    function getLinkKey(l) {
        var sourceID = groupBy(nodesMap[l.source]);
        var targetID = groupBy(nodesMap[l.target]);
        return sourceID <= targetID
            ? sourceID + "~" + targetID
            : targetID + "~" + sourceID;
    }
    function genNodesMap(nodes) {
        nodesMap = {};
        nodes.forEach(function (node) {
            nodesMap[node.id] = node;
        });
    }
    function setTemplate(x) {
        if (!arguments.length)
            return template;
        template = x;
        initialize();
        return force;
    }
    function setGroupBy(x) {
        if (!arguments.length)
            return groupBy;
        if (typeof x === 'string') {
            groupBy = function (d) {
                return d[x];
            };
            return force;
        }
        groupBy = x;
        return force;
    }
    function setEnableGrouping(x) {
        if (!arguments.length)
            return enableGrouping;
        enableGrouping = x;
        return force;
    }
    function setStrength(x) {
        if (!arguments.length)
            return strength;
        strength = x;
        return force;
    }
    function setCenterX(_) {
        if (arguments.length) {
            centerX = _;
            return force;
        }
        return centerX;
    }
    function setCenterY(_) {
        if (arguments.length) {
            centerY = _;
            return force;
        }
        return centerY;
    }
    function setNodes(_) {
        if (arguments.length) {
            genNodesMap(_ || []);
            nodes = _ || [];
            return force;
        }
        return nodes;
    }
    function setLinks(_) {
        if (arguments.length) {
            links = _ || [];
            initialize();
            return force;
        }
        return links;
    }
    function setForceNodeSize(_) {
        if (arguments.length) {
            if (typeof _ === 'function') {
                forceNodeSize = _;
            }
            else {
                forceNodeSize = constant(+_);
            }
            initialize();
            return force;
        }
        return forceNodeSize;
    }
    function setForceCharge(_) {
        if (arguments.length) {
            if (typeof _ === 'function') {
                forceCharge = _;
            }
            else {
                forceCharge = constant(+_);
            }
            initialize();
            return force;
        }
        return forceCharge;
    }
    function setForceLinkDistance(_) {
        if (arguments.length) {
            if (typeof _ === 'function') {
                forceLinkDistance = _;
            }
            else {
                forceLinkDistance = constant(+_);
            }
            initialize();
            return force;
        }
        return forceLinkDistance;
    }
    function setForceLinkStrength(_) {
        if (arguments.length) {
            if (typeof _ === 'function') {
                forceLinkStrength = _;
            }
            else {
                forceLinkStrength = constant(+_);
            }
            initialize();
            return force;
        }
        return forceLinkStrength;
    }
    function setOffset(_) {
        if (arguments.length) {
            offset = _;
            return force;
        }
        return offset;
    }
    force.initialize = function (_) {
        nodes = _;
        initialize();
    };
    force.template = setTemplate;
    force.groupBy = setGroupBy;
    force.enableGrouping = setEnableGrouping;
    force.strength = setStrength;
    force.centerX = setCenterX;
    force.centerY = setCenterY;
    force.nodes = setNodes;
    force.links = setLinks;
    force.forceNodeSize = setForceNodeSize;
    // Legacy support
    force.nodeSize = force.forceNodeSize;
    force.forceCharge = setForceCharge;
    force.forceLinkDistance = setForceLinkDistance;
    force.forceLinkStrength = setForceLinkStrength;
    force.offset = setOffset;
    force.getFocis = getFocisFromTemplate;
    return force;
}
exports.default = forceInABox;
//# sourceMappingURL=force-in-a-box.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356574, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.LAYOUT_MESSAGE = void 0;
/** layout message type */
exports.LAYOUT_MESSAGE = {
    // run layout
    RUN: "LAYOUT_RUN",
    // layout ended with success
    END: "LAYOUT_END",
    // layout error
    ERROR: "LAYOUT_ERROR",
    // layout tick, used in force directed layout
    TICK: "LAYOUT_TICK",
    GPURUN: "GPU_LAYOUT_RUN",
    GPUEND: "GPU_LAYOUT_END"
};
//# sourceMappingURL=constants.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356575, function(require, module, exports) {

/**
 * @fileOverview random layout
 * @author shiwu.wyy@antfin.com
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircularLayout = void 0;
var base_1 = require("./base");
var util_1 = require("../util");
function initHierarchy(nodes, edges, nodeMap, directed) {
    nodes.forEach(function (_, i) {
        nodes[i].children = [];
        nodes[i].parent = [];
    });
    if (directed) {
        edges.forEach(function (e) {
            var sourceIdx = 0;
            if (e.source) {
                sourceIdx = nodeMap[e.source];
            }
            var targetIdx = 0;
            if (e.target) {
                targetIdx = nodeMap[e.target];
            }
            var child = nodes[sourceIdx].children;
            var parent = nodes[targetIdx].parent;
            child.push(nodes[targetIdx].id);
            parent.push(nodes[sourceIdx].id);
        });
    }
    else {
        edges.forEach(function (e) {
            var sourceIdx = 0;
            if (e.source) {
                sourceIdx = nodeMap[e.source];
            }
            var targetIdx = 0;
            if (e.target) {
                targetIdx = nodeMap[e.target];
            }
            var sourceChildren = nodes[sourceIdx].children;
            var targetChildren = nodes[targetIdx].children;
            sourceChildren.push(nodes[targetIdx].id);
            targetChildren.push(nodes[sourceIdx].id);
        });
    }
}
function connect(a, b, edges) {
    var m = edges.length;
    for (var i = 0; i < m; i++) {
        if ((a.id === edges[i].source && b.id === edges[i].target) ||
            (b.id === edges[i].source && a.id === edges[i].target)) {
            return true;
        }
    }
    return false;
}
function compareDegree(a, b) {
    var aDegree = a.degree;
    var bDegree = b.degree;
    if (aDegree < bDegree) {
        return -1;
    }
    if (aDegree > bDegree) {
        return 1;
    }
    return 0;
}
/**
 * 圆形布局
 */
var CircularLayout = /** @class */ (function (_super) {
    __extends(CircularLayout, _super);
    function CircularLayout(options) {
        var _this = _super.call(this) || this;
        /** 固定半径，若设置了 radius，则 startRadius 与 endRadius 不起效 */
        _this.radius = null;
        /** 起始半径 */
        _this.startRadius = null;
        /** 终止半径 */
        _this.endRadius = null;
        /** 起始角度 */
        _this.startAngle = 0;
        /** 终止角度 */
        _this.endAngle = 2 * Math.PI;
        /** 是否顺时针 */
        _this.clockwise = true;
        /** 节点在环上分成段数（几个段将均匀分布），在 endRadius - startRadius != 0 时生效 */
        _this.divisions = 1;
        /** 节点在环上排序的依据，可选: 'topology', 'degree', 'null' */
        _this.ordering = null;
        /** how many 2*pi from first to last nodes */
        _this.angleRatio = 1;
        _this.nodes = [];
        _this.edges = [];
        _this.nodeMap = {};
        _this.degrees = [];
        _this.width = 300;
        _this.height = 300;
        _this.updateCfg(options);
        return _this;
    }
    CircularLayout.prototype.getDefaultCfg = function () {
        return {
            radius: null,
            startRadius: null,
            endRadius: null,
            startAngle: 0,
            endAngle: 2 * Math.PI,
            clockwise: true,
            divisions: 1,
            ordering: null,
            angleRatio: 1
        };
    };
    /**
     * 执行布局
     */
    CircularLayout.prototype.execute = function () {
        var self = this;
        var nodes = self.nodes;
        var edges = self.edges;
        var n = nodes.length;
        if (n === 0) {
            if (self.onLayoutEnd)
                self.onLayoutEnd();
            return;
        }
        if (!self.width && typeof window !== "undefined") {
            self.width = window.innerWidth;
        }
        if (!self.height && typeof window !== "undefined") {
            self.height = window.innerHeight;
        }
        if (!self.center) {
            self.center = [self.width / 2, self.height / 2];
        }
        var center = self.center;
        if (n === 1) {
            nodes[0].x = center[0];
            nodes[0].y = center[1];
            if (self.onLayoutEnd)
                self.onLayoutEnd();
            return;
        }
        var radius = self.radius;
        var startRadius = self.startRadius;
        var endRadius = self.endRadius;
        var divisions = self.divisions;
        var startAngle = self.startAngle;
        var endAngle = self.endAngle;
        var angleStep = (endAngle - startAngle) / n;
        // layout
        var nodeMap = {};
        nodes.forEach(function (node, i) {
            nodeMap[node.id] = i;
        });
        self.nodeMap = nodeMap;
        var degrees = util_1.getDegree(nodes.length, nodeMap, edges);
        self.degrees = degrees;
        if (!radius && !startRadius && !endRadius) {
            radius = self.height > self.width ? self.width / 2 : self.height / 2;
        }
        else if (!startRadius && endRadius) {
            startRadius = endRadius;
        }
        else if (startRadius && !endRadius) {
            endRadius = startRadius;
        }
        var angleRatio = self.angleRatio;
        var astep = angleStep * angleRatio;
        var ordering = self.ordering;
        var layoutNodes = [];
        if (ordering === "topology") {
            // layout according to the topology
            layoutNodes = self.topologyOrdering();
        }
        else if (ordering === "topology-directed") {
            // layout according to the topology
            layoutNodes = self.topologyOrdering(true);
        }
        else if (ordering === "degree") {
            // layout according to the descent order of degrees
            layoutNodes = self.degreeOrdering();
        }
        else {
            // layout according to the original order in the data.nodes
            layoutNodes = nodes;
        }
        var clockwise = self.clockwise;
        var divN = Math.ceil(n / divisions); // node number in each division
        for (var i = 0; i < n; ++i) {
            var r = radius;
            if (!r && startRadius !== null && endRadius !== null) {
                r = startRadius + (i * (endRadius - startRadius)) / (n - 1);
            }
            if (!r) {
                r = 10 + (i * 100) / (n - 1);
            }
            var angle = startAngle +
                (i % divN) * astep +
                ((2 * Math.PI) / divisions) * Math.floor(i / divN);
            if (!clockwise) {
                angle =
                    endAngle -
                        (i % divN) * astep -
                        ((2 * Math.PI) / divisions) * Math.floor(i / divN);
            }
            layoutNodes[i].x = center[0] + Math.cos(angle) * r;
            layoutNodes[i].y = center[1] + Math.sin(angle) * r;
            layoutNodes[i].weight = degrees[i];
        }
        if (self.onLayoutEnd)
            self.onLayoutEnd();
        return {
            nodes: layoutNodes,
            edges: this.edges
        };
    };
    /**
     * 根据节点的拓扑结构排序
     * @return {array} orderedNodes 排序后的结果
     */
    CircularLayout.prototype.topologyOrdering = function (directed) {
        if (directed === void 0) { directed = false; }
        var self = this;
        var degrees = self.degrees;
        var edges = self.edges;
        var nodes = self.nodes;
        var cnodes = util_1.clone(nodes);
        var nodeMap = self.nodeMap;
        var orderedCNodes = [cnodes[0]];
        var resNodes = [nodes[0]];
        var pickFlags = [];
        var n = nodes.length;
        pickFlags[0] = true;
        initHierarchy(cnodes, edges, nodeMap, directed);
        var k = 0;
        cnodes.forEach(function (cnode, i) {
            if (i !== 0) {
                if ((i === n - 1 ||
                    degrees[i] !== degrees[i + 1] ||
                    connect(orderedCNodes[k], cnode, edges)) &&
                    !pickFlags[i]) {
                    orderedCNodes.push(cnode);
                    resNodes.push(nodes[nodeMap[cnode.id]]);
                    pickFlags[i] = true;
                    k++;
                }
                else {
                    var children = orderedCNodes[k].children;
                    var foundChild = false;
                    for (var j = 0; j < children.length; j++) {
                        var childIdx = nodeMap[children[j]];
                        if (degrees[childIdx] === degrees[i] && !pickFlags[childIdx]) {
                            orderedCNodes.push(cnodes[childIdx]);
                            resNodes.push(nodes[nodeMap[cnodes[childIdx].id]]);
                            pickFlags[childIdx] = true;
                            foundChild = true;
                            break;
                        }
                    }
                    var ii = 0;
                    while (!foundChild) {
                        if (!pickFlags[ii]) {
                            orderedCNodes.push(cnodes[ii]);
                            resNodes.push(nodes[nodeMap[cnodes[ii].id]]);
                            pickFlags[ii] = true;
                            foundChild = true;
                        }
                        ii++;
                        if (ii === n) {
                            break;
                        }
                    }
                }
            }
        });
        return resNodes;
    };
    /**
     * 根据节点度数大小排序
     * @return {array} orderedNodes 排序后的结果
     */
    CircularLayout.prototype.degreeOrdering = function () {
        var self = this;
        var nodes = self.nodes;
        var orderedNodes = [];
        var degrees = self.degrees;
        nodes.forEach(function (node, i) {
            node.degree = degrees[i];
            orderedNodes.push(node);
        });
        orderedNodes.sort(compareDegree);
        return orderedNodes;
    };
    CircularLayout.prototype.getType = function () {
        return "circular";
    };
    return CircularLayout;
}(base_1.Base));
exports.CircularLayout = CircularLayout;
//# sourceMappingURL=circular.js.map
}, function(modId) { var map = {"./base":1679470356559,"../util":1679470356560}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356576, function(require, module, exports) {

/**
 * @fileOverview random layout
 * @author shiwu.wyy@antfin.com
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DagreLayout = void 0;
var dagre_1 = __importDefault(require("dagre"));
var util_1 = require("../util");
var base_1 = require("./base");
/**
 * 层次布局
 */
var DagreLayout = /** @class */ (function (_super) {
    __extends(DagreLayout, _super);
    function DagreLayout(options) {
        var _this = _super.call(this) || this;
        /** layout 方向, 可选 TB, BT, LR, RL */
        _this.rankdir = "TB";
        /** 节点水平间距(px) */
        _this.nodesep = 50;
        /** 每一层节点之间间距 */
        _this.ranksep = 50;
        /** 是否保留布局连线的控制点 */
        _this.controlPoints = false;
        /** 每层节点是否根据节点数据中的 comboId 进行排序，以放置同层 combo 重叠 */
        _this.sortByCombo = false;
        _this.nodes = [];
        _this.edges = [];
        /** 迭代结束的回调函数 */
        _this.onLayoutEnd = function () { };
        _this.updateCfg(options);
        return _this;
    }
    DagreLayout.prototype.getDefaultCfg = function () {
        return {
            rankdir: "TB",
            align: undefined,
            nodeSize: undefined,
            nodesepFunc: undefined,
            ranksepFunc: undefined,
            nodesep: 50,
            ranksep: 50,
            controlPoints: false, // 是否保留布局连线的控制点
        };
    };
    /**
     * 执行布局
     */
    DagreLayout.prototype.execute = function () {
        var _this = this;
        var self = this;
        var nodes = self.nodes, nodeSize = self.nodeSize, rankdir = self.rankdir, combos = self.combos;
        if (!nodes)
            return;
        var edges = self.edges || [];
        var g = new dagre_1.default.graphlib.Graph({
            multigraph: true,
            compound: true,
        });
        var nodeSizeFunc;
        if (!nodeSize) {
            nodeSizeFunc = function (d) {
                if (d.size) {
                    if (util_1.isArray(d.size)) {
                        return d.size;
                    }
                    return [d.size, d.size];
                }
                return [40, 40];
            };
        }
        else if (util_1.isArray(nodeSize)) {
            nodeSizeFunc = function () { return nodeSize; };
        }
        else {
            nodeSizeFunc = function () { return [nodeSize, nodeSize]; };
        }
        var horisep = getFunc(self.nodesepFunc, self.nodesep, 50);
        var vertisep = getFunc(self.ranksepFunc, self.ranksep, 50);
        if (rankdir === "LR" || rankdir === "RL") {
            horisep = getFunc(self.ranksepFunc, self.ranksep, 50);
            vertisep = getFunc(self.nodesepFunc, self.nodesep, 50);
        }
        g.setDefaultEdgeLabel(function () { return ({}); });
        g.setGraph(self);
        var comboMap = {};
        nodes.forEach(function (node) {
            var size = nodeSizeFunc(node);
            var verti = vertisep(node);
            var hori = horisep(node);
            var width = size[0] + 2 * hori;
            var height = size[1] + 2 * verti;
            g.setNode(node.id, { width: width, height: height });
            if (_this.sortByCombo && node.comboId) {
                if (!comboMap[node.comboId]) {
                    comboMap[node.comboId] = true;
                    g.setNode(node.comboId, {});
                }
                g.setParent(node.id, node.comboId);
            }
        });
        if (this.sortByCombo && combos) {
            combos.forEach(function (combo) {
                if (!combo.parentId)
                    return;
                if (!comboMap[combo.parentId]) {
                    comboMap[combo.parentId] = true;
                    g.setNode(combo.parentId, {});
                }
                g.setParent(combo.id, combo.parentId);
            });
        }
        edges.forEach(function (edge) {
            // dagrejs Wiki https://github.com/dagrejs/dagre/wiki#configuring-the-layout
            g.setEdge(edge.source, edge.target, {
                weight: edge.weight || 1,
            });
        });
        dagre_1.default.layout(g);
        var coord;
        g.nodes().forEach(function (node) {
            coord = g.node(node);
            var i = nodes.findIndex(function (it) { return it.id === node; });
            if (!nodes[i])
                return;
            nodes[i].x = coord.x;
            nodes[i].y = coord.y;
        });
        g.edges().forEach(function (edge) {
            coord = g.edge(edge);
            var i = edges.findIndex(function (it) { return it.source === edge.v && it.target === edge.w; });
            if (self.controlPoints && edges[i].type !== "loop") {
                edges[i].controlPoints = coord.points.slice(1, coord.points.length - 1);
            }
        });
        if (self.onLayoutEnd)
            self.onLayoutEnd();
        return {
            nodes: nodes,
            edges: edges,
        };
    };
    DagreLayout.prototype.getType = function () {
        return "dagre";
    };
    return DagreLayout;
}(base_1.Base));
exports.DagreLayout = DagreLayout;
function getFunc(func, value, defaultValue) {
    var resultFunc;
    if (func) {
        resultFunc = func;
    }
    else if (util_1.isNumber(value)) {
        resultFunc = function () { return value; };
    }
    else {
        resultFunc = function () { return defaultValue; };
    }
    return resultFunc;
}
//# sourceMappingURL=dagre.js.map
}, function(modId) { var map = {"dagre":1679470356576,"../util":1679470356560,"./base":1679470356559}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356577, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./radial"), exports);
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"./radial":1679470356578}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356578, function(require, module, exports) {

/**
 * @fileOverview random layout
 * @author shiwu.wyy@antfin.com
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadialLayout = void 0;
var util_1 = require("../../util");
var base_1 = require("../base");
var mds_1 = __importDefault(require("./mds"));
var radialNonoverlapForce_1 = __importDefault(require("./radialNonoverlapForce"));
function getWeightMatrix(M) {
    var rows = M.length;
    var cols = M[0].length;
    var result = [];
    for (var i = 0; i < rows; i++) {
        var row = [];
        for (var j = 0; j < cols; j++) {
            if (M[i][j] !== 0) {
                row.push(1 / (M[i][j] * M[i][j]));
            }
            else {
                row.push(0);
            }
        }
        result.push(row);
    }
    return result;
}
function getIndexById(array, id) {
    var index = -1;
    array.forEach(function (a, i) {
        if (a.id === id) {
            index = i;
        }
    });
    return index;
}
function getEDistance(p1, p2) {
    return Math.sqrt((p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]));
}
/**
 * 辐射状布局
 */
var RadialLayout = /** @class */ (function (_super) {
    __extends(RadialLayout, _super);
    function RadialLayout(options) {
        var _this = _super.call(this) || this;
        /** 停止迭代的最大迭代数 */
        _this.maxIteration = 1000;
        /** 中心点，默认为数据中第一个点 */
        _this.focusNode = null;
        /** 每一圈半径 */
        _this.unitRadius = null;
        /** 默认边长度 */
        _this.linkDistance = 50;
        /** 是否防止重叠 */
        _this.preventOverlap = false;
        /** 是否必须是严格的 radial 布局，即每一层的节点严格布局在一个环上。preventOverlap 为 true 时生效 */
        _this.strictRadial = true;
        /** 防止重叠步骤的最大迭代次数 */
        _this.maxPreventOverlapIteration = 200;
        _this.sortStrength = 10;
        _this.nodes = [];
        _this.edges = [];
        _this.updateCfg(options);
        return _this;
    }
    RadialLayout.prototype.getDefaultCfg = function () {
        return {
            maxIteration: 1000,
            focusNode: null,
            unitRadius: null,
            linkDistance: 50,
            preventOverlap: false,
            nodeSize: undefined,
            nodeSpacing: undefined,
            strictRadial: true,
            maxPreventOverlapIteration: 200,
            sortBy: undefined,
            sortStrength: 10
        };
    };
    /**
     * 执行布局
     */
    RadialLayout.prototype.execute = function () {
        var self = this;
        var nodes = self.nodes;
        var edges = self.edges || [];
        if (!nodes || nodes.length === 0) {
            if (self.onLayoutEnd)
                self.onLayoutEnd();
            return;
        }
        if (!self.width && typeof window !== "undefined") {
            self.width = window.innerWidth;
        }
        if (!self.height && typeof window !== "undefined") {
            self.height = window.innerHeight;
        }
        if (!self.center) {
            self.center = [self.width / 2, self.height / 2];
        }
        var center = self.center;
        if (nodes.length === 1) {
            nodes[0].x = center[0];
            nodes[0].y = center[1];
            if (self.onLayoutEnd)
                self.onLayoutEnd();
            return;
        }
        var linkDistance = self.linkDistance;
        // layout
        var focusNode = null;
        if (util_1.isString(self.focusNode)) {
            var found = false;
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i].id === self.focusNode) {
                    focusNode = nodes[i];
                    self.focusNode = focusNode;
                    found = true;
                    i = nodes.length;
                }
            }
            if (!found) {
                focusNode = null;
            }
        }
        else {
            focusNode = self.focusNode;
        }
        // default focus node
        if (!focusNode) {
            focusNode = nodes[0];
            self.focusNode = focusNode;
        }
        // the index of the focusNode in data
        var focusIndex = getIndexById(nodes, focusNode.id);
        self.focusIndex = focusIndex;
        // the graph-theoretic distance (shortest path distance) matrix
        var adjMatrix = util_1.getAdjMatrix({ nodes: nodes, edges: edges }, false);
        var D = util_1.floydWarshall(adjMatrix);
        var maxDistance = self.maxToFocus(D, focusIndex);
        // replace first node in unconnected component to the circle at (maxDistance + 1)
        self.handleInfinity(D, focusIndex, maxDistance + 1);
        self.distances = D;
        // the shortest path distance from each node to focusNode
        var focusNodeD = D[focusIndex];
        var width = self.width || 500;
        var height = self.height || 500;
        var semiWidth = width - center[0] > center[0] ? center[0] : width - center[0];
        var semiHeight = height - center[1] > center[1] ? center[1] : height - center[1];
        if (semiWidth === 0) {
            semiWidth = width / 2;
        }
        if (semiHeight === 0) {
            semiHeight = height / 2;
        }
        // the maxRadius of the graph
        var maxRadius = semiHeight > semiWidth ? semiWidth : semiHeight;
        var maxD = Math.max.apply(Math, focusNodeD);
        // the radius for each nodes away from focusNode
        var radii = [];
        focusNodeD.forEach(function (value, i) {
            if (!self.unitRadius) {
                self.unitRadius = maxRadius / maxD;
            }
            radii[i] = value * self.unitRadius;
        });
        self.radii = radii;
        var eIdealD = self.eIdealDisMatrix();
        // const eIdealD = scaleMatrix(D, linkDistance);
        self.eIdealDistances = eIdealD;
        // the weight matrix, Wij = 1 / dij^(-2)
        var W = getWeightMatrix(eIdealD);
        self.weights = W;
        // the initial positions from mds
        var mds = new mds_1.default({ linkDistance: linkDistance, distances: eIdealD });
        var positions = mds.layout();
        positions.forEach(function (p) {
            if (util_1.isNaN(p[0])) {
                p[0] = Math.random() * linkDistance;
            }
            if (util_1.isNaN(p[1])) {
                p[1] = Math.random() * linkDistance;
            }
        });
        self.positions = positions;
        positions.forEach(function (p, i) {
            nodes[i].x = p[0] + center[0];
            nodes[i].y = p[1] + center[1];
        });
        // move the graph to origin, centered at focusNode
        positions.forEach(function (p) {
            p[0] -= positions[focusIndex][0];
            p[1] -= positions[focusIndex][1];
        });
        self.run();
        var preventOverlap = self.preventOverlap;
        var nodeSize = self.nodeSize;
        var nodeSizeFunc;
        var strictRadial = self.strictRadial;
        // stagger the overlapped nodes
        if (preventOverlap) {
            var nodeSpacing_1 = self.nodeSpacing;
            var nodeSpacingFunc_1;
            if (util_1.isNumber(nodeSpacing_1)) {
                nodeSpacingFunc_1 = function () { return nodeSpacing_1; };
            }
            else if (util_1.isFunction(nodeSpacing_1)) {
                nodeSpacingFunc_1 = nodeSpacing_1;
            }
            else {
                nodeSpacingFunc_1 = function () { return 0; };
            }
            if (!nodeSize) {
                nodeSizeFunc = function (d) {
                    if (d.size) {
                        if (util_1.isArray(d.size)) {
                            var res = d.size[0] > d.size[1] ? d.size[0] : d.size[1];
                            return res + nodeSpacingFunc_1(d);
                        }
                        return d.size + nodeSpacingFunc_1(d);
                    }
                    return 10 + nodeSpacingFunc_1(d);
                };
            }
            else if (util_1.isArray(nodeSize)) {
                nodeSizeFunc = function (d) {
                    var res = nodeSize[0] > nodeSize[1] ? nodeSize[0] : nodeSize[1];
                    return res + nodeSpacingFunc_1(d);
                };
            }
            else {
                nodeSizeFunc = function (d) { return nodeSize + nodeSpacingFunc_1(d); };
            }
            var nonoverlapForceParams = {
                nodes: nodes,
                nodeSizeFunc: nodeSizeFunc,
                adjMatrix: adjMatrix,
                positions: positions,
                radii: radii,
                height: height,
                width: width,
                strictRadial: strictRadial,
                focusID: focusIndex,
                iterations: self.maxPreventOverlapIteration || 200,
                k: positions.length / 4.5
            };
            var nonoverlapForce = new radialNonoverlapForce_1.default(nonoverlapForceParams);
            positions = nonoverlapForce.layout();
        }
        // move the graph to center
        positions.forEach(function (p, i) {
            nodes[i].x = p[0] + center[0];
            nodes[i].y = p[1] + center[1];
        });
        if (self.onLayoutEnd)
            self.onLayoutEnd();
        return {
            nodes: nodes,
            edges: edges
        };
    };
    RadialLayout.prototype.run = function () {
        var self = this;
        var maxIteration = self.maxIteration;
        var positions = self.positions || [];
        var W = self.weights || [];
        var eIdealDis = self.eIdealDistances || [];
        var radii = self.radii || [];
        for (var i = 0; i <= maxIteration; i++) {
            var param = i / maxIteration;
            self.oneIteration(param, positions, radii, eIdealDis, W);
        }
    };
    RadialLayout.prototype.oneIteration = function (param, positions, radii, D, W) {
        var self = this;
        var vparam = 1 - param;
        var focusIndex = self.focusIndex;
        positions.forEach(function (v, i) {
            // v
            var originDis = getEDistance(v, [0, 0]);
            var reciODis = originDis === 0 ? 0 : 1 / originDis;
            if (i === focusIndex) {
                return;
            }
            var xMolecule = 0;
            var yMolecule = 0;
            var denominator = 0;
            positions.forEach(function (u, j) {
                // u
                if (i === j) {
                    return;
                }
                // the euclidean distance between v and u
                var edis = getEDistance(v, u);
                var reciEdis = edis === 0 ? 0 : 1 / edis;
                var idealDis = D[j][i];
                // same for x and y
                denominator += W[i][j];
                // x
                xMolecule += W[i][j] * (u[0] + idealDis * (v[0] - u[0]) * reciEdis);
                // y
                yMolecule += W[i][j] * (u[1] + idealDis * (v[1] - u[1]) * reciEdis);
            });
            var reciR = radii[i] === 0 ? 0 : 1 / radii[i];
            denominator *= vparam;
            denominator += param * reciR * reciR;
            // x
            xMolecule *= vparam;
            xMolecule += param * reciR * v[0] * reciODis;
            v[0] = xMolecule / denominator;
            // y
            yMolecule *= vparam;
            yMolecule += param * reciR * v[1] * reciODis;
            v[1] = yMolecule / denominator;
        });
    };
    RadialLayout.prototype.eIdealDisMatrix = function () {
        var self = this;
        var nodes = self.nodes;
        if (!nodes)
            return [];
        var D = self.distances;
        var linkDis = self.linkDistance;
        var radii = self.radii || [];
        var unitRadius = self.unitRadius || 50;
        var result = [];
        if (D) {
            D.forEach(function (row, i) {
                var newRow = [];
                row.forEach(function (v, j) {
                    if (i === j) {
                        newRow.push(0);
                    }
                    else if (radii[i] === radii[j]) {
                        // i and j are on the same circle
                        if (self.sortBy === "data") {
                            // sort the nodes on the same circle according to the ordering of the data
                            newRow.push((v * (Math.abs(i - j) * self.sortStrength)) /
                                (radii[i] / unitRadius));
                        }
                        else if (self.sortBy) {
                            // sort the nodes on the same circle according to the attributes
                            var iValue = nodes[i][self.sortBy] || 0;
                            var jValue = nodes[j][self.sortBy] || 0;
                            if (util_1.isString(iValue)) {
                                iValue = iValue.charCodeAt(0);
                            }
                            if (util_1.isString(jValue)) {
                                jValue = jValue.charCodeAt(0);
                            }
                            newRow.push((v * (Math.abs(iValue - jValue) * self.sortStrength)) /
                                (radii[i] / unitRadius));
                        }
                        else {
                            newRow.push((v * linkDis) / (radii[i] / unitRadius));
                        }
                    }
                    else {
                        // i and j are on different circle
                        // i and j are on different circle
                        var link = (linkDis + unitRadius) / 2;
                        newRow.push(v * link);
                    }
                });
                result.push(newRow);
            });
        }
        return result;
    };
    RadialLayout.prototype.handleInfinity = function (matrix, focusIndex, step) {
        var length = matrix.length;
        // 遍历 matrix 中遍历 focus 对应行
        for (var i = 0; i < length; i++) {
            // matrix 关注点对应行的 Inf 项
            if (matrix[focusIndex][i] === Infinity) {
                matrix[focusIndex][i] = step;
                matrix[i][focusIndex] = step;
                // 遍历 matrix 中的 i 行，i 行中非 Inf 项若在 focus 行为 Inf，则替换 focus 行的那个 Inf
                for (var j = 0; j < length; j++) {
                    if (matrix[i][j] !== Infinity && matrix[focusIndex][j] === Infinity) {
                        matrix[focusIndex][j] = step + matrix[i][j];
                        matrix[j][focusIndex] = step + matrix[i][j];
                    }
                }
            }
        }
        // 处理其他行的 Inf。根据该行对应点与 focus 距离以及 Inf 项点 与 focus 距离，决定替换值
        for (var i = 0; i < length; i++) {
            if (i === focusIndex) {
                continue;
            }
            for (var j = 0; j < length; j++) {
                if (matrix[i][j] === Infinity) {
                    var minus = Math.abs(matrix[focusIndex][i] - matrix[focusIndex][j]);
                    minus = minus === 0 ? 1 : minus;
                    matrix[i][j] = minus;
                }
            }
        }
    };
    RadialLayout.prototype.maxToFocus = function (matrix, focusIndex) {
        var max = 0;
        for (var i = 0; i < matrix[focusIndex].length; i++) {
            if (matrix[focusIndex][i] === Infinity) {
                continue;
            }
            max = matrix[focusIndex][i] > max ? matrix[focusIndex][i] : max;
        }
        return max;
    };
    RadialLayout.prototype.getType = function () {
        return "radial";
    };
    return RadialLayout;
}(base_1.Base));
exports.RadialLayout = RadialLayout;
//# sourceMappingURL=radial.js.map
}, function(modId) { var map = {"../../util":1679470356560,"../base":1679470356559,"./mds":1679470356579,"./radialNonoverlapForce":1679470356580}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356579, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var ml_matrix_1 = require("ml-matrix");
var MDS = /** @class */ (function () {
    function MDS(params) {
        this.distances = params.distances;
        this.dimension = params.dimension || 2;
        this.linkDistance = params.linkDistance;
    }
    MDS.prototype.layout = function () {
        var self = this;
        var dimension = self.dimension, distances = self.distances, linkDistance = self.linkDistance;
        try {
            // square distances
            var M = ml_matrix_1.Matrix.mul(ml_matrix_1.Matrix.pow(distances, 2), -0.5);
            // double centre the rows/columns
            var rowMeans = M.mean('row');
            var colMeans = M.mean('column');
            var totalMean = M.mean();
            M.add(totalMean).subRowVector(rowMeans).subColumnVector(colMeans);
            // take the SVD of the double centred matrix, and return the
            // points from it
            var ret = new ml_matrix_1.SingularValueDecomposition(M);
            var eigenValues_1 = ml_matrix_1.Matrix.sqrt(ret.diagonalMatrix).diagonal();
            return ret.leftSingularVectors.toJSON().map(function (row) {
                return ml_matrix_1.Matrix.mul([row], [eigenValues_1]).toJSON()[0].splice(0, dimension);
            });
        }
        catch (_a) {
            var res = [];
            for (var i = 0; i < distances.length; i++) {
                var x = Math.random() * linkDistance;
                var y = Math.random() * linkDistance;
                res.push([x, y]);
            }
            return res;
        }
    };
    return MDS;
}());
exports.default = MDS;
//# sourceMappingURL=mds.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356580, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var SPEED_DIVISOR = 800;
var RadialNonoverlapForce = /** @class */ (function () {
    function RadialNonoverlapForce(params) {
        this.disp = [];
        this.positions = params.positions;
        this.adjMatrix = params.adjMatrix;
        this.focusID = params.focusID;
        this.radii = params.radii;
        this.iterations = params.iterations || 10;
        this.height = params.height || 10;
        this.width = params.width || 10;
        this.speed = params.speed || 100;
        this.gravity = params.gravity || 10;
        this.nodeSizeFunc = params.nodeSizeFunc;
        this.k = params.k || 5;
        this.strictRadial = params.strictRadial;
        this.nodes = params.nodes;
    }
    RadialNonoverlapForce.prototype.layout = function () {
        var self = this;
        var positions = self.positions;
        var disp = [];
        var iterations = self.iterations;
        var maxDisplace = self.width / 10;
        self.maxDisplace = maxDisplace;
        self.disp = disp;
        for (var i = 0; i < iterations; i++) {
            positions.forEach(function (_, k) {
                disp[k] = { x: 0, y: 0 };
            });
            // 给重叠的节点增加斥力
            self.getRepulsion();
            self.updatePositions();
        }
        return positions;
    };
    RadialNonoverlapForce.prototype.getRepulsion = function () {
        var self = this;
        var positions = self.positions;
        var nodes = self.nodes;
        var disp = self.disp;
        var k = self.k;
        var radii = self.radii || [];
        positions.forEach(function (v, i) {
            disp[i] = { x: 0, y: 0 };
            positions.forEach(function (u, j) {
                if (i === j) {
                    return;
                }
                // v and u are not on the same circle, return
                if (radii[i] !== radii[j]) {
                    return;
                }
                var vecx = v[0] - u[0];
                var vecy = v[1] - u[1];
                var vecLength = Math.sqrt(vecx * vecx + vecy * vecy);
                if (vecLength === 0) {
                    vecLength = 1;
                    var sign = i > j ? 1 : -1;
                    vecx = 0.01 * sign;
                    vecy = 0.01 * sign;
                }
                // these two nodes overlap
                if (vecLength < self.nodeSizeFunc(nodes[i]) / 2 + self.nodeSizeFunc(nodes[j]) / 2) {
                    var common = (k * k) / vecLength;
                    disp[i].x += (vecx / vecLength) * common;
                    disp[i].y += (vecy / vecLength) * common;
                }
            });
        });
    };
    RadialNonoverlapForce.prototype.updatePositions = function () {
        var self = this;
        var positions = self.positions;
        var disp = self.disp;
        var speed = self.speed;
        var strictRadial = self.strictRadial;
        var f = self.focusID;
        var maxDisplace = self.maxDisplace || self.width / 10;
        if (strictRadial) {
            disp.forEach(function (di, i) {
                var vx = positions[i][0] - positions[f][0];
                var vy = positions[i][1] - positions[f][1];
                var vLength = Math.sqrt(vx * vx + vy * vy);
                var vpx = vy / vLength;
                var vpy = -vx / vLength;
                var diLength = Math.sqrt(di.x * di.x + di.y * di.y);
                var alpha = Math.acos((vpx * di.x + vpy * di.y) / diLength);
                if (alpha > Math.PI / 2) {
                    alpha -= Math.PI / 2;
                    vpx *= -1;
                    vpy *= -1;
                }
                var tdispLength = Math.cos(alpha) * diLength;
                di.x = vpx * tdispLength;
                di.y = vpy * tdispLength;
            });
        }
        // move
        var radii = self.radii;
        positions.forEach(function (n, i) {
            if (i === f) {
                return;
            }
            var distLength = Math.sqrt(disp[i].x * disp[i].x + disp[i].y * disp[i].y);
            if (distLength > 0 && i !== f) {
                var limitedDist = Math.min(maxDisplace * (speed / SPEED_DIVISOR), distLength);
                n[0] += (disp[i].x / distLength) * limitedDist;
                n[1] += (disp[i].y / distLength) * limitedDist;
                if (strictRadial) {
                    var vx = n[0] - positions[f][0];
                    var vy = n[1] - positions[f][1];
                    var nfDis = Math.sqrt(vx * vx + vy * vy);
                    vx = (vx / nfDis) * radii[i];
                    vy = (vy / nfDis) * radii[i];
                    n[0] = positions[f][0] + vx;
                    n[1] = positions[f][1] + vy;
                }
            }
        });
    };
    return RadialNonoverlapForce;
}());
exports.default = RadialNonoverlapForce;
//# sourceMappingURL=radialNonoverlapForce.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356581, function(require, module, exports) {

/**
 * @fileOverview concentric layout
 * @author shiwu.wyy@antfin.com
 * this algorithm refers to <cytoscape.js> - https://github.com/cytoscape/cytoscape.js/
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcentricLayout = void 0;
var util_1 = require("../util");
var base_1 = require("./base");
/**
 * 同心圆布局
 */
var ConcentricLayout = /** @class */ (function (_super) {
    __extends(ConcentricLayout, _super);
    function ConcentricLayout(options) {
        var _this = _super.call(this) || this;
        _this.nodeSize = 30;
        /** min spacing between outside of nodes (used for radius adjustment) */
        _this.minNodeSpacing = 10;
        /** prevents node overlap, may overflow boundingBox if not enough space */
        _this.preventOverlap = false;
        /** whether levels have an equal radial distance betwen them, may cause bounding box overflow */
        _this.equidistant = false;
        /** where nodes start in radians */
        _this.startAngle = (3 / 2) * Math.PI;
        /** whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false) */
        _this.clockwise = true;
        /** 根据 sortBy 指定的属性进行排布，数值高的放在中心，如果是 sortBy 则会计算节点度数，度数最高的放在中心 */
        _this.sortBy = "degree";
        _this.nodes = [];
        _this.edges = [];
        _this.width = 300;
        _this.height = 300;
        /** 迭代结束的回调函数 */
        _this.onLayoutEnd = function () { };
        _this.updateCfg(options);
        return _this;
    }
    ConcentricLayout.prototype.getDefaultCfg = function () {
        return {
            nodeSize: 30,
            minNodeSpacing: 10,
            preventOverlap: false,
            sweep: undefined,
            equidistant: false,
            startAngle: (3 / 2) * Math.PI,
            clockwise: true,
            maxLevelDiff: undefined,
            sortBy: "degree"
        };
    };
    /**
     * 执行布局
     */
    ConcentricLayout.prototype.execute = function () {
        var self = this;
        var nodes = self.nodes;
        var edges = self.edges;
        var n = nodes.length;
        if (n === 0) {
            if (self.onLayoutEnd)
                self.onLayoutEnd();
            return;
        }
        if (!self.width && typeof window !== "undefined") {
            self.width = window.innerWidth;
        }
        if (!self.height && typeof window !== "undefined") {
            self.height = window.innerHeight;
        }
        if (!self.center) {
            self.center = [self.width / 2, self.height / 2];
        }
        var center = self.center;
        if (n === 1) {
            nodes[0].x = center[0];
            nodes[0].y = center[1];
            if (self.onLayoutEnd)
                self.onLayoutEnd();
            return;
        }
        var layoutNodes = [];
        var maxNodeSize;
        if (util_1.isArray(self.nodeSize)) {
            maxNodeSize = Math.max(self.nodeSize[0], self.nodeSize[1]);
        }
        else {
            maxNodeSize = self.nodeSize;
        }
        nodes.forEach(function (node) {
            layoutNodes.push(node);
            var nodeSize = maxNodeSize;
            if (util_1.isArray(node.size)) {
                nodeSize = Math.max(node.size[0], node.size[1]);
            }
            else if (util_1.isNumber(node.size)) {
                nodeSize = node.size;
            }
            maxNodeSize = Math.max(maxNodeSize, nodeSize);
        });
        self.clockwise =
            self.counterclockwise !== undefined
                ? !self.counterclockwise
                : self.clockwise;
        // layout
        var nodeMap = {};
        var indexMap = {};
        layoutNodes.forEach(function (node, i) {
            nodeMap[node.id] = node;
            indexMap[node.id] = i;
        });
        // get the node degrees
        if (self.sortBy === "degree" ||
            !util_1.isString(self.sortBy) ||
            layoutNodes[0][self.sortBy] === undefined) {
            self.sortBy = "degree";
            if (!util_1.isNumber(nodes[0].degree)) {
                var values_1 = util_1.getDegree(nodes.length, indexMap, edges);
                layoutNodes.forEach(function (node, i) {
                    node.degree = values_1[i];
                });
            }
        }
        // sort nodes by value
        layoutNodes.sort(function (n1, n2) {
            return n2[self.sortBy] - n1[self.sortBy];
        });
        self.maxValueNode = layoutNodes[0];
        self.maxLevelDiff =
            self.maxLevelDiff || self.maxValueNode[self.sortBy] / 4;
        // put the values into levels
        var levels = [[]];
        var currentLevel = levels[0];
        layoutNodes.forEach(function (node) {
            if (currentLevel.length > 0) {
                var diff = Math.abs(currentLevel[0][self.sortBy] - node[self.sortBy]);
                if (self.maxLevelDiff && diff >= self.maxLevelDiff) {
                    currentLevel = [];
                    levels.push(currentLevel);
                }
            }
            currentLevel.push(node);
        });
        // create positions for levels
        var minDist = maxNodeSize + self.minNodeSpacing; // min dist between nodes
        if (!self.preventOverlap) {
            // then strictly constrain to bb
            var firstLvlHasMulti = levels.length > 0 && levels[0].length > 1;
            var maxR = Math.min(self.width, self.height) / 2 - minDist;
            var rStep = maxR / (levels.length + (firstLvlHasMulti ? 1 : 0));
            minDist = Math.min(minDist, rStep);
        }
        // find the metrics for each level
        var r = 0;
        levels.forEach(function (level) {
            var sweep = self.sweep;
            if (sweep === undefined) {
                sweep = 2 * Math.PI - (2 * Math.PI) / level.length;
            }
            var dTheta = (level.dTheta = sweep / Math.max(1, level.length - 1));
            // calculate the radius
            if (level.length > 1 && self.preventOverlap) {
                // but only if more than one node (can't overlap)
                var dcos = Math.cos(dTheta) - Math.cos(0);
                var dsin = Math.sin(dTheta) - Math.sin(0);
                var rMin = Math.sqrt((minDist * minDist) / (dcos * dcos + dsin * dsin)); // s.t. no nodes overlapping
                r = Math.max(rMin, r);
            }
            level.r = r;
            r += minDist;
        });
        if (self.equidistant) {
            var rDeltaMax_1 = 0;
            var rr_1 = 0;
            for (var i = 0; i < levels.length; i++) {
                var level = levels[i];
                var rDelta = level.r - rr_1;
                rDeltaMax_1 = Math.max(rDeltaMax_1, rDelta);
            }
            rr_1 = 0;
            levels.forEach(function (level, i) {
                if (i === 0) {
                    rr_1 = level.r;
                }
                level.r = rr_1;
                rr_1 += rDeltaMax_1;
            });
        }
        // calculate the node positions
        levels.forEach(function (level) {
            var dTheta = level.dTheta;
            var rr = level.r;
            level.forEach(function (node, j) {
                var theta = self.startAngle + (self.clockwise ? 1 : -1) * dTheta * j;
                node.x = center[0] + rr * Math.cos(theta);
                node.y = center[1] + rr * Math.sin(theta);
            });
        });
        if (self.onLayoutEnd)
            self.onLayoutEnd();
        return {
            nodes: nodes,
            edges: edges
        };
    };
    ConcentricLayout.prototype.getType = function () {
        return "concentric";
    };
    return ConcentricLayout;
}(base_1.Base));
exports.ConcentricLayout = ConcentricLayout;
//# sourceMappingURL=concentric.js.map
}, function(modId) { var map = {"../util":1679470356560,"./base":1679470356559}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356582, function(require, module, exports) {

/**
 * @fileOverview MDS layout
 * @author shiwu.wyy@antfin.com
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MDSLayout = void 0;
var ml_matrix_1 = require("ml-matrix");
var util_1 = require("../util");
var base_1 = require("./base");
/**
 * mds 布局
 */
var MDSLayout = /** @class */ (function (_super) {
    __extends(MDSLayout, _super);
    function MDSLayout(options) {
        var _this = _super.call(this) || this;
        /** 布局中心 */
        _this.center = [0, 0];
        /** 边长度 */
        _this.linkDistance = 50;
        _this.nodes = [];
        _this.edges = [];
        /** 迭代结束的回调函数 */
        _this.onLayoutEnd = function () { };
        _this.updateCfg(options);
        return _this;
    }
    MDSLayout.prototype.getDefaultCfg = function () {
        return {
            center: [0, 0],
            linkDistance: 50
        };
    };
    /**
     * 执行布局
     */
    MDSLayout.prototype.execute = function () {
        var self = this;
        var nodes = self.nodes, _a = self.edges, edges = _a === void 0 ? [] : _a;
        var center = self.center;
        if (!nodes || nodes.length === 0) {
            if (self.onLayoutEnd)
                self.onLayoutEnd();
            return;
        }
        if (nodes.length === 1) {
            nodes[0].x = center[0];
            nodes[0].y = center[1];
            if (self.onLayoutEnd)
                self.onLayoutEnd();
            return;
        }
        var linkDistance = self.linkDistance;
        // the graph-theoretic distance (shortest path distance) matrix
        var adjMatrix = util_1.getAdjMatrix({ nodes: nodes, edges: edges }, false);
        var distances = util_1.floydWarshall(adjMatrix);
        self.handleInfinity(distances);
        // scale the ideal edge length acoording to linkDistance
        var scaledD = util_1.scaleMatrix(distances, linkDistance);
        self.scaledDistances = scaledD;
        // get positions by MDS
        var positions = self.runMDS();
        self.positions = positions;
        positions.forEach(function (p, i) {
            nodes[i].x = p[0] + center[0];
            nodes[i].y = p[1] + center[1];
        });
        if (self.onLayoutEnd)
            self.onLayoutEnd();
        return {
            nodes: nodes,
            edges: edges
        };
    };
    /**
     * mds 算法
     * @return {array} positions 计算后的节点位置数组
     */
    MDSLayout.prototype.runMDS = function () {
        var self = this;
        var dimension = 2;
        var distances = self.scaledDistances;
        // square distances
        var M = ml_matrix_1.Matrix.mul(ml_matrix_1.Matrix.pow(distances, 2), -0.5);
        // double centre the rows/columns
        var rowMeans = M.mean("row");
        var colMeans = M.mean("column");
        var totalMean = M.mean();
        M.add(totalMean)
            .subRowVector(rowMeans)
            .subColumnVector(colMeans);
        // take the SVD of the double centred matrix, and return the
        // points from it
        var ret = new ml_matrix_1.SingularValueDecomposition(M);
        var eigenValues = ml_matrix_1.Matrix.sqrt(ret.diagonalMatrix).diagonal();
        return ret.leftSingularVectors.toJSON().map(function (row) {
            return ml_matrix_1.Matrix.mul([row], [eigenValues])
                .toJSON()[0]
                .splice(0, dimension);
        });
    };
    MDSLayout.prototype.handleInfinity = function (distances) {
        var maxDistance = -999999;
        distances.forEach(function (row) {
            row.forEach(function (value) {
                if (value === Infinity) {
                    return;
                }
                if (maxDistance < value) {
                    maxDistance = value;
                }
            });
        });
        distances.forEach(function (row, i) {
            row.forEach(function (value, j) {
                if (value === Infinity) {
                    distances[i][j] = maxDistance;
                }
            });
        });
    };
    MDSLayout.prototype.getType = function () {
        return "mds";
    };
    return MDSLayout;
}(base_1.Base));
exports.MDSLayout = MDSLayout;
//# sourceMappingURL=mds.js.map
}, function(modId) { var map = {"../util":1679470356560,"./base":1679470356559}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356583, function(require, module, exports) {

/**
 * @fileOverview fruchterman layout
 * @author shiwu.wyy@antfin.com
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FruchtermanLayout = void 0;
var base_1 = require("./base");
var util_1 = require("../util");
var SPEED_DIVISOR = 800;
/**
 * fruchterman 布局
 */
var FruchtermanLayout = /** @class */ (function (_super) {
    __extends(FruchtermanLayout, _super);
    function FruchtermanLayout(options) {
        var _this = _super.call(this) || this;
        /** 停止迭代的最大迭代数 */
        _this.maxIteration = 1000;
        /** 重力大小，影响图的紧凑程度 */
        _this.gravity = 10;
        /** 速度 */
        _this.speed = 5;
        /** 是否产生聚类力 */
        _this.clustering = false;
        /** 聚类力大小 */
        _this.clusterGravity = 10;
        _this.nodes = [];
        _this.edges = [];
        _this.width = 300;
        _this.height = 300;
        _this.nodeMap = {};
        _this.nodeIdxMap = {};
        /** 迭代结束的回调函数 */
        _this.onLayoutEnd = function () { };
        /** 每次迭代结束的回调函数 */
        _this.tick = function () { };
        _this.updateCfg(options);
        return _this;
    }
    FruchtermanLayout.prototype.getDefaultCfg = function () {
        return {
            maxIteration: 1000,
            gravity: 10,
            speed: 1,
            clustering: false,
            clusterGravity: 10
        };
    };
    /**
     * 执行布局
     */
    FruchtermanLayout.prototype.execute = function () {
        var _this = this;
        var self = this;
        var nodes = self.nodes;
        if (self.timeInterval !== undefined && typeof window !== "undefined") {
            window.clearInterval(self.timeInterval);
        }
        if (!nodes || nodes.length === 0) {
            if (self.onLayoutEnd)
                self.onLayoutEnd();
            return;
        }
        if (!self.width && typeof window !== "undefined") {
            self.width = window.innerWidth;
        }
        if (!self.height && typeof window !== "undefined") {
            self.height = window.innerHeight;
        }
        if (!self.center) {
            self.center = [self.width / 2, self.height / 2];
        }
        var center = self.center;
        if (nodes.length === 1) {
            nodes[0].x = center[0];
            nodes[0].y = center[1];
            if (self.onLayoutEnd)
                self.onLayoutEnd();
            return;
        }
        var nodeMap = {};
        var nodeIdxMap = {};
        nodes.forEach(function (node, i) {
            if (!util_1.isNumber(node.x))
                node.x = Math.random() * _this.width;
            if (!util_1.isNumber(node.y))
                node.y = Math.random() * _this.height;
            nodeMap[node.id] = node;
            nodeIdxMap[node.id] = i;
        });
        self.nodeMap = nodeMap;
        self.nodeIdxMap = nodeIdxMap;
        // layout
        return self.run();
    };
    FruchtermanLayout.prototype.run = function () {
        var self = this;
        var nodes = self.nodes;
        if (!nodes)
            return;
        var edges = self.edges;
        var maxIteration = self.maxIteration;
        var center = self.center;
        var area = self.height * self.width;
        var maxDisplace = Math.sqrt(area) / 10;
        var k2 = area / (nodes.length + 1);
        var k = Math.sqrt(k2);
        var gravity = self.gravity;
        var speed = self.speed;
        var clustering = self.clustering;
        var clusterMap = {};
        if (clustering) {
            nodes.forEach(function (n) {
                if (clusterMap[n.cluster] === undefined) {
                    var cluster = {
                        name: n.cluster,
                        cx: 0,
                        cy: 0,
                        count: 0
                    };
                    clusterMap[n.cluster] = cluster;
                }
                var c = clusterMap[n.cluster];
                if (util_1.isNumber(n.x)) {
                    c.cx += n.x;
                }
                if (util_1.isNumber(n.y)) {
                    c.cy += n.y;
                }
                c.count++;
            });
            for (var key in clusterMap) {
                clusterMap[key].cx /= clusterMap[key].count;
                clusterMap[key].cy /= clusterMap[key].count;
            }
        }
        if (typeof window === "undefined")
            return;
        var iter = 0;
        // interval for render the result after each iteration
        this.timeInterval = window.setInterval(function () {
            if (!nodes)
                return;
            // for (let i = 0; i < maxIteration; i++) {
            var displacements = [];
            nodes.forEach(function (_, j) {
                displacements[j] = { x: 0, y: 0 };
            });
            self.applyCalculate(nodes, edges, displacements, k, k2);
            // gravity for clusters
            if (clustering) {
                var clusterGravity_1 = self.clusterGravity || gravity;
                nodes.forEach(function (n, j) {
                    if (!util_1.isNumber(n.x) || !util_1.isNumber(n.y))
                        return;
                    var c = clusterMap[n.cluster];
                    var distLength = Math.sqrt((n.x - c.cx) * (n.x - c.cx) + (n.y - c.cy) * (n.y - c.cy));
                    var gravityForce = k * clusterGravity_1;
                    displacements[j].x -= (gravityForce * (n.x - c.cx)) / distLength;
                    displacements[j].y -= (gravityForce * (n.y - c.cy)) / distLength;
                });
                for (var key in clusterMap) {
                    clusterMap[key].cx = 0;
                    clusterMap[key].cy = 0;
                    clusterMap[key].count = 0;
                }
                nodes.forEach(function (n) {
                    var c = clusterMap[n.cluster];
                    if (util_1.isNumber(n.x)) {
                        c.cx += n.x;
                    }
                    if (util_1.isNumber(n.y)) {
                        c.cy += n.y;
                    }
                    c.count++;
                });
                for (var key in clusterMap) {
                    clusterMap[key].cx /= clusterMap[key].count;
                    clusterMap[key].cy /= clusterMap[key].count;
                }
            }
            // gravity
            nodes.forEach(function (n, j) {
                if (!util_1.isNumber(n.x) || !util_1.isNumber(n.y))
                    return;
                var gravityForce = 0.01 * k * gravity;
                displacements[j].x -= gravityForce * (n.x - center[0]);
                displacements[j].y -= gravityForce * (n.y - center[1]);
            });
            // move
            nodes.forEach(function (n, j) {
                if (util_1.isNumber(n.fx) && util_1.isNumber(n.fy)) {
                    n.x = n.fx;
                    n.y = n.fy;
                    return;
                }
                if (!util_1.isNumber(n.x) || !util_1.isNumber(n.y))
                    return;
                var distLength = Math.sqrt(displacements[j].x * displacements[j].x +
                    displacements[j].y * displacements[j].y);
                if (distLength > 0) {
                    // && !n.isFixed()
                    var limitedDist = Math.min(maxDisplace * (speed / SPEED_DIVISOR), distLength);
                    n.x += (displacements[j].x / distLength) * limitedDist;
                    n.y += (displacements[j].y / distLength) * limitedDist;
                }
            });
            if (self.tick)
                self.tick();
            iter++;
            if (iter >= maxIteration) {
                if (self.onLayoutEnd)
                    self.onLayoutEnd();
                window.clearInterval(self.timeInterval);
            }
        }, 0);
        return {
            nodes: nodes,
            edges: edges
        };
    };
    FruchtermanLayout.prototype.applyCalculate = function (nodes, edges, displacements, k, k2) {
        var self = this;
        self.calRepulsive(nodes, displacements, k2);
        if (edges)
            self.calAttractive(edges, displacements, k);
    };
    FruchtermanLayout.prototype.calRepulsive = function (nodes, displacements, k2) {
        nodes.forEach(function (v, i) {
            displacements[i] = { x: 0, y: 0 };
            nodes.forEach(function (u, j) {
                if (i === j) {
                    return;
                }
                if (!util_1.isNumber(v.x) ||
                    !util_1.isNumber(u.x) ||
                    !util_1.isNumber(v.y) ||
                    !util_1.isNumber(u.y))
                    return;
                var vecX = v.x - u.x;
                var vecY = v.y - u.y;
                var vecLengthSqr = vecX * vecX + vecY * vecY;
                if (vecLengthSqr === 0) {
                    vecLengthSqr = 1;
                    var sign = i > j ? 1 : -1;
                    vecX = 0.01 * sign;
                    vecY = 0.01 * sign;
                }
                var common = k2 / vecLengthSqr;
                displacements[i].x += vecX * common;
                displacements[i].y += vecY * common;
            });
        });
    };
    FruchtermanLayout.prototype.calAttractive = function (edges, displacements, k) {
        var _this = this;
        edges.forEach(function (e) {
            if (!e.source || !e.target)
                return;
            var uIndex = _this.nodeIdxMap[e.source];
            var vIndex = _this.nodeIdxMap[e.target];
            if (uIndex === vIndex) {
                return;
            }
            var u = _this.nodeMap[e.source];
            var v = _this.nodeMap[e.target];
            if (!util_1.isNumber(v.x) || !util_1.isNumber(u.x) || !util_1.isNumber(v.y) || !util_1.isNumber(u.y))
                return;
            var vecX = v.x - u.x;
            var vecY = v.y - u.y;
            var vecLength = Math.sqrt(vecX * vecX + vecY * vecY);
            var common = (vecLength * vecLength) / k;
            displacements[vIndex].x -= (vecX / vecLength) * common;
            displacements[vIndex].y -= (vecY / vecLength) * common;
            displacements[uIndex].x += (vecX / vecLength) * common;
            displacements[uIndex].y += (vecY / vecLength) * common;
        });
    };
    FruchtermanLayout.prototype.stop = function () {
        if (this.timeInterval && typeof window !== "undefined") {
            window.clearInterval(this.timeInterval);
        }
    };
    FruchtermanLayout.prototype.destroy = function () {
        var self = this;
        self.stop();
        self.tick = null;
        self.nodes = null;
        self.edges = null;
        self.destroyed = true;
    };
    FruchtermanLayout.prototype.getType = function () {
        return "fruchterman";
    };
    return FruchtermanLayout;
}(base_1.Base));
exports.FruchtermanLayout = FruchtermanLayout;
//# sourceMappingURL=fruchterman.js.map
}, function(modId) { var map = {"./base":1679470356559,"../util":1679470356560}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356584, function(require, module, exports) {

// @ts-nocheck
/**
 * @fileOverview fruchterman layout
 * @author shiwu.wyy@antfin.com
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FruchtermanGPULayout = void 0;
var base_1 = require("../base");
var util_1 = require("../../util");
// @ts-ignore
var g_webgpu_1 = require("@antv/g-webgpu");
// compile at runtime in dev mode
var gpu_1 = require("../../util/gpu");
// use compiled bundle in prod mode
var fruchtermanShader_1 = require("./fruchtermanShader");
var constants_1 = require("../constants");
/**
 * fruchterman 布局
 */
var FruchtermanGPULayout = /** @class */ (function (_super) {
    __extends(FruchtermanGPULayout, _super);
    function FruchtermanGPULayout(options) {
        var _this = _super.call(this) || this;
        /** 停止迭代的最大迭代数 */
        _this.maxIteration = 1000;
        /** 重力大小，影响图的紧凑程度 */
        _this.gravity = 10;
        /** 速度 */
        _this.speed = 1;
        /** 是否产生聚类力 */
        _this.clustering = false;
        /** 根据哪个字段聚类 */
        _this.clusterField = "cluster";
        /** 聚类力大小 */
        _this.clusterGravity = 10;
        /** 是否启用web worker。前提是在web worker里执行布局，否则无效	*/
        _this.workerEnabled = false;
        _this.nodes = [];
        _this.edges = [];
        _this.width = 300;
        _this.height = 300;
        _this.nodeMap = {};
        _this.nodeIdxMap = {};
        _this.updateCfg(options);
        return _this;
    }
    FruchtermanGPULayout.prototype.getDefaultCfg = function () {
        return {
            maxIteration: 1000,
            gravity: 10,
            speed: 1,
            clustering: false,
            clusterGravity: 10
        };
    };
    /**
     * 执行布局
     */
    FruchtermanGPULayout.prototype.execute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self, nodes, center, nodeMap, nodeIdxMap;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        nodes = self.nodes;
                        if (!nodes || nodes.length === 0) {
                            if (self.onLayoutEnd)
                                self.onLayoutEnd();
                            return [2 /*return*/];
                        }
                        if (!self.width && typeof window !== "undefined") {
                            self.width = window.innerWidth;
                        }
                        if (!self.height && typeof window !== "undefined") {
                            self.height = window.innerHeight;
                        }
                        if (!self.center) {
                            self.center = [self.width / 2, self.height / 2];
                        }
                        center = self.center;
                        if (nodes.length === 1) {
                            nodes[0].x = center[0];
                            nodes[0].y = center[1];
                            if (self.onLayoutEnd)
                                self.onLayoutEnd();
                            return [2 /*return*/];
                        }
                        nodeMap = {};
                        nodeIdxMap = {};
                        nodes.forEach(function (node, i) {
                            if (!util_1.isNumber(node.x))
                                node.x = Math.random() * _this.width;
                            if (!util_1.isNumber(node.y))
                                node.y = Math.random() * _this.height;
                            nodeMap[node.id] = node;
                            nodeIdxMap[node.id] = i;
                        });
                        self.nodeMap = nodeMap;
                        self.nodeIdxMap = nodeIdxMap;
                        // layout
                        return [4 /*yield*/, self.run()];
                    case 1:
                        // layout
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FruchtermanGPULayout.prototype.executeWithWorker = function (canvas, ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var self, nodes, center, nodeMap, nodeIdxMap;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        nodes = self.nodes;
                        center = self.center;
                        if (!nodes || nodes.length === 0) {
                            return [2 /*return*/];
                        }
                        if (nodes.length === 1) {
                            nodes[0].x = center[0];
                            nodes[0].y = center[1];
                            return [2 /*return*/];
                        }
                        nodeMap = {};
                        nodeIdxMap = {};
                        nodes.forEach(function (node, i) {
                            if (!util_1.isNumber(node.x))
                                node.x = Math.random() * _this.width;
                            if (!util_1.isNumber(node.y))
                                node.y = Math.random() * _this.height;
                            nodeMap[node.id] = node;
                            nodeIdxMap[node.id] = i;
                        });
                        self.nodeMap = nodeMap;
                        self.nodeIdxMap = nodeIdxMap;
                        // layout
                        return [4 /*yield*/, self.run(canvas, ctx)];
                    case 1:
                        // layout
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FruchtermanGPULayout.prototype.run = function (canvas, ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var self, nodes, edges, maxIteration, center, area, maxDisplace, k2, k, speed, clustering, _a, attributeArray, clusterCount, numParticles, _b, maxEdgePerVetex, nodesEdgesArray, workerEnabled, world, onLayoutEnd, clusterCenters, i, kernelFruchterman, kernelCluster, execute;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        self = this;
                        nodes = self.nodes;
                        edges = self.edges;
                        maxIteration = self.maxIteration;
                        center = self.center;
                        area = self.height * self.width;
                        maxDisplace = Math.sqrt(area) / 10;
                        k2 = area / (nodes.length + 1);
                        k = Math.sqrt(k2);
                        speed = self.speed;
                        clustering = self.clustering;
                        _a = gpu_1.attributesToTextureData([self.clusterField], nodes), attributeArray = _a.array, clusterCount = _a.count;
                        // pushing the fx and fy
                        nodes.forEach(function (node, i) {
                            var fx = 0, fy = 0;
                            if (util_1.isNumber(node.fx) && util_1.isNumber(node.fy)) {
                                fx = node.fx || 0.001;
                                fy = node.fy || 0.001;
                            }
                            attributeArray[4 * i + 1] = fx;
                            attributeArray[4 * i + 2] = fy;
                        });
                        numParticles = nodes.length;
                        _b = gpu_1.buildTextureData(nodes, edges), maxEdgePerVetex = _b.maxEdgePerVetex, nodesEdgesArray = _b.array;
                        workerEnabled = self.workerEnabled;
                        if (workerEnabled) {
                            world = g_webgpu_1.World.create({
                                canvas: canvas,
                                engineOptions: {
                                    supportCompute: true
                                }
                            });
                        }
                        else {
                            world = g_webgpu_1.World.create({
                                engineOptions: {
                                    supportCompute: true
                                }
                            });
                        }
                        onLayoutEnd = self.onLayoutEnd;
                        clusterCenters = [];
                        for (i = 0; i < clusterCount; i++) {
                            clusterCenters.push(0, 0, 0, 0);
                        }
                        kernelFruchterman = world
                            .createKernel(fruchtermanShader_1.fruchtermanBundle)
                            .setDispatch([numParticles, 1, 1])
                            .setBinding({
                            u_Data: nodesEdgesArray,
                            u_K: k,
                            u_K2: k2,
                            u_Gravity: self.gravity,
                            u_ClusterGravity: self.clusterGravity || self.gravity || 1,
                            u_Speed: speed,
                            u_MaxDisplace: maxDisplace,
                            u_Clustering: clustering ? 1 : 0,
                            u_Center: center,
                            u_AttributeArray: attributeArray,
                            u_ClusterCenters: clusterCenters,
                            MAX_EDGE_PER_VERTEX: maxEdgePerVetex,
                            VERTEX_COUNT: numParticles
                        });
                        if (clustering) {
                            kernelCluster = world
                                .createKernel(fruchtermanShader_1.clusterBundle)
                                .setDispatch([clusterCount, 1, 1])
                                .setBinding({
                                u_Data: nodesEdgesArray,
                                u_NodeAttributes: attributeArray,
                                u_ClusterCenters: clusterCenters,
                                VERTEX_COUNT: numParticles,
                                CLUSTER_COUNT: clusterCount
                            });
                        }
                        execute = function () { return __awaiter(_this, void 0, void 0, function () {
                            var i, finalParticleData;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        i = 0;
                                        _a.label = 1;
                                    case 1:
                                        if (!(i < maxIteration)) return [3 /*break*/, 6];
                                        // eslint-disable-next-line no-await-in-loop
                                        return [4 /*yield*/, kernelFruchterman.execute()];
                                    case 2:
                                        // eslint-disable-next-line no-await-in-loop
                                        _a.sent();
                                        if (!clustering) return [3 /*break*/, 4];
                                        kernelCluster.setBinding({
                                            u_Data: kernelFruchterman
                                        });
                                        // eslint-disable-next-line no-await-in-loop
                                        return [4 /*yield*/, kernelCluster.execute()];
                                    case 3:
                                        // eslint-disable-next-line no-await-in-loop
                                        _a.sent();
                                        kernelFruchterman.setBinding({
                                            u_ClusterCenters: kernelCluster
                                        });
                                        _a.label = 4;
                                    case 4:
                                        kernelFruchterman.setBinding({
                                            u_MaxDisplace: maxDisplace *= 0.99
                                        });
                                        _a.label = 5;
                                    case 5:
                                        i++;
                                        return [3 /*break*/, 1];
                                    case 6: return [4 /*yield*/, kernelFruchterman.getOutput()];
                                    case 7:
                                        finalParticleData = _a.sent();
                                        if (canvas) {
                                            // 传递数据给主线程
                                            ctx.postMessage({
                                                type: constants_1.LAYOUT_MESSAGE.GPUEND,
                                                vertexEdgeData: finalParticleData
                                                // edgeIndexBufferData,
                                            });
                                        }
                                        else {
                                            nodes.forEach(function (node, i) {
                                                var x = finalParticleData[4 * i];
                                                var y = finalParticleData[4 * i + 1];
                                                node.x = x;
                                                node.y = y;
                                            });
                                        }
                                        if (onLayoutEnd)
                                            onLayoutEnd();
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        return [4 /*yield*/, execute()];
                    case 1:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FruchtermanGPULayout.prototype.getType = function () {
        return "fruchterman-gpu";
    };
    return FruchtermanGPULayout;
}(base_1.Base));
exports.FruchtermanGPULayout = FruchtermanGPULayout;
//# sourceMappingURL=fruchterman.js.map
}, function(modId) { var map = {"../base":1679470356559,"../../util":1679470356560,"../../util/gpu":1679470356585,"./fruchtermanShader":1679470356586,"../constants":1679470356574}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356585, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayToTextureData = exports.attributesToTextureData = exports.buildTextureDataWithTwoEdgeAttr = exports.buildTextureData = exports.proccessToFunc = void 0;
var _1 = require("./");
/**
 * 将 number | Function 类型的参数转换为 return number 的 Function
 * @param  {number | Function}  value 需要被转换的值
 * @param  {number}  defaultV 返回函数的默认返回值
 * @return {Function} 转换后的函数
 */
var proccessToFunc = function (value, defaultV) {
    var func;
    if (!value) {
        func = function () {
            return defaultV || 1;
        };
    }
    else if (_1.isNumber(value)) {
        func = function () {
            return value;
        };
    }
    else {
        func = value;
    }
    return func;
};
exports.proccessToFunc = proccessToFunc;
/**
 * 将节点和边数据转换为 GPU 可读的数组。并返回 maxEdgePerVetex，每个节点上最多的边数
 * @param  {NodeConfig[]}  nodes 需要被转换的值
 * @param  {EdgeConfig[]}  edges 返回函数的默认返回值
 * @return {Object} 转换后的数组及 maxEdgePerVetex 组成的对象
 */
var buildTextureData = function (nodes, edges) {
    var dataArray = [];
    var nodeDict = [];
    var mapIdPos = {};
    var i = 0;
    for (i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        mapIdPos[n.id] = i;
        dataArray.push(n.x);
        dataArray.push(n.y);
        dataArray.push(0);
        dataArray.push(0);
        nodeDict.push([]);
    }
    for (i = 0; i < edges.length; i++) {
        var e = edges[i];
        nodeDict[mapIdPos[e.source]].push(mapIdPos[e.target]);
        nodeDict[mapIdPos[e.target]].push(mapIdPos[e.source]);
    }
    var maxEdgePerVetex = 0;
    for (i = 0; i < nodes.length; i++) {
        var offset = dataArray.length;
        var dests = nodeDict[i];
        var len = dests.length;
        dataArray[i * 4 + 2] = offset;
        dataArray[i * 4 + 3] = dests.length;
        maxEdgePerVetex = Math.max(maxEdgePerVetex, dests.length);
        for (var j = 0; j < len; ++j) {
            var dest = dests[j];
            dataArray.push(+dest);
        }
    }
    while (dataArray.length % 4 !== 0) {
        dataArray.push(0);
    }
    return {
        maxEdgePerVetex: maxEdgePerVetex,
        array: new Float32Array(dataArray),
    };
};
exports.buildTextureData = buildTextureData;
/**
* 将节点和边数据转换为 GPU 可读的数组，每条边带有一个属性。并返回 maxEdgePerVetex，每个节点上最多的边数
* @param  {NodeConfig[]}  nodes 节点数组
* @param  {EdgeConfig[]}  edges 边数组
* @param  {Function}  attrs 读取边属性的函数
* @return {Object} 转换后的数组及 maxEdgePerVetex 组成的对象
*/
// export const buildTextureDataWithOneEdgeAttr = (nodes: OutNode[], edges: Edge[], attrs: Function): {
//   array: Float32Array,
//   maxEdgePerVetex: number
// } => {
//   const dataArray = [];
//   const nodeDict: any = [];
//   const mapIdPos: IndexMap = {};
//   let i = 0;
//   for (i = 0; i < nodes.length; i++) {
//       const n = nodes[i];
//       mapIdPos[n.id] = i;
//       dataArray.push(n.x);
//       dataArray.push(n.y);
//       dataArray.push(0);
//       dataArray.push(0);
//       nodeDict.push([]);
//   }
//   for (i = 0; i < edges.length; i++) {
//       const e = edges[i];
//       nodeDict[mapIdPos[e.source]].push(mapIdPos[e.target]);
//       nodeDict[mapIdPos[e.source]].push(attrs(e)); // 理想边长，后续可以改成每条边不同
//       nodeDict[mapIdPos[e.target]].push(mapIdPos[e.source]);
//       nodeDict[mapIdPos[e.target]].push(attrs(e)); // 理想边长，后续可以改成每条边不同
//   }
//   let maxEdgePerVetex = 0;
//   for (i = 0; i < nodes.length; i++) {
//       const offset: number = dataArray.length;
//       const dests = nodeDict[i]; // dest 中节点 id 与边长间隔存储，即一位节点 id，一位边长……
//       const len = dests.length;
//       dataArray[i * 4 + 2] = offset;
//       dataArray[i * 4 + 3] = len / 2; // 第四位存储与该节点相关的所有节点个数
//       maxEdgePerVetex = Math.max(maxEdgePerVetex, len / 2);
//       for (let j = 0; j < len; ++j) {
//           const dest = dests[j];
//           dataArray.push(+dest);
//       }
//   }
//   // 不是 4 的倍数，填充 0
//   while (dataArray.length % 4 !== 0) {
//       dataArray.push(0);
//   }
//   return {
//       array: new Float32Array(dataArray),
//       maxEdgePerVetex
//   }
// }
/**
* 将节点和边数据转换为 GPU 可读的数组，每条边带有一个以上属性。并返回 maxEdgePerVetex，每个节点上最多的边数
* @param  {NodeConfig[]}  nodes 节点数组
* @param  {EdgeConfig[]}  edges 边数组
* @param  {Function}  attrs 读取边属性的函数
* @return {Object} 转换后的数组及 maxEdgePerVetex 组成的对象
*/
var buildTextureDataWithTwoEdgeAttr = function (nodes, edges, attrs1, attrs2) {
    var dataArray = [];
    var nodeDict = [];
    var mapIdPos = {};
    var i = 0;
    for (i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        mapIdPos[n.id] = i;
        dataArray.push(n.x);
        dataArray.push(n.y);
        dataArray.push(0);
        dataArray.push(0);
        nodeDict.push([]);
    }
    for (i = 0; i < edges.length; i++) {
        var e = edges[i];
        nodeDict[mapIdPos[e.source]].push(mapIdPos[e.target]);
        nodeDict[mapIdPos[e.source]].push(attrs1(e));
        nodeDict[mapIdPos[e.source]].push(attrs2(e));
        nodeDict[mapIdPos[e.source]].push(0);
        nodeDict[mapIdPos[e.target]].push(mapIdPos[e.source]);
        nodeDict[mapIdPos[e.target]].push(attrs1(e));
        nodeDict[mapIdPos[e.target]].push(attrs2(e));
        nodeDict[mapIdPos[e.target]].push(0);
    }
    var maxEdgePerVetex = 0;
    for (i = 0; i < nodes.length; i++) {
        var offset = dataArray.length;
        var dests = nodeDict[i]; // dest 中节点 id 与边长间隔存储，即一位节点 id，一位边长……
        var len = dests.length;
        // dataArray[i * 4 + 2] = offset;
        // dataArray[i * 4 + 3] = len / 4; // 第四位存储与该节点相关的所有节点个数
        // pack offset & length into float32: offset 20bit, length 12bit
        dataArray[i * 4 + 2] = offset + 1048576 * len / 4;
        dataArray[i * 4 + 3] = 0; // 第四位存储与上一次的距离差值
        maxEdgePerVetex = Math.max(maxEdgePerVetex, len / 4);
        for (var j = 0; j < len; ++j) {
            var dest = dests[j];
            dataArray.push(+dest);
        }
    }
    // 不是 4 的倍数，填充 0
    while (dataArray.length % 4 !== 0) {
        dataArray.push(0);
    }
    return {
        maxEdgePerVetex: maxEdgePerVetex,
        array: new Float32Array(dataArray),
    };
};
exports.buildTextureDataWithTwoEdgeAttr = buildTextureDataWithTwoEdgeAttr;
/**
* transform the extended attributes of nodes or edges to a texture array
* @param  {string[]}  attributeNames attributes' name to be read from items and put into output array
* @param  {ModelConfig[]}  items the items to be read
* @return {Float32Array} the attributes' value array to be read by GPU
*/
var attributesToTextureData = function (attributeNames, items) {
    var dataArray = [];
    var attributeNum = attributeNames.length;
    var attributteStringMap = {};
    items.forEach(function (item) {
        attributeNames.forEach(function (name, i) {
            if (attributteStringMap[item[name]] === undefined) {
                attributteStringMap[item[name]] = Object.keys(attributteStringMap).length;
            }
            dataArray.push(attributteStringMap[item[name]]);
            // insure each node's attributes take inter number of grids
            if (i === attributeNum - 1) {
                while (dataArray.length % 4 !== 0) {
                    dataArray.push(0);
                }
            }
        });
    });
    return {
        array: new Float32Array(dataArray),
        count: Object.keys(attributteStringMap).length
    };
};
exports.attributesToTextureData = attributesToTextureData;
/**
* transform the number array format of extended attributes of nodes or edges to a texture array
* @param  {string[]}  attributeNames attributes' name to be read from items and put into output array
* @return {Float32Array} the attributes' value array to be read by GPU
*/
var arrayToTextureData = function (valueArrays) {
    var dataArray = [];
    var attributeNum = valueArrays.length;
    var itemNum = valueArrays[0].length;
    var _loop_1 = function (j) {
        valueArrays.forEach(function (valueArray, i) {
            dataArray.push(valueArray[j]);
            // insure each node's attributes take inter number of grids
            if (i === attributeNum - 1) {
                while (dataArray.length % 4 !== 0) {
                    dataArray.push(0);
                }
            }
        });
    };
    for (var j = 0; j < itemNum; j++) {
        _loop_1(j);
    }
    return new Float32Array(dataArray);
};
exports.arrayToTextureData = arrayToTextureData;
//# sourceMappingURL=gpu.js.map
}, function(modId) { var map = {"./":1679470356560}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356586, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.clusterBundle = exports.clusterCode = exports.fruchtermanBundle = exports.fruchtermanCode = void 0;
exports.fruchtermanCode = "\nimport { globalInvocationID } from 'g-webgpu';\nconst MAX_EDGE_PER_VERTEX;\nconst VERTEX_COUNT;\n@numthreads(1, 1, 1)\nclass Fruchterman {\n  @in @out\n  u_Data: vec4[];\n  @in\n  u_K: float;\n  @in\n  u_K2: float;\n  \n  @in\n  u_Center: vec2;\n  @in\n  u_Gravity: float;\n  @in\n  u_ClusterGravity: float;\n  @in\n  u_Speed: float;\n  @in\n  u_MaxDisplace: float;\n  @in\n  u_Clustering: float;\n  @in\n  u_AttributeArray: vec4[];\n  @in\n  u_ClusterCenters: vec4[];\n  calcRepulsive(i: int, currentNode: vec4): vec2 {\n    let dx = 0, dy = 0;\n    for (let j = 0; j < VERTEX_COUNT; j++) {\n      if (i != j) {\n        const nextNode = this.u_Data[j];\n        const xDist = currentNode[0] - nextNode[0];\n        const yDist = currentNode[1] - nextNode[1];\n        const dist = (xDist * xDist + yDist * yDist) + 0.01;\n        let param = this.u_K2 / dist;\n        \n        if (dist > 0.0) {\n          dx += param * xDist;\n          dy += param * yDist;\n          if (xDist == 0 && yDist == 0) {\n            const sign = i < j ? 1 : -1;\n            dx += param * sign;\n            dy += param * sign;\n          }\n        }\n      }\n    }\n    return [dx, dy];\n  }\n  calcGravity(currentNode: vec4, nodeAttributes: vec4): vec2 { // \n    let dx = 0, dy = 0;\n    const vx = currentNode[0] - this.u_Center[0];\n    const vy = currentNode[1] - this.u_Center[1];\n    const gf = 0.01 * this.u_K * this.u_Gravity;\n    dx = gf * vx;\n    dy = gf * vy;\n    if (this.u_Clustering == 1) {\n      const clusterIdx = int(nodeAttributes[0]);\n      const center = this.u_ClusterCenters[clusterIdx];\n      const cvx = currentNode[0] - center[0];\n      const cvy = currentNode[1] - center[1];\n      const dist = sqrt(cvx * cvx + cvy * cvy) + 0.01;\n      const parma = this.u_K * this.u_ClusterGravity / dist;\n      dx += parma * cvx;\n      dy += parma * cvy;\n    }\n    return [dx, dy];\n  }\n  calcAttractive(i: int, currentNode: vec4): vec2 {\n    let dx = 0, dy = 0;\n    const arr_offset = int(floor(currentNode[2] + 0.5));\n    const length = int(floor(currentNode[3] + 0.5));\n    const node_buffer: vec4;\n    for (let p = 0; p < MAX_EDGE_PER_VERTEX; p++) {\n      if (p >= length) break;\n      const arr_idx = arr_offset + p;\n      // when arr_idx % 4 == 0 update currentNodedx_buffer\n      const buf_offset = arr_idx - arr_idx / 4 * 4;\n      if (p == 0 || buf_offset == 0) {\n        node_buffer = this.u_Data[int(arr_idx / 4)];\n      }\n      const float_j = buf_offset == 0 ? node_buffer[0] :\n                      buf_offset == 1 ? node_buffer[1] :\n                      buf_offset == 2 ? node_buffer[2] :\n                                        node_buffer[3];\n      const nextNode = this.u_Data[int(float_j)];\n      const xDist = currentNode[0] - nextNode[0];\n      const yDist = currentNode[1] - nextNode[1];\n      const dist = sqrt(xDist * xDist + yDist * yDist) + 0.01;\n      let attractiveF = dist / this.u_K;\n    \n      if (dist > 0.0) {\n        dx -= xDist * attractiveF;\n        dy -= yDist * attractiveF;\n        if (xDist == 0 && yDist == 0) {\n          const sign = i < int(float_j) ? 1 : -1;\n          dx -= sign * attractiveF;\n          dy -= sign * attractiveF;\n        }\n      }\n    }\n    return [dx, dy];\n  }\n  @main\n  compute() {\n    const i = globalInvocationID.x;\n    const currentNode = this.u_Data[i];\n    let dx = 0, dy = 0;\n    if (i >= VERTEX_COUNT) {\n      this.u_Data[i] = currentNode;\n      return;\n    }\n\n    // [gravity, fx, fy, 0]\n    const nodeAttributes = this.u_AttributeArray[i];\n\n    if (nodeAttributes[1] != 0 && nodeAttributes[2] != 0) {\n      // the node is fixed\n      this.u_Data[i] = [\n        nodeAttributes[1],\n        nodeAttributes[2],\n        currentNode[2],\n        currentNode[3]\n      ];\n      return;\n    }\n\n    // repulsive\n    const repulsive = this.calcRepulsive(i, currentNode);\n    dx += repulsive[0];\n    dy += repulsive[1];\n    // attractive\n    const attractive = this.calcAttractive(i, currentNode);\n    dx += attractive[0];\n    dy += attractive[1];\n    // gravity\n    const gravity = this.calcGravity(currentNode, nodeAttributes);\n    dx -= gravity[0];\n    dy -= gravity[1];\n    // speed\n    dx *= this.u_Speed;\n    dy *= this.u_Speed;\n\n    // move\n    const distLength = sqrt(dx * dx + dy * dy);\n    if (distLength > 0.0) {\n      const limitedDist = min(this.u_MaxDisplace * this.u_Speed, distLength);\n      this.u_Data[i] = [\n        currentNode[0] + dx / distLength * limitedDist,\n        currentNode[1] + dy / distLength * limitedDist,\n        currentNode[2],\n        currentNode[3]\n      ];\n    }\n  }\n}\n";
exports.fruchtermanBundle = "{\"shaders\":{\"WGSL\":\"import \\\"GLSL.std.450\\\" as std;\\n\\n\\n# var gWebGPUDebug : bool = false;\\n# var gWebGPUDebugOutput : vec4<f32> = vec4<f32>(0.0);\\n\\n[[builtin global_invocation_id]] var<in> globalInvocationID : vec3<u32>;\\n# [[builtin work_group_size]] var<in> workGroupSize : vec3<u32>;\\n# [[builtin work_group_id]] var<in> workGroupID : vec3<u32>;\\n[[builtin local_invocation_id]] var<in> localInvocationID : vec3<u32>;\\n# [[builtin num_work_groups]] var<in> numWorkGroups : vec3<u32>;\\n[[builtin local_invocation_idx]] var<in> localInvocationIndex : u32;\\n\\ntype GWebGPUParams = [[block]] struct {\\n  [[offset 0]] u_K : f32;\\n  [[offset 4]] u_K2 : f32;\\n  [[offset 8]] u_Center : vec2<f32>;\\n  [[offset 16]] u_Gravity : f32;\\n  [[offset 20]] u_ClusterGravity : f32;\\n  [[offset 24]] u_Speed : f32;\\n  [[offset 28]] u_MaxDisplace : f32;\\n  [[offset 32]] u_Clustering : f32;\\n};\\n[[binding 0, set 0]] var<uniform> gWebGPUUniformParams : GWebGPUParams;\\ntype GWebGPUBuffer0 = [[block]] struct {\\n  [[offset 0]] u_Data : [[stride 16]] array<vec4<f32>>;\\n};\\n[[binding 1, set 0]] var<storage_buffer> gWebGPUBuffer0 : GWebGPUBuffer0;\\ntype GWebGPUBuffer1 = [[block]] struct {\\n  [[offset 0]] u_AttributeArray : [[stride 16]] array<vec4<f32>>;\\n};\\n[[binding 2, set 0]] var<storage_buffer> gWebGPUBuffer1 : GWebGPUBuffer1;\\ntype GWebGPUBuffer2 = [[block]] struct {\\n  [[offset 0]] u_ClusterCenters : [[stride 16]] array<vec4<f32>>;\\n};\\n[[binding 3, set 0]] var<storage_buffer> gWebGPUBuffer2 : GWebGPUBuffer2;\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\nfn calcRepulsive(i : i32, currentNode : vec4<f32>) -> vec2<f32> {var dx : f32 = 0.0;\\nvar dy : f32 = 0.0;\\nfor (var j : i32 = 0; j < __DefineValuePlaceholder__VERTEX_COUNT; j = j + 1) {if (i != j) {var nextNode : vec4<f32> = gWebGPUBuffer0.u_Data[j];\\nvar xDist : f32 = currentNode.x - nextNode.x;\\nvar yDist : f32 = currentNode.y - nextNode.y;\\nvar dist : f32 = ((xDist * xDist) + (yDist * yDist)) + 0.01;\\nvar param : f32 = gWebGPUUniformParams.u_K2 / dist;\\nif (dist > 0.0) {dx = dx + param * xDist;\\ndy = dy + param * yDist;\\nif ((xDist == 0.0) && (yDist == 0.0)) {var sign : f32 = select(1.0, -1.0, i < j);\\ndx = dx + param * std::sign;\\ndy = dy + param * std::sign;}}}}\\nreturn vec2<f32>(dx, dy);}\\nfn calcGravity(currentNode : vec4<f32>, nodeAttributes : vec4<f32>) -> vec2<f32> {var dx : f32 = 0.0;\\nvar dy : f32 = 0.0;\\nvar vx : f32 = currentNode.x - gWebGPUUniformParams.u_Center.x;\\nvar vy : f32 = currentNode.y - gWebGPUUniformParams.u_Center.y;\\nvar gf : f32 = (0.01 * gWebGPUUniformParams.u_K) * gWebGPUUniformParams.u_Gravity;\\ndx = gf * vx;\\ndy = gf * vy;\\nif (gWebGPUUniformParams.u_Clustering == 1.0) {var clusterIdx : i32 = i32(nodeAttributes.x);\\nvar center : vec4<f32> = gWebGPUBuffer2.u_ClusterCenters[clusterIdx];\\nvar cvx : f32 = currentNode.x - center.x;\\nvar cvy : f32 = currentNode.y - center.y;\\nvar dist : f32 = std::sqrt((cvx * cvx) + (cvy * cvy)) + 0.01;\\nvar parma : f32 = (gWebGPUUniformParams.u_K * gWebGPUUniformParams.u_ClusterGravity) / dist;\\ndx = dx + parma * cvx;\\ndy = dy + parma * cvy;}\\nreturn vec2<f32>(dx, dy);}\\nfn calcAttractive(i : i32, currentNode : vec4<f32>) -> vec2<f32> {var dx : f32 = 0.0;\\nvar dy : f32 = 0.0;\\nvar arr_offset : i32 = i32(std::floor(currentNode.z + 0.5));\\nvar length : i32 = i32(std::floor(currentNode.w + 0.5));\\nvar node_buffer : vec4<f32>;\\nfor (var p : i32 = 0; p < __DefineValuePlaceholder__MAX_EDGE_PER_VERTEX; p = p + 1) {if (p >= length) {break;}\\nvar arr_idx : i32 = arr_offset + i32(p);\\nvar buf_offset : i32 = arr_idx - ((arr_idx / 4) * 4);\\nif ((p == 0) || (buf_offset == 0)) {node_buffer = gWebGPUBuffer0.u_Data[i32(arr_idx / 4)];}\\nvar float_j : f32 = select(node_buffer.x, select(node_buffer.y, select(node_buffer.z, node_buffer.w, buf_offset == 2), buf_offset == 1), buf_offset == 0);\\nvar nextNode : vec4<f32> = gWebGPUBuffer0.u_Data[i32(float_j)];\\nvar xDist : f32 = currentNode.x - nextNode.x;\\nvar yDist : f32 = currentNode.y - nextNode.y;\\nvar dist : f32 = std::sqrt((xDist * xDist) + (yDist * yDist)) + 0.01;\\nvar attractiveF : f32 = dist / gWebGPUUniformParams.u_K;\\nif (dist > 0.0) {dx = dx - xDist * attractiveF;\\ndy = dy - yDist * attractiveF;\\nif ((xDist == 0.0) && (yDist == 0.0)) {var sign : f32 = select(1.0, -1.0, i < i32(float_j));\\ndx = dx - std::sign * attractiveF;\\ndy = dy - std::sign * attractiveF;}}}\\nreturn vec2<f32>(dx, dy);}\\nfn main() -> void {var i : i32 = globalInvocationID.x;\\nvar currentNode : vec4<f32> = gWebGPUBuffer0.u_Data[i];\\nvar dx : f32 = 0.0;\\nvar dy : f32 = 0.0;\\nif (i >= __DefineValuePlaceholder__VERTEX_COUNT) {gWebGPUBuffer0.u_Data[i] = currentNode;\\nreturn ;}\\nvar nodeAttributes : vec4<f32> = gWebGPUBuffer1.u_AttributeArray[i];\\nif ((nodeAttributes.y != 0.0) && (nodeAttributes.z != 0.0)) {gWebGPUBuffer0.u_Data[i] = vec4<f32>(nodeAttributes.y, nodeAttributes.z, currentNode.z, currentNode.w);\\nreturn ;}\\nvar repulsive : vec2<f32> = calcRepulsive(i, currentNode);\\ndx = dx + repulsive.x;\\ndy = dy + repulsive.y;\\nvar attractive : vec2<f32> = calcAttractive(i, currentNode);\\ndx = dx + attractive.x;\\ndy = dy + attractive.y;\\nvar gravity : vec2<f32> = calcGravity(currentNode, nodeAttributes);\\ndx = dx - gravity.x;\\ndy = dy - gravity.y;\\ndx = dx * gWebGPUUniformParams.u_Speed;\\ndy = dy * gWebGPUUniformParams.u_Speed;\\nvar distLength : f32 = std::sqrt((dx * dx) + (dy * dy));\\nif (distLength > 0.0) {var limitedDist : f32 = std::min(gWebGPUUniformParams.u_MaxDisplace * gWebGPUUniformParams.u_Speed, distLength);\\ngWebGPUBuffer0.u_Data[i] = vec4<f32>(currentNode.x + ((dx / distLength) * limitedDist), currentNode.y + ((dy / distLength) * limitedDist), currentNode.z, currentNode.w);}\\nreturn;}\\n\\nentry_point compute as \\\"main\\\" = main;\\n\",\"GLSL450\":\"\\n\\n\\nbool gWebGPUDebug = false;\\nvec4 gWebGPUDebugOutput = vec4(0.0);\\n\\nivec3 globalInvocationID = ivec3(gl_GlobalInvocationID);\\nivec3 workGroupSize = ivec3(1,1,1);\\nivec3 workGroupID = ivec3(gl_WorkGroupID);\\nivec3 localInvocationID = ivec3(gl_LocalInvocationID);\\nivec3 numWorkGroups = ivec3(gl_NumWorkGroups);\\nint localInvocationIndex = int(gl_LocalInvocationIndex);\\n\\nlayout(std140, set = 0, binding = 0) uniform GWebGPUParams {\\n  float u_K;\\n  float u_K2;\\n  vec2 u_Center;\\n  float u_Gravity;\\n  float u_ClusterGravity;\\n  float u_Speed;\\n  float u_MaxDisplace;\\n  float u_Clustering;\\n} gWebGPUUniformParams;\\nlayout(std430, set = 0, binding = 1) buffer   GWebGPUBuffer0 {\\n  vec4 u_Data[];\\n} gWebGPUBuffer0;\\n\\nlayout(std430, set = 0, binding = 2) buffer readonly  GWebGPUBuffer1 {\\n  vec4 u_AttributeArray[];\\n} gWebGPUBuffer1;\\n\\nlayout(std430, set = 0, binding = 3) buffer readonly  GWebGPUBuffer2 {\\n  vec4 u_ClusterCenters[];\\n} gWebGPUBuffer2;\\n\\n\\n\\n#define MAX_EDGE_PER_VERTEX __DefineValuePlaceholder__MAX_EDGE_PER_VERTEX\\n#define VERTEX_COUNT __DefineValuePlaceholder__VERTEX_COUNT\\nlayout (\\n  local_size_x = 1,\\n  local_size_y = 1,\\n  local_size_z = 1\\n) in;\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\nvec2 calcRepulsive(int i, vec4 currentNode) {float dx = 0.0;\\nfloat dy = 0.0;\\nfor (int j = 0; j < VERTEX_COUNT; j++) {if (i != j) {vec4 nextNode = gWebGPUBuffer0.u_Data[j];\\nfloat xDist = currentNode.x - nextNode.x;\\nfloat yDist = currentNode.y - nextNode.y;\\nfloat dist = ((xDist * xDist) + (yDist * yDist)) + 0.01;\\nfloat param = gWebGPUUniformParams.u_K2 / dist;\\nif (dist > 0.0) {dx += param * xDist;\\ndy += param * yDist;\\nif ((xDist == 0.0) && (yDist == 0.0)) {float sign = (i < j) ? (1.0) : (-1.0);\\ndx += param * sign;\\ndy += param * sign;}}}}\\nreturn vec2(dx, dy);}\\nvec2 calcGravity(vec4 currentNode, vec4 nodeAttributes) {float dx = 0.0;\\nfloat dy = 0.0;\\nfloat vx = currentNode.x - gWebGPUUniformParams.u_Center.x;\\nfloat vy = currentNode.y - gWebGPUUniformParams.u_Center.y;\\nfloat gf = (0.01 * gWebGPUUniformParams.u_K) * gWebGPUUniformParams.u_Gravity;\\ndx = gf * vx;\\ndy = gf * vy;\\nif (gWebGPUUniformParams.u_Clustering == 1.0) {int clusterIdx = int(nodeAttributes.x);\\nvec4 center = gWebGPUBuffer2.u_ClusterCenters[clusterIdx];\\nfloat cvx = currentNode.x - center.x;\\nfloat cvy = currentNode.y - center.y;\\nfloat dist = sqrt((cvx * cvx) + (cvy * cvy)) + 0.01;\\nfloat parma = (gWebGPUUniformParams.u_K * gWebGPUUniformParams.u_ClusterGravity) / dist;\\ndx += parma * cvx;\\ndy += parma * cvy;}\\nreturn vec2(dx, dy);}\\nvec2 calcAttractive(int i, vec4 currentNode) {float dx = 0.0;\\nfloat dy = 0.0;\\nint arr_offset = int(floor(currentNode.z + 0.5));\\nint length = int(floor(currentNode.w + 0.5));\\nvec4 node_buffer;\\nfor (int p = 0; p < MAX_EDGE_PER_VERTEX; p++) {if (p >= length) {break;}\\nint arr_idx = arr_offset + int(p);\\nint buf_offset = arr_idx - ((arr_idx / 4) * 4);\\nif ((p == 0) || (buf_offset == 0)) {node_buffer = gWebGPUBuffer0.u_Data[int(arr_idx / 4)];}\\nfloat float_j = (buf_offset == 0) ? (node_buffer.x) : ((buf_offset == 1) ? (node_buffer.y) : ((buf_offset == 2) ? (node_buffer.z) : (node_buffer.w)));\\nvec4 nextNode = gWebGPUBuffer0.u_Data[int(float_j)];\\nfloat xDist = currentNode.x - nextNode.x;\\nfloat yDist = currentNode.y - nextNode.y;\\nfloat dist = sqrt((xDist * xDist) + (yDist * yDist)) + 0.01;\\nfloat attractiveF = dist / gWebGPUUniformParams.u_K;\\nif (dist > 0.0) {dx -= xDist * attractiveF;\\ndy -= yDist * attractiveF;\\nif ((xDist == 0.0) && (yDist == 0.0)) {float sign = (i < int(float_j)) ? (1.0) : (-1.0);\\ndx -= sign * attractiveF;\\ndy -= sign * attractiveF;}}}\\nreturn vec2(dx, dy);}\\nvoid main() {int i = globalInvocationID.x;\\nvec4 currentNode = gWebGPUBuffer0.u_Data[i];\\nfloat dx = 0.0;\\nfloat dy = 0.0;\\nif (i >= VERTEX_COUNT) {gWebGPUBuffer0.u_Data[i] = currentNode;\\nreturn ;}\\nvec4 nodeAttributes = gWebGPUBuffer1.u_AttributeArray[i];\\nif ((nodeAttributes.y != 0.0) && (nodeAttributes.z != 0.0)) {gWebGPUBuffer0.u_Data[i] = vec4(nodeAttributes.y, nodeAttributes.z, currentNode.z, currentNode.w);\\nreturn ;}\\nvec2 repulsive = calcRepulsive(i, currentNode);\\ndx += repulsive.x;\\ndy += repulsive.y;\\nvec2 attractive = calcAttractive(i, currentNode);\\ndx += attractive.x;\\ndy += attractive.y;\\nvec2 gravity = calcGravity(currentNode, nodeAttributes);\\ndx -= gravity.x;\\ndy -= gravity.y;\\ndx *= gWebGPUUniformParams.u_Speed;\\ndy *= gWebGPUUniformParams.u_Speed;\\nfloat distLength = sqrt((dx * dx) + (dy * dy));\\nif (distLength > 0.0) {float limitedDist = min(gWebGPUUniformParams.u_MaxDisplace * gWebGPUUniformParams.u_Speed, distLength);\\ngWebGPUBuffer0.u_Data[i] = vec4(currentNode.x + ((dx / distLength) * limitedDist), currentNode.y + ((dy / distLength) * limitedDist), currentNode.z, currentNode.w);}}\\n\",\"GLSL100\":\"\\n\\nfloat epsilon = 0.00001;\\nvec2 addrTranslation_1Dto2D(float address1D, vec2 texSize) {\\n  vec2 conv_const = vec2(1.0 / texSize.x, 1.0 / (texSize.x * texSize.y));\\n  vec2 normAddr2D = float(address1D) * conv_const;\\n  return vec2(fract(normAddr2D.x + epsilon), normAddr2D.y);\\n}\\n\\nvoid barrier() {}\\n  \\n\\nuniform vec2 u_OutputTextureSize;\\nuniform int u_OutputTexelCount;\\nvarying vec2 v_TexCoord;\\n\\nbool gWebGPUDebug = false;\\nvec4 gWebGPUDebugOutput = vec4(0.0);\\n\\n#define MAX_EDGE_PER_VERTEX __DefineValuePlaceholder__MAX_EDGE_PER_VERTEX\\n#define VERTEX_COUNT __DefineValuePlaceholder__VERTEX_COUNT\\n\\nuniform sampler2D u_Data;\\nuniform vec2 u_DataSize;\\nvec4 getDatau_Data(vec2 address2D) {\\n  return vec4(texture2D(u_Data, address2D).rgba);\\n}\\nvec4 getDatau_Data(float address1D) {\\n  return getDatau_Data(addrTranslation_1Dto2D(address1D, u_DataSize));\\n}\\nvec4 getDatau_Data(int address1D) {\\n  return getDatau_Data(float(address1D));\\n}\\nuniform float u_K;\\nuniform float u_K2;\\nuniform vec2 u_Center;\\nuniform float u_Gravity;\\nuniform float u_ClusterGravity;\\nuniform float u_Speed;\\nuniform float u_MaxDisplace;\\nuniform float u_Clustering;\\nuniform sampler2D u_AttributeArray;\\nuniform vec2 u_AttributeArraySize;\\nvec4 getDatau_AttributeArray(vec2 address2D) {\\n  return vec4(texture2D(u_AttributeArray, address2D).rgba);\\n}\\nvec4 getDatau_AttributeArray(float address1D) {\\n  return getDatau_AttributeArray(addrTranslation_1Dto2D(address1D, u_AttributeArraySize));\\n}\\nvec4 getDatau_AttributeArray(int address1D) {\\n  return getDatau_AttributeArray(float(address1D));\\n}\\nuniform sampler2D u_ClusterCenters;\\nuniform vec2 u_ClusterCentersSize;\\nvec4 getDatau_ClusterCenters(vec2 address2D) {\\n  return vec4(texture2D(u_ClusterCenters, address2D).rgba);\\n}\\nvec4 getDatau_ClusterCenters(float address1D) {\\n  return getDatau_ClusterCenters(addrTranslation_1Dto2D(address1D, u_ClusterCentersSize));\\n}\\nvec4 getDatau_ClusterCenters(int address1D) {\\n  return getDatau_ClusterCenters(float(address1D));\\n}\\nvec2 calcRepulsive(int i, vec4 currentNode) {\\nivec3 workGroupSize = ivec3(1, 1, 1);\\nivec3 numWorkGroups = ivec3(1, 1, 1);     \\nint globalInvocationIndex = int(floor(v_TexCoord.x * u_OutputTextureSize.x))\\n  + int(floor(v_TexCoord.y * u_OutputTextureSize.y)) * int(u_OutputTextureSize.x);\\nint workGroupIDLength = globalInvocationIndex / (workGroupSize.x * workGroupSize.y * workGroupSize.z);\\nivec3 workGroupID = ivec3(workGroupIDLength / numWorkGroups.y / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.y);\\nint localInvocationIDZ = globalInvocationIndex / (workGroupSize.x * workGroupSize.y);\\nint localInvocationIDY = (globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y) / workGroupSize.x;\\nint localInvocationIDX = globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y - localInvocationIDY * workGroupSize.x;\\nivec3 localInvocationID = ivec3(localInvocationIDX, localInvocationIDY, localInvocationIDZ);\\nivec3 globalInvocationID = workGroupID * workGroupSize + localInvocationID;\\nint localInvocationIndex = localInvocationID.z * workGroupSize.x * workGroupSize.y\\n                + localInvocationID.y * workGroupSize.x + localInvocationID.x;\\nfloat dx = 0.0;\\nfloat dy = 0.0;\\nfor (int j = 0; j < VERTEX_COUNT; j++) {if (i != j) {vec4 nextNode = getDatau_Data(j);\\nfloat xDist = currentNode.x - nextNode.x;\\nfloat yDist = currentNode.y - nextNode.y;\\nfloat dist = ((xDist * xDist) + (yDist * yDist)) + 0.01;\\nfloat param = u_K2 / dist;\\nif (dist > 0.0) {dx += param * xDist;\\ndy += param * yDist;\\nif ((xDist == 0.0) && (yDist == 0.0)) {float sign = (i < j) ? (1.0) : (-1.0);\\ndx += param * sign;\\ndy += param * sign;}}}}\\nreturn vec2(dx, dy);}\\nvec2 calcGravity(vec4 currentNode, vec4 nodeAttributes) {\\nivec3 workGroupSize = ivec3(1, 1, 1);\\nivec3 numWorkGroups = ivec3(1, 1, 1);     \\nint globalInvocationIndex = int(floor(v_TexCoord.x * u_OutputTextureSize.x))\\n  + int(floor(v_TexCoord.y * u_OutputTextureSize.y)) * int(u_OutputTextureSize.x);\\nint workGroupIDLength = globalInvocationIndex / (workGroupSize.x * workGroupSize.y * workGroupSize.z);\\nivec3 workGroupID = ivec3(workGroupIDLength / numWorkGroups.y / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.y);\\nint localInvocationIDZ = globalInvocationIndex / (workGroupSize.x * workGroupSize.y);\\nint localInvocationIDY = (globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y) / workGroupSize.x;\\nint localInvocationIDX = globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y - localInvocationIDY * workGroupSize.x;\\nivec3 localInvocationID = ivec3(localInvocationIDX, localInvocationIDY, localInvocationIDZ);\\nivec3 globalInvocationID = workGroupID * workGroupSize + localInvocationID;\\nint localInvocationIndex = localInvocationID.z * workGroupSize.x * workGroupSize.y\\n                + localInvocationID.y * workGroupSize.x + localInvocationID.x;\\nfloat dx = 0.0;\\nfloat dy = 0.0;\\nfloat vx = currentNode.x - u_Center.x;\\nfloat vy = currentNode.y - u_Center.y;\\nfloat gf = (0.01 * u_K) * u_Gravity;\\ndx = gf * vx;\\ndy = gf * vy;\\nif (u_Clustering == 1.0) {int clusterIdx = int(nodeAttributes.x);\\nvec4 center = getDatau_ClusterCenters(clusterIdx);\\nfloat cvx = currentNode.x - center.x;\\nfloat cvy = currentNode.y - center.y;\\nfloat dist = sqrt((cvx * cvx) + (cvy * cvy)) + 0.01;\\nfloat parma = (u_K * u_ClusterGravity) / dist;\\ndx += parma * cvx;\\ndy += parma * cvy;}\\nreturn vec2(dx, dy);}\\nvec2 calcAttractive(int i, vec4 currentNode) {\\nivec3 workGroupSize = ivec3(1, 1, 1);\\nivec3 numWorkGroups = ivec3(1, 1, 1);     \\nint globalInvocationIndex = int(floor(v_TexCoord.x * u_OutputTextureSize.x))\\n  + int(floor(v_TexCoord.y * u_OutputTextureSize.y)) * int(u_OutputTextureSize.x);\\nint workGroupIDLength = globalInvocationIndex / (workGroupSize.x * workGroupSize.y * workGroupSize.z);\\nivec3 workGroupID = ivec3(workGroupIDLength / numWorkGroups.y / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.y);\\nint localInvocationIDZ = globalInvocationIndex / (workGroupSize.x * workGroupSize.y);\\nint localInvocationIDY = (globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y) / workGroupSize.x;\\nint localInvocationIDX = globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y - localInvocationIDY * workGroupSize.x;\\nivec3 localInvocationID = ivec3(localInvocationIDX, localInvocationIDY, localInvocationIDZ);\\nivec3 globalInvocationID = workGroupID * workGroupSize + localInvocationID;\\nint localInvocationIndex = localInvocationID.z * workGroupSize.x * workGroupSize.y\\n                + localInvocationID.y * workGroupSize.x + localInvocationID.x;\\nfloat dx = 0.0;\\nfloat dy = 0.0;\\nint arr_offset = int(floor(currentNode.z + 0.5));\\nint length = int(floor(currentNode.w + 0.5));\\nvec4 node_buffer;\\nfor (int p = 0; p < MAX_EDGE_PER_VERTEX; p++) {if (p >= length) {break;}\\nint arr_idx = arr_offset + int(p);\\nint buf_offset = arr_idx - ((arr_idx / 4) * 4);\\nif ((p == 0) || (buf_offset == 0)) {node_buffer = getDatau_Data(int(arr_idx / 4));}\\nfloat float_j = (buf_offset == 0) ? (node_buffer.x) : ((buf_offset == 1) ? (node_buffer.y) : ((buf_offset == 2) ? (node_buffer.z) : (node_buffer.w)));\\nvec4 nextNode = getDatau_Data(int(float_j));\\nfloat xDist = currentNode.x - nextNode.x;\\nfloat yDist = currentNode.y - nextNode.y;\\nfloat dist = sqrt((xDist * xDist) + (yDist * yDist)) + 0.01;\\nfloat attractiveF = dist / u_K;\\nif (dist > 0.0) {dx -= xDist * attractiveF;\\ndy -= yDist * attractiveF;\\nif ((xDist == 0.0) && (yDist == 0.0)) {float sign = (i < int(float_j)) ? (1.0) : (-1.0);\\ndx -= sign * attractiveF;\\ndy -= sign * attractiveF;}}}\\nreturn vec2(dx, dy);}\\nvoid main() {\\nivec3 workGroupSize = ivec3(1, 1, 1);\\nivec3 numWorkGroups = ivec3(1, 1, 1);     \\nint globalInvocationIndex = int(floor(v_TexCoord.x * u_OutputTextureSize.x))\\n  + int(floor(v_TexCoord.y * u_OutputTextureSize.y)) * int(u_OutputTextureSize.x);\\nint workGroupIDLength = globalInvocationIndex / (workGroupSize.x * workGroupSize.y * workGroupSize.z);\\nivec3 workGroupID = ivec3(workGroupIDLength / numWorkGroups.y / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.y);\\nint localInvocationIDZ = globalInvocationIndex / (workGroupSize.x * workGroupSize.y);\\nint localInvocationIDY = (globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y) / workGroupSize.x;\\nint localInvocationIDX = globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y - localInvocationIDY * workGroupSize.x;\\nivec3 localInvocationID = ivec3(localInvocationIDX, localInvocationIDY, localInvocationIDZ);\\nivec3 globalInvocationID = workGroupID * workGroupSize + localInvocationID;\\nint localInvocationIndex = localInvocationID.z * workGroupSize.x * workGroupSize.y\\n                + localInvocationID.y * workGroupSize.x + localInvocationID.x;\\nint i = globalInvocationID.x;\\nvec4 currentNode = getDatau_Data(i);\\nfloat dx = 0.0;\\nfloat dy = 0.0;\\nif (i >= VERTEX_COUNT) {gl_FragColor = vec4(currentNode);\\nreturn ;}\\nvec4 nodeAttributes = getDatau_AttributeArray(i);\\nif ((nodeAttributes.y != 0.0) && (nodeAttributes.z != 0.0)) {gl_FragColor = vec4(vec4(nodeAttributes.y, nodeAttributes.z, currentNode.z, currentNode.w));\\nreturn ;}\\nvec2 repulsive = calcRepulsive(i, currentNode);\\ndx += repulsive.x;\\ndy += repulsive.y;\\nvec2 attractive = calcAttractive(i, currentNode);\\ndx += attractive.x;\\ndy += attractive.y;\\nvec2 gravity = calcGravity(currentNode, nodeAttributes);\\ndx -= gravity.x;\\ndy -= gravity.y;\\ndx *= u_Speed;\\ndy *= u_Speed;\\nfloat distLength = sqrt((dx * dx) + (dy * dy));\\nif (distLength > 0.0) {float limitedDist = min(u_MaxDisplace * u_Speed, distLength);\\ngl_FragColor = vec4(vec4(currentNode.x + ((dx / distLength) * limitedDist), currentNode.y + ((dy / distLength) * limitedDist), currentNode.z, currentNode.w));}if (gWebGPUDebug) {\\n  gl_FragColor = gWebGPUDebugOutput;\\n}}\\n\"},\"context\":{\"name\":\"\",\"dispatch\":[1,1,1],\"threadGroupSize\":[1,1,1],\"maxIteration\":1,\"defines\":[{\"name\":\"MAX_EDGE_PER_VERTEX\",\"type\":\"Float\",\"runtime\":true},{\"name\":\"VERTEX_COUNT\",\"type\":\"Float\",\"runtime\":true}],\"uniforms\":[{\"name\":\"u_Data\",\"type\":\"vec4<f32>[]\",\"storageClass\":\"StorageBuffer\",\"readonly\":false,\"writeonly\":false,\"size\":[1,1]},{\"name\":\"u_K\",\"type\":\"Float\",\"storageClass\":\"Uniform\",\"readonly\":true,\"writeonly\":false,\"size\":[1,1]},{\"name\":\"u_K2\",\"type\":\"Float\",\"storageClass\":\"Uniform\",\"readonly\":true,\"writeonly\":false,\"size\":[1,1]},{\"name\":\"u_Center\",\"type\":\"vec2<f32>\",\"storageClass\":\"Uniform\",\"readonly\":true,\"writeonly\":false,\"size\":[1,1]},{\"name\":\"u_Gravity\",\"type\":\"Float\",\"storageClass\":\"Uniform\",\"readonly\":true,\"writeonly\":false,\"size\":[1,1]},{\"name\":\"u_ClusterGravity\",\"type\":\"Float\",\"storageClass\":\"Uniform\",\"readonly\":true,\"writeonly\":false,\"size\":[1,1]},{\"name\":\"u_Speed\",\"type\":\"Float\",\"storageClass\":\"Uniform\",\"readonly\":true,\"writeonly\":false,\"size\":[1,1]},{\"name\":\"u_MaxDisplace\",\"type\":\"Float\",\"storageClass\":\"Uniform\",\"readonly\":true,\"writeonly\":false,\"size\":[1,1]},{\"name\":\"u_Clustering\",\"type\":\"Float\",\"storageClass\":\"Uniform\",\"readonly\":true,\"writeonly\":false,\"size\":[1,1]},{\"name\":\"u_AttributeArray\",\"type\":\"vec4<f32>[]\",\"storageClass\":\"StorageBuffer\",\"readonly\":true,\"writeonly\":false,\"size\":[1,1]},{\"name\":\"u_ClusterCenters\",\"type\":\"vec4<f32>[]\",\"storageClass\":\"StorageBuffer\",\"readonly\":true,\"writeonly\":false,\"size\":[1,1]}],\"globalDeclarations\":[],\"output\":{\"name\":\"u_Data\",\"size\":[1,1],\"length\":1},\"needPingpong\":true}}";
exports.clusterCode = "\nimport { globalInvocationID } from 'g-webgpu';\nconst VERTEX_COUNT;\nconst CLUSTER_COUNT;\n@numthreads(1, 1, 1)\nclass CalcCenter {\n  @in\n  u_Data: vec4[];\n  @in\n  u_NodeAttributes: vec4[]; // [[clusterIdx, 0, 0, 0], ...]\n  @in @out\n  u_ClusterCenters: vec4[]; // [[cx, cy, nodeCount, clusterIdx], ...]\n  @main\n  compute() {\n    const i = globalInvocationID.x;\n    const center = this.u_ClusterCenters[i];\n    let sumx = 0;\n    let sumy = 0;\n    let count = 0;\n    for (let j = 0; j < VERTEX_COUNT; j++) {\n      const attributes = this.u_NodeAttributes[j];\n      const clusterIdx = int(attributes[0]);\n      const vertex = this.u_Data[j];\n      if (clusterIdx == i) {\n        sumx += vertex.x;\n        sumy += vertex.y;\n        count += 1;\n      }\n    }\n    this.u_ClusterCenters[i] = [\n      sumx / count,\n      sumy / count,\n      count,\n      i\n    ];\n  }\n}\n";
exports.clusterBundle = "{\"shaders\":{\"WGSL\":\"import \\\"GLSL.std.450\\\" as std;\\n\\n\\n# var gWebGPUDebug : bool = false;\\n# var gWebGPUDebugOutput : vec4<f32> = vec4<f32>(0.0);\\n\\n[[builtin global_invocation_id]] var<in> globalInvocationID : vec3<u32>;\\n# [[builtin work_group_size]] var<in> workGroupSize : vec3<u32>;\\n# [[builtin work_group_id]] var<in> workGroupID : vec3<u32>;\\n[[builtin local_invocation_id]] var<in> localInvocationID : vec3<u32>;\\n# [[builtin num_work_groups]] var<in> numWorkGroups : vec3<u32>;\\n[[builtin local_invocation_idx]] var<in> localInvocationIndex : u32;\\n\\n\\ntype GWebGPUBuffer0 = [[block]] struct {\\n  [[offset 0]] u_Data : [[stride 16]] array<vec4<f32>>;\\n};\\n[[binding 0, set 0]] var<storage_buffer> gWebGPUBuffer0 : GWebGPUBuffer0;\\ntype GWebGPUBuffer1 = [[block]] struct {\\n  [[offset 0]] u_NodeAttributes : [[stride 16]] array<vec4<f32>>;\\n};\\n[[binding 1, set 0]] var<storage_buffer> gWebGPUBuffer1 : GWebGPUBuffer1;\\ntype GWebGPUBuffer2 = [[block]] struct {\\n  [[offset 0]] u_ClusterCenters : [[stride 16]] array<vec4<f32>>;\\n};\\n[[binding 2, set 0]] var<storage_buffer> gWebGPUBuffer2 : GWebGPUBuffer2;\\n\\n\\n\\n\\n\\n\\n\\n\\n\\nfn main() -> void {var i : i32 = globalInvocationID.x;\\nvar center : vec4<f32> = gWebGPUBuffer2.u_ClusterCenters[i];\\nvar sumx : f32 = 0.0;\\nvar sumy : f32 = 0.0;\\nvar count : f32 = 0.0;\\nfor (var j : i32 = 0; j < __DefineValuePlaceholder__VERTEX_COUNT; j = j + 1) {var attributes : vec4<f32> = gWebGPUBuffer1.u_NodeAttributes[j];\\nvar clusterIdx : i32 = i32(attributes.x);\\nvar vertex : vec4<f32> = gWebGPUBuffer0.u_Data[j];\\nif (clusterIdx == i) {sumx = sumx + vertex.x;\\nsumy = sumy + vertex.y;\\ncount = count + 1.0;}}\\ngWebGPUBuffer2.u_ClusterCenters[i] = vec4<f32>(sumx / count, sumy / count, count, i);\\nreturn;}\\n\\nentry_point compute as \\\"main\\\" = main;\\n\",\"GLSL450\":\"\\n\\n\\nbool gWebGPUDebug = false;\\nvec4 gWebGPUDebugOutput = vec4(0.0);\\n\\nivec3 globalInvocationID = ivec3(gl_GlobalInvocationID);\\nivec3 workGroupSize = ivec3(1,1,1);\\nivec3 workGroupID = ivec3(gl_WorkGroupID);\\nivec3 localInvocationID = ivec3(gl_LocalInvocationID);\\nivec3 numWorkGroups = ivec3(gl_NumWorkGroups);\\nint localInvocationIndex = int(gl_LocalInvocationIndex);\\n\\n\\nlayout(std430, set = 0, binding = 0) buffer readonly  GWebGPUBuffer0 {\\n  vec4 u_Data[];\\n} gWebGPUBuffer0;\\n\\nlayout(std430, set = 0, binding = 1) buffer readonly  GWebGPUBuffer1 {\\n  vec4 u_NodeAttributes[];\\n} gWebGPUBuffer1;\\n\\nlayout(std430, set = 0, binding = 2) buffer   GWebGPUBuffer2 {\\n  vec4 u_ClusterCenters[];\\n} gWebGPUBuffer2;\\n\\n\\n\\n#define VERTEX_COUNT __DefineValuePlaceholder__VERTEX_COUNT\\n#define CLUSTER_COUNT __DefineValuePlaceholder__CLUSTER_COUNT\\nlayout (\\n  local_size_x = 1,\\n  local_size_y = 1,\\n  local_size_z = 1\\n) in;\\n\\n\\n\\nvoid main() {int i = globalInvocationID.x;\\nvec4 center = gWebGPUBuffer2.u_ClusterCenters[i];\\nfloat sumx = 0.0;\\nfloat sumy = 0.0;\\nfloat count = 0.0;\\nfor (int j = 0; j < VERTEX_COUNT; j++) {vec4 attributes = gWebGPUBuffer1.u_NodeAttributes[j];\\nint clusterIdx = int(attributes.x);\\nvec4 vertex = gWebGPUBuffer0.u_Data[j];\\nif (clusterIdx == i) {sumx += vertex.x;\\nsumy += vertex.y;\\ncount += 1.0;}}\\ngWebGPUBuffer2.u_ClusterCenters[i] = vec4(sumx / count, sumy / count, count, i);}\\n\",\"GLSL100\":\"\\n\\nfloat epsilon = 0.00001;\\nvec2 addrTranslation_1Dto2D(float address1D, vec2 texSize) {\\n  vec2 conv_const = vec2(1.0 / texSize.x, 1.0 / (texSize.x * texSize.y));\\n  vec2 normAddr2D = float(address1D) * conv_const;\\n  return vec2(fract(normAddr2D.x + epsilon), normAddr2D.y);\\n}\\n\\nvoid barrier() {}\\n  \\n\\nuniform vec2 u_OutputTextureSize;\\nuniform int u_OutputTexelCount;\\nvarying vec2 v_TexCoord;\\n\\nbool gWebGPUDebug = false;\\nvec4 gWebGPUDebugOutput = vec4(0.0);\\n\\n#define VERTEX_COUNT __DefineValuePlaceholder__VERTEX_COUNT\\n#define CLUSTER_COUNT __DefineValuePlaceholder__CLUSTER_COUNT\\n\\nuniform sampler2D u_Data;\\nuniform vec2 u_DataSize;\\nvec4 getDatau_Data(vec2 address2D) {\\n  return vec4(texture2D(u_Data, address2D).rgba);\\n}\\nvec4 getDatau_Data(float address1D) {\\n  return getDatau_Data(addrTranslation_1Dto2D(address1D, u_DataSize));\\n}\\nvec4 getDatau_Data(int address1D) {\\n  return getDatau_Data(float(address1D));\\n}\\nuniform sampler2D u_NodeAttributes;\\nuniform vec2 u_NodeAttributesSize;\\nvec4 getDatau_NodeAttributes(vec2 address2D) {\\n  return vec4(texture2D(u_NodeAttributes, address2D).rgba);\\n}\\nvec4 getDatau_NodeAttributes(float address1D) {\\n  return getDatau_NodeAttributes(addrTranslation_1Dto2D(address1D, u_NodeAttributesSize));\\n}\\nvec4 getDatau_NodeAttributes(int address1D) {\\n  return getDatau_NodeAttributes(float(address1D));\\n}\\nuniform sampler2D u_ClusterCenters;\\nuniform vec2 u_ClusterCentersSize;\\nvec4 getDatau_ClusterCenters(vec2 address2D) {\\n  return vec4(texture2D(u_ClusterCenters, address2D).rgba);\\n}\\nvec4 getDatau_ClusterCenters(float address1D) {\\n  return getDatau_ClusterCenters(addrTranslation_1Dto2D(address1D, u_ClusterCentersSize));\\n}\\nvec4 getDatau_ClusterCenters(int address1D) {\\n  return getDatau_ClusterCenters(float(address1D));\\n}\\nvoid main() {\\nivec3 workGroupSize = ivec3(1, 1, 1);\\nivec3 numWorkGroups = ivec3(1, 1, 1);     \\nint globalInvocationIndex = int(floor(v_TexCoord.x * u_OutputTextureSize.x))\\n  + int(floor(v_TexCoord.y * u_OutputTextureSize.y)) * int(u_OutputTextureSize.x);\\nint workGroupIDLength = globalInvocationIndex / (workGroupSize.x * workGroupSize.y * workGroupSize.z);\\nivec3 workGroupID = ivec3(workGroupIDLength / numWorkGroups.y / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.y);\\nint localInvocationIDZ = globalInvocationIndex / (workGroupSize.x * workGroupSize.y);\\nint localInvocationIDY = (globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y) / workGroupSize.x;\\nint localInvocationIDX = globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y - localInvocationIDY * workGroupSize.x;\\nivec3 localInvocationID = ivec3(localInvocationIDX, localInvocationIDY, localInvocationIDZ);\\nivec3 globalInvocationID = workGroupID * workGroupSize + localInvocationID;\\nint localInvocationIndex = localInvocationID.z * workGroupSize.x * workGroupSize.y\\n                + localInvocationID.y * workGroupSize.x + localInvocationID.x;\\nint i = globalInvocationID.x;\\nvec4 center = getDatau_ClusterCenters(i);\\nfloat sumx = 0.0;\\nfloat sumy = 0.0;\\nfloat count = 0.0;\\nfor (int j = 0; j < VERTEX_COUNT; j++) {vec4 attributes = getDatau_NodeAttributes(j);\\nint clusterIdx = int(attributes.x);\\nvec4 vertex = getDatau_Data(j);\\nif (clusterIdx == i) {sumx += vertex.x;\\nsumy += vertex.y;\\ncount += 1.0;}}\\ngl_FragColor = vec4(vec4(sumx / count, sumy / count, count, i));if (gWebGPUDebug) {\\n  gl_FragColor = gWebGPUDebugOutput;\\n}}\\n\"},\"context\":{\"name\":\"\",\"dispatch\":[1,1,1],\"threadGroupSize\":[1,1,1],\"maxIteration\":1,\"defines\":[{\"name\":\"VERTEX_COUNT\",\"type\":\"Float\",\"runtime\":true},{\"name\":\"CLUSTER_COUNT\",\"type\":\"Float\",\"runtime\":true}],\"uniforms\":[{\"name\":\"u_Data\",\"type\":\"vec4<f32>[]\",\"storageClass\":\"StorageBuffer\",\"readonly\":true,\"writeonly\":false,\"size\":[1,1]},{\"name\":\"u_NodeAttributes\",\"type\":\"vec4<f32>[]\",\"storageClass\":\"StorageBuffer\",\"readonly\":true,\"writeonly\":false,\"size\":[1,1]},{\"name\":\"u_ClusterCenters\",\"type\":\"vec4<f32>[]\",\"storageClass\":\"StorageBuffer\",\"readonly\":false,\"writeonly\":false,\"size\":[1,1]}],\"globalDeclarations\":[],\"output\":{\"name\":\"u_ClusterCenters\",\"size\":[1,1],\"length\":1},\"needPingpong\":true}}";
//# sourceMappingURL=fruchtermanShader.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356587, function(require, module, exports) {

// @ts-nocheck
/**
 * @fileOverview fruchterman layout
 * @author shiwu.wyy@antfin.com
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GForceGPULayout = void 0;
var base_1 = require("../base");
var util_1 = require("../../util");
// @ts-ignore
var g_webgpu_1 = require("@antv/g-webgpu");
var gpu_1 = require("../../util/gpu");
var math_1 = require("../../util/math");
var gForceShader_1 = require("./gForceShader");
var constants_1 = require("../constants");
/**
 * graphin 中的 force 布局
 */
var GForceGPULayout = /** @class */ (function (_super) {
    __extends(GForceGPULayout, _super);
    function GForceGPULayout(options) {
        var _this = _super.call(this) || this;
        /** 停止迭代的最大迭代数 */
        _this.maxIteration = 1000;
        /** 弹簧引力系数 */
        _this.edgeStrength = 200;
        /** 斥力系数 */
        _this.nodeStrength = 1000;
        /** 库伦系数 */
        _this.coulombDisScale = 0.005;
        /** 阻尼系数 */
        _this.damping = 0.9;
        /** 最大速度 */
        _this.maxSpeed = 1000;
        /** 一次迭代的平均移动距离小于该值时停止迭代 */
        _this.minMovement = 0.5;
        /** 迭代中衰减 */
        _this.interval = 0.02;
        /** 斥力的一个系数 */
        _this.factor = 1;
        /** 理想边长 */
        _this.linkDistance = 1;
        /** 重力大小 */
        _this.gravity = 10;
        /** 是否启用web worker。前提是在web worker里执行布局，否则无效	*/
        _this.workerEnabled = false;
        _this.nodes = [];
        _this.edges = [];
        _this.width = 300;
        _this.height = 300;
        _this.nodeMap = {};
        _this.nodeIdxMap = {};
        _this.updateCfg(options);
        return _this;
    }
    GForceGPULayout.prototype.getDefaultCfg = function () {
        return {
            maxIteration: 2000,
            gravity: 10,
            clustering: false,
            clusterGravity: 10
        };
    };
    /**
     * 执行布局
     */
    GForceGPULayout.prototype.execute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self, nodes, center, nodeMap, nodeIdxMap;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        nodes = self.nodes;
                        if (!nodes || nodes.length === 0) {
                            if (self.onLayoutEnd)
                                self.onLayoutEnd();
                            return [2 /*return*/];
                        }
                        if (!self.width && typeof window !== "undefined") {
                            self.width = window.innerWidth;
                        }
                        if (!self.height && typeof window !== "undefined") {
                            self.height = window.innerHeight;
                        }
                        if (!self.center) {
                            self.center = [self.width / 2, self.height / 2];
                        }
                        center = self.center;
                        if (nodes.length === 1) {
                            nodes[0].x = center[0];
                            nodes[0].y = center[1];
                            if (self.onLayoutEnd)
                                self.onLayoutEnd();
                            return [2 /*return*/];
                        }
                        nodeMap = {};
                        nodeIdxMap = {};
                        nodes.forEach(function (node, i) {
                            if (!util_1.isNumber(node.x))
                                node.x = Math.random() * self.width;
                            if (!util_1.isNumber(node.y))
                                node.y = Math.random() * self.height;
                            nodeMap[node.id] = node;
                            nodeIdxMap[node.id] = i;
                        });
                        self.nodeMap = nodeMap;
                        self.nodeIdxMap = nodeIdxMap;
                        self.nodeStrength = gpu_1.proccessToFunc(self.nodeStrength, 1);
                        self.edgeStrength = gpu_1.proccessToFunc(self.edgeStrength, 1);
                        // layout
                        return [4 /*yield*/, self.run()];
                    case 1:
                        // layout
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GForceGPULayout.prototype.executeWithWorker = function (canvas, ctx) {
        var self = this;
        var nodes = self.nodes;
        var center = self.center;
        if (!nodes || nodes.length === 0) {
            return;
        }
        if (nodes.length === 1) {
            nodes[0].x = center[0];
            nodes[0].y = center[1];
            return;
        }
        var nodeMap = {};
        var nodeIdxMap = {};
        nodes.forEach(function (node, i) {
            if (!util_1.isNumber(node.x))
                node.x = Math.random() * self.width;
            if (!util_1.isNumber(node.y))
                node.y = Math.random() * self.height;
            nodeMap[node.id] = node;
            nodeIdxMap[node.id] = i;
        });
        self.nodeMap = nodeMap;
        self.nodeIdxMap = nodeIdxMap;
        self.nodeStrength = gpu_1.proccessToFunc(self.nodeStrength, 1);
        self.edgeStrength = gpu_1.proccessToFunc(self.edgeStrength, 1);
        // layout
        self.run(canvas, ctx);
    };
    GForceGPULayout.prototype.run = function (canvas, ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var self, nodes, edges, maxIteration, numParticles, _a, maxEdgePerVetex, nodesEdgesArray, masses, nodeStrengths, centerXs, centerYs, centerGravities, fxs, fys, gravity, center, nodeAttributeArray1, nodeAttributeArray2, workerEnabled, world, onLayoutEnd, initPreviousData, i, kernelGForce, kernelAveMovement, execute;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        self = this;
                        nodes = self.nodes;
                        edges = self.edges;
                        maxIteration = self.maxIteration;
                        if (!self.width && typeof window !== "undefined") {
                            self.width = window.innerWidth;
                        }
                        if (!self.height && typeof window !== "undefined") {
                            self.height = window.innerHeight;
                        }
                        numParticles = nodes.length;
                        self.linkDistance = gpu_1.proccessToFunc(self.linkDistance);
                        self.edgeStrength = gpu_1.proccessToFunc(self.edgeStrength);
                        _a = gpu_1.buildTextureDataWithTwoEdgeAttr(nodes, edges, self.linkDistance, self.edgeStrength), maxEdgePerVetex = _a.maxEdgePerVetex, nodesEdgesArray = _a.array;
                        // init degree for mass
                        self.degrees = math_1.getDegree(nodes.length, self.nodeIdxMap, edges);
                        masses = [];
                        nodeStrengths = [];
                        centerXs = [];
                        centerYs = [];
                        centerGravities = [];
                        fxs = [];
                        fys = [];
                        if (!self.getMass) {
                            self.getMass = function (d) {
                                return self.degrees[self.nodeIdxMap[d.id]] || 1;
                            };
                        }
                        gravity = self.gravity;
                        center = self.center;
                        nodes.forEach(function (node, i) {
                            masses.push(self.getMass(node));
                            nodeStrengths.push(self.nodeStrength(node));
                            if (!self.degrees[i])
                                self.degrees[i] = 0;
                            var nodeGravity = [center[0], center[1], gravity];
                            if (self.getCenter) {
                                var customCenter = self.getCenter(node, self.degrees[i]);
                                if (customCenter &&
                                    util_1.isNumber(customCenter[0]) &&
                                    util_1.isNumber(customCenter[1]) &&
                                    util_1.isNumber(customCenter[2])) {
                                    nodeGravity = customCenter;
                                }
                            }
                            centerXs.push(nodeGravity[0]);
                            centerYs.push(nodeGravity[1]);
                            centerGravities.push(nodeGravity[2]);
                            if (util_1.isNumber(node.fx) && util_1.isNumber(node.fy)) {
                                fxs.push(node.fx || 0.001);
                                fys.push(node.fy || 0.001);
                            }
                            else {
                                fxs.push(0);
                                fys.push(0);
                            }
                        });
                        nodeAttributeArray1 = gpu_1.arrayToTextureData([
                            masses,
                            self.degrees,
                            nodeStrengths,
                            fxs
                        ]);
                        nodeAttributeArray2 = gpu_1.arrayToTextureData([
                            centerXs,
                            centerYs,
                            centerGravities,
                            fys
                        ]);
                        workerEnabled = self.workerEnabled;
                        if (workerEnabled) {
                            world = g_webgpu_1.World.create({
                                canvas: canvas,
                                engineOptions: {
                                    supportCompute: true
                                }
                            });
                        }
                        else {
                            world = g_webgpu_1.World.create({
                                engineOptions: {
                                    supportCompute: true
                                }
                            });
                        }
                        onLayoutEnd = self.onLayoutEnd;
                        initPreviousData = [];
                        nodesEdgesArray.forEach(function (value) {
                            initPreviousData.push(value);
                        });
                        for (i = 0; i < 4; i++) {
                            initPreviousData.push(0);
                        }
                        kernelGForce = world
                            .createKernel(gForceShader_1.gForceBundle)
                            .setDispatch([numParticles, 1, 1])
                            .setBinding({
                            u_Data: nodesEdgesArray,
                            u_damping: self.damping,
                            u_maxSpeed: self.maxSpeed,
                            u_minMovement: self.minMovement,
                            u_coulombDisScale: self.coulombDisScale,
                            u_factor: self.factor,
                            u_NodeAttributeArray1: nodeAttributeArray1,
                            u_NodeAttributeArray2: nodeAttributeArray2,
                            MAX_EDGE_PER_VERTEX: maxEdgePerVetex,
                            VERTEX_COUNT: numParticles,
                            u_AveMovement: initPreviousData,
                            u_interval: self.interval // 每次迭代更新，首次设置为 interval，在 onIterationCompleted 中更新
                        });
                        kernelAveMovement = world
                            .createKernel(gForceShader_1.aveMovementBundle)
                            .setDispatch([1, 1, 1])
                            .setBinding({
                            u_Data: nodesEdgesArray,
                            VERTEX_COUNT: numParticles,
                            u_AveMovement: [0, 0, 0, 0]
                        });
                        execute = function () { return __awaiter(_this, void 0, void 0, function () {
                            var i, stepInterval, finalParticleData;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        i = 0;
                                        _a.label = 1;
                                    case 1:
                                        if (!(i < maxIteration)) return [3 /*break*/, 5];
                                        // TODO: 似乎都来自 kernelGForce 是一个引用
                                        // 当前坐标作为下一次迭代的 PreviousData
                                        // if (i > 0) {
                                        //   kernelAveMovement.setBinding({
                                        //     u_PreviousData: kernelGForce
                                        //   });
                                        // }
                                        // eslint-disable-next-line no-await-in-loop
                                        return [4 /*yield*/, kernelGForce.execute()];
                                    case 2:
                                        // TODO: 似乎都来自 kernelGForce 是一个引用
                                        // 当前坐标作为下一次迭代的 PreviousData
                                        // if (i > 0) {
                                        //   kernelAveMovement.setBinding({
                                        //     u_PreviousData: kernelGForce
                                        //   });
                                        // }
                                        // eslint-disable-next-line no-await-in-loop
                                        _a.sent();
                                        // midRes = await kernelGForce.getOutput();
                                        // 每次迭代完成后
                                        // 计算平均位移，用于提前终止迭代
                                        kernelAveMovement.setBinding({
                                            u_Data: kernelGForce
                                        });
                                        // eslint-disable-next-line no-await-in-loop
                                        return [4 /*yield*/, kernelAveMovement.execute()];
                                    case 3:
                                        // eslint-disable-next-line no-await-in-loop
                                        _a.sent();
                                        stepInterval = Math.max(0.02, self.interval - i * 0.002);
                                        kernelGForce.setBinding({
                                            u_interval: stepInterval,
                                            u_AveMovement: kernelAveMovement
                                        });
                                        _a.label = 4;
                                    case 4:
                                        i++;
                                        return [3 /*break*/, 1];
                                    case 5: return [4 /*yield*/, kernelGForce.getOutput()];
                                    case 6:
                                        finalParticleData = _a.sent();
                                        // 所有迭代完成后
                                        if (canvas) {
                                            // 传递数据给主线程
                                            ctx.postMessage({
                                                type: constants_1.LAYOUT_MESSAGE.GPUEND,
                                                vertexEdgeData: finalParticleData
                                                // edgeIndexBufferData,
                                            });
                                        }
                                        else {
                                            nodes.forEach(function (node, i) {
                                                var x = finalParticleData[4 * i];
                                                var y = finalParticleData[4 * i + 1];
                                                node.x = x;
                                                node.y = y;
                                            });
                                        }
                                        if (onLayoutEnd)
                                            onLayoutEnd();
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        return [4 /*yield*/, execute()];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GForceGPULayout.prototype.getType = function () {
        return "gForce-gpu";
    };
    return GForceGPULayout;
}(base_1.Base));
exports.GForceGPULayout = GForceGPULayout;
//# sourceMappingURL=gForce.js.map
}, function(modId) { var map = {"../base":1679470356559,"../../util":1679470356560,"../../util/gpu":1679470356585,"../../util/math":1679470356564,"./gForceShader":1679470356588,"../constants":1679470356574}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356588, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.aveMovementBundle = exports.aveMovementCode = exports.gForceBundle = exports.gForceCode = void 0;
exports.gForceCode = "\nimport { globalInvocationID } from 'g-webgpu';\n\nconst MAX_EDGE_PER_VERTEX;\nconst VERTEX_COUNT;\nconst SHIFT_20 = 1048576;\n\n@numthreads(1, 1, 1)\nclass GGForce {\n  @in @out\n  u_Data: vec4[];\n\n  @in\n  u_damping: float;\n  \n  @in\n  u_maxSpeed: float;\n\n  @in\n  u_minMovement: float;\n\n  @in\n  u_AveMovement: vec4[];\n\n  @in\n  u_coulombDisScale: float;\n\n  @in\n  u_factor: float;\n\n  @in\n  u_NodeAttributeArray1: vec4[];\n\n  @in\n  u_NodeAttributeArray2: vec4[];\n\n  @in\n  u_interval: float;\n\n  unpack_float(packedValue: float): ivec2 {\n    const packedIntValue = int(packedValue);\n    const v0 = packedIntValue / SHIFT_20;\n    return [v0, packedIntValue - v0 * SHIFT_20];\n  }\n\n  calcRepulsive(i: int, currentNode: vec4): vec2 {\n    let ax = 0, ay = 0;\n    for (let j: int = 0; j < VERTEX_COUNT; j++) {\n      if (i != j) {\n        const nextNode = this.u_Data[j];\n        const vx = currentNode[0] - nextNode[0];\n        const vy = currentNode[1] - nextNode[1];\n        const dist = sqrt(vx * vx + vy * vy) + 0.01;\n        const n_dist = (dist + 0.1) * this.u_coulombDisScale;\n        const direx = vx / dist;\n        const direy = vy / dist;\n        const attributesi = this.u_NodeAttributeArray1[i];\n        const attributesj = this.u_NodeAttributeArray1[j];\n        const massi = attributesi[0];\n        const nodeStrengthi = attributesi[2];\n        const nodeStrengthj = attributesj[2];\n        const nodeStrength = (nodeStrengthi + nodeStrengthj) / 2;\n        // const param = nodeStrength * this.u_factor / (n_dist * n_dist * massi);\n        const param = nodeStrength * this.u_factor / (n_dist * n_dist);\n        ax += direx * param;\n        ay += direy * param;\n      }\n    }\n    return [ax, ay];\n  }\n\n  calcGravity(i: int, currentNode: vec4, attributes2: vec4): vec2 {\n    // note: attributes2 = [centerX, centerY, gravity, 0]\n\n    const vx = currentNode[0] - attributes2[0];\n    const vy = currentNode[1] - attributes2[1];\n    \n    const ax = vx * attributes2[2];\n    const ay = vy * attributes2[2];\n    \n    return [ax, ay];\n  }\n\n  calcAttractive(i: int, currentNode: vec4, attributes1: vec4): vec2 {\n    // note: attributes1 = [mass, degree, nodeSterngth, 0]\n\n    const mass = attributes1[0];\n    let ax = 0, ay = 0;\n    // const arr_offset = int(floor(currentNode[2] + 0.5));\n    // const length = int(floor(currentNode[3] + 0.5));\n\n    const compressed = this.unpack_float(currentNode[2]);\n    const length = compressed[0];\n    const arr_offset = compressed[1];\n\n    const node_buffer: vec4;\n    for (let p: int = 0; p < MAX_EDGE_PER_VERTEX; p++) {\n      if (p >= length) break;\n      const arr_idx = arr_offset + 4 * p; // i \u8282\u70B9\u7684\u7B2C p \u6761\u8FB9\u5F00\u59CB\u7684\u5C0F\u683C\u5B50\u4F4D\u7F6E\n      const buf_offset = arr_idx - arr_idx / 4 * 4;\n      if (p == 0 || buf_offset == 0) {\n        node_buffer = this.u_Data[int(arr_idx / 4)]; // \u5927\u683C\u5B50\uFF0C\u5927\u683C\u5B50\u4F4D\u7F6E=\u5C0F\u4E2A\u5B50\u4F4D\u7F6E / 4\uFF0C\n      }\n\n      let float_j: float = node_buffer[0];\n\n      const nextNode = this.u_Data[int(float_j)];\n      const vx = nextNode[0] - currentNode[0];\n      const vy = nextNode[1] - currentNode[1];\n      const dist = sqrt(vx * vx + vy * vy) + 0.01;\n      const direx = vx / dist;\n      const direy = vy / dist;\n      const edgeLength = node_buffer[1];\n      const edgeStrength = node_buffer[2];\n      const diff: float = edgeLength - dist;//edgeLength\n      // const param = diff * this.u_stiffness / mass; //\n      const param = diff * edgeStrength / mass; // \n      ax -= direx * param;\n      ay -= direy * param;\n    }\n    return [ax, ay];\n  }\n\n  @main\n  compute() {\n    const i = globalInvocationID.x;\n    const currentNode = this.u_Data[i];\n    const movement = u_AveMovement[0];\n    let ax = 0, ay = 0;\n\n    if (i >= VERTEX_COUNT || movement.x < u_minMovement) {\n      this.u_Data[i] = currentNode;\n      return;\n    }\n\n    // \u6BCF\u4E2A\u8282\u70B9\u5C5E\u6027\u5360\u4E24\u4E2A\u6570\u7EC4\u4E2D\u5404\u4E00\u683C\n    // [mass, degree, nodeStrength, fx]\n    const nodeAttributes1 = this.u_NodeAttributeArray1[i];\n    // [centerX, centerY, centerGravity, fy]\n    const nodeAttributes2 = this.u_NodeAttributeArray2[i];\n\n    // repulsive\n    const repulsive = this.calcRepulsive(i, currentNode);\n    ax += repulsive[0];\n    ay += repulsive[1];\n\n    // attractive\n    const attractive = this.calcAttractive(i, currentNode, nodeAttributes1);\n    ax += attractive[0];\n    ay += attractive[1];\n\n    // gravity\n    const gravity = this.calcGravity(i, currentNode, nodeAttributes2);\n    ax -= gravity[0];\n    ay -= gravity[1];\n\n    // speed\n    const param = this.u_interval * this.u_damping;\n    let vx = ax * param;\n    let vy = ay * param;\n    const vlength = sqrt(vx * vx + vy * vy) + 0.0001;\n    if (vlength > this.u_maxSpeed) {\n      const param2 = this.u_maxSpeed / vlength;\n      vx = param2 * vx;\n      vy = param2 * vy;\n    }\n\n    // move\n    if (nodeAttributes1[3] != 0 && nodeAttributes2[3] != 0) {\n      this.u_Data[i] = [\n        nodeAttributes1[3],\n        nodeAttributes2[3],\n        currentNode[2],\n        0\n      ];\n    } else {\n      const distx = vx * this.u_interval;\n      const disty = vy * this.u_interval;\n      const distLength = sqrt(distx * distx + disty * disty);\n      this.u_Data[i] = [\n        currentNode[0] + distx,\n        currentNode[1] + disty,\n        currentNode[2],\n        distLength\n      ];\n    }\n    \n    // the avarage move distance\n    // need to share memory\n    \n  }\n}\n";
exports.gForceBundle = "{\"shaders\":{\"WGSL\":\"import \\\"GLSL.std.450\\\" as std;\\n\\n\\n# var gWebGPUDebug : bool = false;\\n# var gWebGPUDebugOutput : vec4<f32> = vec4<f32>(0.0);\\n\\n[[builtin global_invocation_id]] var<in> globalInvocationID : vec3<u32>;\\n# [[builtin work_group_size]] var<in> workGroupSize : vec3<u32>;\\n# [[builtin work_group_id]] var<in> workGroupID : vec3<u32>;\\n[[builtin local_invocation_id]] var<in> localInvocationID : vec3<u32>;\\n# [[builtin num_work_groups]] var<in> numWorkGroups : vec3<u32>;\\n[[builtin local_invocation_idx]] var<in> localInvocationIndex : u32;\\n\\ntype GWebGPUParams = [[block]] struct {\\n  [[offset 0]] u_damping : f32;\\n  [[offset 4]] u_maxSpeed : f32;\\n  [[offset 8]] u_minMovement : f32;\\n  \\n  [[offset 12]] u_coulombDisScale : f32;\\n  [[offset 16]] u_factor : f32;\\n  \\n  \\n  [[offset 20]] u_interval : f32;\\n};\\n[[binding 0, set 0]] var<uniform> gWebGPUUniformParams : GWebGPUParams;\\ntype GWebGPUBuffer0 = [[block]] struct {\\n  [[offset 0]] u_Data : [[stride 16]] array<vec4<f32>>;\\n};\\n[[binding 1, set 0]] var<storage_buffer> gWebGPUBuffer0 : GWebGPUBuffer0;\\ntype GWebGPUBuffer1 = [[block]] struct {\\n  [[offset 0]] u_AveMovement : [[stride 16]] array<vec4<f32>>;\\n};\\n[[binding 2, set 0]] var<storage_buffer> gWebGPUBuffer1 : GWebGPUBuffer1;\\ntype GWebGPUBuffer2 = [[block]] struct {\\n  [[offset 0]] u_NodeAttributeArray1 : [[stride 16]] array<vec4<f32>>;\\n};\\n[[binding 3, set 0]] var<storage_buffer> gWebGPUBuffer2 : GWebGPUBuffer2;\\ntype GWebGPUBuffer3 = [[block]] struct {\\n  [[offset 0]] u_NodeAttributeArray2 : [[stride 16]] array<vec4<f32>>;\\n};\\n[[binding 4, set 0]] var<storage_buffer> gWebGPUBuffer3 : GWebGPUBuffer3;\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\nfn unpack_float(packedValue : f32) -> vec2<i32> {var packedIntValue : i32 = i32(packedValue);\\nvar v0 : i32 = packedIntValue / 1048576;\\nreturn vec2<i32>(v0, packedIntValue - (v0 * 1048576));}\\nfn calcRepulsive(i : i32, currentNode : vec4<f32>) -> vec2<f32> {var ax : f32 = 0.0;\\nvar ay : f32 = 0.0;\\nfor (var j : i32 = 0; j < __DefineValuePlaceholder__VERTEX_COUNT; j = j + 1) {if (i != j) {var nextNode : vec4<f32> = gWebGPUBuffer0.u_Data[j];\\nvar vx : f32 = currentNode.x - nextNode.x;\\nvar vy : f32 = currentNode.y - nextNode.y;\\nvar dist : f32 = std::sqrt((vx * vx) + (vy * vy)) + 0.01;\\nvar n_dist : f32 = (dist + 0.1) * gWebGPUUniformParams.u_coulombDisScale;\\nvar direx : f32 = vx / dist;\\nvar direy : f32 = vy / dist;\\nvar attributesi : vec4<f32> = gWebGPUBuffer2.u_NodeAttributeArray1[i];\\nvar attributesj : vec4<f32> = gWebGPUBuffer2.u_NodeAttributeArray1[j];\\nvar massi : f32 = attributesi.x;\\nvar nodeStrengthi : f32 = attributesi.z;\\nvar nodeStrengthj : f32 = attributesj.z;\\nvar nodeStrength : f32 = (nodeStrengthi + nodeStrengthj) / 2.0;\\nvar param : f32 = (nodeStrength * gWebGPUUniformParams.u_factor) / (n_dist * n_dist);\\nax = ax + direx * param;\\nay = ay + direy * param;}}\\nreturn vec2<f32>(ax, ay);}\\nfn calcGravity(i : i32, currentNode : vec4<f32>, attributes2 : vec4<f32>) -> vec2<f32> {var vx : f32 = currentNode.x - attributes2.x;\\nvar vy : f32 = currentNode.y - attributes2.y;\\nvar ax : f32 = vx * attributes2.z;\\nvar ay : f32 = vy * attributes2.z;\\nreturn vec2<f32>(ax, ay);}\\nfn calcAttractive(i : i32, currentNode : vec4<f32>, attributes1 : vec4<f32>) -> vec2<f32> {var mass : f32 = attributes1.x;\\nvar ax : f32 = 0.0;\\nvar ay : f32 = 0.0;\\nvar compressed : vec2<i32> = unpack_float(currentNode.z);\\nvar length : i32 = compressed.x;\\nvar arr_offset : i32 = compressed.y;\\nvar node_buffer : vec4<f32>;\\nfor (var p : i32 = 0; p < __DefineValuePlaceholder__MAX_EDGE_PER_VERTEX; p = p + 1) {if (p >= length) {break;}\\nvar arr_idx : i32 = arr_offset + (4 * p);\\nvar buf_offset : i32 = arr_idx - ((arr_idx / 4) * 4);\\nif ((p == 0) || (buf_offset == 0)) {node_buffer = gWebGPUBuffer0.u_Data[i32(arr_idx / 4)];}\\nvar float_j : f32 = node_buffer.x;\\nvar nextNode : vec4<f32> = gWebGPUBuffer0.u_Data[i32(float_j)];\\nvar vx : f32 = nextNode.x - currentNode.x;\\nvar vy : f32 = nextNode.y - currentNode.y;\\nvar dist : f32 = std::sqrt((vx * vx) + (vy * vy)) + 0.01;\\nvar direx : f32 = vx / dist;\\nvar direy : f32 = vy / dist;\\nvar edgeLength : f32 = node_buffer.y;\\nvar edgeStrength : f32 = node_buffer.z;\\nvar diff : f32 = edgeLength - dist;\\nvar param : f32 = (diff * edgeStrength) / mass;\\nax = ax - direx * param;\\nay = ay - direy * param;}\\nreturn vec2<f32>(ax, ay);}\\nfn main() -> void {var i : i32 = globalInvocationID.x;\\nvar currentNode : vec4<f32> = gWebGPUBuffer0.u_Data[i];\\nvar movement : vec4<f32> = gWebGPUBuffer1.u_AveMovement[0];\\nvar ax : f32 = 0.0;\\nvar ay : f32 = 0.0;\\nif ((i >= __DefineValuePlaceholder__VERTEX_COUNT) || (movement.x < gWebGPUUniformParams.u_minMovement)) {gWebGPUBuffer0.u_Data[i] = currentNode;\\nreturn ;}\\nvar nodeAttributes1 : vec4<f32> = gWebGPUBuffer2.u_NodeAttributeArray1[i];\\nvar nodeAttributes2 : vec4<f32> = gWebGPUBuffer3.u_NodeAttributeArray2[i];\\nvar repulsive : vec2<f32> = calcRepulsive(i, currentNode);\\nax = ax + repulsive.x;\\nay = ay + repulsive.y;\\nvar attractive : vec2<f32> = calcAttractive(i, currentNode, nodeAttributes1);\\nax = ax + attractive.x;\\nay = ay + attractive.y;\\nvar gravity : vec2<f32> = calcGravity(i, currentNode, nodeAttributes2);\\nax = ax - gravity.x;\\nay = ay - gravity.y;\\nvar param : f32 = gWebGPUUniformParams.u_interval * gWebGPUUniformParams.u_damping;\\nvar vx : f32 = ax * param;\\nvar vy : f32 = ay * param;\\nvar vlength : f32 = std::sqrt((vx * vx) + (vy * vy)) + 0.0001;\\nif (vlength > gWebGPUUniformParams.u_maxSpeed) {var param2 : f32 = gWebGPUUniformParams.u_maxSpeed / vlength;\\nvx = param2 * vx;\\nvy = param2 * vy;}\\nvar distx : f32 = vx * gWebGPUUniformParams.u_interval;\\nvar disty : f32 = vy * gWebGPUUniformParams.u_interval;\\nvar distLength : f32 = std::sqrt((distx * distx) + (disty * disty));\\nif ((nodeAttributes1.w != 0.0) && (nodeAttributes2.w != 0.0)) {gWebGPUBuffer0.u_Data[i] = vec4<f32>(nodeAttributes1.w, nodeAttributes2.w, currentNode.z, 0.0);}else {gWebGPUBuffer0.u_Data[i] = vec4<f32>(currentNode.x + distx, currentNode.y + disty, currentNode.z, distLength);}\\nreturn;}\\n\\nentry_point compute as \\\"main\\\" = main;\\n\",\"GLSL450\":\"\\n\\n\\nbool gWebGPUDebug = false;\\nvec4 gWebGPUDebugOutput = vec4(0.0);\\n\\nivec3 globalInvocationID = ivec3(gl_GlobalInvocationID);\\nivec3 workGroupSize = ivec3(1,1,1);\\nivec3 workGroupID = ivec3(gl_WorkGroupID);\\nivec3 localInvocationID = ivec3(gl_LocalInvocationID);\\nivec3 numWorkGroups = ivec3(gl_NumWorkGroups);\\nint localInvocationIndex = int(gl_LocalInvocationIndex);\\n\\nlayout(std140, set = 0, binding = 0) uniform GWebGPUParams {\\n  float u_damping;\\n  float u_maxSpeed;\\n  float u_minMovement;\\n  \\n  float u_coulombDisScale;\\n  float u_factor;\\n  \\n  \\n  float u_interval;\\n} gWebGPUUniformParams;\\nlayout(std430, set = 0, binding = 1) buffer   GWebGPUBuffer0 {\\n  vec4 u_Data[];\\n} gWebGPUBuffer0;\\n\\nlayout(std430, set = 0, binding = 2) buffer readonly  GWebGPUBuffer1 {\\n  vec4 u_AveMovement[];\\n} gWebGPUBuffer1;\\n\\nlayout(std430, set = 0, binding = 3) buffer readonly  GWebGPUBuffer2 {\\n  vec4 u_NodeAttributeArray1[];\\n} gWebGPUBuffer2;\\n\\nlayout(std430, set = 0, binding = 4) buffer readonly  GWebGPUBuffer3 {\\n  vec4 u_NodeAttributeArray2[];\\n} gWebGPUBuffer3;\\n\\n\\n\\n#define MAX_EDGE_PER_VERTEX __DefineValuePlaceholder__MAX_EDGE_PER_VERTEX\\n#define VERTEX_COUNT __DefineValuePlaceholder__VERTEX_COUNT\\n#define SHIFT_20 1048576.0\\nlayout (\\n  local_size_x = 1,\\n  local_size_y = 1,\\n  local_size_z = 1\\n) in;\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\nivec2 unpack_float(float packedValue) {int packedIntValue = int(packedValue);\\nint v0 = packedIntValue / int(SHIFT_20);\\nreturn ivec2(v0, packedIntValue - (v0 * int(SHIFT_20)));}\\nvec2 calcRepulsive(int i, vec4 currentNode) {float ax = 0.0;\\nfloat ay = 0.0;\\nfor (int j = 0; j < VERTEX_COUNT; j++) {if (i != j) {vec4 nextNode = gWebGPUBuffer0.u_Data[j];\\nfloat vx = currentNode.x - nextNode.x;\\nfloat vy = currentNode.y - nextNode.y;\\nfloat dist = sqrt((vx * vx) + (vy * vy)) + 0.01;\\nfloat n_dist = (dist + 0.1) * gWebGPUUniformParams.u_coulombDisScale;\\nfloat direx = vx / dist;\\nfloat direy = vy / dist;\\nvec4 attributesi = gWebGPUBuffer2.u_NodeAttributeArray1[i];\\nvec4 attributesj = gWebGPUBuffer2.u_NodeAttributeArray1[j];\\nfloat massi = attributesi.x;\\nfloat nodeStrengthi = attributesi.z;\\nfloat nodeStrengthj = attributesj.z;\\nfloat nodeStrength = (nodeStrengthi + nodeStrengthj) / 2.0;\\nfloat param = (nodeStrength * gWebGPUUniformParams.u_factor) / (n_dist * n_dist);\\nax += direx * param;\\nay += direy * param;}}\\nreturn vec2(ax, ay);}\\nvec2 calcGravity(int i, vec4 currentNode, vec4 attributes2) {float vx = currentNode.x - attributes2.x;\\nfloat vy = currentNode.y - attributes2.y;\\nfloat ax = vx * attributes2.z;\\nfloat ay = vy * attributes2.z;\\nreturn vec2(ax, ay);}\\nvec2 calcAttractive(int i, vec4 currentNode, vec4 attributes1) {float mass = attributes1.x;\\nfloat ax = 0.0;\\nfloat ay = 0.0;\\nivec2 compressed = unpack_float(currentNode.z);\\nint length = compressed.x;\\nint arr_offset = compressed.y;\\nvec4 node_buffer;\\nfor (int p = 0; p < MAX_EDGE_PER_VERTEX; p++) {if (p >= length) {break;}\\nint arr_idx = arr_offset + (4 * p);\\nint buf_offset = arr_idx - ((arr_idx / 4) * 4);\\nif ((p == 0) || (buf_offset == 0)) {node_buffer = gWebGPUBuffer0.u_Data[int(arr_idx / 4)];}\\nfloat float_j = node_buffer.x;\\nvec4 nextNode = gWebGPUBuffer0.u_Data[int(float_j)];\\nfloat vx = nextNode.x - currentNode.x;\\nfloat vy = nextNode.y - currentNode.y;\\nfloat dist = sqrt((vx * vx) + (vy * vy)) + 0.01;\\nfloat direx = vx / dist;\\nfloat direy = vy / dist;\\nfloat edgeLength = node_buffer.y;\\nfloat edgeStrength = node_buffer.z;\\nfloat diff = edgeLength - dist;\\nfloat param = (diff * edgeStrength) / mass;\\nax -= direx * param;\\nay -= direy * param;}\\nreturn vec2(ax, ay);}\\nvoid main() {int i = globalInvocationID.x;\\nvec4 currentNode = gWebGPUBuffer0.u_Data[i];\\nvec4 movement = gWebGPUBuffer1.u_AveMovement[0];\\nfloat ax = 0.0;\\nfloat ay = 0.0;\\nif ((i >= VERTEX_COUNT) || (movement.x < gWebGPUUniformParams.u_minMovement)) {gWebGPUBuffer0.u_Data[i] = currentNode;\\nreturn ;}\\nvec4 nodeAttributes1 = gWebGPUBuffer2.u_NodeAttributeArray1[i];\\nvec4 nodeAttributes2 = gWebGPUBuffer3.u_NodeAttributeArray2[i];\\nvec2 repulsive = calcRepulsive(i, currentNode);\\nax += repulsive.x;\\nay += repulsive.y;\\nvec2 attractive = calcAttractive(i, currentNode, nodeAttributes1);\\nax += attractive.x;\\nay += attractive.y;\\nvec2 gravity = calcGravity(i, currentNode, nodeAttributes2);\\nax -= gravity.x;\\nay -= gravity.y;\\nfloat param = gWebGPUUniformParams.u_interval * gWebGPUUniformParams.u_damping;\\nfloat vx = ax * param;\\nfloat vy = ay * param;\\nfloat vlength = sqrt((vx * vx) + (vy * vy)) + 0.0001;\\nif (vlength > gWebGPUUniformParams.u_maxSpeed) {float param2 = gWebGPUUniformParams.u_maxSpeed / vlength;\\nvx = param2 * vx;\\nvy = param2 * vy;}\\nfloat distx = vx * gWebGPUUniformParams.u_interval;\\nfloat disty = vy * gWebGPUUniformParams.u_interval;\\nfloat distLength = sqrt((distx * distx) + (disty * disty));\\nif ((nodeAttributes1.w != 0.0) && (nodeAttributes2.w != 0.0)) {gWebGPUBuffer0.u_Data[i] = vec4(nodeAttributes1.w, nodeAttributes2.w, currentNode.z, 0.0);}else {gWebGPUBuffer0.u_Data[i] = vec4(currentNode.x + distx, currentNode.y + disty, currentNode.z, distLength);}}\\n\",\"GLSL100\":\"\\n\\nfloat epsilon = 0.00001;\\nvec2 addrTranslation_1Dto2D(float address1D, vec2 texSize) {\\n  vec2 conv_const = vec2(1.0 / texSize.x, 1.0 / (texSize.x * texSize.y));\\n  vec2 normAddr2D = float(address1D) * conv_const;\\n  return vec2(fract(normAddr2D.x + epsilon), normAddr2D.y);\\n}\\n\\nvoid barrier() {}\\n  \\n\\nuniform vec2 u_OutputTextureSize;\\nuniform int u_OutputTexelCount;\\nvarying vec2 v_TexCoord;\\n\\nbool gWebGPUDebug = false;\\nvec4 gWebGPUDebugOutput = vec4(0.0);\\n\\n#define MAX_EDGE_PER_VERTEX __DefineValuePlaceholder__MAX_EDGE_PER_VERTEX\\n#define VERTEX_COUNT __DefineValuePlaceholder__VERTEX_COUNT\\n#define SHIFT_20 1048576.0\\n\\nuniform sampler2D u_Data;\\nuniform vec2 u_DataSize;\\nvec4 getDatau_Data(vec2 address2D) {\\n  return vec4(texture2D(u_Data, address2D).rgba);\\n}\\nvec4 getDatau_Data(float address1D) {\\n  return getDatau_Data(addrTranslation_1Dto2D(address1D, u_DataSize));\\n}\\nvec4 getDatau_Data(int address1D) {\\n  return getDatau_Data(float(address1D));\\n}\\nuniform float u_damping;\\nuniform float u_maxSpeed;\\nuniform float u_minMovement;\\nuniform sampler2D u_AveMovement;\\nuniform vec2 u_AveMovementSize;\\nvec4 getDatau_AveMovement(vec2 address2D) {\\n  return vec4(texture2D(u_AveMovement, address2D).rgba);\\n}\\nvec4 getDatau_AveMovement(float address1D) {\\n  return getDatau_AveMovement(addrTranslation_1Dto2D(address1D, u_AveMovementSize));\\n}\\nvec4 getDatau_AveMovement(int address1D) {\\n  return getDatau_AveMovement(float(address1D));\\n}\\nuniform float u_coulombDisScale;\\nuniform float u_factor;\\nuniform sampler2D u_NodeAttributeArray1;\\nuniform vec2 u_NodeAttributeArray1Size;\\nvec4 getDatau_NodeAttributeArray1(vec2 address2D) {\\n  return vec4(texture2D(u_NodeAttributeArray1, address2D).rgba);\\n}\\nvec4 getDatau_NodeAttributeArray1(float address1D) {\\n  return getDatau_NodeAttributeArray1(addrTranslation_1Dto2D(address1D, u_NodeAttributeArray1Size));\\n}\\nvec4 getDatau_NodeAttributeArray1(int address1D) {\\n  return getDatau_NodeAttributeArray1(float(address1D));\\n}\\nuniform sampler2D u_NodeAttributeArray2;\\nuniform vec2 u_NodeAttributeArray2Size;\\nvec4 getDatau_NodeAttributeArray2(vec2 address2D) {\\n  return vec4(texture2D(u_NodeAttributeArray2, address2D).rgba);\\n}\\nvec4 getDatau_NodeAttributeArray2(float address1D) {\\n  return getDatau_NodeAttributeArray2(addrTranslation_1Dto2D(address1D, u_NodeAttributeArray2Size));\\n}\\nvec4 getDatau_NodeAttributeArray2(int address1D) {\\n  return getDatau_NodeAttributeArray2(float(address1D));\\n}\\nuniform float u_interval;\\nivec2 unpack_float(float packedValue) {\\nivec3 workGroupSize = ivec3(1, 1, 1);\\nivec3 numWorkGroups = ivec3(1, 1, 1);     \\nint globalInvocationIndex = int(floor(v_TexCoord.x * u_OutputTextureSize.x))\\n  + int(floor(v_TexCoord.y * u_OutputTextureSize.y)) * int(u_OutputTextureSize.x);\\nint workGroupIDLength = globalInvocationIndex / (workGroupSize.x * workGroupSize.y * workGroupSize.z);\\nivec3 workGroupID = ivec3(workGroupIDLength / numWorkGroups.y / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.y);\\nint localInvocationIDZ = globalInvocationIndex / (workGroupSize.x * workGroupSize.y);\\nint localInvocationIDY = (globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y) / workGroupSize.x;\\nint localInvocationIDX = globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y - localInvocationIDY * workGroupSize.x;\\nivec3 localInvocationID = ivec3(localInvocationIDX, localInvocationIDY, localInvocationIDZ);\\nivec3 globalInvocationID = workGroupID * workGroupSize + localInvocationID;\\nint localInvocationIndex = localInvocationID.z * workGroupSize.x * workGroupSize.y\\n                + localInvocationID.y * workGroupSize.x + localInvocationID.x;\\nint packedIntValue = int(packedValue);\\nint v0 = packedIntValue / int(SHIFT_20);\\nreturn ivec2(v0, packedIntValue - (v0 * int(SHIFT_20)));}\\nvec2 calcRepulsive(int i, vec4 currentNode) {\\nivec3 workGroupSize = ivec3(1, 1, 1);\\nivec3 numWorkGroups = ivec3(1, 1, 1);     \\nint globalInvocationIndex = int(floor(v_TexCoord.x * u_OutputTextureSize.x))\\n  + int(floor(v_TexCoord.y * u_OutputTextureSize.y)) * int(u_OutputTextureSize.x);\\nint workGroupIDLength = globalInvocationIndex / (workGroupSize.x * workGroupSize.y * workGroupSize.z);\\nivec3 workGroupID = ivec3(workGroupIDLength / numWorkGroups.y / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.y);\\nint localInvocationIDZ = globalInvocationIndex / (workGroupSize.x * workGroupSize.y);\\nint localInvocationIDY = (globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y) / workGroupSize.x;\\nint localInvocationIDX = globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y - localInvocationIDY * workGroupSize.x;\\nivec3 localInvocationID = ivec3(localInvocationIDX, localInvocationIDY, localInvocationIDZ);\\nivec3 globalInvocationID = workGroupID * workGroupSize + localInvocationID;\\nint localInvocationIndex = localInvocationID.z * workGroupSize.x * workGroupSize.y\\n                + localInvocationID.y * workGroupSize.x + localInvocationID.x;\\nfloat ax = 0.0;\\nfloat ay = 0.0;\\nfor (int j = 0; j < VERTEX_COUNT; j++) {if (i != j) {vec4 nextNode = getDatau_Data(j);\\nfloat vx = currentNode.x - nextNode.x;\\nfloat vy = currentNode.y - nextNode.y;\\nfloat dist = sqrt((vx * vx) + (vy * vy)) + 0.01;\\nfloat n_dist = (dist + 0.1) * u_coulombDisScale;\\nfloat direx = vx / dist;\\nfloat direy = vy / dist;\\nvec4 attributesi = getDatau_NodeAttributeArray1(i);\\nvec4 attributesj = getDatau_NodeAttributeArray1(j);\\nfloat massi = attributesi.x;\\nfloat nodeStrengthi = attributesi.z;\\nfloat nodeStrengthj = attributesj.z;\\nfloat nodeStrength = (nodeStrengthi + nodeStrengthj) / 2.0;\\nfloat param = (nodeStrength * u_factor) / (n_dist * n_dist);\\nax += direx * param;\\nay += direy * param;}}\\nreturn vec2(ax, ay);}\\nvec2 calcGravity(int i, vec4 currentNode, vec4 attributes2) {\\nivec3 workGroupSize = ivec3(1, 1, 1);\\nivec3 numWorkGroups = ivec3(1, 1, 1);     \\nint globalInvocationIndex = int(floor(v_TexCoord.x * u_OutputTextureSize.x))\\n  + int(floor(v_TexCoord.y * u_OutputTextureSize.y)) * int(u_OutputTextureSize.x);\\nint workGroupIDLength = globalInvocationIndex / (workGroupSize.x * workGroupSize.y * workGroupSize.z);\\nivec3 workGroupID = ivec3(workGroupIDLength / numWorkGroups.y / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.y);\\nint localInvocationIDZ = globalInvocationIndex / (workGroupSize.x * workGroupSize.y);\\nint localInvocationIDY = (globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y) / workGroupSize.x;\\nint localInvocationIDX = globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y - localInvocationIDY * workGroupSize.x;\\nivec3 localInvocationID = ivec3(localInvocationIDX, localInvocationIDY, localInvocationIDZ);\\nivec3 globalInvocationID = workGroupID * workGroupSize + localInvocationID;\\nint localInvocationIndex = localInvocationID.z * workGroupSize.x * workGroupSize.y\\n                + localInvocationID.y * workGroupSize.x + localInvocationID.x;\\nfloat vx = currentNode.x - attributes2.x;\\nfloat vy = currentNode.y - attributes2.y;\\nfloat ax = vx * attributes2.z;\\nfloat ay = vy * attributes2.z;\\nreturn vec2(ax, ay);}\\nvec2 calcAttractive(int i, vec4 currentNode, vec4 attributes1) {\\nivec3 workGroupSize = ivec3(1, 1, 1);\\nivec3 numWorkGroups = ivec3(1, 1, 1);     \\nint globalInvocationIndex = int(floor(v_TexCoord.x * u_OutputTextureSize.x))\\n  + int(floor(v_TexCoord.y * u_OutputTextureSize.y)) * int(u_OutputTextureSize.x);\\nint workGroupIDLength = globalInvocationIndex / (workGroupSize.x * workGroupSize.y * workGroupSize.z);\\nivec3 workGroupID = ivec3(workGroupIDLength / numWorkGroups.y / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.y);\\nint localInvocationIDZ = globalInvocationIndex / (workGroupSize.x * workGroupSize.y);\\nint localInvocationIDY = (globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y) / workGroupSize.x;\\nint localInvocationIDX = globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y - localInvocationIDY * workGroupSize.x;\\nivec3 localInvocationID = ivec3(localInvocationIDX, localInvocationIDY, localInvocationIDZ);\\nivec3 globalInvocationID = workGroupID * workGroupSize + localInvocationID;\\nint localInvocationIndex = localInvocationID.z * workGroupSize.x * workGroupSize.y\\n                + localInvocationID.y * workGroupSize.x + localInvocationID.x;\\nfloat mass = attributes1.x;\\nfloat ax = 0.0;\\nfloat ay = 0.0;\\nivec2 compressed = unpack_float(currentNode.z);\\nint length = compressed.x;\\nint arr_offset = compressed.y;\\nvec4 node_buffer;\\nfor (int p = 0; p < MAX_EDGE_PER_VERTEX; p++) {if (p >= length) {break;}\\nint arr_idx = arr_offset + (4 * p);\\nint buf_offset = arr_idx - ((arr_idx / 4) * 4);\\nif ((p == 0) || (buf_offset == 0)) {node_buffer = getDatau_Data(int(arr_idx / 4));}\\nfloat float_j = node_buffer.x;\\nvec4 nextNode = getDatau_Data(int(float_j));\\nfloat vx = nextNode.x - currentNode.x;\\nfloat vy = nextNode.y - currentNode.y;\\nfloat dist = sqrt((vx * vx) + (vy * vy)) + 0.01;\\nfloat direx = vx / dist;\\nfloat direy = vy / dist;\\nfloat edgeLength = node_buffer.y;\\nfloat edgeStrength = node_buffer.z;\\nfloat diff = edgeLength - dist;\\nfloat param = (diff * edgeStrength) / mass;\\nax -= direx * param;\\nay -= direy * param;}\\nreturn vec2(ax, ay);}\\nvoid main() {\\nivec3 workGroupSize = ivec3(1, 1, 1);\\nivec3 numWorkGroups = ivec3(1, 1, 1);     \\nint globalInvocationIndex = int(floor(v_TexCoord.x * u_OutputTextureSize.x))\\n  + int(floor(v_TexCoord.y * u_OutputTextureSize.y)) * int(u_OutputTextureSize.x);\\nint workGroupIDLength = globalInvocationIndex / (workGroupSize.x * workGroupSize.y * workGroupSize.z);\\nivec3 workGroupID = ivec3(workGroupIDLength / numWorkGroups.y / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.y);\\nint localInvocationIDZ = globalInvocationIndex / (workGroupSize.x * workGroupSize.y);\\nint localInvocationIDY = (globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y) / workGroupSize.x;\\nint localInvocationIDX = globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y - localInvocationIDY * workGroupSize.x;\\nivec3 localInvocationID = ivec3(localInvocationIDX, localInvocationIDY, localInvocationIDZ);\\nivec3 globalInvocationID = workGroupID * workGroupSize + localInvocationID;\\nint localInvocationIndex = localInvocationID.z * workGroupSize.x * workGroupSize.y\\n                + localInvocationID.y * workGroupSize.x + localInvocationID.x;\\nint i = globalInvocationID.x;\\nvec4 currentNode = getDatau_Data(i);\\nvec4 movement = getDatau_AveMovement(0.0);\\nfloat ax = 0.0;\\nfloat ay = 0.0;\\nif ((i >= VERTEX_COUNT) || (movement.x < u_minMovement)) {gl_FragColor = vec4(currentNode);\\nreturn ;}\\nvec4 nodeAttributes1 = getDatau_NodeAttributeArray1(i);\\nvec4 nodeAttributes2 = getDatau_NodeAttributeArray2(i);\\nvec2 repulsive = calcRepulsive(i, currentNode);\\nax += repulsive.x;\\nay += repulsive.y;\\nvec2 attractive = calcAttractive(i, currentNode, nodeAttributes1);\\nax += attractive.x;\\nay += attractive.y;\\nvec2 gravity = calcGravity(i, currentNode, nodeAttributes2);\\nax -= gravity.x;\\nay -= gravity.y;\\nfloat param = u_interval * u_damping;\\nfloat vx = ax * param;\\nfloat vy = ay * param;\\nfloat vlength = sqrt((vx * vx) + (vy * vy)) + 0.0001;\\nif (vlength > u_maxSpeed) {float param2 = u_maxSpeed / vlength;\\nvx = param2 * vx;\\nvy = param2 * vy;}\\nfloat distx = vx * u_interval;\\nfloat disty = vy * u_interval;\\nfloat distLength = sqrt((distx * distx) + (disty * disty));\\nif ((nodeAttributes1.w != 0.0) && (nodeAttributes2.w != 0.0)) {gl_FragColor = vec4(vec4(nodeAttributes1.w, nodeAttributes2.w, currentNode.z, 0.0));}else {gl_FragColor = vec4(vec4(currentNode.x + distx, currentNode.y + disty, currentNode.z, distLength));}if (gWebGPUDebug) {\\n  gl_FragColor = gWebGPUDebugOutput;\\n}}\\n\"},\"context\":{\"name\":\"\",\"dispatch\":[1,1,1],\"threadGroupSize\":[1,1,1],\"maxIteration\":1,\"defines\":[{\"name\":\"MAX_EDGE_PER_VERTEX\",\"type\":\"Float\",\"runtime\":true},{\"name\":\"VERTEX_COUNT\",\"type\":\"Float\",\"runtime\":true},{\"name\":\"SHIFT_20\",\"type\":\"Float\",\"value\":1048576,\"runtime\":false}],\"uniforms\":[{\"name\":\"u_Data\",\"type\":\"vec4<f32>[]\",\"storageClass\":\"StorageBuffer\",\"readonly\":false,\"writeonly\":false,\"size\":[1,1]},{\"name\":\"u_damping\",\"type\":\"Float\",\"storageClass\":\"Uniform\",\"readonly\":true,\"writeonly\":false,\"size\":[1,1]},{\"name\":\"u_maxSpeed\",\"type\":\"Float\",\"storageClass\":\"Uniform\",\"readonly\":true,\"writeonly\":false,\"size\":[1,1]},{\"name\":\"u_minMovement\",\"type\":\"Float\",\"storageClass\":\"Uniform\",\"readonly\":true,\"writeonly\":false,\"size\":[1,1]},{\"name\":\"u_AveMovement\",\"type\":\"vec4<f32>[]\",\"storageClass\":\"StorageBuffer\",\"readonly\":true,\"writeonly\":false,\"size\":[1,1]},{\"name\":\"u_coulombDisScale\",\"type\":\"Float\",\"storageClass\":\"Uniform\",\"readonly\":true,\"writeonly\":false,\"size\":[1,1]},{\"name\":\"u_factor\",\"type\":\"Float\",\"storageClass\":\"Uniform\",\"readonly\":true,\"writeonly\":false,\"size\":[1,1]},{\"name\":\"u_NodeAttributeArray1\",\"type\":\"vec4<f32>[]\",\"storageClass\":\"StorageBuffer\",\"readonly\":true,\"writeonly\":false,\"size\":[1,1]},{\"name\":\"u_NodeAttributeArray2\",\"type\":\"vec4<f32>[]\",\"storageClass\":\"StorageBuffer\",\"readonly\":true,\"writeonly\":false,\"size\":[1,1]},{\"name\":\"u_interval\",\"type\":\"Float\",\"storageClass\":\"Uniform\",\"readonly\":true,\"writeonly\":false,\"size\":[1,1]}],\"globalDeclarations\":[],\"output\":{\"name\":\"u_Data\",\"size\":[1,1],\"length\":1},\"needPingpong\":true}}";
exports.aveMovementCode = "\nconst VERTEX_COUNT;\n@numthreads(1, 1, 1)\nclass CalcAveMovement {\n  @in\n  u_Data: vec4[];\n  @in\n  u_iter: float;\n  @in @out\n  u_AveMovement: vec4[];\n  @main\n  compute() {\n    let movement = 0;\n    for (let j: int = 0; j < VERTEX_COUNT; j++) {\n      const vertex = this.u_Data[j];\n      movement += vertex[3];\n    }\n    movement = movement / float(VERTEX_COUNT);\n    this.u_AveMovement[0] = [movement, 0, 0, 0];\n  }\n}\n";
exports.aveMovementBundle = "{\"shaders\":{\"WGSL\":\"import \\\"GLSL.std.450\\\" as std;\\n\\n\\n# var gWebGPUDebug : bool = false;\\n# var gWebGPUDebugOutput : vec4<f32> = vec4<f32>(0.0);\\n\\n[[builtin global_invocation_id]] var<in> globalInvocationID : vec3<u32>;\\n# [[builtin work_group_size]] var<in> workGroupSize : vec3<u32>;\\n# [[builtin work_group_id]] var<in> workGroupID : vec3<u32>;\\n[[builtin local_invocation_id]] var<in> localInvocationID : vec3<u32>;\\n# [[builtin num_work_groups]] var<in> numWorkGroups : vec3<u32>;\\n[[builtin local_invocation_idx]] var<in> localInvocationIndex : u32;\\n\\ntype GWebGPUParams = [[block]] struct {\\n  [[offset 0]] u_iter : f32;\\n};\\n[[binding 0, set 0]] var<uniform> gWebGPUUniformParams : GWebGPUParams;\\ntype GWebGPUBuffer0 = [[block]] struct {\\n  [[offset 0]] u_Data : [[stride 16]] array<vec4<f32>>;\\n};\\n[[binding 1, set 0]] var<storage_buffer> gWebGPUBuffer0 : GWebGPUBuffer0;\\ntype GWebGPUBuffer1 = [[block]] struct {\\n  [[offset 0]] u_AveMovement : [[stride 16]] array<vec4<f32>>;\\n};\\n[[binding 2, set 0]] var<storage_buffer> gWebGPUBuffer1 : GWebGPUBuffer1;\\n\\n\\n\\n\\n\\n\\n\\n\\nfn main() -> void {var movement : f32 = 0.0;\\nfor (var j : i32 = 0; j < __DefineValuePlaceholder__VERTEX_COUNT; j = j + 1) {var vertex : vec4<f32> = gWebGPUBuffer0.u_Data[j];\\nmovement = movement + vertex.w;}\\nmovement = movement / f32(__DefineValuePlaceholder__VERTEX_COUNT);\\ngWebGPUBuffer1.u_AveMovement[0] = vec4<f32>(movement, 0.0, 0.0, 0.0);\\nreturn;}\\n\\nentry_point compute as \\\"main\\\" = main;\\n\",\"GLSL450\":\"\\n\\n\\nbool gWebGPUDebug = false;\\nvec4 gWebGPUDebugOutput = vec4(0.0);\\n\\nivec3 globalInvocationID = ivec3(gl_GlobalInvocationID);\\nivec3 workGroupSize = ivec3(1,1,1);\\nivec3 workGroupID = ivec3(gl_WorkGroupID);\\nivec3 localInvocationID = ivec3(gl_LocalInvocationID);\\nivec3 numWorkGroups = ivec3(gl_NumWorkGroups);\\nint localInvocationIndex = int(gl_LocalInvocationIndex);\\n\\nlayout(std140, set = 0, binding = 0) uniform GWebGPUParams {\\n  float u_iter;\\n} gWebGPUUniformParams;\\nlayout(std430, set = 0, binding = 1) buffer readonly  GWebGPUBuffer0 {\\n  vec4 u_Data[];\\n} gWebGPUBuffer0;\\n\\nlayout(std430, set = 0, binding = 2) buffer   GWebGPUBuffer1 {\\n  vec4 u_AveMovement[];\\n} gWebGPUBuffer1;\\n\\n\\n\\n#define VERTEX_COUNT __DefineValuePlaceholder__VERTEX_COUNT\\nlayout (\\n  local_size_x = 1,\\n  local_size_y = 1,\\n  local_size_z = 1\\n) in;\\n\\n\\n\\nvoid main() {float movement = 0.0;\\nfor (int j = 0; j < VERTEX_COUNT; j++) {vec4 vertex = gWebGPUBuffer0.u_Data[j];\\nmovement += vertex.w;}\\nmovement = movement / float(VERTEX_COUNT);\\ngWebGPUBuffer1.u_AveMovement[0] = vec4(movement, 0.0, 0.0, 0.0);}\\n\",\"GLSL100\":\"\\n\\nfloat epsilon = 0.00001;\\nvec2 addrTranslation_1Dto2D(float address1D, vec2 texSize) {\\n  vec2 conv_const = vec2(1.0 / texSize.x, 1.0 / (texSize.x * texSize.y));\\n  vec2 normAddr2D = float(address1D) * conv_const;\\n  return vec2(fract(normAddr2D.x + epsilon), normAddr2D.y);\\n}\\n\\nvoid barrier() {}\\n  \\n\\nuniform vec2 u_OutputTextureSize;\\nuniform int u_OutputTexelCount;\\nvarying vec2 v_TexCoord;\\n\\nbool gWebGPUDebug = false;\\nvec4 gWebGPUDebugOutput = vec4(0.0);\\n\\n#define VERTEX_COUNT __DefineValuePlaceholder__VERTEX_COUNT\\n\\nuniform sampler2D u_Data;\\nuniform vec2 u_DataSize;\\nvec4 getDatau_Data(vec2 address2D) {\\n  return vec4(texture2D(u_Data, address2D).rgba);\\n}\\nvec4 getDatau_Data(float address1D) {\\n  return getDatau_Data(addrTranslation_1Dto2D(address1D, u_DataSize));\\n}\\nvec4 getDatau_Data(int address1D) {\\n  return getDatau_Data(float(address1D));\\n}\\nuniform float u_iter;\\nuniform sampler2D u_AveMovement;\\nuniform vec2 u_AveMovementSize;\\nvec4 getDatau_AveMovement(vec2 address2D) {\\n  return vec4(texture2D(u_AveMovement, address2D).rgba);\\n}\\nvec4 getDatau_AveMovement(float address1D) {\\n  return getDatau_AveMovement(addrTranslation_1Dto2D(address1D, u_AveMovementSize));\\n}\\nvec4 getDatau_AveMovement(int address1D) {\\n  return getDatau_AveMovement(float(address1D));\\n}\\nvoid main() {\\nivec3 workGroupSize = ivec3(1, 1, 1);\\nivec3 numWorkGroups = ivec3(1, 1, 1);     \\nint globalInvocationIndex = int(floor(v_TexCoord.x * u_OutputTextureSize.x))\\n  + int(floor(v_TexCoord.y * u_OutputTextureSize.y)) * int(u_OutputTextureSize.x);\\nint workGroupIDLength = globalInvocationIndex / (workGroupSize.x * workGroupSize.y * workGroupSize.z);\\nivec3 workGroupID = ivec3(workGroupIDLength / numWorkGroups.y / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.y);\\nint localInvocationIDZ = globalInvocationIndex / (workGroupSize.x * workGroupSize.y);\\nint localInvocationIDY = (globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y) / workGroupSize.x;\\nint localInvocationIDX = globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y - localInvocationIDY * workGroupSize.x;\\nivec3 localInvocationID = ivec3(localInvocationIDX, localInvocationIDY, localInvocationIDZ);\\nivec3 globalInvocationID = workGroupID * workGroupSize + localInvocationID;\\nint localInvocationIndex = localInvocationID.z * workGroupSize.x * workGroupSize.y\\n                + localInvocationID.y * workGroupSize.x + localInvocationID.x;\\nfloat movement = 0.0;\\nfor (int j = 0; j < VERTEX_COUNT; j++) {vec4 vertex = getDatau_Data(j);\\nmovement += vertex.w;}\\nmovement = movement / float(VERTEX_COUNT);\\ngl_FragColor = vec4(vec4(movement, 0.0, 0.0, 0.0));if (gWebGPUDebug) {\\n  gl_FragColor = gWebGPUDebugOutput;\\n}}\\n\"},\"context\":{\"name\":\"\",\"dispatch\":[1,1,1],\"threadGroupSize\":[1,1,1],\"maxIteration\":1,\"defines\":[{\"name\":\"VERTEX_COUNT\",\"type\":\"Float\",\"runtime\":true}],\"uniforms\":[{\"name\":\"u_Data\",\"type\":\"vec4<f32>[]\",\"storageClass\":\"StorageBuffer\",\"readonly\":true,\"writeonly\":false,\"size\":[1,1]},{\"name\":\"u_iter\",\"type\":\"Float\",\"storageClass\":\"Uniform\",\"readonly\":true,\"writeonly\":false,\"size\":[1,1]},{\"name\":\"u_AveMovement\",\"type\":\"vec4<f32>[]\",\"storageClass\":\"StorageBuffer\",\"readonly\":false,\"writeonly\":false,\"size\":[1,1]}],\"globalDeclarations\":[],\"output\":{\"name\":\"u_AveMovement\",\"size\":[1,1],\"length\":1},\"needPingpong\":true}}";
//# sourceMappingURL=gForceShader.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356589, function(require, module, exports) {

/**
 * @fileOverview Combo force layout
 * @author shiwu.wyy@antfin.com
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComboForceLayout = void 0;
var base_1 = require("./base");
var util_1 = require("../util");
/**
 * force layout for graph with combos
 */
var ComboForceLayout = /** @class */ (function (_super) {
    __extends(ComboForceLayout, _super);
    function ComboForceLayout(options) {
        var _this = _super.call(this) || this;
        /** 布局中心 */
        _this.center = [0, 0];
        /** 停止迭代的最大迭代数 */
        _this.maxIteration = 100;
        /** 重力大小，影响图的紧凑程度 */
        _this.gravity = 10;
        /** 群组中心力大小 */
        _this.comboGravity = 10;
        /** 默认边长度 */
        _this.linkDistance = 10;
        /** 每次迭代位移的衰减相关参数 */
        _this.alpha = 1;
        _this.alphaMin = 0.001;
        _this.alphaDecay = 1 - Math.pow(_this.alphaMin, (1 / 300));
        _this.alphaTarget = 0;
        /** 节点运动速度衰减参数 */
        _this.velocityDecay = 0.6;
        /** 边引力大小 */
        _this.edgeStrength = 0.6;
        /** 节点引力大小 */
        _this.nodeStrength = 30;
        /** 是否开启防止重叠 */
        _this.preventOverlap = false;
        /** 是否开启节点之间的防止重叠 */
        _this.preventNodeOverlap = false;
        /** 是否开启 Combo 之间的防止重叠 */
        _this.preventComboOverlap = false;
        /** 防止重叠的碰撞力大小 */
        _this.collideStrength = undefined;
        /** 防止重叠的碰撞力大小 */
        _this.nodeCollideStrength = 0.5;
        /** 防止重叠的碰撞力大小 */
        _this.comboCollideStrength = 0.5;
        /** Combo 最小间距，防止重叠时的间隙 */
        _this.comboSpacing = 20;
        /** Combo 内部的 padding */
        _this.comboPadding = 10;
        /** 优化计算斥力的速度，两节点间距超过 optimizeRangeFactor * width 则不再计算斥力和重叠斥力 */
        _this.optimizeRangeFactor = 1;
        /** 每次迭代的回调函数 */
        _this.onTick = function () { };
        /** 迭代结束的回调函数 */
        _this.onLayoutEnd = function () { };
        /** 根据边两端节点层级差距的调整引力系数的因子，取值范围 [0, 1]。层级差距越大，引力越小 */
        _this.depthAttractiveForceScale = 1;
        /** 根据边两端节点层级差距的调整斥力系数的因子，取值范围 [1, Infinity]。层级差距越大，斥力越大 */
        _this.depthRepulsiveForceScale = 2;
        /** 内部计算参数 */
        _this.nodes = [];
        _this.edges = [];
        _this.combos = [];
        _this.comboTrees = [];
        _this.width = 300;
        _this.height = 300;
        _this.bias = [];
        _this.nodeMap = {};
        _this.oriComboMap = {};
        _this.indexMap = {};
        _this.comboMap = {};
        _this.previousLayouted = false;
        _this.updateCfg(options);
        return _this;
    }
    ComboForceLayout.prototype.getDefaultCfg = function () {
        return {
            maxIteration: 100,
            center: [0, 0],
            gravity: 10,
            speed: 1,
            comboGravity: 30,
            preventOverlap: false,
            preventComboOverlap: true,
            preventNodeOverlap: true,
            nodeSpacing: undefined,
            collideStrength: undefined,
            nodeCollideStrength: 0.5,
            comboCollideStrength: 0.5,
            comboSpacing: 20,
            comboPadding: 10,
            edgeStrength: 0.6,
            nodeStrength: 30,
            linkDistance: 10
        };
    };
    /**
     * 执行布局
     */
    ComboForceLayout.prototype.execute = function () {
        var self = this;
        var nodes = self.nodes;
        var center = self.center;
        self.comboTree = {
            id: "comboTreeRoot",
            depth: -1,
            children: self.comboTrees
        };
        if (!nodes || nodes.length === 0) {
            if (self.onLayoutEnd)
                self.onLayoutEnd();
            return;
        }
        if (nodes.length === 1) {
            nodes[0].x = center[0];
            nodes[0].y = center[1];
            if (self.onLayoutEnd)
                self.onLayoutEnd();
            return;
        }
        self.initVals();
        // layout
        self.run();
        if (self.onLayoutEnd)
            self.onLayoutEnd();
    };
    ComboForceLayout.prototype.run = function () {
        var self = this;
        var nodes = self.nodes;
        var maxIteration = self.previousLayouted
            ? self.maxIteration / 5
            : self.maxIteration;
        if (!self.width && typeof window !== "undefined") {
            self.width = window.innerWidth;
        }
        if (!self.height && typeof window !== "undefined") {
            self.height = window.innerHeight;
        }
        var center = self.center;
        var velocityDecay = self.velocityDecay;
        // init the positions to make the nodes with same combo gather around the combo
        var comboMap = self.comboMap;
        if (!self.previousLayouted)
            self.initPos(comboMap);
        var _loop_1 = function (i) {
            var displacements = [];
            nodes.forEach(function (_, j) {
                displacements[j] = { x: 0, y: 0 };
            });
            self.applyCalculate(displacements);
            // gravity for combos
            self.applyComboCenterForce(displacements);
            // move
            nodes.forEach(function (n, j) {
                if (!util_1.isNumber(n.x) || !util_1.isNumber(n.y))
                    return;
                n.x += displacements[j].x * velocityDecay;
                n.y += displacements[j].y * velocityDecay;
            });
            self.alpha += (self.alphaTarget - self.alpha) * self.alphaDecay;
            self.onTick();
        };
        // iterate
        for (var i = 0; i < maxIteration; i++) {
            _loop_1(i);
        }
        // move to center
        var meanCenter = [0, 0];
        nodes.forEach(function (n) {
            if (!util_1.isNumber(n.x) || !util_1.isNumber(n.y))
                return;
            meanCenter[0] += n.x;
            meanCenter[1] += n.y;
        });
        meanCenter[0] /= nodes.length;
        meanCenter[1] /= nodes.length;
        var centerOffset = [center[0] - meanCenter[0], center[1] - meanCenter[1]];
        nodes.forEach(function (n, j) {
            if (!util_1.isNumber(n.x) || !util_1.isNumber(n.y))
                return;
            n.x += centerOffset[0];
            n.y += centerOffset[1];
        });
        // arrange the empty combo
        self.combos.forEach(function (combo) {
            var mapped = comboMap[combo.id];
            if (mapped && mapped.empty) {
                combo.x = mapped.cx || combo.x;
                combo.y = mapped.cy || combo.y;
            }
        });
        self.previousLayouted = true;
    };
    ComboForceLayout.prototype.initVals = function () {
        var self = this;
        var edges = self.edges;
        var nodes = self.nodes;
        var combos = self.combos;
        var count = {};
        var nodeMap = {};
        var indexMap = {};
        nodes.forEach(function (node, i) {
            nodeMap[node.id] = node;
            indexMap[node.id] = i;
        });
        self.nodeMap = nodeMap;
        self.indexMap = indexMap;
        var oriComboMap = {};
        combos.forEach(function (combo) {
            oriComboMap[combo.id] = combo;
        });
        self.oriComboMap = oriComboMap;
        self.comboMap = self.getComboMap();
        var preventOverlap = self.preventOverlap;
        self.preventComboOverlap = self.preventComboOverlap || preventOverlap;
        self.preventNodeOverlap = self.preventNodeOverlap || preventOverlap;
        var collideStrength = self.collideStrength;
        if (collideStrength) {
            self.comboCollideStrength = collideStrength;
            self.nodeCollideStrength = collideStrength;
        }
        self.comboCollideStrength = self.comboCollideStrength
            ? self.comboCollideStrength
            : 0;
        self.nodeCollideStrength = self.nodeCollideStrength
            ? self.nodeCollideStrength
            : 0;
        // get edge bias
        for (var i = 0; i < edges.length; ++i) {
            if (count[edges[i].source])
                count[edges[i].source]++;
            else
                count[edges[i].source] = 1;
            if (count[edges[i].target])
                count[edges[i].target]++;
            else
                count[edges[i].target] = 1;
        }
        var bias = [];
        for (var i = 0; i < edges.length; ++i) {
            bias[i] =
                count[edges[i].source] /
                    (count[edges[i].source] + count[edges[i].target]);
        }
        this.bias = bias;
        var nodeSize = self.nodeSize;
        var nodeSpacing = self.nodeSpacing;
        var nodeSizeFunc;
        var nodeSpacingFunc;
        // nodeSpacing to function
        if (util_1.isNumber(nodeSpacing)) {
            nodeSpacingFunc = function () { return nodeSpacing; };
        }
        else if (util_1.isFunction(nodeSpacing)) {
            nodeSpacingFunc = nodeSpacing;
        }
        else {
            nodeSpacingFunc = function () { return 0; };
        }
        this.nodeSpacing = nodeSpacingFunc;
        // nodeSize to function
        if (!nodeSize) {
            nodeSizeFunc = function (d) {
                if (d.size) {
                    if (util_1.isArray(d.size)) {
                        var res = d.size[0] > d.size[1] ? d.size[0] : d.size[1];
                        return res / 2;
                    }
                    return d.size / 2;
                }
                return 10;
            };
        }
        else if (util_1.isFunction(nodeSize)) {
            nodeSizeFunc = function (d) {
                return nodeSize(d);
            };
        }
        else if (util_1.isArray(nodeSize)) {
            var larger = nodeSize[0] > nodeSize[1] ? nodeSize[0] : nodeSize[1];
            var radius_1 = larger / 2;
            nodeSizeFunc = function (d) { return radius_1; };
        }
        else {
            // number type
            var radius_2 = nodeSize / 2;
            nodeSizeFunc = function (d) { return radius_2; };
        }
        this.nodeSize = nodeSizeFunc;
        // comboSpacing to function
        var comboSpacing = self.comboSpacing;
        var comboSpacingFunc;
        if (util_1.isNumber(comboSpacing)) {
            comboSpacingFunc = function () { return comboSpacing; };
        }
        else if (util_1.isFunction(comboSpacing)) {
            comboSpacingFunc = comboSpacing;
        }
        else {
            // null type
            comboSpacingFunc = function () { return 0; };
        }
        this.comboSpacing = comboSpacingFunc;
        // comboPadding to function
        var comboPadding = self.comboPadding;
        var comboPaddingFunc;
        if (util_1.isNumber(comboPadding)) {
            comboPaddingFunc = function () { return comboPadding; };
        }
        else if (util_1.isArray(comboPadding)) {
            comboPaddingFunc = function () { return Math.max.apply(null, comboPadding); };
        }
        else if (util_1.isFunction(comboPadding)) {
            comboPaddingFunc = comboPadding;
        }
        else {
            // null type
            comboPaddingFunc = function () { return 0; };
        }
        this.comboPadding = comboPaddingFunc;
        // linkDistance to function
        var linkDistance = this.linkDistance;
        var linkDistanceFunc;
        if (!linkDistance) {
            linkDistance = 10;
        }
        if (util_1.isNumber(linkDistance)) {
            linkDistanceFunc = function (d) {
                return linkDistance;
            };
        }
        else {
            linkDistanceFunc = linkDistance;
        }
        this.linkDistance = linkDistanceFunc;
        // linkStrength to function
        var edgeStrength = this.edgeStrength;
        var edgeStrengthFunc;
        if (!edgeStrength) {
            edgeStrength = 1;
        }
        if (util_1.isNumber(edgeStrength)) {
            edgeStrengthFunc = function (d) {
                return edgeStrength;
            };
        }
        else {
            edgeStrengthFunc = edgeStrength;
        }
        this.edgeStrength = edgeStrengthFunc;
        // nodeStrength to function
        var nodeStrength = this.nodeStrength;
        var nodeStrengthFunc;
        if (!nodeStrength) {
            nodeStrength = 30;
        }
        if (util_1.isNumber(nodeStrength)) {
            nodeStrengthFunc = function (d) {
                return nodeStrength;
            };
        }
        else {
            nodeStrengthFunc = nodeStrength;
        }
        this.nodeStrength = nodeStrengthFunc;
    };
    ComboForceLayout.prototype.initPos = function (comboMap) {
        var self = this;
        var nodes = self.nodes;
        nodes.forEach(function (node, i) {
            var comboId = node.comboId;
            var combo = comboMap[comboId];
            if (comboId && combo) {
                node.x = combo.cx + 100 / (i + 1);
                node.y = combo.cy + 100 / (i + 1);
            }
            else {
                node.x = 100 / (i + 1);
                node.y = 100 / (i + 1);
            }
        });
    };
    ComboForceLayout.prototype.getComboMap = function () {
        var self = this;
        var nodeMap = self.nodeMap;
        var indexMap = self.indexMap;
        var comboTrees = self.comboTrees;
        var oriComboMap = self.oriComboMap;
        var comboMap = {};
        (comboTrees || []).forEach(function (ctree) {
            var treeChildren = [];
            util_1.traverseTreeUp(ctree, function (treeNode) {
                if (treeNode.itemType === "node")
                    return true; // skip it
                if (!oriComboMap[treeNode.id])
                    return true; // means it is hidden, skip it
                if (comboMap[treeNode.id] === undefined) {
                    var combo = {
                        id: treeNode.id,
                        name: treeNode.id,
                        cx: 0,
                        cy: 0,
                        count: 0,
                        depth: self.oriComboMap[treeNode.id].depth,
                        children: []
                    };
                    comboMap[treeNode.id] = combo;
                }
                var children = treeNode.children;
                if (children) {
                    children.forEach(function (child) {
                        if (!comboMap[child.id] && !nodeMap[child.id])
                            return true; // means it is hidden
                        treeChildren.push(child);
                    });
                }
                var c = comboMap[treeNode.id];
                c.cx = 0;
                c.cy = 0;
                // In order to layout the empty combo, add a virtual node to it
                if (treeChildren.length === 0) {
                    c.empty = true;
                    var oriCombo = oriComboMap[treeNode.id];
                    var idx = Object.keys(nodeMap).length;
                    var virtualNodeId = treeNode.id + "-visual-child-" + idx;
                    var vnode = {
                        id: virtualNodeId,
                        x: oriCombo.x,
                        y: oriCombo.y,
                        depth: c.depth + 1,
                        itemType: "node"
                    };
                    self.nodes.push(vnode);
                    nodeMap[virtualNodeId] = vnode;
                    indexMap[virtualNodeId] = idx;
                    c.cx = oriCombo.x;
                    c.cy = oriCombo.y;
                    treeChildren.push(vnode);
                }
                treeChildren.forEach(function (child) {
                    c.count++;
                    if (child.itemType !== "node") {
                        var childCombo = comboMap[child.id];
                        if (util_1.isNumber(childCombo.cx))
                            c.cx += childCombo.cx;
                        if (util_1.isNumber(childCombo.cy))
                            c.cy += childCombo.cy;
                        return;
                    }
                    var node = nodeMap[child.id];
                    // means the node is hidden, skip it
                    if (!node)
                        return;
                    if (util_1.isNumber(node.x)) {
                        c.cx += node.x;
                    }
                    if (util_1.isNumber(node.y)) {
                        c.cy += node.y;
                    }
                });
                c.cx /= c.count;
                c.cy /= c.count;
                c.children = treeChildren;
                return true;
            });
        });
        return comboMap;
    };
    ComboForceLayout.prototype.applyComboCenterForce = function (displacements) {
        var self = this;
        var gravity = self.gravity;
        var comboGravity = self.comboGravity || gravity;
        var alpha = this.alpha;
        var comboTrees = self.comboTrees;
        var indexMap = self.indexMap;
        var nodeMap = self.nodeMap;
        var comboMap = self.comboMap;
        (comboTrees || []).forEach(function (ctree) {
            util_1.traverseTreeUp(ctree, function (treeNode) {
                if (treeNode.itemType === "node")
                    return true; // skip it
                var combo = comboMap[treeNode.id];
                // means the combo is hidden, skip it
                if (!combo)
                    return true;
                var c = comboMap[treeNode.id];
                // higher depth the combo, larger the gravity
                var gravityScale = ((c.depth + 1) / 10) * 0.5;
                // apply combo center force for all the descend nodes in this combo
                // and update the center position and count for this combo
                var comboX = c.cx;
                var comboY = c.cy;
                c.cx = 0;
                c.cy = 0;
                c.children.forEach(function (child) {
                    if (child.itemType !== "node") {
                        var childCombo = comboMap[child.id];
                        if (childCombo && util_1.isNumber(childCombo.cx))
                            c.cx += childCombo.cx;
                        if (childCombo && util_1.isNumber(childCombo.cy))
                            c.cy += childCombo.cy;
                        return;
                    }
                    var node = nodeMap[child.id];
                    var vecX = node.x - comboX || 0.005;
                    var vecY = node.y - comboY || 0.005;
                    var l = Math.sqrt(vecX * vecX + vecY * vecY);
                    var childIdx = indexMap[node.id];
                    var params = ((comboGravity * alpha) / l) * gravityScale;
                    displacements[childIdx].x -= vecX * params;
                    displacements[childIdx].y -= vecY * params;
                    if (util_1.isNumber(node.x))
                        c.cx += node.x;
                    if (util_1.isNumber(node.y))
                        c.cy += node.y;
                });
                c.cx /= c.count;
                c.cy /= c.count;
                return true;
            });
        });
    };
    ComboForceLayout.prototype.applyCalculate = function (displacements) {
        var self = this;
        var comboMap = self.comboMap;
        var nodes = self.nodes;
        // store the vx, vy, and distance to reduce dulplicate calculation
        var vecMap = {};
        nodes.forEach(function (v, i) {
            nodes.forEach(function (u, j) {
                if (i < j)
                    return;
                var vx = v.x - u.x || 0.005;
                var vy = v.y - u.y || 0.005;
                var vl2 = vx * vx + vy * vy;
                var vl = Math.sqrt(vl2);
                if (vl2 < 1)
                    vl2 = vl;
                vecMap[v.id + "-" + u.id] = { vx: vx, vy: vy, vl2: vl2, vl: vl };
                vecMap[u.id + "-" + v.id] = { vl2: vl2, vl: vl, vx: -vx, vy: -vy };
            });
        });
        // get the sizes of the combos
        self.updateComboSizes(comboMap);
        self.calRepulsive(displacements, vecMap);
        self.calAttractive(displacements, vecMap);
        var preventComboOverlap = self.preventComboOverlap;
        if (preventComboOverlap)
            self.comboNonOverlapping(displacements, comboMap);
    };
    /**
     * Update the sizes of the combos according to their children
     * Used for combos nonoverlap, but not re-render the combo shapes
     */
    ComboForceLayout.prototype.updateComboSizes = function (comboMap) {
        var self = this;
        var comboTrees = self.comboTrees;
        var nodeMap = self.nodeMap;
        var nodeSize = self.nodeSize;
        var comboSpacing = self.comboSpacing;
        var comboPadding = self.comboPadding;
        (comboTrees || []).forEach(function (ctree) {
            var treeChildren = [];
            util_1.traverseTreeUp(ctree, function (treeNode) {
                if (treeNode.itemType === "node")
                    return true; // skip it
                var c = comboMap[treeNode.id];
                // means the combo is hidden, skip it
                if (!c)
                    return false;
                var children = treeNode.children;
                if (children) {
                    children.forEach(function (child) {
                        // means the combo is hidden.
                        if (!comboMap[child.id] && !nodeMap[child.id])
                            return;
                        treeChildren.push(child);
                    });
                }
                c.minX = Infinity;
                c.minY = Infinity;
                c.maxX = -Infinity;
                c.maxY = -Infinity;
                treeChildren.forEach(function (child) {
                    if (child.itemType !== "node")
                        return true; // skip it
                    var node = nodeMap[child.id];
                    if (!node)
                        return true; // means it is hidden
                    var r = nodeSize(node);
                    var nodeMinX = node.x - r;
                    var nodeMinY = node.y - r;
                    var nodeMaxX = node.x + r;
                    var nodeMaxY = node.y + r;
                    if (c.minX > nodeMinX)
                        c.minX = nodeMinX;
                    if (c.minY > nodeMinY)
                        c.minY = nodeMinY;
                    if (c.maxX < nodeMaxX)
                        c.maxX = nodeMaxX;
                    if (c.maxY < nodeMaxY)
                        c.maxY = nodeMaxY;
                });
                var minSize = self.oriComboMap[treeNode.id].size || 10;
                if (util_1.isArray(minSize))
                    minSize = minSize[0];
                var maxLength = Math.max(c.maxX - c.minX, c.maxY - c.minY, minSize);
                c.r = maxLength / 2 + comboSpacing(c) / 2 + comboPadding(c);
                return true;
            });
        });
    };
    /**
     * prevent the overlappings among combos
     */
    ComboForceLayout.prototype.comboNonOverlapping = function (displacements, comboMap) {
        var self = this;
        var comboTree = self.comboTree;
        var comboCollideStrength = self.comboCollideStrength;
        var indexMap = self.indexMap;
        var nodeMap = self.nodeMap;
        util_1.traverseTreeUp(comboTree, function (treeNode) {
            if (!comboMap[treeNode.id] &&
                !nodeMap[treeNode.id] &&
                treeNode.id !== "comboTreeRoot") {
                return false;
            } // means it is hidden
            var children = treeNode.children;
            // 同个子树下的子 combo 间两两对比
            if (children && children.length > 1) {
                children.forEach(function (v, i) {
                    if (v.itemType === "node")
                        return false; // skip it
                    var cv = comboMap[v.id];
                    if (!cv)
                        return; // means it is hidden, skip it
                    children.forEach(function (u, j) {
                        if (i <= j)
                            return false;
                        if (u.itemType === "node")
                            return false; // skip it
                        var cu = comboMap[u.id];
                        if (!cu)
                            return false; // means it is hidden, skip it
                        var vx = cv.cx - cu.cx || 0.005;
                        var vy = cv.cy - cu.cy || 0.005;
                        var l = vx * vx + vy * vy;
                        var rv = cv.r;
                        var ru = cu.r;
                        var r = rv + ru;
                        var ru2 = ru * ru;
                        var rv2 = rv * rv;
                        // overlapping
                        if (l < r * r) {
                            var vnodes = v.children;
                            if (!vnodes || vnodes.length === 0)
                                return false; // skip it
                            var unodes_1 = u.children;
                            if (!unodes_1 || unodes_1.length === 0)
                                return false; // skip it
                            var sqrtl = Math.sqrt(l);
                            var ll = ((r - sqrtl) / sqrtl) * comboCollideStrength;
                            var xl_1 = vx * ll;
                            var yl_1 = vy * ll;
                            var rratio_1 = ru2 / (rv2 + ru2);
                            var irratio_1 = 1 - rratio_1;
                            // 两兄弟 combo 的子节点上施加斥力
                            vnodes.forEach(function (vn) {
                                if (vn.itemType !== "node")
                                    return false; // skip it
                                if (!nodeMap[vn.id])
                                    return; // means it is hidden, skip it
                                var vindex = indexMap[vn.id];
                                unodes_1.forEach(function (un) {
                                    if (un.itemType !== "node")
                                        return false;
                                    if (!nodeMap[un.id])
                                        return false; // means it is hidden, skip it
                                    var uindex = indexMap[un.id];
                                    displacements[vindex].x += xl_1 * rratio_1;
                                    displacements[vindex].y += yl_1 * rratio_1;
                                    displacements[uindex].x -= xl_1 * irratio_1;
                                    displacements[uindex].y -= yl_1 * irratio_1;
                                });
                            });
                        }
                    });
                });
            }
            return true;
        });
    };
    /**
     * Calculate the repulsive force between each node pair
     * @param displacements The array stores the displacements for nodes
     * @param vecMap The map stores vector between each node pair
     */
    ComboForceLayout.prototype.calRepulsive = function (displacements, vecMap) {
        var self = this;
        var nodes = self.nodes;
        var max = self.width * self.optimizeRangeFactor;
        var nodeStrength = self.nodeStrength;
        var alpha = self.alpha;
        var nodeCollideStrength = self.nodeCollideStrength;
        var preventNodeOverlap = self.preventNodeOverlap;
        var nodeSizeFunc = self.nodeSize;
        var nodeSpacingFunc = self.nodeSpacing;
        var scale = self.depthRepulsiveForceScale;
        var center = self.center;
        nodes.forEach(function (v, i) {
            if (!v.x || !v.y)
                return;
            // center gravity
            if (center) {
                var gravity = self.gravity;
                var vecX = v.x - center[0] || 0.005;
                var vecY = v.y - center[1] || 0.005;
                var l = Math.sqrt(vecX * vecX + vecY * vecY);
                displacements[i].x -= (vecX * gravity * alpha) / l;
                displacements[i].y -= (vecY * gravity * alpha) / l;
            }
            nodes.forEach(function (u, j) {
                if (i === j) {
                    return;
                }
                if (!u.x || !u.y)
                    return;
                var _a = vecMap[v.id + "-" + u.id], vl2 = _a.vl2, vl = _a.vl;
                if (vl > max)
                    return;
                var _b = vecMap[v.id + "-" + u.id], vx = _b.vx, vy = _b.vy;
                var depthDiff = Math.log(Math.abs(u.depth - v.depth) / 10) + 1 || 1;
                depthDiff = depthDiff < 1 ? 1 : depthDiff;
                if (u.comboId !== v.comboId)
                    depthDiff += 1;
                var depthParam = depthDiff ? Math.pow(scale, depthDiff) : 1;
                var params = ((nodeStrength(u) * alpha) / vl2) * depthParam;
                displacements[i].x += vx * params;
                displacements[i].y += vy * params;
                // prevent node overlappings
                if (i < j && preventNodeOverlap) {
                    var ri = nodeSizeFunc(v) + nodeSpacingFunc(v);
                    var rj = nodeSizeFunc(u) + nodeSpacingFunc(u);
                    var r = ri + rj;
                    if (vl2 < r * r) {
                        var ll = ((r - vl) / vl) * nodeCollideStrength;
                        var rj2 = rj * rj;
                        var rratio = rj2 / (ri * ri + rj2);
                        var xl = vx * ll;
                        var yl = vy * ll;
                        displacements[i].x += xl * rratio;
                        displacements[i].y += yl * rratio;
                        rratio = 1 - rratio;
                        displacements[j].x -= xl * rratio;
                        displacements[j].y -= yl * rratio;
                    }
                }
            });
        });
    };
    /**
     * Calculate the attractive force between the node pair with edge
     * @param displacements The array stores the displacements for nodes
     * @param vecMap The map stores vector between each node pair
     */
    ComboForceLayout.prototype.calAttractive = function (displacements, vecMap) {
        var self = this;
        var edges = self.edges;
        var linkDistance = self.linkDistance;
        var alpha = self.alpha;
        var edgeStrength = self.edgeStrength;
        var bias = self.bias;
        var scale = self.depthAttractiveForceScale;
        edges.forEach(function (e, i) {
            if (!e.source || !e.target || e.source === e.target)
                return;
            var uIndex = self.indexMap[e.source];
            var vIndex = self.indexMap[e.target];
            var u = self.nodeMap[e.source];
            var v = self.nodeMap[e.target];
            if (!u || !v)
                return;
            var depthDiff = Math.log(Math.abs(u.depth - v.depth) / 10);
            if (u.comboId === v.comboId) {
                depthDiff = depthDiff / 2;
            }
            var depthParam = depthDiff ? Math.pow(scale, depthDiff) : 1;
            if (u.comboId !== v.comboId && depthParam === 1) {
                depthParam = scale / 2;
            }
            else if (u.comboId === v.comboId) {
                depthParam = 2;
            }
            if (!util_1.isNumber(v.x) || !util_1.isNumber(u.x) || !util_1.isNumber(v.y) || !util_1.isNumber(u.y))
                return;
            var _a = vecMap[e.target + "-" + e.source], vl = _a.vl, vx = _a.vx, vy = _a.vy;
            var l = ((vl - linkDistance(e)) / vl) * alpha * edgeStrength(e) * depthParam;
            var vecX = vx * l;
            var vecY = vy * l;
            var b = bias[i];
            displacements[vIndex].x -= vecX * b;
            displacements[vIndex].y -= vecY * b;
            displacements[uIndex].x += vecX * (1 - b);
            displacements[uIndex].y += vecY * (1 - b);
        });
    };
    ComboForceLayout.prototype.getType = function () {
        return "comboForce";
    };
    return ComboForceLayout;
}(base_1.Base));
exports.ComboForceLayout = ComboForceLayout;
//# sourceMappingURL=comboForce.js.map
}, function(modId) { var map = {"./base":1679470356559,"../util":1679470356560}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356590, function(require, module, exports) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForceAtlas2Layout = void 0;
var base_1 = require("../base");
var util_1 = require("../../util");
var body_1 = __importDefault(require("./body"));
var quad_1 = __importDefault(require("./quad"));
var quadTree_1 = __importDefault(require("./quadTree"));
var ForceAtlas2Layout = /** @class */ (function (_super) {
    __extends(ForceAtlas2Layout, _super);
    function ForceAtlas2Layout(options) {
        var _this = _super.call(this) || this;
        /** 布局中心 */
        _this.center = [0, 0];
        /** 宽度 */
        _this.width = 300;
        /** 高度 */
        _this.height = 300;
        _this.nodes = [];
        _this.edges = [];
        /**
         * the parameter for repulsive forces,
         * it will scale the layout but won't change the layout
         * larger the kr, looser the layout
         * @type  {number}
         */
        _this.kr = 5;
        /**
         * the parameter for gravity forces
         * @type  {number}
         */
        _this.kg = 1;
        /**
         * modes:
         * 'normal' for normal using
         * 'linlog' for compact clusters.
         * @type  {string}
         */
        _this.mode = 'normal';
        /**
         * whether preventing the node overlapping
         * @type  {boolean}
         */
        _this.preventOverlap = false;
        /**
         * whether active the dissuade hub mode
         * true: grant authorities (nodes with a high indegree)
         * a more central position than hubs (nodes with a high outdegree)
         * @type  {boolean}
         */
        _this.dissuadeHubs = false;
        /**
         * whether active the barnes hut optimization on computing repulsive forces
         * @type  {boolean}
         */
        _this.barnesHut = false;
        /**
         * the max iteration number
         * @type  {number}
         */
        _this.maxIteration = 0;
        /**
         * control the global velocity
         * defualt: 0.1(gephi)
         * @type  {number}
         */
        _this.ks = 0.1;
        /**
         * the max global velocity
         * @type  {number}
         */
        _this.ksmax = 10;
        /**
         * the tolerance for the global swinging
         * @type  {number}
         */
        _this.tao = 0.1;
        /**
         * the function of layout complete listener, display the legend and minimap after layout
         * @type  {function}
         */
        _this.onLayoutEnd = function () { };
        /**
         * activate prune or not.
         * prune the leaves during most iterations, layout the leaves in the last 50 iteraitons.
         * if prune === '', it will be activated when the nodes number > 100
         * note that it will reduce the quality of the layout
         * @type  {boolean}
         */
        _this.prune = false;
        _this.updateCfg(options);
        return _this;
    }
    ForceAtlas2Layout.prototype.getDefaultCfg = function () {
        return {};
    };
    // execute the layout
    ForceAtlas2Layout.prototype.execute = function () {
        var self = this;
        var nodes = self.nodes, maxIteration = self.maxIteration, onLayoutEnd = self.onLayoutEnd, prune = self.prune;
        if (!self.width && typeof window !== "undefined") {
            self.width = window.innerWidth;
        }
        if (!self.height && typeof window !== "undefined") {
            self.height = window.innerHeight;
        }
        // the whidth of each nodes
        var sizes = [];
        var nodeNum = nodes.length;
        for (var i = 0; i < nodeNum; i += 1) {
            var node = nodes[i];
            var nodeWidth = 10;
            var nodeHeight = 10;
            if (util_1.isNumber(node.size)) {
                nodeWidth = node.size;
                nodeHeight = node.size;
            }
            if (util_1.isArray(node.size)) {
                if (!isNaN(node.size[0]))
                    nodeWidth = node.size[0];
                if (!isNaN(node.size[1]))
                    nodeHeight = node.size[1];
            }
            if (self.getWidth && !isNaN(self.getWidth(node)))
                nodeHeight = self.getWidth(node);
            if (self.getHeight && !isNaN(self.getHeight(node)))
                nodeWidth = self.getHeight(node);
            var maxSize = Math.max(nodeWidth, nodeHeight);
            sizes.push(maxSize);
        }
        if (!self.barnesHut && nodeNum > 250)
            self.barnesHut = true;
        if (!self.prune && nodeNum > 100)
            self.prune = true;
        if (this.maxIteration === 0 && !self.prune) {
            maxIteration = 250;
            if (nodeNum <= 200 && nodeNum > 100)
                maxIteration = 1000;
            else if (nodeNum > 200)
                maxIteration = 1200;
            this.maxIteration = maxIteration;
        }
        else if (this.maxIteration === 0 && prune) {
            maxIteration = 100;
            if (nodeNum <= 200 && nodeNum > 100)
                maxIteration = 500;
            else if (nodeNum > 200)
                maxIteration = 950;
            this.maxIteration = maxIteration;
        }
        if (!self.kr) {
            self.kr = 50;
            if (nodeNum > 100 && nodeNum <= 500)
                self.kr = 20;
            else if (nodeNum > 500)
                self.kr = 1;
        }
        if (!self.kg) {
            self.kg = 20;
            if (nodeNum > 100 && nodeNum <= 500)
                self.kg = 10;
            else if (nodeNum > 500)
                self.kg = 1;
        }
        this.nodes = self.updateNodesByForces(sizes);
        onLayoutEnd();
    };
    ForceAtlas2Layout.prototype.updateNodesByForces = function (sizes) {
        var self = this;
        var nodes = self.nodes, edges = self.edges, maxIteration = self.maxIteration;
        var nonLoopEdges = edges.filter(function (edge) {
            return edge.source !== edge.target;
        });
        var size = nodes.length;
        var esize = nonLoopEdges.length;
        var degrees = [];
        var idMap = {};
        var edgeEndsIdMap = {};
        var Es = [];
        for (var i = 0; i < size; i += 1) {
            idMap[nodes[i].id] = i;
            degrees[i] = 0;
            if (nodes[i].x === undefined || isNaN(nodes[i].x)) {
                nodes[i].x = Math.random() * 1000;
            }
            if (nodes[i].y === undefined || isNaN(nodes[i].y)) {
                nodes[i].y = Math.random() * 1000;
            }
            Es.push({ x: nodes[i].x, y: nodes[i].y });
        }
        for (var i = 0; i < esize; i += 1) {
            var node1 = void 0;
            var node2 = void 0;
            var sIdx = 0, tIdx = 0;
            for (var j = 0; j < size; j += 1) {
                if (nodes[j].id === nonLoopEdges[i].source) {
                    node1 = nodes[j];
                    sIdx = j;
                }
                else if (nodes[j].id === nonLoopEdges[i].target) {
                    node2 = nodes[j];
                    tIdx = j;
                }
                edgeEndsIdMap[i] = { sourceIdx: sIdx, targetIdx: tIdx };
            }
            if (node1)
                degrees[idMap[node1.id]] += 1;
            if (node2)
                degrees[idMap[node2.id]] += 1;
        }
        var iteration = maxIteration;
        nodes = this.iterate(iteration, idMap, edgeEndsIdMap, esize, degrees, sizes);
        // if prune, place the leaves around their parents, and then re-layout for several iterations.
        if (self.prune) {
            for (var j = 0; j < esize; j += 1) {
                if (degrees[edgeEndsIdMap[j].sourceIdx] <= 1) {
                    nodes[edgeEndsIdMap[j].sourceIdx].x = nodes[edgeEndsIdMap[j].targetIdx].x;
                    nodes[edgeEndsIdMap[j].sourceIdx].y = nodes[edgeEndsIdMap[j].targetIdx].y;
                }
                else if (degrees[edgeEndsIdMap[j].targetIdx] <= 1) {
                    nodes[edgeEndsIdMap[j].targetIdx].x = nodes[edgeEndsIdMap[j].sourceIdx].x;
                    nodes[edgeEndsIdMap[j].targetIdx].y = nodes[edgeEndsIdMap[j].sourceIdx].y;
                }
            }
            self.prune = false;
            self.barnesHut = false;
            iteration = 100;
            nodes = this.iterate(iteration, idMap, edgeEndsIdMap, esize, degrees, sizes);
        }
        return nodes;
    };
    ForceAtlas2Layout.prototype.iterate = function (iteration, idMap, edgeEndsIdMap, esize, degrees, sizes) {
        var self = this;
        var nodes = self.nodes, kr = self.kr, preventOverlap = self.preventOverlap, barnesHut = self.barnesHut;
        var nodeNum = nodes.length;
        var sg = 0;
        var krPrime = 100;
        var iter = iteration;
        var prevoIter = 50;
        var forces = [];
        var preForces = [];
        var bodies = [];
        for (var i = 0; i < nodeNum; i += 1) {
            forces[2 * i] = 0;
            forces[2 * i + 1] = 0;
            if (barnesHut) {
                var params = {
                    id: i,
                    rx: nodes[i].x,
                    ry: nodes[i].y,
                    mass: 1,
                    g: kr,
                    degree: degrees[i]
                };
                bodies[i] = new body_1.default(params);
            }
        }
        while (iter > 0) {
            for (var i = 0; i < nodeNum; i += 1) {
                preForces[2 * i] = forces[2 * i];
                preForces[2 * i + 1] = forces[2 * i + 1];
                forces[2 * i] = 0;
                forces[2 * i + 1] = 0;
            }
            // attractive forces, existing on every actual edge
            forces = this.getAttrForces(iter, prevoIter, esize, idMap, edgeEndsIdMap, degrees, sizes, forces);
            // repulsive forces and Gravity, existing on every node pair
            // if preventOverlap, using the no-optimized method in the last prevoIter instead.
            if (barnesHut && ((preventOverlap && iter > prevoIter) || !preventOverlap)) {
                forces = this.getOptRepGraForces(forces, bodies, degrees);
            }
            else {
                forces = this.getRepGraForces(iter, prevoIter, forces, krPrime, sizes, degrees);
            }
            // update the positions
            var res = this.updatePos(forces, preForces, sg, degrees);
            nodes = res.nodes;
            sg = res.sg;
            iter--;
            if (self.tick)
                self.tick();
        }
        ;
        return nodes;
    };
    ForceAtlas2Layout.prototype.getAttrForces = function (iter, prevoIter, esize, idMap, edgeEndsIdMap, degrees, sizes, forces) {
        var self = this;
        var nodes = self.nodes, preventOverlap = self.preventOverlap, dissuadeHubs = self.dissuadeHubs, mode = self.mode, prune = self.prune;
        for (var i = 0; i < esize; i += 1) {
            var sourceNode = nodes[edgeEndsIdMap[i].sourceIdx];
            var sourceIdx = edgeEndsIdMap[i].sourceIdx;
            var targetNode = nodes[edgeEndsIdMap[i].targetIdx];
            var targetIdx = edgeEndsIdMap[i].targetIdx;
            if (prune && (degrees[sourceIdx] <= 1 || degrees[targetIdx] <= 1))
                continue;
            var dir = [targetNode.x - sourceNode.x, targetNode.y - sourceNode.y];
            var eucliDis = Math.hypot(dir[0], dir[1]);
            eucliDis = eucliDis < 0.0001 ? 0.0001 : eucliDis;
            dir[0] = dir[0] / eucliDis;
            dir[1] = dir[1] / eucliDis;
            if (preventOverlap && iter < prevoIter)
                eucliDis = eucliDis - sizes[sourceIdx] - sizes[targetIdx];
            var Fa1 = eucliDis;
            var Fa2 = Fa1;
            if (mode === 'linlog') {
                Fa1 = Math.log(1 + eucliDis);
                Fa2 = Fa1;
            }
            if (dissuadeHubs) {
                Fa1 = eucliDis / degrees[sourceIdx];
                Fa2 = eucliDis / degrees[targetIdx];
            }
            if (preventOverlap && iter < prevoIter && eucliDis <= 0) {
                Fa1 = 0;
                Fa2 = 0;
            }
            else if (preventOverlap && iter < prevoIter && eucliDis > 0) {
                Fa1 = eucliDis;
                Fa2 = eucliDis;
            }
            forces[2 * idMap[sourceNode.id]] += Fa1 * dir[0];
            forces[2 * idMap[targetNode.id]] -= Fa2 * dir[0];
            forces[2 * idMap[sourceNode.id] + 1] += Fa1 * dir[1];
            forces[2 * idMap[targetNode.id] + 1] -= Fa2 * dir[1];
        }
        return forces;
    };
    ForceAtlas2Layout.prototype.getRepGraForces = function (iter, prevoIter, forces, krPrime, sizes, degrees) {
        var self = this;
        var nodes = self.nodes, preventOverlap = self.preventOverlap, kr = self.kr, kg = self.kg, center = self.center, prune = self.prune;
        var nodeNum = nodes.length;
        for (var i = 0; i < nodeNum; i += 1) {
            for (var j = i + 1; j < nodeNum; j += 1) {
                if (prune && (degrees[i] <= 1 || degrees[j] <= 1))
                    continue;
                var dir_1 = [nodes[j].x - nodes[i].x, nodes[j].y - nodes[i].y];
                var eucliDis_1 = Math.hypot(dir_1[0], dir_1[1]);
                eucliDis_1 = eucliDis_1 < 0.0001 ? 0.0001 : eucliDis_1;
                dir_1[0] = dir_1[0] / eucliDis_1;
                dir_1[1] = dir_1[1] / eucliDis_1;
                if (preventOverlap && iter < prevoIter)
                    eucliDis_1 = eucliDis_1 - sizes[i] - sizes[j];
                var Fr = kr * (degrees[i] + 1) * (degrees[j] + 1) / eucliDis_1;
                if (preventOverlap && iter < prevoIter && eucliDis_1 < 0) {
                    Fr = krPrime * (degrees[i] + 1) * (degrees[j] + 1);
                }
                else if (preventOverlap && iter < prevoIter && eucliDis_1 === 0) {
                    Fr = 0;
                }
                else if (preventOverlap && iter < prevoIter && eucliDis_1 > 0) {
                    Fr = kr * (degrees[i] + 1) * (degrees[j] + 1) / eucliDis_1;
                }
                forces[2 * i] -= Fr * dir_1[0];
                forces[2 * j] += Fr * dir_1[0];
                forces[2 * i + 1] -= Fr * dir_1[1];
                forces[2 * j + 1] += Fr * dir_1[1];
            }
            // gravity
            var dir = [nodes[i].x - center[0], nodes[i].y - center[1]];
            var eucliDis = Math.hypot(dir[0], dir[1]);
            dir[0] = dir[0] / eucliDis;
            dir[1] = dir[1] / eucliDis;
            var Fg = kg * (degrees[i] + 1);
            forces[2 * i] -= Fg * dir[0];
            forces[2 * i + 1] -= Fg * dir[1];
        }
        return forces;
    };
    ForceAtlas2Layout.prototype.getOptRepGraForces = function (forces, bodies, degrees) {
        var self = this;
        var nodes = self.nodes, kg = self.kg, center = self.center, prune = self.prune;
        var nodeNum = nodes.length;
        var minx = 9e10, maxx = -9e10, miny = 9e10, maxy = -9e10;
        for (var i = 0; i < nodeNum; i += 1) {
            if (prune && (degrees[i] <= 1))
                continue;
            bodies[i].setPos(nodes[i].x, nodes[i].y);
            if (nodes[i].x >= maxx)
                maxx = nodes[i].x;
            if (nodes[i].x <= minx)
                minx = nodes[i].x;
            if (nodes[i].y >= maxy)
                maxy = nodes[i].y;
            if (nodes[i].y <= miny)
                miny = nodes[i].y;
        }
        var width = Math.max(maxx - minx, maxy - miny);
        var quadParams = {
            xmid: (maxx + minx) / 2,
            ymid: (maxy + miny) / 2,
            length: width,
            massCenter: center,
            mass: nodeNum
        };
        var quad = new quad_1.default(quadParams);
        var quadTree = new quadTree_1.default(quad);
        // build the tree, insert the nodes(quads) into the tree
        for (var i = 0; i < nodeNum; i += 1) {
            if (prune && (degrees[i] <= 1))
                continue;
            if (bodies[i].in(quad))
                quadTree.insert(bodies[i]);
        }
        // update the repulsive forces and the gravity.
        for (var i = 0; i < nodeNum; i += 1) {
            if (prune && (degrees[i] <= 1))
                continue;
            bodies[i].resetForce();
            quadTree.updateForce(bodies[i]);
            forces[2 * i] -= bodies[i].fx;
            forces[2 * i + 1] -= bodies[i].fy;
            // gravity
            var dir = [nodes[i].x - center[0], nodes[i].y - center[1]];
            var eucliDis = Math.hypot(dir[0], dir[1]);
            eucliDis = eucliDis < 0.0001 ? 0.0001 : eucliDis;
            dir[0] = dir[0] / eucliDis;
            dir[1] = dir[1] / eucliDis;
            var Fg = kg * (degrees[i] + 1);
            forces[2 * i] -= Fg * dir[0];
            forces[2 * i + 1] -= Fg * dir[1];
        }
        return forces;
    };
    ForceAtlas2Layout.prototype.updatePos = function (forces, preForces, sg, degrees) {
        var self = this;
        var nodes = self.nodes, ks = self.ks, tao = self.tao, prune = self.prune, ksmax = self.ksmax;
        var nodeNum = nodes.length;
        var swgns = [];
        var trans = [];
        // swg(G) and tra(G)
        var swgG = 0;
        var traG = 0;
        for (var i = 0; i < nodeNum; i += 1) {
            if (prune && (degrees[i] <= 1))
                continue;
            var minus = [forces[2 * i] - preForces[2 * i],
                forces[2 * i + 1] - preForces[2 * i + 1]
            ];
            var minusNorm = Math.hypot(minus[0], minus[1]);
            var add = [forces[2 * i] + preForces[2 * i],
                forces[2 * i + 1] + preForces[2 * i + 1]
            ];
            var addNorm = Math.hypot(add[0], add[1]);
            swgns[i] = minusNorm;
            trans[i] = addNorm / 2;
            swgG += (degrees[i] + 1) * swgns[i];
            traG += (degrees[i] + 1) * trans[i];
        }
        var preSG = sg;
        sg = tao * traG / swgG;
        if (preSG !== 0) {
            sg = sg > (1.5 * preSG) ? (1.5 * preSG) : sg;
        }
        // update the node positions
        for (var i = 0; i < nodeNum; i += 1) {
            if (prune && (degrees[i] <= 1))
                continue;
            var sn = ks * sg / (1 + sg * Math.sqrt(swgns[i]));
            var absForce = Math.hypot(forces[2 * i], forces[2 * i + 1]);
            absForce = absForce < 0.0001 ? 0.0001 : absForce;
            var max = ksmax / absForce;
            sn = sn > max ? max : sn;
            var dnx = sn * forces[2 * i];
            var dny = sn * forces[2 * i + 1];
            nodes[i].x += dnx;
            nodes[i].y += dny;
        }
        return { nodes: nodes, sg: sg };
    };
    return ForceAtlas2Layout;
}(base_1.Base));
exports.ForceAtlas2Layout = ForceAtlas2Layout;
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"../base":1679470356559,"../../util":1679470356560,"./body":1679470356591,"./quad":1679470356592,"./quadTree":1679470356593}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356591, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
// represents a body(a point mass) and its position
var Body = /** @class */ (function () {
    function Body(params) {
        /**
         * the id of this body, the same with the node id
         * @type  {number}
         */
        this.id = params.id || 0;
        /**
         * the position of this body
         * @type  {number}
         */
        this.rx = params.rx;
        /**
         * the position of this body
         * @type  {number}
         */
        this.ry = params.ry;
        /**
         * the force acting on this body
         * @type  {number}
         */
        this.fx = 0;
        /**
         * the force acting on this body
         * @type  {number}
         */
        this.fy = 0;
        /**
         * the mass of this body, =1 for a node
         * @type  {number}
         */
        this.mass = params.mass;
        /**
         * the degree of the node represented by this body
         * @type  {number}
         */
        this.degree = params.degree;
        /**
         * the parameter for repulsive force, = kr
         * @type  {number}
         */
        this.g = params.g || 0;
    }
    // returns the euclidean distance
    Body.prototype.distanceTo = function (bo) {
        var dx = this.rx - bo.rx;
        var dy = this.ry - bo.ry;
        return Math.hypot(dx, dy);
    };
    Body.prototype.setPos = function (x, y) {
        this.rx = x;
        this.ry = y;
    };
    // resets the forces
    Body.prototype.resetForce = function () {
        this.fx = 0;
        this.fy = 0;
    };
    Body.prototype.addForce = function (b) {
        var dx = b.rx - this.rx;
        var dy = b.ry - this.ry;
        var dist = Math.hypot(dx, dy);
        dist = dist < 0.0001 ? 0.0001 : dist;
        // the repulsive defined by force atlas 2
        var F = (this.g * (this.degree + 1) * (b.degree + 1)) / dist;
        this.fx += F * dx / dist;
        this.fy += F * dy / dist;
    };
    // if quad contains this body
    Body.prototype.in = function (quad) {
        return quad.contains(this.rx, this.ry);
    };
    // returns a new body
    Body.prototype.add = function (bo) {
        var nenwMass = this.mass + bo.mass;
        var x = (this.rx * this.mass + bo.rx * bo.mass) / nenwMass;
        var y = (this.ry * this.mass + bo.ry * bo.mass) / nenwMass;
        var dg = this.degree + bo.degree;
        var params = {
            rx: x,
            ry: y,
            mass: nenwMass,
            degree: dg
        };
        return new Body(params);
    };
    return Body;
}());
exports.default = Body;
//# sourceMappingURL=body.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356592, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var Quad = /** @class */ (function () {
    function Quad(params) {
        /**
         * the center position of this quad
         * @type  {number}
         */
        this.xmid = params.xmid;
        /**
         * the center position of this quad
         * @type  {number}
         */
        this.ymid = params.ymid;
        /**
         * the length of this quad
         * @type  {number}
         */
        this.length = params.length;
        /**
         * the mass center of this quad
         * @type  {number}
         */
        this.massCenter = params.massCenter || [0, 0];
        /**
         * the mass of this quad
         * @type  {number}
         */
        this.mass = params.mass || 1;
    }
    Quad.prototype.getLength = function () {
        return this.length;
    };
    Quad.prototype.contains = function (x, y) {
        var halfLen = this.length / 2;
        return (x <= this.xmid + halfLen &&
            x >= this.xmid - halfLen &&
            y <= this.ymid + halfLen &&
            y >= this.ymid - halfLen);
    };
    // northwest quadrant
    Quad.prototype.NW = function () {
        var x = this.xmid - this.length / 4;
        var y = this.ymid + this.length / 4;
        var len = this.length / 2;
        var params = {
            xmid: x,
            ymid: y,
            length: len
        };
        var NW = new Quad(params);
        return NW;
    };
    // northeast
    Quad.prototype.NE = function () {
        var x = this.xmid + this.length / 4;
        var y = this.ymid + this.length / 4;
        var len = this.length / 2;
        var params = {
            xmid: x,
            ymid: y,
            length: len
        };
        var NE = new Quad(params);
        return NE;
    };
    // southwest
    Quad.prototype.SW = function () {
        var x = this.xmid - this.length / 4;
        var y = this.ymid - this.length / 4;
        var len = this.length / 2;
        var params = {
            xmid: x,
            ymid: y,
            length: len
        };
        var SW = new Quad(params);
        return SW;
    };
    // southeast
    Quad.prototype.SE = function () {
        var x = this.xmid + this.length / 4;
        var y = this.ymid - this.length / 4;
        var len = this.length / 2;
        var params = {
            xmid: x,
            ymid: y,
            length: len
        };
        var SE = new Quad(params);
        return SE;
    };
    return Quad;
}());
exports.default = Quad;
//# sourceMappingURL=quad.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356593, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @fileOverview quadTree
 * @author shiwu.wyy@antfin.com
 */
var QuadTree = /** @class */ (function () {
    // each quadtree represents a quadrant and an aggregate body
    // that represents all bodies inside the quadrant
    function QuadTree(param) {
        /**
         * (aggregated) body in this quad
         * @type  {object}
         */
        this.body = null;
        /**
         * tree representing the northwest quadrant
         * @type  {object}
         */
        this.quad = null;
        this.NW = null;
        this.NE = null;
        this.SW = null;
        this.SE = null;
        /**
         * threshold
         * @type  {number}
         */
        this.theta = 0.5;
        if (param != null)
            this.quad = param;
    }
    // insert a body(node) into the tree
    QuadTree.prototype.insert = function (bo) {
        // if this node does not contain a body, put the new body bo here
        if (this.body == null) {
            this.body = bo;
            return;
        }
        // internal node
        if (!this._isExternal()) {
            // update mass info
            this.body = this.body.add(bo);
            // insert body into quadrant
            this._putBody(bo);
        }
        else { // external node
            // divide this region into four children
            if (this.quad) {
                this.NW = new QuadTree(this.quad.NW());
                this.NE = new QuadTree(this.quad.NE());
                this.SW = new QuadTree(this.quad.SW());
                this.SE = new QuadTree(this.quad.SE());
            }
            // insert this body and bo
            this._putBody(this.body);
            this._putBody(bo);
            // update the mass info
            this.body = this.body.add(bo);
        }
    };
    // inserts bo into a quad
    QuadTree.prototype._putBody = function (bo) {
        if (!this.quad)
            return;
        if (bo.in(this.quad.NW()) && this.NW)
            this.NW.insert(bo);
        else if (bo.in(this.quad.NE()) && this.NE)
            this.NE.insert(bo);
        else if (bo.in(this.quad.SW()) && this.SW)
            this.SW.insert(bo);
        else if (bo.in(this.quad.SE()) && this.SE)
            this.SE.insert(bo);
    };
    QuadTree.prototype._isExternal = function () {
        // four children are null
        return (this.NW == null && this.NE == null && this.SW == null && this.SE == null);
    };
    // update the forces
    QuadTree.prototype.updateForce = function (bo) {
        if (this.body == null || bo === this.body) {
            return;
        }
        // if the current node is external
        if (this._isExternal())
            bo.addForce(this.body);
        // internal nodes
        else {
            var s = this.quad ? this.quad.getLength() : 0;
            var d = this.body.distanceTo(bo);
            // b is far enough
            if ((s / d) < this.theta)
                bo.addForce(this.body);
            else {
                this.NW && this.NW.updateForce(bo);
                this.NE && this.NE.updateForce(bo);
                this.SW && this.SW.updateForce(bo);
                this.SE && this.SE.updateForce(bo);
            }
        }
    };
    return QuadTree;
}());
exports.default = QuadTree;
//# sourceMappingURL=quadTree.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356594, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.Layouts = exports.Layout = void 0;
var registy_1 = require("../registy");
var Layout = /** @class */ (function () {
    function Layout(options) {
        var layoutClass = registy_1.getLayoutByName(options.type);
        this.layoutInstance = new layoutClass(options);
    }
    Layout.prototype.layout = function (data) {
        return this.layoutInstance.layout(data);
    };
    Layout.prototype.updateCfg = function (cfg) {
        this.layoutInstance.updateCfg(cfg);
    };
    Layout.prototype.init = function (data) {
        this.layoutInstance.init(data);
    };
    Layout.prototype.execute = function () {
        this.layoutInstance.execute();
    };
    Layout.prototype.getDefaultCfg = function () {
        return this.layoutInstance.getDefaultCfg();
    };
    Layout.prototype.destroy = function () {
        return this.layoutInstance.destroy();
    };
    return Layout;
}());
exports.Layout = Layout;
// FIXME
// FOR G6
exports.Layouts = new Proxy({}, {
    // tslint:disable-line
    get: function (target, propKey) {
        return registy_1.getLayoutByName(propKey);
    },
    set: function (target, propKey, value) {
        registy_1.registerLayout(propKey, value);
        return true;
    }
});
//# sourceMappingURL=layout.js.map
}, function(modId) { var map = {"../registy":1679470356558}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356595, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=types.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1679470356557);
})()
//miniprogram-npm-outsideDeps=["d3-force","ml-matrix","@antv/g-webgpu"]
//# sourceMappingURL=index.js.map