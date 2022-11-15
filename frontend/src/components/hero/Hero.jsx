import './hero.css'
import { Container } from 'react-grid-system'

const Hero = () => {
  return (
    <div className="hero">
      <Container className="hero__container">
        <div className="hero__content">
          <h1 className="hero__content-title">
            For all student needs in one place
          </h1>
          <p className="hero__content-text ">
            From books to laundary to tiffin and more.
          </p>
          <a href="#services" as="button" className="hero__content-button">
            Show Items
          </a>
        </div>
      </Container>
    </div>
  )
}

export default Hero