"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var NavigationService = /** @class */ (function () {
    function NavigationService(router) {
        var _this = this;
        this.router = router;
        this.router
            .events
            .subscribe(function (event) {
            if (event instanceof router_1.ActivationEnd) {
                var snapshot = event.snapshot;
                if (snapshot.data.num) {
                    _this.lastValue = _this.newValue;
                    _this.newValue = snapshot.data.num;
                    _this.animationValue = _this.getAnimationNumber(_this.lastValue, _this.newValue);
                }
            }
        });
    }
    NavigationService.prototype.getAnimationNumber = function (lastValue, newValue) {
        var result = 0;
        if (lastValue && newValue) {
            result = 2;
            if (lastValue) {
                if (newValue > lastValue) {
                    result = 2;
                }
                else {
                    result = 1;
                }
            }
            else {
                result = 1;
            }
        }
        return result;
    };
    return NavigationService;
}());
exports.NavigationService = NavigationService;
//# sourceMappingURL=navigation.js.map