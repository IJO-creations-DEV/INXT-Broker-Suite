import React, { useState } from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import InputField from "../../../../components/InputField";
import SvgDot from "../../../../assets/icons/SvgDot";
import { Button } from "primereact/button";
import SvgDropdown from "../../../../assets/icons/SvgDropdown";
import DropDowns from "../../../../components/DropDowns";
import { Card } from "primereact/card";
import SuccessIcon from "../../../../assets/icons/SuccessIcon";
import NavBar from "../../../../components/NavBar";

function DepartmentAdding() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [visiblePopup, setVisiblePopup] = useState(false);
  const showPopup = () => {
    setVisiblePopup(true);
    setTimeout(() => {
      setVisiblePopup(false);
    }, 1000);
  };
  const items = [{ label: "Department" }, { label: "Add Department" }];
  const item = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  const home = { label: "Master" };

  return (
    <div className="overall_department-adding_container">
      <label className="label_header">Add Department</label>
      <BreadCrumb
        model={items}
        home={home}
        className="breadcrumbs_container"
        separatorIcon={<SvgDot color={"#000"} />}
      />
      <Card>
        <div class="grid">
          <div class="sm-col-12  md:col-3 lg-col-4 col-offset-9">
            <DropDowns
              className="dropdown__container"
              label="Status"
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.value)}
              options={item}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
        </div>
        <div class="grid">
          <div class="sm-col-12 col-12 md:col-3 lg-col-4">
            <div>
              <InputField
                classNames="field__container"
                label="Department Code"
                placeholder={"Enter"}
              />
            </div>
          </div>
        </div>

        <div class="grid">
          <div class="col-6 md:col-6 lg-col-6">
            <div>
              <InputField
                classNames="field__container"
                label="Description"
                placeholder={"Enter"}
              />
            </div>
          </div>
          <div class="col-6 md:col-6 lg-col-6">
            <div>
              <InputField
                classNames="field__container"
                label="Short Description"
                placeholder={"Enter"}
              />
            </div>
          </div>
        </div>

        <div class="grid">
          <div class="col-3 md:col-3 lg-col-3">
            <DropDowns
              className="dropdown__container"
              label="Company Code"
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.value)}
              options={item}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>

          <div class="col-3 md:col-3 lg-col-3">
            <div>
              <InputField
                classNames="field__container"
                label="Company Description"
                placeholder={"Enter"}
              />
            </div>
          </div>

          <div class="col-3 md:col-3 lg-col-3">
            <DropDowns
              className="dropdown__container"
              label="Branch Code"
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.value)}
              options={item}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
          <div class="col-3 md:col-3 lg-col-3">
            <InputField
              classNames="field__container"
              label="Branch Description"
              placeholder={"Enter"}
            />
          </div>
        </div>
      </Card>

      <div className="next_container">
        <div className="exit_print_buttons">
          <Button label="Save" className="print" onClick={showPopup} />
        </div>
        <div>
          {visiblePopup && (
            <div className="grid custom-modal-overlay">
              <div className="col-10 md:col-2 lg:col-2 custom-modal">
                <div className="popup__text">
                  Department code Depart00123 is Successfully added
                </div>
                <div className="popup__icon">
                  <SuccessIcon />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DepartmentAdding;
