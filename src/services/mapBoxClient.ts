import MapboxDirectionsFactory from '@mapbox/mapbox-sdk/services/directions';
import MapboxGL from '@react-native-mapbox-gl/maps';

let clientOptions: any = null;
let directionsClient: any = null;

const initMapbox = (token: string) => {
  clientOptions = { accessToken: token };
  directionsClient = MapboxDirectionsFactory(clientOptions);
  MapboxGL.setAccessToken(token);
};

const getDirectionsClient = () => {
  return directionsClient;
};

const MapBoxClient = { directionsClient, initMapbox, getDirectionsClient };

export default MapBoxClient;
