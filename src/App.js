import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

import MainLayout from "./Layout/MainLayout";
import Homepage from "./Page/Homepage";
import ResservTable from "./Page/ResservTable";
import About from "./Page/About";
import NotFoundPage from "./Page/NotFoundPage";
import ConfirmedBooking from "./Component/ConfirmedBooking";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/reserveTable" element={<ResservTable />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
