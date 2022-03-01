import { Component } from '@angular/core';
import {FormControl, FormBuilder, Validators, FormGroup, AbstractControl} from '@angular/forms';

import { CustomValidator } from './custom-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'banklogin';
  public formGroup!:FormGroup;
  constructor( private formBuilder:FormBuilder) { }

  get f(): { [key: string]: AbstractControl } {
    return this.formGroup.controls;
  }
  ngOnInit(): void {
  this.formGroup=this.formBuilder.group({
  fullname:['',Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(10)])],
  age:['', Validators.compose([Validators.required, CustomValidator.ageLimitValidator(18, 30)])],
  mobile:['',Validators.compose([Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])],
  email:['',Validators.compose([Validators.required,Validators.email])]

})

  }

 onSubmit(){

 }
}
