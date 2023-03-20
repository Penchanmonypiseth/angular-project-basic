import { Component, OnInit } from '@angular/core';
import { tasksType } from '../task';
import { ServicesService } from 'src/app/todo-app/service/services.service';
@Component({
  selector: 'app-tasks-content',
  templateUrl: './tasks-content.component.html',
  styleUrls: ['./tasks-content.component.css'],
})
export class TasksContentComponent implements OnInit {
  tasks: tasksType[] = [];

  constructor(private taskServices: ServicesService) {}
  ngOnInit() {
    this.taskServices.getTasks().subscribe((task) => {
      this.tasks = task;
    });
  }
  deleteTasks(task: tasksType) {
    this.taskServices
      .deleteTasks(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((items) => items.id !== task.id))
      );
  }
  toggleReminder(task: tasksType) {
    task.reminder = !task.reminder;
    this.taskServices.toggleReminders(task).subscribe();
  }
  addTaskItems(task: tasksType) {
    this.taskServices.addTasks(task).subscribe((task) => this.tasks.push(task));
  }
}
