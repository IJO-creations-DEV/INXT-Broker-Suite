import React, { useState } from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import InputField from "../../../components/InputField";
import SvgDot from "../../../assets/icons/SvgDot";
import { Button } from "primereact/button";
import DropDowns from "../../../components/DropDowns";
import SvgDropdown from "../../../assets/icons/SvgDropdown";
import { useNavigate } from "react-router-dom";

function PolicyReceipts() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [select, setSelect] = React.useState("");
  const navigate = useNavigate();

  const handleReceipts = () => {
    if (select === "policyreceipts") {
      navigate("/addpolicyreceipts");
    } else if (select === "otherreceipts") {
      navigate("/addotherreceipt");
    }
  };
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    console.log(event, "event==>");
    setSelect(selectedValue);
  };

  const item = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  const data = [
    { name: "Policy Receipts", code: "PR",value:"policyreceipts"},
    { name: "Other Receipts", code: "OR",value:'otherreceipts' },
  ];
  const items = [
    { label: "Accounts " },
    { label: "Receipts" },
    { label: "Add Receipt" },
  ];

  const home = { label: "Dashboard" };

  return (
    <div className="overall__add_policy_receipts__container">
      <label className="label_header">Receipt Details</label>
      <BreadCrumb
        model={items}
        home={home}
        className="breadcrumbs_container"
        separatorIcon={<SvgDot color={"#000"} />}
      />

      <div class="grid">
        <div class="sm-col-12 col-12 md:col-3 lg-col-2-5">
          <div>
            <DropDowns
              className="dropdown__container"
              label="Branch"
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.value)}
              options={item}
              optionLabel="name"
              placeholder="Select"
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
        </div>
        <div class="sm-col-12  md:col-3 lg-col-2-5">
          <div>
            <DropDowns
              className="dropdown__container"
              label="Department"
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.value)}
              options={item}
              optionLabel="name"
              placeholder="Select"
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
        </div>
        <div class="sm-col-12  md:col-3 lg-col-2-5">
          <div>
            <DropDowns
              className="dropdown__container"
              label="Receipt Type"
              value={select}
              onChange={handleChange}
              options={data}
              optionLabel="name"
              placeholder="Select"
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
        </div>
        <div class="col-12 md:col-3 lg-col-2-5">
          <div>
            <DropDowns
              className="dropdown__container"
              label="Customer Code"
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.value)}
              options={item}
              optionLabel="name"
              placeholder="Select"
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
        </div>
        <div class="col-12 md:col-3 lg-col-2-5">
          <div>
            <InputField
              classNames="field__container"
              label="Remarks"
              placeholder={"Enter"}
            />
          </div>
        </div>
      </div>

      <div className="next_container">
        <div className="exit_print_buttons">
          <Button label="Next" className="print" onClick={handleReceipts}
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default PolicyReceipts;
