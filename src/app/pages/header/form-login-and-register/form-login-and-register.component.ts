import { Component, OnChanges, SimpleChanges } from '@angular/core';
import {
  FormGroup,
  FormControl,
  AbstractControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { authCodeFlowConfig } from 'src/app/sso.config';

@Component({
  selector: 'app-form-login-and-register',
  templateUrl: './form-login-and-register.component.html',
  styleUrls: ['./form-login-and-register.component.scss'],
})
export class FormLoginAndRegisterComponent implements OnChanges {
  formLogin: FormGroup;
  register: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<FormLoginAndRegisterComponent>,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formLogin = this.formBuilder.group({
      userName: [''],
      password: [''],
      confirmPassword: [''],
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  // constructor(private oauthService: OAuthService) {
  //   this.configureSingleSignOn();
  // }

  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
  eyeClick(event: any) {
    if (event.type == 'password') {
      event.type = 'text';
    } else {
      event.type = 'password';
    }
  }
  showError(): void {
    console.log('Form is invalid!');
    // Thực hiện các hành động khác khi form không hợp lệ
  }
  _handleChangeForm() {
    this.register = !this.register;
    this.formLogin.addValidators(this.passwordMatchValidator);
  }
  submit() {
    if (this.register) {
      if (this.formLogin.status === 'INVALID') {
      } else {
        if (this.formLogin?.errors?.['mismatch']) {
        } else {
          this.register = false;
        }
      }
    } else {
      if (this.formLogin.status === 'INVALID') {
      } else {
        this.dialogRef.close(this.formLogin);
      }
    }
  }

  getErrorMessage(controlName: string) {
    const control = this.formLogin.get(controlName);
    if (control && control.hasError('required')) {
      return 'Không được để trống';
    }
    if (control && control.hasError('minlength')) {
      return 'Tên đăng nhập phải lớn hơn 6 ký tự';
    }
    return '';
  }
}
