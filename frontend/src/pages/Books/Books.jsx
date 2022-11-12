import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'
import Form from 'react-bootstrap/esm/Form'
import InputGroup from 'react-bootstrap/esm/InputGroup'
import Row from 'react-bootstrap/esm/Row'
import { BiBookAdd } from 'react-icons/bi'
import LinkContainer from 'react-router-bootstrap/LinkContainer'

const Books = () => {
  return (
    <>
      <Form>
        <Col md={10} lg={8} className="mx-auto">
          <Row>
            <Col className="px-1">
              <InputGroup className="my-2">
                <Form.Control type="text"></Form.Control>
                <Button>Search</Button>
              </InputGroup>
            </Col>
            <Col xs="auto px-1">
              <Form.Group className="my-2">
                <LinkContainer to="/books/add">
                  <Button>
                    <BiBookAdd /> Add my Book
                  </Button>
                </LinkContainer>
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Form>
      <h1>Latest Books</h1>
    </>
  )
}

export default Books
