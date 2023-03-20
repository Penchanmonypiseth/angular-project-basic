import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicesUlService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();
  constructor() {}

  toggleAddTask() {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
