import React from 'react';
import './index.scss';
import { BreadCrumb } from 'primereact/breadcrumb';
import InputField from '../../../components/InputField';
import SubmitButton from '../../../components/SubmitButton'


function Createvoucher() {
  const items = [
    { label: 'Dashboard' },
    { label: 'Accounts ' },
    { label: 'Payment Voucher' },

  ];

  return (
    <div className='overall__payment__container'>
      <label className='label_header'>Payment Voucher</label>
      <BreadCrumb
        model={items}
        className='breadcrumbs_container'
        separator={<i className="pi pi-circle-fill" style={{ fontSize: '0.5rem' }}></i>}
      />


     

<div class="grid">
    <div class="sm-col-12 col-12 md:col-3 lg-col-2-5">
        <div >
        <InputField classNames="field__container" label="Branch" />
        </div>
    </div>
    <div class="sm-col-12  md:col-3 lg-col-2-5">
        <div >
        <InputField classNames="field__container"
            label="Department"  />
        </div>
    </div>
    <div class="sm-col-12  md:col-3 lg-col-2-5">
        <div >
        <InputField classNames="field__container"
            label="Document Date"  />
        </div>
    </div>
    <div class="col-12 md:col-3 lg-col-2-5">
        <div >
        <InputField classNames="field__container"
            label="Document Number"  />
        </div>
    </div>
    <div class="col-12 md:col-3 lg-col-2-5">
        <div >
        <InputField classNames="field__container" 
            label="Criteria" />
        </div>
    </div>

    <div class="col-12 md:col-3 lg-col-2-5">
        <div >
        <InputField classNames="field__container" 
            label="Criteria" />
        </div>
    </div>
    <div class="col-12 md:col-3 lg-col-2-5">
        <div >
        <InputField classNames="field__container" 
            label="Criteria" />
        </div>
    </div>
    <div class="col-12 md:col-3 lg-col-2-5">
        <div >
        <InputField classNames="field__container" 
            label="Criteria" />
        </div>
    </div>
    <div class="col-12 md:col-3 lg-col-2-5">
        <div >
        <InputField classNames="field__container" 
            label="Criteria" />
        </div>
    </div>
    
</div>


<div  className="next_container">
<SubmitButton label="Next" 
        className="submit_button p-0"
        navigation="/voucherbankdetails"
        // handleSubmit={handleSubmit}
        // setVisiblechange={setVisiblechange}
        // visiblechange={visiblechange}
       

        />
</div>







    </div>
  );
}

export default Createvoucher;
