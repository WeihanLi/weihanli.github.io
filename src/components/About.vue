<template>
  <!--#about-->
<div id="about">
    <!--.title -->
    <div class="title">
        About
    </div>
    <!--/.title -->
    <!--.content -->
    <div class="content">
        <span class="subtitle">Summary</span>
        <p>
            ASP.NET 全栈工程师，热爱互联网，热爱新技术
            <br/> 熟练使用常用 Web 和 .NET 技术栈，熟练使用 angularjs、bootstrap 和 layer 等前端框架， 熟练使用 git,svn 等代码版本管理工具
            <br/> 熟悉 .net core 有 asp.net core 项目经验以及从 asp.net mvc 迁移到 asp.net core
            <br/> 熟悉 JAVA Web 开发，了解 MyBatis，SpringMvc，Quartz 及 SSH 等常用框架
            <br/> 熟悉单元测试/测试代码覆盖率/持续集成/持续部署/日志异常监控等
            <br/>
            <br/>
            <a style="color:#1818d8" href="https://weihanli.github.io/WeihanLi.Profile/" target="_blank">查看更多资料</a>
        </p>
        <div class="clear"></div>
        <span class="subtitle">Activities</span>
        <section id="cd-timeline" class="cd-container">
            <div class="cd-timeline-block" v-for="(obj, index) in activities" v-bind:key="obj.activityTitle">
                <div class="cd-timeline-img" v-bind:class="{'cd-picture':index%2==0, 'cd-movie':index%2==1}">
                    <img v-if="index%2==0" src="@/assets/cd-icon-picture.svg" alt="Picture">
                    <img v-if="index%2==1" src="@/assets/cd-icon-movie.svg" alt="Picture">
                </div>
                <div class="cd-timeline-content">
                    <h2>{{obj.activityTitle}}</h2>
                    <p>{{obj.activityDescription}}</p>
                    <span class="cd-date">{{obj.activityDate}}</span>
                </div>
            </div>
        </section>
    </div>
    <!--/.content -->
</div>
<!--/#about -->
</template>
<style lang="less">
@import "./About.less";
</style>

<script>
export default {
  data() {
    return {
      activities: [
        {
          activityTitle: "大学生网络工作室",
          activityDescription:
            "经过努力，有幸进入到大学生网络工作室程序组，接触了程序组第一次培训，开始第一次接触微软技术C#",
          activityDate: "2013-01-15"
        },
        {
          activityTitle: "网络工作室暑期集训",
          activityDescription:
            "大一暑假开始集中培训,学长给我们做培训，SQLServer数据库基本操作以及ADO.NET连接数据库，ASP.NET基本控件的使用，小型信息系统的开发，暑期结束之后基本可以独立做一个简单小型的图书管理系统。 暑期除了程序组的培训还有文案组、设计组和动画组，和设计组一起学习了一些ps的操作，和文案组学习了一些word排版和ppt的制作，和动画组学习了简单视频处理绘声绘影的简单操作",
          activityDate: "2013-07-15"
        },
        {
          activityTitle: "暑假培训和新生手册WP版开发",
          activityDescription:
            "大二暑假给大一的培训，C#面向对象，数据库操作和ASP.NET常用控件使用等。 培训结束之后开发wp版的新生手册，7月底第一版开发完成，并在8月20号左右更新了第二版的新生手册，增加了自定义主题背景和摇一摇随机呈现内容的功能",
          activityDate: "2014-07-15"
        },
        {
          activityTitle: "MSP",
          activityDescription:
            "MSP（Microsoft Student Partners）是微软公司针对高校大学生在全球范围内所设立的项目。旨在鼓励那些在校园里积极倡导、推动创新实践，乐于积极帮助他人的优秀学生，给他们提供微软最前沿的技术资源，以及更广泛的交流、展示自我的平台。在微软的MSDN网站上看到MSP的介绍和招募信息，自己暑假刚开发了一个WP应用，想试一试于是发了一份申请表，等了一段时间收到来自北京的电话面试，之后成为了MSP的一员。",
          activityDate: "2014-11-15"
        },
        {
          activityTitle: "河南日昇昌网络科技有限公司",
          activityDescription:
            "大三暑假到郑州做一个P2P网站，负责后台开发，产品属于互联网金融，主要使用JAVA开发，支付接口使用的是盛付通托管支付。时间从2015年7月中旬到2016年3月底。",
          activityDate: "2015-07-15"
        },
        {
          activityTitle: "途虎养车",
          activityDescription:
            "毕业之后来到上海，面试了两家公司之后选择了途虎养车，主要在研发部门店组做.NET后台开发2017年8月转至架构组做研发，时间从2016年7月至今",
          activityDate: "2016-06-30"
        }
      ]
    };
  }
};
</script>
