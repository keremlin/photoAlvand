import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { connect } from "react-redux";
import { register } from "../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vName = (value) => {
  if (value.length < 3 || value.length > 256) {
    return (
      <div className="alert alert-danger" role="alert">
        نام باید بین سه و ۲۵۶  کارکتر باشد
      </div>
    );
  }
};

const vFnmae = (value) => {
  if (value.length < 3 || value.length > 256) {
    return (
      <div className="alert alert-danger" role="alert">
        نام خانوادگی باید بین سه و ۲۵۶  کارکتر باشد
      </div>
    );
  }
};

const vMobile = (value) => {
  var mob = /^0[1-9]{1}[0-9]{9}$/;
  if (mob.test(value) === false) {
    return (
      <div className="alert alert-danger" role="alert">
       شماره موبایل را صحیح وارد کنید (09XXXXXXXX)
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        رمز عبور باید بین ۶ تا ۴۰ کارکتر باشد
      </div>
    );
  }
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeFname = this.onChangeFname.bind(this);
    this.onChangeMobile = this.onChangeMobile.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      name:"x",
      fname:"",
      mobile:"",
      successful: false,
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeFname(e) {
    this.setState({
      fname: e.target.value,
    });
  }
  onChangeMobile(e) {
    this.setState({
      mobile: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleRegister(e) {
    e.preventDefault();
    console.log('Start reg');
    this.setState({
      successful: false,
    });

    this.form.validateAll();
    console.log(this.checkBtn.context._errors.length);

    if (this.checkBtn.context._errors.length === 0) {
    console.log('if resolved'+this.state.name);
      this.props
        .dispatch(
          register(this.state.username, this.state.email, this.state.password,
            this.state.name,this.state.fname,this.state.mobile)
        )
        .then(() => {
          this.setState({
            successful: true,
          });
        })
        .catch(() => {
          this.setState({
            successful: false,
          });
        });
    }
  }

  render() {
    const { message } = this.props;

    return (
      <div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form
            onSubmit={this.handleRegister}
            ref={(c) => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">نام کاربری</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="name">نام</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChangeName}
                    validations={[required, vName]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="fname">نام خانوادگی</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="fname"
                    value={this.state.fname}
                    onChange={this.onChangeFname}
                    validations={[required, vFnmae]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mobile">شماره تلفن همراه</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="mobile"
                    value={this.state.mobile}
                    onChange={this.onChangeMobile}
                    validations={[required, vMobile]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">آدرس ایمیل</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">رمزعبور</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-primary btn-block">ثبت نام</button>
                </div>
              </div>
            )}

            {message && (
              <div className="form-group">
                <div className={ this.state.successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                  {message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { message } = state.message;
  return {
    message,
  };
}

export default connect(mapStateToProps)(Register);
