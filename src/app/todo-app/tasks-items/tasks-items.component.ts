import { Component , Input} from '@angular/core';
@Component({
  selector: 'app-tasks-items',
  templateUrl: './tasks-items.component.html',
  styleUrls: ['./tasks-items.component.css']
})
export class TasksItemsComponent {
@Input() task: any;

constructor(){
}
}
