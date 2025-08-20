const myLocation = [YOUR_LAT, YOUR_LON];
const herLocation = [HER_LAT, HER_LON];

const line = L.polyline([myLocation, herLocation], {color: 'purple', weight: 4, opacity: 0.7,'}).addTo(map);
