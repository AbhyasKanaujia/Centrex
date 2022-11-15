import './header.css'
import logo from '../../logo.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CiLogin, CiUser } from 'react-icons/ci'
import { Container } from 'react-grid-system'

const Header = () => {
  const [activeLinkName, setActiveLinkName] = useState('Home')

  return (
    <div className="header">
      <Container className="header__container">
        <Link
          to="/"
          className="header__brand"
          onClick={() => setActiveLinkName('Home')}
        >
          <img
            className="header__brand-logo"
            src={logo}
            alt="Centrex Logo"
            width={48}
          />
          <p className="header__brand-title">centrex</p>
        </Link>
        <div>
          <ul>
            <li className="header__nav-item">
              <Link
                className={`header__nav-link ${
                  activeLinkName === 'Home' ? 'header__nav-link--active' : ''
                }`}
                activeClassName="header__nav-link--active"
                to="/"
                onClick={() => setActiveLinkName('Home')}
              >
                Home
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                className={`header__nav-link ${
                  activeLinkName === 'Book' ? 'header__nav-link--active' : ''
                }`}
                activeClassName="header__nav-link--active"
                to="/books"
                onClick={() => setActiveLinkName('Book')}
              >
                Books
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                className={`header__nav-link ${
                  activeLinkName === 'Tiffin' ? 'header__nav-link--active' : ''
                }`}
                activeClassName="header__nav-link--active"
                to="/tiffin"
                onClick={() => setActiveLinkName('Tiffin')}
              >
                Tiffin
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                className={`header__nav-link ${
                  activeLinkName === 'Laundry' ? 'header__nav-link--active' : ''
                }`}
                activeClassName="header__nav-link--active"
                to="/laundry"
                onClick={() => setActiveLinkName('Laundry')}
              >
                Laundry
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="header__menu-item">
              <Link
                className="header__menu-link"
                to="/login"
                onClick={() => setActiveLinkName('')}
              >
                <CiLogin /> Login
              </Link>
            </li>
            <li className="header__menu-item">
              <Link
                className="header__menu-link"
                to="/register"
                onClick={() => setActiveLinkName('')}
              >
                <CiUser /> Register
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default Header