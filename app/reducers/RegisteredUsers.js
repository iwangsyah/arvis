import _ from 'lodash';
import { ActionTypes as types } from '../configs';

export default function RegisteredUsers(state, action) {
  state = state || {
    users: []
  };

  switch (action.type) {
    case types.SET_REGISTERED_USERS:
      state = _.assign({}, state, {
        users: action.users
      });
      return state;
    default:
      return state;
  }
}
