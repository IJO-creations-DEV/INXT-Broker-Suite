import React,{useState,useEffect} from 'react'
import { Card } from "primereact/card";
import SvgAdd from '../../../../../../assets/icons/SvgAdd';
import { Button } from 'primereact/button';
import './index.scss'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Productdata from '../../../ComapanyMaster/mock'
import SvgTable from '../../../../../../assets/icons/SvgTable';
import { Dropdown } from 'primereact/dropdown';
import { Dialog } from 'primereact/dialog';
import InputField from '../../../../../../components/InputField';

const DepartMentList = () => {
  const [visible, setVisible] = useState(false);
  
  const isEmpty = Productdata.length === 0;

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
          <Dropdown value={options.value} className="pagedropdown_container" options={dropdownOptions} onChange={options.onChange} />
        </React.Fragment>
      );
    },

  };


  return (
    <div className='overall_list'>
      <div className='cardlist_container'>
        <div className='subhead_list'>
        <label className='head_lable'>DepartMent List</label>
     
        <Button label="Add" icon={<SvgAdd/>} onClick={() => setVisible(true)}/>
          
        </div>
       
        <DataTable value={Productdata} tableStyle={{ minWidth: '50rem', marginTop:'1rem' }}
        paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
        // paginatorTemplate="RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} - {last} of {totalRecords}"
        paginatorTemplate={template2} scrollable={true}
        scrollHeight="40vh"
        emptyMessage={isEmpty ? emptyTableIcon : null}
        
        >
                <Column field="VoucherNumber" header="Department Code"></Column>
                <Column field="name" header="Department Name"></Column>
                <Column field="category" header="Status"></Column>
                <Column field="quantity" header="Action"></Column>
            </DataTable>
        
      </div>
      <Dialog header="Add Department" visible={visible} style={{ width: '40vw' }} onHide={() => setVisible(false)}>
              <div class='grid'>
              <div class="sm-col-12 col-12 md:col-6 lg-col-6">
            <div>
            <InputField
              classNames="field__container"
              label="Department Code"
              placeholder={"Enter"}
            //   value={formik.values.CurrencyDescription}
            // value={
            //     formik.values.Websitelink
                
            //   }
            //   onChange={formik.handleChange("Websitelink")}
              
            />
             {/* { formik.touched.CurrencyCode && formik.errors.CurrencyCode && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.CurrencyCode}
              </div>
            )} */}
            </div>
          </div>
          <div class="sm-col-12 col-12 md:col-6 lg-col-6">
            <div>
            <InputField
              classNames="field__container"
              label="Department Name"
              placeholder={"Enter"}
            //   value={formik.values.CurrencyDescription}
            // value={
            //     formik.values.Websitelink
                
            //   }
            //   onChange={formik.handleChange("Websitelink")}
              
            />
             {/* { formik.touched.CurrencyCode && formik.errors.CurrencyCode && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.CurrencyCode}
              </div>
            )} */}
            </div>
          </div>
                </div>  
                <div class='grid'>
              <div class="sm-col-12 col-12 md:col-12 lg-col-12">
            <div>
            <InputField
              classNames="field__container"
              label="Description"
              placeholder={"Enter"}
            //   value={formik.values.CurrencyDescription}
            // value={
            //     formik.values.Websitelink
                
            //   }
            //   onChange={formik.handleChange("Websitelink")}
              
            />
             {/* { formik.touched.CurrencyCode && formik.errors.CurrencyCode && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.CurrencyCode}
              </div>
            )} */}
            </div>
          </div>

          <div className="nexttextlable_container">
               
                <Button className="submittextlabel_button p-2" label="Save"  
                // disabled={!formik.isValid}
                // onClick={()=>{formik.handleSubmit();}} 
                />
            </div>
         
                </div> 
            </Dialog>
    </div>
  )
}

export default DepartMentList