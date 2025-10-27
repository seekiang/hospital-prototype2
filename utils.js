export async function searchPOIByIds(poiIds) {
  const service = new MapxusMap.PoisService();
  try {
    const result = await service.searchByIds(poiIds);
    console.log("The POI search result:", result);
    return result;
  } catch (error) {
    console.error("Failed to search POI by Ids:", error);
  }
}

export async function paintRoute(fromCoords, toCoords, MapxusMap, maplibreMap) {
  const routePainter = new MapxusMap.RoutePainter(maplibreMap, {
    indoorLineColor: "green",
    disableDashedLine: true,
    inactiveRouteOpacity: 0,
    markers: {
      from: "https://map-service.mapxus.com/bssww/assets/origin-marker.png",
      to: "https://map-service.mapxus.com/bssww/assets/destination-marker.png",
    },
  });
}
