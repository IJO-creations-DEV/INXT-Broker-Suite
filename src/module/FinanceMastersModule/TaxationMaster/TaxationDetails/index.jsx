import { BreadCrumb } from "primereact/breadcrumb";
import React from "react";
import NavBar from "../../../../components/NavBar";
import SvgDot from "../../../../assets/icons/SvgDot";
import "./index.scss";
import InputField from "../../../../components/InputField";
import SvgBack from "../../../../assets/icons/SvgBack";

const TaxationDetails = () => {
  const items = [
    { label: "Taxation Master", url: "/master/finance/taxation" },
    {
      label: "Taxation Details",
      url: "/master/finance/taxation/taxationdetails",
    },
  ];
  const home = { label: "Master" };

  return (
    <div className="grid overall__taxation__details">
      <div className="col-12">
        <NavBar />
      </div>
      <div>
        <SvgBack />
        <label className="label_header">Taxation Details</label>
      </div>
      <div className="col-12 mb-2">
        <div className="mt-3">
          <BreadCrumb
            home={home}
            className="breadCrums__view__add__screen"
            model={items}
            separatorIcon={<SvgDot color={"#000"} />}
          />
        </div>
      </div>
      <div className="col-12 m-0 ">
        <div className="grid add__account__sub__container p-3">
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
              value={"0102"}
              label="Tax Code"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
              value={"Name"}
              label="Tax Name"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
              value={"30%"}
              label="Tax Rate"
              classNames="dropdown__add__sub"
              className="label__sub__add"
            />
          </div>

          <div className="col-12 md:col-3 lg:col-3">
            <InputField
              value={"0102"}
              label="Basis"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputField
              value={"Remarks to be entered here"}
              label="Remarks"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputField
              value={
                "A description is a detailed and informative explanation or portrayal of something"
              }
              label="Taxation Description"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div className="col-12 md:col-3 lg-col-3 input__view__reversal">
            <InputField
              value={"10/12/2023"}
              label="Effective From"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div className="col-12 md:col-3 lg-col-3 input__view__reversal">
            <InputField
              value={"10/12/2024"}
              label="Effective To"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TaxationDetails;
