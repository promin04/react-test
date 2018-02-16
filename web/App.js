import React from 'react';
import logo from './logo.svg';

class App extends React.Component {
    render() {
        // start your code here
        return (
          <div className="logIn">
                <div className="logIn-container">
                      <div className="logIn-header">
                        <img className="logo" src={logo} />
                      </div>
                      <div className="logIn-body w-100">
                        <form>
                          <div className="input-group">
                            <div><label htmlFor="email">E-mail address</label></div>
                            <input className="w-100" id="email" placeholder="example@appman.com.th" />
                          </div>
                          <div className="input-group">
                            <div><label htmlFor="password">Password</label></div>
                            <input className="w-100" id="password" placeholder="your password..." />
                          </div>
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
