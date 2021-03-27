import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import StatusBarStyle from '../styles/StatusBar';
import navbarStyle from '../styles/Navbar';
import Images from '../assets/images';
import {Theme} from '../styles';

function NavBar({title, onBack, bgText}) {
  return (
    <View>
      <View style={StatusBarStyle.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
      </View>
      <View style={navbarStyle.container}>
        <TouchableOpacity
          style={[
            navbarStyle.containerBack,
            {
              display: onBack ? 'flex' : 'none',
            },
          ]}
          onPress={() => onBack()}>
          <Image
            source={Images.icArrowLeft}
            style={navbarStyle.icon}
          />
        </TouchableOpacity>
        <View style={{flex: 1}} />
      </View>
      <Text
        style={[
          navbarStyle.title,
          {
            backgroundColor: bgText ? Theme.primaryColor : Theme.bgPrimaryColor,
            color: bgText ? Theme.txtSecondaryColor : Theme.txtPrimaryColor,
            paddingTop: title && onBack ? 2 : 12,
            display: title ? 'flex' : 'none',
          },
        ]}>
        {title}
      </Text>
    </View>
  )
};

export default NavBar;