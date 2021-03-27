import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  Text
} from 'react-native';
import { Navigation } from '../configs';
import { CommonStyle, Theme } from '../styles';

const styles = StyleSheet.create({
  image: {
    width: '35%',
    aspectRatio: 1.9 / 1,
    resizeMode: 'contain',
    marginRight: 10
  },
  title: {
    fontFamily: Theme.fontBold,
    marginBottom: 5
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Theme.bgPrimaryColor,
    marginVertical: 8,
    borderRadius: 8,
    padding: 16
  },
})

export default (CourseListItem = ({
  item,
  navigation
}) => (
  <TouchableOpacity
    style={[styles.box, CommonStyle.shadow, {
      display: item.id ? 'flex' : 'none'
    }]}
    onPress={() => navigation.navigate(Navigation.COURSEDETAIL, {
      photo_url: item.photo_url
    })}
  >
    <Image source={{ uri: item.photo_url }} style={styles.image} />
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.short_description}</Text>
    </View>
  </TouchableOpacity>
));