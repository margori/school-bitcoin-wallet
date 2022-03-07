import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

const WalletNewAddress = ({}) => (
    <div>
        <Container fluid={true} className="text-center">
            <h2>New Address</h2>
        </Container>
    </div>
);

const mapStateToProps = (state) => ({
    returnPath: state.user.returnPath,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(WalletNewAddress);
