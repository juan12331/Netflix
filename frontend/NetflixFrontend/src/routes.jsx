import { Route, Routes } from "react-router-dom";

import Landingpage from "./pages/landing/landingPage"



function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
    </Routes>
  );
}

export default MainRoutes;