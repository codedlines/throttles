import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { buttonNames, color, StorageKeys, ToastMessages } from '../constants';
import { Button } from 'react-native-elements';
import Storage from '../utils/storage';
import { Toast } from '@coded-lines/throttles';

export interface GdprSublistItemType {
  id: string;
  title: string;
  value: boolean;
  text?: string;
}

interface SublistItemPropTypes extends GdprSublistItemType {
  onValueChange: (id: string, val: boolean) => void;
}

function SublistItem({
  title,
  text,
  id,
  value,
  onValueChange,
}: SublistItemPropTypes) {
  return (
    <ViewSc>
      <ViewWrapText>
        <TextTitle>{title}</TextTitle>
        {text ? <SubtextSC>{text}</SubtextSC> : null}
      </ViewWrapText>
      <ViewWrapSwitch>
        <SwitchSC
          value={value}
          onValueChange={(val) => onValueChange(id, val)}
        />
      </ViewWrapSwitch>
    </ViewSc>
  );
}

export default function GdprList({ listData }) {
  const [gdprList, setGdprList] = useState([]);

  useEffect(() => {
    (async () => {
      const storageData = await Storage.getData(StorageKeys.PRIVACY_CENTER);
      setGdprList(storageData || listData);
    })();
  }, [listData]);

  const setByKey = (key: string, value: boolean) => {
    const copyList: GdprSublistItemType[] = [...gdprList];
    copyList.find((item) => item.id === key).value = value;
    setGdprList(copyList);
  };

  const setAll = (flag: boolean) => () => {
    const copyList: GdprSublistItemType[] = [...gdprList];
    copyList.map((item) => {
      item.value = flag;
    });
    setGdprList(copyList);
  };

  const save = async () => {
    try {
      await Storage.storeData(StorageKeys.PRIVACY_CENTER, gdprList);
      Toast.showToastLongCenter(ToastMessages.STORAGE_SAVE_SUCCESS);
    } catch (error) {
      Toast.showToastLongCenter(ToastMessages.STORAGE_SAVE_FAILURE);
    }
  };

  return (
    <ScreenWrapper>
      <FlatListSC
        data={gdprList}
        renderItem={({ item }: { item: GdprSublistItemType }) => (
          <SublistItem
            title={item.title}
            id={item.id}
            value={item.value}
            text={item.text}
            onValueChange={setByKey}
          />
        )}
      />
      <ButtonRow>
        <ButtonSC onPress={setAll(true)} title={buttonNames.ACCEPT_ALL} />
        <ButtonSC onPress={setAll(false)} title={buttonNames.DENY_ALL} />
      </ButtonRow>
      <ButtonRow>
        <ButtonSC onPress={save} title={buttonNames.SAVE} />
      </ButtonRow>
    </ScreenWrapper>
  );
}

const FlatListSC = styled.FlatList`
  background-color: ${color.common.BACKGROUND};
`;

const SubtextSC = styled.Text`
  font-size: 15px;
  color: ${color.common.LIST_SUBTEXT};
`;

const TextTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

const ViewSc = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 15px;
`;

const SwitchSC = styled.Switch``;

const ViewWrapText = styled.View`
  flex: 1;
  margin-left: 5px;
`;

const ViewWrapSwitch = styled.View`
  justify-content: center;
  flex-direction: column;
  padding-horizontal: 15px;
`;

const ScreenWrapper = styled.View`
  background-color: white;
  flex: 1;
`;

const ButtonRow = styled.View`
  flex-direction: row;
`;

const ButtonSC = styled(Button).attrs({
  containerStyle: {
    flex: 1,
  },
})`
  margin-horizontal: 5;
  margin-vertical: 5;
`;
