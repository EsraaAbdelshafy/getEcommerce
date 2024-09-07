import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorirsComponent } from './categorirs.component';

describe('CategorirsComponent', () => {
  let component: CategorirsComponent;
  let fixture: ComponentFixture<CategorirsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorirsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategorirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
