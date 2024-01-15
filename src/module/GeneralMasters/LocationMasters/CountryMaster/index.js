import React, { useState,useEffect,useRef} from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import NavBar from "../../../../components/NavBar";
import { useNavigate } from "react-router-dom";
import SvgDot from "../../../../assets/icons/SvgDot"
import SvgFilters from "../../../../assets/icons/SvgFilters";
import SvgAdd from "../../../../assets/icons/SvgAdd";
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from "primereact/inputtext";
import { ProductService } from './mock';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import SvgUpload from "../../../../assets/icons/SvgUpload";
import SvgMenudots from "../../../../assets/icons/SvgMenudots";
import { TieredMenu } from 'primereact/tieredmenu';
import { Dialog } from 'primereact/dialog';
import InputField from "../../../../components/InputField";      
import ToggleButton from "../../../../components/ToggleButton";
import SvgTable from "../../../../assets/icons/SvgTable";
import SvgEyeIcon from "../../../../assets/icons/SvgEyeIcon";
import SvgEditicon from "../../../../assets/icons/SvgEdit";
import { useDispatch, useSelector } from "react-redux";
import { getCountryListByIdMiddleware } from "./store/countryMiddleware";

const Country = () => {
  const menu = useRef(null);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [visibleview, setVisibleview] = useState(false);
  

  const { countryTableList, loading } = useSelector(
    ({ countryReducers }) => {
      return {
        loading: countryReducers?.loading,
        countryTableList: countryReducers?.countryTableList,
      };
    }
  );

  const menuitems=[
    {label:"Edit",command: () => setVisible(true)},
    {label:"View",command: () => setVisibleview(true)},
    {label:"Add/Edit Account", command: () => navigate("/master/finance/bank/accountdataview")}
  ]

  
 

    const handleEdit = (rowData) => {
      dispatch(getCountryListByIdMiddleware(rowData));
      navigate(`/master/generals/location/country/edit`)
    }

    const handleadd =(id)=>{
      navigate(`/master/generals/location/country/add`)
    }

    const handleView =(rowData)=>{
      dispatch(getCountryListByIdMiddleware(rowData));
      navigate(`/master/generals/location/country/view`)
    }
    const isEmpty = countryTableList.length === 0;

    const emptyTableIcon = (
      <div>
      <div className="empty-table-icon">
        <SvgTable/>
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
                    <Dropdown value={options.value} className="pagedropdown_container"options={dropdownOptions} onChange={options.onChange} />
                </React.Fragment>
            );
        },
       
    };



   

    const headerStyle = {
        // width: '10rem',
        // backgroundColor: 'red',
        fontSize: 16,
        fontFamily: 'Inter, sans-serif',
        fontWeight: 500,
        padding: 6,
        color:'#000',
        border: 'none'
    };

  const items = [
    { label: "Location" },
    { label: "Country" },
   
  ];
  const renderToggleButton = () => {
    return (
      <div>
   <ToggleButton/>
      </div>
    );
  };
  
  const home = { label: "Master" };
 
  const navigate = useNavigate();
 
  

  return (
    <div className='overall__country__container'>
         <NavBar/>
<div className="overallfilter_container">
         <div >
            <label className='label_header'>Country</label>
            <BreadCrumb
                model={items}
                home={home}
                className='breadcrumbs_container'
                separatorIcon={<SvgDot color={"#000"} />} />
          </div>
          <div className="filterbutton_container">
           
<Button type="button" label="Upload" className="uploadbutton_container"  icon= {<SvgUpload/> }outlined />

<Button type="button" label="Add" className="addbutton_container"  icon= {<SvgAdd/> }
onClick={handleadd}
/>
            
           
          </div>
          </div>


          <Card 
        //   className="overallcard_container"
          >
            {/* <div className="searchiput_container"> */}
    

<div  className="header_search_container">
    <div class="col-12 md:col-12 lg:col-12">
        {/* <div class="text-center p-3 border-round-sm bg-primary font-bold"> */}
        <span className="p-input-icon-left" style={{width:"100%"}}>
                <i className="pi pi-search" />
                <InputText placeholder="Search By Country Name" className="searchinput_left"/>
            </span>
        </div>
    {/* </div> */}
   
    
    </div>
<div className="subheading_conatiner">Country List</div>

            {/* </div> */}

    <div className="card">
                <DataTable value={countryTableList} tableStyle={{ minWidth: '50rem',color:'#1C2536' }}
                    paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
                    // paginatorTemplate="RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} - {last} of {totalRecords}"
                    paginatorTemplate={template2}
                    scrollable={true}
            scrollHeight="40vh"
            emptyMessage={isEmpty ? emptyTableIcon : null}
                >
                  
                    <Column field="CountryName" header="Country Name" sortable headerStyle={headerStyle} className='fieldvalue_container'></Column>
                    <Column field="ISOCode" header="ISO Code"sortable headerStyle={headerStyle}  className='fieldvalue_container'></Column>
                    <Column field="PhoneCode" header="Phone Code" sortable headerStyle={headerStyle} className='fieldvalue_container'></Column>
                    <Column field="Modifiedby" header="Modified by"  headerStyle={headerStyle}  className='fieldvalue_container'></Column>
                    <Column field="ModifiedOn" header="Modified On" headerStyle={headerStyle}  className='fieldvalue_container'></Column>
                    {/* <Column field="name" header="Phone" headerStyle={headerStyle}  className='fieldvalue_container'></Column> */}
                    <Column body={(rowData) => <ToggleButton id={rowData.id} />} header="Status" headerStyle={headerStyle}  className='fieldvalue_container'></Column>
                    <Column
              body={(rowData) => (
                <div className="action_icons">

                <SvgEyeIcon onClick={() => handleView(rowData)} />
                <SvgEditicon onClick={() => handleEdit(rowData)}/>
                </div>
              )}
              header="Action"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
             
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
              // value={formik.values.EmailID}
              // onChange={formik.handleChange("EmailID")}
            />
    </div>
    <div class="col-12 md:col-6 lg:col-6">
    <InputField
              classNames="field__container"
              label="Bank Name"
              placeholder={"Enter"}
              // value={formik.values.EmailID}
              // onChange={formik.handleChange("EmailID")}
            />
    </div>
    <div class="col-12 md:col-3 lg:col-3">
    <InputField
              classNames="field__container"
              label="Bank Branch"
              placeholder={"Enter"}
              // value={formik.values.EmailID}
              // onChange={formik.handleChange("EmailID")}
            />
    </div>
</div>

<div class="grid">
    <div class="col-12 md:col-6 lg:col-3">
    <InputField
              classNames="field__container"
              label="IFSC Code"
              placeholder={"Enter"}
              // value={formik.values.EmailID}
              // onChange={formik.handleChange("EmailID")}
            />
    </div>
    <div class="col-12 md:col-6 lg:col-3">
    <InputField
              classNames="field__container"
              label="Address Line 1"
              placeholder={"Enter"}
              // value={formik.values.EmailID}
              // onChange={formik.handleChange("EmailID")}
            />
    </div>
    <div class="col-12 md:col-6 lg:col-3">
    <InputField
              classNames="field__container"
              label="Address Line 2"
              placeholder={"Enter"}
              // value={formik.values.EmailID}
              // onChange={formik.handleChange("EmailID")}
            />
    </div>
    <div class="col-12 md:col-6 lg:col-3">
    <InputField
              classNames="field__container"
              label="Address Line 3"
              placeholder={"Enter"}
              // value={formik.values.EmailID}
              // onChange={formik.handleChange("EmailID")}
            />
    </div>
</div>

<div class="grid">
    <div class="col-12 md:col-6 lg:col-3">
    <InputField
              classNames="field__container"
              label="City"
              placeholder={"Enter"}
              // value={formik.values.EmailID}
              // onChange={formik.handleChange("EmailID")}
            />
    </div>
    <div class="col-12 md:col-6 lg:col-3">
    <InputField
              classNames="field__container"
              label="State"
              placeholder={"Enter"}
              // value={formik.values.EmailID}
              // onChange={formik.handleChange("EmailID")}
            />
    </div>
    <div class="col-12 md:col-6 lg:col-3">
    <InputField
              classNames="field__container"
              label="Country"
              placeholder={"Enter"}
              // value={formik.values.EmailID}
              // onChange={formik.handleChange("EmailID")}
            />
    </div>
    <div class="col-12 md:col-6 lg:col-3">
    <InputField
              classNames="field__container"
              label="Phone Number"
              placeholder={"Enter"}
              // value={formik.values.EmailID}
              // onChange={formik.handleChange("EmailID")}
            />
    </div>
</div>

<div class="grid">
    <div class="col-12 md:col-6 lg:col-3">
    <InputField
              classNames="field__container"
              label="Fax"
              placeholder={"Enter"}
              // value={formik.values.EmailID}
              // onChange={formik.handleChange("EmailID")}
            />
    </div>
    <div class="col-12 md:col-6 lg:col-3">
    <InputField
              classNames="field__container"
              label="Email ID"
              placeholder={"Enter"}
              // value={formik.values.EmailID}
              // onChange={formik.handleChange("EmailID")}
            />
    </div>
</div>
<div style={{display:'flex',justifyContent:'flex-end'}}>
  <Button label="Update" className="dialog_updatebutton_view" onClick={() => setVisible(false)}/>
</div>


</Dialog>

<Dialog header="Bank Details" visible={visibleview} style={{ width: '60vw' }} onHide={() => setVisibleview(false)}>
   
<div class="grid">
    <div class="col-12 md:col-3 lg:col-3">
    <InputField
              classNames="field__container"
              label="Bank Code"
              placeholder={"Enter"}
              // value={formik.values.EmailID}
              // onChange={formik.handleChange("EmailID")}
            />
    </div>
    <div class="col-12 md:col-6 lg:col-6">
    <InputField
              classNames="field__container"
              label="Bank Name"
              placeholder={"Enter"}
              // value={formik.values.EmailID}
              // onChange={formik.handleChange("EmailID")}
            />
    </div>
    <div class="col-12 md:col-3 lg:col-3">
    <InputField
              classNames="field__container"
              label="Bank Branch"
              placeholder={"Enter"}
              // value={formik.values.EmailID}
              // onChange={formik.handleChange("EmailID")}
            />
    </div>
</div>

<div class="grid">
    <div class="col-12 md:col-6 lg:col-3">
    <InputField
              classNames="field__container"
              label="IFSC Code"
              placeholder={"Enter"}
              // value={formik.values.EmailID}
              // onChange={formik.handleChange("EmailID")}
            />
    </div>
    <div class="col-12 md:col-6 lg:col-3">
    <InputField
              classNames="field__container"
              label="Address Line 1"
              placeholder={"Enter"}
              // value={formik.values.EmailID}
              // onChange={formik.handleChange("EmailID")}
            />
    </div>
    <div class="col-12 md:col-6 lg:col-3">
    <InputField
              classNames="field__container"
              label="Address Line 2"
              placeholder={"Enter"}
              // value={formik.values.EmailID}
              // onChange={formik.handleChange("EmailID")}
            />
    </div>
    <div class="col-12 md:col-6 lg:col-3">
    <InputField
              classNames="field__container"
              label="Address Line 3"
              placeholder={"Enter"}
              // value={formik.values.EmailID}
              // onChange={formik.handleChange("EmailID")}
            />
    </div>
</div>

<div class="grid">
    <div class="col-12 md:col-6 lg:col-3">
    <InputField
              classNames="field__container"
              label="City"
              placeholder={"Enter"}
              // value={formik.values.EmailID}
              // onChange={formik.handleChange("EmailID")}
            />
    </div>
    <div class="col-12 md:col-6 lg:col-3">
    <InputField
              classNames="field__container"
              label="State"
              placeholder={"Enter"}
              // value={formik.values.EmailID}
              // onChange={formik.handleChange("EmailID")}
            />
    </div>
    <div class="col-12 md:col-6 lg:col-3">
    <InputField
              classNames="field__container"
              label="Country"
              placeholder={"Enter"}
              // value={formik.values.EmailID}
              // onChange={formik.handleChange("EmailID")}
            />
    </div>
    <div class="col-12 md:col-6 lg:col-3">
    <InputField
              classNames="field__container"
              label="Phone Number"
              placeholder={"Enter"}
              // value={formik.values.EmailID}
              // onChange={formik.handleChange("EmailID")}
            />
    </div>
</div>

<div class="grid">
    <div class="col-12 md:col-6 lg:col-3">
    <InputField
              classNames="field__container"
              label="Fax"
              placeholder={"Enter"}
              // value={formik.values.EmailID}
              // onChange={formik.handleChange("EmailID")}
            />
    </div>
    <div class="col-12 md:col-6 lg:col-3">
    <InputField
              classNames="field__container"
              label="Email ID"
              placeholder={"Enter"}
              // value={formik.values.EmailID}
              // onChange={formik.handleChange("EmailID")}
            />
    </div>
</div>



</Dialog>

    </div>
  );
};

export default Country;
