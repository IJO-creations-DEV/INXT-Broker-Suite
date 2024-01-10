import React from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../assets/icons/SvgDot";
import InitiateComponent from "./Initiate";
import RequestComponent from "./Request";
import Disbursement from "./Disbursement";
import { TabView, TabPanel } from "primereact/tabview";

const Pettycashmanagement = () => {
  const items = [
    { label: "Accounts", to: "/accounts" },
    { label: "Petty Cash Management", to: "Petty Cash Management" },
  ];
  const Initiate = { label: "Dashboard" };
  return (
    <div className="grid pettycash__management m-0">
      <div className="col-12">
        <div className="pettycash__title">Petty Cash Management</div>
      </div>
      <div className="col-12 md:col-2-5 lg-col-2-5 mb-4 sidebar">
        <BreadCrumb
          model={items}
          home={Initiate}
          className="breadCrums"
          separatorIcon={<SvgDot color={"#000"} />}
        />
      </div>
      <div className="col-12 mb-3">
        <TabView className="p-tabmenu p-component tab-border p-tabmenu-nav p-reset">
          <TabPanel header="Initiate">
            <InitiateComponent />
          </TabPanel>
          <TabPanel header="Request">
            <RequestComponent />
          </TabPanel>
          <TabPanel header="Disbursement">
            <Disbursement />
          </TabPanel>
          <TabPanel header="Receipts"></TabPanel>
          <TabPanel header="Replenish"></TabPanel>
        </TabView>
      </div>
    </div>
  );
};

export default Pettycashmanagement;
