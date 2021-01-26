mapboxgl.accessToken = 'pk.eyJ1Ijoic2V1bjIyNTE3IiwiYSI6ImNranFyOWE2NDBsNGoydWp4ZDBhcXZ2ZjIifQ.5K_UcigNohlI-1415JCm9w';


navigator.geolocation.getCurrentPosition(getLocation, errorLocation, {enableHighAccuracy: true})

function getLocation(coords){
    const long = coords.coords.longitude
    const lat = coords.coords.latitude
    setMap([4.5962, 8.4928])
}

function errorLocation(){
    setMap([0, 0])
}





 function setMap(coords){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: coords, // starting position [lng, lat]
        zoom: 7 // starting zoom
    });
    map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        trackUserLocation: true
        }));


    var marker2 = new mapboxgl.Marker({
        color: '#6C63FF'
    })
    .setLngLat([4.5962, 8.4928])
    .setPopup(new mapboxgl.Popup().setHTML("<h3>Digita</h3>"))
    .addTo(map);


        var nav = new mapboxgl.NavigationControl();
        map.addControl(nav, 'bottom-right');

        // map.addControl(new mapboxgl.FullscreenControl({container: document.querySelector('body')}));
}