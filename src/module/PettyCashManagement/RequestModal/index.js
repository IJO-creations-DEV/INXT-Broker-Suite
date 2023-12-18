import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import DropDowns from "../../../components/DropDowns";
import InputField from "../../../components/InputField";
import SvgDropdown from "../../../assets/icons/SvgDropdown";
import "./index.scss";

const RequestModal = ({ visible, setVisible }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const item = [
    { label: "Initiate" },
    { label: "Request" },
    { label: "Disbursement" },
    { label: "Disbursement" },
    { label: "Replenish" },
  ];
  return (
    <div className="modal__container">
      <Dialog
        header="Add Data"
        visible={visible}
        style={{ width: "30vw" }}
        onHide={() => setVisible(false)}
      >
        <div className="grid">
          <div
            className="col-2 md:col-3 lg:col-3"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="modal__title">Main A/c :</div>
          </div>
          <div className="col-12 md:col-9 lg:col-9">
            <DropDowns
              className="input__filed"
              placeholder="A203"
              textColor={"#111927"}
              textSize={"16"}
              textWeight={500}
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.value)}
              options={item}
              optionLabel="name"
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
        </div>
        <div className="grid mt-2">
          <div
            className="col-2 md:col-3 lg:col-3"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="modal__title">Narration :</div>
            </div>
            <div className="col-12 md:col-9 lg:col-9">
              <InputField
                classNames="input__filed"
                placeholder="Enter"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
              />
            </div>
        
        </div>
        <div className="grid mt-2">
          <div
            className="col-2 md:col-3 lg:col-3"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="modal__title">Sub A/c :</div>
          </div>
          <div className="col-12 md:col-9 lg:col-9">
            <DropDowns
              className="input__filed"
              placeholder="A203"
              textColor={"#111927"}
              textSize={"16"}
              textWeight={500}
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.value)}
              options={item}
              optionLabel="name"
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
        </div>
        <div className="grid mt-2">
          <div
            className="col-2 md:col-3 lg:col-3"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="modal__title">Narration :</div>
            </div>
            <div className="col-12 md:col-9 lg:col-9">
              <InputField
                classNames="input__filed"
                placeholder="Enter"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
              />
            </div>
        
        </div>
        <div className="grid mt-2">
          <div
            className="col-2 md:col-3 lg:col-3"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="modal__title">Amount :</div>
            </div>
            <div className="col-12 md:col-9 lg:col-9">
              <InputField
                classNames="input__filed"
                placeholder="Enter"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
              />
            </div>
        
        </div>
      </Dialog>
    </div>
  );
};

export default RequestModal;
