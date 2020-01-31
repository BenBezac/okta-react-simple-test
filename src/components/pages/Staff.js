import React, {Component} from 'react';

class Staff extends Component {
    state = {
        currentUsername: '',
        currentEmail: ''
    }
    componentDidMount() {
        const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
        this.setState({
            currentEmail: idToken.idToken.claims.email,
            currentUsername: idToken.idToken.claims.name
        });
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h1>Staff</h1>
                <p>Bonjour {this.state.currentUsername} !</p>
            </div>
        );
    }
}

export default Staff;
