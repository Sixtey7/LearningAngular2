System.register(['@angular/core', '@angular/router-deprecated', '../shared'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, router_deprecated_1, shared_1;
    var RouterOutletDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (shared_1_1) {
                shared_1 = shared_1_1;
            }],
        execute: function() {
            RouterOutletDirective = (function (_super) {
                __extends(RouterOutletDirective, _super);
                function RouterOutletDirective(_viewContainerRef, _loader, _parentRouter, nameAttr) {
                    _super.call(this, _viewContainerRef, _loader, _parentRouter, nameAttr);
                    console.log('Constructor running!');
                    this.parentRouter = _parentRouter;
                }
                RouterOutletDirective.prototype.activate = function (nextInstruction) {
                    console.log('Activate Running');
                    var requireAuthentication = this.protectedPath === nextInstruction.urlPath;
                    console.log('Url path: ' + nextInstruction.urlPath);
                    console.log('Require Auth: ' + requireAuthentication);
                    if (requireAuthentication && !shared_1.AuthenitcationService.isAuthorized()) {
                        this.parentRouter.navigateByUrl(this.loginUrl);
                    }
                    return _super.prototype.activate.call(this, nextInstruction);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], RouterOutletDirective.prototype, "protectedPath", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], RouterOutletDirective.prototype, "loginUrl", void 0);
                RouterOutletDirective = __decorate([
                    core_1.Directive({
                        selector: 'pomodoro-router-outlet'
                    }),
                    __param(3, core_1.Attribute('name')), 
                    __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.DynamicComponentLoader, router_deprecated_1.Router, String])
                ], RouterOutletDirective);
                return RouterOutletDirective;
            }(router_deprecated_1.RouterOutlet));
            exports_1("default", RouterOutletDirective);
        }
    }
});
