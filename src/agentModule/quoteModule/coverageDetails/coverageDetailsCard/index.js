import React from "react";
import { Card } from "primereact/card";
import InputTextField from "../../../component/inputText";
import CalculaitionTextInputs from "../../../component/calculaitionTextInputs";
import DropdownField from "../../../component/DropdwonField";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import customHistory from "../../../../routes/customHistory";

const CoverageDetailsCard = () => {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/agent/createquote/accessories");
  };
  const handleBackNavigation = () => {
    customHistory.back();
  };

  return (
    <div className="coverage__details__card__container mt-4">
      <Card>
        <div className="coverage__details__card__container__title">
          Create Quote
        </div>
        <div className="coverage__details__card__container__sub__title mt-2 mb-2">
          Coverages Details
        </div>
        <div className="grid m-0">
          <div className="col-12 md:col-12 lg:col-12">
            <InputTextField label="Loss and Damage coverage" />
          </div>
        </div>
        <div className="grid m-0 mt-2">
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Loss and Damage coverage Rate" />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <CalculaitionTextInputs
              label="Loss and Damage coverage premium"
              value="0.00"
            />
          </div>
        </div>
        <div className="grid m-0 mt-2">
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Acts of Nature Rate" />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <CalculaitionTextInputs
              label="Acts of Nature premium"
              value="0.00"
            />
          </div>
        </div>
        <div className="grid m-0 mt-2">
          <div className="col-12 md:col-6 lg:col-6">
            <DropdownField label="Bodily Injury" />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <CalculaitionTextInputs
              label="Bodily Injury Coverage Premium"
              value="0.00"
            />
          </div>
        </div>
        <div className="grid m-0 mt-2">
          <div className="col-12 md:col-6 lg:col-6">
            <DropdownField label="Property Damage" />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <CalculaitionTextInputs
              label="Property Damage Coverage Premium"
              value="0.00"
            />
          </div>
        </div>
        <div className="grid m-0 mt-2">
          <div className="col-12 md:col-12 lg:col-12">
            <DropdownField label="Auto passenger personal Accident" />
          </div>
        </div>

        <div className="grid m-0 mt-2">
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="APPA Total Coverage" />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <CalculaitionTextInputs
              label="APPA Coverage Premium"
              value="0.00"
            />
          </div>
        </div>
        <div className="grid m-0 mt-2">
          <div className="col-12 md:col-12 lg:col-12">
            <CalculaitionTextInputs label="Total Sum Insured" value="0.00" />
          </div>
        </div>
        <div className="grid m-0 mt-2">
          <div className="col-12 md:col-6 lg:col-6">
            <div className="calculation__btn__container">
              <Button label="Calculate" className="calculation__btn" />
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-6 back__next__btn__container ">
            <div className="back__btn__container">
              <Button className="back__btn" onClick={handleBackNavigation}>
                Back
              </Button>
            </div>
            <div className="next__btn__container">
              <Button
                className="next__btn"
                onClick={() => {
                  handleclick();
                }}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CoverageDetailsCard;
