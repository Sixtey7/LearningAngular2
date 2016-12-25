System.register(['@angular/core', '@angular/platform-browser/src/animate/animation_builder'], function(exports_1, context_1) {
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
    var core_1, animation_builder_1;
    var HighlightDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (animation_builder_1_1) {
                animation_builder_1 = animation_builder_1_1;
            }],
        execute: function() {
            HighlightDirective = (function () {
                function HighlightDirective(animationBuilder, elementRef) {
                    this.animationBuilder = animationBuilder;
                    this.elementRef = elementRef;
                    this.cssAnimationBuilder = animationBuilder.css()
                        .setDuration(300)
                        .setToStyles({ backgroundColor: '#fff5a0' });
                }
                HighlightDirective.prototype.colorize = function () {
                    var animation = this.cssAnimationBuilder.start(this.elementRef.nativeElement);
                    animation.onComplete(function () {
                        animation.applyStyles({ backgroundColor: 'inherit' });
                    });
                };
                HighlightDirective = __decorate([
                    core_1.Directive({
                        selector: '.pomodoro-highlight',
                        providers: [animation_builder_1.AnimationBuilder],
                        exportAs: 'pomodoroHighlight'
                    }), 
                    __metadata('design:paramtypes', [animation_builder_1.AnimationBuilder, core_1.ElementRef])
                ], HighlightDirective);
                return HighlightDirective;
            }());
            exports_1("default", HighlightDirective);
        }
    }
});
