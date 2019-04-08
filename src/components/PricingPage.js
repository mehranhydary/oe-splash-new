import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Jumbotron, Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="12">
            <Jumbotron>
                <h1 className="display-3">Pricing</h1>
                <p className="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization..</p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
        <Col xs="12" sm="4" md="4" lg="4">
            <Card>
                <CardBody>
                <CardTitle>Free</CardTitle>
                <CardSubtitle>$0 / mo</CardSubtitle>
                <CardText>10 users included.</CardText>
                <CardText>2 GB of storage.</CardText>
                <CardText>Email support.</CardText>
                <CardText>Help center access.</CardText>
                <Button>Sign up for free</Button>
                </CardBody>
            </Card>       
          </Col>
          <Col xs="12" sm="4" md="4" lg="4">
            <Card>
                <CardBody>
                <CardTitle>Pro</CardTitle>
                <CardSubtitle>$15 / mo</CardSubtitle>
                <CardText>20 users included.</CardText>
                <CardText>10 GB of storage.</CardText>
                <CardText>Priority email support.</CardText>
                <CardText>Help center access.</CardText>
                <Button color="primary">Get started</Button>
                </CardBody>
            </Card>                 
          </Col>
          <Col xs="12" sm="4" md="4" lg="4">
            <Card>
                <CardBody>
                <CardTitle>Enterprise</CardTitle>
                <CardSubtitle>$29 / mo</CardSubtitle>
                <CardText>30 users included.</CardText>
                <CardText>15 GB of storage.</CardText>
                <CardText>Phone and email support.</CardText>
                <CardText>Help center access.</CardText>
                <Button color="primary">Contact us</Button>
                </CardBody>
            </Card>                 
          </Col>
        </Row>
      </Container>
    );
  }
}