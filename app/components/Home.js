// @flow
import React, { Component } from 'react';
import styles from './Home.scss';
import SideBar from './SideBar'
import PDFViewer from "./PDFViewer";

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <SideBar props={this.props} />
        <PDFViewer props={this.props} />
      </div>
    );
  }
}
