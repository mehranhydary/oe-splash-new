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
                <h1 className="display-3">overeasy</h1>
                <p className="lead">Transform your organization.</p>
            </Jumbotron>
            </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" md="6" lg="6">
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardBody>
                    <CardTitle>Customer Facing</CardTitle>
                    <CardSubtitle>And even wittier subheading</CardSubtitle>
                </CardBody>
            </Card>       
          </Col>
          <Col xs="12" sm="6" md="6" lg="6">
            <Card body>
                <CardBody>
                    <CardTitle>Extremely Scalable</CardTitle>
                    <CardSubtitle>And even wittier subheading</CardSubtitle>
                </CardBody>
            </Card>                    
          </Col>
        </Row>
        <br/>
        <Row>
          <Col xs="12" sm="6" md="6" lg="6">
            <Card body>
                <CardBody>
                    <CardTitle>Built for Android, iOS and Web</CardTitle>
                    <CardSubtitle>And even wittier subheading</CardSubtitle>
                </CardBody>
            </Card>       
          </Col>
            <Col xs="12" sm="6" md="6" lg="6">
            <Card body inverse color="primary">
                <CardBody>
                    <CardTitle>Cloud Based</CardTitle>
                    <CardSubtitle>And even wittier subheading</CardSubtitle>
                </CardBody>
            </Card>                    
          </Col>
        </Row>
        <br/>
        <Row>
          <Col xs="12" sm="6" md="6" lg="6">
            <Card body >
                <CardBody>
                    <CardTitle>Available in multiple languages</CardTitle>
                    <CardSubtitle>And even wittier subheading</CardSubtitle>
                </CardBody>
            </Card>       
          </Col>
          <Col xs="12" sm="6" md="6" lg="6">
            <Card body>
                <CardBody>
                    <CardTitle>Voted #1 in Canada</CardTitle>
                    <CardSubtitle>And even wittier subheading</CardSubtitle>
                </CardBody>
            </Card>                    
          </Col>
        </Row>  
        <br/>              
      </Container>
    );
  }
}