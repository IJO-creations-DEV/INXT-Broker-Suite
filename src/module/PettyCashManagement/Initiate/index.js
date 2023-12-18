import React, { useState } from "react";
import InputField from "../../../components/InputField";
import DropDowns from "../../../components/DropDowns";
import SuccessIcon from "../../../assets/icons/SuccessIcon";
import SvgDropdown from "../../../assets/icons/SvgDropdown";
import { Button } from "primereact/button";
import "../index.scss";

const Initiate = () => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const item = [
    { label: "Initiate" },
    { label: "Request" },
    { label: "Disbursement" },
    { label: "Disbursement" },
    { label: "Replenish" },
  ];
  return (
    <div>
      <div className="grid mt-3">
        <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
          <InputField
            classNames="input__filed"
            label="Date "
            placeholder="11/12/2023"
            textColor={"#111927"}
            textSize={"16"}
            textWeight={400}
          />
        </div>

        <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
          <DropDowns
            className="input__filed"
            label="Transaction Code"
            placeholder="JV123"
            textColor={"#111927"}
            textSize={"16"}
            textWeight={400}
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.value)}
            options={item}
            optionLabel="name"
            dropdownIcon={<SvgDropdown color={"#000"} />}
          />
        </div>

        <div className="col-12 md:col-5 lg-col-5 input__view">
          <InputField
            classNames="input__filed"
            label="Description"
            placeholder="Description here"
            textColor={"#111927"}
            textSize={"16"}
            textWeight={400}
          />
        </div>
        <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
          <InputField
            classNames="input__filed"
            label="Transaction Number"
            placeholder="Enter"
            textColor={"#111927"}
            textSize={"16"}
            textWeight={400}
          />
        </div>
      </div>
      <div className="grid mt-3">
        <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
          <DropDowns
            className="input__filed"
            label="Branch Code"
            placeholder="0102"
            textColor={"#111927"}
            textSize={"16"}
            textWeight={400}
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.value)}
            options={item}
            optionLabel="name"
            dropdownIcon={<SvgDropdown color={"#000"} />}
          />
        </div>
        <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
          <DropDowns
            className="input__filed"
            label="Department Code"
            placeholder="0102"
            textColor={"#111927"}
            textSize={"16"}
            textWeight={400}
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.value)}
            options={item}
            optionLabel="name"
            dropdownIcon={<SvgDropdown color={"#000"} />}
          />
        </div>
        <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
          <DropDowns
            className="input__filed"
            label="Petty Cash Code"
            placeholder="Ho"
            textColor={"#111927"}
            textSize={"16"}
            textWeight={400}
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.value)}
            options={item}
            optionLabel="name"
            dropdownIcon={<SvgDropdown color={"#000"} />}
          />
        </div>
        <div className="col-12 md:col-5 lg-col-5 input__view">
          <InputField
            classNames="input__filed"
            label="Description"
            placeholder="Description here"
            textColor={"#111927"}
            textSize={"16"}
            textWeight={400}
          />
        </div>
      </div>
      <div className="grid mt-3">
        <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
          <DropDowns
            className="input__filed"
            label="Currency"
            placeholder="PHP"
            textColor={"#111927"}
            textSize={"16"}
            textWeight={400}
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.value)}
            options={item}
            optionLabel="name"
            dropdownIcon={<SvgDropdown color={"#000"} />}
          />
        </div>
        <div className="col-12 md:col-5 lg-col-5 input__view">
          <InputField
            classNames="input__filed"
            label="Description"
            placeholder="Description here"
            textColor={"#111927"}
            textSize={"16"}
            textWeight={400}
          />
        </div>
        <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
          <DropDowns
            className="input__filed"
            label="Bank A/c"
            placeholder="ABC-23023-562"
            textColor={"#111927"}
            textSize={"16"}
            textWeight={400}
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.value)}
            options={item}
            optionLabel="name"
            dropdownIcon={<SvgDropdown color={"#000"} />}
          />
        </div>
        <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
          <DropDowns
            className="input__filed"
            label="Sub A/c"
            placeholder="ABC-23023-562"
            textColor={"#111927"}
            textSize={"16"}
            textWeight={400}
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.value)}
            options={item}
            optionLabel="name"
            dropdownIcon={<SvgDropdown color={"#000"} />}
          />
        </div>
      </div>
      <div className="grid mt-3">
        <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
          <InputField
            classNames="input__filed"
            label="Petty Cash Size"
            placeholder="Enter"
            textColor={"#111927"}
            textSize={"16"}
            textWeight={400}
          />
        </div>
        <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
          <InputField
            classNames="input__filed"
            label="Minimum Cash Box"
            placeholder="Enter"
            textColor={"#111927"}
            textSize={"16"}
            textWeight={400}
          />
        </div>
        <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
          <InputField
            classNames="input__filed"
            label="Available Cash"
            placeholder="Enter"
            textColor={"#111927"}
            textSize={"16"}
            textWeight={400}
          />
        </div>
        <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
          <InputField
            classNames="input__filed"
            label="Transaction Limit"
            placeholder="Enter"
            textColor={"#111927"}
            textSize={"16"}
            textWeight={400}
          />
        </div>
        </div>
      <div className="col-12 md:col-12 lg-col-12 button__view__corrections">
        <div>
          <Button
            label="Approve"
            className="correction__btn"
            onClick={() => setVisiblePopup(true)}
          />
        </div>
      </div>
      <div className="col-12">
        {visiblePopup && (
          <div className="grid custom-modal-overlay_create">
            <div className="col-10 md:col-2 lg:col-2 custommodal_create">
              <div>Approved</div>
              <div style={{ marginLeft: 15 }}>
                <SuccessIcon />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Initiate;
