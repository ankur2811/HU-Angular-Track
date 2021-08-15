import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbComponent } from './breadcrumb.component';
import {HttpClientModule} from '@angular/common/http';
import {  async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ BreadcrumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should change the value on selection change', async(() => {
    fixture.detectChanges();
    let select: HTMLSelectElement = fixture.debugElement.query(By.css('.sort')).nativeElement;
    select.value = select.options[2].value;
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let text = select.options[select.selectedIndex].label;
      expect(text).toBe('Low To High');
    });
  }));

  it('should execute the component method Low on change', fakeAsync(() => {
    fixture.detectChanges();
    let select: HTMLSelectElement = fixture.debugElement.query(By.css('.sort')).nativeElement;
    spyOn(component, 'Low');
    select.value = select.options[2].value;
    select.dispatchEvent(new Event('change'));
    tick();
    expect(component.Low).toHaveBeenCalled();
  }));

});
