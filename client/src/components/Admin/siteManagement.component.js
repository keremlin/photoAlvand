import React, { Component } from "react";
import MiniDrawer from './miniDrawer.component';
import CarousalSetting from './carousalSetting.component';
import Selector from './selector.component';
import { Form, Row, Col } from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import styles from './admin.module.css';
import http from './../../http-common';
import authHeader from "./../../services/auth-header";


export default class SiteManagement extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoaded:false,
            config:[],
            listCategory:[
                {
                    id: 1,
                    name: "درحال بارگزاری",
                    description: "درحال بارگزاری",
                    files: []
                }]
        }
    }
    componentDidMount(){
        console.log("siteManagement.component.didMount");
        http.post('/configuration/getAllConfiguratin',{headers:authHeader()})
        .then((response)=>{
            console.log(response.data);
            this.setState({config:response.data});
            this.setState({isLoaded:true});
        })
        .catch((err)=>{
            console.log(err);
        });
        http.get('/category/list',{headers:authHeader()})
        .then((response)=>{
            this.setState({listCategory:response.data})
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    findLabel=(keys)=>{
        for(let i=0;i<this.state.config.length;i++)
            if(this.state.config[i].configKey.includes(keys)) return (this.state.config[i].configLabel);
        return  '--';
    }
    findValue = (keys) => {
        return parseInt(this.findStringValue(keys));
    }
    findStringValue = (keys) => {
        for (let i = 0; i < this.state.config.length; i++)
            if (this.state.config[i].configKey.includes(keys)) return this.state.config[i].configValue;
        return "0";
    }
    findID = (keys) => {
        for (let i = 0; i < this.state.config.length; i++)
            if (this.state.config[i].configKey.includes(keys)) return i;
        return "0";
    }
    onFileListChange=()=>{return;}
    onCrasualSettingChanged = (data) => {
        console.log(data);
        let config2 = this.state.config;
        config2[this.findID(data.identity + "BigText")].configValue = data.BigText;
        config2[this.findID(data.identity + "SmallText")].configValue = data.SmallText;
        config2[this.findID(data.identity + "PictureId")].configValue = data.PictureId;
        this.setState({ config: config2 });
        this.setState({ [data.identity]: data });
    }
    onSaveForm=()=>{
        console.log("siteManagement.component.onSaveForm");
        http.put('/configuration/putConfiguration',
        JSON.parse(JSON.stringify({configurations:this.state.config})),
        {headers:authHeader()})
        .then(respons=>{
            console.log(respons.data);
        });
    }
    onIndexChange = (key, value) => {
        this.addConfigToState(key, value);
    }
    addConfigToState = (key, value) => {
        const configTemp = this.state.config;
        configTemp[this.findID(key)].configValue = value;
        this.setState({ config: configTemp });
    }

    render(){
    return (
        <>
            <MiniDrawer></MiniDrawer>
            <p> مدیریت سایت</p>
            <div className="pageMinHeight80">
                <div className="row ">
                    <div className="col-sm-2 col-xs-0"></div>
                    <div className="col-sm-3 col-xs-12">
                        <Card className={styles.paper}>
                            <div className={styles.cardTitle}>تنظیمات عکسهای منتخب </div>
                            <Form.Group controlId="formBasicSelect4545">
                                <Form.Label>تنظیمات عکسهای منتخب</Form.Label>
                                <Row className="g-2">
                                    <Col md><Form.Label>{(this.state.isLoaded?this.findLabel('indexRowNumber'):'-')}</Form.Label></Col>
                                    <Selector configValue={this.findValue("indexRowNumber")} title="انتخاب۲" datas={[{ name: 'one', id: 1 }, { name: 'two', id: 2 }, { name: 'tree', id: 3 }]}></Selector>
                                </Row>
                                <Row className="g-2">
                                    <Col md><Form.Label>{(this.state.isLoaded?this.findLabel('indexColumnNumber'):'-')}</Form.Label></Col>
                                    <Selector configValue={this.findValue("indexColumnNumber")} title="انتخاب۱" datas={[{ name: 'one', id: 1 }, { name: 'two', id: 2 }, { name: 'tree', id: 3 }]}></Selector>
                                </Row>
                            </Form.Group>
                        </Card>
                    </div>
                    <div className="col-sm-6 col-xs-12">
                        <Card className={styles.paper}>
                            <div className={styles.cardTitle}>تنظیمات صفحه نخست</div>
                            <Form.Group controlId="formBasicSelect">
                                <Form.Label>تنظیمات گروه ها</Form.Label>
                                <Row className="g-۵">
                                    <Selector  configValue={this.findValue("indexFirstGroupNumber")} configKey={"indexFirstGroupNumber"} title="گروه ۱" datas={this.state.listCategory} onChangeIndex={this.onIndexChange}></Selector>
                                    <Selector  configValue={this.findValue("indexSecondGroupNumber")} configKey={"indexSecondGroupNumber"} title="گروه ۲" datas={this.state.listCategory} onChangeIndex={this.onIndexChange}></Selector>
                                    <Selector  configValue={this.findValue("indexThirdGroupNumber")} configKey={"indexThirdGroupNumber"} title="گروه ۳" datas={this.state.listCategory} onChangeIndex={this.onIndexChange}></Selector>
                                    <Selector  configValue={this.findValue("indexFourthGroupNumber")} configKey={"indexFourthGroupNumber"} title="گروه ۴" datas={this.state.listCategory} onChangeIndex={this.onIndexChange}></Selector>
                                    <Selector  configValue={this.findValue("indexfifthGroupNumber")} configKey={"indexfifthGroupNumber"} title="گروه ۵" datas={this.state.listCategory} onChangeIndex={this.onIndexChange}></Selector>
                                </Row>
                            </Form.Group>
                            <Divider />
                        </Card>
                    </div>
                    <div className="col-sm-1 col-xs-0"></div>
                    <div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2 col-xs-0"></div>
                    <div className="col-sm-9 col-xs-12">
                        {(!this.state.isLoaded?<p>Loading ... </p>:
                        <Card className={styles.paper}>
                            <div className={styles.cardTitle}>تنظیمات اسلایدر </div>
                            <CarousalSetting
                                bigText={this.findStringValue("indexFirstSliderBigText")} smallText={this.findStringValue("indexFirstSliderSmallText")}
                                fileId={this.findValue("indexFirstSliderPictureId")} identity="indexFirstSlider"
                                onSettingChanged={this.onCrasualSettingChanged} onFileListChange={this.onFileListChange}>
                            </CarousalSetting>
                            <CarousalSetting
                                bigText={this.findStringValue("indexSecondSliderBigText")} smallText={this.findStringValue("indexSecondSliderSmallText")}
                                fileId={this.findValue("indexSecondSliderPictureId")} identity="indexSecondSlider"
                                onSettingChanged={this.onCrasualSettingChanged} onFileListChange={this.onFileListChange}>
                            </CarousalSetting>
                            <CarousalSetting
                                bigText={this.findStringValue("indexThirdSliderBigText")} smallText={this.findStringValue("indexThirdSliderSmallText")}
                                fileId={this.findValue("indexThirdSliderPictureId")} identity="indexThirdSlider"
                                onSettingChanged={this.onCrasualSettingChanged} onFileListChange={this.onFileListChange}>
                            </CarousalSetting>
                            <button onClick={this.onSaveForm}>Save</button>
                        </Card>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
    }
}