import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-khoa-hoc',
  templateUrl: './khoa-hoc.component.html',
  styleUrls: ['./khoa-hoc.component.scss']
})
export class KhoaHocComponent implements OnInit , OnChanges {
  urlSafe!: SafeResourceUrl;
  datalink = ["https://www.youtube.com/embed/WlEp9VQKgl4?si=EDqBF11GgQdU7V2g","https://www.youtube.com/embed/g3ILMpTLGak?si=-SIf8I04vga5jYdq"];

  constructor(public sanitizer: DomSanitizer) { }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.datalink[0]);
  }

}
