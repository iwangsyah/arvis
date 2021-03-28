import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  PermissionsAndroid
} from 'react-native';
import _ from 'lodash';
import {
  requestMultiple,
  checkMultiple,
  PERMISSIONS,
} from 'react-native-permissions';
import Geocoder from 'react-native-geocoder';
import {useSelector, useDispatch} from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import {Background, InputText, Location, Button} from '../../components';
import {Navigation, ActionTypes as types} from '../../configs';
import {LoginStyle} from '../../styles';
import Images from '../../assets/images';



function Login(props) {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const reducer = useSelector(state => state);
  const {user, loginStory, registeredUsers} = reducer;
  const dispatch = useDispatch();

  useEffect(() => {
    _requestLocationPermission();
  }, [])

  const _setUserLogin = (user) => {
    dispatch({type: types.SET_USER_LOGIN, user});
  }

  const _setLoginStory = (users) => {
    dispatch({type: types.SET_LOGIN_STORY, users});
  }

  const _setUserLocation = (location) => {
    dispatch({type: types.SET_USER_LOCATION, location});
  }

  const _requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const always = PERMISSIONS.IOS.LOCATION_ALWAYS;
      const whenInUse = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
      checkMultiple([always, whenInUse]).then((statuses) => {
        if (
          statuses[always] === 'granted' ||
          statuses[whenInUse] === 'granted'
        ) {
          _getLocation();
        } else {
          requestMultiple([always, whenInUse]).then((statuses) => {
            console.log(statuses)
          });
        }
      });
    } else {
      const chckLocationPermission = PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (chckLocationPermission === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('granted');
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Refactory Location App required Location permission',
              message:
                'Refactory needs your location ' +
                'Please grant us.',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            _getLocation();
          } else {
            alert("You don't have access for the location");
          }
        } catch (err) {
          alert(err);
        }
      }
    }
  }

  const _getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        const location = {
          lat: latitude,
          lng: longitude,
        };
        _geocode(location);
      },
      (error) => console.log(error),
      {enableHighAccuracy: false, timeout: 3000},
    );
  };

  const _geocode = (location) => {
    Geocoder.geocodePosition(location)
      .then((res) => {
        const loc = res[1] || res[0];
        _setUserLocation(
          {
            latitude: loc.position.lat,
            longitude: loc.position.lng,
            address: loc.formattedAddress
          }
        )
      })
      .catch((err) => console.log(err));
  };

  const _onLogin = () => {
    let dataUser;
    if (email && password) {
      const dataExist = _.find(registeredUsers.users, (item) => {
        dataUser = item;
        return item.email === email;
      })
      if (dataExist && dataExist.password == password) {
        const index = _.findIndex(loginStory.users, (item) => (item.email == email));
        let count;
        if (index < 0) {
          count = 1
          loginStory.users.push({email, count});
        } else {
          count = loginStory.users[index].count + 1
        }
        _setUserLogin(dataUser)
        _setLoginStory(loginStory.users);
        alert(`You have logged in using\nthe username : ${email}\n${count} times`);
        navigation.navigate(Navigation.APP)
      } else if (dataExist) {
        setPassword('');
        alert('Wrong password');
      } else {
        setEmail('');
        setPassword('');
        alert('Email has not been registered');
      }
    } else {
      alert('All data must be filled in')
    }
  }

  return (
    <ImageBackground source={Images.bgLogin} style={{flex: 1}}>
      <Background transparent style={[LoginStyle.container, {paddingHorizontal: 16}]}>
        <Text style={LoginStyle.title}>Login</Text>
        <View style={LoginStyle.box}>
          <InputText
            title="Email"
            keyboardType="email-address"
            onChange={email => setEmail(_.toLower(email))}
            value={_.toLower(email)}
          />
          <InputText
            title="Password"
            secureTextEntry
            onChange={password => setPassword(password)}
            value={password}
          />
        </View>
        <Button
          title="Login"
          onPress={() => _onLogin()}
        />
        <Text style={[LoginStyle.text, {textAlign: 'center'}]}>
          Belum memiliki akun? <Text style={LoginStyle.txtColor} onPress={() => navigation.navigate(Navigation.REGISTER)}>Register</Text>
        </Text>
        <Location data={user.location} />
      </Background>
    </ImageBackground>
  );
}

export default Login;

