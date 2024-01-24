import React, { useState } from "react";
import "./index.scss";
import NavBar from "../../../../components/NavBar";
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../../../assets/icons/SvgDot";
import SvgAdd from "../../../../assets/icons/SvgAdd";
import { Button } from "primereact/button";
import TableData from "./TableData/index";
import SvgUploade from "../../../../assets/icons/SvgUploade";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigation = useNavigate();
  const [visible, setVisible] = useState(false);

  const [popUpAction, setpopUpAction] = useState(null);

  const items = [
    {
      label: "Insurance Management",
      url: "/master/generals/insurancemanagement/insurancecompany",
    },
    {
      label: "Signatories",
    },
  ];
  const home = { label: "Master" };

  const handleAction = () => {
    navigation(`/master/generals/insurancemanagement/signatories/add/${1}`);
  };
  return (
    <div className="container__signatories__master_master">
      <div className="grid m-0 top__container">
        
        
        <div className="col-12 p-0 "style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div>
          <div className="main__account__title">Signatories</div>
          <BreadCrumb
            home={home}
            className="breadCrums__view__reversal"
            model={items}
            separatorIcon={<SvgDot color={"#000"} />}
          />
          </div>
          <div>
          <Button
            icon={
              <div className="pr-2">
                <SvgAdd />
              </div>
            }
            className="main__btn__action"
            onClick={() => handleAction()}
          >
            Add
          </Button>
          </div>
        </div>
        <div className="col-12 p-0">
         
        </div>
      </div>
      <div className="grid m-0 table__container">
        <div className="col-12 p-0">
          <TableData navigate={navigation} />
        </div>
      </div>
    </div>
  );
};

export default Index;
