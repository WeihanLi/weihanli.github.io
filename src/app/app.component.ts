import { Component } from '@angular/core';
import { SocialNavComponent } from './social-nav/social-nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  currentYear: number;
  current: string;
  title = 'WeihanLi';
  routeArray = ['about', 'education', 'skills', 'projects'];
  navLinks = [
    {
      title: 'about',
      desc: 'About'
    },
    {
      title: 'education',
      desc: 'Education'
    },
    {
      title: 'skills',
      desc: 'Skills'
    },
    {
      title: 'projects',
      desc: 'Projects'
    }
  ];
  socialLinks = [
    {
      title: 'outlook',
      iconPath: '../assets/social_icons/outlook.ico',
      linkUrl: 'mailto:weihanli@outlook.com'
    },
    {
      title: 'github',
      iconPath: '../assets/social_icons/github.ico',
      linkUrl: 'https://github.com/WeihanLi'
    },
    {
      title: 'osChina',
      iconPath: '../assets/social_icons/oschina.ico',
      linkUrl: 'https://gitee.com/weihanli'
    },
    {
      title: 'gitbook',
      iconPath: '../assets/social_icons/gitbook.ico',
      linkUrl: 'https://www.gitbook.com/@weihanli'
    },
    {
      title: 'cnblogs',
      iconPath: '../assets/social_icons/cnblogs.ico',
      linkUrl: 'https://weihanli.cnblogs.com/'
    },
    {
      title: 'jianshu',
      iconPath: '../assets/social_icons/jianshu.ico',
      linkUrl: 'https://www.jianshu.com/u/9ea357af743b'
    },
    {
      title: 'weibo',
      iconPath: '../assets/social_icons/weibo.ico',
      linkUrl: 'https://weibo.com/WeihanLee'
    }
  ];

  constructor() {
    this.current = this.getRouteData();
    this.currentYear = new Date().getFullYear();
  }

  getRouteData(): string {
    if (location.pathname.length > 1) {
      const val = location.pathname.substring(1);
      for (let i = 0; i < this.routeArray.length; i++) {
        if (val === this.routeArray[i]) {
          return val;
        }
      }
    }
    return 'about';
  }

  setItem(item): void {
    this.current = item;
  }
}
