System.register(['./timer-widget.component', './timer.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var timer_widget_component_1, timer_component_1;
    var TIMER_DIRECTIVES;
    return {
        setters:[
            function (timer_widget_component_1_1) {
                timer_widget_component_1 = timer_widget_component_1_1;
            },
            function (timer_component_1_1) {
                timer_component_1 = timer_component_1_1;
            }],
        execute: function() {
            TIMER_DIRECTIVES = [
                timer_widget_component_1.default,
                timer_component_1.default
            ];
            exports_1("TIMER_DIRECTIVES", TIMER_DIRECTIVES);
            exports_1("TimerWidgetComponent", timer_widget_component_1.default);
            exports_1("TimerComponent", timer_component_1.default);
        }
    }
});
