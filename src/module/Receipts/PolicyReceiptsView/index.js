import React from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import InputField from "../../../components/InputField";
import SvgDot from "../../../assets/icons/SvgDot";
import { Button } from "primereact/button";

function PolicyReceipts() {
  const items = [
    { label: "Accounts " },
    { label: "Receipts" },
    { label: "Receipts Details" },
  ];

  const home = { label: "Dashboard" };

  return (
    <div className="overall__policy_receipts_view__container">
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
            <InputField
              classNames="field__container"
              label="Branch"
              placeholder={"B012"}
            />
          </div>
        </div>
        <div class="sm-col-12  md:col-3 lg-col-2-5">
          <div>
            <InputField
              classNames="field__container"
              label="Department"
              placeholder={"Dep012"}
            />
          </div>
        </div>
        <div class="sm-col-12  md:col-3 lg-col-2-5">
          <div>
            <InputField
              classNames="field__container"
              label="Receipt Type"
              placeholder={"Policy Receipt"}
            />
          </div>
        </div>
        <div class="col-12 md:col-3 lg-col-2-5">
          <div>
            <InputField
              classNames="field__container"
              label="Customer Code"
              placeholder={"Cust001"}
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

      <div className="label_payment">Payment Details</div>

      <div class="grid">
        <div class="col-4 md:col-4 lg-col-4">
          <div>
            <InputField
              classNames="field__container"
              label="Receipt Number"
              placeholder={"Rec001"}
            />
          </div>
        </div>
        <div class="col-4 md:col-4 lg-col-4">
          <div>
            <InputField
              classNames="field__container"
              label="Receipt Date"
              placeholder={"07/12/2023"}
            />
          </div>
        </div>
        <div class="col-4 md:col-4 lg-col-4">
          <div>
            <InputField
              classNames="field__container"
              label="Payment Type"
              placeholder={"Card"}
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
              placeholder={"1234 5678 9123 4567"}
            />
          </div>
        </div>
        <div class="col-4 md:col-4 lg-col-4">
          <div>
            <InputField
              classNames="field__container"
              label="Total Payment"
              placeholder={"5000.00"}
            />
          </div>
        </div>
      </div>

      <div className="next_container">
        <div className="exit_print_buttons">
          <Button label="Exit" className="exit" />
          <Button label="Print" className="print" />
        </div>
      </div>
    </div>
  );
}

export default PolicyReceipts;
