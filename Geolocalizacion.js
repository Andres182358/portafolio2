function Geolocalizacion(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(posicion) {
            var latitud = posicion.coords.latitude;
            var longitud = posicion.coords.longitude;
            alert('Tu ubicacion actual es: '+ latitud+ ', ' + longitud);
        });
    } else {
        alert('Tu navegador no soporta la Web Geolocation API');
    }
}