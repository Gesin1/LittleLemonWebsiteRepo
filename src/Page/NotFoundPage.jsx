import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <>
      <section className="notfound">
        <FaExclamationTriangle className="notfound-icon" />
        <h1>404 Page Not Found</h1>
        <p>This page does not exist for now!!!</p>
        <Link className="link" to="/">
          Go back
        </Link>
      </section>
    </>
  );
};

export default NotFoundPage;
