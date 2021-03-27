import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Browser } from '../util';
import { CommonStyle, Theme } from '../styles';

const styles = StyleSheet.create({
  section: {
    fontFamily: Theme.fontBold,
    backgroundColor: '#D5D5D5',
    padding: 16
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: Theme.lineColor,
  },
  box: {
    flex: 1,
    backgroundColor: Theme.bgPrimaryColor,
    marginVertical: 8,
    borderRadius: 8,
  },
  button: {
    backgroundColor: Theme.buttonColor,
    color: Theme.txtSecondaryColor,
    borderRadius: 5,
    padding: 5
  },
  txtButton: {
    fontSize: 12,
    fontFamily: Theme.fontBold,
    color: Theme.txtSecondaryColor
  },
})

export default (MateriListItem = ({
  item
}) => (
  <View style={[styles.box, CommonStyle.shadow]}>
    <View style={{ flex: 1 }}>
      <Text style={styles.section}>{item.section}</Text>
      {item.data.map((data) => (
        <View style={styles.item}>
          <Text style={styles.text}>{`${data.title} (${data['time-in']})`}</Text>
          <TouchableOpacity style={styles.button} onPress={() => Browser.open(data.url)}>
            <Text style={styles.txtButton}>START</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  </View>
));