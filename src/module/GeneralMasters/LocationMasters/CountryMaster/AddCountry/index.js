import React,{useState,useRef} from 'react';
import './index.scss';
import { BreadCrumb } from 'primereact/breadcrumb';
import InputField from '../../../../../components/InputField';
import SubmitButton from '../../../../../components/SubmitButton'
import SvgDot from '../../../../../assets/icons/SvgDot';
import DropDowns from '../../../../../components/DropDowns';
import SvgDropdown from '../../../../../assets/icons/SvgDropdown';
import { Button } from 'primereact/button';
import { useNavigate, useParams  } from 'react-router-dom';
import NavBar from '../../../../../components/NavBar';
import SvgBackicon from '../../../../../assets/icons/SvgBackicon';
import { Card } from "primereact/card";
import DatePicker from '../../../../../components/DatePicker';
import { Calendar } from 'primereact/calendar';
import LabelWrapper from '../../../../../components/LabelWrapper';
import { useFormik } from "formik";
import { Toast } from 'primereact/toast';
import CustomToast from "../../../../../components/Toast";
import { InputText } from "primereact/inputtext";


const initialValues ={
    CountryName: "",
    ISOCode: "",
    Description: "",
    PhoneCode: "",
    ModifiedBy: "",
    ModifiedOn: ""
}

function AddExchange({ action }) {
    const { id } = useParams();
    console.log("first",id,action)
    const toastRef = useRef(null);
    const [date, setDate] = useState(null);
    const Navigate=useNavigate()
    
    
   
    
    const home = { label: "Master" };
    const items = [
        { label: 'Location' ,url:'/master/finance/exchangerate'},
        { label: `${action === "add"
        ? "Add Country"
        : action === "edit"
        ? "Edit Country"
        : "Country Details"}` },
    ];

    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 1);

// const handleSubmit=(value)=>{
  
//     Navigate("/master/finance/exchangerate")
// }

// const toastRef = useRef(null);

const handleSubmit = (values) => {
  // Handle form submission
  console.log(values, "find values");
  
  toastRef.current.showToast();
  // {
    setTimeout(() => {
    Navigate("/master/generals/location/country")
    }, 3000);
  }
  
// };

const customValidation = (values) => {
    const errors = {};

    if (!values.CountryName) {
        errors.CountryName = "This field Code is required";
    }
    if (!values.ISOCode) {
        errors.ISOCode = "This field is required";
    }
    if (!values.Description) {
        errors.Description = "This field is required";
    }
    // if (!values.PhoneCode) {
    //     errors.PhoneCode = "This field is required";
    // }
    if (!values.ModifiedBy) {
        errors.ModifiedBy = "This field is required";
    }

    if (!values.ModifiedOn) {
        errors.ModifiedOn = "This field is required";
    }

    return errors;
};


const formik = useFormik({
  initialValues:initialValues,
  validate: customValidation,
  // onSubmit: (values) => {
  //   // Handle form submission
  //    handleSubmit(values);
    
  // },
   onSubmit:handleSubmit
});

    return (
        <div className='overall__addcountry__container'>

            <NavBar/>
            {/* <CustomToast ref={toastRef} 
            // detail="Some detail text"
            // content={"Voucher Details Save Successfully"}
            /> */}
            <CustomToast ref={toastRef} message="Country added"/>
            <div>
              <span onClick={() => Navigate(-1)}>
                <SvgBackicon/></span>
            <label className='label_header'>
            {action === "add"
                ? "Add Country"
                : action === "edit"
                ? "Edit Country"
                : "Country Details"}
                
                </label>
            </div>
            <BreadCrumb
                model={items}
                home={home}
                className='breadcrumbs_container'
                separatorIcon={<SvgDot color={"#000"} />} />


            


<Card>
        
        <div class="grid">
          <div class="sm-col-12 col-12 md:col-3 lg-col-3">
          <div>
            <InputField
              classNames="field__container"
              label="Country Name"
              placeholder={"Enter"}
            //   value={formik.values.CurrencyDescription}
            value={
                formik.values.CountryName
                 
              }
              onChange={formik.handleChange("CountryName")}
              
            />
             {formik.touched.CountryName && formik.errors.CountryName && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.CountryName}
              </div>
            )}
           
            </div>
          </div>
          <div class="sm-col-12 col-12 md:col-3 lg-col-3">
          <div>
            <InputField
              classNames="field__container"
              label="ISO Code"
              placeholder={"Enter"}
            //   value={formik.values.CurrencyDescription}
            value={
                formik.values.ISOCode
                 
              }
              onChange={formik.handleChange("ISOCode")}
              
            />
             {formik.touched.ISOCode && formik.errors.ISOCode && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.ISOCode}
              </div>
            )}
           
            </div>
          </div>
          <div class="sm-col-12 col-12 md:col-6 lg-col-6">
            <div>
            <InputField
              classNames="field__container"
              label="Description"
              placeholder={"Enter"}
            //   value={formik.values.CurrencyDescription}
            value={
                formik.values.Description
                
              }
              onChange={formik.handleChange("Description")}
              
            />
             {formik.touched.Description && formik.errors.Description && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.Description}
              </div>
            )}
           
            </div>
          </div>
        </div>

        <div class="grid">
        <div class="col-3 md:col-3 lg-col-3">
            <label className='label_text'>Phone Code</label>
          <div className="p-inputgroup flex-1">
            
        <span className="p-inputgroup-addon">
          <div>+91</div>
          <i className={<SvgDropdown/>}></i>
        </span>
        <InputText placeholder="enter"
        value={formik.values.PhoneNumber}
        onChange={formik.handleChange("PhoneNumber")}
        />
      </div>
             {/* {formik.touched.PhoneCode && formik.errors.PhoneCode && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.PhoneCode}
              </div>
            )} */}
          </div>
          <div class="sm-col-12 col-12 md:col-3 lg-col-3">
          <div>
            <InputField
              classNames="field__container"
              label="Modified By"
              placeholder={"Enter"}
            //   value={formik.values.CurrencyDescription}
            value={
                formik.values.ModifiedBy
                
              }
              onChange={formik.handleChange("ModifiedBy")}
              
            />
             {formik.touched.ModifiedBy && formik.errors.ModifiedBy && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.ModifiedBy}
              </div>
            )}
           
            </div>
          </div>
          <div class="sm-col-12 col-12 md:col-3 lg-col-3">
            <div>
            <InputField
              classNames="field__container"
              label="Modified On"
              placeholder={"Enter"}
            //   value={formik.values.CurrencyDescription}
            value={
                formik.values.ModifiedOn
                
              }
              onChange={formik.handleChange("ModifiedOn")}
              
            />
             {formik.touched.ModifiedOn && formik.errors.ModifiedOn && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.ModifiedOn}
              </div>
            )}
           
            </div>
          </div>
        </div>

        
        
        
      </Card>


            <div className="next_container">
            {action === "add" && ( 
                <Button className="submit_button p-0" label="Save"  disabled={!formik.isValid}
                onClick={()=>{formik.handleSubmit();}} 
                />
            )}
            </div>
            <div className="next_container">
            {action === "edit" && ( 
                <Button className="submit_button p-0" label="Update"  disabled={!formik.isValid}
                // onClick={()=>{formik.handleSubmit();}} 
                />
            )}
            </div>








        </div>
    );
}

export default AddExchange;
