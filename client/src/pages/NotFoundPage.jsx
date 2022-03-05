import React from 'react';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

const NotFoundPage = () => (
    <Container fluid={true} className="text-center">
        <h2>Not Found</h2>
        <Button variant="default" type="button" href="/">
            Go to home
        </Button>
    </Container>
);

export default NotFoundPage;
