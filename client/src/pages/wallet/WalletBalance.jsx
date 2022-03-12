import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { fetchUtxos } from '../../endpoints/Node';

const calculateBalance = (data) => {
    return 0;
};

const WalletBalance = ({ addresses }) => {
    const [balance, setBalance] = useState(-1);

    if (balance < 0) {
        fetchUtxos({ addresses })
            .then((response) => {
                const newBalance = calculateBalance(response.data);
                setBalance(newBalance);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    return (
        <div>
            <Container fluid={true} className="text-center">
                <h2>Balance</h2>
                <p>{balance < 0 ? 'Loading...' : balance}</p>
            </Container>
        </div>
    );
};

const mapStateToProps = (state) => ({
    addresses: state.wallet.addresses,
});

export default connect(mapStateToProps)(WalletBalance);
