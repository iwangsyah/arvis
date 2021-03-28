import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  Image,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import accounting from 'accounting';
import {CommonStyle, Theme} from '../../styles';
import {ApiService} from '../../services';
import Images from '../../assets/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Navigation} from '../../configs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    width: '100%',
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 5
    },
  },
  logo: {
    width: 200,
    height: 40,
    resizeMode: 'contain'
  },
  boxItem: {
    flexDirection: 'row',
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 16,
    borderRadius: 8
  },
  description: {
    marginVertical: 8,
    color: Theme.txtTeritaryColor
  }
})

function Home(props) {
  const [data, setData] = useState([]);
  const products = [
    {
      name: 'Nasi Goreng',
      imageUrl: 'http://kbu-cdn.com/dk/wp-content/uploads/nasi-goreng-setan.jpg',
      description: 'Nasi goreng dengan isi ayam dan telur',
      price: 15000
    }
    ,
    {
      name: 'Mie Rebus',
      imageUrl: 'https://i1.wp.com/jakpat.net/info/wp-content/uploads/2019/05/cccb39c7ae48e92058f2f99bc36aacd8.jpg?fit=425%2C337&ssl=1',
      description: 'Indomie rebus dengan toping telur',
      price: 8000
    },
    {
      name: 'Pecel Lele',
      imageUrl: 'https://img.kurio.network/mk2qI8z1vWEVDBWuEFEPqZcsSP8=/400x400/filters:quality(80):format(jpeg)/https://kurio-img.kurioapps.com/20/11/21/b2aecfb2-fefd-415f-9424-2485a95d41ef.png',
      description: 'Lele nya garing ditambah dengan sambal dan lalapan',
      price: 10000
    },
    {
      name: 'Es Jeruk',
      imageUrl: 'https://s0.bukalapak.com/img/02163196531/large/data.png',
      description: 'Es jeruk asli',
      price: 12000
    },
  ]

  // useEffect(() => {
  //   ApiService.getSeeOn()
  //     .then(response => {
  //       const {data} = response.data;
  //       setData(data);
  //     })
  //     .catch(error => {
  //       setIndicator(rfalse);
  //     })
  // }, [])

  const renderHeader = () => (
    <View style={[CommonStyle.shadow, styles.header]}>
      <Image source={Images.icLogo} style={styles.logo} />
    </View>
  )

  const renderItem = ({item}) => (
    <TouchableOpacity style={[styles.boxItem, CommonStyle.shadow]} onPress={() => props.navigation.navigate(Navigation.PRODUCTDETAIL, {item})}>
      <Image source={{uri: item.imageUrl}} style={styles.image} />
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <Text style={{fontSize: 18}}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={{fontSize: 16}}>{accounting.formatMoney(item.price, "Rp ", 0, '.')}</Text>
      </View>
    </TouchableOpacity >
  )

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      {renderHeader()}
      <FlatList
        data={products}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={CommonStyle.flatList}
        renderItem={renderItem}
      />
    </SafeAreaView>
  )
}

export default Home;