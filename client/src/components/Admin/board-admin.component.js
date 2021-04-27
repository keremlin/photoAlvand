import React, { Component } from "react";
import UploadFiles from '../upload/upload-files.component'
import UserService from "../../services/user.service";
import CreateCategory from "./category/createCategory.component";
import ShowCategory from './category/showCategory.component'



export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
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
  onCategoryListChanged=(list)=>{
    console.log(list);
  }

  render() {
    return (
      <div className="container">
        <div class="row">
          <div class="col-sm-6 col-xs-12">
            <h3>پنل ادمین</h3>
             <h3>{this.state.content}</h3>
               <UploadFiles></UploadFiles>
          </div>
          <div class="col-sm-6 col-xs-12">
            <ShowCategory onCategoryListChanged={this.onCategoryListChanged}></ShowCategory>
          </div>
        </div>
      </div>
    );
  }
}
