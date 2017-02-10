// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');
  
  
   var mymap = L.map('mapid').setView([38.778,0.1886], 14);
  L.tileLayer('https://api.mapbox.com/styles/v1/pepext/ciyukdiyw006w2sud8lovj90d/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGVwZXh0IiwiYSI6ImNpeXVnemE1aTAwMWsycXJyYm5hNDB0MWMifQ.T56Y_P8iMZQ_KTbE0_Wdtg',{
    attribution: ' ',
    maxZoom: 20,
    id: '',
    accessToken: ''
}).addTo(mymap);
  
  
  $.get('/dreams', function(dreams) {
    dreams.forEach(function(dream) {
      $('<li></li>').text(dream).appendTo('ul#dreams');
    });
  });

  $('form').submit(function(event) {
    event.preventDefault();
    var dream = $('input').val();
    $.post('/dreams?' + $.param({dream: dream}), function() {
      $('<li></li>').text(dream).appendTo('ul#dreams');
      $('input').val('');
      $('input').focus();
    });
  });

  });
