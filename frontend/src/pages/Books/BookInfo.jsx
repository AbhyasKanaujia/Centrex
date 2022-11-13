import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { BiPhoneCall } from 'react-icons/bi'
import { BsFillChatLeftTextFill } from 'react-icons/bs'

function BookInfo() {
  return (
    <Row>
      {/* <Col>Product Image</Col> */}
      <Col>
        <h1>The Fault in our Stars</h1>
        <h4>John Green </h4>
        <p>ISBN: 123-456-894-651</p>
        <div className="d-flex  justify-content-end">
          <Button className="ms-2">
            <BiPhoneCall />
          </Button>
          <Button className="ms-2">
            <BsFillChatLeftTextFill /> Chat
          </Button>
        </div>
      </Col>
    </Row>
  )
}

export default BookInfo
