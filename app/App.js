import React from 'react';
import _ from 'lodash';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationService} from './util';
import Store from './util/Store';
import AppContainer from './containers/Router';

console.disableYellowBox = true;

function App() {
  console.log('APP');
  return (
    <Provider store={Store.store}>
      <PersistGate loading={null} persistor={Store.persistor}>
        <AppContainer
          ref={
            (navigatorRef) =>
              NavigationService.setTopLevelNavigator(navigatorRef) // navigating-without-navigation-prop. ex: tap from notification
          }
        />
      </PersistGate>
    </Provider>
  );
}

export default App;
