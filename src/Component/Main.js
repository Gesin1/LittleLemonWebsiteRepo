import Food from "../img/Food.jpg";
import Brushetta from "../img/Brushetta.jpg";
import GreekSalad from "../img/Greek salad.jpg";
import GrilledFish from "../img/Grilled fish.jpg";

const Main = () => {
  return (
    <main>
      <article>
        <div>
          <h1>This week Special!</h1>
          <button>Online menu</button>
        </div>
        <div>
          <div>
            <img src={GrilledFish} alt="Grilled fish" width="100px" />
            <div>
              <p>Grilled Fish</p>
              <p>$13.99</p>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style teta cheese garnish with crunchy garlic and rosemary
              crountons
            </p>
            <a href="#">
              Order a deliver<span>font</span>
            </a>
          </div>
          <div>
            <img src={Brushetta} alt="Grilled fish" width="100px" />
            <div>
              <p>Brushetta</p>
              <p>$10.99</p>
            </div>
            <p>
              Our Brushetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil
            </p>
            <a href="#">
              Order a deliver<span>font</span>
            </a>
          </div>
          <div>
            <img src={GrilledFish} alt="Grilled fish" width="100px" />
            <div>
              <p>Greek salad</p>
              <p>$11.99</p>
            </div>
            <p>
              This comes straight from grandma’s recipes book, every last
              ingredient has ben sourced and it is as authentic as can be
              imagined
            </p>
            <a href="#">
              Order a deliver<span>font</span>
            </a>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Main;
