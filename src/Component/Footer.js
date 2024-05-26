import Logo from "../img/Logo .svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <img src={Logo} alt="little lemon" />
          <div>
            <h4>DORMANT NAVIGATION</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Reservation</a>
              </li>
              <li>
                <a href="#">Order online</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>CONTACT INFO</h4>
            <ul>
              <li>Phone</li>
              <li>Address</li>
              <li>Reservation</li>
            </ul>
          </div>
          <div>
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
