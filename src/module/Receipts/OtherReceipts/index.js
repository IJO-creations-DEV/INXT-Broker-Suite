import React, { useState } from "react";
import "../PolicyReceipts/index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import { Card } from "primereact/card";
import { TabView, TabPanel } from "primereact/tabview";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Paginator } from "primereact/paginator";
import { InputText } from "primereact/inputtext";
import { data } from "../OtherReceipts/mock";
import SvgArrow from "../../../assets/icons/SvgArrow";
import SvgAdd from "../../../assets/icons/SvgAdd";
import SvgFilters from "../../../assets/icons/SvgFilters";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(5);
  const [globalFilter, setGlobalFilter] = useState("");

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const handleEditClick = (id) => {
    console.log(`Edit clicked for row with ID ${id}`);
    navigate("/otherreceiptsview");
  };
  return (
    <div className="overall_receipts_other_container">
      <Card>
        <DataTable
          value={data}
          resizableColumns
          columnResizeMode="fit"
          globalFilter={globalFilter}
        >
          <Column field="branchCode" header="Branch Code" />
          <Column field="departmentCode" header="Department Code" />
          <Column field="receiptNo" header="Receipt No" />
          <Column field="receiptDate" header="Receipt Date" />
          <Column field="paymentType" header="Payment Type" />
          <Column field="amount" header="Amount" />
          <Column
            header="Action"
            body={(params) => (
              <SvgArrow onClick={() => handleEditClick(params.row.id)} />
            )}
          />
        </DataTable>
        <Paginator
          style={{ alignItems: "flex-end", justifyContent: "flex-end" }}
          first={first}
          rows={rows}
          totalRecords={data.length}
          onPageChange={onPageChange}
        />
      </Card>
    </div>
  );
};

export default Index;
