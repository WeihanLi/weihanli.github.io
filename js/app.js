angular.module("cv", [])
    .config(['$compileProvider', function ($compileProvider) {
        $compileProvider.debugInfoEnabled(false);
        $compileProvider.commentDirectivesEnabled(false);
        $compileProvider.cssClassDirectivesEnabled(false);
    }])
    .controller("CvCtrl", ["$scope", function ($scope) {
        //
        this.getRouteData = function () {
            var url = location.href;
            var array = url.split("!#");
            if (array.length > 1) {
                var modules = ['about', 'education', 'projects', 'skills'];
                for (var i = 0; i < modules.length; i++) {
                    if (modules[i] === array[1]) {
                        return array[1];
                    }
                }
            }
            return "about";
        };
        $scope.currentYear = new Date().getFullYear();
        $scope.item = this.getRouteData();
        //设置当前项
        $scope.setItem = function (item) {
            $scope.item = item;
        };
        $scope.isSelected = function (item) {
            return item === $scope.item;
        };
        $scope.navLinks = [{
                title: "about",
                desc: "About"
            },
            {
                title: "education",
                desc: "Education"
            },
            {
                title: "skills",
                desc: "Skills"
            },
            {
                title: "projects",
                desc: "Projects"
            }
        ];
        $scope.socialLinks = [{
                "title": "outlook",
                "iconPath": "./images/social_icons/outlook.ico",
                "linkUrl": "mailto:weihanli@outlook.com"
            },
            {
                "title": "github",
                "iconPath": "./images/social_icons/github.ico",
                "linkUrl": "https://github.com/WeihanLi"
            },
            {
                "title": "osChina",
                "iconPath": "./images/social_icons/oschina.ico",
                "linkUrl": "https://gitee.com/weihanli"
            },
            {
                "title": "gitbook",
                "iconPath": "./images/social_icons/gitbook.ico",
                "linkUrl": "https://www.gitbook.com/@weihanli"
            },
            {
                "title": "cnblogs",
                "iconPath": "./images/social_icons/cnblogs.ico",
                "linkUrl": "https://weihanli.cnblogs.com/"
            },
            {
                "title": "jianshu",
                "iconPath": "./images/social_icons/jianshu.ico",
                "linkUrl": "https://www.jianshu.com/u/9ea357af743b"
            },
            {
                "title": "weibo",
                "iconPath": "./images/social_icons/weibo.ico",
                "linkUrl": "https://weibo.com/WeihanLee"
            }
        ];
        // activities
        $scope.activities = [{
                "activityTitle": "大学生网络工作室",
                "activityDescription": "经过努力，有幸进入到大学生网络工作室程序组，接触了程序组第一次培训，开始第一次接触微软技术C#",
                "activityDate": "2013-01-15"
            },
            {
                "activityTitle": "网络工作室暑期集训",
                "activityDescription": "大一暑假开始集中培训,学长给我们做培训，SQLServer数据库基本操作以及ADO.NET连接数据库，ASP.NET基本控件的使用，小型信息系统的开发，暑期结束之后基本可以独立做一个简单小型的图书管理系统。 暑期除了程序组的培训还有文案组、设计组和动画组，和设计组一起学习了一些ps的操作，和文案组学习了一些word排版和ppt的制作，和动画组学习了简单视频处理绘声绘影的简单操作",
                "activityDate": "2013-07-15"
            },
            {
                "activityTitle": "暑假培训和新生手册WP版开发",
                "activityDescription": "大二暑假给大一的培训，C#面向对象，数据库操作和ASP.NET常用控件使用等。 培训结束之后开发wp版的新生手册，7月底第一版开发完成，并在8月20号左右更新了第二版的新生手册，增加了自定义主题背景和摇一摇随机呈现内容的功能",
                "activityDate": "2014-07-15"
            },
            {
                "activityTitle": "MSP",
                "activityDescription": "MSP（Microsoft Student Partners）是微软公司针对高校大学生在全球范围内所设立的项目。旨在鼓励那些在校园里积极倡导、推动创新实践，乐于积极帮助他人的优秀学生，给他们提供微软最前沿的技术资源，以及更广泛的交流、展示自我的平台。在微软的MSDN网站上看到MSP的介绍和招募信息，自己暑假刚开发了一个WP应用，想试一试于是发了一份申请表，等了一段时间收到来自北京的电话面试，之后成为了MSP的一员。",
                "activityDate": "2014-11-15"
            },
            {
                "activityTitle": "河南日昇昌网络科技有限公司",
                "activityDescription": "大三暑假到郑州做一个P2P网站，负责后台开发，产品属于互联网金融，主要使用JAVA开发，支付接口使用的是盛付通托管支付。时间从2015年7月中旬到2016年3月底。",
                "activityDate": "2015-07-15"
            },
            {
                "activityTitle": "途虎养车",
                "activityDescription": "毕业之后来到上海，面试了两家公司之后选择了途虎养车，主要在研发部门店组做.NET后台开发2017年8月转至架构组做研发，时间从2016年7月至今",
                "activityDate": "2016-06-30"
            }
        ];
        // skills
        $scope.skills = [{
                "skillName": "photoshop",
                "skillScore": 60
            },
            {
                "skillName": "javascript",
                "skillScore": 80
            },
            {
                "skillName": "jquery",
                "skillScore": 80
            },
            {
                "skillName": "html&css",
                "skillScore": 80
            },
            {
                "skillName": "angularjs",
                "skillScore": 80
            },
            {
                "skillName": "C#",
                "skillScore": 90
            },
            {
                "skillName": "Java",
                "skillScore": 60
            },
            {
                "skillName": "ASP.NET",
                "skillScore": 90
            },
            {
                "skillName": "SQL Server",
                "skillScore": 80
            },
            {
                "skillName": "git",
                "skillScore": 80
            },
            {
                "skillName": "svn",
                "skillScore": 70
            }
        ];
        // projects
        $scope.projects = [
            {
                projectTitle: "WeihanLi.Common",
                projectLink: "https://github.com/WeihanLi/WeihanLi.Common",
                projectDescription:
                  ".NET常用扩展方法，帮助类等，适用于net45及.netstandard2.0"
              },
              {
                projectTitle: "WeihanLi.Npoi",
                projectLink: "https://github.com/WeihanLi/WeihanLi.Npoi",
                projectDescription:
                  "NPOI扩展，适用于net45及.netstandard2.0"
              },
              {
                projectTitle: "WeihanLi.Redis",
                projectLink: "https://github.com/WeihanLi/WeihanLi.Redis",
                projectDescription:
                  "基于 StackExchange.Redis的Redis扩展，适用于net45及.netstandard2.0"
              },
              {
                projectTitle: "活动室预约系统",
                projectLink: "https://reservation.weihanli.xyz",
                projectDescription:
                  "学校多个活动室，不同时间段的提前预约申请及处理，申请表的打印，通知公告，微信开发"
              },
              {
                projectTitle: "SparkTodo",
                projectLink: "https://github.com/WeihanLi/SparkTodo",
                projectDescription:
                  "基于 .NET Core 的一个 WebApi 项目，使用 swagger 自动生成接口文档， 身份验证使用轻量级的 JsonWebToken 来验证"
              },
              {
                projectTitle: "MvcSimplePager",
                projectLink: "https://github.com/WeihanLi/MvcSimplePager",
                projectDescription:
                  "针对asp.net mvc 和 asp.net core 设计的通用、扩展性良好的轻量级分页扩展"
              },
              {
                projectTitle: "DbTool",
                projectLink: "https://github.com/WeihanLi/DbTool",
                projectDescription:
                  "数据库工具，根据表结构文档生成创建表sql，根据数据库表信息导出Model和表结构文档"
              },
              {
                projectTitle: "AccessControlHelper",
                projectLink: "https://github.com/WeihanLi/AccessControlHelper",
                projectDescription: "ASP.NET MVC 权限控制插件，自定义权限控制策略"
              },
              {
                projectTitle: "StackExchange.Redis中文文档（翻译）",
                projectLink: "https://weihanli.github.io/StackExchange.Redis-docs-cn/",
                projectDescription:
                  "StackExchange.Redis 是 Stackoverflow 开发的 Redis C# 客户端，是目前.net应用使用的最多的 redis 客户端，性能优越。翻译的StackExchange.Redis文档"
              },
              {
                projectTitle: "AccountingApp",
                projectLink: "https://github.com/WeihanLi/AccountingApp",
                projectDescription: "asp.net core开发的记账应用"
              },
              {
                projectTitle: "asp.net core 中文文档（翻译）",
                projectLink:
                  "https://weihanli.gitbooks.io/asp-net-core-documentation/content/",
                projectDescription: "asp.net core 文档翻译"
              },
              {
                projectTitle: "hpu新生宝典（WP手机应用）",
                projectLink:
                  "https://www.microsoft.com/zh-cn/store/apps/hpu%E6%96%B0%E7%94%9F%E5%AE%9D%E5%85%B8/9wzdncrdhz6d",
                projectDescription:
                  "河南理工大学新生手册WindowsPhone手机版，支持WP7，新生手册基本信息展示，摇一摇随机展示内容，自定义主题"
              }
        ];
    }]);
