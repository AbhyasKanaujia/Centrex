import BootstrapSpinner from 'react-bootstrap/esm/Spinner'
import Modal from 'react-bootstrap/esm/Modal'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const Spinner = () => {
  return (
    <Container
      style={{ height: '90vh' }}
      className="d-flex align-items-center justify-content-center"
    >
      <BootstrapSpinner />
    </Container>
  )
}

export default Spinner
