import { Injectable } from '@angular/core';
import { Task } from '../shared';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export default class TaskService {
    public taskStore: Task[] = [];
    taskFeed: Observable<Task>;
    private taskObserver: any;
    private dataUrl = '/app/shared/data/raw-tasks.json';

    constructor(private http: Http) {
        this.taskFeed = new Observable(observer => {
            this.taskObserver = observer;
        });

        this.fetchTasks();
    }

    private fetchTasks() : void {
        this.http.get(this.dataUrl)
            .map(response => response.json())
            .map(stream => stream.map(res => {
                return {
                    name: res.name,
                    deadline: new Date(res.deadline),
                    pomodorosRequired: res.pomodorosRequired,
                    queued: res.queued
                }
            }))
            .subscribe(
                tasks => {
                    this.taskStore = tasks;
                    tasks.forEach(task => this.taskObserver.next(task))
                },
                error => console.log(error)
            );
    }

    addTask(task: Task): void {
        this.taskObserver.next(task);
    }

    /*
    * This probable won't work since the book sample wouldn't compile
    * but leaving this here as documentation for when I write this myself
    */
    addTaskPost(task: Task): void {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post(this.dataUrl, JSON.stringify(task), headers)
            .map(response => response.json())
            .subscribe((task: Task) => {
                this.taskObserver.next(task);
            });
    }
/*
    constructor() {
        const tasks = [
            {
                name: "Code an HTML Table",
                deadline: "Jun 23 2015",
                pomodorosRequired: 1
            }, {
                name: "Sketch a wireframe for the new homepage",
                deadline: "Jun 24, 2016",
                pomodorosRequired: 2
            }, {
                name: "Style table with Bootstrap styles",
                deadline: "Jun 25, 2016",
                pomodorosRequired: 1
            }, {
                name: "Reinforce SEO with custom sitemap.xml",
                deadline: "Jun 26, 2017",
                pomodorosRequired: 3
            }
        ];

        this.taskStore = tasks.map(task => {
            return {
                name: task.name,
                deadline: new Date(task.deadline),
                queued: false,
                pomodorosRequired: task.pomodorosRequired
            };
        });
    }
    */
}