import React, { useState } from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import InputField from "../../../components/InputField";
import SvgDot from "../../../assets/icons/SvgDot";
import { Button } from "primereact/button";
import DropDowns from "../../../components/DropDowns";
import SvgDropdown from "../../../assets/icons/SvgDropdown";
import { Dialog } from 'primereact/dialog';
import NavBar from "../../../components/NavBar";
        

function PolicyReceipts() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPaymentFields, setShowPaymentFields] = useState(true);
  const [visible, setVisible] = useState(false);

  const handleNextButtonClick = () => {
    setShowPaymentFields(false);
  };
  const item = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  const items = [
    { label: "Accounts " },
    { label: "Receipts" },
    { label: "Add Receipt" },
  ];

  const home = { label: "Dashboard" };

  return (
    <div className="overall__add_policy_receipts__container">
      <NavBar/>
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
              placeholder={"Fully Paid"}
            />
          </div>
        </div>
      </div>

      <div className="next_container">
        <div className="exit_print_buttons">
          <Button label="Next" className="print"  onClick={handleNextButtonClick}
            />
        </div>
      </div>
    
      <div className="label_payment"  disabled={showPaymentFields}>Add Payment Entry</div>

<div class="grid">
  <div class="col-4 md:col-4 lg-col-4">
    <div>
      <InputField
        classNames="field__container"
        label="Receipt Number"
        placeholder={"Enter"}
        disabled={showPaymentFields}
      />
    </div>
  </div>
  <div class="col-4 md:col-4 lg-col-4">
    <div>
      <InputField
        classNames="field__container"
        label="Receipt Date"
        placeholder={"Enter"}
        disabled={showPaymentFields}
        
      />
    </div>
  </div>
  <div class="col-4 md:col-4 lg-col-4">
    <div>
    <DropDowns
              className="dropdown__container"
              label="Customer Code"
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.value)}
              options={item}
              optionLabel="name"
              placeholder="Enter"
              dropdownIcon={<SvgDropdown color={"#000"} />}
              disabled={showPaymentFields}
            />
    </div>
  </div>
</div>

<div class="grid">
  <div class="col-4 md:col-4 lg-col-4">
    <div>
      <InputField
        classNames="field__container"
        label="Card Number"
        placeholder={"Enter"}
      />
    </div>
  </div>
  <div class="col-4 md:col-4 lg-col-4">
    <div>
      <InputField
        classNames="field__container"
        label="EWT"
        placeholder={"Enter"}
        disabled={showPaymentFields}
      />
    </div>
  </div>
  <div class="col-4 md:col-4 lg-col-4">
    <div>
      <InputField
        classNames="field__container"
        label="Total Payment"
        placeholder={"Enter"}
        disabled={showPaymentFields}
      />
    </div>
  </div>
</div>

<div className="next_container">
  <div className="exit_print_buttons">
    <Button label="Exit" className="exit"  disabled={showPaymentFields}/>
    <Button label="Print" className="print"  disabled={showPaymentFields} onClick={() => setVisible(true)} />
    <Dialog visible={visible} style={{ width: '20vw',borderRadius:'30px' }} onHide={() => setVisible(false)}>
                <p>Receipt Number 12345 is
generated</p>
            </Dialog>
  </div>
</div>


    </div>
  );
}

export default PolicyReceipts;
