import React from 'react'
import { useParams } from 'react-router-dom'
import fantasy from '../books/fantasy.json';
import CommentArea from './CommentArea';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';


export default function BookDetails() {
  
  const { asin }= useParams();
  const book = fantasy.find(b => b.asin === asin) // find ritorna un oggetto o undefined
  
  
  return (
    <Row>
        <Col md={10}>
            <Row>
                <Col md={5}>
                    <Card style={{ width: "20rem"}}>
                        <Card.Img variant="top" src={book.img} />
                    </Card>
                </Col>
                <Col md={7}>
                    <h1>Book Details</h1>
                    <ListGroup>
                        <ListGroup.Item>Title: {book.title} </ListGroup.Item>
                        <ListGroup.Item>Category: {book.category} </ListGroup.Item>
                        <ListGroup.Item>Price: €{book.price}</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Col>
        <Col md={2}>
            <CommentArea asin={asin}  />
        </Col>
    </Row>
  )
}
