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
      linkUrl: 'https://weibo.com/weihanli'
    }
  ];

  constructor() {
    this.current = location.pathname.length > 1 ? location.pathname.substring(1) : 'about';
    this.currentYear = new Date().getFullYear();
  }

  setItem(item): void {
    this.current = item;
  }
}
