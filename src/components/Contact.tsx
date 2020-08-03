import React from 'react';
import styled from 'styled-components/native';
import { Icon, Button } from 'react-native-elements';
import { Linking, View } from 'react-native';
import { color } from '../constants';

export default function ContactScreen({
  onLocationClick,
  phoneNumber,
  locationText,
}) {
  const linkPhoneCall = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <ScreenWrapper>
      <ButtonSC
        type="clear"
        icon={<Icon name="call" color={color.common.BTN_BACKGROUND} />}
        title={phoneNumber}
        onPress={linkPhoneCall}
      />
      <ButtonSC
        icon={
          <Icon
            name="location"
            type="ionicon"
            color={color.common.BTN_BACKGROUND}
          />
        }
        title={locationText}
        type="clear"
        onPress={onLocationClick}
      />
    </ScreenWrapper>
  );
}

const ScreenWrapper = styled(View)`
  flex: 1;
`;

const ButtonSC = styled(Button).attrs({
  containerStyle: { alignSelf: 'flex-start' },
  titleStyle: { color: color.common.BTN_BACKGROUND },
})``;
