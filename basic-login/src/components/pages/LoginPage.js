import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginAction, logoutAction } from '../../actions';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        if (window.localStorage.getItem('app_user_isLoggedIn') === 'true') {
            this.props.loginAction();
        }
    }

    componentDidMount() {
        console.log('LoginPage... componentDidMount...');
    }

    handleLogin = () => {
        console.log('login...');
        this.props.loginAction();
    }

    render() {

        console.log('LoginPage render...');
        console.log('props', this.props);

        if (this.props.auth.isLoggedIn) {
            return <Redirect to="/loggedin" />;
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5">
                        <h1>LoginPage</h1>
                        <button onClick={() => this.handleLogin()} className="btn btn-primary btn-lg">Click to login</button>
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

export default connect(mapStateToProps, { loginAction, logoutAction })(LoginPage);
