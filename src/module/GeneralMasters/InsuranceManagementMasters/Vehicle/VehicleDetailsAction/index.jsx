import React, { useState, useRef, useEffect } from "react";
import "./index.scss";
import NavBar from "../../../../../components/NavBar";
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../../../../assets/icons/SvgDot";
import InputField from "../../../../../components/InputField";
import { useFormik } from "formik";
import { Button } from "primereact/button";
import { useNavigate, useParams } from "react-router-dom";
import CustomToast from "../../../../../components/Toast";
import SvgBackicon from "../../../../../assets/icons/SvgBackicon";
import { useSelector, useDispatch } from "react-redux";
import {
  patchInsuranceVehicleMiddleWare,
  postInsuranceVehicleMiddleWare,
} from "../store/insuranceVehicleMiddleware";

const VehicleDetailsAction = ({ action }) => {
  const dispatch = useDispatch();
  const { InsuranceVehicleList, loading } = useSelector(
    ({ insuranceVehicleReducers }) => {
      return {
        loading: insuranceVehicleReducers?.loading,
        InsuranceVehicleList: insuranceVehicleReducers?.InsuranceVehicleList,
      };
    }
  );
  console.log(action, "find action");
  const { id } = useParams();
  console.log(id, "find route id");
  const toastRef = useRef(null);
  const navigation = useNavigate();

  useEffect(() => {
    if (action === "edit" || action === "view") {
      if (id != null) {
        const FilteredList = InsuranceVehicleList.filter(
          (data) => data.id === parseInt(id)
        );
        setFormikValues(FilteredList);
      }
    }
  }, [action]);
  const items = [
    {
      label: "Insurance Management",
      url: "/master/generals/insurancemanagement/insurancecompany",
    },
    {
      label: "Vehicle",
      url: "/master/generals/insurancemanagement/vehicle",
    },

    {
      label: `${
        action === "add"
          ? "Add Vehicle"
          : action === "edit"
          ? "Edit Vehicle"
          : "View Vehicle"
      }`,
    },
  ];
  const home = { label: "Master" };

  const customValidation = (values) => {
    const errors = {};

    if (!values.vehicleCode) {
      errors.vehicleCode = "This field is required";
    }
    if (!values.vehicleName) {
      errors.vehicleName = "This field is required";
    }
    if (!values.vehicleVariant) {
      errors.vehicleVariant = "This field is required";
    }

    if (!values.vehicleModel) {
      errors.vehicleModel = "This field is required";
    }
    if (!values.vehicleBrand) {
      errors.vehicleBrand = "This field is required";
    }

    if (!values.seatingCapacity) {
      errors.seatingCapacity = "This field is required";
    }

    return errors;
  };
  const handleSubmit = (values) => {
    // Handle form submission
    if (action === "add") {
      const valueWithId = {
        ...values,
        id: InsuranceVehicleList?.length + 1,
      };
      console.log(valueWithId, "find valueWithId");
      dispatch(postInsuranceVehicleMiddleWare(valueWithId));
      toastRef.current.showToast();

      {
        setTimeout(() => {
          navigation("/master/generals/insurancemanagement/vehicle");
          formik.resetForm();
        }, 3000);
      }
    } else if (action === "edit") {
      dispatch(patchInsuranceVehicleMiddleWare(values));
      navigation("/master/generals/insurancemanagement/vehicle");
    } else {
      navigation("/master/generals/insurancemanagement/vehicle");
    }

    console.log(values, "find values");
  };
  const setFormikValues = (data) => {
    const vehicleCode = data[0]?.vehicleCode;
    const vehicleName = data[0]?.vehicleName;
    const vehicleVariant = data[0]?.vehicleVariant;
    const vehicleModel = data[0]?.vehicleModel;
    const vehicleBrand = data[0]?.vehicleBrand;
    const seatingCapacity = data[0]?.seatingCapacity;

    const updatedValues = {
      id: id,
      vehicleCode: `${vehicleCode}`,
      vehicleName: `${vehicleName}`,
      vehicleVariant: `${vehicleVariant}`,
      vehicleModel: `${vehicleModel}`,
      vehicleBrand: `${vehicleBrand}`,
      seatingCapacity: `${seatingCapacity}`,
    };
    formik.setValues({ ...formik.values, ...updatedValues });
  };
  const formik = useFormik({
    initialValues: {
      vehicleCode: "",
      vehicleName: "",
      vehicleVariant: "",
      vehicleModel: "",
      vehicleBrand: "",
      seatingCapacity: "",
    },
    validate: customValidation,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  return (
    <div className="action__vehicle_container">
      <div className="grid m-0 top-container">
        <CustomToast ref={toastRef} message="Vehicle Code VC1234 is added" />
        <div className="col-12 p-0"></div>
        <div className="col-12 p-0">
          <div className="svgback_container">
            <span onClick={() => navigation(-1)}>
              <SvgBackicon />
            </span>
            <div className="main__account__title">
              {action === "add"
                ? "Add Vehicle"
                : action === "edit"
                ? "Edit Vehicle"
                : "View Vehicle"}
            </div>
          </div>
        </div>
        <div className="col-12 p-0">
          <BreadCrumb
            home={home}
            className="breadCrums__view__reversal"
            model={items}
            separatorIcon={<SvgDot color={"#000"} />}
          />
        </div>
      </div>
      <div className="card__container">
        <div className="grid m-0 p-0">
          <div className="col-12 md:col-3 lg:col-3 xl:col-3 ">
            <InputField
              disabled={action === "view" ? true : false}
              classNames="input__field__corrections"
              className="input__label__corrections"
              placeholder="Enter"
              label="Vehicle Code"
              value={formik.values.vehicleCode}
              onChange={(e) =>
                formik.setFieldValue("vehicleCode", e.target.value)
              }
            />
            {formik.touched.vehicleCode && formik.errors.vehicleCode && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.vehicleCode}
              </div>
            )}
          </div>
          <div className="col-12 md:col-3 lg:col-3 xl:col-3 ">
            <InputField
              disabled={action === "view" ? true : false}
              classNames="input__field__corrections"
              className="input__label__corrections"
              placeholder="Enter"
              label="Vehicle Name"
              value={formik.values.vehicleName}
              onChange={(e) =>
                formik.setFieldValue("vehicleName", e.target.value)
              }
            />
            {formik.touched.vehicleName && formik.errors.vehicleName && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.vehicleName}
              </div>
            )}
          </div>
          <div className="col-12 md:col-3 lg:col-3 xl:col-3 ">
            <InputField
              disabled={action === "view" ? true : false}
              classNames="input__field__corrections"
              className="input__label__corrections"
              placeholder="Enter"
              label="Vehicle Variant"
              value={formik.values.vehicleVariant}
              onChange={(e) =>
                formik.setFieldValue("vehicleVariant", e.target.value)
              }
            />
            {formik.touched.vehicleVariant && formik.errors.vehicleVariant && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.vehicleVariant}
              </div>
            )}
          </div>
          <div className="col-12 md:col-3 lg:col-3 xl:col-3 ">
            <InputField
              disabled={action === "view" ? true : false}
              classNames="input__field__corrections"
              className="input__label__corrections"
              placeholder="Enter"
              label="Vehicle Model"
              value={formik.values.vehicleModel}
              onChange={(e) =>
                formik.setFieldValue("vehicleModel", e.target.value)
              }
            />
            {formik.touched.vehicleModel && formik.errors.vehicleModel && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.vehicleModel}
              </div>
            )}
          </div>
          <div className="col-12 md:col-3 lg:col-3 xl:col-3 ">
            <InputField
              disabled={action === "view" ? true : false}
              classNames="input__field__corrections"
              className="input__label__corrections"
              placeholder="Enter"
              label="Vehicle Brand"
              value={formik.values.vehicleBrand}
              onChange={(e) =>
                formik.setFieldValue("vehicleBrand", e.target.value)
              }
            />
            {formik.touched.vehicleBrand && formik.errors.vehicleBrand && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.vehicleBrand}
              </div>
            )}
          </div>
          <div className="col-12 md:col-3 lg:col-3 xl:col-3 ">
            <InputField
              disabled={action === "view" ? true : false}
              classNames="input__field__corrections"
              className="input__label__corrections"
              placeholder="Enter"
              label="Seating Capacity"
              value={formik.values.seatingCapacity}
              onChange={(e) =>
                formik.setFieldValue("seatingCapacity", e.target.value)
              }
            />
            {formik.touched.seatingCapacity &&
              formik.errors.seatingCapacity && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.seatingCapacity}
                </div>
              )}
          </div>
        </div>
      </div>
      <div className="flex justify-content-end mt-5">
        {action === "add" && (
          <Button
            className="save__action"
            disabled={!formik.isValid}
            onClick={formik.handleSubmit}
          >
            Save
          </Button>
        )}
        {action === "edit" && (
          <Button
            className="save__action"
            disabled={!formik.isValid}
            onClick={formik.handleSubmit}
          >
            Update
          </Button>
        )}
      </div>
    </div>
  );
};

export default VehicleDetailsAction;
