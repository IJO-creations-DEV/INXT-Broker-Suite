import { BreadCrumb } from "primereact/breadcrumb";
import React, { useEffect, useState, useRef } from "react";
import NavBar from "../../../../components/NavBar";
import SvgDot from "../../../../assets/icons/SvgDot";
import "../AddPettyCash/index.scss";
import DropDowns from "../../../../components/DropDowns";
import InputField from "../../../../components/InputField";
import { Button } from "primereact/button";
import SuccessIcon from "../../../../assets/icons/SuccessIcon";
import SvgDropdown from "../../../../assets/icons/SvgDropdown";
import { useFormik } from "formik";
import ArrowLeftIcon from "../../../../assets/icons/ArrowLeftIcon";
import CustomToast from "../../../../components/Toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  pettyCashMaster,
  postAddPettyCash,
} from "../store/pettyCashMasterMiddleWare";

const AddPettyCash = () => {
  const { pettyCashList, loading } = useSelector(
    ({ pettyCashMainReducers }) => {
      return {
        loading: pettyCashMainReducers?.loading,
        pettyCashList: pettyCashMainReducers?.pettyCashList,
      };
    }
  );
  console.log(pettyCashList, "pettyCashList");
  const navigate = useNavigate();
  const toastRef = useRef(null);
  const [visiblePopup, setVisiblePopup] = useState(false);
  const items = [
    { label: "Petty Cash", url: "/master/finance/pettycash" },
    { label: "Add Petty Cash", url: "/master/finance/pettycash/addpettycash" },
  ];
  const home = { label: "Master" };
  useEffect(() => {
    const timerId = setTimeout(() => {
      setVisiblePopup(false);
    }, 2000);

    return () => clearTimeout(timerId);
  }, [visiblePopup]);
  const handleGoBack = () => {
    navigate("/master/finance/pettycash");
  };

  const [step, setStep] = useState(0);
  const customValidation = (values) => {
    const errors = {};

    if (!values.pettycashcode) {
      errors.pettycashcode = "This field Code is required";
    }

    if (!values.pettycashname) {
      errors.pettycashname = "This field is required";
    }
    if (!values.pettycashsize) {
      errors.pettycashsize = "This field is required";
    }
    if (!values.avilabelcash) {
      errors.avilabelcash = "This field is required";
    }
    if (!values.minicashbox) {
      errors.minicashbox = "This field is required";
    }
    if (!values.transactionlimit) {
      errors.transactionlimit = "This field is required";
    }

    return errors;
  };
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    const valueWithId = {
      ...values,
      id: pettyCashList?.length + 1,
    };
    dispatch(postAddPettyCash(valueWithId))
      .then(() => {
        toastRef.current.showToast();
        setTimeout(() => {
          navigate(`/master/finance/pettycash`);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const formik = useFormik({
    initialValues: {
      pettycashcode: "",
      pettycashname: "",
      pettycashsize: "",
      avilabelcash: "",
      minicashbox: "",
      transactionlimit: "",
    },
    validate: customValidation,
    onSubmit: (values) => {
      handleSubmit(values);
      setStep(1);
    },
  });
  return (
    <div className="grid petty__add__container">
      <div className="col-12"></div>
      <div className="col-12">
        <CustomToast ref={toastRef} message="Add Petty Cash" />
      </div>
      <div className="col-12 mb-2">
        <div className="add__sub__title mr-2">
          <div onClick={handleGoBack} className="mr-2 mt-1">
            <ArrowLeftIcon />
          </div>
          Add Petty Cash
        </div>
        <div className="mt-3">
          <BreadCrumb
            home={home}
            className="breadCrums__view__add__screen"
            model={items}
            separatorIcon={<SvgDot color={"#000"} />}
          />
        </div>
      </div>
      <div className="grid card__container p-2 m-1">
        <div className="col-12 md:col-3 lg:col-3 xl:col-3 input__view__reversal">
          <InputField
            classNames="input__field__reversal__inactive"
            className={"input__label__reversal"}
            label="Petty Cash Code"
            placeholder="Enter"
            value={formik.values.pettycashcode}
            onChange={(e) =>
              formik.setFieldValue("pettycashcode", e.target.value)
            }
          />
          {formik.touched.pettycashcode && formik.errors.pettycashcode && (
            <div style={{ fontSize: 12, color: "red" }}>
              {formik.errors.pettycashcode}
            </div>
          )}
        </div>
        <div className="col-12 md:col-3 lg:col-3 xl:col-3 input__view__reversal">
          <InputField
            classNames="input__field__reversal__inactive"
            className={"input__label__reversal"}
            label="Petty Cash Name"
            placeholder="Enter"
            value={formik.values.pettycashname}
            onChange={(e) =>
              formik.setFieldValue("pettycashname", e.target.value)
            }
          />
          {formik.touched.pettycashname && formik.errors.pettycashname && (
            <div style={{ fontSize: 12, color: "red" }}>
              {formik.errors.pettycashname}
            </div>
          )}
        </div>
        <div className="col-12 md:col-3 lg:col-3 xl:col-3 input__view__reversal">
          <InputField
            classNames="input__field__reversal__inactive"
            className={"input__label__reversal"}
            label="Petty Cash Size"
            placeholder="Enter"
            value={formik.values.pettycashsize}
            onChange={(e) =>
              formik.setFieldValue("pettycashsize", e.target.value)
            }
          />
          {formik.touched.pettycashsize && formik.errors.pettycashsize && (
            <div style={{ fontSize: 12, color: "red" }}>
              {formik.errors.pettycashsize}
            </div>
          )}
        </div>
        <div className="col-12 md:col-3 lg:col-3 xl:col-3 input__view__reversal">
          <InputField
            classNames="input__field__reversal__inactive"
            className={"input__label__reversal"}
            label="Available Cash"
            placeholder="Enter"
            value={formik.values.avilabelcash}
            onChange={(e) =>
              formik.setFieldValue("avilabelcash", e.target.value)
            }
          />
          {formik.touched.avilabelcash && formik.errors.avilabelcash && (
            <div style={{ fontSize: 12, color: "red" }}>
              {formik.errors.avilabelcash}
            </div>
          )}
        </div>
        <div className="col-12 md:col-3 lg:col-3 xl:col-3 input__view__reversal">
          <InputField
            classNames="input__field__reversal__inactive"
            className={"input__label__reversal"}
            label="Minimum Cash Box"
            placeholder="Enter"
            value={formik.values.minicashbox}
            onChange={(e) =>
              formik.setFieldValue("minicashbox", e.target.value)
            }
          />
          {formik.touched.minicashbox && formik.errors.minicashbox && (
            <div style={{ fontSize: 12, color: "red" }}>
              {formik.errors.minicashbox}
            </div>
          )}
        </div>
        <div className="col-12 md:col-3 lg:col-3 xl:col-3 input__view__reversal">
          <InputField
            classNames="input__field__reversal__inactive"
            className={"input__label__reversal"}
            label="Transaction Limit"
            placeholder="Enter"
            value={formik.values.transactionlimit}
            onChange={(e) =>
              formik.setFieldValue("transactionlimit", e.target.value)
            }
          />
          {formik.touched.transactionlimit &&
            formik.errors.transactionlimit && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.transactionlimit}
              </div>
            )}
        </div>
      </div>
      <div className="col-12 btn__view__Add mt-2">
        <Button
          label="Save"
          className="save__add__btn"
          disabled={!formik.isValid}
          onClick={formik.handleSubmit}
        />
      </div>
    </div>
  );
};
export default AddPettyCash;
