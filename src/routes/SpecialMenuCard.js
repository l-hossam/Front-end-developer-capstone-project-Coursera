import "../components/styles/SpecialMenuCard.css";

function SpecialMenuCard({ title, price, description, order, location }) {
  return (
    <div className="card-item">
      <div className="image-container">
        <img className="item-img" src={location} alt={title} />
      </div>

      <div className="item-info">
        <div className="title-price">
          <h3>{title}</h3>
          <span className="price">{price}</span>
        </div>
        <p className="description">{description}</p>
        <p className="order-text">{order}</p>
      </div>
    </div>
  );
}

export default SpecialMenuCard;
