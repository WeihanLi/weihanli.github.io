var app = angular.module("cv", []);
app.controller("CvCtrl", ["$scope", "$http", function ($scope, $http) {
    //
    $scope.getRouteData = function () {
        var url = location.href;
        var array = url.split("#/");
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
    $scope.item = $scope.getRouteData();
    //设置当前项
    $scope.setItem = function (item) {
        $scope.item = item;
    };
    $scope.isSelected = function (item) {
        return item == $scope.item;
    };
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
            "linkUrl": "https://weibo.com/weihanli"
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
    $scope.projects = [{
            "projectTitle": "活动室预约系统",
            "projectLink": "http://reservation.weihanli.xyz",
            "projectDescription": "学校多个活动室，不同时间段的提前预约申请及处理，申请表的打印，通知公告，微信开发"
        },
        {
            "projectTitle": "SparkTodo",
            "projectLink": "https://github.com/WeihanLi/SparkTodo",
            "projectDescription": "基于 .NET Core 的一个 WebApi 项目，使用 swagger 自动生成接口文档， 身份验证使用轻量级的 JsonWebToken 来验证"
        },
        {
            "projectTitle": "MvcSimplePager",
            "projectLink": "https://github.com/WeihanLi/MvcSimplePager",
            "projectDescription": "针对asp.net mvc 和 asp.net core 设计的通用、扩展性良好的轻量级分页扩展"
        },
        {
            "projectTitle": "EntityFramework.DbDescriptionHelper",
            "projectLink": "https://github.com/WeihanLi/EntityFramework.DbDescriptionHelper",
            "projectDescription": "EF生成数据库描述组件"
        },
        {
            "projectTitle": "DbTool",
            "projectLink": "https://github.com/WeihanLi/DbTool",
            "projectDescription": "数据库工具，根据表结构文档生成创建表sql，根据数据库表信息导出Model和表结构文档"
        },
        {
            "projectTitle": "AccessControlDemo",
            "projectLink": "https://github.com/WeihanLi/AccessControlDemo",
            "projectDescription": "ASP.NET MVC 权限控制插件，自定义权限控制策略"
        },
        {
            "projectTitle": "StackExchange.Redis中文文档（翻译）",
            "projectLink": "http://weihanli.xyz/StackExchange.Redis-docs-cn/",
            "projectDescription": "StackExchange.Redis 是 Stackoverflow 开发的 Redis C# 客户端，是目前.net应用使用的最多的 redis 客户端，性能优越。翻译的StackExchange.Redis文档"
        },
        {
            "projectTitle": "AccountingApp",
            "projectLink": "https://github.com/WeihanLi/AccountingApp",
            "projectDescription": "asp.net core开发的记账应用"
        },
        {
            "projectTitle": "asp.net core 中文文档（翻译）",
            "projectLink": "https://weihanli.gitbooks.io/asp-net-core-documentation/content/",
            "projectDescription": "asp.net core 文档翻译"
        },
        {
            "projectTitle": "河南理工大学明德网",
            "projectLink": "http://218.196.240.149:8080",
            "projectDescription": "党委宣传部 下的 宣传、 通知和公告发布等"
        },
        {
            "projectTitle": "NewsCms",
            "projectLink": "https://github.com/WeihanLi/NewsCMS",
            "projectDescription": "基于对学校网站常用的功能总结而做的一个模板，其他网站可直接在这个基础上进行修改，基本功能：网页静态化，网页访问统计，文件的上传下载，富文本编辑器，codeMirro在线代码编辑器，站内搜索等"
        },
        {
            "projectTitle": "私密空间",
            "projectLink": "https://github.com/WeihanLi/PrivateSpaceDemo",
            "projectDescription": "PrivateSpace私密空间，仿QQ空间功能，微信公共号开发"
        },
        {
            "projectTitle": "人民艺术品展览网站",
            "projectLink": "https://github.com/WeihanLi/ArtGallery",
            "projectDescription": "响应式人民艺术品展览网站，艺术品图片上传，裁剪处理，生成缩略图等"
        },
        {
            "projectTitle": "hpu新生宝典（WP手机应用）",
            "projectLink": "https://www.microsoft.com/zh-cn/store/apps/hpu%E6%96%B0%E7%94%9F%E5%AE%9D%E5%85%B8/9wzdncrdhz6d",
            "projectDescription": "河南理工大学新生手册WindowsPhone手机版，支持WP7，新生手册基本信息展示，摇一摇随机展示内容，自定义主题"
        },
        {
            "projectTitle": "开心一哈",
            "projectLink": "https://www.microsoft.com/zh-cn/store/p/JustLaugh/9nblggh3ddhm",
            "projectDescription": "JUST LAUGH(WP应用)，开心一下，利用来福岛的笑话API作为内容源,不想看的时候可以语音播放"
        },
        {
            "projectTitle": "mini-toast(原my-toast)",
            "projectLink": "https://github.com/WeihanLi/mini_toast",
            "projectDescription": "用 js 实现的一个仿微信通知消息的一个 toast通知效果，基于weui toast修改"
        },
        {
            "projectTitle": "hpu新生宝典（WP手机应用）",
            "projectLink": "https://www.microsoft.com/zh-cn/store/apps/hpu%E6%96%B0%E7%94%9F%E5%AE%9D%E5%85%B8/9wzdncrdhz6d",
            "projectDescription": "河南理工大学新生手册WindowsPhone手机版，支持WP7，新生手册基本信息展示，摇一摇随机展示内容，自定义主题"
        },
        {
            "projectTitle": "Odis",
            "projectLink": "https://git.oschina.net/weihanli/odis",
            "projectDescription": "Odis (angularjs+Cordova,Android)，零距离相机，图片处理合成主要分为两大模块：图片合成和虚拟影像，图片合成是将两张图片各取一半合成为一张图片，虚拟影像可以实现图片透明度的调整从而使得两张图片融洽的合为一体"
        }
    ];
}]);