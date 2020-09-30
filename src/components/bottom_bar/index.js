import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import F5 from 'react-native-vector-icons/FontAwesome5';

import style from './styles';

const BottomBar = () => {
  const [isActive, setActive] = useState({
    home: true,
    order: false,
    help: false,
    inbox: false,
    account: false,
  });

  const handleClickIcon = (active) => {
    setActive(active);
  };
  return (
    <>
      <TouchableOpacity
        style={style.touchItem}
        onPress={() =>
          handleClickIcon({
            home: true,
            order: false,
            help: false,
            inbox: false,
            account: false,
          })
        }>
        <Icon name="home" style={style.colorIcon(isActive.home)} size={26} />
        <Text style={style.colorText(isActive.home)}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.touchItem}
        onPress={() =>
          handleClickIcon({
            home: false,
            order: true,
            help: false,
            inbox: false,
            account: false,
          })
        }>
        <F5
          name="clipboard-list"
          style={style.colorIcon(isActive.order)}
          size={25}
        />
        <Text style={style.colorText(isActive.order)}>Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.touchItem}
        onPress={() =>
          handleClickIcon({
            home: false,
            order: false,
            help: true,
            inbox: false,
            account: false,
          })
        }>
        <Icon
          name="help-center"
          style={style.colorIcon(isActive.help)}
          size={26}
        />
        <Text style={style.colorText(isActive.help)}>Help</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.touchItem}
        onPress={() =>
          handleClickIcon({
            home: false,
            order: false,
            help: false,
            inbox: true,
            account: false,
          })
        }>
        <Icon
          name="message"
          style={style.colorIcon(isActive.inbox)}
          size={26}
        />
        <Text style={style.colorText(isActive.inbox)}>Inbox</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.touchItem}
        onPress={() =>
          handleClickIcon({
            home: false,
            order: false,
            help: false,
            inbox: false,
            account: true,
          })
        }>
        <Icon
          name="account-box"
          style={style.colorIcon(isActive.account)}
          size={26}
        />
        <Text style={style.colorText(isActive.account)}>Account</Text>
      </TouchableOpacity>
    </>
  );
};

export default BottomBar;
