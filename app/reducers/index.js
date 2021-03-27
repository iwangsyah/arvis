import { combineReducers } from 'redux';
import user from './User';
import loginStory from './LoginStory';
import registeredUsers from './RegisteredUsers';

const appReducer = combineReducers({
  user,
  loginStory,
  registeredUsers
});

const rootReducer = (state, action) =>
  //   if (action.type === types.LOGOUT) {
  //     state = undefined;
  //   }
  appReducer(state, action);
export default rootReducer;
