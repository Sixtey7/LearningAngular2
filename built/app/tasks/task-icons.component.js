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
    var TaskIconsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TaskIconsComponent = (function () {
                function TaskIconsComponent() {
                    this.icons = [];
                }
                TaskIconsComponent.prototype.ngOnInit = function () {
                    this.icons.length = this.task.pomodorosRequired;
                    this.icons.fill({ name: this.task.name });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TaskIconsComponent.prototype, "task", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], TaskIconsComponent.prototype, "size", void 0);
                TaskIconsComponent = __decorate([
                    core_1.Component({
                        selector: '<pomodoro-task-icons',
                        template: "\n        <img *ngFor=\"let icon of icons\"\n            src = \"/app/shared/assets/img/pomodoro.png\"\n            width = \"{{size}}\">\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TaskIconsComponent);
                return TaskIconsComponent;
            }());
            exports_1("default", TaskIconsComponent);
        }
    }
});
