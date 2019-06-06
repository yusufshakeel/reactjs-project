import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginAction, logoutAction } from '../../actions';

class LoggedInPage extends React.Component {

    constructor(props) {
        super(props);

        if (window.localStorage.getItem('app_user_isLoggedIn') === true) {
            this.props.loginAction();
        }
    }

    handleLogin = () => {
        console.log('logout...');
        this.props.logoutAction();
    };

    render() {

        console.log('LoggedInPage... render()...');
        console.log('props', this.props);

        if (this.props.auth.isLoggedIn === false) {
            return <Redirect to="/"/>;
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5">
                        <h1>LoggedInPage</h1>
                        <button onClick={() => this.handleLogin()} className="btn btn-primary btn-lg">Click to log out</button>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps, { logoutAction, loginAction })(LoggedInPage);
