import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'

interface CartProps {
    image: string;
    title: string;
    description: string;
    price: string;
}
export default function Bai3({image, title, description, price}: CartProps) {
  return (
    <div>Bai3
        <Card style={{ width: '18rem', margin: '1rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary">Xem chi tiết</Button>
                <div className="mt-2">
                   <strong>{price}</strong>
                </div>
            </Card.Body>
        </Card>
        <Row>
            <Col>
                <Card
                    image="https://via.placeholder.com/150"
                    title="MacBook Air 2018"
                    description="The reason I am selling the machine is because it is too much power for what I need"
                    price="30.000.000 đ"
                />
            </Col>
            <Col>
                <Card
                    image="https://via.placeholder.com/150"
                    title="MacBook Pro 2019"
                    description="The reason I am selling the machine is because it is too much power for what I need"
                    price="30.000.000 đ"
                />
            </Col>
        </Row>
    </div>
  )
}
