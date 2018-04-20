import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-nav',
  templateUrl: './social-nav.component.html',
  styleUrls: ['./social-nav.component.less']
})
export class SocialNavComponent implements OnInit {

  socialLinks = [
    {
      title: 'outlook',
      iconPath: './images/social_icons/outlook.ico',
      linkUrl: 'mailto:weihanli@outlook.com'
    },
    {
      title: 'github',
      iconPath: './images/social_icons/github.ico',
      linkUrl: 'https://github.com/WeihanLi'
    },
    {
      title: 'osChina',
      iconPath: './images/social_icons/oschina.ico',
      linkUrl: 'https://gitee.com/weihanli'
    },
    {
      title: 'gitbook',
      iconPath: './images/social_icons/gitbook.ico',
      linkUrl: 'https://www.gitbook.com/@weihanli'
    },
    {
      title: 'cnblogs',
      iconPath: './images/social_icons/cnblogs.ico',
      linkUrl: 'https://weihanli.cnblogs.com/'
    },
    {
      title: 'jianshu',
      iconPath: './images/social_icons/jianshu.ico',
      linkUrl: 'https://www.jianshu.com/u/9ea357af743b'
    },
    {
      title: 'weibo',
      iconPath: './images/social_icons/weibo.ico',
      linkUrl: 'https://weibo.com/WeihanLee'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
