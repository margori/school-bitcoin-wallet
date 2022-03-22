import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { fetchUtxos } from '../../endpoints/Node';
import { Link } from 'react-router-dom';
const bitcore = require('bitcore-lib');

const WalletBalance = ({ addresses }) => {
    const [balance, setBalance] = useState(-1);

    if (balance < 0) {
        fetchUtxos({ addresses })
            .then((response) => {
                const balance = bitcore.Unit.fromSatoshis(
                    response.data.data.balance
                ).toBTC();
                setBalance(balance);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    return (
        <Container fluid={true} className="text-center">
            <h2>Balance</h2>
            <h3>{balance < 0 ? 'Loading...' : `${balance} BTC`}</h3>
            <Link
                id="action-fund"
                className="btn btn-success btn-sm"
                to="/wallet/fund"
            >
                Fund
            </Link>
        </Container>
    );
};

const mapStateToProps = (state) => ({
    addresses: state.wallet.addresses,
});

export default connect(mapStateToProps)(WalletBalance);
