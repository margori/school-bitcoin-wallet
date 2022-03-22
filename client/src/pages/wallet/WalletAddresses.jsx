import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WalletAddresses = ({ addresses }) => (
    <Container fluid={true} className="text-center">
        <h2>Addresses</h2>
        <h3>
            <Link
                id="action-new-address"
                className="btn btn-success btn-md"
                to="/wallet/new-address"
            >
                New Address
            </Link>
        </h3>
        {addresses.map((address, key) => (
            <p key={key}>{address}</p>
        ))}
    </Container>
);

const mapStateToProps = (state) => ({
    addresses: state.wallet.addresses,
});

export default connect(mapStateToProps)(WalletAddresses);
