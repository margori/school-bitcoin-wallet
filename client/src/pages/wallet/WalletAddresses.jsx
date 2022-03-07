import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WalletAddresses = () => (
    <div>
        <Container fluid={true} className="text-center">
            <h2>Addresses</h2>
            <h3>
                <Link
                    id="action-new-address"
                    className="btn btn-success btn-lg"
                    to="/wallet/new-address"
                >
                    New Address
                </Link>
            </h3>
        </Container>
    </div>
);

export default WalletAddresses;
