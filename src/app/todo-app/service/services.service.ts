import { Injectable } from '@angular/core';
import { tasksType } from '../task';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const headerOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private apiUrl = 'http://localhost:3000/TASKS';
  constructor(private http: HttpClient) {}
  getTasks(): Observable<tasksType[]> {
    return this.http.get<tasksType[]>(this.apiUrl);
  }
  deleteTasks(task: tasksType): Observable<tasksType> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<tasksType>(url);
  }
  toggleReminders(task: tasksType): Observable<tasksType> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<tasksType>(url, task, headerOptions);
  }
  addTasks(task: tasksType): Observable<tasksType> {
    return this.http.post<tasksType>(this.apiUrl, task, headerOptions);
  }
}
