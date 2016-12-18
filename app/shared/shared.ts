import Queueable from './interfaces/queueable';
import Task from './interfaces/task';

import FormattedTimePipe from './pipes/formatted-time.pipe';
import QueuedOnlyPipe from './pipes/queued-only.pipe';

import AuthenitcationService from './services/authentication.service';
import SettingsService from './services/settings.service';
import TaskService from './services/task.service';

import RouterOutletDirective from './directives/router-outlet.directive';

const SHARED_PIPES: any[] = [
    FormattedTimePipe,
    QueuedOnlyPipe
];

const SHARED_PROVIDERS: any[] = [
    AuthenitcationService,
    SettingsService,
    TaskService
];

const SHARED_DIRECTIVES: any[] = [
    RouterOutletDirective
];

export {
    Queueable,
    Task,

    FormattedTimePipe,
    QueuedOnlyPipe,
    SHARED_PIPES,

    AuthenitcationService,
    SettingsService,
    TaskService,
    SHARED_PROVIDERS,

    RouterOutletDirective,
    SHARED_DIRECTIVES
};