import _ from 'lodash';
import { ActionTypes as types } from '../configs';

export default function User(state, action) {
  state = state || {
    user: {},
    location: {}
  };

  switch (action.type) {
    case types.SET_USER_LOGIN:
      state = _.assign({}, state, {
        user: action.user
      });
      return state;
    case types.SET_USER_LOCATION:
      state = _.assign({}, state, {
        location: action.location
      });
      return state;
    default:
      return state;
  }
}
