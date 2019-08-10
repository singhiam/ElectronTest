// @flow
import {
  bindActionCreators
} from 'redux';
import {
  connect
} from 'react-redux';
import Home from '../components/Home';
import * as SideBarAction from '../actions/sideBar';

function mapStateToProps(state) {
  return {
    sideBar: state.sideBar.pdfList,
    currentFile: state.sideBar.currentFile
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SideBarAction, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);


