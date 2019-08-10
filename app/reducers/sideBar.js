// @flow
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  UPLOAD_FILE,
  OPEN_FILE
} from '../actions/sideBar';
import type {
  Action
} from './types';

const initialState = {
  pdfList: [],
  currentFile: {}
};

export default function sideBar(state = initialState, action: Action) {
  switch (action.type) {
    case UPLOAD_FILE:
      return Object.assign({}, state, {
        pdfList: state.pdfList.concat(action.obj)
      });
      return state
    case OPEN_FILE:
      return Object.assign({}, state, {
        currentFile: action.currentFile
      });
      return state
    default:
      return state;
  }
}
