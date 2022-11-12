import Card from 'react-bootstrap/esm/Card'
import { LinkContainer } from 'react-router-bootstrap'

function Dashboard() {
  return (
    <>
      <h1 className="my-3">Services</h1>
      <div className="d-flex my-3 justify-content-center flex-wrap">
        <LinkContainer
          to="/books"
          style={{ width: '18rem', cursor: 'pointer' }}
        >
          <Card>
            <Card.Img src="https://images.pexels.com/photos/2002217/pexels-photo-2002217.jpeg" />
            <Card.Header>Books</Card.Header>
          </Card>
        </LinkContainer>
      </div>
    </>
  )
}

export default Dashboard
