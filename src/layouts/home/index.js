import React from 'react';
import {View, ScrollView} from 'react-native';

import BottomBar from '../../components/bottom_bar';
import CardProduct from '../../components/card_product';
import PaymentContainer from '../../components/payment_container';
import SearchInput from '../../components/search';
import Cart from '../../components/cart';

import style from './styles';

const Home = () => {
  return (
    <>
      <View style={style.containerHome}>
        {/* content */}
        <View style={style.containerContent}>
          {/* serch bar */}
          <View style={style.containerItem1}>
            <SearchInput />
            <Cart number={3} />
          </View>
          {/* end serchbar */}
          {/* section pay */}
          <View style={style.containerItem2}>
            <PaymentContainer />
          </View>
          {/* end section pay */}
          {/* list */}
          <ScrollView style={style.scrollView}>
            <View style={style.scrollViewItem}>
              <CardProduct
                price="15.000"
                productName="Odading"
                desc="anjing banget!"
              />
            </View>
          </ScrollView>
          {/* endlist */}
        </View>
        {/* end content */}
        {/* navigate */}
        <View style={style.containerBar}>
          {/* bottom bar */}
          <BottomBar />
          {/* end bottombar */}
        </View>
        {/* end navigate */}
      </View>
    </>
  );
};

export default Home;
