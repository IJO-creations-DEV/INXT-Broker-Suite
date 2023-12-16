import React, { useState } from "react";
import "../PolicyReceipts/index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import { Card } from "primereact/card";
import { TabView, TabPanel } from "primereact/tabview";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Paginator } from 'primereact/paginator';
import { InputText } from 'primereact/inputtext';
import { data } from "../PolicyReceipts/mock";
import {data1} from "../PolicyReceipts/mock1"
import SvgArrow from "../../../assets/icons/SvgArrow";
import SvgAdd from '../../../assets/icons/SvgAdd';
import SvgFilters from '../../../assets/icons/SvgFilters';
import { useNavigate } from "react-router-dom";
import SvgDot from "../../../assets/icons/SvgDot"
import OtherReceipts from "../../Receipts/OtherReceipts"

const Index = () => {
  const items = [
    
    { label: "Accounts " },
    { label: "Receipts" },
  ];
  const home = { label: "Dashboard" };
 
  const navigate = useNavigate();
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(5);
  const [globalFilter, setGlobalFilter] = useState('');

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const onGlobalFilterChange = (event) => {
    setGlobalFilter(event.target.value);
  };
 
  const handlePolicy =()=>{
    navigate('/addpolicyreceipt1')
  }
  const handleArrowClick=()=>{
    navigate('/policyreceiptsview')
  }
  const handleEditClick = () => {
    navigate("/otherreceiptsview");
  };
  return (
    <div className="overall_receipts_container">
      <div className="receipts_title">Receipts</div>
      <div className="icon">
        <div className="svgicondiv">
          <SvgFilters className="filter" />
        </div>
        <div className="add"  onClick={() => handlePolicy()}>
          <SvgAdd className="addicon" />
          <p className="addtext">Add</p>
        </div>
      </div>
      <div className="bread_crumb">
     
        
      <BreadCrumb
        model={items}
        home={home}
        className='breadcrumbs_container'
        separatorIcon={<SvgDot color={"#000"} />} />
         
         </div>
     <div class="grid">
      <Card>
        <TabView>
          <TabPanel header="Policy Receipt" class="col-12 md:col-6 lg:col-12">
            <div className="search_style">
              <span className="p-input-icon-left">
                <i className="pi pi-search"/>
                <InputText
                  placeholder="Search customers"
                  value={globalFilter}
                  onChange={onGlobalFilterChange}
                />
              </span>
            </div>
            <DataTable
              value={data}
              resizableColumns
              columnResizeMode="fit"
              globalFilter={globalFilter}
              paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
              paginatorTemplate=" FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
              currentPageReportTemplate="{first} - {last} of {totalRecords}"
              style={{justifyContent:'flex-end',alignItems:'flex-end'}}
            >
              <Column field="customerName" header="Customer Name" />
              <Column field="branchCode" header="Branch Code" />
              <Column field="departmentCode" header="Department Code" />
              <Column field="receiptNo" header="Receipt No" />
              <Column field="receiptDate" header="Receipt Date" />
              <Column field="paymentType" header="Payment Type" />
              <Column field="amount" header="Amount" />
              <Column
                header="Action"
                body={() => (
                  <SvgArrow onClick={() => handleArrowClick()}/>
                )}
              />
            </DataTable>
         
          </TabPanel>
        
               <TabPanel header="Other Receipt">
            <div className="search_style">
              <span className="p-input-icon-left">
                <i className="pi pi-search"/>
                <InputText
                  placeholder="Search customers"
                  value={globalFilter}
                  onChange={onGlobalFilterChange}
                />
              </span>
            </div>
            <DataTable
          value={data1}
          resizableColumns
          columnResizeMode="fit"
          globalFilter={globalFilter}
          style={{width:'1058px',margin:0}}

          paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
          paginatorTemplate=" FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          currentPageReportTemplate="{first} - {last} of {totalRecords}"

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
              <SvgArrow onClick={() => handleEditClick()} />
            )}
          />
           {/* <Paginator
             
            /> */}
        </DataTable>
           
          </TabPanel>
        </TabView>
      </Card>
      </div>
    </div>
  );
};

export default Index;
