import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import {HttpClientModule} from '@angular/common/http';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with 5 control', () => {
    expect(component.profileForm.contains('display')).toBeTruthy();
    expect(component.profileForm.contains('first')).toBeTruthy();
    expect(component.profileForm.contains('last')).toBeTruthy();
    expect(component.profileForm.contains('about')).toBeTruthy();
   expect(component.profileForm.contains('rad')).toBeTruthy();
  });

  it('should have a rootName with value myprofile', () => {
  let compiled=fixture.debugElement.nativeElement;
  expect(component.rootName).toEqual('My Profile')
  });

  it('should have display control with required validator', () => {
    const control = component.profileForm.get('display');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should have first control with required validator', () => {
    const control = component.profileForm.get('first');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('form invalid when empty', () => {
    expect(component.profileForm.valid).toBeFalsy();
  });


  it('on filling required values form is valid', () => {
    expect(component.profileForm.valid).toBeFalsy();
    component.profileForm.controls['display'].setValue("abc");
    component.profileForm.controls['first'].setValue("pqr");
    expect(component.profileForm.valid).toBeTruthy();


  });

  it('trigger event on clicking submit', () => {
    let button = fixture.debugElement.nativeElement.querySelector('button');
  button.click();

  fixture.whenStable().then(() => {
    expect(component.popup).toHaveBeenCalled();
  });


  });


});
