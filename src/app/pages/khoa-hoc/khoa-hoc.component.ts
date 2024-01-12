import { Component } from '@angular/core';
import { SlideInterface } from '../trang-chu/wrapper.component';

@Component({
  selector: 'app-khoa-hoc',
  templateUrl: './khoa-hoc.component.html',
  styleUrls: ['./khoa-hoc.component.scss']
})
export class KhoaHocComponent {
  slides: SlideInterface[] = [
    { url: 'https://data.webnhiepanh.com/wp-content/uploads/2020/11/21105453/phong-canh-1.jpg', title: '1' },
    { url: 'https://media.hanamtv.vn/upload/image/202112/medium/71038_cd71e10749fea767b93941678cfcee60.jpg', title: '2' },
    { url: 'https://phongnhaexplorer.com/wp-content/uploads/2021/08/du-lich-an-giang-b.jpg', title: '3' },
    { url: 'https://vapa.vn/wp-content/uploads/2022/12/anh-canh-dep-001-1.jpg', title: '4' },
    { url: 'https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg', title: '5' },
  ];
  currentIndex: number = 0

  getCurrentSlideUrl(): string {
    return `url('${this.slides[this.currentIndex].url}')`
  }
  goToNext() {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
  }
  goToPrevious() {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide ? this.slides.length - 1 : this.currentIndex - 1;
    this.currentIndex = newIndex;
  }
  goToSlide(slideIndex: number) {
    this.currentIndex = slideIndex;

  }
}