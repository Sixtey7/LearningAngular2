System.register(['@angular/core', '@angular/http', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var TaskService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            TaskService = (function () {
                function TaskService(http) {
                    var _this = this;
                    this.http = http;
                    this.taskStore = [];
                    this.dataUrl = '/app/shared/data/raw-tasks.json';
                    this.taskFeed = new Observable_1.Observable(function (observer) {
                        _this.taskObserver = observer;
                    });
                    this.fetchTasks();
                }
                TaskService.prototype.fetchTasks = function () {
                    var _this = this;
                    this.http.get(this.dataUrl)
                        .map(function (response) { return response.json(); })
                        .map(function (stream) { return stream.map(function (res) {
                        return {
                            name: res.name,
                            deadline: new Date(res.deadline),
                            pomodorosRequired: res.pomodorosRequired,
                            queued: res.queued
                        };
                    }); })
                        .subscribe(function (tasks) {
                        _this.taskStore = tasks;
                        tasks.forEach(function (task) { return _this.taskObserver.next(task); });
                    }, function (error) { return console.log(error); });
                };
                TaskService.prototype.addTask = function (task) {
                    this.taskObserver.next(task);
                };
                /*
                * This probable won't work since the book sample wouldn't compile
                * but leaving this here as documentation for when I write this myself
                */
                TaskService.prototype.addTaskPost = function (task) {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    this.http.post(this.dataUrl, JSON.stringify(task), headers)
                        .map(function (response) { return response.json(); })
                        .subscribe(function (task) {
                        _this.taskObserver.next(task);
                    });
                };
                TaskService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TaskService);
                return TaskService;
            }());
            exports_1("default", TaskService);
        }
    }
});
