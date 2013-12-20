//file:///Users/michaeldoyle/coding_projects/API-Hack/index.html
var movies = [];

function mctrl ($scope){
  $scope.itemlist = [];
  $.ajax({
    url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json',
    data: {
        apikey: 'y6b9ytcux4tjc8x4dmkkqcug'
    },
    type: 'GET',
    dataType: 'jsonp',
    success: function(data){
        console.log('Success',data.movies);
        $scope.movies = data.movies;
    },
    error: function(data){
        console.log('Error',data);
    }


  /*$scope.clear = function(){
          var oldList = $scope.itemlist;
          $scope.itemlist = [];
          angular.forEach (oldList, function (item){
            if(!item.bought) $scope.itemlist.push(item);
          });*/
  });


//Add ability for users to modify criteria
//Once modified parse through movie list
//Display new movie list
};
