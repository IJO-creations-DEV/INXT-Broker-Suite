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
import { Dialog } from 'primereact/dialog';
import SvgSearch from "../../../assets/agentIcon/SvgSearch";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [visible, setVisible] = useState(false);
  const menuCreateQuote = useRef(null);
  const navigate = useNavigate();

  const CreateQuoteitems = [
    {
      label: <div style={{ display: "none" }}></div>,
      items: [
        {
          label: (
            <div
              style={{
                fontFamily: "Inter var",
                fontWeight: 400,
                fontSize: "16px",
                color: "#111927",
                width:"100%",
              }}
              onClick={() => setVisible(true)}
            >
              Motor
            </div>
          ),
          icon: (
            <div className="mr-3" onClick={() => setVisible(true)}>
              <SvgMotor />
            </div>
          ),
        },
        {
          label: (
            <div
              style={{
                fontFamily: "Inter var",
                fontWeight: 400,
                fontSize: "16px",
                color: "#111927",
              }}
            >
              Travel
            </div>
          ),
          icon: (
            <div className="mr-3">
              <SvgTravel />
            </div>
          ),
        },
        {
          label: (
            <div
              style={{
                fontFamily: "Inter var",
                fontWeight: 400,
                fontSize: "16px",
                color: "#111927",
              }}
            >
              Property
            </div>
          ),
          icon: (
            <div className="mr-3">
              <SvgHome />
            </div>
          ),
        },
      ],
    },
  ];

  const handleclick = ()=>{
    navigate("/agent/createlead")
  }


  return (
    <div className="dasboard__container">
      <div className="grid  mt-2" style={{ padding: "0px 12px" }}>
        <div className="col-12 md:col-6 lg:col-6">
          <div className="dasboard__container__title">Good Day to You !</div>
          <div className="dasboard__container__sub__title">John Visser</div>
        </div>
        <div className="col-12 md:col-6 lg:col-6">
          <div className="menu__container">
            <Menu
              model={CreateQuoteitems}
              popup
              ref={menuCreateQuote}
              id="popup_menu_right"
              popupAlignment="right"
            />
          </div>
          <div className="dasboard__container__btn">
            <Button
              label="Create Quote"
              icon={<SvgAdd color={"#fff"} />}
              className="dasboard__container__add__btn"
              onClick={(event) => menuCreateQuote.current.toggle(event)}
              aria-controls="popup_menu_right"
              aria-haspopup
            />
          </div>
        </div>
      </div>
      <TopCard />
      <CenterCard />
      <BottomCard />
      <Dialog className="dailog__box__container" visible={visible} style={{ width: '30vw' }} onHide={() => setVisible(false)}>
        <div className="dailog__box__container__title">Choose a Quote for</div>
        <div className="dailog__box__inputs__container mt-4">
          <div className="dailog__box__inputs" onClick={()=>{handleclick()}}>
            New Lead
          </div>
          <div className="dailog__box__inputs__existing__container mt-3">
            <div className="dailog__box__inputs__existing">Existing Client</div>
            <div className="dailog__box__inputs__svg"><SvgSearch/></div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Dashboard;
