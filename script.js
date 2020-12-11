const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiY2FtZXJvbmZyb3N0IiwiYSI6ImNraWtzNXNucjBjd2oyenN2eDFnOWU5YTEifQ.pe_0wM6cPgw2DcMQQ7ItSg";

var map = new mapboxgl.Map({
  accessToken: MAPBOX_ACCESS_TOKEN,
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
});

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function setupMap(centerPosition) {}

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {}
