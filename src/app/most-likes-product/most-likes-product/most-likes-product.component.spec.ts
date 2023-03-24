import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostLikesProductComponent } from './most-likes-product.component';

describe('MostLikesProductComponent', () => {
  let component: MostLikesProductComponent;
  let fixture: ComponentFixture<MostLikesProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostLikesProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostLikesProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
