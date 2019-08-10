// @flow
import React, { Component } from 'react';
import styles from './PDFViewer.scss';
import DocumentIcon from "./Assets/imgs/DocumentIcon.png";
import {
  Document,
  Page
} from 'react-pdf';


type Props = {
  uploadFile: () => void,
  currentFile: {}
};

export default class PDFViewer extends Component < Props > {
  props: Props;
  state = {
    numPages: null,
    pageNumber: 1,
  }
  onDocumentLoadSuccess = ({numPages}) => {
    this.setState({
      numPages
    });
  }
  
  render() {
    const {
        currentFile
    } = this.props.props;

    const {
      pageNumber
    } = this.state;

    return (
        <div className={styles.wraper}>
            {
                (currentFile.name !== undefined) ?
                <div className={styles.wraperIn}>
                    <div className={styles.titleBar}>
                        <img src={DocumentIcon} />
                        <div className={styles.title}>{currentFile.name}</div>
                    </div>
                    <div className={styles.viewer}>
                        <Document style={{flex:1}} file={currentFile.path} onLoadSuccess={this.onDocumentLoadSuccess.bind(this)}>
                            <Page pageNumber={pageNumber} />
                        </Document>
                    </div>
                </div> : null
            }
        </div>
    );
  }
}
