System.register(['./tasks.component', './task-tooltip.directive', './task-editor.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tasks_component_1, task_tooltip_directive_1, task_editor_component_1;
    var TASKS_DIRECTIVES;
    return {
        setters:[
            function (tasks_component_1_1) {
                tasks_component_1 = tasks_component_1_1;
            },
            function (task_tooltip_directive_1_1) {
                task_tooltip_directive_1 = task_tooltip_directive_1_1;
            },
            function (task_editor_component_1_1) {
                task_editor_component_1 = task_editor_component_1_1;
            }],
        execute: function() {
            TASKS_DIRECTIVES = [
                tasks_component_1.default,
                task_editor_component_1.default,
                task_tooltip_directive_1.default
            ];
            exports_1("TASKS_DIRECTIVES", TASKS_DIRECTIVES);
            exports_1("TasksComponent", tasks_component_1.default);
            exports_1("TaskEditorComponent", task_editor_component_1.default);
            exports_1("TaskTooltipDirective", task_tooltip_directive_1.default);
        }
    }
});
