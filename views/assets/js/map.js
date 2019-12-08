var map = L.map('mapid').setView([23.813371, 90.423376], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([23.813371, 90.423376]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
        L.marker([23.817007, 90.424411]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();





function findPlaces() {
// prepare variables (filter)
var type = document.getElementById('gmap_type').value;
var radius = document.getElementById('gmap_radius').value;
var keyword = document.getElementById('gmap_keyword').value;
var lat = document.getElementById('lat').value;
var lng = document.getElementById('lng').value;
var cur_location = new google.maps.LatLng(lat, lng);
// prepare request to Places
var request = {
location: cur_location,
radius: radius,
types: [type]
};
if (keyword) {
request.keyword = [keyword];
}
// send request
service = new google.maps.places.PlacesService(map);
service.search(request, createMarkers);
}
                