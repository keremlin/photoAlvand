import React, { Component } from "react";
import UploadFiles from '../upload/upload-files.component'
import UserService from "../../services/user.service";
import FilePreview from './filePreview.component';
import http from "./../../http-common";
import FileList from './fileList.component';
import styles from './admin.module.css';
import FileForm from './fileForm.component';
import authHeader from "./../../services/auth-header";


export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      fileList:[],
      fileData:[],
      selectedIndex:-1,
      uri:"",
    };
    
  }

  componentDidMount() {
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
  
  onIndexChange=(index,id)=>{
    this.setState({uri: this.state.fileList[index].url})
    let temp = this.state.fileData;
    if (!temp[index]){
      temp[index] = { formname: "", formdescription: "", id: id,categories:[]};
      console.log('is if happed');
    }
     
    //else
      //temp[index] = { formname: temp[index].fomname, formdescription: temp[index].formdescription, id: id };
    this.setState({
      selectedIndex: index,
      fileData: temp,
    });
    
    console.log('on index change + '+index);
  }
  onFileListChange=(list)=>{
    this.setState({fileList:list});
    console.log('on file list changed'+list);
  }
  onFileFormChange=(prevIndex,fileData)=>{
    let temp=this.state.fileData;
    temp[prevIndex]=fileData;
    this.setState({fileData:temp});
    console.log('on File FOrm Change'+ fileData);
  }
  onSaveFormClicked = async () => {
    const data = this.state.fileData;
    console.log("on saved clicked;");
    await http.post(
      '/file/savefilesdata',
      data,
      { headers: authHeader() }
    ).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    }
    );
    
  }

  render() {

    return (
      <div className="container">
        <div class="row">
          <div class="col-sm-6 col-xs-12">
            <h3>پنل ادمین</h3>
            <h3>{this.state.content}</h3>
            <UploadFiles onFileListChange={this.onFileListChange}></UploadFiles>
            <div className={styles.chips}>
            <FileList onIndexChange={this.onIndexChange} list={this.state.fileList}></FileList>
          </div>
          </div>
          <div class="col-sm-6 col-xs-12">
            <FilePreview src={this.state.uri}></FilePreview>
            <FileForm 
              onSaveFormClicked={this.onSaveFormClicked}
              index={this.state.selectedIndex} 
              onFileFormChange={this.onFileFormChange} 
              fileData={this.state.fileData[this.state.selectedIndex]}
              ></FileForm>
          </div>
         
          <div>
            
          </div>
        </div>
      </div>
    );
  }
}
