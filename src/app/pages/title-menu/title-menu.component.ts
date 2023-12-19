import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-title-menu',
  templateUrl: './title-menu.component.html',
  styleUrls: ['./title-menu.component.scss']
})
export class TitleMenuComponent implements  OnInit {
  ngOnInit(): void {
    
  }
  showSidebar(sidebar:any){
    sidebar.style.display='flex';
  }
  hideSidebar(sidebar:any){
    sidebar.style.display='none';
  }
}
