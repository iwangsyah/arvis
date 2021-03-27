import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ButtonStyle from '../styles/ButtonStyle';
import Theme from '../styles/Theme';

export default (Button = ({
  title,
  style,
  color,
  isTransparent,
  onPress,
}) => (
  <View style={[ButtonStyle.container, style]}>
    <TouchableOpacity
      style={[
        isTransparent ? ButtonStyle.buttonTransparent : ButtonStyle.button,
        {
          borderColor: color ? color : Theme.buttonColor,
          backgroundColor: isTransparent ? 'transparent' : color ? color : Theme.buttonColor
        }
      ]}
      onPress={onPress}
    >
      <Text style={[ButtonStyle.text, {color: isTransparent ? color ? color : Theme.txtSecondaryColor : Theme.txtPrimaryColor}]}>{title}</Text>
    </TouchableOpacity>
  </View>
));