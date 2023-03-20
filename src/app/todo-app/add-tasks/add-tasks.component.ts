import { Subscription } from 'rxjs';
import { ServicesUlService } from './../service/services-ul.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { tasksType } from '../task';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css'],
})
export class AddTasksComponent implements OnInit {
  @Output() onAddTasks: EventEmitter<tasksType> = new EventEmitter();
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription: Subscription;
  constructor(private uiService: ServicesUlService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  onSubmitData() {
    if (!this.text) {
      alert('Please add task');
      return;
    }
    const tmpTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTasks.emit(tmpTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
