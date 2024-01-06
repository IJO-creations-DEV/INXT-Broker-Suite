import React, { useState } from "react";
import "./index.scss";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Productdata from "./mock";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import SvgIconeye from "../../../../../assets/icons/SvgIconeye";
import SvgEdit from "../../../../../assets/icons/SvgEdits";
import SvgTable from "../../../../../assets/icons/SvgTable";
import { InputSwitch } from "primereact/inputswitch";
import ToggleButton from "../../../../../components/ToggleButton";

const TableData = ({ navigate }) => {
  // const navigate = useNavigation();
  const [products, setProducts] = useState([]);

  const emptyTableIcon = (
    <div>
      <div className="empty-table-icon">
        <SvgTable />
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
  const renderActionButton = (rowData) => {
    return (
      <div className="action__button__container">
        <Button
          icon={<SvgIconeye />}
          onClick={() => handleView(rowData.id)}
          className="action__button p-0"
        />
        <Button
          icon={<SvgEdit />}
          onClick={() => handleEdit(rowData.id)}
          className="action__button p-0 w-auto"
        />
      </div>
    );
  };

  const renderToggleButton = (rowData) => {
    return (
      <div>
        <ToggleButton />
      </div>
    );
  };

  const handleView = (id) => {
    navigate(`/master/generals/insurancemanagement/cover/view/${id}`);
  };
  const handleEdit = (id) => {
    navigate(`/master/generals/insurancemanagement/cover/edit/${id}`);
  };
  return (
    <div className="cover__table__container">
      <div className="grid m-0 header_search_container">
        <div class="col-12 md:col-10 lg:col-10 xl:col-10 p-0">
          <span className="p-input-icon-left w-full">
            <i className="pi pi-search" />
            <InputText
              placeholder="Search By Insurance Company  Code"
              className="searchinput__field"
            />
          </span>
        </div>
        <div className="p-0 col-12">
          <div className="table__title">Cover List</div>
        </div>
      </div>
      <DataTable
        value={Productdata}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        currentPageReportTemplate="{first} - {last} of {totalRecords}"
        paginatorTemplate={template2}
        className="reversal__table__main"
        emptyMessage={emptyTableIcon}
      >
        <Column
          field="coverCode"
          header="Cover Code"
          className="fieldvalue_container"
          sortable
        ></Column>
        <Column
          field="coverName"
          header="Cover Name"
          className="fieldvalue_container"
        ></Column>
        <Column
          field="policyType"
          header="Policy Type"
          className="fieldvalue_container"
        ></Column>
        <Column
          field="modifiedby"
          header="Modified by"
          className="fieldvalue_container"
        ></Column>
        <Column
          field="modifiedOn"
          header="Modified On"
          className="fieldvalue_container"
        ></Column>
        <Column
          field="status"
          header="status"
          className="fieldvalue_container"
          body={renderToggleButton}
        ></Column>
        <Column
          style={{
            padding: "20px 1rem 17px 0px",
          }}
          field="id"
          body={renderActionButton}
          header="Action"
          className="fieldvalue_container"
        ></Column>
      </DataTable>
    </div>
  );
};

export default TableData;
