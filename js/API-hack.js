//file:///Users/michaeldoyle/coding_projects/API-Hack/index.html

$(document).ready(function () {

var movies = [];

$.ajax({
    url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json',
    data: {
        apikey: 'y6b9ytcux4tjc8x4dmkkqcug'
    },
    type: 'GET',
    dataType: 'jsonp',
    success: function(data){
        //console.log('Success',data.movies[0].title.replace(/\s/g, "") );
        console.log('Success',data.movies);
        movies = data;
    },
    error: function(data){
        console.log('Error',data);
    }
});

//Add ability for users to modify criteria
//Once modified parse through movie list
//Display new movie list

}




function preloadImages(array) {
   if (!preloadImages.list) {
       preloadImages.list = [];
   }
   for (var i = 0; i < array.length; i++) {
       var img = new Image();
       img.src = array[i];
       preloadImages.list.push(img);
   }
}

var imageURLs = [
   "http://assets.nydailynews.com/polopoly_fs/1.1113853!/img/httpImage/image.jpg_gen/derivatives/landscape_635/m8dtwin-ec001-h-web.jpg",
   "https://static.squarespace.com/static/51b3dc8ee4b051b96ceb10de/51ce6099e4b0d911b4489b79/51ce61efe4b0d911b44a69de/1272517437147/1000w/commando5.jpg",
   "http://www.empireonline.com/images/uploaded/arnold-schwarzenegger-last-action-hero.jpg",
   "http://cdn.wegotthiscovered.com/wp-content/uploads/Total-Recall-Blu-Review-Pic-2-670x360.jpg",
   "http://www.mostlybymotorcycle.com/wp-content/uploads/2012/02/Arnie.jpg"
];

preloadImages(imageURLs);

app.controller("quizCtrl", function ($scope){
  $scope.showCorrect = "";
  $scope.done = false;
  $scope.user = {answer:"",
                 right: 0,
                 wrong: 0
                };
  $scope.index = 0;
  $scope.questions = qs;
  $scope.qCount = qs.length;
  $scope.submit = function(){
    var correctUrl= $scope.questions[$scope.index].image;
    if(this.index < $scope.qCount){
       if(this.user.answer==$scope.questions[$scope.index].correct){
         $scope.user.right++;
       }else{
         $scope.user.wrong++;
       }
      $scope.showCorrect=$scope.questions[$scope.index].correct;
      $('.backimage').fadeOut('slow', function(){
        $(this).css('background-image','url("'+correctUrl+'")').fadeIn();
      });
      if(this.index < $scope.qCount-1){
       $scope.index++;
      }
      else{
        $scope.done=true;
      }
    }

  };
});