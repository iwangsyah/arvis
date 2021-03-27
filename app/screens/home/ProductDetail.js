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
import {Navigation} from '../../configs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  icBack: {
    width: 40,
    height: 40,
    margin: 20,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS == 'ios' ? 40 : 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 20
  },
  containerBtnAdd: {
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-between'
  },
  buttonAdd: {
    width: 20,
    height: 20,
    backgroundColor: Theme.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  icon: {
    width: 12,
    height: 12,
    tintColor: Theme.txtSecondaryColor
  },
  lineSeparator: {
    width: '100%',
    height: 10,
    backgroundColor: '#F6F6F6'
  },
  button: {
    flexDirection: 'row',
    height: 60,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'space-between',
    backgroundColor: Theme.primaryColor,
    paddingHorizontal: 16,
    borderRadius: 8,
    bottom: 30
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

function ProductDetail(props) {
  const {item} = props.navigation.state.params;
  const [count, setCount] = useState(0);

  const back = () => (
    <TouchableOpacity
      style={styles.icBack}
      onPress={() => props.navigation.pop()}>
      <Image
        source={Images.icArrowLeft}
        style={{width: 15, height: 20}}
      />
    </TouchableOpacity>
  )


  const renderButtonAddMinus = () => (
    <View style={styles.containerBtnAdd}>
      <TouchableOpacity
        disabled={count == 0}
        style={[styles.buttonAdd, {
          backgroundColor: count == 0 ? Theme.txtTeritaryColor : Theme.primaryColor
        }]}
        onPress={() => setCount(count - 1)}
      >
        <Image source={Images.icMinus} style={styles.icon} />
      </TouchableOpacity>
      <Text>{count}</Text>
      <TouchableOpacity
        style={styles.buttonAdd}
        onPress={() => setCount(count + 1)}
      >
        <Image source={Images.icPlus} style={styles.icon} />
      </TouchableOpacity>
    </View>
  )

  const buttonCart = () => {
    item.count = count
    return (
      <TouchableOpacity
        style={[styles.button, CommonStyle.shadow]}
        onPress={() => props.navigation.navigate(Navigation.PRODUCTORDER, {item})}
      >
        <View>
          <Text>{count} item</Text>
          <Text>{accounting.formatMoney(item.price * count, "Rp ", 0, '.')}</Text>
        </View>
        <View style={styles.row}>
          <Text>View Cart</Text>
          <Image
            source={Images.icCart}
            style={{width: 30, height: 30, marginLeft: 5}}
          />
        </View>
      </TouchableOpacity>
    )
  }


  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <Image
          source={{uri: item.imageUrl}}
          style={{width: '100%', height: '30%'}}
        />
        <View style={{padding: 20}}>
          <Text style={{fontSize: 22}}>{item.name}</Text>
          <Text style={{color: Theme.txtTeritaryColor, marginVertical: 10}}>{item.description}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>{accounting.formatMoney(item.price, "Rp ", 0, '.')}</Text>
            {renderButtonAddMinus()}
          </View>
        </View>
        <View style={styles.lineSeparator} />
      </ScrollView>
      {back()}
      {count > 0 && buttonCart()}
    </View>
  )
}

export default ProductDetail;