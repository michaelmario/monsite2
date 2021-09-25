(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
      
  })()
  function myMap() {    
        var myCenter = new google.maps.LatLng( -20.932008,55.2936906,17);
        var mapProp = {center:myCenter, zoom:18, scrollwheel:false, draggable:false, mapTypeId:'satellite'};
        var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
        var marker = new google.maps.Marker({position:myCenter});
        marker.setMap(map);
      }
      myMap();

     