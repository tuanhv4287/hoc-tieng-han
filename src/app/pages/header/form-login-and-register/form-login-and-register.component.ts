import { Component, OnChanges, SimpleChanges } from '@angular/core';
import {
  FormGroup,
  FormControl,
  AbstractControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

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
    private formBuilder: FormBuilder
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
        console.log(this.formLogin, 'thất bại');
        console.log(this.formLogin, 'đăng ký');
      } else {
        if (this.formLogin?.errors?.['mismatch']) {
          console.log('mk ko trùng');
        } else {
          console.log('thành công1');
          console.log(this.formLogin, 'đăng ký1');
        }
      }
    } else {
      if (this.formLogin.status === 'INVALID') {
        console.log(this.formLogin, 'đă thất bại');
        console.log(this.formLogin, 'đăng nhập');
      } else {
        console.log('thành công');
        console.log(this.formLogin, 'đăng nhập');
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
