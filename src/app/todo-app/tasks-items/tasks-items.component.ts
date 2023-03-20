import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { tasksType } from '../task';
@Component({
  selector: 'app-tasks-items',
  templateUrl: './tasks-items.component.html',
  styleUrls: ['./tasks-items.component.css'],
})
export class TasksItemsComponent {
  @Input() task: any;
  @Output() DeleteTasks: EventEmitter<tasksType> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<tasksType> = new EventEmitter();
  faTimes = faTimes;

  onDelete(task: tasksType) {
    this.DeleteTasks.emit(task);
  }
  onToggle(task: tasksType) {
    this.onToggleReminder.emit(task);
  }
  constructor() {}
}
