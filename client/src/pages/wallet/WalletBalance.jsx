import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { addressesFromWifs } from '../../utils/addressUtils';
import { fetchUtxos } from '../../endpoints/Node';

const calculateBalance = (data) => {
    return 0;
};

const WalletBalance = ({ wifs }) => {
    const [balance, setBalance] = useState(-1);

    fetchUtxos({ addresses: addressesFromWifs(wifs) })
        .then((response) => {
            const newBalance = calculateBalance(response.data);
            setBalance(newBalance);
        })
        .catch((e) => {
            console.log(e);
        });

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
    wifs: state.wallet.wifs,
});

export default connect(mapStateToProps)(WalletBalance);
