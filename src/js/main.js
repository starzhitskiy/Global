; (function () {
	"use strict";

	const menuToggle = document.querySelectorAll('.ba-menu-toggle');
	const mainContent = document.querySelector('.ba-main-content');

	menuToggle.forEach(element => {

		element.addEventListener('click', () => {
			mainContent.classList.toggle('shifted');
		})

	});


})();

// Initialize and add the map
window.initMap = () => {
	let mapDiv = document.querySelector('.ba-map');
	
	if(!mapDiv) return;

	let mapStyles = [
		{
		  "elementType": "geometry",
		  "stylers": [
			 {
				"color": "#212121"
			 }
		  ]
		},
		{
		  "elementType": "labels.icon",
		  "stylers": [
			 {
				"visibility": "off"
			 }
		  ]
		},
		{
		  "elementType": "labels.text.fill",
		  "stylers": [
			 {
				"color": "#757575"
			 }
		  ]
		},
		{
		  "elementType": "labels.text.stroke",
		  "stylers": [
			 {
				"color": "#212121"
			 }
		  ]
		},
		{
		  "featureType": "administrative",
		  "elementType": "geometry",
		  "stylers": [
			 {
				"color": "#757575"
			 }
		  ]
		},
		{
		  "featureType": "administrative.country",
		  "elementType": "labels.text.fill",
		  "stylers": [
			 {
				"color": "#9e9e9e"
			 }
		  ]
		},
		{
		  "featureType": "administrative.land_parcel",
		  "stylers": [
			 {
				"visibility": "off"
			 }
		  ]
		},
		{
		  "featureType": "administrative.locality",
		  "elementType": "labels.text.fill",
		  "stylers": [
			 {
				"color": "#bdbdbd"
			 }
		  ]
		},
		{
		  "featureType": "administrative.neighborhood",
		  "stylers": [
			 {
				"visibility": "off"
			 }
		  ]
		},
		{
		  "featureType": "poi",
		  "elementType": "labels.text",
		  "stylers": [
			 {
				"visibility": "off"
			 }
		  ]
		},
		{
		  "featureType": "poi",
		  "elementType": "labels.text.fill",
		  "stylers": [
			 {
				"color": "#757575"
			 }
		  ]
		},
		{
		  "featureType": "poi.business",
		  "stylers": [
			 {
				"visibility": "off"
			 }
		  ]
		},
		{
		  "featureType": "poi.park",
		  "elementType": "geometry",
		  "stylers": [
			 {
				"color": "#181818"
			 }
		  ]
		},
		{
		  "featureType": "poi.park",
		  "elementType": "labels.text",
		  "stylers": [
			 {
				"visibility": "off"
			 }
		  ]
		},
		{
		  "featureType": "poi.park",
		  "elementType": "labels.text.fill",
		  "stylers": [
			 {
				"color": "#616161"
			 }
		  ]
		},
		{
		  "featureType": "poi.park",
		  "elementType": "labels.text.stroke",
		  "stylers": [
			 {
				"color": "#1b1b1b"
			 }
		  ]
		},
		{
		  "featureType": "road",
		  "elementType": "geometry.fill",
		  "stylers": [
			 {
				"color": "#2c2c2c"
			 }
		  ]
		},
		{
		  "featureType": "road",
		  "elementType": "labels",
		  "stylers": [
			 {
				"visibility": "off"
			 }
		  ]
		},
		{
		  "featureType": "road",
		  "elementType": "labels.text.fill",
		  "stylers": [
			 {
				"color": "#8a8a8a"
			 }
		  ]
		},
		{
		  "featureType": "road.arterial",
		  "elementType": "geometry",
		  "stylers": [
			 {
				"color": "#373737"
			 }
		  ]
		},
		{
		  "featureType": "road.highway",
		  "elementType": "geometry",
		  "stylers": [
			 {
				"color": "#3c3c3c"
			 }
		  ]
		},
		{
		  "featureType": "road.highway.controlled_access",
		  "elementType": "geometry",
		  "stylers": [
			 {
				"color": "#4e4e4e"
			 }
		  ]
		},
		{
		  "featureType": "road.local",
		  "elementType": "labels.text.fill",
		  "stylers": [
			 {
				"color": "#616161"
			 }
		  ]
		},
		{
		  "featureType": "transit",
		  "elementType": "labels.text.fill",
		  "stylers": [
			 {
				"color": "#757575"
			 }
		  ]
		},
		{
		  "featureType": "water",
		  "elementType": "geometry",
		  "stylers": [
			 {
				"color": "#000000"
			 }
		  ]
		},
		{
		  "featureType": "water",
		  "elementType": "labels.text",
		  "stylers": [
			 {
				"visibility": "off"
			 }
		  ]
		},
		{
		  "featureType": "water",
		  "elementType": "labels.text.fill",
		  "stylers": [
			 {
				"color": "#3d3d3d"
			 }
		  ]
		}
	 ];
	// The location of Uluru
	var mapCenter = { lat:50.062099, lng: 19.937463 };
	// The map, centered at mapCenter
	var map = new google.maps.Map(
		mapDiv,
		{
			zoom: 13, 
			center: mapCenter,
			styles: mapStyles,
			disableDefaultUI: true
		}
	);
	// The marker, positioned at mapCenter
	var marker = new google.maps.Marker(
		{ 
			position: mapCenter, 
			map: map,
			icon: 'img/pin.svg'
		}
	);
}