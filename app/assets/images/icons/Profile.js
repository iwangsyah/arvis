/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {WP24, WP3, WP305, WP4, WP5, WP6, WP7} from '../../styles/Sizes';
import {Button, NavBar, Text} from '../../components';
import Images from '../../assets/images';
import {Navigation} from '../../configs';
import {Theme} from '../../styles';
import {Astorage, NavigationService} from '../../util';
import Actions from '../../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.bgPrimaryColor,
  },
  userContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#F6F6F6',
    borderBottomWidth: WP3,
    padding: 20,
  },
  itemContainer: {
    flex: 1,
    paddingVertical: WP4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lineSeparator: {
    height: 1,
    backgroundColor: '#E8E8E8',
  },
  contentSeparator: {
    height: 10,
    backgroundColor: '#F6F6F6',
  },
});

const KEYSETTINGS = 'KEYSETTINGS';
const KEYPRIVACYPOLICY = 'KEYPRIVACYPOLICY';
const KEYFAQ = 'KEYFAQ';
const KEYABOUTUS = 'KEYABOUTUS';
const KEYCONTACTUS = 'KEYCONTACTUS';
const KEYRATINGTUS = 'KEYRATINGTUS';

export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    const authToken = await Astorage.getAuthToken();
    if (!authToken) {
      this.props.navigation.navigate(Navigation.AUTH);
    }
  };

  clickAccount(data) {
    switch (data) {
      case KEYSETTINGS:
        NavigationService.navigate(Navigation.SETTINGS);
        break;
      default:
        {
        }
        break;
    }
  }

  clickGeneral(data) {
    switch (data) {
      case KEYPRIVACYPOLICY:
        NavigationService.navigate(Navigation.PRIVACYPOLICY);
        break;
      case KEYFAQ:
        NavigationService.navigate(Navigation.FAQ);
        break;
      case KEYABOUTUS:
        NavigationService.navigate(Navigation.ABOUTUS);
        break;
      case KEYCONTACTUS:
        NavigationService.navigate(Navigation.CONTACTUS);
        break;
      default:
        {
        }
        break;
    }
  }

  renderUser = () => {
    const {profile, setProfile} = this.props;
    return (
      <View style={styles.userContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={Images.icUser}
            style={{
              width: WP24,
              height: WP24,
              marginRight: 15,
            }}
          />
          <View>
            <Text size="small" family="bold">
              {profile.full_name}
            </Text>
            <Text family="medium">+{profile.phone}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            NavigationService.navigate(Navigation.EDITPROFILE, {
              profile,
              setProfile,
            })
          }>
          <Image
            source={Images.icPencil}
            style={{
              width: WP7,
              height: WP7,
              marginRight: 15,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  renderAccount = () => {
    this.state.listAccount = [
      {key: KEYSETTINGS, title: 'Settings', image: Images.icSetting},
    ];

    return this.state.listAccount.map((item, index) => (
      <View
        style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}
        key={item.key}>
        <Image
          source={item.image}
          style={{width: WP5, height: WP5, resizeMode: 'contain'}}
        />
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'space-between', marginLeft: 15}}
          onPress={() => this.clickAccount(item.key)}>
          <View style={styles.itemContainer}>
            <Text family="medium" key={index}>
              {item.title}
            </Text>
            <Image
              source={Images.icArrowRight}
              style={{width: WP3, height: WP4}}
            />
          </View>
          <View style={styles.lineSeparator} />
        </TouchableOpacity>
      </View>
    ));
  };

  renderGeneral = () => {
    this.state.listGeneral = [
      {key: KEYPRIVACYPOLICY, title: 'Privacy Policy', image: Images.icTask},
      {key: KEYFAQ, title: 'FAQ', image: Images.icHelp},
      {key: KEYABOUTUS, title: 'About Us', image: Images.icAbout},
      {key: KEYCONTACTUS, title: 'Contact Us', image: Images.icPhone},
      {key: KEYRATINGTUS, title: 'Rating Us', image: Images.icStar},
    ];

    return this.state.listGeneral.map((item, index) => (
      <View
        style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}
        key={item.key}>
        <Image
          source={item.image}
          style={{
            width: WP5,
            height: WP5,
            resizeMode: 'contain',
            tintColor: item.key === KEYRATINGTUS ? Theme.lineColor : '',
          }}
        />
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'space-between', marginLeft: 15}}
          onPress={() => this.clickGeneral(item.key)}>
          <View style={styles.itemContainer}>
            <Text family="medium" key={index}>
              {item.title}
            </Text>
            <Image
              source={Images.icArrowRight}
              style={{width: WP3, height: WP4}}
            />
          </View>
          <View style={styles.lineSeparator} />
        </TouchableOpacity>
      </View>
    ));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <NavBar title="Profile" />
          <ScrollView>
            {this.renderUser()}

            <View style={{marginTop: WP5, paddingHorizontal: 20}}>
              <Text size="small" family="bold">
                Account
              </Text>
              {this.renderAccount()}
            </View>

            <View style={{marginTop: WP5, paddingHorizontal: 20}}>
              <Text size="small" family="bold">
                General
              </Text>
              {this.renderGeneral()}
            </View>
            <Button
              title="LOGOUT"
              style={{paddingHorizontal: 20}}
              onPress={() => {
                Astorage.removeAuthToken();
                NavigationService.navigate(Navigation.ONBOARDING);
              }}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
});

const mapDispatchToProps = (dispatch) => ({
  setProfile: (profile) => {
    dispatch(Actions.setProfile(profile));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
