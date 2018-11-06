import React from "react";
import LoginDialog from "./LoginDialog";
import Auth from ".././firebase/auth";

import { Icon } from "semantic-ui-react";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.userLoggedIn == false ? (
          <button
            type="button"
            onClick={this.props.onLoginClick}
            className="bp3-button bp3-round  modifier"
          >
            login or signup
          </button>
        ) : (
          <div>
            {this.props.user.map(u => <span> {u.displayName} </span>)}
            <button
              type="button"
              onClick={this.props.onLogoutClick}
              className="bp3-button bp3-round  modifier"
            >
              Logout
            </button>
          </div>
        )}
        {this.props.showLoginDialog == true && (
          <LoginDialog
            showDialog={this.props.showLoginDialog}
            onClose={this.props.onLoginClose}
            user={this.props.user}
            handleUserLogin={this.props.handleUserLogin}
          />
        )}
      </div>
    );
  }
}

export default Login;
