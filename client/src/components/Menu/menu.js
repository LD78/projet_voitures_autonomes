import React from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class AppMenu extends React.Component {
    state = {};

    handleItemClick = (e, {name}) => {
        this.setState({activeItem: name});
    };

    render() {
        const {activeItem} = this.state;

        let logMenu = null;

        if (!this.props.authenticated) {
            logMenu = <Menu.Item
                name='login'
                as={Link}
                to="login"
                active={activeItem === 'login'}
                onClick={this.handleItemClick}
            />
        } else {
            logMenu = <Menu.Item
                        name='logout'
                        as={Link}
                        to="logout"
                        active={activeItem === 'logout'}
                        onClick={this.props.logout}
                    />
        }

        return (
            <Menu>
                <Menu.Item
                    name='home'
                    as={Link}
                    to="home"
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='cars'
                    as={Link}
                    to="cars"
                    active={activeItem === 'cars'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='profile'
                    as={Link}
                    to="profile"
                    active={activeItem === 'profil'}
                    onClick={this.handleItemClick}
                />
                {logMenu}
            </Menu>
        )
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    }
}
const mapDispatchToProps = dispatch => ({
    logout : () => {
        dispatch({
            type: "SIGN_OUT_USER",
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AppMenu);
