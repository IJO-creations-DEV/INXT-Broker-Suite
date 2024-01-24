import { BreadCrumb } from "primereact/breadcrumb";
import React, { useRef, useState, useEffect } from "react";
import NavBar from "../../../../../components/NavBar";
import SvgDot from "../../../../../assets/icons/SvgDot";
import "./index.scss";
import InputField from "../../../../../components/InputField";
import { Button } from "primereact/button";
import { useFormik } from "formik";
import SvgBack from "../../../../../assets/icons/SvgBack";
import CustomToast from "../../../../../components/Toast";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getHirarchyListByIdMiddleware,
  patchHirarchyEditMiddleware,
  postAddHirarchyMiddleware,
} from "../store/hierarchyMiddleware";
import moment from "moment";

const AddHierarchy = ({ action }) => {
  const { id } = useParams();
  console.log(id, "find actions");

  const { hierarchyListDetails, loading, total } = useSelector(
    ({ hierarchyTableReducers }) => {
      return {
        loading: hierarchyTableReducers?.loading,
        hierarchyListDetails: hierarchyTableReducers?.hierarchListDetails,
        total: hierarchyTableReducers,
      };
    }
  );
  console.log(total, "find id");
  const navigate = useNavigate();
  const toastRef = useRef(null);
  const [visiblePopup, setVisiblePopup] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (action === "edit" || action === "view") {
      dispatch(getHirarchyListByIdMiddleware(id)).then(() => {
        setFormikValues();
      });
    }
  }, [action, id]);
  useEffect(() => {
    setFormikValues();
  }, [hierarchyListDetails]);
  const items = [
    { label: "Employee Management" },

    {
      label: `${
        action === "add"
          ? "Add Hierarchy"
          : action === "edit"
          ? "Edit Hierarchy"
          : "View Hierarchy"
      }`,
    },
  ];
  const home = { label: "Master" };

  const initialValue = {
    rankCode: "",
    rankName: "",
    description: "",
    levelNumber: "",
    modifiedBy: "",
    modifiedOn: "",
  };
  const validate = (values) => {
    const errors = {};
    console.log(values, errors, "values");
    if (!values.rankCode) {
      errors.rankCode = "Rank Code is required";
    }
    if (!values.rankName) {
      errors.rankName = "Rank Name is required";
    }

    if (!values.levelNumber) {
      errors.levelNumber = "Level number is required";
    }

    return errors;
  };
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);

  const handleSubmit = (values) => {
    console.log(values, "asddd");
    if (action == "edit") {
      dispatch(patchHirarchyEditMiddleware({ ...values, id }));
    } else {
      dispatch(postAddHirarchyMiddleware(values));
    }
    toastRef.current.showToast();

    setTimeout(() => {
      setVisiblePopup(false);
    }, 3000);
    navigate("/master/generals/employeemanagement/hierarchy/");
  };
  console.log(hierarchyListDetails, "hierarcy details");
  const setFormikValues = () => {
    const rankCode = hierarchyListDetails?.rankCode;
    const rankName = hierarchyListDetails?.rankName;
    const description = "description";
    const levelNumber = hierarchyListDetails?.levelNumber;
    const modifiedBy = hierarchyListDetails?.modifiedBy;
    const modifiedOn = moment().format("DD/MM/YYYY");

    const updatedValues = {
      rankCode: `${rankCode}`,
      rankName: `${rankName}`,
      description: `${description}`,
      levelNumber: `${levelNumber}`,
      modifiedBy: `${modifiedBy}`,
      modifiedOn: `${modifiedOn}`,
    };
    formik.setValues({ ...formik.values, ...updatedValues });
  };

  const formik = useFormik({
    initialValues: initialValue,
    validate,
    onSubmit: handleSubmit,
  });
  return (
    <div className="grid add__hierarchy__container">
      <div className="add_backbut_container">
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <span onClick={() => navigate(-1)}>
          <SvgBack />
        </span>
      </div>
      <div className="add__sub__title">
        {action === "add"
          ? "Add Hierarchy"
          : action === "edit"
          ? "Edit Hierarchy"
          : "View Hierarchy"}
      </div>
      </div>
      <div className="col-12 mb-2 mt-2">
          <BreadCrumb
            home={home}
            className="breadCrums__view__add__screen"
            model={items}
            separatorIcon={<SvgDot color={"#000"} />}
          />
       
      </div>
      <div className="col-12 m-0 ">
        <div className="grid add__account__sub__container p-3">
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
              disabled={action === "view" ? true : false}
              value={formik.values.rankCode}
              onChange={formik.handleChange("rankCode")}
              error={formik.errors.rankCode}
              label="Rank Code"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
              disabled={action === "view" ? true : false}
              value={formik.values.rankName}
              onChange={formik.handleChange("rankName")}
              error={formik.errors.rankName}
              label="Rank Name"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>

          <div className="col-12 md:col-3 lg:col-6">
            <InputField
              disabled={action === "view" ? true : false}
              value={formik.values.description}
              onChange={formik.handleChange("description")}
              error={formik.errors.basis}
              label="Description"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
              disabled={action === "view" ? true : false}
              value={formik.values.levelNumber}
              onChange={formik.handleChange("levelNumber")}
              error={formik.errors.levelNumber}
              label="Level Number"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>
          {/* <div className="col-12 md:col-3 lg:col-3">
            <InputField
             disabled={action === "view" ? true : false}
              value={formik.values.modifiedBy}
              onChange={formik.handleChange("modifiedBy")}
              error={formik.errors.modifiedBy}
              label="Modified By"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div>

          <div className="col-12 md:col-3 lg:col-3">
            <InputField
             disabled={action === "view" ? true : false}
              value={formik.values.modifiedOn}
              onChange={formik.handleChange("modifiedOn")}
              error={formik.errors.modifiedOn}
              label="Modified On"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              placeholder="Enter"
            />
          </div> */}
        </div>
      </div>
      <div className="col-12 btn__view__Add mt-2">
        {action === "add" && (
          <Button
            label="Save"
            className="save__add__btn"
            onClick={() => {
              formik.handleSubmit();
            }}
            disabled={!formik.isValid}
          />
        )}
        {action === "edit" && (
          <Button
            className="save__add__btn"
            disabled={!formik.isValid}
            onClick={formik.handleSubmit}
          >
            Update
          </Button>
        )}
      </div>
      <CustomToast ref={toastRef} message="Hierarchy H1234 is added" />
    </div>
  );
};
export default AddHierarchy;
