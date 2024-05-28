import React from 'react'
import { Form } from 'react-bootstrap'
export default function Bai2() {
  return (
    <div>Bai2
        <Form>
            <Form.Group controlId="largeInput" className="mb-3">
                <Form.Control size="lg" type="text" placeholder="Input cỡ lớn" />
            </Form.Group>
            <Form.Group controlId="mediumInput" className="mb-3">
                <Form.Control type="text" placeholder="Input cỡ trung bình" />
            </Form.Group>
            <Form.Group controlId="smallInput" className="mb-3">
                <Form.Control size="sm" type="text" placeholder="Input cỡ bé" />
            </Form.Group>
    </Form>
    </div>
  )
}
