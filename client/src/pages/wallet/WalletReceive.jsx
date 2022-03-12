import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import QRCode from 'react-qr-code';
const bitcore = require('bitcore-lib');

const WalletReceive = ({ addresses }) => {
    let address = '';
    let uriString = '';

    if (addresses.length == 0) {
        useEffect(() => {
            navigate('/wallet/new-address', { replace: true });
        });
    } else {
        address = addresses[Math.floor(Math.random() * addresses.length)];

        const uri = new bitcore.URI({ address });
        uriString = uri.toString();
    }

    return (
        <div>
            <Container fluid={true} className="text-center">
                <h2>Receive</h2>
                <br />
                <h3>{address}</h3>
                <br />
                {address && <QRCode value={uriString} />}
            </Container>
        </div>
    );
};

const mapStateToProps = (state) => ({
    addresses: state.wallet.addresses,
});

export default connect(mapStateToProps)(WalletReceive);
