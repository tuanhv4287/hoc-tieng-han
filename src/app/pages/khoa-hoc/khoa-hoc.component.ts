import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-khoa-hoc',
  templateUrl: './khoa-hoc.component.html',
  styleUrls: ['./khoa-hoc.component.scss']
})
export class KhoaHocComponent implements OnInit {
  urlSafe!: SafeResourceUrl;
  datalink = ["https://www.youtube.com/embed/addfbs0kQDE?si=m1fpK2Q13yzwesZu","https://www.youtube.com/embed/addfbs0kQDE?si=m1fpK2Q13yzwesZu1"];

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.datalink[0]);
  }

}
