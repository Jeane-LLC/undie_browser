var roomMap = L.map('leaflet').setView([0.0,0.0],13);
L.tileLayer('').addTo(roomMap);

function onMapClick(event){
    
}

roomMap.on('click', onMapClick);
