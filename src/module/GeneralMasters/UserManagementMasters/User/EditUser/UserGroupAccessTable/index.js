import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { useNavigate } from "react-router";
import "./index.scss";
import SvgTable from "../../../../../../assets/icons/SvgTable";
import { Button } from "primereact/button";
import SvgAdd from "../../../../../../assets/icons/SvgAdd";
import { Dialog } from "primereact/dialog";
import InputField from "../../../../../../components/InputField";
import DropDowns from "../../../../../../components/DropDowns";
import SvgDropdown from "../../../../../../assets/icons/SvgDropdown";

const UserGroupAccess = () => {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);

  const item =[
{name:"3456"}
  ]
  const handleClick = () => {
    setShow(!show);
  };
  const navigate = useNavigate();
  const isEmpty = products.length === 0;

  const emptyTableIcon = (
    <div>
    <div className="empty-table-icon">
      <SvgTable/>
    </div>
    <div className="no__data__found">No data entered</div>
    </div>
  );
  

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
        <div className="table__selector">
          <React.Fragment>
            <span style={{ color: "var(--text-color)", userSelect: "none" }}>
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



  const handleView = (rowData) => {
    console.log("View clicked:", rowData);
    // navigate("/accounts/pettycash/PettyCashCodeDetails")
  };
  const headerStyle = {
    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    padding: 6,
    color: "#000",
    border: "none",
  };

  const handleSave = () => {
    setShow(false);
  };
  return (
    <div className="transactioncode__master__table_UserGroupAccess">
      {/* <Card className="mt-1"> */}
      <div className="card">
        <div className="btn__container">
          <Button
            label="Add"
            icon={<SvgAdd color={"#fff"} />}
            className="add__btn"
            onClick={() => {
              handleClick();
            }}
          />
        </div>
        <DataTable
          value={products}
          tableStyle={{
            minWidth: "50rem",
            color: "#1C2536",
          }}
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
            field="RoleCode"
            header="Role code"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="RoleName"
            header="Role name"
            headerStyle={headerStyle}
            className="fieldvalue_container"
            //   sortable
          ></Column>
          <Column
            field="ActiveHours"
            header="Active Hours"
            headerStyle={headerStyle}
            className="fieldvalue_container"
            //   sortable
          ></Column>
          <Column
            field="Action"
            header="Action"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
        </DataTable>
      </div>
      <Dialog
        header="Add User Group Access"
        visible={show}
        style={{ width: "50vw" }}
        onHide={() => setShow(false)}
      >
        <div className="grid mt-1">
          <div className=" col-12 md:col-6 lg-col-6 ">
            <DropDowns
              className="inputdialog__fieled"
              label="Role Code"
              placeholder="Select"
              textColor={"#111927"}
              textSize={"16"}
              textWeight={500}
              dropdownIcon={<SvgDropdown color={"#000"} />}
              options={item}
             
            />
          </div>
          <div className=" col-12 md:col-6 lg-col-6 ">
            <InputField
              classNames="input__filed"
              label="Role Name"
              placeholder="Enter"
              textColor={"#111927"}
              textSize={"16"}
              textWeight={500}
            
            />
          </div>
        </div>
        <div className="grid mt-1">
      
          <div className=" col-12 md:col-6 lg-col-6 ">
            <InputField
              classNames="input__filed"
              label="Active Hours"
              placeholder="Enter"
              textColor={"#111927"}
              textSize={"16"}
              textWeight={500}
            
            />
          </div>
        </div>
        <div className="btn__container">
          <Button
            label="Save"
            className="add__btn"
            onClick={() => {
              handleSave();
            }}
          />
        </div>
      </Dialog>
      {/* </Card> */}
    </div>
  );
};

export default UserGroupAccess;
