var GoogleCustomMap;

function init() {

/*----------------------------------------------------------------- 
 ARRAY with mapstyles from SNAZZY MAPS  https://snazzymaps.com/
-----------------------------------------------------------------  */
 var pinLocation = new google.maps.LatLng(51.0363878, 3.7010603); //coordinaten: http://mondeca.com/index.php/en/any-place-en#

 var styles = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#225f78"
            },
            {
                "visibility": "on"
            }
        ]
    }
];


/*----------------------------------------------------------------- 
  CREATE A VARIABLE AND BIND THE STYLE ARRAY 
-----------------------------------------------------------------  */
 var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});


/*----------------------------------------------------------------- 
    GOOGLE MAPS SPECIFIC OPTIONS
-----------------------------------------------------------------  */
  var mapOptions = {

  	//standard funtionality
    zoom: 14, //the zoom level of the map
    center: pinLocation, //variable that contains the coordinates of the location
    // mapTypeControlOptions: {
    //   mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']//MapTypeId.SATELLITE, MapTypeId.HYBRID, MapTypeId.TERRAIN, MapTypeId.ROADMAP
    // },

    //buttons + and -
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL,
      position: google.maps.ControlPosition.TOP_RIGHT
    },
   
	//maptype: map / satellite
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.SMALL, //small
      position: google.maps.ControlPosition.TOP_LEFT
    },
    
    //would you like to add functionality to scale the map?
    scaleControl: false,
    scaleControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    },

    //streetView
    streetViewControl: false,

    //...
    overviewMapControl: false
  };


//BIND THE mapoptions to the ID
  var GoogleCustomMap = new google.maps.Map(document.getElementById('map'),
    mapOptions);

  GoogleCustomMap.mapTypes.set('map_style', styledMap); //stijl aan de map gaan koppelen
  GoogleCustomMap.setMapTypeId('map_style'); 

  
/*----------------------------------------------------------------- 
  ADD A CUSTOM MARKER
-----------------------------------------------------------------  */
var iconBase = ''; //add the location of the marker image
var marker = new google.maps.Marker({
    position: pinLocation,
    map: GoogleCustomMap,
    icon: iconBase +'go.jpeg'
})
}


function loadScript() {
  var script = document.createElement('script');
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
  document.body.appendChild(script);
}

window.onload = loadScript;

/*----------------------------------------------------------------- 
  MORE INFO? https://developers.google.com/maps/  **HAPPY MAPPING**
-----------------------------------------------------------------  */

