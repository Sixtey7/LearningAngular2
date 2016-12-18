import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import  { 
    Router,
    ROUTER_DIRECTIVES,
    CanActivate,
    OnActivate,
    CanDeactivate,
    OnDeactivate ,
    ComponentInstruction
} from '@angular/router-deprecated';
import {
    Task,
    TaskService,
    AuthenitcationService
} from '../shared/shared';

@Component({
    selector: 'pomodoro-tasks-editor',
    directives: [ROUTER_DIRECTIVES],
    providers: [ Title ],
    templateUrl: 'app/tasks/task-editor.component.html',
    styles: [`
        .ng-valid { border-color: #3c763d; }
        .ng-invalid { border-color: #a94442; }
        .ng-untouched { border-color: #999999; }
    `]
})
/*Removed in chapter 8 ---
@CanActivate((
    next: ComponentInstruction,
    prev: ComponentInstruction
): boolean => {
    let passPhrase = prompt('Say the magic words');
    return (passPhrase === 'open sesame');
})
*/
//@CanActivate(AuthenitcationService.isAuthorized)
export default class TaskEditorComponent implements OnActivate, CanDeactivate, OnDeactivate {
    task: Task;
    changesSaved: boolean;

    constructor(
        private title: Title,
        private router: Router,
        private taskService: TaskService
    ) {
        //this is done this way because Task is an interface
        //and they are really casting an empty object to the Task interface
        this.task = <Task>{};    
    }

    routerOnActivate(): void {
            this.title.setTitle('Welcome to the Task Form!');
    }

    /*routerCanDeactivate(): Promise<boolean> | boolean {
        console.log('Can deactivate running...');
        return this.changesSaved || confirm('Are you sure you want to leave?');
    }*/

    routerCanDeactivate( next: ComponentInstruction, prev: ComponentInstruction) {
        return !AuthenitcationService.isAuthorized() || this.changesSaved || confirm('Are you sure you want to leave?');
    }

    routerOnDeactivate(): void {
        this.title.setTitle('My Angular 2 Pomodoro Timer');
    }

    saveTask() {
        this.task.deadline = new Date(this.task.deadline.toString());
        this.taskService.addTask(this.task);
        this.changesSaved = true;
        console.log('About to router');
        this.router.navigate(['TasksComponent']);
    }
}