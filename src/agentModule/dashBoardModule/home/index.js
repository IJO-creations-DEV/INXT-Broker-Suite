import React, { useRef, useState } from "react";
import "./index.scss";
import { Button } from "primereact/button";
import SvgAdd from "../../../assets/agentIcon/SvgAdd";
import TopCard from "./topCards";
import CenterCard from "./centerCards";
import BottomCard from "./bottomCards";
import { Menu } from "primereact/menu";
import SvgMotor from "../../../assets/agentIcon/SvgMotor";
import SvgTravel from "../../../assets/agentIcon/SvgTravel";
import SvgHome from "../../../assets/agentIcon/SvgHome";
import { Dialog } from "primereact/dialog";
import SvgSearch from "../../../assets/agentIcon/SvgSearch";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "primereact/dropdown";
import { useSelector } from "react-redux";
import NavBar from "../../../components/NavBar";

const Dashboard = () => {
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const { userDetails, commissionList } = useSelector(({ homeReducers }) => {
    return {
      userDetails: homeReducers?.dashboardDetails?.userDetails,
      commissionList: homeReducers?.dashboardDetails?.commission,
    };
  });
  const dropdownOptions = [
    {
      label: (
        <div
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
          onClick={() => {
            handleClickMotor();
          }}
        >
          <div>
            <SvgMotor />
          </div>
          <div
            style={{
              fontFamily: "Inter var",
              fontWeight: 400,
              fontSize: "16px",
              color: "#111927",
              width: "100%",
            }}
          >
            Motor
          </div>
        </div>
      ),
      value: "Motor",
    },
    {
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div>
            <SvgTravel />
          </div>
          <div
            style={{
              fontFamily: "Inter var",
              fontWeight: 400,
              fontSize: "16px",
              color: "#111927",
              width: "100%",
            }}
          >
            Travel
          </div>
        </div>
      ),
      value: "Travel",
    },
    {
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div>
            <SvgHome />
          </div>
          <div
            style={{
              fontFamily: "Inter var",
              fontWeight: 400,
              fontSize: "16px",
              color: "#111927",
              width: "100%",
            }}
          >
            Property
          </div>
        </div>
      ),
      value: "Property",
    },
  ];

  const handleClickMotor = () => {
    setVisible(true);
  };

  const handleclick = () => {
    navigate("/agent/createlead");
  };

  return (
    <div className="dasboard__container">
      {/* <NavBar/> */}
      <div className="grid  mt-2" style={{ padding: "0px 12px" }}>
        <div className="col-12 md:col-6 lg:col-6">
          <div className="dasboard__container__title">Good Day to You !</div>
          <div className="dasboard__container__sub__title">John Visser</div>
        </div>
        <div className="col-12 md:col-6 lg:col-6">
          <div className="btn_lable_save_container">
            <Dropdown
              value={selectedOption}
              options={dropdownOptions}
              onChange={(e) => setSelectedOption(e.value)}
              placeholder="Create Quote"
              dropdownIcon={<SvgAdd />}
            />
          </div>
        </div>
      </div>
      <TopCard detail={userDetails} />
      <CenterCard commission={commissionList} />
      <BottomCard detail={userDetails} />
      <Dialog
        className="dailog__box__container"
        visible={visible}
        style={{ width: "30vw" }}
        onHide={() => setVisible(false)}
      >
        <div className="dailog__box__container__title">Choose a Quote for</div>
        <div className="dailog__box__inputs__container mt-4">
          <div
            className="dailog__box__inputs"
            onClick={() => {
              handleclick();
            }}
          >
            New Lead
          </div>
          <div className="dailog__box__inputs__existing__container mt-3 mb-6">
            <div className="dailog__box__inputs__existing">Existing Client</div>
            <div className="dailog__box__inputs__svg">
              <SvgSearch />
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Dashboard;
