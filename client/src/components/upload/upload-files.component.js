import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import UploadService from "./upload-files.service";

export default class UploadFiles extends Component {
  constructor(props) {
    super(props);
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);

    this.state = {
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "",
      fileInfos: [],
      items:[],
      formname:"",
      formdescription:"",
      selectedIndex:-1
    };
  }

  componentDidMount() {
    UploadService.getFiles().then((response) => {
      this.setState({
        fileInfos: response.data,
      });
    });
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
        this.setState({
          message: response.data.message,
        });
        return UploadService.getFiles();
      })
      .then((files) => {
        this.setState({
          fileInfos: files.data,
        });
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
  onSelectFile=(index)=>{
    this.setState({
      selectedIndex:index,
      formname:(this.state.fileInfos[index].formname?this.state.fileInfos[index].formname:""),
      formdescription:(this.state.fileInfos[index].formdescription?this.state.fileInfos[index].formdescription:""),
    });
    
    console.log('onSelectFile'+index);    
  }
  formChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
    if (this.state.selectedIndex>=0){
      let temp=this.state.fileInfos;
      temp[this.state.selectedIndex][nam]=val;
      this.setState({fileInfos:temp});
    }
  }
  render() {
    const {
      selectedFiles,
      currentFile,
      progress,
      message,
      fileInfos,
    } = this.state;

    return (
      <div>
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

        <label className="btn btn-default">
          <input type="file" onChange={this.selectFile} />
        </label>

        <button
          className="btn btn-success"
          disabled={!selectedFiles}
          onClick={this.upload}
        >
          Upload
        </button>

        <div className="alert alert-light" role="alert">
          {message}
        </div>

        <div className="card">
          <div className="card-header">List of Files</div>
          <ul className="list-group list-group-flush">
            {fileInfos &&
              fileInfos.map((file, index) => (
                <li className="list-group-item" key={index} onClick={()=>this.onSelectFile(index)}>
                  
                    <lable class="form-check-label">{file.name}</lable>
                    <img width="50" height="50" src={file.url} alt='file' for="flexCheckIndeterminate"></img>
                 
                </li>
              ))}
          </ul>
        </div>

        <div>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>کپشن</Form.Label>
              <Form.Control name="formname"  placeholder="کپشن" onChange={this.formChangeHandler} value={this.state.formname} />
              <Form.Text className="text-muted">
                یک برچسب برای فایل خود انتخاب کنید
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>توضیحات فایل</Form.Label>
              <Form.Control name="formdescription"  placeholder="توضیحات" onChange={this.formChangeHandler} value={this.state.formdescription} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="ذخیره شود" />
            </Form.Group>
            <Button variant="primary" type="submit">
              ذخیره شود
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
