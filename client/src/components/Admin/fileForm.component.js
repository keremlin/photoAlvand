import React,{Component} from 'react';
import { Form, Button } from "react-bootstrap";
import ShowCategory from './category/showCategory.component';
export default class FileForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            formname: "",
            formdescription: "",
            index: -1,
            id:-1,
            categories:null,

        }
    }
    
    componentDidUpdate(){
        if(this.props.index!=this.state.index && this.props.fileData){
            this.props.onFileFormChange(
                this.state.index,
                {
                    id:this.state.id,
                    formname:this.state.formname,
                    formdescription:this.state.formdescription,
                    categories:this.state.categories,
                }
            );
            this.setState({
                formname:this.props.fileData.formname,
                formdescription:this.props.fileData.formdescription,
                id:this.props.fileData.id,
                categories:this.props.fileData.categories,
                index:this.props.index
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
                <div>
                    <ShowCategory list={this.state.categories} id={this.state.id} onCategoryListChanged={this.onCategoryListChanged}></ShowCategory>
                </div>
                <div>
                    
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>کپشن</Form.Label>
                            <Form.Control name="formname" placeholder="کپشن" onChange={this.formChangeHandler} value={this.state.formname} />
                            <Form.Text className="text-muted">
                                یک برچسب برای فایل خود انتخاب کنید
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>توضیحات فایل</Form.Label>
                            <Form.Control name="formdescription" placeholder="توضیحات" onChange={this.formChangeHandler} value={this.state.formdescription} />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="ذخیره شود" />
                        </Form.Group>
                        <Button onClick={() => this.props.onSaveFormClicked()} variant="primary" type="submit">
                            ذخیره شود
                        </Button>
                   </div>
           </>
        );
    }
}