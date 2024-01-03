import React, { useState, useEffect } from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import InputField from "../../../components/InputField";
import SvgDot from "../../../assets/icons/SvgDot";
import { Button } from "primereact/button";
import NavBar from "../../../components/NavBar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { data } from "./mock";
import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";
import SvgBack from "../../../assets/icons/SvgBack";
import { useNavigate } from "react-router-dom";
import SvgEdits from "../../../assets/icons/SvgEdits";
import { Dialog } from "primereact/dialog";

function PolicyReceipts() {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [visible, setVisible] = useState(false);
  //   const popupRef = useRef(null);

  useEffect(() => {
    setProducts(data);
  }, []);
  const navigate = useNavigate();
  const items = [{ label: "Receipts",url:"/accounts/receipts" }, { label: "Add Receipts",url:"/accounts/receipts/addreceipts" }];

  const home = { label: "Accounts " };
 
  const renderViewButton = (rowData) => {
    return (
      <div  onClick={() => handleView(rowData)}>
       
          <SvgEdits style={{cursor:"pointer"}}/>
          
         
        
      </div>
    );
  };
  const handleView = (rowData) => {
    console.log("View clicked:", rowData);
    setVisiblePopup(true);
    
  };
  const handleClick = () => {
    navigate("/accounts/receipts/paymentdetails");
  };

  const template2 = {
    layout:
      "RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",
    RowsPerPageDropdown: (options) => {
      const dropdownOptions = [
        { label: 5, value: 5 },
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 120, value: 120 },
      ];

      return (
        <React.Fragment>
          <span
            className="mx-1"
            style={{ color: "var(--text-color)", userSelect: "none" }}
          >
            Row count :{" "}
          </span>
          <Dropdown
            value={options.value}
            className="pagedropdown_container"
            options={dropdownOptions}
            onChange={options.onChange}
          />
        </React.Fragment>
      );
    },
  };

  const headerStyle = {
    fontSize: 16,
    fontFamily: "Inter var",
    fontWeight: 500,
    color: "#000",
    border: "none",
  };

  return (
    <div className="overall__add_policy_edit__container">
      <NavBar />
      <SvgBack />
      <label className="label_header">Add Receipts</label>
      <BreadCrumb
        model={items}
        home={home}
        className="breadcrumbs_container"
        separatorIcon={<SvgDot color={"#000"} />}
      />

      <div className="listlable_textcontainer">
        <label className="listlable_text">Receivable</label>
      </div>
      <Card>
        <div className="card">
          <DataTable
            value={products}
            style={{width:'74vw'}}
            tableStyle={{
              width:"50vw",
              // minWidth: "50rem",
              color: "#1C2536",
              // maxHeight: "50vh",
              // overflowy: "auto",
            }}
            // scrollable={true}
            // scrollHeight="40vh"
            selection={selectedProducts}
            onSelectionChange={(e) => setSelectedProducts(e.value)}
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            currentPageReportTemplate="{first} - {last} of {totalRecords}"
            paginatorTemplate={template2}
            className="datatable_container"
           
            selectionMode="checkbox"
          >
            <Column selectionMode="multiple" exportable={false}></Column>
            <Column
              field="policies"
              header="Policies"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
            sortable
              field="netPremium"
              header="Net Premium"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
            sortable
              field="paid"
              header="Paid"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
            sortable
              field="unPaid"
              header="UnPaid"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              field="discounts"
              header="Discounts"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              field="dst"
              header="DST"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              field="lgt"
              header="LGT"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>

            <Column
              field="vat"
              header="VAT"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              field="other"
              header="Other"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              field="fcAmount"
              header="FC Amount"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              field="lcAmount"
              header="LC Amount"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>

            <Column
              body={renderViewButton}
              header="Action"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
          </DataTable>
        </div>
      </Card>

      <div className="input_style">
        <div class="col-12 md:col-3 lg-col-2-5">
          <div>
            <InputField
              classNames="policy_input"
              label="Net Premium"
              value={"00.00"}
            />
          </div>
        </div>
        <div class="col-12 md:col-3 lg-col-2-5">
          <div>
            <InputField
              classNames="policy_input"
              label="Paid Premium"
              value={"00.00"}
            />
          </div>
        </div>
        <div class="col-12 md:col-3 lg-col-2-5">
          <div>
            <InputField
              classNames="policy_input"
              label="Actual Payment"
              value={"00.00"}
            />
          </div>
        </div>
        <div class="col-12 md:col-3 lg-col-2-5">
          <div>
            <InputField
              classNames="policy_input"
              label="Total Taxes"
              value={"00.00"}
            />
          </div>
        </div>
        <div class="col-12 md:col-3 lg-col-2-5">
          <div>
            <InputField
              classNames="policy_input"
              label="Outstanding Premium"
              value={"00.00"}
            />
          </div>
        </div>
      </div>
      <div className="next_container">
        <div className="exit_print_buttons">
          <Button label="Next" className="print" onClick={handleClick} disabled={!selectedProducts }/>
        </div>
      </div>
      <div className="col-12">
      
        <Dialog
          header="Policy details"
          visible={visiblePopup}
          className="dialog_fields"
          onHide={() => setVisiblePopup(false)}
        >
          <div class="grid">
            <div class="sm-col-12  md:col-6 lg-col-6">
              <InputField
                classNames="field__container"
                label="Policy"
                placeholder={"Enter"}
                //   value={selectedRowData.policy}
              />
            </div>
            <div class="sm-col-12  md:col-6 lg-col-6">
              <InputField
                classNames="field__container"
                label="Net Premium"
                placeholder={"Enter"}
              />
            </div>
          </div>
          <div class="grid">
            <div class="col-12 md:col-6 lg:col-6">
              <InputField
                classNames="field__container"
                label="Paid"
                placeholder={"Enter"}
              />
            </div>
            <div class="col-12 md:col-6 lg:col-6">
              <InputField
                classNames="field__container"
                label="Unpaid"
                placeholder={"Enter"}
              />
            </div>
          </div>
          <div class="grid">
            <div class="col-12 md:col-6 lg:col-6">
              <InputField
                classNames="field__container"
                label="Discounts"
                placeholder={"Enter"}
              />
            </div>
            <div class="col-12 md:col-6 lg:col-6">
              <InputField
                classNames="field__container"
                label="DST"
                placeholder={"Enter"}
              />
            </div>
          </div>
          <div class="grid">
            <div class="col-12 md:col-6 lg:col-6">
              <InputField
                classNames="field__container"
                label="LGT"
                placeholder={"Enter"}
              />
            </div>
            <div class="col-12 md:col-6 lg:col-6">
              <InputField
                classNames="field__container"
                label="VAT"
                placeholder={"Enter"}
              />
            </div>
          </div>
          <div class="grid">
            <div class="col-12 md:col-6 lg:col-6">
              <InputField
                classNames="field__container"
                label="Other"
                placeholder={"Enter"}
              />
            </div>
            <div class="col-12 md:col-6 lg:col-6">
              <InputField
                classNames="field__container"
                label="FC Amount"
                placeholder={"Enter"}
              />
            </div>
          </div>
         
          <div className="update_btn">
            <Button
           
              label="Update"
              className="update_btnlabel"
              onClick={() => setVisible(false)}
              
            />
          </div>
        </Dialog>{" "}
      </div>
    </div>
  );
}

export default PolicyReceipts;
