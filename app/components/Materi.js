import React from 'react';
import {
  FlatList,
  View,
  Text
} from 'react-native';
import { MateriListItem } from '.';
import { CommonStyle } from '../styles';

export default (Materi = ({
  data
}) => (
  <View style={[CommonStyle.content, CommonStyle.shadow]}>
    <View style={{ flex: 1 }}>
      <Text style={CommonStyle.textTitle}>Materi Course</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={CommonStyle.flatList}
        renderItem={({ item }) => (
          <MateriListItem item={item} />
        )}
      />
    </View>
  </View>
));