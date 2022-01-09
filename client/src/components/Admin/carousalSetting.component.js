import { Form, Row, Col } from 'react-bootstrap';
import UploadFiles from '../upload/upload-files.component';
import Divider from '@material-ui/core/Divider';
import { Component } from 'react';
import Filepreview from './../Admin/filePreview.component';
import http from './../../http-common';
import authHeader from "./../../services/auth-header";
export default class CarousalSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileUrl: null,
            BigText: props.BigText,
            SmallText: props.SmallText,
            PictureId: props.fileId,
            isLoaded: false,
        }
    }
    componentDidMount() {
        console.log("carousalSetting.component.didMount");
        http.get('/file/fileInfo/' + this.props.fileId,
            { headers: authHeader() })
            .then((response) => {
                console.log(response.data);
                this.setState({ fileInfo: response.data });
                this.setState({ isLoaded: true });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    onSingleFileUploaded = (fileUrl,fileUploadedId) => {
        this.setState({ fileUrl: fileUrl });
        this.sendData('PictureId', fileUploadedId);
    }
    onFileListChange=(data)=>{
        console.log("hey--------------------------%%%$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        console.log(data);
    }


    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        this.sendData(e.target.name, e.target.value);
    }

    sendData = (t, v) => {
        let data = {
            BigText: this.state.BigText,
            SmallText: this.state.SmallText,
            fileUrl: this.state.fileUrl,
            identity: this.props.identity,
            PictureId:null,
        }
        data[t] = v;
        this.props.onSettingChanged(data);
    }
    render() {
        return (
            <>
                <Form.Group >
                    <Form.Label>تنظیمات اسلایدر</Form.Label>
                    <Form><Row className="g-3">
                        <Col md>
                            <Form.Group className="mb-3">
                                <Form.Label>متن بزرگ</Form.Label>
                                <Form.Control
                                    defaultValue={this.props.bigText}
                                    value={this.state.BigText}
                                    name="BigText"
                                    type="text"
                                    placeholder="متن بزرگ"
                                    onChange={this.handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col md>
                            <Form.Group className="mb-3" >
                                <Form.Label>متن کوچک</Form.Label>
                                <Form.Control 
                                defaultValue={this.props.smallText} 
                                value={this.state.SmallText}
                                name="SmallText" 
                                type="text" 
                                placeholder="متن کوچک" 
                                onChange={this.handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col md>
                            <UploadFiles onFileListChange={this.onFileListChange} onSingleFileUploaded={this.onSingleFileUploaded}></UploadFiles>
                        </Col>
                        <Col md>
                            <Filepreview src={(this.state.isLoaded ? this.state.fileInfo.filePath : '')}></Filepreview>
                        </Col>
                    </Row>
                    </Form>
                </Form.Group>
                <Divider />
            </>
        );
    }
}