// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import sideBar from './sideBar';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    sideBar
  });
}
