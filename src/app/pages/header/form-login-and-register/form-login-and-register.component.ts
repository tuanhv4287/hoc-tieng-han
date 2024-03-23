import { Component } from '@angular/core';
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
export class FormLoginAndRegisterComponent {
  FormLogin: FormGroup;

  Register: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<FormLoginAndRegisterComponent>,
    private formBuilder: FormBuilder
  ) {
    this.FormLogin = this.formBuilder.group(
      {
        userName: [''],
        password: [''],
        confirmPassword: [''],
      },
      { validators: this.passwordMatchValidator }
    );
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
  // ifRegisterSetFormLogin(Register: boolean) {
  //   if (Register) {
  //     this.FormLogin = this.formBuilder.group(
  //       {
  //         userName: [''],
  //         password: [''],
  //         confirmPassword: [''],
  //       },
  //       { validators: this.passwordMatchValidator }
  //     );
  //   }
  // }
  submit() {
    if (this.Register) {
      if (this.FormLogin.status === 'INVALID') {
        console.log(this.FormLogin, 'thất bại');
        console.log(this.FormLogin, 'đăng ký');
      } else {
        if (this.FormLogin?.errors?.['mismatch']) {
          console.log('mk ko trùng');
        } else {
          console.log('thành công1');
          console.log(this.FormLogin, 'đăng ký1');
        }
      }
    } else {
      if (this.FormLogin.status === 'INVALID') {
        console.log(this.FormLogin, 'đă thất bại');
        console.log(this.FormLogin, 'đăng nhập');
      } else {
        console.log('thành công');
        console.log(this.FormLogin, 'đăng nhập');
      }
    }
    // this.ifRegisterSetFormLogin(this.Register);
    // if (this.FormLogin.status === 'INVALID') {
    //   console.log(this.FormLogin, 'thất bại');
    // } else {
    //   if (this.Register) {
    //     if (this.passwordMatchValidator() == null) {
    //       console.log('mk ko trùng');
    //     } else {
    //       console.log('thành công');
    //       console.log(this.FormLogin, 'đăng ký');
    //     }
    //   } else {
    //     console.log('thành công');
    //     console.log(this.FormLogin, 'đăng nhập');
    //   }
    // }
    // if (this.passwordMatchValidator() != null) {
    //   console.log('mk ko trùng');
    // } else {
    //   console.log('thành công1');
    //   console.log(this.FormLogin, 'đăng ký1');
    // }
  }

  getErrorMessage(controlName: string) {
    const control = this.FormLogin.get(controlName);
    if (control && control.hasError('required')) {
      return 'Không được để trống';
    }
    if (control && control.hasError('minlength')) {
      return 'Tên đăng nhập phải lớn hơn 6 ký tự';
    }
    return '';
  }
}
