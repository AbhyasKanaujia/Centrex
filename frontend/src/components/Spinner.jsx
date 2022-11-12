import BootstrapSpinner from 'react-bootstrap/esm/Spinner'
import Container from 'react-bootstrap/esm/Container'

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
