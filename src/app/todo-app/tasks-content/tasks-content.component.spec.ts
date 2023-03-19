import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksContentComponent } from './tasks-content.component';

describe('TasksContentComponent', () => {
  let component: TasksContentComponent;
  let fixture: ComponentFixture<TasksContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
