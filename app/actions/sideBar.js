// @flow
import type {
  GetState,
  Dispatch
} from '../reducers/types';

export const UPLOAD_FILE = 'UPLOAD_FILE';
export const OPEN_FILE = 'OPEN_FILE';

export function uploadFile(obj) {
  return {
    type: UPLOAD_FILE,
    obj
  };
}

export function openFile(currentFile) {
    return {
      type: OPEN_FILE,
      currentFile
    };
}
