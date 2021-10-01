(function () {
    'use strict'
// Initialize and add the map
function initMap() {
    // The location 
     
    const myLocation = { lat:-20.9317515, lng:55.294215};
    // The map, centered at myLocation
    const map = new google.maps.Map(document.getElementById("googleMap"), {
      zoom:12,
      center: myLocation,
      scrollwheel:true, 
      draggable:true,
       mapTypeId:'satellite',
       title: '32 Avenue 14 juillet 1789 '
    });
    // The marker, positioned at myLocation
    const marker = new google.maps.Marker({
      position: myLocation,
      map: map,
    });
  }
  google.maps.event.addDomListener(window, 'load', initMap);
  
   })()
   /* function myMap() {   
         let myCenter = new google.maps.LatLng( -20.932008,55.2936906,17);
         let mapProp = {center:myCenter, zoom:18, scrollwheel:false, draggable:false, mapTypeId:'satellite'};
         let map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
         let marker = new google.maps.Marker({position:myCenter});
          marker.setMap(map);
        }
        myMap();*/
  
       