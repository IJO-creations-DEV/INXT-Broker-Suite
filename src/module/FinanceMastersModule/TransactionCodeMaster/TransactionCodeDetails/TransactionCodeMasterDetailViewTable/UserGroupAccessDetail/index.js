import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { useNavigate } from "react-router";
import "./index.scss";
import SvgTable from "../../../../../../assets/icons/SvgTable";

const UserGroupAccessDetail = () => {
  const [products, setProducts] = useState([]);

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
        <div className="paginator__container">
          <React.Fragment>
            <span
              className="mx-1"
              style={{
                color: "var(--text-color)",
                userSelect: "none",
                width: "127%",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
              }}
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

  const headerStyle = {
    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    padding: 6,
    color: "#000",
    border: "none",
  };
  return (
    <div className="transactioncode__master__table_UserGroupAccess">
      {/* <Card className="mt-1"> */}
      <div className="card">
        <DataTable
          value={products}
          tableStyle={{
            minWidth: "50rem",
            color: "#1C2536",
          }}
          scrollable={true}
          scrollHeight="40vh"
        //   paginator
        //   rows={5}
        //   rowsPerPageOptions={[5, 10, 25, 50]}
        //   // paginatorTemplate="RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        //   currentPageReportTemplate="{first} - {last} of {totalRecords}"
        //   paginatorTemplate={template2}
          emptyMessage={isEmpty ? emptyTableIcon : null}
        >
          <Column
            field="UserRole"
            header="User Role"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="MinimumTransaction"
            header="Minimum Transaction"
            headerStyle={headerStyle}
            className="fieldvalue_container"
            //   sortable
          ></Column>
          <Column
            field="MaximumTransaction"
            header="Maximum Transaction"
            headerStyle={headerStyle}
            className="fieldvalue_container"
            //   sortable
          ></Column>
          <Column
            field="Edit"
            header="Edit"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
        </DataTable>
      </div>
      {/* </Card> */}
    </div>
  );
};

export default UserGroupAccessDetail;