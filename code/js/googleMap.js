let map;

async function initMap() {
    /* position은 임시로 Ncube의 위도 경도를 사용하였습니다. -> 추후 WowSystec의 위,경도로 바뀌어야합니다. */
  const position = { lat: 36.365796125722525, lng: 127.38050308556987 }; 

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 18,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();