import React, { useState, useEffect, useRef } from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import NavBar from "../../../components/NavBar";
import { useNavigate } from "react-router-dom";
import SvgDot from "../../../assets/icons/SvgDot"
import SvgFilters from "../../../assets/icons/SvgFilters";
import SvgAdd from "../../../assets/icons/SvgAdd";
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from "primereact/inputtext";
import { ProductService } from './mock';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import SvgUpload from "../../../assets/icons/SvgUpload";
import SvgMenudots from "../../../assets/icons/SvgMenudots";
import { TieredMenu } from 'primereact/tieredmenu';
import { Dialog } from 'primereact/dialog';
import InputField from "../../../components/InputField";
import ToggleButton from "../../../components/ToggleButton";
import SvgTable from "../../../assets/icons/SvgTable";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { patchBankDetailEdit } from "./store/bankMasterMiddleware";

const BankMaster = () => {
  const menu = useRef(null);
  const [visible, setVisible] = useState(false);
  const [visibleview, setVisibleview] = useState(false);
  const [currentDialog, setDialog] = useState({});
  const dispatch = useDispatch()
  // const menuitems = [
  //   { label: "Edit", command: () => setVisible(true) },
  //   { label: "View", command: () => setVisibleview(true) },
  //   { label: "Add/Edit Account", command: () => navigate("/master/finance/bank/accountdataview") }
  // ]
  const menuitems = [
    { label: "Edit", command: (rowData) => handleEdit(rowData) },
    { label: "View", command: (rowData) => handleView(rowData) },
    { label: "Add/Edit Account", command: () => navigate("/master/finance/bank/accountdataview") }
  ];

  const handleEdit = (rowData) => {
    setVisible(true);
    setDialog(rowData)
    // console.log(currentDialog, "current detail")
    formik.setFieldValue("bankCode", rowData?.bankCode)
    formik.setFieldValue("bankName", rowData?.bankName)
    formik.setFieldValue("bankBranch", rowData?.bankBranch)
    formik.setFieldValue("ifscCode", rowData?.ifscCode)
    formik.setFieldValue("addressLine1", 'Sudharshan Building')
    formik.setFieldValue("addressLine2", '2nd floor,chamiers Road')
    formik.setFieldValue("addressLine3", 'Nanthanam')
    formik.setFieldValue("city", 'Chennai')
    formik.setFieldValue("state", 'Tamil Nadu')
    formik.setFieldValue("country", 'India')
    formik.setFieldValue("mobile", rowData?.mobile)
    formik.setFieldValue("fax", rowData?.mobile)
    formik.setFieldValue("email", rowData?.email)
    // or any other logic you want to perform
    // Use the rowData as needed
    console.log("Edit clicked for row:", rowData);
  };

  const handleView = (rowData) => {
    setVisibleview(true);
    setDialog(rowData) // or any other logic you want to perform
    // Use the rowData as needed
    console.log("View clicked for row:", rowData);
  };



  const [products, setProducts] = useState([]);
  const { bankList } = useSelector(({ bankMasterReducer }) => {
    return {
      bankList: bankMasterReducer?.BankList
    };
  });
  useEffect(() => {

  }, [bankList])
  // useEffect(() => {
  //   console.log(currentDialog, "ads")
  //   if(Object.keys(currentDialog).length>0){
  //   }
  //   // formik.setFieldValue()

  // }, [currentDialog])

  const initialState = {
    bankCode: '',
    bankName: '',
    bankBranch: '',
    ifscCode: '',
    addressLine1: '',
    addressLine2: '',
    addressLine3: '',
    city: '',
    state: '',
    country: '',
    mobile: '',
    fax: '',
    email: ''
  }
  const validate = (values) => {
    console.log(values, "ggg");
    const errors = {};
    console.log(values, errors, "values");
    if (!values.dropdown) {
      errors.dropdown = "select any one";
    }
    if (!values.client) {
      errors.client = "enter here";
    }
    if (!values.todayDate) {
      errors.todayDate = "select date";
    }
    if (!values.from) {
      errors.from = "select date";
    }
    if (!values.to) {
      errors.to = "select date";
    }
    if (!values.textArea) {
      errors.textArea = "Write note here";
    }
    return errors;
  };

  const handleSubmit = () => {
    const formErrors = validate(formik.values);
    // setErrors(formErrors);
    console.log(formErrors, "hfgdh");
  };

  const formik = useFormik({
    initialValues: initialState,
    validate,
    onSubmit: handleSubmit,
  });
  // console.log(formik.values, "asdd")

  const handleUpdate = () => {
    dispatch(patchBankDetailEdit(formik.values))
    setVisible(false)
    console.log(formik.values, "dddd")
    // formik.values
  }
  // useEffect(() => {
  //   ProductService.getProductsMini().then(data => setProducts(data));
  // }, []);

  const isEmpty = products.length === 0;

  const emptyTableIcon = (
    <div>
      <div className="empty-table-icon">
        <SvgTable />
      </div>
      <div className="no__data__found">No data entered</div>
    </div>
  );
  const template2 = {
    layout: 'RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink',
    RowsPerPageDropdown: (options) => {
      const dropdownOptions = [
        { label: 5, value: 5 },
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 120, value: 120 }
      ];

      return (
        <React.Fragment >
          <span className="mx-1" style={{ color: 'var(--text-color)', userSelect: 'none' }} >
            Row count :{' '}
          </span>
          <Dropdown value={options.value} className="pagedropdown_container" options={dropdownOptions} onChange={options.onChange} />
        </React.Fragment>
      );
    },

  };



  const handleadd = () => {
    navigate('/master/finance/bank/addbankmaster')
  }

  const headerStyle = {
    // width: '10rem',
    // backgroundColor: 'red',
    fontSize: 16,
    fontFamily: 'Inter var',
    fontWeight: 500,
    padding: "10px 6px",
    color: '#000',
    border: 'none'
  };

  const items = [
    { label: "Bank" },

  ];
  const renderToggleButton = (state) => {
    return (
      <div>
        <ToggleButton />
      </div>
    );
  };

  const home = { label: "Master" };

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

  const handlePolicy = () => {
    navigate('/createvoucher')
  }
  const handleArrowClick = () => {
    navigate('/policyreceiptsview')
  }
  const handleEditClick = () => {
    navigate("/otherreceiptsview");
  };

  return (
    <div className='overall__bankmaster__container'>
      <NavBar />
      <div className="overallfilter_container">
        <div >
          <label className='label_header'>Bank Master</label>
          <BreadCrumb
            model={items}
            home={home}
            className='breadcrumbs_container'
            separatorIcon={<SvgDot color={"#000"} />} />
        </div>
        <div className="filterbutton_container">

          <Button type="button" label="Upload" className="uploadbutton_container" icon={<SvgUpload />} outlined />

          <Button type="button" label="Add" className="addbutton_container" icon={<SvgAdd />}
            onClick={handleadd}
          />


        </div>
      </div>


      <Card
      //   className="overallcard_container"
      >
        {/* <div className="searchiput_container"> */}


        <div className="header_search_container">
          <div class="col-12 md:col-12 lg:col-12">
            {/* <div class="text-center p-3 border-round-sm bg-primary font-bold"> */}
            <span className="p-input-icon-left" style={{ width: "100%" }}>
              <i className="pi pi-search" />
              <InputText placeholder="Search customers" className="searchinput_left" />
            </span>
          </div>
          {/* </div> */}


        </div>


        {/* </div> */}

        <div className="card">
          <DataTable value={bankList} tableStyle={{ minWidth: '50rem', color: '#1C2536' }}
            paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
            // paginatorTemplate="RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="{first} - {last} of {totalRecords}"
            paginatorTemplate={template2}
            scrollable={true}
            scrollHeight="40vh"
            emptyMessage={isEmpty ? emptyTableIcon : null}
          >

            <Column field="bankCode" header="Bank Code" sortable headerStyle={headerStyle} className='fieldvalue_container'></Column>
            <Column field="bankName" header="Bank Name" sortable headerStyle={headerStyle} className='fieldvalue_container'></Column>
            <Column field="bankBranch" header="Bank Branch" sortable headerStyle={headerStyle} className='fieldvalue_container'></Column>
            <Column field="ifscCode" header="IFSC Code" headerStyle={headerStyle} className='fieldvalue_container'></Column>
            <Column field="email" header="Email" headerStyle={headerStyle} className='fieldvalue_container'></Column>
            <Column field="mobile" header="Phone" headerStyle={headerStyle} className='fieldvalue_container'></Column>
            <Column body={renderToggleButton} header="Status" headerStyle={headerStyle} className='fieldvalue_container'></Column>

            <Column body={(columnData) => (
              //         <div className="card flex justify-content-center">

              //  <TieredMenu model={menuitems} popup ref={menu}  />
              //   <SvgMenudots onClick={(e) => menu.current.toggle(e)} />


              //   </div>
              <div className="card flex justify-content-center">
                <TieredMenu model={menuitems.map(item => ({ ...item, command: () => item.command(columnData) }))} popup ref={menu} breakpoint="767px" />
                <Button icon={<SvgMenudots />} onClick={(e) => menu.current.toggle(e)} className="menubutton_popup" />
              </div>


            )}
              header="Action" headerStyle={headerStyle} className='fieldvalue_container'></Column>

          </DataTable>


        </div>

      </Card>


      <Dialog header="Bank Details" visible={visible} style={{ width: '60vw' }} onHide={() => setVisible(false)}>

        <div class="grid">
          <div class="col-12 md:col-3 lg:col-3">
            <InputField
              classNames="field__container"
              label="Bank Code"
              placeholder={"Enter"}
              value={formik.values.bankCode}
              onChange={formik.handleChange("bankCode")}
            />
          </div>
          <div class="col-12 md:col-6 lg:col-6">
            <InputField
              classNames="field__container"
              label="Bank Name"
              placeholder={"Enter"}
              value={formik.values.bankName}
              onChange={formik.handleChange('bankName')}
            />
          </div>
          <div class="col-12 md:col-3 lg:col-3">
            <InputField
              classNames="field__container"
              label="Bank Branch"
              placeholder={"Enter"}
              value={formik.values.bankBranch}
              onChange={formik.handleChange("bankBranch")}
            />
          </div>
        </div>

        <div class="grid">
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="IFSC Code"
              placeholder={"Enter"}
              value={formik.values.ifscCode}
              onChange={formik.handleChange("ifscCode")}
            />
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="Address Line 1"
              placeholder={"Enter"}
              value={formik.values.addressLine1}
              onChange={formik.handleChange("addressLine1")}
            />
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="Address Line 2"
              placeholder={"Enter"}
              value={formik.values.addressLine2}
              onChange={formik.handleChange("addressLine2")}
            />
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="Address Line 3"
              placeholder={"Enter"}
              value={formik.values.addressLine3}
              onChange={formik.handleChange("addressLine3")}
            />
          </div>
        </div>

        <div class="grid">
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="City"
              placeholder={"Enter"}
              value={formik.values.city}
              onChange={formik.handleChange("city")}
            />
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="State"
              placeholder={"Enter"}
              value={formik.values.state}
              onChange={formik.handleChange("state")}
            />
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="Country"
              placeholder={"Enter"}
              value={formik.values.country}
              onChange={formik.handleChange("country")}
            />
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="Phone Number"
              placeholder={"Enter"}
              value={formik.values.mobile}
              onChange={formik.handleChange("mobile")}
            />
          </div>
        </div>

        <div class="grid">
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="Fax"
              placeholder={"Enter"}
              value={formik.values.fax}
              onChange={formik.handleChange("fax")}
            />
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="Email ID"
              placeholder={"Enter"}
              value={formik.values.email}
              onChange={formik.handleChange("email")}
            />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button label="Update" className="dialog_updatebutton_view" onClick={handleUpdate} />
        </div>


      </Dialog>

      <Dialog header="Bank Details" visible={visibleview} style={{ width: '60vw' }} onHide={() => setVisibleview(false)}>

        <div class="grid">
          <div class="col-12 md:col-3 lg:col-3">
            <InputField
              classNames="field__container"
              label="Bank Code"
              placeholder={"Enter"}
              value={formik.values.bankCode}
              onChange={formik.handleChange("bankCode")}
            />
          </div>
          <div class="col-12 md:col-6 lg:col-6">
            <InputField
              classNames="field__container"
              label="Bank Name"
              placeholder={"Enter"}
              value={formik.values.bankName}
              onChange={formik.handleChange('bankName')}
            />
          </div>
          <div class="col-12 md:col-3 lg:col-3">
            <InputField
              classNames="field__container"
              label="Bank Branch"
              placeholder={"Enter"}
              value={formik.values.bankBranch}
              onChange={formik.handleChange("bankBranch")}
            />
          </div>
        </div>

        <div class="grid">
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="IFSC Code"
              placeholder={"Enter"}
              value={formik.values.ifscCode}
              onChange={formik.handleChange("ifscCode")}
            />
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="Address Line 1"
              placeholder={"Enter"}
              value={formik.values.addressLine1}
              onChange={formik.handleChange("addressLine1")}
            />
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="Address Line 2"
              placeholder={"Enter"}
              value={formik.values.addressLine2}
              onChange={formik.handleChange("addressLine2")}
            />
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="Address Line 3"
              placeholder={"Enter"}
              value={formik.values.addressLine3}
              onChange={formik.handleChange("addressLine3")}
            />
          </div>
        </div>

        <div class="grid">
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="City"
              placeholder={"Enter"}
              value={formik.values.city}
              onChange={formik.handleChange("city")}
            />
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="State"
              placeholder={"Enter"}
              value={formik.values.state}
              onChange={formik.handleChange("state")}
            />
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="Country"
              placeholder={"Enter"}
              value={formik.values.country}
              onChange={formik.handleChange("country")}
            />
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="Phone Number"
              placeholder={"Enter"}
              value={formik.values.mobile}
              onChange={formik.handleChange("mobile")}
            />
          </div>
        </div>

        <div class="grid">
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="Fax"
              placeholder={"Enter"}
              value={formik.values.fax}
              onChange={formik.handleChange("fax")}
            />
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="Email ID"
              placeholder={"Enter"}
              value={formik.values.email}
              onChange={formik.handleChange("email")}
            />
          </div>
        </div>



      </Dialog>

    </div>
  );
};

export default BankMaster;
