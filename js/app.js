function getRouteData(){
    var url = location.href;
    var array = url.split("#/");
    if(array.length>1){
        var modules = ['about','education','projects','skills'];
        for(var i=0;i<modules.length;i++){
            if(modules[i] === array[1]){
                return array[1];
            }
        }
    }
    return "about";                
}
angular.module("cv",[]).controller("CvCtrl",function($scope,$http){
        $scope.currentYear = new Date().getFullYear();
        $scope.item = getRouteData();
        //设置当前项 
        $scope.setItem = function (item){
            $scope.item = item;
        };
        //
        $scope.isSelected = function(item){
            return item == $scope.item;
        };

        $scope.socialLinks = [
            { "title":"outlook","iconPath":"./images/social_icons/outlook.ico","linkUrl":"mailto:weihanli@outlook.com" },
            { "title":"github","iconPath":"./images/social_icons/github.ico","linkUrl":"https://github.com/WeihanLi" },
            { "title":"osChina","iconPath":"./images/social_icons/oschina.ico","linkUrl":"https://gitee.com/weihanli" },
            { "title":"gitbook","iconPath":"./images/social_icons/gitbook.ico","linkUrl":"https://www.gitbook.com/@weihanli" },
            { "title":"cnblogs","iconPath":"./images/social_icons/cnblogs.ico","linkUrl":"https://weihanli.cnblogs.com/" },
            { "title":"jianshu","iconPath":"./images/social_icons/jianshu.ico","linkUrl":"https://www.jianshu.com/u/9ea357af743b" },
            { "title":"weibo","iconPath":"./images/social_icons/weibo.ico","linkUrl":"https://weibo.com/weihanli" }            
        ];

        // activities
        $scope.activities = null;
        $http({
            method:'GET',
            url:'/data/activities.json'
        }).then(function(response){
            if(response.status == 200){
                $scope.activities = response.data;
            }
        });

        // skills
        $scope.skills = null;
        $http({
            method:'GET',
            url:'/data/skills.json'
        }).then(function(response){
            if(response.status == 200){
                $scope.skills = response.data;
            }
        });
        
        // projects
        $scope.projects = null;            
        $http({
            method:'GET',
            url:'/data/projects.json'
        }).then(function(response){
            if(response.status == 200){
                $scope.projects = response.data;
            }
        });
});