import React, { Component } from "react";
import { Form } from "react-bootstrap";
import UploadService from "./upload-files.service";
import styles from './../Admin/admin.module.css';
import { Divider } from "@material-ui/core";


export default class UploadFiles extends Component {
  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
    this.selectFile=this.selectFile.bind(this);

    this.state = {
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "",
      fileInfos: [],
      selectedIndex:-1,
      fileUploadedId:0,
    };
  }

  componentDidMount() {
   this.props.onFileListChange();
  }

  selectFile(event) {
    this.setState({
      selectedFiles: event.target.files,
    });
  }
  
  upload() {
    let currentFile = this.state.selectedFiles[0];

    this.setState({
      progress: 0,
      currentFile: currentFile,
    });

    UploadService.upload(currentFile, (event) => {
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })
      .then((response) => {
        console.log(response);
        this.setState({
          message: response.data.message,
          fileUploadedId:response.data.id,
        });
        return UploadService.getFiles();
      })
      .then((files) => {
        this.setState({
          fileInfos: files.data,
        });
        console.log('before on file list change');
        this.props.onFileListChange(files.data);
        if(this.props.onSingleFileUploaded!=null && typeof this.props.onSingleFileUploaded ==='function')
          this.props.onSingleFileUploaded(this.state.message,this.state.fileUploadedId);
      })
      .catch(() => {
        this.setState({
          progress: 0,
          message: "Could not upload the file!",
          currentFile: undefined,
        });
      });

    this.setState({
      selectedFiles: undefined,
    });
  }  
  render() {
    const {
      selectedFiles,
      currentFile,
      progress,
      message,
    } = this.state;

    return (
      <div>

        <div className="form-group row">
          <div className="col-xs-12">
            <Form.File
              className={styles.inputFile}
              
              label="عکس "
              data-browse="انتخاب فایل"
              custom
              onChange={this.selectFile}
            />
          </div>
        </div>
        <div className="row">
          <div className={"col-xs-12 "+styles.marginAuto}>
            <button
              className={"btn btn-success mb-2 " + styles.inputFileBottun}
              disabled={!selectedFiles}
              onClick={this.upload}
            >
              بارگزاری عکس
            </button>

          </div>

        </div>

       

        <label className="btn btn-default">
         
         
        </label>
        
        {currentFile && (
          <div className="progress">
            <div
              className="progress-bar progress-bar-info progress-bar-striped"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: progress + "%" }}
            >
              {progress}%
            </div>
          </div>
        )}
        <div className="alert alert-light" role="alert">
          {message}
        </div>
        <Divider/>
      </div>
    );
  }
}
