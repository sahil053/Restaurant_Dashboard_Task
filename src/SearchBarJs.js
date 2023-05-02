import $ from 'jquery';
import './Homepage';

$(document).ready(function() {

    $("#getMessage").on("click", function() {
     var valueSearchBox = $('#getText').val()
     if (valueSearchBox === "") {
      return;
     }
     select();
    });
    //--------------------------------------------------SEARCH BY CITY-----------------------------------------
   
    function select() {
     var valueDropdown = $('#select_id').val();
     var valueSearchBox = $('#getText').val()
     var searchCity = "&q=" + valueSearchBox;
     var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://developers.zomato.com/api/v2.1/search?entity_id=" + valueDropdown + "&entity_type=city" + searchCity + "&count=100",
      "method": "GET",
      "headers": {
       "user-key": "d710754ce67200fb6fb9b5e26139f50e",
       'Content-Type': 'application/x-www-form-urlencoded'
      }
     }
   
     $.getJSON(settings, function(data) {
   
      data = data.restaurants;
      var html = "";
   
      $.each(data, function(index, value) {
   
       var x = data[index];
        console.log(typeof x);
       $.each(x, function(index, value) {
        var location = x.restaurant.location;
        var userRating = x.restaurant.user_rating;
        var name = value.name;
        html += "<div class='data img-rounded'>";
        html += "<div class='rating'>";
   
        
        html += "</div>";
        html += "<img class='resimg img-rounded' src=" + value.thumb + " alt='Restaurant Image' height='185' width='185'>";
        html += "<a href=" + value.url + " target='_blank' class='action_link'><h2 style='color:red;'><strong>" + value.name + "</strong></h2></a>";
        html += "  <strong class='text-primary'>" + location.locality + "</strong><br>";
        html += "  <h6 style='color:grey;'><strong>" + location.address + "</strong></h6><hr>";
        html += "</div><br>";
        html+= "<button +  onClick=" + add($(  {name}  )) + "> Add to Bookmark </button>"; 
       });
      });

      function add(val){
      }
      $(".message").html(html);
     });
   
    }


   
    $("#select_id").change(function() {
     select();
    });
});