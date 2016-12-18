System.register(['@angular/core', './timer/timer', './tasks/tasks', './shared/shared', '@angular/http', '@angular/router-deprecated', './login/login'], function(exports_1, context_1) {
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
    var core_1, timer_1, tasks_1, shared_1, http_1, router_deprecated_1, login_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (timer_1_1) {
                timer_1 = timer_1_1;
            },
            function (tasks_1_1) {
                tasks_1 = tasks_1_1;
            },
            function (shared_1_1) {
                shared_1 = shared_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(authenticationService, router) {
                    var _this = this;
                    this.authenticationService = authenticationService;
                    this.router = router;
                    authenticationService.userIsloggedIn.subscribe(function (isLoggedIn) {
                        _this.userIsLoggedIn = isLoggedIn;
                    });
                }
                AppComponent.prototype.logout = function ($event) {
                    var _this = this;
                    $event.preventDefault();
                    this.authenticationService.logout().then(function (success) {
                        if (success) {
                            _this.router.navigateByUrl('/');
                        }
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'pomodoro-app',
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        providers: [shared_1.SHARED_PROVIDERS, http_1.HTTP_PROVIDERS, router_deprecated_1.ROUTER_PROVIDERS],
                        styles: ["\n        .router-link-active {\n            font-weight: bold;\n            border-bottom: 2px #d9534f solid;\n        }\n    "],
                        templateUrl: 'app/app.component.html'
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '',
                            name: 'Home',
                            redirectTo: ['TasksComponent']
                        },
                        {
                            path: 'tasks',
                            name: 'TasksComponent',
                            component: tasks_1.TasksComponent,
                            useAsDefault: true
                        },
                        {
                            path: 'tasks/editor',
                            name: 'TaskEditorComponent',
                            component: tasks_1.TaskEditorComponent
                        },
                        {
                            path: 'timer/...',
                            name: 'TimerComponent',
                            component: timer_1.TimerComponent
                        },
                        {
                            path: 'login',
                            name: 'LoginComponent',
                            component: login_1.LoginComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [shared_1.AuthenitcationService, router_deprecated_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("default", AppComponent);
        }
    }
});
