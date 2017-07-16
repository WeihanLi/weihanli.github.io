function getRouteData(){
    var url = location.href;
    var array = url.split("#/");
    if(array.length>1){
        var modules = ['about','education','projects','skills'];
        for(var i=0;i<modules.length;i++){
            if(modules[i] == array[1]){
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