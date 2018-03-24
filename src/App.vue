<template>
    <!-- #warpper -->
  <div id="wrapper">
    <!--  #sidebar -->
    <div id="sidebar">
      <!--top section of the sidebar-->
      <div id="topSide">
        <img class="avatar" src="./assets/avator.jpg" alt="avator" />
        <h3 style="text-align:center"> ASP.NET Web Full Stack Engineer</h3>
        <div class="box">
          <span class="subtitle">{{currentYear - 1994}}</span>
          <span>Years
            <br/> Old</span>
        </div>
        <div class="box">
          <span class="subtitle">{{currentYear - 2015}}</span>
          <span>Years
            <br/> Experience</span>
        </div>
        <div class="box">
          <span class="subtitle">20 + </span>
          <span>Projects
            <br/> Developed</span>
        </div>
        <div class="clear"></div>
      </div>
      <!-- /#topside  -->
      <!-- #nav -->
      <div id="nav">
        <ul>
          <li v-for="item in navLinks" v-bind:key="item.title" v-bind:class="{'active':isSelected(item.title)}" v-on:click="setItem(item.title)">
            <router-link v-bind:to="item.title">{{item.desc}}</router-link>
          </li>
        </ul>
      </div>
      <!--/#nav -->
      <!-- #footer contact info -->
      <footer id="contact">
          <address v-for="item in socialLinks" v-bind:key="item.title">
          <a v-bind:href="item.linkUrl" target="_blank">
            <img class="social-icon" v-bind:src="item.iconPath" v-bind:alt="item.title" />
          </a>
        </address>
      </footer>
      <!-- /#footer -->
    </div>
    <!-- /#sidebar -->
    <!--#main -->
    <div id="main">
      <router-view></router-view>
    </div>
    <!-- /#main main content end -->
  </div>
  <!-- /#wrapper -->
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      currentYear: new Date().getFullYear(),
      item: "about",
      navLinks: [
        {
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
      ],
      socialLinks: [
        {
          title: "outlook",
          iconPath: "./static/social_icons/outlook.ico",
          linkUrl: "mailto:weihanli@outlook.com"
        },
        {
          title: "github",
          iconPath: "./static/social_icons/github.ico",
          linkUrl: "https://github.com/WeihanLi"
        },
        {
          title: "osChina",
          iconPath: "./static/social_icons/oschina.ico",
          linkUrl: "https://gitee.com/weihanli"
        },
        {
          title: "gitbook",
          iconPath: "./static/social_icons/gitbook.ico",
          linkUrl: "https://www.gitbook.com/@weihanli"
        },
        {
          title: "cnblogs",
          iconPath: "./static/social_icons/cnblogs.ico",
          linkUrl: "https://weihanli.cnblogs.com/"
        },
        {
          title: "jianshu",
          iconPath: "./static/social_icons/jianshu.ico",
          linkUrl: "https://www.jianshu.com/u/9ea357af743b"
        },
        {
          title: "weibo",
          iconPath: "./static/social_icons/weibo.ico",
          linkUrl: "https://weibo.com/weihanli"
        }
      ]
    };
  },
  methods: {
    getRouteData: function() {
      if (location.hash) {
        var hashVal = location.hash.substring(2);
        var modules = ["about", "education", "projects", "skills"];
        for (var i = 0; i < modules.length; i++) {
          if (modules[i] === hashVal) {
            return hashVal;
          }
        }
      }
      return "about";
    },
    setItem: function(item) {
      this.item = item;
    },
    isSelected: function(item) {
      return this.item === item;
    }
  }
};
</script>
<style lang="less">
@import "./App.less";
</style>

