(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/touch.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f95c8LJcWhP+IxmovtHpMFw', 'touch', __filename);
// script/touch.ts

Object.defineProperty(exports, "__esModule", { value: true });
var enum_1 = require("./enum");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Touch = /** @class */ (function (_super) {
    __extends(Touch, _super);
    function Touch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Touch.prototype.onLoad = function () {
        this.registerEvent();
    };
    Touch.prototype.registerEvent = function () {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_END, function (e) {
            var startPoint = e.getStartLocation();
            var endPonit = e.getLocation();
            var v = endPonit.sub(startPoint);
            // cc.log(v)
            var radians = Math.atan2(v.y, v.x);
            var degrees = cc.misc.radiansToDegrees(radians);
            /** 将角度划分 8 块区域，方便处理，注意恰好 360 度 */
            var index = Math.floor(degrees / 45);
            _this.emitEventByIndex(index);
        }, this);
    };
    Touch.prototype.emitEventByIndex = function (index) {
        // main 上有对应监听，注意如果两个脚本没同时绑定在一个节点上，此处就不能用 this.node 了
        if (index === 0 || index === -1) {
            this.node.emit(enum_1.TouchEvent.RIGHT);
        }
        else if (index === 1 || index === 2) {
            this.node.emit(enum_1.TouchEvent.UP);
        }
        else if (index === -2 || index === -3) {
            this.node.emit(enum_1.TouchEvent.DOWN);
        }
        else if (index === -4 || index === 3 || index === 4) {
            this.node.emit(enum_1.TouchEvent.LEFT);
        }
        else {
            cc.error("\u65E0\u6B64\u65B9\u5411" + index);
        }
    };
    Touch = __decorate([
        ccclass
    ], Touch);
    return Touch;
}(cc.Component));
exports.default = Touch;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=touch.js.map
        