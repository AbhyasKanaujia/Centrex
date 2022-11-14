import './serviceCard.css'
import { Link } from 'react-router-dom'

const ServiceCard = ({ name, route, image }) => {
  return (
    <div className="service-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="service-card__overlay">
        <h2 className="service-card__title" id="services">
          {name}
        </h2>
        <Link to={route} className="service-card__button">
          Explore
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard
