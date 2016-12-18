import { Component } from '@angular/core';
import { TimerComponent } from './timer/timer';
import {
    TasksComponent,
    TaskEditorComponent, 
} from './tasks/tasks';
import { SHARED_PROVIDERS,
    AuthenitcationService } from './shared/shared';
import { HTTP_PROVIDERS } from '@angular/http';
import { 
    ROUTER_PROVIDERS,
    RouteConfig,
    ROUTER_DIRECTIVES ,
    Router
} from '@angular/router-deprecated';
import { FORM_PROVIDERS } from '@angular/common';
import { LoginComponent } from './login/login';

@Component({
    selector: 'pomodoro-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [SHARED_PROVIDERS, HTTP_PROVIDERS, ROUTER_PROVIDERS],
    styles: [`
        .router-link-active {
            font-weight: bold;
            border-bottom: 2px #d9534f solid;
        }
    `],
    templateUrl: 'app/app.component.html'
})
@RouteConfig([
    {   path: '',
        name: 'Home',
        redirectTo: ['TasksComponent']
    },
    {
        path: 'tasks',
        name: 'TasksComponent',
        component: TasksComponent,
        useAsDefault: true
    },
    {
        path: 'tasks/editor',
        name: 'TaskEditorComponent',
        component: TaskEditorComponent
    },
    {
        path: 'timer/...',
        name: 'TimerComponent',
        component: TimerComponent
    },
    {
        path: 'login',
        name: 'LoginComponent',
        component: LoginComponent
    }
])
export default class AppComponent {
    userIsLoggedIn: boolean;

    constructor(
        private authenticationService: AuthenitcationService,
        private router: Router) {
        
        authenticationService.userIsloggedIn.subscribe(isLoggedIn => {
            this.userIsLoggedIn = isLoggedIn;
        });
    }

    logout($event) : void {
        $event.preventDefault();

        this.authenticationService.logout().then(success => {
            if (success) {
                this.router.navigateByUrl('/');
            }
        });
    }
}