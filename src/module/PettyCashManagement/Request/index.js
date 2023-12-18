import React, { useState } from "react";
import InputField from "../../../components/InputField";
import DropDowns from "../../../components/DropDowns";
import RequestModal from "../RequestModal";
import SuccessIcon from "../../../assets/icons/SuccessIcon";
import SvgDropdown from "../../../assets/icons/SvgDropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Paginator } from "primereact/paginator";
import SvgAdd from "../../../assets/icons/SvgAdd";
import "../index.scss";

const Request = () => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [first, setFirst] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [visible, setVisible] = useState(false);

  const headerCheckbox = () => {
    return (
      <input
        type="checkbox"
        onChange={(e) => selectAllRows(e.target.checked)}
        style={{ transform: "scale(1.8)" }}
      />
    );
  };

  const selectAllRows = (checked) => {
    const selected = checked ? rows.map((row) => row.id) : [];
    setSelectedRows(selected);
  };

  const handleRowSelect = (e) => {
    const selected = e.value.map((row) => row.id);
    setSelectedRows(selected);
  };
  const onPageChange = (event) => {
    setFirst(event.first);
    setRowsPerPage(event.rows);
  };

  const item = [
    { label: "Initiate" },
    { label: "Request" },
    { label: "Disbursement" },
    { label: "Disbursement" },
    { label: "Replenish" },
  ];

  const columns = [
    { field: "checkbox", headerName: "", flex: "1 1 50px" },
    { field: "dropdown", headerName: "Main A/c", flex: "1 1 200px" },
    { field: "remarks", headerName: "Narration", flex: "1 1 200px" },
    { field: "dropdown2", headerName: "Sub A/c ", flex: "1 1 200px" },
    { field: "remarks2", headerName: "Narration", flex: "1 1 200px" },
    { field: "amount", headerName: "Amount", flex: "1 1 100px" },
  ];

  const rows = [
    {
      id: 1,
      checkbox: "",
      dropdown: "",
      remarks: "",
      dropdown2: "",
      remarks2: "",
      amount: "",
    },
    {
      id: 2,
      checkbox: "",
      dropdown: "",
      remarks: "",
      dropdown2: "",
      remarks2: "",
      amount: "",
    },
    {
      id: 3,
      checkbox: "",
      dropdown: "",
      remarks: "",
      dropdown2: "",
      remarks2: "",
      amount: "",
    },
    {
      id: 4,
      checkbox: "",
      dropdown: "",
      remarks: "",
      dropdown2: "",
      remarks2: "",
      amount: "",
    },
  ];

  return (
    <div>
      <div className="grid mt-3">
        <div className="col-12 md:col-2-5 lg-col-2-5 input__view__request">
          <InputField
            classNames="input__filed"
            label="Date "
            placeholder="11/12/2023"
            textColor={"#111927"}
            textSize={"16"}
            textWeight={500}
          />
        </div>

        <div className="col-12 md:col-2-5 lg-col-2-5 input__view__request">
          <DropDowns
            className="input__filed"
            label="Branch Code"
            placeholder="0102"
            textColor={"#111927"}
            textSize={"16"}
            textWeight={500}
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.value)}
            options={item}
            optionLabel="name"
            dropdownIcon={<SvgDropdown color={"#000"} />}
          />
        </div>
        <div className="col-12 md:col-2-5 lg-col-2-5 input__view__request">
          <DropDowns
            className="input__filed"
            label="Department Code"
            placeholder="0123"
            textColor={"#111927"}
            textSize={"16"}
            textWeight={500}
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.value)}
            options={item}
            optionLabel="name"
            dropdownIcon={<SvgDropdown color={"#000"} />}
          />
        </div>
        <div className="col-12 md:col-2-5 lg-col-2-5 input__view__request">
          <InputField
            classNames="input__filed"
            label="Transaction Number"
            placeholder="0120"
            textColor={"#111927"}
            textSize={"16"}
            textWeight={500}
          />
        </div>
        <div className="col-12 md:col-2-5 lg-col-2-5 input__view__request">
          <InputField
            classNames="input__filed"
            label="Request Number"
            placeholder="0120"
            textColor={"#111927"}
            textSize={"16"}
            textWeight={500}
          />
        </div>
      </div>
      <div className="grid mt-3">
        <div className="col-12 md:col-2-5 lg-col-2-5 input__view__request">
          <DropDowns
            className="input__filed"
            label="Transaction Code"
            placeholder="JV"
            textColor={"#111927"}
            textSize={"16"}
            textWeight={400}
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.value)}
            options={item}
            optionLabel="name"
            dropdownIcon={<SvgDropdown color={"#000"} />}
          />
        </div>
        <div className="col-12 md:col-5 lg-col-5 input__view__request">
          <InputField
            classNames="input__filed"
            label="Description"
            placeholder="Description here"
            textColor={"#111927"}
            textSize={"16"}
            textWeight={400}
          />
        </div>
        <div className="col-12 md:col-2-5 lg-col-2-5 input__view__request">
          <DropDowns
            className="input__filed"
            label="Requester"
            placeholder="Requested by Name"
            textColor={"#111927"}
            textSize={"16"}
            textWeight={400}
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.value)}
            options={item}
            optionLabel="name"
            dropdownIcon={<SvgDropdown color={"#000"} />}
          />
        </div>
        </div>
        <div className="grid mt-3">
        <div className="col-12 md:col-2-5 lg-col-2-5 input__view__request">
          <DropDowns
            className="input__filed"
            label="Petty Cash Code"
            placeholder="HO"
            textColor={"#111927"}
            textSize={"16"}
            textWeight={400}
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.value)}
            options={item}
            optionLabel="name"
            dropdownIcon={<SvgDropdown color={"#000"} />}
          />
        </div>
        <div className="col-12 md:col-5 lg-col-5 input__view__request">
          <InputField
            classNames="input__filed"
            label="Description"
            placeholder="Description here"
            textColor={"#111927"}
            textSize={"16"}
            textWeight={400}
          />
        </div>
        </div>
        <div className="grid mt-3">
        <div className="col-12 md:col-2-5 lg-col-2-5 input__view__request">
          <DropDowns
            className="input__filed"
            label="Currency"
            placeholder="HO"
            textColor={"#111927"}
            textSize={"16"}
            textWeight={400}
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.value)}
            options={item}
            optionLabel="name"
            dropdownIcon={<SvgDropdown color={"#000"} />}
          />
        </div>
        <div className="col-12 md:col-5 lg-col-5 input__view__request">
          <InputField
            classNames="input__filed"
            label="Description"
            placeholder="Description here"
            textColor={"#111927"}
            textSize={"16"}
            textWeight={400}
          />
        </div>
        </div>
      <div className="col-12 md:col-12 lg-col-12" style={{ maxWidth: "100%" }}>
        <div className="btn__container">
          <Button
            label="Add"
            icon={<SvgAdd />}
            className="add__btn"
            onClick={() => {
              setVisible(true);
            }}
          />
        </div>
        <div className="card">
          <DataTable
            style={{ overflowY: "auto", maxWidth: "100%" }}
            responsive={true}
            className="table__view"
            value={rows}
            first={first}
            rows={rowsPerPage}
            totalRecords={rows.length}
            selectionMode="multiple"
            selection={selectedRows}
            onSelectionChange={handleRowSelect}
          >
            {columns.map((column, index) => (
              <Column
                key={column.field}
                field={column.field}
                header={
                  column.field === "checkbox"
                    ? headerCheckbox
                    : column.headerName
                }
                bodyStyle={{
                  fontSize: 14,
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
                style={{
                  width: `${100 / columns.length}%`,
                  boxSizing: "border-box",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#000",
                }}
                body={(rowData, rowIndex) => {
                  // Render content based on column.field
                  if (column.field === "checkbox") {
                    return (
                      <input
                        type="checkbox"
                        style={{ transform: "scale(1.8)" }}
                      />
                    );
                  } else if (column.field === "dropdown") {
                    return (
                      <DropDowns
                        value={selectedItem}
                        onChange={(e) =>
                          setSelectedItem(e.value, rowIndex, "dropdown")
                        }
                        options={item}
                        optionLabel="label"
                        dropdownIcon={<SvgDropdown color={"#000"} />}
                      />
                    );
                  } else if (column.field === "remarks") {
                    return "-";
                  } else if (column.field === "dropdown2") {
                    return (
                      <DropDowns
                        value={selectedItem}
                        onChange={(e) =>
                          setSelectedItem(e.value, rowIndex, "dropdown")
                        }
                        options={item}
                        optionLabel="label"
                        dropdownIcon={<SvgDropdown color={"#000"} />}
                      />
                    );
                  } else if (column.field === "remarks2") {
                    return "-";
                  } else if (column.field === "amount") {
                    return "1000";
                  } else {
                    return rowData[column.field];
                  }
                }}
              />
            ))}
          </DataTable>
          <Paginator
            className="paginator__view"
            first={first}
            rows={rowsPerPage}
            totalRecords={rows.length}
            onPageChange={onPageChange}
          />
        </div>
      </div>
      <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
        <InputField
          classNames="input__filed"
          label="Total"
          placeholder="0.00"
          textColor={"#111927"}
          textSize={"16"}
          textWeight={500}
        />
      </div>
      <div className="col-12 md:col-12 lg-col-12 button__view__corrections">
        <div>
          <Button label="Delete Section" className="correction__print__btn" />
          <Button
            label="Submit"
            className="correction__btn"
            onClick={() => setVisiblePopup(true)}
          />
        </div>
      </div>

      <div className="col-12">
        {visiblePopup && (
          <div className="grid custom-modal-overlay_create">
            <div className="col-10 md:col-2 lg:col-2 custommodal_create">
              <div>Approved</div>
              <div style={{ marginLeft: 15 }}>
                <SuccessIcon />
              </div>
            </div>
          </div>
        )}
      </div>
      <RequestModal visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default Request;
