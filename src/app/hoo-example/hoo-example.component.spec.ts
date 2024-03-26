import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HooExampleComponent } from './hoo-example.component';

describe('HooExampleComponent', () => {
  let component: HooExampleComponent;
  let fixture: ComponentFixture<HooExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HooExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HooExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
