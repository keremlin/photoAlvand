import React,{Component} from 'react';
import { Form, Button } from "react-bootstrap";
import ShowCategory from './category/showCategory.component';
import Divider from '@material-ui/core/Divider';
import styles from './admin.module.css'

export default class FileForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            formname: "",
            formdescription: "",
            index: -1,
            id:-1,
            categories:null,
            formprice:null,
        }
    }
    onFileFormChangeCallBack = () =>
        this.props.onFileFormChange(
            this.state.index,
            {
                id: this.state.id,
                formname: this.state.formname,
                formdescription: this.state.formdescription,
                categories: this.state.categories,
                formprice: this.state.formprice,
            }
        );
    componentDidUpdate(){
        if(this.props.index!==this.state.index && this.props.fileData){
            this.onFileFormChangeCallBack();
            this.setState({
                formname:this.props.fileData.formname,
                formdescription:this.props.fileData.formdescription,
                id:this.props.fileData.id,
                categories:this.props.fileData.categories,
                index:this.props.index,
                formprice:this.props.fileData.formprice,
            });
            
        }
        console.log('fileForm.cdu.categories=> '+this.state.categories);
        }
    formChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }
      onCategoryListChanged=(list)=>{
        console.log(list);
        this.setState({categories:list.concat()});
      }
   
    render(){
        return(
            <>
                <Divider  className={styles.divider} />
                <div>
                    <ShowCategory list={this.state.categories} id={this.state.id} onCategoryListChanged={this.onCategoryListChanged}></ShowCategory>
                </div>
                <Divider className={styles.divider}/>
                <div>
                    
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Control name="formname" placeholder="کپشن" onChange={this.formChangeHandler} value={this.state.formname} />
                            <Form.Text className="text-muted">
                                یک برچسب برای فایل خود انتخاب کنید
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control name="formdescription" placeholder="توضیحات" onChange={this.formChangeHandler} value={this.state.formdescription} />
                            <Form.Text className="text-muted">
                                هر گونه متنی که کمک به جستجوی بهتر گردد
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPrice">
                            <Form.Control name="formprice" placeholder="قیمت عکس به تومان" onChange={this.formChangeHandler} value={this.state.formprice} />
                            <Form.Text className="text-muted">
                                قیمت عکس به تومان
                            </Form.Text>
                        </Form.Group>
                        
                        <Button onClick={() =>{this.onFileFormChangeCallBack();this.props.onSaveFormClicked();}} variant="primary" type="submit">
                            ذخیره شود
                        </Button>
                        
                   </div>
           </>
        );
    }
}