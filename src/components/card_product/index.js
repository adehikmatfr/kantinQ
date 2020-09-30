import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import style from './styles';

import Cilok from '../../../assets/images/cilok.jpg';
import Seblak from '../../../assets/images/seblak.jpg';

const img = [Cilok, Seblak];

const CardProduct = ({price, productName, desc}) => {
  return (
    <>
      {img.map((value, index) => (
        <View style={style.cardContainer} key={index}>
          <View style={style.cardContainerItem}>
            <Image source={value} style={style.cardImage} />
            <Text style={style.kantinText}>KantinQ</Text>
            <Text style={style.hargaText}>Rp. {price}</Text>
          </View>
          <View style={style.containerDsc}>
            <View>
              <Text style={style.productName}>{productName}</Text>
              <Text style={style.productDsc}>{desc}</Text>
            </View>
            <View style={style.addCartContainer}>
              <TouchableOpacity style={style.addButton}>
                <Icon name="add-circle-outline" color="white" size={26} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.line}></View>
        </View>
      ))}
    </>
  );
};

export default CardProduct;
