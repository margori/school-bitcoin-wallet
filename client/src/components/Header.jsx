import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';

const Header = ({ loggedIn, username, password }) => {
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
                        <Navbar.Text>{`Welcome, ${username}`}</Navbar.Text>
                    )}
                    {loggedIn && (
                        <LinkContainer id="logout" to="/user/logout">
                            <Nav.Link>Logout</Nav.Link>
                        </LinkContainer>
                    )}
                    {loggedIn && (
                        <LinkContainer id="logout" to="/wallet/balance">
                            <Nav.Link>Balance</Nav.Link>
                        </LinkContainer>
                    )}
                    {loggedIn && (
                        <LinkContainer id="addresses" to="/wallet/addresses">
                            <Nav.Link>Addresses</Nav.Link>
                        </LinkContainer>
                    )}
                    {loggedIn && (
                        <LinkContainer id="logout" to="/wallet/send">
                            <Nav.Link>Send</Nav.Link>
                        </LinkContainer>
                    )}
                    {loggedIn && (
                        <LinkContainer id="logout" to="/wallet/receive">
                            <Nav.Link>Receive</Nav.Link>
                        </LinkContainer>
                    )}
                    {loggedIn && password && (
                        <LinkContainer id="lock" to="/wallet/lock">
                            <Nav.Link>
                                <FontAwesomeIcon icon={faUnlock} />
                            </Nav.Link>
                        </LinkContainer>
                    )}
                    {loggedIn && !password && (
                        <LinkContainer id="unlock" to="/wallet/unlock">
                            <Nav.Link>
                                <FontAwesomeIcon icon={faLock} />
                            </Nav.Link>
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
    password: state.wallet.password,
});

export default connect(mapStateToProps)(Header);
