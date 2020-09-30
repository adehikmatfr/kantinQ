import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import style from './styles';

const SearchInput = () => {
  return (
    <View style={style.containerSearch}>
      <TextInput placeholder="search" style={style.inputSearch} />
      <Icon name="search" color="#ccc" size={26} style={style.iconSearch} />
    </View>
  );
};

export default SearchInput;
