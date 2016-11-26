import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
    selector : 'countdown',
    template: '<h1>Time left: {{seconds}}</h1>',
    styles: ['h1 { color: #900}'],
    encapsulation: ViewEncapsulation.Emulated
})
class CountdownComponent {
    @Input() seconds: number;
    intervalId: number;
    @Output() complete: EventEmitter<any> = new EventEmitter();
    @Output() progress: EventEmitter<number> = new EventEmitter();

    constructor() {
        this.intervalId = setInterval(() => this.tick(), 1000);
    }

    private tick(): void {
        if (--this.seconds < 1) {
            clearTimeout(this.intervalId);
            //An event is emitted upon finishing the countdown
            this.complete.emit(null);
        }
        this.progress.emit(this.seconds);
    }
}

@Component({
    selector: 'pomodoro-timer',
    directives: [CountdownComponent],
    encapsulation: ViewEncapsulation.None,
    templateUrl: './pomodoro-tasks.html'
})
class PomodoroTimerComponent {
    //timeout: number; /* No longer needed */
    onCountdownCompleted(): void {
        alert('Time Up!');
    }
}

bootstrap(PomodoroTimerComponent);
