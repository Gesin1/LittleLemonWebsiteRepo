import Logo from "../img/Logo .svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container4">
          <img src={Logo} alt="little lemon" />
          <div className="col-4">
            <h4>DORMANT NAVIGATION</h4>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/Ab">About</Link>
              </li>
              <li>
                <Link to="/reserveTable">Reservation</Link>
              </li>
              <li>
                <Link to="/order">Order online</Link>
              </li>
              <li>
                <Link to="login">Login</Link>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <h4>CONTACT INFO</h4>
            <ul>
              <li>Phone: +2349033737853</li>
              <li>Address: *b koa street maintain sea Chicago</li>
              <li>Reservation</li>
            </ul>
          </div>
          <div className="col-4">
            <h4>DORMANT NAVIGATION</h4>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instergram</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
