import React from 'react';
import {StyleSheet, View, Text, Platform} from 'react-native';
import Theme from '../styles/Theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    paddingHorizontal: 20,
    bottom: Platform.OS == 'ios' ? 20 : 0
  },
  location: {
    marginTop: 20,
    color: Theme.txtPrimaryColor,
  },
  text: {
    fontSize: 10,
    marginBottom: 5,
    color: Theme.txtPrimaryColor,
  }
})

export default (Location = ({
  data
}) => (
  <View style={styles.container}>
    <Text style={styles.location}>Posisi saat ini:</Text>
    <View style={{marginLeft: 16}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={[styles.text, {flex: 2}]}>Latitude:</Text>
        <Text style={[styles.text, {flex: 6}]}>{data.latitude}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={[styles.text, {flex: 2}]}>Longitude:</Text>
        <Text style={[styles.text, {flex: 6}]}>{data.longitude}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={[styles.text, {flex: 2}]}>Address:</Text>
        <Text style={[styles.text, {flex: 6}]}>{data.address}</Text>
      </View>
    </View>
  </View>
));