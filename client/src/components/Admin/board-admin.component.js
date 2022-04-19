import React, { Component } from "react";
import UploadFiles from '../upload/upload-files.component'
import UserService from "../../services/user.service";
import FilePreview from './filePreview.component';
import http from "./../../http-common";
import FileList from './fileList.component';
import styles from './admin.module.css';
import FileForm from './fileForm.component';
import authHeader from "./../../services/auth-header";
import UploadService from "./../upload/upload-files.service";
import MiniDrawer from './miniDrawer.component';
import Card from '@material-ui/core/Card';

export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      fileList: [],
      fileData: [],
      selectedIndex: -1,
      uri: "",
    };

  }

  componentDidMount() {
    this.onFileListChange();
    UserService.getAdminBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }
  onFileListChange = () => {
    UploadService.getFiles().then((response) => {
      this.setState({
        fileList: response.data,
        fileData: []
      });
      if(response.data.length>0 && this.state.uri===""){
       
        this.onIndexChange(0,response.data[0].id);
      }
         
    });
  }
  onIndexChange = (index, id) => {
    this.setState({ uri: this.state.fileList[index].url })
    let temp = this.state.fileData;
    if (!temp[index]) {
      temp[index] = { formname: "", formdescription: "", id: id, categories: [] };
      console.log('is if happed');
    }

    //else
    //temp[index] = { formname: temp[index].fomname, formdescription: temp[index].formdescription, id: id };
    this.setState({
      selectedIndex: index,
      fileData: temp,
    });

    console.log('on index change + ' + index);
  }

  onFileFormChange = (prevIndex, fileData) => {
    let temp = this.state.fileData;
    temp[prevIndex] = fileData;
    this.setState({ fileData: temp });
    console.log('on File FOrm Change' + fileData);
  }
  onSaveFormClicked = async () => {
    const data = this.state.fileData;
    let isSuccefullySaved = false;
    console.log("on saved clicked;" );
    console.log( data);
    await http.post(
      '/file/savefilesdata',
      data,
      { headers: authHeader() }
    ).then(function (response) {
      isSuccefullySaved = true;
    }).catch(function (error) {
      console.log(error);
    }
    );
    if (isSuccefullySaved) this.onFileListChange();
  }

  onDeleteFile = async (id) => {
    await http.get('/file/delete/' + id, { headers: authHeader() })
      .then((response) => {
        console.log("File deleted : " + id + response.data);
        //TODO:show the error to user if file not deleted the REST return false
        if (response.data === true)
          this.onFileListChange();
        return true;
      })
      .catch((ex) => {
        console.log("Error on DeleteFile" + ex.message)
        return false;
      });
  } 
  render() {
    return (
      <>
        <MiniDrawer></MiniDrawer>
        <div className="row pageMinHeight80">
          <div className="col-sm-2 col-xs-0"></div>
          <div className="col-sm-3 col-xs-12">
            <Card className={styles.paper}>
              <div className={styles.cardTitle}>بارگزاری فایل</div>
              <UploadFiles onFileListChange={this.onFileListChange}></UploadFiles>
              <div className={styles.chips}>
                <FileList onIndexChange={this.onIndexChange} onDeleteFileClicked={this.onDeleteFile} list={this.state.fileList}></FileList>
              </div>
            </Card>
          </div>
          <div className="col-sm-6 col-xs-12">
            <Card className={styles.paper}>
            <div className={styles.cardTitle}>مشخصات فایل</div>
            <FilePreview src={this.state.uri}></FilePreview>
            <FileForm
              onSaveFormClicked={this.onSaveFormClicked}
              index={this.state.selectedIndex}
              onFileFormChange={this.onFileFormChange}
              fileData={this.state.fileData[this.state.selectedIndex]}
            ></FileForm>
            </Card>
          </div>
          <div className="col-sm-1 col-xs-0"></div>
          <div>
          </div>
        </div>
      </>

    );
  }
}
