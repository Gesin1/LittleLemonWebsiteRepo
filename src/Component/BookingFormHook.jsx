import table from "../img/table.jpg";
import "../Page/Table.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const BookingFormHook = ({
  availableTime,
  formSubmission,
  handleDateChange,
}) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      date: "",
      time: "",
      occasion: "",
      guest: "",
      comment: "",
    },
    onSubmit: (values) => {
      formSubmission(values);
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      date: Yup.date().required("Date is required"),
      time: Yup.string().required("Time is required"),
      occasion: Yup.string().required("Occasion is required"),
      guest: Yup.number()
        .min(1, "Must be at least 1 person")
        .max(15, "Must be 15 guests or less"),
      comment: Yup.string().optional(),
    }),
  });
  return (
    <div className="body" role="main">
      <div className="container">
        <h2>Reserve your table at little lemon</h2>
        <img src={table} alt="dinner eating" />
        <form onSubmit={formik.handleSubmit}>
          <div className="reserve-details">
            <div className="input-box">
              <label htmlFor="name" className="text">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formik.values.name}
                className="input-text"
                placeholder="your full name"
                aria-required="true"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="error-sms">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="input-box">
              <label htmlFor="email" className="text">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formik.values.email}
                className="input-text"
                placeholder="Email"
                aria-required="true"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error-sms">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="input-box">
              <label htmlFor="date" className="text">
                Reservation date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                value={formik.values.date}
                className="input-text"
                aria-required="true"
                onBlur={formik.handleBlur}
                onChange={(e) => {
                  formik.handleChange(e);
                  handleDateChange(e);
                }}
              />
              {formik.touched.date && formik.errors.date ? (
                <div className="error-sms">{formik.errors.date}</div>
              ) : null}
            </div>
            <div className="input-box">
              <label htmlFor="time" className="text">
                Reservation time
              </label>
              <select
                className="input-text"
                id="time"
                name="time"
                aria-required="true"
                value={formik.values.time}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select time</option>
                {availableTime.map((time, index) => (
                  <option value={time} key={index}>
                    {time}
                  </option>
                ))}
              </select>
              {formik.touched.time && formik.errors.time ? (
                <div className="error-sms">{formik.errors.time}</div>
              ) : null}
            </div>
            <div className="input-box">
              <label htmlFor="occasion" className="text">
                Select occasion
              </label>
              <select
                className="input-text"
                id="occasion"
                name="occasion"
                value={formik.values.occasion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="together">Get together</option>
                <option value="hangout">Hang-out</option>
                <option value="other">Other</option>
              </select>
              {formik.touched.occasion && formik.errors.occasion ? (
                <div className="error-sms">{formik.errors.occasion}</div>
              ) : null}
            </div>
            <div className="input-box">
              <label htmlFor="guest" className="text">
                Number of guest
              </label>
              <input
                className="input-text"
                type="number"
                placeholder="1"
                min="1"
                max="15"
                name="guest"
                id="guest"
                aria-required="true"
                value={formik.values.guest}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.guest && formik.errors.guest ? (
                <div className="error-sms">{formik.errors.guest}</div>
              ) : null}
            </div>
          </div>
          <div className="comment-box">
            <label htmlFor="comment" className="comment">
              Your Message
            </label>
            <textarea
              name="comment"
              id="comment"
              cols="4"
              rows="6"
              value={formik.values.comment}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
          </div>
          <div className="button">
            <button
              className="btn1 btn"
              type="submit"
              disabled={!(formik.isValid && formik.dirty)}
            >
              Reserve a table
            </button>
            <button
              className="btn2 btn"
              type="button"
              onClick={() => formik.resetForm()}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingFormHook;
