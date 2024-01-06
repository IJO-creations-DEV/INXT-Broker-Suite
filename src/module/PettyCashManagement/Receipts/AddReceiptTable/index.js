import React, { useState, useRef } from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../../../assets/icons/SvgDot";
import { useNavigate } from "react-router";
import SvgBackArrow from "../../../../assets/icons/SvgBackArrow";
import CustomToast from "../../../../components/Toast";
import SvgTable from "../../../../assets/icons/SvgTable";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import InputField from "../../../../components/InputField";
import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";

const AddReceiptsTable = () => {
  const [data, setData] = useState([
    { TransactionCode: "12838", RequestNumber: "012345", Date: "17/05/2024", Amount: 123, Remarks: "remark1" },
    { TransactionCode: "12839", RequestNumber: "01234516", Date: "13/05/2024", Amount: 143, Remarks: "remark2" },
    { TransactionCode: "12840", RequestNumber: "01234536", Date: "14/05/2024", Amount: 153, Remarks: "remark3" },
    { TransactionCode: "12841", RequestNumber: "01234546", Date: "15/05/2024", Amount: 173, Remarks: "remark4" },
    { TransactionCode: "12842", RequestNumber: "01234556", Date: "16/05/2024", Amount: 183, Remarks: "remark5" },


  ]);
  const [visible, setVisible] = useState(false);
  const isEmpty = data.length === 0;
  const toastRef = useRef(null);
  const navigate = useNavigate();
  const handleSubmit = () => {
    toastRef.current.showToast();
    {
      setTimeout(() => {
        navigate("/accounts/pettycash/receipts");
      }, 2000);
    }
  };

  const emptyTableIcon = (
    <div className="empty-table-icon">
      <SvgTable />
    </div>
  );

  const items = [
    { label: "Petty Cash", url: "/accounts/pettycash/addreceiptstable" },
    {
      label: "Add Receipt",
      url: "/accounts/pettycash/addreceiptstable",
    },
  ];
  const Initiate = { label: "Accounts" };

  const handleClick = () => {
    setVisible(true);
  };

  const handleBack = () => {
    navigate("/accounts/pettycash/addreceipts");
  };

  const headerStyle = {
    // width: "10rem",
    fontSize: 16,
    fontFamily: "Inter var",
    fontWeight: 500,
    padding: 6,
    color: "#000",
    border: "none",
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
        <div className="paginator__container">
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
        </div>
      );
    },
  };

  return (
    <div className="add__receipts__table">
      <CustomToast ref={toastRef} message="Petty Cash Receipt Successfully" />
      <div className="grid  m-0">
        <div className="col-12 md:col-6 lg:col-6">
          <div
            className="pettycash__title"
            onClick={() => {
              handleBack();
            }}
          >
            <SvgBackArrow />
            Add Receipt
          </div>
          <div className="mt-3">
            <BreadCrumb
              model={items}
              home={Initiate}
              className="breadCrums"
              separatorIcon={<SvgDot color={"#000"} />}
            />
          </div>
        </div>
      </div>
      <Card>
        <div className="sub__container grid ">
          <div className="sub__container__title col-12 md:col-12 lg:col-6">
            <div className="sub__request__title">Receipt List</div>
          </div>
        </div>
        <div className="table__container">
          <DataTable
            value={data}
            tableStyle={{ minWidth: "50rem" }}
            scrollable={true}
            scrollHeight="40vh"
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            // paginatorTemplate="RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="{first} - {last} of {totalRecords}"
            paginatorTemplate={template2}
            emptyMessage={isEmpty ? emptyTableIcon : null}
          >
            <Column
              header={<input type="checkbox" />}
              body={() => (
                <input
                  type="checkbox"
                  onClick={() => {
                    handleClick();
                  }}
                />
              )}
              headerStyle={headerStyle}
              style={{ textAlign: "start" }}

            />
            <Column
              field="TransactionCode"
              header="Transaction Code"
              headerStyle={headerStyle}

            ></Column>
            <Column
              field="RequestNumber"
              header="Request Number"
              headerStyle={headerStyle}
              sortable
            ></Column>
            <Column
              field="Date"
              header="Date"
              headerStyle={headerStyle}
              sortable
            ></Column>
            <Column
              field="Amount"
              header="Amount"
              headerStyle={headerStyle}
              sortable
            ></Column>
            <Column
              field="Remarks"
              header="Remarks"
              headerStyle={headerStyle}

            ></Column>
          </DataTable>
        </div>
      </Card>
      <div className="grid mt-4">
        <div className="col-12 md:col-3 lg:col-3">
          <InputField
            classNames="input__filed"
            label="Disbursed Amount"
            value={120.00}
            // placeholder="Enter"
            disabled={true}
            textColor={"#111927"}
            textSize={"16"}
            textWeight={500}
          />
        </div>
        <div className="col-12 md:col-3 lg:col-3">
          <InputField
            classNames="input__filed"
            label="Balance Amount"
            value={20.00}
            // placeholder="Enter"
            disabled={true}
            textColor={"#111927"}
            textSize={"16"}
            textWeight={500}
          />
        </div>
      </div>
      <div className="grid  mt-4">
        <div className="col-12 md:col-12 lg:col-12">
          <div className="btn__container">
            <Button
              label="Approve"
              className="add__btn"
              disabled={visible === true ? false : true}
              onClick={() => {
                handleSubmit();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReceiptsTable;
