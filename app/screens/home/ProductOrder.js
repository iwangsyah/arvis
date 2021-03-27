import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  Text,
  View,
  Platform,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import accounting from 'accounting';
import {
  Background,
  NavBar,
  Help,
  AsSeeOn,
  Connects
} from '../../components';
import {CommonStyle, LoginStyle, Theme} from '../../styles';
import {ApiService} from '../../services';
import Images from '../../assets/images';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  boxContent: {
    backgroundColor: Theme.bgPrimaryColor,
    marginBottom: 8,
    borderRadius: 8,
    padding: 16,
  },
  button: {
    height: 60,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: Theme.primaryColor,
    borderRadius: 8,
    bottom: 30
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  txtTotal: {
    fontSize: 16,
    fontFamily: Theme.fontBold,
    color: Theme.primaryColor
  }
})

function ProductOrder(props) {
  const {item} = props.navigation.state.params;

  const buttonOrder = () => (
    <TouchableOpacity style={[styles.button, CommonStyle.shadow]}>
      <Text>Order Now</Text>
    </TouchableOpacity>
  )


  return (
    <View style={styles.container}>
      <NavBar title="Order Confirmation" onBack={() => props.navigation.pop()} />
      <ScrollView style={{flex: 1, padding: 20}}>
        <View style={[styles.row, styles.boxContent, CommonStyle.shadow]}>
          <Text>Total Ordered items</Text>
          <Text>{item.count}</Text>
        </View>
        <View style={[styles.boxContent, CommonStyle.shadow]}>
          <View style={[styles.row, {marginBottom: 16}]}>
            <Text>Sub Total Price</Text>
            <Text>{accounting.formatMoney(item.price * item.count, "Rp ", 0, '.')}</Text>
          </View>
          <View style={[styles.row, {marginBottom: 16}]}>
            <Text>Diskon</Text>
            <Text>{accounting.formatMoney(0, "Rp ", 0, '.')}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.txtTotal}>Total Price</Text>
            <Text style={styles.txtTotal}>{accounting.formatMoney(item.price * item.count, "Rp ", 0, '.')}</Text>
          </View>
        </View>
        <Text style={{marginVertical: 16}}>Ordered Items</Text>
        <View style={[styles.row, styles.boxContent, CommonStyle.shadow]}>
          <View style={styles.row}>
            <Image
              source={{uri: item.imageUrl}}
              style={{width: 60, height: 60, borderRadius: 8}}
            />
            <Text style={{fontSize: 18, marginLeft: 16}}>{item.name}</Text>
          </View>
          <Text>{item.count} X</Text>
        </View>
      </ScrollView>
      {buttonOrder()}
    </View>
  )
}

export default ProductOrder;