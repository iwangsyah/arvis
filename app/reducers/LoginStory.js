import _ from 'lodash';
import { ActionTypes as types } from '../configs';

export default function LoginStory(state, action) {
  state = state || {
    users: []
  };

  switch (action.type) {
    case types.SET_LOGIN_STORY:
      state = _.assign({}, state, {
        users: action.users
      });
      return state;
    default:
      return state;
  }
}
