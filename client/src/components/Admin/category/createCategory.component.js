import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import http from "./../../../http-common";
import authHeader from "./../../../services/auth-header";
import styles from './../admin.module.css'

export default class CreateCategory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description:""
        };
        this.OnSubmitCategory = this.OnSubmitCategory.bind(this);
        this.handleCategoryNameChange = this.handleCategoryNameChange.bind(this);
        this.handelDescriptionChange=this.handelDescriptionChange.bind(this);

    }
    handleCategoryNameChange(event) {
        this.setState({ name: event.target.value });
    }
    handelDescriptionChange(event){
        this.setState({description:event.target.value})
    }
    async OnSubmitCategory(target) {
        target.preventDefault();
        const onHide=()=>this.props.onClick();
        await http.post(
            '/category/create',
            {
                name:this.state.name,
                description:this.state.description
            },
            { headers: authHeader() }
            ).then(function(response){
                console.log(response);
                onHide();
            }).catch(function(error){
                console.log(error);
            }
            );
            
    }
    render() {
        return (
            <Form onSubmit={this.OnSubmitCategory}>
                <Form.Group>
                    <Form.Label>دسته بندی </Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleCategoryNameChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>توضیحات</Form.Label>
                    <Form.Control
                        type="text"
                        name="description"
                        value={this.state.description}
                        onChange={this.handelDescriptionChange}
                    />
                </Form.Group>
                <Button className={styles.createCategoryButt} variant="primary" type="submit">ایجاد دسته بندی جدید</Button>
            </Form>
        );
    }

}