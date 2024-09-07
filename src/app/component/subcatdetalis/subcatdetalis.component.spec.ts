import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcatdetalisComponent } from './subcatdetalis.component';

describe('SubcatdetalisComponent', () => {
  let component: SubcatdetalisComponent;
  let fixture: ComponentFixture<SubcatdetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcatdetalisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubcatdetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
