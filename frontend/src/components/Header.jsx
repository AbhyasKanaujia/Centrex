import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/esm/Button'
import LinkContainer from 'react-router-bootstrap/LinkContainer'
import { BiLogInCircle, BiUserCircle, BiLogOutCircle } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((store) => store.auth)
  console.log(user)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())

    navigate('/')
  }

  return (
    <Navbar>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Centrex</Navbar.Brand>
        </LinkContainer>
        <Nav className="ms-auto">
          {user ? (
            <Button variant="outline-dark">
              <BiLogOutCircle /> Logout
            </Button>
          ) : (
            <>
              <LinkContainer to="/login">
                <Nav.Link>
                  <BiLogInCircle /> Login
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/register">
                <Nav.Link>
                  <BiUserCircle /> Register
                </Nav.Link>
              </LinkContainer>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
