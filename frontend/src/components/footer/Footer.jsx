import './footer.css'
import { Container } from 'react-grid-system'

import { collegeLogo } from '../../assets'

const Footer = () => {
  return (
    <div className="footer">
      <Container className="footer__content">
        <div className="footer__content-college">
          <img
            src={collegeLogo}
            className="footer__content-college-logo"
            alt="National Institute of Technology Patna"
          />
          <p>National Institute of Technology Patna</p>
        </div>
        <div className="footer__content-credit">
          <p>Project by Abhyas Kumar kanaujia and Khushboo Gupta</p>
        </div>
      </Container>
    </div>
  )
}

export default Footer
