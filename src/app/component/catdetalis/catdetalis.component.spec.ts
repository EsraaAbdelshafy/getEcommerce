import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatdetalisComponent } from './catdetalis.component';

describe('CatdetalisComponent', () => {
  let component: CatdetalisComponent;
  let fixture: ComponentFixture<CatdetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatdetalisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatdetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
