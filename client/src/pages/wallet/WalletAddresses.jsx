import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addressFormWif } from '../../utils/addressUtils';

const WalletAddresses = ({ wifs }) => (
    <div>
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
            {wifs.map((wif, key) => (
                <p key={key}>{addressFormWif(wif)}</p>
            ))}
        </Container>
    </div>
);

const mapStateToProps = (state) => ({
    wifs: state.wallet.wifs,
});

export default connect(mapStateToProps)(WalletAddresses);
