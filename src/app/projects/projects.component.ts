import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      projectTitle: 'WeihanLi.Common',
      projectLink: 'https://github.com/WeihanLi/WeihanLi.Common',
      projectDescription:
        '.NET常用扩展方法，帮助类等，基于net45和.netstandard2.0，基础类库'
    },
    {
      projectTitle: 'WeihanLi.Npoi',
      projectLink: 'https://github.com/WeihanLi/WeihanLi.Npoi',
      projectDescription:
        'NPOI扩展，更方便的导入导出Excel/csv，基于net45和.netstandard2.0'
    },
    {
      projectTitle: 'WeihanLi.Redis',
      projectLink: 'https://github.com/WeihanLi/WeihanLi.Redis',
      projectDescription:
        '基于 StackExchange.Redis的Redis扩展，提供一系列基于 redis 的业务组件，适用于net45及.netstandard2.0'
    },
    {
      projectTitle: '活动室预约系统',
      projectLink: 'https://reservation.weihanli.xyz',
      projectDescription:
        '学校多个活动室，不同时间段的提前预约申请及处理，申请表的打印，通知公告'
    },
    {
      projectTitle: 'SparkTodo',
      projectLink: 'https://github.com/WeihanLi/SparkTodo',
      projectDescription:
        '基于 .NET Core 的一个 WebApi 项目，使用 swagger 自动生成接口文档， 身份验证使用轻量级的 JsonWebToken 来验证'
    },
    {
      projectTitle: 'MvcSimplePager',
      projectLink: 'https://github.com/WeihanLi/MvcSimplePager',
      projectDescription:
        '针对asp.net mvc 和 asp.net core 设计的通用、扩展性良好的轻量级分页扩展'
    },
    {
      projectTitle: 'DbTool',
      projectLink: 'https://github.com/WeihanLi/DbTool',
      projectDescription:
        '数据库工具，根据表结构文档生成创建表sql，根据数据库表信息导出Model和表结构文档'
    },
    {
      projectTitle: 'AccessControlHelper',
      projectLink: 'https://github.com/WeihanLi/AccessControlHelper',
      projectDescription: 'ASP.NET (Core) MVC 权限控制插件，自定义权限控制策略'
    },
    {
      projectTitle: 'StackExchange.Redis中文文档（翻译）',
      projectLink: 'https://weihanli.github.io/StackExchange.Redis-docs-cn/',
      projectDescription:
        'StackExchange.Redis 是 Stackoverflow 开发的 Redis C# 客户端，是目前.net应用使用的最多的 redis 客户端，性能优越。翻译的StackExchange.Redis文档'
    },
    {
      projectTitle: 'AccountingApp',
      projectLink: 'https://github.com/WeihanLi/AccountingApp',
      projectDescription: 'asp.net core开发的记账应用'
    },
    {
      projectTitle: 'asp.net core 中文文档（翻译）',
      projectLink:
        'https://weihanli.gitbooks.io/asp-net-core-documentation/content/',
      projectDescription: 'asp.net core 文档翻译'
    },
    {
      projectTitle: 'hpu新生宝典（WP手机应用）',
      projectLink:
        'https://www.microsoft.com/zh-cn/store/apps/hpu%E6%96%B0%E7%94%9F%E5%AE%9D%E5%85%B8/9wzdncrdhz6d',
      projectDescription:
        '河南理工大学新生手册WindowsPhone手机版，支持WP7，新生手册基本信息展示，摇一摇随机展示内容，自定义主题'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
