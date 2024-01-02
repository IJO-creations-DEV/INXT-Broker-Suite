import { Card } from "primereact/card";
import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";
import SvgAdd from "../../../../../assets/icons/SvgAdd";
import TransactionCodeSetupTable from "./TransactionCodeSetupTable";
import "./index.scss"
import UserGroupAccess from "./UserGroupAccessTable";
const TransactionCodeMasterViewTable = () => {
    const renderTabHeader = (title) => (
        <div className="tab-header">
          <span>{title}</span>
          <Button
            icon={<SvgAdd color={"#fff"} />}
            className="add__btn"
            onClick={() => {
              // Handle button click here based on the tab
            }}
          />
        </div>
      );
  return (
    <Card className="view__table mt-4">
      <div className="grid mt-1">
        <div className="col-12 md:col-12 lg-col-12 ">
          <TabView >
            <TabPanel header="Transaction Code Setup" ><TransactionCodeSetupTable/></TabPanel>
            <TabPanel header="User Group Access"><UserGroupAccess/></TabPanel>
          </TabView>
        </div>
        {/* <div className="col-12 md:col-6 lg-col-6 ">
            <div className="btn__container">
          <Button
            label="Add"
            icon={<SvgAdd color={"#fff"} />}
            className="add__btn"
            onClick={() => {
            //   handleClick();
            }}
          />
          </div>
        </div> */}
      </div>
      
    </Card>
  );
};

export default TransactionCodeMasterViewTable;
