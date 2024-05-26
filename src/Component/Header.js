import Logo from "../img/Logo .svg";

const Header = () => {
  return (
    <>
      <header>
        <div>
          <img src={Logo} alt="little lemon" />
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Reserved</a>
              </li>
              <li>
                <a href="#">Order online</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
