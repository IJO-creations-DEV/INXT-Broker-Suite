import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthRoute from "../routes/AuthRoute";
import ProtectedLayout from "./ProtectedRoute";
import ResponsiveDrawer from "../components/SideBar";
import CorrectionJV from "../module/CorrectionJV";
// import PendingEndorsementScreen from "../module/EndorsementModule/EndorsementPendingScreen/index";

const Maincomponent = () => {

  return (
    <div style={{
      display: 'flex',

    }}>
      <ResponsiveDrawer />
      <div style={{ width: '100%' }}>
        <AuthRoute />
        <Routes>
          <Route element={<ProtectedLayout />}>
            {/* <Route path="/" element={<div>shh</div>} /> */}
            <Route path="/correctionjv" element={<CorrectionJV/>}/>

          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default Maincomponent;
