var roomMap = L.map('leaflet',{
    center: [0.0,0.0],
    zoom:13,
    attributionControl:false,
    zoomControl: false;
});


L.tileLayer('').addTo(roomMap);

function onMapClick(event){
    
}

roomMap.on('click', onMapClick);
