import React,{useState,useRef, useEffect} from 'react';
import './index.scss';
import { BreadCrumb } from 'primereact/breadcrumb';
import InputField from '../../../../../components/InputField';
import SubmitButton from '../../../../../components/SubmitButton'
import SvgDot from '../../../../../assets/icons/SvgDot';
import DropDowns from '../../../../../components/DropDowns';
import SvgDropdown from '../../../../../assets/icons/SvgDropdown';
import { Button } from 'primereact/button';
import { useNavigate,useParams  } from 'react-router-dom';
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
import { useDispatch, useSelector } from 'react-redux';
import { patchStateEditMiddleware, postAddStateMiddleware } from '../store/stateMiddleware';


const initialValues ={
  StateCode: "",
  StateName: "",
  Description: "",
  Country: "",
  Modifiedby: "",
  ModifiedOn: ""
 
}

function AddState({action}) {
    const toastRef = useRef(null);
    const dispatch = useDispatch();
    const { id } = useParams();
    const [country, setCountry] = useState();
    const Navigate=useNavigate()
    const [departmentcode, setDepartmentCode] = useState(null);
    const [branchcode, setBranchCode] = useState(null);
    const [payeetype, setPayeeType] = useState(null);
    const [criteria, setCriteria] = useState(null);
    const [customercode, setCustomerCode] = useState(null);
    const [transactioncode, setTransactioncode] = useState(null);
    const [selectinstrumentcurrency, setSelectInstrumentCurrency] = useState(null);
    

    const { stateTableList, loading,getStateListById } = useSelector(
      ({ stateReducers }) => {
        return {
          loading: stateReducers?.loading,
          stateTableList: stateReducers?.stateTableList,
          getStateListById:stateReducers?.getStateListById
        };
      }
    );
console.log(getStateListById,"getStateListById");
    const Country = [
        { name: "India", code: "NY" },
        { name: "USA", code: "RM" },
      ];
     
    
    const home = { label: "Master" };
    const items = [
        { label: 'Location' ,url:'/master/finance/exchangerate'},
        { label: `${action === "add"
        ? "Add State"
        : action === "edit"
        ? "Edit State"
        : "Details State"}` },
    ];

    const setFormikValues = () => {
      // const getCorrectionJVEdit = correctionJVList.find((item) => item.id === EditID);
      const Country =getStateListById?.Country
      const updatedValues = {
        id:getStateListById?.id,
        StateCode:getStateListById?.StateCode,
        StateName: getStateListById?.StateName,
        Description:"Description",
        Country:Country,
        Modifiedby:getStateListById?.Modifiedby,
        ModifiedOn: getStateListById?.ModifiedOn
      };
      if (action === "view") {
        if (Country) {
          formik.setValues({ ...formik.values, ...updatedValues });
          formik.setFieldValue("Country", Country);
          setCountry([{ name: Country, code: Country }]);
        }
      } else {
        if (Country) {
          formik.setValues({ ...formik.values, ...updatedValues });
          setCountry([{ name: Country, code: Country }]);
        }
      }
    };
    console.log(action, "action");
  
    useEffect(() => {
      if (action === "view" || action === "edit") {
        setFormikValues()
        console.log(formik.values.CountryName, " formik.values.CountryName");
      }
    }, [getStateListById])

    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 1);

// const handleSubmit=(value)=>{
  
//     Navigate("/master/finance/exchangerate")
// }

// const toastRef = useRef(null);


  const handleSubmitAdd = (values) => {
    const valueWithId = {
      ...values,
      id: stateTableList?.length + 1,
    };
    dispatch(postAddStateMiddleware(valueWithId));

    toastRef.current.showToast();

    setTimeout(() => {
      Navigate("/master/generals/location/state");
    }, 3000);
  };

  const handleSubmitEdit = (values) => {
    dispatch(patchStateEditMiddleware(values));
    console.log("Handle Edit Submission", values);
    setTimeout(() => {
      Navigate("/master/generals/location/state");
    }, 3000);
  };

  const handleSubmit = (values) => {
    if (action === "add") {
      handleSubmitAdd(values);
    } else if (action === "edit") {
      handleSubmitEdit(values);
    }
  };
  
// };

const customValidation = (values) => {
  const errors = {};

  if (!values.StateCode) {
      errors.StateCode = "This field Code is required";
  }
  if (!values.StateName) {
      errors.StateName = "This field is required";
  }
  if (!values.Description) {
      errors.Description = "This field is required";
  }
  if (!values.Country) {
      errors.Country = "This field is required";
  }
  if (!values.Modifiedby) {
      errors.Modifiedby = "This field is required";
  }

  if (!values.ModifiedOn) {
      errors.ModifiedOn = "This field is required";
  }

  return errors;
};

const formik = useFormik({
  initialValues:initialValues,
  validate: customValidation,
  onSubmit: (values) => {
  //   // Handle form submission
     handleSubmit(values);
    
  },
  //  onSubmit:handleSubmit
});

    return (
        <div className='overall__addstate__container'>

            <NavBar/>
            {/* <CustomToast ref={toastRef} 
            // detail="Some detail text"
            // content={"Voucher Details Save Successfully"}
            /> */}
            <CustomToast ref={toastRef} message="State added"/>
            <div>
              <span onClick={() => Navigate(-1)}>
                <SvgBackicon/></span>
            <label className='label_header'>
            {action === "add"
                ? "Add State"
                : action === "edit"
                ? "Edit State"
                : "Details State"}
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
              label="State Code"
              placeholder={"Enter"}
            //   value={formik.values.CurrencyDescription}
            value={
                formik.values.StateCode
                 
              }
              onChange={formik.handleChange("StateCode")}
              disabled={action === "add"
              ? false
              : action === "edit"
                ? false
                : true}
            />
            {formik.touched.StateCode &&
                formik.errors.StateCode && (
                  <div style={{ fontSize: 12, color: "red" }}>
                    {formik.errors.StateCode}
                  </div>
                )}
           
            </div>
          </div>
          <div class="sm-col-12 col-12 md:col-3 lg-col-3">
          <div>
            <InputField
              classNames="field__container"
              label="State Name"
              placeholder={"Enter"}
            //   value={formik.values.CurrencyDescription}
            value={
                formik.values.StateName
                 
              }
              onChange={formik.handleChange("StateName")}
              disabled={action === "add"
              ? false
              : action === "edit"
                ? false
                : true}
            />
            {formik.touched.StateName &&
                formik.errors.StateName && (
                  <div style={{ fontSize: 12, color: "red" }}>
                    {formik.errors.StateName}
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
              disabled={action === "add"
              ? false
              : action === "edit"
                ? false
                : true} 
            />
             {formik.touched.Description &&
                formik.errors.Description && (
                  <div style={{ fontSize: 12, color: "red" }}>
                    {formik.errors.Description}
                  </div>
                )}
           
            </div>
          </div>
        </div>

        <div class="grid">
        <div class="col-3 md:col-3 lg-col-3">
           
        <div>
              <DropDowns
                className="dropdown__container"
                label="Country"
                // value={departmentcode}
                // onChange={(e) => setDepartmentCode(e.value)}
                value={formik.values.Country}
                onChange={(e) =>
                  formik.setFieldValue("Country", e.value)
                }
                options={Country}
                optionLabel="name"
                placeholder={"Select"}
                dropdownIcon={<SvgDropdown color={"#000"} />}
                disabled={action === "add"
                ? false
                : action === "edit"
                  ? false
                  : true}
              />
              {formik.touched.Country &&
                formik.errors.Country && (
                  <div style={{ fontSize: 12, color: "red" }}>
                    {formik.errors.Country}
                  </div>
                )}
            </div>
             
          </div>
          <div class="sm-col-12 col-12 md:col-3 lg-col-3">
          <div>
            <InputField
              classNames="field__container"
              label="Modified By"
              placeholder={"Enter"}
            //   value={formik.values.CurrencyDescription}
            value={
                formik.values.Modifiedby
                
              }
              onChange={formik.handleChange("Modifiedby")}
              disabled={action === "add"
              ? false
              : action === "edit"
                ? false
                : true}
            />
            {formik.touched.Modifiedby &&
                formik.errors.Modifiedby && (
                  <div style={{ fontSize: 12, color: "red" }}>
                    {formik.errors.Modifiedby}
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
              disabled={action === "add"
              ? false
              : action === "edit"
                ? false
                : true}
            />
            {formik.touched.ModifiedOn &&
                formik.errors.ModifiedOn && (
                  <div style={{ fontSize: 12, color: "red" }}>
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
              onClick={()=>{formik.handleSubmit();}} 
              />
            )}
</div>






        </div>
    );
}

export default AddState;
