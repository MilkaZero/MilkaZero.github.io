$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

// google map

 
var place = new google.maps.LatLng(43.704213,7.290536);
var parliament = new google.maps.LatLng(43.704213,7.290536);
var marker;
var map;
var grayStyles = [
{
  featureType: "all",
  stylers: [
	{ saturation: -90 },
	{ lightness: 50 }
  ]
}
];

function initialize() {
  var mapOptions = {
	styles: grayStyles,
    zoom: 20,
	scrollwheel: false,
	clickable: false,
	draggable:false,
    center: place
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);

  marker = new google.maps.Marker({
    map:map,
    animation: google.maps.Animation.DROP,
    position: parliament
	
  });
  google.maps.event.addListener(marker, 'click', toggleBounce);
}

function toggleBounce() {

  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

google.maps.event.addDomListener(window, 'load', initialize);