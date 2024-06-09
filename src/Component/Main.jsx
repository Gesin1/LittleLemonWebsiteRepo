import { FaShippingFast } from "react-icons/fa";

import Brushetta from "../img/Brushetta.jpg";
import GreekSalad from "../img/Greek salad.jpg";
import GrilledFish from "../img/Grilled fish.jpg";
import Zara from "../img/Zara.jpg";
import Conlins from "../img/Conlins.jpg";
import Gesin from "../img/Gesin.jpg";
import Michelle from "../img/Michelle.jpg";
import Rectangle from "../img/Rectangle.png";
import Rectangle1 from "../img/Rectangle1.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
/* import StarRating from "./StarRating";
import { useState } from "react"; */

const orderAlert = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "",
    cancelButtonColor: "#d33",
    confirmButtonText: "Order Now!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Confirm!",
        text: "Your order as been processing.",
        icon: "success",
      });
    }
  });
};
const Main = () => {
  /*   const [ratings, setRatings] = useState({
    gesin: 3,
    michelle: 2,
    zara: 4,
    conlins: 1,
  });

  const handleRatingChange = (name, rating) => {
    setRatings({ ...ratings, [name]: rating });
  };
 */
  return (
    <main>
      <article className="container3">
        <div className="heading">
          <h1>This week Special!</h1>
          <Link to="/Menu">
            <button>Online menu</button>
          </Link>
        </div>
        <div className="card">
          <div className="foodMenu">
            <img src={GrilledFish} alt="Grilled fish" />
            <div className="menuDesc">
              <div className="topic">
                <p className="name">Grilled Fish</p>
                <p className="price">$13.99</p>
              </div>
              <p className="text">
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style teta cheese garnish with crunchy garlic and
                rosemary crountons
              </p>
              <div className="icons2">
                <button className="a" onClick={orderAlert}>
                  Order a deliver
                </button>
                <FaShippingFast className="color" />
              </div>
            </div>
          </div>
          <div className="foodMenu ">
            <img src={Brushetta} alt="Brushetta" />
            <div className="menuDesc">
              <div className="topic">
                <p className="name">Brushetta</p>
                <p className="price">$10.99</p>
              </div>
              <p className="text">
                Our Brushetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil. This is best
                you can get In this town
              </p>
              <div className="icons2">
                <button className="a" onClick={orderAlert}>
                  Order a deliver
                </button>
                <FaShippingFast className="color" />
              </div>
            </div>
          </div>
          <div className="foodMenu">
            <img src={GreekSalad} alt="Greek salad" />
            <div className="menuDesc">
              <div className="topic">
                <p className="name">Greek salad</p>
                <p className="price">$11.99</p>
              </div>
              <p className="text">
                This comes straight from grandma’s recipes book, every last
                ingredient has ben sourced and also it is as authentic as can be
                imagined it.
              </p>
              <div className="icons2">
                <button className="a" onClick={orderAlert}>
                  Order a deliver
                </button>
                <FaShippingFast className="color" />
              </div>
            </div>
          </div>
        </div>
      </article>
      <article>
        <div className="container5">
          <h1>What people say!!!</h1>
          <div className="cardCollection">
            <div className="card">
              <div className="rating">
                {/*       <p>Rating:</p>
                       <StarRating
                  className="color2"
                  rating={ratings.zara}
                  onRatingChange={(rating) =>
                    handleRatingChange(" zara", rating)
                  }
                /> */}
              </div>
              <div className="image5">
                <img src={Zara} alt="customer" />
                <h5>Zara</h5>
              </div>
              <p>
                I just reserved a table last week for my school reunion, It was
                so fantastic that my guys still talk about it till now
              </p>
            </div>
            <div className="card">
              <div className="rating">
                {/*     <p>Rating: </p>
                {    <StarRating
                  className="color2"
                  rating={ratings.conlins}
                  onRatingChange={(rating) =>
                    handleRatingChange(" conlins", rating)
                  }
                />} */}
              </div>
              <div className="image5">
                <img src={Conlins} alt="customer" />
                <h5>Collins</h5>
              </div>
              <p>
                I just reserved a table last week for my school reunion, It was
                so fantastic that my guys still talk about it till now
              </p>
            </div>
            <div className="card">
              <div className="rating">
                {/*     <p>Rating: </p>
                <StarRating
                  className="color2"
                  rating={ratings.gesin}
                  onRatingChange={(rating) =>
                    handleRatingChange(" gesin", rating)
                  }
                /> */}
              </div>
              <div className="image5">
                <img src={Gesin} alt="customer" />
                <h5>Gesin</h5>
              </div>
              <p>
                I just reserved a table last week for my school reunion, It was
                so fantastic that my guys still talk about it till now
              </p>
            </div>
            <div className="card">
              <div className="rating">
                {/*   <p>Rating: </p>
                <StarRating
                  className="color2"
                  rating={ratings.michelle}
                  onRatingChange={(rating) =>
                    handleRatingChange(" michelle", rating)
                  }
                /> */}
              </div>
              <div className="image5">
                <img src={Michelle} alt="customer" />
                <h5>Michelle</h5>
              </div>
              <p>
                I just reserved a table last week for my school reunion, It was
                so fantastic that my guys still talk about it till now
              </p>
            </div>
          </div>
        </div>
      </article>
      <article>
        <div className="container6">
          <div className="text-1">
            <div className="hero-text">
              <h1>Little Lemon</h1>
              <h3>Chicago</h3>
            </div>
            <p>
              We are family owned near sea restaurant, focused on a traditional
              receipes served with a modern twist, focused on a traditional re
              We are family owned near sea restaurant, focused on a traditional
              receipes served with a modern twist, focused on a traditional re
            </p>
          </div>
          <div className="image-6">
            <img className="first" src={Rectangle} alt="owner" />
            <img className="second" src={Rectangle1} alt="owner" />
          </div>
        </div>
      </article>
    </main>
  );
};

export default Main;
