import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-title-menu',
  templateUrl: './title-menu.component.html',
  styleUrls: ['./title-menu.component.scss']
})
export class TitleMenuComponent implements OnInit {
  ngOnInit(): void {

  }
  showSidebar(sidebar: any) {
    if (sidebar.style.display == 'none' || sidebar.style.display == '') {
      sidebar.style.display = 'flex';
    }
    else {
      this.hideSidebar(sidebar)
    }
  }
  hideSidebar(sidebar: any) {
    sidebar.style.display = 'none';
  }
}
