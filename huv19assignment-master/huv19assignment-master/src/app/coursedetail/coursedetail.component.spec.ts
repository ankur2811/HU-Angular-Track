import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { CoursedetailComponent } from './coursedetail.component';

describe('CoursedetailComponent', () => {
  let component: CoursedetailComponent;
  let fixture: ComponentFixture<CoursedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CoursedetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
