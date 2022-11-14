import './features.css'
import { Container } from 'react-grid-system'
import { CiSearch, CiDeliveryTruck, CiMoneyBill } from 'react-icons/ci'

const Feature = ({ Icon, title, text }) => (
  <div className="features__feature-card">
    <Icon className="features__feature-card-icon" />
    <h3 className="features__feature-card-title">{title}</h3>
    <p className="features__feature-card-text">{text}</p>
  </div>
)

const Features = () => {
  return (
    <div className="features">
      <Container className="features__container">
        <h1 className="features__title">Why Centrix?</h1>
        <div className="features__cards">
          <Feature
            Icon={CiSearch}
            title="Right Products"
            text="Since all the sellers are students, you are more likely to find what you need."
          />
          <Feature
            Icon={CiDeliveryTruck}
            title="Sell"
            text="Sell most of your items here before you leave the city"
          />
          <Feature
            Icon={CiMoneyBill}
            title="Cheap Buy"
            text="Students sell used items at much lower price"
          />
        </div>
      </Container>
    </div>
  )
}

export default Features
