import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { CoursesComponent } from './courses.component';
import { CartService } from '../cart.service';
import {  async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a rootName with value discover latest courses on react', () => {
    let compiled=fixture.debugElement.nativeElement;
    expect(component.rootName).toEqual('Discover Latest Courses On React')
    });

    it('it should use the course details from the service', () => {
      let app=fixture.debugElement.componentInstance;
      let service=fixture.debugElement.injector.get(CartService);
      expect(service.courses).toEqual(app.courses);
    });


});
