import React, { useState } from "react";
import "./index.scss";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import SvgIconeye from "../../../../assets/icons/SvgIconeye";
import SvgEdit from "../../../../assets/icons/SvgEdits";
import SvgTable from "../../../../assets/icons/SvgTable";
import { InputSwitch } from "primereact/inputswitch";
import ToggleButton from "../../../../components/ToggleButton";
import { useSelector } from "react-redux";

const TableData = ({ handleViewAction, handleEditAction, EmptyTable }) => {
  const [products, setProducts] = useState([]);
  const { AccountCategoryList, loading } = useSelector(
    ({ accountCategoryReducer }) => {
      return {
        loading: accountCategoryReducer?.loading,
        AccountCategoryList: accountCategoryReducer?.AccountCategoryList,
      };
    }
  );
  console.log(AccountCategoryList, "find AccountCategoryList");
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
          onClick={() => handleViewAction(rowData)}
          className="action__button p-0"
        />
        <Button
          icon={<SvgEdit />}
          onClick={() => handleEditAction(rowData)}
          className="action__button p-0 w-auto"
        />
      </div>
    );
  };
  const renderStatusButton = (rowData) => {
    console.log(rowData.status, "find status");
    return (
      <div className="action__switch__container">
        <InputSwitch
          checked={rowData.status ? true : false}
          className={
            rowData.status
              ? "switch__action__input__active"
              : "switch__action__input__inactive"
          }
        />
      </div>
    );
  };
  const renderToggleButton = () => {
    return (
      <div>
        <ToggleButton />
      </div>
    );
  };
  return (
    <div className="master__account__table__container">
      <div className="grid m-0 header_search_container">
        <div class="col-12 md:col-12 lg:col-12 xl:col-12 p-0">
          <span className="p-input-icon-left w-full">
            <i className="pi pi-search" />
            <InputText
              placeholder="Search By Account Category Code"
              className="searchinput__field"
            />
          </span>
        </div>
        <div className="p-0 col-12">
          <div className="table__title">Account Category List</div>
        </div>
      </div>
      <DataTable
        value={AccountCategoryList}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        currentPageReportTemplate="{first} - {last} of {totalRecords}"
        paginatorTemplate={template2}
        className="reversal__table__main"
        emptyMessage={emptyTableIcon}
      >
        <Column
          field="accountCategoryCode"
          header="Account Category Code"
          className="fieldvalue_container"
          sortable
        ></Column>
        <Column
          field="accountCategoryName"
          header="Account Category Name"
          className="fieldvalue_container"
        ></Column>
        <Column
          field="status"
          header="Status"
          className="fieldvalue_container"
          body={(columnData) => <ToggleButton id={columnData.id} />}
        ></Column>
        <Column
          style={{
            display: "flex",
            justifyContent: "center",
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
