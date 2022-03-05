import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const Header = ({ loggedIn, username }) => {
    return (
        <Navbar collapseOnSelect bg="light" expand="lg">
            <Navbar.Brand>
                <Link to="/">School Bitcoin Wallet</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto text-right">
                    {!loggedIn && (
                        <LinkContainer id="login" to="/user/login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                    )}
                    {!loggedIn && (
                        <LinkContainer id="register" to="/user/register">
                            <Nav.Link>Register</Nav.Link>
                        </LinkContainer>
                    )}
                    {loggedIn && (
                        <NavDropdown
                            title={`Welcome, ${username}`}
                            id="basic-nav-dropdown"
                        >
                            <LinkContainer id="user-data" to="/user/my-data">
                                <Nav.Link>My Data</Nav.Link>
                            </LinkContainer>
                            <LinkContainer
                                id="user-password"
                                to="/user/my-password"
                            >
                                <Nav.Link>My Password</Nav.Link>
                            </LinkContainer>
                        </NavDropdown>
                    )}
                    {loggedIn && (
                        <LinkContainer id="logout" to="/user/logout">
                            <Nav.Link>Logout</Nav.Link>
                        </LinkContainer>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

const mapStateToProps = (state) => ({
    loggedIn: state.user.loggedIn,
    username: state.user.username,
});

export default connect(mapStateToProps)(Header);
