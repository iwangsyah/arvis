import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Image } from 'react-native';
import Theme from '../styles/Theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8
  },
  textinput: {
    flex: 5,
    color: Theme.txtPrimaryColor,
    fontFamily: Theme.fontMedium,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    minHeight: 40,
    maxHeight: 80,
  },
  text: {
    flex: 2,
    marginRight: 5,
    fontWeight: '500',
    alignSelf: 'center',
    fontFamily: Theme.fontMedium,
    color: Theme.txtSecondaryColor
  },
});

function InputText(props) {
  const [isFocused, setIsFocused] = useState(false);
  const [editable, setEditable] = useState(props.editable);
  const {
    style,
    value,
    title,
    onChange,
    keyboardType,
    secureTextEntry,
  } = props;

  const border = {
    borderWidth: isFocused ? 1 : 0,
    backgroundColor:
      editable === false ? Theme.lineColor : 'rgba(255,255,255,1)'
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[styles.textinput, border, style]}
        onChangeText={(text) => onChange(text)}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        returnKeyType="done"
        editable={editable}
        value={value}
      />
    </View>
  );
}

export default InputText;
