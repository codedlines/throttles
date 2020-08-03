import React, { useState } from 'react';
import { Button } from 'react-native-elements';
import MapboxGL, { CameraSettings } from '@react-native-mapbox-gl/maps';
import { point } from '@turf/helpers';
import Geolocation from '@react-native-community/geolocation';
import { color, buttonNames, ToastMessages } from '../constants';
import styled from 'styled-components/native';
import { generateRoute } from '../utils/geolocation';
import { RESULTS } from 'react-native-permissions';
import Permissions from '../utils/permissions';
import { Toast } from '@coded-lines/throttles';

const Origin = ({ originPoint }) => {
  const style = [layerStyles.origin];

  if (!originPoint) {
    return null;
  }

  return (
    <MapboxGL.ShapeSource id="origin" shape={point(originPoint)}>
      <MapboxGL.Animated.CircleLayer id="originInnerCircle" style={style} />
    </MapboxGL.ShapeSource>
  );
};

const Route = ({ route }) => {
  if (!route) {
    return null;
  }

  return (
    <MapboxGL.ShapeSource id="routeSource" shape={route}>
      <MapboxGL.LineLayer
        id="routeFill"
        style={layerStyles.route}
        belowLayerID="originInnerCircle"
      />
    </MapboxGL.ShapeSource>
  );
};

const Camera = ({ originPoint, destinationPoint }) => {
  if (!originPoint) {
    return (
      <MapboxGL.Camera zoomLevel={15} centerCoordinate={destinationPoint} />
    );
  }
  const padding: number = 30;
  const cameraSettings: CameraSettings = {
    bounds: {
      ne: originPoint,
      sw: destinationPoint,
      paddingBottom: padding,
      paddingLeft: padding,
      paddingRight: padding,
      paddingTop: padding,
    },
  };

  this.cameraRef &&
    this.cameraRef.fitBounds(originPoint, destinationPoint, [
      cameraSettings.bounds?.paddingTop,
      cameraSettings.bounds?.paddingRight,
      cameraSettings.bounds?.paddingBottom,
      cameraSettings.bounds?.paddingLeft,
    ]);

  return (
    <MapboxGL.Camera
      ref={(ref) => (this.cameraRef = ref)}
      bounds={cameraSettings.bounds}
      maxZoomLevel={19}
      animationDuration={2000}
    />
  );
};

const Actions = ({ onPress }) => {
  return (
    <ViewSC>
      <ButtonSC raised onPress={onPress} title={buttonNames.GPS_DIRECTIONS} />
    </ViewSC>
  );
};

function MapDirections({ storeLocation }) {
  const [route, setRoute] = useState(null);
  const [originPoint, setOriginPoint] = useState(null);
  const [destinationPoint] = useState(storeLocation);

  const getDirections = async () => {
    const result = await Permissions.checkLocation();

    switch (result) {
      case RESULTS.UNAVAILABLE:
        Toast.showToastShortCenter(ToastMessages.LOCATION_UNAVAILABLE);
        return;
      case RESULTS.DENIED:
        Toast.showToastLongCenter(ToastMessages.LOCATION_DENIED);
        return;
      case RESULTS.BLOCKED:
        Toast.showToastShortCenter(ToastMessages.LOCATION_BLOCKED);
        return;
    }

    Geolocation.getCurrentPosition(
      async (position) => {
        const currentPositionPoint = [
          position.coords.longitude,
          position.coords.latitude,
        ];
        try {
          const genRoute = await generateRoute(
            currentPositionPoint,
            destinationPoint
          );
          setRoute(genRoute);
          setOriginPoint(currentPositionPoint);
        } catch (error) {
          console.log(error);
          Toast.showToastShortCenter(error.message);
        }
      },
      (error) => {
        console.log(error);
        Toast.showToastShortCenter(error.message);
      },
      { timeout: 20000 }
    );
  };

  return (
    <ViewWrapperSC>
      <MapView>
        <Camera originPoint={originPoint} destinationPoint={destinationPoint} />
        <Origin originPoint={originPoint} />
        <Route route={route} />
        <MapboxGL.PointAnnotation
          id="destinationInnerCircle"
          coordinate={destinationPoint}
        />
      </MapView>
      <Actions onPress={getDirections} />
    </ViewWrapperSC>
  );
}

export default MapDirections;

const layerStyles = {
  origin: {
    circleRadius: 5,
    circleColor: color.common.GPS_LOCATION,
  },
  route: {
    lineColor: color.common.GPS_LOCATION,
    lineCap: MapboxGL.LineJoin.Round,
    lineWidth: 3,
    lineOpacity: 0.84,
  },
};

const ViewSC = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background-color: transparent;
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
`;

const ButtonSC = styled(Button).attrs({
  buttonStyle: { backgroundColor: color.common.BTN_BACKGROUND },
})``;

const ViewWrapperSC = styled.View`
  flex: 1;
`;

const MapView = styled(MapboxGL.MapView)`
  flex: 1;
`;
