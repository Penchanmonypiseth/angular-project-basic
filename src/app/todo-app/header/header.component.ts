import { Component } from '@angular/core';
import { ServicesUlService } from '../service/services-ul.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'Movie schedule ';
  showAddTask: boolean = false;
  subscription: Subscription;
  constructor(private uiService: ServicesUlService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }
  addData() {
    this.uiService.toggleAddTask();
  }
}
