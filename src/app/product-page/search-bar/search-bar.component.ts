import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  targetValue: string = '';

  @Output()
  filterText: EventEmitter<string> = new EventEmitter<string>();
  onFilterProduct() {
    this.filterText.emit(this.targetValue);
  }
}
