import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  StatusBar,
  Image,
  View,
} from 'react-native';
import {withNavigationFocus} from 'react-navigation';
import {useSelector} from 'react-redux';
import _ from 'lodash';
import Images from '../../assets/images';
import {Navigation} from '../../configs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '80%',
    height: 120,
    resizeMode: 'contain'
  },
  indicator: {
    position: 'absolute',
    zIndex: 2
  }
});

function AuthLoadingScreen(props) {
  const {navigation} = props;
  const reducer = useSelector(state => state);
  console.log('kenaa');
  useEffect(() => {
    const {user} = reducer.user;
    let route;
    if (_.isEmpty(user)) {
      route = Navigation.AUTH;
    } else {
      route = Navigation.APP;
    }
    setTimeout(() => {
      navigation.navigate(route)
    }, 1000)
  }, [])

  return (
    <View style={styles.container}>
      <Image
        source={Images.icLogo}
        style={styles.image}
      />
    </View>
  );
}

export default AuthLoadingScreen;
