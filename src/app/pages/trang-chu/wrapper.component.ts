import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingService } from '../services/housing.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from 'src/app/sso.config';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit {
  test: any;
  constructor(
    private oauthService: OAuthService,
    private housingService: HousingService
  ) {
    this.configureSingleSignOn();
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 30) {
        document
          .querySelector('.scroll-to-top-button')
          ?.classList.add('d-flex');
        document
          .querySelector('.scroll-to-top-button')
          ?.classList.add('animation');
      } else {
        document
          .querySelector('.scroll-to-top-button')
          ?.classList.remove('d-flex');
        document
          .querySelector('.scroll-to-top-button')
          ?.classList.remove('animation');
      }
    });
  }
  ngOnInit(): void {
    this.housingService.getAll().subscribe((data) => {
      this.test = data;
    });
  }

  slides: SlideInterface[] = [
    {
      url: 'https://data.webnhiepanh.com/wp-content/uploads/2020/11/21105453/phong-canh-1.jpg',
      title: '1',
    },
    {
      url: 'https://media.hanamtv.vn/upload/image/202112/medium/71038_cd71e10749fea767b93941678cfcee60.jpg',
      title: '2',
    },
    {
      url: 'https://phongnhaexplorer.com/wp-content/uploads/2021/08/du-lich-an-giang-b.jpg',
      title: '3',
    },
    {
      url: 'https://vapa.vn/wp-content/uploads/2022/12/anh-canh-dep-001-1.jpg',
      title: '4',
    },
    {
      url: 'https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg',
      title: '5',
    },
  ];
  currentIndex: number = 0;

  getCurrentSlideUrl(): string {
    return `url('${this.slides[this.currentIndex].url}')`;
  }
  goToNext() {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
  }
  goToPrevious() {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;
    this.currentIndex = newIndex;
  }
  goToSlide(slideIndex: number) {
    this.currentIndex = slideIndex;
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  configureSingleSignOn() {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
  logIn() {
    this.oauthService.initImplicitFlow();
  }
  logOut() {
    this.oauthService.logOut();
  }
  get Token() {
    let claims: any = this.oauthService.getIdentityClaims();
    return claims ? claims : null;
  }
}
export interface SlideInterface {
  url: string;
  title: string;
}
