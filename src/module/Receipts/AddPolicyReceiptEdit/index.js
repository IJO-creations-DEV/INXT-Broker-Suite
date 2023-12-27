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
import { Dialog } from 'primereact/dialog';

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
  const items = [{ label: "Receipts" }, { label: "Add Receipts" }];

  const home = { label: "Accounts " }
  const handleEditClick =()=>{
    navigate("/")

  }
  const renderViewButton = (rowData) => {
    return (
        <div className="center-content">
      <Button
        icon={<SvgEdits />}
        className="eye__btn"
        onClick={() => handleView(rowData)}
      />
      </div>
    );
  };
  const handleView = (rowData) => {
    console.log("View clicked:", rowData);
 setVisiblePopup(true)
    // navigate("/accounts/pettycash/PettyCashCodeDetails")
  };
  const handleClick =()=>{
    navigate("/paymentdetails")
  }
 
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
      <SvgBack/>
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
          tableStyle={{
            minWidth: "50rem",
            color: "#1C2536",
            maxHeight: "50vh",
            overflowy: "auto",
          
            
          }}
          scrollable={true}
          scrollHeight="40vh"
          selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          currentPageReportTemplate="{first} - {last} of {totalRecords}"
          paginatorTemplate={template2}
          className="datatable_container"

          
        >
              <Column selectionMode="multiple" exportable={false}></Column>
          <Column
            field="policies"
            header="Policies"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="netPremium"
            header="Net Premium"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="paid"
            header="Paid"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
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
          <Button label="Next" className="print" onClick={handleClick} />
        </div>
     
      </div>
      <div className="col-12">
      <Dialog header="Header" visible={visiblePopup} style={{ width: '50vw' }} onHide={() => setVisiblePopup(false)}>
      <div className="grid custom-modal-overlay">
                        <div className='custom-modal'>
                            <div className="col-12">
                                <div className='policy__detail__text'>Policy details</div>
                            </div>
                            <div className='popup__input__view'>
                                <div className="col-4">
                                    Receipt Item:
                                </div>
                                <div className="col-7">
                                    <InputField
                                        classNames='input__filed__addPolicy'
                                        textColor={'#111927'}
                                        textSize={'16'}
                                        textWeight={500}
                                    />
                                </div>
                            </div>
                            <div className='popup__input__view'>
                                <div className="col-4">
                                    Net Premium :
                                </div>
                                <div className="col-7">
                                    <InputField
                                        classNames='input__filed__addPolicy'
                                        textColor={'#111927'}
                                        textSize={'16'}
                                        textWeight={500}
                                    />
                                </div>
                            </div>
                            <div className='popup__input__view'>
                                <div className="col-4">
                                    Paid :
                                </div>
                                <div className="col-7">
                                    <InputField
                                        classNames='input__filed__addPolicy'
                                        textColor={'#111927'}
                                        textSize={'16'}
                                        textWeight={500}
                                    />
                                </div>
                            </div>
                            <div className='popup__input__view'>
                                <div className="col-4">
                                    Balance :
                                </div>
                                <div className="col-7">
                                    <InputField
                                        classNames='input__filed__addPolicy'
                                        textColor={'#111927'}
                                        textSize={'16'}
                                        textWeight={500}
                                    />
                                </div>
                            </div>
                            <div className='popup__input__view'>
                                <div className="col-4">
                                    DST :
                                </div>
                                <div className="col-7">
                                    <InputField
                                        classNames='input__filed__addPolicy'
                                        textColor={'#111927'}
                                        textSize={'16'}
                                        textWeight={500}
                                    />
                                </div>
                            </div>
                            <div className='popup__input__view'>
                                <div className="col-4">
                                    LGT :
                                </div>
                                <div className="col-7">
                                    <InputField
                                        classNames='input__filed__addPolicy'
                                        textColor={'#111927'}
                                        textSize={'16'}
                                        textWeight={500}
                                    />
                                </div>
                            </div>
                            <div className='popup__input__view'>
                                <div className="col-4">
                                    Others :
                                </div>
                                <div className="col-7">
                                    <InputField
                                        classNames='input__filed__addPolicy'
                                        textColor={'#111927'}
                                        textSize={'16'}
                                        textWeight={500}
                                    />
                                </div>
                            </div>
                            <div className='popup__input__view'>
                                <div className="col-4">
                                    VAT :
                                </div>
                                <div className="col-7">
                                    <InputField
                                        classNames='input__filed__addPolicy'
                                        textColor={'#111927'}
                                        textSize={'16'}
                                        textWeight={500}
                                    />
                                </div>
                            </div>
                            <div className='popup__input__view'>
                                <div className="col-4">
                                    EWT :
                                </div>
                                <div className="col-7">
                                    <InputField
                                        classNames='input__filed__addPolicy'
                                        textColor={'#111927'}
                                        textSize={'16'}
                                        textWeight={500}
                                    />
                                </div>
                            </div>
                            <div className="col-12 save__btn__view">
                                <Button
                                    label='Save'
                                    className='save__button'
                                    onClick={() => setVisiblePopup(false)}
                                />
                            </div>
                        </div>

                    </div>
                
            </Dialog>
                {/* {visiblePopup && (
                    <div className="grid custom-modal-overlay">
                        <div className='custom-modal'>
                            <div className="col-12">
                                <div className='policy__detail__text'>Policy details</div>
                            </div>
                            <div className='popup__input__view'>
                                <div className="col-4">
                                    Receipt Item:
                                </div>
                                <div className="col-7">
                                    <InputField
                                        classNames='input__filed__addPolicy'
                                        textColor={'#111927'}
                                        textSize={'16'}
                                        textWeight={500}
                                    />
                                </div>
                            </div>
                            <div className='popup__input__view'>
                                <div className="col-4">
                                    Net Premium :
                                </div>
                                <div className="col-7">
                                    <InputField
                                        classNames='input__filed__addPolicy'
                                        textColor={'#111927'}
                                        textSize={'16'}
                                        textWeight={500}
                                    />
                                </div>
                            </div>
                            <div className='popup__input__view'>
                                <div className="col-4">
                                    Paid :
                                </div>
                                <div className="col-7">
                                    <InputField
                                        classNames='input__filed__addPolicy'
                                        textColor={'#111927'}
                                        textSize={'16'}
                                        textWeight={500}
                                    />
                                </div>
                            </div>
                            <div className='popup__input__view'>
                                <div className="col-4">
                                    Balance :
                                </div>
                                <div className="col-7">
                                    <InputField
                                        classNames='input__filed__addPolicy'
                                        textColor={'#111927'}
                                        textSize={'16'}
                                        textWeight={500}
                                    />
                                </div>
                            </div>
                            <div className='popup__input__view'>
                                <div className="col-4">
                                    DST :
                                </div>
                                <div className="col-7">
                                    <InputField
                                        classNames='input__filed__addPolicy'
                                        textColor={'#111927'}
                                        textSize={'16'}
                                        textWeight={500}
                                    />
                                </div>
                            </div>
                            <div className='popup__input__view'>
                                <div className="col-4">
                                    LGT :
                                </div>
                                <div className="col-7">
                                    <InputField
                                        classNames='input__filed__addPolicy'
                                        textColor={'#111927'}
                                        textSize={'16'}
                                        textWeight={500}
                                    />
                                </div>
                            </div>
                            <div className='popup__input__view'>
                                <div className="col-4">
                                    Others :
                                </div>
                                <div className="col-7">
                                    <InputField
                                        classNames='input__filed__addPolicy'
                                        textColor={'#111927'}
                                        textSize={'16'}
                                        textWeight={500}
                                    />
                                </div>
                            </div>
                            <div className='popup__input__view'>
                                <div className="col-4">
                                    VAT :
                                </div>
                                <div className="col-7">
                                    <InputField
                                        classNames='input__filed__addPolicy'
                                        textColor={'#111927'}
                                        textSize={'16'}
                                        textWeight={500}
                                    />
                                </div>
                            </div>
                            <div className='popup__input__view'>
                                <div className="col-4">
                                    EWT :
                                </div>
                                <div className="col-7">
                                    <InputField
                                        classNames='input__filed__addPolicy'
                                        textColor={'#111927'}
                                        textSize={'16'}
                                        textWeight={500}
                                    />
                                </div>
                            </div>
                            <div className="col-12 save__btn__view">
                                <Button
                                    label='Save'
                                    className='save__button'
                                    onClick={() => setVisiblePopup(false)}
                                />
                            </div>
                        </div>

                    </div>
                )} */}
            </div>



  
    </div>
  );
}

export default PolicyReceipts;
