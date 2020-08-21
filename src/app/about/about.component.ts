import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  activities = [
    {
      activityTitle: '大学生网络工作室',
      activityDescription:
        '经过努力，有幸进入到大学生网络工作室程序组，接触了程序组第一次培训，开始第一次接触微软技术C#',
      activityDate: '2013-01-15'
    },
    {
      activityTitle: '网络工作室暑期集训',
      activityDescription:
        '大一暑假开始集中培训,学长给我们做培训，SQLServer数据库基本操作以及ADO.NET连接数据库,\
        ASP.NET基本控件的使用，小型信息系统的开发，暑期结束之后基本可以独立做一个简单小型的图书管理系统。 暑期除了程序组的培训还有文案组、设计组和动画组，\
        和设计组一起学习了一些ps的操作，和文案组学习了一些word排版和ppt的制作，和动画组学习了简单视频处理绘声绘影的简单操作',
      activityDate: '2013-07-15'
    },
    {
      activityTitle: '暑假培训和新生手册WP版开发',
      activityDescription:
        '大二暑假给大一的培训，C#面向对象，数据库操作和ASP.NET常用控件使用等。 培训结束之后开发wp版的新生手册，7月底第一版开发完成，并在8月20号左右更新了第二版的新生手册，增加了自定义主题背景和摇一摇随机呈现内容的功能',
      activityDate: '2014-07-15'
    },
    {
      activityTitle: 'MSP',
      activityDescription: 'MSP（Microsoft Student Partners）是微软公司针对高校大学生在全球范围内所设立的项目。\
        旨在鼓励那些在校园里积极倡导、推动创新实践，乐于积极帮助他人的优秀学生，给他们提供微软最前沿的技术资源，以及更广泛的交流、展示自我的平台。\
        在微软的MSDN网站上看到MSP的介绍和招募信息，自己暑假刚开发了一个WP应用，想试一试于是发了一份申请表，等了一段时间收到来自北京的电话面试，之后成为了MSP的一员。',
      activityDate: '2014-11-15'
    },
    {
      activityTitle: '河南日昇昌网络科技有限公司',
      activityDescription:
        '大三暑假到郑州做一个P2P网站，负责后台开发，产品属于互联网金融，主要使用JAVA开发，支付接口使用的是盛付通托管支付。时间从2015年7月中旬到2016年3月底。',
      activityDate: '2015-07-15'
    },
    {
      activityTitle: '途虎养车',
      activityDescription:
        '毕业之后来到上海，面试了两家公司之后选择了途虎养车，主要在研发部门店组做.NET后台开发2017年8月转至架构组做研发，时间从2016年7月至今2018年7月',
      activityDate: '2016-06-30'
    },
    {
      activityTitle: '众蚁社区',
      activityDescription:
        '在途虎两年之后加入了众蚁，众蚁是一家创业公司，不过技术总监比较有想法，使用 asp.net core + angular，完全的前后端分离，并且正在从单机应用迁移到微服务\
        在众蚁做了很多事情，不仅仅是 .net 相关，也有一些 nodejs/python 之类的，搭建了日志，监控，CI/CD 等基础设施，也很大的丰富了我的技术栈',
      activityDate: '2018-08-01'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
