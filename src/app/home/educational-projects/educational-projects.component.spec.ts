import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalProjectsComponent } from './educational-projects.component';

describe('EducationalProjectsComponent', () => {
  let component: EducationalProjectsComponent;
  let fixture: ComponentFixture<EducationalProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationalProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationalProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
