import React from "react";
import "./index.scss";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import customHistory from "../../../routes/customHistory";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import InputTextField from "../../component/inputText";
import { postaccessoriesMiddleware } from "./store/accessoriesMiddleware";

const initialValue = {
  Aircon: "350.00",
  Stereo: "220.00",
  Magwheels: "150.00",
  Others: "170.00",
  Deductible: "550.00",
  Towing: "110.00",
  RepairLimit: "850.00",
};

const Accessories = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleclick = (values) => {
    dispatch(postaccessoriesMiddleware(values));
    navigate("/agent/createquote/ordersummaryquote");
  };
  const handleBackNavigation = () => {
    customHistory.back();
  };
  // const customValidation = (values) => {
    

  //   const errors = {};
  //   if (!values.Aircon) {
  //     errors.Aircon = "This field is required";
  //   }
  //   if (!values.Stereo) {
  //     errors.Stereo = "This field is required";
  //   }
  //   if (!values.Magwheels) {
  //     errors.Magwheels = "This field is required";
  //   }
  //   if (!values.Others) {
  //     errors.Others = "This field is required";
  //   }
  //   if (!values.Deductible) {
  //     errors.Deductible = "This field is required";
  //   }
  //   if (!values.Towing) {
  //     errors.Towing = "This field is required";
  //   }
  //   if (!values.RepairLimit) {
  //     errors.RepairLimit = "This field is required";
  //   }

  //   return errors;
  // };

  const formik = useFormik({
    initialValues: initialValue,
    // validate: customValidation,
    onSubmit: (values) => {
      handleclick(values);
      // hadlecalculation();
    },
  });

  return (
    <div className="overall__create__quote__accessories">
      <div className="header__title">Leads</div>
      <div className="left__arrow mt-3">
        <SvgLeftArrow />
        <label className="left__arrow__text">Lead ID : 12345678</label>
      </div>
      <form>
        <Card className="mt-4">
          <div className="table__header">Create Quote</div>
          <div className="sub__heading mt-2 mb-2">Accessories</div>
          <div class="grid mt-2">
            <div class="col-6">
              <InputTextField
                label="Aircon"
                value={formik.values.Aircon}
                onChange={formik.handleChange("Aircon")}
              />
              
              {formik.touched.Aircon && formik.errors.Aircon && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.Aircon}
                </div>
              )}
            </div>
            <div class="col-6">
              <InputTextField
                label="Stereo"
                value={formik.values.Stereo}
                onChange={formik.handleChange("Stereo")}
              />
              {formik.touched.Stereo && formik.errors.Stereo && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.Stereo}
                </div>
              )}
            </div>
          </div>

          <div className="grid mt-2">
            <div class="col-6">
              <InputTextField
                label="Mag wheels"
                value={formik.values.Magwheels}
                onChange={formik.handleChange("Magwheels")}
              />
              {formik.touched.Magwheels && formik.errors.Magwheels && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.Magwheels}
                </div>
              )}
            </div>
            <div class="col-6">
              <InputTextField
                label="Others"
                value={formik.values.Others}
                onChange={formik.handleChange("Others")}
              />
              {formik.touched.Others && formik.errors.Others && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.Others}
                </div>
              )}
            </div>
          </div>
          <div className="sub__heading mt-2 mb-2">Policy Limits</div>
          <div class="grid mt-2">
            <div class="col-6">
              <InputTextField
                label="Deductible"
                value={formik.values.Deductible}
                onChange={formik.handleChange("Deductible")}
              />
              {formik.touched.Deductible && formik.errors.Deductible && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.Deductible}
                </div>
              )}
            </div>
            <div class="col-6">
              <InputTextField
                label="Towing"
                value={formik.values.Towing}
                onChange={formik.handleChange("Towing")}
              />
              {formik.touched.Towing && formik.errors.Towing && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.Towing}
                </div>
              )}
            </div>
          </div>
          <div class="grid mt-2">
            <div class="col-6">
              <InputTextField
                label="Repair Limit"
                value={formik.values.RepairLimit}
                onChange={formik.handleChange("RepairLimit")}
              />
              {formik.touched.RepairLimit && formik.errors.RepairLimit && (
                <div style={{ fontSize: 12, color: "red" }} className="mt-3">
                  {formik.errors.RepairLimit}
                </div>
              )}
            </div>
          </div>
          <div class="grid mt-2">
            <div className="back__button__container col-12 md:col-12 lg:col-12">
              <div className="back__text__container">
                <Button
                  label="Back"
                  className="back__btn"
                  onClick={handleBackNavigation}
                />
              </div>
              <div className="next__text__container">
                <Button
                  onClick={() => {
                    formik.handleSubmit();
                  }}
                  label="Next"
                  className="next__btn"
                />
              </div>
            </div>
            {/* <div className="next__text__container">
              <Button
               
                onClick={formik.handleSubmit}
                label="Next"
                className="next__btn"
              />
            </div> */}
          </div>
        </Card>
      </form>
    </div>
  );
};

export default Accessories;
