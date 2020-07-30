import * as React from 'react';
import Markdown from 'react-native-markdown-renderer';
import styled from 'styled-components/native';

interface textProps {
  readonly color?: string;
}

interface TouchableOpacityProps {
  readonly backgroundColor?: string;
}

interface TermsAndConditionsProps {
  text: string;
  onAccept: () => void;
  btnTextColor?: string;
  btnBackgroundColor?: string;
}

export default function TermsAndConditions({
  text,
  onAccept,
  btnTextColor = '#fff',
  btnBackgroundColor = '#136ac7',
}: TermsAndConditionsProps) {
  const onAcceptPress = () => {
    onAccept();
  };

  return (
    <ViewSC>
      <ScrollViewSC>
        <Markdown>{text}</Markdown>
      </ScrollViewSC>

      <TouchableOpacitySC
        onPress={onAcceptPress}
        backgroundColor={btnBackgroundColor}
      >
        <ButtonTextSC color={btnTextColor}>Accept</ButtonTextSC>
      </TouchableOpacitySC>
    </ViewSC>
  );
}

const ButtonTextSC = styled.Text<textProps>`
  font-size: 14px;
  color: ${(props) => props.color};
  align-self: center;
`;

const TouchableOpacitySC = styled.TouchableOpacity<TouchableOpacityProps>`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 5px;
  padding-horizontal: 10px;
  padding-vertical: 10px;
  margin-bottom: 15px;
`;

const ScrollViewSC = styled.ScrollView`
  margin-vertical: 15px;
`;

const ViewSC = styled.View`
  flex: 1;
`;
