System.register(['@angular/core', '@angular/common', '@angular/router-deprecated', '../shared/shared'], function(exports_1, context_1) {
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
    var core_1, common_1, router_deprecated_1, shared_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (shared_1_1) {
                shared_1 = shared_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                /**
                 * Methods
                 */
                function LoginComponent(formBuilder, router, authService) {
                    var _this = this;
                    this.router = router;
                    this.authService = authService;
                    this.notValidCredentials = false;
                    this.showUsernameHint = false;
                    this.loginForm = formBuilder.group({
                        username: ['',
                            common_1.Validators.compose([
                                common_1.Validators.required,
                                this.emailValidator
                            ])
                        ],
                        password: ['', common_1.Validators.required]
                    });
                    var username = this.loginForm.controls['username'];
                    username.valueChanges.subscribe(function (value) {
                        console.log('running valuechanges');
                        _this.showUsernameHint = (username.dirty && value.indexOf('@') < 0);
                    });
                }
                /**
                 * Custom Validators
                 */
                LoginComponent.prototype.emailValidator = function (control) {
                    if (!/(.+)@(.+){2,}\.(.+){2,}/.test(control.value)) {
                        return {
                            'emailNotValid': true
                        };
                    }
                    return null;
                };
                LoginComponent.prototype.authenticate = function () {
                    var _this = this;
                    var credentials = this.loginForm.value;
                    this.notValidCredentials = !this.loginForm.valid &&
                        this.loginForm.dirty;
                    /*
                    if (credentials.username === 'john.doe@mail.com' &&
                        credentials.password === 'letmein') {
                        this.router.navigateByUrl('/');
                    }
                    else {
                        this.notValidCredentials = true;
                    }*/
                    this.authService.login(credentials).then(function (success) {
                        if (success) {
                            _this.router.navigateByUrl('/');
                        }
                        else {
                            _this.notValidCredentials = true;
                        }
                    });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'pomodoro-login',
                        templateUrl: 'app/login/login.component.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_deprecated_1.Router, shared_1.AuthenitcationService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("default", LoginComponent);
        }
    }
});
