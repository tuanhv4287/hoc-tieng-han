import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showSearch(sidebar: any) {
    if (sidebar.style.display == 'none' || sidebar.style.display == '') {
      sidebar.style.display = 'flex';
    }
    else {
      this.hideSearch(sidebar)
    }
  }
  hideSearch(sidebar: any) {
    sidebar.style.display = 'none';
  }
}
