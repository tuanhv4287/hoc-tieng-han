import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-khoa-hoc',
  templateUrl: './khoa-hoc.component.html',
  styleUrls: ['./khoa-hoc.component.scss']
})
export class KhoaHocComponent implements OnInit, OnChanges {
  change = '';
  title: string = '1. Bạn sẽ làm được gì sau khóa học?';
  nameNow: string = '1. Bạn sẽ làm được gì sau khóa học?';
  urlSafe!: SafeResourceUrl;
  videoNow: number = 0;
  datalink = [
    "https://www.youtube.com/embed/Pa7mHxV72iY?si=8voM3XDfote7dl3p",
    "https://www.youtube.com/embed/qiL8kIZQBeU?si=fS-1ibq8rGl_UpJK",
    "https://www.youtube.com/embed/YMAxaXQe7wI?si=o5et4UePtS3f9RrP",
    "https://www.youtube.com/embed/xZtFBu5EiDs?si=GPG4YrpUAGiTMp63",
    "https://www.youtube.com/embed/K9Gb2vsfnbQ?si=rCwu0D8TBvNn0gHY",
    "https://www.youtube.com/embed/Fd1Y4XlqFrE?si=NZ6TE-wUSMFdnuP-"
  ];

  constructor(public sanitizer: DomSanitizer) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }
  ngOnInit(): void {

    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.datalink[0]);
  }
  addItem(event: any) {
    this.videoNow = event
    switch (event) {
      case 0:
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.datalink[0])
        break
      case 1:
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.datalink[1])
        break
      case 2:
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.datalink[2])
        break
      case 3:
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.datalink[3])
        break
      case 4:
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.datalink[4])
        break
      case 5:
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.datalink[5])
        break
    }
  }
  setNameTitle(event: string) {
    this.title = event
  }

  changeEvent(event: string) {

    if (event == 'next') {
      this.videoNow = this.videoNow + 1
    }
    else {
      this.videoNow = this.videoNow - 1
    }
    if (this.videoNow < this.datalink.length && this.videoNow > 0) {
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.datalink[this.videoNow]);
    }
    else {
      if (event == 'next') {
        this.videoNow = this.datalink.length - 1;
        alert("Bạn đang ở video cuối cùng");
      }
      else {
        this.videoNow = 0;
        alert("Bạn đang ở video đầu tiên");
      }
    }
  }
}
