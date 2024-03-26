import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserableExampleComponent } from './obserable-example.component';

describe('ObserableExampleComponent', () => {
  let component: ObserableExampleComponent;
  let fixture: ComponentFixture<ObserableExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObserableExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObserableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
