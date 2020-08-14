var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@haztivity/core", "jq-memory-game"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @license
     * Copyright Davinchi. All Rights Reserved.
     */
    var core_1 = require("@haztivity/core");
    require("jq-memory-game");
    var HzMemoryGameResource = /** @class */ (function (_super) {
        __extends(HzMemoryGameResource, _super);
        /**
         * Componente de cabecera para haztivity.
         * @param _$
         * @param _EventEmitterFactory
         * @param _ScormService
         * @example
         * div(data-hz-component="HzHeader")
         *      h1(data-hz-header-title)
         */
        function HzMemoryGameResource(_$, _EventEmitterFactory, _ScormService, _NavigatorService) {
            var _this = _super.call(this, _$, _EventEmitterFactory) || this;
            _this._ScormService = _ScormService;
            _this._NavigatorService = _NavigatorService;
            return _this;
        }
        HzMemoryGameResource_1 = HzMemoryGameResource;
        HzMemoryGameResource.prototype.init = function (options, config) {
            this._options = options;
            this._config = config;
            this._$element.memoryGame(this._options.widget);
            if (this._options.autoComplete) {
                this._markAsCompleted();
            }
            this._assignEvents();
        };
        HzMemoryGameResource.prototype._assignEvents = function () {
            var self = this;
            this._$element.on("memoryGameComplete." + HzMemoryGameResource_1.NAMESPACE, function (e, instance) {
                self._onEnd();
            });
        };
        HzMemoryGameResource.prototype._onEnd = function () {
            this._markAsCompleted();
        };
        var HzMemoryGameResource_1;
        HzMemoryGameResource.NAMESPACE = "hzMemorygame";
        HzMemoryGameResource = HzMemoryGameResource_1 = __decorate([
            core_1.Resource({
                name: "HzMemoryGame",
                dependencies: [
                    core_1.$,
                    core_1.EventEmitterFactory,
                    core_1.ScormService,
                    core_1.NavigatorService
                ]
            })
        ], HzMemoryGameResource);
        return HzMemoryGameResource;
    }(core_1.ResourceController));
    exports.HzMemoryGameResource = HzMemoryGameResource;
});
//# sourceMappingURL=HzMemoryGameResource.js.map