import HeroImg from "../img/HeroImg.jpg";
const Header = () => {
  return (
    <>
      <header>
        <div>
          <div>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
          </div>
          <div>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              transition recipe served with a modern twist
            </p>
          </div>
          <button>Reserve a Table</button>
        </div>
        <div>
          <img src={HeroImg} alt="Grilled salad" width="200px" />
        </div>
      </header>
    </>
  );
};

export default Header;
