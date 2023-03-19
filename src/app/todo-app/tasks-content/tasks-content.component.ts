import { Component } from '@angular/core';
import { TASKS } from '../mock-task';
import { tasksType } from '../task';
@Component({
  selector: 'app-tasks-content',
  templateUrl: './tasks-content.component.html',
  styleUrls: ['./tasks-content.component.css']
})
export class TasksContentComponent {
 tasks: tasksType[] = TASKS;
}
