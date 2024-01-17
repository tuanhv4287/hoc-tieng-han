import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-login-and-register',
  templateUrl: './form-login-and-register.component.html',
  styleUrls: ['./form-login-and-register.component.scss']
})
export class FormLoginAndRegisterComponent {
  FormLogin = new FormGroup({
    userName : new FormControl(''),
    password : new FormControl('')
  });
  constructor(public dialogRef: MatDialogRef<FormLoginAndRegisterComponent>) { }
    
  eyeClick(event: any) {
    if (event.type == 'password') {
      event.type = 'text'
    }
    else {
      event.type = 'password'
    }
  }

}
