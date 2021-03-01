mapboxgl.accessToken = 'pk.eyJ1IjoiYXJndWVyYWRldiIsImEiOiJja2xrOHg1c2QzNjBrMnZ0a2p6ejlmbWNwIn0.g5ZCIR6gD6L6NUksny8k4g';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-88.896530, 13.794185],
    zoom: 7
});

var marker = new mapboxgl.Marker()
    .setLngLat([-88.896530, 13.794185])
    .addTo(map);

var marker1 = new mapboxgl.Marker()
    .setLngLat([-88.348129, 13.354966])
    .setPopup(new mapboxgl.Popup().setHTML("<h1>El Transito</h1>"))
    .addTo(map);