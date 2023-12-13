import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthRoute from "../routes/AuthRoute";
import ProtectedLayout from "./ProtectedRoute";
// import PendingEndorsementScreen from "../module/EndorsementModule/EndorsementPendingScreen/index";

const Maincomponent = () => {

  return (
    <div>

      <AuthRoute />
      <Routes>
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<div>shh</div>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default Maincomponent;
