module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1679470356526, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Camera", {
  enumerable: true,
  get: function get() {
    return _Camera.Camera;
  }
});
Object.defineProperty(exports, "Geometry", {
  enumerable: true,
  get: function get() {
    return _geometry.Geometry;
  }
});
Object.defineProperty(exports, "Kernel", {
  enumerable: true,
  get: function get() {
    return _Kernel.Kernel;
  }
});
Object.defineProperty(exports, "Material", {
  enumerable: true,
  get: function get() {
    return _material.Material;
  }
});
Object.defineProperty(exports, "Renderable", {
  enumerable: true,
  get: function get() {
    return _Renderable.Renderable;
  }
});
Object.defineProperty(exports, "World", {
  enumerable: true,
  get: function get() {
    return _World.World;
  }
});

var _Camera = require("./camera/Camera");

var _geometry = require("./geometry");

var _Kernel = require("./Kernel");

var _material = require("./material");

var _Renderable = require("./renderable/Renderable");

var _World = require("./World");
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {"./camera/Camera":1679470356527,"./geometry":1679470356531,"./Kernel":1679470356532,"./material":1679470356537,"./renderable/Renderable":1679470356538,"./World":1679470356539}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356527, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Camera = exports.CAMERA_PROJECTION_MODE = exports.CAMERA_TRACKING_MODE = exports.CAMERA_TYPE = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var _glMatrix = require("gl-matrix");

var _inversify = require("inversify");

var _math = require("../utils/math");

var _Landmark = _interopRequireDefault(require("./Landmark"));

var _dec, _dec2, _class, _class2, _descriptor, _class3, _temp;

var CAMERA_TYPE;
exports.CAMERA_TYPE = CAMERA_TYPE;

(function (CAMERA_TYPE) {
  CAMERA_TYPE["ORBITING"] = "ORBITING";
  CAMERA_TYPE["EXPLORING"] = "EXPLORING";
  CAMERA_TYPE["TRACKING"] = "TRACKING";
})(CAMERA_TYPE || (exports.CAMERA_TYPE = CAMERA_TYPE = {}));

var CAMERA_TRACKING_MODE;
exports.CAMERA_TRACKING_MODE = CAMERA_TRACKING_MODE;

(function (CAMERA_TRACKING_MODE) {
  CAMERA_TRACKING_MODE["DEFAULT"] = "DEFAULT";
  CAMERA_TRACKING_MODE["ROTATIONAL"] = "ROTATIONAL";
  CAMERA_TRACKING_MODE["TRANSLATIONAL"] = "TRANSLATIONAL";
  CAMERA_TRACKING_MODE["CINEMATIC"] = "CINEMATIC";
})(CAMERA_TRACKING_MODE || (exports.CAMERA_TRACKING_MODE = CAMERA_TRACKING_MODE = {}));

var CAMERA_PROJECTION_MODE;
exports.CAMERA_PROJECTION_MODE = CAMERA_PROJECTION_MODE;

(function (CAMERA_PROJECTION_MODE) {
  CAMERA_PROJECTION_MODE["ORTHOGRAPHIC"] = "ORTHOGRAPHIC";
  CAMERA_PROJECTION_MODE["PERSPECTIVE"] = "PERSPECTIVE";
})(CAMERA_PROJECTION_MODE || (exports.CAMERA_PROJECTION_MODE = CAMERA_PROJECTION_MODE = {}));

var DEG_2_RAD = Math.PI / 180;
var RAD_2_DEG = 180 / Math.PI;
/**
 * 参考「WebGL Insights - 23.Designing Cameras for WebGL Applications」，基于 Responsible Camera 思路设计
 * 保存相机参数，定义相机动作：
 * 1. dolly 沿 n 轴移动
 * 2. pan 沿 u v 轴移动
 * 3. rotate 以方位角旋转
 * 4. 移动到 Landmark，具有平滑的动画效果，其间禁止其他用户交互
 */

var Camera = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_gWebgpuCore.IDENTIFIER.InteractorService), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function () {
  function Camera() {
    (0, _classCallCheck2.default)(this, Camera);
    this.matrix = _glMatrix.mat4.create();
    this.right = _glMatrix.vec3.fromValues(1, 0, 0);
    this.up = _glMatrix.vec3.fromValues(0, 1, 0);
    this.forward = _glMatrix.vec3.fromValues(0, 0, 1);
    this.position = _glMatrix.vec3.fromValues(0, 0, 1);
    this.focalPoint = _glMatrix.vec3.fromValues(0, 0, 0);
    this.distanceVector = _glMatrix.vec3.fromValues(0, 0, 0);
    this.distance = 1;
    this.azimuth = 0;
    this.elevation = 0;
    this.roll = 0;
    this.relAzimuth = 0;
    this.relElevation = 0;
    this.relRoll = 0;
    this.dollyingStep = 0;
    this.maxDistance = Infinity;
    this.minDistance = -Infinity;
    this.rotateWorld = false;
    (0, _initializerDefineProperty2.default)(this, "interactor", _descriptor, this);
    this.fov = 30;
    this.near = 0.1;
    this.far = 10000;
    this.aspect = 1;
    this.left = void 0;
    this.rright = void 0;
    this.top = void 0;
    this.bottom = void 0;
    this.zoom = 1;
    this.perspective = _glMatrix.mat4.create();
    this.view = void 0;
    this.following = undefined;
    this.type = CAMERA_TYPE.EXPLORING;
    this.trackingMode = CAMERA_TRACKING_MODE.DEFAULT;
    this.projectionMode = CAMERA_PROJECTION_MODE.PERSPECTIVE;
    this.frustum = new _gWebgpuCore.Frustum();
    this.landmarks = [];
    this.landmarkAnimationID = void 0;
  }

  (0, _createClass2.default)(Camera, [{
    key: "clone",
    value: function clone() {
      var camera = new Camera();
      camera.setType(this.type, undefined);
      camera.interactor = this.interactor;
      return camera;
    }
  }, {
    key: "getProjectionMode",
    value: function getProjectionMode() {
      return this.projectionMode;
    }
  }, {
    key: "getPerspective",
    value: function getPerspective() {
      return this.perspective;
    }
  }, {
    key: "getFrustum",
    value: function getFrustum() {
      return this.frustum;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.position;
    }
  }, {
    key: "setType",
    value: function setType(type, trackingMode) {
      this.type = type;

      if (this.type === CAMERA_TYPE.EXPLORING) {
        this.setWorldRotation(true);
      } else {
        this.setWorldRotation(false);
      }

      this._getAngles();

      if (this.type === CAMERA_TYPE.TRACKING && trackingMode !== undefined) {
        this.setTrackingMode(trackingMode);
      }

      return this;
    }
  }, {
    key: "setProjectionMode",
    value: function setProjectionMode(projectionMode) {
      this.projectionMode = projectionMode;
      return this;
    }
  }, {
    key: "setTrackingMode",
    value: function setTrackingMode(trackingMode) {
      if (this.type !== CAMERA_TYPE.TRACKING) {
        throw new Error('Impossible to set a tracking mode if the camera is not of tracking type');
      }

      this.trackingMode = trackingMode;
      return this;
    }
    /**
     * If flag is true, it reverses the azimuth and elevation angles.
     * Subsequent calls to rotate, setAzimuth, setElevation,
     * changeAzimuth or changeElevation will cause the inverted effect.
     * setRoll or changeRoll is not affected by this method.
     *
     * This inversion is useful when one wants to simulate that the world
     * is moving, instead of the camera.
     *
     * By default the camera angles are not reversed.
     * @param {Boolean} flag the boolean flag to reverse the angles.
     */

  }, {
    key: "setWorldRotation",
    value: function setWorldRotation(flag) {
      this.rotateWorld = flag;

      this._getAngles();
    }
    /**
     * 计算 MV 矩阵，为相机矩阵的逆矩阵
     */

  }, {
    key: "getViewTransform",
    value: function getViewTransform() {
      return _glMatrix.mat4.invert(_glMatrix.mat4.create(), this.matrix);
    }
  }, {
    key: "getWorldTransform",
    value: function getWorldTransform() {
      return this.matrix;
    }
    /**
     * 设置相机矩阵
     */

  }, {
    key: "setMatrix",
    value: function setMatrix(matrix) {
      this.matrix = matrix;

      this._update();

      return this;
    }
  }, {
    key: "setAspect",
    value: function setAspect(aspect) {
      this.setPerspective(this.near, this.far, this.fov, aspect);
      return this;
    }
    /**
     * Sets an offset in a larger frustum, used in PixelPicking
     */

  }, {
    key: "setViewOffset",
    value: function setViewOffset(fullWidth, fullHeight, x, y, width, height) {
      this.aspect = fullWidth / fullHeight;

      if (this.view === undefined) {
        this.view = {
          enabled: true,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1
        };
      }

      this.view.enabled = true;
      this.view.fullWidth = fullWidth;
      this.view.fullHeight = fullHeight;
      this.view.offsetX = x;
      this.view.offsetY = y;
      this.view.width = width;
      this.view.height = height;

      if (this.projectionMode === CAMERA_PROJECTION_MODE.PERSPECTIVE) {
        this.setPerspective(this.near, this.far, this.fov, this.aspect);
      } else {
        this.setOrthographic(this.left, this.rright, this.top, this.bottom, this.near, this.far);
      }

      return this;
    }
  }, {
    key: "clearViewOffset",
    value: function clearViewOffset() {
      if (this.view !== undefined) {
        this.view.enabled = false;
      }

      if (this.projectionMode === CAMERA_PROJECTION_MODE.PERSPECTIVE) {
        this.setPerspective(this.near, this.far, this.fov, this.aspect);
      } else {
        this.setOrthographic(this.left, this.rright, this.top, this.bottom, this.near, this.far);
      }

      return this;
    }
  }, {
    key: "setPerspective",
    value: function setPerspective(near, far, fov, aspect) {
      this.projectionMode = CAMERA_PROJECTION_MODE.PERSPECTIVE;
      this.fov = fov;
      this.near = near;
      this.far = far;
      this.aspect = aspect;

      _glMatrix.mat4.perspective(this.perspective, this.fov * DEG_2_RAD, this.aspect, this.near, this.far);

      return this;
    }
  }, {
    key: "setOrthographic",
    value: function setOrthographic(l, r, t, b, near, far) {
      this.projectionMode = CAMERA_PROJECTION_MODE.ORTHOGRAPHIC;
      this.rright = r;
      this.left = l;
      this.top = t;
      this.bottom = b;
      this.near = near;
      this.far = far;
      var dx = (this.rright - this.left) / (2 * this.zoom);
      var dy = (this.top - this.bottom) / (2 * this.zoom);
      var cx = (this.rright + this.left) / 2;
      var cy = (this.top + this.bottom) / 2;
      var left = cx - dx;
      var right = cx + dx;
      var top = cy + dy;
      var bottom = cy - dy;

      if (this.view !== undefined && this.view.enabled) {
        var scaleW = (this.rright - this.left) / this.view.fullWidth / this.zoom;
        var scaleH = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        left += scaleW * this.view.offsetX;
        right = left + scaleW * this.view.width;
        top -= scaleH * this.view.offsetY;
        bottom = top - scaleH * this.view.height;
      }

      _glMatrix.mat4.ortho(this.perspective, left, right, top, bottom, near, far);

      return this;
    }
    /**
     * 设置相机位置
     */

  }, {
    key: "setPosition",
    value: function setPosition(x, y, z) {
      this._setPosition(x, y, z);

      this.setFocalPoint(this.focalPoint);
      return this;
    }
    /**
     * 设置视点位置
     */

  }, {
    key: "setFocalPoint",
    value: function setFocalPoint(x, y, z) {
      var up = _glMatrix.vec3.fromValues(0, 1, 0);

      this.focalPoint = (0, _math.createVec3)(x, y, z);

      if (this.trackingMode === CAMERA_TRACKING_MODE.CINEMATIC) {
        var d = _glMatrix.vec3.subtract(_glMatrix.vec3.create(), this.focalPoint, this.position);

        x = d[0];
        y = d[1];
        z = d[2];

        var r = _glMatrix.vec3.length(d);

        var el = Math.asin(y / r) * RAD_2_DEG;
        var az = 90 + Math.atan2(z, x) * RAD_2_DEG;

        var m = _glMatrix.mat4.create();

        _glMatrix.mat4.rotateY(m, m, az * DEG_2_RAD);

        _glMatrix.mat4.rotateX(m, m, el * DEG_2_RAD);

        up = _glMatrix.vec3.transformMat4(_glMatrix.vec3.create(), [0, 1, 0], m);
      }

      _glMatrix.mat4.invert(this.matrix, _glMatrix.mat4.lookAt(_glMatrix.mat4.create(), this.position, this.focalPoint, up));

      this._getAxes();

      this._getDistance();

      this._getAngles();

      return this;
    }
    /**
     * 固定当前视点，按指定距离放置相机
     */

  }, {
    key: "setDistance",
    value: function setDistance(d) {
      if (this.distance === d || d < 0) {
        return;
      }

      this.distance = d;

      if (this.distance < 0.0002) {
        this.distance = 0.0002;
      }

      this.dollyingStep = this.distance / 100;

      var pos = _glMatrix.vec3.create();

      d = this.distance;
      var n = this.forward;
      var f = this.focalPoint;
      pos[0] = d * n[0] + f[0];
      pos[1] = d * n[1] + f[1];
      pos[2] = d * n[2] + f[2];

      this._setPosition(pos);

      return this;
    }
  }, {
    key: "setMaxDistance",
    value: function setMaxDistance(d) {
      this.maxDistance = d;
      return this;
    }
  }, {
    key: "setMinDistance",
    value: function setMinDistance(d) {
      this.minDistance = d;
      return this;
    }
    /**
     * Changes the initial azimuth of the camera
     */

  }, {
    key: "changeAzimuth",
    value: function changeAzimuth(az) {
      this.setAzimuth(this.azimuth + az);
      return this;
    }
    /**
     * Changes the initial elevation of the camera
     */

  }, {
    key: "changeElevation",
    value: function changeElevation(el) {
      this.setElevation(this.elevation + el);
      return this;
    }
    /**
     * Changes the initial roll of the camera
     */

  }, {
    key: "changeRoll",
    value: function changeRoll(rl) {
      this.setRoll(this.roll + rl);
      return this;
    }
    /**
     * 设置相机方位角，不同相机模式下需要重新计算相机位置或者是视点位置
     * @param {Number} el the azimuth in degrees
     */

  }, {
    key: "setAzimuth",
    value: function setAzimuth(az) {
      this.azimuth = (0, _math.getAngle)(az);
      this.computeMatrix();

      this._getAxes();

      if (this.type === CAMERA_TYPE.ORBITING || this.type === CAMERA_TYPE.EXPLORING) {
        this._getPosition();
      } else if (this.type === CAMERA_TYPE.TRACKING) {
        this._getFocalPoint();
      }

      return this;
    }
  }, {
    key: "getAzimuth",
    value: function getAzimuth() {
      return this.azimuth;
    }
    /**
     * 设置相机方位角，不同相机模式下需要重新计算相机位置或者是视点位置
     * @param {Number} el the elevation in degrees
     */

  }, {
    key: "setElevation",
    value: function setElevation(el) {
      this.elevation = (0, _math.getAngle)(el);
      this.computeMatrix();

      this._getAxes();

      if (this.type === CAMERA_TYPE.ORBITING || this.type === CAMERA_TYPE.EXPLORING) {
        this._getPosition();
      } else if (this.type === CAMERA_TYPE.TRACKING) {
        this._getFocalPoint();
      }

      return this;
    }
    /**
     * 设置相机方位角，不同相机模式下需要重新计算相机位置或者是视点位置
     * @param {Number} angle the roll angle
     */

  }, {
    key: "setRoll",
    value: function setRoll(angle) {
      this.roll = (0, _math.getAngle)(angle);
      this.computeMatrix();

      this._getAxes();

      if (this.type === CAMERA_TYPE.ORBITING || this.type === CAMERA_TYPE.EXPLORING) {
        this._getPosition();
      } else if (this.type === CAMERA_TYPE.TRACKING) {
        this._getFocalPoint();
      }

      return this;
    }
    /**
     * Changes the azimuth and elevation with respect to the current camera axes
     * @param {Number} azimuth the relative azimuth
     * @param {Number} elevation the relative elevation
     * @param {Number} roll the relative roll
     */

  }, {
    key: "rotate",
    value: function rotate(azimuth, elevation, roll) {
      if (this.type === CAMERA_TYPE.EXPLORING) {
        azimuth = (0, _math.getAngle)(azimuth);
        elevation = (0, _math.getAngle)(elevation);
        roll = (0, _math.getAngle)(roll);

        var rotX = _glMatrix.quat.setAxisAngle(_glMatrix.quat.create(), [1, 0, 0], (this.rotateWorld ? 1 : -1) * elevation * DEG_2_RAD);

        var rotY = _glMatrix.quat.setAxisAngle(_glMatrix.quat.create(), [0, 1, 0], (this.rotateWorld ? 1 : -1) * azimuth * DEG_2_RAD);

        var rotZ = _glMatrix.quat.setAxisAngle(_glMatrix.quat.create(), [0, 0, 1], roll * DEG_2_RAD);

        var rotQ = _glMatrix.quat.multiply(_glMatrix.quat.create(), rotY, rotX);

        rotQ = _glMatrix.quat.multiply(_glMatrix.quat.create(), rotQ, rotZ);

        var rotMatrix = _glMatrix.mat4.fromQuat(_glMatrix.mat4.create(), rotQ);

        _glMatrix.mat4.translate(this.matrix, this.matrix, [0, 0, -this.distance]);

        _glMatrix.mat4.multiply(this.matrix, this.matrix, rotMatrix);

        _glMatrix.mat4.translate(this.matrix, this.matrix, [0, 0, this.distance]);
      } else {
        if (Math.abs(this.elevation + elevation) > 90) {
          return;
        }

        this.relElevation = (0, _math.getAngle)(elevation);
        this.relAzimuth = (0, _math.getAngle)(azimuth);
        this.relRoll = (0, _math.getAngle)(roll);
        this.elevation += this.relElevation;
        this.azimuth += this.relAzimuth;
        this.roll += this.relRoll;
        this.computeMatrix();
      }

      this._getAxes();

      if (this.type === CAMERA_TYPE.ORBITING || this.type === CAMERA_TYPE.EXPLORING) {
        this._getPosition();
      } else if (this.type === CAMERA_TYPE.TRACKING) {
        this._getFocalPoint();
      }

      this._update();

      return this;
    }
    /**
     * 沿水平(right) & 垂直(up)平移相机
     */

  }, {
    key: "pan",
    value: function pan(tx, ty) {
      var coords = (0, _math.createVec3)(tx, ty, 0);

      var pos = _glMatrix.vec3.clone(this.position);

      _glMatrix.vec3.add(pos, pos, _glMatrix.vec3.scale(_glMatrix.vec3.create(), this.right, coords[0]));

      _glMatrix.vec3.add(pos, pos, _glMatrix.vec3.scale(_glMatrix.vec3.create(), this.up, coords[1]));

      this._setPosition(pos);

      return this;
    }
    /**
     * 沿 n 轴移动，当距离视点远时移动速度较快，离视点越近速度越慢
     */

  }, {
    key: "dolly",
    value: function dolly(value) {
      var n = this.forward;

      var pos = _glMatrix.vec3.clone(this.position);

      var step = value * this.dollyingStep;
      var updatedDistance = this.distance + value * this.dollyingStep; // 限制视点距离范围

      step = Math.max(Math.min(updatedDistance, this.maxDistance), this.minDistance) - this.distance;
      pos[0] += step * n[0];
      pos[1] += step * n[1];
      pos[2] += step * n[2];

      this._setPosition(pos);

      if (this.type === CAMERA_TYPE.ORBITING || this.type === CAMERA_TYPE.EXPLORING) {
        // 重新计算视点距离
        this._getDistance();
      } else if (this.type === CAMERA_TYPE.TRACKING) {
        // 保持视距，移动视点位置
        _glMatrix.vec3.add(this.focalPoint, pos, this.distanceVector);
      }

      return this;
    }
  }, {
    key: "createLandmark",
    value: function createLandmark(name, params) {
      var camera = this.clone();
      camera.setPosition(params.position);
      camera.setFocalPoint(params.focalPoint);

      if (params.roll !== undefined) {
        camera.setRoll(params.roll);
      }

      var landmark = new _Landmark.default(name, camera);
      this.landmarks.push(landmark);
      return landmark;
    }
  }, {
    key: "setLandmark",
    value: function setLandmark(name) {
      var landmark = new _Landmark.default(name, this);
      this.landmarks.push(landmark);
      return this;
    }
  }, {
    key: "gotoLandmark",
    value: function gotoLandmark(name) {
      var _this = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
      var landmark = this.landmarks.find(function (l) {
        return l.name === name;
      });

      if (landmark) {
        if (duration === 0) {
          landmark.retrieve(this);
          return;
        }

        if (this.landmarkAnimationID !== undefined) {
          window.cancelAnimationFrame(this.landmarkAnimationID);
        } // TODO: do not process events during animation


        this.interactor.disconnect();
        var destPosition = landmark.getPosition();
        var destFocalPoint = landmark.getFocalPoint();
        var destRoll = landmark.getRoll();
        var timeStart;

        var animate = function animate(timestamp) {
          if (timeStart === undefined) {
            timeStart = timestamp;
          }

          var elapsed = timestamp - timeStart; // TODO: use better ease function

          var t = (1 - Math.cos(elapsed / duration * Math.PI)) / 2;

          var interFocalPoint = _glMatrix.vec3.create();

          var interPosition = _glMatrix.vec3.create();

          var interRoll = 0;

          _glMatrix.vec3.lerp(interFocalPoint, _this.focalPoint, destFocalPoint, t);

          _glMatrix.vec3.lerp(interPosition, _this.position, destPosition, t);

          interRoll = _this.roll * (1 - t) + destRoll * t;

          _this.setFocalPoint(interFocalPoint);

          _this.setPosition(interPosition);

          _this.setRoll(interRoll);

          _this.computeMatrix();

          var dist = _glMatrix.vec3.dist(interFocalPoint, destFocalPoint) + _glMatrix.vec3.dist(interPosition, destPosition);

          if (dist > 0.01) {//
          } else {
            _this.setFocalPoint(interFocalPoint);

            _this.setPosition(interPosition);

            _this.setRoll(interRoll);

            _this.computeMatrix();

            _this.interactor.connect();

            return;
          }

          if (elapsed < duration) {
            _this.landmarkAnimationID = window.requestAnimationFrame(animate);
          }
        };

        window.requestAnimationFrame(animate);
      }
    }
    /**
     * 根据相机矩阵重新计算各种相机参数
     */

  }, {
    key: "_update",
    value: function _update() {
      this._getAxes();

      this._getPosition();

      this._getDistance();

      this._getAngles();
    }
    /**
     * 计算相机矩阵
     */

  }, {
    key: "computeMatrix",
    value: function computeMatrix() {
      var rotX;
      var rotY; // 使用四元数描述 3D 旋转
      // @see https://xiaoiver.github.io/coding/2018/12/28/Camera-%E8%AE%BE%E8%AE%A1-%E4%B8%80.html

      var rotZ = _glMatrix.quat.setAxisAngle(_glMatrix.quat.create(), [0, 0, 1], this.roll * DEG_2_RAD);

      _glMatrix.mat4.identity(this.matrix); // only consider HCS for EXPLORING and ORBITING cameras


      rotX = _glMatrix.quat.setAxisAngle(_glMatrix.quat.create(), [1, 0, 0], (this.rotateWorld && this.type !== CAMERA_TYPE.TRACKING || this.type === CAMERA_TYPE.TRACKING ? 1 : -1) * this.elevation * DEG_2_RAD);
      rotY = _glMatrix.quat.setAxisAngle(_glMatrix.quat.create(), [0, 1, 0], (this.rotateWorld && this.type !== CAMERA_TYPE.TRACKING || this.type === CAMERA_TYPE.TRACKING ? 1 : -1) * this.azimuth * DEG_2_RAD);

      var rotQ = _glMatrix.quat.multiply(_glMatrix.quat.create(), rotY, rotX);

      rotQ = _glMatrix.quat.multiply(_glMatrix.quat.create(), rotQ, rotZ);

      var rotMatrix = _glMatrix.mat4.fromQuat(_glMatrix.mat4.create(), rotQ);

      if (this.type === CAMERA_TYPE.ORBITING || this.type === CAMERA_TYPE.EXPLORING) {
        _glMatrix.mat4.translate(this.matrix, this.matrix, this.focalPoint);

        _glMatrix.mat4.multiply(this.matrix, this.matrix, rotMatrix);

        _glMatrix.mat4.translate(this.matrix, this.matrix, [0, 0, this.distance]);
      } else if (this.type === CAMERA_TYPE.TRACKING) {
        _glMatrix.mat4.translate(this.matrix, this.matrix, this.position);

        _glMatrix.mat4.multiply(this.matrix, this.matrix, rotMatrix);
      }
    }
    /**
     * Sets the camera position in the camera matrix
     */

  }, {
    key: "_setPosition",
    value: function _setPosition(x, y, z) {
      this.position = (0, _math.createVec3)(x, y, z);
      var m = this.matrix;
      m[12] = this.position[0];
      m[13] = this.position[1];
      m[14] = this.position[2];
      m[15] = 1;
    }
    /**
     * Recalculates axes based on the current matrix
     */

  }, {
    key: "_getAxes",
    value: function _getAxes() {
      _glMatrix.vec3.copy(this.right, (0, _math.createVec3)(_glMatrix.vec4.transformMat4(_glMatrix.vec4.create(), [1, 0, 0, 0], this.matrix)));

      _glMatrix.vec3.copy(this.up, (0, _math.createVec3)(_glMatrix.vec4.transformMat4(_glMatrix.vec4.create(), [0, 1, 0, 0], this.matrix)));

      _glMatrix.vec3.copy(this.forward, (0, _math.createVec3)(_glMatrix.vec4.transformMat4(_glMatrix.vec4.create(), [0, 0, 1, 0], this.matrix)));

      _glMatrix.vec3.normalize(this.right, this.right);

      _glMatrix.vec3.normalize(this.up, this.up);

      _glMatrix.vec3.normalize(this.forward, this.forward);
    }
    /**
     * Recalculates euler angles based on the current state
     */

  }, {
    key: "_getAngles",
    value: function _getAngles() {
      // Recalculates angles
      var x = this.distanceVector[0];
      var y = this.distanceVector[1];
      var z = this.distanceVector[2];

      var r = _glMatrix.vec3.length(this.distanceVector); // FAST FAIL: If there is no distance we cannot compute angles


      if (r === 0) {
        this.elevation = 0;
        this.azimuth = 0;
        return;
      }

      if (this.type === CAMERA_TYPE.TRACKING) {
        this.elevation = Math.asin(y / r) * RAD_2_DEG;
        this.azimuth = Math.atan2(-x, -z) * RAD_2_DEG;
      } else {
        if (this.rotateWorld) {
          this.elevation = Math.asin(y / r) * RAD_2_DEG;
          this.azimuth = Math.atan2(-x, -z) * RAD_2_DEG;
        } else {
          this.elevation = -Math.asin(y / r) * RAD_2_DEG;
          this.azimuth = -Math.atan2(-x, -z) * RAD_2_DEG;
        }
      }
    }
    /**
     * 重新计算相机位置，只有 ORBITING 模式相机位置才会发生变化
     */

  }, {
    key: "_getPosition",
    value: function _getPosition() {
      _glMatrix.vec3.copy(this.position, (0, _math.createVec3)(_glMatrix.vec4.transformMat4(_glMatrix.vec4.create(), [0, 0, 0, 1], this.matrix))); // 相机位置变化，需要重新计算视距


      this._getDistance();
    }
    /**
     * 重新计算视点，只有 TRACKING 模式视点才会发生变化
     */

  }, {
    key: "_getFocalPoint",
    value: function _getFocalPoint() {
      _glMatrix.vec3.transformMat3(this.distanceVector, [0, 0, -this.distance], _glMatrix.mat3.fromMat4(_glMatrix.mat3.create(), this.matrix));

      _glMatrix.vec3.add(this.focalPoint, this.position, this.distanceVector); // 视点变化，需要重新计算视距


      this._getDistance();
    }
    /**
     * 重新计算视距
     */

  }, {
    key: "_getDistance",
    value: function _getDistance() {
      this.distanceVector = _glMatrix.vec3.subtract(_glMatrix.vec3.create(), this.focalPoint, this.position);
      this.distance = _glMatrix.vec3.length(this.distanceVector);
      this.dollyingStep = this.distance / 100;
    }
  }]);
  return Camera;
}(), _class3.ProjectionMode = {
  ORTHOGRAPHIC: 'ORTHOGRAPHIC',
  PERSPECTIVE: 'PERSPECTIVE'
}, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "interactor", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.Camera = Camera;
//# sourceMappingURL=Camera.js.map
}, function(modId) { var map = {"../utils/math":1679470356528,"./Landmark":1679470356530}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356528, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAngle = getAngle;
exports.createVec3 = createVec3;

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
//# sourceMappingURL=math.js.map
}, function(modId) { var map = {"./is-number":1679470356529}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356529, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumber = isNumber;

function isNumber(value) {
  return typeof value === 'number';
}
//# sourceMappingURL=is-number.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356530, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _glMatrix = require("gl-matrix");

/**
 * 保存相机状态，便于后续在多个 Landmark 间移动
 */
var Landmark = /*#__PURE__*/function () {
  function Landmark(name, c) {
    (0, _classCallCheck2.default)(this, Landmark);
    this.name = void 0;
    this.matrix = void 0;
    this.right = void 0;
    this.up = void 0;
    this.forward = void 0;
    this.position = void 0;
    this.focalPoint = void 0;
    this.distanceVector = void 0;
    this.distance = void 0;
    this.dollyingStep = void 0;
    this.azimuth = 0;
    this.elevation = 0;
    this.roll = 0;
    this.relAzimuth = 0;
    this.relElevation = 0;
    this.relRoll = 0;
    this.name = name;
    this.matrix = _glMatrix.mat4.clone(c.matrix);
    this.right = _glMatrix.vec3.clone(c.right);
    this.up = _glMatrix.vec3.clone(c.up);
    this.forward = _glMatrix.vec3.clone(c.forward);
    this.position = _glMatrix.vec3.clone(c.position);
    this.focalPoint = _glMatrix.vec3.clone(c.focalPoint);
    this.distanceVector = _glMatrix.vec3.clone(c.distanceVector);
    this.azimuth = c.azimuth;
    this.elevation = c.elevation;
    this.roll = c.roll;
    this.relAzimuth = c.relAzimuth;
    this.relElevation = c.relElevation;
    this.relRoll = c.relRoll;
    this.dollyingStep = c.dollyingStep;
    this.distance = c.distance;
  }

  (0, _createClass2.default)(Landmark, [{
    key: "getPosition",
    value: function getPosition() {
      return this.position;
    }
  }, {
    key: "getFocalPoint",
    value: function getFocalPoint() {
      return this.focalPoint;
    }
  }, {
    key: "getRoll",
    value: function getRoll() {
      return this.roll;
    }
  }, {
    key: "retrieve",
    value: function retrieve(c) {
      c.matrix = _glMatrix.mat4.copy(c.matrix, this.matrix);
      c.right = _glMatrix.vec3.copy(c.right, this.right);
      c.up = _glMatrix.vec3.copy(c.up, this.up);
      c.forward = _glMatrix.vec3.copy(c.forward, this.forward);
      c.position = _glMatrix.vec3.copy(c.position, this.position);
      c.focalPoint = _glMatrix.vec3.copy(c.focalPoint, this.focalPoint);
      c.distanceVector = _glMatrix.vec3.copy(c.distanceVector, this.distanceVector);
      c.azimuth = this.azimuth;
      c.elevation = this.elevation;
      c.roll = this.roll;
      c.relAzimuth = this.relAzimuth;
      c.relElevation = this.relElevation;
      c.relRoll = this.relRoll;
      c.dollyingStep = this.dollyingStep;
      c.distance = this.distance;
    }
  }]);
  return Landmark;
}();

exports.default = Landmark;
//# sourceMappingURL=Landmark.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356531, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Geometry = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var _inversify = require("inversify");

var _dec, _dec2, _class, _class2, _descriptor, _class3, _temp;

var Geometry = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_gWebgpuCore.IDENTIFIER.GeometryComponentManager), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function () {
  function Geometry() {
    (0, _classCallCheck2.default)(this, Geometry);
    this.config = void 0;
    (0, _initializerDefineProperty2.default)(this, "geometry", _descriptor, this);
    this.entity = void 0;
    this.component = void 0;
  }

  (0, _createClass2.default)(Geometry, [{
    key: "getEntity",
    value: function getEntity() {
      return this.entity;
    }
  }, {
    key: "getComponent",
    value: function getComponent() {
      return this.component;
    }
  }, {
    key: "setConfig",
    value: function setConfig(config) {
      this.config = config;
    }
  }, {
    key: "setEntity",
    value: function setEntity(entity) {
      this.entity = entity;
      this.component = this.geometry.create(entity);
      this.component.entity = entity;
      this.onEntityCreated();
    }
  }, {
    key: "onEntityCreated",
    value: function onEntityCreated() {//
    }
  }]);
  return Geometry;
}(), _class3.BOX = 'box', _class3.SPHERE = 'sphere', _class3.PLANE = 'plane', _class3.MERGED = 'merged', _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "geometry", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.Geometry = Geometry;
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356532, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Kernel = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var WebGPUConstants = _interopRequireWildcard(require("@webgpu/types/dist/constants"));

var _inversify = require("inversify");

var _canvas = require("./utils/canvas");

var _isArray = _interopRequireDefault(require("./utils/is-array"));

var _isNumber = require("./utils/is-number");

var _isTypedarray = require("./utils/is-typedarray");

var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Kernel = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_gWebgpuCore.IDENTIFIER.RenderEngine), _dec3 = (0, _inversify.inject)(_gWebgpuCore.IDENTIFIER.ConfigService), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function () {
  function Kernel() {
    (0, _classCallCheck2.default)(this, Kernel);
    (0, _initializerDefineProperty2.default)(this, "engine", _descriptor, this);
    (0, _initializerDefineProperty2.default)(this, "configService", _descriptor2, this);
    this.entity = (0, _gWebgpuCore.createEntity)();
    this.model = void 0;
    this.dirty = true;
    this.compiledBundle = void 0;
    this.initPromise = void 0;
  }

  (0, _createClass2.default)(Kernel, [{
    key: "init",
    value: function init() {
      var _this$configService$g = this.configService.get(),
          canvas = _this$configService$g.canvas,
          engineOptions = _this$configService$g.engineOptions;

      this.initPromise = this.engine.init(_objectSpread({
        canvas: canvas || (0, _canvas.createCanvas)(),
        swapChainFormat: WebGPUConstants.TextureFormat.BGRA8Unorm,
        antialiasing: false
      }, engineOptions));
    }
  }, {
    key: "setBundle",
    value: function setBundle(bundle) {
      // deep clone
      this.compiledBundle = JSON.parse(JSON.stringify(bundle));
    }
  }, {
    key: "setDispatch",
    value: function setDispatch(dispatch) {
      if (this.compiledBundle.context) {
        this.compiledBundle.context.dispatch = dispatch;
      }

      return this;
    }
  }, {
    key: "setMaxIteration",
    value: function setMaxIteration(maxIteration) {
      if (this.compiledBundle.context) {
        this.compiledBundle.context.maxIteration = maxIteration;
      }

      return this;
    }
  }, {
    key: "setBinding",
    value: function setBinding(name, data) {
      var _this = this;

      if (typeof name === 'string') {
        var isNumberLikeData = (0, _isNumber.isNumber)(data) || (0, _isTypedarray.isTypedArray)(data) || (0, _isArray.default)(data);

        if (this.compiledBundle && this.compiledBundle.context) {
          // set define, eg. setBinding('MAX_LENGTH', 10)
          var existedDefine = this.compiledBundle.context.defines.find(function (b) {
            return b.name === name;
          });

          if (existedDefine) {
            existedDefine.value = data;
            return this;
          } // set uniform


          var existedBinding = this.compiledBundle.context.uniforms.find(function (b) {
            return b.name === name;
          });

          if (existedBinding) {
            // update uniform or buffer
            if (isNumberLikeData) {
              // @ts-ignore
              existedBinding.data = data;
              existedBinding.isReferer = false;

              if (existedBinding.storageClass === _gWebgpuCore.STORAGE_CLASS.Uniform) {
                if (this.model) {
                  // @ts-ignore
                  this.model.updateUniform(name, data);
                }
              } else {
                if (this.model) {
                  // @ts-ignore
                  this.model.updateBuffer(name, data);
                }
              }
            } else {
              // update with another kernel
              existedBinding.isReferer = true; // @ts-ignore

              existedBinding.data = data;
            }
          }
        }
      } else {
        Object.keys(name).forEach(function (key) {
          _this.setBinding(key, name[key]);
        });
      }

      return this;
    }
  }, {
    key: "execute",
    value: function () {
      var _execute = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _this2 = this;

        var iteration,
            i,
            _args = arguments;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                iteration = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;

                if (!this.dirty) {
                  _context.next = 6;
                  break;
                }

                if (this.compiledBundle.context) {
                  if (iteration > 1) {
                    this.compiledBundle.context.maxIteration = iteration;
                  } else {
                    this.compiledBundle.context.maxIteration++;
                  }
                }

                _context.next = 5;
                return this.compile();

              case 5:
                this.dirty = false;

              case 6:
                this.engine.beginFrame(); // 首先开启当前 frame 的 compute pass

                this.engine.clear({});

                if (this.compiledBundle.context) {
                  this.compiledBundle.context.uniforms.filter(function (_ref) {
                    var isReferer = _ref.isReferer;
                    return isReferer;
                  }).forEach(function (_ref2) {
                    var data = _ref2.data,
                        name = _ref2.name;

                    // @ts-ignore
                    _this2.model.confirmInput(data.model, name);
                  });
                }

                for (i = 0; i < iteration; i++) {
                  this.model.run();
                }

                this.engine.endFrame();
                return _context.abrupt("return", this);

              case 12:
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
    /**
     * read output from GPUBuffer
     */

  }, {
    key: "getOutput",
    value: function () {
      var _getOutput = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.model.readData());

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getOutput() {
        return _getOutput.apply(this, arguments);
      }

      return getOutput;
    }()
  }, {
    key: "compile",
    value: function () {
      var _compile = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var context, target, shader;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.initPromise;

              case 2:
                context = _objectSpread({}, this.compiledBundle.context);
                target = this.engine.supportWebGPU ? this.engine.useWGSL ? _gWebgpuCore.Target.WGSL : _gWebgpuCore.Target.GLSL450 : _gWebgpuCore.Target.GLSL100;
                shader = this.compiledBundle.shaders[target]; // this.bindings?.forEach(({ name, data }) => {
                //   if (name === name.toUpperCase()) {
                //     const define = context.defines.find((d) => d.name === name);
                //     if (define) {
                //       // @ts-ignore
                //       define.value = data;
                //     }
                //   }
                // });
                // 生成运行时 define

                context.defines.filter(function (define) {
                  return define.runtime;
                }).forEach(function (define) {
                  var valuePlaceHolder = "".concat(_gWebgpuCore.DefineValuePlaceholder).concat(define.name);
                  shader = shader.replace(valuePlaceHolder, "".concat(define.value));
                });
                context.shader = shader; // 添加 uniform 绑定的数据

                context.uniforms.forEach(function (uniform) {
                  // const binding = this.bindings.find((b) => b.name === uniform.name);
                  // if (binding) {
                  //   // @ts-ignore
                  //   uniform.data = binding.referer || binding.data;
                  //   // @ts-ignore
                  //   uniform.isReferer = !!binding.referer;
                  // }
                  // 未指定数据，尝试根据 uniform 类型初始化
                  if (!uniform.data) {
                    if (uniform.storageClass === _gWebgpuCore.STORAGE_CLASS.StorageBuffer) {
                      var sizePerElement = 1;

                      if (uniform.type === _gWebgpuCore.AST_TOKEN_TYPES.FloatArray) {
                        sizePerElement = 1;
                      } else if (uniform.type === _gWebgpuCore.AST_TOKEN_TYPES.Vector4FloatArray) {
                        sizePerElement = 4;
                      }

                      uniform.data = new Float32Array(context.output.length * sizePerElement).fill(0);
                    }
                  }
                }); // } else if (uniform.type === 'image2D') {
                //   // @ts-ignore
                //   buffer.data = new Uint8ClampedArray(context.output.length!).fill(0);
                // }

                this.compiledBundle.context = context;
                _context3.next = 11;
                return this.engine.createComputeModel(this.compiledBundle.context);

              case 11:
                this.model = _context3.sent;

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function compile() {
        return _compile.apply(this, arguments);
      }

      return compile;
    }()
  }]);
  return Kernel;
}(), _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "engine", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "configService", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.Kernel = Kernel;
//# sourceMappingURL=Kernel.js.map
}, function(modId) { var map = {"./utils/canvas":1679470356533,"./utils/is-array":1679470356534,"./utils/is-number":1679470356529,"./utils/is-typedarray":1679470356536}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356533, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCanvas = createCanvas;

function createCanvas() {
  if (typeof document !== 'undefined') {
    return document.createElement('canvas');
  } else {
    throw new Error('Cannot create a canvas in this context');
  }
}
//# sourceMappingURL=canvas.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356534, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isType = _interopRequireDefault(require("./is-type"));

var _default = function _default(value) {
  return Array.isArray ? Array.isArray(value) : (0, _isType.default)(value, 'Array');
};

exports.default = _default;
//# sourceMappingURL=is-array.js.map
}, function(modId) { var map = {"./is-type":1679470356535}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356535, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var toString = {}.toString;

var isType = function isType(value, type) {
  return toString.call(value) === '[object ' + type + ']';
};

var _default = isType;
exports.default = _default;
//# sourceMappingURL=is-type.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356536, function(require, module, exports) {


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
__DEFINE__(1679470356537, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Material = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var _inversify = require("inversify");

var _dec, _dec2, _class, _class2, _descriptor, _class3, _temp;

var Material = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_gWebgpuCore.IDENTIFIER.MaterialComponentManager), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function () {
  function Material() {
    (0, _classCallCheck2.default)(this, Material);
    this.config = void 0;
    (0, _initializerDefineProperty2.default)(this, "material", _descriptor, this);
    this.entity = void 0;
    this.component = void 0;
  }

  (0, _createClass2.default)(Material, [{
    key: "getEntity",
    value: function getEntity() {
      return this.entity;
    }
  }, {
    key: "getComponent",
    value: function getComponent() {
      return this.component;
    }
  }, {
    key: "setConfig",
    value: function setConfig(config) {
      this.config = config;
    }
  }, {
    key: "setEntity",
    value: function setEntity(entity, type) {
      this.entity = entity;
      this.component = this.material.create(entity);
      this.component.entity = entity;
      this.component.type = type;
      this.onEntityCreated();
    }
  }, {
    key: "onEntityCreated",
    value: function onEntityCreated() {//
    }
  }]);
  return Material;
}(), _class3.BASIC = 'basic', _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "material", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.Material = Material;
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356538, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Renderable = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var _inversify = require("inversify");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _temp;

var Renderable = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_gWebgpuCore.IDENTIFIER.MeshComponentManager), _dec3 = (0, _inversify.inject)(_gWebgpuCore.IDENTIFIER.CullableComponentManager), _dec4 = (0, _inversify.inject)(_gWebgpuCore.IDENTIFIER.TransformComponentManager), _dec5 = (0, _inversify.inject)(_gWebgpuCore.IDENTIFIER.Systems), _dec6 = (0, _inversify.named)(_gWebgpuCore.IDENTIFIER.SceneGraphSystem), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function () {
  function Renderable() {
    (0, _classCallCheck2.default)(this, Renderable);
    this.attributes = {};
    this.config = void 0;
    (0, _initializerDefineProperty2.default)(this, "mesh", _descriptor, this);
    (0, _initializerDefineProperty2.default)(this, "cullable", _descriptor2, this);
    (0, _initializerDefineProperty2.default)(this, "transform", _descriptor3, this);
    (0, _initializerDefineProperty2.default)(this, "sceneGraphSystem", _descriptor4, this);
    this.meshComponent = void 0;
    this.transformComponent = void 0;
    this.entity = void 0;
  }

  (0, _createClass2.default)(Renderable, [{
    key: "getEntity",
    value: function getEntity() {
      return this.entity;
    }
  }, {
    key: "getTransformComponent",
    value: function getTransformComponent() {
      return this.transformComponent;
    }
  }, {
    key: "getMeshComponent",
    value: function getMeshComponent() {
      return this.meshComponent;
    }
  }, {
    key: "setConfig",
    value: function setConfig(config) {
      this.config = config;
    }
  }, {
    key: "setEntity",
    value: function setEntity(entity) {
      this.entity = entity;
      this.cullable.create(entity);
      this.meshComponent = this.mesh.create(entity);
      this.transformComponent = this.transform.create(entity);
      this.onEntityCreated();
    }
  }, {
    key: "setMaterial",
    value: function setMaterial(material) {
      this.meshComponent.material = material;
      return this;
    }
  }, {
    key: "setGeometry",
    value: function setGeometry(geometry) {
      this.meshComponent.geometry = geometry;
      return this;
    }
  }, {
    key: "setAttributes",
    value: function setAttributes(attributes) {
      var _this = this;

      Object.keys(attributes).forEach(function (name) {
        if (attributes[name] !== undefined && attributes[name] !== _this.attributes[name]) {
          _this.onAttributeChanged({
            name: name,
            data: attributes[name]
          });

          _this.attributes[name] = attributes[name];
        }
      });
    }
  }, {
    key: "setVisible",
    value: function setVisible(visible) {
      var _this2 = this;

      this.meshComponent.visible = visible;
      this.meshComponent.children.forEach(function (childEntity) {
        var child = _this2.mesh.getComponentByEntity(childEntity);

        if (child) {
          child.visible = visible;
        }
      });
      return this;
    }
  }, {
    key: "isVisible",
    value: function isVisible() {
      return this.meshComponent.visible;
    }
  }, {
    key: "attach",
    value: function attach(parentRenderable) {
      this.sceneGraphSystem.attach(this.entity, parentRenderable.entity);
      return this;
    }
  }, {
    key: "detach",
    value: function detach() {
      this.sceneGraphSystem.detach(this.entity);
      return this;
    }
  }, {
    key: "detachChildren",
    value: function detachChildren() {
      this.sceneGraphSystem.detachChildren(this.entity);
      return this;
    }
  }, {
    key: "onEntityCreated",
    value: function onEntityCreated() {//
    }
  }, {
    key: "onAttributeChanged",
    value: function onAttributeChanged(_ref) {
      var name = _ref.name,
          data = _ref.data;

      if (this.meshComponent && this.meshComponent.material) {
        this.meshComponent.material.setUniform(this.convertAttributeName2UniformName(name), data);
      }
    }
  }, {
    key: "convertAttributeName2UniformName",
    value: function convertAttributeName2UniformName(attributeName) {
      return attributeName;
    }
  }]);
  return Renderable;
}(), _class3.POINT = 'point', _class3.LINE = 'line', _class3.GRID = 'grid', _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "mesh", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "cullable", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "transform", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "sceneGraphSystem", [_dec5, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.Renderable = Renderable;
//# sourceMappingURL=Renderable.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356539, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.World = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var _gWebgpuEngine = require("@antv/g-webgpu-engine");

var WebGPUConstants = _interopRequireWildcard(require("@webgpu/types/dist/constants"));

var _inversify = require("inversify");

var _Camera = require("./camera/Camera");

var _geometry = require("./geometry");

var _Box = require("./geometry/Box");

var _Merged = require("./geometry/Merged");

var _Plane = require("./geometry/Plane");

var _Sphere = require("./geometry/Sphere");

var _Kernel = require("./Kernel");

var _material = require("./material");

var _basic = require("./material/basic");

var _grid = require("./renderable/grid");

var _line = require("./renderable/line");

var _point = require("./renderable/point");

var _Renderable = require("./renderable/Renderable");

var _Renderer = require("./Renderer");

var _Scene = require("./Scene");

var _Cache = require("./texture/Cache");

var _Texture2D = require("./texture/Texture2D");

var _canvas = require("./utils/canvas");

var _View = require("./View");

var _dec, _dec2, _class, _class2, _descriptor, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var World = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_gWebgpuCore.IDENTIFIER.ConfigService), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function () {
  function World() {
    (0, _classCallCheck2.default)(this, World);
    (0, _initializerDefineProperty2.default)(this, "configService", _descriptor, this);
    this.container = void 0;
  }

  (0, _createClass2.default)(World, [{
    key: "getEngine",
    value: function () {
      var _getEngine = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var engine, _this$configService$g, canvas, engineOptions;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                engine = this.container.get(_gWebgpuCore.IDENTIFIER.RenderEngine);
                _this$configService$g = this.configService.get(), canvas = _this$configService$g.canvas, engineOptions = _this$configService$g.engineOptions;
                _context.next = 4;
                return engine.init(_objectSpread({
                  canvas: canvas || (0, _canvas.createCanvas)(),
                  swapChainFormat: WebGPUConstants.TextureFormat.BGRA8Unorm,
                  antialiasing: false
                }, engineOptions));

              case 4:
                return _context.abrupt("return", engine);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getEngine() {
        return _getEngine.apply(this, arguments);
      }

      return getEngine;
    }()
    /**
     * get transform component
     * @param entity
     */

  }, {
    key: "getTransformComponent",
    value: function getTransformComponent(entity) {
      var manager = this.container.get(_gWebgpuCore.IDENTIFIER.TransformComponentManager);
      return manager.getComponentByEntity(entity);
    }
  }, {
    key: "getMeshComponent",
    value: function getMeshComponent(entity) {
      var manager = this.container.get(_gWebgpuCore.IDENTIFIER.MeshComponentManager);
      return manager.getComponentByEntity(entity);
    }
  }, {
    key: "setConfig",
    value: function setConfig(config) {
      this.configService.set(config);
    }
  }, {
    key: "setContainer",
    value: function setContainer(container) {
      this.container = container;
    }
  }, {
    key: "getContainer",
    value: function getContainer() {
      return this.container;
    }
  }, {
    key: "createEntity",
    value: function createEntity() {
      return (0, _gWebgpuCore.createEntity)();
    }
  }, {
    key: "createScene",
    value: function createScene() {
      return this.container.get(_Scene.Scene);
    }
  }, {
    key: "createCamera",
    value: function createCamera() {
      return this.container.get(_Camera.Camera);
    }
  }, {
    key: "createView",
    value: function createView() {
      return this.container.get(_View.View);
    } // public createLight(type: string,) {
    //   return this.container.getNamed(IDENTIFIER.Light, type)
    // }

  }, {
    key: "createRenderable",
    value: function createRenderable(type, config) {
      var renderable = type ? this.container.getNamed(_gWebgpuCore.IDENTIFIER.Renderable, type) : this.container.get(_Renderable.Renderable);
      var entity = (0, _gWebgpuCore.createEntity)();
      renderable.setConfig(config || {});
      renderable.setEntity(entity);
      return renderable;
    }
  }, {
    key: "createGeometry",
    value: function createGeometry(type, config) {
      var geometry = this.container.getNamed(_gWebgpuCore.IDENTIFIER.Geometry, type);
      var entity = (0, _gWebgpuCore.createEntity)();
      geometry.setConfig(config || {});
      geometry.setEntity(entity);
      return geometry.getComponent();
    }
  }, {
    key: "createMaterial",
    value: function createMaterial(type, config) {
      var material = this.container.getNamed(_gWebgpuCore.IDENTIFIER.Material, type);
      var entity = (0, _gWebgpuCore.createEntity)();
      material.setConfig(config || {});
      material.setEntity(entity, type);
      return material.getComponent();
    }
  }, {
    key: "createTexture2D",
    value: function createTexture2D(config) {
      var texture = this.container.get(_Texture2D.Texture2D);
      texture.setConfig(config);
      return texture;
    }
  }, {
    key: "createBufferGeometry",
    value: function createBufferGeometry(params) {
      var geometrySystem = this.container.getNamed(_gWebgpuCore.IDENTIFIER.Systems, _gWebgpuCore.IDENTIFIER.GeometrySystem);
      return geometrySystem.createBufferGeometry(params);
    }
  }, {
    key: "createInstancedBufferGeometry",
    value: function createInstancedBufferGeometry(params) {
      var geometrySystem = this.container.getNamed(_gWebgpuCore.IDENTIFIER.Systems, _gWebgpuCore.IDENTIFIER.GeometrySystem);
      return geometrySystem.createInstancedBufferGeometry(params);
    }
  }, {
    key: "createShaderMaterial",
    value: function createShaderMaterial(params) {
      var materialSystem = this.container.getNamed(_gWebgpuCore.IDENTIFIER.Systems, _gWebgpuCore.IDENTIFIER.MaterialSystem);
      return materialSystem.createShaderMaterial(params);
    }
  }, {
    key: "createKernel",
    value: function createKernel(precompiledBundle) {
      var kernel = this.container.get(_Kernel.Kernel);

      if (typeof precompiledBundle === 'string') {
        kernel.setBundle(JSON.parse(precompiledBundle));
      } else {
        kernel.setBundle(precompiledBundle);
      }

      kernel.init();
      return kernel;
    }
  }, {
    key: "createRenderer",
    value: function createRenderer() {
      var renderer = this.container.get(_Renderer.Renderer);
      renderer.container = this.container;
      renderer.init();
      return renderer;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var systems = this.container.getAll(_gWebgpuCore.IDENTIFIER.Systems);
      systems.forEach(function (system) {
        if (system.tearDown) {
          system.tearDown();
        }
      });
      var engine = this.container.get(_gWebgpuCore.IDENTIFIER.RenderEngine);
      engine.destroy();
      var interactor = this.container.get(_gWebgpuCore.IDENTIFIER.InteractorService);
      interactor.destroy();
    }
  }], [{
    key: "create",
    value: function create() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var worldContainer = (0, _gWebgpuCore.createWorldContainer)(); // bind render engine, fallback to WebGL

      var engineClazz = !navigator.gpu ? _gWebgpuEngine.WebGLEngine : _gWebgpuEngine.WebGPUEngine;

      if (!worldContainer.isBound(_gWebgpuCore.IDENTIFIER.RenderEngine)) {
        worldContainer.bind(_gWebgpuCore.IDENTIFIER.RenderEngine) // @ts-ignore
        .to(engineClazz).inSingletonScope();
      }

      worldContainer.bind(_Renderer.Renderer).toSelf();
      worldContainer.bind(_Kernel.Kernel).toSelf();
      worldContainer.bind(_Renderable.Renderable).toSelf();
      worldContainer.bind(_View.View).toSelf();
      worldContainer.bind(_Camera.Camera).toSelf();
      worldContainer.bind(_Scene.Scene).toSelf();
      worldContainer.bind(World).toSelf();
      worldContainer.bind(_Cache.TextureCache).toSelf();
      worldContainer.bind(_Texture2D.Texture2D).toSelf(); // bind geometries

      worldContainer.bind(_gWebgpuCore.IDENTIFIER.Geometry).to(_Box.Box).whenTargetNamed(_geometry.Geometry.BOX);
      worldContainer.bind(_gWebgpuCore.IDENTIFIER.Geometry).to(_Sphere.Sphere).whenTargetNamed(_geometry.Geometry.SPHERE);
      worldContainer.bind(_gWebgpuCore.IDENTIFIER.Geometry).to(_Plane.Plane).whenTargetNamed(_geometry.Geometry.PLANE);
      worldContainer.bind(_gWebgpuCore.IDENTIFIER.Geometry).to(_Merged.Merged).whenTargetNamed(_geometry.Geometry.MERGED); // bind materials

      worldContainer.bind(_gWebgpuCore.IDENTIFIER.Material).to(_basic.Basic).whenTargetNamed(_material.Material.BASIC); // bind renderables

      worldContainer.bind(_gWebgpuCore.IDENTIFIER.Renderable).to(_point.Point).whenTargetNamed(_Renderable.Renderable.POINT);
      worldContainer.bind(_gWebgpuCore.IDENTIFIER.Renderable).to(_line.Line).whenTargetNamed(_Renderable.Renderable.LINE);
      worldContainer.bind(_gWebgpuCore.IDENTIFIER.Renderable).to(_grid.Grid).whenTargetNamed(_Renderable.Renderable.GRID);
      var world = worldContainer.get(World);
      world.setContainer(worldContainer);
      world.setConfig(config);
      return world;
    }
  }]);
  return World;
}(), _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "configService", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.World = World;
//# sourceMappingURL=World.js.map
}, function(modId) { var map = {"./camera/Camera":1679470356527,"./geometry":1679470356531,"./geometry/Box":1679470356540,"./geometry/Merged":1679470356541,"./geometry/Plane":1679470356543,"./geometry/Sphere":1679470356544,"./Kernel":1679470356532,"./material":1679470356537,"./material/basic":1679470356545,"./renderable/grid":1679470356546,"./renderable/line":1679470356547,"./renderable/point":1679470356549,"./renderable/Renderable":1679470356538,"./Renderer":1679470356551,"./Scene":1679470356552,"./texture/Cache":1679470356553,"./texture/Texture2D":1679470356554,"./utils/canvas":1679470356533,"./View":1679470356555}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356540, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Box = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var _glMatrix = require("gl-matrix");

var _inversify = require("inversify");

var _ = require(".");

var _dec, _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var primitiveUv1Padding = 4.0 / 64;
var primitiveUv1PaddingScale = 1.0 - primitiveUv1Padding * 2;
var
/**
 * borrow from playcanvas:
 * Creates a procedural box-shaped mesh
 */
Box = (_dec = (0, _inversify.injectable)(), _dec(_class = /*#__PURE__*/function (_Geometry) {
  (0, _inherits2.default)(Box, _Geometry);

  var _super = _createSuper(Box);

  function Box() {
    (0, _classCallCheck2.default)(this, Box);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Box, [{
    key: "onEntityCreated",
    value: function onEntityCreated() {
      var _this$config = this.config,
          _this$config$widthSeg = _this$config.widthSegments,
          widthSegments = _this$config$widthSeg === void 0 ? 1 : _this$config$widthSeg,
          _this$config$heightSe = _this$config.heightSegments,
          heightSegments = _this$config$heightSe === void 0 ? 1 : _this$config$heightSe,
          _this$config$depthSeg = _this$config.depthSegments,
          depthSegments = _this$config$depthSeg === void 0 ? 1 : _this$config$depthSeg,
          _this$config$halfExte = _this$config.halfExtents,
          halfExtents = _this$config$halfExte === void 0 ? _glMatrix.vec3.fromValues(0.5, 0.5, 0.5) : _this$config$halfExte;
      var ws = widthSegments;
      var hs = heightSegments;
      var ds = depthSegments;

      var _halfExtents = (0, _slicedToArray2.default)(halfExtents, 3),
          hex = _halfExtents[0],
          hey = _halfExtents[1],
          hez = _halfExtents[2];

      var corners = [_glMatrix.vec3.fromValues(-hex, -hey, hez), _glMatrix.vec3.fromValues(hex, -hey, hez), _glMatrix.vec3.fromValues(hex, hey, hez), _glMatrix.vec3.fromValues(-hex, hey, hez), _glMatrix.vec3.fromValues(hex, -hey, -hez), _glMatrix.vec3.fromValues(-hex, -hey, -hez), _glMatrix.vec3.fromValues(-hex, hey, -hez), _glMatrix.vec3.fromValues(hex, hey, -hez)];
      var faceAxes = [[0, 1, 3], // FRONT
      [4, 5, 7], // BACK
      [3, 2, 6], // TOP
      [1, 0, 4], // BOTTOM
      [1, 4, 2], // RIGHT
      [5, 0, 6] // LEFT
      ];
      var faceNormals = [[0, 0, 1], // FRONT
      [0, 0, -1], // BACK
      [0, 1, 0], // TOP
      [0, -1, 0], // BOTTOM
      [1, 0, 0], // RIGHT
      [-1, 0, 0] // LEFT
      ];
      var sides = {
        FRONT: 0,
        BACK: 1,
        TOP: 2,
        BOTTOM: 3,
        RIGHT: 4,
        LEFT: 5
      };
      var positions = [];
      var normals = [];
      var uvs = [];
      var uvs1 = [];
      var indices = [];
      var vcounter = 0;

      var generateFace = function generateFace(side, uSegments, vSegments) {
        var u;
        var v;
        var i;
        var j;

        for (i = 0; i <= uSegments; i++) {
          for (j = 0; j <= vSegments; j++) {
            var temp1 = _glMatrix.vec3.create();

            var temp2 = _glMatrix.vec3.create();

            var temp3 = _glMatrix.vec3.create();

            var r = _glMatrix.vec3.create();

            _glMatrix.vec3.lerp(temp1, corners[faceAxes[side][0]], corners[faceAxes[side][1]], i / uSegments);

            _glMatrix.vec3.lerp(temp2, corners[faceAxes[side][0]], corners[faceAxes[side][2]], j / vSegments);

            _glMatrix.vec3.sub(temp3, temp2, corners[faceAxes[side][0]]);

            _glMatrix.vec3.add(r, temp1, temp3);

            u = i / uSegments;
            v = j / vSegments;
            positions.push(r[0], r[1], r[2]);
            normals.push(faceNormals[side][0], faceNormals[side][1], faceNormals[side][2]);
            uvs.push(u, v); // pack as 3x2
            // 1/3 will be empty, but it's either that or stretched pixels
            // TODO: generate non-rectangular lightMaps, so we could use space without stretching

            u /= 3;
            v /= 3;
            u = u * primitiveUv1PaddingScale + primitiveUv1Padding;
            v = v * primitiveUv1PaddingScale + primitiveUv1Padding;
            u += side % 3 / 3;
            v += Math.floor(side / 3) / 3;
            uvs1.push(u, v);

            if (i < uSegments && j < vSegments) {
              indices.push(vcounter + vSegments + 1, vcounter + 1, vcounter);
              indices.push(vcounter + vSegments + 1, vcounter + vSegments + 2, vcounter + 1);
            }

            vcounter++;
          }
        }
      };

      generateFace(sides.FRONT, ws, hs);
      generateFace(sides.BACK, ws, hs);
      generateFace(sides.TOP, ws, ds);
      generateFace(sides.BOTTOM, ws, ds);
      generateFace(sides.RIGHT, ds, hs);
      generateFace(sides.LEFT, ds, hs); // generate AABB

      var aabb = (0, _gWebgpuCore.generateAABBFromVertices)(positions);
      var component = this.getComponent();
      component.indices = Uint32Array.from(indices);
      component.aabb = aabb;
      component.vertexCount = vcounter;
      component.attributes = [{
        dirty: true,
        name: 'position',
        data: Float32Array.from(positions),
        arrayStride: 4 * 3,
        stepMode: 'vertex',
        attributes: [{
          shaderLocation: 0,
          offset: 0,
          format: 'float3'
        }]
      }, {
        dirty: true,
        name: 'normal',
        data: Float32Array.from(normals),
        arrayStride: 4 * 3,
        stepMode: 'vertex',
        attributes: [{
          shaderLocation: 1,
          offset: 0,
          format: 'float3'
        }]
      }, {
        dirty: true,
        name: 'uv',
        data: Float32Array.from(uvs),
        arrayStride: 4 * 2,
        stepMode: 'vertex',
        attributes: [{
          shaderLocation: 2,
          offset: 0,
          format: 'float2'
        }]
      }]; // TODO: barycentric & tangent
    }
  }]);
  return Box;
}(_.Geometry)) || _class);
exports.Box = Box;
//# sourceMappingURL=Box.js.map
}, function(modId) { var map = {".":1679470356531}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356541, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Merged = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var _inversify = require("inversify");

var _ = require(".");

var _isNumber = require("../utils/is-number");

var _isTypedarray = require("../utils/is-typedarray");

var _typedarray = require("../utils/typedarray");

var _dec, _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var
/**
 * merge many geometries into one, use a batch of draw calls
 */
Merged = (_dec = (0, _inversify.injectable)(), _dec(_class = /*#__PURE__*/function (_Geometry) {
  (0, _inherits2.default)(Merged, _Geometry);

  var _super = _createSuper(Merged);

  function Merged() {
    (0, _classCallCheck2.default)(this, Merged);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Merged, [{
    key: "onEntityCreated",
    value: function onEntityCreated() {
      var _this$config$geometri = this.config.geometries,
          geometries = _this$config$geometri === void 0 ? [] : _this$config$geometri;
      var mergedComponent = this.getComponent();
      mergedComponent.aabb = new _gWebgpuCore.AABB();
      var mergedAttributes = [];
      var mergedIndices = [];
      var indexOffset = 0;
      geometries.forEach(function (geometry) {
        var aabb = geometry.aabb,
            indices = geometry.indices,
            vertexCount = geometry.vertexCount,
            attributes = geometry.attributes; // merge aabb

        mergedComponent.aabb.add(aabb);
        mergedComponent.vertexCount += vertexCount; // merge indices

        if (indices) {
          mergedIndices.push.apply(mergedIndices, (0, _toConsumableArray2.default)(indices.map(function (index) {
            return index + indexOffset;
          })));
        }

        indexOffset += vertexCount; // merge attributes

        attributes.forEach(function (attribute, i) {
          if (!mergedAttributes[i]) {
            mergedAttributes[i] = attribute;
            mergedAttributes[i].dirty = true;
          } else {
            if (attribute.data) {
              if ((0, _isNumber.isNumber)(attribute.data)) {
                // @ts-ignore
                mergedAttributes[i].push(attribute.data);
              } else if ((0, _isTypedarray.isTypedArray)(attribute.data)) {
                // @ts-ignore
                mergedAttributes[i].data = (0, _typedarray.merge)( // @ts-ignore
                mergedAttributes[i].data, attribute.data);
              } else {
                // @ts-ignore
                mergedAttributes[i].data = mergedAttributes[i].data.concat(attribute.data);
              }
            }
          }
        });
      });
      mergedComponent.attributes = mergedAttributes;
      mergedComponent.indices = Uint32Array.from(mergedIndices);
      mergedComponent.dirty = true;
    }
  }]);
  return Merged;
}(_.Geometry)) || _class);
exports.Merged = Merged;
//# sourceMappingURL=Merged.js.map
}, function(modId) { var map = {".":1679470356531,"../utils/is-number":1679470356529,"../utils/is-typedarray":1679470356536,"../utils/typedarray":1679470356542}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356542, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.merge = merge;

function merge(a, b) {
  // Checks for truthy values on both arrays
  if (!a && !b) {
    throw new Error('Please specify valid arguments for parameters a and b.');
  } // Checks for truthy values or empty arrays on each argument
  // to avoid the unnecessary construction of a new array and
  // the type comparison


  if (!b || b.length === 0) {
    return a;
  }

  if (!a || a.length === 0) {
    return b;
  } // Make sure that both typed arrays are of the same type


  if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
    throw new Error('The types of the two arguments passed for parameters a and b do not match.');
  } // @ts-ignore


  var c = new a.constructor(a.length + b.length);
  c.set(a);
  c.set(b, a.length);
  return c;
}
//# sourceMappingURL=typedarray.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356543, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Plane = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var _inversify = require("inversify");

var _ = require(".");

var _dec, _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var
/**
 * borrow from playcanvas
 */
Plane = (_dec = (0, _inversify.injectable)(), _dec(_class = /*#__PURE__*/function (_Geometry) {
  (0, _inherits2.default)(Plane, _Geometry);

  var _super = _createSuper(Plane);

  function Plane() {
    (0, _classCallCheck2.default)(this, Plane);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Plane, [{
    key: "onEntityCreated",
    value: function onEntityCreated() {
      var _this$config = this.config,
          _this$config$halfExte = _this$config.halfExtents,
          halfExtents = _this$config$halfExte === void 0 ? [0.5, 0.5] : _this$config$halfExte,
          _this$config$widthSeg = _this$config.widthSegments,
          widthSegments = _this$config$widthSeg === void 0 ? 5 : _this$config$widthSeg,
          _this$config$lengthSe = _this$config.lengthSegments,
          lengthSegments = _this$config$lengthSe === void 0 ? 5 : _this$config$lengthSe;
      var positions = [];
      var normals = [];
      var uvs = [];
      var indices = [];
      var vcounter = 0;

      for (var i = 0; i <= widthSegments; i++) {
        for (var j = 0; j <= lengthSegments; j++) {
          var x = -halfExtents[0] + 2.0 * halfExtents[0] * i / widthSegments;
          var y = 0.0;
          var z = -(-halfExtents[1] + 2.0 * halfExtents[1] * j / lengthSegments);
          var u = i / widthSegments;
          var v = j / lengthSegments;
          positions.push(x, y, z);
          normals.push(0.0, 1.0, 0.0);
          uvs.push(u, v);

          if (i < widthSegments && j < lengthSegments) {
            indices.push(vcounter + lengthSegments + 1, vcounter + 1, vcounter);
            indices.push(vcounter + lengthSegments + 1, vcounter + lengthSegments + 2, vcounter + 1);
          }

          vcounter++;
        }
      } // generate AABB


      var aabb = (0, _gWebgpuCore.generateAABBFromVertices)(positions);
      var component = this.getComponent();
      component.indices = Uint32Array.from(indices);
      component.aabb = aabb;
      component.vertexCount = vcounter;
      component.attributes = [{
        dirty: true,
        name: 'position',
        data: Float32Array.from(positions),
        arrayStride: 4 * 3,
        stepMode: 'vertex',
        attributes: [{
          shaderLocation: 0,
          offset: 0,
          format: 'float3'
        }]
      }, {
        dirty: true,
        name: 'normal',
        data: Float32Array.from(normals),
        arrayStride: 4 * 3,
        stepMode: 'vertex',
        attributes: [{
          shaderLocation: 1,
          offset: 0,
          format: 'float3'
        }]
      }, {
        dirty: true,
        name: 'uv',
        data: Float32Array.from(uvs),
        arrayStride: 4 * 2,
        stepMode: 'vertex',
        attributes: [{
          shaderLocation: 2,
          offset: 0,
          format: 'float2'
        }]
      }]; // TODO: barycentric & tangent
    }
  }]);
  return Plane;
}(_.Geometry)) || _class);
exports.Plane = Plane;
//# sourceMappingURL=Plane.js.map
}, function(modId) { var map = {".":1679470356531}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356544, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sphere = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var _inversify = require("inversify");

var _ = require(".");

var _dec, _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var
/**
 * borrow from playcanvas
 */
Sphere = (_dec = (0, _inversify.injectable)(), _dec(_class = /*#__PURE__*/function (_Geometry) {
  (0, _inherits2.default)(Sphere, _Geometry);

  var _super = _createSuper(Sphere);

  function Sphere() {
    (0, _classCallCheck2.default)(this, Sphere);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Sphere, [{
    key: "onEntityCreated",
    value: function onEntityCreated() {
      var _this$config = this.config,
          _this$config$radius = _this$config.radius,
          radius = _this$config$radius === void 0 ? 0.5 : _this$config$radius,
          _this$config$latitude = _this$config.latitudeBands,
          latitudeBands = _this$config$latitude === void 0 ? 16 : _this$config$latitude,
          _this$config$longitud = _this$config.longitudeBands,
          longitudeBands = _this$config$longitud === void 0 ? 16 : _this$config$longitud;
      var positions = [];
      var normals = [];
      var uvs = [];
      var indices = [];

      for (var lat = 0; lat <= latitudeBands; lat++) {
        var theta = lat * Math.PI / latitudeBands;
        var sinTheta = Math.sin(theta);
        var cosTheta = Math.cos(theta);

        for (var lon = 0; lon <= longitudeBands; lon++) {
          // Sweep the sphere from the positive Z axis to match a 3DS Max sphere
          var phi = lon * 2 * Math.PI / longitudeBands - Math.PI / 2.0;
          var sinPhi = Math.sin(phi);
          var cosPhi = Math.cos(phi);
          var x = cosPhi * sinTheta;
          var y = cosTheta;
          var z = sinPhi * sinTheta;
          var u = 1.0 - lon / longitudeBands;
          var v = 1.0 - lat / latitudeBands;
          positions.push(x * radius, y * radius, z * radius);
          normals.push(x, y, z);
          uvs.push(u, v);
        }
      }

      for (var _lat = 0; _lat < latitudeBands; ++_lat) {
        for (var _lon = 0; _lon < longitudeBands; ++_lon) {
          var first = _lat * (longitudeBands + 1) + _lon;
          var second = first + longitudeBands + 1;
          indices.push(first + 1, second, first);
          indices.push(first + 1, second + 1, second);
        }
      } // generate AABB


      var aabb = (0, _gWebgpuCore.generateAABBFromVertices)(positions);
      var component = this.getComponent();
      component.indices = Uint32Array.from(indices);
      component.aabb = aabb;
      component.vertexCount = positions.length / 3;
      component.attributes = [{
        dirty: true,
        name: 'position',
        data: Float32Array.from(positions),
        arrayStride: 4 * 3,
        stepMode: 'vertex',
        attributes: [{
          shaderLocation: 0,
          offset: 0,
          format: 'float3'
        }]
      }, {
        dirty: true,
        name: 'normal',
        data: Float32Array.from(normals),
        arrayStride: 4 * 3,
        stepMode: 'vertex',
        attributes: [{
          shaderLocation: 1,
          offset: 0,
          format: 'float3'
        }]
      }, {
        dirty: true,
        name: 'uv',
        data: Float32Array.from(uvs),
        arrayStride: 4 * 2,
        stepMode: 'vertex',
        attributes: [{
          shaderLocation: 2,
          offset: 0,
          format: 'float2'
        }]
      }]; // TODO: barycentric & tangent
    }
  }]);
  return Sphere;
}(_.Geometry)) || _class);
exports.Sphere = Sphere;
//# sourceMappingURL=Sphere.js.map
}, function(modId) { var map = {".":1679470356531}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356545, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basic = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var _glMatrix = require("gl-matrix");

var _inversify = require("inversify");

var _ = require("..");

var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/* babel-plugin-inline-import './shaders/webgl.basic.frag.glsl' */
var webglFragmentShaderGLSL = "varying vec4 fragColor;\n\n#pragma include \"uv.frag.declaration\"\n#pragma include \"map.frag.declaration\"\n\nvoid main() {\n  vec4 diffuseColor = fragColor;\n\n  #pragma include \"map.frag.main\"\n\n  gl_FragColor = diffuseColor;\n}";

/* babel-plugin-inline-import './shaders/webgl.basic.vert.glsl' */
var webglVertexShaderGLSL = "attribute vec3 position;\nattribute vec3 normal;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\nuniform vec4 color;\n\nvarying vec4 fragColor;\n\n#pragma include \"uv.vert.declaration\"\n\nvoid main() {\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  fragColor = color;\n\n  #pragma include \"uv.vert.main\"\n}";

/* babel-plugin-inline-import './shaders/webgpu.basic.frag.glsl' */
var webgpuFragmentShaderGLSL = "// layout(set = 0, binding = 1) uniform WireframeUniforms {\n//   float lineWidth;\n//   vec4 lineColor;\n// } wireframe;\n\nlayout(location = 0) in vec4 fragColor;\n// layout(location = 1) in vec3 v_Barycentric;\n\nlayout(location = 0) out vec4 outColor;\n\n// wireframe\n// float edgeFactor() {\n//   vec3 d = fwidth(v_Barycentric);\n//   vec3 a3 = smoothstep(vec3(0.0), d * wireframe.lineWidth, v_Barycentric);\n//   return min(min(a3.x, a3.y), a3.z);\n// }\n\nvoid main() {\n  // outColor = mix(fragColor, wireframe.lineColor, (1.0 - edgeFactor()));\n  outColor = fragColor;\n}";

/* babel-plugin-inline-import './shaders/webgpu.basic.vert.glsl' */
var webgpuVertexShaderGLSL = "layout(set = 0, binding = 0) uniform Uniforms {\n  vec4 color;\n  mat4 projectionMatrix;\n  mat4 modelViewMatrix;\n} uniforms;\n\nlayout(location = 0) in vec3 position;\n// layout(location = 1) in vec3 barycentric;\n\nlayout(location = 0) out vec4 fragColor;\n// layout(location = 1) out vec3 v_Barycentric;\n\nvoid main() {\n  gl_Position = uniforms.projectionMatrix * uniforms.modelViewMatrix * vec4(position, 1.0);\n  fragColor = uniforms.color;\n  // v_Barycentric = barycentric;\n}";
var
/**
 * This material is not affected by lights.
 * @see https://threejs.org/docs/#api/en/materials/MeshBasicMaterial
 */
Basic = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_gWebgpuCore.IDENTIFIER.RenderEngine), _dec3 = (0, _inversify.inject)(_gWebgpuCore.IDENTIFIER.ShaderModuleService), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Material) {
  (0, _inherits2.default)(Basic, _Material);

  var _super = _createSuper(Basic);

  function Basic() {
    var _this;

    (0, _classCallCheck2.default)(this, Basic);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _initializerDefineProperty2.default)(_this, "engine", _descriptor, (0, _assertThisInitialized2.default)(_this));
    (0, _initializerDefineProperty2.default)(_this, "shaderModuleService", _descriptor2, (0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Basic, [{
    key: "onEntityCreated",
    value: function onEntityCreated() {
      var component = this.getComponent();
      var vertexShaderGLSL = this.engine.supportWebGPU ? webgpuVertexShaderGLSL : webglVertexShaderGLSL;
      var fragmentShaderGLSL = this.engine.supportWebGPU ? webgpuFragmentShaderGLSL : webglFragmentShaderGLSL;
      this.shaderModuleService.registerModule('material-basic', {
        vs: vertexShaderGLSL,
        fs: fragmentShaderGLSL
      });

      var _this$shaderModuleSer = this.shaderModuleService.getModule('material-basic'),
          vs = _this$shaderModuleSer.vs,
          fs = _this$shaderModuleSer.fs,
          extractedUniforms = _this$shaderModuleSer.uniforms;

      component.vertexShaderGLSL = vs;
      component.fragmentShaderGLSL = fs; // @ts-ignore

      component.setUniform(extractedUniforms);

      if (this.config.map) {
        component.setDefines({
          USE_UV: 1,
          USE_MAP: 1
        });
        component.setUniform({
          // @ts-ignore
          map: this.config.map,
          uvTransform: _glMatrix.mat3.create()
        });
      }
    }
  }]);
  return Basic;
}(_.Material), _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "engine", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "shaderModuleService", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.Basic = Basic;
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"..":1679470356537}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356546, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var _inversify = require("inversify");

var _Renderable2 = require("../Renderable");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/* babel-plugin-inline-import './shaders/webgl.grid.frag.glsl' */
var gridFrag = "// generate grid, borrow from clay.gl viewer\n// @see https://github.com/pissang/clay-viewer/blob/master/src/graphic/ground.glsl\n#extension GL_OES_standard_derivatives : enable\n\nvarying vec3 v_Position;\n// varying vec3 v_Normal;\n\nuniform float u_GridSize : 5;\nuniform float u_GridSize2 : .5;\nuniform vec4 u_GridColor : [0, 0, 0, 1];\nuniform vec4 u_GridColor2 : [0.3, 0.3, 0.3, 1];\nuniform bool u_GridEnabled : true;\n\n// uniform vec3 u_LightDirection;\n// uniform vec3 u_LightColor;\n// uniform vec3 u_Camera;\n\nvoid main() {\n  // vec3 n = v_Normal;\n  // vec3 l = normalize(u_LightDirection);\n  // float NdotL = clamp(dot(n, l), 0.001, 1.0);\n\n  gl_FragColor = vec4(1.);\n\n  if (u_GridEnabled) {\n    float wx = v_Position.x;\n    float wz = v_Position.z;\n    // float x0 = abs(fract(wx / u_GridSize - 0.5) - 0.5) / fwidth(wx) * u_GridSize / 2.0;\n    // float z0 = abs(fract(wz / u_GridSize - 0.5) - 0.5) / fwidth(wz) * u_GridSize / 2.0;\n\n    float x1 = abs(fract(wx / u_GridSize2 - 0.5) - 0.5) / fwidth(wx) * u_GridSize2;\n    float z1 = abs(fract(wz / u_GridSize2 - 0.5) - 0.5) / fwidth(wz) * u_GridSize2;\n\n    // float v0 = 1.0 - clamp(min(x0, z0), 0.0, 1.0);\n    float v1 = 1.0 - clamp(min(x1, z1), 0.0, 1.0);\n    // if (v0 > 0.1) {\n        // gl_FragColor = mix(gl_FragColor, u_GridColor, v0);\n    // }\n    // else {\n        gl_FragColor = mix(gl_FragColor, u_GridColor2, v1);\n    // }\n  }\n\n  // float shadowFactor = calcShadow(u_ShadowMap, v_PositionFromLight, l, n);\n  // vec3 diffuseColor = u_LightColor * NdotL * shadowFactor;\n\n  // gl_FragColor.rgb *= diffuseColor;\n}";

/* babel-plugin-inline-import './shaders/webgl.grid.vert.glsl' */
var gridVert = "attribute vec3 a_Position;\n\nvarying vec3 v_Position;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\n\nvoid main() {\n  v_Position = a_Position;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(a_Position, 1.);\n}";
var Grid = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_gWebgpuCore.IDENTIFIER.Systems), _dec3 = (0, _inversify.named)(_gWebgpuCore.IDENTIFIER.MaterialSystem), _dec4 = (0, _inversify.inject)(_gWebgpuCore.IDENTIFIER.Systems), _dec5 = (0, _inversify.named)(_gWebgpuCore.IDENTIFIER.GeometrySystem), _dec6 = (0, _inversify.inject)(_gWebgpuCore.IDENTIFIER.ShaderModuleService), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Renderable) {
  (0, _inherits2.default)(Grid, _Renderable);

  var _super = _createSuper(Grid);

  function Grid() {
    var _this;

    (0, _classCallCheck2.default)(this, Grid);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _initializerDefineProperty2.default)(_this, "materialSystem", _descriptor, (0, _assertThisInitialized2.default)(_this));
    (0, _initializerDefineProperty2.default)(_this, "geometrySystem", _descriptor2, (0, _assertThisInitialized2.default)(_this));
    (0, _initializerDefineProperty2.default)(_this, "shaderModuleService", _descriptor3, (0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Grid, [{
    key: "onAttributeChanged",
    value: function onAttributeChanged(_ref) {
      var name = _ref.name,
          data = _ref.data;
      var mesh = this.getMeshComponent();

      if (mesh && mesh.material) {
        if (name === 'gridColor') {
          mesh.material.setUniform('u_GridColor', data);
          mesh.material.setUniform('u_GridColor2', data);
        } else if (name === 'gridSize') {
          mesh.material.setUniform('u_GridSize', data);
          mesh.material.setUniform('u_GridSize2', data);
        }
      }
    }
  }, {
    key: "onEntityCreated",
    value: function onEntityCreated() {
      this.shaderModuleService.registerModule('grid', {
        vs: gridVert,
        fs: gridFrag
      });

      var _this$shaderModuleSer = this.shaderModuleService.getModule('grid'),
          vs = _this$shaderModuleSer.vs,
          fs = _this$shaderModuleSer.fs,
          extractedUniforms = _this$shaderModuleSer.uniforms;

      var material = this.materialSystem.createShaderMaterial({
        vertexShader: vs,
        fragmentShader: fs
      });
      this.setMaterial(material);
      var geometry = this.geometrySystem.createBufferGeometry({
        vertexCount: 4
      });
      this.setGeometry(geometry);
      material.setCull({
        enable: false,
        face: _gWebgpuCore.gl.BACK
      }).setDepth({
        enable: true,
        func: _gWebgpuCore.gl.LESS
      }); // @ts-ignore

      material.setUniform(extractedUniforms);
      this.setAttributes({
        gridColor: this.config.gridColor,
        gridSize: this.config.gridSize
      });
      geometry.setIndex([0, 3, 2, 2, 1, 0]);
      geometry.setAttribute('a_Position', Float32Array.from([-4, -1, -4, 4, -1, -4, 4, -1, 4, -4, -1, 4]), {
        arrayStride: 4 * 2,
        stepMode: 'vertex',
        attributes: [{
          shaderLocation: 0,
          offset: 0,
          format: 'float2'
        }]
      });
    }
  }]);
  return Grid;
}(_Renderable2.Renderable), _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "materialSystem", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "geometrySystem", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "shaderModuleService", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.Grid = Grid;
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"../Renderable":1679470356538}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356547, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Line = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var _inversify = require("inversify");

var _polylineNormals = _interopRequireDefault(require("../../utils/polyline-normals"));

var _Renderable2 = require("../Renderable");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/* babel-plugin-inline-import './shaders/webgl.line.frag.glsl' */
var lineFrag = "uniform float u_dash_array : 0.02;\nuniform float u_dash_offset : 0;\nuniform float u_dash_ratio : 0;\nuniform float u_thickness : 0.02;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_counters;\n\nvoid main() {\n    float blur = 1. - smoothstep(0.98, 1., length(v_normal));\n\n    gl_FragColor = v_color;\n    gl_FragColor.a *= blur * ceil(mod(v_counters + u_dash_offset, u_dash_array) - (u_dash_array * u_dash_ratio));\n}";

/* babel-plugin-inline-import './shaders/webgl.line.vert.glsl' */
var lineVert = "attribute vec2 a_pos;\nattribute vec4 a_color;\nattribute float a_line_miter;\nattribute vec2 a_line_normal;\nattribute float a_counters;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\nuniform float u_thickness : 0.02;\nuniform vec2 u_viewport;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_counters;\n\nvoid main() {\n  v_color = a_color;\n  v_counters = a_counters;\n\n  vec3 normal = normalize(vec3(a_line_normal, 0.0));\n\n  vec4 offset = vec4(normal * u_thickness / 2.0 * a_line_miter, 0.0);\n\n  v_normal = vec2(normal * sign(a_line_miter));\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(a_pos, 0.0, 1.0) + offset;\n}\n";
var Line = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_gWebgpuCore.IDENTIFIER.Systems), _dec3 = (0, _inversify.named)(_gWebgpuCore.IDENTIFIER.MaterialSystem), _dec4 = (0, _inversify.inject)(_gWebgpuCore.IDENTIFIER.Systems), _dec5 = (0, _inversify.named)(_gWebgpuCore.IDENTIFIER.GeometrySystem), _dec6 = (0, _inversify.inject)(_gWebgpuCore.IDENTIFIER.ShaderModuleService), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Renderable) {
  (0, _inherits2.default)(Line, _Renderable);

  var _super = _createSuper(Line);

  function Line() {
    var _this;

    (0, _classCallCheck2.default)(this, Line);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _initializerDefineProperty2.default)(_this, "materialSystem", _descriptor, (0, _assertThisInitialized2.default)(_this));
    (0, _initializerDefineProperty2.default)(_this, "geometrySystem", _descriptor2, (0, _assertThisInitialized2.default)(_this));
    (0, _initializerDefineProperty2.default)(_this, "shaderModuleService", _descriptor3, (0, _assertThisInitialized2.default)(_this));
    _this.vertexCount = void 0;
    return _this;
  }

  (0, _createClass2.default)(Line, [{
    key: "onAttributeChanged",
    value: function onAttributeChanged(_ref) {
      var name = _ref.name,
          data = _ref.data;
      var mesh = this.getMeshComponent();

      if (mesh && mesh.material) {
        switch (name) {
          case 'dashArray':
            mesh.material.setUniform('u_dash_array', data);
            break;

          case 'dashOffset':
            mesh.material.setUniform('u_dash_offset', data);
            break;

          case 'dashRatio':
            mesh.material.setUniform('u_dash_ratio', data);
            break;

          case 'thickness':
            mesh.material.setUniform('u_thickness', data);
            break;

          case 'color':
            var colors = new Array(this.vertexCount).fill(undefined).map(function () {
              return data;
            }).reduce(function (prev, cur) {
              // @ts-ignore
              return [].concat((0, _toConsumableArray2.default)(prev), (0, _toConsumableArray2.default)(cur));
            }, []); // @ts-ignore

            mesh.geometry.setAttribute('a_color', Float32Array.from(colors), {
              arrayStride: 4 * 4,
              stepMode: 'vertex',
              attributes: [{
                shaderLocation: 1,
                offset: 0,
                format: 'float4'
              }]
            });
            break;
        }
      }
    }
  }, {
    key: "onEntityCreated",
    value: function onEntityCreated() {
      var _this2 = this;

      this.shaderModuleService.registerModule('line', {
        vs: lineVert,
        fs: lineFrag
      });

      var _this$shaderModuleSer = this.shaderModuleService.getModule('line'),
          vs = _this$shaderModuleSer.vs,
          fs = _this$shaderModuleSer.fs,
          extractedUniforms = _this$shaderModuleSer.uniforms;

      var material = this.materialSystem.createShaderMaterial({
        vertexShader: vs,
        fragmentShader: fs
      });

      var _getNormals = (0, _polylineNormals.default)(this.config.points, false),
          normals = _getNormals.normals,
          attrIndex = _getNormals.attrIndex,
          attrPos = _getNormals.attrPos,
          attrCounters = _getNormals.attrCounters;

      var vertexCount = attrPos.length;
      this.vertexCount = vertexCount;
      var geometry = this.geometrySystem.createBufferGeometry({
        vertexCount: vertexCount
      });
      this.setMaterial(material);
      this.setGeometry(geometry);
      material.setCull({
        enable: false,
        face: _gWebgpuCore.gl.BACK
      }) // @ts-ignore
      .setUniform(extractedUniforms);
      this.setAttributes({
        dashArray: this.config.dashArray,
        dashOffset: this.config.dashOffset,
        dashRatio: this.config.dashRatio,
        thickness: this.config.thickness
      });
      var attrNormal = [];
      var attrMiter = [];
      normals.forEach(function (n) {
        var norm = n[0];
        var miter = n[1];
        attrNormal.push([norm[0], norm[1]]); // @ts-ignore

        attrMiter.push(miter);
      }); // [[0,1,2], [2,1,3]]

      geometry.setIndex(attrIndex.reduce(function (prev, cur) {
        return [].concat((0, _toConsumableArray2.default)(prev), (0, _toConsumableArray2.default)(cur));
      }, []));
      geometry.setAttribute('a_pos', Float32Array.from(attrPos.reduce(function (prev, cur) {
        return [].concat((0, _toConsumableArray2.default)(prev), (0, _toConsumableArray2.default)(cur));
      }, [])), {
        arrayStride: 4 * 2,
        stepMode: 'vertex',
        attributes: [{
          shaderLocation: 0,
          offset: 0,
          format: 'float2'
        }]
      });
      var colors = new Array(vertexCount).fill(undefined).map(function () {
        return (0, _toConsumableArray2.default)(_this2.config.color);
      }).reduce(function (prev, cur) {
        return [].concat((0, _toConsumableArray2.default)(prev), (0, _toConsumableArray2.default)(cur));
      }, []);
      geometry.setAttribute('a_color', Float32Array.from(colors), {
        arrayStride: 4 * 4,
        stepMode: 'vertex',
        attributes: [{
          shaderLocation: 1,
          offset: 0,
          format: 'float4'
        }]
      });
      geometry.setAttribute('a_line_miter', Float32Array.from(attrMiter), {
        arrayStride: 4 * 1,
        stepMode: 'vertex',
        attributes: [{
          shaderLocation: 2,
          offset: 0,
          format: 'float'
        }]
      });
      geometry.setAttribute('a_line_normal', Float32Array.from(attrNormal.reduce(function (prev, cur) {
        return [].concat((0, _toConsumableArray2.default)(prev), (0, _toConsumableArray2.default)(cur));
      }, [])), {
        arrayStride: 4 * 2,
        stepMode: 'vertex',
        attributes: [{
          shaderLocation: 3,
          offset: 0,
          format: 'float2'
        }]
      });
      geometry.setAttribute('a_counters', Float32Array.from(attrCounters), {
        arrayStride: 4 * 1,
        stepMode: 'vertex',
        attributes: [{
          shaderLocation: 4,
          offset: 0,
          format: 'float'
        }]
      });
    }
  }]);
  return Line;
}(_Renderable2.Renderable), _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "materialSystem", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "geometrySystem", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "shaderModuleService", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.Line = Line;
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"../../utils/polyline-normals":1679470356548,"../Renderable":1679470356538}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356548, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _glVec = require("gl-vec2");

var _polylineMiterUtil = require("polyline-miter-util");

// @ts-ignore
// @ts-ignore
function extrusions(positions, out, point, normal, scale) {
  addNext(out, normal, -scale);
  addNext(out, normal, scale);
  positions.push(point);
  positions.push(point);
}

function addNext(out, normal, length) {
  out.push([[normal[0], normal[1]], length]);
}

function _default(points, closed, indexOffset) {
  var lineA = [0, 0];
  var lineB = [0, 0];
  var tangent = [0, 0];
  var miter = [0, 0];

  var _lastFlip = -1;

  var _started = false;
  var _normal = null;
  var tmp = (0, _glVec.create)();
  var count = indexOffset || 0;
  var miterLimit = 3;
  var out = [];
  var attrPos = [];
  var attrIndex = [];
  var attrCounters = [0, 0];

  if (closed) {
    points = points.slice();
    points.push(points[0]);
  }

  var total = points.length;

  for (var i = 1; i < total; i++) {
    var index = count;
    var last = points[i - 1];
    var cur = points[i];
    var next = i < points.length - 1 ? points[i + 1] : null;
    attrCounters.push(i / total, i / total);
    (0, _polylineMiterUtil.direction)(lineA, cur, last);

    if (!_normal) {
      _normal = [0, 0];
      (0, _polylineMiterUtil.normal)(_normal, lineA);
    }

    if (!_started) {
      _started = true;
      extrusions(attrPos, out, last, _normal, 1);
    }

    attrIndex.push([index + 0, index + 1, index + 2]);

    if (!next) {
      // no miter, simple segment
      (0, _polylineMiterUtil.normal)(_normal, lineA); // reset normal

      extrusions(attrPos, out, cur, _normal, 1);
      attrIndex.push(_lastFlip === 1 ? [index, index + 2, index + 3] : [index + 2, index + 1, index + 3]);
      count += 2;
    } else {
      // miter with last
      // get unit dir of next line
      (0, _polylineMiterUtil.direction)(lineB, next, cur); // stores tangent & miter

      var miterLen = (0, _polylineMiterUtil.computeMiter)(tangent, miter, lineA, lineB, 1); // get orientation

      var flip = (0, _glVec.dot)(tangent, _normal) < 0 ? -1 : 1;
      var bevel = miterLen > miterLimit; // 处理相邻线段重叠的情况

      if (!isFinite(miterLen)) {
        (0, _polylineMiterUtil.normal)(_normal, lineA); // reset normal

        extrusions(attrPos, out, cur, _normal, 1);
        attrIndex.push(_lastFlip === 1 ? [index, index + 2, index + 3] : [index + 2, index + 1, index + 3]);
        count += 2;
        _lastFlip = flip;
        continue;
      }

      if (bevel) {
        miterLen = miterLimit;
        attrCounters.push(i / total); // next two points in our first segment

        addNext(out, _normal, -flip);
        attrPos.push(cur);
        addNext(out, miter, miterLen * flip);
        attrPos.push(cur);
        attrIndex.push(_lastFlip !== -flip ? [index, index + 2, index + 3] : [index + 2, index + 1, index + 3]); // now add the bevel triangle

        attrIndex.push([index + 2, index + 3, index + 4]);
        (0, _polylineMiterUtil.normal)(tmp, lineB);
        (0, _glVec.copy)(_normal, tmp); // store normal for next round

        addNext(out, _normal, -flip);
        attrPos.push(cur); // the miter is now the normal for our next join

        count += 3;
      } else {
        // miter
        // next two points for our miter join
        extrusions(attrPos, out, cur, miter, miterLen);
        attrIndex.push(_lastFlip === 1 ? [index, index + 2, index + 3] : [index + 2, index + 1, index + 3]);
        flip = -1; // the miter is now the normal for our next join

        (0, _glVec.copy)(_normal, miter);
        count += 2;
      }

      _lastFlip = flip;
    }
  }

  return {
    normals: out,
    attrIndex: attrIndex,
    attrPos: attrPos,
    attrCounters: attrCounters
  };
}
//# sourceMappingURL=polyline-normals.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356549, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Point = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var _inversify = require("inversify");

var _picking = require("../../utils/picking");

var _Renderable2 = require("../Renderable");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/* babel-plugin-inline-import './shaders/webgl.point.frag.glsl' */
var pointFrag = "uniform float u_blur : 0.05;\nuniform float u_opacity : 0.7;\nuniform float u_stroke_width : 0.01;\nuniform vec4 u_stroke_color : [0, 0, 0, 0];\nuniform float u_stroke_opacity : 1;\n\nvarying vec4 v_color;\nvarying vec4 v_data;\nvarying float v_radius;\n\n#pragma include \"sdf2d\"\n#pragma include \"picking\"\n\nvoid main() {\n  int shape = int(floor(v_data.w + 0.5));\n\n  float antialiasblur = v_data.z;\n  float antialiased_blur = -max(u_blur, antialiasblur);\n  float r = v_radius / (v_radius + u_stroke_width);\n\n  float outer_df;\n  float inner_df;\n  // 'circle', 'triangle', 'square', 'pentagon', 'hexagon', 'octogon', 'hexagram', 'rhombus', 'vesica'\n  // if (shape == 0) {\n    outer_df = sdCircle(v_data.xy, 1.0);\n    inner_df = sdCircle(v_data.xy, r);\n  // } else if (shape == 1) {\n  //   outer_df = sdEquilateralTriangle(1.1 * v_data.xy);\n  //   inner_df = sdEquilateralTriangle(1.1 / r * v_data.xy);\n  // } else if (shape == 2) {\n  //   outer_df = sdBox(v_data.xy, vec2(1.));\n  //   inner_df = sdBox(v_data.xy, vec2(r));\n  // } else if (shape == 3) {\n  //   outer_df = sdPentagon(v_data.xy, 0.8);\n  //   inner_df = sdPentagon(v_data.xy, r * 0.8);\n  // } else if (shape == 4) {\n  //   outer_df = sdHexagon(v_data.xy, 0.8);\n  //   inner_df = sdHexagon(v_data.xy, r * 0.8);\n  // } else if (shape == 5) {\n  //   outer_df = sdOctogon(v_data.xy, 1.0);\n  //   inner_df = sdOctogon(v_data.xy, r);\n  // } else if (shape == 6) {\n  //   outer_df = sdHexagram(v_data.xy, 0.52);\n  //   inner_df = sdHexagram(v_data.xy, r * 0.52);\n  // } else if (shape == 7) {\n  //   outer_df = sdRhombus(v_data.xy, vec2(1.0));\n  //   inner_df = sdRhombus(v_data.xy, vec2(r));\n  // } else if (shape == 8) {\n  //   outer_df = sdVesica(v_data.xy, 1.1, 0.8);\n  //   inner_df = sdVesica(v_data.xy, r * 1.1, r * 0.8);\n  // }\n\n  float opacity_t = smoothstep(0.0, antialiased_blur, outer_df);\n\n  float color_t = u_stroke_width < 0.01 ? 0.0 : smoothstep(\n    antialiased_blur,\n    0.0,\n    inner_df\n  );\n  vec4 strokeColor = u_stroke_color == vec4(0) ? v_color : u_stroke_color;\n\n  gl_FragColor = mix(vec4(v_color.rgb, v_color.a * u_opacity), strokeColor * u_stroke_opacity, color_t);\n  gl_FragColor.a = gl_FragColor.a * opacity_t;\n\n  gl_FragColor = filterColor(gl_FragColor);\n}";

/* babel-plugin-inline-import './shaders/webgl.point.vert.glsl' */
var pointVert = "attribute vec2 position;\nattribute vec4 color;\nattribute float shape;\nattribute vec2 offset;\nattribute float size;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\n\nuniform float u_stroke_width : 0.01;\nuniform float u_device_pixel_ratio;\nuniform vec2 u_viewport;\n\nvarying vec4 v_color;\nvarying vec4 v_data;\nvarying float v_radius;\n\n#pragma include \"picking\"\n\nvoid main() {\n  v_color = color;\n  v_radius = size;\n\n  lowp float antialiasblur = 1.0 / u_device_pixel_ratio * (size + u_stroke_width);\n\n  // construct point coords\n  v_data = vec4(position, antialiasblur, shape);\n\n  gl_Position = projectionMatrix * modelViewMatrix\n    * vec4(position * size + offset, 0.0, 1.0);\n\n  setPickingColor(a_PickingColor);\n}";
var pointShapes = ['circle', 'triangle', 'square', 'pentagon', 'hexagon', 'octogon', 'hexagram', 'rhombus', 'vesica'];

/**
 * Use SDF to draw 2D point with stroke.
 */
var Point = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_gWebgpuCore.IDENTIFIER.Systems), _dec3 = (0, _inversify.named)(_gWebgpuCore.IDENTIFIER.MaterialSystem), _dec4 = (0, _inversify.inject)(_gWebgpuCore.IDENTIFIER.Systems), _dec5 = (0, _inversify.named)(_gWebgpuCore.IDENTIFIER.GeometrySystem), _dec6 = (0, _inversify.inject)(_gWebgpuCore.IDENTIFIER.ShaderModuleService), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Renderable) {
  (0, _inherits2.default)(Point, _Renderable);

  var _super = _createSuper(Point);

  function Point() {
    var _this;

    (0, _classCallCheck2.default)(this, Point);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _initializerDefineProperty2.default)(_this, "materialSystem", _descriptor, (0, _assertThisInitialized2.default)(_this));
    (0, _initializerDefineProperty2.default)(_this, "geometrySystem", _descriptor2, (0, _assertThisInitialized2.default)(_this));
    (0, _initializerDefineProperty2.default)(_this, "shaderModuleService", _descriptor3, (0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Point, [{
    key: "onAttributeChanged",
    value: function onAttributeChanged(_ref) {
      var name = _ref.name,
          data = _ref.data;
      var mesh = this.getMeshComponent();

      if (mesh && mesh.material) {
        if (name === 'strokeWidth') {
          mesh.material.setUniform('u_stroke_width', data);
        } else if (name === 'strokeColor') {
          mesh.material.setUniform('u_stroke_color', data);
        } else if (name === 'strokeOpacity') {
          mesh.material.setUniform('u_stroke_opacity', data);
        } else if (name === 'opacity') {
          mesh.material.setUniform('u_opacity', data);
        } else if (name === 'blur') {
          mesh.material.setUniform('u_blur', data);
        }
      }
    }
  }, {
    key: "onEntityCreated",
    value: function onEntityCreated() {
      this.shaderModuleService.registerModule('grid', {
        vs: pointVert,
        fs: pointFrag
      });

      var _this$shaderModuleSer = this.shaderModuleService.getModule('grid'),
          vs = _this$shaderModuleSer.vs,
          fs = _this$shaderModuleSer.fs,
          extractedUniforms = _this$shaderModuleSer.uniforms;

      var material = this.materialSystem.createShaderMaterial({
        vertexShader: vs,
        fragmentShader: fs,
        cull: {
          enable: false
        },
        depth: {
          enable: false
        },
        blend: {
          enable: true,
          func: {
            srcRGB: _gWebgpuCore.gl.SRC_ALPHA,
            dstRGB: _gWebgpuCore.gl.ONE_MINUS_SRC_ALPHA,
            srcAlpha: 1,
            dstAlpha: 1
          }
        }
      }); // TODO: support define stroke-relative props per point

      material.setUniform(_objectSpread({
        u_device_pixel_ratio: window.devicePixelRatio
      }, extractedUniforms));
      var attributes = this.buildAttributes();
      var geometry = this.geometrySystem.createInstancedBufferGeometry({
        maxInstancedCount: attributes.instancedOffsets.length / 2,
        vertexCount: 6
      });
      geometry.setIndex([0, 2, 1, 0, 3, 2]);
      geometry.setAttribute('position', Float32Array.from(attributes.positions), {
        arrayStride: 4 * 2,
        stepMode: 'vertex',
        attributes: [{
          shaderLocation: 0,
          offset: 0,
          format: 'float2'
        }]
      });
      geometry.setAttribute('offset', Float32Array.from(attributes.instancedOffsets), {
        arrayStride: 4 * 2,
        stepMode: 'instance',
        attributes: [{
          shaderLocation: 1,
          offset: 0,
          format: 'float2'
        }]
      });
      geometry.setAttribute('color', Float32Array.from(attributes.instancedColors), {
        arrayStride: 4 * 4,
        stepMode: 'instance',
        attributes: [{
          shaderLocation: 2,
          offset: 0,
          format: 'float4'
        }]
      });
      geometry.setAttribute('size', Float32Array.from(attributes.instancedSizes), {
        arrayStride: 4,
        stepMode: 'instance',
        attributes: [{
          shaderLocation: 3,
          offset: 0,
          format: 'float'
        }]
      });
      geometry.setAttribute('shape', Float32Array.from(attributes.instancedShapes), {
        arrayStride: 4,
        stepMode: 'instance',
        attributes: [{
          shaderLocation: 4,
          offset: 0,
          format: 'float'
        }]
      });
      geometry.setAttribute('a_PickingColor', Float32Array.from(attributes.instancedPickingColors), {
        arrayStride: 4 * 3,
        stepMode: 'instance',
        attributes: [{
          shaderLocation: 6,
          offset: 0,
          format: 'float3'
        }]
      });
      this.setMaterial(material);
      this.setGeometry(geometry);
    }
  }, {
    key: "buildAttribute",
    value: function buildAttribute(config, attributes, index) {
      var _attributes$instanced, _attributes$instanced2, _attributes$instanced3, _attributes$instanced4;

      (_attributes$instanced = attributes.instancedPickingColors).push.apply(_attributes$instanced, (0, _toConsumableArray2.default)((0, _picking.encodePickingColor)(config.id || index)));

      attributes.instancedShapes.push(pointShapes.indexOf(config.shape || 'circle'));

      (_attributes$instanced2 = attributes.instancedColors).push.apply(_attributes$instanced2, (0, _toConsumableArray2.default)(config.color || [1, 0, 0, 1]));

      (_attributes$instanced3 = attributes.instancedOffsets).push.apply(_attributes$instanced3, (0, _toConsumableArray2.default)(config.position || [0, 0]));

      (_attributes$instanced4 = attributes.instancedSizes).push.apply(_attributes$instanced4, (0, _toConsumableArray2.default)(config.size || [0.2, 0.2]));
    }
  }, {
    key: "buildAttributes",
    value: function buildAttributes() {
      var _this2 = this;

      var attributes = {
        positions: [1, 1, 1, -1, -1, -1, -1, 1],
        instancedOffsets: [],
        instancedColors: [],
        instancedSizes: [],
        instancedShapes: [],
        instancedPickingColors: []
      };

      if (Array.isArray(this.config)) {
        this.config.forEach(function (config, i) {
          _this2.buildAttribute(config, attributes, i);
        });
      } else {
        this.buildAttribute(this.config, attributes, 0);
      }

      return attributes;
    }
  }]);
  return Point;
}(_Renderable2.Renderable), _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "materialSystem", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "geometrySystem", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "shaderModuleService", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.Point = Point;
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"../../utils/picking":1679470356550,"../Renderable":1679470356538}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356550, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encodePickingColor = encodePickingColor;

function encodePickingColor(featureIdx) {
  return [featureIdx + 1 & 255, featureIdx + 1 >> 8 & 255, featureIdx + 1 >> 8 >> 8 & 255];
}
//# sourceMappingURL=picking.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356551, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Renderer = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var WebGPUConstants = _interopRequireWildcard(require("@webgpu/types/dist/constants"));

var _inversify = require("inversify");

var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* babel-plugin-inline-import './material/shaders/map.frag.declaration.glsl' */
var mapFragDeclaration = "#ifdef USE_MAP\n  uniform sampler2D map;\n#endif";

/* babel-plugin-inline-import './material/shaders/map.frag.main.glsl' */
var mapFragMain = "#ifdef USE_MAP\n  vec4 texelColor = texture2D(map, vUv);\n  // texelColor = mapTexelToLinear(texelColor);\n  diffuseColor *= texelColor;\n#endif";

/* babel-plugin-inline-import './material/shaders/uv.frag.declaration.glsl' */
var uvFragDeclaration = "#if (defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ))\n  varying vec2 vUv;\n#endif";

/* babel-plugin-inline-import './material/shaders/uv.vert.declaration.glsl' */
var uvVertDeclaration = "#ifdef USE_UV\n  attribute vec2 uv;\n\t#ifdef UVS_VERTEX_ONLY\n    vec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif";

/* babel-plugin-inline-import './material/shaders/uv.vert.main.glsl' */
var uvVertMain = "#ifdef USE_UV\n  vUv = (uvTransform * vec3(uv, 1)).xy;\n#endif";
var Renderer = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_gWebgpuCore.IDENTIFIER.RenderEngine), _dec3 = (0, _inversify.inject)(_gWebgpuCore.IDENTIFIER.ShaderModuleService), _dec4 = (0, _inversify.inject)(_gWebgpuCore.IDENTIFIER.ConfigService), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function () {
  function Renderer() {
    (0, _classCallCheck2.default)(this, Renderer);
    this.container = void 0;
    (0, _initializerDefineProperty2.default)(this, "engine", _descriptor, this);
    (0, _initializerDefineProperty2.default)(this, "shaderModule", _descriptor2, this);
    (0, _initializerDefineProperty2.default)(this, "configService", _descriptor3, this);
    this.inited = false;
    this.rendering = false;
    this.pendings = [];
    this.views = [];
    this.size = void 0;
  }

  (0, _createClass2.default)(Renderer, [{
    key: "init",
    value: function () {
      var _init = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var systems, config, _iterator, _step, system;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // 模块化处理
                this.shaderModule.registerBuiltinModules();
                this.shaderModule.registerModule('uv.vert.declaration', {
                  vs: uvVertDeclaration
                });
                this.shaderModule.registerModule('uv.vert.main', {
                  vs: uvVertMain
                });
                this.shaderModule.registerModule('uv.frag.declaration', {
                  fs: uvFragDeclaration
                });
                this.shaderModule.registerModule('map.frag.declaration', {
                  fs: mapFragDeclaration
                });
                this.shaderModule.registerModule('map.frag.main', {
                  fs: mapFragMain
                });
                systems = this.container.getAll(_gWebgpuCore.IDENTIFIER.Systems);
                config = this.configService.get();

                if (!config.canvas) {
                  _context.next = 30;
                  break;
                }

                _context.next = 11;
                return this.engine.init({
                  canvas: config.canvas,
                  swapChainFormat: WebGPUConstants.TextureFormat.BGRA8Unorm,
                  antialiasing: false
                });

              case 11:
                _iterator = _createForOfIteratorHelper(systems);
                _context.prev = 12;

                _iterator.s();

              case 14:
                if ((_step = _iterator.n()).done) {
                  _context.next = 21;
                  break;
                }

                system = _step.value;

                if (!system.initialize) {
                  _context.next = 19;
                  break;
                }

                _context.next = 19;
                return system.initialize();

              case 19:
                _context.next = 14;
                break;

              case 21:
                _context.next = 26;
                break;

              case 23:
                _context.prev = 23;
                _context.t0 = _context["catch"](12);

                _iterator.e(_context.t0);

              case 26:
                _context.prev = 26;

                _iterator.f();

                return _context.finish(26);

              case 29:
                this.inited = true;

              case 30:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[12, 23, 26, 29]]);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "render",
    value: function () {
      var _render = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var systems,
            _len,
            views,
            _key,
            _iterator2,
            _step2,
            system,
            _args2 = arguments;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(!this.inited || this.rendering)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                if (this.pendings.length) {
                  this.pendings.forEach(function (pending) {
                    pending();
                  });
                }

                this.rendering = true;
                this.engine.beginFrame();
                systems = this.container.getAll(_gWebgpuCore.IDENTIFIER.Systems);

                for (_len = _args2.length, views = new Array(_len), _key = 0; _key < _len; _key++) {
                  views[_key] = _args2[_key];
                }

                _iterator2 = _createForOfIteratorHelper(systems);
                _context2.prev = 8;

                _iterator2.s();

              case 10:
                if ((_step2 = _iterator2.n()).done) {
                  _context2.next = 17;
                  break;
                }

                system = _step2.value;

                if (!system.execute) {
                  _context2.next = 15;
                  break;
                }

                _context2.next = 15;
                return system.execute(views);

              case 15:
                _context2.next = 10;
                break;

              case 17:
                _context2.next = 22;
                break;

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2["catch"](8);

                _iterator2.e(_context2.t0);

              case 22:
                _context2.prev = 22;

                _iterator2.f();

                return _context2.finish(22);

              case 25:
                // 录制一遍绘制命令，后续直接播放
                // if (this.useRenderBundle) {
                //   if (!this.renderBundleRecorded) {
                //     this.engine.startRecordBundle();
                //     if (this.onUpdate) {
                //       await this.onUpdate(this.engine);
                //     }
                //     this.renderBundle = this.engine.stopRecordBundle();
                //     this.renderBundleRecorded = true;
                //   }
                //   this.engine.executeBundles([this.renderBundle]);
                // } else {
                //   if (this.onUpdate) {
                //     await this.onUpdate(this.engine);
                //   }
                // }
                this.engine.endFrame();
                this.rendering = false;

              case 27:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[8, 19, 22, 25]]);
      }));

      function render() {
        return _render.apply(this, arguments);
      }

      return render;
    }()
  }, {
    key: "clear",
    value: function clear(options) {
      var _this = this;

      if (this.inited) {
        this.engine.clear(options);
      } else {
        this.pendings.unshift(function () {
          _this.engine.clear(options);

          _this.pendings.shift();
        });
      }

      return this;
    } // public setScissor(
    //   scissor: Partial<{
    //     enable: boolean;
    //     box: {
    //       x: number;
    //       y: number;
    //       width: number;
    //       height: number;
    //     };
    //   }>,
    // ) {
    //   this.engine.setScissor(scissor);
    //   return this;
    // }

  }, {
    key: "setSize",
    value: function setSize(_ref) {
      var width = _ref.width,
          height = _ref.height;
      var canvas = this.engine.getCanvas();
      this.size = {
        width: width,
        height: height
      };
      canvas.width = width;
      canvas.height = height;
      return this;
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return this.size;
    }
  }]);
  return Renderer;
}(), _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "engine", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "shaderModule", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "configService", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.Renderer = Renderer;
//# sourceMappingURL=Renderer.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356552, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scene = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inversify = require("inversify");

var _dec, _class, _temp;

var Scene = (_dec = (0, _inversify.injectable)(), _dec(_class = (_temp = /*#__PURE__*/function () {
  function Scene() {
    (0, _classCallCheck2.default)(this, Scene);
    this.entities = [];
  }

  (0, _createClass2.default)(Scene, [{
    key: "getEntities",
    value: function getEntities() {
      return this.entities;
    }
  }, {
    key: "addRenderable",
    value: function addRenderable(renderable) {
      this.addEntity(renderable.getEntity());
      return this;
    }
  }, {
    key: "removeRenderable",
    value: function removeRenderable(renderable) {
      this.removeEntity(renderable.getEntity());
      return this;
    }
  }, {
    key: "addLight",
    value: function addLight() {}
  }, {
    key: "addEntity",
    value: function addEntity(entity) {
      if (this.entities.indexOf(entity) === -1) {
        this.entities.push(entity);
      }

      return this;
    }
  }, {
    key: "removeEntity",
    value: function removeEntity(entity) {
      var index = this.entities.indexOf(entity);
      this.entities.splice(index, 1);
      return this;
    }
  }]);
  return Scene;
}(), _temp)) || _class);
exports.Scene = Scene;
//# sourceMappingURL=Scene.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356553, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextureCache = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inversify = require("inversify");

var _dec, _class, _temp;

var TextureCache = (_dec = (0, _inversify.injectable)(), _dec(_class = (_temp = /*#__PURE__*/function () {
  function TextureCache() {
    (0, _classCallCheck2.default)(this, TextureCache);
    this.cache = {};
  }

  (0, _createClass2.default)(TextureCache, [{
    key: "get",
    value: function get(name) {
      return this.cache[name];
    }
  }, {
    key: "set",
    value: function set(name, texture) {
      this.cache[name] = texture;
    }
  }]);
  return TextureCache;
}(), _temp)) || _class);
exports.TextureCache = TextureCache;
//# sourceMappingURL=Cache.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356554, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Texture2D = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var _inversify = require("inversify");

var _Cache = require("./Cache");

var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Texture2D = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_Cache.TextureCache), _dec3 = (0, _inversify.inject)(_gWebgpuCore.IDENTIFIER.RenderEngine), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function () {
  function Texture2D() {
    (0, _classCallCheck2.default)(this, Texture2D);
    (0, _initializerDefineProperty2.default)(this, "textureCache", _descriptor, this);
    (0, _initializerDefineProperty2.default)(this, "engine", _descriptor2, this);
    this.config = void 0;
    this.loaded = false;
    this.texture = void 0;
  }

  (0, _createClass2.default)(Texture2D, [{
    key: "setConfig",
    value: function setConfig(config) {
      this.config = config;
    }
  }, {
    key: "isLoaded",
    value: function isLoaded() {
      return this.loaded;
    } // public update(config: ITexture2DInitializationOptions) {
    //   if (this.loaded && this.texture) {
    //     const t = this.texture.get();
    //   }
    // }

  }, {
    key: "load",
    value: function () {
      var _load = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _this = this;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.config.url) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  var existed = _this.textureCache.get(_this.config.url);

                  if (existed) {
                    resolve(existed);
                  } else {
                    var image = new Image();
                    image.crossOrigin = 'Anonymous';
                    image.src = _this.config.url;

                    image.onload = function () {
                      var texture = _this.engine.createTexture2D(_objectSpread(_objectSpread({}, _this.config), {}, {
                        data: image,
                        width: image.width,
                        height: image.height,
                        flipY: true
                      }));

                      _this.textureCache.set(_this.config.url, texture);

                      _this.texture = texture;
                      _this.loaded = true;
                      resolve(texture);
                    };

                    image.onerror = function () {
                      reject();
                    };
                  }
                }));

              case 4:
                this.loaded = true;
                this.texture = this.engine.createTexture2D(this.config);
                return _context.abrupt("return", this.texture);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function load() {
        return _load.apply(this, arguments);
      }

      return load;
    }()
  }]);
  return Texture2D;
}(), _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "textureCache", [_dec2], {
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
exports.Texture2D = Texture2D;
//# sourceMappingURL=Texture2D.js.map
}, function(modId) { var map = {"./Cache":1679470356553}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679470356555, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.View = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _gWebgpuCore = require("@antv/g-webgpu-core");

var _inversify = require("inversify");

var _dec, _dec2, _dec3, _class, _class2, _descriptor, _temp;

var View = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_gWebgpuCore.IDENTIFIER.Systems), _dec3 = (0, _inversify.named)(_gWebgpuCore.IDENTIFIER.RendererSystem), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function () {
  function View() {
    (0, _classCallCheck2.default)(this, View);
    (0, _initializerDefineProperty2.default)(this, "rendererSystem", _descriptor, this);
    this.camera = void 0;
    this.scene = void 0;
    this.viewport = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    this.clearColor = [1, 1, 1, 1];
  }

  (0, _createClass2.default)(View, [{
    key: "getCamera",
    value: function getCamera() {
      return this.camera;
    }
  }, {
    key: "getScene",
    value: function getScene() {
      return this.scene;
    }
  }, {
    key: "getViewport",
    value: function getViewport() {
      return this.viewport;
    }
  }, {
    key: "getClearColor",
    value: function getClearColor() {
      return this.clearColor;
    }
  }, {
    key: "setCamera",
    value: function setCamera(camera) {
      this.camera = camera;
      return this;
    }
  }, {
    key: "setScene",
    value: function setScene(scene) {
      this.scene = scene;
      return this;
    }
  }, {
    key: "setViewport",
    value: function setViewport(viewport) {
      this.viewport = viewport;
      return this;
    }
  }, {
    key: "setClearColor",
    value: function setClearColor(clearColor) {
      this.clearColor = clearColor;
      return this;
    }
  }, {
    key: "pick",
    value: function pick(position) {
      return this.rendererSystem.pick(position, this);
    }
  }]);
  return View;
}(), _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "rendererSystem", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.View = View;
//# sourceMappingURL=View.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1679470356526);
})()
//miniprogram-npm-outsideDeps=["@babel/runtime/helpers/interopRequireDefault","@babel/runtime/helpers/initializerDefineProperty","@babel/runtime/helpers/classCallCheck","@babel/runtime/helpers/createClass","@babel/runtime/helpers/applyDecoratedDescriptor","@babel/runtime/helpers/initializerWarningHelper","@antv/g-webgpu-core","gl-matrix","inversify","@babel/runtime/helpers/interopRequireWildcard","@babel/runtime/regenerator","@babel/runtime/helpers/asyncToGenerator","@babel/runtime/helpers/defineProperty","@webgpu/types/dist/constants","@babel/runtime/helpers/typeof","@antv/g-webgpu-engine","@babel/runtime/helpers/slicedToArray","@babel/runtime/helpers/inherits","@babel/runtime/helpers/possibleConstructorReturn","@babel/runtime/helpers/getPrototypeOf","@babel/runtime/helpers/toConsumableArray","@babel/runtime/helpers/assertThisInitialized","gl-vec2","polyline-miter-util"]
//# sourceMappingURL=index.js.map