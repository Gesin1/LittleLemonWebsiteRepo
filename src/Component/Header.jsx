import HeroImg from "../img/HeroImg.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        <div className="container2">
          <div className="col">
            <div className="col-1">
              <h1>Little Lemon</h1>
              <h3>Chicago</h3>
            </div>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              transition recipe served with a modern twist
            </p>
            <Link to="/reserveTable">
              <button type="submit" className="Btn">
                Reserve a Table
              </button>
            </Link>
          </div>
          <div className="image1">
            <img src={HeroImg} alt="Greek salad" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
