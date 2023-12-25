import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-khoa-hoc',
  templateUrl: './khoa-hoc.component.html',
  styleUrls: ['./khoa-hoc.component.scss']
})
export class KhoaHocComponent implements OnInit, OnChanges {
  title: string = '1. Bạn sẽ làm được gì sau khóa học?';
  urlSafe!: SafeResourceUrl;
  videoNow: number = 0;
  datalink = [
    { link: "https://www.youtube.com/embed/Pa7mHxV72iY?si=8voM3XDfote7dl3p", name: '1. Bạn sẽ làm được gì sau khóa học?' },
    { link: "https://www.youtube.com/embed/qiL8kIZQBeU?si=fS-1ibq8rGl_UpJK", name: '2. Nguyên âm đơn bài 1' },
    { link: "https://www.youtube.com/embed/YMAxaXQe7wI?si=qfpuUFqhs92ujba0", name: '3. Nguyên âm đơn bài 2' },
    { link: "https://www.youtube.com/embed/xZtFBu5EiDs?si=GPG4YrpUAGiTMp63", name: '4. Nguyên âm đơn bài 3' },
    { link: "https://www.youtube.com/embed/K9Gb2vsfnbQ?si=rCwu0D8TBvNn0gHY", name: '5. Nguyên âm đơn bài 4' },
    { link: "https://www.youtube.com/embed/Fd1Y4XlqFrE?si=NZ6TE-wUSMFdnuP-", name: '6. Nguyên âm đơn bài 5' },
  ];

  constructor(public sanitizer: DomSanitizer) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }
  ngOnInit(): void {

    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.datalink[0].link);
  }
  addItem(event: any) {
    this.videoNow = event
    switch (event) {
      case 0:
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.datalink[0].link)
        this.title = this.datalink[0].name

        break
      case 1:
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.datalink[1].link)
        this.title = this.datalink[1].name

        break
      case 2:
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.datalink[2].link)
        this.title = this.datalink[2].name

        break
      case 3:
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.datalink[3].link)
        this.title = this.datalink[3].name

        break
      case 4:
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.datalink[4].link)
        this.title = this.datalink[4].name

        break
      case 5:
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.datalink[5].link)
        this.title = this.datalink[5].name

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
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.datalink[this.videoNow].link);
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
  hideFooterMenu(event: any) {
    event.style.display = 'none';
  }
  showMenu(event: any) {
    event.style.display = 'block';
  }
}
