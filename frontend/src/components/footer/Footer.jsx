import './footer.css'

import { collegeLogo } from '../../assets'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <img
          src={collegeLogo}
          className="footer__content-college-logo"
          alt="National Institute of Technology Patna"
        />
        <p>National Institute of Technology Patna</p>
        <p>Project by Abhyas Kumar kanaujia and Khushboo Gupta</p>
      </div>
    </div>
  )
}

export default Footer
