import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormLoginAndRegisterComponent } from './form-login-and-register/form-login-and-register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) {}
  showSearch(sidebar: any) {
    if (sidebar.style.display == 'none' || sidebar.style.display == '') {
      sidebar.style.display = 'flex';
    } else {
      this.hideSearch(sidebar);
    }
  }
  hideSearch(sidebar: any) {
    sidebar.style.display = 'none';
  }
  openFormLogin() {
    const dialogRef = this.dialog.open(FormLoginAndRegisterComponent, {
      width: '30%',
    });
    dialogRef.afterClosed().subscribe((resure) => {
      console.log(resure);

      if (resure) {
        console.log('true');
      } else {
        console.log('false');
      }
    });
  }
}
