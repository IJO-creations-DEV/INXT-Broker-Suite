import { Card } from "primereact/card";
import React, { useEffect, useState } from "react";
import DropdownField from "../../../component/DropdwonField";
import InputTextField from "../../../component/inputText";
import { Button } from "primereact/button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import {
  AccountCodes,
  InsuranceCompanyOptions,
  InsurancePolicyTypes,
  ModelVariants,
  ModelYears,
  VehicleBrands,
  VehicleColors,
  VehicleModels, PolicyTypes,
  InstallmentType,
  PremiumCurrency,
  InsurancePolicycontainer,
  pesoTypes
} from "../mock";
import { postPolicyDetailsMiddleware } from "../store/policyDetailsMiddleware";
import { Checkbox } from "primereact/checkbox";
import DialogList from "./DialogList";
import SvgTable from "../../../../assets/icons/SvgTable";
import SvgUpload from "../../../../assets/icons/SvgUpload";
import SvgUploadArrowIcon from "../../../../assets/icons/SvgUploadArrowIcon";

const PolicyDetailsCard = ({ action, flow, }) => {
  const { type } = useParams();
  console.log(action, type, "action111");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValue = {
    InsuranceCompanyName: "",
    InsurancePolicyType: "",
    AccountCode: "",
    VehicleBrand: "",
    ModelYear: "",
    VehicleModel: "",
    ModelVariant: "",
    VehicleColor: "",
    SeatingCapacity: "", PaymentType: "", InstallmentType: "",

  };
  const handleclick = (values) => {
    console.log(action, "action");
    dispatch(postPolicyDetailsMiddleware(values));
    {
      action === "quotedetails"
        ? navigate(`/agent/createquote/coveragedetails/coveragedetail/${123}`)
        : navigate(`/agent/createquote/coveragedetails/coveragecreate/${123}`);
    }
  };
  // const customValidation = (values) => {
  //   const errors = {}
  //   if (!values.PaymentType) {
  //     errors.PaymentType = "This field is required";
  //   }
  //   if (!values.InstallmentType) {
  //     errors.InstallmentType = "This field is required";
  //   }

  //   // if (!values.VehicleBrand) {
  //   //   errors.VehicleBrand = "This field is required";
  //   // }
  //   // if (!values.ModelYear) {
  //   //   errors.ModelYear = "This field is required";
  //   // }
  //   // if (!values.VehicleModel) {
  //   //   errors.VehicleModel = "This field is required";
  //   // }
  //   // if (!values.ModelVariant) {
  //   //   errors.ModelVariant = "This field is required";
  //   // }
  //   // if (!values.VehicleColor) {
  //   //   errors.VehicleColor = "This field is required";
  //   // }

  //   // if (!values.SeatingCapacity) {
  //   //   errors.SeatingCapacity = "This field is required";
  //   // }

  //   return errors
  // }

  const formik = useFormik({
    initialValues: initialValue,
    // validate: customValidation,
    onSubmit: (values) => {
      handleclick(values);
    },
  });

  useEffect(() => {
    if (action === "quotedetails") {
      formik.setFieldValue(
        "InsuranceCompanyName",
        InsuranceCompanyOptions[0].value
      );
    }
    if (action === "quotedetails") {
      formik.setFieldValue(
        "InsurancePolicyType",
        InsurancePolicyTypes[0].value
      );
    }
    if (action === "quotedetails") {
      formik.setFieldValue("AccountCode", AccountCodes[0].value);
    }
    if (action === "quotedetails") {
      formik.setFieldValue("VehicleBrand", VehicleBrands[0].value);
    }
    if (action === "quotedetails") {
      formik.setFieldValue("ModelYear", ModelYears[0].value);
    }
    if (action === "quotedetails") {
      formik.setFieldValue("VehicleModel", VehicleModels[0].value);
    }
    if (action === "quotedetails") {
      formik.setFieldValue("ModelVariant", ModelVariants[0].value);
    }
    if (action === "quotedetails") {
      formik.setFieldValue("VehicleColor", VehicleColors[0].value);
    }
  }, []);
  {/* //changes */ }
  const [checked, setChecked] = useState(false);
  const [paychecked, setPayChecked] = useState(false);
  console.log(formik.values.PaymentType, "check")
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(false);


  const { TableList, leadtabledata, loading } = useSelector(
    ({ policydetailreducer, leadReducers }) => {
      return {
        loading: policydetailreducer?.loading,
        TableList: policydetailreducer?.TableList,
        leadtabledata: leadReducers?.leadtabledata
        // getSearchCountry: countryReducers?.getSearchCountry,
      };
    }
  );
  console.log("checkget2", leadtabledata[leadtabledata.length - 1]?.category);

  const category = leadtabledata[leadtabledata.length - 1]?.category

  const isEmpty = TableList.length === 0;

  const emptyTableIcon = (
    <div>
      <div className="empty-table-icon">
        <SvgTable />
      </div>
      <div className="no__data__found" style={{ textAlign: 'center' }}>No data entered</div>
    </div>
  );
  const Handleinsurance = () => {
    setVisible(true)
  }

  return (
    <div className="policy__details__card__container mt-4">

      <Card>
        <div className="heading__details_add">
          <div className="policy__details__card__container__title">
            {action === "quotedetails" ? "Edit Quote" : "Create Quote"}
          </div>
          {category === "Company" &&
            <div className="card flex flex-wrap justify-content-spacebetween gap-13">
              <Button label="Upload" icon={<SvgUploadArrowIcon />} style={{ gap: '8px',padding:10 }} />
            </div>


          }

        </div>
        {/* //changes */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="policy__details__card__container__sub__title mt-2 mb-2">
            Policy Details
          </div>
          <div className="flex align-items-center">
            <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
            <label className="ml-2">Co-Insurance</label>
          </div>
        </div>
        {checked &&
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ paddingTop: 24, paddingBottom: 28, fontSize: 20, fontWeight: '400', fontFamily: 'Poppins' }}>Participant details</div>
              <Button style={{ marginTop: 24, marginBottom: 24 }} onClick={Handleinsurance}>
                Add Insurance company
              </Button>

            </div>

            <div className="card" style={{ marginBottom: 24 }}>
              <DataTable value={TableList} tableStyle={{ minWidth: '50rem' }} scrollable={true}
                scrollHeight="26vh"
                emptyMessage={isEmpty ? emptyTableIcon : null}
              >
                <Column header="Participant Name" field="ParticipantName" style={{ paddingLeft: 20 }}></Column>
                <Column header="SI Currency" field="SumInsuredcurrency" style={{ paddingLeft: 20 }}></Column>
                <Column header="Premium currency" field="Premiumcurrencys" style={{ paddingLeft: 20 }}></Column>
                <Column header="Share percentage" field="Sharepercentage" style={{ paddingLeft: 20 }}></Column>
              </DataTable>
            </div>

          </div>
        }

        {!checked &&
          <div className="grid mt-2">
            <div className="col-12 md:col-12 lg:col-12">
              <DropdownField
                label="Insurance Company Name"
                value={formik.values.InsuranceCompanyName}
                options={InsuranceCompanyOptions}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("InsuranceCompanyName", e.value);
                }}
                optionLabel="label"
              />

            </div>
          </div>
        }


        <div className="grid mt-2">
          <div className="col-12 md:col-6 lg:col-6">
            <DropdownField
              label="Insurance Policy Type"
              value={formik.values.InsurancePolicyType}
              options={InsurancePolicyTypes}
              onChange={(e) => {
                console.log(e.value);
                formik.setFieldValue("InsurancePolicyType", e.value);
              }}
              optionLabel="label"
            />
            {formik.touched.InsurancePolicyType &&
              formik.errors.InsurancePolicyType && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.InsurancePolicyType}
                </div>
              )}
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <DropdownField
              label="Account Code"
              value={formik.values.AccountCode}
              options={AccountCodes}
              onChange={(e) => {
                console.log(e.value);
                formik.setFieldValue("AccountCode", e.value);
              }}
              optionLabel="label"
            />
            {formik.touched.AccountCode && formik.errors.AccountCode && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.AccountCode}
              </div>
            )}
          </div>
        </div>
        <div className="grid mt-2">
          <div className="col-12 md:col-6 lg:col-6">
            <DropdownField
              label="Payment Type*"
              value={formik.values.PaymentType}
              options={PolicyTypes}
              onChange={(e) => {
                console.log(e.value);
                formik.setFieldValue("PaymentType", e.value);
              }}
              optionLabel="label"
            />
            {formik.touched.PaymentType &&
              formik.errors.PaymentType && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.PaymentType}
                </div>
              )}
          </div>
          {formik.values.PaymentType === "Credit" && <div className="col-12 md:col-6 lg:col-6">
            <div className="flex align-items-center" style={{ alignItems: 'center', display: 'flex', height: 64 }}>
              <Checkbox onChange={e => setPayChecked(e.checked)} checked={paychecked}></Checkbox>
              <label className="ml-2">Pay in Installments</label>
            </div>
          </div>}

        </div>

        {paychecked &&
          <div className="grid mt-2">
            <div className="col-12 md:col-6 lg:col-6">
              <DropdownField
                label="Installment Type*"
                value={formik.values.InstallmentType}
                options={InstallmentType}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("InstallmentType", e.value);
                }}
                optionLabel="label"
              />
              {formik.touched.InstallmentType &&
                formik.errors.InstallmentType && (
                  <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                    {formik.errors.InstallmentType}
                  </div>
                )}
            </div>
          </div>
        }



        <div className="policy__details__card__sub__title mt-2">
          Insurance Vehicle Details
        </div>

        <div className="grid mt-2">
          <div className="col-12 md:col-6 lg:col-6">
            <DropdownField
              label="Vehicle Brand"
              value={formik.values.VehicleBrand}
              options={VehicleBrands}
              onChange={(e) => {
                console.log(e.value);
                formik.setFieldValue("VehicleBrand", e.value);
              }}
              optionLabel="label"
            />
            {formik.touched.VehicleBrand && formik.errors.VehicleBrand && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.VehicleBrand}
              </div>
            )}
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <DropdownField
              label="Model Year"
              value={formik.values.ModelYear}
              options={ModelYears}
              onChange={(e) => {
                console.log(e.value);
                formik.setFieldValue("ModelYear", e.value);
              }}
              optionLabel="label"
            />
            {formik.touched.ModelYear && formik.errors.ModelYear && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.ModelYear}
              </div>
            )}
          </div>
        </div>

        <div className="grid mt-2">
          <div className="col-12 md:col-6 lg:col-6">
            <DropdownField
              label="Vehicle Model"
              value={formik.values.VehicleModel}
              options={VehicleModels}
              onChange={(e) => {
                console.log(e.value);
                formik.setFieldValue("VehicleModel", e.value);
              }}
              optionLabel="label"
            />
            {formik.touched.VehicleModel && formik.errors.VehicleModel && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.VehicleModel}
              </div>
            )}
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <DropdownField
              label="Model Variant"
              value={formik.values.ModelVariant}
              options={ModelVariants}
              onChange={(e) => {
                console.log(e.value);
                formik.setFieldValue("ModelVariant", e.value);
              }}
              optionLabel="label"
            />
            {formik.touched.ModelVariant && formik.errors.ModelVariant && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.ModelVariant}
              </div>
            )}
          </div>
        </div>

        <div className="grid mt-2">
          <div className="col-12 md:col-6 lg:col-6">
            <DropdownField
              label="Vehicle Color"
              value={formik.values.VehicleColor}
              options={VehicleColors}
              onChange={(e) => {
                console.log(e.value);
                formik.setFieldValue("VehicleColor", e.value);
              }}
              optionLabel="label"
            />
            {formik.touched.VehicleColor && formik.errors.VehicleColor && (
              <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                {formik.errors.VehicleColor}
              </div>
            )}
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField
              label="Seating Capacity"
              // value={formik.values.SeatingCapacity}
              value={
                action === "createquote"
                  ? formik.values.SeatingCapacity
                  : "24"
              }
              onChange={formik.handleChange("SeatingCapacity")}
            />
            {formik.touched.SeatingCapacity &&
              formik.errors.SeatingCapacity && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.SeatingCapacity}
                </div>
              )}
          </div>
        </div>
        <div className="policy__details__card__btn__container">
          <div className="next__btn__container">
            <Button
              className="next__btn"
              onClick={() => {
                formik.handleSubmit();
              }}
            >
              Next
            </Button>
          </div>
        </div>
      </Card>

      <DialogList setVisible={setVisible} visible={visible} />
    </div>
  );
};

export default PolicyDetailsCard;
