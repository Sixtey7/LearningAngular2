System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AuthenticationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AuthenticationService = (function () {
                function AuthenticationService() {
                    this.userIsloggedIn = new core_1.EventEmitter();
                }
                AuthenticationService.prototype.login = function (_a) {
                    var _this = this;
                    var username = _a.username, password = _a.password;
                    return new Promise(function (resolve) {
                        var validCredentials = false;
                        //@NOTE: In a real scenario this check should be performed against a web service:
                        if (username === 'john.doe@mail.com' && password === 'letmein') {
                            validCredentials = true;
                            window.sessionStorage.setItem('token', 'eyJhbGciOi');
                        }
                        _this.userIsloggedIn.emit(validCredentials);
                        resolve(validCredentials);
                    });
                };
                AuthenticationService.prototype.logout = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        window.sessionStorage.removeItem('token');
                        _this.userIsloggedIn.emit(false);
                        resolve(true);
                    });
                };
                AuthenticationService.isAuthorized = function () {
                    return !!window.sessionStorage.getItem('token');
                };
                AuthenticationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AuthenticationService);
                return AuthenticationService;
            }());
            exports_1("default", AuthenticationService);
        }
    }
});
