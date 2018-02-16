import React from 'react';
import axios from 'axios';
import classnames from 'classnames';
import logo from './logo.svg';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      error:false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderError = this.renderError.bind(this);
  }

  renderError() {
    if (this.state.error) {
      return (
        <div className="text-error">
          E-mail or password is incorrect
        </div>
      );
    }
    return;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      loading:true,
      error:false
    });
    return axios.post("http://localhost:3000/api/login",
    {
      email:this.email.value,
      password:this.password.value
    })
    .then((res) => {
        this.setState({loading:false});
        alert("Login Successed")
    })
    .catch((error)=>{
        this.setState({
          loading:false,
          error:true
        });
        console.log("Req error: ",error);
    });

  }


    render() {
        // start your code here
        return (
          <div className="logIn">
                <div className="logIn-container">
                      <div className="logIn-header">
                        <img className={classnames('logo',{ 'logo-spin': this.state.loading })} src={logo} />
                      </div>
                      <div className="logIn-body w-100">
                        <form onSubmit={this.handleSubmit}>
                          <div className="input-group">
                            <div><label htmlFor="email">E-mail address </label></div>
                            <input className="w-100" type="text" id="email" placeholder="example@appman.com.th"  ref={(input) => { this.email = input; }} />
                          </div>
                          <div className="input-group">
                            <div><label htmlFor="password">Password</label></div>
                            <input className="w-100" type="password" id="password" placeholder="your password..." ref={(input) => { this.password = input; }} />
                          </div>
                          {this.renderError()}
                          <div className="text-center">
                            <button className="blue-btn vm-1" type="submit">SIGN IN</button>
                          </div>

                        </form>
                      </div>
                      <div className="logIn-footer">
                          <div className="left">
                            <a href="#">Forgot password ?</a>
                          </div>
                          <div className="right">
                            <a href="#">Create a new account</a>
                          </div>
                      </div>
                </div>
          </div>
        )
    }
}

export default App;
