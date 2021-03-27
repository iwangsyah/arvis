import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  View,
  Text
} from 'react-native';
import { Browser } from '../util';
import { CommonStyle } from '../styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  seeOn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    minWidth: width / 4,
    minHeight: 60,
    marginHorizontal: 16,
    resizeMode: 'contain'
  }
})

export default (AsSeeOn = ({
  data
}) => (
  <View style={CommonStyle.content}>
    <Text style={CommonStyle.textTitle}>AS SEEN ON</Text>
    <View style={styles.seeOn}>
      {data.map((item) => (
        <TouchableOpacity
          style={{ marginHorizontal: 16 }}
          onPress={() => Browser.open(item.link_url)}
        >
          <Image
            source={{ uri: item.photo_url }}
            style={styles.image}
          />
        </TouchableOpacity>
      ))}
    </View>
  </View>
));