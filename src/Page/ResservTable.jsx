import { useReducer } from "react";
import BookingFormHook from "../Component/BookingFormHook";
import { useNavigate } from "react-router-dom";

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};
const submitAPI = function (formData) {
  return true;
};

const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return fetchAPI(new Date(action.date));
    default:
      return state;
  }
};

const ResservTable = () => {
  const navgate = useNavigate();
  // Define state varaible

  const [availableTime, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    dispatch({ type: "UPDATE", date: new Date(newDate) });
  };

  //  submitFome function
  const formSubmission = (values) => {
    const success = submitAPI(values);
    if (success) {
      navgate("/confirmation");
    } else {
      console.error("form submission failed");
    }
  };

  return (
    <BookingFormHook
      availableTime={availableTime}
      formSubmission={formSubmission}
      handleDateChange={handleDateChange}
    />
  );
};

export default ResservTable;
