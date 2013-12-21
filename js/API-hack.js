//file:///Users/michaeldoyle/coding_projects/API-Hack/index.html
function mctrl ($scope, $http){
  $scope.minScore = 101;
  $scope.movielist = [];
  $scope.isError = false;

  $.ajax({
    url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json',
    data: {
        apikey: 'y6b9ytcux4tjc8x4dmkkqcug'
    },
    type: 'GET',
    dataType: 'jsonp',
    success: function(data){
        //console.log('Success',data.movies[0].title.replace(/\s/g, "") );
        console.log('Success',data.movies, data.movies.length);
        for(var i =0; i < data.movies.length ; i++){
          $scope.movielist.push(data.movies[i]);
        }
        return $scope.movielist;
    },
    error: function(data){
        console.log('Error',data);
    }
  });

  $scope.setMinScore = function(){
    $scope.minScore = $scope.userMin;
    $scope.isEmpty = true;
  }

   $scope.scoreMatch = function(  ) {
    return function( item ) {
      if (item.ratings.audience_score >= $scope.minScore){
      $scope.isEmpty = false;
      }
      return item.ratings.audience_score >= $scope.minScore;

    };
  };

  $scope.clear = function(){
    $scope.minScore=101;
    $scope.userMin="";
    $scope.isEmpty = false;
  }

  $scope.audienceScore = function(item){
    return Math.abs(99 - item.ratings.audience_score);
  }


};

//Add ability for users to modify criteria
//Once modified parse through movie list
//Display new movie list
