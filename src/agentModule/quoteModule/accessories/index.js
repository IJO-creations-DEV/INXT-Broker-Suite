import React from "react";
import "./index.scss";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import { Card } from "primereact/card";
import CalculaitionTextInputs from "../../../../src/agentModule/component/calculaitionTextInputs";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const Accessories = () => {
  const navigate = useNavigate();
    
  const handleclick = () => {
      navigate("/agent/createquote/ordersummary");
  }

  return (
    <div className="overall__create__quote__accessories">
      <div className="header__title">Leads</div>
      <div className="left__arrow mt-3">
        <SvgLeftArrow />
        <label className="left__arrow__text">Lead ID : 12345678</label>
      </div>
      <Card className="mt-4">
        <div className="table__header">Create Quote</div>
        <div className="sub__heading mt-2">Accessories</div>
        <div class="grid mt-2">
          <div class="col-6">
            <CalculaitionTextInputs label="Aircon" value="355.00" />
          </div>
          <div class="col-6">
            <CalculaitionTextInputs label="Stereo" value="220.00" />
          </div>
        </div>
        <div className="grid mt-2">
          <div class="col-6">
            <CalculaitionTextInputs label="Mag wheels" value="150.00" />
          </div>
          <div class="col-6">
            <CalculaitionTextInputs label="Others" value="170.00" />
          </div>
        </div>
        <div class="grid mt-6">
          <div class="col-6">
            <CalculaitionTextInputs label="Deductible" value="550.00" />
          </div>
          <div class="col-6">
            <CalculaitionTextInputs label="Towing" value="110.00" />
          </div>
        </div>
        <div class="grid mt-2">
          <div class="col-6">
            <CalculaitionTextInputs label="Repair Limit" value="850.00" />
          </div>
        </div>
        <div className="back__button__container col-12 md:col-12 lg:col-12">
          <div className="back__text__container">
            <Button label="Back" className="back__btn" />
          </div>
          <div className="next__text__container">
            <Button onClick={()=>{handleclick()}} label="Next" className="next__btn" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Accessories;
