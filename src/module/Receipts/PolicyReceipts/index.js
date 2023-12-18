import React, { useState, useEffect } from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import NavBar from "../../../components/NavBar";
import { useNavigate } from "react-router-dom";
import SvgDot from "../../../assets/icons/SvgDot";
import SvgFilters from "../../../assets/icons/SvgFilters";
import SvgAdd from "../../../assets/icons/SvgAdd";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { TabView, TabPanel } from "primereact/tabview";
import { data } from "./mock";
import { data1 } from "./mock1";
import SvgArrow from "../../../assets/icons/SvgArrow";

const Index = () => {

  const headerStyle = {
    width: "12rem",
    fontSize: 16,
    fontFamily: "Inter var",
    fontWeight: 500,
    padding: 6,
    color: "#000",
    border: "none",
  };

  const items = [
    
    { label: "Accounts " },
    { label: "Receipts" },
  ];
  const home = { label: "Dashboard" };

  const navigate = useNavigate();
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(5);
 

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };



  const handlePolicy =()=>{
    navigate('/addpolicyreceipt1')
  }
  const handleArrowClick = () => {
    navigate("/policyreceiptsview");
  };
  const handleEditClick = () => {
    navigate("/otherreceiptsview");
  };
  return (
    <div className="overall__policyrecepts__container">
      <NavBar />
      <div className="overallfilter_container">
        <div>
          <label className="label_header">Receipts</label>
          <BreadCrumb
            model={items}
            home={home}
            className="breadcrumbs_container"
            separatorIcon={<SvgDot color={"#000"} />}
          />
        </div>

        <div className="filterbutton_container">
          <SvgFilters />

          <div className="addbutton_container" onClick={handlePolicy}>
            <SvgAdd className="addicon" />
            <p className="addtext">Add</p>
          </div>
        </div>
      </div>

      <TabView>
        <TabPanel header="Policy Receipt">
          <Card
        
          >
            <div className="searchiput_container">
              <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Search" className="searchinput_left" />
              </span>
            </div>

            <div className="card">
              <DataTable
                value={data}
                tableStyle={{ minWidth: "50rem", color: "#1C2536" }}
                paginator
                rows={5}
                rowsPerPageOptions={[5, 10, 25, 50]}
                paginatorTemplate=" FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} - {last} of {totalRecords}"
              >
                <Column
                  field="customerName"
                  header="customerName"
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                ></Column>
                <Column
                  field="branchCode"
                  header="branchCode"
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                ></Column>
                <Column
                  field="departmentCode"
                  header="departmentCode"
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                ></Column>
                <Column
                  field="receiptNo"
                  header="receiptNo"
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                ></Column>
                <Column
                  field="receiptDate"
                  header="receiptDate"
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                ></Column>
                <Column
                  field="paymentType"
                  header="paymentType"
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                ></Column>
                <Column
                  field="amount"
                  header="amount"
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                ></Column>
                <Column
                  body={(params) => (
                    <SvgArrow onClick={() => handleArrowClick()} />
                  )}
                  header="Action"
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                ></Column>
              </DataTable>
            </div>
          </Card>
        </TabPanel>

        <TabPanel header="Other Receipt">
          <Card
          
          >
            <div className="searchiput_container">
              <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Search" className="searchinput_left" />
              </span>
            </div>

            <div className="card">
              <DataTable
                value={data1}
                tableStyle={{ minWidth: "50rem", color: "#1C2536" }}
                paginator
                rows={5}
                rowsPerPageOptions={[5, 10, 25, 50]}
                paginatorTemplate=" FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} - {last} of {totalRecords}"
              >
                <Column
                  field="branchCode"
                  header="Branch Code"
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                ></Column>
                <Column
                  field="departmentCode"
                  header="Department Code"
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                ></Column>
                <Column
                  field="receiptNo"
                  header="Receipt No"
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                ></Column>
                <Column
                  field="receiptDate"
                  header="Receipt Date"
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                ></Column>
                <Column
                  field="paymentType"
                  header="Payment Type"
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                ></Column>
                <Column
                  field="amount"
                  header="Amount"
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                ></Column>
          
                <Column
                  body={() => (
                    <SvgArrow onClick={() => handleEditClick()} />
                  )}
                  header="Action"
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                ></Column>
              </DataTable>
            </div>
          </Card>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default Index;
