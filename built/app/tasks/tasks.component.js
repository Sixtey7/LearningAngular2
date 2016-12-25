System.register(['@angular/core', './task-icons.component', './task-tooltip.directive', '../shared/shared', '@angular/router-deprecated'], function(exports_1, context_1) {
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
    var core_1, task_icons_component_1, task_tooltip_directive_1, shared_1, router_deprecated_1;
    var TasksComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (task_icons_component_1_1) {
                task_icons_component_1 = task_icons_component_1_1;
            },
            function (task_tooltip_directive_1_1) {
                task_tooltip_directive_1 = task_tooltip_directive_1_1;
            },
            function (shared_1_1) {
                shared_1 = shared_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            TasksComponent = (function () {
                function TasksComponent(taskService, settingsService, router) {
                    this.taskService = taskService;
                    this.settingsService = settingsService;
                    this.router = router;
                    this.tasks = this.taskService.taskStore;
                    this.today = new Date();
                    this.queueHeaderMapping = settingsService.pluralsMap.tasks;
                    this.timerMinutes = settingsService.timerMinutes;
                }
                TasksComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.updateQueuedPomodoros();
                    this.taskService.taskFeed.subscribe(function (newTask) {
                        _this.tasks.push(newTask);
                        _this.updateQueuedPomodoros();
                    });
                };
                TasksComponent.prototype.toggleTask = function (task) {
                    task.queued = !task.queued;
                    this.updateQueuedPomodoros();
                };
                TasksComponent.prototype.updateQueuedPomodoros = function () {
                    this.queuedPomodoros = this.tasks
                        .filter(function (task) { return task.queued; })
                        .reduce(function (pomodoros, queuedTask) {
                        return pomodoros + queuedTask.pomodorosRequired;
                    }, 0);
                };
                ;
                TasksComponent.prototype.workOn = function (index) {
                    this.router.navigate(['TimerComponent', 'TaskTimer', { id: index }]);
                };
                TasksComponent = __decorate([
                    core_1.Component({
                        selector: 'pomodoro-tasks',
                        directives: [task_icons_component_1.default, task_tooltip_directive_1.default, shared_1.SHARED_DIRECTIVES],
                        pipes: [shared_1.SHARED_PIPES],
                        styleUrls: ['app/tasks/tasks.component.css'],
                        templateUrl: 'app/tasks/tasks.component.html'
                    }), 
                    __metadata('design:paramtypes', [shared_1.TaskService, shared_1.SettingsService, router_deprecated_1.Router])
                ], TasksComponent);
                return TasksComponent;
            }());
            exports_1("default", TasksComponent);
        }
    }
});
