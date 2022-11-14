import './services.css'
import { Container } from 'react-grid-system'
import { ServiceCard } from '../../components'
import { books, laundry, tiffin } from '../../assets'

const Services = () => {
  return (
    <Container className="services">
      <h1 className="services__title">Explore by Categories</h1>
      <div className="services__container">
        <ServiceCard name="Books" route="/books" image={books} />
        <ServiceCard name="Laundry" route="/laundry" image={laundry} />
        <ServiceCard name="Tiffin" route="/tiffin" image={tiffin} />
      </div>
    </Container>
  )
}

export default Services
