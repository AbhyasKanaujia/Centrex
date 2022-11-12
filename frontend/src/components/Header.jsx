import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import LinkContainer from 'react-router-bootstrap/LinkContainer'
import { BiLogIn, BiUserCircle } from 'react-icons/bi'

function Header() {
  return (
    <Navbar>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Centrex</Navbar.Brand>
        </LinkContainer>
        <Nav className="ms-auto">
          <LinkContainer to="/login">
            <Nav.Link>
              <BiLogIn /> Login
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/register">
            <Nav.Link>
              {' '}
              <BiUserCircle /> Register
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
