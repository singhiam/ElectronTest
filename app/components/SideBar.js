// @flow
import React, { Component } from 'react';
import styles from './SideBar.scss';
import logo from './Assets/svg/logo.svg';
import DocumentIcon from "./Assets/imgs/DocumentIcon.png";
import UploadImg from "./Assets/svg/uploading-option.svg";
import openBookImg from "./Assets/svg/open-book.svg";
import { uploadFile } from '../actions/sideBar';
import { getName } from "./common/Utis";

const {
  dialog
} = require('electron').remote

type Props = {
  uploadFile: () => void,
  pdfList: []
};

export default class SideBar extends Component<Props> {
  props: Props;

  state = {
    selectedIndex: NaN
  } 

  uploadFileHandler = () => {
      const options = {
        title: 'Open a PDF File',
        properties: [
          'openFile', 'openDirectory',
        ],
        filters: [
          { name: 'PDF', extensions: ['*'] },
        ],
      };
      dialog.showOpenDialog(null, options, (filePaths) => {
        if (filePaths === undefined) {
          return;
        }
        const _path = getName(filePaths);
        const fileObj = {
            name: _path,
            path: filePaths[0],
        }
        this.props.props.uploadFile(fileObj);
      });
  }

  openFileHandler = (item, index) => {
    this.setState({selectedIndex: index});
    this.props.props.openFile(item);
  }

  render() {
    const {
        uploadFile,
        sideBar
    } = this.props.props;
    const {
        selectedIndex
    } = this.state
    return (
      <div>
        <aside className={styles.sideBar}>
            <div className={styles.sideTop}>
                <div className={styles.logo}>
                    <img src={openBookImg} />
                    Reader Zone
                </div>
                <div className={styles.fileTitle}>Files</div>
                <ul className={styles.fileList}>
                    {
                        sideBar.map((item, i) => (
                            <li onClick = {this.openFileHandler.bind(this, item, i)} key = {i}
                              className = {`d-flex ${styles.fileItem} ${selectedIndex === i ? styles.fileActive : ''}`}>
                              <figure >
                                <img src={DocumentIcon}/>
                              </figure>
                              <div className={styles.itemName}>
                                  <div className={styles.flieTitle}>{item.name}</div>
                                  <small>Nam vel porta velit</small>
                              </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div onClick={this.uploadFileHandler.bind(this)} className={styles.uploadBtn}>
                <img src={UploadImg} />
                Upload Files
            </div>
        </aside>
      </div>
    );
  }
}
