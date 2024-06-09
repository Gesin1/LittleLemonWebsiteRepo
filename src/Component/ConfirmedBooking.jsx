import { Link } from "react-router-dom";

const ConfirmedBooking = () => {
  return (
    <div className="confirmedBooking">
      <div className="confirmedBooking-col">
        <h1 className="booking">Confirmed</h1>
        <p className="booking-text">
          Your booking has been confirmed. Thanks for using our services
        </p>
        <Link to="/" className="link-button">
          {" "}
          Home
        </Link>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
