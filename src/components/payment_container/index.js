import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FA from 'react-native-vector-icons/FontAwesome';

import style from './styles';

const PaymentContainer = () => {
  return (
    <>
      <View style={style.containerPay}>
        <Text style={style.branch}>KantinQ</Text>
        <Text style={style.saldo}>Rp.500.000</Text>
      </View>
      <View style={style.containerItem}>
        <View style={style.containerIcon}>
          <Icon name="arrow-circle-up" color="white" size={40} />
          <Text style={style.textIcon}>Pay</Text>
        </View>
        <View style={style.containerIcon}>
          <Icon name="arrow-circle-down" color="white" size={40} />
          <Text style={style.textIcon}>TopUp</Text>
        </View>
        <View style={style.containerIcon}>
          <FA name="send-o" color="white" size={31} style={{marginTop: 5}} />
          <Text style={style.textIcon}>Send</Text>
        </View>
        <View style={style.containerIcon}>
          <FA name="clock-o" color="white" size={36} style={{marginTop: 5}} />
          <Text style={style.textIcon}>Pay Latter</Text>
        </View>
      </View>
    </>
  );
};

export default PaymentContainer;
