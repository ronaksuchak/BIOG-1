import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  addressForm = this.fb.group({
    username: [null, Validators.required],
    // email: [null, Validators.required],
    email: [null,[
      Validators.required, Validators.minLength(10),Validators.email]],
    password: [null, Validators.compose([
      Validators.required, Validators.minLength(8), Validators.maxLength(10)])
    ],
    password2: [null, Validators.required],
  });

  hasUnitNumber = false;
  checked = false;

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('thanks');
  }

}
