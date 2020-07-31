import MapboxClient from '../services/mapBoxClient';
import { lineString as makeLineString } from '@turf/helpers';

const generateRoute = async (currentPositionPoint, destinationPoint) => {
  const reqOptions = {
    waypoints: [
      { coordinates: destinationPoint },
      { coordinates: currentPositionPoint },
    ],
    profile: 'walking',
    geometries: 'geojson',
  };
  const directionsClient = MapboxClient.getDirectionsClient();
  if (directionsClient != null) {
    const res = await directionsClient.getDirections(reqOptions).send();
    return makeLineString(res.body.routes[0].geometry.coordinates);
  } else {
    throw Error('Mapbox gl token is not initialized');
  }
};

export { generateRoute };
