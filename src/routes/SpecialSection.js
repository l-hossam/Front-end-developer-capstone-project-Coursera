import specialMenus from "./specialMenus";
import SpecialMenuCard from "./SpecialMenuCard";
import "../components/styles/SpecialSection.css";
import { Link } from "react-router-dom";

function SpecialSection() {
  return (
    <div className="special-section">
      <div className="title-button">
        <h1>This Week's Specials</h1>
        <Link to="/OrderOnline">
          <button className="btn">Online Menu</button>
        </Link>
      </div>

      <div className="menu-row">
        {specialMenus.map((item, index) => (
          <div className="Card-sizing" key={index}>
            <SpecialMenuCard
              title={item.title}
              price={item.price}
              description={item.description}
              order={item.order}
              location={item.location}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpecialSection;
